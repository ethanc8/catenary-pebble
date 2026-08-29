#include "pebble.h"

#include "nanopb/pb_decode.h"
#include "nanopb/pb_encode.h"
#include "proto/departures_board.pb.h"

#include "util/comm.h"

#ifndef FOR_EMULATOR
#define FOR_EMULATOR 0
#endif

#if _CLANGD
  #define PBL_DISPLAY_HEIGHT 228
#endif

#define NUM_MENU_SECTIONS 2

enum {
  MenuSection_Preface = 0,
  MenuSection_Preface_NumItems = 2,

  MenuSection_Preface_ModeSelection = 0,
  // MenuSection_Preface_TimeSelection = 1,
  MenuSection_Preface_Alerts = 1,

  MenuSection_Departures = 1,
  // MenuSection_Departures_NumItems = 3, // See s_response.stop_events_count instead
};

// https://github.com/coredevices/PebbleOS/blob/eb6dab30c944b115094d3a6dc2b71247f92aa8f4/src/fw/applib/ui/menu_layer_system_cells.c#L30
#define MENU_CELL_SMALL_BASIC_CELL_HEIGHT 44
#define MENU_CELL_LARGE_BASIC_CELL_HEIGHT 61

#define MENU_CELL_SMALL_SMALL_CELL_HEIGHT 34
#define MENU_CELL_LARGE_SMALL_CELL_HEIGHT 42

// Small is 180 and large is 228
#define LARGE_SCREEN_SIZE_CUTOFF 201

static Window* s_main_window = NULL;
static Window* s_loading_window = NULL;
static MenuLayer* s_menu_layer;

static int s_current_icon = 0;

static GBitmap* s_ICON_PBL_WARNING_25;
static GBitmap* s_ICON_T_TRAIN_25;

static DeparturesBoardResponse s_response;

static DeparturesBoardRequest s_request;

static uint8_t s_request_buffer[APP_MESSAGE_OUTBOX_SIZE];

static struct tm* tm_from_time_timezone(time_t time, time_t timezone_offset) {
  time_t adjusted = time + timezone_offset;
  return gmtime(&adjusted);
}

// MARK: - Main menu

static uint16_t menu_get_num_sections_callback(MenuLayer *menu_layer, void *data) {
  return NUM_MENU_SECTIONS;
}

static uint16_t menu_get_num_rows_callback(MenuLayer *menu_layer, uint16_t section_index, void *data) {
  switch (section_index) {
    case MenuSection_Preface:
      return MenuSection_Preface_NumItems;
    case MenuSection_Departures:
      return s_response.stop_events_count;
    default:
      return 0;
  }
}

static int16_t menu_get_header_height_callback(MenuLayer *menu_layer, uint16_t section_index, void *data) {
  switch(section_index) {
    case MenuSection_Preface:
      return MENU_CELL_BASIC_HEADER_HEIGHT;
    case MenuSection_Departures:
      return MENU_CELL_BASIC_HEADER_HEIGHT;
    default:
      return 0;
  }
}

static void menu_draw_header_callback(GContext* ctx, const Layer *cell_layer, uint16_t section_index, void *data) {
  switch(section_index) {
    case MenuSection_Preface: {
      menu_cell_basic_header_draw(ctx, cell_layer, s_response.stop.stop_name);
    } break;
    case MenuSection_Departures: {
      menu_cell_basic_header_draw(ctx, cell_layer, "Departures + Arrivals");
    } break;
  }
}

