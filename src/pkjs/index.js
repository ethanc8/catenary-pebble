// Polyfills for TextDecoder and TextEncoder
// required for pbjs-minimal.js

try {

require('fast-text-encoding');

var keys = require('message_keys');

console.log("catenary-proto PKJS process");

var dbproto = require('./proto/departures_board.pb.js');
console.log("Success importing proto");

const ChunkType = {
  DeparturesBoardRequest: 0,
  DeparturesBoardResponse: 1,
};

const BUFFER_SIZE = 8000;

// try {
// } catch (e) {
//   console.log("Error requiring proto: " + e.message);
//   console.log("Stack: " + e.stack);
// }

const GColorPastelYellowARGB8 = 0b11111110;
const GColorBlackARGB8 = 0b11000000;
const GColorDarkGreenARGB8 = 0b11000100;
const GColorWhiteARGB8 = 0b11111111;

const response = dbproto.DeparturesBoardResponse.encode({
	success: true,

  stop: {
    stop_name: "Chicago Union Station",
    timezone: "America/Chicago",
    timezone_offset: -18000,
  },

  alerts: [
    {
      header_text: "MDW Inbound Delayed",
      description_text: "MDW inbound and trains may be operating up to 45 minutes behind schedule due to earlier mechanical problems. Please visit MetraTracker.com for the location of your train."
    }
	],

  stop_events: [
    {
      scheduled_arrival: 1782583920,
      scheduled_departure: 1782583920,

      trip_modified: false,
      stop_cancelled: false,
      trip_cancelled: false,
      trip_deleted: false,

      headsign: "Chicago Union Station",
      trip_short_name: "2714",

      route_name: "MD-W",
      route_color: GColorPastelYellowARGB8,
      route_text_color: GColorBlackARGB8,
      route_type: dbproto.RouteType.RAIL,

      agency_name: "Metra",
    },
    {
      scheduled_arrival: 1782584400,
      scheduled_departure: 1782584400,

      trip_modified: false,
      stop_cancelled: false,
      trip_cancelled: false,
      trip_deleted: false,

      headsign: "Chicago Union Station",
      trip_short_name: "2016",

      route_name: "BNSF",
      route_color: GColorDarkGreenARGB8,
      route_text_color: GColorWhiteARGB8,
      route_type: dbproto.RouteType.RAIL,

      agency_name: "Metra",
    },
    {
      scheduled_arrival: 1782585180,
      scheduled_departure: 1782585180,

      trip_modified: false,
      stop_cancelled: false,
      trip_cancelled: false,
      trip_deleted: false,
      
      headsign: "Aurora",
      trip_short_name: "2015",

      route_name: "BNSF",
      route_color: GColorDarkGreenARGB8,
      route_text_color: GColorWhiteARGB8,
      route_type: dbproto.RouteType.RAIL,

      agency_name: "Metra",
    },
	],
}).finish();

console.log('Success building sample response');

Pebble.addEventListener('ready', function() {
  // https://developer.repebble.com/guides/communication/advanced-communication/
  var array = [];
  for(var i = 0; i < response.byteLength; i++) {
    array.push(response[i]);
  }

  console.log('Beginning transmission');

  transmitBuffer(array);
});

function transmitBuffer(array) {
  var index = 0;
  var arrayLength = array.length;

  // Transmit the length for array allocation
  Pebble.sendAppMessage({
    'ChunkType': ChunkType.DeparturesBoardResponse,
    'DataLength': arrayLength
  }, function() {
    // Success, begin sending chunks
    sendChunk(array, index, arrayLength);
  }, function(e) {
    console.log('Failed to initiate buffer transfer!');
    console.log(e);
  })
}

function sendChunk(array, index, arrayLength) {
  try {
  // Determine the next chunk size
  var chunkSize = BUFFER_SIZE;
  if(arrayLength - index < BUFFER_SIZE) {
    // Resize to fit just the remaining data items
    chunkSize = arrayLength - index;
  }

  // Prepare the dictionary
  var dict = {
    'ChunkType': ChunkType.DeparturesBoardResponse,
    'DataChunk': array.slice(index, index + chunkSize),
    'ChunkSize': chunkSize,
    'Index': index
  };

  console.log('Sending chunk ' + index);
  console.log(dict);

  // Send the chunk
  Pebble.sendAppMessage(dict, function() {
    console.log('Successfully sent chunk ' + index);

    // Success
    index += chunkSize;

    if(index < arrayLength) {
      // Send the next chunk
      sendChunk(array, index, arrayLength);
    } else {
      console.log('Completed transmission');
      // Complete!
      Pebble.sendAppMessage({
        'ChunkType': ChunkType.DeparturesBoardResponse,
        'Complete': 0
      });
    }
  }, function(e) {
    console.log('Failed to send chunk with index ' + index);
    console.log(e);
  });
  } catch(e) {
    console.log("Error occurred");
    console.log(e.message);
    console.log("Stack trace:");
    console.log(e.stack);
  }
}

} catch(e) {
	console.log("Error occurred");
	console.log(e.message);
	console.log("Stack trace:");
	console.log(e.stack);
}

