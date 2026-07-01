// Polyfills for TextDecoder and TextEncoder
// required for pbjs-minimal.js

try {

require('fast-text-encoding');

console.log("catenary-proto PKJS process");

var dbproto = require('./proto/departures_board.pb.js');
console.log("Success importing proto");

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

} catch(e) {
	console.log("Error occurred");
	console.log(e.message);
	console.log("Stack trace:");
	console.log(e.stack);
}