static void menu_draw_row_callback(GContext* ctx, const Layer *cell_layer, MenuIndex *cell_index, void *data) {
  switch(cell_index->section) {
    case MenuSection_Preface:
      switch (cell_index->row) {
        case MenuSection_Preface_ModeSelection: {
          struct tm* displayed_time = tm_from_time_timezone(s_request.greater_than_time, s_response.stop.timezone_offset);

          char time_str[32];
          if(clock_is_24h_style()) {
            strftime(time_str, 32, "After %b-%d %H:%M", displayed_time);
          } else {
            strftime(time_str, 32, "After %b-%d %I:%M %P", displayed_time);
          }

          menu_cell_basic_draw(ctx, cell_layer, "Showing trains only", time_str, s_ICON_T_TRAIN_25);
        } break;
        // case MenuSection_Preface_TimeSelection: {
        //   menu_cell_basic_draw(ctx, cell_layer, "2026-06-27 13:01", "Showing departures after this time", NULL);
        // } break;
        case MenuSection_Preface_Alerts: {
          char first_row[14];
          snprintf(first_row, 14, "%i Alerts", s_response.alerts_count);

          char* first_header_text;
          if(s_response.alerts_count > 0) {
            first_header_text = s_response.alerts[0].header_text;
          } else {
            first_header_text = "";
          }

          menu_cell_basic_draw(ctx, cell_layer, first_row, first_header_text, s_ICON_PBL_WARNING_25);
        } break;
      }
      break;
    case MenuSection_Departures: {
      int i = cell_index->row;
      time_t time_to_display;
      if(s_response.stop_events[i].has_realtime_departure) { time_to_display = s_response.stop_events[i].realtime_departure; }
      else if(s_response.stop_events[i].has_realtime_arrival) { time_to_display = s_response.stop_events[i].realtime_arrival; }
      else if(s_response.stop_events[i].has_scheduled_departure) { time_to_display = s_response.stop_events[i].scheduled_departure; }
      else if(s_response.stop_events[i].has_scheduled_arrival) { time_to_display = s_response.stop_events[i].scheduled_arrival; }
      else { time_to_display = 0; }

      struct tm* displayed_time = tm_from_time_timezone(time_to_display, s_response.stop.timezone_offset);

      char time_str[8];
      if(clock_is_24h_style()) {
        strftime(time_str, 8, "%H:%M", displayed_time);
      } else {
        strftime(time_str, 8, "%I:%M %P", displayed_time);
      }

      char first_row[32];
      snprintf(first_row, 32, "%s %s", time_str, 
        s_response.stop_events[i].has_headsign ? s_response.stop_events[i].headsign : "[No headsign]");

      char second_row[32];
      snprintf(second_row, 32, "%s %s (%s)", 
        s_response.stop_events[i].route_name, 
        s_response.stop_events[i].has_trip_short_name ? s_response.stop_events[i].trip_short_name : "", 
        s_response.stop_events[i].agency_name);

      menu_cell_basic_draw(ctx, cell_layer, first_row, second_row, NULL);
    } break;
  }
}

static void menu_select_callback(MenuLayer *menu_layer, MenuIndex *cell_index, void *data) {
  // Use the row to specify which item will receive the select action
  switch (cell_index->row) {
    // // This is the menu item with the cycling icon
    // case 1:
    //   // Cycle the icon
    //   s_current_icon = (s_current_icon + 1) % NUM_MENU_ICONS;
    //   // After changing the icon, mark the layer to have it updated
    //   layer_mark_dirty(menu_layer_get_layer(menu_layer));
    //   break;
  }
}

static int16_t get_cell_height_callback(MenuLayer *menu_layer, MenuIndex *cell_index, void *callback_context) { 
  #ifdef PBL_ROUND
    if(menu_layer_is_index_selected(menu_layer, cell_index)) {
      switch (cell_index->row) {
        case 0:
          return MENU_CELL_ROUND_FOCUSED_SHORT_CELL_HEIGHT;
          break;
        default:
          return MENU_CELL_ROUND_FOCUSED_TALL_CELL_HEIGHT;
      }
    } else {
      return MENU_CELL_ROUND_UNFOCUSED_SHORT_CELL_HEIGHT;
    }
  #else
    if(PBL_DISPLAY_HEIGHT >= LARGE_SCREEN_SIZE_CUTOFF) {
      return MENU_CELL_LARGE_BASIC_CELL_HEIGHT;
    } else {
      return MENU_CELL_SMALL_BASIC_CELL_HEIGHT;
    }
  #endif
}

