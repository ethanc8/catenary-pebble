#ifndef CATENARY_PEBBLE_DEPARTURES_BOARD_ALERTS_SCREEN_H
#define CATENARY_PEBBLE_DEPARTURES_BOARD_ALERTS_SCREEN_H

#include "../proto/departures_board.pb.h"

// The caller must guarantee that there is a nonzero amount of alerts contained in the response.
void departures_board_alerts_screen_push(DeparturesBoardResponse* response);

#endif // CATENARY_PEBBLE_DEPARTURES_BOARD_ALERTS_SCREEN_H