#include "comm.h"

CommReceivedCallback comm_received_callbacks[NUM_CHUNK_TYPES] = {};

// Warning - It cannot handle receiving multiple different transmissions simulataneously.
static void inbox_received_handler(DictionaryIterator *iter, void *context) {
  static uint8_t* data;
  static int size = 0;
  ChunkType chunk_type = 0;

  // Get the received chunk
  Tuple* chunk_type_tuple = dict_find(iter, MESSAGE_KEY_ChunkType);
  if(chunk_type_tuple) {
    chunk_type = (ChunkType)chunk_type_tuple->value->int32;
  }

  Tuple *size_tuple = dict_find(iter, MESSAGE_KEY_DataLength);
  if(size_tuple) {
    size = size_tuple->value->int32;

    // Allocate buffer for data
    // data = (uint8_t*)malloc(size * sizeof(uint8_t));
    data = (uint8_t*)malloc(8000 * sizeof(uint8_t));

    printf("Received beginning of transmission, chunk type %i, size %i", chunk_type, size);
  }

  // A chunk
  Tuple *chunk_tuple = dict_find(iter, MESSAGE_KEY_DataChunk);
  if(chunk_tuple) {
    uint8_t *chunk_data = chunk_tuple->value->data;

    Tuple *chunk_size_t = dict_find(iter, MESSAGE_KEY_ChunkSize);
    int chunk_size = chunk_size_t->value->int32;

    Tuple *index_t = dict_find(iter, MESSAGE_KEY_Index);
    int index = index_t->value->int32;

    printf("Received chunk index %i, size %i", index, chunk_size);

    // Save the chunk
    #pragma GCC diagnostic push
    #pragma GCC diagnostic ignored "-Wmaybe-uninitialized"
    memcpy(&data[index], chunk_data, chunk_size);
    #pragma GCC diagnostic pop
  }

  // Complete?
  Tuple *complete_tuple = dict_find(iter, MESSAGE_KEY_Complete);
  if(complete_tuple) {
    printf("Received completed transmission, chunk type %i, size %i", chunk_type, size);
    #pragma GCC diagnostic push
    #pragma GCC diagnostic ignored "-Wmaybe-uninitialized"
    comm_received_callbacks[chunk_type](data, size);
    #pragma GCC diagnostic pop
  }
}

void comm_init() {
  app_message_register_inbox_received(inbox_received_handler);

  const int inbox_size = app_message_inbox_size_maximum();
  const int outbox_size = APP_MESSAGE_OUTBOX_SIZE;
  app_message_open(inbox_size, outbox_size);
}

void comm_deinit() {
}
