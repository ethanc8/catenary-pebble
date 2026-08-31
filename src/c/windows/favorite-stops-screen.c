#include "pebble.h"

#include "../conf.h"

#include "../proto/departures_board.pb.h"
#include "departures-board.h"

#include "favorite-stops-screen.h"

#define NUM_MENU_SECTIONS 1

enum {
  MenuSection_FavoriteStops = 0,
};

// https://github.com/coredevices/PebbleOS/blob/eb6dab30c944b115094d3a6dc2b71247f92aa8f4/src/fw/applib/ui/menu_layer_system_cells.c#L30
#define MENU_CELL_SMALL_BASIC_CELL_HEIGHT 44
#define MENU_CELL_LARGE_BASIC_CELL_HEIGHT 61

#define MENU_CELL_SMALL_SMALL_CELL_HEIGHT 34
#define MENU_CELL_LARGE_SMALL_CELL_HEIGHT 42

// Small is 180 and large is 228
#define LARGE_SCREEN_SIZE_CUTOFF 201

static Window* s_main_window = NULL;
static MenuLayer* s_menu_layer;

typedef struct FavoriteStop {
  char* chateau_id;
  char* stop_id;
  char* stop_name;
} FavoriteStop;

enum { NUM_STOPS = 6 };

static FavoriteStop s_stops[NUM_STOPS] = {
  (FavoriteStop) {
    .chateau_id = "metra",
    .stop_id = "CUS",
    .stop_name = "Chicago Union Station",
  },
  (FavoriteStop) {
    .chateau_id = "metra",
    .stop_id = "WESTMONT",
    .stop_name = "Westmont",
  },
  (FavoriteStop) {
    .chateau_id = "chicagotransitauthority",
    .stop_id = "41320",
    .stop_name = "Belmont (Red/Brown/Purple)",
  },
  (FavoriteStop) {
    .chateau_id = "champaignurbanamasstransitdistrict",
    .stop_id = "IT",
    .stop_name = "Illinois Terminal",
  },
  (FavoriteStop) {
    .chateau_id = "champaignurbanamasstransitdistrict",
    .stop_id = "IU",
    .stop_name = "Illini Union",
  },
  (FavoriteStop) {
    .chateau_id = "champaignurbanamasstransitdistrict",
    .stop_id = "PLAZA",
    .stop_name = "Transit Plaza",
  },
};

// MARK: - Main menu

static uint16_t menu_get_num_sections_callback(MenuLayer *menu_layer, void *data) {
  return NUM_MENU_SECTIONS;
}

static uint16_t menu_get_num_rows_callback(MenuLayer *menu_layer, uint16_t section_index, void *data) {
  switch (section_index) {
    case MenuSection_FavoriteStops:
      return NUM_STOPS;
    default:
      return 0;
  }
}

static int16_t menu_get_header_height_callback(MenuLayer *menu_layer, uint16_t section_index, void *data) {
  switch(section_index) {
    case MenuSection_FavoriteStops:
      return MENU_CELL_BASIC_HEADER_HEIGHT;
    default:
      return 0;
  }
}

static void menu_draw_header_callback(GContext* ctx, const Layer *cell_layer, uint16_t section_index, void *data) {
  switch(section_index) {
    case MenuSection_FavoriteStops: {
      menu_cell_basic_header_draw(ctx, cell_layer, "Favorite Stops");
    } break;
  }
}

static void menu_draw_row_callback(GContext* ctx, const Layer *cell_layer, MenuIndex *cell_index, void *data) {
  switch(cell_index->section) {
    case MenuSection_FavoriteStops: {
      int i = cell_index->row;
      
      menu_cell_basic_draw(ctx, cell_layer, s_stops[i].stop_name, NULL, NULL);
    } break;
  }
}

static void menu_select_callback(MenuLayer *menu_layer, MenuIndex *cell_index, void *data) {
  switch(cell_index->section) {
    case MenuSection_FavoriteStops: {
      int i = cell_index->row;
      FavoriteStop stop = s_stops[i];
      
      printf("Château `%s`, stop ID `%s` selected", stop.chateau_id, stop.stop_id);

      DeparturesBoardRequest request = (DeparturesBoardRequest){
        .has_chateau_id = true,
        .has_stop_id = true,
      };

      strncpy(request.chateau_id, stop.chateau_id, sizeof(request.chateau_id));
      strncpy(request.stop_id, stop.stop_id, sizeof(request.stop_id));

      departures_board_push(request);
    } break;
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

  window_destroy(window);
}

// MARK: - Main/init/deinit

void favorite_stops_screen_push() {
  s_main_window = window_create();
  window_set_window_handlers(s_main_window, (WindowHandlers) {
    .load = main_window_load,
    .unload = main_window_load,
  });
  window_stack_push(s_main_window, true);
}