// MARK: - Main window

static void main_window_load(Window *window) {
  // Here we load the bitmap assets
  // s_menu_icons[0] = gbitmap_create_with_resource(RESOURCE_ID_IMAGE_MENU_ICON_BIG_WATCH);
  // s_menu_icons[1] = gbitmap_create_with_resource(RESOURCE_ID_IMAGE_MENU_ICON_SECTOR_WATCH);
  // s_menu_icons[2] = gbitmap_create_with_resource(RESOURCE_ID_IMAGE_MENU_ICON_BINARY_WATCH);

  // And also load the background
  // s_background_bitmap = gbitmap_create_with_resource(RESOURCE_ID_IMAGE_BACKGROUND_BRAINS);

  s_ICON_PBL_WARNING_25 = gbitmap_create_with_resource(RESOURCE_ID_ICON_PBL_WARNING_25);
  s_ICON_T_TRAIN_25 = gbitmap_create_with_resource(RESOURCE_ID_ICON_T_TRAIN_25);

  // Now we prepare to initialize the menu layer
  Layer *window_layer = window_get_root_layer(window);
  GRect bounds = layer_get_frame(window_layer);

  // Create the menu layer
  s_menu_layer = menu_layer_create(bounds);
  menu_layer_set_callbacks(s_menu_layer, NULL, (MenuLayerCallbacks){
    .get_num_sections = menu_get_num_sections_callback,
    .get_num_rows = menu_get_num_rows_callback,
    .get_header_height = menu_get_header_height_callback,
    .draw_header = menu_draw_header_callback,
    .draw_row = menu_draw_row_callback,
    .select_click = menu_select_callback,
    .get_cell_height = get_cell_height_callback,
  });

  // Bind the menu layer's click config provider to the window for interactivity
  menu_layer_set_click_config_onto_window(s_menu_layer, window);

  layer_add_child(window_layer, menu_layer_get_layer(s_menu_layer));
}

static void main_window_unload(Window *window) {
  // Destroy the menu layer
  menu_layer_destroy(s_menu_layer);
  s_menu_layer = NULL;

  // // Cleanup the menu icons
  // for (int i = 0; i < NUM_MENU_ICONS; i++) {
  //   gbitmap_destroy(s_menu_icons[i]);
  // }

  // gbitmap_destroy(s_background_bitmap);
}

// MARK: - Loading window

static void set_departures_board_request_default();
static void request_departures_board();

static Layer* s_loading_window_layer;
static TextLayer* s_loading_text_layer;

static void done_loading() {
  window_stack_pop(true);
  window_destroy(s_loading_window);
  s_loading_window = NULL;

  s_main_window = window_create();
  window_set_window_handlers(s_main_window, (WindowHandlers) {
    .load = main_window_load,
    .unload = main_window_unload,
  });
  window_stack_push(s_main_window, true);
}

static void loading_window_load(Window *window) {
  set_departures_board_request_default();
  
  s_loading_window_layer = window_get_root_layer(window);
	GRect bounds = layer_get_bounds(s_loading_window_layer);

	// Time layer
	s_loading_text_layer = text_layer_create(
		GRect(0, PBL_IF_ROUND_ELSE(58, 52), bounds.size.w, 50)
	);
	text_layer_set_background_color(s_loading_text_layer, GColorClear);
	text_layer_set_text_color(s_loading_text_layer, GColorBlack);
	text_layer_set_font(s_loading_text_layer, fonts_get_system_font(FONT_KEY_GOTHIC_28_BOLD));
	text_layer_set_text_alignment(s_loading_text_layer, GTextAlignmentCenter);
  text_layer_set_text(s_loading_text_layer, "Loading...");

	layer_add_child(s_loading_window_layer, text_layer_get_layer(s_loading_text_layer));
}

