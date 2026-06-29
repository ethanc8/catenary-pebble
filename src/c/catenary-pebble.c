#include "pebble.h"

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
  // MenuSection_Departures_NumItems = 3, // See NUM_DEPARTURES instead
};

// https://github.com/coredevices/PebbleOS/blob/eb6dab30c944b115094d3a6dc2b71247f92aa8f4/src/fw/applib/ui/menu_layer_system_cells.c#L30
#define MENU_CELL_SMALL_BASIC_CELL_HEIGHT 44
#define MENU_CELL_LARGE_BASIC_CELL_HEIGHT 61

#define MENU_CELL_SMALL_SMALL_CELL_HEIGHT 34
#define MENU_CELL_LARGE_SMALL_CELL_HEIGHT 42

// Small is 180 and large is 228
#define LARGE_SCREEN_SIZE_CUTOFF 201

static Window *s_main_window;
static MenuLayer *s_menu_layer;

static int s_current_icon = 0;

static GBitmap* s_ICON_PBL_WARNING_25;
static GBitmap* s_ICON_T_TRAIN_25;

typedef enum GtfsRouteType {
  GtfsRouteType_Tram = 0,
  GtfsRouteType_Metro = 1,
  GtfsRouteType_Rail = 2,
  GtfsRouteType_Bus = 3,
  GtfsRouteType_Ferry = 4,
  GtfsRouteType_CableCar = 5,
  GtfsRouteType_AerialLift = 6,
  GtfsRouteType_Funicular = 7,
  GtfsRouteType_Trolleybus = 11,
  GtfsRouteType_Monorail = 12,
} RouteType;

// https://birchdeparturesfromstop.catenarymaps.org/departures_at_stop?stop_id=CUS&chateau_id=metra&greater_than_time=1782583302&less_than_time=1782586913&include_shapes=false
// Mostly from event, but some data must be looked up
typedef struct CatenaryStopEventBasic {
  // From events (catenary-backend/src/birch/departures_at_osm_station.rs StopEvent)
  time_t scheduled_arrival;
  time_t scheduled_departure;
  time_t realtime_arrival;
  time_t realtime_departure;

  bool trip_modified;
  bool stop_cancelled;
  bool trip_cancelled;
  bool trip_deleted;

  char* headsign;
  char* vehicle_number;
  char* trip_short_name;

  // From routes
  char* route_name; // Short name, but if empty then long name
  GColor route_color;
  GColor route_text_color;
  RouteType route_type;

  // From agencies
  char* agency_name;
} CatenaryStopEventBasic;

typedef struct CatenaryStopBasic {
  char* stop_name;
  char* timezone;
  time_t timezone_offset;
} CatenaryStopBasic;

typedef struct CatenaryAlertBasic {
  char* header_text;
  char* description_text;
} CatenaryAlertBasic;

static CatenaryStopBasic s_stop = {
  .stop_name = "Chicago Union Station",
  .timezone = "America/Chicago",
  .timezone_offset = -18000,
};

enum { NUM_DEPARTURES = 3 };

static CatenaryStopEventBasic s_departures[NUM_DEPARTURES] = {
  (CatenaryStopEventBasic){
    .scheduled_arrival = 1782583920,
    .scheduled_departure = 1782583920,
    .realtime_arrival = 0,
    .realtime_departure = 0,
    .trip_modified = false,
    .stop_cancelled = false,
    .trip_cancelled = false,
    .trip_deleted = false,
    .headsign = "Chicago Union Station",
    .vehicle_number = NULL,
    .trip_short_name = "2714",

    .route_name = "MD-W",
    .route_color = GColorFromHEX(0xf1ad0e),
    .route_text_color = GColorBlack,
    .route_type = GtfsRouteType_Rail,

    .agency_name = "Metra",
  },
  (CatenaryStopEventBasic){
    .scheduled_arrival = 1782584400,
    .scheduled_departure = 1782584400,
    .realtime_arrival = 0,
    .realtime_departure = 0,
    .trip_modified = false,
    .stop_cancelled = false,
    .trip_cancelled = false,
    .trip_deleted = false,
    .headsign = "Chicago Union Station",
    .vehicle_number = NULL,
    .trip_short_name = "2016",

    .route_name = "BNSF",
    .route_color = GColorFromHEX(0x29c233),
    .route_text_color = GColorWhite,
    .route_type = GtfsRouteType_Rail,

    .agency_name = "Metra",
  },
  (CatenaryStopEventBasic){
    .scheduled_arrival = 1782585180,
    .scheduled_departure = 1782585180,
    .realtime_arrival = 0,
    .realtime_departure = 0,
    .trip_modified = false,
    .stop_cancelled = false,
    .trip_cancelled = false,
    .trip_deleted = false,
    .headsign = "Aurora",
    .vehicle_number = NULL,
    .trip_short_name = "2015",

    .route_name = "BNSF",
    .route_color = GColorFromHEX(0x29c233),
    .route_text_color = GColorWhite,
    .route_type = GtfsRouteType_Rail,

    .agency_name = "Metra",
  },
};

