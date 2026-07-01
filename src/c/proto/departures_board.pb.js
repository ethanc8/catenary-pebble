/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-mixed-operators, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars, default-case, jsdoc/require-param*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
var $Object = $util.global.Object, $undefined = $util.global.undefined, $Error = $util.global.Error, $TypeError = $util.global.TypeError, $String = $util.global.String, $Boolean = $util.global.Boolean, $Array = $util.global.Array, $parseInt = $util.global.parseInt, $Number = $util.global.Number, $BigInt = $util.global.BigInt, $isFinite = $util.global.isFinite;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

/**
 * RouteType enum.
 * @name RouteType
 * @enum {number}
 * @property {number} TRAM=0 TRAM value
 * @property {number} METRO=1 METRO value
 * @property {number} RAIL=2 RAIL value
 * @property {number} BUS=3 BUS value
 * @property {number} FERRY=4 FERRY value
 * @property {number} CABLE_CAR=5 CABLE_CAR value
 * @property {number} AERIAL=6 AERIAL value
 * @property {number} FUNICULAR=7 FUNICULAR value
 * @property {number} TROLLEYBUS=11 TROLLEYBUS value
 * @property {number} MONORAIL=12 MONORAIL value
 */
$root.RouteType = (function() {
    var valuesById = $Object.create(null), values = $Object.create(valuesById);
    values[valuesById[0] = "TRAM"] = 0;
    values[valuesById[1] = "METRO"] = 1;
    values[valuesById[2] = "RAIL"] = 2;
    values[valuesById[3] = "BUS"] = 3;
    values[valuesById[4] = "FERRY"] = 4;
    values[valuesById[5] = "CABLE_CAR"] = 5;
    values[valuesById[6] = "AERIAL"] = 6;
    values[valuesById[7] = "FUNICULAR"] = 7;
    values[valuesById[11] = "TROLLEYBUS"] = 11;
    values[valuesById[12] = "MONORAIL"] = 12;
    return values;
})();

$root.StopBasic = (function() {

    /**
     * Properties of a StopBasic.
     * @typedef {Object} StopBasic.$Properties
     * @property {string|null} [stop_name] StopBasic stop_name
     * @property {string|null} [timezone] StopBasic timezone
     * @property {number|null} [timezone_offset] StopBasic timezone_offset
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */

    /**
     * Properties of a StopBasic.
     * @exports IStopBasic
     * @interface IStopBasic
     * @augments StopBasic.$Properties
     * @deprecated Use StopBasic.$Properties instead.
     */

    /**
     * Shape of a StopBasic.
     * @typedef {StopBasic.$Properties} StopBasic.$Shape
     */

    /**
     * Constructs a new StopBasic.
     * @exports StopBasic
     * @classdesc Represents a StopBasic.
     * @constructor
     * @param {StopBasic.$Properties=} [properties] Properties to set
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */
    var StopBasic = function (properties) {
        if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    };

    /**
     * StopBasic stop_name.
     * @member {string} stop_name
     * @memberof StopBasic
     * @instance
     */
    StopBasic.prototype.stop_name = "";

    /**
     * StopBasic timezone.
     * @member {string} timezone
     * @memberof StopBasic
     * @instance
     */
    StopBasic.prototype.timezone = "";

    /**
     * StopBasic timezone_offset.
     * @member {number} timezone_offset
     * @memberof StopBasic
     * @instance
     */
    StopBasic.prototype.timezone_offset = 0;

    /**
     * Creates a new StopBasic instance using the specified properties.
     * @function create
     * @memberof StopBasic
     * @static
     * @param {StopBasic.$Properties=} [properties] Properties to set
     * @returns {StopBasic} StopBasic instance
     * @type {{
     *   (properties: StopBasic.$Shape): StopBasic & StopBasic.$Shape;
     *   (properties?: StopBasic.$Properties): StopBasic;
     * }}
     */
    StopBasic.create = function(properties) {
        return new StopBasic(properties);
    };

    /**
     * Encodes the specified StopBasic message. Does not implicitly {@link StopBasic.verify|verify} messages.
     * @function encode
     * @memberof StopBasic
     * @static
     * @param {StopBasic.$Properties} message StopBasic message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    StopBasic.encode = function (message, writer, _depth) {
        if (!writer)
            writer = $Writer.create();
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        if (message.stop_name != null && $Object.hasOwnProperty.call(message, "stop_name"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.stop_name);
        if (message.timezone != null && $Object.hasOwnProperty.call(message, "timezone"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.timezone);
        if (message.timezone_offset != null && $Object.hasOwnProperty.call(message, "timezone_offset"))
            writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.timezone_offset);
        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
            for (var i = 0; i < message.$unknowns.length; ++i)
                writer.raw(message.$unknowns[i]);
        return writer;
    };

    /**
     * Encodes the specified StopBasic message, length delimited. Does not implicitly {@link StopBasic.verify|verify} messages.
     * @function encodeDelimited
     * @memberof StopBasic
     * @static
     * @param {StopBasic.$Properties} message StopBasic message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    StopBasic.encodeDelimited = function(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };

    /**
     * Decodes a StopBasic message from the specified reader or buffer.
     * @function decode
     * @memberof StopBasic
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {StopBasic & StopBasic.$Shape} StopBasic
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    StopBasic.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $Reader.recursionLimit)
            throw $Error("max depth exceeded");
        var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.StopBasic();
        while (reader.pos < end) {
            var start = reader.pos;
            var tag = reader.tag();
            if (tag === _end) {
                _end = $undefined;
                break;
            }
            var wireType = tag & 7;
            switch (tag >>>= 3) {
            case 1: {
                    if (wireType !== 2)
                        break;
                    message.stop_name = reader.stringVerify();
                    continue;
                }
            case 2: {
                    if (wireType !== 2)
                        break;
                    message.timezone = reader.stringVerify();
                    continue;
                }
            case 3: {
                    if (wireType !== 0)
                        break;
                    message.timezone_offset = reader.sint32();
                    continue;
                }
            }
            reader.skipType(wireType, _depth, tag);
            if (!reader.discardUnknown) {
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
        }
        if (_end !== $undefined)
            throw $Error("missing end group");
        return message;
    };

    /**
     * Decodes a StopBasic message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof StopBasic
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {StopBasic & StopBasic.$Shape} StopBasic
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    StopBasic.decodeDelimited = function(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a StopBasic message.
     * @function verify
     * @memberof StopBasic
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    StopBasic.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            return "max depth exceeded";
        if (message.stop_name != null && $Object.hasOwnProperty.call(message, "stop_name"))
            if (!$util.isString(message.stop_name))
                return "stop_name: string expected";
        if (message.timezone != null && $Object.hasOwnProperty.call(message, "timezone"))
            if (!$util.isString(message.timezone))
                return "timezone: string expected";
        if (message.timezone_offset != null && $Object.hasOwnProperty.call(message, "timezone_offset"))
            if (!$util.isInteger(message.timezone_offset))
                return "timezone_offset: integer expected";
        return null;
    };

    /**
     * Creates a StopBasic message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof StopBasic
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {StopBasic} StopBasic
     */
    StopBasic.fromObject = function (object, _depth) {
        if (object instanceof $root.StopBasic)
            return object;
        if (!$util.isObject(object))
            throw $TypeError(".StopBasic: object expected");
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var message = new $root.StopBasic();
        if (object.stop_name != null)
            message.stop_name = $String(object.stop_name);
        if (object.timezone != null)
            message.timezone = $String(object.timezone);
        if (object.timezone_offset != null)
            message.timezone_offset = object.timezone_offset | 0;
        return message;
    };

    /**
     * Creates a plain object from a StopBasic message. Also converts values to other types if specified.
     * @function toObject
     * @memberof StopBasic
     * @static
     * @param {StopBasic} message StopBasic
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    StopBasic.toObject = function (message, options, _depth) {
        if (!options)
            options = {};
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var object = {};
        if (options.defaults) {
            object.stop_name = "";
            object.timezone = "";
            object.timezone_offset = 0;
        }
        if (message.stop_name != null && $Object.hasOwnProperty.call(message, "stop_name"))
            object.stop_name = message.stop_name;
        if (message.timezone != null && $Object.hasOwnProperty.call(message, "timezone"))
            object.timezone = message.timezone;
        if (message.timezone_offset != null && $Object.hasOwnProperty.call(message, "timezone_offset"))
            object.timezone_offset = message.timezone_offset;
        return object;
    };

    /**
     * Converts this StopBasic to JSON.
     * @function toJSON
     * @memberof StopBasic
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    StopBasic.prototype.toJSON = function() {
        return StopBasic.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the type url for StopBasic
     * @function getTypeUrl
     * @memberof StopBasic
     * @static
     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns {string} The type url
     */
    StopBasic.getTypeUrl = function(prefix) {
        if (prefix === $undefined)
            prefix = "type.googleapis.com";
        return prefix + "/StopBasic";
    };

    return StopBasic;
})();

$root.StopEventBasic = (function() {

    /**
     * Properties of a StopEventBasic.
     * @typedef {Object} StopEventBasic.$Properties
     * @property {number|null} [scheduled_arrival] StopEventBasic scheduled_arrival
     * @property {number|null} [scheduled_departure] StopEventBasic scheduled_departure
     * @property {number|null} [realtime_arrival] StopEventBasic realtime_arrival
     * @property {number|null} [realtime_departure] StopEventBasic realtime_departure
     * @property {boolean|null} [trip_modified] StopEventBasic trip_modified
     * @property {boolean|null} [stop_cancelled] StopEventBasic stop_cancelled
     * @property {boolean|null} [trip_cancelled] StopEventBasic trip_cancelled
     * @property {boolean|null} [trip_deleted] StopEventBasic trip_deleted
     * @property {string|null} [trip_id] StopEventBasic trip_id
     * @property {string|null} [headsign] StopEventBasic headsign
     * @property {string|null} [vehicle_number] StopEventBasic vehicle_number
     * @property {string|null} [trip_short_name] StopEventBasic trip_short_name
     * @property {string|null} [route_name] StopEventBasic route_name
     * @property {number|null} [route_color] StopEventBasic route_color
     * @property {number|null} [route_text_color] StopEventBasic route_text_color
     * @property {RouteType|null} [route_type] StopEventBasic route_type
     * @property {string|null} [agency_name] StopEventBasic agency_name
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */

    /**
     * Properties of a StopEventBasic.
     * @exports IStopEventBasic
     * @interface IStopEventBasic
     * @augments StopEventBasic.$Properties
     * @deprecated Use StopEventBasic.$Properties instead.
     */

    /**
     * Shape of a StopEventBasic.
     * @typedef {StopEventBasic.$Properties} StopEventBasic.$Shape
     */

    /**
     * Constructs a new StopEventBasic.
     * @exports StopEventBasic
     * @classdesc Represents a StopEventBasic.
     * @constructor
     * @param {StopEventBasic.$Properties=} [properties] Properties to set
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */
    var StopEventBasic = function (properties) {
        if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    };

    /**
     * StopEventBasic scheduled_arrival.
     * @member {number} scheduled_arrival
     * @memberof StopEventBasic
     * @instance
     */
    StopEventBasic.prototype.scheduled_arrival = 0;

    /**
     * StopEventBasic scheduled_departure.
     * @member {number} scheduled_departure
     * @memberof StopEventBasic
     * @instance
     */
    StopEventBasic.prototype.scheduled_departure = 0;

    /**
     * StopEventBasic realtime_arrival.
     * @member {number} realtime_arrival
     * @memberof StopEventBasic
     * @instance
     */
    StopEventBasic.prototype.realtime_arrival = 0;

    /**
     * StopEventBasic realtime_departure.
     * @member {number} realtime_departure
     * @memberof StopEventBasic
     * @instance
     */
    StopEventBasic.prototype.realtime_departure = 0;

    /**
     * StopEventBasic trip_modified.
     * @member {boolean} trip_modified
     * @memberof StopEventBasic
     * @instance
     */
    StopEventBasic.prototype.trip_modified = false;

    /**
     * StopEventBasic stop_cancelled.
     * @member {boolean} stop_cancelled
     * @memberof StopEventBasic
     * @instance
     */
    StopEventBasic.prototype.stop_cancelled = false;

    /**
     * StopEventBasic trip_cancelled.
     * @member {boolean} trip_cancelled
     * @memberof StopEventBasic
     * @instance
     */
    StopEventBasic.prototype.trip_cancelled = false;

    /**
     * StopEventBasic trip_deleted.
     * @member {boolean} trip_deleted
     * @memberof StopEventBasic
     * @instance
     */
    StopEventBasic.prototype.trip_deleted = false;

    /**
     * StopEventBasic trip_id.
     * @member {string} trip_id
     * @memberof StopEventBasic
     * @instance
     */
    StopEventBasic.prototype.trip_id = "";

    /**
     * StopEventBasic headsign.
     * @member {string} headsign
     * @memberof StopEventBasic
     * @instance
     */
    StopEventBasic.prototype.headsign = "";

    /**
     * StopEventBasic vehicle_number.
     * @member {string} vehicle_number
     * @memberof StopEventBasic
     * @instance
     */
    StopEventBasic.prototype.vehicle_number = "";

    /**
     * StopEventBasic trip_short_name.
     * @member {string} trip_short_name
     * @memberof StopEventBasic
     * @instance
     */
    StopEventBasic.prototype.trip_short_name = "";

    /**
     * StopEventBasic route_name.
     * @member {string} route_name
     * @memberof StopEventBasic
     * @instance
     */
    StopEventBasic.prototype.route_name = "";

    /**
     * StopEventBasic route_color.
     * @member {number} route_color
     * @memberof StopEventBasic
     * @instance
     */
    StopEventBasic.prototype.route_color = 255;

    /**
     * StopEventBasic route_text_color.
     * @member {number} route_text_color
     * @memberof StopEventBasic
     * @instance
     */
    StopEventBasic.prototype.route_text_color = 0;

    /**
     * StopEventBasic route_type.
     * @member {RouteType} route_type
     * @memberof StopEventBasic
     * @instance
     */
    StopEventBasic.prototype.route_type = 0;

    /**
     * StopEventBasic agency_name.
     * @member {string} agency_name
     * @memberof StopEventBasic
     * @instance
     */
    StopEventBasic.prototype.agency_name = "";

    /**
     * Creates a new StopEventBasic instance using the specified properties.
     * @function create
     * @memberof StopEventBasic
     * @static
     * @param {StopEventBasic.$Properties=} [properties] Properties to set
     * @returns {StopEventBasic} StopEventBasic instance
     * @type {{
     *   (properties: StopEventBasic.$Shape): StopEventBasic & StopEventBasic.$Shape;
     *   (properties?: StopEventBasic.$Properties): StopEventBasic;
     * }}
     */
    StopEventBasic.create = function(properties) {
        return new StopEventBasic(properties);
    };

    /**
     * Encodes the specified StopEventBasic message. Does not implicitly {@link StopEventBasic.verify|verify} messages.
     * @function encode
     * @memberof StopEventBasic
     * @static
     * @param {StopEventBasic.$Properties} message StopEventBasic message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    StopEventBasic.encode = function (message, writer, _depth) {
        if (!writer)
            writer = $Writer.create();
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        if (message.scheduled_arrival != null && $Object.hasOwnProperty.call(message, "scheduled_arrival"))
            writer.uint32(/* id 1, wireType 5 =*/13).sfixed32(message.scheduled_arrival);
        if (message.scheduled_departure != null && $Object.hasOwnProperty.call(message, "scheduled_departure"))
            writer.uint32(/* id 2, wireType 5 =*/21).sfixed32(message.scheduled_departure);
        if (message.realtime_arrival != null && $Object.hasOwnProperty.call(message, "realtime_arrival"))
            writer.uint32(/* id 3, wireType 5 =*/29).sfixed32(message.realtime_arrival);
        if (message.realtime_departure != null && $Object.hasOwnProperty.call(message, "realtime_departure"))
            writer.uint32(/* id 4, wireType 5 =*/37).sfixed32(message.realtime_departure);
        if (message.trip_modified != null && $Object.hasOwnProperty.call(message, "trip_modified"))
            writer.uint32(/* id 5, wireType 0 =*/40).bool(message.trip_modified);
        if (message.stop_cancelled != null && $Object.hasOwnProperty.call(message, "stop_cancelled"))
            writer.uint32(/* id 6, wireType 0 =*/48).bool(message.stop_cancelled);
        if (message.trip_cancelled != null && $Object.hasOwnProperty.call(message, "trip_cancelled"))
            writer.uint32(/* id 7, wireType 0 =*/56).bool(message.trip_cancelled);
        if (message.trip_deleted != null && $Object.hasOwnProperty.call(message, "trip_deleted"))
            writer.uint32(/* id 8, wireType 0 =*/64).bool(message.trip_deleted);
        if (message.trip_id != null && $Object.hasOwnProperty.call(message, "trip_id"))
            writer.uint32(/* id 9, wireType 2 =*/74).string(message.trip_id);
        if (message.headsign != null && $Object.hasOwnProperty.call(message, "headsign"))
            writer.uint32(/* id 10, wireType 2 =*/82).string(message.headsign);
        if (message.vehicle_number != null && $Object.hasOwnProperty.call(message, "vehicle_number"))
            writer.uint32(/* id 11, wireType 2 =*/90).string(message.vehicle_number);
        if (message.trip_short_name != null && $Object.hasOwnProperty.call(message, "trip_short_name"))
            writer.uint32(/* id 12, wireType 2 =*/98).string(message.trip_short_name);
        if (message.route_name != null && $Object.hasOwnProperty.call(message, "route_name"))
            writer.uint32(/* id 13, wireType 2 =*/106).string(message.route_name);
        if (message.route_color != null && $Object.hasOwnProperty.call(message, "route_color"))
            writer.uint32(/* id 14, wireType 0 =*/112).uint32(message.route_color);
        if (message.route_text_color != null && $Object.hasOwnProperty.call(message, "route_text_color"))
            writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.route_text_color);
        if (message.route_type != null && $Object.hasOwnProperty.call(message, "route_type"))
            writer.uint32(/* id 16, wireType 0 =*/128).int32(message.route_type);
        if (message.agency_name != null && $Object.hasOwnProperty.call(message, "agency_name"))
            writer.uint32(/* id 17, wireType 2 =*/138).string(message.agency_name);
        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
            for (var i = 0; i < message.$unknowns.length; ++i)
                writer.raw(message.$unknowns[i]);
        return writer;
    };

    /**
     * Encodes the specified StopEventBasic message, length delimited. Does not implicitly {@link StopEventBasic.verify|verify} messages.
     * @function encodeDelimited
     * @memberof StopEventBasic
     * @static
     * @param {StopEventBasic.$Properties} message StopEventBasic message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    StopEventBasic.encodeDelimited = function(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };

    /**
     * Decodes a StopEventBasic message from the specified reader or buffer.
     * @function decode
     * @memberof StopEventBasic
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {StopEventBasic & StopEventBasic.$Shape} StopEventBasic
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    StopEventBasic.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $Reader.recursionLimit)
            throw $Error("max depth exceeded");
        var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.StopEventBasic(), value;
        while (reader.pos < end) {
            var start = reader.pos;
            var tag = reader.tag();
            if (tag === _end) {
                _end = $undefined;
                break;
            }
            var wireType = tag & 7;
            switch (tag >>>= 3) {
            case 1: {
                    if (wireType !== 5)
                        break;
                    message.scheduled_arrival = reader.sfixed32();
                    continue;
                }
            case 2: {
                    if (wireType !== 5)
                        break;
                    message.scheduled_departure = reader.sfixed32();
                    continue;
                }
            case 3: {
                    if (wireType !== 5)
                        break;
                    message.realtime_arrival = reader.sfixed32();
                    continue;
                }
            case 4: {
                    if (wireType !== 5)
                        break;
                    message.realtime_departure = reader.sfixed32();
                    continue;
                }
            case 5: {
                    if (wireType !== 0)
                        break;
                    message.trip_modified = reader.bool();
                    continue;
                }
            case 6: {
                    if (wireType !== 0)
                        break;
                    message.stop_cancelled = reader.bool();
                    continue;
                }
            case 7: {
                    if (wireType !== 0)
                        break;
                    message.trip_cancelled = reader.bool();
                    continue;
                }
            case 8: {
                    if (wireType !== 0)
                        break;
                    message.trip_deleted = reader.bool();
                    continue;
                }
            case 9: {
                    if (wireType !== 2)
                        break;
                    message.trip_id = reader.stringVerify();
                    continue;
                }
            case 10: {
                    if (wireType !== 2)
                        break;
                    message.headsign = reader.stringVerify();
                    continue;
                }
            case 11: {
                    if (wireType !== 2)
                        break;
                    message.vehicle_number = reader.stringVerify();
                    continue;
                }
            case 12: {
                    if (wireType !== 2)
                        break;
                    message.trip_short_name = reader.stringVerify();
                    continue;
                }
            case 13: {
                    if (wireType !== 2)
                        break;
                    message.route_name = reader.stringVerify();
                    continue;
                }
            case 14: {
                    if (wireType !== 0)
                        break;
                    message.route_color = reader.uint32();
                    continue;
                }
            case 15: {
                    if (wireType !== 0)
                        break;
                    message.route_text_color = reader.uint32();
                    continue;
                }
            case 16: {
                    if (wireType !== 0)
                        break;
                    message.route_type = reader.int32();
                    continue;
                }
            case 17: {
                    if (wireType !== 2)
                        break;
                    message.agency_name = reader.stringVerify();
                    continue;
                }
            }
            reader.skipType(wireType, _depth, tag);
            if (!reader.discardUnknown) {
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
        }
        if (_end !== $undefined)
            throw $Error("missing end group");
        return message;
    };

    /**
     * Decodes a StopEventBasic message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof StopEventBasic
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {StopEventBasic & StopEventBasic.$Shape} StopEventBasic
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    StopEventBasic.decodeDelimited = function(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a StopEventBasic message.
     * @function verify
     * @memberof StopEventBasic
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    StopEventBasic.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            return "max depth exceeded";
        if (message.scheduled_arrival != null && $Object.hasOwnProperty.call(message, "scheduled_arrival"))
            if (!$util.isInteger(message.scheduled_arrival))
                return "scheduled_arrival: integer expected";
        if (message.scheduled_departure != null && $Object.hasOwnProperty.call(message, "scheduled_departure"))
            if (!$util.isInteger(message.scheduled_departure))
                return "scheduled_departure: integer expected";
        if (message.realtime_arrival != null && $Object.hasOwnProperty.call(message, "realtime_arrival"))
            if (!$util.isInteger(message.realtime_arrival))
                return "realtime_arrival: integer expected";
        if (message.realtime_departure != null && $Object.hasOwnProperty.call(message, "realtime_departure"))
            if (!$util.isInteger(message.realtime_departure))
                return "realtime_departure: integer expected";
        if (message.trip_modified != null && $Object.hasOwnProperty.call(message, "trip_modified"))
            if (typeof message.trip_modified !== "boolean")
                return "trip_modified: boolean expected";
        if (message.stop_cancelled != null && $Object.hasOwnProperty.call(message, "stop_cancelled"))
            if (typeof message.stop_cancelled !== "boolean")
                return "stop_cancelled: boolean expected";
        if (message.trip_cancelled != null && $Object.hasOwnProperty.call(message, "trip_cancelled"))
            if (typeof message.trip_cancelled !== "boolean")
                return "trip_cancelled: boolean expected";
        if (message.trip_deleted != null && $Object.hasOwnProperty.call(message, "trip_deleted"))
            if (typeof message.trip_deleted !== "boolean")
                return "trip_deleted: boolean expected";
        if (message.trip_id != null && $Object.hasOwnProperty.call(message, "trip_id"))
            if (!$util.isString(message.trip_id))
                return "trip_id: string expected";
        if (message.headsign != null && $Object.hasOwnProperty.call(message, "headsign"))
            if (!$util.isString(message.headsign))
                return "headsign: string expected";
        if (message.vehicle_number != null && $Object.hasOwnProperty.call(message, "vehicle_number"))
            if (!$util.isString(message.vehicle_number))
                return "vehicle_number: string expected";
        if (message.trip_short_name != null && $Object.hasOwnProperty.call(message, "trip_short_name"))
            if (!$util.isString(message.trip_short_name))
                return "trip_short_name: string expected";
        if (message.route_name != null && $Object.hasOwnProperty.call(message, "route_name"))
            if (!$util.isString(message.route_name))
                return "route_name: string expected";
        if (message.route_color != null && $Object.hasOwnProperty.call(message, "route_color"))
            if (!$util.isInteger(message.route_color))
                return "route_color: integer expected";
        if (message.route_text_color != null && $Object.hasOwnProperty.call(message, "route_text_color"))
            if (!$util.isInteger(message.route_text_color))
                return "route_text_color: integer expected";
        if (message.route_type != null && $Object.hasOwnProperty.call(message, "route_type"))
            if (typeof message.route_type !== "number" || (message.route_type | 0) !== message.route_type)
                return "route_type: enum value expected";
        if (message.agency_name != null && $Object.hasOwnProperty.call(message, "agency_name"))
            if (!$util.isString(message.agency_name))
                return "agency_name: string expected";
        return null;
    };

    /**
     * Creates a StopEventBasic message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof StopEventBasic
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {StopEventBasic} StopEventBasic
     */
    StopEventBasic.fromObject = function (object, _depth) {
        if (object instanceof $root.StopEventBasic)
            return object;
        if (!$util.isObject(object))
            throw $TypeError(".StopEventBasic: object expected");
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var message = new $root.StopEventBasic();
        if (object.scheduled_arrival != null)
            message.scheduled_arrival = object.scheduled_arrival | 0;
        if (object.scheduled_departure != null)
            message.scheduled_departure = object.scheduled_departure | 0;
        if (object.realtime_arrival != null)
            message.realtime_arrival = object.realtime_arrival | 0;
        if (object.realtime_departure != null)
            message.realtime_departure = object.realtime_departure | 0;
        if (object.trip_modified != null)
            message.trip_modified = $Boolean(object.trip_modified);
        if (object.stop_cancelled != null)
            message.stop_cancelled = $Boolean(object.stop_cancelled);
        if (object.trip_cancelled != null)
            message.trip_cancelled = $Boolean(object.trip_cancelled);
        if (object.trip_deleted != null)
            message.trip_deleted = $Boolean(object.trip_deleted);
        if (object.trip_id != null)
            message.trip_id = $String(object.trip_id);
        if (object.headsign != null)
            message.headsign = $String(object.headsign);
        if (object.vehicle_number != null)
            message.vehicle_number = $String(object.vehicle_number);
        if (object.trip_short_name != null)
            message.trip_short_name = $String(object.trip_short_name);
        if (object.route_name != null)
            message.route_name = $String(object.route_name);
        if (object.route_color != null)
            message.route_color = object.route_color >>> 0;
        if (object.route_text_color != null)
            message.route_text_color = object.route_text_color >>> 0;
        switch (object.route_type) {
        case "TRAM":
        case 0:
            message.route_type = 0;
            break;
        case "METRO":
        case 1:
            message.route_type = 1;
            break;
        case "RAIL":
        case 2:
            message.route_type = 2;
            break;
        case "BUS":
        case 3:
            message.route_type = 3;
            break;
        case "FERRY":
        case 4:
            message.route_type = 4;
            break;
        case "CABLE_CAR":
        case 5:
            message.route_type = 5;
            break;
        case "AERIAL":
        case 6:
            message.route_type = 6;
            break;
        case "FUNICULAR":
        case 7:
            message.route_type = 7;
            break;
        case "TROLLEYBUS":
        case 11:
            message.route_type = 11;
            break;
        case "MONORAIL":
        case 12:
            message.route_type = 12;
            break;
        default:
            if (typeof object.route_type === "number" && (object.route_type | 0) === object.route_type)
                message.route_type = object.route_type;
        }
        if (object.agency_name != null)
            message.agency_name = $String(object.agency_name);
        return message;
    };

    /**
     * Creates a plain object from a StopEventBasic message. Also converts values to other types if specified.
     * @function toObject
     * @memberof StopEventBasic
     * @static
     * @param {StopEventBasic} message StopEventBasic
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    StopEventBasic.toObject = function (message, options, _depth) {
        if (!options)
            options = {};
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var object = {};
        if (options.defaults) {
            object.scheduled_arrival = 0;
            object.scheduled_departure = 0;
            object.realtime_arrival = 0;
            object.realtime_departure = 0;
            object.trip_modified = false;
            object.stop_cancelled = false;
            object.trip_cancelled = false;
            object.trip_deleted = false;
            object.trip_id = "";
            object.headsign = "";
            object.vehicle_number = "";
            object.trip_short_name = "";
            object.route_name = "";
            object.route_color = 255;
            object.route_text_color = 0;
            object.route_type = options.enums === $String ? "TRAM" : 0;
            object.agency_name = "";
        }
        if (message.scheduled_arrival != null && $Object.hasOwnProperty.call(message, "scheduled_arrival"))
            object.scheduled_arrival = message.scheduled_arrival;
        if (message.scheduled_departure != null && $Object.hasOwnProperty.call(message, "scheduled_departure"))
            object.scheduled_departure = message.scheduled_departure;
        if (message.realtime_arrival != null && $Object.hasOwnProperty.call(message, "realtime_arrival"))
            object.realtime_arrival = message.realtime_arrival;
        if (message.realtime_departure != null && $Object.hasOwnProperty.call(message, "realtime_departure"))
            object.realtime_departure = message.realtime_departure;
        if (message.trip_modified != null && $Object.hasOwnProperty.call(message, "trip_modified"))
            object.trip_modified = message.trip_modified;
        if (message.stop_cancelled != null && $Object.hasOwnProperty.call(message, "stop_cancelled"))
            object.stop_cancelled = message.stop_cancelled;
        if (message.trip_cancelled != null && $Object.hasOwnProperty.call(message, "trip_cancelled"))
            object.trip_cancelled = message.trip_cancelled;
        if (message.trip_deleted != null && $Object.hasOwnProperty.call(message, "trip_deleted"))
            object.trip_deleted = message.trip_deleted;
        if (message.trip_id != null && $Object.hasOwnProperty.call(message, "trip_id"))
            object.trip_id = message.trip_id;
        if (message.headsign != null && $Object.hasOwnProperty.call(message, "headsign"))
            object.headsign = message.headsign;
        if (message.vehicle_number != null && $Object.hasOwnProperty.call(message, "vehicle_number"))
            object.vehicle_number = message.vehicle_number;
        if (message.trip_short_name != null && $Object.hasOwnProperty.call(message, "trip_short_name"))
            object.trip_short_name = message.trip_short_name;
        if (message.route_name != null && $Object.hasOwnProperty.call(message, "route_name"))
            object.route_name = message.route_name;
        if (message.route_color != null && $Object.hasOwnProperty.call(message, "route_color"))
            object.route_color = message.route_color;
        if (message.route_text_color != null && $Object.hasOwnProperty.call(message, "route_text_color"))
            object.route_text_color = message.route_text_color;
        if (message.route_type != null && $Object.hasOwnProperty.call(message, "route_type"))
            object.route_type = options.enums === $String ? $root.RouteType[message.route_type] === $undefined ? message.route_type : $root.RouteType[message.route_type] : message.route_type;
        if (message.agency_name != null && $Object.hasOwnProperty.call(message, "agency_name"))
            object.agency_name = message.agency_name;
        return object;
    };

    /**
     * Converts this StopEventBasic to JSON.
     * @function toJSON
     * @memberof StopEventBasic
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    StopEventBasic.prototype.toJSON = function() {
        return StopEventBasic.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the type url for StopEventBasic
     * @function getTypeUrl
     * @memberof StopEventBasic
     * @static
     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns {string} The type url
     */
    StopEventBasic.getTypeUrl = function(prefix) {
        if (prefix === $undefined)
            prefix = "type.googleapis.com";
        return prefix + "/StopEventBasic";
    };

    return StopEventBasic;
})();

$root.AlertBasic = (function() {

    /**
     * Properties of an AlertBasic.
     * @typedef {Object} AlertBasic.$Properties
     * @property {string|null} [header_text] AlertBasic header_text
     * @property {string|null} [description_text] AlertBasic description_text
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */

    /**
     * Properties of an AlertBasic.
     * @exports IAlertBasic
     * @interface IAlertBasic
     * @augments AlertBasic.$Properties
     * @deprecated Use AlertBasic.$Properties instead.
     */

    /**
     * Shape of an AlertBasic.
     * @typedef {AlertBasic.$Properties} AlertBasic.$Shape
     */

    /**
     * Constructs a new AlertBasic.
     * @exports AlertBasic
     * @classdesc Represents an AlertBasic.
     * @constructor
     * @param {AlertBasic.$Properties=} [properties] Properties to set
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */
    var AlertBasic = function (properties) {
        if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    };

    /**
     * AlertBasic header_text.
     * @member {string} header_text
     * @memberof AlertBasic
     * @instance
     */
    AlertBasic.prototype.header_text = "";

    /**
     * AlertBasic description_text.
     * @member {string} description_text
     * @memberof AlertBasic
     * @instance
     */
    AlertBasic.prototype.description_text = "";

    /**
     * Creates a new AlertBasic instance using the specified properties.
     * @function create
     * @memberof AlertBasic
     * @static
     * @param {AlertBasic.$Properties=} [properties] Properties to set
     * @returns {AlertBasic} AlertBasic instance
     * @type {{
     *   (properties: AlertBasic.$Shape): AlertBasic & AlertBasic.$Shape;
     *   (properties?: AlertBasic.$Properties): AlertBasic;
     * }}
     */
    AlertBasic.create = function(properties) {
        return new AlertBasic(properties);
    };

    /**
     * Encodes the specified AlertBasic message. Does not implicitly {@link AlertBasic.verify|verify} messages.
     * @function encode
     * @memberof AlertBasic
     * @static
     * @param {AlertBasic.$Properties} message AlertBasic message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AlertBasic.encode = function (message, writer, _depth) {
        if (!writer)
            writer = $Writer.create();
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        if (message.header_text != null && $Object.hasOwnProperty.call(message, "header_text"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.header_text);
        if (message.description_text != null && $Object.hasOwnProperty.call(message, "description_text"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.description_text);
        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
            for (var i = 0; i < message.$unknowns.length; ++i)
                writer.raw(message.$unknowns[i]);
        return writer;
    };

    /**
     * Encodes the specified AlertBasic message, length delimited. Does not implicitly {@link AlertBasic.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AlertBasic
     * @static
     * @param {AlertBasic.$Properties} message AlertBasic message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AlertBasic.encodeDelimited = function(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };

    /**
     * Decodes an AlertBasic message from the specified reader or buffer.
     * @function decode
     * @memberof AlertBasic
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AlertBasic & AlertBasic.$Shape} AlertBasic
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AlertBasic.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $Reader.recursionLimit)
            throw $Error("max depth exceeded");
        var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.AlertBasic();
        while (reader.pos < end) {
            var start = reader.pos;
            var tag = reader.tag();
            if (tag === _end) {
                _end = $undefined;
                break;
            }
            var wireType = tag & 7;
            switch (tag >>>= 3) {
            case 1: {
                    if (wireType !== 2)
                        break;
                    message.header_text = reader.stringVerify();
                    continue;
                }
            case 2: {
                    if (wireType !== 2)
                        break;
                    message.description_text = reader.stringVerify();
                    continue;
                }
            }
            reader.skipType(wireType, _depth, tag);
            if (!reader.discardUnknown) {
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
        }
        if (_end !== $undefined)
            throw $Error("missing end group");
        return message;
    };

    /**
     * Decodes an AlertBasic message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AlertBasic
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AlertBasic & AlertBasic.$Shape} AlertBasic
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AlertBasic.decodeDelimited = function(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AlertBasic message.
     * @function verify
     * @memberof AlertBasic
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AlertBasic.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            return "max depth exceeded";
        if (message.header_text != null && $Object.hasOwnProperty.call(message, "header_text"))
            if (!$util.isString(message.header_text))
                return "header_text: string expected";
        if (message.description_text != null && $Object.hasOwnProperty.call(message, "description_text"))
            if (!$util.isString(message.description_text))
                return "description_text: string expected";
        return null;
    };

    /**
     * Creates an AlertBasic message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AlertBasic
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AlertBasic} AlertBasic
     */
    AlertBasic.fromObject = function (object, _depth) {
        if (object instanceof $root.AlertBasic)
            return object;
        if (!$util.isObject(object))
            throw $TypeError(".AlertBasic: object expected");
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var message = new $root.AlertBasic();
        if (object.header_text != null)
            message.header_text = $String(object.header_text);
        if (object.description_text != null)
            message.description_text = $String(object.description_text);
        return message;
    };

    /**
     * Creates a plain object from an AlertBasic message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AlertBasic
     * @static
     * @param {AlertBasic} message AlertBasic
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AlertBasic.toObject = function (message, options, _depth) {
        if (!options)
            options = {};
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var object = {};
        if (options.defaults) {
            object.header_text = "";
            object.description_text = "";
        }
        if (message.header_text != null && $Object.hasOwnProperty.call(message, "header_text"))
            object.header_text = message.header_text;
        if (message.description_text != null && $Object.hasOwnProperty.call(message, "description_text"))
            object.description_text = message.description_text;
        return object;
    };

    /**
     * Converts this AlertBasic to JSON.
     * @function toJSON
     * @memberof AlertBasic
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AlertBasic.prototype.toJSON = function() {
        return AlertBasic.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the type url for AlertBasic
     * @function getTypeUrl
     * @memberof AlertBasic
     * @static
     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns {string} The type url
     */
    AlertBasic.getTypeUrl = function(prefix) {
        if (prefix === $undefined)
            prefix = "type.googleapis.com";
        return prefix + "/AlertBasic";
    };

    return AlertBasic;
})();

$root.DeparturesBoardResponse = (function() {

    /**
     * Properties of a DeparturesBoardResponse.
     * @typedef {Object} DeparturesBoardResponse.$Properties
     * @property {boolean|null} [success] DeparturesBoardResponse success
     * @property {StopBasic.$Properties|null} [stop] DeparturesBoardResponse stop
     * @property {Array.<AlertBasic.$Properties>|null} [alerts] DeparturesBoardResponse alerts
     * @property {Array.<StopEventBasic.$Properties>|null} [stop_events] DeparturesBoardResponse stop_events
     * @property {boolean|null} [truncated] DeparturesBoardResponse truncated
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */

    /**
     * Properties of a DeparturesBoardResponse.
     * @exports IDeparturesBoardResponse
     * @interface IDeparturesBoardResponse
     * @augments DeparturesBoardResponse.$Properties
     * @deprecated Use DeparturesBoardResponse.$Properties instead.
     */

    /**
     * Shape of a DeparturesBoardResponse.
     * @typedef {DeparturesBoardResponse.$Properties} DeparturesBoardResponse.$Shape
     */

    /**
     * Constructs a new DeparturesBoardResponse.
     * @exports DeparturesBoardResponse
     * @classdesc Represents a DeparturesBoardResponse.
     * @constructor
     * @param {DeparturesBoardResponse.$Properties=} [properties] Properties to set
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */
    var DeparturesBoardResponse = function (properties) {
        this.alerts = [];
        this.stop_events = [];
        if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    };

    /**
     * DeparturesBoardResponse success.
     * @member {boolean} success
     * @memberof DeparturesBoardResponse
     * @instance
     */
    DeparturesBoardResponse.prototype.success = false;

    /**
     * DeparturesBoardResponse stop.
     * @member {StopBasic.$Properties|null|undefined} stop
     * @memberof DeparturesBoardResponse
     * @instance
     */
    DeparturesBoardResponse.prototype.stop = null;

    /**
     * DeparturesBoardResponse alerts.
     * @member {Array.<AlertBasic.$Properties>} alerts
     * @memberof DeparturesBoardResponse
     * @instance
     */
    DeparturesBoardResponse.prototype.alerts = $util.emptyArray;

    /**
     * DeparturesBoardResponse stop_events.
     * @member {Array.<StopEventBasic.$Properties>} stop_events
     * @memberof DeparturesBoardResponse
     * @instance
     */
    DeparturesBoardResponse.prototype.stop_events = $util.emptyArray;

    /**
     * DeparturesBoardResponse truncated.
     * @member {boolean} truncated
     * @memberof DeparturesBoardResponse
     * @instance
     */
    DeparturesBoardResponse.prototype.truncated = false;

    /**
     * Creates a new DeparturesBoardResponse instance using the specified properties.
     * @function create
     * @memberof DeparturesBoardResponse
     * @static
     * @param {DeparturesBoardResponse.$Properties=} [properties] Properties to set
     * @returns {DeparturesBoardResponse} DeparturesBoardResponse instance
     * @type {{
     *   (properties: DeparturesBoardResponse.$Shape): DeparturesBoardResponse & DeparturesBoardResponse.$Shape;
     *   (properties?: DeparturesBoardResponse.$Properties): DeparturesBoardResponse;
     * }}
     */
    DeparturesBoardResponse.create = function(properties) {
        return new DeparturesBoardResponse(properties);
    };

    /**
     * Encodes the specified DeparturesBoardResponse message. Does not implicitly {@link DeparturesBoardResponse.verify|verify} messages.
     * @function encode
     * @memberof DeparturesBoardResponse
     * @static
     * @param {DeparturesBoardResponse.$Properties} message DeparturesBoardResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DeparturesBoardResponse.encode = function (message, writer, _depth) {
        if (!writer)
            writer = $Writer.create();
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        if (message.success != null && $Object.hasOwnProperty.call(message, "success"))
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
        if (message.stop != null && $Object.hasOwnProperty.call(message, "stop"))
            $root.StopBasic.encode(message.stop, writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
        if (message.alerts != null && message.alerts.length)
            for (var i = 0; i < message.alerts.length; ++i)
                $root.AlertBasic.encode(message.alerts[i], writer.uint32(/* id 3, wireType 2 =*/26).fork(), _depth + 1).ldelim();
        if (message.stop_events != null && message.stop_events.length)
            for (var i = 0; i < message.stop_events.length; ++i)
                $root.StopEventBasic.encode(message.stop_events[i], writer.uint32(/* id 4, wireType 2 =*/34).fork(), _depth + 1).ldelim();
        if (message.truncated != null && $Object.hasOwnProperty.call(message, "truncated"))
            writer.uint32(/* id 5, wireType 0 =*/40).bool(message.truncated);
        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
            for (var i = 0; i < message.$unknowns.length; ++i)
                writer.raw(message.$unknowns[i]);
        return writer;
    };

    /**
     * Encodes the specified DeparturesBoardResponse message, length delimited. Does not implicitly {@link DeparturesBoardResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DeparturesBoardResponse
     * @static
     * @param {DeparturesBoardResponse.$Properties} message DeparturesBoardResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DeparturesBoardResponse.encodeDelimited = function(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };

    /**
     * Decodes a DeparturesBoardResponse message from the specified reader or buffer.
     * @function decode
     * @memberof DeparturesBoardResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DeparturesBoardResponse & DeparturesBoardResponse.$Shape} DeparturesBoardResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DeparturesBoardResponse.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $Reader.recursionLimit)
            throw $Error("max depth exceeded");
        var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.DeparturesBoardResponse();
        while (reader.pos < end) {
            var start = reader.pos;
            var tag = reader.tag();
            if (tag === _end) {
                _end = $undefined;
                break;
            }
            var wireType = tag & 7;
            switch (tag >>>= 3) {
            case 1: {
                    if (wireType !== 0)
                        break;
                    message.success = reader.bool();
                    continue;
                }
            case 2: {
                    if (wireType !== 2)
                        break;
                    message.stop = $root.StopBasic.decode(reader, reader.uint32(), $undefined, _depth + 1, message.stop);
                    continue;
                }
            case 3: {
                    if (wireType !== 2)
                        break;
                    if (!(message.alerts && message.alerts.length))
                        message.alerts = [];
                    message.alerts.push($root.AlertBasic.decode(reader, reader.uint32(), $undefined, _depth + 1));
                    continue;
                }
            case 4: {
                    if (wireType !== 2)
                        break;
                    if (!(message.stop_events && message.stop_events.length))
                        message.stop_events = [];
                    message.stop_events.push($root.StopEventBasic.decode(reader, reader.uint32(), $undefined, _depth + 1));
                    continue;
                }
            case 5: {
                    if (wireType !== 0)
                        break;
                    message.truncated = reader.bool();
                    continue;
                }
            }
            reader.skipType(wireType, _depth, tag);
            if (!reader.discardUnknown) {
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
        }
        if (_end !== $undefined)
            throw $Error("missing end group");
        return message;
    };

    /**
     * Decodes a DeparturesBoardResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DeparturesBoardResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DeparturesBoardResponse & DeparturesBoardResponse.$Shape} DeparturesBoardResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DeparturesBoardResponse.decodeDelimited = function(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DeparturesBoardResponse message.
     * @function verify
     * @memberof DeparturesBoardResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DeparturesBoardResponse.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            return "max depth exceeded";
        if (message.success != null && $Object.hasOwnProperty.call(message, "success"))
            if (typeof message.success !== "boolean")
                return "success: boolean expected";
        if (message.stop != null && $Object.hasOwnProperty.call(message, "stop")) {
            var error = $root.StopBasic.verify(message.stop, _depth + 1);
            if (error)
                return "stop." + error;
        }
        if (message.alerts != null && $Object.hasOwnProperty.call(message, "alerts")) {
            if (!$Array.isArray(message.alerts))
                return "alerts: array expected";
            for (var i = 0; i < message.alerts.length; ++i) {
                var error = $root.AlertBasic.verify(message.alerts[i], _depth + 1);
                if (error)
                    return "alerts." + error;
            }
        }
        if (message.stop_events != null && $Object.hasOwnProperty.call(message, "stop_events")) {
            if (!$Array.isArray(message.stop_events))
                return "stop_events: array expected";
            for (var i = 0; i < message.stop_events.length; ++i) {
                var error = $root.StopEventBasic.verify(message.stop_events[i], _depth + 1);
                if (error)
                    return "stop_events." + error;
            }
        }
        if (message.truncated != null && $Object.hasOwnProperty.call(message, "truncated"))
            if (typeof message.truncated !== "boolean")
                return "truncated: boolean expected";
        return null;
    };

    /**
     * Creates a DeparturesBoardResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DeparturesBoardResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DeparturesBoardResponse} DeparturesBoardResponse
     */
    DeparturesBoardResponse.fromObject = function (object, _depth) {
        if (object instanceof $root.DeparturesBoardResponse)
            return object;
        if (!$util.isObject(object))
            throw $TypeError(".DeparturesBoardResponse: object expected");
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var message = new $root.DeparturesBoardResponse();
        if (object.success != null)
            message.success = $Boolean(object.success);
        if (object.stop != null) {
            if (!$util.isObject(object.stop))
                throw $TypeError(".DeparturesBoardResponse.stop: object expected");
            message.stop = $root.StopBasic.fromObject(object.stop, _depth + 1);
        }
        if (object.alerts) {
            if (!$Array.isArray(object.alerts))
                throw $TypeError(".DeparturesBoardResponse.alerts: array expected");
            message.alerts = $Array(object.alerts.length);
            for (var i = 0; i < object.alerts.length; ++i) {
                if (!$util.isObject(object.alerts[i]))
                    throw $TypeError(".DeparturesBoardResponse.alerts: object expected");
                message.alerts[i] = $root.AlertBasic.fromObject(object.alerts[i], _depth + 1);
            }
        }
        if (object.stop_events) {
            if (!$Array.isArray(object.stop_events))
                throw $TypeError(".DeparturesBoardResponse.stop_events: array expected");
            message.stop_events = $Array(object.stop_events.length);
            for (var i = 0; i < object.stop_events.length; ++i) {
                if (!$util.isObject(object.stop_events[i]))
                    throw $TypeError(".DeparturesBoardResponse.stop_events: object expected");
                message.stop_events[i] = $root.StopEventBasic.fromObject(object.stop_events[i], _depth + 1);
            }
        }
        if (object.truncated != null)
            message.truncated = $Boolean(object.truncated);
        return message;
    };

    /**
     * Creates a plain object from a DeparturesBoardResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DeparturesBoardResponse
     * @static
     * @param {DeparturesBoardResponse} message DeparturesBoardResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DeparturesBoardResponse.toObject = function (message, options, _depth) {
        if (!options)
            options = {};
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var object = {};
        if (options.arrays || options.defaults) {
            object.alerts = [];
            object.stop_events = [];
        }
        if (options.defaults) {
            object.success = false;
            object.stop = null;
            object.truncated = false;
        }
        if (message.success != null && $Object.hasOwnProperty.call(message, "success"))
            object.success = message.success;
        if (message.stop != null && $Object.hasOwnProperty.call(message, "stop"))
            object.stop = $root.StopBasic.toObject(message.stop, options, _depth + 1);
        if (message.alerts && message.alerts.length) {
            object.alerts = $Array(message.alerts.length);
            for (var j = 0; j < message.alerts.length; ++j)
                object.alerts[j] = $root.AlertBasic.toObject(message.alerts[j], options, _depth + 1);
        }
        if (message.stop_events && message.stop_events.length) {
            object.stop_events = $Array(message.stop_events.length);
            for (var j = 0; j < message.stop_events.length; ++j)
                object.stop_events[j] = $root.StopEventBasic.toObject(message.stop_events[j], options, _depth + 1);
        }
        if (message.truncated != null && $Object.hasOwnProperty.call(message, "truncated"))
            object.truncated = message.truncated;
        return object;
    };

    /**
     * Converts this DeparturesBoardResponse to JSON.
     * @function toJSON
     * @memberof DeparturesBoardResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DeparturesBoardResponse.prototype.toJSON = function() {
        return DeparturesBoardResponse.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the type url for DeparturesBoardResponse
     * @function getTypeUrl
     * @memberof DeparturesBoardResponse
     * @static
     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns {string} The type url
     */
    DeparturesBoardResponse.getTypeUrl = function(prefix) {
        if (prefix === $undefined)
            prefix = "type.googleapis.com";
        return prefix + "/DeparturesBoardResponse";
    };

    return DeparturesBoardResponse;
})();

$root.DeparturesBoardRequest = (function() {

    /**
     * Properties of a DeparturesBoardRequest.
     * @typedef {Object} DeparturesBoardRequest.$Properties
     * @property {string|null} [chateau_id] DeparturesBoardRequest chateau_id
     * @property {string|null} [stop_id] DeparturesBoardRequest stop_id
     * @property {number|null} [greater_than_time] DeparturesBoardRequest greater_than_time
     * @property {number|null} [less_than_time] DeparturesBoardRequest less_than_time
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */

    /**
     * Properties of a DeparturesBoardRequest.
     * @exports IDeparturesBoardRequest
     * @interface IDeparturesBoardRequest
     * @augments DeparturesBoardRequest.$Properties
     * @deprecated Use DeparturesBoardRequest.$Properties instead.
     */

    /**
     * Shape of a DeparturesBoardRequest.
     * @typedef {DeparturesBoardRequest.$Properties} DeparturesBoardRequest.$Shape
     */

    /**
     * Constructs a new DeparturesBoardRequest.
     * @exports DeparturesBoardRequest
     * @classdesc Represents a DeparturesBoardRequest.
     * @constructor
     * @param {DeparturesBoardRequest.$Properties=} [properties] Properties to set
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */
    var DeparturesBoardRequest = function (properties) {
        if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    };

    /**
     * DeparturesBoardRequest chateau_id.
     * @member {string} chateau_id
     * @memberof DeparturesBoardRequest
     * @instance
     */
    DeparturesBoardRequest.prototype.chateau_id = "";

    /**
     * DeparturesBoardRequest stop_id.
     * @member {string} stop_id
     * @memberof DeparturesBoardRequest
     * @instance
     */
    DeparturesBoardRequest.prototype.stop_id = "";

    /**
     * DeparturesBoardRequest greater_than_time.
     * @member {number} greater_than_time
     * @memberof DeparturesBoardRequest
     * @instance
     */
    DeparturesBoardRequest.prototype.greater_than_time = 0;

    /**
     * DeparturesBoardRequest less_than_time.
     * @member {number} less_than_time
     * @memberof DeparturesBoardRequest
     * @instance
     */
    DeparturesBoardRequest.prototype.less_than_time = 0;

    /**
     * Creates a new DeparturesBoardRequest instance using the specified properties.
     * @function create
     * @memberof DeparturesBoardRequest
     * @static
     * @param {DeparturesBoardRequest.$Properties=} [properties] Properties to set
     * @returns {DeparturesBoardRequest} DeparturesBoardRequest instance
     * @type {{
     *   (properties: DeparturesBoardRequest.$Shape): DeparturesBoardRequest & DeparturesBoardRequest.$Shape;
     *   (properties?: DeparturesBoardRequest.$Properties): DeparturesBoardRequest;
     * }}
     */
    DeparturesBoardRequest.create = function(properties) {
        return new DeparturesBoardRequest(properties);
    };

    /**
     * Encodes the specified DeparturesBoardRequest message. Does not implicitly {@link DeparturesBoardRequest.verify|verify} messages.
     * @function encode
     * @memberof DeparturesBoardRequest
     * @static
     * @param {DeparturesBoardRequest.$Properties} message DeparturesBoardRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DeparturesBoardRequest.encode = function (message, writer, _depth) {
        if (!writer)
            writer = $Writer.create();
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        if (message.chateau_id != null && $Object.hasOwnProperty.call(message, "chateau_id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.chateau_id);
        if (message.stop_id != null && $Object.hasOwnProperty.call(message, "stop_id"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.stop_id);
        if (message.greater_than_time != null && $Object.hasOwnProperty.call(message, "greater_than_time"))
            writer.uint32(/* id 3, wireType 5 =*/29).sfixed32(message.greater_than_time);
        if (message.less_than_time != null && $Object.hasOwnProperty.call(message, "less_than_time"))
            writer.uint32(/* id 4, wireType 5 =*/37).sfixed32(message.less_than_time);
        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
            for (var i = 0; i < message.$unknowns.length; ++i)
                writer.raw(message.$unknowns[i]);
        return writer;
    };

    /**
     * Encodes the specified DeparturesBoardRequest message, length delimited. Does not implicitly {@link DeparturesBoardRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DeparturesBoardRequest
     * @static
     * @param {DeparturesBoardRequest.$Properties} message DeparturesBoardRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DeparturesBoardRequest.encodeDelimited = function(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };

    /**
     * Decodes a DeparturesBoardRequest message from the specified reader or buffer.
     * @function decode
     * @memberof DeparturesBoardRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DeparturesBoardRequest & DeparturesBoardRequest.$Shape} DeparturesBoardRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DeparturesBoardRequest.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $Reader.recursionLimit)
            throw $Error("max depth exceeded");
        var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.DeparturesBoardRequest();
        while (reader.pos < end) {
            var start = reader.pos;
            var tag = reader.tag();
            if (tag === _end) {
                _end = $undefined;
                break;
            }
            var wireType = tag & 7;
            switch (tag >>>= 3) {
            case 1: {
                    if (wireType !== 2)
                        break;
                    message.chateau_id = reader.stringVerify();
                    continue;
                }
            case 2: {
                    if (wireType !== 2)
                        break;
                    message.stop_id = reader.stringVerify();
                    continue;
                }
            case 3: {
                    if (wireType !== 5)
                        break;
                    message.greater_than_time = reader.sfixed32();
                    continue;
                }
            case 4: {
                    if (wireType !== 5)
                        break;
                    message.less_than_time = reader.sfixed32();
                    continue;
                }
            }
            reader.skipType(wireType, _depth, tag);
            if (!reader.discardUnknown) {
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
        }
        if (_end !== $undefined)
            throw $Error("missing end group");
        return message;
    };

    /**
     * Decodes a DeparturesBoardRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DeparturesBoardRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DeparturesBoardRequest & DeparturesBoardRequest.$Shape} DeparturesBoardRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DeparturesBoardRequest.decodeDelimited = function(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DeparturesBoardRequest message.
     * @function verify
     * @memberof DeparturesBoardRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DeparturesBoardRequest.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            return "max depth exceeded";
        if (message.chateau_id != null && $Object.hasOwnProperty.call(message, "chateau_id"))
            if (!$util.isString(message.chateau_id))
                return "chateau_id: string expected";
        if (message.stop_id != null && $Object.hasOwnProperty.call(message, "stop_id"))
            if (!$util.isString(message.stop_id))
                return "stop_id: string expected";
        if (message.greater_than_time != null && $Object.hasOwnProperty.call(message, "greater_than_time"))
            if (!$util.isInteger(message.greater_than_time))
                return "greater_than_time: integer expected";
        if (message.less_than_time != null && $Object.hasOwnProperty.call(message, "less_than_time"))
            if (!$util.isInteger(message.less_than_time))
                return "less_than_time: integer expected";
        return null;
    };

    /**
     * Creates a DeparturesBoardRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DeparturesBoardRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DeparturesBoardRequest} DeparturesBoardRequest
     */
    DeparturesBoardRequest.fromObject = function (object, _depth) {
        if (object instanceof $root.DeparturesBoardRequest)
            return object;
        if (!$util.isObject(object))
            throw $TypeError(".DeparturesBoardRequest: object expected");
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var message = new $root.DeparturesBoardRequest();
        if (object.chateau_id != null)
            message.chateau_id = $String(object.chateau_id);
        if (object.stop_id != null)
            message.stop_id = $String(object.stop_id);
        if (object.greater_than_time != null)
            message.greater_than_time = object.greater_than_time | 0;
        if (object.less_than_time != null)
            message.less_than_time = object.less_than_time | 0;
        return message;
    };

    /**
     * Creates a plain object from a DeparturesBoardRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DeparturesBoardRequest
     * @static
     * @param {DeparturesBoardRequest} message DeparturesBoardRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DeparturesBoardRequest.toObject = function (message, options, _depth) {
        if (!options)
            options = {};
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var object = {};
        if (options.defaults) {
            object.chateau_id = "";
            object.stop_id = "";
            object.greater_than_time = 0;
            object.less_than_time = 0;
        }
        if (message.chateau_id != null && $Object.hasOwnProperty.call(message, "chateau_id"))
            object.chateau_id = message.chateau_id;
        if (message.stop_id != null && $Object.hasOwnProperty.call(message, "stop_id"))
            object.stop_id = message.stop_id;
        if (message.greater_than_time != null && $Object.hasOwnProperty.call(message, "greater_than_time"))
            object.greater_than_time = message.greater_than_time;
        if (message.less_than_time != null && $Object.hasOwnProperty.call(message, "less_than_time"))
            object.less_than_time = message.less_than_time;
        return object;
    };

    /**
     * Converts this DeparturesBoardRequest to JSON.
     * @function toJSON
     * @memberof DeparturesBoardRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DeparturesBoardRequest.prototype.toJSON = function() {
        return DeparturesBoardRequest.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the type url for DeparturesBoardRequest
     * @function getTypeUrl
     * @memberof DeparturesBoardRequest
     * @static
     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns {string} The type url
     */
    DeparturesBoardRequest.getTypeUrl = function(prefix) {
        if (prefix === $undefined)
            prefix = "type.googleapis.com";
        return prefix + "/DeparturesBoardRequest";
    };

    return DeparturesBoardRequest;
})();

/**
 * FieldType enum.
 * @name FieldType
 * @enum {number}
 * @property {number} FT_DEFAULT=0 FT_DEFAULT value
 * @property {number} FT_CALLBACK=1 FT_CALLBACK value
 * @property {number} FT_POINTER=4 FT_POINTER value
 * @property {number} FT_STATIC=2 FT_STATIC value
 * @property {number} FT_IGNORE=3 FT_IGNORE value
 * @property {number} FT_INLINE=5 FT_INLINE value
 */
$root.FieldType = (function() {
    var valuesById = $Object.create(null), values = $Object.create(valuesById);
    values[valuesById[0] = "FT_DEFAULT"] = 0;
    values[valuesById[1] = "FT_CALLBACK"] = 1;
    values[valuesById[4] = "FT_POINTER"] = 4;
    values[valuesById[2] = "FT_STATIC"] = 2;
    values[valuesById[3] = "FT_IGNORE"] = 3;
    values[valuesById[5] = "FT_INLINE"] = 5;
    return values;
})();

/**
 * IntSize enum.
 * @name IntSize
 * @enum {number}
 * @property {number} IS_DEFAULT=0 IS_DEFAULT value
 * @property {number} IS_8=8 IS_8 value
 * @property {number} IS_16=16 IS_16 value
 * @property {number} IS_32=32 IS_32 value
 * @property {number} IS_64=64 IS_64 value
 */
$root.IntSize = (function() {
    var valuesById = $Object.create(null), values = $Object.create(valuesById);
    values[valuesById[0] = "IS_DEFAULT"] = 0;
    values[valuesById[8] = "IS_8"] = 8;
    values[valuesById[16] = "IS_16"] = 16;
    values[valuesById[32] = "IS_32"] = 32;
    values[valuesById[64] = "IS_64"] = 64;
    return values;
})();

/**
 * TypenameMangling enum.
 * @name TypenameMangling
 * @enum {number}
 * @property {number} M_NONE=0 M_NONE value
 * @property {number} M_STRIP_PACKAGE=1 M_STRIP_PACKAGE value
 * @property {number} M_FLATTEN=2 M_FLATTEN value
 * @property {number} M_PACKAGE_INITIALS=3 M_PACKAGE_INITIALS value
 */
$root.TypenameMangling = (function() {
    var valuesById = $Object.create(null), values = $Object.create(valuesById);
    values[valuesById[0] = "M_NONE"] = 0;
    values[valuesById[1] = "M_STRIP_PACKAGE"] = 1;
    values[valuesById[2] = "M_FLATTEN"] = 2;
    values[valuesById[3] = "M_PACKAGE_INITIALS"] = 3;
    return values;
})();

/**
 * DescriptorSize enum.
 * @name DescriptorSize
 * @enum {number}
 * @property {number} DS_AUTO=0 DS_AUTO value
 * @property {number} DS_1=1 DS_1 value
 * @property {number} DS_2=2 DS_2 value
 * @property {number} DS_4=4 DS_4 value
 * @property {number} DS_8=8 DS_8 value
 */
$root.DescriptorSize = (function() {
    var valuesById = $Object.create(null), values = $Object.create(valuesById);
    values[valuesById[0] = "DS_AUTO"] = 0;
    values[valuesById[1] = "DS_1"] = 1;
    values[valuesById[2] = "DS_2"] = 2;
    values[valuesById[4] = "DS_4"] = 4;
    values[valuesById[8] = "DS_8"] = 8;
    return values;
})();

$root.NanoPBOptions = (function() {

    /**
     * Properties of a NanoPBOptions.
     * @typedef {Object} NanoPBOptions.$Properties
     * @property {number|null} [max_size] NanoPBOptions max_size
     * @property {number|null} [max_length] NanoPBOptions max_length
     * @property {number|null} [max_count] NanoPBOptions max_count
     * @property {IntSize|null} [int_size] NanoPBOptions int_size
     * @property {IntSize|null} [enum_intsize] NanoPBOptions enum_intsize
     * @property {FieldType|null} [type] NanoPBOptions type
     * @property {boolean|null} [long_names] NanoPBOptions long_names
     * @property {boolean|null} [packed_struct] NanoPBOptions packed_struct
     * @property {boolean|null} [packed_enum] NanoPBOptions packed_enum
     * @property {boolean|null} [skip_message] NanoPBOptions skip_message
     * @property {boolean|null} [no_unions] NanoPBOptions no_unions
     * @property {number|null} [msgid] NanoPBOptions msgid
     * @property {boolean|null} [anonymous_oneof] NanoPBOptions anonymous_oneof
     * @property {boolean|null} [proto3] NanoPBOptions proto3
     * @property {boolean|null} [proto3_singular_msgs] NanoPBOptions proto3_singular_msgs
     * @property {boolean|null} [enum_to_string] NanoPBOptions enum_to_string
     * @property {boolean|null} [enum_validate] NanoPBOptions enum_validate
     * @property {boolean|null} [fixed_length] NanoPBOptions fixed_length
     * @property {boolean|null} [fixed_count] NanoPBOptions fixed_count
     * @property {boolean|null} [submsg_callback] NanoPBOptions submsg_callback
     * @property {TypenameMangling|null} [mangle_names] NanoPBOptions mangle_names
     * @property {string|null} [callback_datatype] NanoPBOptions callback_datatype
     * @property {string|null} [callback_function] NanoPBOptions callback_function
     * @property {DescriptorSize|null} [descriptorsize] NanoPBOptions descriptorsize
     * @property {boolean|null} [default_has] NanoPBOptions default_has
     * @property {Array.<string>|null} [include] NanoPBOptions include
     * @property {Array.<string>|null} [exclude] NanoPBOptions exclude
     * @property {string|null} ["package"] NanoPBOptions package
     * @property {google.protobuf.FieldDescriptorProto.Type|null} [type_override] NanoPBOptions type_override
     * @property {google.protobuf.FieldDescriptorProto.Label|null} [label_override] NanoPBOptions label_override
     * @property {boolean|null} [sort_by_tag] NanoPBOptions sort_by_tag
     * @property {FieldType|null} [fallback_type] NanoPBOptions fallback_type
     * @property {string|null} [initializer] NanoPBOptions initializer
     * @property {boolean|null} [discard_unused_automatic_types] NanoPBOptions discard_unused_automatic_types
     * @property {boolean|null} [discard_deprecated] NanoPBOptions discard_deprecated
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */

    /**
     * Properties of a NanoPBOptions.
     * @exports INanoPBOptions
     * @interface INanoPBOptions
     * @augments NanoPBOptions.$Properties
     * @deprecated Use NanoPBOptions.$Properties instead.
     */

    /**
     * Shape of a NanoPBOptions.
     * @typedef {NanoPBOptions.$Properties} NanoPBOptions.$Shape
     */

    /**
     * Constructs a new NanoPBOptions.
     * @exports NanoPBOptions
     * @classdesc Represents a NanoPBOptions.
     * @constructor
     * @param {NanoPBOptions.$Properties=} [properties] Properties to set
     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
     */
    var NanoPBOptions = function (properties) {
        this.include = [];
        this.exclude = [];
        if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                    this[keys[i]] = properties[keys[i]];
    };

    /**
     * NanoPBOptions max_size.
     * @member {number} max_size
     * @memberof NanoPBOptions
     * @instance
     */
    NanoPBOptions.prototype.max_size = 0;

    /**
     * NanoPBOptions max_length.
     * @member {number} max_length
     * @memberof NanoPBOptions
     * @instance
     */
    NanoPBOptions.prototype.max_length = 0;

    /**
     * NanoPBOptions max_count.
     * @member {number} max_count
     * @memberof NanoPBOptions
     * @instance
     */
    NanoPBOptions.prototype.max_count = 0;

    /**
     * NanoPBOptions int_size.
     * @member {IntSize} int_size
     * @memberof NanoPBOptions
     * @instance
     */
    NanoPBOptions.prototype.int_size = 0;

    /**
     * NanoPBOptions enum_intsize.
     * @member {IntSize} enum_intsize
     * @memberof NanoPBOptions
     * @instance
     */
    NanoPBOptions.prototype.enum_intsize = 0;

    /**
     * NanoPBOptions type.
     * @member {FieldType} type
     * @memberof NanoPBOptions
     * @instance
     */
    NanoPBOptions.prototype.type = 0;

    /**
     * NanoPBOptions long_names.
     * @member {boolean} long_names
     * @memberof NanoPBOptions
     * @instance
     */
    NanoPBOptions.prototype.long_names = true;

    /**
     * NanoPBOptions packed_struct.
     * @member {boolean} packed_struct
     * @memberof NanoPBOptions
     * @instance
     */
    NanoPBOptions.prototype.packed_struct = false;

    /**
     * NanoPBOptions packed_enum.
     * @member {boolean} packed_enum
     * @memberof NanoPBOptions
     * @instance
     */
    NanoPBOptions.prototype.packed_enum = false;

    /**
     * NanoPBOptions skip_message.
     * @member {boolean} skip_message
     * @memberof NanoPBOptions
     * @instance
     */
    NanoPBOptions.prototype.skip_message = false;

    /**
     * NanoPBOptions no_unions.
     * @member {boolean} no_unions
     * @memberof NanoPBOptions
     * @instance
     */
    NanoPBOptions.prototype.no_unions = false;

    /**
     * NanoPBOptions msgid.
     * @member {number} msgid
     * @memberof NanoPBOptions
     * @instance
     */
    NanoPBOptions.prototype.msgid = 0;

    /**
     * NanoPBOptions anonymous_oneof.
     * @member {boolean} anonymous_oneof
     * @memberof NanoPBOptions
     * @instance
     */
    NanoPBOptions.prototype.anonymous_oneof = false;

    /**
     * NanoPBOptions proto3.
     * @member {boolean} proto3
     * @memberof NanoPBOptions
     * @instance
     */
    NanoPBOptions.prototype.proto3 = false;

    /**
     * NanoPBOptions proto3_singular_msgs.
     * @member {boolean} proto3_singular_msgs
     * @memberof NanoPBOptions
     * @instance
     */
    NanoPBOptions.prototype.proto3_singular_msgs = false;

    /**
     * NanoPBOptions enum_to_string.
     * @member {boolean} enum_to_string
     * @memberof NanoPBOptions
     * @instance
     */
    NanoPBOptions.prototype.enum_to_string = false;

    /**
     * NanoPBOptions enum_validate.
     * @member {boolean} enum_validate
     * @memberof NanoPBOptions
     * @instance
     */
    NanoPBOptions.prototype.enum_validate = false;

    /**
     * NanoPBOptions fixed_length.
     * @member {boolean} fixed_length
     * @memberof NanoPBOptions
     * @instance
     */
    NanoPBOptions.prototype.fixed_length = false;

    /**
     * NanoPBOptions fixed_count.
     * @member {boolean} fixed_count
     * @memberof NanoPBOptions
     * @instance
     */
    NanoPBOptions.prototype.fixed_count = false;

    /**
     * NanoPBOptions submsg_callback.
     * @member {boolean} submsg_callback
     * @memberof NanoPBOptions
     * @instance
     */
    NanoPBOptions.prototype.submsg_callback = false;

    /**
     * NanoPBOptions mangle_names.
     * @member {TypenameMangling} mangle_names
     * @memberof NanoPBOptions
     * @instance
     */
    NanoPBOptions.prototype.mangle_names = 0;

    /**
     * NanoPBOptions callback_datatype.
     * @member {string} callback_datatype
     * @memberof NanoPBOptions
     * @instance
     */
    NanoPBOptions.prototype.callback_datatype = "pb_callback_t";

    /**
     * NanoPBOptions callback_function.
     * @member {string} callback_function
     * @memberof NanoPBOptions
     * @instance
     */
    NanoPBOptions.prototype.callback_function = "pb_default_field_callback";

    /**
     * NanoPBOptions descriptorsize.
     * @member {DescriptorSize} descriptorsize
     * @memberof NanoPBOptions
     * @instance
     */
    NanoPBOptions.prototype.descriptorsize = 0;

    /**
     * NanoPBOptions default_has.
     * @member {boolean} default_has
     * @memberof NanoPBOptions
     * @instance
     */
    NanoPBOptions.prototype.default_has = false;

    /**
     * NanoPBOptions include.
     * @member {Array.<string>} include
     * @memberof NanoPBOptions
     * @instance
     */
    NanoPBOptions.prototype.include = $util.emptyArray;

    /**
     * NanoPBOptions exclude.
     * @member {Array.<string>} exclude
     * @memberof NanoPBOptions
     * @instance
     */
    NanoPBOptions.prototype.exclude = $util.emptyArray;

    /**
     * NanoPBOptions package.
     * @member {string} package
     * @memberof NanoPBOptions
     * @instance
     */
    NanoPBOptions.prototype["package"] = "";

    /**
     * NanoPBOptions type_override.
     * @member {google.protobuf.FieldDescriptorProto.Type} type_override
     * @memberof NanoPBOptions
     * @instance
     */
    NanoPBOptions.prototype.type_override = 1;

    /**
     * NanoPBOptions label_override.
     * @member {google.protobuf.FieldDescriptorProto.Label} label_override
     * @memberof NanoPBOptions
     * @instance
     */
    NanoPBOptions.prototype.label_override = 1;

    /**
     * NanoPBOptions sort_by_tag.
     * @member {boolean} sort_by_tag
     * @memberof NanoPBOptions
     * @instance
     */
    NanoPBOptions.prototype.sort_by_tag = true;

    /**
     * NanoPBOptions fallback_type.
     * @member {FieldType} fallback_type
     * @memberof NanoPBOptions
     * @instance
     */
    NanoPBOptions.prototype.fallback_type = 1;

    /**
     * NanoPBOptions initializer.
     * @member {string} initializer
     * @memberof NanoPBOptions
     * @instance
     */
    NanoPBOptions.prototype.initializer = "";

    /**
     * NanoPBOptions discard_unused_automatic_types.
     * @member {boolean} discard_unused_automatic_types
     * @memberof NanoPBOptions
     * @instance
     */
    NanoPBOptions.prototype.discard_unused_automatic_types = true;

    /**
     * NanoPBOptions discard_deprecated.
     * @member {boolean} discard_deprecated
     * @memberof NanoPBOptions
     * @instance
     */
    NanoPBOptions.prototype.discard_deprecated = false;

    /**
     * Creates a new NanoPBOptions instance using the specified properties.
     * @function create
     * @memberof NanoPBOptions
     * @static
     * @param {NanoPBOptions.$Properties=} [properties] Properties to set
     * @returns {NanoPBOptions} NanoPBOptions instance
     * @type {{
     *   (properties: NanoPBOptions.$Shape): NanoPBOptions & NanoPBOptions.$Shape;
     *   (properties?: NanoPBOptions.$Properties): NanoPBOptions;
     * }}
     */
    NanoPBOptions.create = function(properties) {
        return new NanoPBOptions(properties);
    };

    /**
     * Encodes the specified NanoPBOptions message. Does not implicitly {@link NanoPBOptions.verify|verify} messages.
     * @function encode
     * @memberof NanoPBOptions
     * @static
     * @param {NanoPBOptions.$Properties} message NanoPBOptions message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NanoPBOptions.encode = function (message, writer, _depth) {
        if (!writer)
            writer = $Writer.create();
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        if (message.max_size != null && $Object.hasOwnProperty.call(message, "max_size"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.max_size);
        if (message.max_count != null && $Object.hasOwnProperty.call(message, "max_count"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.max_count);
        if (message.type != null && $Object.hasOwnProperty.call(message, "type"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.type);
        if (message.long_names != null && $Object.hasOwnProperty.call(message, "long_names"))
            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.long_names);
        if (message.packed_struct != null && $Object.hasOwnProperty.call(message, "packed_struct"))
            writer.uint32(/* id 5, wireType 0 =*/40).bool(message.packed_struct);
        if (message.skip_message != null && $Object.hasOwnProperty.call(message, "skip_message"))
            writer.uint32(/* id 6, wireType 0 =*/48).bool(message.skip_message);
        if (message.int_size != null && $Object.hasOwnProperty.call(message, "int_size"))
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.int_size);
        if (message.no_unions != null && $Object.hasOwnProperty.call(message, "no_unions"))
            writer.uint32(/* id 8, wireType 0 =*/64).bool(message.no_unions);
        if (message.msgid != null && $Object.hasOwnProperty.call(message, "msgid"))
            writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.msgid);
        if (message.packed_enum != null && $Object.hasOwnProperty.call(message, "packed_enum"))
            writer.uint32(/* id 10, wireType 0 =*/80).bool(message.packed_enum);
        if (message.anonymous_oneof != null && $Object.hasOwnProperty.call(message, "anonymous_oneof"))
            writer.uint32(/* id 11, wireType 0 =*/88).bool(message.anonymous_oneof);
        if (message.proto3 != null && $Object.hasOwnProperty.call(message, "proto3"))
            writer.uint32(/* id 12, wireType 0 =*/96).bool(message.proto3);
        if (message.enum_to_string != null && $Object.hasOwnProperty.call(message, "enum_to_string"))
            writer.uint32(/* id 13, wireType 0 =*/104).bool(message.enum_to_string);
        if (message.max_length != null && $Object.hasOwnProperty.call(message, "max_length"))
            writer.uint32(/* id 14, wireType 0 =*/112).int32(message.max_length);
        if (message.fixed_length != null && $Object.hasOwnProperty.call(message, "fixed_length"))
            writer.uint32(/* id 15, wireType 0 =*/120).bool(message.fixed_length);
        if (message.fixed_count != null && $Object.hasOwnProperty.call(message, "fixed_count"))
            writer.uint32(/* id 16, wireType 0 =*/128).bool(message.fixed_count);
        if (message.mangle_names != null && $Object.hasOwnProperty.call(message, "mangle_names"))
            writer.uint32(/* id 17, wireType 0 =*/136).int32(message.mangle_names);
        if (message.callback_datatype != null && $Object.hasOwnProperty.call(message, "callback_datatype"))
            writer.uint32(/* id 18, wireType 2 =*/146).string(message.callback_datatype);
        if (message.callback_function != null && $Object.hasOwnProperty.call(message, "callback_function"))
            writer.uint32(/* id 19, wireType 2 =*/154).string(message.callback_function);
        if (message.descriptorsize != null && $Object.hasOwnProperty.call(message, "descriptorsize"))
            writer.uint32(/* id 20, wireType 0 =*/160).int32(message.descriptorsize);
        if (message.proto3_singular_msgs != null && $Object.hasOwnProperty.call(message, "proto3_singular_msgs"))
            writer.uint32(/* id 21, wireType 0 =*/168).bool(message.proto3_singular_msgs);
        if (message.submsg_callback != null && $Object.hasOwnProperty.call(message, "submsg_callback"))
            writer.uint32(/* id 22, wireType 0 =*/176).bool(message.submsg_callback);
        if (message.default_has != null && $Object.hasOwnProperty.call(message, "default_has"))
            writer.uint32(/* id 23, wireType 0 =*/184).bool(message.default_has);
        if (message.include != null && message.include.length)
            for (var i = 0; i < message.include.length; ++i)
                writer.uint32(/* id 24, wireType 2 =*/194).string(message.include[i]);
        if (message["package"] != null && $Object.hasOwnProperty.call(message, "package"))
            writer.uint32(/* id 25, wireType 2 =*/202).string(message["package"]);
        if (message.exclude != null && message.exclude.length)
            for (var i = 0; i < message.exclude.length; ++i)
                writer.uint32(/* id 26, wireType 2 =*/210).string(message.exclude[i]);
        if (message.type_override != null && $Object.hasOwnProperty.call(message, "type_override"))
            writer.uint32(/* id 27, wireType 0 =*/216).int32(message.type_override);
        if (message.sort_by_tag != null && $Object.hasOwnProperty.call(message, "sort_by_tag"))
            writer.uint32(/* id 28, wireType 0 =*/224).bool(message.sort_by_tag);
        if (message.fallback_type != null && $Object.hasOwnProperty.call(message, "fallback_type"))
            writer.uint32(/* id 29, wireType 0 =*/232).int32(message.fallback_type);
        if (message.initializer != null && $Object.hasOwnProperty.call(message, "initializer"))
            writer.uint32(/* id 30, wireType 2 =*/242).string(message.initializer);
        if (message.label_override != null && $Object.hasOwnProperty.call(message, "label_override"))
            writer.uint32(/* id 31, wireType 0 =*/248).int32(message.label_override);
        if (message.enum_validate != null && $Object.hasOwnProperty.call(message, "enum_validate"))
            writer.uint32(/* id 32, wireType 0 =*/256).bool(message.enum_validate);
        if (message.discard_unused_automatic_types != null && $Object.hasOwnProperty.call(message, "discard_unused_automatic_types"))
            writer.uint32(/* id 33, wireType 0 =*/264).bool(message.discard_unused_automatic_types);
        if (message.enum_intsize != null && $Object.hasOwnProperty.call(message, "enum_intsize"))
            writer.uint32(/* id 34, wireType 0 =*/272).int32(message.enum_intsize);
        if (message.discard_deprecated != null && $Object.hasOwnProperty.call(message, "discard_deprecated"))
            writer.uint32(/* id 35, wireType 0 =*/280).bool(message.discard_deprecated);
        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
            for (var i = 0; i < message.$unknowns.length; ++i)
                writer.raw(message.$unknowns[i]);
        return writer;
    };

    /**
     * Encodes the specified NanoPBOptions message, length delimited. Does not implicitly {@link NanoPBOptions.verify|verify} messages.
     * @function encodeDelimited
     * @memberof NanoPBOptions
     * @static
     * @param {NanoPBOptions.$Properties} message NanoPBOptions message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NanoPBOptions.encodeDelimited = function(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };

    /**
     * Decodes a NanoPBOptions message from the specified reader or buffer.
     * @function decode
     * @memberof NanoPBOptions
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {NanoPBOptions & NanoPBOptions.$Shape} NanoPBOptions
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NanoPBOptions.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $Reader.recursionLimit)
            throw $Error("max depth exceeded");
        var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.NanoPBOptions(), value;
        while (reader.pos < end) {
            var start = reader.pos;
            var tag = reader.tag();
            if (tag === _end) {
                _end = $undefined;
                break;
            }
            var wireType = tag & 7;
            switch (tag >>>= 3) {
            case 1: {
                    if (wireType !== 0)
                        break;
                    message.max_size = reader.int32();
                    continue;
                }
            case 14: {
                    if (wireType !== 0)
                        break;
                    message.max_length = reader.int32();
                    continue;
                }
            case 2: {
                    if (wireType !== 0)
                        break;
                    message.max_count = reader.int32();
                    continue;
                }
            case 7: {
                    if (wireType !== 0)
                        break;
                    value = reader.int32();
                    if ($root.IntSize[value] !== $undefined)
                        message.int_size = value;
                    else if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                    continue;
                }
            case 34: {
                    if (wireType !== 0)
                        break;
                    value = reader.int32();
                    if ($root.IntSize[value] !== $undefined)
                        message.enum_intsize = value;
                    else if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                    continue;
                }
            case 3: {
                    if (wireType !== 0)
                        break;
                    value = reader.int32();
                    if ($root.FieldType[value] !== $undefined)
                        message.type = value;
                    else if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                    continue;
                }
            case 4: {
                    if (wireType !== 0)
                        break;
                    message.long_names = reader.bool();
                    continue;
                }
            case 5: {
                    if (wireType !== 0)
                        break;
                    message.packed_struct = reader.bool();
                    continue;
                }
            case 10: {
                    if (wireType !== 0)
                        break;
                    message.packed_enum = reader.bool();
                    continue;
                }
            case 6: {
                    if (wireType !== 0)
                        break;
                    message.skip_message = reader.bool();
                    continue;
                }
            case 8: {
                    if (wireType !== 0)
                        break;
                    message.no_unions = reader.bool();
                    continue;
                }
            case 9: {
                    if (wireType !== 0)
                        break;
                    message.msgid = reader.uint32();
                    continue;
                }
            case 11: {
                    if (wireType !== 0)
                        break;
                    message.anonymous_oneof = reader.bool();
                    continue;
                }
            case 12: {
                    if (wireType !== 0)
                        break;
                    message.proto3 = reader.bool();
                    continue;
                }
            case 21: {
                    if (wireType !== 0)
                        break;
                    message.proto3_singular_msgs = reader.bool();
                    continue;
                }
            case 13: {
                    if (wireType !== 0)
                        break;
                    message.enum_to_string = reader.bool();
                    continue;
                }
            case 32: {
                    if (wireType !== 0)
                        break;
                    message.enum_validate = reader.bool();
                    continue;
                }
            case 15: {
                    if (wireType !== 0)
                        break;
                    message.fixed_length = reader.bool();
                    continue;
                }
            case 16: {
                    if (wireType !== 0)
                        break;
                    message.fixed_count = reader.bool();
                    continue;
                }
            case 22: {
                    if (wireType !== 0)
                        break;
                    message.submsg_callback = reader.bool();
                    continue;
                }
            case 17: {
                    if (wireType !== 0)
                        break;
                    value = reader.int32();
                    if ($root.TypenameMangling[value] !== $undefined)
                        message.mangle_names = value;
                    else if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                    continue;
                }
            case 18: {
                    if (wireType !== 2)
                        break;
                    message.callback_datatype = reader.string();
                    continue;
                }
            case 19: {
                    if (wireType !== 2)
                        break;
                    message.callback_function = reader.string();
                    continue;
                }
            case 20: {
                    if (wireType !== 0)
                        break;
                    value = reader.int32();
                    if ($root.DescriptorSize[value] !== $undefined)
                        message.descriptorsize = value;
                    else if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                    continue;
                }
            case 23: {
                    if (wireType !== 0)
                        break;
                    message.default_has = reader.bool();
                    continue;
                }
            case 24: {
                    if (wireType !== 2)
                        break;
                    if (!(message.include && message.include.length))
                        message.include = [];
                    message.include.push(reader.string());
                    continue;
                }
            case 26: {
                    if (wireType !== 2)
                        break;
                    if (!(message.exclude && message.exclude.length))
                        message.exclude = [];
                    message.exclude.push(reader.string());
                    continue;
                }
            case 25: {
                    if (wireType !== 2)
                        break;
                    message["package"] = reader.string();
                    continue;
                }
            case 27: {
                    if (wireType !== 0)
                        break;
                    value = reader.int32();
                    if ($root.google.protobuf.FieldDescriptorProto.Type[value] !== $undefined)
                        message.type_override = value;
                    else if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                    continue;
                }
            case 31: {
                    if (wireType !== 0)
                        break;
                    value = reader.int32();
                    if ($root.google.protobuf.FieldDescriptorProto.Label[value] !== $undefined)
                        message.label_override = value;
                    else if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                    continue;
                }
            case 28: {
                    if (wireType !== 0)
                        break;
                    message.sort_by_tag = reader.bool();
                    continue;
                }
            case 29: {
                    if (wireType !== 0)
                        break;
                    value = reader.int32();
                    if ($root.FieldType[value] !== $undefined)
                        message.fallback_type = value;
                    else if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                    continue;
                }
            case 30: {
                    if (wireType !== 2)
                        break;
                    message.initializer = reader.string();
                    continue;
                }
            case 33: {
                    if (wireType !== 0)
                        break;
                    message.discard_unused_automatic_types = reader.bool();
                    continue;
                }
            case 35: {
                    if (wireType !== 0)
                        break;
                    message.discard_deprecated = reader.bool();
                    continue;
                }
            }
            reader.skipType(wireType, _depth, tag);
            if (!reader.discardUnknown) {
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
        }
        if (_end !== $undefined)
            throw $Error("missing end group");
        return message;
    };

    /**
     * Decodes a NanoPBOptions message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof NanoPBOptions
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {NanoPBOptions & NanoPBOptions.$Shape} NanoPBOptions
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NanoPBOptions.decodeDelimited = function(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a NanoPBOptions message.
     * @function verify
     * @memberof NanoPBOptions
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    NanoPBOptions.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            return "max depth exceeded";
        if (message.max_size != null && $Object.hasOwnProperty.call(message, "max_size"))
            if (!$util.isInteger(message.max_size))
                return "max_size: integer expected";
        if (message.max_length != null && $Object.hasOwnProperty.call(message, "max_length"))
            if (!$util.isInteger(message.max_length))
                return "max_length: integer expected";
        if (message.max_count != null && $Object.hasOwnProperty.call(message, "max_count"))
            if (!$util.isInteger(message.max_count))
                return "max_count: integer expected";
        if (message.int_size != null && $Object.hasOwnProperty.call(message, "int_size"))
            switch (message.int_size) {
            default:
                return "int_size: enum value expected";
            case 0:
            case 8:
            case 16:
            case 32:
            case 64:
                break;
            }
        if (message.enum_intsize != null && $Object.hasOwnProperty.call(message, "enum_intsize"))
            switch (message.enum_intsize) {
            default:
                return "enum_intsize: enum value expected";
            case 0:
            case 8:
            case 16:
            case 32:
            case 64:
                break;
            }
        if (message.type != null && $Object.hasOwnProperty.call(message, "type"))
            switch (message.type) {
            default:
                return "type: enum value expected";
            case 0:
            case 1:
            case 4:
            case 2:
            case 3:
            case 5:
                break;
            }
        if (message.long_names != null && $Object.hasOwnProperty.call(message, "long_names"))
            if (typeof message.long_names !== "boolean")
                return "long_names: boolean expected";
        if (message.packed_struct != null && $Object.hasOwnProperty.call(message, "packed_struct"))
            if (typeof message.packed_struct !== "boolean")
                return "packed_struct: boolean expected";
        if (message.packed_enum != null && $Object.hasOwnProperty.call(message, "packed_enum"))
            if (typeof message.packed_enum !== "boolean")
                return "packed_enum: boolean expected";
        if (message.skip_message != null && $Object.hasOwnProperty.call(message, "skip_message"))
            if (typeof message.skip_message !== "boolean")
                return "skip_message: boolean expected";
        if (message.no_unions != null && $Object.hasOwnProperty.call(message, "no_unions"))
            if (typeof message.no_unions !== "boolean")
                return "no_unions: boolean expected";
        if (message.msgid != null && $Object.hasOwnProperty.call(message, "msgid"))
            if (!$util.isInteger(message.msgid))
                return "msgid: integer expected";
        if (message.anonymous_oneof != null && $Object.hasOwnProperty.call(message, "anonymous_oneof"))
            if (typeof message.anonymous_oneof !== "boolean")
                return "anonymous_oneof: boolean expected";
        if (message.proto3 != null && $Object.hasOwnProperty.call(message, "proto3"))
            if (typeof message.proto3 !== "boolean")
                return "proto3: boolean expected";
        if (message.proto3_singular_msgs != null && $Object.hasOwnProperty.call(message, "proto3_singular_msgs"))
            if (typeof message.proto3_singular_msgs !== "boolean")
                return "proto3_singular_msgs: boolean expected";
        if (message.enum_to_string != null && $Object.hasOwnProperty.call(message, "enum_to_string"))
            if (typeof message.enum_to_string !== "boolean")
                return "enum_to_string: boolean expected";
        if (message.enum_validate != null && $Object.hasOwnProperty.call(message, "enum_validate"))
            if (typeof message.enum_validate !== "boolean")
                return "enum_validate: boolean expected";
        if (message.fixed_length != null && $Object.hasOwnProperty.call(message, "fixed_length"))
            if (typeof message.fixed_length !== "boolean")
                return "fixed_length: boolean expected";
        if (message.fixed_count != null && $Object.hasOwnProperty.call(message, "fixed_count"))
            if (typeof message.fixed_count !== "boolean")
                return "fixed_count: boolean expected";
        if (message.submsg_callback != null && $Object.hasOwnProperty.call(message, "submsg_callback"))
            if (typeof message.submsg_callback !== "boolean")
                return "submsg_callback: boolean expected";
        if (message.mangle_names != null && $Object.hasOwnProperty.call(message, "mangle_names"))
            switch (message.mangle_names) {
            default:
                return "mangle_names: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
                break;
            }
        if (message.callback_datatype != null && $Object.hasOwnProperty.call(message, "callback_datatype"))
            if (!$util.isString(message.callback_datatype))
                return "callback_datatype: string expected";
        if (message.callback_function != null && $Object.hasOwnProperty.call(message, "callback_function"))
            if (!$util.isString(message.callback_function))
                return "callback_function: string expected";
        if (message.descriptorsize != null && $Object.hasOwnProperty.call(message, "descriptorsize"))
            switch (message.descriptorsize) {
            default:
                return "descriptorsize: enum value expected";
            case 0:
            case 1:
            case 2:
            case 4:
            case 8:
                break;
            }
        if (message.default_has != null && $Object.hasOwnProperty.call(message, "default_has"))
            if (typeof message.default_has !== "boolean")
                return "default_has: boolean expected";
        if (message.include != null && $Object.hasOwnProperty.call(message, "include")) {
            if (!$Array.isArray(message.include))
                return "include: array expected";
            for (var i = 0; i < message.include.length; ++i)
                if (!$util.isString(message.include[i]))
                    return "include: string[] expected";
        }
        if (message.exclude != null && $Object.hasOwnProperty.call(message, "exclude")) {
            if (!$Array.isArray(message.exclude))
                return "exclude: array expected";
            for (var i = 0; i < message.exclude.length; ++i)
                if (!$util.isString(message.exclude[i]))
                    return "exclude: string[] expected";
        }
        if (message["package"] != null && $Object.hasOwnProperty.call(message, "package"))
            if (!$util.isString(message["package"]))
                return "package: string expected";
        if (message.type_override != null && $Object.hasOwnProperty.call(message, "type_override"))
            switch (message.type_override) {
            default:
                return "type_override: enum value expected";
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
                break;
            }
        if (message.label_override != null && $Object.hasOwnProperty.call(message, "label_override"))
            switch (message.label_override) {
            default:
                return "label_override: enum value expected";
            case 1:
            case 3:
            case 2:
                break;
            }
        if (message.sort_by_tag != null && $Object.hasOwnProperty.call(message, "sort_by_tag"))
            if (typeof message.sort_by_tag !== "boolean")
                return "sort_by_tag: boolean expected";
        if (message.fallback_type != null && $Object.hasOwnProperty.call(message, "fallback_type"))
            switch (message.fallback_type) {
            default:
                return "fallback_type: enum value expected";
            case 0:
            case 1:
            case 4:
            case 2:
            case 3:
            case 5:
                break;
            }
        if (message.initializer != null && $Object.hasOwnProperty.call(message, "initializer"))
            if (!$util.isString(message.initializer))
                return "initializer: string expected";
        if (message.discard_unused_automatic_types != null && $Object.hasOwnProperty.call(message, "discard_unused_automatic_types"))
            if (typeof message.discard_unused_automatic_types !== "boolean")
                return "discard_unused_automatic_types: boolean expected";
        if (message.discard_deprecated != null && $Object.hasOwnProperty.call(message, "discard_deprecated"))
            if (typeof message.discard_deprecated !== "boolean")
                return "discard_deprecated: boolean expected";
        return null;
    };

    /**
     * Creates a NanoPBOptions message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof NanoPBOptions
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {NanoPBOptions} NanoPBOptions
     */
    NanoPBOptions.fromObject = function (object, _depth) {
        if (object instanceof $root.NanoPBOptions)
            return object;
        if (!$util.isObject(object))
            throw $TypeError(".NanoPBOptions: object expected");
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var message = new $root.NanoPBOptions();
        if (object.max_size != null)
            message.max_size = object.max_size | 0;
        if (object.max_length != null)
            message.max_length = object.max_length | 0;
        if (object.max_count != null)
            message.max_count = object.max_count | 0;
        switch (object.int_size) {
        case "IS_DEFAULT":
        case 0:
            message.int_size = 0;
            break;
        case "IS_8":
        case 8:
            message.int_size = 8;
            break;
        case "IS_16":
        case 16:
            message.int_size = 16;
            break;
        case "IS_32":
        case 32:
            message.int_size = 32;
            break;
        case "IS_64":
        case 64:
            message.int_size = 64;
            break;
        default:
        }
        switch (object.enum_intsize) {
        case "IS_DEFAULT":
        case 0:
            message.enum_intsize = 0;
            break;
        case "IS_8":
        case 8:
            message.enum_intsize = 8;
            break;
        case "IS_16":
        case 16:
            message.enum_intsize = 16;
            break;
        case "IS_32":
        case 32:
            message.enum_intsize = 32;
            break;
        case "IS_64":
        case 64:
            message.enum_intsize = 64;
            break;
        default:
        }
        switch (object.type) {
        case "FT_DEFAULT":
        case 0:
            message.type = 0;
            break;
        case "FT_CALLBACK":
        case 1:
            message.type = 1;
            break;
        case "FT_POINTER":
        case 4:
            message.type = 4;
            break;
        case "FT_STATIC":
        case 2:
            message.type = 2;
            break;
        case "FT_IGNORE":
        case 3:
            message.type = 3;
            break;
        case "FT_INLINE":
        case 5:
            message.type = 5;
            break;
        default:
        }
        if (object.long_names != null)
            message.long_names = $Boolean(object.long_names);
        if (object.packed_struct != null)
            message.packed_struct = $Boolean(object.packed_struct);
        if (object.packed_enum != null)
            message.packed_enum = $Boolean(object.packed_enum);
        if (object.skip_message != null)
            message.skip_message = $Boolean(object.skip_message);
        if (object.no_unions != null)
            message.no_unions = $Boolean(object.no_unions);
        if (object.msgid != null)
            message.msgid = object.msgid >>> 0;
        if (object.anonymous_oneof != null)
            message.anonymous_oneof = $Boolean(object.anonymous_oneof);
        if (object.proto3 != null)
            message.proto3 = $Boolean(object.proto3);
        if (object.proto3_singular_msgs != null)
            message.proto3_singular_msgs = $Boolean(object.proto3_singular_msgs);
        if (object.enum_to_string != null)
            message.enum_to_string = $Boolean(object.enum_to_string);
        if (object.enum_validate != null)
            message.enum_validate = $Boolean(object.enum_validate);
        if (object.fixed_length != null)
            message.fixed_length = $Boolean(object.fixed_length);
        if (object.fixed_count != null)
            message.fixed_count = $Boolean(object.fixed_count);
        if (object.submsg_callback != null)
            message.submsg_callback = $Boolean(object.submsg_callback);
        switch (object.mangle_names) {
        case "M_NONE":
        case 0:
            message.mangle_names = 0;
            break;
        case "M_STRIP_PACKAGE":
        case 1:
            message.mangle_names = 1;
            break;
        case "M_FLATTEN":
        case 2:
            message.mangle_names = 2;
            break;
        case "M_PACKAGE_INITIALS":
        case 3:
            message.mangle_names = 3;
            break;
        default:
        }
        if (object.callback_datatype != null)
            message.callback_datatype = $String(object.callback_datatype);
        if (object.callback_function != null)
            message.callback_function = $String(object.callback_function);
        switch (object.descriptorsize) {
        case "DS_AUTO":
        case 0:
            message.descriptorsize = 0;
            break;
        case "DS_1":
        case 1:
            message.descriptorsize = 1;
            break;
        case "DS_2":
        case 2:
            message.descriptorsize = 2;
            break;
        case "DS_4":
        case 4:
            message.descriptorsize = 4;
            break;
        case "DS_8":
        case 8:
            message.descriptorsize = 8;
            break;
        default:
        }
        if (object.default_has != null)
            message.default_has = $Boolean(object.default_has);
        if (object.include) {
            if (!$Array.isArray(object.include))
                throw $TypeError(".NanoPBOptions.include: array expected");
            message.include = $Array(object.include.length);
            for (var i = 0; i < object.include.length; ++i)
                message.include[i] = $String(object.include[i]);
        }
        if (object.exclude) {
            if (!$Array.isArray(object.exclude))
                throw $TypeError(".NanoPBOptions.exclude: array expected");
            message.exclude = $Array(object.exclude.length);
            for (var i = 0; i < object.exclude.length; ++i)
                message.exclude[i] = $String(object.exclude[i]);
        }
        if (object["package"] != null)
            message["package"] = $String(object["package"]);
        switch (object.type_override) {
        case "TYPE_DOUBLE":
        case 1:
            message.type_override = 1;
            break;
        case "TYPE_FLOAT":
        case 2:
            message.type_override = 2;
            break;
        case "TYPE_INT64":
        case 3:
            message.type_override = 3;
            break;
        case "TYPE_UINT64":
        case 4:
            message.type_override = 4;
            break;
        case "TYPE_INT32":
        case 5:
            message.type_override = 5;
            break;
        case "TYPE_FIXED64":
        case 6:
            message.type_override = 6;
            break;
        case "TYPE_FIXED32":
        case 7:
            message.type_override = 7;
            break;
        case "TYPE_BOOL":
        case 8:
            message.type_override = 8;
            break;
        case "TYPE_STRING":
        case 9:
            message.type_override = 9;
            break;
        case "TYPE_GROUP":
        case 10:
            message.type_override = 10;
            break;
        case "TYPE_MESSAGE":
        case 11:
            message.type_override = 11;
            break;
        case "TYPE_BYTES":
        case 12:
            message.type_override = 12;
            break;
        case "TYPE_UINT32":
        case 13:
            message.type_override = 13;
            break;
        case "TYPE_ENUM":
        case 14:
            message.type_override = 14;
            break;
        case "TYPE_SFIXED32":
        case 15:
            message.type_override = 15;
            break;
        case "TYPE_SFIXED64":
        case 16:
            message.type_override = 16;
            break;
        case "TYPE_SINT32":
        case 17:
            message.type_override = 17;
            break;
        case "TYPE_SINT64":
        case 18:
            message.type_override = 18;
            break;
        default:
        }
        switch (object.label_override) {
        case "LABEL_OPTIONAL":
        case 1:
            message.label_override = 1;
            break;
        case "LABEL_REPEATED":
        case 3:
            message.label_override = 3;
            break;
        case "LABEL_REQUIRED":
        case 2:
            message.label_override = 2;
            break;
        default:
        }
        if (object.sort_by_tag != null)
            message.sort_by_tag = $Boolean(object.sort_by_tag);
        switch (object.fallback_type) {
        case "FT_DEFAULT":
        case 0:
            message.fallback_type = 0;
            break;
        case "FT_CALLBACK":
        case 1:
            message.fallback_type = 1;
            break;
        case "FT_POINTER":
        case 4:
            message.fallback_type = 4;
            break;
        case "FT_STATIC":
        case 2:
            message.fallback_type = 2;
            break;
        case "FT_IGNORE":
        case 3:
            message.fallback_type = 3;
            break;
        case "FT_INLINE":
        case 5:
            message.fallback_type = 5;
            break;
        default:
        }
        if (object.initializer != null)
            message.initializer = $String(object.initializer);
        if (object.discard_unused_automatic_types != null)
            message.discard_unused_automatic_types = $Boolean(object.discard_unused_automatic_types);
        if (object.discard_deprecated != null)
            message.discard_deprecated = $Boolean(object.discard_deprecated);
        return message;
    };

    /**
     * Creates a plain object from a NanoPBOptions message. Also converts values to other types if specified.
     * @function toObject
     * @memberof NanoPBOptions
     * @static
     * @param {NanoPBOptions} message NanoPBOptions
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    NanoPBOptions.toObject = function (message, options, _depth) {
        if (!options)
            options = {};
        if (_depth === $undefined)
            _depth = 0;
        if (_depth > $util.recursionLimit)
            throw $Error("max depth exceeded");
        var object = {};
        if (options.arrays || options.defaults) {
            object.include = [];
            object.exclude = [];
        }
        if (options.defaults) {
            object.max_size = 0;
            object.max_count = 0;
            object.type = options.enums === $String ? "FT_DEFAULT" : 0;
            object.long_names = true;
            object.packed_struct = false;
            object.skip_message = false;
            object.int_size = options.enums === $String ? "IS_DEFAULT" : 0;
            object.no_unions = false;
            object.msgid = 0;
            object.packed_enum = false;
            object.anonymous_oneof = false;
            object.proto3 = false;
            object.enum_to_string = false;
            object.max_length = 0;
            object.fixed_length = false;
            object.fixed_count = false;
            object.mangle_names = options.enums === $String ? "M_NONE" : 0;
            object.callback_datatype = "pb_callback_t";
            object.callback_function = "pb_default_field_callback";
            object.descriptorsize = options.enums === $String ? "DS_AUTO" : 0;
            object.proto3_singular_msgs = false;
            object.submsg_callback = false;
            object.default_has = false;
            object["package"] = "";
            object.type_override = options.enums === $String ? "TYPE_DOUBLE" : 1;
            object.sort_by_tag = true;
            object.fallback_type = options.enums === $String ? "FT_CALLBACK" : 1;
            object.initializer = "";
            object.label_override = options.enums === $String ? "LABEL_OPTIONAL" : 1;
            object.enum_validate = false;
            object.discard_unused_automatic_types = true;
            object.enum_intsize = options.enums === $String ? "IS_DEFAULT" : 0;
            object.discard_deprecated = false;
        }
        if (message.max_size != null && $Object.hasOwnProperty.call(message, "max_size"))
            object.max_size = message.max_size;
        if (message.max_count != null && $Object.hasOwnProperty.call(message, "max_count"))
            object.max_count = message.max_count;
        if (message.type != null && $Object.hasOwnProperty.call(message, "type"))
            object.type = options.enums === $String ? $root.FieldType[message.type] === $undefined ? message.type : $root.FieldType[message.type] : message.type;
        if (message.long_names != null && $Object.hasOwnProperty.call(message, "long_names"))
            object.long_names = message.long_names;
        if (message.packed_struct != null && $Object.hasOwnProperty.call(message, "packed_struct"))
            object.packed_struct = message.packed_struct;
        if (message.skip_message != null && $Object.hasOwnProperty.call(message, "skip_message"))
            object.skip_message = message.skip_message;
        if (message.int_size != null && $Object.hasOwnProperty.call(message, "int_size"))
            object.int_size = options.enums === $String ? $root.IntSize[message.int_size] === $undefined ? message.int_size : $root.IntSize[message.int_size] : message.int_size;
        if (message.no_unions != null && $Object.hasOwnProperty.call(message, "no_unions"))
            object.no_unions = message.no_unions;
        if (message.msgid != null && $Object.hasOwnProperty.call(message, "msgid"))
            object.msgid = message.msgid;
        if (message.packed_enum != null && $Object.hasOwnProperty.call(message, "packed_enum"))
            object.packed_enum = message.packed_enum;
        if (message.anonymous_oneof != null && $Object.hasOwnProperty.call(message, "anonymous_oneof"))
            object.anonymous_oneof = message.anonymous_oneof;
        if (message.proto3 != null && $Object.hasOwnProperty.call(message, "proto3"))
            object.proto3 = message.proto3;
        if (message.enum_to_string != null && $Object.hasOwnProperty.call(message, "enum_to_string"))
            object.enum_to_string = message.enum_to_string;
        if (message.max_length != null && $Object.hasOwnProperty.call(message, "max_length"))
            object.max_length = message.max_length;
        if (message.fixed_length != null && $Object.hasOwnProperty.call(message, "fixed_length"))
            object.fixed_length = message.fixed_length;
        if (message.fixed_count != null && $Object.hasOwnProperty.call(message, "fixed_count"))
            object.fixed_count = message.fixed_count;
        if (message.mangle_names != null && $Object.hasOwnProperty.call(message, "mangle_names"))
            object.mangle_names = options.enums === $String ? $root.TypenameMangling[message.mangle_names] === $undefined ? message.mangle_names : $root.TypenameMangling[message.mangle_names] : message.mangle_names;
        if (message.callback_datatype != null && $Object.hasOwnProperty.call(message, "callback_datatype"))
            object.callback_datatype = message.callback_datatype;
        if (message.callback_function != null && $Object.hasOwnProperty.call(message, "callback_function"))
            object.callback_function = message.callback_function;
        if (message.descriptorsize != null && $Object.hasOwnProperty.call(message, "descriptorsize"))
            object.descriptorsize = options.enums === $String ? $root.DescriptorSize[message.descriptorsize] === $undefined ? message.descriptorsize : $root.DescriptorSize[message.descriptorsize] : message.descriptorsize;
        if (message.proto3_singular_msgs != null && $Object.hasOwnProperty.call(message, "proto3_singular_msgs"))
            object.proto3_singular_msgs = message.proto3_singular_msgs;
        if (message.submsg_callback != null && $Object.hasOwnProperty.call(message, "submsg_callback"))
            object.submsg_callback = message.submsg_callback;
        if (message.default_has != null && $Object.hasOwnProperty.call(message, "default_has"))
            object.default_has = message.default_has;
        if (message.include && message.include.length) {
            object.include = $Array(message.include.length);
            for (var j = 0; j < message.include.length; ++j)
                object.include[j] = message.include[j];
        }
        if (message["package"] != null && $Object.hasOwnProperty.call(message, "package"))
            object["package"] = message["package"];
        if (message.exclude && message.exclude.length) {
            object.exclude = $Array(message.exclude.length);
            for (var j = 0; j < message.exclude.length; ++j)
                object.exclude[j] = message.exclude[j];
        }
        if (message.type_override != null && $Object.hasOwnProperty.call(message, "type_override"))
            object.type_override = options.enums === $String ? $root.google.protobuf.FieldDescriptorProto.Type[message.type_override] === $undefined ? message.type_override : $root.google.protobuf.FieldDescriptorProto.Type[message.type_override] : message.type_override;
        if (message.sort_by_tag != null && $Object.hasOwnProperty.call(message, "sort_by_tag"))
            object.sort_by_tag = message.sort_by_tag;
        if (message.fallback_type != null && $Object.hasOwnProperty.call(message, "fallback_type"))
            object.fallback_type = options.enums === $String ? $root.FieldType[message.fallback_type] === $undefined ? message.fallback_type : $root.FieldType[message.fallback_type] : message.fallback_type;
        if (message.initializer != null && $Object.hasOwnProperty.call(message, "initializer"))
            object.initializer = message.initializer;
        if (message.label_override != null && $Object.hasOwnProperty.call(message, "label_override"))
            object.label_override = options.enums === $String ? $root.google.protobuf.FieldDescriptorProto.Label[message.label_override] === $undefined ? message.label_override : $root.google.protobuf.FieldDescriptorProto.Label[message.label_override] : message.label_override;
        if (message.enum_validate != null && $Object.hasOwnProperty.call(message, "enum_validate"))
            object.enum_validate = message.enum_validate;
        if (message.discard_unused_automatic_types != null && $Object.hasOwnProperty.call(message, "discard_unused_automatic_types"))
            object.discard_unused_automatic_types = message.discard_unused_automatic_types;
        if (message.enum_intsize != null && $Object.hasOwnProperty.call(message, "enum_intsize"))
            object.enum_intsize = options.enums === $String ? $root.IntSize[message.enum_intsize] === $undefined ? message.enum_intsize : $root.IntSize[message.enum_intsize] : message.enum_intsize;
        if (message.discard_deprecated != null && $Object.hasOwnProperty.call(message, "discard_deprecated"))
            object.discard_deprecated = message.discard_deprecated;
        return object;
    };

    /**
     * Converts this NanoPBOptions to JSON.
     * @function toJSON
     * @memberof NanoPBOptions
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    NanoPBOptions.prototype.toJSON = function() {
        return NanoPBOptions.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the type url for NanoPBOptions
     * @function getTypeUrl
     * @memberof NanoPBOptions
     * @static
     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns {string} The type url
     */
    NanoPBOptions.getTypeUrl = function(prefix) {
        if (prefix === $undefined)
            prefix = "type.googleapis.com";
        return prefix + "/NanoPBOptions";
    };

    return NanoPBOptions;
})();

$root.google = (function() {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    var google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        var protobuf = {};

        protobuf.FileDescriptorSet = (function() {

            /**
             * Properties of a FileDescriptorSet.
             * @typedef {Object} google.protobuf.FileDescriptorSet.$Properties
             * @property {Array.<google.protobuf.FileDescriptorProto.$Properties>|null} [file] FileDescriptorSet file
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a FileDescriptorSet.
             * @memberof google.protobuf
             * @interface IFileDescriptorSet
             * @augments google.protobuf.FileDescriptorSet.$Properties
             * @deprecated Use google.protobuf.FileDescriptorSet.$Properties instead.
             */

            /**
             * Shape of a FileDescriptorSet.
             * @typedef {google.protobuf.FileDescriptorSet.$Properties} google.protobuf.FileDescriptorSet.$Shape
             */

            /**
             * Constructs a new FileDescriptorSet.
             * @memberof google.protobuf
             * @classdesc Represents a FileDescriptorSet.
             * @constructor
             * @param {google.protobuf.FileDescriptorSet.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            var FileDescriptorSet = function (properties) {
                this.file = [];
                if (properties)
                    for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * FileDescriptorSet file.
             * @member {Array.<google.protobuf.FileDescriptorProto.$Properties>} file
             * @memberof google.protobuf.FileDescriptorSet
             * @instance
             */
            FileDescriptorSet.prototype.file = $util.emptyArray;

            /**
             * Creates a new FileDescriptorSet instance using the specified properties.
             * @function create
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {google.protobuf.FileDescriptorSet.$Properties=} [properties] Properties to set
             * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet instance
             * @type {{
             *   (properties: google.protobuf.FileDescriptorSet.$Shape): google.protobuf.FileDescriptorSet & google.protobuf.FileDescriptorSet.$Shape;
             *   (properties?: google.protobuf.FileDescriptorSet.$Properties): google.protobuf.FileDescriptorSet;
             * }}
             */
            FileDescriptorSet.create = function(properties) {
                return new FileDescriptorSet(properties);
            };

            /**
             * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {google.protobuf.FileDescriptorSet.$Properties} message FileDescriptorSet message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileDescriptorSet.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.file != null && message.file.length)
                    for (var i = 0; i < message.file.length; ++i)
                        $root.google.protobuf.FileDescriptorProto.encode(message.file[i], writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (var i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {google.protobuf.FileDescriptorSet.$Properties} message FileDescriptorSet message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileDescriptorSet.encodeDelimited = function(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FileDescriptorSet & google.protobuf.FileDescriptorSet.$Shape} FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileDescriptorSet.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.google.protobuf.FileDescriptorSet();
                while (reader.pos < end) {
                    var start = reader.pos;
                    var tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    var wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            if (!(message.file && message.file.length))
                                message.file = [];
                            message.file.push($root.google.protobuf.FileDescriptorProto.decode(reader, reader.uint32(), $undefined, _depth + 1));
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.FileDescriptorSet & google.protobuf.FileDescriptorSet.$Shape} FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileDescriptorSet.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FileDescriptorSet message.
             * @function verify
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FileDescriptorSet.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.file != null && $Object.hasOwnProperty.call(message, "file")) {
                    if (!$Array.isArray(message.file))
                        return "file: array expected";
                    for (var i = 0; i < message.file.length; ++i) {
                        var error = $root.google.protobuf.FileDescriptorProto.verify(message.file[i], _depth + 1);
                        if (error)
                            return "file." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
             */
            FileDescriptorSet.fromObject = function (object, _depth) {
                if (object instanceof $root.google.protobuf.FileDescriptorSet)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".google.protobuf.FileDescriptorSet: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var message = new $root.google.protobuf.FileDescriptorSet();
                if (object.file) {
                    if (!$Array.isArray(object.file))
                        throw $TypeError(".google.protobuf.FileDescriptorSet.file: array expected");
                    message.file = $Array(object.file.length);
                    for (var i = 0; i < object.file.length; ++i) {
                        if (!$util.isObject(object.file[i]))
                            throw $TypeError(".google.protobuf.FileDescriptorSet.file: object expected");
                        message.file[i] = $root.google.protobuf.FileDescriptorProto.fromObject(object.file[i], _depth + 1);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {google.protobuf.FileDescriptorSet} message FileDescriptorSet
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FileDescriptorSet.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var object = {};
                if (options.arrays || options.defaults)
                    object.file = [];
                if (message.file && message.file.length) {
                    object.file = $Array(message.file.length);
                    for (var j = 0; j < message.file.length; ++j)
                        object.file[j] = $root.google.protobuf.FileDescriptorProto.toObject(message.file[j], options, _depth + 1);
                }
                return object;
            };

            /**
             * Converts this FileDescriptorSet to JSON.
             * @function toJSON
             * @memberof google.protobuf.FileDescriptorSet
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FileDescriptorSet.prototype.toJSON = function() {
                return FileDescriptorSet.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for FileDescriptorSet
             * @function getTypeUrl
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            FileDescriptorSet.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/google.protobuf.FileDescriptorSet";
            };

            return FileDescriptorSet;
        })();

        /**
         * Edition enum.
         * @name google.protobuf.Edition
         * @enum {number}
         * @property {number} EDITION_UNKNOWN=0 EDITION_UNKNOWN value
         * @property {number} EDITION_LEGACY=900 EDITION_LEGACY value
         * @property {number} EDITION_PROTO2=998 EDITION_PROTO2 value
         * @property {number} EDITION_PROTO3=999 EDITION_PROTO3 value
         * @property {number} EDITION_2023=1000 EDITION_2023 value
         * @property {number} EDITION_2024=1001 EDITION_2024 value
         * @property {number} EDITION_1_TEST_ONLY=1 EDITION_1_TEST_ONLY value
         * @property {number} EDITION_2_TEST_ONLY=2 EDITION_2_TEST_ONLY value
         * @property {number} EDITION_99997_TEST_ONLY=99997 EDITION_99997_TEST_ONLY value
         * @property {number} EDITION_99998_TEST_ONLY=99998 EDITION_99998_TEST_ONLY value
         * @property {number} EDITION_99999_TEST_ONLY=99999 EDITION_99999_TEST_ONLY value
         * @property {number} EDITION_MAX=2147483647 EDITION_MAX value
         */
        protobuf.Edition = (function() {
            var valuesById = $Object.create(null), values = $Object.create(valuesById);
            values[valuesById[0] = "EDITION_UNKNOWN"] = 0;
            values[valuesById[900] = "EDITION_LEGACY"] = 900;
            values[valuesById[998] = "EDITION_PROTO2"] = 998;
            values[valuesById[999] = "EDITION_PROTO3"] = 999;
            values[valuesById[1000] = "EDITION_2023"] = 1000;
            values[valuesById[1001] = "EDITION_2024"] = 1001;
            values[valuesById[1] = "EDITION_1_TEST_ONLY"] = 1;
            values[valuesById[2] = "EDITION_2_TEST_ONLY"] = 2;
            values[valuesById[99997] = "EDITION_99997_TEST_ONLY"] = 99997;
            values[valuesById[99998] = "EDITION_99998_TEST_ONLY"] = 99998;
            values[valuesById[99999] = "EDITION_99999_TEST_ONLY"] = 99999;
            values[valuesById[2147483647] = "EDITION_MAX"] = 2147483647;
            return values;
        })();

        protobuf.FileDescriptorProto = (function() {

            /**
             * Properties of a FileDescriptorProto.
             * @typedef {Object} google.protobuf.FileDescriptorProto.$Properties
             * @property {string|null} [name] FileDescriptorProto name
             * @property {string|null} ["package"] FileDescriptorProto package
             * @property {Array.<string>|null} [dependency] FileDescriptorProto dependency
             * @property {Array.<number>|null} [public_dependency] FileDescriptorProto public_dependency
             * @property {Array.<number>|null} [weak_dependency] FileDescriptorProto weak_dependency
             * @property {Array.<google.protobuf.DescriptorProto.$Properties>|null} [message_type] FileDescriptorProto message_type
             * @property {Array.<google.protobuf.EnumDescriptorProto.$Properties>|null} [enum_type] FileDescriptorProto enum_type
             * @property {Array.<google.protobuf.ServiceDescriptorProto.$Properties>|null} [service] FileDescriptorProto service
             * @property {Array.<google.protobuf.FieldDescriptorProto.$Properties>|null} [extension] FileDescriptorProto extension
             * @property {google.protobuf.FileOptions.$Properties|null} [options] FileDescriptorProto options
             * @property {google.protobuf.SourceCodeInfo.$Properties|null} [source_code_info] FileDescriptorProto source_code_info
             * @property {string|null} [syntax] FileDescriptorProto syntax
             * @property {google.protobuf.Edition|null} [edition] FileDescriptorProto edition
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a FileDescriptorProto.
             * @memberof google.protobuf
             * @interface IFileDescriptorProto
             * @augments google.protobuf.FileDescriptorProto.$Properties
             * @deprecated Use google.protobuf.FileDescriptorProto.$Properties instead.
             */

            /**
             * Shape of a FileDescriptorProto.
             * @typedef {google.protobuf.FileDescriptorProto.$Properties} google.protobuf.FileDescriptorProto.$Shape
             */

            /**
             * Constructs a new FileDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents a FileDescriptorProto.
             * @constructor
             * @param {google.protobuf.FileDescriptorProto.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            var FileDescriptorProto = function (properties) {
                this.dependency = [];
                this.public_dependency = [];
                this.weak_dependency = [];
                this.message_type = [];
                this.enum_type = [];
                this.service = [];
                this.extension = [];
                if (properties)
                    for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * FileDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.name = "";

            /**
             * FileDescriptorProto package.
             * @member {string} package
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype["package"] = "";

            /**
             * FileDescriptorProto dependency.
             * @member {Array.<string>} dependency
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.dependency = $util.emptyArray;

            /**
             * FileDescriptorProto public_dependency.
             * @member {Array.<number>} public_dependency
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.public_dependency = $util.emptyArray;

            /**
             * FileDescriptorProto weak_dependency.
             * @member {Array.<number>} weak_dependency
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.weak_dependency = $util.emptyArray;

            /**
             * FileDescriptorProto message_type.
             * @member {Array.<google.protobuf.DescriptorProto.$Properties>} message_type
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.message_type = $util.emptyArray;

            /**
             * FileDescriptorProto enum_type.
             * @member {Array.<google.protobuf.EnumDescriptorProto.$Properties>} enum_type
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.enum_type = $util.emptyArray;

            /**
             * FileDescriptorProto service.
             * @member {Array.<google.protobuf.ServiceDescriptorProto.$Properties>} service
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.service = $util.emptyArray;

            /**
             * FileDescriptorProto extension.
             * @member {Array.<google.protobuf.FieldDescriptorProto.$Properties>} extension
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.extension = $util.emptyArray;

            /**
             * FileDescriptorProto options.
             * @member {google.protobuf.FileOptions.$Properties|null|undefined} options
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.options = null;

            /**
             * FileDescriptorProto source_code_info.
             * @member {google.protobuf.SourceCodeInfo.$Properties|null|undefined} source_code_info
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.source_code_info = null;

            /**
             * FileDescriptorProto syntax.
             * @member {string} syntax
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.syntax = "";

            /**
             * FileDescriptorProto edition.
             * @member {google.protobuf.Edition} edition
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.edition = 0;

            /**
             * Creates a new FileDescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {google.protobuf.FileDescriptorProto.$Properties=} [properties] Properties to set
             * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto instance
             * @type {{
             *   (properties: google.protobuf.FileDescriptorProto.$Shape): google.protobuf.FileDescriptorProto & google.protobuf.FileDescriptorProto.$Shape;
             *   (properties?: google.protobuf.FileDescriptorProto.$Properties): google.protobuf.FileDescriptorProto;
             * }}
             */
            FileDescriptorProto.create = function(properties) {
                return new FileDescriptorProto(properties);
            };

            /**
             * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {google.protobuf.FileDescriptorProto.$Properties} message FileDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileDescriptorProto.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message["package"] != null && $Object.hasOwnProperty.call(message, "package"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message["package"]);
                if (message.dependency != null && message.dependency.length)
                    for (var i = 0; i < message.dependency.length; ++i)
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.dependency[i]);
                if (message.message_type != null && message.message_type.length)
                    for (var i = 0; i < message.message_type.length; ++i)
                        $root.google.protobuf.DescriptorProto.encode(message.message_type[i], writer.uint32(/* id 4, wireType 2 =*/34).fork(), _depth + 1).ldelim();
                if (message.enum_type != null && message.enum_type.length)
                    for (var i = 0; i < message.enum_type.length; ++i)
                        $root.google.protobuf.EnumDescriptorProto.encode(message.enum_type[i], writer.uint32(/* id 5, wireType 2 =*/42).fork(), _depth + 1).ldelim();
                if (message.service != null && message.service.length)
                    for (var i = 0; i < message.service.length; ++i)
                        $root.google.protobuf.ServiceDescriptorProto.encode(message.service[i], writer.uint32(/* id 6, wireType 2 =*/50).fork(), _depth + 1).ldelim();
                if (message.extension != null && message.extension.length)
                    for (var i = 0; i < message.extension.length; ++i)
                        $root.google.protobuf.FieldDescriptorProto.encode(message.extension[i], writer.uint32(/* id 7, wireType 2 =*/58).fork(), _depth + 1).ldelim();
                if (message.options != null && $Object.hasOwnProperty.call(message, "options"))
                    $root.google.protobuf.FileOptions.encode(message.options, writer.uint32(/* id 8, wireType 2 =*/66).fork(), _depth + 1).ldelim();
                if (message.source_code_info != null && $Object.hasOwnProperty.call(message, "source_code_info"))
                    $root.google.protobuf.SourceCodeInfo.encode(message.source_code_info, writer.uint32(/* id 9, wireType 2 =*/74).fork(), _depth + 1).ldelim();
                if (message.public_dependency != null && message.public_dependency.length)
                    for (var i = 0; i < message.public_dependency.length; ++i)
                        writer.uint32(/* id 10, wireType 0 =*/80).int32(message.public_dependency[i]);
                if (message.weak_dependency != null && message.weak_dependency.length)
                    for (var i = 0; i < message.weak_dependency.length; ++i)
                        writer.uint32(/* id 11, wireType 0 =*/88).int32(message.weak_dependency[i]);
                if (message.syntax != null && $Object.hasOwnProperty.call(message, "syntax"))
                    writer.uint32(/* id 12, wireType 2 =*/98).string(message.syntax);
                if (message.edition != null && $Object.hasOwnProperty.call(message, "edition"))
                    writer.uint32(/* id 14, wireType 0 =*/112).int32(message.edition);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (var i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {google.protobuf.FileDescriptorProto.$Properties} message FileDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileDescriptorProto.encodeDelimited = function(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FileDescriptorProto & google.protobuf.FileDescriptorProto.$Shape} FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileDescriptorProto.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.google.protobuf.FileDescriptorProto(), value;
                while (reader.pos < end) {
                    var start = reader.pos;
                    var tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    var wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            message.name = reader.string();
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            message["package"] = reader.string();
                            continue;
                        }
                    case 3: {
                            if (wireType !== 2)
                                break;
                            if (!(message.dependency && message.dependency.length))
                                message.dependency = [];
                            message.dependency.push(reader.string());
                            continue;
                        }
                    case 10: {
                            if (wireType === 2) {
                                if (!(message.public_dependency && message.public_dependency.length))
                                    message.public_dependency = [];
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.public_dependency.push(reader.int32());
                                continue;
                            }
                            if (wireType !== 0)
                                break;
                            if (!(message.public_dependency && message.public_dependency.length))
                                message.public_dependency = [];
                            message.public_dependency.push(reader.int32());
                            continue;
                        }
                    case 11: {
                            if (wireType === 2) {
                                if (!(message.weak_dependency && message.weak_dependency.length))
                                    message.weak_dependency = [];
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.weak_dependency.push(reader.int32());
                                continue;
                            }
                            if (wireType !== 0)
                                break;
                            if (!(message.weak_dependency && message.weak_dependency.length))
                                message.weak_dependency = [];
                            message.weak_dependency.push(reader.int32());
                            continue;
                        }
                    case 4: {
                            if (wireType !== 2)
                                break;
                            if (!(message.message_type && message.message_type.length))
                                message.message_type = [];
                            message.message_type.push($root.google.protobuf.DescriptorProto.decode(reader, reader.uint32(), $undefined, _depth + 1));
                            continue;
                        }
                    case 5: {
                            if (wireType !== 2)
                                break;
                            if (!(message.enum_type && message.enum_type.length))
                                message.enum_type = [];
                            message.enum_type.push($root.google.protobuf.EnumDescriptorProto.decode(reader, reader.uint32(), $undefined, _depth + 1));
                            continue;
                        }
                    case 6: {
                            if (wireType !== 2)
                                break;
                            if (!(message.service && message.service.length))
                                message.service = [];
                            message.service.push($root.google.protobuf.ServiceDescriptorProto.decode(reader, reader.uint32(), $undefined, _depth + 1));
                            continue;
                        }
                    case 7: {
                            if (wireType !== 2)
                                break;
                            if (!(message.extension && message.extension.length))
                                message.extension = [];
                            message.extension.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32(), $undefined, _depth + 1));
                            continue;
                        }
                    case 8: {
                            if (wireType !== 2)
                                break;
                            message.options = $root.google.protobuf.FileOptions.decode(reader, reader.uint32(), $undefined, _depth + 1, message.options);
                            continue;
                        }
                    case 9: {
                            if (wireType !== 2)
                                break;
                            message.source_code_info = $root.google.protobuf.SourceCodeInfo.decode(reader, reader.uint32(), $undefined, _depth + 1, message.source_code_info);
                            continue;
                        }
                    case 12: {
                            if (wireType !== 2)
                                break;
                            message.syntax = reader.string();
                            continue;
                        }
                    case 14: {
                            if (wireType !== 0)
                                break;
                            value = reader.int32();
                            if ($root.google.protobuf.Edition[value] !== $undefined)
                                message.edition = value;
                            else if (!reader.discardUnknown) {
                                $util.makeProp(message, "$unknowns", false);
                                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                            }
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.FileDescriptorProto & google.protobuf.FileDescriptorProto.$Shape} FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileDescriptorProto.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FileDescriptorProto message.
             * @function verify
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FileDescriptorProto.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message["package"] != null && $Object.hasOwnProperty.call(message, "package"))
                    if (!$util.isString(message["package"]))
                        return "package: string expected";
                if (message.dependency != null && $Object.hasOwnProperty.call(message, "dependency")) {
                    if (!$Array.isArray(message.dependency))
                        return "dependency: array expected";
                    for (var i = 0; i < message.dependency.length; ++i)
                        if (!$util.isString(message.dependency[i]))
                            return "dependency: string[] expected";
                }
                if (message.public_dependency != null && $Object.hasOwnProperty.call(message, "public_dependency")) {
                    if (!$Array.isArray(message.public_dependency))
                        return "public_dependency: array expected";
                    for (var i = 0; i < message.public_dependency.length; ++i)
                        if (!$util.isInteger(message.public_dependency[i]))
                            return "public_dependency: integer[] expected";
                }
                if (message.weak_dependency != null && $Object.hasOwnProperty.call(message, "weak_dependency")) {
                    if (!$Array.isArray(message.weak_dependency))
                        return "weak_dependency: array expected";
                    for (var i = 0; i < message.weak_dependency.length; ++i)
                        if (!$util.isInteger(message.weak_dependency[i]))
                            return "weak_dependency: integer[] expected";
                }
                if (message.message_type != null && $Object.hasOwnProperty.call(message, "message_type")) {
                    if (!$Array.isArray(message.message_type))
                        return "message_type: array expected";
                    for (var i = 0; i < message.message_type.length; ++i) {
                        var error = $root.google.protobuf.DescriptorProto.verify(message.message_type[i], _depth + 1);
                        if (error)
                            return "message_type." + error;
                    }
                }
                if (message.enum_type != null && $Object.hasOwnProperty.call(message, "enum_type")) {
                    if (!$Array.isArray(message.enum_type))
                        return "enum_type: array expected";
                    for (var i = 0; i < message.enum_type.length; ++i) {
                        var error = $root.google.protobuf.EnumDescriptorProto.verify(message.enum_type[i], _depth + 1);
                        if (error)
                            return "enum_type." + error;
                    }
                }
                if (message.service != null && $Object.hasOwnProperty.call(message, "service")) {
                    if (!$Array.isArray(message.service))
                        return "service: array expected";
                    for (var i = 0; i < message.service.length; ++i) {
                        var error = $root.google.protobuf.ServiceDescriptorProto.verify(message.service[i], _depth + 1);
                        if (error)
                            return "service." + error;
                    }
                }
                if (message.extension != null && $Object.hasOwnProperty.call(message, "extension")) {
                    if (!$Array.isArray(message.extension))
                        return "extension: array expected";
                    for (var i = 0; i < message.extension.length; ++i) {
                        var error = $root.google.protobuf.FieldDescriptorProto.verify(message.extension[i], _depth + 1);
                        if (error)
                            return "extension." + error;
                    }
                }
                if (message.options != null && $Object.hasOwnProperty.call(message, "options")) {
                    var error = $root.google.protobuf.FileOptions.verify(message.options, _depth + 1);
                    if (error)
                        return "options." + error;
                }
                if (message.source_code_info != null && $Object.hasOwnProperty.call(message, "source_code_info")) {
                    var error = $root.google.protobuf.SourceCodeInfo.verify(message.source_code_info, _depth + 1);
                    if (error)
                        return "source_code_info." + error;
                }
                if (message.syntax != null && $Object.hasOwnProperty.call(message, "syntax"))
                    if (!$util.isString(message.syntax))
                        return "syntax: string expected";
                if (message.edition != null && $Object.hasOwnProperty.call(message, "edition"))
                    switch (message.edition) {
                    default:
                        return "edition: enum value expected";
                    case 0:
                    case 900:
                    case 998:
                    case 999:
                    case 1000:
                    case 1001:
                    case 1:
                    case 2:
                    case 99997:
                    case 99998:
                    case 99999:
                    case 2147483647:
                        break;
                    }
                return null;
            };

            /**
             * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
             */
            FileDescriptorProto.fromObject = function (object, _depth) {
                if (object instanceof $root.google.protobuf.FileDescriptorProto)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".google.protobuf.FileDescriptorProto: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var message = new $root.google.protobuf.FileDescriptorProto();
                if (object.name != null)
                    message.name = $String(object.name);
                if (object["package"] != null)
                    message["package"] = $String(object["package"]);
                if (object.dependency) {
                    if (!$Array.isArray(object.dependency))
                        throw $TypeError(".google.protobuf.FileDescriptorProto.dependency: array expected");
                    message.dependency = $Array(object.dependency.length);
                    for (var i = 0; i < object.dependency.length; ++i)
                        message.dependency[i] = $String(object.dependency[i]);
                }
                if (object.public_dependency) {
                    if (!$Array.isArray(object.public_dependency))
                        throw $TypeError(".google.protobuf.FileDescriptorProto.public_dependency: array expected");
                    message.public_dependency = $Array(object.public_dependency.length);
                    for (var i = 0; i < object.public_dependency.length; ++i)
                        message.public_dependency[i] = object.public_dependency[i] | 0;
                }
                if (object.weak_dependency) {
                    if (!$Array.isArray(object.weak_dependency))
                        throw $TypeError(".google.protobuf.FileDescriptorProto.weak_dependency: array expected");
                    message.weak_dependency = $Array(object.weak_dependency.length);
                    for (var i = 0; i < object.weak_dependency.length; ++i)
                        message.weak_dependency[i] = object.weak_dependency[i] | 0;
                }
                if (object.message_type) {
                    if (!$Array.isArray(object.message_type))
                        throw $TypeError(".google.protobuf.FileDescriptorProto.message_type: array expected");
                    message.message_type = $Array(object.message_type.length);
                    for (var i = 0; i < object.message_type.length; ++i) {
                        if (!$util.isObject(object.message_type[i]))
                            throw $TypeError(".google.protobuf.FileDescriptorProto.message_type: object expected");
                        message.message_type[i] = $root.google.protobuf.DescriptorProto.fromObject(object.message_type[i], _depth + 1);
                    }
                }
                if (object.enum_type) {
                    if (!$Array.isArray(object.enum_type))
                        throw $TypeError(".google.protobuf.FileDescriptorProto.enum_type: array expected");
                    message.enum_type = $Array(object.enum_type.length);
                    for (var i = 0; i < object.enum_type.length; ++i) {
                        if (!$util.isObject(object.enum_type[i]))
                            throw $TypeError(".google.protobuf.FileDescriptorProto.enum_type: object expected");
                        message.enum_type[i] = $root.google.protobuf.EnumDescriptorProto.fromObject(object.enum_type[i], _depth + 1);
                    }
                }
                if (object.service) {
                    if (!$Array.isArray(object.service))
                        throw $TypeError(".google.protobuf.FileDescriptorProto.service: array expected");
                    message.service = $Array(object.service.length);
                    for (var i = 0; i < object.service.length; ++i) {
                        if (!$util.isObject(object.service[i]))
                            throw $TypeError(".google.protobuf.FileDescriptorProto.service: object expected");
                        message.service[i] = $root.google.protobuf.ServiceDescriptorProto.fromObject(object.service[i], _depth + 1);
                    }
                }
                if (object.extension) {
                    if (!$Array.isArray(object.extension))
                        throw $TypeError(".google.protobuf.FileDescriptorProto.extension: array expected");
                    message.extension = $Array(object.extension.length);
                    for (var i = 0; i < object.extension.length; ++i) {
                        if (!$util.isObject(object.extension[i]))
                            throw $TypeError(".google.protobuf.FileDescriptorProto.extension: object expected");
                        message.extension[i] = $root.google.protobuf.FieldDescriptorProto.fromObject(object.extension[i], _depth + 1);
                    }
                }
                if (object.options != null) {
                    if (!$util.isObject(object.options))
                        throw $TypeError(".google.protobuf.FileDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.FileOptions.fromObject(object.options, _depth + 1);
                }
                if (object.source_code_info != null) {
                    if (!$util.isObject(object.source_code_info))
                        throw $TypeError(".google.protobuf.FileDescriptorProto.source_code_info: object expected");
                    message.source_code_info = $root.google.protobuf.SourceCodeInfo.fromObject(object.source_code_info, _depth + 1);
                }
                if (object.syntax != null)
                    message.syntax = $String(object.syntax);
                switch (object.edition) {
                case "EDITION_UNKNOWN":
                case 0:
                    message.edition = 0;
                    break;
                case "EDITION_LEGACY":
                case 900:
                    message.edition = 900;
                    break;
                case "EDITION_PROTO2":
                case 998:
                    message.edition = 998;
                    break;
                case "EDITION_PROTO3":
                case 999:
                    message.edition = 999;
                    break;
                case "EDITION_2023":
                case 1000:
                    message.edition = 1000;
                    break;
                case "EDITION_2024":
                case 1001:
                    message.edition = 1001;
                    break;
                case "EDITION_1_TEST_ONLY":
                case 1:
                    message.edition = 1;
                    break;
                case "EDITION_2_TEST_ONLY":
                case 2:
                    message.edition = 2;
                    break;
                case "EDITION_99997_TEST_ONLY":
                case 99997:
                    message.edition = 99997;
                    break;
                case "EDITION_99998_TEST_ONLY":
                case 99998:
                    message.edition = 99998;
                    break;
                case "EDITION_99999_TEST_ONLY":
                case 99999:
                    message.edition = 99999;
                    break;
                case "EDITION_MAX":
                case 2147483647:
                    message.edition = 2147483647;
                    break;
                default:
                }
                return message;
            };

            /**
             * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {google.protobuf.FileDescriptorProto} message FileDescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FileDescriptorProto.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var object = {};
                if (options.arrays || options.defaults) {
                    object.dependency = [];
                    object.message_type = [];
                    object.enum_type = [];
                    object.service = [];
                    object.extension = [];
                    object.public_dependency = [];
                    object.weak_dependency = [];
                }
                if (options.defaults) {
                    object.name = "";
                    object["package"] = "";
                    object.options = null;
                    object.source_code_info = null;
                    object.syntax = "";
                    object.edition = options.enums === $String ? "EDITION_UNKNOWN" : 0;
                }
                if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                    object.name = message.name;
                if (message["package"] != null && $Object.hasOwnProperty.call(message, "package"))
                    object["package"] = message["package"];
                if (message.dependency && message.dependency.length) {
                    object.dependency = $Array(message.dependency.length);
                    for (var j = 0; j < message.dependency.length; ++j)
                        object.dependency[j] = message.dependency[j];
                }
                if (message.message_type && message.message_type.length) {
                    object.message_type = $Array(message.message_type.length);
                    for (var j = 0; j < message.message_type.length; ++j)
                        object.message_type[j] = $root.google.protobuf.DescriptorProto.toObject(message.message_type[j], options, _depth + 1);
                }
                if (message.enum_type && message.enum_type.length) {
                    object.enum_type = $Array(message.enum_type.length);
                    for (var j = 0; j < message.enum_type.length; ++j)
                        object.enum_type[j] = $root.google.protobuf.EnumDescriptorProto.toObject(message.enum_type[j], options, _depth + 1);
                }
                if (message.service && message.service.length) {
                    object.service = $Array(message.service.length);
                    for (var j = 0; j < message.service.length; ++j)
                        object.service[j] = $root.google.protobuf.ServiceDescriptorProto.toObject(message.service[j], options, _depth + 1);
                }
                if (message.extension && message.extension.length) {
                    object.extension = $Array(message.extension.length);
                    for (var j = 0; j < message.extension.length; ++j)
                        object.extension[j] = $root.google.protobuf.FieldDescriptorProto.toObject(message.extension[j], options, _depth + 1);
                }
                if (message.options != null && $Object.hasOwnProperty.call(message, "options"))
                    object.options = $root.google.protobuf.FileOptions.toObject(message.options, options, _depth + 1);
                if (message.source_code_info != null && $Object.hasOwnProperty.call(message, "source_code_info"))
                    object.source_code_info = $root.google.protobuf.SourceCodeInfo.toObject(message.source_code_info, options, _depth + 1);
                if (message.public_dependency && message.public_dependency.length) {
                    object.public_dependency = $Array(message.public_dependency.length);
                    for (var j = 0; j < message.public_dependency.length; ++j)
                        object.public_dependency[j] = message.public_dependency[j];
                }
                if (message.weak_dependency && message.weak_dependency.length) {
                    object.weak_dependency = $Array(message.weak_dependency.length);
                    for (var j = 0; j < message.weak_dependency.length; ++j)
                        object.weak_dependency[j] = message.weak_dependency[j];
                }
                if (message.syntax != null && $Object.hasOwnProperty.call(message, "syntax"))
                    object.syntax = message.syntax;
                if (message.edition != null && $Object.hasOwnProperty.call(message, "edition"))
                    object.edition = options.enums === $String ? $root.google.protobuf.Edition[message.edition] === $undefined ? message.edition : $root.google.protobuf.Edition[message.edition] : message.edition;
                return object;
            };

            /**
             * Converts this FileDescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FileDescriptorProto.prototype.toJSON = function() {
                return FileDescriptorProto.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for FileDescriptorProto
             * @function getTypeUrl
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            FileDescriptorProto.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/google.protobuf.FileDescriptorProto";
            };

            return FileDescriptorProto;
        })();

        protobuf.DescriptorProto = (function() {

            /**
             * Properties of a DescriptorProto.
             * @typedef {Object} google.protobuf.DescriptorProto.$Properties
             * @property {string|null} [name] DescriptorProto name
             * @property {Array.<google.protobuf.FieldDescriptorProto.$Properties>|null} [field] DescriptorProto field
             * @property {Array.<google.protobuf.FieldDescriptorProto.$Properties>|null} [extension] DescriptorProto extension
             * @property {Array.<google.protobuf.DescriptorProto.$Properties>|null} [nested_type] DescriptorProto nested_type
             * @property {Array.<google.protobuf.EnumDescriptorProto.$Properties>|null} [enum_type] DescriptorProto enum_type
             * @property {Array.<google.protobuf.DescriptorProto.ExtensionRange.$Properties>|null} [extension_range] DescriptorProto extension_range
             * @property {Array.<google.protobuf.OneofDescriptorProto.$Properties>|null} [oneof_decl] DescriptorProto oneof_decl
             * @property {google.protobuf.MessageOptions.$Properties|null} [options] DescriptorProto options
             * @property {Array.<google.protobuf.DescriptorProto.ReservedRange.$Properties>|null} [reserved_range] DescriptorProto reserved_range
             * @property {Array.<string>|null} [reserved_name] DescriptorProto reserved_name
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a DescriptorProto.
             * @memberof google.protobuf
             * @interface IDescriptorProto
             * @augments google.protobuf.DescriptorProto.$Properties
             * @deprecated Use google.protobuf.DescriptorProto.$Properties instead.
             */

            /**
             * Shape of a DescriptorProto.
             * @typedef {google.protobuf.DescriptorProto.$Properties} google.protobuf.DescriptorProto.$Shape
             */

            /**
             * Constructs a new DescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents a DescriptorProto.
             * @constructor
             * @param {google.protobuf.DescriptorProto.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            var DescriptorProto = function (properties) {
                this.field = [];
                this.extension = [];
                this.nested_type = [];
                this.enum_type = [];
                this.extension_range = [];
                this.oneof_decl = [];
                this.reserved_range = [];
                this.reserved_name = [];
                if (properties)
                    for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * DescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.name = "";

            /**
             * DescriptorProto field.
             * @member {Array.<google.protobuf.FieldDescriptorProto.$Properties>} field
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.field = $util.emptyArray;

            /**
             * DescriptorProto extension.
             * @member {Array.<google.protobuf.FieldDescriptorProto.$Properties>} extension
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.extension = $util.emptyArray;

            /**
             * DescriptorProto nested_type.
             * @member {Array.<google.protobuf.DescriptorProto.$Properties>} nested_type
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.nested_type = $util.emptyArray;

            /**
             * DescriptorProto enum_type.
             * @member {Array.<google.protobuf.EnumDescriptorProto.$Properties>} enum_type
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.enum_type = $util.emptyArray;

            /**
             * DescriptorProto extension_range.
             * @member {Array.<google.protobuf.DescriptorProto.ExtensionRange.$Properties>} extension_range
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.extension_range = $util.emptyArray;

            /**
             * DescriptorProto oneof_decl.
             * @member {Array.<google.protobuf.OneofDescriptorProto.$Properties>} oneof_decl
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.oneof_decl = $util.emptyArray;

            /**
             * DescriptorProto options.
             * @member {google.protobuf.MessageOptions.$Properties|null|undefined} options
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.options = null;

            /**
             * DescriptorProto reserved_range.
             * @member {Array.<google.protobuf.DescriptorProto.ReservedRange.$Properties>} reserved_range
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.reserved_range = $util.emptyArray;

            /**
             * DescriptorProto reserved_name.
             * @member {Array.<string>} reserved_name
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.reserved_name = $util.emptyArray;

            /**
             * Creates a new DescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {google.protobuf.DescriptorProto.$Properties=} [properties] Properties to set
             * @returns {google.protobuf.DescriptorProto} DescriptorProto instance
             * @type {{
             *   (properties: google.protobuf.DescriptorProto.$Shape): google.protobuf.DescriptorProto & google.protobuf.DescriptorProto.$Shape;
             *   (properties?: google.protobuf.DescriptorProto.$Properties): google.protobuf.DescriptorProto;
             * }}
             */
            DescriptorProto.create = function(properties) {
                return new DescriptorProto(properties);
            };

            /**
             * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {google.protobuf.DescriptorProto.$Properties} message DescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DescriptorProto.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.field != null && message.field.length)
                    for (var i = 0; i < message.field.length; ++i)
                        $root.google.protobuf.FieldDescriptorProto.encode(message.field[i], writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
                if (message.nested_type != null && message.nested_type.length)
                    for (var i = 0; i < message.nested_type.length; ++i)
                        $root.google.protobuf.DescriptorProto.encode(message.nested_type[i], writer.uint32(/* id 3, wireType 2 =*/26).fork(), _depth + 1).ldelim();
                if (message.enum_type != null && message.enum_type.length)
                    for (var i = 0; i < message.enum_type.length; ++i)
                        $root.google.protobuf.EnumDescriptorProto.encode(message.enum_type[i], writer.uint32(/* id 4, wireType 2 =*/34).fork(), _depth + 1).ldelim();
                if (message.extension_range != null && message.extension_range.length)
                    for (var i = 0; i < message.extension_range.length; ++i)
                        $root.google.protobuf.DescriptorProto.ExtensionRange.encode(message.extension_range[i], writer.uint32(/* id 5, wireType 2 =*/42).fork(), _depth + 1).ldelim();
                if (message.extension != null && message.extension.length)
                    for (var i = 0; i < message.extension.length; ++i)
                        $root.google.protobuf.FieldDescriptorProto.encode(message.extension[i], writer.uint32(/* id 6, wireType 2 =*/50).fork(), _depth + 1).ldelim();
                if (message.options != null && $Object.hasOwnProperty.call(message, "options"))
                    $root.google.protobuf.MessageOptions.encode(message.options, writer.uint32(/* id 7, wireType 2 =*/58).fork(), _depth + 1).ldelim();
                if (message.oneof_decl != null && message.oneof_decl.length)
                    for (var i = 0; i < message.oneof_decl.length; ++i)
                        $root.google.protobuf.OneofDescriptorProto.encode(message.oneof_decl[i], writer.uint32(/* id 8, wireType 2 =*/66).fork(), _depth + 1).ldelim();
                if (message.reserved_range != null && message.reserved_range.length)
                    for (var i = 0; i < message.reserved_range.length; ++i)
                        $root.google.protobuf.DescriptorProto.ReservedRange.encode(message.reserved_range[i], writer.uint32(/* id 9, wireType 2 =*/74).fork(), _depth + 1).ldelim();
                if (message.reserved_name != null && message.reserved_name.length)
                    for (var i = 0; i < message.reserved_name.length; ++i)
                        writer.uint32(/* id 10, wireType 2 =*/82).string(message.reserved_name[i]);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (var i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {google.protobuf.DescriptorProto.$Properties} message DescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DescriptorProto.encodeDelimited = function(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.DescriptorProto & google.protobuf.DescriptorProto.$Shape} DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DescriptorProto.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.google.protobuf.DescriptorProto();
                while (reader.pos < end) {
                    var start = reader.pos;
                    var tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    var wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            message.name = reader.string();
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            if (!(message.field && message.field.length))
                                message.field = [];
                            message.field.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32(), $undefined, _depth + 1));
                            continue;
                        }
                    case 6: {
                            if (wireType !== 2)
                                break;
                            if (!(message.extension && message.extension.length))
                                message.extension = [];
                            message.extension.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32(), $undefined, _depth + 1));
                            continue;
                        }
                    case 3: {
                            if (wireType !== 2)
                                break;
                            if (!(message.nested_type && message.nested_type.length))
                                message.nested_type = [];
                            message.nested_type.push($root.google.protobuf.DescriptorProto.decode(reader, reader.uint32(), $undefined, _depth + 1));
                            continue;
                        }
                    case 4: {
                            if (wireType !== 2)
                                break;
                            if (!(message.enum_type && message.enum_type.length))
                                message.enum_type = [];
                            message.enum_type.push($root.google.protobuf.EnumDescriptorProto.decode(reader, reader.uint32(), $undefined, _depth + 1));
                            continue;
                        }
                    case 5: {
                            if (wireType !== 2)
                                break;
                            if (!(message.extension_range && message.extension_range.length))
                                message.extension_range = [];
                            message.extension_range.push($root.google.protobuf.DescriptorProto.ExtensionRange.decode(reader, reader.uint32(), $undefined, _depth + 1));
                            continue;
                        }
                    case 8: {
                            if (wireType !== 2)
                                break;
                            if (!(message.oneof_decl && message.oneof_decl.length))
                                message.oneof_decl = [];
                            message.oneof_decl.push($root.google.protobuf.OneofDescriptorProto.decode(reader, reader.uint32(), $undefined, _depth + 1));
                            continue;
                        }
                    case 7: {
                            if (wireType !== 2)
                                break;
                            message.options = $root.google.protobuf.MessageOptions.decode(reader, reader.uint32(), $undefined, _depth + 1, message.options);
                            continue;
                        }
                    case 9: {
                            if (wireType !== 2)
                                break;
                            if (!(message.reserved_range && message.reserved_range.length))
                                message.reserved_range = [];
                            message.reserved_range.push($root.google.protobuf.DescriptorProto.ReservedRange.decode(reader, reader.uint32(), $undefined, _depth + 1));
                            continue;
                        }
                    case 10: {
                            if (wireType !== 2)
                                break;
                            if (!(message.reserved_name && message.reserved_name.length))
                                message.reserved_name = [];
                            message.reserved_name.push(reader.string());
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.DescriptorProto & google.protobuf.DescriptorProto.$Shape} DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DescriptorProto.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DescriptorProto message.
             * @function verify
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DescriptorProto.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.field != null && $Object.hasOwnProperty.call(message, "field")) {
                    if (!$Array.isArray(message.field))
                        return "field: array expected";
                    for (var i = 0; i < message.field.length; ++i) {
                        var error = $root.google.protobuf.FieldDescriptorProto.verify(message.field[i], _depth + 1);
                        if (error)
                            return "field." + error;
                    }
                }
                if (message.extension != null && $Object.hasOwnProperty.call(message, "extension")) {
                    if (!$Array.isArray(message.extension))
                        return "extension: array expected";
                    for (var i = 0; i < message.extension.length; ++i) {
                        var error = $root.google.protobuf.FieldDescriptorProto.verify(message.extension[i], _depth + 1);
                        if (error)
                            return "extension." + error;
                    }
                }
                if (message.nested_type != null && $Object.hasOwnProperty.call(message, "nested_type")) {
                    if (!$Array.isArray(message.nested_type))
                        return "nested_type: array expected";
                    for (var i = 0; i < message.nested_type.length; ++i) {
                        var error = $root.google.protobuf.DescriptorProto.verify(message.nested_type[i], _depth + 1);
                        if (error)
                            return "nested_type." + error;
                    }
                }
                if (message.enum_type != null && $Object.hasOwnProperty.call(message, "enum_type")) {
                    if (!$Array.isArray(message.enum_type))
                        return "enum_type: array expected";
                    for (var i = 0; i < message.enum_type.length; ++i) {
                        var error = $root.google.protobuf.EnumDescriptorProto.verify(message.enum_type[i], _depth + 1);
                        if (error)
                            return "enum_type." + error;
                    }
                }
                if (message.extension_range != null && $Object.hasOwnProperty.call(message, "extension_range")) {
                    if (!$Array.isArray(message.extension_range))
                        return "extension_range: array expected";
                    for (var i = 0; i < message.extension_range.length; ++i) {
                        var error = $root.google.protobuf.DescriptorProto.ExtensionRange.verify(message.extension_range[i], _depth + 1);
                        if (error)
                            return "extension_range." + error;
                    }
                }
                if (message.oneof_decl != null && $Object.hasOwnProperty.call(message, "oneof_decl")) {
                    if (!$Array.isArray(message.oneof_decl))
                        return "oneof_decl: array expected";
                    for (var i = 0; i < message.oneof_decl.length; ++i) {
                        var error = $root.google.protobuf.OneofDescriptorProto.verify(message.oneof_decl[i], _depth + 1);
                        if (error)
                            return "oneof_decl." + error;
                    }
                }
                if (message.options != null && $Object.hasOwnProperty.call(message, "options")) {
                    var error = $root.google.protobuf.MessageOptions.verify(message.options, _depth + 1);
                    if (error)
                        return "options." + error;
                }
                if (message.reserved_range != null && $Object.hasOwnProperty.call(message, "reserved_range")) {
                    if (!$Array.isArray(message.reserved_range))
                        return "reserved_range: array expected";
                    for (var i = 0; i < message.reserved_range.length; ++i) {
                        var error = $root.google.protobuf.DescriptorProto.ReservedRange.verify(message.reserved_range[i], _depth + 1);
                        if (error)
                            return "reserved_range." + error;
                    }
                }
                if (message.reserved_name != null && $Object.hasOwnProperty.call(message, "reserved_name")) {
                    if (!$Array.isArray(message.reserved_name))
                        return "reserved_name: array expected";
                    for (var i = 0; i < message.reserved_name.length; ++i)
                        if (!$util.isString(message.reserved_name[i]))
                            return "reserved_name: string[] expected";
                }
                return null;
            };

            /**
             * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.DescriptorProto} DescriptorProto
             */
            DescriptorProto.fromObject = function (object, _depth) {
                if (object instanceof $root.google.protobuf.DescriptorProto)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".google.protobuf.DescriptorProto: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var message = new $root.google.protobuf.DescriptorProto();
                if (object.name != null)
                    message.name = $String(object.name);
                if (object.field) {
                    if (!$Array.isArray(object.field))
                        throw $TypeError(".google.protobuf.DescriptorProto.field: array expected");
                    message.field = $Array(object.field.length);
                    for (var i = 0; i < object.field.length; ++i) {
                        if (!$util.isObject(object.field[i]))
                            throw $TypeError(".google.protobuf.DescriptorProto.field: object expected");
                        message.field[i] = $root.google.protobuf.FieldDescriptorProto.fromObject(object.field[i], _depth + 1);
                    }
                }
                if (object.extension) {
                    if (!$Array.isArray(object.extension))
                        throw $TypeError(".google.protobuf.DescriptorProto.extension: array expected");
                    message.extension = $Array(object.extension.length);
                    for (var i = 0; i < object.extension.length; ++i) {
                        if (!$util.isObject(object.extension[i]))
                            throw $TypeError(".google.protobuf.DescriptorProto.extension: object expected");
                        message.extension[i] = $root.google.protobuf.FieldDescriptorProto.fromObject(object.extension[i], _depth + 1);
                    }
                }
                if (object.nested_type) {
                    if (!$Array.isArray(object.nested_type))
                        throw $TypeError(".google.protobuf.DescriptorProto.nested_type: array expected");
                    message.nested_type = $Array(object.nested_type.length);
                    for (var i = 0; i < object.nested_type.length; ++i) {
                        if (!$util.isObject(object.nested_type[i]))
                            throw $TypeError(".google.protobuf.DescriptorProto.nested_type: object expected");
                        message.nested_type[i] = $root.google.protobuf.DescriptorProto.fromObject(object.nested_type[i], _depth + 1);
                    }
                }
                if (object.enum_type) {
                    if (!$Array.isArray(object.enum_type))
                        throw $TypeError(".google.protobuf.DescriptorProto.enum_type: array expected");
                    message.enum_type = $Array(object.enum_type.length);
                    for (var i = 0; i < object.enum_type.length; ++i) {
                        if (!$util.isObject(object.enum_type[i]))
                            throw $TypeError(".google.protobuf.DescriptorProto.enum_type: object expected");
                        message.enum_type[i] = $root.google.protobuf.EnumDescriptorProto.fromObject(object.enum_type[i], _depth + 1);
                    }
                }
                if (object.extension_range) {
                    if (!$Array.isArray(object.extension_range))
                        throw $TypeError(".google.protobuf.DescriptorProto.extension_range: array expected");
                    message.extension_range = $Array(object.extension_range.length);
                    for (var i = 0; i < object.extension_range.length; ++i) {
                        if (!$util.isObject(object.extension_range[i]))
                            throw $TypeError(".google.protobuf.DescriptorProto.extension_range: object expected");
                        message.extension_range[i] = $root.google.protobuf.DescriptorProto.ExtensionRange.fromObject(object.extension_range[i], _depth + 1);
                    }
                }
                if (object.oneof_decl) {
                    if (!$Array.isArray(object.oneof_decl))
                        throw $TypeError(".google.protobuf.DescriptorProto.oneof_decl: array expected");
                    message.oneof_decl = $Array(object.oneof_decl.length);
                    for (var i = 0; i < object.oneof_decl.length; ++i) {
                        if (!$util.isObject(object.oneof_decl[i]))
                            throw $TypeError(".google.protobuf.DescriptorProto.oneof_decl: object expected");
                        message.oneof_decl[i] = $root.google.protobuf.OneofDescriptorProto.fromObject(object.oneof_decl[i], _depth + 1);
                    }
                }
                if (object.options != null) {
                    if (!$util.isObject(object.options))
                        throw $TypeError(".google.protobuf.DescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.MessageOptions.fromObject(object.options, _depth + 1);
                }
                if (object.reserved_range) {
                    if (!$Array.isArray(object.reserved_range))
                        throw $TypeError(".google.protobuf.DescriptorProto.reserved_range: array expected");
                    message.reserved_range = $Array(object.reserved_range.length);
                    for (var i = 0; i < object.reserved_range.length; ++i) {
                        if (!$util.isObject(object.reserved_range[i]))
                            throw $TypeError(".google.protobuf.DescriptorProto.reserved_range: object expected");
                        message.reserved_range[i] = $root.google.protobuf.DescriptorProto.ReservedRange.fromObject(object.reserved_range[i], _depth + 1);
                    }
                }
                if (object.reserved_name) {
                    if (!$Array.isArray(object.reserved_name))
                        throw $TypeError(".google.protobuf.DescriptorProto.reserved_name: array expected");
                    message.reserved_name = $Array(object.reserved_name.length);
                    for (var i = 0; i < object.reserved_name.length; ++i)
                        message.reserved_name[i] = $String(object.reserved_name[i]);
                }
                return message;
            };

            /**
             * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {google.protobuf.DescriptorProto} message DescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DescriptorProto.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var object = {};
                if (options.arrays || options.defaults) {
                    object.field = [];
                    object.nested_type = [];
                    object.enum_type = [];
                    object.extension_range = [];
                    object.extension = [];
                    object.oneof_decl = [];
                    object.reserved_range = [];
                    object.reserved_name = [];
                }
                if (options.defaults) {
                    object.name = "";
                    object.options = null;
                }
                if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                    object.name = message.name;
                if (message.field && message.field.length) {
                    object.field = $Array(message.field.length);
                    for (var j = 0; j < message.field.length; ++j)
                        object.field[j] = $root.google.protobuf.FieldDescriptorProto.toObject(message.field[j], options, _depth + 1);
                }
                if (message.nested_type && message.nested_type.length) {
                    object.nested_type = $Array(message.nested_type.length);
                    for (var j = 0; j < message.nested_type.length; ++j)
                        object.nested_type[j] = $root.google.protobuf.DescriptorProto.toObject(message.nested_type[j], options, _depth + 1);
                }
                if (message.enum_type && message.enum_type.length) {
                    object.enum_type = $Array(message.enum_type.length);
                    for (var j = 0; j < message.enum_type.length; ++j)
                        object.enum_type[j] = $root.google.protobuf.EnumDescriptorProto.toObject(message.enum_type[j], options, _depth + 1);
                }
                if (message.extension_range && message.extension_range.length) {
                    object.extension_range = $Array(message.extension_range.length);
                    for (var j = 0; j < message.extension_range.length; ++j)
                        object.extension_range[j] = $root.google.protobuf.DescriptorProto.ExtensionRange.toObject(message.extension_range[j], options, _depth + 1);
                }
                if (message.extension && message.extension.length) {
                    object.extension = $Array(message.extension.length);
                    for (var j = 0; j < message.extension.length; ++j)
                        object.extension[j] = $root.google.protobuf.FieldDescriptorProto.toObject(message.extension[j], options, _depth + 1);
                }
                if (message.options != null && $Object.hasOwnProperty.call(message, "options"))
                    object.options = $root.google.protobuf.MessageOptions.toObject(message.options, options, _depth + 1);
                if (message.oneof_decl && message.oneof_decl.length) {
                    object.oneof_decl = $Array(message.oneof_decl.length);
                    for (var j = 0; j < message.oneof_decl.length; ++j)
                        object.oneof_decl[j] = $root.google.protobuf.OneofDescriptorProto.toObject(message.oneof_decl[j], options, _depth + 1);
                }
                if (message.reserved_range && message.reserved_range.length) {
                    object.reserved_range = $Array(message.reserved_range.length);
                    for (var j = 0; j < message.reserved_range.length; ++j)
                        object.reserved_range[j] = $root.google.protobuf.DescriptorProto.ReservedRange.toObject(message.reserved_range[j], options, _depth + 1);
                }
                if (message.reserved_name && message.reserved_name.length) {
                    object.reserved_name = $Array(message.reserved_name.length);
                    for (var j = 0; j < message.reserved_name.length; ++j)
                        object.reserved_name[j] = message.reserved_name[j];
                }
                return object;
            };

            /**
             * Converts this DescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.DescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DescriptorProto.prototype.toJSON = function() {
                return DescriptorProto.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for DescriptorProto
             * @function getTypeUrl
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            DescriptorProto.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/google.protobuf.DescriptorProto";
            };

            DescriptorProto.ExtensionRange = (function() {

                /**
                 * Properties of an ExtensionRange.
                 * @typedef {Object} google.protobuf.DescriptorProto.ExtensionRange.$Properties
                 * @property {number|null} [start] ExtensionRange start
                 * @property {number|null} [end] ExtensionRange end
                 * @property {google.protobuf.ExtensionRangeOptions.$Properties|null} [options] ExtensionRange options
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */

                /**
                 * Properties of an ExtensionRange.
                 * @memberof google.protobuf.DescriptorProto
                 * @interface IExtensionRange
                 * @augments google.protobuf.DescriptorProto.ExtensionRange.$Properties
                 * @deprecated Use google.protobuf.DescriptorProto.ExtensionRange.$Properties instead.
                 */

                /**
                 * Shape of an ExtensionRange.
                 * @typedef {google.protobuf.DescriptorProto.ExtensionRange.$Properties} google.protobuf.DescriptorProto.ExtensionRange.$Shape
                 */

                /**
                 * Constructs a new ExtensionRange.
                 * @memberof google.protobuf.DescriptorProto
                 * @classdesc Represents an ExtensionRange.
                 * @constructor
                 * @param {google.protobuf.DescriptorProto.ExtensionRange.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                var ExtensionRange = function (properties) {
                    if (properties)
                        for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };

                /**
                 * ExtensionRange start.
                 * @member {number} start
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @instance
                 */
                ExtensionRange.prototype.start = 0;

                /**
                 * ExtensionRange end.
                 * @member {number} end
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @instance
                 */
                ExtensionRange.prototype.end = 0;

                /**
                 * ExtensionRange options.
                 * @member {google.protobuf.ExtensionRangeOptions.$Properties|null|undefined} options
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @instance
                 */
                ExtensionRange.prototype.options = null;

                /**
                 * Creates a new ExtensionRange instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.ExtensionRange.$Properties=} [properties] Properties to set
                 * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange instance
                 * @type {{
                 *   (properties: google.protobuf.DescriptorProto.ExtensionRange.$Shape): google.protobuf.DescriptorProto.ExtensionRange & google.protobuf.DescriptorProto.ExtensionRange.$Shape;
                 *   (properties?: google.protobuf.DescriptorProto.ExtensionRange.$Properties): google.protobuf.DescriptorProto.ExtensionRange;
                 * }}
                 */
                ExtensionRange.create = function(properties) {
                    return new ExtensionRange(properties);
                };

                /**
                 * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.ExtensionRange.$Properties} message ExtensionRange message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ExtensionRange.encode = function (message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.start != null && $Object.hasOwnProperty.call(message, "start"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.start);
                    if (message.end != null && $Object.hasOwnProperty.call(message, "end"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.end);
                    if (message.options != null && $Object.hasOwnProperty.call(message, "options"))
                        $root.google.protobuf.ExtensionRangeOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork(), _depth + 1).ldelim();
                    if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                        for (var i = 0; i < message.$unknowns.length; ++i)
                            writer.raw(message.$unknowns[i]);
                    return writer;
                };

                /**
                 * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.ExtensionRange.$Properties} message ExtensionRange message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ExtensionRange.encodeDelimited = function(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.DescriptorProto.ExtensionRange & google.protobuf.DescriptorProto.ExtensionRange.$Shape} ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ExtensionRange.decode = function (reader, length, _end, _depth, _target) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $Reader.recursionLimit)
                        throw $Error("max depth exceeded");
                    var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.google.protobuf.DescriptorProto.ExtensionRange();
                    while (reader.pos < end) {
                        var start = reader.pos;
                        var tag = reader.tag();
                        if (tag === _end) {
                            _end = $undefined;
                            break;
                        }
                        var wireType = tag & 7;
                        switch (tag >>>= 3) {
                        case 1: {
                                if (wireType !== 0)
                                    break;
                                message.start = reader.int32();
                                continue;
                            }
                        case 2: {
                                if (wireType !== 0)
                                    break;
                                message.end = reader.int32();
                                continue;
                            }
                        case 3: {
                                if (wireType !== 2)
                                    break;
                                message.options = $root.google.protobuf.ExtensionRangeOptions.decode(reader, reader.uint32(), $undefined, _depth + 1, message.options);
                                continue;
                            }
                        }
                        reader.skipType(wireType, _depth, tag);
                        if (!reader.discardUnknown) {
                            $util.makeProp(message, "$unknowns", false);
                            (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                        }
                    }
                    if (_end !== $undefined)
                        throw $Error("missing end group");
                    return message;
                };

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.DescriptorProto.ExtensionRange & google.protobuf.DescriptorProto.ExtensionRange.$Shape} ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ExtensionRange.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an ExtensionRange message.
                 * @function verify
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ExtensionRange.verify = function (message, _depth) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        return "max depth exceeded";
                    if (message.start != null && $Object.hasOwnProperty.call(message, "start"))
                        if (!$util.isInteger(message.start))
                            return "start: integer expected";
                    if (message.end != null && $Object.hasOwnProperty.call(message, "end"))
                        if (!$util.isInteger(message.end))
                            return "end: integer expected";
                    if (message.options != null && $Object.hasOwnProperty.call(message, "options")) {
                        var error = $root.google.protobuf.ExtensionRangeOptions.verify(message.options, _depth + 1);
                        if (error)
                            return "options." + error;
                    }
                    return null;
                };

                /**
                 * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                 */
                ExtensionRange.fromObject = function (object, _depth) {
                    if (object instanceof $root.google.protobuf.DescriptorProto.ExtensionRange)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".google.protobuf.DescriptorProto.ExtensionRange: object expected");
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var message = new $root.google.protobuf.DescriptorProto.ExtensionRange();
                    if (object.start != null)
                        message.start = object.start | 0;
                    if (object.end != null)
                        message.end = object.end | 0;
                    if (object.options != null) {
                        if (!$util.isObject(object.options))
                            throw $TypeError(".google.protobuf.DescriptorProto.ExtensionRange.options: object expected");
                        message.options = $root.google.protobuf.ExtensionRangeOptions.fromObject(object.options, _depth + 1);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.ExtensionRange} message ExtensionRange
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ExtensionRange.toObject = function (message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var object = {};
                    if (options.defaults) {
                        object.start = 0;
                        object.end = 0;
                        object.options = null;
                    }
                    if (message.start != null && $Object.hasOwnProperty.call(message, "start"))
                        object.start = message.start;
                    if (message.end != null && $Object.hasOwnProperty.call(message, "end"))
                        object.end = message.end;
                    if (message.options != null && $Object.hasOwnProperty.call(message, "options"))
                        object.options = $root.google.protobuf.ExtensionRangeOptions.toObject(message.options, options, _depth + 1);
                    return object;
                };

                /**
                 * Converts this ExtensionRange to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ExtensionRange.prototype.toJSON = function() {
                    return ExtensionRange.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the type url for ExtensionRange
                 * @function getTypeUrl
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                ExtensionRange.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/google.protobuf.DescriptorProto.ExtensionRange";
                };

                return ExtensionRange;
            })();

            DescriptorProto.ReservedRange = (function() {

                /**
                 * Properties of a ReservedRange.
                 * @typedef {Object} google.protobuf.DescriptorProto.ReservedRange.$Properties
                 * @property {number|null} [start] ReservedRange start
                 * @property {number|null} [end] ReservedRange end
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */

                /**
                 * Properties of a ReservedRange.
                 * @memberof google.protobuf.DescriptorProto
                 * @interface IReservedRange
                 * @augments google.protobuf.DescriptorProto.ReservedRange.$Properties
                 * @deprecated Use google.protobuf.DescriptorProto.ReservedRange.$Properties instead.
                 */

                /**
                 * Shape of a ReservedRange.
                 * @typedef {google.protobuf.DescriptorProto.ReservedRange.$Properties} google.protobuf.DescriptorProto.ReservedRange.$Shape
                 */

                /**
                 * Constructs a new ReservedRange.
                 * @memberof google.protobuf.DescriptorProto
                 * @classdesc Represents a ReservedRange.
                 * @constructor
                 * @param {google.protobuf.DescriptorProto.ReservedRange.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                var ReservedRange = function (properties) {
                    if (properties)
                        for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };

                /**
                 * ReservedRange start.
                 * @member {number} start
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @instance
                 */
                ReservedRange.prototype.start = 0;

                /**
                 * ReservedRange end.
                 * @member {number} end
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @instance
                 */
                ReservedRange.prototype.end = 0;

                /**
                 * Creates a new ReservedRange instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.ReservedRange.$Properties=} [properties] Properties to set
                 * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange instance
                 * @type {{
                 *   (properties: google.protobuf.DescriptorProto.ReservedRange.$Shape): google.protobuf.DescriptorProto.ReservedRange & google.protobuf.DescriptorProto.ReservedRange.$Shape;
                 *   (properties?: google.protobuf.DescriptorProto.ReservedRange.$Properties): google.protobuf.DescriptorProto.ReservedRange;
                 * }}
                 */
                ReservedRange.create = function(properties) {
                    return new ReservedRange(properties);
                };

                /**
                 * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.ReservedRange.$Properties} message ReservedRange message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReservedRange.encode = function (message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.start != null && $Object.hasOwnProperty.call(message, "start"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.start);
                    if (message.end != null && $Object.hasOwnProperty.call(message, "end"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.end);
                    if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                        for (var i = 0; i < message.$unknowns.length; ++i)
                            writer.raw(message.$unknowns[i]);
                    return writer;
                };

                /**
                 * Encodes the specified ReservedRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.ReservedRange.$Properties} message ReservedRange message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReservedRange.encodeDelimited = function(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.DescriptorProto.ReservedRange & google.protobuf.DescriptorProto.ReservedRange.$Shape} ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ReservedRange.decode = function (reader, length, _end, _depth, _target) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $Reader.recursionLimit)
                        throw $Error("max depth exceeded");
                    var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.google.protobuf.DescriptorProto.ReservedRange();
                    while (reader.pos < end) {
                        var start = reader.pos;
                        var tag = reader.tag();
                        if (tag === _end) {
                            _end = $undefined;
                            break;
                        }
                        var wireType = tag & 7;
                        switch (tag >>>= 3) {
                        case 1: {
                                if (wireType !== 0)
                                    break;
                                message.start = reader.int32();
                                continue;
                            }
                        case 2: {
                                if (wireType !== 0)
                                    break;
                                message.end = reader.int32();
                                continue;
                            }
                        }
                        reader.skipType(wireType, _depth, tag);
                        if (!reader.discardUnknown) {
                            $util.makeProp(message, "$unknowns", false);
                            (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                        }
                    }
                    if (_end !== $undefined)
                        throw $Error("missing end group");
                    return message;
                };

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.DescriptorProto.ReservedRange & google.protobuf.DescriptorProto.ReservedRange.$Shape} ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ReservedRange.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ReservedRange message.
                 * @function verify
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ReservedRange.verify = function (message, _depth) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        return "max depth exceeded";
                    if (message.start != null && $Object.hasOwnProperty.call(message, "start"))
                        if (!$util.isInteger(message.start))
                            return "start: integer expected";
                    if (message.end != null && $Object.hasOwnProperty.call(message, "end"))
                        if (!$util.isInteger(message.end))
                            return "end: integer expected";
                    return null;
                };

                /**
                 * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange
                 */
                ReservedRange.fromObject = function (object, _depth) {
                    if (object instanceof $root.google.protobuf.DescriptorProto.ReservedRange)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".google.protobuf.DescriptorProto.ReservedRange: object expected");
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var message = new $root.google.protobuf.DescriptorProto.ReservedRange();
                    if (object.start != null)
                        message.start = object.start | 0;
                    if (object.end != null)
                        message.end = object.end | 0;
                    return message;
                };

                /**
                 * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.ReservedRange} message ReservedRange
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ReservedRange.toObject = function (message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var object = {};
                    if (options.defaults) {
                        object.start = 0;
                        object.end = 0;
                    }
                    if (message.start != null && $Object.hasOwnProperty.call(message, "start"))
                        object.start = message.start;
                    if (message.end != null && $Object.hasOwnProperty.call(message, "end"))
                        object.end = message.end;
                    return object;
                };

                /**
                 * Converts this ReservedRange to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ReservedRange.prototype.toJSON = function() {
                    return ReservedRange.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the type url for ReservedRange
                 * @function getTypeUrl
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                ReservedRange.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/google.protobuf.DescriptorProto.ReservedRange";
                };

                return ReservedRange;
            })();

            return DescriptorProto;
        })();

        protobuf.ExtensionRangeOptions = (function() {

            /**
             * Properties of an ExtensionRangeOptions.
             * @typedef {Object} google.protobuf.ExtensionRangeOptions.$Properties
             * @property {Array.<google.protobuf.UninterpretedOption.$Properties>|null} [uninterpreted_option] ExtensionRangeOptions uninterpreted_option
             * @property {Array.<google.protobuf.ExtensionRangeOptions.Declaration.$Properties>|null} [declaration] ExtensionRangeOptions declaration
             * @property {google.protobuf.FeatureSet.$Properties|null} [features] ExtensionRangeOptions features
             * @property {google.protobuf.ExtensionRangeOptions.VerificationState|null} [verification] ExtensionRangeOptions verification
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of an ExtensionRangeOptions.
             * @memberof google.protobuf
             * @interface IExtensionRangeOptions
             * @augments google.protobuf.ExtensionRangeOptions.$Properties
             * @deprecated Use google.protobuf.ExtensionRangeOptions.$Properties instead.
             */

            /**
             * Shape of an ExtensionRangeOptions.
             * @typedef {google.protobuf.ExtensionRangeOptions.$Properties} google.protobuf.ExtensionRangeOptions.$Shape
             */

            /**
             * Constructs a new ExtensionRangeOptions.
             * @memberof google.protobuf
             * @classdesc Represents an ExtensionRangeOptions.
             * @constructor
             * @param {google.protobuf.ExtensionRangeOptions.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            var ExtensionRangeOptions = function (properties) {
                this.uninterpreted_option = [];
                this.declaration = [];
                if (properties)
                    for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * ExtensionRangeOptions uninterpreted_option.
             * @member {Array.<google.protobuf.UninterpretedOption.$Properties>} uninterpreted_option
             * @memberof google.protobuf.ExtensionRangeOptions
             * @instance
             */
            ExtensionRangeOptions.prototype.uninterpreted_option = $util.emptyArray;

            /**
             * ExtensionRangeOptions declaration.
             * @member {Array.<google.protobuf.ExtensionRangeOptions.Declaration.$Properties>} declaration
             * @memberof google.protobuf.ExtensionRangeOptions
             * @instance
             */
            ExtensionRangeOptions.prototype.declaration = $util.emptyArray;

            /**
             * ExtensionRangeOptions features.
             * @member {google.protobuf.FeatureSet.$Properties|null|undefined} features
             * @memberof google.protobuf.ExtensionRangeOptions
             * @instance
             */
            ExtensionRangeOptions.prototype.features = null;

            /**
             * ExtensionRangeOptions verification.
             * @member {google.protobuf.ExtensionRangeOptions.VerificationState} verification
             * @memberof google.protobuf.ExtensionRangeOptions
             * @instance
             */
            ExtensionRangeOptions.prototype.verification = 1;

            /**
             * Creates a new ExtensionRangeOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.ExtensionRangeOptions
             * @static
             * @param {google.protobuf.ExtensionRangeOptions.$Properties=} [properties] Properties to set
             * @returns {google.protobuf.ExtensionRangeOptions} ExtensionRangeOptions instance
             * @type {{
             *   (properties: google.protobuf.ExtensionRangeOptions.$Shape): google.protobuf.ExtensionRangeOptions & google.protobuf.ExtensionRangeOptions.$Shape;
             *   (properties?: google.protobuf.ExtensionRangeOptions.$Properties): google.protobuf.ExtensionRangeOptions;
             * }}
             */
            ExtensionRangeOptions.create = function(properties) {
                return new ExtensionRangeOptions(properties);
            };

            /**
             * Encodes the specified ExtensionRangeOptions message. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.ExtensionRangeOptions
             * @static
             * @param {google.protobuf.ExtensionRangeOptions.$Properties} message ExtensionRangeOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ExtensionRangeOptions.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.declaration != null && message.declaration.length)
                    for (var i = 0; i < message.declaration.length; ++i)
                        $root.google.protobuf.ExtensionRangeOptions.Declaration.encode(message.declaration[i], writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
                if (message.verification != null && $Object.hasOwnProperty.call(message, "verification"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.verification);
                if (message.features != null && $Object.hasOwnProperty.call(message, "features"))
                    $root.google.protobuf.FeatureSet.encode(message.features, writer.uint32(/* id 50, wireType 2 =*/402).fork(), _depth + 1).ldelim();
                if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                    for (var i = 0; i < message.uninterpreted_option.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (var i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified ExtensionRangeOptions message, length delimited. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.ExtensionRangeOptions
             * @static
             * @param {google.protobuf.ExtensionRangeOptions.$Properties} message ExtensionRangeOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ExtensionRangeOptions.encodeDelimited = function(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.ExtensionRangeOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.ExtensionRangeOptions & google.protobuf.ExtensionRangeOptions.$Shape} ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ExtensionRangeOptions.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.google.protobuf.ExtensionRangeOptions(), value;
                while (reader.pos < end) {
                    var start = reader.pos;
                    var tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    var wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 999: {
                            if (wireType !== 2)
                                break;
                            if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                                message.uninterpreted_option = [];
                            message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32(), $undefined, _depth + 1));
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            if (!(message.declaration && message.declaration.length))
                                message.declaration = [];
                            message.declaration.push($root.google.protobuf.ExtensionRangeOptions.Declaration.decode(reader, reader.uint32(), $undefined, _depth + 1));
                            continue;
                        }
                    case 50: {
                            if (wireType !== 2)
                                break;
                            message.features = $root.google.protobuf.FeatureSet.decode(reader, reader.uint32(), $undefined, _depth + 1, message.features);
                            continue;
                        }
                    case 3: {
                            if (wireType !== 0)
                                break;
                            value = reader.int32();
                            if ($root.google.protobuf.ExtensionRangeOptions.VerificationState[value] !== $undefined)
                                message.verification = value;
                            else if (!reader.discardUnknown) {
                                $util.makeProp(message, "$unknowns", false);
                                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                            }
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.ExtensionRangeOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.ExtensionRangeOptions & google.protobuf.ExtensionRangeOptions.$Shape} ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ExtensionRangeOptions.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an ExtensionRangeOptions message.
             * @function verify
             * @memberof google.protobuf.ExtensionRangeOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ExtensionRangeOptions.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.uninterpreted_option != null && $Object.hasOwnProperty.call(message, "uninterpreted_option")) {
                    if (!$Array.isArray(message.uninterpreted_option))
                        return "uninterpreted_option: array expected";
                    for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                        var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpreted_option[i], _depth + 1);
                        if (error)
                            return "uninterpreted_option." + error;
                    }
                }
                if (message.declaration != null && $Object.hasOwnProperty.call(message, "declaration")) {
                    if (!$Array.isArray(message.declaration))
                        return "declaration: array expected";
                    for (var i = 0; i < message.declaration.length; ++i) {
                        var error = $root.google.protobuf.ExtensionRangeOptions.Declaration.verify(message.declaration[i], _depth + 1);
                        if (error)
                            return "declaration." + error;
                    }
                }
                if (message.features != null && $Object.hasOwnProperty.call(message, "features")) {
                    var error = $root.google.protobuf.FeatureSet.verify(message.features, _depth + 1);
                    if (error)
                        return "features." + error;
                }
                if (message.verification != null && $Object.hasOwnProperty.call(message, "verification"))
                    switch (message.verification) {
                    default:
                        return "verification: enum value expected";
                    case 0:
                    case 1:
                        break;
                    }
                return null;
            };

            /**
             * Creates an ExtensionRangeOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.ExtensionRangeOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.ExtensionRangeOptions} ExtensionRangeOptions
             */
            ExtensionRangeOptions.fromObject = function (object, _depth) {
                if (object instanceof $root.google.protobuf.ExtensionRangeOptions)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".google.protobuf.ExtensionRangeOptions: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var message = new $root.google.protobuf.ExtensionRangeOptions();
                if (object.uninterpreted_option) {
                    if (!$Array.isArray(object.uninterpreted_option))
                        throw $TypeError(".google.protobuf.ExtensionRangeOptions.uninterpreted_option: array expected");
                    message.uninterpreted_option = $Array(object.uninterpreted_option.length);
                    for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                        if (!$util.isObject(object.uninterpreted_option[i]))
                            throw $TypeError(".google.protobuf.ExtensionRangeOptions.uninterpreted_option: object expected");
                        message.uninterpreted_option[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpreted_option[i], _depth + 1);
                    }
                }
                if (object.declaration) {
                    if (!$Array.isArray(object.declaration))
                        throw $TypeError(".google.protobuf.ExtensionRangeOptions.declaration: array expected");
                    message.declaration = $Array(object.declaration.length);
                    for (var i = 0; i < object.declaration.length; ++i) {
                        if (!$util.isObject(object.declaration[i]))
                            throw $TypeError(".google.protobuf.ExtensionRangeOptions.declaration: object expected");
                        message.declaration[i] = $root.google.protobuf.ExtensionRangeOptions.Declaration.fromObject(object.declaration[i], _depth + 1);
                    }
                }
                if (object.features != null) {
                    if (!$util.isObject(object.features))
                        throw $TypeError(".google.protobuf.ExtensionRangeOptions.features: object expected");
                    message.features = $root.google.protobuf.FeatureSet.fromObject(object.features, _depth + 1);
                }
                switch (object.verification) {
                case "DECLARATION":
                case 0:
                    message.verification = 0;
                    break;
                case "UNVERIFIED":
                case 1:
                    message.verification = 1;
                    break;
                default:
                }
                return message;
            };

            /**
             * Creates a plain object from an ExtensionRangeOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.ExtensionRangeOptions
             * @static
             * @param {google.protobuf.ExtensionRangeOptions} message ExtensionRangeOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ExtensionRangeOptions.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var object = {};
                if (options.arrays || options.defaults) {
                    object.declaration = [];
                    object.uninterpreted_option = [];
                }
                if (options.defaults) {
                    object.verification = options.enums === $String ? "UNVERIFIED" : 1;
                    object.features = null;
                }
                if (message.declaration && message.declaration.length) {
                    object.declaration = $Array(message.declaration.length);
                    for (var j = 0; j < message.declaration.length; ++j)
                        object.declaration[j] = $root.google.protobuf.ExtensionRangeOptions.Declaration.toObject(message.declaration[j], options, _depth + 1);
                }
                if (message.verification != null && $Object.hasOwnProperty.call(message, "verification"))
                    object.verification = options.enums === $String ? $root.google.protobuf.ExtensionRangeOptions.VerificationState[message.verification] === $undefined ? message.verification : $root.google.protobuf.ExtensionRangeOptions.VerificationState[message.verification] : message.verification;
                if (message.features != null && $Object.hasOwnProperty.call(message, "features"))
                    object.features = $root.google.protobuf.FeatureSet.toObject(message.features, options, _depth + 1);
                if (message.uninterpreted_option && message.uninterpreted_option.length) {
                    object.uninterpreted_option = $Array(message.uninterpreted_option.length);
                    for (var j = 0; j < message.uninterpreted_option.length; ++j)
                        object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options, _depth + 1);
                }
                return object;
            };

            /**
             * Converts this ExtensionRangeOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.ExtensionRangeOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ExtensionRangeOptions.prototype.toJSON = function() {
                return ExtensionRangeOptions.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for ExtensionRangeOptions
             * @function getTypeUrl
             * @memberof google.protobuf.ExtensionRangeOptions
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            ExtensionRangeOptions.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/google.protobuf.ExtensionRangeOptions";
            };

            ExtensionRangeOptions.Declaration = (function() {

                /**
                 * Properties of a Declaration.
                 * @typedef {Object} google.protobuf.ExtensionRangeOptions.Declaration.$Properties
                 * @property {number|null} [number] Declaration number
                 * @property {string|null} [full_name] Declaration full_name
                 * @property {string|null} [type] Declaration type
                 * @property {boolean|null} [reserved] Declaration reserved
                 * @property {boolean|null} [repeated] Declaration repeated
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */

                /**
                 * Properties of a Declaration.
                 * @memberof google.protobuf.ExtensionRangeOptions
                 * @interface IDeclaration
                 * @augments google.protobuf.ExtensionRangeOptions.Declaration.$Properties
                 * @deprecated Use google.protobuf.ExtensionRangeOptions.Declaration.$Properties instead.
                 */

                /**
                 * Shape of a Declaration.
                 * @typedef {google.protobuf.ExtensionRangeOptions.Declaration.$Properties} google.protobuf.ExtensionRangeOptions.Declaration.$Shape
                 */

                /**
                 * Constructs a new Declaration.
                 * @memberof google.protobuf.ExtensionRangeOptions
                 * @classdesc Represents a Declaration.
                 * @constructor
                 * @param {google.protobuf.ExtensionRangeOptions.Declaration.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                var Declaration = function (properties) {
                    if (properties)
                        for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };

                /**
                 * Declaration number.
                 * @member {number} number
                 * @memberof google.protobuf.ExtensionRangeOptions.Declaration
                 * @instance
                 */
                Declaration.prototype.number = 0;

                /**
                 * Declaration full_name.
                 * @member {string} full_name
                 * @memberof google.protobuf.ExtensionRangeOptions.Declaration
                 * @instance
                 */
                Declaration.prototype.full_name = "";

                /**
                 * Declaration type.
                 * @member {string} type
                 * @memberof google.protobuf.ExtensionRangeOptions.Declaration
                 * @instance
                 */
                Declaration.prototype.type = "";

                /**
                 * Declaration reserved.
                 * @member {boolean} reserved
                 * @memberof google.protobuf.ExtensionRangeOptions.Declaration
                 * @instance
                 */
                Declaration.prototype.reserved = false;

                /**
                 * Declaration repeated.
                 * @member {boolean} repeated
                 * @memberof google.protobuf.ExtensionRangeOptions.Declaration
                 * @instance
                 */
                Declaration.prototype.repeated = false;

                /**
                 * Creates a new Declaration instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.ExtensionRangeOptions.Declaration
                 * @static
                 * @param {google.protobuf.ExtensionRangeOptions.Declaration.$Properties=} [properties] Properties to set
                 * @returns {google.protobuf.ExtensionRangeOptions.Declaration} Declaration instance
                 * @type {{
                 *   (properties: google.protobuf.ExtensionRangeOptions.Declaration.$Shape): google.protobuf.ExtensionRangeOptions.Declaration & google.protobuf.ExtensionRangeOptions.Declaration.$Shape;
                 *   (properties?: google.protobuf.ExtensionRangeOptions.Declaration.$Properties): google.protobuf.ExtensionRangeOptions.Declaration;
                 * }}
                 */
                Declaration.create = function(properties) {
                    return new Declaration(properties);
                };

                /**
                 * Encodes the specified Declaration message. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.Declaration.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.ExtensionRangeOptions.Declaration
                 * @static
                 * @param {google.protobuf.ExtensionRangeOptions.Declaration.$Properties} message Declaration message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Declaration.encode = function (message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.number != null && $Object.hasOwnProperty.call(message, "number"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.number);
                    if (message.full_name != null && $Object.hasOwnProperty.call(message, "full_name"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.full_name);
                    if (message.type != null && $Object.hasOwnProperty.call(message, "type"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.type);
                    if (message.reserved != null && $Object.hasOwnProperty.call(message, "reserved"))
                        writer.uint32(/* id 5, wireType 0 =*/40).bool(message.reserved);
                    if (message.repeated != null && $Object.hasOwnProperty.call(message, "repeated"))
                        writer.uint32(/* id 6, wireType 0 =*/48).bool(message.repeated);
                    if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                        for (var i = 0; i < message.$unknowns.length; ++i)
                            writer.raw(message.$unknowns[i]);
                    return writer;
                };

                /**
                 * Encodes the specified Declaration message, length delimited. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.Declaration.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.ExtensionRangeOptions.Declaration
                 * @static
                 * @param {google.protobuf.ExtensionRangeOptions.Declaration.$Properties} message Declaration message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Declaration.encodeDelimited = function(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a Declaration message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.ExtensionRangeOptions.Declaration
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.ExtensionRangeOptions.Declaration & google.protobuf.ExtensionRangeOptions.Declaration.$Shape} Declaration
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Declaration.decode = function (reader, length, _end, _depth, _target) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $Reader.recursionLimit)
                        throw $Error("max depth exceeded");
                    var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.google.protobuf.ExtensionRangeOptions.Declaration();
                    while (reader.pos < end) {
                        var start = reader.pos;
                        var tag = reader.tag();
                        if (tag === _end) {
                            _end = $undefined;
                            break;
                        }
                        var wireType = tag & 7;
                        switch (tag >>>= 3) {
                        case 1: {
                                if (wireType !== 0)
                                    break;
                                message.number = reader.int32();
                                continue;
                            }
                        case 2: {
                                if (wireType !== 2)
                                    break;
                                message.full_name = reader.string();
                                continue;
                            }
                        case 3: {
                                if (wireType !== 2)
                                    break;
                                message.type = reader.string();
                                continue;
                            }
                        case 5: {
                                if (wireType !== 0)
                                    break;
                                message.reserved = reader.bool();
                                continue;
                            }
                        case 6: {
                                if (wireType !== 0)
                                    break;
                                message.repeated = reader.bool();
                                continue;
                            }
                        }
                        reader.skipType(wireType, _depth, tag);
                        if (!reader.discardUnknown) {
                            $util.makeProp(message, "$unknowns", false);
                            (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                        }
                    }
                    if (_end !== $undefined)
                        throw $Error("missing end group");
                    return message;
                };

                /**
                 * Decodes a Declaration message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.ExtensionRangeOptions.Declaration
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.ExtensionRangeOptions.Declaration & google.protobuf.ExtensionRangeOptions.Declaration.$Shape} Declaration
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Declaration.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Declaration message.
                 * @function verify
                 * @memberof google.protobuf.ExtensionRangeOptions.Declaration
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Declaration.verify = function (message, _depth) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        return "max depth exceeded";
                    if (message.number != null && $Object.hasOwnProperty.call(message, "number"))
                        if (!$util.isInteger(message.number))
                            return "number: integer expected";
                    if (message.full_name != null && $Object.hasOwnProperty.call(message, "full_name"))
                        if (!$util.isString(message.full_name))
                            return "full_name: string expected";
                    if (message.type != null && $Object.hasOwnProperty.call(message, "type"))
                        if (!$util.isString(message.type))
                            return "type: string expected";
                    if (message.reserved != null && $Object.hasOwnProperty.call(message, "reserved"))
                        if (typeof message.reserved !== "boolean")
                            return "reserved: boolean expected";
                    if (message.repeated != null && $Object.hasOwnProperty.call(message, "repeated"))
                        if (typeof message.repeated !== "boolean")
                            return "repeated: boolean expected";
                    return null;
                };

                /**
                 * Creates a Declaration message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.ExtensionRangeOptions.Declaration
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.ExtensionRangeOptions.Declaration} Declaration
                 */
                Declaration.fromObject = function (object, _depth) {
                    if (object instanceof $root.google.protobuf.ExtensionRangeOptions.Declaration)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".google.protobuf.ExtensionRangeOptions.Declaration: object expected");
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var message = new $root.google.protobuf.ExtensionRangeOptions.Declaration();
                    if (object.number != null)
                        message.number = object.number | 0;
                    if (object.full_name != null)
                        message.full_name = $String(object.full_name);
                    if (object.type != null)
                        message.type = $String(object.type);
                    if (object.reserved != null)
                        message.reserved = $Boolean(object.reserved);
                    if (object.repeated != null)
                        message.repeated = $Boolean(object.repeated);
                    return message;
                };

                /**
                 * Creates a plain object from a Declaration message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.ExtensionRangeOptions.Declaration
                 * @static
                 * @param {google.protobuf.ExtensionRangeOptions.Declaration} message Declaration
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Declaration.toObject = function (message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var object = {};
                    if (options.defaults) {
                        object.number = 0;
                        object.full_name = "";
                        object.type = "";
                        object.reserved = false;
                        object.repeated = false;
                    }
                    if (message.number != null && $Object.hasOwnProperty.call(message, "number"))
                        object.number = message.number;
                    if (message.full_name != null && $Object.hasOwnProperty.call(message, "full_name"))
                        object.full_name = message.full_name;
                    if (message.type != null && $Object.hasOwnProperty.call(message, "type"))
                        object.type = message.type;
                    if (message.reserved != null && $Object.hasOwnProperty.call(message, "reserved"))
                        object.reserved = message.reserved;
                    if (message.repeated != null && $Object.hasOwnProperty.call(message, "repeated"))
                        object.repeated = message.repeated;
                    return object;
                };

                /**
                 * Converts this Declaration to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.ExtensionRangeOptions.Declaration
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Declaration.prototype.toJSON = function() {
                    return Declaration.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the type url for Declaration
                 * @function getTypeUrl
                 * @memberof google.protobuf.ExtensionRangeOptions.Declaration
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                Declaration.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/google.protobuf.ExtensionRangeOptions.Declaration";
                };

                return Declaration;
            })();

            /**
             * VerificationState enum.
             * @name google.protobuf.ExtensionRangeOptions.VerificationState
             * @enum {number}
             * @property {number} DECLARATION=0 DECLARATION value
             * @property {number} UNVERIFIED=1 UNVERIFIED value
             */
            ExtensionRangeOptions.VerificationState = (function() {
                var valuesById = $Object.create(null), values = $Object.create(valuesById);
                values[valuesById[0] = "DECLARATION"] = 0;
                values[valuesById[1] = "UNVERIFIED"] = 1;
                return values;
            })();

            return ExtensionRangeOptions;
        })();

        protobuf.FieldDescriptorProto = (function() {

            /**
             * Properties of a FieldDescriptorProto.
             * @typedef {Object} google.protobuf.FieldDescriptorProto.$Properties
             * @property {string|null} [name] FieldDescriptorProto name
             * @property {number|null} [number] FieldDescriptorProto number
             * @property {google.protobuf.FieldDescriptorProto.Label|null} [label] FieldDescriptorProto label
             * @property {google.protobuf.FieldDescriptorProto.Type|null} [type] FieldDescriptorProto type
             * @property {string|null} [type_name] FieldDescriptorProto type_name
             * @property {string|null} [extendee] FieldDescriptorProto extendee
             * @property {string|null} [default_value] FieldDescriptorProto default_value
             * @property {number|null} [oneof_index] FieldDescriptorProto oneof_index
             * @property {string|null} [json_name] FieldDescriptorProto json_name
             * @property {google.protobuf.FieldOptions.$Properties|null} [options] FieldDescriptorProto options
             * @property {boolean|null} [proto3_optional] FieldDescriptorProto proto3_optional
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a FieldDescriptorProto.
             * @memberof google.protobuf
             * @interface IFieldDescriptorProto
             * @augments google.protobuf.FieldDescriptorProto.$Properties
             * @deprecated Use google.protobuf.FieldDescriptorProto.$Properties instead.
             */

            /**
             * Shape of a FieldDescriptorProto.
             * @typedef {google.protobuf.FieldDescriptorProto.$Properties} google.protobuf.FieldDescriptorProto.$Shape
             */

            /**
             * Constructs a new FieldDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents a FieldDescriptorProto.
             * @constructor
             * @param {google.protobuf.FieldDescriptorProto.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            var FieldDescriptorProto = function (properties) {
                if (properties)
                    for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * FieldDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.name = "";

            /**
             * FieldDescriptorProto number.
             * @member {number} number
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.number = 0;

            /**
             * FieldDescriptorProto label.
             * @member {google.protobuf.FieldDescriptorProto.Label} label
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.label = 1;

            /**
             * FieldDescriptorProto type.
             * @member {google.protobuf.FieldDescriptorProto.Type} type
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.type = 1;

            /**
             * FieldDescriptorProto type_name.
             * @member {string} type_name
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.type_name = "";

            /**
             * FieldDescriptorProto extendee.
             * @member {string} extendee
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.extendee = "";

            /**
             * FieldDescriptorProto default_value.
             * @member {string} default_value
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.default_value = "";

            /**
             * FieldDescriptorProto oneof_index.
             * @member {number} oneof_index
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.oneof_index = 0;

            /**
             * FieldDescriptorProto json_name.
             * @member {string} json_name
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.json_name = "";

            /**
             * FieldDescriptorProto options.
             * @member {google.protobuf.FieldOptions.$Properties|null|undefined} options
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.options = null;

            /**
             * FieldDescriptorProto proto3_optional.
             * @member {boolean} proto3_optional
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.proto3_optional = false;

            /**
             * Creates a new FieldDescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {google.protobuf.FieldDescriptorProto.$Properties=} [properties] Properties to set
             * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto instance
             * @type {{
             *   (properties: google.protobuf.FieldDescriptorProto.$Shape): google.protobuf.FieldDescriptorProto & google.protobuf.FieldDescriptorProto.$Shape;
             *   (properties?: google.protobuf.FieldDescriptorProto.$Properties): google.protobuf.FieldDescriptorProto;
             * }}
             */
            FieldDescriptorProto.create = function(properties) {
                return new FieldDescriptorProto(properties);
            };

            /**
             * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {google.protobuf.FieldDescriptorProto.$Properties} message FieldDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FieldDescriptorProto.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.extendee != null && $Object.hasOwnProperty.call(message, "extendee"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.extendee);
                if (message.number != null && $Object.hasOwnProperty.call(message, "number"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.number);
                if (message.label != null && $Object.hasOwnProperty.call(message, "label"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.label);
                if (message.type != null && $Object.hasOwnProperty.call(message, "type"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.type);
                if (message.type_name != null && $Object.hasOwnProperty.call(message, "type_name"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.type_name);
                if (message.default_value != null && $Object.hasOwnProperty.call(message, "default_value"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.default_value);
                if (message.options != null && $Object.hasOwnProperty.call(message, "options"))
                    $root.google.protobuf.FieldOptions.encode(message.options, writer.uint32(/* id 8, wireType 2 =*/66).fork(), _depth + 1).ldelim();
                if (message.oneof_index != null && $Object.hasOwnProperty.call(message, "oneof_index"))
                    writer.uint32(/* id 9, wireType 0 =*/72).int32(message.oneof_index);
                if (message.json_name != null && $Object.hasOwnProperty.call(message, "json_name"))
                    writer.uint32(/* id 10, wireType 2 =*/82).string(message.json_name);
                if (message.proto3_optional != null && $Object.hasOwnProperty.call(message, "proto3_optional"))
                    writer.uint32(/* id 17, wireType 0 =*/136).bool(message.proto3_optional);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (var i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {google.protobuf.FieldDescriptorProto.$Properties} message FieldDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FieldDescriptorProto.encodeDelimited = function(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FieldDescriptorProto & google.protobuf.FieldDescriptorProto.$Shape} FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FieldDescriptorProto.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.google.protobuf.FieldDescriptorProto(), value;
                while (reader.pos < end) {
                    var start = reader.pos;
                    var tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    var wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            message.name = reader.string();
                            continue;
                        }
                    case 3: {
                            if (wireType !== 0)
                                break;
                            message.number = reader.int32();
                            continue;
                        }
                    case 4: {
                            if (wireType !== 0)
                                break;
                            value = reader.int32();
                            if ($root.google.protobuf.FieldDescriptorProto.Label[value] !== $undefined)
                                message.label = value;
                            else if (!reader.discardUnknown) {
                                $util.makeProp(message, "$unknowns", false);
                                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                            }
                            continue;
                        }
                    case 5: {
                            if (wireType !== 0)
                                break;
                            value = reader.int32();
                            if ($root.google.protobuf.FieldDescriptorProto.Type[value] !== $undefined)
                                message.type = value;
                            else if (!reader.discardUnknown) {
                                $util.makeProp(message, "$unknowns", false);
                                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                            }
                            continue;
                        }
                    case 6: {
                            if (wireType !== 2)
                                break;
                            message.type_name = reader.string();
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            message.extendee = reader.string();
                            continue;
                        }
                    case 7: {
                            if (wireType !== 2)
                                break;
                            message.default_value = reader.string();
                            continue;
                        }
                    case 9: {
                            if (wireType !== 0)
                                break;
                            message.oneof_index = reader.int32();
                            continue;
                        }
                    case 10: {
                            if (wireType !== 2)
                                break;
                            message.json_name = reader.string();
                            continue;
                        }
                    case 8: {
                            if (wireType !== 2)
                                break;
                            message.options = $root.google.protobuf.FieldOptions.decode(reader, reader.uint32(), $undefined, _depth + 1, message.options);
                            continue;
                        }
                    case 17: {
                            if (wireType !== 0)
                                break;
                            message.proto3_optional = reader.bool();
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.FieldDescriptorProto & google.protobuf.FieldDescriptorProto.$Shape} FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FieldDescriptorProto.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FieldDescriptorProto message.
             * @function verify
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FieldDescriptorProto.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.number != null && $Object.hasOwnProperty.call(message, "number"))
                    if (!$util.isInteger(message.number))
                        return "number: integer expected";
                if (message.label != null && $Object.hasOwnProperty.call(message, "label"))
                    switch (message.label) {
                    default:
                        return "label: enum value expected";
                    case 1:
                    case 3:
                    case 2:
                        break;
                    }
                if (message.type != null && $Object.hasOwnProperty.call(message, "type"))
                    switch (message.type) {
                    default:
                        return "type: enum value expected";
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                    case 13:
                    case 14:
                    case 15:
                    case 16:
                    case 17:
                    case 18:
                        break;
                    }
                if (message.type_name != null && $Object.hasOwnProperty.call(message, "type_name"))
                    if (!$util.isString(message.type_name))
                        return "type_name: string expected";
                if (message.extendee != null && $Object.hasOwnProperty.call(message, "extendee"))
                    if (!$util.isString(message.extendee))
                        return "extendee: string expected";
                if (message.default_value != null && $Object.hasOwnProperty.call(message, "default_value"))
                    if (!$util.isString(message.default_value))
                        return "default_value: string expected";
                if (message.oneof_index != null && $Object.hasOwnProperty.call(message, "oneof_index"))
                    if (!$util.isInteger(message.oneof_index))
                        return "oneof_index: integer expected";
                if (message.json_name != null && $Object.hasOwnProperty.call(message, "json_name"))
                    if (!$util.isString(message.json_name))
                        return "json_name: string expected";
                if (message.options != null && $Object.hasOwnProperty.call(message, "options")) {
                    var error = $root.google.protobuf.FieldOptions.verify(message.options, _depth + 1);
                    if (error)
                        return "options." + error;
                }
                if (message.proto3_optional != null && $Object.hasOwnProperty.call(message, "proto3_optional"))
                    if (typeof message.proto3_optional !== "boolean")
                        return "proto3_optional: boolean expected";
                return null;
            };

            /**
             * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
             */
            FieldDescriptorProto.fromObject = function (object, _depth) {
                if (object instanceof $root.google.protobuf.FieldDescriptorProto)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".google.protobuf.FieldDescriptorProto: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var message = new $root.google.protobuf.FieldDescriptorProto();
                if (object.name != null)
                    message.name = $String(object.name);
                if (object.number != null)
                    message.number = object.number | 0;
                switch (object.label) {
                case "LABEL_OPTIONAL":
                case 1:
                    message.label = 1;
                    break;
                case "LABEL_REPEATED":
                case 3:
                    message.label = 3;
                    break;
                case "LABEL_REQUIRED":
                case 2:
                    message.label = 2;
                    break;
                default:
                }
                switch (object.type) {
                case "TYPE_DOUBLE":
                case 1:
                    message.type = 1;
                    break;
                case "TYPE_FLOAT":
                case 2:
                    message.type = 2;
                    break;
                case "TYPE_INT64":
                case 3:
                    message.type = 3;
                    break;
                case "TYPE_UINT64":
                case 4:
                    message.type = 4;
                    break;
                case "TYPE_INT32":
                case 5:
                    message.type = 5;
                    break;
                case "TYPE_FIXED64":
                case 6:
                    message.type = 6;
                    break;
                case "TYPE_FIXED32":
                case 7:
                    message.type = 7;
                    break;
                case "TYPE_BOOL":
                case 8:
                    message.type = 8;
                    break;
                case "TYPE_STRING":
                case 9:
                    message.type = 9;
                    break;
                case "TYPE_GROUP":
                case 10:
                    message.type = 10;
                    break;
                case "TYPE_MESSAGE":
                case 11:
                    message.type = 11;
                    break;
                case "TYPE_BYTES":
                case 12:
                    message.type = 12;
                    break;
                case "TYPE_UINT32":
                case 13:
                    message.type = 13;
                    break;
                case "TYPE_ENUM":
                case 14:
                    message.type = 14;
                    break;
                case "TYPE_SFIXED32":
                case 15:
                    message.type = 15;
                    break;
                case "TYPE_SFIXED64":
                case 16:
                    message.type = 16;
                    break;
                case "TYPE_SINT32":
                case 17:
                    message.type = 17;
                    break;
                case "TYPE_SINT64":
                case 18:
                    message.type = 18;
                    break;
                default:
                }
                if (object.type_name != null)
                    message.type_name = $String(object.type_name);
                if (object.extendee != null)
                    message.extendee = $String(object.extendee);
                if (object.default_value != null)
                    message.default_value = $String(object.default_value);
                if (object.oneof_index != null)
                    message.oneof_index = object.oneof_index | 0;
                if (object.json_name != null)
                    message.json_name = $String(object.json_name);
                if (object.options != null) {
                    if (!$util.isObject(object.options))
                        throw $TypeError(".google.protobuf.FieldDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.FieldOptions.fromObject(object.options, _depth + 1);
                }
                if (object.proto3_optional != null)
                    message.proto3_optional = $Boolean(object.proto3_optional);
                return message;
            };

            /**
             * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {google.protobuf.FieldDescriptorProto} message FieldDescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FieldDescriptorProto.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var object = {};
                if (options.defaults) {
                    object.name = "";
                    object.extendee = "";
                    object.number = 0;
                    object.label = options.enums === $String ? "LABEL_OPTIONAL" : 1;
                    object.type = options.enums === $String ? "TYPE_DOUBLE" : 1;
                    object.type_name = "";
                    object.default_value = "";
                    object.options = null;
                    object.oneof_index = 0;
                    object.json_name = "";
                    object.proto3_optional = false;
                }
                if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                    object.name = message.name;
                if (message.extendee != null && $Object.hasOwnProperty.call(message, "extendee"))
                    object.extendee = message.extendee;
                if (message.number != null && $Object.hasOwnProperty.call(message, "number"))
                    object.number = message.number;
                if (message.label != null && $Object.hasOwnProperty.call(message, "label"))
                    object.label = options.enums === $String ? $root.google.protobuf.FieldDescriptorProto.Label[message.label] === $undefined ? message.label : $root.google.protobuf.FieldDescriptorProto.Label[message.label] : message.label;
                if (message.type != null && $Object.hasOwnProperty.call(message, "type"))
                    object.type = options.enums === $String ? $root.google.protobuf.FieldDescriptorProto.Type[message.type] === $undefined ? message.type : $root.google.protobuf.FieldDescriptorProto.Type[message.type] : message.type;
                if (message.type_name != null && $Object.hasOwnProperty.call(message, "type_name"))
                    object.type_name = message.type_name;
                if (message.default_value != null && $Object.hasOwnProperty.call(message, "default_value"))
                    object.default_value = message.default_value;
                if (message.options != null && $Object.hasOwnProperty.call(message, "options"))
                    object.options = $root.google.protobuf.FieldOptions.toObject(message.options, options, _depth + 1);
                if (message.oneof_index != null && $Object.hasOwnProperty.call(message, "oneof_index"))
                    object.oneof_index = message.oneof_index;
                if (message.json_name != null && $Object.hasOwnProperty.call(message, "json_name"))
                    object.json_name = message.json_name;
                if (message.proto3_optional != null && $Object.hasOwnProperty.call(message, "proto3_optional"))
                    object.proto3_optional = message.proto3_optional;
                return object;
            };

            /**
             * Converts this FieldDescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FieldDescriptorProto.prototype.toJSON = function() {
                return FieldDescriptorProto.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for FieldDescriptorProto
             * @function getTypeUrl
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            FieldDescriptorProto.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/google.protobuf.FieldDescriptorProto";
            };

            /**
             * Type enum.
             * @name google.protobuf.FieldDescriptorProto.Type
             * @enum {number}
             * @property {number} TYPE_DOUBLE=1 TYPE_DOUBLE value
             * @property {number} TYPE_FLOAT=2 TYPE_FLOAT value
             * @property {number} TYPE_INT64=3 TYPE_INT64 value
             * @property {number} TYPE_UINT64=4 TYPE_UINT64 value
             * @property {number} TYPE_INT32=5 TYPE_INT32 value
             * @property {number} TYPE_FIXED64=6 TYPE_FIXED64 value
             * @property {number} TYPE_FIXED32=7 TYPE_FIXED32 value
             * @property {number} TYPE_BOOL=8 TYPE_BOOL value
             * @property {number} TYPE_STRING=9 TYPE_STRING value
             * @property {number} TYPE_GROUP=10 TYPE_GROUP value
             * @property {number} TYPE_MESSAGE=11 TYPE_MESSAGE value
             * @property {number} TYPE_BYTES=12 TYPE_BYTES value
             * @property {number} TYPE_UINT32=13 TYPE_UINT32 value
             * @property {number} TYPE_ENUM=14 TYPE_ENUM value
             * @property {number} TYPE_SFIXED32=15 TYPE_SFIXED32 value
             * @property {number} TYPE_SFIXED64=16 TYPE_SFIXED64 value
             * @property {number} TYPE_SINT32=17 TYPE_SINT32 value
             * @property {number} TYPE_SINT64=18 TYPE_SINT64 value
             */
            FieldDescriptorProto.Type = (function() {
                var valuesById = $Object.create(null), values = $Object.create(valuesById);
                values[valuesById[1] = "TYPE_DOUBLE"] = 1;
                values[valuesById[2] = "TYPE_FLOAT"] = 2;
                values[valuesById[3] = "TYPE_INT64"] = 3;
                values[valuesById[4] = "TYPE_UINT64"] = 4;
                values[valuesById[5] = "TYPE_INT32"] = 5;
                values[valuesById[6] = "TYPE_FIXED64"] = 6;
                values[valuesById[7] = "TYPE_FIXED32"] = 7;
                values[valuesById[8] = "TYPE_BOOL"] = 8;
                values[valuesById[9] = "TYPE_STRING"] = 9;
                values[valuesById[10] = "TYPE_GROUP"] = 10;
                values[valuesById[11] = "TYPE_MESSAGE"] = 11;
                values[valuesById[12] = "TYPE_BYTES"] = 12;
                values[valuesById[13] = "TYPE_UINT32"] = 13;
                values[valuesById[14] = "TYPE_ENUM"] = 14;
                values[valuesById[15] = "TYPE_SFIXED32"] = 15;
                values[valuesById[16] = "TYPE_SFIXED64"] = 16;
                values[valuesById[17] = "TYPE_SINT32"] = 17;
                values[valuesById[18] = "TYPE_SINT64"] = 18;
                return values;
            })();

            /**
             * Label enum.
             * @name google.protobuf.FieldDescriptorProto.Label
             * @enum {number}
             * @property {number} LABEL_OPTIONAL=1 LABEL_OPTIONAL value
             * @property {number} LABEL_REPEATED=3 LABEL_REPEATED value
             * @property {number} LABEL_REQUIRED=2 LABEL_REQUIRED value
             */
            FieldDescriptorProto.Label = (function() {
                var valuesById = $Object.create(null), values = $Object.create(valuesById);
                values[valuesById[1] = "LABEL_OPTIONAL"] = 1;
                values[valuesById[3] = "LABEL_REPEATED"] = 3;
                values[valuesById[2] = "LABEL_REQUIRED"] = 2;
                return values;
            })();

            return FieldDescriptorProto;
        })();

        protobuf.OneofDescriptorProto = (function() {

            /**
             * Properties of a OneofDescriptorProto.
             * @typedef {Object} google.protobuf.OneofDescriptorProto.$Properties
             * @property {string|null} [name] OneofDescriptorProto name
             * @property {google.protobuf.OneofOptions.$Properties|null} [options] OneofDescriptorProto options
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a OneofDescriptorProto.
             * @memberof google.protobuf
             * @interface IOneofDescriptorProto
             * @augments google.protobuf.OneofDescriptorProto.$Properties
             * @deprecated Use google.protobuf.OneofDescriptorProto.$Properties instead.
             */

            /**
             * Shape of a OneofDescriptorProto.
             * @typedef {google.protobuf.OneofDescriptorProto.$Properties} google.protobuf.OneofDescriptorProto.$Shape
             */

            /**
             * Constructs a new OneofDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents a OneofDescriptorProto.
             * @constructor
             * @param {google.protobuf.OneofDescriptorProto.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            var OneofDescriptorProto = function (properties) {
                if (properties)
                    for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * OneofDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.OneofDescriptorProto
             * @instance
             */
            OneofDescriptorProto.prototype.name = "";

            /**
             * OneofDescriptorProto options.
             * @member {google.protobuf.OneofOptions.$Properties|null|undefined} options
             * @memberof google.protobuf.OneofDescriptorProto
             * @instance
             */
            OneofDescriptorProto.prototype.options = null;

            /**
             * Creates a new OneofDescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {google.protobuf.OneofDescriptorProto.$Properties=} [properties] Properties to set
             * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto instance
             * @type {{
             *   (properties: google.protobuf.OneofDescriptorProto.$Shape): google.protobuf.OneofDescriptorProto & google.protobuf.OneofDescriptorProto.$Shape;
             *   (properties?: google.protobuf.OneofDescriptorProto.$Properties): google.protobuf.OneofDescriptorProto;
             * }}
             */
            OneofDescriptorProto.create = function(properties) {
                return new OneofDescriptorProto(properties);
            };

            /**
             * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {google.protobuf.OneofDescriptorProto.$Properties} message OneofDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OneofDescriptorProto.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.options != null && $Object.hasOwnProperty.call(message, "options"))
                    $root.google.protobuf.OneofOptions.encode(message.options, writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (var i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {google.protobuf.OneofDescriptorProto.$Properties} message OneofDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OneofDescriptorProto.encodeDelimited = function(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a OneofDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.OneofDescriptorProto & google.protobuf.OneofDescriptorProto.$Shape} OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OneofDescriptorProto.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.google.protobuf.OneofDescriptorProto();
                while (reader.pos < end) {
                    var start = reader.pos;
                    var tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    var wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            message.name = reader.string();
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            message.options = $root.google.protobuf.OneofOptions.decode(reader, reader.uint32(), $undefined, _depth + 1, message.options);
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes a OneofDescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.OneofDescriptorProto & google.protobuf.OneofDescriptorProto.$Shape} OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OneofDescriptorProto.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a OneofDescriptorProto message.
             * @function verify
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OneofDescriptorProto.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.options != null && $Object.hasOwnProperty.call(message, "options")) {
                    var error = $root.google.protobuf.OneofOptions.verify(message.options, _depth + 1);
                    if (error)
                        return "options." + error;
                }
                return null;
            };

            /**
             * Creates a OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto
             */
            OneofDescriptorProto.fromObject = function (object, _depth) {
                if (object instanceof $root.google.protobuf.OneofDescriptorProto)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".google.protobuf.OneofDescriptorProto: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var message = new $root.google.protobuf.OneofDescriptorProto();
                if (object.name != null)
                    message.name = $String(object.name);
                if (object.options != null) {
                    if (!$util.isObject(object.options))
                        throw $TypeError(".google.protobuf.OneofDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.OneofOptions.fromObject(object.options, _depth + 1);
                }
                return message;
            };

            /**
             * Creates a plain object from a OneofDescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {google.protobuf.OneofDescriptorProto} message OneofDescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OneofDescriptorProto.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var object = {};
                if (options.defaults) {
                    object.name = "";
                    object.options = null;
                }
                if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                    object.name = message.name;
                if (message.options != null && $Object.hasOwnProperty.call(message, "options"))
                    object.options = $root.google.protobuf.OneofOptions.toObject(message.options, options, _depth + 1);
                return object;
            };

            /**
             * Converts this OneofDescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.OneofDescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OneofDescriptorProto.prototype.toJSON = function() {
                return OneofDescriptorProto.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for OneofDescriptorProto
             * @function getTypeUrl
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            OneofDescriptorProto.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/google.protobuf.OneofDescriptorProto";
            };

            return OneofDescriptorProto;
        })();

        protobuf.EnumDescriptorProto = (function() {

            /**
             * Properties of an EnumDescriptorProto.
             * @typedef {Object} google.protobuf.EnumDescriptorProto.$Properties
             * @property {string|null} [name] EnumDescriptorProto name
             * @property {Array.<google.protobuf.EnumValueDescriptorProto.$Properties>|null} [value] EnumDescriptorProto value
             * @property {google.protobuf.EnumOptions.$Properties|null} [options] EnumDescriptorProto options
             * @property {Array.<google.protobuf.EnumDescriptorProto.EnumReservedRange.$Properties>|null} [reserved_range] EnumDescriptorProto reserved_range
             * @property {Array.<string>|null} [reserved_name] EnumDescriptorProto reserved_name
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of an EnumDescriptorProto.
             * @memberof google.protobuf
             * @interface IEnumDescriptorProto
             * @augments google.protobuf.EnumDescriptorProto.$Properties
             * @deprecated Use google.protobuf.EnumDescriptorProto.$Properties instead.
             */

            /**
             * Shape of an EnumDescriptorProto.
             * @typedef {google.protobuf.EnumDescriptorProto.$Properties} google.protobuf.EnumDescriptorProto.$Shape
             */

            /**
             * Constructs a new EnumDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents an EnumDescriptorProto.
             * @constructor
             * @param {google.protobuf.EnumDescriptorProto.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            var EnumDescriptorProto = function (properties) {
                this.value = [];
                this.reserved_range = [];
                this.reserved_name = [];
                if (properties)
                    for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * EnumDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.EnumDescriptorProto
             * @instance
             */
            EnumDescriptorProto.prototype.name = "";

            /**
             * EnumDescriptorProto value.
             * @member {Array.<google.protobuf.EnumValueDescriptorProto.$Properties>} value
             * @memberof google.protobuf.EnumDescriptorProto
             * @instance
             */
            EnumDescriptorProto.prototype.value = $util.emptyArray;

            /**
             * EnumDescriptorProto options.
             * @member {google.protobuf.EnumOptions.$Properties|null|undefined} options
             * @memberof google.protobuf.EnumDescriptorProto
             * @instance
             */
            EnumDescriptorProto.prototype.options = null;

            /**
             * EnumDescriptorProto reserved_range.
             * @member {Array.<google.protobuf.EnumDescriptorProto.EnumReservedRange.$Properties>} reserved_range
             * @memberof google.protobuf.EnumDescriptorProto
             * @instance
             */
            EnumDescriptorProto.prototype.reserved_range = $util.emptyArray;

            /**
             * EnumDescriptorProto reserved_name.
             * @member {Array.<string>} reserved_name
             * @memberof google.protobuf.EnumDescriptorProto
             * @instance
             */
            EnumDescriptorProto.prototype.reserved_name = $util.emptyArray;

            /**
             * Creates a new EnumDescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {google.protobuf.EnumDescriptorProto.$Properties=} [properties] Properties to set
             * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto instance
             * @type {{
             *   (properties: google.protobuf.EnumDescriptorProto.$Shape): google.protobuf.EnumDescriptorProto & google.protobuf.EnumDescriptorProto.$Shape;
             *   (properties?: google.protobuf.EnumDescriptorProto.$Properties): google.protobuf.EnumDescriptorProto;
             * }}
             */
            EnumDescriptorProto.create = function(properties) {
                return new EnumDescriptorProto(properties);
            };

            /**
             * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {google.protobuf.EnumDescriptorProto.$Properties} message EnumDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumDescriptorProto.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.value != null && message.value.length)
                    for (var i = 0; i < message.value.length; ++i)
                        $root.google.protobuf.EnumValueDescriptorProto.encode(message.value[i], writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
                if (message.options != null && $Object.hasOwnProperty.call(message, "options"))
                    $root.google.protobuf.EnumOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork(), _depth + 1).ldelim();
                if (message.reserved_range != null && message.reserved_range.length)
                    for (var i = 0; i < message.reserved_range.length; ++i)
                        $root.google.protobuf.EnumDescriptorProto.EnumReservedRange.encode(message.reserved_range[i], writer.uint32(/* id 4, wireType 2 =*/34).fork(), _depth + 1).ldelim();
                if (message.reserved_name != null && message.reserved_name.length)
                    for (var i = 0; i < message.reserved_name.length; ++i)
                        writer.uint32(/* id 5, wireType 2 =*/42).string(message.reserved_name[i]);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (var i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {google.protobuf.EnumDescriptorProto.$Properties} message EnumDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumDescriptorProto.encodeDelimited = function(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.EnumDescriptorProto & google.protobuf.EnumDescriptorProto.$Shape} EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumDescriptorProto.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.google.protobuf.EnumDescriptorProto();
                while (reader.pos < end) {
                    var start = reader.pos;
                    var tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    var wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            message.name = reader.string();
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            if (!(message.value && message.value.length))
                                message.value = [];
                            message.value.push($root.google.protobuf.EnumValueDescriptorProto.decode(reader, reader.uint32(), $undefined, _depth + 1));
                            continue;
                        }
                    case 3: {
                            if (wireType !== 2)
                                break;
                            message.options = $root.google.protobuf.EnumOptions.decode(reader, reader.uint32(), $undefined, _depth + 1, message.options);
                            continue;
                        }
                    case 4: {
                            if (wireType !== 2)
                                break;
                            if (!(message.reserved_range && message.reserved_range.length))
                                message.reserved_range = [];
                            message.reserved_range.push($root.google.protobuf.EnumDescriptorProto.EnumReservedRange.decode(reader, reader.uint32(), $undefined, _depth + 1));
                            continue;
                        }
                    case 5: {
                            if (wireType !== 2)
                                break;
                            if (!(message.reserved_name && message.reserved_name.length))
                                message.reserved_name = [];
                            message.reserved_name.push(reader.string());
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.EnumDescriptorProto & google.protobuf.EnumDescriptorProto.$Shape} EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumDescriptorProto.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an EnumDescriptorProto message.
             * @function verify
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EnumDescriptorProto.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.value != null && $Object.hasOwnProperty.call(message, "value")) {
                    if (!$Array.isArray(message.value))
                        return "value: array expected";
                    for (var i = 0; i < message.value.length; ++i) {
                        var error = $root.google.protobuf.EnumValueDescriptorProto.verify(message.value[i], _depth + 1);
                        if (error)
                            return "value." + error;
                    }
                }
                if (message.options != null && $Object.hasOwnProperty.call(message, "options")) {
                    var error = $root.google.protobuf.EnumOptions.verify(message.options, _depth + 1);
                    if (error)
                        return "options." + error;
                }
                if (message.reserved_range != null && $Object.hasOwnProperty.call(message, "reserved_range")) {
                    if (!$Array.isArray(message.reserved_range))
                        return "reserved_range: array expected";
                    for (var i = 0; i < message.reserved_range.length; ++i) {
                        var error = $root.google.protobuf.EnumDescriptorProto.EnumReservedRange.verify(message.reserved_range[i], _depth + 1);
                        if (error)
                            return "reserved_range." + error;
                    }
                }
                if (message.reserved_name != null && $Object.hasOwnProperty.call(message, "reserved_name")) {
                    if (!$Array.isArray(message.reserved_name))
                        return "reserved_name: array expected";
                    for (var i = 0; i < message.reserved_name.length; ++i)
                        if (!$util.isString(message.reserved_name[i]))
                            return "reserved_name: string[] expected";
                }
                return null;
            };

            /**
             * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
             */
            EnumDescriptorProto.fromObject = function (object, _depth) {
                if (object instanceof $root.google.protobuf.EnumDescriptorProto)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".google.protobuf.EnumDescriptorProto: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var message = new $root.google.protobuf.EnumDescriptorProto();
                if (object.name != null)
                    message.name = $String(object.name);
                if (object.value) {
                    if (!$Array.isArray(object.value))
                        throw $TypeError(".google.protobuf.EnumDescriptorProto.value: array expected");
                    message.value = $Array(object.value.length);
                    for (var i = 0; i < object.value.length; ++i) {
                        if (!$util.isObject(object.value[i]))
                            throw $TypeError(".google.protobuf.EnumDescriptorProto.value: object expected");
                        message.value[i] = $root.google.protobuf.EnumValueDescriptorProto.fromObject(object.value[i], _depth + 1);
                    }
                }
                if (object.options != null) {
                    if (!$util.isObject(object.options))
                        throw $TypeError(".google.protobuf.EnumDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.EnumOptions.fromObject(object.options, _depth + 1);
                }
                if (object.reserved_range) {
                    if (!$Array.isArray(object.reserved_range))
                        throw $TypeError(".google.protobuf.EnumDescriptorProto.reserved_range: array expected");
                    message.reserved_range = $Array(object.reserved_range.length);
                    for (var i = 0; i < object.reserved_range.length; ++i) {
                        if (!$util.isObject(object.reserved_range[i]))
                            throw $TypeError(".google.protobuf.EnumDescriptorProto.reserved_range: object expected");
                        message.reserved_range[i] = $root.google.protobuf.EnumDescriptorProto.EnumReservedRange.fromObject(object.reserved_range[i], _depth + 1);
                    }
                }
                if (object.reserved_name) {
                    if (!$Array.isArray(object.reserved_name))
                        throw $TypeError(".google.protobuf.EnumDescriptorProto.reserved_name: array expected");
                    message.reserved_name = $Array(object.reserved_name.length);
                    for (var i = 0; i < object.reserved_name.length; ++i)
                        message.reserved_name[i] = $String(object.reserved_name[i]);
                }
                return message;
            };

            /**
             * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {google.protobuf.EnumDescriptorProto} message EnumDescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EnumDescriptorProto.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var object = {};
                if (options.arrays || options.defaults) {
                    object.value = [];
                    object.reserved_range = [];
                    object.reserved_name = [];
                }
                if (options.defaults) {
                    object.name = "";
                    object.options = null;
                }
                if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                    object.name = message.name;
                if (message.value && message.value.length) {
                    object.value = $Array(message.value.length);
                    for (var j = 0; j < message.value.length; ++j)
                        object.value[j] = $root.google.protobuf.EnumValueDescriptorProto.toObject(message.value[j], options, _depth + 1);
                }
                if (message.options != null && $Object.hasOwnProperty.call(message, "options"))
                    object.options = $root.google.protobuf.EnumOptions.toObject(message.options, options, _depth + 1);
                if (message.reserved_range && message.reserved_range.length) {
                    object.reserved_range = $Array(message.reserved_range.length);
                    for (var j = 0; j < message.reserved_range.length; ++j)
                        object.reserved_range[j] = $root.google.protobuf.EnumDescriptorProto.EnumReservedRange.toObject(message.reserved_range[j], options, _depth + 1);
                }
                if (message.reserved_name && message.reserved_name.length) {
                    object.reserved_name = $Array(message.reserved_name.length);
                    for (var j = 0; j < message.reserved_name.length; ++j)
                        object.reserved_name[j] = message.reserved_name[j];
                }
                return object;
            };

            /**
             * Converts this EnumDescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.EnumDescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EnumDescriptorProto.prototype.toJSON = function() {
                return EnumDescriptorProto.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for EnumDescriptorProto
             * @function getTypeUrl
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            EnumDescriptorProto.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/google.protobuf.EnumDescriptorProto";
            };

            EnumDescriptorProto.EnumReservedRange = (function() {

                /**
                 * Properties of an EnumReservedRange.
                 * @typedef {Object} google.protobuf.EnumDescriptorProto.EnumReservedRange.$Properties
                 * @property {number|null} [start] EnumReservedRange start
                 * @property {number|null} [end] EnumReservedRange end
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */

                /**
                 * Properties of an EnumReservedRange.
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @interface IEnumReservedRange
                 * @augments google.protobuf.EnumDescriptorProto.EnumReservedRange.$Properties
                 * @deprecated Use google.protobuf.EnumDescriptorProto.EnumReservedRange.$Properties instead.
                 */

                /**
                 * Shape of an EnumReservedRange.
                 * @typedef {google.protobuf.EnumDescriptorProto.EnumReservedRange.$Properties} google.protobuf.EnumDescriptorProto.EnumReservedRange.$Shape
                 */

                /**
                 * Constructs a new EnumReservedRange.
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @classdesc Represents an EnumReservedRange.
                 * @constructor
                 * @param {google.protobuf.EnumDescriptorProto.EnumReservedRange.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                var EnumReservedRange = function (properties) {
                    if (properties)
                        for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };

                /**
                 * EnumReservedRange start.
                 * @member {number} start
                 * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                 * @instance
                 */
                EnumReservedRange.prototype.start = 0;

                /**
                 * EnumReservedRange end.
                 * @member {number} end
                 * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                 * @instance
                 */
                EnumReservedRange.prototype.end = 0;

                /**
                 * Creates a new EnumReservedRange instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                 * @static
                 * @param {google.protobuf.EnumDescriptorProto.EnumReservedRange.$Properties=} [properties] Properties to set
                 * @returns {google.protobuf.EnumDescriptorProto.EnumReservedRange} EnumReservedRange instance
                 * @type {{
                 *   (properties: google.protobuf.EnumDescriptorProto.EnumReservedRange.$Shape): google.protobuf.EnumDescriptorProto.EnumReservedRange & google.protobuf.EnumDescriptorProto.EnumReservedRange.$Shape;
                 *   (properties?: google.protobuf.EnumDescriptorProto.EnumReservedRange.$Properties): google.protobuf.EnumDescriptorProto.EnumReservedRange;
                 * }}
                 */
                EnumReservedRange.create = function(properties) {
                    return new EnumReservedRange(properties);
                };

                /**
                 * Encodes the specified EnumReservedRange message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                 * @static
                 * @param {google.protobuf.EnumDescriptorProto.EnumReservedRange.$Properties} message EnumReservedRange message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumReservedRange.encode = function (message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.start != null && $Object.hasOwnProperty.call(message, "start"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.start);
                    if (message.end != null && $Object.hasOwnProperty.call(message, "end"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.end);
                    if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                        for (var i = 0; i < message.$unknowns.length; ++i)
                            writer.raw(message.$unknowns[i]);
                    return writer;
                };

                /**
                 * Encodes the specified EnumReservedRange message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                 * @static
                 * @param {google.protobuf.EnumDescriptorProto.EnumReservedRange.$Properties} message EnumReservedRange message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumReservedRange.encodeDelimited = function(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.EnumDescriptorProto.EnumReservedRange & google.protobuf.EnumDescriptorProto.EnumReservedRange.$Shape} EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumReservedRange.decode = function (reader, length, _end, _depth, _target) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $Reader.recursionLimit)
                        throw $Error("max depth exceeded");
                    var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.google.protobuf.EnumDescriptorProto.EnumReservedRange();
                    while (reader.pos < end) {
                        var start = reader.pos;
                        var tag = reader.tag();
                        if (tag === _end) {
                            _end = $undefined;
                            break;
                        }
                        var wireType = tag & 7;
                        switch (tag >>>= 3) {
                        case 1: {
                                if (wireType !== 0)
                                    break;
                                message.start = reader.int32();
                                continue;
                            }
                        case 2: {
                                if (wireType !== 0)
                                    break;
                                message.end = reader.int32();
                                continue;
                            }
                        }
                        reader.skipType(wireType, _depth, tag);
                        if (!reader.discardUnknown) {
                            $util.makeProp(message, "$unknowns", false);
                            (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                        }
                    }
                    if (_end !== $undefined)
                        throw $Error("missing end group");
                    return message;
                };

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.EnumDescriptorProto.EnumReservedRange & google.protobuf.EnumDescriptorProto.EnumReservedRange.$Shape} EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumReservedRange.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an EnumReservedRange message.
                 * @function verify
                 * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                EnumReservedRange.verify = function (message, _depth) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        return "max depth exceeded";
                    if (message.start != null && $Object.hasOwnProperty.call(message, "start"))
                        if (!$util.isInteger(message.start))
                            return "start: integer expected";
                    if (message.end != null && $Object.hasOwnProperty.call(message, "end"))
                        if (!$util.isInteger(message.end))
                            return "end: integer expected";
                    return null;
                };

                /**
                 * Creates an EnumReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.EnumDescriptorProto.EnumReservedRange} EnumReservedRange
                 */
                EnumReservedRange.fromObject = function (object, _depth) {
                    if (object instanceof $root.google.protobuf.EnumDescriptorProto.EnumReservedRange)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".google.protobuf.EnumDescriptorProto.EnumReservedRange: object expected");
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var message = new $root.google.protobuf.EnumDescriptorProto.EnumReservedRange();
                    if (object.start != null)
                        message.start = object.start | 0;
                    if (object.end != null)
                        message.end = object.end | 0;
                    return message;
                };

                /**
                 * Creates a plain object from an EnumReservedRange message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                 * @static
                 * @param {google.protobuf.EnumDescriptorProto.EnumReservedRange} message EnumReservedRange
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EnumReservedRange.toObject = function (message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var object = {};
                    if (options.defaults) {
                        object.start = 0;
                        object.end = 0;
                    }
                    if (message.start != null && $Object.hasOwnProperty.call(message, "start"))
                        object.start = message.start;
                    if (message.end != null && $Object.hasOwnProperty.call(message, "end"))
                        object.end = message.end;
                    return object;
                };

                /**
                 * Converts this EnumReservedRange to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                EnumReservedRange.prototype.toJSON = function() {
                    return EnumReservedRange.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the type url for EnumReservedRange
                 * @function getTypeUrl
                 * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                EnumReservedRange.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/google.protobuf.EnumDescriptorProto.EnumReservedRange";
                };

                return EnumReservedRange;
            })();

            return EnumDescriptorProto;
        })();

        protobuf.EnumValueDescriptorProto = (function() {

            /**
             * Properties of an EnumValueDescriptorProto.
             * @typedef {Object} google.protobuf.EnumValueDescriptorProto.$Properties
             * @property {string|null} [name] EnumValueDescriptorProto name
             * @property {number|null} [number] EnumValueDescriptorProto number
             * @property {google.protobuf.EnumValueOptions.$Properties|null} [options] EnumValueDescriptorProto options
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of an EnumValueDescriptorProto.
             * @memberof google.protobuf
             * @interface IEnumValueDescriptorProto
             * @augments google.protobuf.EnumValueDescriptorProto.$Properties
             * @deprecated Use google.protobuf.EnumValueDescriptorProto.$Properties instead.
             */

            /**
             * Shape of an EnumValueDescriptorProto.
             * @typedef {google.protobuf.EnumValueDescriptorProto.$Properties} google.protobuf.EnumValueDescriptorProto.$Shape
             */

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents an EnumValueDescriptorProto.
             * @constructor
             * @param {google.protobuf.EnumValueDescriptorProto.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            var EnumValueDescriptorProto = function (properties) {
                if (properties)
                    for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * EnumValueDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @instance
             */
            EnumValueDescriptorProto.prototype.name = "";

            /**
             * EnumValueDescriptorProto number.
             * @member {number} number
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @instance
             */
            EnumValueDescriptorProto.prototype.number = 0;

            /**
             * EnumValueDescriptorProto options.
             * @member {google.protobuf.EnumValueOptions.$Properties|null|undefined} options
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @instance
             */
            EnumValueDescriptorProto.prototype.options = null;

            /**
             * Creates a new EnumValueDescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {google.protobuf.EnumValueDescriptorProto.$Properties=} [properties] Properties to set
             * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto instance
             * @type {{
             *   (properties: google.protobuf.EnumValueDescriptorProto.$Shape): google.protobuf.EnumValueDescriptorProto & google.protobuf.EnumValueDescriptorProto.$Shape;
             *   (properties?: google.protobuf.EnumValueDescriptorProto.$Properties): google.protobuf.EnumValueDescriptorProto;
             * }}
             */
            EnumValueDescriptorProto.create = function(properties) {
                return new EnumValueDescriptorProto(properties);
            };

            /**
             * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {google.protobuf.EnumValueDescriptorProto.$Properties} message EnumValueDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumValueDescriptorProto.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.number != null && $Object.hasOwnProperty.call(message, "number"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.number);
                if (message.options != null && $Object.hasOwnProperty.call(message, "options"))
                    $root.google.protobuf.EnumValueOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (var i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {google.protobuf.EnumValueDescriptorProto.$Properties} message EnumValueDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumValueDescriptorProto.encodeDelimited = function(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.EnumValueDescriptorProto & google.protobuf.EnumValueDescriptorProto.$Shape} EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumValueDescriptorProto.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.google.protobuf.EnumValueDescriptorProto();
                while (reader.pos < end) {
                    var start = reader.pos;
                    var tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    var wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            message.name = reader.string();
                            continue;
                        }
                    case 2: {
                            if (wireType !== 0)
                                break;
                            message.number = reader.int32();
                            continue;
                        }
                    case 3: {
                            if (wireType !== 2)
                                break;
                            message.options = $root.google.protobuf.EnumValueOptions.decode(reader, reader.uint32(), $undefined, _depth + 1, message.options);
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.EnumValueDescriptorProto & google.protobuf.EnumValueDescriptorProto.$Shape} EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumValueDescriptorProto.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an EnumValueDescriptorProto message.
             * @function verify
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EnumValueDescriptorProto.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.number != null && $Object.hasOwnProperty.call(message, "number"))
                    if (!$util.isInteger(message.number))
                        return "number: integer expected";
                if (message.options != null && $Object.hasOwnProperty.call(message, "options")) {
                    var error = $root.google.protobuf.EnumValueOptions.verify(message.options, _depth + 1);
                    if (error)
                        return "options." + error;
                }
                return null;
            };

            /**
             * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
             */
            EnumValueDescriptorProto.fromObject = function (object, _depth) {
                if (object instanceof $root.google.protobuf.EnumValueDescriptorProto)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".google.protobuf.EnumValueDescriptorProto: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var message = new $root.google.protobuf.EnumValueDescriptorProto();
                if (object.name != null)
                    message.name = $String(object.name);
                if (object.number != null)
                    message.number = object.number | 0;
                if (object.options != null) {
                    if (!$util.isObject(object.options))
                        throw $TypeError(".google.protobuf.EnumValueDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.EnumValueOptions.fromObject(object.options, _depth + 1);
                }
                return message;
            };

            /**
             * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {google.protobuf.EnumValueDescriptorProto} message EnumValueDescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EnumValueDescriptorProto.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var object = {};
                if (options.defaults) {
                    object.name = "";
                    object.number = 0;
                    object.options = null;
                }
                if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                    object.name = message.name;
                if (message.number != null && $Object.hasOwnProperty.call(message, "number"))
                    object.number = message.number;
                if (message.options != null && $Object.hasOwnProperty.call(message, "options"))
                    object.options = $root.google.protobuf.EnumValueOptions.toObject(message.options, options, _depth + 1);
                return object;
            };

            /**
             * Converts this EnumValueDescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EnumValueDescriptorProto.prototype.toJSON = function() {
                return EnumValueDescriptorProto.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for EnumValueDescriptorProto
             * @function getTypeUrl
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            EnumValueDescriptorProto.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/google.protobuf.EnumValueDescriptorProto";
            };

            return EnumValueDescriptorProto;
        })();

        protobuf.ServiceDescriptorProto = (function() {

            /**
             * Properties of a ServiceDescriptorProto.
             * @typedef {Object} google.protobuf.ServiceDescriptorProto.$Properties
             * @property {string|null} [name] ServiceDescriptorProto name
             * @property {Array.<google.protobuf.MethodDescriptorProto.$Properties>|null} [method] ServiceDescriptorProto method
             * @property {google.protobuf.ServiceOptions.$Properties|null} [options] ServiceDescriptorProto options
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a ServiceDescriptorProto.
             * @memberof google.protobuf
             * @interface IServiceDescriptorProto
             * @augments google.protobuf.ServiceDescriptorProto.$Properties
             * @deprecated Use google.protobuf.ServiceDescriptorProto.$Properties instead.
             */

            /**
             * Shape of a ServiceDescriptorProto.
             * @typedef {google.protobuf.ServiceDescriptorProto.$Properties} google.protobuf.ServiceDescriptorProto.$Shape
             */

            /**
             * Constructs a new ServiceDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents a ServiceDescriptorProto.
             * @constructor
             * @param {google.protobuf.ServiceDescriptorProto.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            var ServiceDescriptorProto = function (properties) {
                this.method = [];
                if (properties)
                    for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * ServiceDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.ServiceDescriptorProto
             * @instance
             */
            ServiceDescriptorProto.prototype.name = "";

            /**
             * ServiceDescriptorProto method.
             * @member {Array.<google.protobuf.MethodDescriptorProto.$Properties>} method
             * @memberof google.protobuf.ServiceDescriptorProto
             * @instance
             */
            ServiceDescriptorProto.prototype.method = $util.emptyArray;

            /**
             * ServiceDescriptorProto options.
             * @member {google.protobuf.ServiceOptions.$Properties|null|undefined} options
             * @memberof google.protobuf.ServiceDescriptorProto
             * @instance
             */
            ServiceDescriptorProto.prototype.options = null;

            /**
             * Creates a new ServiceDescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {google.protobuf.ServiceDescriptorProto.$Properties=} [properties] Properties to set
             * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto instance
             * @type {{
             *   (properties: google.protobuf.ServiceDescriptorProto.$Shape): google.protobuf.ServiceDescriptorProto & google.protobuf.ServiceDescriptorProto.$Shape;
             *   (properties?: google.protobuf.ServiceDescriptorProto.$Properties): google.protobuf.ServiceDescriptorProto;
             * }}
             */
            ServiceDescriptorProto.create = function(properties) {
                return new ServiceDescriptorProto(properties);
            };

            /**
             * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {google.protobuf.ServiceDescriptorProto.$Properties} message ServiceDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServiceDescriptorProto.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.method != null && message.method.length)
                    for (var i = 0; i < message.method.length; ++i)
                        $root.google.protobuf.MethodDescriptorProto.encode(message.method[i], writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
                if (message.options != null && $Object.hasOwnProperty.call(message, "options"))
                    $root.google.protobuf.ServiceOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (var i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {google.protobuf.ServiceDescriptorProto.$Properties} message ServiceDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServiceDescriptorProto.encodeDelimited = function(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.ServiceDescriptorProto & google.protobuf.ServiceDescriptorProto.$Shape} ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ServiceDescriptorProto.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.google.protobuf.ServiceDescriptorProto();
                while (reader.pos < end) {
                    var start = reader.pos;
                    var tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    var wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            message.name = reader.string();
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            if (!(message.method && message.method.length))
                                message.method = [];
                            message.method.push($root.google.protobuf.MethodDescriptorProto.decode(reader, reader.uint32(), $undefined, _depth + 1));
                            continue;
                        }
                    case 3: {
                            if (wireType !== 2)
                                break;
                            message.options = $root.google.protobuf.ServiceOptions.decode(reader, reader.uint32(), $undefined, _depth + 1, message.options);
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.ServiceDescriptorProto & google.protobuf.ServiceDescriptorProto.$Shape} ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ServiceDescriptorProto.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ServiceDescriptorProto message.
             * @function verify
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ServiceDescriptorProto.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.method != null && $Object.hasOwnProperty.call(message, "method")) {
                    if (!$Array.isArray(message.method))
                        return "method: array expected";
                    for (var i = 0; i < message.method.length; ++i) {
                        var error = $root.google.protobuf.MethodDescriptorProto.verify(message.method[i], _depth + 1);
                        if (error)
                            return "method." + error;
                    }
                }
                if (message.options != null && $Object.hasOwnProperty.call(message, "options")) {
                    var error = $root.google.protobuf.ServiceOptions.verify(message.options, _depth + 1);
                    if (error)
                        return "options." + error;
                }
                return null;
            };

            /**
             * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
             */
            ServiceDescriptorProto.fromObject = function (object, _depth) {
                if (object instanceof $root.google.protobuf.ServiceDescriptorProto)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".google.protobuf.ServiceDescriptorProto: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var message = new $root.google.protobuf.ServiceDescriptorProto();
                if (object.name != null)
                    message.name = $String(object.name);
                if (object.method) {
                    if (!$Array.isArray(object.method))
                        throw $TypeError(".google.protobuf.ServiceDescriptorProto.method: array expected");
                    message.method = $Array(object.method.length);
                    for (var i = 0; i < object.method.length; ++i) {
                        if (!$util.isObject(object.method[i]))
                            throw $TypeError(".google.protobuf.ServiceDescriptorProto.method: object expected");
                        message.method[i] = $root.google.protobuf.MethodDescriptorProto.fromObject(object.method[i], _depth + 1);
                    }
                }
                if (object.options != null) {
                    if (!$util.isObject(object.options))
                        throw $TypeError(".google.protobuf.ServiceDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.ServiceOptions.fromObject(object.options, _depth + 1);
                }
                return message;
            };

            /**
             * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {google.protobuf.ServiceDescriptorProto} message ServiceDescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ServiceDescriptorProto.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var object = {};
                if (options.arrays || options.defaults)
                    object.method = [];
                if (options.defaults) {
                    object.name = "";
                    object.options = null;
                }
                if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                    object.name = message.name;
                if (message.method && message.method.length) {
                    object.method = $Array(message.method.length);
                    for (var j = 0; j < message.method.length; ++j)
                        object.method[j] = $root.google.protobuf.MethodDescriptorProto.toObject(message.method[j], options, _depth + 1);
                }
                if (message.options != null && $Object.hasOwnProperty.call(message, "options"))
                    object.options = $root.google.protobuf.ServiceOptions.toObject(message.options, options, _depth + 1);
                return object;
            };

            /**
             * Converts this ServiceDescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.ServiceDescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ServiceDescriptorProto.prototype.toJSON = function() {
                return ServiceDescriptorProto.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for ServiceDescriptorProto
             * @function getTypeUrl
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            ServiceDescriptorProto.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/google.protobuf.ServiceDescriptorProto";
            };

            return ServiceDescriptorProto;
        })();

        protobuf.MethodDescriptorProto = (function() {

            /**
             * Properties of a MethodDescriptorProto.
             * @typedef {Object} google.protobuf.MethodDescriptorProto.$Properties
             * @property {string|null} [name] MethodDescriptorProto name
             * @property {string|null} [input_type] MethodDescriptorProto input_type
             * @property {string|null} [output_type] MethodDescriptorProto output_type
             * @property {google.protobuf.MethodOptions.$Properties|null} [options] MethodDescriptorProto options
             * @property {boolean|null} [client_streaming] MethodDescriptorProto client_streaming
             * @property {boolean|null} [server_streaming] MethodDescriptorProto server_streaming
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a MethodDescriptorProto.
             * @memberof google.protobuf
             * @interface IMethodDescriptorProto
             * @augments google.protobuf.MethodDescriptorProto.$Properties
             * @deprecated Use google.protobuf.MethodDescriptorProto.$Properties instead.
             */

            /**
             * Shape of a MethodDescriptorProto.
             * @typedef {google.protobuf.MethodDescriptorProto.$Properties} google.protobuf.MethodDescriptorProto.$Shape
             */

            /**
             * Constructs a new MethodDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents a MethodDescriptorProto.
             * @constructor
             * @param {google.protobuf.MethodDescriptorProto.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            var MethodDescriptorProto = function (properties) {
                if (properties)
                    for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * MethodDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.name = "";

            /**
             * MethodDescriptorProto input_type.
             * @member {string} input_type
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.input_type = "";

            /**
             * MethodDescriptorProto output_type.
             * @member {string} output_type
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.output_type = "";

            /**
             * MethodDescriptorProto options.
             * @member {google.protobuf.MethodOptions.$Properties|null|undefined} options
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.options = null;

            /**
             * MethodDescriptorProto client_streaming.
             * @member {boolean} client_streaming
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.client_streaming = false;

            /**
             * MethodDescriptorProto server_streaming.
             * @member {boolean} server_streaming
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.server_streaming = false;

            /**
             * Creates a new MethodDescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {google.protobuf.MethodDescriptorProto.$Properties=} [properties] Properties to set
             * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto instance
             * @type {{
             *   (properties: google.protobuf.MethodDescriptorProto.$Shape): google.protobuf.MethodDescriptorProto & google.protobuf.MethodDescriptorProto.$Shape;
             *   (properties?: google.protobuf.MethodDescriptorProto.$Properties): google.protobuf.MethodDescriptorProto;
             * }}
             */
            MethodDescriptorProto.create = function(properties) {
                return new MethodDescriptorProto(properties);
            };

            /**
             * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {google.protobuf.MethodDescriptorProto.$Properties} message MethodDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MethodDescriptorProto.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.input_type != null && $Object.hasOwnProperty.call(message, "input_type"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.input_type);
                if (message.output_type != null && $Object.hasOwnProperty.call(message, "output_type"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.output_type);
                if (message.options != null && $Object.hasOwnProperty.call(message, "options"))
                    $root.google.protobuf.MethodOptions.encode(message.options, writer.uint32(/* id 4, wireType 2 =*/34).fork(), _depth + 1).ldelim();
                if (message.client_streaming != null && $Object.hasOwnProperty.call(message, "client_streaming"))
                    writer.uint32(/* id 5, wireType 0 =*/40).bool(message.client_streaming);
                if (message.server_streaming != null && $Object.hasOwnProperty.call(message, "server_streaming"))
                    writer.uint32(/* id 6, wireType 0 =*/48).bool(message.server_streaming);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (var i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {google.protobuf.MethodDescriptorProto.$Properties} message MethodDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MethodDescriptorProto.encodeDelimited = function(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.MethodDescriptorProto & google.protobuf.MethodDescriptorProto.$Shape} MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MethodDescriptorProto.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.google.protobuf.MethodDescriptorProto();
                while (reader.pos < end) {
                    var start = reader.pos;
                    var tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    var wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            message.name = reader.string();
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            message.input_type = reader.string();
                            continue;
                        }
                    case 3: {
                            if (wireType !== 2)
                                break;
                            message.output_type = reader.string();
                            continue;
                        }
                    case 4: {
                            if (wireType !== 2)
                                break;
                            message.options = $root.google.protobuf.MethodOptions.decode(reader, reader.uint32(), $undefined, _depth + 1, message.options);
                            continue;
                        }
                    case 5: {
                            if (wireType !== 0)
                                break;
                            message.client_streaming = reader.bool();
                            continue;
                        }
                    case 6: {
                            if (wireType !== 0)
                                break;
                            message.server_streaming = reader.bool();
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.MethodDescriptorProto & google.protobuf.MethodDescriptorProto.$Shape} MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MethodDescriptorProto.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MethodDescriptorProto message.
             * @function verify
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MethodDescriptorProto.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.input_type != null && $Object.hasOwnProperty.call(message, "input_type"))
                    if (!$util.isString(message.input_type))
                        return "input_type: string expected";
                if (message.output_type != null && $Object.hasOwnProperty.call(message, "output_type"))
                    if (!$util.isString(message.output_type))
                        return "output_type: string expected";
                if (message.options != null && $Object.hasOwnProperty.call(message, "options")) {
                    var error = $root.google.protobuf.MethodOptions.verify(message.options, _depth + 1);
                    if (error)
                        return "options." + error;
                }
                if (message.client_streaming != null && $Object.hasOwnProperty.call(message, "client_streaming"))
                    if (typeof message.client_streaming !== "boolean")
                        return "client_streaming: boolean expected";
                if (message.server_streaming != null && $Object.hasOwnProperty.call(message, "server_streaming"))
                    if (typeof message.server_streaming !== "boolean")
                        return "server_streaming: boolean expected";
                return null;
            };

            /**
             * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
             */
            MethodDescriptorProto.fromObject = function (object, _depth) {
                if (object instanceof $root.google.protobuf.MethodDescriptorProto)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".google.protobuf.MethodDescriptorProto: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var message = new $root.google.protobuf.MethodDescriptorProto();
                if (object.name != null)
                    message.name = $String(object.name);
                if (object.input_type != null)
                    message.input_type = $String(object.input_type);
                if (object.output_type != null)
                    message.output_type = $String(object.output_type);
                if (object.options != null) {
                    if (!$util.isObject(object.options))
                        throw $TypeError(".google.protobuf.MethodDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.MethodOptions.fromObject(object.options, _depth + 1);
                }
                if (object.client_streaming != null)
                    message.client_streaming = $Boolean(object.client_streaming);
                if (object.server_streaming != null)
                    message.server_streaming = $Boolean(object.server_streaming);
                return message;
            };

            /**
             * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {google.protobuf.MethodDescriptorProto} message MethodDescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MethodDescriptorProto.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var object = {};
                if (options.defaults) {
                    object.name = "";
                    object.input_type = "";
                    object.output_type = "";
                    object.options = null;
                    object.client_streaming = false;
                    object.server_streaming = false;
                }
                if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                    object.name = message.name;
                if (message.input_type != null && $Object.hasOwnProperty.call(message, "input_type"))
                    object.input_type = message.input_type;
                if (message.output_type != null && $Object.hasOwnProperty.call(message, "output_type"))
                    object.output_type = message.output_type;
                if (message.options != null && $Object.hasOwnProperty.call(message, "options"))
                    object.options = $root.google.protobuf.MethodOptions.toObject(message.options, options, _depth + 1);
                if (message.client_streaming != null && $Object.hasOwnProperty.call(message, "client_streaming"))
                    object.client_streaming = message.client_streaming;
                if (message.server_streaming != null && $Object.hasOwnProperty.call(message, "server_streaming"))
                    object.server_streaming = message.server_streaming;
                return object;
            };

            /**
             * Converts this MethodDescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MethodDescriptorProto.prototype.toJSON = function() {
                return MethodDescriptorProto.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for MethodDescriptorProto
             * @function getTypeUrl
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            MethodDescriptorProto.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/google.protobuf.MethodDescriptorProto";
            };

            return MethodDescriptorProto;
        })();

        protobuf.FileOptions = (function() {

            /**
             * Properties of a FileOptions.
             * @typedef {Object} google.protobuf.FileOptions.$Properties
             * @property {string|null} [java_package] FileOptions java_package
             * @property {string|null} [java_outer_classname] FileOptions java_outer_classname
             * @property {boolean|null} [java_multiple_files] FileOptions java_multiple_files
             * @property {boolean|null} [java_generate_equals_and_hash] FileOptions java_generate_equals_and_hash
             * @property {boolean|null} [java_string_check_utf8] FileOptions java_string_check_utf8
             * @property {google.protobuf.FileOptions.OptimizeMode|null} [optimize_for] FileOptions optimize_for
             * @property {string|null} [go_package] FileOptions go_package
             * @property {boolean|null} [cc_generic_services] FileOptions cc_generic_services
             * @property {boolean|null} [java_generic_services] FileOptions java_generic_services
             * @property {boolean|null} [py_generic_services] FileOptions py_generic_services
             * @property {boolean|null} [deprecated] FileOptions deprecated
             * @property {boolean|null} [cc_enable_arenas] FileOptions cc_enable_arenas
             * @property {string|null} [objc_class_prefix] FileOptions objc_class_prefix
             * @property {string|null} [csharp_namespace] FileOptions csharp_namespace
             * @property {string|null} [swift_prefix] FileOptions swift_prefix
             * @property {string|null} [php_class_prefix] FileOptions php_class_prefix
             * @property {string|null} [php_namespace] FileOptions php_namespace
             * @property {string|null} [php_metadata_namespace] FileOptions php_metadata_namespace
             * @property {string|null} [ruby_package] FileOptions ruby_package
             * @property {google.protobuf.FeatureSet.$Properties|null} [features] FileOptions features
             * @property {Array.<google.protobuf.UninterpretedOption.$Properties>|null} [uninterpreted_option] FileOptions uninterpreted_option
             * @property {NanoPBOptions.$Properties|null} [".nanopb_fileopt"] FileOptions .nanopb_fileopt
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a FileOptions.
             * @memberof google.protobuf
             * @interface IFileOptions
             * @augments google.protobuf.FileOptions.$Properties
             * @deprecated Use google.protobuf.FileOptions.$Properties instead.
             */

            /**
             * Shape of a FileOptions.
             * @typedef {google.protobuf.FileOptions.$Properties} google.protobuf.FileOptions.$Shape
             */

            /**
             * Constructs a new FileOptions.
             * @memberof google.protobuf
             * @classdesc Represents a FileOptions.
             * @constructor
             * @param {google.protobuf.FileOptions.$Properties=} [properties] Properties to set
             * @property {NanoPBOptions.$Properties|null} [".nanopb_fileopt"] FileOptions .nanopb_fileopt
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            var FileOptions = function (properties) {
                this.uninterpreted_option = [];
                if (properties)
                    for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * FileOptions java_package.
             * @member {string} java_package
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.java_package = "";

            /**
             * FileOptions java_outer_classname.
             * @member {string} java_outer_classname
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.java_outer_classname = "";

            /**
             * FileOptions java_multiple_files.
             * @member {boolean} java_multiple_files
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.java_multiple_files = false;

            /**
             * FileOptions java_generate_equals_and_hash.
             * @member {boolean} java_generate_equals_and_hash
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.java_generate_equals_and_hash = false;

            /**
             * FileOptions java_string_check_utf8.
             * @member {boolean} java_string_check_utf8
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.java_string_check_utf8 = false;

            /**
             * FileOptions optimize_for.
             * @member {google.protobuf.FileOptions.OptimizeMode} optimize_for
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.optimize_for = 1;

            /**
             * FileOptions go_package.
             * @member {string} go_package
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.go_package = "";

            /**
             * FileOptions cc_generic_services.
             * @member {boolean} cc_generic_services
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.cc_generic_services = false;

            /**
             * FileOptions java_generic_services.
             * @member {boolean} java_generic_services
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.java_generic_services = false;

            /**
             * FileOptions py_generic_services.
             * @member {boolean} py_generic_services
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.py_generic_services = false;

            /**
             * FileOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.deprecated = false;

            /**
             * FileOptions cc_enable_arenas.
             * @member {boolean} cc_enable_arenas
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.cc_enable_arenas = true;

            /**
             * FileOptions objc_class_prefix.
             * @member {string} objc_class_prefix
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.objc_class_prefix = "";

            /**
             * FileOptions csharp_namespace.
             * @member {string} csharp_namespace
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.csharp_namespace = "";

            /**
             * FileOptions swift_prefix.
             * @member {string} swift_prefix
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.swift_prefix = "";

            /**
             * FileOptions php_class_prefix.
             * @member {string} php_class_prefix
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.php_class_prefix = "";

            /**
             * FileOptions php_namespace.
             * @member {string} php_namespace
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.php_namespace = "";

            /**
             * FileOptions php_metadata_namespace.
             * @member {string} php_metadata_namespace
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.php_metadata_namespace = "";

            /**
             * FileOptions ruby_package.
             * @member {string} ruby_package
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.ruby_package = "";

            /**
             * FileOptions features.
             * @member {google.protobuf.FeatureSet.$Properties|null|undefined} features
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.features = null;

            /**
             * FileOptions uninterpreted_option.
             * @member {Array.<google.protobuf.UninterpretedOption.$Properties>} uninterpreted_option
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.uninterpreted_option = $util.emptyArray;

            FileOptions.prototype[".nanopb_fileopt"] = null;

            /**
             * Creates a new FileOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {google.protobuf.FileOptions.$Properties=} [properties] Properties to set
             * @returns {google.protobuf.FileOptions} FileOptions instance
             * @type {{
             *   (properties: google.protobuf.FileOptions.$Shape): google.protobuf.FileOptions & google.protobuf.FileOptions.$Shape;
             *   (properties?: google.protobuf.FileOptions.$Properties): google.protobuf.FileOptions;
             * }}
             */
            FileOptions.create = function(properties) {
                return new FileOptions(properties);
            };

            /**
             * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {google.protobuf.FileOptions.$Properties} message FileOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileOptions.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.java_package != null && $Object.hasOwnProperty.call(message, "java_package"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.java_package);
                if (message.java_outer_classname != null && $Object.hasOwnProperty.call(message, "java_outer_classname"))
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.java_outer_classname);
                if (message.optimize_for != null && $Object.hasOwnProperty.call(message, "optimize_for"))
                    writer.uint32(/* id 9, wireType 0 =*/72).int32(message.optimize_for);
                if (message.java_multiple_files != null && $Object.hasOwnProperty.call(message, "java_multiple_files"))
                    writer.uint32(/* id 10, wireType 0 =*/80).bool(message.java_multiple_files);
                if (message.go_package != null && $Object.hasOwnProperty.call(message, "go_package"))
                    writer.uint32(/* id 11, wireType 2 =*/90).string(message.go_package);
                if (message.cc_generic_services != null && $Object.hasOwnProperty.call(message, "cc_generic_services"))
                    writer.uint32(/* id 16, wireType 0 =*/128).bool(message.cc_generic_services);
                if (message.java_generic_services != null && $Object.hasOwnProperty.call(message, "java_generic_services"))
                    writer.uint32(/* id 17, wireType 0 =*/136).bool(message.java_generic_services);
                if (message.py_generic_services != null && $Object.hasOwnProperty.call(message, "py_generic_services"))
                    writer.uint32(/* id 18, wireType 0 =*/144).bool(message.py_generic_services);
                if (message.java_generate_equals_and_hash != null && $Object.hasOwnProperty.call(message, "java_generate_equals_and_hash"))
                    writer.uint32(/* id 20, wireType 0 =*/160).bool(message.java_generate_equals_and_hash);
                if (message.deprecated != null && $Object.hasOwnProperty.call(message, "deprecated"))
                    writer.uint32(/* id 23, wireType 0 =*/184).bool(message.deprecated);
                if (message.java_string_check_utf8 != null && $Object.hasOwnProperty.call(message, "java_string_check_utf8"))
                    writer.uint32(/* id 27, wireType 0 =*/216).bool(message.java_string_check_utf8);
                if (message.cc_enable_arenas != null && $Object.hasOwnProperty.call(message, "cc_enable_arenas"))
                    writer.uint32(/* id 31, wireType 0 =*/248).bool(message.cc_enable_arenas);
                if (message.objc_class_prefix != null && $Object.hasOwnProperty.call(message, "objc_class_prefix"))
                    writer.uint32(/* id 36, wireType 2 =*/290).string(message.objc_class_prefix);
                if (message.csharp_namespace != null && $Object.hasOwnProperty.call(message, "csharp_namespace"))
                    writer.uint32(/* id 37, wireType 2 =*/298).string(message.csharp_namespace);
                if (message.swift_prefix != null && $Object.hasOwnProperty.call(message, "swift_prefix"))
                    writer.uint32(/* id 39, wireType 2 =*/314).string(message.swift_prefix);
                if (message.php_class_prefix != null && $Object.hasOwnProperty.call(message, "php_class_prefix"))
                    writer.uint32(/* id 40, wireType 2 =*/322).string(message.php_class_prefix);
                if (message.php_namespace != null && $Object.hasOwnProperty.call(message, "php_namespace"))
                    writer.uint32(/* id 41, wireType 2 =*/330).string(message.php_namespace);
                if (message.php_metadata_namespace != null && $Object.hasOwnProperty.call(message, "php_metadata_namespace"))
                    writer.uint32(/* id 44, wireType 2 =*/354).string(message.php_metadata_namespace);
                if (message.ruby_package != null && $Object.hasOwnProperty.call(message, "ruby_package"))
                    writer.uint32(/* id 45, wireType 2 =*/362).string(message.ruby_package);
                if (message.features != null && $Object.hasOwnProperty.call(message, "features"))
                    $root.google.protobuf.FeatureSet.encode(message.features, writer.uint32(/* id 50, wireType 2 =*/402).fork(), _depth + 1).ldelim();
                if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                    for (var i = 0; i < message.uninterpreted_option.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork(), _depth + 1).ldelim();
                if (message[".nanopb_fileopt"] != null && $Object.hasOwnProperty.call(message, ".nanopb_fileopt"))
                    $root.NanoPBOptions.encode(message[".nanopb_fileopt"], writer.uint32(/* id 1010, wireType 2 =*/8082).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (var i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {google.protobuf.FileOptions.$Properties} message FileOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileOptions.encodeDelimited = function(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a FileOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FileOptions & google.protobuf.FileOptions.$Shape} FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileOptions.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.google.protobuf.FileOptions(), value;
                while (reader.pos < end) {
                    var start = reader.pos;
                    var tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    var wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            message.java_package = reader.string();
                            continue;
                        }
                    case 8: {
                            if (wireType !== 2)
                                break;
                            message.java_outer_classname = reader.string();
                            continue;
                        }
                    case 10: {
                            if (wireType !== 0)
                                break;
                            message.java_multiple_files = reader.bool();
                            continue;
                        }
                    case 20: {
                            if (wireType !== 0)
                                break;
                            message.java_generate_equals_and_hash = reader.bool();
                            continue;
                        }
                    case 27: {
                            if (wireType !== 0)
                                break;
                            message.java_string_check_utf8 = reader.bool();
                            continue;
                        }
                    case 9: {
                            if (wireType !== 0)
                                break;
                            value = reader.int32();
                            if ($root.google.protobuf.FileOptions.OptimizeMode[value] !== $undefined)
                                message.optimize_for = value;
                            else if (!reader.discardUnknown) {
                                $util.makeProp(message, "$unknowns", false);
                                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                            }
                            continue;
                        }
                    case 11: {
                            if (wireType !== 2)
                                break;
                            message.go_package = reader.string();
                            continue;
                        }
                    case 16: {
                            if (wireType !== 0)
                                break;
                            message.cc_generic_services = reader.bool();
                            continue;
                        }
                    case 17: {
                            if (wireType !== 0)
                                break;
                            message.java_generic_services = reader.bool();
                            continue;
                        }
                    case 18: {
                            if (wireType !== 0)
                                break;
                            message.py_generic_services = reader.bool();
                            continue;
                        }
                    case 23: {
                            if (wireType !== 0)
                                break;
                            message.deprecated = reader.bool();
                            continue;
                        }
                    case 31: {
                            if (wireType !== 0)
                                break;
                            message.cc_enable_arenas = reader.bool();
                            continue;
                        }
                    case 36: {
                            if (wireType !== 2)
                                break;
                            message.objc_class_prefix = reader.string();
                            continue;
                        }
                    case 37: {
                            if (wireType !== 2)
                                break;
                            message.csharp_namespace = reader.string();
                            continue;
                        }
                    case 39: {
                            if (wireType !== 2)
                                break;
                            message.swift_prefix = reader.string();
                            continue;
                        }
                    case 40: {
                            if (wireType !== 2)
                                break;
                            message.php_class_prefix = reader.string();
                            continue;
                        }
                    case 41: {
                            if (wireType !== 2)
                                break;
                            message.php_namespace = reader.string();
                            continue;
                        }
                    case 44: {
                            if (wireType !== 2)
                                break;
                            message.php_metadata_namespace = reader.string();
                            continue;
                        }
                    case 45: {
                            if (wireType !== 2)
                                break;
                            message.ruby_package = reader.string();
                            continue;
                        }
                    case 50: {
                            if (wireType !== 2)
                                break;
                            message.features = $root.google.protobuf.FeatureSet.decode(reader, reader.uint32(), $undefined, _depth + 1, message.features);
                            continue;
                        }
                    case 999: {
                            if (wireType !== 2)
                                break;
                            if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                                message.uninterpreted_option = [];
                            message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32(), $undefined, _depth + 1));
                            continue;
                        }
                    case 1010: {
                            if (wireType !== 2)
                                break;
                            message[".nanopb_fileopt"] = $root.NanoPBOptions.decode(reader, reader.uint32(), $undefined, _depth + 1, message[".nanopb_fileopt"]);
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes a FileOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.FileOptions & google.protobuf.FileOptions.$Shape} FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileOptions.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FileOptions message.
             * @function verify
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FileOptions.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.java_package != null && $Object.hasOwnProperty.call(message, "java_package"))
                    if (!$util.isString(message.java_package))
                        return "java_package: string expected";
                if (message.java_outer_classname != null && $Object.hasOwnProperty.call(message, "java_outer_classname"))
                    if (!$util.isString(message.java_outer_classname))
                        return "java_outer_classname: string expected";
                if (message.java_multiple_files != null && $Object.hasOwnProperty.call(message, "java_multiple_files"))
                    if (typeof message.java_multiple_files !== "boolean")
                        return "java_multiple_files: boolean expected";
                if (message.java_generate_equals_and_hash != null && $Object.hasOwnProperty.call(message, "java_generate_equals_and_hash"))
                    if (typeof message.java_generate_equals_and_hash !== "boolean")
                        return "java_generate_equals_and_hash: boolean expected";
                if (message.java_string_check_utf8 != null && $Object.hasOwnProperty.call(message, "java_string_check_utf8"))
                    if (typeof message.java_string_check_utf8 !== "boolean")
                        return "java_string_check_utf8: boolean expected";
                if (message.optimize_for != null && $Object.hasOwnProperty.call(message, "optimize_for"))
                    switch (message.optimize_for) {
                    default:
                        return "optimize_for: enum value expected";
                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
                if (message.go_package != null && $Object.hasOwnProperty.call(message, "go_package"))
                    if (!$util.isString(message.go_package))
                        return "go_package: string expected";
                if (message.cc_generic_services != null && $Object.hasOwnProperty.call(message, "cc_generic_services"))
                    if (typeof message.cc_generic_services !== "boolean")
                        return "cc_generic_services: boolean expected";
                if (message.java_generic_services != null && $Object.hasOwnProperty.call(message, "java_generic_services"))
                    if (typeof message.java_generic_services !== "boolean")
                        return "java_generic_services: boolean expected";
                if (message.py_generic_services != null && $Object.hasOwnProperty.call(message, "py_generic_services"))
                    if (typeof message.py_generic_services !== "boolean")
                        return "py_generic_services: boolean expected";
                if (message.deprecated != null && $Object.hasOwnProperty.call(message, "deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.cc_enable_arenas != null && $Object.hasOwnProperty.call(message, "cc_enable_arenas"))
                    if (typeof message.cc_enable_arenas !== "boolean")
                        return "cc_enable_arenas: boolean expected";
                if (message.objc_class_prefix != null && $Object.hasOwnProperty.call(message, "objc_class_prefix"))
                    if (!$util.isString(message.objc_class_prefix))
                        return "objc_class_prefix: string expected";
                if (message.csharp_namespace != null && $Object.hasOwnProperty.call(message, "csharp_namespace"))
                    if (!$util.isString(message.csharp_namespace))
                        return "csharp_namespace: string expected";
                if (message.swift_prefix != null && $Object.hasOwnProperty.call(message, "swift_prefix"))
                    if (!$util.isString(message.swift_prefix))
                        return "swift_prefix: string expected";
                if (message.php_class_prefix != null && $Object.hasOwnProperty.call(message, "php_class_prefix"))
                    if (!$util.isString(message.php_class_prefix))
                        return "php_class_prefix: string expected";
                if (message.php_namespace != null && $Object.hasOwnProperty.call(message, "php_namespace"))
                    if (!$util.isString(message.php_namespace))
                        return "php_namespace: string expected";
                if (message.php_metadata_namespace != null && $Object.hasOwnProperty.call(message, "php_metadata_namespace"))
                    if (!$util.isString(message.php_metadata_namespace))
                        return "php_metadata_namespace: string expected";
                if (message.ruby_package != null && $Object.hasOwnProperty.call(message, "ruby_package"))
                    if (!$util.isString(message.ruby_package))
                        return "ruby_package: string expected";
                if (message.features != null && $Object.hasOwnProperty.call(message, "features")) {
                    var error = $root.google.protobuf.FeatureSet.verify(message.features, _depth + 1);
                    if (error)
                        return "features." + error;
                }
                if (message.uninterpreted_option != null && $Object.hasOwnProperty.call(message, "uninterpreted_option")) {
                    if (!$Array.isArray(message.uninterpreted_option))
                        return "uninterpreted_option: array expected";
                    for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                        var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpreted_option[i], _depth + 1);
                        if (error)
                            return "uninterpreted_option." + error;
                    }
                }
                if (message[".nanopb_fileopt"] != null && $Object.hasOwnProperty.call(message, ".nanopb_fileopt")) {
                    var error = $root.NanoPBOptions.verify(message[".nanopb_fileopt"], _depth + 1);
                    if (error)
                        return ".nanopb_fileopt." + error;
                }
                return null;
            };

            /**
             * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FileOptions} FileOptions
             */
            FileOptions.fromObject = function (object, _depth) {
                if (object instanceof $root.google.protobuf.FileOptions)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".google.protobuf.FileOptions: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var message = new $root.google.protobuf.FileOptions();
                if (object.java_package != null)
                    message.java_package = $String(object.java_package);
                if (object.java_outer_classname != null)
                    message.java_outer_classname = $String(object.java_outer_classname);
                if (object.java_multiple_files != null)
                    message.java_multiple_files = $Boolean(object.java_multiple_files);
                if (object.java_generate_equals_and_hash != null)
                    message.java_generate_equals_and_hash = $Boolean(object.java_generate_equals_and_hash);
                if (object.java_string_check_utf8 != null)
                    message.java_string_check_utf8 = $Boolean(object.java_string_check_utf8);
                switch (object.optimize_for) {
                case "SPEED":
                case 1:
                    message.optimize_for = 1;
                    break;
                case "CODE_SIZE":
                case 2:
                    message.optimize_for = 2;
                    break;
                case "LITE_RUNTIME":
                case 3:
                    message.optimize_for = 3;
                    break;
                default:
                }
                if (object.go_package != null)
                    message.go_package = $String(object.go_package);
                if (object.cc_generic_services != null)
                    message.cc_generic_services = $Boolean(object.cc_generic_services);
                if (object.java_generic_services != null)
                    message.java_generic_services = $Boolean(object.java_generic_services);
                if (object.py_generic_services != null)
                    message.py_generic_services = $Boolean(object.py_generic_services);
                if (object.deprecated != null)
                    message.deprecated = $Boolean(object.deprecated);
                if (object.cc_enable_arenas != null)
                    message.cc_enable_arenas = $Boolean(object.cc_enable_arenas);
                if (object.objc_class_prefix != null)
                    message.objc_class_prefix = $String(object.objc_class_prefix);
                if (object.csharp_namespace != null)
                    message.csharp_namespace = $String(object.csharp_namespace);
                if (object.swift_prefix != null)
                    message.swift_prefix = $String(object.swift_prefix);
                if (object.php_class_prefix != null)
                    message.php_class_prefix = $String(object.php_class_prefix);
                if (object.php_namespace != null)
                    message.php_namespace = $String(object.php_namespace);
                if (object.php_metadata_namespace != null)
                    message.php_metadata_namespace = $String(object.php_metadata_namespace);
                if (object.ruby_package != null)
                    message.ruby_package = $String(object.ruby_package);
                if (object.features != null) {
                    if (!$util.isObject(object.features))
                        throw $TypeError(".google.protobuf.FileOptions.features: object expected");
                    message.features = $root.google.protobuf.FeatureSet.fromObject(object.features, _depth + 1);
                }
                if (object.uninterpreted_option) {
                    if (!$Array.isArray(object.uninterpreted_option))
                        throw $TypeError(".google.protobuf.FileOptions.uninterpreted_option: array expected");
                    message.uninterpreted_option = $Array(object.uninterpreted_option.length);
                    for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                        if (!$util.isObject(object.uninterpreted_option[i]))
                            throw $TypeError(".google.protobuf.FileOptions.uninterpreted_option: object expected");
                        message.uninterpreted_option[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpreted_option[i], _depth + 1);
                    }
                }
                if (object[".nanopb_fileopt"] != null) {
                    if (!$util.isObject(object[".nanopb_fileopt"]))
                        throw $TypeError(".google.protobuf.FileOptions..nanopb_fileopt: object expected");
                    message[".nanopb_fileopt"] = $root.NanoPBOptions.fromObject(object[".nanopb_fileopt"], _depth + 1);
                }
                return message;
            };

            /**
             * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {google.protobuf.FileOptions} message FileOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FileOptions.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var object = {};
                if (options.arrays || options.defaults)
                    object.uninterpreted_option = [];
                if (options.defaults) {
                    object.java_package = "";
                    object.java_outer_classname = "";
                    object.optimize_for = options.enums === $String ? "SPEED" : 1;
                    object.java_multiple_files = false;
                    object.go_package = "";
                    object.cc_generic_services = false;
                    object.java_generic_services = false;
                    object.py_generic_services = false;
                    object.java_generate_equals_and_hash = false;
                    object.deprecated = false;
                    object.java_string_check_utf8 = false;
                    object.cc_enable_arenas = true;
                    object.objc_class_prefix = "";
                    object.csharp_namespace = "";
                    object.swift_prefix = "";
                    object.php_class_prefix = "";
                    object.php_namespace = "";
                    object.php_metadata_namespace = "";
                    object.ruby_package = "";
                    object.features = null;
                    object[".nanopb_fileopt"] = null;
                }
                if (message.java_package != null && $Object.hasOwnProperty.call(message, "java_package"))
                    object.java_package = message.java_package;
                if (message.java_outer_classname != null && $Object.hasOwnProperty.call(message, "java_outer_classname"))
                    object.java_outer_classname = message.java_outer_classname;
                if (message.optimize_for != null && $Object.hasOwnProperty.call(message, "optimize_for"))
                    object.optimize_for = options.enums === $String ? $root.google.protobuf.FileOptions.OptimizeMode[message.optimize_for] === $undefined ? message.optimize_for : $root.google.protobuf.FileOptions.OptimizeMode[message.optimize_for] : message.optimize_for;
                if (message.java_multiple_files != null && $Object.hasOwnProperty.call(message, "java_multiple_files"))
                    object.java_multiple_files = message.java_multiple_files;
                if (message.go_package != null && $Object.hasOwnProperty.call(message, "go_package"))
                    object.go_package = message.go_package;
                if (message.cc_generic_services != null && $Object.hasOwnProperty.call(message, "cc_generic_services"))
                    object.cc_generic_services = message.cc_generic_services;
                if (message.java_generic_services != null && $Object.hasOwnProperty.call(message, "java_generic_services"))
                    object.java_generic_services = message.java_generic_services;
                if (message.py_generic_services != null && $Object.hasOwnProperty.call(message, "py_generic_services"))
                    object.py_generic_services = message.py_generic_services;
                if (message.java_generate_equals_and_hash != null && $Object.hasOwnProperty.call(message, "java_generate_equals_and_hash"))
                    object.java_generate_equals_and_hash = message.java_generate_equals_and_hash;
                if (message.deprecated != null && $Object.hasOwnProperty.call(message, "deprecated"))
                    object.deprecated = message.deprecated;
                if (message.java_string_check_utf8 != null && $Object.hasOwnProperty.call(message, "java_string_check_utf8"))
                    object.java_string_check_utf8 = message.java_string_check_utf8;
                if (message.cc_enable_arenas != null && $Object.hasOwnProperty.call(message, "cc_enable_arenas"))
                    object.cc_enable_arenas = message.cc_enable_arenas;
                if (message.objc_class_prefix != null && $Object.hasOwnProperty.call(message, "objc_class_prefix"))
                    object.objc_class_prefix = message.objc_class_prefix;
                if (message.csharp_namespace != null && $Object.hasOwnProperty.call(message, "csharp_namespace"))
                    object.csharp_namespace = message.csharp_namespace;
                if (message.swift_prefix != null && $Object.hasOwnProperty.call(message, "swift_prefix"))
                    object.swift_prefix = message.swift_prefix;
                if (message.php_class_prefix != null && $Object.hasOwnProperty.call(message, "php_class_prefix"))
                    object.php_class_prefix = message.php_class_prefix;
                if (message.php_namespace != null && $Object.hasOwnProperty.call(message, "php_namespace"))
                    object.php_namespace = message.php_namespace;
                if (message.php_metadata_namespace != null && $Object.hasOwnProperty.call(message, "php_metadata_namespace"))
                    object.php_metadata_namespace = message.php_metadata_namespace;
                if (message.ruby_package != null && $Object.hasOwnProperty.call(message, "ruby_package"))
                    object.ruby_package = message.ruby_package;
                if (message.features != null && $Object.hasOwnProperty.call(message, "features"))
                    object.features = $root.google.protobuf.FeatureSet.toObject(message.features, options, _depth + 1);
                if (message.uninterpreted_option && message.uninterpreted_option.length) {
                    object.uninterpreted_option = $Array(message.uninterpreted_option.length);
                    for (var j = 0; j < message.uninterpreted_option.length; ++j)
                        object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options, _depth + 1);
                }
                if (message[".nanopb_fileopt"] != null && $Object.hasOwnProperty.call(message, ".nanopb_fileopt"))
                    object[".nanopb_fileopt"] = $root.NanoPBOptions.toObject(message[".nanopb_fileopt"], options, _depth + 1);
                return object;
            };

            /**
             * Converts this FileOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.FileOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FileOptions.prototype.toJSON = function() {
                return FileOptions.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for FileOptions
             * @function getTypeUrl
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            FileOptions.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/google.protobuf.FileOptions";
            };

            /**
             * OptimizeMode enum.
             * @name google.protobuf.FileOptions.OptimizeMode
             * @enum {number}
             * @property {number} SPEED=1 SPEED value
             * @property {number} CODE_SIZE=2 CODE_SIZE value
             * @property {number} LITE_RUNTIME=3 LITE_RUNTIME value
             */
            FileOptions.OptimizeMode = (function() {
                var valuesById = $Object.create(null), values = $Object.create(valuesById);
                values[valuesById[1] = "SPEED"] = 1;
                values[valuesById[2] = "CODE_SIZE"] = 2;
                values[valuesById[3] = "LITE_RUNTIME"] = 3;
                return values;
            })();

            return FileOptions;
        })();

        protobuf.MessageOptions = (function() {

            /**
             * Properties of a MessageOptions.
             * @typedef {Object} google.protobuf.MessageOptions.$Properties
             * @property {boolean|null} [message_set_wire_format] MessageOptions message_set_wire_format
             * @property {boolean|null} [no_standard_descriptor_accessor] MessageOptions no_standard_descriptor_accessor
             * @property {boolean|null} [deprecated] MessageOptions deprecated
             * @property {boolean|null} [map_entry] MessageOptions map_entry
             * @property {boolean|null} [deprecated_legacy_json_field_conflicts] MessageOptions deprecated_legacy_json_field_conflicts
             * @property {google.protobuf.FeatureSet.$Properties|null} [features] MessageOptions features
             * @property {Array.<google.protobuf.UninterpretedOption.$Properties>|null} [uninterpreted_option] MessageOptions uninterpreted_option
             * @property {NanoPBOptions.$Properties|null} [".nanopb_msgopt"] MessageOptions .nanopb_msgopt
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a MessageOptions.
             * @memberof google.protobuf
             * @interface IMessageOptions
             * @augments google.protobuf.MessageOptions.$Properties
             * @deprecated Use google.protobuf.MessageOptions.$Properties instead.
             */

            /**
             * Shape of a MessageOptions.
             * @typedef {google.protobuf.MessageOptions.$Properties} google.protobuf.MessageOptions.$Shape
             */

            /**
             * Constructs a new MessageOptions.
             * @memberof google.protobuf
             * @classdesc Represents a MessageOptions.
             * @constructor
             * @param {google.protobuf.MessageOptions.$Properties=} [properties] Properties to set
             * @property {NanoPBOptions.$Properties|null} [".nanopb_msgopt"] MessageOptions .nanopb_msgopt
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            var MessageOptions = function (properties) {
                this.uninterpreted_option = [];
                if (properties)
                    for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * MessageOptions message_set_wire_format.
             * @member {boolean} message_set_wire_format
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype.message_set_wire_format = false;

            /**
             * MessageOptions no_standard_descriptor_accessor.
             * @member {boolean} no_standard_descriptor_accessor
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype.no_standard_descriptor_accessor = false;

            /**
             * MessageOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype.deprecated = false;

            /**
             * MessageOptions map_entry.
             * @member {boolean} map_entry
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype.map_entry = false;

            /**
             * MessageOptions deprecated_legacy_json_field_conflicts.
             * @member {boolean} deprecated_legacy_json_field_conflicts
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype.deprecated_legacy_json_field_conflicts = false;

            /**
             * MessageOptions features.
             * @member {google.protobuf.FeatureSet.$Properties|null|undefined} features
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype.features = null;

            /**
             * MessageOptions uninterpreted_option.
             * @member {Array.<google.protobuf.UninterpretedOption.$Properties>} uninterpreted_option
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype.uninterpreted_option = $util.emptyArray;

            MessageOptions.prototype[".nanopb_msgopt"] = null;

            /**
             * Creates a new MessageOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {google.protobuf.MessageOptions.$Properties=} [properties] Properties to set
             * @returns {google.protobuf.MessageOptions} MessageOptions instance
             * @type {{
             *   (properties: google.protobuf.MessageOptions.$Shape): google.protobuf.MessageOptions & google.protobuf.MessageOptions.$Shape;
             *   (properties?: google.protobuf.MessageOptions.$Properties): google.protobuf.MessageOptions;
             * }}
             */
            MessageOptions.create = function(properties) {
                return new MessageOptions(properties);
            };

            /**
             * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {google.protobuf.MessageOptions.$Properties} message MessageOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageOptions.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.message_set_wire_format != null && $Object.hasOwnProperty.call(message, "message_set_wire_format"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.message_set_wire_format);
                if (message.no_standard_descriptor_accessor != null && $Object.hasOwnProperty.call(message, "no_standard_descriptor_accessor"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.no_standard_descriptor_accessor);
                if (message.deprecated != null && $Object.hasOwnProperty.call(message, "deprecated"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                if (message.map_entry != null && $Object.hasOwnProperty.call(message, "map_entry"))
                    writer.uint32(/* id 7, wireType 0 =*/56).bool(message.map_entry);
                if (message.deprecated_legacy_json_field_conflicts != null && $Object.hasOwnProperty.call(message, "deprecated_legacy_json_field_conflicts"))
                    writer.uint32(/* id 11, wireType 0 =*/88).bool(message.deprecated_legacy_json_field_conflicts);
                if (message.features != null && $Object.hasOwnProperty.call(message, "features"))
                    $root.google.protobuf.FeatureSet.encode(message.features, writer.uint32(/* id 12, wireType 2 =*/98).fork(), _depth + 1).ldelim();
                if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                    for (var i = 0; i < message.uninterpreted_option.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork(), _depth + 1).ldelim();
                if (message[".nanopb_msgopt"] != null && $Object.hasOwnProperty.call(message, ".nanopb_msgopt"))
                    $root.NanoPBOptions.encode(message[".nanopb_msgopt"], writer.uint32(/* id 1010, wireType 2 =*/8082).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (var i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {google.protobuf.MessageOptions.$Properties} message MessageOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageOptions.encodeDelimited = function(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a MessageOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.MessageOptions & google.protobuf.MessageOptions.$Shape} MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageOptions.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.google.protobuf.MessageOptions();
                while (reader.pos < end) {
                    var start = reader.pos;
                    var tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    var wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 0)
                                break;
                            message.message_set_wire_format = reader.bool();
                            continue;
                        }
                    case 2: {
                            if (wireType !== 0)
                                break;
                            message.no_standard_descriptor_accessor = reader.bool();
                            continue;
                        }
                    case 3: {
                            if (wireType !== 0)
                                break;
                            message.deprecated = reader.bool();
                            continue;
                        }
                    case 7: {
                            if (wireType !== 0)
                                break;
                            message.map_entry = reader.bool();
                            continue;
                        }
                    case 11: {
                            if (wireType !== 0)
                                break;
                            message.deprecated_legacy_json_field_conflicts = reader.bool();
                            continue;
                        }
                    case 12: {
                            if (wireType !== 2)
                                break;
                            message.features = $root.google.protobuf.FeatureSet.decode(reader, reader.uint32(), $undefined, _depth + 1, message.features);
                            continue;
                        }
                    case 999: {
                            if (wireType !== 2)
                                break;
                            if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                                message.uninterpreted_option = [];
                            message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32(), $undefined, _depth + 1));
                            continue;
                        }
                    case 1010: {
                            if (wireType !== 2)
                                break;
                            message[".nanopb_msgopt"] = $root.NanoPBOptions.decode(reader, reader.uint32(), $undefined, _depth + 1, message[".nanopb_msgopt"]);
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.MessageOptions & google.protobuf.MessageOptions.$Shape} MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageOptions.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageOptions message.
             * @function verify
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageOptions.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.message_set_wire_format != null && $Object.hasOwnProperty.call(message, "message_set_wire_format"))
                    if (typeof message.message_set_wire_format !== "boolean")
                        return "message_set_wire_format: boolean expected";
                if (message.no_standard_descriptor_accessor != null && $Object.hasOwnProperty.call(message, "no_standard_descriptor_accessor"))
                    if (typeof message.no_standard_descriptor_accessor !== "boolean")
                        return "no_standard_descriptor_accessor: boolean expected";
                if (message.deprecated != null && $Object.hasOwnProperty.call(message, "deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.map_entry != null && $Object.hasOwnProperty.call(message, "map_entry"))
                    if (typeof message.map_entry !== "boolean")
                        return "map_entry: boolean expected";
                if (message.deprecated_legacy_json_field_conflicts != null && $Object.hasOwnProperty.call(message, "deprecated_legacy_json_field_conflicts"))
                    if (typeof message.deprecated_legacy_json_field_conflicts !== "boolean")
                        return "deprecated_legacy_json_field_conflicts: boolean expected";
                if (message.features != null && $Object.hasOwnProperty.call(message, "features")) {
                    var error = $root.google.protobuf.FeatureSet.verify(message.features, _depth + 1);
                    if (error)
                        return "features." + error;
                }
                if (message.uninterpreted_option != null && $Object.hasOwnProperty.call(message, "uninterpreted_option")) {
                    if (!$Array.isArray(message.uninterpreted_option))
                        return "uninterpreted_option: array expected";
                    for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                        var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpreted_option[i], _depth + 1);
                        if (error)
                            return "uninterpreted_option." + error;
                    }
                }
                if (message[".nanopb_msgopt"] != null && $Object.hasOwnProperty.call(message, ".nanopb_msgopt")) {
                    var error = $root.NanoPBOptions.verify(message[".nanopb_msgopt"], _depth + 1);
                    if (error)
                        return ".nanopb_msgopt." + error;
                }
                return null;
            };

            /**
             * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.MessageOptions} MessageOptions
             */
            MessageOptions.fromObject = function (object, _depth) {
                if (object instanceof $root.google.protobuf.MessageOptions)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".google.protobuf.MessageOptions: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var message = new $root.google.protobuf.MessageOptions();
                if (object.message_set_wire_format != null)
                    message.message_set_wire_format = $Boolean(object.message_set_wire_format);
                if (object.no_standard_descriptor_accessor != null)
                    message.no_standard_descriptor_accessor = $Boolean(object.no_standard_descriptor_accessor);
                if (object.deprecated != null)
                    message.deprecated = $Boolean(object.deprecated);
                if (object.map_entry != null)
                    message.map_entry = $Boolean(object.map_entry);
                if (object.deprecated_legacy_json_field_conflicts != null)
                    message.deprecated_legacy_json_field_conflicts = $Boolean(object.deprecated_legacy_json_field_conflicts);
                if (object.features != null) {
                    if (!$util.isObject(object.features))
                        throw $TypeError(".google.protobuf.MessageOptions.features: object expected");
                    message.features = $root.google.protobuf.FeatureSet.fromObject(object.features, _depth + 1);
                }
                if (object.uninterpreted_option) {
                    if (!$Array.isArray(object.uninterpreted_option))
                        throw $TypeError(".google.protobuf.MessageOptions.uninterpreted_option: array expected");
                    message.uninterpreted_option = $Array(object.uninterpreted_option.length);
                    for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                        if (!$util.isObject(object.uninterpreted_option[i]))
                            throw $TypeError(".google.protobuf.MessageOptions.uninterpreted_option: object expected");
                        message.uninterpreted_option[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpreted_option[i], _depth + 1);
                    }
                }
                if (object[".nanopb_msgopt"] != null) {
                    if (!$util.isObject(object[".nanopb_msgopt"]))
                        throw $TypeError(".google.protobuf.MessageOptions..nanopb_msgopt: object expected");
                    message[".nanopb_msgopt"] = $root.NanoPBOptions.fromObject(object[".nanopb_msgopt"], _depth + 1);
                }
                return message;
            };

            /**
             * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {google.protobuf.MessageOptions} message MessageOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageOptions.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var object = {};
                if (options.arrays || options.defaults)
                    object.uninterpreted_option = [];
                if (options.defaults) {
                    object.message_set_wire_format = false;
                    object.no_standard_descriptor_accessor = false;
                    object.deprecated = false;
                    object.map_entry = false;
                    object.deprecated_legacy_json_field_conflicts = false;
                    object.features = null;
                    object[".nanopb_msgopt"] = null;
                }
                if (message.message_set_wire_format != null && $Object.hasOwnProperty.call(message, "message_set_wire_format"))
                    object.message_set_wire_format = message.message_set_wire_format;
                if (message.no_standard_descriptor_accessor != null && $Object.hasOwnProperty.call(message, "no_standard_descriptor_accessor"))
                    object.no_standard_descriptor_accessor = message.no_standard_descriptor_accessor;
                if (message.deprecated != null && $Object.hasOwnProperty.call(message, "deprecated"))
                    object.deprecated = message.deprecated;
                if (message.map_entry != null && $Object.hasOwnProperty.call(message, "map_entry"))
                    object.map_entry = message.map_entry;
                if (message.deprecated_legacy_json_field_conflicts != null && $Object.hasOwnProperty.call(message, "deprecated_legacy_json_field_conflicts"))
                    object.deprecated_legacy_json_field_conflicts = message.deprecated_legacy_json_field_conflicts;
                if (message.features != null && $Object.hasOwnProperty.call(message, "features"))
                    object.features = $root.google.protobuf.FeatureSet.toObject(message.features, options, _depth + 1);
                if (message.uninterpreted_option && message.uninterpreted_option.length) {
                    object.uninterpreted_option = $Array(message.uninterpreted_option.length);
                    for (var j = 0; j < message.uninterpreted_option.length; ++j)
                        object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options, _depth + 1);
                }
                if (message[".nanopb_msgopt"] != null && $Object.hasOwnProperty.call(message, ".nanopb_msgopt"))
                    object[".nanopb_msgopt"] = $root.NanoPBOptions.toObject(message[".nanopb_msgopt"], options, _depth + 1);
                return object;
            };

            /**
             * Converts this MessageOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.MessageOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageOptions.prototype.toJSON = function() {
                return MessageOptions.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for MessageOptions
             * @function getTypeUrl
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            MessageOptions.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/google.protobuf.MessageOptions";
            };

            return MessageOptions;
        })();

        protobuf.FieldOptions = (function() {

            /**
             * Properties of a FieldOptions.
             * @typedef {Object} google.protobuf.FieldOptions.$Properties
             * @property {google.protobuf.FieldOptions.CType|null} [ctype] FieldOptions ctype
             * @property {boolean|null} [packed] FieldOptions packed
             * @property {google.protobuf.FieldOptions.JSType|null} [jstype] FieldOptions jstype
             * @property {boolean|null} [lazy] FieldOptions lazy
             * @property {boolean|null} [unverified_lazy] FieldOptions unverified_lazy
             * @property {boolean|null} [deprecated] FieldOptions deprecated
             * @property {boolean|null} [weak] FieldOptions weak
             * @property {boolean|null} [debug_redact] FieldOptions debug_redact
             * @property {google.protobuf.FieldOptions.OptionRetention|null} [retention] FieldOptions retention
             * @property {Array.<google.protobuf.FieldOptions.OptionTargetType>|null} [targets] FieldOptions targets
             * @property {Array.<google.protobuf.FieldOptions.EditionDefault.$Properties>|null} [edition_defaults] FieldOptions edition_defaults
             * @property {google.protobuf.FeatureSet.$Properties|null} [features] FieldOptions features
             * @property {google.protobuf.FieldOptions.FeatureSupport.$Properties|null} [feature_support] FieldOptions feature_support
             * @property {Array.<google.protobuf.UninterpretedOption.$Properties>|null} [uninterpreted_option] FieldOptions uninterpreted_option
             * @property {NanoPBOptions.$Properties|null} [".nanopb"] FieldOptions .nanopb
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a FieldOptions.
             * @memberof google.protobuf
             * @interface IFieldOptions
             * @augments google.protobuf.FieldOptions.$Properties
             * @deprecated Use google.protobuf.FieldOptions.$Properties instead.
             */

            /**
             * Shape of a FieldOptions.
             * @typedef {google.protobuf.FieldOptions.$Properties} google.protobuf.FieldOptions.$Shape
             */

            /**
             * Constructs a new FieldOptions.
             * @memberof google.protobuf
             * @classdesc Represents a FieldOptions.
             * @constructor
             * @param {google.protobuf.FieldOptions.$Properties=} [properties] Properties to set
             * @property {NanoPBOptions.$Properties|null} [".nanopb"] FieldOptions .nanopb
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            var FieldOptions = function (properties) {
                this.targets = [];
                this.edition_defaults = [];
                this.uninterpreted_option = [];
                if (properties)
                    for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * FieldOptions ctype.
             * @member {google.protobuf.FieldOptions.CType} ctype
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.ctype = 0;

            /**
             * FieldOptions packed.
             * @member {boolean} packed
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.packed = false;

            /**
             * FieldOptions jstype.
             * @member {google.protobuf.FieldOptions.JSType} jstype
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.jstype = 0;

            /**
             * FieldOptions lazy.
             * @member {boolean} lazy
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.lazy = false;

            /**
             * FieldOptions unverified_lazy.
             * @member {boolean} unverified_lazy
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.unverified_lazy = false;

            /**
             * FieldOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.deprecated = false;

            /**
             * FieldOptions weak.
             * @member {boolean} weak
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.weak = false;

            /**
             * FieldOptions debug_redact.
             * @member {boolean} debug_redact
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.debug_redact = false;

            /**
             * FieldOptions retention.
             * @member {google.protobuf.FieldOptions.OptionRetention} retention
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.retention = 0;

            /**
             * FieldOptions targets.
             * @member {Array.<google.protobuf.FieldOptions.OptionTargetType>} targets
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.targets = $util.emptyArray;

            /**
             * FieldOptions edition_defaults.
             * @member {Array.<google.protobuf.FieldOptions.EditionDefault.$Properties>} edition_defaults
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.edition_defaults = $util.emptyArray;

            /**
             * FieldOptions features.
             * @member {google.protobuf.FeatureSet.$Properties|null|undefined} features
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.features = null;

            /**
             * FieldOptions feature_support.
             * @member {google.protobuf.FieldOptions.FeatureSupport.$Properties|null|undefined} feature_support
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.feature_support = null;

            /**
             * FieldOptions uninterpreted_option.
             * @member {Array.<google.protobuf.UninterpretedOption.$Properties>} uninterpreted_option
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.uninterpreted_option = $util.emptyArray;

            FieldOptions.prototype[".nanopb"] = null;

            /**
             * Creates a new FieldOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {google.protobuf.FieldOptions.$Properties=} [properties] Properties to set
             * @returns {google.protobuf.FieldOptions} FieldOptions instance
             * @type {{
             *   (properties: google.protobuf.FieldOptions.$Shape): google.protobuf.FieldOptions & google.protobuf.FieldOptions.$Shape;
             *   (properties?: google.protobuf.FieldOptions.$Properties): google.protobuf.FieldOptions;
             * }}
             */
            FieldOptions.create = function(properties) {
                return new FieldOptions(properties);
            };

            /**
             * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {google.protobuf.FieldOptions.$Properties} message FieldOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FieldOptions.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.ctype != null && $Object.hasOwnProperty.call(message, "ctype"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ctype);
                if (message.packed != null && $Object.hasOwnProperty.call(message, "packed"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.packed);
                if (message.deprecated != null && $Object.hasOwnProperty.call(message, "deprecated"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                if (message.lazy != null && $Object.hasOwnProperty.call(message, "lazy"))
                    writer.uint32(/* id 5, wireType 0 =*/40).bool(message.lazy);
                if (message.jstype != null && $Object.hasOwnProperty.call(message, "jstype"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.jstype);
                if (message.weak != null && $Object.hasOwnProperty.call(message, "weak"))
                    writer.uint32(/* id 10, wireType 0 =*/80).bool(message.weak);
                if (message.unverified_lazy != null && $Object.hasOwnProperty.call(message, "unverified_lazy"))
                    writer.uint32(/* id 15, wireType 0 =*/120).bool(message.unverified_lazy);
                if (message.debug_redact != null && $Object.hasOwnProperty.call(message, "debug_redact"))
                    writer.uint32(/* id 16, wireType 0 =*/128).bool(message.debug_redact);
                if (message.retention != null && $Object.hasOwnProperty.call(message, "retention"))
                    writer.uint32(/* id 17, wireType 0 =*/136).int32(message.retention);
                if (message.targets != null && message.targets.length)
                    for (var i = 0; i < message.targets.length; ++i)
                        writer.uint32(/* id 19, wireType 0 =*/152).int32(message.targets[i]);
                if (message.edition_defaults != null && message.edition_defaults.length)
                    for (var i = 0; i < message.edition_defaults.length; ++i)
                        $root.google.protobuf.FieldOptions.EditionDefault.encode(message.edition_defaults[i], writer.uint32(/* id 20, wireType 2 =*/162).fork(), _depth + 1).ldelim();
                if (message.features != null && $Object.hasOwnProperty.call(message, "features"))
                    $root.google.protobuf.FeatureSet.encode(message.features, writer.uint32(/* id 21, wireType 2 =*/170).fork(), _depth + 1).ldelim();
                if (message.feature_support != null && $Object.hasOwnProperty.call(message, "feature_support"))
                    $root.google.protobuf.FieldOptions.FeatureSupport.encode(message.feature_support, writer.uint32(/* id 22, wireType 2 =*/178).fork(), _depth + 1).ldelim();
                if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                    for (var i = 0; i < message.uninterpreted_option.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork(), _depth + 1).ldelim();
                if (message[".nanopb"] != null && $Object.hasOwnProperty.call(message, ".nanopb"))
                    $root.NanoPBOptions.encode(message[".nanopb"], writer.uint32(/* id 1010, wireType 2 =*/8082).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (var i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {google.protobuf.FieldOptions.$Properties} message FieldOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FieldOptions.encodeDelimited = function(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a FieldOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FieldOptions & google.protobuf.FieldOptions.$Shape} FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FieldOptions.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.google.protobuf.FieldOptions(), value;
                while (reader.pos < end) {
                    var start = reader.pos;
                    var tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    var wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 0)
                                break;
                            value = reader.int32();
                            if ($root.google.protobuf.FieldOptions.CType[value] !== $undefined)
                                message.ctype = value;
                            else if (!reader.discardUnknown) {
                                $util.makeProp(message, "$unknowns", false);
                                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                            }
                            continue;
                        }
                    case 2: {
                            if (wireType !== 0)
                                break;
                            message.packed = reader.bool();
                            continue;
                        }
                    case 6: {
                            if (wireType !== 0)
                                break;
                            value = reader.int32();
                            if ($root.google.protobuf.FieldOptions.JSType[value] !== $undefined)
                                message.jstype = value;
                            else if (!reader.discardUnknown) {
                                $util.makeProp(message, "$unknowns", false);
                                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                            }
                            continue;
                        }
                    case 5: {
                            if (wireType !== 0)
                                break;
                            message.lazy = reader.bool();
                            continue;
                        }
                    case 15: {
                            if (wireType !== 0)
                                break;
                            message.unverified_lazy = reader.bool();
                            continue;
                        }
                    case 3: {
                            if (wireType !== 0)
                                break;
                            message.deprecated = reader.bool();
                            continue;
                        }
                    case 10: {
                            if (wireType !== 0)
                                break;
                            message.weak = reader.bool();
                            continue;
                        }
                    case 16: {
                            if (wireType !== 0)
                                break;
                            message.debug_redact = reader.bool();
                            continue;
                        }
                    case 17: {
                            if (wireType !== 0)
                                break;
                            value = reader.int32();
                            if ($root.google.protobuf.FieldOptions.OptionRetention[value] !== $undefined)
                                message.retention = value;
                            else if (!reader.discardUnknown) {
                                $util.makeProp(message, "$unknowns", false);
                                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                            }
                            continue;
                        }
                    case 19: {
                            if (wireType === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2) {
                                    start = reader.pos;
                                    value = reader.int32();
                                    if ($root.google.protobuf.FieldOptions.OptionTargetType[value] !== $undefined) {
                                        if (!(message.targets && message.targets.length))
                                            message.targets = [];
                                        message.targets.push(value);
                                    } else if (!reader.discardUnknown) {
                                        $util.makeProp(message, "$unknowns", false);
                                        (message.$unknowns || (message.$unknowns = [])).push($util.rawField(19, 0, reader.raw(start, reader.pos)));
                                    }
                                }
                                continue;
                            }
                            if (wireType !== 0)
                                break;
                            value = reader.int32();
                            if ($root.google.protobuf.FieldOptions.OptionTargetType[value] !== $undefined) {
                                if (!(message.targets && message.targets.length))
                                    message.targets = [];
                                message.targets.push(value);
                            } else if (!reader.discardUnknown) {
                                $util.makeProp(message, "$unknowns", false);
                                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                            }
                            continue;
                        }
                    case 20: {
                            if (wireType !== 2)
                                break;
                            if (!(message.edition_defaults && message.edition_defaults.length))
                                message.edition_defaults = [];
                            message.edition_defaults.push($root.google.protobuf.FieldOptions.EditionDefault.decode(reader, reader.uint32(), $undefined, _depth + 1));
                            continue;
                        }
                    case 21: {
                            if (wireType !== 2)
                                break;
                            message.features = $root.google.protobuf.FeatureSet.decode(reader, reader.uint32(), $undefined, _depth + 1, message.features);
                            continue;
                        }
                    case 22: {
                            if (wireType !== 2)
                                break;
                            message.feature_support = $root.google.protobuf.FieldOptions.FeatureSupport.decode(reader, reader.uint32(), $undefined, _depth + 1, message.feature_support);
                            continue;
                        }
                    case 999: {
                            if (wireType !== 2)
                                break;
                            if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                                message.uninterpreted_option = [];
                            message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32(), $undefined, _depth + 1));
                            continue;
                        }
                    case 1010: {
                            if (wireType !== 2)
                                break;
                            message[".nanopb"] = $root.NanoPBOptions.decode(reader, reader.uint32(), $undefined, _depth + 1, message[".nanopb"]);
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.FieldOptions & google.protobuf.FieldOptions.$Shape} FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FieldOptions.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FieldOptions message.
             * @function verify
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FieldOptions.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.ctype != null && $Object.hasOwnProperty.call(message, "ctype"))
                    switch (message.ctype) {
                    default:
                        return "ctype: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.packed != null && $Object.hasOwnProperty.call(message, "packed"))
                    if (typeof message.packed !== "boolean")
                        return "packed: boolean expected";
                if (message.jstype != null && $Object.hasOwnProperty.call(message, "jstype"))
                    switch (message.jstype) {
                    default:
                        return "jstype: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.lazy != null && $Object.hasOwnProperty.call(message, "lazy"))
                    if (typeof message.lazy !== "boolean")
                        return "lazy: boolean expected";
                if (message.unverified_lazy != null && $Object.hasOwnProperty.call(message, "unverified_lazy"))
                    if (typeof message.unverified_lazy !== "boolean")
                        return "unverified_lazy: boolean expected";
                if (message.deprecated != null && $Object.hasOwnProperty.call(message, "deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.weak != null && $Object.hasOwnProperty.call(message, "weak"))
                    if (typeof message.weak !== "boolean")
                        return "weak: boolean expected";
                if (message.debug_redact != null && $Object.hasOwnProperty.call(message, "debug_redact"))
                    if (typeof message.debug_redact !== "boolean")
                        return "debug_redact: boolean expected";
                if (message.retention != null && $Object.hasOwnProperty.call(message, "retention"))
                    switch (message.retention) {
                    default:
                        return "retention: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.targets != null && $Object.hasOwnProperty.call(message, "targets")) {
                    if (!$Array.isArray(message.targets))
                        return "targets: array expected";
                    for (var i = 0; i < message.targets.length; ++i)
                        switch (message.targets[i]) {
                        default:
                            return "targets: enum value[] expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                        case 7:
                        case 8:
                        case 9:
                            break;
                        }
                }
                if (message.edition_defaults != null && $Object.hasOwnProperty.call(message, "edition_defaults")) {
                    if (!$Array.isArray(message.edition_defaults))
                        return "edition_defaults: array expected";
                    for (var i = 0; i < message.edition_defaults.length; ++i) {
                        var error = $root.google.protobuf.FieldOptions.EditionDefault.verify(message.edition_defaults[i], _depth + 1);
                        if (error)
                            return "edition_defaults." + error;
                    }
                }
                if (message.features != null && $Object.hasOwnProperty.call(message, "features")) {
                    var error = $root.google.protobuf.FeatureSet.verify(message.features, _depth + 1);
                    if (error)
                        return "features." + error;
                }
                if (message.feature_support != null && $Object.hasOwnProperty.call(message, "feature_support")) {
                    var error = $root.google.protobuf.FieldOptions.FeatureSupport.verify(message.feature_support, _depth + 1);
                    if (error)
                        return "feature_support." + error;
                }
                if (message.uninterpreted_option != null && $Object.hasOwnProperty.call(message, "uninterpreted_option")) {
                    if (!$Array.isArray(message.uninterpreted_option))
                        return "uninterpreted_option: array expected";
                    for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                        var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpreted_option[i], _depth + 1);
                        if (error)
                            return "uninterpreted_option." + error;
                    }
                }
                if (message[".nanopb"] != null && $Object.hasOwnProperty.call(message, ".nanopb")) {
                    var error = $root.NanoPBOptions.verify(message[".nanopb"], _depth + 1);
                    if (error)
                        return ".nanopb." + error;
                }
                return null;
            };

            /**
             * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FieldOptions} FieldOptions
             */
            FieldOptions.fromObject = function (object, _depth) {
                if (object instanceof $root.google.protobuf.FieldOptions)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".google.protobuf.FieldOptions: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var message = new $root.google.protobuf.FieldOptions();
                switch (object.ctype) {
                case "STRING":
                case 0:
                    message.ctype = 0;
                    break;
                case "CORD":
                case 1:
                    message.ctype = 1;
                    break;
                case "STRING_PIECE":
                case 2:
                    message.ctype = 2;
                    break;
                default:
                }
                if (object.packed != null)
                    message.packed = $Boolean(object.packed);
                switch (object.jstype) {
                case "JS_NORMAL":
                case 0:
                    message.jstype = 0;
                    break;
                case "JS_STRING":
                case 1:
                    message.jstype = 1;
                    break;
                case "JS_NUMBER":
                case 2:
                    message.jstype = 2;
                    break;
                default:
                }
                if (object.lazy != null)
                    message.lazy = $Boolean(object.lazy);
                if (object.unverified_lazy != null)
                    message.unverified_lazy = $Boolean(object.unverified_lazy);
                if (object.deprecated != null)
                    message.deprecated = $Boolean(object.deprecated);
                if (object.weak != null)
                    message.weak = $Boolean(object.weak);
                if (object.debug_redact != null)
                    message.debug_redact = $Boolean(object.debug_redact);
                switch (object.retention) {
                case "RETENTION_UNKNOWN":
                case 0:
                    message.retention = 0;
                    break;
                case "RETENTION_RUNTIME":
                case 1:
                    message.retention = 1;
                    break;
                case "RETENTION_SOURCE":
                case 2:
                    message.retention = 2;
                    break;
                default:
                }
                if (object.targets) {
                    if (!$Array.isArray(object.targets))
                        throw $TypeError(".google.protobuf.FieldOptions.targets: array expected");
                    message.targets = [];
                    for (var i = 0; i < object.targets.length; ++i)
                        switch (object.targets[i]) {
                        case "TARGET_TYPE_UNKNOWN":
                        case 0:
                            message.targets[message.targets.length] = 0;
                            break;
                        case "TARGET_TYPE_FILE":
                        case 1:
                            message.targets[message.targets.length] = 1;
                            break;
                        case "TARGET_TYPE_EXTENSION_RANGE":
                        case 2:
                            message.targets[message.targets.length] = 2;
                            break;
                        case "TARGET_TYPE_MESSAGE":
                        case 3:
                            message.targets[message.targets.length] = 3;
                            break;
                        case "TARGET_TYPE_FIELD":
                        case 4:
                            message.targets[message.targets.length] = 4;
                            break;
                        case "TARGET_TYPE_ONEOF":
                        case 5:
                            message.targets[message.targets.length] = 5;
                            break;
                        case "TARGET_TYPE_ENUM":
                        case 6:
                            message.targets[message.targets.length] = 6;
                            break;
                        case "TARGET_TYPE_ENUM_ENTRY":
                        case 7:
                            message.targets[message.targets.length] = 7;
                            break;
                        case "TARGET_TYPE_SERVICE":
                        case 8:
                            message.targets[message.targets.length] = 8;
                            break;
                        case "TARGET_TYPE_METHOD":
                        case 9:
                            message.targets[message.targets.length] = 9;
                            break;
                        default:
                        }
                }
                if (object.edition_defaults) {
                    if (!$Array.isArray(object.edition_defaults))
                        throw $TypeError(".google.protobuf.FieldOptions.edition_defaults: array expected");
                    message.edition_defaults = $Array(object.edition_defaults.length);
                    for (var i = 0; i < object.edition_defaults.length; ++i) {
                        if (!$util.isObject(object.edition_defaults[i]))
                            throw $TypeError(".google.protobuf.FieldOptions.edition_defaults: object expected");
                        message.edition_defaults[i] = $root.google.protobuf.FieldOptions.EditionDefault.fromObject(object.edition_defaults[i], _depth + 1);
                    }
                }
                if (object.features != null) {
                    if (!$util.isObject(object.features))
                        throw $TypeError(".google.protobuf.FieldOptions.features: object expected");
                    message.features = $root.google.protobuf.FeatureSet.fromObject(object.features, _depth + 1);
                }
                if (object.feature_support != null) {
                    if (!$util.isObject(object.feature_support))
                        throw $TypeError(".google.protobuf.FieldOptions.feature_support: object expected");
                    message.feature_support = $root.google.protobuf.FieldOptions.FeatureSupport.fromObject(object.feature_support, _depth + 1);
                }
                if (object.uninterpreted_option) {
                    if (!$Array.isArray(object.uninterpreted_option))
                        throw $TypeError(".google.protobuf.FieldOptions.uninterpreted_option: array expected");
                    message.uninterpreted_option = $Array(object.uninterpreted_option.length);
                    for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                        if (!$util.isObject(object.uninterpreted_option[i]))
                            throw $TypeError(".google.protobuf.FieldOptions.uninterpreted_option: object expected");
                        message.uninterpreted_option[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpreted_option[i], _depth + 1);
                    }
                }
                if (object[".nanopb"] != null) {
                    if (!$util.isObject(object[".nanopb"]))
                        throw $TypeError(".google.protobuf.FieldOptions..nanopb: object expected");
                    message[".nanopb"] = $root.NanoPBOptions.fromObject(object[".nanopb"], _depth + 1);
                }
                return message;
            };

            /**
             * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {google.protobuf.FieldOptions} message FieldOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FieldOptions.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var object = {};
                if (options.arrays || options.defaults) {
                    object.targets = [];
                    object.edition_defaults = [];
                    object.uninterpreted_option = [];
                }
                if (options.defaults) {
                    object.ctype = options.enums === $String ? "STRING" : 0;
                    object.packed = false;
                    object.deprecated = false;
                    object.lazy = false;
                    object.jstype = options.enums === $String ? "JS_NORMAL" : 0;
                    object.weak = false;
                    object.unverified_lazy = false;
                    object.debug_redact = false;
                    object.retention = options.enums === $String ? "RETENTION_UNKNOWN" : 0;
                    object.features = null;
                    object.feature_support = null;
                    object[".nanopb"] = null;
                }
                if (message.ctype != null && $Object.hasOwnProperty.call(message, "ctype"))
                    object.ctype = options.enums === $String ? $root.google.protobuf.FieldOptions.CType[message.ctype] === $undefined ? message.ctype : $root.google.protobuf.FieldOptions.CType[message.ctype] : message.ctype;
                if (message.packed != null && $Object.hasOwnProperty.call(message, "packed"))
                    object.packed = message.packed;
                if (message.deprecated != null && $Object.hasOwnProperty.call(message, "deprecated"))
                    object.deprecated = message.deprecated;
                if (message.lazy != null && $Object.hasOwnProperty.call(message, "lazy"))
                    object.lazy = message.lazy;
                if (message.jstype != null && $Object.hasOwnProperty.call(message, "jstype"))
                    object.jstype = options.enums === $String ? $root.google.protobuf.FieldOptions.JSType[message.jstype] === $undefined ? message.jstype : $root.google.protobuf.FieldOptions.JSType[message.jstype] : message.jstype;
                if (message.weak != null && $Object.hasOwnProperty.call(message, "weak"))
                    object.weak = message.weak;
                if (message.unverified_lazy != null && $Object.hasOwnProperty.call(message, "unverified_lazy"))
                    object.unverified_lazy = message.unverified_lazy;
                if (message.debug_redact != null && $Object.hasOwnProperty.call(message, "debug_redact"))
                    object.debug_redact = message.debug_redact;
                if (message.retention != null && $Object.hasOwnProperty.call(message, "retention"))
                    object.retention = options.enums === $String ? $root.google.protobuf.FieldOptions.OptionRetention[message.retention] === $undefined ? message.retention : $root.google.protobuf.FieldOptions.OptionRetention[message.retention] : message.retention;
                if (message.targets && message.targets.length) {
                    object.targets = $Array(message.targets.length);
                    for (var j = 0; j < message.targets.length; ++j)
                        object.targets[j] = options.enums === $String ? $root.google.protobuf.FieldOptions.OptionTargetType[message.targets[j]] === $undefined ? message.targets[j] : $root.google.protobuf.FieldOptions.OptionTargetType[message.targets[j]] : message.targets[j];
                }
                if (message.edition_defaults && message.edition_defaults.length) {
                    object.edition_defaults = $Array(message.edition_defaults.length);
                    for (var j = 0; j < message.edition_defaults.length; ++j)
                        object.edition_defaults[j] = $root.google.protobuf.FieldOptions.EditionDefault.toObject(message.edition_defaults[j], options, _depth + 1);
                }
                if (message.features != null && $Object.hasOwnProperty.call(message, "features"))
                    object.features = $root.google.protobuf.FeatureSet.toObject(message.features, options, _depth + 1);
                if (message.feature_support != null && $Object.hasOwnProperty.call(message, "feature_support"))
                    object.feature_support = $root.google.protobuf.FieldOptions.FeatureSupport.toObject(message.feature_support, options, _depth + 1);
                if (message.uninterpreted_option && message.uninterpreted_option.length) {
                    object.uninterpreted_option = $Array(message.uninterpreted_option.length);
                    for (var j = 0; j < message.uninterpreted_option.length; ++j)
                        object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options, _depth + 1);
                }
                if (message[".nanopb"] != null && $Object.hasOwnProperty.call(message, ".nanopb"))
                    object[".nanopb"] = $root.NanoPBOptions.toObject(message[".nanopb"], options, _depth + 1);
                return object;
            };

            /**
             * Converts this FieldOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.FieldOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FieldOptions.prototype.toJSON = function() {
                return FieldOptions.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for FieldOptions
             * @function getTypeUrl
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            FieldOptions.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/google.protobuf.FieldOptions";
            };

            /**
             * CType enum.
             * @name google.protobuf.FieldOptions.CType
             * @enum {number}
             * @property {number} STRING=0 STRING value
             * @property {number} CORD=1 CORD value
             * @property {number} STRING_PIECE=2 STRING_PIECE value
             */
            FieldOptions.CType = (function() {
                var valuesById = $Object.create(null), values = $Object.create(valuesById);
                values[valuesById[0] = "STRING"] = 0;
                values[valuesById[1] = "CORD"] = 1;
                values[valuesById[2] = "STRING_PIECE"] = 2;
                return values;
            })();

            /**
             * JSType enum.
             * @name google.protobuf.FieldOptions.JSType
             * @enum {number}
             * @property {number} JS_NORMAL=0 JS_NORMAL value
             * @property {number} JS_STRING=1 JS_STRING value
             * @property {number} JS_NUMBER=2 JS_NUMBER value
             */
            FieldOptions.JSType = (function() {
                var valuesById = $Object.create(null), values = $Object.create(valuesById);
                values[valuesById[0] = "JS_NORMAL"] = 0;
                values[valuesById[1] = "JS_STRING"] = 1;
                values[valuesById[2] = "JS_NUMBER"] = 2;
                return values;
            })();

            /**
             * OptionRetention enum.
             * @name google.protobuf.FieldOptions.OptionRetention
             * @enum {number}
             * @property {number} RETENTION_UNKNOWN=0 RETENTION_UNKNOWN value
             * @property {number} RETENTION_RUNTIME=1 RETENTION_RUNTIME value
             * @property {number} RETENTION_SOURCE=2 RETENTION_SOURCE value
             */
            FieldOptions.OptionRetention = (function() {
                var valuesById = $Object.create(null), values = $Object.create(valuesById);
                values[valuesById[0] = "RETENTION_UNKNOWN"] = 0;
                values[valuesById[1] = "RETENTION_RUNTIME"] = 1;
                values[valuesById[2] = "RETENTION_SOURCE"] = 2;
                return values;
            })();

            /**
             * OptionTargetType enum.
             * @name google.protobuf.FieldOptions.OptionTargetType
             * @enum {number}
             * @property {number} TARGET_TYPE_UNKNOWN=0 TARGET_TYPE_UNKNOWN value
             * @property {number} TARGET_TYPE_FILE=1 TARGET_TYPE_FILE value
             * @property {number} TARGET_TYPE_EXTENSION_RANGE=2 TARGET_TYPE_EXTENSION_RANGE value
             * @property {number} TARGET_TYPE_MESSAGE=3 TARGET_TYPE_MESSAGE value
             * @property {number} TARGET_TYPE_FIELD=4 TARGET_TYPE_FIELD value
             * @property {number} TARGET_TYPE_ONEOF=5 TARGET_TYPE_ONEOF value
             * @property {number} TARGET_TYPE_ENUM=6 TARGET_TYPE_ENUM value
             * @property {number} TARGET_TYPE_ENUM_ENTRY=7 TARGET_TYPE_ENUM_ENTRY value
             * @property {number} TARGET_TYPE_SERVICE=8 TARGET_TYPE_SERVICE value
             * @property {number} TARGET_TYPE_METHOD=9 TARGET_TYPE_METHOD value
             */
            FieldOptions.OptionTargetType = (function() {
                var valuesById = $Object.create(null), values = $Object.create(valuesById);
                values[valuesById[0] = "TARGET_TYPE_UNKNOWN"] = 0;
                values[valuesById[1] = "TARGET_TYPE_FILE"] = 1;
                values[valuesById[2] = "TARGET_TYPE_EXTENSION_RANGE"] = 2;
                values[valuesById[3] = "TARGET_TYPE_MESSAGE"] = 3;
                values[valuesById[4] = "TARGET_TYPE_FIELD"] = 4;
                values[valuesById[5] = "TARGET_TYPE_ONEOF"] = 5;
                values[valuesById[6] = "TARGET_TYPE_ENUM"] = 6;
                values[valuesById[7] = "TARGET_TYPE_ENUM_ENTRY"] = 7;
                values[valuesById[8] = "TARGET_TYPE_SERVICE"] = 8;
                values[valuesById[9] = "TARGET_TYPE_METHOD"] = 9;
                return values;
            })();

            FieldOptions.EditionDefault = (function() {

                /**
                 * Properties of an EditionDefault.
                 * @typedef {Object} google.protobuf.FieldOptions.EditionDefault.$Properties
                 * @property {google.protobuf.Edition|null} [edition] EditionDefault edition
                 * @property {string|null} [value] EditionDefault value
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */

                /**
                 * Properties of an EditionDefault.
                 * @memberof google.protobuf.FieldOptions
                 * @interface IEditionDefault
                 * @augments google.protobuf.FieldOptions.EditionDefault.$Properties
                 * @deprecated Use google.protobuf.FieldOptions.EditionDefault.$Properties instead.
                 */

                /**
                 * Shape of an EditionDefault.
                 * @typedef {google.protobuf.FieldOptions.EditionDefault.$Properties} google.protobuf.FieldOptions.EditionDefault.$Shape
                 */

                /**
                 * Constructs a new EditionDefault.
                 * @memberof google.protobuf.FieldOptions
                 * @classdesc Represents an EditionDefault.
                 * @constructor
                 * @param {google.protobuf.FieldOptions.EditionDefault.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                var EditionDefault = function (properties) {
                    if (properties)
                        for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };

                /**
                 * EditionDefault edition.
                 * @member {google.protobuf.Edition} edition
                 * @memberof google.protobuf.FieldOptions.EditionDefault
                 * @instance
                 */
                EditionDefault.prototype.edition = 0;

                /**
                 * EditionDefault value.
                 * @member {string} value
                 * @memberof google.protobuf.FieldOptions.EditionDefault
                 * @instance
                 */
                EditionDefault.prototype.value = "";

                /**
                 * Creates a new EditionDefault instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.FieldOptions.EditionDefault
                 * @static
                 * @param {google.protobuf.FieldOptions.EditionDefault.$Properties=} [properties] Properties to set
                 * @returns {google.protobuf.FieldOptions.EditionDefault} EditionDefault instance
                 * @type {{
                 *   (properties: google.protobuf.FieldOptions.EditionDefault.$Shape): google.protobuf.FieldOptions.EditionDefault & google.protobuf.FieldOptions.EditionDefault.$Shape;
                 *   (properties?: google.protobuf.FieldOptions.EditionDefault.$Properties): google.protobuf.FieldOptions.EditionDefault;
                 * }}
                 */
                EditionDefault.create = function(properties) {
                    return new EditionDefault(properties);
                };

                /**
                 * Encodes the specified EditionDefault message. Does not implicitly {@link google.protobuf.FieldOptions.EditionDefault.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.FieldOptions.EditionDefault
                 * @static
                 * @param {google.protobuf.FieldOptions.EditionDefault.$Properties} message EditionDefault message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EditionDefault.encode = function (message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.value != null && $Object.hasOwnProperty.call(message, "value"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.value);
                    if (message.edition != null && $Object.hasOwnProperty.call(message, "edition"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.edition);
                    if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                        for (var i = 0; i < message.$unknowns.length; ++i)
                            writer.raw(message.$unknowns[i]);
                    return writer;
                };

                /**
                 * Encodes the specified EditionDefault message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.EditionDefault.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.FieldOptions.EditionDefault
                 * @static
                 * @param {google.protobuf.FieldOptions.EditionDefault.$Properties} message EditionDefault message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EditionDefault.encodeDelimited = function(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes an EditionDefault message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.FieldOptions.EditionDefault
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FieldOptions.EditionDefault & google.protobuf.FieldOptions.EditionDefault.$Shape} EditionDefault
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EditionDefault.decode = function (reader, length, _end, _depth, _target) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $Reader.recursionLimit)
                        throw $Error("max depth exceeded");
                    var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.google.protobuf.FieldOptions.EditionDefault(), value;
                    while (reader.pos < end) {
                        var start = reader.pos;
                        var tag = reader.tag();
                        if (tag === _end) {
                            _end = $undefined;
                            break;
                        }
                        var wireType = tag & 7;
                        switch (tag >>>= 3) {
                        case 3: {
                                if (wireType !== 0)
                                    break;
                                value = reader.int32();
                                if ($root.google.protobuf.Edition[value] !== $undefined)
                                    message.edition = value;
                                else if (!reader.discardUnknown) {
                                    $util.makeProp(message, "$unknowns", false);
                                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                                }
                                continue;
                            }
                        case 2: {
                                if (wireType !== 2)
                                    break;
                                message.value = reader.string();
                                continue;
                            }
                        }
                        reader.skipType(wireType, _depth, tag);
                        if (!reader.discardUnknown) {
                            $util.makeProp(message, "$unknowns", false);
                            (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                        }
                    }
                    if (_end !== $undefined)
                        throw $Error("missing end group");
                    return message;
                };

                /**
                 * Decodes an EditionDefault message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.FieldOptions.EditionDefault
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FieldOptions.EditionDefault & google.protobuf.FieldOptions.EditionDefault.$Shape} EditionDefault
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EditionDefault.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an EditionDefault message.
                 * @function verify
                 * @memberof google.protobuf.FieldOptions.EditionDefault
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                EditionDefault.verify = function (message, _depth) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        return "max depth exceeded";
                    if (message.edition != null && $Object.hasOwnProperty.call(message, "edition"))
                        switch (message.edition) {
                        default:
                            return "edition: enum value expected";
                        case 0:
                        case 900:
                        case 998:
                        case 999:
                        case 1000:
                        case 1001:
                        case 1:
                        case 2:
                        case 99997:
                        case 99998:
                        case 99999:
                        case 2147483647:
                            break;
                        }
                    if (message.value != null && $Object.hasOwnProperty.call(message, "value"))
                        if (!$util.isString(message.value))
                            return "value: string expected";
                    return null;
                };

                /**
                 * Creates an EditionDefault message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.FieldOptions.EditionDefault
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FieldOptions.EditionDefault} EditionDefault
                 */
                EditionDefault.fromObject = function (object, _depth) {
                    if (object instanceof $root.google.protobuf.FieldOptions.EditionDefault)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".google.protobuf.FieldOptions.EditionDefault: object expected");
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var message = new $root.google.protobuf.FieldOptions.EditionDefault();
                    switch (object.edition) {
                    case "EDITION_UNKNOWN":
                    case 0:
                        message.edition = 0;
                        break;
                    case "EDITION_LEGACY":
                    case 900:
                        message.edition = 900;
                        break;
                    case "EDITION_PROTO2":
                    case 998:
                        message.edition = 998;
                        break;
                    case "EDITION_PROTO3":
                    case 999:
                        message.edition = 999;
                        break;
                    case "EDITION_2023":
                    case 1000:
                        message.edition = 1000;
                        break;
                    case "EDITION_2024":
                    case 1001:
                        message.edition = 1001;
                        break;
                    case "EDITION_1_TEST_ONLY":
                    case 1:
                        message.edition = 1;
                        break;
                    case "EDITION_2_TEST_ONLY":
                    case 2:
                        message.edition = 2;
                        break;
                    case "EDITION_99997_TEST_ONLY":
                    case 99997:
                        message.edition = 99997;
                        break;
                    case "EDITION_99998_TEST_ONLY":
                    case 99998:
                        message.edition = 99998;
                        break;
                    case "EDITION_99999_TEST_ONLY":
                    case 99999:
                        message.edition = 99999;
                        break;
                    case "EDITION_MAX":
                    case 2147483647:
                        message.edition = 2147483647;
                        break;
                    default:
                    }
                    if (object.value != null)
                        message.value = $String(object.value);
                    return message;
                };

                /**
                 * Creates a plain object from an EditionDefault message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.FieldOptions.EditionDefault
                 * @static
                 * @param {google.protobuf.FieldOptions.EditionDefault} message EditionDefault
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EditionDefault.toObject = function (message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var object = {};
                    if (options.defaults) {
                        object.value = "";
                        object.edition = options.enums === $String ? "EDITION_UNKNOWN" : 0;
                    }
                    if (message.value != null && $Object.hasOwnProperty.call(message, "value"))
                        object.value = message.value;
                    if (message.edition != null && $Object.hasOwnProperty.call(message, "edition"))
                        object.edition = options.enums === $String ? $root.google.protobuf.Edition[message.edition] === $undefined ? message.edition : $root.google.protobuf.Edition[message.edition] : message.edition;
                    return object;
                };

                /**
                 * Converts this EditionDefault to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.FieldOptions.EditionDefault
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                EditionDefault.prototype.toJSON = function() {
                    return EditionDefault.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the type url for EditionDefault
                 * @function getTypeUrl
                 * @memberof google.protobuf.FieldOptions.EditionDefault
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                EditionDefault.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/google.protobuf.FieldOptions.EditionDefault";
                };

                return EditionDefault;
            })();

            FieldOptions.FeatureSupport = (function() {

                /**
                 * Properties of a FeatureSupport.
                 * @typedef {Object} google.protobuf.FieldOptions.FeatureSupport.$Properties
                 * @property {google.protobuf.Edition|null} [edition_introduced] FeatureSupport edition_introduced
                 * @property {google.protobuf.Edition|null} [edition_deprecated] FeatureSupport edition_deprecated
                 * @property {string|null} [deprecation_warning] FeatureSupport deprecation_warning
                 * @property {google.protobuf.Edition|null} [edition_removed] FeatureSupport edition_removed
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */

                /**
                 * Properties of a FeatureSupport.
                 * @memberof google.protobuf.FieldOptions
                 * @interface IFeatureSupport
                 * @augments google.protobuf.FieldOptions.FeatureSupport.$Properties
                 * @deprecated Use google.protobuf.FieldOptions.FeatureSupport.$Properties instead.
                 */

                /**
                 * Shape of a FeatureSupport.
                 * @typedef {google.protobuf.FieldOptions.FeatureSupport.$Properties} google.protobuf.FieldOptions.FeatureSupport.$Shape
                 */

                /**
                 * Constructs a new FeatureSupport.
                 * @memberof google.protobuf.FieldOptions
                 * @classdesc Represents a FeatureSupport.
                 * @constructor
                 * @param {google.protobuf.FieldOptions.FeatureSupport.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                var FeatureSupport = function (properties) {
                    if (properties)
                        for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };

                /**
                 * FeatureSupport edition_introduced.
                 * @member {google.protobuf.Edition} edition_introduced
                 * @memberof google.protobuf.FieldOptions.FeatureSupport
                 * @instance
                 */
                FeatureSupport.prototype.edition_introduced = 0;

                /**
                 * FeatureSupport edition_deprecated.
                 * @member {google.protobuf.Edition} edition_deprecated
                 * @memberof google.protobuf.FieldOptions.FeatureSupport
                 * @instance
                 */
                FeatureSupport.prototype.edition_deprecated = 0;

                /**
                 * FeatureSupport deprecation_warning.
                 * @member {string} deprecation_warning
                 * @memberof google.protobuf.FieldOptions.FeatureSupport
                 * @instance
                 */
                FeatureSupport.prototype.deprecation_warning = "";

                /**
                 * FeatureSupport edition_removed.
                 * @member {google.protobuf.Edition} edition_removed
                 * @memberof google.protobuf.FieldOptions.FeatureSupport
                 * @instance
                 */
                FeatureSupport.prototype.edition_removed = 0;

                /**
                 * Creates a new FeatureSupport instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.FieldOptions.FeatureSupport
                 * @static
                 * @param {google.protobuf.FieldOptions.FeatureSupport.$Properties=} [properties] Properties to set
                 * @returns {google.protobuf.FieldOptions.FeatureSupport} FeatureSupport instance
                 * @type {{
                 *   (properties: google.protobuf.FieldOptions.FeatureSupport.$Shape): google.protobuf.FieldOptions.FeatureSupport & google.protobuf.FieldOptions.FeatureSupport.$Shape;
                 *   (properties?: google.protobuf.FieldOptions.FeatureSupport.$Properties): google.protobuf.FieldOptions.FeatureSupport;
                 * }}
                 */
                FeatureSupport.create = function(properties) {
                    return new FeatureSupport(properties);
                };

                /**
                 * Encodes the specified FeatureSupport message. Does not implicitly {@link google.protobuf.FieldOptions.FeatureSupport.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.FieldOptions.FeatureSupport
                 * @static
                 * @param {google.protobuf.FieldOptions.FeatureSupport.$Properties} message FeatureSupport message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FeatureSupport.encode = function (message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.edition_introduced != null && $Object.hasOwnProperty.call(message, "edition_introduced"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.edition_introduced);
                    if (message.edition_deprecated != null && $Object.hasOwnProperty.call(message, "edition_deprecated"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.edition_deprecated);
                    if (message.deprecation_warning != null && $Object.hasOwnProperty.call(message, "deprecation_warning"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.deprecation_warning);
                    if (message.edition_removed != null && $Object.hasOwnProperty.call(message, "edition_removed"))
                        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.edition_removed);
                    if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                        for (var i = 0; i < message.$unknowns.length; ++i)
                            writer.raw(message.$unknowns[i]);
                    return writer;
                };

                /**
                 * Encodes the specified FeatureSupport message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.FeatureSupport.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.FieldOptions.FeatureSupport
                 * @static
                 * @param {google.protobuf.FieldOptions.FeatureSupport.$Properties} message FeatureSupport message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FeatureSupport.encodeDelimited = function(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a FeatureSupport message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.FieldOptions.FeatureSupport
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FieldOptions.FeatureSupport & google.protobuf.FieldOptions.FeatureSupport.$Shape} FeatureSupport
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FeatureSupport.decode = function (reader, length, _end, _depth, _target) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $Reader.recursionLimit)
                        throw $Error("max depth exceeded");
                    var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.google.protobuf.FieldOptions.FeatureSupport(), value;
                    while (reader.pos < end) {
                        var start = reader.pos;
                        var tag = reader.tag();
                        if (tag === _end) {
                            _end = $undefined;
                            break;
                        }
                        var wireType = tag & 7;
                        switch (tag >>>= 3) {
                        case 1: {
                                if (wireType !== 0)
                                    break;
                                value = reader.int32();
                                if ($root.google.protobuf.Edition[value] !== $undefined)
                                    message.edition_introduced = value;
                                else if (!reader.discardUnknown) {
                                    $util.makeProp(message, "$unknowns", false);
                                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                                }
                                continue;
                            }
                        case 2: {
                                if (wireType !== 0)
                                    break;
                                value = reader.int32();
                                if ($root.google.protobuf.Edition[value] !== $undefined)
                                    message.edition_deprecated = value;
                                else if (!reader.discardUnknown) {
                                    $util.makeProp(message, "$unknowns", false);
                                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                                }
                                continue;
                            }
                        case 3: {
                                if (wireType !== 2)
                                    break;
                                message.deprecation_warning = reader.string();
                                continue;
                            }
                        case 4: {
                                if (wireType !== 0)
                                    break;
                                value = reader.int32();
                                if ($root.google.protobuf.Edition[value] !== $undefined)
                                    message.edition_removed = value;
                                else if (!reader.discardUnknown) {
                                    $util.makeProp(message, "$unknowns", false);
                                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                                }
                                continue;
                            }
                        }
                        reader.skipType(wireType, _depth, tag);
                        if (!reader.discardUnknown) {
                            $util.makeProp(message, "$unknowns", false);
                            (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                        }
                    }
                    if (_end !== $undefined)
                        throw $Error("missing end group");
                    return message;
                };

                /**
                 * Decodes a FeatureSupport message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.FieldOptions.FeatureSupport
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FieldOptions.FeatureSupport & google.protobuf.FieldOptions.FeatureSupport.$Shape} FeatureSupport
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FeatureSupport.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a FeatureSupport message.
                 * @function verify
                 * @memberof google.protobuf.FieldOptions.FeatureSupport
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FeatureSupport.verify = function (message, _depth) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        return "max depth exceeded";
                    if (message.edition_introduced != null && $Object.hasOwnProperty.call(message, "edition_introduced"))
                        switch (message.edition_introduced) {
                        default:
                            return "edition_introduced: enum value expected";
                        case 0:
                        case 900:
                        case 998:
                        case 999:
                        case 1000:
                        case 1001:
                        case 1:
                        case 2:
                        case 99997:
                        case 99998:
                        case 99999:
                        case 2147483647:
                            break;
                        }
                    if (message.edition_deprecated != null && $Object.hasOwnProperty.call(message, "edition_deprecated"))
                        switch (message.edition_deprecated) {
                        default:
                            return "edition_deprecated: enum value expected";
                        case 0:
                        case 900:
                        case 998:
                        case 999:
                        case 1000:
                        case 1001:
                        case 1:
                        case 2:
                        case 99997:
                        case 99998:
                        case 99999:
                        case 2147483647:
                            break;
                        }
                    if (message.deprecation_warning != null && $Object.hasOwnProperty.call(message, "deprecation_warning"))
                        if (!$util.isString(message.deprecation_warning))
                            return "deprecation_warning: string expected";
                    if (message.edition_removed != null && $Object.hasOwnProperty.call(message, "edition_removed"))
                        switch (message.edition_removed) {
                        default:
                            return "edition_removed: enum value expected";
                        case 0:
                        case 900:
                        case 998:
                        case 999:
                        case 1000:
                        case 1001:
                        case 1:
                        case 2:
                        case 99997:
                        case 99998:
                        case 99999:
                        case 2147483647:
                            break;
                        }
                    return null;
                };

                /**
                 * Creates a FeatureSupport message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.FieldOptions.FeatureSupport
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FieldOptions.FeatureSupport} FeatureSupport
                 */
                FeatureSupport.fromObject = function (object, _depth) {
                    if (object instanceof $root.google.protobuf.FieldOptions.FeatureSupport)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".google.protobuf.FieldOptions.FeatureSupport: object expected");
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var message = new $root.google.protobuf.FieldOptions.FeatureSupport();
                    switch (object.edition_introduced) {
                    case "EDITION_UNKNOWN":
                    case 0:
                        message.edition_introduced = 0;
                        break;
                    case "EDITION_LEGACY":
                    case 900:
                        message.edition_introduced = 900;
                        break;
                    case "EDITION_PROTO2":
                    case 998:
                        message.edition_introduced = 998;
                        break;
                    case "EDITION_PROTO3":
                    case 999:
                        message.edition_introduced = 999;
                        break;
                    case "EDITION_2023":
                    case 1000:
                        message.edition_introduced = 1000;
                        break;
                    case "EDITION_2024":
                    case 1001:
                        message.edition_introduced = 1001;
                        break;
                    case "EDITION_1_TEST_ONLY":
                    case 1:
                        message.edition_introduced = 1;
                        break;
                    case "EDITION_2_TEST_ONLY":
                    case 2:
                        message.edition_introduced = 2;
                        break;
                    case "EDITION_99997_TEST_ONLY":
                    case 99997:
                        message.edition_introduced = 99997;
                        break;
                    case "EDITION_99998_TEST_ONLY":
                    case 99998:
                        message.edition_introduced = 99998;
                        break;
                    case "EDITION_99999_TEST_ONLY":
                    case 99999:
                        message.edition_introduced = 99999;
                        break;
                    case "EDITION_MAX":
                    case 2147483647:
                        message.edition_introduced = 2147483647;
                        break;
                    default:
                    }
                    switch (object.edition_deprecated) {
                    case "EDITION_UNKNOWN":
                    case 0:
                        message.edition_deprecated = 0;
                        break;
                    case "EDITION_LEGACY":
                    case 900:
                        message.edition_deprecated = 900;
                        break;
                    case "EDITION_PROTO2":
                    case 998:
                        message.edition_deprecated = 998;
                        break;
                    case "EDITION_PROTO3":
                    case 999:
                        message.edition_deprecated = 999;
                        break;
                    case "EDITION_2023":
                    case 1000:
                        message.edition_deprecated = 1000;
                        break;
                    case "EDITION_2024":
                    case 1001:
                        message.edition_deprecated = 1001;
                        break;
                    case "EDITION_1_TEST_ONLY":
                    case 1:
                        message.edition_deprecated = 1;
                        break;
                    case "EDITION_2_TEST_ONLY":
                    case 2:
                        message.edition_deprecated = 2;
                        break;
                    case "EDITION_99997_TEST_ONLY":
                    case 99997:
                        message.edition_deprecated = 99997;
                        break;
                    case "EDITION_99998_TEST_ONLY":
                    case 99998:
                        message.edition_deprecated = 99998;
                        break;
                    case "EDITION_99999_TEST_ONLY":
                    case 99999:
                        message.edition_deprecated = 99999;
                        break;
                    case "EDITION_MAX":
                    case 2147483647:
                        message.edition_deprecated = 2147483647;
                        break;
                    default:
                    }
                    if (object.deprecation_warning != null)
                        message.deprecation_warning = $String(object.deprecation_warning);
                    switch (object.edition_removed) {
                    case "EDITION_UNKNOWN":
                    case 0:
                        message.edition_removed = 0;
                        break;
                    case "EDITION_LEGACY":
                    case 900:
                        message.edition_removed = 900;
                        break;
                    case "EDITION_PROTO2":
                    case 998:
                        message.edition_removed = 998;
                        break;
                    case "EDITION_PROTO3":
                    case 999:
                        message.edition_removed = 999;
                        break;
                    case "EDITION_2023":
                    case 1000:
                        message.edition_removed = 1000;
                        break;
                    case "EDITION_2024":
                    case 1001:
                        message.edition_removed = 1001;
                        break;
                    case "EDITION_1_TEST_ONLY":
                    case 1:
                        message.edition_removed = 1;
                        break;
                    case "EDITION_2_TEST_ONLY":
                    case 2:
                        message.edition_removed = 2;
                        break;
                    case "EDITION_99997_TEST_ONLY":
                    case 99997:
                        message.edition_removed = 99997;
                        break;
                    case "EDITION_99998_TEST_ONLY":
                    case 99998:
                        message.edition_removed = 99998;
                        break;
                    case "EDITION_99999_TEST_ONLY":
                    case 99999:
                        message.edition_removed = 99999;
                        break;
                    case "EDITION_MAX":
                    case 2147483647:
                        message.edition_removed = 2147483647;
                        break;
                    default:
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a FeatureSupport message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.FieldOptions.FeatureSupport
                 * @static
                 * @param {google.protobuf.FieldOptions.FeatureSupport} message FeatureSupport
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FeatureSupport.toObject = function (message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var object = {};
                    if (options.defaults) {
                        object.edition_introduced = options.enums === $String ? "EDITION_UNKNOWN" : 0;
                        object.edition_deprecated = options.enums === $String ? "EDITION_UNKNOWN" : 0;
                        object.deprecation_warning = "";
                        object.edition_removed = options.enums === $String ? "EDITION_UNKNOWN" : 0;
                    }
                    if (message.edition_introduced != null && $Object.hasOwnProperty.call(message, "edition_introduced"))
                        object.edition_introduced = options.enums === $String ? $root.google.protobuf.Edition[message.edition_introduced] === $undefined ? message.edition_introduced : $root.google.protobuf.Edition[message.edition_introduced] : message.edition_introduced;
                    if (message.edition_deprecated != null && $Object.hasOwnProperty.call(message, "edition_deprecated"))
                        object.edition_deprecated = options.enums === $String ? $root.google.protobuf.Edition[message.edition_deprecated] === $undefined ? message.edition_deprecated : $root.google.protobuf.Edition[message.edition_deprecated] : message.edition_deprecated;
                    if (message.deprecation_warning != null && $Object.hasOwnProperty.call(message, "deprecation_warning"))
                        object.deprecation_warning = message.deprecation_warning;
                    if (message.edition_removed != null && $Object.hasOwnProperty.call(message, "edition_removed"))
                        object.edition_removed = options.enums === $String ? $root.google.protobuf.Edition[message.edition_removed] === $undefined ? message.edition_removed : $root.google.protobuf.Edition[message.edition_removed] : message.edition_removed;
                    return object;
                };

                /**
                 * Converts this FeatureSupport to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.FieldOptions.FeatureSupport
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FeatureSupport.prototype.toJSON = function() {
                    return FeatureSupport.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the type url for FeatureSupport
                 * @function getTypeUrl
                 * @memberof google.protobuf.FieldOptions.FeatureSupport
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                FeatureSupport.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/google.protobuf.FieldOptions.FeatureSupport";
                };

                return FeatureSupport;
            })();

            return FieldOptions;
        })();

        protobuf.OneofOptions = (function() {

            /**
             * Properties of a OneofOptions.
             * @typedef {Object} google.protobuf.OneofOptions.$Properties
             * @property {google.protobuf.FeatureSet.$Properties|null} [features] OneofOptions features
             * @property {Array.<google.protobuf.UninterpretedOption.$Properties>|null} [uninterpreted_option] OneofOptions uninterpreted_option
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a OneofOptions.
             * @memberof google.protobuf
             * @interface IOneofOptions
             * @augments google.protobuf.OneofOptions.$Properties
             * @deprecated Use google.protobuf.OneofOptions.$Properties instead.
             */

            /**
             * Shape of a OneofOptions.
             * @typedef {google.protobuf.OneofOptions.$Properties} google.protobuf.OneofOptions.$Shape
             */

            /**
             * Constructs a new OneofOptions.
             * @memberof google.protobuf
             * @classdesc Represents a OneofOptions.
             * @constructor
             * @param {google.protobuf.OneofOptions.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            var OneofOptions = function (properties) {
                this.uninterpreted_option = [];
                if (properties)
                    for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * OneofOptions features.
             * @member {google.protobuf.FeatureSet.$Properties|null|undefined} features
             * @memberof google.protobuf.OneofOptions
             * @instance
             */
            OneofOptions.prototype.features = null;

            /**
             * OneofOptions uninterpreted_option.
             * @member {Array.<google.protobuf.UninterpretedOption.$Properties>} uninterpreted_option
             * @memberof google.protobuf.OneofOptions
             * @instance
             */
            OneofOptions.prototype.uninterpreted_option = $util.emptyArray;

            /**
             * Creates a new OneofOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {google.protobuf.OneofOptions.$Properties=} [properties] Properties to set
             * @returns {google.protobuf.OneofOptions} OneofOptions instance
             * @type {{
             *   (properties: google.protobuf.OneofOptions.$Shape): google.protobuf.OneofOptions & google.protobuf.OneofOptions.$Shape;
             *   (properties?: google.protobuf.OneofOptions.$Properties): google.protobuf.OneofOptions;
             * }}
             */
            OneofOptions.create = function(properties) {
                return new OneofOptions(properties);
            };

            /**
             * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {google.protobuf.OneofOptions.$Properties} message OneofOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OneofOptions.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.features != null && $Object.hasOwnProperty.call(message, "features"))
                    $root.google.protobuf.FeatureSet.encode(message.features, writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
                if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                    for (var i = 0; i < message.uninterpreted_option.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (var i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {google.protobuf.OneofOptions.$Properties} message OneofOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OneofOptions.encodeDelimited = function(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a OneofOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.OneofOptions & google.protobuf.OneofOptions.$Shape} OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OneofOptions.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.google.protobuf.OneofOptions();
                while (reader.pos < end) {
                    var start = reader.pos;
                    var tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    var wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            message.features = $root.google.protobuf.FeatureSet.decode(reader, reader.uint32(), $undefined, _depth + 1, message.features);
                            continue;
                        }
                    case 999: {
                            if (wireType !== 2)
                                break;
                            if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                                message.uninterpreted_option = [];
                            message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32(), $undefined, _depth + 1));
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes a OneofOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.OneofOptions & google.protobuf.OneofOptions.$Shape} OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OneofOptions.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a OneofOptions message.
             * @function verify
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OneofOptions.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.features != null && $Object.hasOwnProperty.call(message, "features")) {
                    var error = $root.google.protobuf.FeatureSet.verify(message.features, _depth + 1);
                    if (error)
                        return "features." + error;
                }
                if (message.uninterpreted_option != null && $Object.hasOwnProperty.call(message, "uninterpreted_option")) {
                    if (!$Array.isArray(message.uninterpreted_option))
                        return "uninterpreted_option: array expected";
                    for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                        var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpreted_option[i], _depth + 1);
                        if (error)
                            return "uninterpreted_option." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a OneofOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.OneofOptions} OneofOptions
             */
            OneofOptions.fromObject = function (object, _depth) {
                if (object instanceof $root.google.protobuf.OneofOptions)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".google.protobuf.OneofOptions: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var message = new $root.google.protobuf.OneofOptions();
                if (object.features != null) {
                    if (!$util.isObject(object.features))
                        throw $TypeError(".google.protobuf.OneofOptions.features: object expected");
                    message.features = $root.google.protobuf.FeatureSet.fromObject(object.features, _depth + 1);
                }
                if (object.uninterpreted_option) {
                    if (!$Array.isArray(object.uninterpreted_option))
                        throw $TypeError(".google.protobuf.OneofOptions.uninterpreted_option: array expected");
                    message.uninterpreted_option = $Array(object.uninterpreted_option.length);
                    for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                        if (!$util.isObject(object.uninterpreted_option[i]))
                            throw $TypeError(".google.protobuf.OneofOptions.uninterpreted_option: object expected");
                        message.uninterpreted_option[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpreted_option[i], _depth + 1);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a OneofOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {google.protobuf.OneofOptions} message OneofOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OneofOptions.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var object = {};
                if (options.arrays || options.defaults)
                    object.uninterpreted_option = [];
                if (options.defaults)
                    object.features = null;
                if (message.features != null && $Object.hasOwnProperty.call(message, "features"))
                    object.features = $root.google.protobuf.FeatureSet.toObject(message.features, options, _depth + 1);
                if (message.uninterpreted_option && message.uninterpreted_option.length) {
                    object.uninterpreted_option = $Array(message.uninterpreted_option.length);
                    for (var j = 0; j < message.uninterpreted_option.length; ++j)
                        object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options, _depth + 1);
                }
                return object;
            };

            /**
             * Converts this OneofOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.OneofOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OneofOptions.prototype.toJSON = function() {
                return OneofOptions.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for OneofOptions
             * @function getTypeUrl
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            OneofOptions.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/google.protobuf.OneofOptions";
            };

            return OneofOptions;
        })();

        protobuf.EnumOptions = (function() {

            /**
             * Properties of an EnumOptions.
             * @typedef {Object} google.protobuf.EnumOptions.$Properties
             * @property {boolean|null} [allow_alias] EnumOptions allow_alias
             * @property {boolean|null} [deprecated] EnumOptions deprecated
             * @property {boolean|null} [deprecated_legacy_json_field_conflicts] EnumOptions deprecated_legacy_json_field_conflicts
             * @property {google.protobuf.FeatureSet.$Properties|null} [features] EnumOptions features
             * @property {Array.<google.protobuf.UninterpretedOption.$Properties>|null} [uninterpreted_option] EnumOptions uninterpreted_option
             * @property {NanoPBOptions.$Properties|null} [".nanopb_enumopt"] EnumOptions .nanopb_enumopt
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of an EnumOptions.
             * @memberof google.protobuf
             * @interface IEnumOptions
             * @augments google.protobuf.EnumOptions.$Properties
             * @deprecated Use google.protobuf.EnumOptions.$Properties instead.
             */

            /**
             * Shape of an EnumOptions.
             * @typedef {google.protobuf.EnumOptions.$Properties} google.protobuf.EnumOptions.$Shape
             */

            /**
             * Constructs a new EnumOptions.
             * @memberof google.protobuf
             * @classdesc Represents an EnumOptions.
             * @constructor
             * @param {google.protobuf.EnumOptions.$Properties=} [properties] Properties to set
             * @property {NanoPBOptions.$Properties|null} [".nanopb_enumopt"] EnumOptions .nanopb_enumopt
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            var EnumOptions = function (properties) {
                this.uninterpreted_option = [];
                if (properties)
                    for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * EnumOptions allow_alias.
             * @member {boolean} allow_alias
             * @memberof google.protobuf.EnumOptions
             * @instance
             */
            EnumOptions.prototype.allow_alias = false;

            /**
             * EnumOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.EnumOptions
             * @instance
             */
            EnumOptions.prototype.deprecated = false;

            /**
             * EnumOptions deprecated_legacy_json_field_conflicts.
             * @member {boolean} deprecated_legacy_json_field_conflicts
             * @memberof google.protobuf.EnumOptions
             * @instance
             */
            EnumOptions.prototype.deprecated_legacy_json_field_conflicts = false;

            /**
             * EnumOptions features.
             * @member {google.protobuf.FeatureSet.$Properties|null|undefined} features
             * @memberof google.protobuf.EnumOptions
             * @instance
             */
            EnumOptions.prototype.features = null;

            /**
             * EnumOptions uninterpreted_option.
             * @member {Array.<google.protobuf.UninterpretedOption.$Properties>} uninterpreted_option
             * @memberof google.protobuf.EnumOptions
             * @instance
             */
            EnumOptions.prototype.uninterpreted_option = $util.emptyArray;

            EnumOptions.prototype[".nanopb_enumopt"] = null;

            /**
             * Creates a new EnumOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {google.protobuf.EnumOptions.$Properties=} [properties] Properties to set
             * @returns {google.protobuf.EnumOptions} EnumOptions instance
             * @type {{
             *   (properties: google.protobuf.EnumOptions.$Shape): google.protobuf.EnumOptions & google.protobuf.EnumOptions.$Shape;
             *   (properties?: google.protobuf.EnumOptions.$Properties): google.protobuf.EnumOptions;
             * }}
             */
            EnumOptions.create = function(properties) {
                return new EnumOptions(properties);
            };

            /**
             * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {google.protobuf.EnumOptions.$Properties} message EnumOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumOptions.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.allow_alias != null && $Object.hasOwnProperty.call(message, "allow_alias"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.allow_alias);
                if (message.deprecated != null && $Object.hasOwnProperty.call(message, "deprecated"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                if (message.deprecated_legacy_json_field_conflicts != null && $Object.hasOwnProperty.call(message, "deprecated_legacy_json_field_conflicts"))
                    writer.uint32(/* id 6, wireType 0 =*/48).bool(message.deprecated_legacy_json_field_conflicts);
                if (message.features != null && $Object.hasOwnProperty.call(message, "features"))
                    $root.google.protobuf.FeatureSet.encode(message.features, writer.uint32(/* id 7, wireType 2 =*/58).fork(), _depth + 1).ldelim();
                if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                    for (var i = 0; i < message.uninterpreted_option.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork(), _depth + 1).ldelim();
                if (message[".nanopb_enumopt"] != null && $Object.hasOwnProperty.call(message, ".nanopb_enumopt"))
                    $root.NanoPBOptions.encode(message[".nanopb_enumopt"], writer.uint32(/* id 1010, wireType 2 =*/8082).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (var i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {google.protobuf.EnumOptions.$Properties} message EnumOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumOptions.encodeDelimited = function(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes an EnumOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.EnumOptions & google.protobuf.EnumOptions.$Shape} EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumOptions.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.google.protobuf.EnumOptions();
                while (reader.pos < end) {
                    var start = reader.pos;
                    var tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    var wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 2: {
                            if (wireType !== 0)
                                break;
                            message.allow_alias = reader.bool();
                            continue;
                        }
                    case 3: {
                            if (wireType !== 0)
                                break;
                            message.deprecated = reader.bool();
                            continue;
                        }
                    case 6: {
                            if (wireType !== 0)
                                break;
                            message.deprecated_legacy_json_field_conflicts = reader.bool();
                            continue;
                        }
                    case 7: {
                            if (wireType !== 2)
                                break;
                            message.features = $root.google.protobuf.FeatureSet.decode(reader, reader.uint32(), $undefined, _depth + 1, message.features);
                            continue;
                        }
                    case 999: {
                            if (wireType !== 2)
                                break;
                            if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                                message.uninterpreted_option = [];
                            message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32(), $undefined, _depth + 1));
                            continue;
                        }
                    case 1010: {
                            if (wireType !== 2)
                                break;
                            message[".nanopb_enumopt"] = $root.NanoPBOptions.decode(reader, reader.uint32(), $undefined, _depth + 1, message[".nanopb_enumopt"]);
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.EnumOptions & google.protobuf.EnumOptions.$Shape} EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumOptions.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an EnumOptions message.
             * @function verify
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EnumOptions.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.allow_alias != null && $Object.hasOwnProperty.call(message, "allow_alias"))
                    if (typeof message.allow_alias !== "boolean")
                        return "allow_alias: boolean expected";
                if (message.deprecated != null && $Object.hasOwnProperty.call(message, "deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.deprecated_legacy_json_field_conflicts != null && $Object.hasOwnProperty.call(message, "deprecated_legacy_json_field_conflicts"))
                    if (typeof message.deprecated_legacy_json_field_conflicts !== "boolean")
                        return "deprecated_legacy_json_field_conflicts: boolean expected";
                if (message.features != null && $Object.hasOwnProperty.call(message, "features")) {
                    var error = $root.google.protobuf.FeatureSet.verify(message.features, _depth + 1);
                    if (error)
                        return "features." + error;
                }
                if (message.uninterpreted_option != null && $Object.hasOwnProperty.call(message, "uninterpreted_option")) {
                    if (!$Array.isArray(message.uninterpreted_option))
                        return "uninterpreted_option: array expected";
                    for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                        var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpreted_option[i], _depth + 1);
                        if (error)
                            return "uninterpreted_option." + error;
                    }
                }
                if (message[".nanopb_enumopt"] != null && $Object.hasOwnProperty.call(message, ".nanopb_enumopt")) {
                    var error = $root.NanoPBOptions.verify(message[".nanopb_enumopt"], _depth + 1);
                    if (error)
                        return ".nanopb_enumopt." + error;
                }
                return null;
            };

            /**
             * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.EnumOptions} EnumOptions
             */
            EnumOptions.fromObject = function (object, _depth) {
                if (object instanceof $root.google.protobuf.EnumOptions)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".google.protobuf.EnumOptions: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var message = new $root.google.protobuf.EnumOptions();
                if (object.allow_alias != null)
                    message.allow_alias = $Boolean(object.allow_alias);
                if (object.deprecated != null)
                    message.deprecated = $Boolean(object.deprecated);
                if (object.deprecated_legacy_json_field_conflicts != null)
                    message.deprecated_legacy_json_field_conflicts = $Boolean(object.deprecated_legacy_json_field_conflicts);
                if (object.features != null) {
                    if (!$util.isObject(object.features))
                        throw $TypeError(".google.protobuf.EnumOptions.features: object expected");
                    message.features = $root.google.protobuf.FeatureSet.fromObject(object.features, _depth + 1);
                }
                if (object.uninterpreted_option) {
                    if (!$Array.isArray(object.uninterpreted_option))
                        throw $TypeError(".google.protobuf.EnumOptions.uninterpreted_option: array expected");
                    message.uninterpreted_option = $Array(object.uninterpreted_option.length);
                    for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                        if (!$util.isObject(object.uninterpreted_option[i]))
                            throw $TypeError(".google.protobuf.EnumOptions.uninterpreted_option: object expected");
                        message.uninterpreted_option[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpreted_option[i], _depth + 1);
                    }
                }
                if (object[".nanopb_enumopt"] != null) {
                    if (!$util.isObject(object[".nanopb_enumopt"]))
                        throw $TypeError(".google.protobuf.EnumOptions..nanopb_enumopt: object expected");
                    message[".nanopb_enumopt"] = $root.NanoPBOptions.fromObject(object[".nanopb_enumopt"], _depth + 1);
                }
                return message;
            };

            /**
             * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {google.protobuf.EnumOptions} message EnumOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EnumOptions.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var object = {};
                if (options.arrays || options.defaults)
                    object.uninterpreted_option = [];
                if (options.defaults) {
                    object.allow_alias = false;
                    object.deprecated = false;
                    object.deprecated_legacy_json_field_conflicts = false;
                    object.features = null;
                    object[".nanopb_enumopt"] = null;
                }
                if (message.allow_alias != null && $Object.hasOwnProperty.call(message, "allow_alias"))
                    object.allow_alias = message.allow_alias;
                if (message.deprecated != null && $Object.hasOwnProperty.call(message, "deprecated"))
                    object.deprecated = message.deprecated;
                if (message.deprecated_legacy_json_field_conflicts != null && $Object.hasOwnProperty.call(message, "deprecated_legacy_json_field_conflicts"))
                    object.deprecated_legacy_json_field_conflicts = message.deprecated_legacy_json_field_conflicts;
                if (message.features != null && $Object.hasOwnProperty.call(message, "features"))
                    object.features = $root.google.protobuf.FeatureSet.toObject(message.features, options, _depth + 1);
                if (message.uninterpreted_option && message.uninterpreted_option.length) {
                    object.uninterpreted_option = $Array(message.uninterpreted_option.length);
                    for (var j = 0; j < message.uninterpreted_option.length; ++j)
                        object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options, _depth + 1);
                }
                if (message[".nanopb_enumopt"] != null && $Object.hasOwnProperty.call(message, ".nanopb_enumopt"))
                    object[".nanopb_enumopt"] = $root.NanoPBOptions.toObject(message[".nanopb_enumopt"], options, _depth + 1);
                return object;
            };

            /**
             * Converts this EnumOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.EnumOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EnumOptions.prototype.toJSON = function() {
                return EnumOptions.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for EnumOptions
             * @function getTypeUrl
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            EnumOptions.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/google.protobuf.EnumOptions";
            };

            return EnumOptions;
        })();

        protobuf.EnumValueOptions = (function() {

            /**
             * Properties of an EnumValueOptions.
             * @typedef {Object} google.protobuf.EnumValueOptions.$Properties
             * @property {boolean|null} [deprecated] EnumValueOptions deprecated
             * @property {google.protobuf.FeatureSet.$Properties|null} [features] EnumValueOptions features
             * @property {boolean|null} [debug_redact] EnumValueOptions debug_redact
             * @property {google.protobuf.FieldOptions.FeatureSupport.$Properties|null} [feature_support] EnumValueOptions feature_support
             * @property {Array.<google.protobuf.UninterpretedOption.$Properties>|null} [uninterpreted_option] EnumValueOptions uninterpreted_option
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of an EnumValueOptions.
             * @memberof google.protobuf
             * @interface IEnumValueOptions
             * @augments google.protobuf.EnumValueOptions.$Properties
             * @deprecated Use google.protobuf.EnumValueOptions.$Properties instead.
             */

            /**
             * Shape of an EnumValueOptions.
             * @typedef {google.protobuf.EnumValueOptions.$Properties} google.protobuf.EnumValueOptions.$Shape
             */

            /**
             * Constructs a new EnumValueOptions.
             * @memberof google.protobuf
             * @classdesc Represents an EnumValueOptions.
             * @constructor
             * @param {google.protobuf.EnumValueOptions.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            var EnumValueOptions = function (properties) {
                this.uninterpreted_option = [];
                if (properties)
                    for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * EnumValueOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.EnumValueOptions
             * @instance
             */
            EnumValueOptions.prototype.deprecated = false;

            /**
             * EnumValueOptions features.
             * @member {google.protobuf.FeatureSet.$Properties|null|undefined} features
             * @memberof google.protobuf.EnumValueOptions
             * @instance
             */
            EnumValueOptions.prototype.features = null;

            /**
             * EnumValueOptions debug_redact.
             * @member {boolean} debug_redact
             * @memberof google.protobuf.EnumValueOptions
             * @instance
             */
            EnumValueOptions.prototype.debug_redact = false;

            /**
             * EnumValueOptions feature_support.
             * @member {google.protobuf.FieldOptions.FeatureSupport.$Properties|null|undefined} feature_support
             * @memberof google.protobuf.EnumValueOptions
             * @instance
             */
            EnumValueOptions.prototype.feature_support = null;

            /**
             * EnumValueOptions uninterpreted_option.
             * @member {Array.<google.protobuf.UninterpretedOption.$Properties>} uninterpreted_option
             * @memberof google.protobuf.EnumValueOptions
             * @instance
             */
            EnumValueOptions.prototype.uninterpreted_option = $util.emptyArray;

            /**
             * Creates a new EnumValueOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {google.protobuf.EnumValueOptions.$Properties=} [properties] Properties to set
             * @returns {google.protobuf.EnumValueOptions} EnumValueOptions instance
             * @type {{
             *   (properties: google.protobuf.EnumValueOptions.$Shape): google.protobuf.EnumValueOptions & google.protobuf.EnumValueOptions.$Shape;
             *   (properties?: google.protobuf.EnumValueOptions.$Properties): google.protobuf.EnumValueOptions;
             * }}
             */
            EnumValueOptions.create = function(properties) {
                return new EnumValueOptions(properties);
            };

            /**
             * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {google.protobuf.EnumValueOptions.$Properties} message EnumValueOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumValueOptions.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.deprecated != null && $Object.hasOwnProperty.call(message, "deprecated"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.deprecated);
                if (message.features != null && $Object.hasOwnProperty.call(message, "features"))
                    $root.google.protobuf.FeatureSet.encode(message.features, writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
                if (message.debug_redact != null && $Object.hasOwnProperty.call(message, "debug_redact"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.debug_redact);
                if (message.feature_support != null && $Object.hasOwnProperty.call(message, "feature_support"))
                    $root.google.protobuf.FieldOptions.FeatureSupport.encode(message.feature_support, writer.uint32(/* id 4, wireType 2 =*/34).fork(), _depth + 1).ldelim();
                if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                    for (var i = 0; i < message.uninterpreted_option.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (var i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {google.protobuf.EnumValueOptions.$Properties} message EnumValueOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumValueOptions.encodeDelimited = function(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.EnumValueOptions & google.protobuf.EnumValueOptions.$Shape} EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumValueOptions.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.google.protobuf.EnumValueOptions();
                while (reader.pos < end) {
                    var start = reader.pos;
                    var tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    var wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 0)
                                break;
                            message.deprecated = reader.bool();
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            message.features = $root.google.protobuf.FeatureSet.decode(reader, reader.uint32(), $undefined, _depth + 1, message.features);
                            continue;
                        }
                    case 3: {
                            if (wireType !== 0)
                                break;
                            message.debug_redact = reader.bool();
                            continue;
                        }
                    case 4: {
                            if (wireType !== 2)
                                break;
                            message.feature_support = $root.google.protobuf.FieldOptions.FeatureSupport.decode(reader, reader.uint32(), $undefined, _depth + 1, message.feature_support);
                            continue;
                        }
                    case 999: {
                            if (wireType !== 2)
                                break;
                            if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                                message.uninterpreted_option = [];
                            message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32(), $undefined, _depth + 1));
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.EnumValueOptions & google.protobuf.EnumValueOptions.$Shape} EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumValueOptions.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an EnumValueOptions message.
             * @function verify
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EnumValueOptions.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.deprecated != null && $Object.hasOwnProperty.call(message, "deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.features != null && $Object.hasOwnProperty.call(message, "features")) {
                    var error = $root.google.protobuf.FeatureSet.verify(message.features, _depth + 1);
                    if (error)
                        return "features." + error;
                }
                if (message.debug_redact != null && $Object.hasOwnProperty.call(message, "debug_redact"))
                    if (typeof message.debug_redact !== "boolean")
                        return "debug_redact: boolean expected";
                if (message.feature_support != null && $Object.hasOwnProperty.call(message, "feature_support")) {
                    var error = $root.google.protobuf.FieldOptions.FeatureSupport.verify(message.feature_support, _depth + 1);
                    if (error)
                        return "feature_support." + error;
                }
                if (message.uninterpreted_option != null && $Object.hasOwnProperty.call(message, "uninterpreted_option")) {
                    if (!$Array.isArray(message.uninterpreted_option))
                        return "uninterpreted_option: array expected";
                    for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                        var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpreted_option[i], _depth + 1);
                        if (error)
                            return "uninterpreted_option." + error;
                    }
                }
                return null;
            };

            /**
             * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
             */
            EnumValueOptions.fromObject = function (object, _depth) {
                if (object instanceof $root.google.protobuf.EnumValueOptions)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".google.protobuf.EnumValueOptions: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var message = new $root.google.protobuf.EnumValueOptions();
                if (object.deprecated != null)
                    message.deprecated = $Boolean(object.deprecated);
                if (object.features != null) {
                    if (!$util.isObject(object.features))
                        throw $TypeError(".google.protobuf.EnumValueOptions.features: object expected");
                    message.features = $root.google.protobuf.FeatureSet.fromObject(object.features, _depth + 1);
                }
                if (object.debug_redact != null)
                    message.debug_redact = $Boolean(object.debug_redact);
                if (object.feature_support != null) {
                    if (!$util.isObject(object.feature_support))
                        throw $TypeError(".google.protobuf.EnumValueOptions.feature_support: object expected");
                    message.feature_support = $root.google.protobuf.FieldOptions.FeatureSupport.fromObject(object.feature_support, _depth + 1);
                }
                if (object.uninterpreted_option) {
                    if (!$Array.isArray(object.uninterpreted_option))
                        throw $TypeError(".google.protobuf.EnumValueOptions.uninterpreted_option: array expected");
                    message.uninterpreted_option = $Array(object.uninterpreted_option.length);
                    for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                        if (!$util.isObject(object.uninterpreted_option[i]))
                            throw $TypeError(".google.protobuf.EnumValueOptions.uninterpreted_option: object expected");
                        message.uninterpreted_option[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpreted_option[i], _depth + 1);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {google.protobuf.EnumValueOptions} message EnumValueOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EnumValueOptions.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var object = {};
                if (options.arrays || options.defaults)
                    object.uninterpreted_option = [];
                if (options.defaults) {
                    object.deprecated = false;
                    object.features = null;
                    object.debug_redact = false;
                    object.feature_support = null;
                }
                if (message.deprecated != null && $Object.hasOwnProperty.call(message, "deprecated"))
                    object.deprecated = message.deprecated;
                if (message.features != null && $Object.hasOwnProperty.call(message, "features"))
                    object.features = $root.google.protobuf.FeatureSet.toObject(message.features, options, _depth + 1);
                if (message.debug_redact != null && $Object.hasOwnProperty.call(message, "debug_redact"))
                    object.debug_redact = message.debug_redact;
                if (message.feature_support != null && $Object.hasOwnProperty.call(message, "feature_support"))
                    object.feature_support = $root.google.protobuf.FieldOptions.FeatureSupport.toObject(message.feature_support, options, _depth + 1);
                if (message.uninterpreted_option && message.uninterpreted_option.length) {
                    object.uninterpreted_option = $Array(message.uninterpreted_option.length);
                    for (var j = 0; j < message.uninterpreted_option.length; ++j)
                        object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options, _depth + 1);
                }
                return object;
            };

            /**
             * Converts this EnumValueOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.EnumValueOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EnumValueOptions.prototype.toJSON = function() {
                return EnumValueOptions.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for EnumValueOptions
             * @function getTypeUrl
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            EnumValueOptions.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/google.protobuf.EnumValueOptions";
            };

            return EnumValueOptions;
        })();

        protobuf.ServiceOptions = (function() {

            /**
             * Properties of a ServiceOptions.
             * @typedef {Object} google.protobuf.ServiceOptions.$Properties
             * @property {google.protobuf.FeatureSet.$Properties|null} [features] ServiceOptions features
             * @property {boolean|null} [deprecated] ServiceOptions deprecated
             * @property {Array.<google.protobuf.UninterpretedOption.$Properties>|null} [uninterpreted_option] ServiceOptions uninterpreted_option
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a ServiceOptions.
             * @memberof google.protobuf
             * @interface IServiceOptions
             * @augments google.protobuf.ServiceOptions.$Properties
             * @deprecated Use google.protobuf.ServiceOptions.$Properties instead.
             */

            /**
             * Shape of a ServiceOptions.
             * @typedef {google.protobuf.ServiceOptions.$Properties} google.protobuf.ServiceOptions.$Shape
             */

            /**
             * Constructs a new ServiceOptions.
             * @memberof google.protobuf
             * @classdesc Represents a ServiceOptions.
             * @constructor
             * @param {google.protobuf.ServiceOptions.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            var ServiceOptions = function (properties) {
                this.uninterpreted_option = [];
                if (properties)
                    for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * ServiceOptions features.
             * @member {google.protobuf.FeatureSet.$Properties|null|undefined} features
             * @memberof google.protobuf.ServiceOptions
             * @instance
             */
            ServiceOptions.prototype.features = null;

            /**
             * ServiceOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.ServiceOptions
             * @instance
             */
            ServiceOptions.prototype.deprecated = false;

            /**
             * ServiceOptions uninterpreted_option.
             * @member {Array.<google.protobuf.UninterpretedOption.$Properties>} uninterpreted_option
             * @memberof google.protobuf.ServiceOptions
             * @instance
             */
            ServiceOptions.prototype.uninterpreted_option = $util.emptyArray;

            /**
             * Creates a new ServiceOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {google.protobuf.ServiceOptions.$Properties=} [properties] Properties to set
             * @returns {google.protobuf.ServiceOptions} ServiceOptions instance
             * @type {{
             *   (properties: google.protobuf.ServiceOptions.$Shape): google.protobuf.ServiceOptions & google.protobuf.ServiceOptions.$Shape;
             *   (properties?: google.protobuf.ServiceOptions.$Properties): google.protobuf.ServiceOptions;
             * }}
             */
            ServiceOptions.create = function(properties) {
                return new ServiceOptions(properties);
            };

            /**
             * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {google.protobuf.ServiceOptions.$Properties} message ServiceOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServiceOptions.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.deprecated != null && $Object.hasOwnProperty.call(message, "deprecated"))
                    writer.uint32(/* id 33, wireType 0 =*/264).bool(message.deprecated);
                if (message.features != null && $Object.hasOwnProperty.call(message, "features"))
                    $root.google.protobuf.FeatureSet.encode(message.features, writer.uint32(/* id 34, wireType 2 =*/274).fork(), _depth + 1).ldelim();
                if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                    for (var i = 0; i < message.uninterpreted_option.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (var i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {google.protobuf.ServiceOptions.$Properties} message ServiceOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServiceOptions.encodeDelimited = function(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.ServiceOptions & google.protobuf.ServiceOptions.$Shape} ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ServiceOptions.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.google.protobuf.ServiceOptions();
                while (reader.pos < end) {
                    var start = reader.pos;
                    var tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    var wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 34: {
                            if (wireType !== 2)
                                break;
                            message.features = $root.google.protobuf.FeatureSet.decode(reader, reader.uint32(), $undefined, _depth + 1, message.features);
                            continue;
                        }
                    case 33: {
                            if (wireType !== 0)
                                break;
                            message.deprecated = reader.bool();
                            continue;
                        }
                    case 999: {
                            if (wireType !== 2)
                                break;
                            if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                                message.uninterpreted_option = [];
                            message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32(), $undefined, _depth + 1));
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.ServiceOptions & google.protobuf.ServiceOptions.$Shape} ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ServiceOptions.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ServiceOptions message.
             * @function verify
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ServiceOptions.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.features != null && $Object.hasOwnProperty.call(message, "features")) {
                    var error = $root.google.protobuf.FeatureSet.verify(message.features, _depth + 1);
                    if (error)
                        return "features." + error;
                }
                if (message.deprecated != null && $Object.hasOwnProperty.call(message, "deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.uninterpreted_option != null && $Object.hasOwnProperty.call(message, "uninterpreted_option")) {
                    if (!$Array.isArray(message.uninterpreted_option))
                        return "uninterpreted_option: array expected";
                    for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                        var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpreted_option[i], _depth + 1);
                        if (error)
                            return "uninterpreted_option." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.ServiceOptions} ServiceOptions
             */
            ServiceOptions.fromObject = function (object, _depth) {
                if (object instanceof $root.google.protobuf.ServiceOptions)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".google.protobuf.ServiceOptions: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var message = new $root.google.protobuf.ServiceOptions();
                if (object.features != null) {
                    if (!$util.isObject(object.features))
                        throw $TypeError(".google.protobuf.ServiceOptions.features: object expected");
                    message.features = $root.google.protobuf.FeatureSet.fromObject(object.features, _depth + 1);
                }
                if (object.deprecated != null)
                    message.deprecated = $Boolean(object.deprecated);
                if (object.uninterpreted_option) {
                    if (!$Array.isArray(object.uninterpreted_option))
                        throw $TypeError(".google.protobuf.ServiceOptions.uninterpreted_option: array expected");
                    message.uninterpreted_option = $Array(object.uninterpreted_option.length);
                    for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                        if (!$util.isObject(object.uninterpreted_option[i]))
                            throw $TypeError(".google.protobuf.ServiceOptions.uninterpreted_option: object expected");
                        message.uninterpreted_option[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpreted_option[i], _depth + 1);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {google.protobuf.ServiceOptions} message ServiceOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ServiceOptions.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var object = {};
                if (options.arrays || options.defaults)
                    object.uninterpreted_option = [];
                if (options.defaults) {
                    object.deprecated = false;
                    object.features = null;
                }
                if (message.deprecated != null && $Object.hasOwnProperty.call(message, "deprecated"))
                    object.deprecated = message.deprecated;
                if (message.features != null && $Object.hasOwnProperty.call(message, "features"))
                    object.features = $root.google.protobuf.FeatureSet.toObject(message.features, options, _depth + 1);
                if (message.uninterpreted_option && message.uninterpreted_option.length) {
                    object.uninterpreted_option = $Array(message.uninterpreted_option.length);
                    for (var j = 0; j < message.uninterpreted_option.length; ++j)
                        object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options, _depth + 1);
                }
                return object;
            };

            /**
             * Converts this ServiceOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.ServiceOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ServiceOptions.prototype.toJSON = function() {
                return ServiceOptions.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for ServiceOptions
             * @function getTypeUrl
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            ServiceOptions.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/google.protobuf.ServiceOptions";
            };

            return ServiceOptions;
        })();

        protobuf.MethodOptions = (function() {

            /**
             * Properties of a MethodOptions.
             * @typedef {Object} google.protobuf.MethodOptions.$Properties
             * @property {boolean|null} [deprecated] MethodOptions deprecated
             * @property {google.protobuf.MethodOptions.IdempotencyLevel|null} [idempotency_level] MethodOptions idempotency_level
             * @property {google.protobuf.FeatureSet.$Properties|null} [features] MethodOptions features
             * @property {Array.<google.protobuf.UninterpretedOption.$Properties>|null} [uninterpreted_option] MethodOptions uninterpreted_option
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a MethodOptions.
             * @memberof google.protobuf
             * @interface IMethodOptions
             * @augments google.protobuf.MethodOptions.$Properties
             * @deprecated Use google.protobuf.MethodOptions.$Properties instead.
             */

            /**
             * Shape of a MethodOptions.
             * @typedef {google.protobuf.MethodOptions.$Properties} google.protobuf.MethodOptions.$Shape
             */

            /**
             * Constructs a new MethodOptions.
             * @memberof google.protobuf
             * @classdesc Represents a MethodOptions.
             * @constructor
             * @param {google.protobuf.MethodOptions.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            var MethodOptions = function (properties) {
                this.uninterpreted_option = [];
                if (properties)
                    for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * MethodOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.MethodOptions
             * @instance
             */
            MethodOptions.prototype.deprecated = false;

            /**
             * MethodOptions idempotency_level.
             * @member {google.protobuf.MethodOptions.IdempotencyLevel} idempotency_level
             * @memberof google.protobuf.MethodOptions
             * @instance
             */
            MethodOptions.prototype.idempotency_level = 0;

            /**
             * MethodOptions features.
             * @member {google.protobuf.FeatureSet.$Properties|null|undefined} features
             * @memberof google.protobuf.MethodOptions
             * @instance
             */
            MethodOptions.prototype.features = null;

            /**
             * MethodOptions uninterpreted_option.
             * @member {Array.<google.protobuf.UninterpretedOption.$Properties>} uninterpreted_option
             * @memberof google.protobuf.MethodOptions
             * @instance
             */
            MethodOptions.prototype.uninterpreted_option = $util.emptyArray;

            /**
             * Creates a new MethodOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {google.protobuf.MethodOptions.$Properties=} [properties] Properties to set
             * @returns {google.protobuf.MethodOptions} MethodOptions instance
             * @type {{
             *   (properties: google.protobuf.MethodOptions.$Shape): google.protobuf.MethodOptions & google.protobuf.MethodOptions.$Shape;
             *   (properties?: google.protobuf.MethodOptions.$Properties): google.protobuf.MethodOptions;
             * }}
             */
            MethodOptions.create = function(properties) {
                return new MethodOptions(properties);
            };

            /**
             * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {google.protobuf.MethodOptions.$Properties} message MethodOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MethodOptions.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.deprecated != null && $Object.hasOwnProperty.call(message, "deprecated"))
                    writer.uint32(/* id 33, wireType 0 =*/264).bool(message.deprecated);
                if (message.idempotency_level != null && $Object.hasOwnProperty.call(message, "idempotency_level"))
                    writer.uint32(/* id 34, wireType 0 =*/272).int32(message.idempotency_level);
                if (message.features != null && $Object.hasOwnProperty.call(message, "features"))
                    $root.google.protobuf.FeatureSet.encode(message.features, writer.uint32(/* id 35, wireType 2 =*/282).fork(), _depth + 1).ldelim();
                if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                    for (var i = 0; i < message.uninterpreted_option.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (var i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {google.protobuf.MethodOptions.$Properties} message MethodOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MethodOptions.encodeDelimited = function(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a MethodOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.MethodOptions & google.protobuf.MethodOptions.$Shape} MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MethodOptions.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.google.protobuf.MethodOptions(), value;
                while (reader.pos < end) {
                    var start = reader.pos;
                    var tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    var wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 33: {
                            if (wireType !== 0)
                                break;
                            message.deprecated = reader.bool();
                            continue;
                        }
                    case 34: {
                            if (wireType !== 0)
                                break;
                            value = reader.int32();
                            if ($root.google.protobuf.MethodOptions.IdempotencyLevel[value] !== $undefined)
                                message.idempotency_level = value;
                            else if (!reader.discardUnknown) {
                                $util.makeProp(message, "$unknowns", false);
                                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                            }
                            continue;
                        }
                    case 35: {
                            if (wireType !== 2)
                                break;
                            message.features = $root.google.protobuf.FeatureSet.decode(reader, reader.uint32(), $undefined, _depth + 1, message.features);
                            continue;
                        }
                    case 999: {
                            if (wireType !== 2)
                                break;
                            if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                                message.uninterpreted_option = [];
                            message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32(), $undefined, _depth + 1));
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.MethodOptions & google.protobuf.MethodOptions.$Shape} MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MethodOptions.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MethodOptions message.
             * @function verify
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MethodOptions.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.deprecated != null && $Object.hasOwnProperty.call(message, "deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.idempotency_level != null && $Object.hasOwnProperty.call(message, "idempotency_level"))
                    switch (message.idempotency_level) {
                    default:
                        return "idempotency_level: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.features != null && $Object.hasOwnProperty.call(message, "features")) {
                    var error = $root.google.protobuf.FeatureSet.verify(message.features, _depth + 1);
                    if (error)
                        return "features." + error;
                }
                if (message.uninterpreted_option != null && $Object.hasOwnProperty.call(message, "uninterpreted_option")) {
                    if (!$Array.isArray(message.uninterpreted_option))
                        return "uninterpreted_option: array expected";
                    for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                        var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpreted_option[i], _depth + 1);
                        if (error)
                            return "uninterpreted_option." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.MethodOptions} MethodOptions
             */
            MethodOptions.fromObject = function (object, _depth) {
                if (object instanceof $root.google.protobuf.MethodOptions)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".google.protobuf.MethodOptions: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var message = new $root.google.protobuf.MethodOptions();
                if (object.deprecated != null)
                    message.deprecated = $Boolean(object.deprecated);
                switch (object.idempotency_level) {
                case "IDEMPOTENCY_UNKNOWN":
                case 0:
                    message.idempotency_level = 0;
                    break;
                case "NO_SIDE_EFFECTS":
                case 1:
                    message.idempotency_level = 1;
                    break;
                case "IDEMPOTENT":
                case 2:
                    message.idempotency_level = 2;
                    break;
                default:
                }
                if (object.features != null) {
                    if (!$util.isObject(object.features))
                        throw $TypeError(".google.protobuf.MethodOptions.features: object expected");
                    message.features = $root.google.protobuf.FeatureSet.fromObject(object.features, _depth + 1);
                }
                if (object.uninterpreted_option) {
                    if (!$Array.isArray(object.uninterpreted_option))
                        throw $TypeError(".google.protobuf.MethodOptions.uninterpreted_option: array expected");
                    message.uninterpreted_option = $Array(object.uninterpreted_option.length);
                    for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                        if (!$util.isObject(object.uninterpreted_option[i]))
                            throw $TypeError(".google.protobuf.MethodOptions.uninterpreted_option: object expected");
                        message.uninterpreted_option[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpreted_option[i], _depth + 1);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {google.protobuf.MethodOptions} message MethodOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MethodOptions.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var object = {};
                if (options.arrays || options.defaults)
                    object.uninterpreted_option = [];
                if (options.defaults) {
                    object.deprecated = false;
                    object.idempotency_level = options.enums === $String ? "IDEMPOTENCY_UNKNOWN" : 0;
                    object.features = null;
                }
                if (message.deprecated != null && $Object.hasOwnProperty.call(message, "deprecated"))
                    object.deprecated = message.deprecated;
                if (message.idempotency_level != null && $Object.hasOwnProperty.call(message, "idempotency_level"))
                    object.idempotency_level = options.enums === $String ? $root.google.protobuf.MethodOptions.IdempotencyLevel[message.idempotency_level] === $undefined ? message.idempotency_level : $root.google.protobuf.MethodOptions.IdempotencyLevel[message.idempotency_level] : message.idempotency_level;
                if (message.features != null && $Object.hasOwnProperty.call(message, "features"))
                    object.features = $root.google.protobuf.FeatureSet.toObject(message.features, options, _depth + 1);
                if (message.uninterpreted_option && message.uninterpreted_option.length) {
                    object.uninterpreted_option = $Array(message.uninterpreted_option.length);
                    for (var j = 0; j < message.uninterpreted_option.length; ++j)
                        object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options, _depth + 1);
                }
                return object;
            };

            /**
             * Converts this MethodOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.MethodOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MethodOptions.prototype.toJSON = function() {
                return MethodOptions.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for MethodOptions
             * @function getTypeUrl
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            MethodOptions.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/google.protobuf.MethodOptions";
            };

            /**
             * IdempotencyLevel enum.
             * @name google.protobuf.MethodOptions.IdempotencyLevel
             * @enum {number}
             * @property {number} IDEMPOTENCY_UNKNOWN=0 IDEMPOTENCY_UNKNOWN value
             * @property {number} NO_SIDE_EFFECTS=1 NO_SIDE_EFFECTS value
             * @property {number} IDEMPOTENT=2 IDEMPOTENT value
             */
            MethodOptions.IdempotencyLevel = (function() {
                var valuesById = $Object.create(null), values = $Object.create(valuesById);
                values[valuesById[0] = "IDEMPOTENCY_UNKNOWN"] = 0;
                values[valuesById[1] = "NO_SIDE_EFFECTS"] = 1;
                values[valuesById[2] = "IDEMPOTENT"] = 2;
                return values;
            })();

            return MethodOptions;
        })();

        protobuf.UninterpretedOption = (function() {

            /**
             * Properties of an UninterpretedOption.
             * @typedef {Object} google.protobuf.UninterpretedOption.$Properties
             * @property {Array.<google.protobuf.UninterpretedOption.NamePart.$Properties>|null} [name] UninterpretedOption name
             * @property {string|null} [identifier_value] UninterpretedOption identifier_value
             * @property {number|Long|null} [positive_int_value] UninterpretedOption positive_int_value
             * @property {number|Long|null} [negative_int_value] UninterpretedOption negative_int_value
             * @property {number|null} [double_value] UninterpretedOption double_value
             * @property {Uint8Array|null} [string_value] UninterpretedOption string_value
             * @property {string|null} [aggregate_value] UninterpretedOption aggregate_value
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of an UninterpretedOption.
             * @memberof google.protobuf
             * @interface IUninterpretedOption
             * @augments google.protobuf.UninterpretedOption.$Properties
             * @deprecated Use google.protobuf.UninterpretedOption.$Properties instead.
             */

            /**
             * Shape of an UninterpretedOption.
             * @typedef {google.protobuf.UninterpretedOption.$Properties} google.protobuf.UninterpretedOption.$Shape
             */

            /**
             * Constructs a new UninterpretedOption.
             * @memberof google.protobuf
             * @classdesc Represents an UninterpretedOption.
             * @constructor
             * @param {google.protobuf.UninterpretedOption.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            var UninterpretedOption = function (properties) {
                this.name = [];
                if (properties)
                    for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * UninterpretedOption name.
             * @member {Array.<google.protobuf.UninterpretedOption.NamePart.$Properties>} name
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.name = $util.emptyArray;

            /**
             * UninterpretedOption identifier_value.
             * @member {string} identifier_value
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.identifier_value = "";

            /**
             * UninterpretedOption positive_int_value.
             * @member {number|Long} positive_int_value
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.positive_int_value = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * UninterpretedOption negative_int_value.
             * @member {number|Long} negative_int_value
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.negative_int_value = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * UninterpretedOption double_value.
             * @member {number} double_value
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.double_value = 0;

            /**
             * UninterpretedOption string_value.
             * @member {Uint8Array} string_value
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.string_value = $util.newBuffer([]);

            /**
             * UninterpretedOption aggregate_value.
             * @member {string} aggregate_value
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.aggregate_value = "";

            /**
             * Creates a new UninterpretedOption instance using the specified properties.
             * @function create
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {google.protobuf.UninterpretedOption.$Properties=} [properties] Properties to set
             * @returns {google.protobuf.UninterpretedOption} UninterpretedOption instance
             * @type {{
             *   (properties: google.protobuf.UninterpretedOption.$Shape): google.protobuf.UninterpretedOption & google.protobuf.UninterpretedOption.$Shape;
             *   (properties?: google.protobuf.UninterpretedOption.$Properties): google.protobuf.UninterpretedOption;
             * }}
             */
            UninterpretedOption.create = function(properties) {
                return new UninterpretedOption(properties);
            };

            /**
             * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {google.protobuf.UninterpretedOption.$Properties} message UninterpretedOption message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UninterpretedOption.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.name != null && message.name.length)
                    for (var i = 0; i < message.name.length; ++i)
                        $root.google.protobuf.UninterpretedOption.NamePart.encode(message.name[i], writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
                if (message.identifier_value != null && $Object.hasOwnProperty.call(message, "identifier_value"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.identifier_value);
                if (message.positive_int_value != null && $Object.hasOwnProperty.call(message, "positive_int_value"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.positive_int_value);
                if (message.negative_int_value != null && $Object.hasOwnProperty.call(message, "negative_int_value"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int64(message.negative_int_value);
                if (message.double_value != null && $Object.hasOwnProperty.call(message, "double_value"))
                    writer.uint32(/* id 6, wireType 1 =*/49).double(message.double_value);
                if (message.string_value != null && $Object.hasOwnProperty.call(message, "string_value"))
                    writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.string_value);
                if (message.aggregate_value != null && $Object.hasOwnProperty.call(message, "aggregate_value"))
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.aggregate_value);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (var i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {google.protobuf.UninterpretedOption.$Properties} message UninterpretedOption message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UninterpretedOption.encodeDelimited = function(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.UninterpretedOption & google.protobuf.UninterpretedOption.$Shape} UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UninterpretedOption.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.google.protobuf.UninterpretedOption();
                while (reader.pos < end) {
                    var start = reader.pos;
                    var tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    var wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 2: {
                            if (wireType !== 2)
                                break;
                            if (!(message.name && message.name.length))
                                message.name = [];
                            message.name.push($root.google.protobuf.UninterpretedOption.NamePart.decode(reader, reader.uint32(), $undefined, _depth + 1));
                            continue;
                        }
                    case 3: {
                            if (wireType !== 2)
                                break;
                            message.identifier_value = reader.string();
                            continue;
                        }
                    case 4: {
                            if (wireType !== 0)
                                break;
                            message.positive_int_value = reader.uint64();
                            continue;
                        }
                    case 5: {
                            if (wireType !== 0)
                                break;
                            message.negative_int_value = reader.int64();
                            continue;
                        }
                    case 6: {
                            if (wireType !== 1)
                                break;
                            message.double_value = reader.double();
                            continue;
                        }
                    case 7: {
                            if (wireType !== 2)
                                break;
                            message.string_value = reader.bytes();
                            continue;
                        }
                    case 8: {
                            if (wireType !== 2)
                                break;
                            message.aggregate_value = reader.string();
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.UninterpretedOption & google.protobuf.UninterpretedOption.$Shape} UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UninterpretedOption.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an UninterpretedOption message.
             * @function verify
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UninterpretedOption.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.name != null && $Object.hasOwnProperty.call(message, "name")) {
                    if (!$Array.isArray(message.name))
                        return "name: array expected";
                    for (var i = 0; i < message.name.length; ++i) {
                        var error = $root.google.protobuf.UninterpretedOption.NamePart.verify(message.name[i], _depth + 1);
                        if (error)
                            return "name." + error;
                    }
                }
                if (message.identifier_value != null && $Object.hasOwnProperty.call(message, "identifier_value"))
                    if (!$util.isString(message.identifier_value))
                        return "identifier_value: string expected";
                if (message.positive_int_value != null && $Object.hasOwnProperty.call(message, "positive_int_value"))
                    if (!$util.isInteger(message.positive_int_value) && !(message.positive_int_value && $util.isInteger(message.positive_int_value.low) && $util.isInteger(message.positive_int_value.high)))
                        return "positive_int_value: integer|Long expected";
                if (message.negative_int_value != null && $Object.hasOwnProperty.call(message, "negative_int_value"))
                    if (!$util.isInteger(message.negative_int_value) && !(message.negative_int_value && $util.isInteger(message.negative_int_value.low) && $util.isInteger(message.negative_int_value.high)))
                        return "negative_int_value: integer|Long expected";
                if (message.double_value != null && $Object.hasOwnProperty.call(message, "double_value"))
                    if (typeof message.double_value !== "number")
                        return "double_value: number expected";
                if (message.string_value != null && $Object.hasOwnProperty.call(message, "string_value"))
                    if (!(message.string_value && typeof message.string_value.length === "number" || $util.isString(message.string_value)))
                        return "string_value: buffer expected";
                if (message.aggregate_value != null && $Object.hasOwnProperty.call(message, "aggregate_value"))
                    if (!$util.isString(message.aggregate_value))
                        return "aggregate_value: string expected";
                return null;
            };

            /**
             * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
             */
            UninterpretedOption.fromObject = function (object, _depth) {
                if (object instanceof $root.google.protobuf.UninterpretedOption)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".google.protobuf.UninterpretedOption: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var message = new $root.google.protobuf.UninterpretedOption();
                if (object.name) {
                    if (!$Array.isArray(object.name))
                        throw $TypeError(".google.protobuf.UninterpretedOption.name: array expected");
                    message.name = $Array(object.name.length);
                    for (var i = 0; i < object.name.length; ++i) {
                        if (!$util.isObject(object.name[i]))
                            throw $TypeError(".google.protobuf.UninterpretedOption.name: object expected");
                        message.name[i] = $root.google.protobuf.UninterpretedOption.NamePart.fromObject(object.name[i], _depth + 1);
                    }
                }
                if (object.identifier_value != null)
                    message.identifier_value = $String(object.identifier_value);
                if (object.positive_int_value != null)
                    if ($util.Long)
                        message.positive_int_value = $util.Long.fromValue(object.positive_int_value, true);
                    else if (typeof object.positive_int_value === "string")
                        message.positive_int_value = $parseInt(object.positive_int_value, 10);
                    else if (typeof object.positive_int_value === "number")
                        message.positive_int_value = object.positive_int_value;
                    else if (typeof object.positive_int_value === "object")
                        message.positive_int_value = new $util.LongBits(object.positive_int_value.low >>> 0, object.positive_int_value.high >>> 0).toNumber(true);
                if (object.negative_int_value != null)
                    if ($util.Long)
                        message.negative_int_value = $util.Long.fromValue(object.negative_int_value, false);
                    else if (typeof object.negative_int_value === "string")
                        message.negative_int_value = $parseInt(object.negative_int_value, 10);
                    else if (typeof object.negative_int_value === "number")
                        message.negative_int_value = object.negative_int_value;
                    else if (typeof object.negative_int_value === "object")
                        message.negative_int_value = new $util.LongBits(object.negative_int_value.low >>> 0, object.negative_int_value.high >>> 0).toNumber();
                if (object.double_value != null)
                    message.double_value = $Number(object.double_value);
                if (object.string_value != null)
                    if (typeof object.string_value === "string")
                        $util.base64.decode(object.string_value, message.string_value = $util.newBuffer($util.base64.length(object.string_value)), 0);
                    else if (object.string_value.length >= 0)
                        message.string_value = object.string_value;
                if (object.aggregate_value != null)
                    message.aggregate_value = $String(object.aggregate_value);
                return message;
            };

            /**
             * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {google.protobuf.UninterpretedOption} message UninterpretedOption
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UninterpretedOption.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var object = {};
                if (options.arrays || options.defaults)
                    object.name = [];
                if (options.defaults) {
                    object.identifier_value = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.positive_int_value = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                    } else
                        object.positive_int_value = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.negative_int_value = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                    } else
                        object.negative_int_value = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
                    object.double_value = 0;
                    if (options.bytes === $String)
                        object.string_value = "";
                    else {
                        object.string_value = [];
                        if (options.bytes !== $Array)
                            object.string_value = $util.newBuffer(object.string_value);
                    }
                    object.aggregate_value = "";
                }
                if (message.name && message.name.length) {
                    object.name = $Array(message.name.length);
                    for (var j = 0; j < message.name.length; ++j)
                        object.name[j] = $root.google.protobuf.UninterpretedOption.NamePart.toObject(message.name[j], options, _depth + 1);
                }
                if (message.identifier_value != null && $Object.hasOwnProperty.call(message, "identifier_value"))
                    object.identifier_value = message.identifier_value;
                if (message.positive_int_value != null && $Object.hasOwnProperty.call(message, "positive_int_value"))
                    if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                        object.positive_int_value = typeof message.positive_int_value === "number" ? $BigInt(message.positive_int_value) : $util.Long.fromBits(message.positive_int_value.low >>> 0, message.positive_int_value.high >>> 0, true).toBigInt();
                    else if (typeof message.positive_int_value === "number")
                        object.positive_int_value = options.longs === $String ? $String(message.positive_int_value) : message.positive_int_value;
                    else
                        object.positive_int_value = options.longs === $String ? $util.Long.prototype.toString.call(message.positive_int_value) : options.longs === $Number ? new $util.LongBits(message.positive_int_value.low >>> 0, message.positive_int_value.high >>> 0).toNumber(true) : message.positive_int_value;
                if (message.negative_int_value != null && $Object.hasOwnProperty.call(message, "negative_int_value"))
                    if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                        object.negative_int_value = typeof message.negative_int_value === "number" ? $BigInt(message.negative_int_value) : $util.Long.fromBits(message.negative_int_value.low >>> 0, message.negative_int_value.high >>> 0, false).toBigInt();
                    else if (typeof message.negative_int_value === "number")
                        object.negative_int_value = options.longs === $String ? $String(message.negative_int_value) : message.negative_int_value;
                    else
                        object.negative_int_value = options.longs === $String ? $util.Long.prototype.toString.call(message.negative_int_value) : options.longs === $Number ? new $util.LongBits(message.negative_int_value.low >>> 0, message.negative_int_value.high >>> 0).toNumber() : message.negative_int_value;
                if (message.double_value != null && $Object.hasOwnProperty.call(message, "double_value"))
                    object.double_value = options.json && !$isFinite(message.double_value) ? $String(message.double_value) : message.double_value;
                if (message.string_value != null && $Object.hasOwnProperty.call(message, "string_value"))
                    object.string_value = options.bytes === $String ? $util.base64.encode(message.string_value, 0, message.string_value.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.string_value) : message.string_value;
                if (message.aggregate_value != null && $Object.hasOwnProperty.call(message, "aggregate_value"))
                    object.aggregate_value = message.aggregate_value;
                return object;
            };

            /**
             * Converts this UninterpretedOption to JSON.
             * @function toJSON
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UninterpretedOption.prototype.toJSON = function() {
                return UninterpretedOption.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for UninterpretedOption
             * @function getTypeUrl
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            UninterpretedOption.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/google.protobuf.UninterpretedOption";
            };

            UninterpretedOption.NamePart = (function() {

                /**
                 * Properties of a NamePart.
                 * @typedef {Object} google.protobuf.UninterpretedOption.NamePart.$Properties
                 * @property {string} name_part NamePart name_part
                 * @property {boolean} is_extension NamePart is_extension
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */

                /**
                 * Properties of a NamePart.
                 * @memberof google.protobuf.UninterpretedOption
                 * @interface INamePart
                 * @augments google.protobuf.UninterpretedOption.NamePart.$Properties
                 * @deprecated Use google.protobuf.UninterpretedOption.NamePart.$Properties instead.
                 */

                /**
                 * Shape of a NamePart.
                 * @typedef {google.protobuf.UninterpretedOption.NamePart.$Properties} google.protobuf.UninterpretedOption.NamePart.$Shape
                 */

                /**
                 * Constructs a new NamePart.
                 * @memberof google.protobuf.UninterpretedOption
                 * @classdesc Represents a NamePart.
                 * @constructor
                 * @param {google.protobuf.UninterpretedOption.NamePart.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                var NamePart = function (properties) {
                    if (properties)
                        for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };

                /**
                 * NamePart name_part.
                 * @member {string} name_part
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @instance
                 */
                NamePart.prototype.name_part = "";

                /**
                 * NamePart is_extension.
                 * @member {boolean} is_extension
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @instance
                 */
                NamePart.prototype.is_extension = false;

                /**
                 * Creates a new NamePart instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {google.protobuf.UninterpretedOption.NamePart.$Properties=} [properties] Properties to set
                 * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart instance
                 * @type {{
                 *   (properties: google.protobuf.UninterpretedOption.NamePart.$Shape): google.protobuf.UninterpretedOption.NamePart & google.protobuf.UninterpretedOption.NamePart.$Shape;
                 *   (properties?: google.protobuf.UninterpretedOption.NamePart.$Properties): google.protobuf.UninterpretedOption.NamePart;
                 * }}
                 */
                NamePart.create = function(properties) {
                    return new NamePart(properties);
                };

                /**
                 * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {google.protobuf.UninterpretedOption.NamePart.$Properties} message NamePart message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NamePart.encode = function (message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name_part);
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.is_extension);
                    if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                        for (var i = 0; i < message.$unknowns.length; ++i)
                            writer.raw(message.$unknowns[i]);
                    return writer;
                };

                /**
                 * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {google.protobuf.UninterpretedOption.NamePart.$Properties} message NamePart message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NamePart.encodeDelimited = function(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a NamePart message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.UninterpretedOption.NamePart & google.protobuf.UninterpretedOption.NamePart.$Shape} NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NamePart.decode = function (reader, length, _end, _depth, _target) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $Reader.recursionLimit)
                        throw $Error("max depth exceeded");
                    var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.google.protobuf.UninterpretedOption.NamePart();
                    while (reader.pos < end) {
                        var start = reader.pos;
                        var tag = reader.tag();
                        if (tag === _end) {
                            _end = $undefined;
                            break;
                        }
                        var wireType = tag & 7;
                        switch (tag >>>= 3) {
                        case 1: {
                                if (wireType !== 2)
                                    break;
                                message.name_part = reader.string();
                                continue;
                            }
                        case 2: {
                                if (wireType !== 0)
                                    break;
                                message.is_extension = reader.bool();
                                continue;
                            }
                        }
                        reader.skipType(wireType, _depth, tag);
                        if (!reader.discardUnknown) {
                            $util.makeProp(message, "$unknowns", false);
                            (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                        }
                    }
                    if (_end !== $undefined)
                        throw $Error("missing end group");
                    if (!$Object.hasOwnProperty.call(message, "name_part"))
                        throw $util.ProtocolError("missing required 'name_part'", { instance: message });
                    if (!$Object.hasOwnProperty.call(message, "is_extension"))
                        throw $util.ProtocolError("missing required 'is_extension'", { instance: message });
                    return message;
                };

                /**
                 * Decodes a NamePart message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.UninterpretedOption.NamePart & google.protobuf.UninterpretedOption.NamePart.$Shape} NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NamePart.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a NamePart message.
                 * @function verify
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                NamePart.verify = function (message, _depth) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        return "max depth exceeded";
                    if (!$util.isString(message.name_part))
                        return "name_part: string expected";
                    if (typeof message.is_extension !== "boolean")
                        return "is_extension: boolean expected";
                    return null;
                };

                /**
                 * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                 */
                NamePart.fromObject = function (object, _depth) {
                    if (object instanceof $root.google.protobuf.UninterpretedOption.NamePart)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".google.protobuf.UninterpretedOption.NamePart: object expected");
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var message = new $root.google.protobuf.UninterpretedOption.NamePart();
                    if (object.name_part != null)
                        message.name_part = $String(object.name_part);
                    if (object.is_extension != null)
                        message.is_extension = $Boolean(object.is_extension);
                    return message;
                };

                /**
                 * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {google.protobuf.UninterpretedOption.NamePart} message NamePart
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                NamePart.toObject = function (message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var object = {};
                    if (options.defaults) {
                        object.name_part = "";
                        object.is_extension = false;
                    }
                    if (message.name_part != null && $Object.hasOwnProperty.call(message, "name_part"))
                        object.name_part = message.name_part;
                    if (message.is_extension != null && $Object.hasOwnProperty.call(message, "is_extension"))
                        object.is_extension = message.is_extension;
                    return object;
                };

                /**
                 * Converts this NamePart to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                NamePart.prototype.toJSON = function() {
                    return NamePart.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the type url for NamePart
                 * @function getTypeUrl
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                NamePart.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/google.protobuf.UninterpretedOption.NamePart";
                };

                return NamePart;
            })();

            return UninterpretedOption;
        })();

        protobuf.FeatureSet = (function() {

            /**
             * Properties of a FeatureSet.
             * @typedef {Object} google.protobuf.FeatureSet.$Properties
             * @property {google.protobuf.FeatureSet.FieldPresence|null} [field_presence] FeatureSet field_presence
             * @property {google.protobuf.FeatureSet.EnumType|null} [enum_type] FeatureSet enum_type
             * @property {google.protobuf.FeatureSet.RepeatedFieldEncoding|null} [repeated_field_encoding] FeatureSet repeated_field_encoding
             * @property {google.protobuf.FeatureSet.Utf8Validation|null} [utf8_validation] FeatureSet utf8_validation
             * @property {google.protobuf.FeatureSet.MessageEncoding|null} [message_encoding] FeatureSet message_encoding
             * @property {google.protobuf.FeatureSet.JsonFormat|null} [json_format] FeatureSet json_format
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a FeatureSet.
             * @memberof google.protobuf
             * @interface IFeatureSet
             * @augments google.protobuf.FeatureSet.$Properties
             * @deprecated Use google.protobuf.FeatureSet.$Properties instead.
             */

            /**
             * Shape of a FeatureSet.
             * @typedef {google.protobuf.FeatureSet.$Properties} google.protobuf.FeatureSet.$Shape
             */

            /**
             * Constructs a new FeatureSet.
             * @memberof google.protobuf
             * @classdesc Represents a FeatureSet.
             * @constructor
             * @param {google.protobuf.FeatureSet.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            var FeatureSet = function (properties) {
                if (properties)
                    for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * FeatureSet field_presence.
             * @member {google.protobuf.FeatureSet.FieldPresence} field_presence
             * @memberof google.protobuf.FeatureSet
             * @instance
             */
            FeatureSet.prototype.field_presence = 0;

            /**
             * FeatureSet enum_type.
             * @member {google.protobuf.FeatureSet.EnumType} enum_type
             * @memberof google.protobuf.FeatureSet
             * @instance
             */
            FeatureSet.prototype.enum_type = 0;

            /**
             * FeatureSet repeated_field_encoding.
             * @member {google.protobuf.FeatureSet.RepeatedFieldEncoding} repeated_field_encoding
             * @memberof google.protobuf.FeatureSet
             * @instance
             */
            FeatureSet.prototype.repeated_field_encoding = 0;

            /**
             * FeatureSet utf8_validation.
             * @member {google.protobuf.FeatureSet.Utf8Validation} utf8_validation
             * @memberof google.protobuf.FeatureSet
             * @instance
             */
            FeatureSet.prototype.utf8_validation = 0;

            /**
             * FeatureSet message_encoding.
             * @member {google.protobuf.FeatureSet.MessageEncoding} message_encoding
             * @memberof google.protobuf.FeatureSet
             * @instance
             */
            FeatureSet.prototype.message_encoding = 0;

            /**
             * FeatureSet json_format.
             * @member {google.protobuf.FeatureSet.JsonFormat} json_format
             * @memberof google.protobuf.FeatureSet
             * @instance
             */
            FeatureSet.prototype.json_format = 0;

            /**
             * Creates a new FeatureSet instance using the specified properties.
             * @function create
             * @memberof google.protobuf.FeatureSet
             * @static
             * @param {google.protobuf.FeatureSet.$Properties=} [properties] Properties to set
             * @returns {google.protobuf.FeatureSet} FeatureSet instance
             * @type {{
             *   (properties: google.protobuf.FeatureSet.$Shape): google.protobuf.FeatureSet & google.protobuf.FeatureSet.$Shape;
             *   (properties?: google.protobuf.FeatureSet.$Properties): google.protobuf.FeatureSet;
             * }}
             */
            FeatureSet.create = function(properties) {
                return new FeatureSet(properties);
            };

            /**
             * Encodes the specified FeatureSet message. Does not implicitly {@link google.protobuf.FeatureSet.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FeatureSet
             * @static
             * @param {google.protobuf.FeatureSet.$Properties} message FeatureSet message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FeatureSet.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.field_presence != null && $Object.hasOwnProperty.call(message, "field_presence"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.field_presence);
                if (message.enum_type != null && $Object.hasOwnProperty.call(message, "enum_type"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.enum_type);
                if (message.repeated_field_encoding != null && $Object.hasOwnProperty.call(message, "repeated_field_encoding"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.repeated_field_encoding);
                if (message.utf8_validation != null && $Object.hasOwnProperty.call(message, "utf8_validation"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.utf8_validation);
                if (message.message_encoding != null && $Object.hasOwnProperty.call(message, "message_encoding"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.message_encoding);
                if (message.json_format != null && $Object.hasOwnProperty.call(message, "json_format"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.json_format);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (var i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified FeatureSet message, length delimited. Does not implicitly {@link google.protobuf.FeatureSet.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.FeatureSet
             * @static
             * @param {google.protobuf.FeatureSet.$Properties} message FeatureSet message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FeatureSet.encodeDelimited = function(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a FeatureSet message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FeatureSet
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FeatureSet & google.protobuf.FeatureSet.$Shape} FeatureSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FeatureSet.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.google.protobuf.FeatureSet(), value;
                while (reader.pos < end) {
                    var start = reader.pos;
                    var tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    var wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 0)
                                break;
                            value = reader.int32();
                            if ($root.google.protobuf.FeatureSet.FieldPresence[value] !== $undefined)
                                message.field_presence = value;
                            else if (!reader.discardUnknown) {
                                $util.makeProp(message, "$unknowns", false);
                                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                            }
                            continue;
                        }
                    case 2: {
                            if (wireType !== 0)
                                break;
                            value = reader.int32();
                            if ($root.google.protobuf.FeatureSet.EnumType[value] !== $undefined)
                                message.enum_type = value;
                            else if (!reader.discardUnknown) {
                                $util.makeProp(message, "$unknowns", false);
                                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                            }
                            continue;
                        }
                    case 3: {
                            if (wireType !== 0)
                                break;
                            value = reader.int32();
                            if ($root.google.protobuf.FeatureSet.RepeatedFieldEncoding[value] !== $undefined)
                                message.repeated_field_encoding = value;
                            else if (!reader.discardUnknown) {
                                $util.makeProp(message, "$unknowns", false);
                                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                            }
                            continue;
                        }
                    case 4: {
                            if (wireType !== 0)
                                break;
                            value = reader.int32();
                            if ($root.google.protobuf.FeatureSet.Utf8Validation[value] !== $undefined)
                                message.utf8_validation = value;
                            else if (!reader.discardUnknown) {
                                $util.makeProp(message, "$unknowns", false);
                                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                            }
                            continue;
                        }
                    case 5: {
                            if (wireType !== 0)
                                break;
                            value = reader.int32();
                            if ($root.google.protobuf.FeatureSet.MessageEncoding[value] !== $undefined)
                                message.message_encoding = value;
                            else if (!reader.discardUnknown) {
                                $util.makeProp(message, "$unknowns", false);
                                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                            }
                            continue;
                        }
                    case 6: {
                            if (wireType !== 0)
                                break;
                            value = reader.int32();
                            if ($root.google.protobuf.FeatureSet.JsonFormat[value] !== $undefined)
                                message.json_format = value;
                            else if (!reader.discardUnknown) {
                                $util.makeProp(message, "$unknowns", false);
                                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                            }
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes a FeatureSet message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.FeatureSet
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.FeatureSet & google.protobuf.FeatureSet.$Shape} FeatureSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FeatureSet.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FeatureSet message.
             * @function verify
             * @memberof google.protobuf.FeatureSet
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FeatureSet.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.field_presence != null && $Object.hasOwnProperty.call(message, "field_presence"))
                    switch (message.field_presence) {
                    default:
                        return "field_presence: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
                if (message.enum_type != null && $Object.hasOwnProperty.call(message, "enum_type"))
                    switch (message.enum_type) {
                    default:
                        return "enum_type: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.repeated_field_encoding != null && $Object.hasOwnProperty.call(message, "repeated_field_encoding"))
                    switch (message.repeated_field_encoding) {
                    default:
                        return "repeated_field_encoding: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.utf8_validation != null && $Object.hasOwnProperty.call(message, "utf8_validation"))
                    switch (message.utf8_validation) {
                    default:
                        return "utf8_validation: enum value expected";
                    case 0:
                    case 2:
                    case 3:
                        break;
                    }
                if (message.message_encoding != null && $Object.hasOwnProperty.call(message, "message_encoding"))
                    switch (message.message_encoding) {
                    default:
                        return "message_encoding: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.json_format != null && $Object.hasOwnProperty.call(message, "json_format"))
                    switch (message.json_format) {
                    default:
                        return "json_format: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                return null;
            };

            /**
             * Creates a FeatureSet message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.FeatureSet
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FeatureSet} FeatureSet
             */
            FeatureSet.fromObject = function (object, _depth) {
                if (object instanceof $root.google.protobuf.FeatureSet)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".google.protobuf.FeatureSet: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var message = new $root.google.protobuf.FeatureSet();
                switch (object.field_presence) {
                case "FIELD_PRESENCE_UNKNOWN":
                case 0:
                    message.field_presence = 0;
                    break;
                case "EXPLICIT":
                case 1:
                    message.field_presence = 1;
                    break;
                case "IMPLICIT":
                case 2:
                    message.field_presence = 2;
                    break;
                case "LEGACY_REQUIRED":
                case 3:
                    message.field_presence = 3;
                    break;
                default:
                }
                switch (object.enum_type) {
                case "ENUM_TYPE_UNKNOWN":
                case 0:
                    message.enum_type = 0;
                    break;
                case "OPEN":
                case 1:
                    message.enum_type = 1;
                    break;
                case "CLOSED":
                case 2:
                    message.enum_type = 2;
                    break;
                default:
                }
                switch (object.repeated_field_encoding) {
                case "REPEATED_FIELD_ENCODING_UNKNOWN":
                case 0:
                    message.repeated_field_encoding = 0;
                    break;
                case "PACKED":
                case 1:
                    message.repeated_field_encoding = 1;
                    break;
                case "EXPANDED":
                case 2:
                    message.repeated_field_encoding = 2;
                    break;
                default:
                }
                switch (object.utf8_validation) {
                case "UTF8_VALIDATION_UNKNOWN":
                case 0:
                    message.utf8_validation = 0;
                    break;
                case "VERIFY":
                case 2:
                    message.utf8_validation = 2;
                    break;
                case "NONE":
                case 3:
                    message.utf8_validation = 3;
                    break;
                default:
                }
                switch (object.message_encoding) {
                case "MESSAGE_ENCODING_UNKNOWN":
                case 0:
                    message.message_encoding = 0;
                    break;
                case "LENGTH_PREFIXED":
                case 1:
                    message.message_encoding = 1;
                    break;
                case "DELIMITED":
                case 2:
                    message.message_encoding = 2;
                    break;
                default:
                }
                switch (object.json_format) {
                case "JSON_FORMAT_UNKNOWN":
                case 0:
                    message.json_format = 0;
                    break;
                case "ALLOW":
                case 1:
                    message.json_format = 1;
                    break;
                case "LEGACY_BEST_EFFORT":
                case 2:
                    message.json_format = 2;
                    break;
                default:
                }
                return message;
            };

            /**
             * Creates a plain object from a FeatureSet message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.FeatureSet
             * @static
             * @param {google.protobuf.FeatureSet} message FeatureSet
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FeatureSet.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var object = {};
                if (options.defaults) {
                    object.field_presence = options.enums === $String ? "FIELD_PRESENCE_UNKNOWN" : 0;
                    object.enum_type = options.enums === $String ? "ENUM_TYPE_UNKNOWN" : 0;
                    object.repeated_field_encoding = options.enums === $String ? "REPEATED_FIELD_ENCODING_UNKNOWN" : 0;
                    object.utf8_validation = options.enums === $String ? "UTF8_VALIDATION_UNKNOWN" : 0;
                    object.message_encoding = options.enums === $String ? "MESSAGE_ENCODING_UNKNOWN" : 0;
                    object.json_format = options.enums === $String ? "JSON_FORMAT_UNKNOWN" : 0;
                }
                if (message.field_presence != null && $Object.hasOwnProperty.call(message, "field_presence"))
                    object.field_presence = options.enums === $String ? $root.google.protobuf.FeatureSet.FieldPresence[message.field_presence] === $undefined ? message.field_presence : $root.google.protobuf.FeatureSet.FieldPresence[message.field_presence] : message.field_presence;
                if (message.enum_type != null && $Object.hasOwnProperty.call(message, "enum_type"))
                    object.enum_type = options.enums === $String ? $root.google.protobuf.FeatureSet.EnumType[message.enum_type] === $undefined ? message.enum_type : $root.google.protobuf.FeatureSet.EnumType[message.enum_type] : message.enum_type;
                if (message.repeated_field_encoding != null && $Object.hasOwnProperty.call(message, "repeated_field_encoding"))
                    object.repeated_field_encoding = options.enums === $String ? $root.google.protobuf.FeatureSet.RepeatedFieldEncoding[message.repeated_field_encoding] === $undefined ? message.repeated_field_encoding : $root.google.protobuf.FeatureSet.RepeatedFieldEncoding[message.repeated_field_encoding] : message.repeated_field_encoding;
                if (message.utf8_validation != null && $Object.hasOwnProperty.call(message, "utf8_validation"))
                    object.utf8_validation = options.enums === $String ? $root.google.protobuf.FeatureSet.Utf8Validation[message.utf8_validation] === $undefined ? message.utf8_validation : $root.google.protobuf.FeatureSet.Utf8Validation[message.utf8_validation] : message.utf8_validation;
                if (message.message_encoding != null && $Object.hasOwnProperty.call(message, "message_encoding"))
                    object.message_encoding = options.enums === $String ? $root.google.protobuf.FeatureSet.MessageEncoding[message.message_encoding] === $undefined ? message.message_encoding : $root.google.protobuf.FeatureSet.MessageEncoding[message.message_encoding] : message.message_encoding;
                if (message.json_format != null && $Object.hasOwnProperty.call(message, "json_format"))
                    object.json_format = options.enums === $String ? $root.google.protobuf.FeatureSet.JsonFormat[message.json_format] === $undefined ? message.json_format : $root.google.protobuf.FeatureSet.JsonFormat[message.json_format] : message.json_format;
                return object;
            };

            /**
             * Converts this FeatureSet to JSON.
             * @function toJSON
             * @memberof google.protobuf.FeatureSet
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FeatureSet.prototype.toJSON = function() {
                return FeatureSet.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for FeatureSet
             * @function getTypeUrl
             * @memberof google.protobuf.FeatureSet
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            FeatureSet.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/google.protobuf.FeatureSet";
            };

            /**
             * FieldPresence enum.
             * @name google.protobuf.FeatureSet.FieldPresence
             * @enum {number}
             * @property {number} FIELD_PRESENCE_UNKNOWN=0 FIELD_PRESENCE_UNKNOWN value
             * @property {number} EXPLICIT=1 EXPLICIT value
             * @property {number} IMPLICIT=2 IMPLICIT value
             * @property {number} LEGACY_REQUIRED=3 LEGACY_REQUIRED value
             */
            FeatureSet.FieldPresence = (function() {
                var valuesById = $Object.create(null), values = $Object.create(valuesById);
                values[valuesById[0] = "FIELD_PRESENCE_UNKNOWN"] = 0;
                values[valuesById[1] = "EXPLICIT"] = 1;
                values[valuesById[2] = "IMPLICIT"] = 2;
                values[valuesById[3] = "LEGACY_REQUIRED"] = 3;
                return values;
            })();

            /**
             * EnumType enum.
             * @name google.protobuf.FeatureSet.EnumType
             * @enum {number}
             * @property {number} ENUM_TYPE_UNKNOWN=0 ENUM_TYPE_UNKNOWN value
             * @property {number} OPEN=1 OPEN value
             * @property {number} CLOSED=2 CLOSED value
             */
            FeatureSet.EnumType = (function() {
                var valuesById = $Object.create(null), values = $Object.create(valuesById);
                values[valuesById[0] = "ENUM_TYPE_UNKNOWN"] = 0;
                values[valuesById[1] = "OPEN"] = 1;
                values[valuesById[2] = "CLOSED"] = 2;
                return values;
            })();

            /**
             * RepeatedFieldEncoding enum.
             * @name google.protobuf.FeatureSet.RepeatedFieldEncoding
             * @enum {number}
             * @property {number} REPEATED_FIELD_ENCODING_UNKNOWN=0 REPEATED_FIELD_ENCODING_UNKNOWN value
             * @property {number} PACKED=1 PACKED value
             * @property {number} EXPANDED=2 EXPANDED value
             */
            FeatureSet.RepeatedFieldEncoding = (function() {
                var valuesById = $Object.create(null), values = $Object.create(valuesById);
                values[valuesById[0] = "REPEATED_FIELD_ENCODING_UNKNOWN"] = 0;
                values[valuesById[1] = "PACKED"] = 1;
                values[valuesById[2] = "EXPANDED"] = 2;
                return values;
            })();

            /**
             * Utf8Validation enum.
             * @name google.protobuf.FeatureSet.Utf8Validation
             * @enum {number}
             * @property {number} UTF8_VALIDATION_UNKNOWN=0 UTF8_VALIDATION_UNKNOWN value
             * @property {number} VERIFY=2 VERIFY value
             * @property {number} NONE=3 NONE value
             */
            FeatureSet.Utf8Validation = (function() {
                var valuesById = $Object.create(null), values = $Object.create(valuesById);
                values[valuesById[0] = "UTF8_VALIDATION_UNKNOWN"] = 0;
                values[valuesById[2] = "VERIFY"] = 2;
                values[valuesById[3] = "NONE"] = 3;
                return values;
            })();

            /**
             * MessageEncoding enum.
             * @name google.protobuf.FeatureSet.MessageEncoding
             * @enum {number}
             * @property {number} MESSAGE_ENCODING_UNKNOWN=0 MESSAGE_ENCODING_UNKNOWN value
             * @property {number} LENGTH_PREFIXED=1 LENGTH_PREFIXED value
             * @property {number} DELIMITED=2 DELIMITED value
             */
            FeatureSet.MessageEncoding = (function() {
                var valuesById = $Object.create(null), values = $Object.create(valuesById);
                values[valuesById[0] = "MESSAGE_ENCODING_UNKNOWN"] = 0;
                values[valuesById[1] = "LENGTH_PREFIXED"] = 1;
                values[valuesById[2] = "DELIMITED"] = 2;
                return values;
            })();

            /**
             * JsonFormat enum.
             * @name google.protobuf.FeatureSet.JsonFormat
             * @enum {number}
             * @property {number} JSON_FORMAT_UNKNOWN=0 JSON_FORMAT_UNKNOWN value
             * @property {number} ALLOW=1 ALLOW value
             * @property {number} LEGACY_BEST_EFFORT=2 LEGACY_BEST_EFFORT value
             */
            FeatureSet.JsonFormat = (function() {
                var valuesById = $Object.create(null), values = $Object.create(valuesById);
                values[valuesById[0] = "JSON_FORMAT_UNKNOWN"] = 0;
                values[valuesById[1] = "ALLOW"] = 1;
                values[valuesById[2] = "LEGACY_BEST_EFFORT"] = 2;
                return values;
            })();

            return FeatureSet;
        })();

        protobuf.FeatureSetDefaults = (function() {

            /**
             * Properties of a FeatureSetDefaults.
             * @typedef {Object} google.protobuf.FeatureSetDefaults.$Properties
             * @property {Array.<google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.$Properties>|null} [defaults] FeatureSetDefaults defaults
             * @property {google.protobuf.Edition|null} [minimum_edition] FeatureSetDefaults minimum_edition
             * @property {google.protobuf.Edition|null} [maximum_edition] FeatureSetDefaults maximum_edition
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a FeatureSetDefaults.
             * @memberof google.protobuf
             * @interface IFeatureSetDefaults
             * @augments google.protobuf.FeatureSetDefaults.$Properties
             * @deprecated Use google.protobuf.FeatureSetDefaults.$Properties instead.
             */

            /**
             * Shape of a FeatureSetDefaults.
             * @typedef {google.protobuf.FeatureSetDefaults.$Properties} google.protobuf.FeatureSetDefaults.$Shape
             */

            /**
             * Constructs a new FeatureSetDefaults.
             * @memberof google.protobuf
             * @classdesc Represents a FeatureSetDefaults.
             * @constructor
             * @param {google.protobuf.FeatureSetDefaults.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            var FeatureSetDefaults = function (properties) {
                this.defaults = [];
                if (properties)
                    for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * FeatureSetDefaults defaults.
             * @member {Array.<google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.$Properties>} defaults
             * @memberof google.protobuf.FeatureSetDefaults
             * @instance
             */
            FeatureSetDefaults.prototype.defaults = $util.emptyArray;

            /**
             * FeatureSetDefaults minimum_edition.
             * @member {google.protobuf.Edition} minimum_edition
             * @memberof google.protobuf.FeatureSetDefaults
             * @instance
             */
            FeatureSetDefaults.prototype.minimum_edition = 0;

            /**
             * FeatureSetDefaults maximum_edition.
             * @member {google.protobuf.Edition} maximum_edition
             * @memberof google.protobuf.FeatureSetDefaults
             * @instance
             */
            FeatureSetDefaults.prototype.maximum_edition = 0;

            /**
             * Creates a new FeatureSetDefaults instance using the specified properties.
             * @function create
             * @memberof google.protobuf.FeatureSetDefaults
             * @static
             * @param {google.protobuf.FeatureSetDefaults.$Properties=} [properties] Properties to set
             * @returns {google.protobuf.FeatureSetDefaults} FeatureSetDefaults instance
             * @type {{
             *   (properties: google.protobuf.FeatureSetDefaults.$Shape): google.protobuf.FeatureSetDefaults & google.protobuf.FeatureSetDefaults.$Shape;
             *   (properties?: google.protobuf.FeatureSetDefaults.$Properties): google.protobuf.FeatureSetDefaults;
             * }}
             */
            FeatureSetDefaults.create = function(properties) {
                return new FeatureSetDefaults(properties);
            };

            /**
             * Encodes the specified FeatureSetDefaults message. Does not implicitly {@link google.protobuf.FeatureSetDefaults.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FeatureSetDefaults
             * @static
             * @param {google.protobuf.FeatureSetDefaults.$Properties} message FeatureSetDefaults message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FeatureSetDefaults.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.defaults != null && message.defaults.length)
                    for (var i = 0; i < message.defaults.length; ++i)
                        $root.google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.encode(message.defaults[i], writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
                if (message.minimum_edition != null && $Object.hasOwnProperty.call(message, "minimum_edition"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.minimum_edition);
                if (message.maximum_edition != null && $Object.hasOwnProperty.call(message, "maximum_edition"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.maximum_edition);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (var i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified FeatureSetDefaults message, length delimited. Does not implicitly {@link google.protobuf.FeatureSetDefaults.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.FeatureSetDefaults
             * @static
             * @param {google.protobuf.FeatureSetDefaults.$Properties} message FeatureSetDefaults message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FeatureSetDefaults.encodeDelimited = function(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a FeatureSetDefaults message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FeatureSetDefaults
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FeatureSetDefaults & google.protobuf.FeatureSetDefaults.$Shape} FeatureSetDefaults
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FeatureSetDefaults.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.google.protobuf.FeatureSetDefaults(), value;
                while (reader.pos < end) {
                    var start = reader.pos;
                    var tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    var wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            if (!(message.defaults && message.defaults.length))
                                message.defaults = [];
                            message.defaults.push($root.google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.decode(reader, reader.uint32(), $undefined, _depth + 1));
                            continue;
                        }
                    case 4: {
                            if (wireType !== 0)
                                break;
                            value = reader.int32();
                            if ($root.google.protobuf.Edition[value] !== $undefined)
                                message.minimum_edition = value;
                            else if (!reader.discardUnknown) {
                                $util.makeProp(message, "$unknowns", false);
                                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                            }
                            continue;
                        }
                    case 5: {
                            if (wireType !== 0)
                                break;
                            value = reader.int32();
                            if ($root.google.protobuf.Edition[value] !== $undefined)
                                message.maximum_edition = value;
                            else if (!reader.discardUnknown) {
                                $util.makeProp(message, "$unknowns", false);
                                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                            }
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes a FeatureSetDefaults message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.FeatureSetDefaults
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.FeatureSetDefaults & google.protobuf.FeatureSetDefaults.$Shape} FeatureSetDefaults
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FeatureSetDefaults.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FeatureSetDefaults message.
             * @function verify
             * @memberof google.protobuf.FeatureSetDefaults
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FeatureSetDefaults.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.defaults != null && $Object.hasOwnProperty.call(message, "defaults")) {
                    if (!$Array.isArray(message.defaults))
                        return "defaults: array expected";
                    for (var i = 0; i < message.defaults.length; ++i) {
                        var error = $root.google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.verify(message.defaults[i], _depth + 1);
                        if (error)
                            return "defaults." + error;
                    }
                }
                if (message.minimum_edition != null && $Object.hasOwnProperty.call(message, "minimum_edition"))
                    switch (message.minimum_edition) {
                    default:
                        return "minimum_edition: enum value expected";
                    case 0:
                    case 900:
                    case 998:
                    case 999:
                    case 1000:
                    case 1001:
                    case 1:
                    case 2:
                    case 99997:
                    case 99998:
                    case 99999:
                    case 2147483647:
                        break;
                    }
                if (message.maximum_edition != null && $Object.hasOwnProperty.call(message, "maximum_edition"))
                    switch (message.maximum_edition) {
                    default:
                        return "maximum_edition: enum value expected";
                    case 0:
                    case 900:
                    case 998:
                    case 999:
                    case 1000:
                    case 1001:
                    case 1:
                    case 2:
                    case 99997:
                    case 99998:
                    case 99999:
                    case 2147483647:
                        break;
                    }
                return null;
            };

            /**
             * Creates a FeatureSetDefaults message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.FeatureSetDefaults
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FeatureSetDefaults} FeatureSetDefaults
             */
            FeatureSetDefaults.fromObject = function (object, _depth) {
                if (object instanceof $root.google.protobuf.FeatureSetDefaults)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".google.protobuf.FeatureSetDefaults: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var message = new $root.google.protobuf.FeatureSetDefaults();
                if (object.defaults) {
                    if (!$Array.isArray(object.defaults))
                        throw $TypeError(".google.protobuf.FeatureSetDefaults.defaults: array expected");
                    message.defaults = $Array(object.defaults.length);
                    for (var i = 0; i < object.defaults.length; ++i) {
                        if (!$util.isObject(object.defaults[i]))
                            throw $TypeError(".google.protobuf.FeatureSetDefaults.defaults: object expected");
                        message.defaults[i] = $root.google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.fromObject(object.defaults[i], _depth + 1);
                    }
                }
                switch (object.minimum_edition) {
                case "EDITION_UNKNOWN":
                case 0:
                    message.minimum_edition = 0;
                    break;
                case "EDITION_LEGACY":
                case 900:
                    message.minimum_edition = 900;
                    break;
                case "EDITION_PROTO2":
                case 998:
                    message.minimum_edition = 998;
                    break;
                case "EDITION_PROTO3":
                case 999:
                    message.minimum_edition = 999;
                    break;
                case "EDITION_2023":
                case 1000:
                    message.minimum_edition = 1000;
                    break;
                case "EDITION_2024":
                case 1001:
                    message.minimum_edition = 1001;
                    break;
                case "EDITION_1_TEST_ONLY":
                case 1:
                    message.minimum_edition = 1;
                    break;
                case "EDITION_2_TEST_ONLY":
                case 2:
                    message.minimum_edition = 2;
                    break;
                case "EDITION_99997_TEST_ONLY":
                case 99997:
                    message.minimum_edition = 99997;
                    break;
                case "EDITION_99998_TEST_ONLY":
                case 99998:
                    message.minimum_edition = 99998;
                    break;
                case "EDITION_99999_TEST_ONLY":
                case 99999:
                    message.minimum_edition = 99999;
                    break;
                case "EDITION_MAX":
                case 2147483647:
                    message.minimum_edition = 2147483647;
                    break;
                default:
                }
                switch (object.maximum_edition) {
                case "EDITION_UNKNOWN":
                case 0:
                    message.maximum_edition = 0;
                    break;
                case "EDITION_LEGACY":
                case 900:
                    message.maximum_edition = 900;
                    break;
                case "EDITION_PROTO2":
                case 998:
                    message.maximum_edition = 998;
                    break;
                case "EDITION_PROTO3":
                case 999:
                    message.maximum_edition = 999;
                    break;
                case "EDITION_2023":
                case 1000:
                    message.maximum_edition = 1000;
                    break;
                case "EDITION_2024":
                case 1001:
                    message.maximum_edition = 1001;
                    break;
                case "EDITION_1_TEST_ONLY":
                case 1:
                    message.maximum_edition = 1;
                    break;
                case "EDITION_2_TEST_ONLY":
                case 2:
                    message.maximum_edition = 2;
                    break;
                case "EDITION_99997_TEST_ONLY":
                case 99997:
                    message.maximum_edition = 99997;
                    break;
                case "EDITION_99998_TEST_ONLY":
                case 99998:
                    message.maximum_edition = 99998;
                    break;
                case "EDITION_99999_TEST_ONLY":
                case 99999:
                    message.maximum_edition = 99999;
                    break;
                case "EDITION_MAX":
                case 2147483647:
                    message.maximum_edition = 2147483647;
                    break;
                default:
                }
                return message;
            };

            /**
             * Creates a plain object from a FeatureSetDefaults message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.FeatureSetDefaults
             * @static
             * @param {google.protobuf.FeatureSetDefaults} message FeatureSetDefaults
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FeatureSetDefaults.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var object = {};
                if (options.arrays || options.defaults)
                    object.defaults = [];
                if (options.defaults) {
                    object.minimum_edition = options.enums === $String ? "EDITION_UNKNOWN" : 0;
                    object.maximum_edition = options.enums === $String ? "EDITION_UNKNOWN" : 0;
                }
                if (message.defaults && message.defaults.length) {
                    object.defaults = $Array(message.defaults.length);
                    for (var j = 0; j < message.defaults.length; ++j)
                        object.defaults[j] = $root.google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.toObject(message.defaults[j], options, _depth + 1);
                }
                if (message.minimum_edition != null && $Object.hasOwnProperty.call(message, "minimum_edition"))
                    object.minimum_edition = options.enums === $String ? $root.google.protobuf.Edition[message.minimum_edition] === $undefined ? message.minimum_edition : $root.google.protobuf.Edition[message.minimum_edition] : message.minimum_edition;
                if (message.maximum_edition != null && $Object.hasOwnProperty.call(message, "maximum_edition"))
                    object.maximum_edition = options.enums === $String ? $root.google.protobuf.Edition[message.maximum_edition] === $undefined ? message.maximum_edition : $root.google.protobuf.Edition[message.maximum_edition] : message.maximum_edition;
                return object;
            };

            /**
             * Converts this FeatureSetDefaults to JSON.
             * @function toJSON
             * @memberof google.protobuf.FeatureSetDefaults
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FeatureSetDefaults.prototype.toJSON = function() {
                return FeatureSetDefaults.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for FeatureSetDefaults
             * @function getTypeUrl
             * @memberof google.protobuf.FeatureSetDefaults
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            FeatureSetDefaults.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/google.protobuf.FeatureSetDefaults";
            };

            FeatureSetDefaults.FeatureSetEditionDefault = (function() {

                /**
                 * Properties of a FeatureSetEditionDefault.
                 * @typedef {Object} google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.$Properties
                 * @property {google.protobuf.Edition|null} [edition] FeatureSetEditionDefault edition
                 * @property {google.protobuf.FeatureSet.$Properties|null} [overridable_features] FeatureSetEditionDefault overridable_features
                 * @property {google.protobuf.FeatureSet.$Properties|null} [fixed_features] FeatureSetEditionDefault fixed_features
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */

                /**
                 * Properties of a FeatureSetEditionDefault.
                 * @memberof google.protobuf.FeatureSetDefaults
                 * @interface IFeatureSetEditionDefault
                 * @augments google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.$Properties
                 * @deprecated Use google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.$Properties instead.
                 */

                /**
                 * Shape of a FeatureSetEditionDefault.
                 * @typedef {google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.$Properties} google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.$Shape
                 */

                /**
                 * Constructs a new FeatureSetEditionDefault.
                 * @memberof google.protobuf.FeatureSetDefaults
                 * @classdesc Represents a FeatureSetEditionDefault.
                 * @constructor
                 * @param {google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                var FeatureSetEditionDefault = function (properties) {
                    if (properties)
                        for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };

                /**
                 * FeatureSetEditionDefault edition.
                 * @member {google.protobuf.Edition} edition
                 * @memberof google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault
                 * @instance
                 */
                FeatureSetEditionDefault.prototype.edition = 0;

                /**
                 * FeatureSetEditionDefault overridable_features.
                 * @member {google.protobuf.FeatureSet.$Properties|null|undefined} overridable_features
                 * @memberof google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault
                 * @instance
                 */
                FeatureSetEditionDefault.prototype.overridable_features = null;

                /**
                 * FeatureSetEditionDefault fixed_features.
                 * @member {google.protobuf.FeatureSet.$Properties|null|undefined} fixed_features
                 * @memberof google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault
                 * @instance
                 */
                FeatureSetEditionDefault.prototype.fixed_features = null;

                /**
                 * Creates a new FeatureSetEditionDefault instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault
                 * @static
                 * @param {google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.$Properties=} [properties] Properties to set
                 * @returns {google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault} FeatureSetEditionDefault instance
                 * @type {{
                 *   (properties: google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.$Shape): google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault & google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.$Shape;
                 *   (properties?: google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.$Properties): google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault;
                 * }}
                 */
                FeatureSetEditionDefault.create = function(properties) {
                    return new FeatureSetEditionDefault(properties);
                };

                /**
                 * Encodes the specified FeatureSetEditionDefault message. Does not implicitly {@link google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault
                 * @static
                 * @param {google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.$Properties} message FeatureSetEditionDefault message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FeatureSetEditionDefault.encode = function (message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.edition != null && $Object.hasOwnProperty.call(message, "edition"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.edition);
                    if (message.overridable_features != null && $Object.hasOwnProperty.call(message, "overridable_features"))
                        $root.google.protobuf.FeatureSet.encode(message.overridable_features, writer.uint32(/* id 4, wireType 2 =*/34).fork(), _depth + 1).ldelim();
                    if (message.fixed_features != null && $Object.hasOwnProperty.call(message, "fixed_features"))
                        $root.google.protobuf.FeatureSet.encode(message.fixed_features, writer.uint32(/* id 5, wireType 2 =*/42).fork(), _depth + 1).ldelim();
                    if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                        for (var i = 0; i < message.$unknowns.length; ++i)
                            writer.raw(message.$unknowns[i]);
                    return writer;
                };

                /**
                 * Encodes the specified FeatureSetEditionDefault message, length delimited. Does not implicitly {@link google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault
                 * @static
                 * @param {google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.$Properties} message FeatureSetEditionDefault message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FeatureSetEditionDefault.encodeDelimited = function(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a FeatureSetEditionDefault message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault & google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.$Shape} FeatureSetEditionDefault
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FeatureSetEditionDefault.decode = function (reader, length, _end, _depth, _target) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $Reader.recursionLimit)
                        throw $Error("max depth exceeded");
                    var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault(), value;
                    while (reader.pos < end) {
                        var start = reader.pos;
                        var tag = reader.tag();
                        if (tag === _end) {
                            _end = $undefined;
                            break;
                        }
                        var wireType = tag & 7;
                        switch (tag >>>= 3) {
                        case 3: {
                                if (wireType !== 0)
                                    break;
                                value = reader.int32();
                                if ($root.google.protobuf.Edition[value] !== $undefined)
                                    message.edition = value;
                                else if (!reader.discardUnknown) {
                                    $util.makeProp(message, "$unknowns", false);
                                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                                }
                                continue;
                            }
                        case 4: {
                                if (wireType !== 2)
                                    break;
                                message.overridable_features = $root.google.protobuf.FeatureSet.decode(reader, reader.uint32(), $undefined, _depth + 1, message.overridable_features);
                                continue;
                            }
                        case 5: {
                                if (wireType !== 2)
                                    break;
                                message.fixed_features = $root.google.protobuf.FeatureSet.decode(reader, reader.uint32(), $undefined, _depth + 1, message.fixed_features);
                                continue;
                            }
                        }
                        reader.skipType(wireType, _depth, tag);
                        if (!reader.discardUnknown) {
                            $util.makeProp(message, "$unknowns", false);
                            (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                        }
                    }
                    if (_end !== $undefined)
                        throw $Error("missing end group");
                    return message;
                };

                /**
                 * Decodes a FeatureSetEditionDefault message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault & google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.$Shape} FeatureSetEditionDefault
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FeatureSetEditionDefault.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a FeatureSetEditionDefault message.
                 * @function verify
                 * @memberof google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FeatureSetEditionDefault.verify = function (message, _depth) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        return "max depth exceeded";
                    if (message.edition != null && $Object.hasOwnProperty.call(message, "edition"))
                        switch (message.edition) {
                        default:
                            return "edition: enum value expected";
                        case 0:
                        case 900:
                        case 998:
                        case 999:
                        case 1000:
                        case 1001:
                        case 1:
                        case 2:
                        case 99997:
                        case 99998:
                        case 99999:
                        case 2147483647:
                            break;
                        }
                    if (message.overridable_features != null && $Object.hasOwnProperty.call(message, "overridable_features")) {
                        var error = $root.google.protobuf.FeatureSet.verify(message.overridable_features, _depth + 1);
                        if (error)
                            return "overridable_features." + error;
                    }
                    if (message.fixed_features != null && $Object.hasOwnProperty.call(message, "fixed_features")) {
                        var error = $root.google.protobuf.FeatureSet.verify(message.fixed_features, _depth + 1);
                        if (error)
                            return "fixed_features." + error;
                    }
                    return null;
                };

                /**
                 * Creates a FeatureSetEditionDefault message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault} FeatureSetEditionDefault
                 */
                FeatureSetEditionDefault.fromObject = function (object, _depth) {
                    if (object instanceof $root.google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault: object expected");
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var message = new $root.google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault();
                    switch (object.edition) {
                    case "EDITION_UNKNOWN":
                    case 0:
                        message.edition = 0;
                        break;
                    case "EDITION_LEGACY":
                    case 900:
                        message.edition = 900;
                        break;
                    case "EDITION_PROTO2":
                    case 998:
                        message.edition = 998;
                        break;
                    case "EDITION_PROTO3":
                    case 999:
                        message.edition = 999;
                        break;
                    case "EDITION_2023":
                    case 1000:
                        message.edition = 1000;
                        break;
                    case "EDITION_2024":
                    case 1001:
                        message.edition = 1001;
                        break;
                    case "EDITION_1_TEST_ONLY":
                    case 1:
                        message.edition = 1;
                        break;
                    case "EDITION_2_TEST_ONLY":
                    case 2:
                        message.edition = 2;
                        break;
                    case "EDITION_99997_TEST_ONLY":
                    case 99997:
                        message.edition = 99997;
                        break;
                    case "EDITION_99998_TEST_ONLY":
                    case 99998:
                        message.edition = 99998;
                        break;
                    case "EDITION_99999_TEST_ONLY":
                    case 99999:
                        message.edition = 99999;
                        break;
                    case "EDITION_MAX":
                    case 2147483647:
                        message.edition = 2147483647;
                        break;
                    default:
                    }
                    if (object.overridable_features != null) {
                        if (!$util.isObject(object.overridable_features))
                            throw $TypeError(".google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.overridable_features: object expected");
                        message.overridable_features = $root.google.protobuf.FeatureSet.fromObject(object.overridable_features, _depth + 1);
                    }
                    if (object.fixed_features != null) {
                        if (!$util.isObject(object.fixed_features))
                            throw $TypeError(".google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.fixed_features: object expected");
                        message.fixed_features = $root.google.protobuf.FeatureSet.fromObject(object.fixed_features, _depth + 1);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a FeatureSetEditionDefault message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault
                 * @static
                 * @param {google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault} message FeatureSetEditionDefault
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FeatureSetEditionDefault.toObject = function (message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var object = {};
                    if (options.defaults) {
                        object.edition = options.enums === $String ? "EDITION_UNKNOWN" : 0;
                        object.overridable_features = null;
                        object.fixed_features = null;
                    }
                    if (message.edition != null && $Object.hasOwnProperty.call(message, "edition"))
                        object.edition = options.enums === $String ? $root.google.protobuf.Edition[message.edition] === $undefined ? message.edition : $root.google.protobuf.Edition[message.edition] : message.edition;
                    if (message.overridable_features != null && $Object.hasOwnProperty.call(message, "overridable_features"))
                        object.overridable_features = $root.google.protobuf.FeatureSet.toObject(message.overridable_features, options, _depth + 1);
                    if (message.fixed_features != null && $Object.hasOwnProperty.call(message, "fixed_features"))
                        object.fixed_features = $root.google.protobuf.FeatureSet.toObject(message.fixed_features, options, _depth + 1);
                    return object;
                };

                /**
                 * Converts this FeatureSetEditionDefault to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FeatureSetEditionDefault.prototype.toJSON = function() {
                    return FeatureSetEditionDefault.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the type url for FeatureSetEditionDefault
                 * @function getTypeUrl
                 * @memberof google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                FeatureSetEditionDefault.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault";
                };

                return FeatureSetEditionDefault;
            })();

            return FeatureSetDefaults;
        })();

        protobuf.SourceCodeInfo = (function() {

            /**
             * Properties of a SourceCodeInfo.
             * @typedef {Object} google.protobuf.SourceCodeInfo.$Properties
             * @property {Array.<google.protobuf.SourceCodeInfo.Location.$Properties>|null} [location] SourceCodeInfo location
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a SourceCodeInfo.
             * @memberof google.protobuf
             * @interface ISourceCodeInfo
             * @augments google.protobuf.SourceCodeInfo.$Properties
             * @deprecated Use google.protobuf.SourceCodeInfo.$Properties instead.
             */

            /**
             * Shape of a SourceCodeInfo.
             * @typedef {google.protobuf.SourceCodeInfo.$Properties} google.protobuf.SourceCodeInfo.$Shape
             */

            /**
             * Constructs a new SourceCodeInfo.
             * @memberof google.protobuf
             * @classdesc Represents a SourceCodeInfo.
             * @constructor
             * @param {google.protobuf.SourceCodeInfo.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            var SourceCodeInfo = function (properties) {
                this.location = [];
                if (properties)
                    for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * SourceCodeInfo location.
             * @member {Array.<google.protobuf.SourceCodeInfo.Location.$Properties>} location
             * @memberof google.protobuf.SourceCodeInfo
             * @instance
             */
            SourceCodeInfo.prototype.location = $util.emptyArray;

            /**
             * Creates a new SourceCodeInfo instance using the specified properties.
             * @function create
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {google.protobuf.SourceCodeInfo.$Properties=} [properties] Properties to set
             * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo instance
             * @type {{
             *   (properties: google.protobuf.SourceCodeInfo.$Shape): google.protobuf.SourceCodeInfo & google.protobuf.SourceCodeInfo.$Shape;
             *   (properties?: google.protobuf.SourceCodeInfo.$Properties): google.protobuf.SourceCodeInfo;
             * }}
             */
            SourceCodeInfo.create = function(properties) {
                return new SourceCodeInfo(properties);
            };

            /**
             * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {google.protobuf.SourceCodeInfo.$Properties} message SourceCodeInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SourceCodeInfo.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.location != null && message.location.length)
                    for (var i = 0; i < message.location.length; ++i)
                        $root.google.protobuf.SourceCodeInfo.Location.encode(message.location[i], writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (var i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {google.protobuf.SourceCodeInfo.$Properties} message SourceCodeInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SourceCodeInfo.encodeDelimited = function(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.SourceCodeInfo & google.protobuf.SourceCodeInfo.$Shape} SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SourceCodeInfo.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.google.protobuf.SourceCodeInfo();
                while (reader.pos < end) {
                    var start = reader.pos;
                    var tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    var wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            if (!(message.location && message.location.length))
                                message.location = [];
                            message.location.push($root.google.protobuf.SourceCodeInfo.Location.decode(reader, reader.uint32(), $undefined, _depth + 1));
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.SourceCodeInfo & google.protobuf.SourceCodeInfo.$Shape} SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SourceCodeInfo.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SourceCodeInfo message.
             * @function verify
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SourceCodeInfo.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.location != null && $Object.hasOwnProperty.call(message, "location")) {
                    if (!$Array.isArray(message.location))
                        return "location: array expected";
                    for (var i = 0; i < message.location.length; ++i) {
                        var error = $root.google.protobuf.SourceCodeInfo.Location.verify(message.location[i], _depth + 1);
                        if (error)
                            return "location." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
             */
            SourceCodeInfo.fromObject = function (object, _depth) {
                if (object instanceof $root.google.protobuf.SourceCodeInfo)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".google.protobuf.SourceCodeInfo: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var message = new $root.google.protobuf.SourceCodeInfo();
                if (object.location) {
                    if (!$Array.isArray(object.location))
                        throw $TypeError(".google.protobuf.SourceCodeInfo.location: array expected");
                    message.location = $Array(object.location.length);
                    for (var i = 0; i < object.location.length; ++i) {
                        if (!$util.isObject(object.location[i]))
                            throw $TypeError(".google.protobuf.SourceCodeInfo.location: object expected");
                        message.location[i] = $root.google.protobuf.SourceCodeInfo.Location.fromObject(object.location[i], _depth + 1);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {google.protobuf.SourceCodeInfo} message SourceCodeInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SourceCodeInfo.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var object = {};
                if (options.arrays || options.defaults)
                    object.location = [];
                if (message.location && message.location.length) {
                    object.location = $Array(message.location.length);
                    for (var j = 0; j < message.location.length; ++j)
                        object.location[j] = $root.google.protobuf.SourceCodeInfo.Location.toObject(message.location[j], options, _depth + 1);
                }
                return object;
            };

            /**
             * Converts this SourceCodeInfo to JSON.
             * @function toJSON
             * @memberof google.protobuf.SourceCodeInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SourceCodeInfo.prototype.toJSON = function() {
                return SourceCodeInfo.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for SourceCodeInfo
             * @function getTypeUrl
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            SourceCodeInfo.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/google.protobuf.SourceCodeInfo";
            };

            SourceCodeInfo.Location = (function() {

                /**
                 * Properties of a Location.
                 * @typedef {Object} google.protobuf.SourceCodeInfo.Location.$Properties
                 * @property {Array.<number>|null} [path] Location path
                 * @property {Array.<number>|null} [span] Location span
                 * @property {string|null} [leading_comments] Location leading_comments
                 * @property {string|null} [trailing_comments] Location trailing_comments
                 * @property {Array.<string>|null} [leading_detached_comments] Location leading_detached_comments
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */

                /**
                 * Properties of a Location.
                 * @memberof google.protobuf.SourceCodeInfo
                 * @interface ILocation
                 * @augments google.protobuf.SourceCodeInfo.Location.$Properties
                 * @deprecated Use google.protobuf.SourceCodeInfo.Location.$Properties instead.
                 */

                /**
                 * Shape of a Location.
                 * @typedef {google.protobuf.SourceCodeInfo.Location.$Properties} google.protobuf.SourceCodeInfo.Location.$Shape
                 */

                /**
                 * Constructs a new Location.
                 * @memberof google.protobuf.SourceCodeInfo
                 * @classdesc Represents a Location.
                 * @constructor
                 * @param {google.protobuf.SourceCodeInfo.Location.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                var Location = function (properties) {
                    this.path = [];
                    this.span = [];
                    this.leading_detached_comments = [];
                    if (properties)
                        for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };

                /**
                 * Location path.
                 * @member {Array.<number>} path
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @instance
                 */
                Location.prototype.path = $util.emptyArray;

                /**
                 * Location span.
                 * @member {Array.<number>} span
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @instance
                 */
                Location.prototype.span = $util.emptyArray;

                /**
                 * Location leading_comments.
                 * @member {string} leading_comments
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @instance
                 */
                Location.prototype.leading_comments = "";

                /**
                 * Location trailing_comments.
                 * @member {string} trailing_comments
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @instance
                 */
                Location.prototype.trailing_comments = "";

                /**
                 * Location leading_detached_comments.
                 * @member {Array.<string>} leading_detached_comments
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @instance
                 */
                Location.prototype.leading_detached_comments = $util.emptyArray;

                /**
                 * Creates a new Location instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {google.protobuf.SourceCodeInfo.Location.$Properties=} [properties] Properties to set
                 * @returns {google.protobuf.SourceCodeInfo.Location} Location instance
                 * @type {{
                 *   (properties: google.protobuf.SourceCodeInfo.Location.$Shape): google.protobuf.SourceCodeInfo.Location & google.protobuf.SourceCodeInfo.Location.$Shape;
                 *   (properties?: google.protobuf.SourceCodeInfo.Location.$Properties): google.protobuf.SourceCodeInfo.Location;
                 * }}
                 */
                Location.create = function(properties) {
                    return new Location(properties);
                };

                /**
                 * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {google.protobuf.SourceCodeInfo.Location.$Properties} message Location message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Location.encode = function (message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.path != null && message.path.length) {
                        writer.uint32(/* id 1, wireType 2 =*/10).fork();
                        for (var i = 0; i < message.path.length; ++i)
                            writer.int32(message.path[i]);
                        writer.ldelim();
                    }
                    if (message.span != null && message.span.length) {
                        writer.uint32(/* id 2, wireType 2 =*/18).fork();
                        for (var i = 0; i < message.span.length; ++i)
                            writer.int32(message.span[i]);
                        writer.ldelim();
                    }
                    if (message.leading_comments != null && $Object.hasOwnProperty.call(message, "leading_comments"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.leading_comments);
                    if (message.trailing_comments != null && $Object.hasOwnProperty.call(message, "trailing_comments"))
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.trailing_comments);
                    if (message.leading_detached_comments != null && message.leading_detached_comments.length)
                        for (var i = 0; i < message.leading_detached_comments.length; ++i)
                            writer.uint32(/* id 6, wireType 2 =*/50).string(message.leading_detached_comments[i]);
                    if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                        for (var i = 0; i < message.$unknowns.length; ++i)
                            writer.raw(message.$unknowns[i]);
                    return writer;
                };

                /**
                 * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {google.protobuf.SourceCodeInfo.Location.$Properties} message Location message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Location.encodeDelimited = function(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.SourceCodeInfo.Location & google.protobuf.SourceCodeInfo.Location.$Shape} Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Location.decode = function (reader, length, _end, _depth, _target) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $Reader.recursionLimit)
                        throw $Error("max depth exceeded");
                    var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.google.protobuf.SourceCodeInfo.Location();
                    while (reader.pos < end) {
                        var start = reader.pos;
                        var tag = reader.tag();
                        if (tag === _end) {
                            _end = $undefined;
                            break;
                        }
                        var wireType = tag & 7;
                        switch (tag >>>= 3) {
                        case 1: {
                                if (wireType === 2) {
                                    if (!(message.path && message.path.length))
                                        message.path = [];
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.path.push(reader.int32());
                                    continue;
                                }
                                if (wireType !== 0)
                                    break;
                                if (!(message.path && message.path.length))
                                    message.path = [];
                                message.path.push(reader.int32());
                                continue;
                            }
                        case 2: {
                                if (wireType === 2) {
                                    if (!(message.span && message.span.length))
                                        message.span = [];
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.span.push(reader.int32());
                                    continue;
                                }
                                if (wireType !== 0)
                                    break;
                                if (!(message.span && message.span.length))
                                    message.span = [];
                                message.span.push(reader.int32());
                                continue;
                            }
                        case 3: {
                                if (wireType !== 2)
                                    break;
                                message.leading_comments = reader.string();
                                continue;
                            }
                        case 4: {
                                if (wireType !== 2)
                                    break;
                                message.trailing_comments = reader.string();
                                continue;
                            }
                        case 6: {
                                if (wireType !== 2)
                                    break;
                                if (!(message.leading_detached_comments && message.leading_detached_comments.length))
                                    message.leading_detached_comments = [];
                                message.leading_detached_comments.push(reader.string());
                                continue;
                            }
                        }
                        reader.skipType(wireType, _depth, tag);
                        if (!reader.discardUnknown) {
                            $util.makeProp(message, "$unknowns", false);
                            (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                        }
                    }
                    if (_end !== $undefined)
                        throw $Error("missing end group");
                    return message;
                };

                /**
                 * Decodes a Location message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.SourceCodeInfo.Location & google.protobuf.SourceCodeInfo.Location.$Shape} Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Location.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Location message.
                 * @function verify
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Location.verify = function (message, _depth) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        return "max depth exceeded";
                    if (message.path != null && $Object.hasOwnProperty.call(message, "path")) {
                        if (!$Array.isArray(message.path))
                            return "path: array expected";
                        for (var i = 0; i < message.path.length; ++i)
                            if (!$util.isInteger(message.path[i]))
                                return "path: integer[] expected";
                    }
                    if (message.span != null && $Object.hasOwnProperty.call(message, "span")) {
                        if (!$Array.isArray(message.span))
                            return "span: array expected";
                        for (var i = 0; i < message.span.length; ++i)
                            if (!$util.isInteger(message.span[i]))
                                return "span: integer[] expected";
                    }
                    if (message.leading_comments != null && $Object.hasOwnProperty.call(message, "leading_comments"))
                        if (!$util.isString(message.leading_comments))
                            return "leading_comments: string expected";
                    if (message.trailing_comments != null && $Object.hasOwnProperty.call(message, "trailing_comments"))
                        if (!$util.isString(message.trailing_comments))
                            return "trailing_comments: string expected";
                    if (message.leading_detached_comments != null && $Object.hasOwnProperty.call(message, "leading_detached_comments")) {
                        if (!$Array.isArray(message.leading_detached_comments))
                            return "leading_detached_comments: array expected";
                        for (var i = 0; i < message.leading_detached_comments.length; ++i)
                            if (!$util.isString(message.leading_detached_comments[i]))
                                return "leading_detached_comments: string[] expected";
                    }
                    return null;
                };

                /**
                 * Creates a Location message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.SourceCodeInfo.Location} Location
                 */
                Location.fromObject = function (object, _depth) {
                    if (object instanceof $root.google.protobuf.SourceCodeInfo.Location)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".google.protobuf.SourceCodeInfo.Location: object expected");
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var message = new $root.google.protobuf.SourceCodeInfo.Location();
                    if (object.path) {
                        if (!$Array.isArray(object.path))
                            throw $TypeError(".google.protobuf.SourceCodeInfo.Location.path: array expected");
                        message.path = $Array(object.path.length);
                        for (var i = 0; i < object.path.length; ++i)
                            message.path[i] = object.path[i] | 0;
                    }
                    if (object.span) {
                        if (!$Array.isArray(object.span))
                            throw $TypeError(".google.protobuf.SourceCodeInfo.Location.span: array expected");
                        message.span = $Array(object.span.length);
                        for (var i = 0; i < object.span.length; ++i)
                            message.span[i] = object.span[i] | 0;
                    }
                    if (object.leading_comments != null)
                        message.leading_comments = $String(object.leading_comments);
                    if (object.trailing_comments != null)
                        message.trailing_comments = $String(object.trailing_comments);
                    if (object.leading_detached_comments) {
                        if (!$Array.isArray(object.leading_detached_comments))
                            throw $TypeError(".google.protobuf.SourceCodeInfo.Location.leading_detached_comments: array expected");
                        message.leading_detached_comments = $Array(object.leading_detached_comments.length);
                        for (var i = 0; i < object.leading_detached_comments.length; ++i)
                            message.leading_detached_comments[i] = $String(object.leading_detached_comments[i]);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Location message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {google.protobuf.SourceCodeInfo.Location} message Location
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Location.toObject = function (message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.path = [];
                        object.span = [];
                        object.leading_detached_comments = [];
                    }
                    if (options.defaults) {
                        object.leading_comments = "";
                        object.trailing_comments = "";
                    }
                    if (message.path && message.path.length) {
                        object.path = $Array(message.path.length);
                        for (var j = 0; j < message.path.length; ++j)
                            object.path[j] = message.path[j];
                    }
                    if (message.span && message.span.length) {
                        object.span = $Array(message.span.length);
                        for (var j = 0; j < message.span.length; ++j)
                            object.span[j] = message.span[j];
                    }
                    if (message.leading_comments != null && $Object.hasOwnProperty.call(message, "leading_comments"))
                        object.leading_comments = message.leading_comments;
                    if (message.trailing_comments != null && $Object.hasOwnProperty.call(message, "trailing_comments"))
                        object.trailing_comments = message.trailing_comments;
                    if (message.leading_detached_comments && message.leading_detached_comments.length) {
                        object.leading_detached_comments = $Array(message.leading_detached_comments.length);
                        for (var j = 0; j < message.leading_detached_comments.length; ++j)
                            object.leading_detached_comments[j] = message.leading_detached_comments[j];
                    }
                    return object;
                };

                /**
                 * Converts this Location to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Location.prototype.toJSON = function() {
                    return Location.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the type url for Location
                 * @function getTypeUrl
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                Location.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/google.protobuf.SourceCodeInfo.Location";
                };

                return Location;
            })();

            return SourceCodeInfo;
        })();

        protobuf.GeneratedCodeInfo = (function() {

            /**
             * Properties of a GeneratedCodeInfo.
             * @typedef {Object} google.protobuf.GeneratedCodeInfo.$Properties
             * @property {Array.<google.protobuf.GeneratedCodeInfo.Annotation.$Properties>|null} [annotation] GeneratedCodeInfo annotation
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a GeneratedCodeInfo.
             * @memberof google.protobuf
             * @interface IGeneratedCodeInfo
             * @augments google.protobuf.GeneratedCodeInfo.$Properties
             * @deprecated Use google.protobuf.GeneratedCodeInfo.$Properties instead.
             */

            /**
             * Shape of a GeneratedCodeInfo.
             * @typedef {google.protobuf.GeneratedCodeInfo.$Properties} google.protobuf.GeneratedCodeInfo.$Shape
             */

            /**
             * Constructs a new GeneratedCodeInfo.
             * @memberof google.protobuf
             * @classdesc Represents a GeneratedCodeInfo.
             * @constructor
             * @param {google.protobuf.GeneratedCodeInfo.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            var GeneratedCodeInfo = function (properties) {
                this.annotation = [];
                if (properties)
                    for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * GeneratedCodeInfo annotation.
             * @member {Array.<google.protobuf.GeneratedCodeInfo.Annotation.$Properties>} annotation
             * @memberof google.protobuf.GeneratedCodeInfo
             * @instance
             */
            GeneratedCodeInfo.prototype.annotation = $util.emptyArray;

            /**
             * Creates a new GeneratedCodeInfo instance using the specified properties.
             * @function create
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {google.protobuf.GeneratedCodeInfo.$Properties=} [properties] Properties to set
             * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo instance
             * @type {{
             *   (properties: google.protobuf.GeneratedCodeInfo.$Shape): google.protobuf.GeneratedCodeInfo & google.protobuf.GeneratedCodeInfo.$Shape;
             *   (properties?: google.protobuf.GeneratedCodeInfo.$Properties): google.protobuf.GeneratedCodeInfo;
             * }}
             */
            GeneratedCodeInfo.create = function(properties) {
                return new GeneratedCodeInfo(properties);
            };

            /**
             * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {google.protobuf.GeneratedCodeInfo.$Properties} message GeneratedCodeInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GeneratedCodeInfo.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.annotation != null && message.annotation.length)
                    for (var i = 0; i < message.annotation.length; ++i)
                        $root.google.protobuf.GeneratedCodeInfo.Annotation.encode(message.annotation[i], writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (var i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {google.protobuf.GeneratedCodeInfo.$Properties} message GeneratedCodeInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GeneratedCodeInfo.encodeDelimited = function(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.GeneratedCodeInfo & google.protobuf.GeneratedCodeInfo.$Shape} GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GeneratedCodeInfo.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.google.protobuf.GeneratedCodeInfo();
                while (reader.pos < end) {
                    var start = reader.pos;
                    var tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    var wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            if (!(message.annotation && message.annotation.length))
                                message.annotation = [];
                            message.annotation.push($root.google.protobuf.GeneratedCodeInfo.Annotation.decode(reader, reader.uint32(), $undefined, _depth + 1));
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.GeneratedCodeInfo & google.protobuf.GeneratedCodeInfo.$Shape} GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GeneratedCodeInfo.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GeneratedCodeInfo message.
             * @function verify
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GeneratedCodeInfo.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.annotation != null && $Object.hasOwnProperty.call(message, "annotation")) {
                    if (!$Array.isArray(message.annotation))
                        return "annotation: array expected";
                    for (var i = 0; i < message.annotation.length; ++i) {
                        var error = $root.google.protobuf.GeneratedCodeInfo.Annotation.verify(message.annotation[i], _depth + 1);
                        if (error)
                            return "annotation." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo
             */
            GeneratedCodeInfo.fromObject = function (object, _depth) {
                if (object instanceof $root.google.protobuf.GeneratedCodeInfo)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".google.protobuf.GeneratedCodeInfo: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var message = new $root.google.protobuf.GeneratedCodeInfo();
                if (object.annotation) {
                    if (!$Array.isArray(object.annotation))
                        throw $TypeError(".google.protobuf.GeneratedCodeInfo.annotation: array expected");
                    message.annotation = $Array(object.annotation.length);
                    for (var i = 0; i < object.annotation.length; ++i) {
                        if (!$util.isObject(object.annotation[i]))
                            throw $TypeError(".google.protobuf.GeneratedCodeInfo.annotation: object expected");
                        message.annotation[i] = $root.google.protobuf.GeneratedCodeInfo.Annotation.fromObject(object.annotation[i], _depth + 1);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {google.protobuf.GeneratedCodeInfo} message GeneratedCodeInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GeneratedCodeInfo.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var object = {};
                if (options.arrays || options.defaults)
                    object.annotation = [];
                if (message.annotation && message.annotation.length) {
                    object.annotation = $Array(message.annotation.length);
                    for (var j = 0; j < message.annotation.length; ++j)
                        object.annotation[j] = $root.google.protobuf.GeneratedCodeInfo.Annotation.toObject(message.annotation[j], options, _depth + 1);
                }
                return object;
            };

            /**
             * Converts this GeneratedCodeInfo to JSON.
             * @function toJSON
             * @memberof google.protobuf.GeneratedCodeInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GeneratedCodeInfo.prototype.toJSON = function() {
                return GeneratedCodeInfo.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for GeneratedCodeInfo
             * @function getTypeUrl
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            GeneratedCodeInfo.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/google.protobuf.GeneratedCodeInfo";
            };

            GeneratedCodeInfo.Annotation = (function() {

                /**
                 * Properties of an Annotation.
                 * @typedef {Object} google.protobuf.GeneratedCodeInfo.Annotation.$Properties
                 * @property {Array.<number>|null} [path] Annotation path
                 * @property {string|null} [source_file] Annotation source_file
                 * @property {number|null} [begin] Annotation begin
                 * @property {number|null} [end] Annotation end
                 * @property {google.protobuf.GeneratedCodeInfo.Annotation.Semantic|null} [semantic] Annotation semantic
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */

                /**
                 * Properties of an Annotation.
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @interface IAnnotation
                 * @augments google.protobuf.GeneratedCodeInfo.Annotation.$Properties
                 * @deprecated Use google.protobuf.GeneratedCodeInfo.Annotation.$Properties instead.
                 */

                /**
                 * Shape of an Annotation.
                 * @typedef {google.protobuf.GeneratedCodeInfo.Annotation.$Properties} google.protobuf.GeneratedCodeInfo.Annotation.$Shape
                 */

                /**
                 * Constructs a new Annotation.
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @classdesc Represents an Annotation.
                 * @constructor
                 * @param {google.protobuf.GeneratedCodeInfo.Annotation.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                var Annotation = function (properties) {
                    this.path = [];
                    if (properties)
                        for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };

                /**
                 * Annotation path.
                 * @member {Array.<number>} path
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @instance
                 */
                Annotation.prototype.path = $util.emptyArray;

                /**
                 * Annotation source_file.
                 * @member {string} source_file
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @instance
                 */
                Annotation.prototype.source_file = "";

                /**
                 * Annotation begin.
                 * @member {number} begin
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @instance
                 */
                Annotation.prototype.begin = 0;

                /**
                 * Annotation end.
                 * @member {number} end
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @instance
                 */
                Annotation.prototype.end = 0;

                /**
                 * Annotation semantic.
                 * @member {google.protobuf.GeneratedCodeInfo.Annotation.Semantic} semantic
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @instance
                 */
                Annotation.prototype.semantic = 0;

                /**
                 * Creates a new Annotation instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {google.protobuf.GeneratedCodeInfo.Annotation.$Properties=} [properties] Properties to set
                 * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation instance
                 * @type {{
                 *   (properties: google.protobuf.GeneratedCodeInfo.Annotation.$Shape): google.protobuf.GeneratedCodeInfo.Annotation & google.protobuf.GeneratedCodeInfo.Annotation.$Shape;
                 *   (properties?: google.protobuf.GeneratedCodeInfo.Annotation.$Properties): google.protobuf.GeneratedCodeInfo.Annotation;
                 * }}
                 */
                Annotation.create = function(properties) {
                    return new Annotation(properties);
                };

                /**
                 * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {google.protobuf.GeneratedCodeInfo.Annotation.$Properties} message Annotation message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Annotation.encode = function (message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.path != null && message.path.length) {
                        writer.uint32(/* id 1, wireType 2 =*/10).fork();
                        for (var i = 0; i < message.path.length; ++i)
                            writer.int32(message.path[i]);
                        writer.ldelim();
                    }
                    if (message.source_file != null && $Object.hasOwnProperty.call(message, "source_file"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.source_file);
                    if (message.begin != null && $Object.hasOwnProperty.call(message, "begin"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.begin);
                    if (message.end != null && $Object.hasOwnProperty.call(message, "end"))
                        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.end);
                    if (message.semantic != null && $Object.hasOwnProperty.call(message, "semantic"))
                        writer.uint32(/* id 5, wireType 0 =*/40).int32(message.semantic);
                    if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                        for (var i = 0; i < message.$unknowns.length; ++i)
                            writer.raw(message.$unknowns[i]);
                    return writer;
                };

                /**
                 * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {google.protobuf.GeneratedCodeInfo.Annotation.$Properties} message Annotation message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Annotation.encodeDelimited = function(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes an Annotation message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.GeneratedCodeInfo.Annotation & google.protobuf.GeneratedCodeInfo.Annotation.$Shape} Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Annotation.decode = function (reader, length, _end, _depth, _target) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $Reader.recursionLimit)
                        throw $Error("max depth exceeded");
                    var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.google.protobuf.GeneratedCodeInfo.Annotation(), value;
                    while (reader.pos < end) {
                        var start = reader.pos;
                        var tag = reader.tag();
                        if (tag === _end) {
                            _end = $undefined;
                            break;
                        }
                        var wireType = tag & 7;
                        switch (tag >>>= 3) {
                        case 1: {
                                if (wireType === 2) {
                                    if (!(message.path && message.path.length))
                                        message.path = [];
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.path.push(reader.int32());
                                    continue;
                                }
                                if (wireType !== 0)
                                    break;
                                if (!(message.path && message.path.length))
                                    message.path = [];
                                message.path.push(reader.int32());
                                continue;
                            }
                        case 2: {
                                if (wireType !== 2)
                                    break;
                                message.source_file = reader.string();
                                continue;
                            }
                        case 3: {
                                if (wireType !== 0)
                                    break;
                                message.begin = reader.int32();
                                continue;
                            }
                        case 4: {
                                if (wireType !== 0)
                                    break;
                                message.end = reader.int32();
                                continue;
                            }
                        case 5: {
                                if (wireType !== 0)
                                    break;
                                value = reader.int32();
                                if ($root.google.protobuf.GeneratedCodeInfo.Annotation.Semantic[value] !== $undefined)
                                    message.semantic = value;
                                else if (!reader.discardUnknown) {
                                    $util.makeProp(message, "$unknowns", false);
                                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                                }
                                continue;
                            }
                        }
                        reader.skipType(wireType, _depth, tag);
                        if (!reader.discardUnknown) {
                            $util.makeProp(message, "$unknowns", false);
                            (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                        }
                    }
                    if (_end !== $undefined)
                        throw $Error("missing end group");
                    return message;
                };

                /**
                 * Decodes an Annotation message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.GeneratedCodeInfo.Annotation & google.protobuf.GeneratedCodeInfo.Annotation.$Shape} Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Annotation.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an Annotation message.
                 * @function verify
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Annotation.verify = function (message, _depth) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        return "max depth exceeded";
                    if (message.path != null && $Object.hasOwnProperty.call(message, "path")) {
                        if (!$Array.isArray(message.path))
                            return "path: array expected";
                        for (var i = 0; i < message.path.length; ++i)
                            if (!$util.isInteger(message.path[i]))
                                return "path: integer[] expected";
                    }
                    if (message.source_file != null && $Object.hasOwnProperty.call(message, "source_file"))
                        if (!$util.isString(message.source_file))
                            return "source_file: string expected";
                    if (message.begin != null && $Object.hasOwnProperty.call(message, "begin"))
                        if (!$util.isInteger(message.begin))
                            return "begin: integer expected";
                    if (message.end != null && $Object.hasOwnProperty.call(message, "end"))
                        if (!$util.isInteger(message.end))
                            return "end: integer expected";
                    if (message.semantic != null && $Object.hasOwnProperty.call(message, "semantic"))
                        switch (message.semantic) {
                        default:
                            return "semantic: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                    return null;
                };

                /**
                 * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation
                 */
                Annotation.fromObject = function (object, _depth) {
                    if (object instanceof $root.google.protobuf.GeneratedCodeInfo.Annotation)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".google.protobuf.GeneratedCodeInfo.Annotation: object expected");
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var message = new $root.google.protobuf.GeneratedCodeInfo.Annotation();
                    if (object.path) {
                        if (!$Array.isArray(object.path))
                            throw $TypeError(".google.protobuf.GeneratedCodeInfo.Annotation.path: array expected");
                        message.path = $Array(object.path.length);
                        for (var i = 0; i < object.path.length; ++i)
                            message.path[i] = object.path[i] | 0;
                    }
                    if (object.source_file != null)
                        message.source_file = $String(object.source_file);
                    if (object.begin != null)
                        message.begin = object.begin | 0;
                    if (object.end != null)
                        message.end = object.end | 0;
                    switch (object.semantic) {
                    case "NONE":
                    case 0:
                        message.semantic = 0;
                        break;
                    case "SET":
                    case 1:
                        message.semantic = 1;
                        break;
                    case "ALIAS":
                    case 2:
                        message.semantic = 2;
                        break;
                    default:
                    }
                    return message;
                };

                /**
                 * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {google.protobuf.GeneratedCodeInfo.Annotation} message Annotation
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Annotation.toObject = function (message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.path = [];
                    if (options.defaults) {
                        object.source_file = "";
                        object.begin = 0;
                        object.end = 0;
                        object.semantic = options.enums === $String ? "NONE" : 0;
                    }
                    if (message.path && message.path.length) {
                        object.path = $Array(message.path.length);
                        for (var j = 0; j < message.path.length; ++j)
                            object.path[j] = message.path[j];
                    }
                    if (message.source_file != null && $Object.hasOwnProperty.call(message, "source_file"))
                        object.source_file = message.source_file;
                    if (message.begin != null && $Object.hasOwnProperty.call(message, "begin"))
                        object.begin = message.begin;
                    if (message.end != null && $Object.hasOwnProperty.call(message, "end"))
                        object.end = message.end;
                    if (message.semantic != null && $Object.hasOwnProperty.call(message, "semantic"))
                        object.semantic = options.enums === $String ? $root.google.protobuf.GeneratedCodeInfo.Annotation.Semantic[message.semantic] === $undefined ? message.semantic : $root.google.protobuf.GeneratedCodeInfo.Annotation.Semantic[message.semantic] : message.semantic;
                    return object;
                };

                /**
                 * Converts this Annotation to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Annotation.prototype.toJSON = function() {
                    return Annotation.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the type url for Annotation
                 * @function getTypeUrl
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                Annotation.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/google.protobuf.GeneratedCodeInfo.Annotation";
                };

                /**
                 * Semantic enum.
                 * @name google.protobuf.GeneratedCodeInfo.Annotation.Semantic
                 * @enum {number}
                 * @property {number} NONE=0 NONE value
                 * @property {number} SET=1 SET value
                 * @property {number} ALIAS=2 ALIAS value
                 */
                Annotation.Semantic = (function() {
                    var valuesById = $Object.create(null), values = $Object.create(valuesById);
                    values[valuesById[0] = "NONE"] = 0;
                    values[valuesById[1] = "SET"] = 1;
                    values[valuesById[2] = "ALIAS"] = 2;
                    return values;
                })();

                return Annotation;
            })();

            return GeneratedCodeInfo;
        })();

        return protobuf;
    })();

    return google;
})();

module.exports = $root;
