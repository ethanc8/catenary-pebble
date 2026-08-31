// https://raw.githubusercontent.com/pebble-examples/text-flow-techniques/refs/heads/master/src/windows/static_text_window.c

#include "pebble.h"

#include "../nanopb/pb_decode.h"
#include "../nanopb/pb_encode.h"
#include "../proto/departures_board.pb.h"

#include "../util/comm.h"

#include "../conf.h"

#include "departures-board-alerts-screen.h"

static DeparturesBoardResponse* s_response;
static Window* s_main_window;
static TextLayer* s_title_layers[16];
static TextLayer* s_title_bg_layers[16];
static TextLayer* s_body_layers[16];
static ScrollLayer* s_scroll_layer;

#if PBL_ROUND
	#define SHOULD_PAGINATE 1
#else
	#define SHOULD_PAGINATE 0
#endif

enum {
	SIDE_MARGIN = 2,
	VERTICAL_MARGIN = 5,
};

static void window_load(Window *window) {
	Layer *window_layer = window_get_root_layer(window);
	GRect window_bounds = layer_get_bounds(window_layer);

	s_scroll_layer = scroll_layer_create(window_bounds);
	GRect bounds = layer_get_bounds(scroll_layer_get_layer(s_scroll_layer));

	layer_add_child(window_layer, scroll_layer_get_layer(s_scroll_layer));

	int content_height = 0;

	for(int i = 0; i < s_response->alerts_count; i++) {
		AlertBasic* alert = &s_response->alerts[i];

		#if SHOULD_PAGINATE
			s_title_layers[i] = text_layer_create(GRect(bounds.origin.x, bounds.origin.y + content_height, bounds.size.w, bounds.size.h));
		#else
			s_title_layers[i] = text_layer_create(GRect(bounds.origin.x + SIDE_MARGIN, bounds.origin.y + content_height, bounds.size.w - SIDE_MARGIN * 2, bounds.size.h));
		#endif
		text_layer_set_text(s_title_layers[i], alert->header_text);
		// text_layer_set_text_alignment(s_title_layers[i], GTextAlignmentCenter);
		text_layer_set_font(s_title_layers[i], fonts_get_system_font(FONT_KEY_GOTHIC_24_BOLD));
		text_layer_set_background_color(s_title_layers[i], GColorBlack);
		text_layer_set_text_color(s_title_layers[i], GColorWhite);

		GSize title_size = text_layer_get_content_size(s_title_layers[i]);

		s_title_bg_layers[i] = text_layer_create(GRect(bounds.origin.x, bounds.origin.y + content_height, bounds.size.w, title_size.h + VERTICAL_MARGIN));
		text_layer_set_background_color(s_title_bg_layers[i], GColorBlack);
		scroll_layer_add_child(s_scroll_layer, text_layer_get_layer(s_title_bg_layers[i]));

		content_height += title_size.h + VERTICAL_MARGIN;

		scroll_layer_add_child(s_scroll_layer, text_layer_get_layer(s_title_layers[i]));

		// Must be after added to the view heirachy
		#if SHOULD_PAGINATE
			text_layer_enable_screen_text_flow_and_paging(s_title_layers[i], 2);
		#endif

		#if SHOULD_PAGINATE
			s_body_layers[i] = text_layer_create(GRect(bounds.origin.x, bounds.origin.y + content_height, bounds.size.w, bounds.size.h));
		#else
			s_body_layers[i] = text_layer_create(GRect(bounds.origin.x + SIDE_MARGIN, bounds.origin.y + content_height, bounds.size.w - SIDE_MARGIN * 2, bounds.size.h));
		#endif
		text_layer_set_text(s_body_layers[i], alert->description_text);
		// text_layer_set_text_alignment(s_body_layers[i], GTextAlignmentLeft);
		text_layer_set_font(s_body_layers[i], fonts_get_system_font(FONT_KEY_GOTHIC_18_BOLD));
		text_layer_set_background_color(s_body_layers[i], GColorWhite);
		text_layer_set_text_color(s_body_layers[i], GColorBlack);
		scroll_layer_add_child(s_scroll_layer, text_layer_get_layer(s_body_layers[i]));

		#if SHOULD_PAGINATE
			text_layer_enable_screen_text_flow_and_paging(s_body_layers[i], 2);
		#endif

		GSize body_size = text_layer_get_content_size(s_body_layers[i]);

		content_height += body_size.h + VERTICAL_MARGIN;
	}

	scroll_layer_set_content_size(s_scroll_layer, (GSize){
		window_bounds.size.w,
		content_height
	});

	scroll_layer_set_click_config_onto_window(s_scroll_layer, window);

	scroll_layer_set_paging(s_scroll_layer, SHOULD_PAGINATE);
}

static void window_unload(Window *window) {
	for(int i = 0; i < 16; i++) {
		if(s_title_layers[i]) { text_layer_destroy(s_title_layers[i]); }
		if(s_body_layers[i]) { text_layer_destroy(s_body_layers[i]); }
	}
	
	window_destroy(s_main_window);
	s_main_window = NULL;
}

void departures_board_alerts_screen_push(DeparturesBoardResponse* response) {
	s_response = response;
	
	if(!s_main_window) {
		s_main_window = window_create();
		window_set_window_handlers(s_main_window, (WindowHandlers) {
			.load = window_load,
			.unload = window_unload,
		});
	}
	window_stack_push(s_main_window, true);
}