enum { NUM_ALERTS = 1 };

static CatenaryAlertBasic s_alerts[1] = {
  (CatenaryAlertBasic){
    .header_text = "MDW Inbound Delayed",
    .description_text = "MDW inbound and trains may be operating up to 45 minutes behind schedule due to earlier mechanical problems. Please visit MetraTracker.com for the location of your train."
  }
};

static struct tm* tm_from_time_timezone(time_t time, time_t timezone_offset) {
  time_t adjusted = time + timezone_offset;
  return gmtime(&adjusted);
}

static uint16_t menu_get_num_sections_callback(MenuLayer *menu_layer, void *data) {
  return NUM_MENU_SECTIONS;
}

static uint16_t menu_get_num_rows_callback(MenuLayer *menu_layer, uint16_t section_index, void *data) {
  switch (section_index) {
    case MenuSection_Preface:
      return MenuSection_Preface_NumItems;
    case MenuSection_Departures:
      return NUM_DEPARTURES;
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
      menu_cell_basic_header_draw(ctx, cell_layer, s_stop.stop_name);
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
          menu_cell_basic_draw(ctx, cell_layer, "Showing trains only", "After 2026-06-27 13:01", s_ICON_T_TRAIN_25);
        } break;
        // case MenuSection_Preface_TimeSelection: {
        //   menu_cell_basic_draw(ctx, cell_layer, "2026-06-27 13:01", "Showing departures after this time", NULL);
        // } break;
        case MenuSection_Preface_Alerts: {
          char first_row[12];
          snprintf(first_row, 12, "%i Alerts", NUM_ALERTS);

          menu_cell_basic_draw(ctx, cell_layer, first_row, s_alerts[0].header_text, s_ICON_PBL_WARNING_25);
        } break;
      }
      break;
    case MenuSection_Departures: {
      int i = cell_index->row;
      time_t time_to_display;
      if(s_departures[i].realtime_departure) { time_to_display = s_departures[i].realtime_departure; }
      else if(s_departures[i].realtime_arrival) { time_to_display = s_departures[i].realtime_arrival; }
      else if(s_departures[i].scheduled_departure) { time_to_display = s_departures[i].scheduled_departure; }
      else if(s_departures[i].scheduled_arrival) { time_to_display = s_departures[i].scheduled_arrival; }
      else { time_to_display = 0; }

      struct tm* displayed_time = tm_from_time_timezone(time_to_display, s_stop.timezone_offset);

      char time_str[8];
      if(clock_is_24h_style()) {
        strftime(time_str, 8, "%H:%M", displayed_time);
      } else {
        strftime(time_str, 8, "%I:%M %P", displayed_time);
      }

      char first_row[32];
      snprintf(first_row, 32, "%s %s", time_str, s_departures[i].headsign);

      char second_row[32];
      snprintf(second_row, 32, "%s %s (%s)", s_departures[i].route_name, s_departures[i].trip_short_name, s_departures[i].agency_name);

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

  // // Cleanup the menu icons
  // for (int i = 0; i < NUM_MENU_ICONS; i++) {
  //   gbitmap_destroy(s_menu_icons[i]);
  // }

  // gbitmap_destroy(s_background_bitmap);
}

static void init() {
  s_main_window = window_create();
  window_set_window_handlers(s_main_window, (WindowHandlers) {
    .load = main_window_load,
    .unload = main_window_unload,
  });
  window_stack_push(s_main_window, true);
}

static void deinit() {
  window_destroy(s_main_window);
}

int main(void) {
  init();
  app_event_loop();
  deinit();
}
