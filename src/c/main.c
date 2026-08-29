#include "pebble.h"

#include "nanopb/pb_decode.h"
#include "nanopb/pb_encode.h"
#include "proto/departures_board.pb.h"

#include "util/comm.h"

#include "conf.h"
#include "windows/departures-board.h"

#if WAIT_FOR_DEBUGGER
  static volatile bool s_wait_for_debugger = true;
#endif

static void init() {
  #if WAIT_FOR_DEBUGGER
    while(s_wait_for_debugger) { psleep(10); }
  #endif

  if(FOR_EMULATOR) {
    light_enable(true);
  }

  comm_init();

  departures_board_push((DeparturesBoardRequest){
    .has_chateau_id = true,
    .chateau_id = "metra",
    .has_stop_id = true,
    .stop_id = "CUS",
  });
}

static void deinit() {
  comm_deinit();
}

int main(void) {
  init();
  app_event_loop();
  deinit();
}
