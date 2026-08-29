// https://raw.githubusercontent.com/pebble-examples/png-download-example/refs/heads/master/src/modules/comm.h

#pragma once

#include <pebble.h>

typedef enum ChunkType {
	ChunkType_DeparturesBoardRequest = 0,
  ChunkType_DeparturesBoardResponse = 1,
	ChunkType_JSReady = 2,
} ChunkType;
#define NUM_CHUNK_TYPES 3

// The maximum size these can be set to is 8200.
// 64 bytes should be reserved for the signalling.

#define APP_MESSAGE_OUTBOX_SIZE 256
#define MAX_OUTBOX_CHUNK_SIZE 200

#define APP_MESSAGE_INBOX_SIZE 8200
// Should be same as index.js MAX_CHUNK_SIZE
#define MAX_INBOX_CHUNK_SIZE 8000

// The callback is responsible for freeing data.
typedef void (*CommReceivedCallback)(uint8_t* data, int size);
typedef void (*VoidCallback)(void);

extern CommReceivedCallback comm_received_callbacks[NUM_CHUNK_TYPES];

void comm_init();

void comm_deinit();

// If JSReady has not been occurred yet, registers callback to run when JSReady occurs.
// If JSReady has already occurred, runs the callback immediately
void run_when_jsready(VoidCallback callback);
