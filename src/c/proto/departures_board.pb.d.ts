import * as $protobuf from "protobufjs";
import Long = require("long");

/** RouteType enum. */
export enum RouteType {

    /** TRAM value */
    TRAM = 0,

    /** METRO value */
    METRO = 1,

    /** RAIL value */
    RAIL = 2,

    /** BUS value */
    BUS = 3,

    /** FERRY value */
    FERRY = 4,

    /** CABLE_CAR value */
    CABLE_CAR = 5,

    /** AERIAL value */
    AERIAL = 6,

    /** FUNICULAR value */
    FUNICULAR = 7,

    /** TROLLEYBUS value */
    TROLLEYBUS = 11,

    /** MONORAIL value */
    MONORAIL = 12
}

/**
 * Properties of a StopBasic.
 * @deprecated Use StopBasic.$Properties instead.
 */
export interface IStopBasic extends StopBasic.$Properties {
}

/** Represents a StopBasic. */
export class StopBasic {

    /**
     * Constructs a new StopBasic.
     * @param [properties] Properties to set
     */
    constructor(properties?: StopBasic.$Properties);

    /** Unknown fields preserved while decoding when enabled */
    $unknowns?: Uint8Array[];

    /** StopBasic stop_name. */
    stop_name: string;

    /** StopBasic timezone. */
    timezone: string;

    /** StopBasic timezone_offset. */
    timezone_offset: number;

    /**
     * Creates a new StopBasic instance using the specified properties.
     * @param [properties] Properties to set
     * @returns StopBasic instance
     */
    static create(properties: StopBasic.$Shape): StopBasic & StopBasic.$Shape;
    static create(properties?: StopBasic.$Properties): StopBasic;

    /**
     * Encodes the specified StopBasic message. Does not implicitly {@link StopBasic.verify|verify} messages.
     * @param message StopBasic message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encode(message: StopBasic.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified StopBasic message, length delimited. Does not implicitly {@link StopBasic.verify|verify} messages.
     * @param message StopBasic message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encodeDelimited(message: StopBasic.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a StopBasic message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns {StopBasic & StopBasic.$Shape} StopBasic
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): StopBasic & StopBasic.$Shape;

    /**
     * Decodes a StopBasic message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns {StopBasic & StopBasic.$Shape} StopBasic
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): StopBasic & StopBasic.$Shape;

    /**
     * Verifies a StopBasic message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a StopBasic message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns StopBasic
     */
    static fromObject(object: { [k: string]: any }): StopBasic;

    /**
     * Creates a plain object from a StopBasic message. Also converts values to other types if specified.
     * @param message StopBasic
     * @param [options] Conversion options
     * @returns Plain object
     */
    static toObject(message: StopBasic, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this StopBasic to JSON.
     * @returns JSON object
     */
    toJSON(): { [k: string]: any };

    /**
     * Gets the type url for StopBasic
     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns The type url
     */
    static getTypeUrl(prefix?: string): string;
}

export namespace StopBasic {

    /** Properties of a StopBasic. */
    interface $Properties {

        /** StopBasic stop_name */
        stop_name?: (string|null);

        /** StopBasic timezone */
        timezone?: (string|null);

        /** StopBasic timezone_offset */
        timezone_offset?: (number|null);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];
    }

    /** Shape of a StopBasic. */
    type $Shape = StopBasic.$Properties;
}

/**
 * Properties of a StopEventBasic.
 * @deprecated Use StopEventBasic.$Properties instead.
 */
export interface IStopEventBasic extends StopEventBasic.$Properties {
}

/** Represents a StopEventBasic. */
export class StopEventBasic {

    /**
     * Constructs a new StopEventBasic.
     * @param [properties] Properties to set
     */
    constructor(properties?: StopEventBasic.$Properties);

    /** Unknown fields preserved while decoding when enabled */
    $unknowns?: Uint8Array[];

    /** StopEventBasic scheduled_arrival. */
    scheduled_arrival: number;

    /** StopEventBasic scheduled_departure. */
    scheduled_departure: number;

    /** StopEventBasic realtime_arrival. */
    realtime_arrival: number;

    /** StopEventBasic realtime_departure. */
    realtime_departure: number;

    /** StopEventBasic trip_modified. */
    trip_modified: boolean;

    /** StopEventBasic stop_cancelled. */
    stop_cancelled: boolean;

    /** StopEventBasic trip_cancelled. */
    trip_cancelled: boolean;

    /** StopEventBasic trip_deleted. */
    trip_deleted: boolean;

    /** StopEventBasic trip_id. */
    trip_id: string;

    /** StopEventBasic headsign. */
    headsign: string;

    /** StopEventBasic vehicle_number. */
    vehicle_number: string;

    /** StopEventBasic trip_short_name. */
    trip_short_name: string;

    /** StopEventBasic route_name. */
    route_name: string;

    /** StopEventBasic route_color. */
    route_color: number;

    /** StopEventBasic route_text_color. */
    route_text_color: number;

    /** StopEventBasic route_type. */
    route_type: RouteType;

    /** StopEventBasic agency_name. */
    agency_name: string;

    /**
     * Creates a new StopEventBasic instance using the specified properties.
     * @param [properties] Properties to set
     * @returns StopEventBasic instance
     */
    static create(properties: StopEventBasic.$Shape): StopEventBasic & StopEventBasic.$Shape;
    static create(properties?: StopEventBasic.$Properties): StopEventBasic;

    /**
     * Encodes the specified StopEventBasic message. Does not implicitly {@link StopEventBasic.verify|verify} messages.
     * @param message StopEventBasic message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encode(message: StopEventBasic.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified StopEventBasic message, length delimited. Does not implicitly {@link StopEventBasic.verify|verify} messages.
     * @param message StopEventBasic message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encodeDelimited(message: StopEventBasic.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a StopEventBasic message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns {StopEventBasic & StopEventBasic.$Shape} StopEventBasic
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): StopEventBasic & StopEventBasic.$Shape;

    /**
     * Decodes a StopEventBasic message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns {StopEventBasic & StopEventBasic.$Shape} StopEventBasic
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): StopEventBasic & StopEventBasic.$Shape;

    /**
     * Verifies a StopEventBasic message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a StopEventBasic message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns StopEventBasic
     */
    static fromObject(object: { [k: string]: any }): StopEventBasic;

    /**
     * Creates a plain object from a StopEventBasic message. Also converts values to other types if specified.
     * @param message StopEventBasic
     * @param [options] Conversion options
     * @returns Plain object
     */
    static toObject(message: StopEventBasic, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this StopEventBasic to JSON.
     * @returns JSON object
     */
    toJSON(): { [k: string]: any };

    /**
     * Gets the type url for StopEventBasic
     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns The type url
     */
    static getTypeUrl(prefix?: string): string;
}

export namespace StopEventBasic {

    /** Properties of a StopEventBasic. */
    interface $Properties {

        /** StopEventBasic scheduled_arrival */
        scheduled_arrival?: (number|null);

        /** StopEventBasic scheduled_departure */
        scheduled_departure?: (number|null);

        /** StopEventBasic realtime_arrival */
        realtime_arrival?: (number|null);

        /** StopEventBasic realtime_departure */
        realtime_departure?: (number|null);

        /** StopEventBasic trip_modified */
        trip_modified?: (boolean|null);

        /** StopEventBasic stop_cancelled */
        stop_cancelled?: (boolean|null);

        /** StopEventBasic trip_cancelled */
        trip_cancelled?: (boolean|null);

        /** StopEventBasic trip_deleted */
        trip_deleted?: (boolean|null);

        /** StopEventBasic trip_id */
        trip_id?: (string|null);

        /** StopEventBasic headsign */
        headsign?: (string|null);

        /** StopEventBasic vehicle_number */
        vehicle_number?: (string|null);

        /** StopEventBasic trip_short_name */
        trip_short_name?: (string|null);

        /** StopEventBasic route_name */
        route_name?: (string|null);

        /** StopEventBasic route_color */
        route_color?: (number|null);

        /** StopEventBasic route_text_color */
        route_text_color?: (number|null);

        /** StopEventBasic route_type */
        route_type?: (RouteType|null);

        /** StopEventBasic agency_name */
        agency_name?: (string|null);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];
    }

    /** Shape of a StopEventBasic. */
    type $Shape = StopEventBasic.$Properties;
}

/**
 * Properties of an AlertBasic.
 * @deprecated Use AlertBasic.$Properties instead.
 */
export interface IAlertBasic extends AlertBasic.$Properties {
}

/** Represents an AlertBasic. */
export class AlertBasic {

    /**
     * Constructs a new AlertBasic.
     * @param [properties] Properties to set
     */
    constructor(properties?: AlertBasic.$Properties);

    /** Unknown fields preserved while decoding when enabled */
    $unknowns?: Uint8Array[];

    /** AlertBasic header_text. */
    header_text: string;

    /** AlertBasic description_text. */
    description_text: string;

    /**
     * Creates a new AlertBasic instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AlertBasic instance
     */
    static create(properties: AlertBasic.$Shape): AlertBasic & AlertBasic.$Shape;
    static create(properties?: AlertBasic.$Properties): AlertBasic;

    /**
     * Encodes the specified AlertBasic message. Does not implicitly {@link AlertBasic.verify|verify} messages.
     * @param message AlertBasic message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encode(message: AlertBasic.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AlertBasic message, length delimited. Does not implicitly {@link AlertBasic.verify|verify} messages.
     * @param message AlertBasic message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encodeDelimited(message: AlertBasic.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AlertBasic message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns {AlertBasic & AlertBasic.$Shape} AlertBasic
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AlertBasic & AlertBasic.$Shape;

    /**
     * Decodes an AlertBasic message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns {AlertBasic & AlertBasic.$Shape} AlertBasic
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AlertBasic & AlertBasic.$Shape;

    /**
     * Verifies an AlertBasic message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an AlertBasic message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AlertBasic
     */
    static fromObject(object: { [k: string]: any }): AlertBasic;

    /**
     * Creates a plain object from an AlertBasic message. Also converts values to other types if specified.
     * @param message AlertBasic
     * @param [options] Conversion options
     * @returns Plain object
     */
    static toObject(message: AlertBasic, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this AlertBasic to JSON.
     * @returns JSON object
     */
    toJSON(): { [k: string]: any };

    /**
     * Gets the type url for AlertBasic
     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns The type url
     */
    static getTypeUrl(prefix?: string): string;
}

export namespace AlertBasic {

    /** Properties of an AlertBasic. */
    interface $Properties {

        /** AlertBasic header_text */
        header_text?: (string|null);

        /** AlertBasic description_text */
        description_text?: (string|null);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];
    }

    /** Shape of an AlertBasic. */
    type $Shape = AlertBasic.$Properties;
}

/**
 * Properties of a DeparturesBoardResponse.
 * @deprecated Use DeparturesBoardResponse.$Properties instead.
 */
export interface IDeparturesBoardResponse extends DeparturesBoardResponse.$Properties {
}

/** Represents a DeparturesBoardResponse. */
export class DeparturesBoardResponse {

    /**
     * Constructs a new DeparturesBoardResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: DeparturesBoardResponse.$Properties);

    /** Unknown fields preserved while decoding when enabled */
    $unknowns?: Uint8Array[];

    /** DeparturesBoardResponse success. */
    success: boolean;

    /** DeparturesBoardResponse stop. */
    stop?: (StopBasic.$Properties|null);

    /** DeparturesBoardResponse alerts. */
    alerts: AlertBasic.$Properties[];

    /** DeparturesBoardResponse stop_events. */
    stop_events: StopEventBasic.$Properties[];

    /** DeparturesBoardResponse truncated. */
    truncated: boolean;

    /**
     * Creates a new DeparturesBoardResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DeparturesBoardResponse instance
     */
    static create(properties: DeparturesBoardResponse.$Shape): DeparturesBoardResponse & DeparturesBoardResponse.$Shape;
    static create(properties?: DeparturesBoardResponse.$Properties): DeparturesBoardResponse;

    /**
     * Encodes the specified DeparturesBoardResponse message. Does not implicitly {@link DeparturesBoardResponse.verify|verify} messages.
     * @param message DeparturesBoardResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encode(message: DeparturesBoardResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DeparturesBoardResponse message, length delimited. Does not implicitly {@link DeparturesBoardResponse.verify|verify} messages.
     * @param message DeparturesBoardResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encodeDelimited(message: DeparturesBoardResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DeparturesBoardResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns {DeparturesBoardResponse & DeparturesBoardResponse.$Shape} DeparturesBoardResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DeparturesBoardResponse & DeparturesBoardResponse.$Shape;

    /**
     * Decodes a DeparturesBoardResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns {DeparturesBoardResponse & DeparturesBoardResponse.$Shape} DeparturesBoardResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DeparturesBoardResponse & DeparturesBoardResponse.$Shape;

    /**
     * Verifies a DeparturesBoardResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DeparturesBoardResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DeparturesBoardResponse
     */
    static fromObject(object: { [k: string]: any }): DeparturesBoardResponse;

    /**
     * Creates a plain object from a DeparturesBoardResponse message. Also converts values to other types if specified.
     * @param message DeparturesBoardResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    static toObject(message: DeparturesBoardResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DeparturesBoardResponse to JSON.
     * @returns JSON object
     */
    toJSON(): { [k: string]: any };

    /**
     * Gets the type url for DeparturesBoardResponse
     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns The type url
     */
    static getTypeUrl(prefix?: string): string;
}

export namespace DeparturesBoardResponse {

    /** Properties of a DeparturesBoardResponse. */
    interface $Properties {

        /** DeparturesBoardResponse success */
        success?: (boolean|null);

        /** DeparturesBoardResponse stop */
        stop?: (StopBasic.$Properties|null);

        /** DeparturesBoardResponse alerts */
        alerts?: (AlertBasic.$Properties[]|null);

        /** DeparturesBoardResponse stop_events */
        stop_events?: (StopEventBasic.$Properties[]|null);

        /** DeparturesBoardResponse truncated */
        truncated?: (boolean|null);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];
    }

    /** Shape of a DeparturesBoardResponse. */
    type $Shape = DeparturesBoardResponse.$Properties;
}

/**
 * Properties of a DeparturesBoardRequest.
 * @deprecated Use DeparturesBoardRequest.$Properties instead.
 */
export interface IDeparturesBoardRequest extends DeparturesBoardRequest.$Properties {
}

/** Represents a DeparturesBoardRequest. */
export class DeparturesBoardRequest {

    /**
     * Constructs a new DeparturesBoardRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: DeparturesBoardRequest.$Properties);

    /** Unknown fields preserved while decoding when enabled */
    $unknowns?: Uint8Array[];

    /** DeparturesBoardRequest chateau_id. */
    chateau_id: string;

    /** DeparturesBoardRequest stop_id. */
    stop_id: string;

    /** DeparturesBoardRequest greater_than_time. */
    greater_than_time: number;

    /** DeparturesBoardRequest less_than_time. */
    less_than_time: number;

    /**
     * Creates a new DeparturesBoardRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DeparturesBoardRequest instance
     */
    static create(properties: DeparturesBoardRequest.$Shape): DeparturesBoardRequest & DeparturesBoardRequest.$Shape;
    static create(properties?: DeparturesBoardRequest.$Properties): DeparturesBoardRequest;

