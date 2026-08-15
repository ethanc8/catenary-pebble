// https://raw.githubusercontent.com/pebble-examples/png-download-example/refs/heads/master/src/modules/comm.h

#pragma once

#include <pebble.h>

typedef enum ChunkType {
	ChunkType_DeparturesBoardRequest = 0,
  ChunkType_DeparturesBoardResponse = 1,
	ChunkType_JSReady = 2,
} ChunkType;
#define NUM_CHUNK_TYPES 3

#define APP_MESSAGE_OUTBOX_SIZE 256

// The callback is responsible for freeing data.
typedef void (*CommReceivedCallback)(uint8_t* data, int size);

extern CommReceivedCallback comm_received_callbacks[NUM_CHUNK_TYPES];

void comm_init();

void comm_deinit();
