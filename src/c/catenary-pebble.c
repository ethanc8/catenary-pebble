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
  MenuSection_Departures_NumItems = 3,
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

static uint16_t menu_get_num_sections_callback(MenuLayer *menu_layer, void *data) {
  return NUM_MENU_SECTIONS;
}

static uint16_t menu_get_num_rows_callback(MenuLayer *menu_layer, uint16_t section_index, void *data) {
  switch (section_index) {
    case MenuSection_Preface:
      return MenuSection_Preface_NumItems;
    case MenuSection_Departures:
      return MenuSection_Departures_NumItems;
    default:
      return 0;
  }
}

static int16_t menu_get_header_height_callback(MenuLayer *menu_layer, uint16_t section_index, void *data) {
  switch(section_index) {
    case MenuSection_Preface:
      return 0;
    case MenuSection_Departures:
      return MENU_CELL_BASIC_HEADER_HEIGHT;
    default:
      return 0;
  }
}

static void menu_draw_header_callback(GContext* ctx, const Layer *cell_layer, uint16_t section_index, void *data) {
  switch(section_index) {
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
          menu_cell_basic_draw(ctx, cell_layer, "2 Alerts", "MDN Train #2620 is on the move", s_ICON_PBL_WARNING_25);
        } break;
      }
      break;
    case MenuSection_Departures:
      switch (cell_index->row) {
        case 0: {
          menu_cell_basic_draw(ctx, cell_layer, "13:12 Chicago Union Station", "MD-W 2714", s_ICON_T_TRAIN_25);
        } break;
        case 1: {
          menu_cell_basic_draw(ctx, cell_layer, "13:20 Chicago Union Station", "BNSF 2016", s_ICON_T_TRAIN_25);
        } break;
        case 2: {
          menu_cell_basic_draw(ctx, cell_layer, "13:33 Aurora", "BNSF 2015", s_ICON_T_TRAIN_25);
        } break;
      }
      break;
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