    /**
     * Encodes the specified DeparturesBoardRequest message. Does not implicitly {@link DeparturesBoardRequest.verify|verify} messages.
     * @param message DeparturesBoardRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encode(message: DeparturesBoardRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DeparturesBoardRequest message, length delimited. Does not implicitly {@link DeparturesBoardRequest.verify|verify} messages.
     * @param message DeparturesBoardRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encodeDelimited(message: DeparturesBoardRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DeparturesBoardRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns {DeparturesBoardRequest & DeparturesBoardRequest.$Shape} DeparturesBoardRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DeparturesBoardRequest & DeparturesBoardRequest.$Shape;

    /**
     * Decodes a DeparturesBoardRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns {DeparturesBoardRequest & DeparturesBoardRequest.$Shape} DeparturesBoardRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DeparturesBoardRequest & DeparturesBoardRequest.$Shape;

    /**
     * Verifies a DeparturesBoardRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DeparturesBoardRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DeparturesBoardRequest
     */
    static fromObject(object: { [k: string]: any }): DeparturesBoardRequest;

    /**
     * Creates a plain object from a DeparturesBoardRequest message. Also converts values to other types if specified.
     * @param message DeparturesBoardRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    static toObject(message: DeparturesBoardRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DeparturesBoardRequest to JSON.
     * @returns JSON object
     */
    toJSON(): { [k: string]: any };

    /**
     * Gets the type url for DeparturesBoardRequest
     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns The type url
     */
    static getTypeUrl(prefix?: string): string;
}

export namespace DeparturesBoardRequest {

    /** Properties of a DeparturesBoardRequest. */
    interface $Properties {

        /** DeparturesBoardRequest chateau_id */
        chateau_id?: (string|null);

        /** DeparturesBoardRequest stop_id */
        stop_id?: (string|null);

        /** DeparturesBoardRequest greater_than_time */
        greater_than_time?: (number|null);

        /** DeparturesBoardRequest less_than_time */
        less_than_time?: (number|null);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];
    }

    /** Shape of a DeparturesBoardRequest. */
    type $Shape = DeparturesBoardRequest.$Properties;
}

/** FieldType enum. */
export enum FieldType {

    /** FT_DEFAULT value */
    FT_DEFAULT = 0,

    /** FT_CALLBACK value */
    FT_CALLBACK = 1,

    /** FT_POINTER value */
    FT_POINTER = 4,

    /** FT_STATIC value */
    FT_STATIC = 2,

    /** FT_IGNORE value */
    FT_IGNORE = 3,

    /** FT_INLINE value */
    FT_INLINE = 5
}

/** IntSize enum. */
export enum IntSize {

    /** IS_DEFAULT value */
    IS_DEFAULT = 0,

    /** IS_8 value */
    IS_8 = 8,

    /** IS_16 value */
    IS_16 = 16,

    /** IS_32 value */
    IS_32 = 32,

    /** IS_64 value */
    IS_64 = 64
}

/** TypenameMangling enum. */
export enum TypenameMangling {

    /** M_NONE value */
    M_NONE = 0,

    /** M_STRIP_PACKAGE value */
    M_STRIP_PACKAGE = 1,

    /** M_FLATTEN value */
    M_FLATTEN = 2,

    /** M_PACKAGE_INITIALS value */
    M_PACKAGE_INITIALS = 3
}

/** DescriptorSize enum. */
export enum DescriptorSize {

    /** DS_AUTO value */
    DS_AUTO = 0,

    /** DS_1 value */
    DS_1 = 1,

    /** DS_2 value */
    DS_2 = 2,

    /** DS_4 value */
    DS_4 = 4,

    /** DS_8 value */
    DS_8 = 8
}

/**
 * Properties of a NanoPBOptions.
 * @deprecated Use NanoPBOptions.$Properties instead.
 */
export interface INanoPBOptions extends NanoPBOptions.$Properties {
}

/** Represents a NanoPBOptions. */
export class NanoPBOptions {

    /**
     * Constructs a new NanoPBOptions.
     * @param [properties] Properties to set
     */
    constructor(properties?: NanoPBOptions.$Properties);

    /** Unknown fields preserved while decoding when enabled */
    $unknowns?: Uint8Array[];

    /** NanoPBOptions max_size. */
    max_size: number;

    /** NanoPBOptions max_length. */
    max_length: number;

    /** NanoPBOptions max_count. */
    max_count: number;

    /** NanoPBOptions int_size. */
    int_size: IntSize;

    /** NanoPBOptions enum_intsize. */
    enum_intsize: IntSize;

    /** NanoPBOptions type. */
    type: FieldType;

    /** NanoPBOptions long_names. */
    long_names: boolean;

    /** NanoPBOptions packed_struct. */
    packed_struct: boolean;

    /** NanoPBOptions packed_enum. */
    packed_enum: boolean;

    /** NanoPBOptions skip_message. */
    skip_message: boolean;

    /** NanoPBOptions no_unions. */
    no_unions: boolean;

    /** NanoPBOptions msgid. */
    msgid: number;

    /** NanoPBOptions anonymous_oneof. */
    anonymous_oneof: boolean;

    /** NanoPBOptions proto3. */
    proto3: boolean;

    /** NanoPBOptions proto3_singular_msgs. */
    proto3_singular_msgs: boolean;

    /** NanoPBOptions enum_to_string. */
    enum_to_string: boolean;

    /** NanoPBOptions enum_validate. */
    enum_validate: boolean;

    /** NanoPBOptions fixed_length. */
    fixed_length: boolean;

    /** NanoPBOptions fixed_count. */
    fixed_count: boolean;

    /** NanoPBOptions submsg_callback. */
    submsg_callback: boolean;

    /** NanoPBOptions mangle_names. */
    mangle_names: TypenameMangling;

    /** NanoPBOptions callback_datatype. */
    callback_datatype: string;

    /** NanoPBOptions callback_function. */
    callback_function: string;

    /** NanoPBOptions descriptorsize. */
    descriptorsize: DescriptorSize;

    /** NanoPBOptions default_has. */
    default_has: boolean;

    /** NanoPBOptions include. */
    include: string[];

    /** NanoPBOptions exclude. */
    exclude: string[];

    /** NanoPBOptions package. */
    package: string;

    /** NanoPBOptions type_override. */
    type_override: google.protobuf.FieldDescriptorProto.Type;

    /** NanoPBOptions label_override. */
    label_override: google.protobuf.FieldDescriptorProto.Label;

    /** NanoPBOptions sort_by_tag. */
    sort_by_tag: boolean;

    /** NanoPBOptions fallback_type. */
    fallback_type: FieldType;

    /** NanoPBOptions initializer. */
    initializer: string;

    /** NanoPBOptions discard_unused_automatic_types. */
    discard_unused_automatic_types: boolean;

    /** NanoPBOptions discard_deprecated. */
    discard_deprecated: boolean;

    /**
     * Creates a new NanoPBOptions instance using the specified properties.
     * @param [properties] Properties to set
     * @returns NanoPBOptions instance
     */
    static create(properties: NanoPBOptions.$Shape): NanoPBOptions & NanoPBOptions.$Shape;
    static create(properties?: NanoPBOptions.$Properties): NanoPBOptions;

    /**
     * Encodes the specified NanoPBOptions message. Does not implicitly {@link NanoPBOptions.verify|verify} messages.
     * @param message NanoPBOptions message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encode(message: NanoPBOptions.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified NanoPBOptions message, length delimited. Does not implicitly {@link NanoPBOptions.verify|verify} messages.
     * @param message NanoPBOptions message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encodeDelimited(message: NanoPBOptions.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a NanoPBOptions message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns {NanoPBOptions & NanoPBOptions.$Shape} NanoPBOptions
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NanoPBOptions & NanoPBOptions.$Shape;

    /**
     * Decodes a NanoPBOptions message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns {NanoPBOptions & NanoPBOptions.$Shape} NanoPBOptions
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NanoPBOptions & NanoPBOptions.$Shape;

    /**
     * Verifies a NanoPBOptions message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a NanoPBOptions message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns NanoPBOptions
     */
    static fromObject(object: { [k: string]: any }): NanoPBOptions;

    /**
     * Creates a plain object from a NanoPBOptions message. Also converts values to other types if specified.
     * @param message NanoPBOptions
     * @param [options] Conversion options
     * @returns Plain object
     */
    static toObject(message: NanoPBOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this NanoPBOptions to JSON.
     * @returns JSON object
     */
    toJSON(): { [k: string]: any };

    /**
     * Gets the type url for NanoPBOptions
     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns The type url
     */
    static getTypeUrl(prefix?: string): string;
}

export namespace NanoPBOptions {

    /** Properties of a NanoPBOptions. */
    interface $Properties {

        /** NanoPBOptions max_size */
        max_size?: (number|null);

        /** NanoPBOptions max_length */
        max_length?: (number|null);

        /** NanoPBOptions max_count */
        max_count?: (number|null);

        /** NanoPBOptions int_size */
        int_size?: (IntSize|null);

        /** NanoPBOptions enum_intsize */
        enum_intsize?: (IntSize|null);

        /** NanoPBOptions type */
        type?: (FieldType|null);

        /** NanoPBOptions long_names */
        long_names?: (boolean|null);

        /** NanoPBOptions packed_struct */
        packed_struct?: (boolean|null);

        /** NanoPBOptions packed_enum */
        packed_enum?: (boolean|null);

        /** NanoPBOptions skip_message */
        skip_message?: (boolean|null);

        /** NanoPBOptions no_unions */
        no_unions?: (boolean|null);

        /** NanoPBOptions msgid */
        msgid?: (number|null);

        /** NanoPBOptions anonymous_oneof */
        anonymous_oneof?: (boolean|null);

        /** NanoPBOptions proto3 */
        proto3?: (boolean|null);

        /** NanoPBOptions proto3_singular_msgs */
        proto3_singular_msgs?: (boolean|null);

        /** NanoPBOptions enum_to_string */
        enum_to_string?: (boolean|null);

        /** NanoPBOptions enum_validate */
        enum_validate?: (boolean|null);

        /** NanoPBOptions fixed_length */
        fixed_length?: (boolean|null);

        /** NanoPBOptions fixed_count */
        fixed_count?: (boolean|null);

        /** NanoPBOptions submsg_callback */
        submsg_callback?: (boolean|null);

        /** NanoPBOptions mangle_names */
        mangle_names?: (TypenameMangling|null);

        /** NanoPBOptions callback_datatype */
        callback_datatype?: (string|null);

        /** NanoPBOptions callback_function */
        callback_function?: (string|null);

        /** NanoPBOptions descriptorsize */
        descriptorsize?: (DescriptorSize|null);

        /** NanoPBOptions default_has */
        default_has?: (boolean|null);

        /** NanoPBOptions include */
        include?: (string[]|null);

        /** NanoPBOptions exclude */
        exclude?: (string[]|null);

        /** NanoPBOptions package */
        "package"?: (string|null);

        /** NanoPBOptions type_override */
        type_override?: (google.protobuf.FieldDescriptorProto.Type|null);

        /** NanoPBOptions label_override */
        label_override?: (google.protobuf.FieldDescriptorProto.Label|null);

        /** NanoPBOptions sort_by_tag */
        sort_by_tag?: (boolean|null);

        /** NanoPBOptions fallback_type */
        fallback_type?: (FieldType|null);

        /** NanoPBOptions initializer */
        initializer?: (string|null);

        /** NanoPBOptions discard_unused_automatic_types */
        discard_unused_automatic_types?: (boolean|null);

        /** NanoPBOptions discard_deprecated */
        discard_deprecated?: (boolean|null);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];
    }

    /** Shape of a NanoPBOptions. */
    type $Shape = NanoPBOptions.$Properties;
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /**
         * Properties of a FileDescriptorSet.
         * @deprecated Use google.protobuf.FileDescriptorSet.$Properties instead.
         */
        interface IFileDescriptorSet extends google.protobuf.FileDescriptorSet.$Properties {
        }

        /** Represents a FileDescriptorSet. */
        class FileDescriptorSet {

            /**
             * Constructs a new FileDescriptorSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.FileDescriptorSet.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** FileDescriptorSet file. */
            file: google.protobuf.FileDescriptorProto.$Properties[];

            /**
             * Creates a new FileDescriptorSet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorSet instance
             */
            static create(properties: google.protobuf.FileDescriptorSet.$Shape): google.protobuf.FileDescriptorSet & google.protobuf.FileDescriptorSet.$Shape;
            static create(properties?: google.protobuf.FileDescriptorSet.$Properties): google.protobuf.FileDescriptorSet;

            /**
             * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: google.protobuf.FileDescriptorSet.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: google.protobuf.FileDescriptorSet.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {google.protobuf.FileDescriptorSet & google.protobuf.FileDescriptorSet.$Shape} FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorSet & google.protobuf.FileDescriptorSet.$Shape;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {google.protobuf.FileDescriptorSet & google.protobuf.FileDescriptorSet.$Shape} FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorSet & google.protobuf.FileDescriptorSet.$Shape;

            /**
             * Verifies a FileDescriptorSet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorSet
             */
            static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorSet;

            /**
             * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
             * @param message FileDescriptorSet
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: google.protobuf.FileDescriptorSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorSet to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for FileDescriptorSet
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace FileDescriptorSet {

            /** Properties of a FileDescriptorSet. */
            interface $Properties {

                /** FileDescriptorSet file */
                file?: (google.protobuf.FileDescriptorProto.$Properties[]|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a FileDescriptorSet. */
            type $Shape = google.protobuf.FileDescriptorSet.$Properties;
        }

        /** Edition enum. */
        enum Edition {

            /** EDITION_UNKNOWN value */
            EDITION_UNKNOWN = 0,

            /** EDITION_LEGACY value */
            EDITION_LEGACY = 900,

            /** EDITION_PROTO2 value */
            EDITION_PROTO2 = 998,

            /** EDITION_PROTO3 value */
            EDITION_PROTO3 = 999,

            /** EDITION_2023 value */
            EDITION_2023 = 1000,

            /** EDITION_2024 value */
            EDITION_2024 = 1001,

            /** EDITION_1_TEST_ONLY value */
            EDITION_1_TEST_ONLY = 1,

            /** EDITION_2_TEST_ONLY value */
            EDITION_2_TEST_ONLY = 2,

            /** EDITION_99997_TEST_ONLY value */
            EDITION_99997_TEST_ONLY = 99997,

            /** EDITION_99998_TEST_ONLY value */
            EDITION_99998_TEST_ONLY = 99998,

            /** EDITION_99999_TEST_ONLY value */
            EDITION_99999_TEST_ONLY = 99999,

            /** EDITION_MAX value */
            EDITION_MAX = 2147483647
        }

        /**
         * Properties of a FileDescriptorProto.
         * @deprecated Use google.protobuf.FileDescriptorProto.$Properties instead.
         */
        interface IFileDescriptorProto extends google.protobuf.FileDescriptorProto.$Properties {
        }

        /** Represents a FileDescriptorProto. */
        class FileDescriptorProto {

            /**
             * Constructs a new FileDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.FileDescriptorProto.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** FileDescriptorProto name. */
            name: string;

            /** FileDescriptorProto package. */
            package: string;

            /** FileDescriptorProto dependency. */
            dependency: string[];

            /** FileDescriptorProto public_dependency. */
            public_dependency: number[];

            /** FileDescriptorProto weak_dependency. */
            weak_dependency: number[];

            /** FileDescriptorProto message_type. */
            message_type: google.protobuf.DescriptorProto.$Properties[];

            /** FileDescriptorProto enum_type. */
            enum_type: google.protobuf.EnumDescriptorProto.$Properties[];

            /** FileDescriptorProto service. */
            service: google.protobuf.ServiceDescriptorProto.$Properties[];

            /** FileDescriptorProto extension. */
            extension: google.protobuf.FieldDescriptorProto.$Properties[];

            /** FileDescriptorProto options. */
            options?: (google.protobuf.FileOptions.$Properties|null);

            /** FileDescriptorProto source_code_info. */
            source_code_info?: (google.protobuf.SourceCodeInfo.$Properties|null);

            /** FileDescriptorProto syntax. */
            syntax: string;

            /** FileDescriptorProto edition. */
            edition: google.protobuf.Edition;