static void loading_window_unload(Window *window) {
  text_layer_destroy(s_loading_text_layer);
  s_loading_text_layer = NULL;
}

// MARK: - Communication

static void js_ready_callback() {
  request_departures_board();
}

static void set_departures_board_request_default() {
  time_t greater_than_time = time(NULL);
  s_request = (DeparturesBoardRequest){
    .has_chateau_id = true,
    .chateau_id = "metra",
    .has_stop_id = true,
    .stop_id = "CUS",
    .has_greater_than_time = true,
    .greater_than_time = greater_than_time,
    .has_less_than_time = true,
    .less_than_time = greater_than_time + (60 * 60),
  };
}

static void request_departures_board() {
  pb_ostream_t stream = pb_ostream_from_buffer(s_request_buffer, sizeof(s_request_buffer));

  bool status = pb_encode(&stream, DeparturesBoardRequest_fields, &s_request);

  if(!status) {
    printf("Encoding DeparturesBoardRequest failed: %s\n", PB_GET_ERROR(&stream));

    text_layer_set_text(s_loading_text_layer, "Loading failed 😞");

    return;
  }

  size_t message_length = stream.bytes_written;

  DictionaryIterator* out_iter;

  AppMessageResult result = app_message_outbox_begin(&out_iter);
  if(result == APP_MSG_OK) {
    ChunkType chunk_type = ChunkType_DeparturesBoardRequest;
    bool complete = 1;
    size_t index = 0;

    dict_write_int(out_iter, MESSAGE_KEY_ChunkType, &chunk_type, sizeof(ChunkType), true);
    dict_write_int(out_iter, MESSAGE_KEY_DataLength, &message_length, sizeof(size_t), false);
    dict_write_data(out_iter, MESSAGE_KEY_DataChunk, s_request_buffer, message_length);
    dict_write_int(out_iter, MESSAGE_KEY_ChunkSize, &message_length, sizeof(size_t), false);
    dict_write_int(out_iter, MESSAGE_KEY_Index, &index, sizeof(size_t), false);
    dict_write_int(out_iter, MESSAGE_KEY_Complete, &complete, sizeof(bool), true);

    result = app_message_outbox_send();
    if(result != APP_MSG_OK) {
      APP_LOG(APP_LOG_LEVEL_ERROR, "Error sending the outbox: %d", (int)result);

      text_layer_set_text(s_loading_text_layer, "Loading failed 😞");

      return;
    }
    printf("Successfully sent DeparturesBoardRequest\n");
  }
}

static void departures_board_response_callback(uint8_t* data, int size) {
  pb_istream_t stream = pb_istream_from_buffer(data, size);

  bool status = pb_decode(&stream, &DeparturesBoardResponse_msg, &s_response);

  free(data); // allocated comm.c:22
  
  if(!status) {
    printf("Decoding DeparturesBoardResponse failed: %s\n", PB_GET_ERROR(&stream));

    text_layer_set_text(s_loading_text_layer, "Loading failed 😞");

    return;
  }

  printf("Decoding DeparturesBoardResponse succeeded!");

  done_loading();
}

// MARK: - Main/init/deinit

static void init() {
  if(FOR_EMULATOR) {
    light_enable(true);
  }
  comm_received_callbacks[ChunkType_JSReady] = js_ready_callback;
  comm_received_callbacks[ChunkType_DeparturesBoardResponse] = departures_board_response_callback;
  comm_init();

  s_loading_window = window_create();
  window_set_window_handlers(s_loading_window, (WindowHandlers) {
    .load = loading_window_load,
    .unload = loading_window_unload,
  });
  window_stack_push(s_loading_window, true);
}

static void deinit() {
  comm_deinit();

  if(s_loading_window) {
    window_destroy(s_loading_window);
    s_loading_window = NULL;
  }
  if(s_main_window) {
    window_destroy(s_main_window);
    s_main_window = NULL;
  }
}

int main(void) {
  init();
  app_event_loop();
  deinit();
}