            /**
             * Creates a new FileDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorProto instance
             */
            static create(properties: google.protobuf.FileDescriptorProto.$Shape): google.protobuf.FileDescriptorProto & google.protobuf.FileDescriptorProto.$Shape;
            static create(properties?: google.protobuf.FileDescriptorProto.$Properties): google.protobuf.FileDescriptorProto;

            /**
             * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: google.protobuf.FileDescriptorProto.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: google.protobuf.FileDescriptorProto.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {google.protobuf.FileDescriptorProto & google.protobuf.FileDescriptorProto.$Shape} FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorProto & google.protobuf.FileDescriptorProto.$Shape;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {google.protobuf.FileDescriptorProto & google.protobuf.FileDescriptorProto.$Shape} FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorProto & google.protobuf.FileDescriptorProto.$Shape;

            /**
             * Verifies a FileDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorProto
             */
            static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorProto;

            /**
             * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
             * @param message FileDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: google.protobuf.FileDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorProto to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for FileDescriptorProto
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace FileDescriptorProto {

            /** Properties of a FileDescriptorProto. */
            interface $Properties {

                /** FileDescriptorProto name */
                name?: (string|null);

                /** FileDescriptorProto package */
                "package"?: (string|null);

                /** FileDescriptorProto dependency */
                dependency?: (string[]|null);

                /** FileDescriptorProto public_dependency */
                public_dependency?: (number[]|null);

                /** FileDescriptorProto weak_dependency */
                weak_dependency?: (number[]|null);

                /** FileDescriptorProto message_type */
                message_type?: (google.protobuf.DescriptorProto.$Properties[]|null);

                /** FileDescriptorProto enum_type */
                enum_type?: (google.protobuf.EnumDescriptorProto.$Properties[]|null);

                /** FileDescriptorProto service */
                service?: (google.protobuf.ServiceDescriptorProto.$Properties[]|null);

                /** FileDescriptorProto extension */
                extension?: (google.protobuf.FieldDescriptorProto.$Properties[]|null);

                /** FileDescriptorProto options */
                options?: (google.protobuf.FileOptions.$Properties|null);

                /** FileDescriptorProto source_code_info */
                source_code_info?: (google.protobuf.SourceCodeInfo.$Properties|null);

                /** FileDescriptorProto syntax */
                syntax?: (string|null);

                /** FileDescriptorProto edition */
                edition?: (google.protobuf.Edition|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a FileDescriptorProto. */
            type $Shape = google.protobuf.FileDescriptorProto.$Properties;
        }

        /**
         * Properties of a DescriptorProto.
         * @deprecated Use google.protobuf.DescriptorProto.$Properties instead.
         */
        interface IDescriptorProto extends google.protobuf.DescriptorProto.$Properties {
        }

        /** Represents a DescriptorProto. */
        class DescriptorProto {

            /**
             * Constructs a new DescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.DescriptorProto.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** DescriptorProto name. */
            name: string;

            /** DescriptorProto field. */
            field: google.protobuf.FieldDescriptorProto.$Properties[];

            /** DescriptorProto extension. */
            extension: google.protobuf.FieldDescriptorProto.$Properties[];

            /** DescriptorProto nested_type. */
            nested_type: google.protobuf.DescriptorProto.$Properties[];

            /** DescriptorProto enum_type. */
            enum_type: google.protobuf.EnumDescriptorProto.$Properties[];

            /** DescriptorProto extension_range. */
            extension_range: google.protobuf.DescriptorProto.ExtensionRange.$Properties[];

            /** DescriptorProto oneof_decl. */
            oneof_decl: google.protobuf.OneofDescriptorProto.$Properties[];

            /** DescriptorProto options. */
            options?: (google.protobuf.MessageOptions.$Properties|null);

            /** DescriptorProto reserved_range. */
            reserved_range: google.protobuf.DescriptorProto.ReservedRange.$Properties[];

            /** DescriptorProto reserved_name. */
            reserved_name: string[];

            /**
             * Creates a new DescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DescriptorProto instance
             */
            static create(properties: google.protobuf.DescriptorProto.$Shape): google.protobuf.DescriptorProto & google.protobuf.DescriptorProto.$Shape;
            static create(properties?: google.protobuf.DescriptorProto.$Properties): google.protobuf.DescriptorProto;

            /**
             * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: google.protobuf.DescriptorProto.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: google.protobuf.DescriptorProto.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {google.protobuf.DescriptorProto & google.protobuf.DescriptorProto.$Shape} DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto & google.protobuf.DescriptorProto.$Shape;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {google.protobuf.DescriptorProto & google.protobuf.DescriptorProto.$Shape} DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto & google.protobuf.DescriptorProto.$Shape;

            /**
             * Verifies a DescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DescriptorProto
             */
            static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto;

            /**
             * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
             * @param message DescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: google.protobuf.DescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DescriptorProto to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for DescriptorProto
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace DescriptorProto {

            /** Properties of a DescriptorProto. */
            interface $Properties {

                /** DescriptorProto name */
                name?: (string|null);

                /** DescriptorProto field */
                field?: (google.protobuf.FieldDescriptorProto.$Properties[]|null);

                /** DescriptorProto extension */
                extension?: (google.protobuf.FieldDescriptorProto.$Properties[]|null);

                /** DescriptorProto nested_type */
                nested_type?: (google.protobuf.DescriptorProto.$Properties[]|null);

                /** DescriptorProto enum_type */
                enum_type?: (google.protobuf.EnumDescriptorProto.$Properties[]|null);

                /** DescriptorProto extension_range */
                extension_range?: (google.protobuf.DescriptorProto.ExtensionRange.$Properties[]|null);

                /** DescriptorProto oneof_decl */
                oneof_decl?: (google.protobuf.OneofDescriptorProto.$Properties[]|null);

                /** DescriptorProto options */
                options?: (google.protobuf.MessageOptions.$Properties|null);

                /** DescriptorProto reserved_range */
                reserved_range?: (google.protobuf.DescriptorProto.ReservedRange.$Properties[]|null);

                /** DescriptorProto reserved_name */
                reserved_name?: (string[]|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a DescriptorProto. */
            type $Shape = google.protobuf.DescriptorProto.$Properties;

            /**
             * Properties of an ExtensionRange.
             * @deprecated Use google.protobuf.DescriptorProto.ExtensionRange.$Properties instead.
             */
            interface IExtensionRange extends google.protobuf.DescriptorProto.ExtensionRange.$Properties {
            }

            /** Represents an ExtensionRange. */
            class ExtensionRange {

                /**
                 * Constructs a new ExtensionRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.ExtensionRange.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** ExtensionRange start. */
                start: number;

                /** ExtensionRange end. */
                end: number;

                /** ExtensionRange options. */
                options?: (google.protobuf.ExtensionRangeOptions.$Properties|null);

                /**
                 * Creates a new ExtensionRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ExtensionRange instance
                 */
                static create(properties: google.protobuf.DescriptorProto.ExtensionRange.$Shape): google.protobuf.DescriptorProto.ExtensionRange & google.protobuf.DescriptorProto.ExtensionRange.$Shape;
                static create(properties?: google.protobuf.DescriptorProto.ExtensionRange.$Properties): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: google.protobuf.DescriptorProto.ExtensionRange.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: google.protobuf.DescriptorProto.ExtensionRange.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {google.protobuf.DescriptorProto.ExtensionRange & google.protobuf.DescriptorProto.ExtensionRange.$Shape} ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ExtensionRange & google.protobuf.DescriptorProto.ExtensionRange.$Shape;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {google.protobuf.DescriptorProto.ExtensionRange & google.protobuf.DescriptorProto.ExtensionRange.$Shape} ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ExtensionRange & google.protobuf.DescriptorProto.ExtensionRange.$Shape;

                /**
                 * Verifies an ExtensionRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExtensionRange
                 */
                static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                 * @param message ExtensionRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: google.protobuf.DescriptorProto.ExtensionRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExtensionRange to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for ExtensionRange
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace ExtensionRange {

                /** Properties of an ExtensionRange. */
                interface $Properties {

                    /** ExtensionRange start */
                    start?: (number|null);

                    /** ExtensionRange end */
                    end?: (number|null);

                    /** ExtensionRange options */
                    options?: (google.protobuf.ExtensionRangeOptions.$Properties|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of an ExtensionRange. */
                type $Shape = google.protobuf.DescriptorProto.ExtensionRange.$Properties;
            }

            /**
             * Properties of a ReservedRange.
             * @deprecated Use google.protobuf.DescriptorProto.ReservedRange.$Properties instead.
             */
            interface IReservedRange extends google.protobuf.DescriptorProto.ReservedRange.$Properties {
            }

            /** Represents a ReservedRange. */
            class ReservedRange {

                /**
                 * Constructs a new ReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.ReservedRange.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** ReservedRange start. */
                start: number;

                /** ReservedRange end. */
                end: number;

                /**
                 * Creates a new ReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReservedRange instance
                 */
                static create(properties: google.protobuf.DescriptorProto.ReservedRange.$Shape): google.protobuf.DescriptorProto.ReservedRange & google.protobuf.DescriptorProto.ReservedRange.$Shape;
                static create(properties?: google.protobuf.DescriptorProto.ReservedRange.$Properties): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: google.protobuf.DescriptorProto.ReservedRange.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ReservedRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: google.protobuf.DescriptorProto.ReservedRange.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {google.protobuf.DescriptorProto.ReservedRange & google.protobuf.DescriptorProto.ReservedRange.$Shape} ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ReservedRange & google.protobuf.DescriptorProto.ReservedRange.$Shape;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {google.protobuf.DescriptorProto.ReservedRange & google.protobuf.DescriptorProto.ReservedRange.$Shape} ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ReservedRange & google.protobuf.DescriptorProto.ReservedRange.$Shape;

                /**
                 * Verifies a ReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReservedRange
                 */
                static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                 * @param message ReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: google.protobuf.DescriptorProto.ReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReservedRange to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for ReservedRange
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace ReservedRange {

                /** Properties of a ReservedRange. */
                interface $Properties {

                    /** ReservedRange start */
                    start?: (number|null);

                    /** ReservedRange end */
                    end?: (number|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a ReservedRange. */
                type $Shape = google.protobuf.DescriptorProto.ReservedRange.$Properties;
            }
        }

        /**
         * Properties of an ExtensionRangeOptions.
         * @deprecated Use google.protobuf.ExtensionRangeOptions.$Properties instead.
         */
        interface IExtensionRangeOptions extends google.protobuf.ExtensionRangeOptions.$Properties {
        }

        /** Represents an ExtensionRangeOptions. */
        class ExtensionRangeOptions {

            /**
             * Constructs a new ExtensionRangeOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ExtensionRangeOptions.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** ExtensionRangeOptions uninterpreted_option. */
            uninterpreted_option: google.protobuf.UninterpretedOption.$Properties[];

            /** ExtensionRangeOptions declaration. */
            declaration: google.protobuf.ExtensionRangeOptions.Declaration.$Properties[];

            /** ExtensionRangeOptions features. */
            features?: (google.protobuf.FeatureSet.$Properties|null);

            /** ExtensionRangeOptions verification. */
            verification: google.protobuf.ExtensionRangeOptions.VerificationState;

            /**
             * Creates a new ExtensionRangeOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExtensionRangeOptions instance
             */
            static create(properties: google.protobuf.ExtensionRangeOptions.$Shape): google.protobuf.ExtensionRangeOptions & google.protobuf.ExtensionRangeOptions.$Shape;
            static create(properties?: google.protobuf.ExtensionRangeOptions.$Properties): google.protobuf.ExtensionRangeOptions;

            /**
             * Encodes the specified ExtensionRangeOptions message. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @param message ExtensionRangeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: google.protobuf.ExtensionRangeOptions.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExtensionRangeOptions message, length delimited. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @param message ExtensionRangeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: google.protobuf.ExtensionRangeOptions.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {google.protobuf.ExtensionRangeOptions & google.protobuf.ExtensionRangeOptions.$Shape} ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ExtensionRangeOptions & google.protobuf.ExtensionRangeOptions.$Shape;

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {google.protobuf.ExtensionRangeOptions & google.protobuf.ExtensionRangeOptions.$Shape} ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ExtensionRangeOptions & google.protobuf.ExtensionRangeOptions.$Shape;

            /**
             * Verifies an ExtensionRangeOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExtensionRangeOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExtensionRangeOptions
             */
            static fromObject(object: { [k: string]: any }): google.protobuf.ExtensionRangeOptions;

            /**
             * Creates a plain object from an ExtensionRangeOptions message. Also converts values to other types if specified.
             * @param message ExtensionRangeOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: google.protobuf.ExtensionRangeOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExtensionRangeOptions to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for ExtensionRangeOptions
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace ExtensionRangeOptions {

            /** Properties of an ExtensionRangeOptions. */
            interface $Properties {

                /** ExtensionRangeOptions uninterpreted_option */
                uninterpreted_option?: (google.protobuf.UninterpretedOption.$Properties[]|null);

                /** ExtensionRangeOptions declaration */
                declaration?: (google.protobuf.ExtensionRangeOptions.Declaration.$Properties[]|null);

                /** ExtensionRangeOptions features */
                features?: (google.protobuf.FeatureSet.$Properties|null);

                /** ExtensionRangeOptions verification */
                verification?: (google.protobuf.ExtensionRangeOptions.VerificationState|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of an ExtensionRangeOptions. */
            type $Shape = google.protobuf.ExtensionRangeOptions.$Properties;

            /**
             * Properties of a Declaration.
             * @deprecated Use google.protobuf.ExtensionRangeOptions.Declaration.$Properties instead.
             */
            interface IDeclaration extends google.protobuf.ExtensionRangeOptions.Declaration.$Properties {
            }

            /** Represents a Declaration. */
            class Declaration {

                /**
                 * Constructs a new Declaration.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.ExtensionRangeOptions.Declaration.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** Declaration number. */
                number: number;

                /** Declaration full_name. */
                full_name: string;

                /** Declaration type. */
                type: string;

                /** Declaration reserved. */
                reserved: boolean;

                /** Declaration repeated. */
                repeated: boolean;

                /**
                 * Creates a new Declaration instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Declaration instance
                 */
                static create(properties: google.protobuf.ExtensionRangeOptions.Declaration.$Shape): google.protobuf.ExtensionRangeOptions.Declaration & google.protobuf.ExtensionRangeOptions.Declaration.$Shape;
                static create(properties?: google.protobuf.ExtensionRangeOptions.Declaration.$Properties): google.protobuf.ExtensionRangeOptions.Declaration;

                /**
                 * Encodes the specified Declaration message. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.Declaration.verify|verify} messages.
                 * @param message Declaration message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: google.protobuf.ExtensionRangeOptions.Declaration.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Declaration message, length delimited. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.Declaration.verify|verify} messages.
                 * @param message Declaration message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: google.protobuf.ExtensionRangeOptions.Declaration.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Declaration message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {google.protobuf.ExtensionRangeOptions.Declaration & google.protobuf.ExtensionRangeOptions.Declaration.$Shape} Declaration
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ExtensionRangeOptions.Declaration & google.protobuf.ExtensionRangeOptions.Declaration.$Shape;

                /**
                 * Decodes a Declaration message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {google.protobuf.ExtensionRangeOptions.Declaration & google.protobuf.ExtensionRangeOptions.Declaration.$Shape} Declaration
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ExtensionRangeOptions.Declaration & google.protobuf.ExtensionRangeOptions.Declaration.$Shape;

                /**
                 * Verifies a Declaration message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Declaration message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Declaration
                 */
                static fromObject(object: { [k: string]: any }): google.protobuf.ExtensionRangeOptions.Declaration;

                /**
                 * Creates a plain object from a Declaration message. Also converts values to other types if specified.
                 * @param message Declaration
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: google.protobuf.ExtensionRangeOptions.Declaration, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Declaration to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for Declaration
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace Declaration {

                /** Properties of a Declaration. */
                interface $Properties {

                    /** Declaration number */
                    number?: (number|null);

                    /** Declaration full_name */
                    full_name?: (string|null);

                    /** Declaration type */
                    type?: (string|null);

                    /** Declaration reserved */
                    reserved?: (boolean|null);

                    /** Declaration repeated */
                    repeated?: (boolean|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a Declaration. */
                type $Shape = google.protobuf.ExtensionRangeOptions.Declaration.$Properties;
            }

            /** VerificationState enum. */
            enum VerificationState {

                /** DECLARATION value */
                DECLARATION = 0,

                /** UNVERIFIED value */
                UNVERIFIED = 1
            }
        }

        /**
         * Properties of a FieldDescriptorProto.
         * @deprecated Use google.protobuf.FieldDescriptorProto.$Properties instead.
         */
        interface IFieldDescriptorProto extends google.protobuf.FieldDescriptorProto.$Properties {
        }

        /** Represents a FieldDescriptorProto. */
        class FieldDescriptorProto {

            /**
             * Constructs a new FieldDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.FieldDescriptorProto.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** FieldDescriptorProto name. */
            name: string;

            /** FieldDescriptorProto number. */
            number: number;

            /** FieldDescriptorProto label. */
            label: google.protobuf.FieldDescriptorProto.Label;

            /** FieldDescriptorProto type. */
            type: google.protobuf.FieldDescriptorProto.Type;

            /** FieldDescriptorProto type_name. */
            type_name: string;

            /** FieldDescriptorProto extendee. */
            extendee: string;

            /** FieldDescriptorProto default_value. */
            default_value: string;

            /** FieldDescriptorProto oneof_index. */
            oneof_index: number;

            /** FieldDescriptorProto json_name. */
            json_name: string;

            /** FieldDescriptorProto options. */
            options?: (google.protobuf.FieldOptions.$Properties|null);

            /** FieldDescriptorProto proto3_optional. */
            proto3_optional: boolean;

            /**
             * Creates a new FieldDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldDescriptorProto instance
             */
            static create(properties: google.protobuf.FieldDescriptorProto.$Shape): google.protobuf.FieldDescriptorProto & google.protobuf.FieldDescriptorProto.$Shape;
            static create(properties?: google.protobuf.FieldDescriptorProto.$Properties): google.protobuf.FieldDescriptorProto;

            /**
             * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: google.protobuf.FieldDescriptorProto.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: google.protobuf.FieldDescriptorProto.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {google.protobuf.FieldDescriptorProto & google.protobuf.FieldDescriptorProto.$Shape} FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldDescriptorProto & google.protobuf.FieldDescriptorProto.$Shape;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {google.protobuf.FieldDescriptorProto & google.protobuf.FieldDescriptorProto.$Shape} FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldDescriptorProto & google.protobuf.FieldDescriptorProto.$Shape;

            /**
             * Verifies a FieldDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldDescriptorProto
             */
            static fromObject(object: { [k: string]: any }): google.protobuf.FieldDescriptorProto;

            /**
             * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
             * @param message FieldDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: google.protobuf.FieldDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldDescriptorProto to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for FieldDescriptorProto
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace FieldDescriptorProto {

            /** Properties of a FieldDescriptorProto. */
            interface $Properties {

                /** FieldDescriptorProto name */
                name?: (string|null);

                /** FieldDescriptorProto number */
                number?: (number|null);

                /** FieldDescriptorProto label */
                label?: (google.protobuf.FieldDescriptorProto.Label|null);

                /** FieldDescriptorProto type */
                type?: (google.protobuf.FieldDescriptorProto.Type|null);

                /** FieldDescriptorProto type_name */
                type_name?: (string|null);

                /** FieldDescriptorProto extendee */
                extendee?: (string|null);

                /** FieldDescriptorProto default_value */
                default_value?: (string|null);

                /** FieldDescriptorProto oneof_index */
                oneof_index?: (number|null);

                /** FieldDescriptorProto json_name */
                json_name?: (string|null);

                /** FieldDescriptorProto options */
                options?: (google.protobuf.FieldOptions.$Properties|null);

                /** FieldDescriptorProto proto3_optional */
                proto3_optional?: (boolean|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a FieldDescriptorProto. */
            type $Shape = google.protobuf.FieldDescriptorProto.$Properties;

            /** Type enum. */
            enum Type {

                /** TYPE_DOUBLE value */
                TYPE_DOUBLE = 1,

                /** TYPE_FLOAT value */
                TYPE_FLOAT = 2,

                /** TYPE_INT64 value */
                TYPE_INT64 = 3,

                /** TYPE_UINT64 value */
                TYPE_UINT64 = 4,

                /** TYPE_INT32 value */
                TYPE_INT32 = 5,

                /** TYPE_FIXED64 value */
                TYPE_FIXED64 = 6,

                /** TYPE_FIXED32 value */
                TYPE_FIXED32 = 7,

                /** TYPE_BOOL value */
                TYPE_BOOL = 8,

                /** TYPE_STRING value */
                TYPE_STRING = 9,

                /** TYPE_GROUP value */
                TYPE_GROUP = 10,

                /** TYPE_MESSAGE value */
                TYPE_MESSAGE = 11,

                /** TYPE_BYTES value */
                TYPE_BYTES = 12,

                /** TYPE_UINT32 value */
                TYPE_UINT32 = 13,

                /** TYPE_ENUM value */
                TYPE_ENUM = 14,

                /** TYPE_SFIXED32 value */
                TYPE_SFIXED32 = 15,

                /** TYPE_SFIXED64 value */
                TYPE_SFIXED64 = 16,

                /** TYPE_SINT32 value */
                TYPE_SINT32 = 17,

                /** TYPE_SINT64 value */
                TYPE_SINT64 = 18
            }

            /** Label enum. */
            enum Label {

                /** LABEL_OPTIONAL value */
                LABEL_OPTIONAL = 1,

                /** LABEL_REPEATED value */
                LABEL_REPEATED = 3,

                /** LABEL_REQUIRED value */
                LABEL_REQUIRED = 2
            }
        }

        /**
         * Properties of a OneofDescriptorProto.
         * @deprecated Use google.protobuf.OneofDescriptorProto.$Properties instead.
         */
        interface IOneofDescriptorProto extends google.protobuf.OneofDescriptorProto.$Properties {
        }

        /** Represents a OneofDescriptorProto. */
        class OneofDescriptorProto {

            /**
             * Constructs a new OneofDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.OneofDescriptorProto.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** OneofDescriptorProto name. */
            name: string;

            /** OneofDescriptorProto options. */
            options?: (google.protobuf.OneofOptions.$Properties|null);

            /**
             * Creates a new OneofDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofDescriptorProto instance
             */
            static create(properties: google.protobuf.OneofDescriptorProto.$Shape): google.protobuf.OneofDescriptorProto & google.protobuf.OneofDescriptorProto.$Shape;
            static create(properties?: google.protobuf.OneofDescriptorProto.$Properties): google.protobuf.OneofDescriptorProto;

            /**
             * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: google.protobuf.OneofDescriptorProto.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: google.protobuf.OneofDescriptorProto.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a OneofDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {google.protobuf.OneofDescriptorProto & google.protobuf.OneofDescriptorProto.$Shape} OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofDescriptorProto & google.protobuf.OneofDescriptorProto.$Shape;

            /**
             * Decodes a OneofDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {google.protobuf.OneofDescriptorProto & google.protobuf.OneofDescriptorProto.$Shape} OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofDescriptorProto & google.protobuf.OneofDescriptorProto.$Shape;

            /**
             * Verifies a OneofDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofDescriptorProto
             */
            static fromObject(object: { [k: string]: any }): google.protobuf.OneofDescriptorProto;

            /**
             * Creates a plain object from a OneofDescriptorProto message. Also converts values to other types if specified.
             * @param message OneofDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: google.protobuf.OneofDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofDescriptorProto to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for OneofDescriptorProto
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace OneofDescriptorProto {

            /** Properties of a OneofDescriptorProto. */
            interface $Properties {

                /** OneofDescriptorProto name */
                name?: (string|null);

                /** OneofDescriptorProto options */
                options?: (google.protobuf.OneofOptions.$Properties|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a OneofDescriptorProto. */
            type $Shape = google.protobuf.OneofDescriptorProto.$Properties;
        }

        /**
         * Properties of an EnumDescriptorProto.
         * @deprecated Use google.protobuf.EnumDescriptorProto.$Properties instead.
         */
        interface IEnumDescriptorProto extends google.protobuf.EnumDescriptorProto.$Properties {
        }

        /** Represents an EnumDescriptorProto. */
        class EnumDescriptorProto {

            /**
             * Constructs a new EnumDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.EnumDescriptorProto.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** EnumDescriptorProto name. */
            name: string;

            /** EnumDescriptorProto value. */
            value: google.protobuf.EnumValueDescriptorProto.$Properties[];

            /** EnumDescriptorProto options. */
            options?: (google.protobuf.EnumOptions.$Properties|null);

            /** EnumDescriptorProto reserved_range. */
            reserved_range: google.protobuf.EnumDescriptorProto.EnumReservedRange.$Properties[];

            /** EnumDescriptorProto reserved_name. */
            reserved_name: string[];

            /**
             * Creates a new EnumDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumDescriptorProto instance
             */
            static create(properties: google.protobuf.EnumDescriptorProto.$Shape): google.protobuf.EnumDescriptorProto & google.protobuf.EnumDescriptorProto.$Shape;
            static create(properties?: google.protobuf.EnumDescriptorProto.$Properties): google.protobuf.EnumDescriptorProto;

            /**
             * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: google.protobuf.EnumDescriptorProto.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: google.protobuf.EnumDescriptorProto.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {google.protobuf.EnumDescriptorProto & google.protobuf.EnumDescriptorProto.$Shape} EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto & google.protobuf.EnumDescriptorProto.$Shape;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {google.protobuf.EnumDescriptorProto & google.protobuf.EnumDescriptorProto.$Shape} EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto & google.protobuf.EnumDescriptorProto.$Shape;

            /**
             * Verifies an EnumDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumDescriptorProto
             */
            static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto;

            /**
             * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: google.protobuf.EnumDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumDescriptorProto to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for EnumDescriptorProto
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace EnumDescriptorProto {

            /** Properties of an EnumDescriptorProto. */
            interface $Properties {

                /** EnumDescriptorProto name */
                name?: (string|null);

                /** EnumDescriptorProto value */
                value?: (google.protobuf.EnumValueDescriptorProto.$Properties[]|null);

                /** EnumDescriptorProto options */
                options?: (google.protobuf.EnumOptions.$Properties|null);

                /** EnumDescriptorProto reserved_range */
                reserved_range?: (google.protobuf.EnumDescriptorProto.EnumReservedRange.$Properties[]|null);

                /** EnumDescriptorProto reserved_name */
                reserved_name?: (string[]|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of an EnumDescriptorProto. */
            type $Shape = google.protobuf.EnumDescriptorProto.$Properties;

            /**
             * Properties of an EnumReservedRange.
             * @deprecated Use google.protobuf.EnumDescriptorProto.EnumReservedRange.$Properties instead.
             */
            interface IEnumReservedRange extends google.protobuf.EnumDescriptorProto.EnumReservedRange.$Properties {
            }

            /** Represents an EnumReservedRange. */
            class EnumReservedRange {

                /**
                 * Constructs a new EnumReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.EnumDescriptorProto.EnumReservedRange.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** EnumReservedRange start. */
                start: number;

                /** EnumReservedRange end. */
                end: number;

                /**
                 * Creates a new EnumReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EnumReservedRange instance
                 */
                static create(properties: google.protobuf.EnumDescriptorProto.EnumReservedRange.$Shape): google.protobuf.EnumDescriptorProto.EnumReservedRange & google.protobuf.EnumDescriptorProto.EnumReservedRange.$Shape;
                static create(properties?: google.protobuf.EnumDescriptorProto.EnumReservedRange.$Properties): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Encodes the specified EnumReservedRange message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @param message EnumReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: google.protobuf.EnumDescriptorProto.EnumReservedRange.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified EnumReservedRange message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @param message EnumReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: google.protobuf.EnumDescriptorProto.EnumReservedRange.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {google.protobuf.EnumDescriptorProto.EnumReservedRange & google.protobuf.EnumDescriptorProto.EnumReservedRange.$Shape} EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto.EnumReservedRange & google.protobuf.EnumDescriptorProto.EnumReservedRange.$Shape;

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {google.protobuf.EnumDescriptorProto.EnumReservedRange & google.protobuf.EnumDescriptorProto.EnumReservedRange.$Shape} EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto.EnumReservedRange & google.protobuf.EnumDescriptorProto.EnumReservedRange.$Shape;

                /**
                 * Verifies an EnumReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EnumReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EnumReservedRange
                 */
                static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Creates a plain object from an EnumReservedRange message. Also converts values to other types if specified.
                 * @param message EnumReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: google.protobuf.EnumDescriptorProto.EnumReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EnumReservedRange to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for EnumReservedRange
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace EnumReservedRange {

                /** Properties of an EnumReservedRange. */
                interface $Properties {

                    /** EnumReservedRange start */
                    start?: (number|null);

                    /** EnumReservedRange end */
                    end?: (number|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of an EnumReservedRange. */
                type $Shape = google.protobuf.EnumDescriptorProto.EnumReservedRange.$Properties;
            }
        }

        /**
         * Properties of an EnumValueDescriptorProto.
         * @deprecated Use google.protobuf.EnumValueDescriptorProto.$Properties instead.
         */
        interface IEnumValueDescriptorProto extends google.protobuf.EnumValueDescriptorProto.$Properties {
        }

        /** Represents an EnumValueDescriptorProto. */
        class EnumValueDescriptorProto {

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.EnumValueDescriptorProto.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** EnumValueDescriptorProto name. */
            name: string;

            /** EnumValueDescriptorProto number. */
            number: number;

            /** EnumValueDescriptorProto options. */
            options?: (google.protobuf.EnumValueOptions.$Properties|null);

            /**
             * Creates a new EnumValueDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueDescriptorProto instance
             */
            static create(properties: google.protobuf.EnumValueDescriptorProto.$Shape): google.protobuf.EnumValueDescriptorProto & google.protobuf.EnumValueDescriptorProto.$Shape;
            static create(properties?: google.protobuf.EnumValueDescriptorProto.$Properties): google.protobuf.EnumValueDescriptorProto;

            /**
             * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: google.protobuf.EnumValueDescriptorProto.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: google.protobuf.EnumValueDescriptorProto.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {google.protobuf.EnumValueDescriptorProto & google.protobuf.EnumValueDescriptorProto.$Shape} EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueDescriptorProto & google.protobuf.EnumValueDescriptorProto.$Shape;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {google.protobuf.EnumValueDescriptorProto & google.protobuf.EnumValueDescriptorProto.$Shape} EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueDescriptorProto & google.protobuf.EnumValueDescriptorProto.$Shape;

            /**
             * Verifies an EnumValueDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueDescriptorProto
             */
            static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueDescriptorProto;

            /**
             * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumValueDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: google.protobuf.EnumValueDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueDescriptorProto to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for EnumValueDescriptorProto
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace EnumValueDescriptorProto {

            /** Properties of an EnumValueDescriptorProto. */
            interface $Properties {

                /** EnumValueDescriptorProto name */
                name?: (string|null);

                /** EnumValueDescriptorProto number */
                number?: (number|null);

                /** EnumValueDescriptorProto options */
                options?: (google.protobuf.EnumValueOptions.$Properties|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of an EnumValueDescriptorProto. */
            type $Shape = google.protobuf.EnumValueDescriptorProto.$Properties;
        }

        /**
         * Properties of a ServiceDescriptorProto.
         * @deprecated Use google.protobuf.ServiceDescriptorProto.$Properties instead.
         */
        interface IServiceDescriptorProto extends google.protobuf.ServiceDescriptorProto.$Properties {
        }

        /** Represents a ServiceDescriptorProto. */
        class ServiceDescriptorProto {

            /**
             * Constructs a new ServiceDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ServiceDescriptorProto.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** ServiceDescriptorProto name. */
            name: string;

            /** ServiceDescriptorProto method. */
            method: google.protobuf.MethodDescriptorProto.$Properties[];

            /** ServiceDescriptorProto options. */
            options?: (google.protobuf.ServiceOptions.$Properties|null);

            /**
             * Creates a new ServiceDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceDescriptorProto instance
             */
            static create(properties: google.protobuf.ServiceDescriptorProto.$Shape): google.protobuf.ServiceDescriptorProto & google.protobuf.ServiceDescriptorProto.$Shape;
            static create(properties?: google.protobuf.ServiceDescriptorProto.$Properties): google.protobuf.ServiceDescriptorProto;

            /**
             * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: google.protobuf.ServiceDescriptorProto.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: google.protobuf.ServiceDescriptorProto.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {google.protobuf.ServiceDescriptorProto & google.protobuf.ServiceDescriptorProto.$Shape} ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceDescriptorProto & google.protobuf.ServiceDescriptorProto.$Shape;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {google.protobuf.ServiceDescriptorProto & google.protobuf.ServiceDescriptorProto.$Shape} ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceDescriptorProto & google.protobuf.ServiceDescriptorProto.$Shape;

            /**
             * Verifies a ServiceDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceDescriptorProto
             */
            static fromObject(object: { [k: string]: any }): google.protobuf.ServiceDescriptorProto;

            /**
             * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
             * @param message ServiceDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: google.protobuf.ServiceDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceDescriptorProto to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for ServiceDescriptorProto
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace ServiceDescriptorProto {

            /** Properties of a ServiceDescriptorProto. */
            interface $Properties {

                /** ServiceDescriptorProto name */
                name?: (string|null);

                /** ServiceDescriptorProto method */
                method?: (google.protobuf.MethodDescriptorProto.$Properties[]|null);

                /** ServiceDescriptorProto options */
                options?: (google.protobuf.ServiceOptions.$Properties|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a ServiceDescriptorProto. */
            type $Shape = google.protobuf.ServiceDescriptorProto.$Properties;
        }

        /**
         * Properties of a MethodDescriptorProto.
         * @deprecated Use google.protobuf.MethodDescriptorProto.$Properties instead.
         */
        interface IMethodDescriptorProto extends google.protobuf.MethodDescriptorProto.$Properties {
        }

        /** Represents a MethodDescriptorProto. */
        class MethodDescriptorProto {

            /**
             * Constructs a new MethodDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.MethodDescriptorProto.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** MethodDescriptorProto name. */
            name: string;

            /** MethodDescriptorProto input_type. */
            input_type: string;

            /** MethodDescriptorProto output_type. */
            output_type: string;

            /** MethodDescriptorProto options. */
            options?: (google.protobuf.MethodOptions.$Properties|null);

            /** MethodDescriptorProto client_streaming. */
            client_streaming: boolean;

            /** MethodDescriptorProto server_streaming. */
            server_streaming: boolean;

            /**
             * Creates a new MethodDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodDescriptorProto instance
             */
            static create(properties: google.protobuf.MethodDescriptorProto.$Shape): google.protobuf.MethodDescriptorProto & google.protobuf.MethodDescriptorProto.$Shape;
            static create(properties?: google.protobuf.MethodDescriptorProto.$Properties): google.protobuf.MethodDescriptorProto;

            /**
             * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: google.protobuf.MethodDescriptorProto.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: google.protobuf.MethodDescriptorProto.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {google.protobuf.MethodDescriptorProto & google.protobuf.MethodDescriptorProto.$Shape} MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodDescriptorProto & google.protobuf.MethodDescriptorProto.$Shape;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {google.protobuf.MethodDescriptorProto & google.protobuf.MethodDescriptorProto.$Shape} MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodDescriptorProto & google.protobuf.MethodDescriptorProto.$Shape;

            /**
             * Verifies a MethodDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodDescriptorProto
             */
            static fromObject(object: { [k: string]: any }): google.protobuf.MethodDescriptorProto;

            /**
             * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
             * @param message MethodDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: google.protobuf.MethodDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodDescriptorProto to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for MethodDescriptorProto
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace MethodDescriptorProto {

            /** Properties of a MethodDescriptorProto. */
            interface $Properties {

                /** MethodDescriptorProto name */
                name?: (string|null);

                /** MethodDescriptorProto input_type */
                input_type?: (string|null);

                /** MethodDescriptorProto output_type */
                output_type?: (string|null);

                /** MethodDescriptorProto options */
                options?: (google.protobuf.MethodOptions.$Properties|null);

                /** MethodDescriptorProto client_streaming */
                client_streaming?: (boolean|null);

                /** MethodDescriptorProto server_streaming */
                server_streaming?: (boolean|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a MethodDescriptorProto. */
            type $Shape = google.protobuf.MethodDescriptorProto.$Properties;
        }

        /**
         * Properties of a FileOptions.
         * @deprecated Use google.protobuf.FileOptions.$Properties instead.
         */
        interface IFileOptions extends google.protobuf.FileOptions.$Properties {
        }

        /** Represents a FileOptions. */
        class FileOptions {

            /**
             * Constructs a new FileOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.FileOptions.$Properties);

            /** FileOptions .nanopb_fileopt */
            ".nanopb_fileopt"?: (NanoPBOptions.$Properties|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** FileOptions java_package. */
            java_package: string;

            /** FileOptions java_outer_classname. */
            java_outer_classname: string;

            /** FileOptions java_multiple_files. */
            java_multiple_files: boolean;

            /** FileOptions java_generate_equals_and_hash. */
            java_generate_equals_and_hash: boolean;

            /** FileOptions java_string_check_utf8. */
            java_string_check_utf8: boolean;

            /** FileOptions optimize_for. */
            optimize_for: google.protobuf.FileOptions.OptimizeMode;

            /** FileOptions go_package. */
            go_package: string;

            /** FileOptions cc_generic_services. */
            cc_generic_services: boolean;

            /** FileOptions java_generic_services. */
            java_generic_services: boolean;

            /** FileOptions py_generic_services. */
            py_generic_services: boolean;

            /** FileOptions deprecated. */
            deprecated: boolean;

            /** FileOptions cc_enable_arenas. */
            cc_enable_arenas: boolean;

            /** FileOptions objc_class_prefix. */
            objc_class_prefix: string;

            /** FileOptions csharp_namespace. */
            csharp_namespace: string;

            /** FileOptions swift_prefix. */
            swift_prefix: string;

            /** FileOptions php_class_prefix. */
            php_class_prefix: string;

            /** FileOptions php_namespace. */
            php_namespace: string;

            /** FileOptions php_metadata_namespace. */
            php_metadata_namespace: string;

            /** FileOptions ruby_package. */
            ruby_package: string;

            /** FileOptions features. */
            features?: (google.protobuf.FeatureSet.$Properties|null);

            /** FileOptions uninterpreted_option. */
            uninterpreted_option: google.protobuf.UninterpretedOption.$Properties[];

            /**
             * Creates a new FileOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileOptions instance
             */
            static create(properties: google.protobuf.FileOptions.$Shape): google.protobuf.FileOptions & google.protobuf.FileOptions.$Shape;
            static create(properties?: google.protobuf.FileOptions.$Properties): google.protobuf.FileOptions;

            /**
             * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: google.protobuf.FileOptions.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: google.protobuf.FileOptions.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {google.protobuf.FileOptions & google.protobuf.FileOptions.$Shape} FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileOptions & google.protobuf.FileOptions.$Shape;

            /**
             * Decodes a FileOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {google.protobuf.FileOptions & google.protobuf.FileOptions.$Shape} FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileOptions & google.protobuf.FileOptions.$Shape;

            /**
             * Verifies a FileOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileOptions
             */
            static fromObject(object: { [k: string]: any }): google.protobuf.FileOptions;

            /**
             * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
             * @param message FileOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: google.protobuf.FileOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileOptions to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for FileOptions
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace FileOptions {

            /** Properties of a FileOptions. */
            interface $Properties {

                /** FileOptions java_package */
                java_package?: (string|null);

                /** FileOptions java_outer_classname */
                java_outer_classname?: (string|null);

                /** FileOptions java_multiple_files */
                java_multiple_files?: (boolean|null);

                /** FileOptions java_generate_equals_and_hash */
                java_generate_equals_and_hash?: (boolean|null);

                /** FileOptions java_string_check_utf8 */
                java_string_check_utf8?: (boolean|null);

                /** FileOptions optimize_for */
                optimize_for?: (google.protobuf.FileOptions.OptimizeMode|null);

                /** FileOptions go_package */
                go_package?: (string|null);

                /** FileOptions cc_generic_services */
                cc_generic_services?: (boolean|null);

                /** FileOptions java_generic_services */
                java_generic_services?: (boolean|null);

                /** FileOptions py_generic_services */
                py_generic_services?: (boolean|null);

                /** FileOptions deprecated */
                deprecated?: (boolean|null);

                /** FileOptions cc_enable_arenas */
                cc_enable_arenas?: (boolean|null);

                /** FileOptions objc_class_prefix */
                objc_class_prefix?: (string|null);

                /** FileOptions csharp_namespace */
                csharp_namespace?: (string|null);

                /** FileOptions swift_prefix */
                swift_prefix?: (string|null);

                /** FileOptions php_class_prefix */
                php_class_prefix?: (string|null);

                /** FileOptions php_namespace */
                php_namespace?: (string|null);

                /** FileOptions php_metadata_namespace */
                php_metadata_namespace?: (string|null);

                /** FileOptions ruby_package */
                ruby_package?: (string|null);

                /** FileOptions features */
                features?: (google.protobuf.FeatureSet.$Properties|null);

                /** FileOptions uninterpreted_option */
                uninterpreted_option?: (google.protobuf.UninterpretedOption.$Properties[]|null);

                /** FileOptions .nanopb_fileopt */
                ".nanopb_fileopt"?: (NanoPBOptions.$Properties|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a FileOptions. */
            type $Shape = google.protobuf.FileOptions.$Properties;

            /** OptimizeMode enum. */
            enum OptimizeMode {

                /** SPEED value */
                SPEED = 1,

                /** CODE_SIZE value */
                CODE_SIZE = 2,

                /** LITE_RUNTIME value */
                LITE_RUNTIME = 3
            }
        }

        /**
         * Properties of a MessageOptions.
         * @deprecated Use google.protobuf.MessageOptions.$Properties instead.
         */
        interface IMessageOptions extends google.protobuf.MessageOptions.$Properties {
        }

        /** Represents a MessageOptions. */
        class MessageOptions {

            /**
             * Constructs a new MessageOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.MessageOptions.$Properties);

            /** MessageOptions .nanopb_msgopt */
            ".nanopb_msgopt"?: (NanoPBOptions.$Properties|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** MessageOptions message_set_wire_format. */
            message_set_wire_format: boolean;

            /** MessageOptions no_standard_descriptor_accessor. */
            no_standard_descriptor_accessor: boolean;

            /** MessageOptions deprecated. */
            deprecated: boolean;

            /** MessageOptions map_entry. */
            map_entry: boolean;

            /** MessageOptions deprecated_legacy_json_field_conflicts. */
            deprecated_legacy_json_field_conflicts: boolean;

            /** MessageOptions features. */
            features?: (google.protobuf.FeatureSet.$Properties|null);

            /** MessageOptions uninterpreted_option. */
            uninterpreted_option: google.protobuf.UninterpretedOption.$Properties[];

            /**
             * Creates a new MessageOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageOptions instance
             */
            static create(properties: google.protobuf.MessageOptions.$Shape): google.protobuf.MessageOptions & google.protobuf.MessageOptions.$Shape;
            static create(properties?: google.protobuf.MessageOptions.$Properties): google.protobuf.MessageOptions;

            /**
             * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: google.protobuf.MessageOptions.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: google.protobuf.MessageOptions.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {google.protobuf.MessageOptions & google.protobuf.MessageOptions.$Shape} MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MessageOptions & google.protobuf.MessageOptions.$Shape;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {google.protobuf.MessageOptions & google.protobuf.MessageOptions.$Shape} MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MessageOptions & google.protobuf.MessageOptions.$Shape;

            /**
             * Verifies a MessageOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageOptions
             */
            static fromObject(object: { [k: string]: any }): google.protobuf.MessageOptions;

            /**
             * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
             * @param message MessageOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: google.protobuf.MessageOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageOptions to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for MessageOptions
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace MessageOptions {

            /** Properties of a MessageOptions. */
            interface $Properties {

                /** MessageOptions message_set_wire_format */
                message_set_wire_format?: (boolean|null);

                /** MessageOptions no_standard_descriptor_accessor */
                no_standard_descriptor_accessor?: (boolean|null);

                /** MessageOptions deprecated */
                deprecated?: (boolean|null);

                /** MessageOptions map_entry */
                map_entry?: (boolean|null);

                /** MessageOptions deprecated_legacy_json_field_conflicts */
                deprecated_legacy_json_field_conflicts?: (boolean|null);

                /** MessageOptions features */
                features?: (google.protobuf.FeatureSet.$Properties|null);

                /** MessageOptions uninterpreted_option */
                uninterpreted_option?: (google.protobuf.UninterpretedOption.$Properties[]|null);

                /** MessageOptions .nanopb_msgopt */
                ".nanopb_msgopt"?: (NanoPBOptions.$Properties|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a MessageOptions. */
            type $Shape = google.protobuf.MessageOptions.$Properties;
        }

        /**
         * Properties of a FieldOptions.
         * @deprecated Use google.protobuf.FieldOptions.$Properties instead.
         */
        interface IFieldOptions extends google.protobuf.FieldOptions.$Properties {
        }

        /** Represents a FieldOptions. */
        class FieldOptions {

            /**
             * Constructs a new FieldOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.FieldOptions.$Properties);

            /** FieldOptions .nanopb */
            ".nanopb"?: (NanoPBOptions.$Properties|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** FieldOptions ctype. */
            ctype: google.protobuf.FieldOptions.CType;

            /** FieldOptions packed. */
            packed: boolean;

            /** FieldOptions jstype. */
            jstype: google.protobuf.FieldOptions.JSType;

            /** FieldOptions lazy. */
            lazy: boolean;

            /** FieldOptions unverified_lazy. */
            unverified_lazy: boolean;

            /** FieldOptions deprecated. */
            deprecated: boolean;

            /** FieldOptions weak. */
            weak: boolean;

            /** FieldOptions debug_redact. */
            debug_redact: boolean;

            /** FieldOptions retention. */
            retention: google.protobuf.FieldOptions.OptionRetention;

            /** FieldOptions targets. */
            targets: google.protobuf.FieldOptions.OptionTargetType[];

            /** FieldOptions edition_defaults. */
            edition_defaults: google.protobuf.FieldOptions.EditionDefault.$Properties[];

            /** FieldOptions features. */
            features?: (google.protobuf.FeatureSet.$Properties|null);

            /** FieldOptions feature_support. */
            feature_support?: (google.protobuf.FieldOptions.FeatureSupport.$Properties|null);

            /** FieldOptions uninterpreted_option. */
            uninterpreted_option: google.protobuf.UninterpretedOption.$Properties[];

            /**
             * Creates a new FieldOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldOptions instance
             */
            static create(properties: google.protobuf.FieldOptions.$Shape): google.protobuf.FieldOptions & google.protobuf.FieldOptions.$Shape;
            static create(properties?: google.protobuf.FieldOptions.$Properties): google.protobuf.FieldOptions;

            /**
             * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: google.protobuf.FieldOptions.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: google.protobuf.FieldOptions.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {google.protobuf.FieldOptions & google.protobuf.FieldOptions.$Shape} FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions & google.protobuf.FieldOptions.$Shape;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {google.protobuf.FieldOptions & google.protobuf.FieldOptions.$Shape} FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions & google.protobuf.FieldOptions.$Shape;

            /**
             * Verifies a FieldOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldOptions
             */
            static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions;

            /**
             * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
             * @param message FieldOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: google.protobuf.FieldOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldOptions to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for FieldOptions
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace FieldOptions {

            /** Properties of a FieldOptions. */
            interface $Properties {

                /** FieldOptions ctype */
                ctype?: (google.protobuf.FieldOptions.CType|null);

                /** FieldOptions packed */
                packed?: (boolean|null);

                /** FieldOptions jstype */
                jstype?: (google.protobuf.FieldOptions.JSType|null);

                /** FieldOptions lazy */
                lazy?: (boolean|null);

                /** FieldOptions unverified_lazy */
                unverified_lazy?: (boolean|null);

                /** FieldOptions deprecated */
                deprecated?: (boolean|null);

                /** FieldOptions weak */
                weak?: (boolean|null);

                /** FieldOptions debug_redact */
                debug_redact?: (boolean|null);

                /** FieldOptions retention */
                retention?: (google.protobuf.FieldOptions.OptionRetention|null);

                /** FieldOptions targets */
                targets?: (google.protobuf.FieldOptions.OptionTargetType[]|null);

                /** FieldOptions edition_defaults */
                edition_defaults?: (google.protobuf.FieldOptions.EditionDefault.$Properties[]|null);

                /** FieldOptions features */
                features?: (google.protobuf.FeatureSet.$Properties|null);

                /** FieldOptions feature_support */
                feature_support?: (google.protobuf.FieldOptions.FeatureSupport.$Properties|null);

                /** FieldOptions uninterpreted_option */
                uninterpreted_option?: (google.protobuf.UninterpretedOption.$Properties[]|null);

                /** FieldOptions .nanopb */
                ".nanopb"?: (NanoPBOptions.$Properties|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a FieldOptions. */
            type $Shape = google.protobuf.FieldOptions.$Properties;

            /** CType enum. */
            enum CType {

                /** STRING value */
                STRING = 0,

                /** CORD value */
                CORD = 1,

                /** STRING_PIECE value */
                STRING_PIECE = 2
            }

            /** JSType enum. */
            enum JSType {

                /** JS_NORMAL value */
                JS_NORMAL = 0,

                /** JS_STRING value */
                JS_STRING = 1,

                /** JS_NUMBER value */
                JS_NUMBER = 2
            }

            /** OptionRetention enum. */
            enum OptionRetention {

                /** RETENTION_UNKNOWN value */
                RETENTION_UNKNOWN = 0,

                /** RETENTION_RUNTIME value */
                RETENTION_RUNTIME = 1,

                /** RETENTION_SOURCE value */
                RETENTION_SOURCE = 2
            }

            /** OptionTargetType enum. */
            enum OptionTargetType {

                /** TARGET_TYPE_UNKNOWN value */
                TARGET_TYPE_UNKNOWN = 0,

                /** TARGET_TYPE_FILE value */
                TARGET_TYPE_FILE = 1,

                /** TARGET_TYPE_EXTENSION_RANGE value */
                TARGET_TYPE_EXTENSION_RANGE = 2,

                /** TARGET_TYPE_MESSAGE value */
                TARGET_TYPE_MESSAGE = 3,

                /** TARGET_TYPE_FIELD value */
                TARGET_TYPE_FIELD = 4,

                /** TARGET_TYPE_ONEOF value */
                TARGET_TYPE_ONEOF = 5,

                /** TARGET_TYPE_ENUM value */
                TARGET_TYPE_ENUM = 6,

                /** TARGET_TYPE_ENUM_ENTRY value */
                TARGET_TYPE_ENUM_ENTRY = 7,

                /** TARGET_TYPE_SERVICE value */
                TARGET_TYPE_SERVICE = 8,

                /** TARGET_TYPE_METHOD value */
                TARGET_TYPE_METHOD = 9
            }

            /**
             * Properties of an EditionDefault.
             * @deprecated Use google.protobuf.FieldOptions.EditionDefault.$Properties instead.
             */
            interface IEditionDefault extends google.protobuf.FieldOptions.EditionDefault.$Properties {
            }

            /** Represents an EditionDefault. */
            class EditionDefault {

                /**
                 * Constructs a new EditionDefault.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.FieldOptions.EditionDefault.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** EditionDefault edition. */
                edition: google.protobuf.Edition;

                /** EditionDefault value. */
                value: string;

                /**
                 * Creates a new EditionDefault instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EditionDefault instance
                 */
                static create(properties: google.protobuf.FieldOptions.EditionDefault.$Shape): google.protobuf.FieldOptions.EditionDefault & google.protobuf.FieldOptions.EditionDefault.$Shape;
                static create(properties?: google.protobuf.FieldOptions.EditionDefault.$Properties): google.protobuf.FieldOptions.EditionDefault;

                /**
                 * Encodes the specified EditionDefault message. Does not implicitly {@link google.protobuf.FieldOptions.EditionDefault.verify|verify} messages.
                 * @param message EditionDefault message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: google.protobuf.FieldOptions.EditionDefault.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified EditionDefault message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.EditionDefault.verify|verify} messages.
                 * @param message EditionDefault message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: google.protobuf.FieldOptions.EditionDefault.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an EditionDefault message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {google.protobuf.FieldOptions.EditionDefault & google.protobuf.FieldOptions.EditionDefault.$Shape} EditionDefault
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions.EditionDefault & google.protobuf.FieldOptions.EditionDefault.$Shape;

                /**
                 * Decodes an EditionDefault message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {google.protobuf.FieldOptions.EditionDefault & google.protobuf.FieldOptions.EditionDefault.$Shape} EditionDefault
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions.EditionDefault & google.protobuf.FieldOptions.EditionDefault.$Shape;

                /**
                 * Verifies an EditionDefault message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EditionDefault message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EditionDefault
                 */
                static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions.EditionDefault;

                /**
                 * Creates a plain object from an EditionDefault message. Also converts values to other types if specified.
                 * @param message EditionDefault
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: google.protobuf.FieldOptions.EditionDefault, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EditionDefault to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for EditionDefault
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace EditionDefault {

                /** Properties of an EditionDefault. */
                interface $Properties {

                    /** EditionDefault edition */
                    edition?: (google.protobuf.Edition|null);

                    /** EditionDefault value */
                    value?: (string|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of an EditionDefault. */
                type $Shape = google.protobuf.FieldOptions.EditionDefault.$Properties;
            }

            /**
             * Properties of a FeatureSupport.
             * @deprecated Use google.protobuf.FieldOptions.FeatureSupport.$Properties instead.
             */
            interface IFeatureSupport extends google.protobuf.FieldOptions.FeatureSupport.$Properties {
            }

            /** Represents a FeatureSupport. */
            class FeatureSupport {

                /**
                 * Constructs a new FeatureSupport.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.FieldOptions.FeatureSupport.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** FeatureSupport edition_introduced. */
                edition_introduced: google.protobuf.Edition;

                /** FeatureSupport edition_deprecated. */
                edition_deprecated: google.protobuf.Edition;

                /** FeatureSupport deprecation_warning. */
                deprecation_warning: string;

                /** FeatureSupport edition_removed. */
                edition_removed: google.protobuf.Edition;

                /**
                 * Creates a new FeatureSupport instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns FeatureSupport instance
                 */
                static create(properties: google.protobuf.FieldOptions.FeatureSupport.$Shape): google.protobuf.FieldOptions.FeatureSupport & google.protobuf.FieldOptions.FeatureSupport.$Shape;
                static create(properties?: google.protobuf.FieldOptions.FeatureSupport.$Properties): google.protobuf.FieldOptions.FeatureSupport;

                /**
                 * Encodes the specified FeatureSupport message. Does not implicitly {@link google.protobuf.FieldOptions.FeatureSupport.verify|verify} messages.
                 * @param message FeatureSupport message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: google.protobuf.FieldOptions.FeatureSupport.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified FeatureSupport message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.FeatureSupport.verify|verify} messages.
                 * @param message FeatureSupport message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: google.protobuf.FieldOptions.FeatureSupport.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a FeatureSupport message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {google.protobuf.FieldOptions.FeatureSupport & google.protobuf.FieldOptions.FeatureSupport.$Shape} FeatureSupport
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions.FeatureSupport & google.protobuf.FieldOptions.FeatureSupport.$Shape;

                /**
                 * Decodes a FeatureSupport message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {google.protobuf.FieldOptions.FeatureSupport & google.protobuf.FieldOptions.FeatureSupport.$Shape} FeatureSupport
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions.FeatureSupport & google.protobuf.FieldOptions.FeatureSupport.$Shape;

                /**
                 * Verifies a FeatureSupport message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a FeatureSupport message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns FeatureSupport
                 */
                static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions.FeatureSupport;

                /**
                 * Creates a plain object from a FeatureSupport message. Also converts values to other types if specified.
                 * @param message FeatureSupport
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: google.protobuf.FieldOptions.FeatureSupport, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this FeatureSupport to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for FeatureSupport
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace FeatureSupport {

                /** Properties of a FeatureSupport. */
                interface $Properties {

                    /** FeatureSupport edition_introduced */
                    edition_introduced?: (google.protobuf.Edition|null);

                    /** FeatureSupport edition_deprecated */
                    edition_deprecated?: (google.protobuf.Edition|null);

                    /** FeatureSupport deprecation_warning */
                    deprecation_warning?: (string|null);

                    /** FeatureSupport edition_removed */
                    edition_removed?: (google.protobuf.Edition|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a FeatureSupport. */
                type $Shape = google.protobuf.FieldOptions.FeatureSupport.$Properties;
            }
        }

        /**
         * Properties of a OneofOptions.
         * @deprecated Use google.protobuf.OneofOptions.$Properties instead.
         */
        interface IOneofOptions extends google.protobuf.OneofOptions.$Properties {
        }

        /** Represents a OneofOptions. */
        class OneofOptions {

            /**
             * Constructs a new OneofOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.OneofOptions.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** OneofOptions features. */
            features?: (google.protobuf.FeatureSet.$Properties|null);

            /** OneofOptions uninterpreted_option. */
            uninterpreted_option: google.protobuf.UninterpretedOption.$Properties[];

            /**
             * Creates a new OneofOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofOptions instance
             */
            static create(properties: google.protobuf.OneofOptions.$Shape): google.protobuf.OneofOptions & google.protobuf.OneofOptions.$Shape;
            static create(properties?: google.protobuf.OneofOptions.$Properties): google.protobuf.OneofOptions;

            /**
             * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: google.protobuf.OneofOptions.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: google.protobuf.OneofOptions.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a OneofOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {google.protobuf.OneofOptions & google.protobuf.OneofOptions.$Shape} OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofOptions & google.protobuf.OneofOptions.$Shape;

            /**
             * Decodes a OneofOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {google.protobuf.OneofOptions & google.protobuf.OneofOptions.$Shape} OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofOptions & google.protobuf.OneofOptions.$Shape;

            /**
             * Verifies a OneofOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a OneofOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofOptions
             */
            static fromObject(object: { [k: string]: any }): google.protobuf.OneofOptions;

            /**
             * Creates a plain object from a OneofOptions message. Also converts values to other types if specified.
             * @param message OneofOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: google.protobuf.OneofOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofOptions to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for OneofOptions
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace OneofOptions {

            /** Properties of a OneofOptions. */
            interface $Properties {

                /** OneofOptions features */
                features?: (google.protobuf.FeatureSet.$Properties|null);

                /** OneofOptions uninterpreted_option */
                uninterpreted_option?: (google.protobuf.UninterpretedOption.$Properties[]|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a OneofOptions. */
            type $Shape = google.protobuf.OneofOptions.$Properties;
        }

        /**
         * Properties of an EnumOptions.
         * @deprecated Use google.protobuf.EnumOptions.$Properties instead.
         */
        interface IEnumOptions extends google.protobuf.EnumOptions.$Properties {
        }

        /** Represents an EnumOptions. */
        class EnumOptions {

            /**
             * Constructs a new EnumOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.EnumOptions.$Properties);

            /** EnumOptions .nanopb_enumopt */
            ".nanopb_enumopt"?: (NanoPBOptions.$Properties|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** EnumOptions allow_alias. */
            allow_alias: boolean;

            /** EnumOptions deprecated. */
            deprecated: boolean;

            /** EnumOptions deprecated_legacy_json_field_conflicts. */
            deprecated_legacy_json_field_conflicts: boolean;

            /** EnumOptions features. */
            features?: (google.protobuf.FeatureSet.$Properties|null);

            /** EnumOptions uninterpreted_option. */
            uninterpreted_option: google.protobuf.UninterpretedOption.$Properties[];

            /**
             * Creates a new EnumOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumOptions instance
             */
            static create(properties: google.protobuf.EnumOptions.$Shape): google.protobuf.EnumOptions & google.protobuf.EnumOptions.$Shape;
            static create(properties?: google.protobuf.EnumOptions.$Properties): google.protobuf.EnumOptions;

            /**
             * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: google.protobuf.EnumOptions.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: google.protobuf.EnumOptions.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {google.protobuf.EnumOptions & google.protobuf.EnumOptions.$Shape} EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumOptions & google.protobuf.EnumOptions.$Shape;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {google.protobuf.EnumOptions & google.protobuf.EnumOptions.$Shape} EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumOptions & google.protobuf.EnumOptions.$Shape;

            /**
             * Verifies an EnumOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumOptions
             */
            static fromObject(object: { [k: string]: any }): google.protobuf.EnumOptions;

            /**
             * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
             * @param message EnumOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: google.protobuf.EnumOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumOptions to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for EnumOptions
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace EnumOptions {

            /** Properties of an EnumOptions. */
            interface $Properties {

                /** EnumOptions allow_alias */
                allow_alias?: (boolean|null);

                /** EnumOptions deprecated */
                deprecated?: (boolean|null);

                /** EnumOptions deprecated_legacy_json_field_conflicts */
                deprecated_legacy_json_field_conflicts?: (boolean|null);

                /** EnumOptions features */
                features?: (google.protobuf.FeatureSet.$Properties|null);

                /** EnumOptions uninterpreted_option */
                uninterpreted_option?: (google.protobuf.UninterpretedOption.$Properties[]|null);

                /** EnumOptions .nanopb_enumopt */
                ".nanopb_enumopt"?: (NanoPBOptions.$Properties|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of an EnumOptions. */
            type $Shape = google.protobuf.EnumOptions.$Properties;
        }

        /**
         * Properties of an EnumValueOptions.
         * @deprecated Use google.protobuf.EnumValueOptions.$Properties instead.
         */
        interface IEnumValueOptions extends google.protobuf.EnumValueOptions.$Properties {
        }

        /** Represents an EnumValueOptions. */
        class EnumValueOptions {

            /**
             * Constructs a new EnumValueOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.EnumValueOptions.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** EnumValueOptions deprecated. */
            deprecated: boolean;

            /** EnumValueOptions features. */
            features?: (google.protobuf.FeatureSet.$Properties|null);

            /** EnumValueOptions debug_redact. */
            debug_redact: boolean;

            /** EnumValueOptions feature_support. */
            feature_support?: (google.protobuf.FieldOptions.FeatureSupport.$Properties|null);

            /** EnumValueOptions uninterpreted_option. */
            uninterpreted_option: google.protobuf.UninterpretedOption.$Properties[];

            /**
             * Creates a new EnumValueOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueOptions instance
             */
            static create(properties: google.protobuf.EnumValueOptions.$Shape): google.protobuf.EnumValueOptions & google.protobuf.EnumValueOptions.$Shape;
            static create(properties?: google.protobuf.EnumValueOptions.$Properties): google.protobuf.EnumValueOptions;

            /**
             * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: google.protobuf.EnumValueOptions.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: google.protobuf.EnumValueOptions.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {google.protobuf.EnumValueOptions & google.protobuf.EnumValueOptions.$Shape} EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueOptions & google.protobuf.EnumValueOptions.$Shape;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {google.protobuf.EnumValueOptions & google.protobuf.EnumValueOptions.$Shape} EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueOptions & google.protobuf.EnumValueOptions.$Shape;

            /**
             * Verifies an EnumValueOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueOptions
             */
            static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueOptions;

            /**
             * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
             * @param message EnumValueOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: google.protobuf.EnumValueOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueOptions to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for EnumValueOptions
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace EnumValueOptions {

            /** Properties of an EnumValueOptions. */
            interface $Properties {

                /** EnumValueOptions deprecated */
                deprecated?: (boolean|null);

                /** EnumValueOptions features */
                features?: (google.protobuf.FeatureSet.$Properties|null);

                /** EnumValueOptions debug_redact */
                debug_redact?: (boolean|null);

                /** EnumValueOptions feature_support */
                feature_support?: (google.protobuf.FieldOptions.FeatureSupport.$Properties|null);

                /** EnumValueOptions uninterpreted_option */
                uninterpreted_option?: (google.protobuf.UninterpretedOption.$Properties[]|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of an EnumValueOptions. */
            type $Shape = google.protobuf.EnumValueOptions.$Properties;
        }

        /**
         * Properties of a ServiceOptions.
         * @deprecated Use google.protobuf.ServiceOptions.$Properties instead.
         */
        interface IServiceOptions extends google.protobuf.ServiceOptions.$Properties {
        }

        /** Represents a ServiceOptions. */
        class ServiceOptions {

            /**
             * Constructs a new ServiceOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ServiceOptions.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** ServiceOptions features. */
            features?: (google.protobuf.FeatureSet.$Properties|null);

            /** ServiceOptions deprecated. */
            deprecated: boolean;

            /** ServiceOptions uninterpreted_option. */
            uninterpreted_option: google.protobuf.UninterpretedOption.$Properties[];

            /**
             * Creates a new ServiceOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceOptions instance
             */
            static create(properties: google.protobuf.ServiceOptions.$Shape): google.protobuf.ServiceOptions & google.protobuf.ServiceOptions.$Shape;
            static create(properties?: google.protobuf.ServiceOptions.$Properties): google.protobuf.ServiceOptions;

            /**
             * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: google.protobuf.ServiceOptions.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: google.protobuf.ServiceOptions.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {google.protobuf.ServiceOptions & google.protobuf.ServiceOptions.$Shape} ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceOptions & google.protobuf.ServiceOptions.$Shape;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {google.protobuf.ServiceOptions & google.protobuf.ServiceOptions.$Shape} ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceOptions & google.protobuf.ServiceOptions.$Shape;

            /**
             * Verifies a ServiceOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceOptions
             */
            static fromObject(object: { [k: string]: any }): google.protobuf.ServiceOptions;

            /**
             * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
             * @param message ServiceOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: google.protobuf.ServiceOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceOptions to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for ServiceOptions
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace ServiceOptions {

            /** Properties of a ServiceOptions. */
            interface $Properties {

                /** ServiceOptions features */
                features?: (google.protobuf.FeatureSet.$Properties|null);

                /** ServiceOptions deprecated */
                deprecated?: (boolean|null);

                /** ServiceOptions uninterpreted_option */
                uninterpreted_option?: (google.protobuf.UninterpretedOption.$Properties[]|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a ServiceOptions. */
            type $Shape = google.protobuf.ServiceOptions.$Properties;
        }

        /**
         * Properties of a MethodOptions.
         * @deprecated Use google.protobuf.MethodOptions.$Properties instead.
         */
        interface IMethodOptions extends google.protobuf.MethodOptions.$Properties {
        }

        /** Represents a MethodOptions. */
        class MethodOptions {

            /**
             * Constructs a new MethodOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.MethodOptions.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** MethodOptions deprecated. */
            deprecated: boolean;

            /** MethodOptions idempotency_level. */
            idempotency_level: google.protobuf.MethodOptions.IdempotencyLevel;

            /** MethodOptions features. */
            features?: (google.protobuf.FeatureSet.$Properties|null);

            /** MethodOptions uninterpreted_option. */
            uninterpreted_option: google.protobuf.UninterpretedOption.$Properties[];

            /**
             * Creates a new MethodOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodOptions instance
             */
            static create(properties: google.protobuf.MethodOptions.$Shape): google.protobuf.MethodOptions & google.protobuf.MethodOptions.$Shape;
            static create(properties?: google.protobuf.MethodOptions.$Properties): google.protobuf.MethodOptions;

            /**
             * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: google.protobuf.MethodOptions.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: google.protobuf.MethodOptions.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {google.protobuf.MethodOptions & google.protobuf.MethodOptions.$Shape} MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodOptions & google.protobuf.MethodOptions.$Shape;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {google.protobuf.MethodOptions & google.protobuf.MethodOptions.$Shape} MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodOptions & google.protobuf.MethodOptions.$Shape;

            /**
             * Verifies a MethodOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodOptions
             */
            static fromObject(object: { [k: string]: any }): google.protobuf.MethodOptions;

            /**
             * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
             * @param message MethodOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: google.protobuf.MethodOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodOptions to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for MethodOptions
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace MethodOptions {

            /** Properties of a MethodOptions. */
            interface $Properties {

                /** MethodOptions deprecated */
                deprecated?: (boolean|null);

                /** MethodOptions idempotency_level */
                idempotency_level?: (google.protobuf.MethodOptions.IdempotencyLevel|null);

                /** MethodOptions features */
                features?: (google.protobuf.FeatureSet.$Properties|null);

                /** MethodOptions uninterpreted_option */
                uninterpreted_option?: (google.protobuf.UninterpretedOption.$Properties[]|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a MethodOptions. */
            type $Shape = google.protobuf.MethodOptions.$Properties;

            /** IdempotencyLevel enum. */
            enum IdempotencyLevel {

                /** IDEMPOTENCY_UNKNOWN value */
                IDEMPOTENCY_UNKNOWN = 0,

                /** NO_SIDE_EFFECTS value */
                NO_SIDE_EFFECTS = 1,

                /** IDEMPOTENT value */
                IDEMPOTENT = 2
            }
        }

        /**
         * Properties of an UninterpretedOption.
         * @deprecated Use google.protobuf.UninterpretedOption.$Properties instead.
         */
        interface IUninterpretedOption extends google.protobuf.UninterpretedOption.$Properties {
        }

        /** Represents an UninterpretedOption. */
        class UninterpretedOption {

            /**
             * Constructs a new UninterpretedOption.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.UninterpretedOption.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** UninterpretedOption name. */
            name: google.protobuf.UninterpretedOption.NamePart.$Properties[];

            /** UninterpretedOption identifier_value. */
            identifier_value: string;

            /** UninterpretedOption positive_int_value. */
            positive_int_value: (number|Long);

            /** UninterpretedOption negative_int_value. */
            negative_int_value: (number|Long);

            /** UninterpretedOption double_value. */
            double_value: number;

            /** UninterpretedOption string_value. */
            string_value: Uint8Array;

            /** UninterpretedOption aggregate_value. */
            aggregate_value: string;

            /**
             * Creates a new UninterpretedOption instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UninterpretedOption instance
             */
            static create(properties: google.protobuf.UninterpretedOption.$Shape): google.protobuf.UninterpretedOption & google.protobuf.UninterpretedOption.$Shape;
            static create(properties?: google.protobuf.UninterpretedOption.$Properties): google.protobuf.UninterpretedOption;

            /**
             * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: google.protobuf.UninterpretedOption.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: google.protobuf.UninterpretedOption.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {google.protobuf.UninterpretedOption & google.protobuf.UninterpretedOption.$Shape} UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption & google.protobuf.UninterpretedOption.$Shape;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {google.protobuf.UninterpretedOption & google.protobuf.UninterpretedOption.$Shape} UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption & google.protobuf.UninterpretedOption.$Shape;

            /**
             * Verifies an UninterpretedOption message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UninterpretedOption
             */
            static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption;

            /**
             * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
             * @param message UninterpretedOption
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: google.protobuf.UninterpretedOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UninterpretedOption to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for UninterpretedOption
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace UninterpretedOption {

            /** Properties of an UninterpretedOption. */
            interface $Properties {

                /** UninterpretedOption name */
                name?: (google.protobuf.UninterpretedOption.NamePart.$Properties[]|null);

                /** UninterpretedOption identifier_value */
                identifier_value?: (string|null);

                /** UninterpretedOption positive_int_value */
                positive_int_value?: (number|Long|null);

                /** UninterpretedOption negative_int_value */
                negative_int_value?: (number|Long|null);

                /** UninterpretedOption double_value */
                double_value?: (number|null);

                /** UninterpretedOption string_value */
                string_value?: (Uint8Array|null);

                /** UninterpretedOption aggregate_value */
                aggregate_value?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of an UninterpretedOption. */
            type $Shape = google.protobuf.UninterpretedOption.$Properties;

            /**
             * Properties of a NamePart.
             * @deprecated Use google.protobuf.UninterpretedOption.NamePart.$Properties instead.
             */
            interface INamePart extends google.protobuf.UninterpretedOption.NamePart.$Properties {
            }

            /** Represents a NamePart. */
            class NamePart {

                /**
                 * Constructs a new NamePart.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.UninterpretedOption.NamePart.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** NamePart name_part. */
                name_part: string;

                /** NamePart is_extension. */
                is_extension: boolean;

                /**
                 * Creates a new NamePart instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NamePart instance
                 */
                static create(properties: google.protobuf.UninterpretedOption.NamePart.$Shape): google.protobuf.UninterpretedOption.NamePart & google.protobuf.UninterpretedOption.NamePart.$Shape;
                static create(properties?: google.protobuf.UninterpretedOption.NamePart.$Properties): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: google.protobuf.UninterpretedOption.NamePart.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: google.protobuf.UninterpretedOption.NamePart.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NamePart message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {google.protobuf.UninterpretedOption.NamePart & google.protobuf.UninterpretedOption.NamePart.$Shape} NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption.NamePart & google.protobuf.UninterpretedOption.NamePart.$Shape;

                /**
                 * Decodes a NamePart message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {google.protobuf.UninterpretedOption.NamePart & google.protobuf.UninterpretedOption.NamePart.$Shape} NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption.NamePart & google.protobuf.UninterpretedOption.NamePart.$Shape;

                /**
                 * Verifies a NamePart message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NamePart
                 */
                static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                 * @param message NamePart
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: google.protobuf.UninterpretedOption.NamePart, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NamePart to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for NamePart
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace NamePart {

                /** Properties of a NamePart. */
                interface $Properties {

                    /** NamePart name_part */
                    name_part: string;

                    /** NamePart is_extension */
                    is_extension: boolean;

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a NamePart. */
                type $Shape = google.protobuf.UninterpretedOption.NamePart.$Properties;
            }
        }

        /**
         * Properties of a FeatureSet.
         * @deprecated Use google.protobuf.FeatureSet.$Properties instead.
         */
        interface IFeatureSet extends google.protobuf.FeatureSet.$Properties {
        }

        /** Represents a FeatureSet. */
        class FeatureSet {

            /**
             * Constructs a new FeatureSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.FeatureSet.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** FeatureSet field_presence. */
            field_presence: google.protobuf.FeatureSet.FieldPresence;

            /** FeatureSet enum_type. */
            enum_type: google.protobuf.FeatureSet.EnumType;

            /** FeatureSet repeated_field_encoding. */
            repeated_field_encoding: google.protobuf.FeatureSet.RepeatedFieldEncoding;

            /** FeatureSet utf8_validation. */
            utf8_validation: google.protobuf.FeatureSet.Utf8Validation;

            /** FeatureSet message_encoding. */
            message_encoding: google.protobuf.FeatureSet.MessageEncoding;

            /** FeatureSet json_format. */
            json_format: google.protobuf.FeatureSet.JsonFormat;

            /**
             * Creates a new FeatureSet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FeatureSet instance
             */
            static create(properties: google.protobuf.FeatureSet.$Shape): google.protobuf.FeatureSet & google.protobuf.FeatureSet.$Shape;
            static create(properties?: google.protobuf.FeatureSet.$Properties): google.protobuf.FeatureSet;

            /**
             * Encodes the specified FeatureSet message. Does not implicitly {@link google.protobuf.FeatureSet.verify|verify} messages.
             * @param message FeatureSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: google.protobuf.FeatureSet.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FeatureSet message, length delimited. Does not implicitly {@link google.protobuf.FeatureSet.verify|verify} messages.
             * @param message FeatureSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: google.protobuf.FeatureSet.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FeatureSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {google.protobuf.FeatureSet & google.protobuf.FeatureSet.$Shape} FeatureSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FeatureSet & google.protobuf.FeatureSet.$Shape;

            /**
             * Decodes a FeatureSet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {google.protobuf.FeatureSet & google.protobuf.FeatureSet.$Shape} FeatureSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FeatureSet & google.protobuf.FeatureSet.$Shape;

            /**
             * Verifies a FeatureSet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FeatureSet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FeatureSet
             */
            static fromObject(object: { [k: string]: any }): google.protobuf.FeatureSet;

            /**
             * Creates a plain object from a FeatureSet message. Also converts values to other types if specified.
             * @param message FeatureSet
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: google.protobuf.FeatureSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FeatureSet to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for FeatureSet
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace FeatureSet {

            /** Properties of a FeatureSet. */
            interface $Properties {

                /** FeatureSet field_presence */
                field_presence?: (google.protobuf.FeatureSet.FieldPresence|null);

                /** FeatureSet enum_type */
                enum_type?: (google.protobuf.FeatureSet.EnumType|null);

                /** FeatureSet repeated_field_encoding */
                repeated_field_encoding?: (google.protobuf.FeatureSet.RepeatedFieldEncoding|null);

                /** FeatureSet utf8_validation */
                utf8_validation?: (google.protobuf.FeatureSet.Utf8Validation|null);

                /** FeatureSet message_encoding */
                message_encoding?: (google.protobuf.FeatureSet.MessageEncoding|null);

                /** FeatureSet json_format */
                json_format?: (google.protobuf.FeatureSet.JsonFormat|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a FeatureSet. */
            type $Shape = google.protobuf.FeatureSet.$Properties;

            /** FieldPresence enum. */
            enum FieldPresence {

                /** FIELD_PRESENCE_UNKNOWN value */
                FIELD_PRESENCE_UNKNOWN = 0,

                /** EXPLICIT value */
                EXPLICIT = 1,

                /** IMPLICIT value */
                IMPLICIT = 2,

                /** LEGACY_REQUIRED value */
                LEGACY_REQUIRED = 3
            }

            /** EnumType enum. */
            enum EnumType {

                /** ENUM_TYPE_UNKNOWN value */
                ENUM_TYPE_UNKNOWN = 0,

                /** OPEN value */
                OPEN = 1,

                /** CLOSED value */
                CLOSED = 2
            }

            /** RepeatedFieldEncoding enum. */
            enum RepeatedFieldEncoding {

                /** REPEATED_FIELD_ENCODING_UNKNOWN value */
                REPEATED_FIELD_ENCODING_UNKNOWN = 0,

                /** PACKED value */
                PACKED = 1,

                /** EXPANDED value */
                EXPANDED = 2
            }

            /** Utf8Validation enum. */
            enum Utf8Validation {

                /** UTF8_VALIDATION_UNKNOWN value */
                UTF8_VALIDATION_UNKNOWN = 0,

                /** VERIFY value */
                VERIFY = 2,

                /** NONE value */
                NONE = 3
            }

            /** MessageEncoding enum. */
            enum MessageEncoding {

                /** MESSAGE_ENCODING_UNKNOWN value */
                MESSAGE_ENCODING_UNKNOWN = 0,

                /** LENGTH_PREFIXED value */
                LENGTH_PREFIXED = 1,

                /** DELIMITED value */
                DELIMITED = 2
            }

            /** JsonFormat enum. */
            enum JsonFormat {

                /** JSON_FORMAT_UNKNOWN value */
                JSON_FORMAT_UNKNOWN = 0,

                /** ALLOW value */
                ALLOW = 1,

                /** LEGACY_BEST_EFFORT value */
                LEGACY_BEST_EFFORT = 2
            }
        }

        /**
         * Properties of a FeatureSetDefaults.
         * @deprecated Use google.protobuf.FeatureSetDefaults.$Properties instead.
         */
        interface IFeatureSetDefaults extends google.protobuf.FeatureSetDefaults.$Properties {
        }

        /** Represents a FeatureSetDefaults. */
        class FeatureSetDefaults {

            /**
             * Constructs a new FeatureSetDefaults.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.FeatureSetDefaults.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** FeatureSetDefaults defaults. */
            defaults: google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.$Properties[];

            /** FeatureSetDefaults minimum_edition. */
            minimum_edition: google.protobuf.Edition;

            /** FeatureSetDefaults maximum_edition. */
            maximum_edition: google.protobuf.Edition;

            /**
             * Creates a new FeatureSetDefaults instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FeatureSetDefaults instance
             */
            static create(properties: google.protobuf.FeatureSetDefaults.$Shape): google.protobuf.FeatureSetDefaults & google.protobuf.FeatureSetDefaults.$Shape;
            static create(properties?: google.protobuf.FeatureSetDefaults.$Properties): google.protobuf.FeatureSetDefaults;

            /**
             * Encodes the specified FeatureSetDefaults message. Does not implicitly {@link google.protobuf.FeatureSetDefaults.verify|verify} messages.
             * @param message FeatureSetDefaults message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: google.protobuf.FeatureSetDefaults.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FeatureSetDefaults message, length delimited. Does not implicitly {@link google.protobuf.FeatureSetDefaults.verify|verify} messages.
             * @param message FeatureSetDefaults message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: google.protobuf.FeatureSetDefaults.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FeatureSetDefaults message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {google.protobuf.FeatureSetDefaults & google.protobuf.FeatureSetDefaults.$Shape} FeatureSetDefaults
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FeatureSetDefaults & google.protobuf.FeatureSetDefaults.$Shape;

            /**
             * Decodes a FeatureSetDefaults message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {google.protobuf.FeatureSetDefaults & google.protobuf.FeatureSetDefaults.$Shape} FeatureSetDefaults
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FeatureSetDefaults & google.protobuf.FeatureSetDefaults.$Shape;

            /**
             * Verifies a FeatureSetDefaults message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FeatureSetDefaults message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FeatureSetDefaults
             */
            static fromObject(object: { [k: string]: any }): google.protobuf.FeatureSetDefaults;

            /**
             * Creates a plain object from a FeatureSetDefaults message. Also converts values to other types if specified.
             * @param message FeatureSetDefaults
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: google.protobuf.FeatureSetDefaults, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FeatureSetDefaults to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for FeatureSetDefaults
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace FeatureSetDefaults {

            /** Properties of a FeatureSetDefaults. */
            interface $Properties {

                /** FeatureSetDefaults defaults */
                defaults?: (google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.$Properties[]|null);

                /** FeatureSetDefaults minimum_edition */
                minimum_edition?: (google.protobuf.Edition|null);

                /** FeatureSetDefaults maximum_edition */
                maximum_edition?: (google.protobuf.Edition|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a FeatureSetDefaults. */
            type $Shape = google.protobuf.FeatureSetDefaults.$Properties;

            /**
             * Properties of a FeatureSetEditionDefault.
             * @deprecated Use google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.$Properties instead.
             */
            interface IFeatureSetEditionDefault extends google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.$Properties {
            }

            /** Represents a FeatureSetEditionDefault. */
            class FeatureSetEditionDefault {

                /**
                 * Constructs a new FeatureSetEditionDefault.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** FeatureSetEditionDefault edition. */
                edition: google.protobuf.Edition;

                /** FeatureSetEditionDefault overridable_features. */
                overridable_features?: (google.protobuf.FeatureSet.$Properties|null);

                /** FeatureSetEditionDefault fixed_features. */
                fixed_features?: (google.protobuf.FeatureSet.$Properties|null);

                /**
                 * Creates a new FeatureSetEditionDefault instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns FeatureSetEditionDefault instance
                 */
                static create(properties: google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.$Shape): google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault & google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.$Shape;
                static create(properties?: google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.$Properties): google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault;

                /**
                 * Encodes the specified FeatureSetEditionDefault message. Does not implicitly {@link google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.verify|verify} messages.
                 * @param message FeatureSetEditionDefault message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified FeatureSetEditionDefault message, length delimited. Does not implicitly {@link google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.verify|verify} messages.
                 * @param message FeatureSetEditionDefault message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a FeatureSetEditionDefault message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault & google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.$Shape} FeatureSetEditionDefault
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault & google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.$Shape;

                /**
                 * Decodes a FeatureSetEditionDefault message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault & google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.$Shape} FeatureSetEditionDefault
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault & google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.$Shape;

                /**
                 * Verifies a FeatureSetEditionDefault message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a FeatureSetEditionDefault message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns FeatureSetEditionDefault
                 */
                static fromObject(object: { [k: string]: any }): google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault;

                /**
                 * Creates a plain object from a FeatureSetEditionDefault message. Also converts values to other types if specified.
                 * @param message FeatureSetEditionDefault
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this FeatureSetEditionDefault to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for FeatureSetEditionDefault
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace FeatureSetEditionDefault {

                /** Properties of a FeatureSetEditionDefault. */
                interface $Properties {

                    /** FeatureSetEditionDefault edition */
                    edition?: (google.protobuf.Edition|null);

                    /** FeatureSetEditionDefault overridable_features */
                    overridable_features?: (google.protobuf.FeatureSet.$Properties|null);

                    /** FeatureSetEditionDefault fixed_features */
                    fixed_features?: (google.protobuf.FeatureSet.$Properties|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a FeatureSetEditionDefault. */
                type $Shape = google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.$Properties;
            }
        }

        /**
         * Properties of a SourceCodeInfo.
         * @deprecated Use google.protobuf.SourceCodeInfo.$Properties instead.
         */
        interface ISourceCodeInfo extends google.protobuf.SourceCodeInfo.$Properties {
        }

        /** Represents a SourceCodeInfo. */
        class SourceCodeInfo {

            /**
             * Constructs a new SourceCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.SourceCodeInfo.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** SourceCodeInfo location. */
            location: google.protobuf.SourceCodeInfo.Location.$Properties[];

            /**
             * Creates a new SourceCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SourceCodeInfo instance
             */
            static create(properties: google.protobuf.SourceCodeInfo.$Shape): google.protobuf.SourceCodeInfo & google.protobuf.SourceCodeInfo.$Shape;
            static create(properties?: google.protobuf.SourceCodeInfo.$Properties): google.protobuf.SourceCodeInfo;

            /**
             * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: google.protobuf.SourceCodeInfo.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: google.protobuf.SourceCodeInfo.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {google.protobuf.SourceCodeInfo & google.protobuf.SourceCodeInfo.$Shape} SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo & google.protobuf.SourceCodeInfo.$Shape;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {google.protobuf.SourceCodeInfo & google.protobuf.SourceCodeInfo.$Shape} SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo & google.protobuf.SourceCodeInfo.$Shape;

            /**
             * Verifies a SourceCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SourceCodeInfo
             */
            static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo;

            /**
             * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
             * @param message SourceCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: google.protobuf.SourceCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SourceCodeInfo to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for SourceCodeInfo
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace SourceCodeInfo {

            /** Properties of a SourceCodeInfo. */
            interface $Properties {

                /** SourceCodeInfo location */
                location?: (google.protobuf.SourceCodeInfo.Location.$Properties[]|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a SourceCodeInfo. */
            type $Shape = google.protobuf.SourceCodeInfo.$Properties;

            /**
             * Properties of a Location.
             * @deprecated Use google.protobuf.SourceCodeInfo.Location.$Properties instead.
             */
            interface ILocation extends google.protobuf.SourceCodeInfo.Location.$Properties {
            }

            /** Represents a Location. */
            class Location {

                /**
                 * Constructs a new Location.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.SourceCodeInfo.Location.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** Location path. */
                path: number[];

                /** Location span. */
                span: number[];

                /** Location leading_comments. */
                leading_comments: string;

                /** Location trailing_comments. */
                trailing_comments: string;

                /** Location leading_detached_comments. */
                leading_detached_comments: string[];

                /**
                 * Creates a new Location instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Location instance
                 */
                static create(properties: google.protobuf.SourceCodeInfo.Location.$Shape): google.protobuf.SourceCodeInfo.Location & google.protobuf.SourceCodeInfo.Location.$Shape;
                static create(properties?: google.protobuf.SourceCodeInfo.Location.$Properties): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: google.protobuf.SourceCodeInfo.Location.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: google.protobuf.SourceCodeInfo.Location.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {google.protobuf.SourceCodeInfo.Location & google.protobuf.SourceCodeInfo.Location.$Shape} Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo.Location & google.protobuf.SourceCodeInfo.Location.$Shape;

                /**
                 * Decodes a Location message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {google.protobuf.SourceCodeInfo.Location & google.protobuf.SourceCodeInfo.Location.$Shape} Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo.Location & google.protobuf.SourceCodeInfo.Location.$Shape;

                /**
                 * Verifies a Location message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Location message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Location
                 */
                static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Creates a plain object from a Location message. Also converts values to other types if specified.
                 * @param message Location
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: google.protobuf.SourceCodeInfo.Location, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Location to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for Location
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace Location {

                /** Properties of a Location. */
                interface $Properties {

                    /** Location path */
                    path?: (number[]|null);

                    /** Location span */
                    span?: (number[]|null);

                    /** Location leading_comments */
                    leading_comments?: (string|null);

                    /** Location trailing_comments */
                    trailing_comments?: (string|null);

                    /** Location leading_detached_comments */
                    leading_detached_comments?: (string[]|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a Location. */
                type $Shape = google.protobuf.SourceCodeInfo.Location.$Properties;
            }
        }

        /**
         * Properties of a GeneratedCodeInfo.
         * @deprecated Use google.protobuf.GeneratedCodeInfo.$Properties instead.
         */
        interface IGeneratedCodeInfo extends google.protobuf.GeneratedCodeInfo.$Properties {
        }

        /** Represents a GeneratedCodeInfo. */
        class GeneratedCodeInfo {

            /**
             * Constructs a new GeneratedCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.GeneratedCodeInfo.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** GeneratedCodeInfo annotation. */
            annotation: google.protobuf.GeneratedCodeInfo.Annotation.$Properties[];

            /**
             * Creates a new GeneratedCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GeneratedCodeInfo instance
             */
            static create(properties: google.protobuf.GeneratedCodeInfo.$Shape): google.protobuf.GeneratedCodeInfo & google.protobuf.GeneratedCodeInfo.$Shape;
            static create(properties?: google.protobuf.GeneratedCodeInfo.$Properties): google.protobuf.GeneratedCodeInfo;

            /**
             * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: google.protobuf.GeneratedCodeInfo.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: google.protobuf.GeneratedCodeInfo.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {google.protobuf.GeneratedCodeInfo & google.protobuf.GeneratedCodeInfo.$Shape} GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo & google.protobuf.GeneratedCodeInfo.$Shape;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {google.protobuf.GeneratedCodeInfo & google.protobuf.GeneratedCodeInfo.$Shape} GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo & google.protobuf.GeneratedCodeInfo.$Shape;

            /**
             * Verifies a GeneratedCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GeneratedCodeInfo
             */
            static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo;

            /**
             * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
             * @param message GeneratedCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: google.protobuf.GeneratedCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GeneratedCodeInfo to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for GeneratedCodeInfo
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace GeneratedCodeInfo {

            /** Properties of a GeneratedCodeInfo. */
            interface $Properties {

                /** GeneratedCodeInfo annotation */
                annotation?: (google.protobuf.GeneratedCodeInfo.Annotation.$Properties[]|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a GeneratedCodeInfo. */
            type $Shape = google.protobuf.GeneratedCodeInfo.$Properties;

            /**
             * Properties of an Annotation.
             * @deprecated Use google.protobuf.GeneratedCodeInfo.Annotation.$Properties instead.
             */
            interface IAnnotation extends google.protobuf.GeneratedCodeInfo.Annotation.$Properties {
            }

            /** Represents an Annotation. */
            class Annotation {

                /**
                 * Constructs a new Annotation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.GeneratedCodeInfo.Annotation.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** Annotation path. */
                path: number[];

                /** Annotation source_file. */
                source_file: string;

                /** Annotation begin. */
                begin: number;

                /** Annotation end. */
                end: number;

                /** Annotation semantic. */
                semantic: google.protobuf.GeneratedCodeInfo.Annotation.Semantic;

                /**
                 * Creates a new Annotation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Annotation instance
                 */
                static create(properties: google.protobuf.GeneratedCodeInfo.Annotation.$Shape): google.protobuf.GeneratedCodeInfo.Annotation & google.protobuf.GeneratedCodeInfo.Annotation.$Shape;
                static create(properties?: google.protobuf.GeneratedCodeInfo.Annotation.$Properties): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: google.protobuf.GeneratedCodeInfo.Annotation.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: google.protobuf.GeneratedCodeInfo.Annotation.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Annotation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {google.protobuf.GeneratedCodeInfo.Annotation & google.protobuf.GeneratedCodeInfo.Annotation.$Shape} Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo.Annotation & google.protobuf.GeneratedCodeInfo.Annotation.$Shape;

                /**
                 * Decodes an Annotation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {google.protobuf.GeneratedCodeInfo.Annotation & google.protobuf.GeneratedCodeInfo.Annotation.$Shape} Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo.Annotation & google.protobuf.GeneratedCodeInfo.Annotation.$Shape;

                /**
                 * Verifies an Annotation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Annotation
                 */
                static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                 * @param message Annotation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: google.protobuf.GeneratedCodeInfo.Annotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Annotation to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for Annotation
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace Annotation {

                /** Properties of an Annotation. */
                interface $Properties {

                    /** Annotation path */
                    path?: (number[]|null);

                    /** Annotation source_file */
                    source_file?: (string|null);

                    /** Annotation begin */
                    begin?: (number|null);

                    /** Annotation end */
                    end?: (number|null);

                    /** Annotation semantic */
                    semantic?: (google.protobuf.GeneratedCodeInfo.Annotation.Semantic|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of an Annotation. */
                type $Shape = google.protobuf.GeneratedCodeInfo.Annotation.$Properties;

                /** Semantic enum. */
                enum Semantic {

                    /** NONE value */
                    NONE = 0,

                    /** SET value */
                    SET = 1,

                    /** ALIAS value */
                    ALIAS = 2
                }
            }
        }
    }
}
