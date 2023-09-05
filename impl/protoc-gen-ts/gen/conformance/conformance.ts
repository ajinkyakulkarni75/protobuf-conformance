/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 0.0.0
 * source: conformance/conformance.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export namespace conformance {
    export enum WireFormat {
        UNSPECIFIED = 0,
        PROTOBUF = 1,
        JSON = 2,
        JSPB = 3,
        TEXT_FORMAT = 4
    }
    export enum TestCategory {
        UNSPECIFIED_TEST = 0,
        BINARY_TEST = 1,
        JSON_TEST = 2,
        JSON_IGNORE_UNKNOWN_PARSING_TEST = 3,
        JSPB_TEST = 4,
        TEXT_FORMAT_TEST = 5
    }
    export class FailureSet extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            failure?: string[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("failure" in data && data.failure != undefined) {
                    this.failure = data.failure;
                }
            }
        }
        get failure() {
            return pb_1.Message.getFieldWithDefault(this, 1, []) as string[];
        }
        set failure(value: string[]) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            failure?: string[];
        }): FailureSet {
            const message = new FailureSet({});
            if (data.failure != null) {
                message.failure = data.failure;
            }
            return message;
        }
        toObject() {
            const data: {
                failure?: string[];
            } = {};
            if (this.failure != null) {
                data.failure = this.failure;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.failure.length)
                writer.writeRepeatedString(1, this.failure);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): FailureSet {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new FailureSet();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        pb_1.Message.addToRepeatedField(message, 1, reader.readString());
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): FailureSet {
            return FailureSet.deserialize(bytes);
        }
    }
    export class ConformanceRequest extends pb_1.Message {
        #one_of_decls: number[][] = [[1, 2, 7, 8]];
        constructor(data?: any[] | ({
            requested_output_format?: WireFormat;
            message_type?: string;
            test_category?: TestCategory;
            jspb_encoding_options?: JspbEncodingConfig;
            print_unknown_fields?: boolean;
        } & (({
            protobuf_payload?: Uint8Array;
            json_payload?: never;
            jspb_payload?: never;
            text_payload?: never;
        } | {
            protobuf_payload?: never;
            json_payload?: string;
            jspb_payload?: never;
            text_payload?: never;
        } | {
            protobuf_payload?: never;
            json_payload?: never;
            jspb_payload?: string;
            text_payload?: never;
        } | {
            protobuf_payload?: never;
            json_payload?: never;
            jspb_payload?: never;
            text_payload?: string;
        })))) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("protobuf_payload" in data && data.protobuf_payload != undefined) {
                    this.protobuf_payload = data.protobuf_payload;
                }
                if ("json_payload" in data && data.json_payload != undefined) {
                    this.json_payload = data.json_payload;
                }
                if ("jspb_payload" in data && data.jspb_payload != undefined) {
                    this.jspb_payload = data.jspb_payload;
                }
                if ("text_payload" in data && data.text_payload != undefined) {
                    this.text_payload = data.text_payload;
                }
                if ("requested_output_format" in data && data.requested_output_format != undefined) {
                    this.requested_output_format = data.requested_output_format;
                }
                if ("message_type" in data && data.message_type != undefined) {
                    this.message_type = data.message_type;
                }
                if ("test_category" in data && data.test_category != undefined) {
                    this.test_category = data.test_category;
                }
                if ("jspb_encoding_options" in data && data.jspb_encoding_options != undefined) {
                    this.jspb_encoding_options = data.jspb_encoding_options;
                }
                if ("print_unknown_fields" in data && data.print_unknown_fields != undefined) {
                    this.print_unknown_fields = data.print_unknown_fields;
                }
            }
        }
        get protobuf_payload() {
            return pb_1.Message.getFieldWithDefault(this, 1, new Uint8Array(0)) as Uint8Array;
        }
        set protobuf_payload(value: Uint8Array) {
            pb_1.Message.setOneofField(this, 1, this.#one_of_decls[0], value);
        }
        get has_protobuf_payload() {
            return pb_1.Message.getField(this, 1) != null;
        }
        get json_payload() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set json_payload(value: string) {
            pb_1.Message.setOneofField(this, 2, this.#one_of_decls[0], value);
        }
        get has_json_payload() {
            return pb_1.Message.getField(this, 2) != null;
        }
        get jspb_payload() {
            return pb_1.Message.getFieldWithDefault(this, 7, "") as string;
        }
        set jspb_payload(value: string) {
            pb_1.Message.setOneofField(this, 7, this.#one_of_decls[0], value);
        }
        get has_jspb_payload() {
            return pb_1.Message.getField(this, 7) != null;
        }
        get text_payload() {
            return pb_1.Message.getFieldWithDefault(this, 8, "") as string;
        }
        set text_payload(value: string) {
            pb_1.Message.setOneofField(this, 8, this.#one_of_decls[0], value);
        }
        get has_text_payload() {
            return pb_1.Message.getField(this, 8) != null;
        }
        get requested_output_format() {
            return pb_1.Message.getFieldWithDefault(this, 3, WireFormat.UNSPECIFIED) as WireFormat;
        }
        set requested_output_format(value: WireFormat) {
            pb_1.Message.setField(this, 3, value);
        }
        get message_type() {
            return pb_1.Message.getFieldWithDefault(this, 4, "") as string;
        }
        set message_type(value: string) {
            pb_1.Message.setField(this, 4, value);
        }
        get test_category() {
            return pb_1.Message.getFieldWithDefault(this, 5, TestCategory.UNSPECIFIED_TEST) as TestCategory;
        }
        set test_category(value: TestCategory) {
            pb_1.Message.setField(this, 5, value);
        }
        get jspb_encoding_options() {
            return pb_1.Message.getWrapperField(this, JspbEncodingConfig, 6) as JspbEncodingConfig;
        }
        set jspb_encoding_options(value: JspbEncodingConfig) {
            pb_1.Message.setWrapperField(this, 6, value);
        }
        get has_jspb_encoding_options() {
            return pb_1.Message.getField(this, 6) != null;
        }
        get print_unknown_fields() {
            return pb_1.Message.getFieldWithDefault(this, 9, false) as boolean;
        }
        set print_unknown_fields(value: boolean) {
            pb_1.Message.setField(this, 9, value);
        }
        get payload() {
            const cases: {
                [index: number]: "none" | "protobuf_payload" | "json_payload" | "jspb_payload" | "text_payload";
            } = {
                0: "none",
                1: "protobuf_payload",
                2: "json_payload",
                7: "jspb_payload",
                8: "text_payload"
            };
            return cases[pb_1.Message.computeOneofCase(this, [1, 2, 7, 8])];
        }
        static fromObject(data: {
            protobuf_payload?: Uint8Array;
            json_payload?: string;
            jspb_payload?: string;
            text_payload?: string;
            requested_output_format?: WireFormat;
            message_type?: string;
            test_category?: TestCategory;
            jspb_encoding_options?: ReturnType<typeof JspbEncodingConfig.prototype.toObject>;
            print_unknown_fields?: boolean;
        }): ConformanceRequest {
            const message = new ConformanceRequest({});
            if (data.protobuf_payload != null) {
                message.protobuf_payload = data.protobuf_payload;
            }
            if (data.json_payload != null) {
                message.json_payload = data.json_payload;
            }
            if (data.jspb_payload != null) {
                message.jspb_payload = data.jspb_payload;
            }
            if (data.text_payload != null) {
                message.text_payload = data.text_payload;
            }
            if (data.requested_output_format != null) {
                message.requested_output_format = data.requested_output_format;
            }
            if (data.message_type != null) {
                message.message_type = data.message_type;
            }
            if (data.test_category != null) {
                message.test_category = data.test_category;
            }
            if (data.jspb_encoding_options != null) {
                message.jspb_encoding_options = JspbEncodingConfig.fromObject(data.jspb_encoding_options);
            }
            if (data.print_unknown_fields != null) {
                message.print_unknown_fields = data.print_unknown_fields;
            }
            return message;
        }
        toObject() {
            const data: {
                protobuf_payload?: Uint8Array;
                json_payload?: string;
                jspb_payload?: string;
                text_payload?: string;
                requested_output_format?: WireFormat;
                message_type?: string;
                test_category?: TestCategory;
                jspb_encoding_options?: ReturnType<typeof JspbEncodingConfig.prototype.toObject>;
                print_unknown_fields?: boolean;
            } = {};
            if (this.protobuf_payload != null) {
                data.protobuf_payload = this.protobuf_payload;
            }
            if (this.json_payload != null) {
                data.json_payload = this.json_payload;
            }
            if (this.jspb_payload != null) {
                data.jspb_payload = this.jspb_payload;
            }
            if (this.text_payload != null) {
                data.text_payload = this.text_payload;
            }
            if (this.requested_output_format != null) {
                data.requested_output_format = this.requested_output_format;
            }
            if (this.message_type != null) {
                data.message_type = this.message_type;
            }
            if (this.test_category != null) {
                data.test_category = this.test_category;
            }
            if (this.jspb_encoding_options != null) {
                data.jspb_encoding_options = this.jspb_encoding_options.toObject();
            }
            if (this.print_unknown_fields != null) {
                data.print_unknown_fields = this.print_unknown_fields;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_protobuf_payload)
                writer.writeBytes(1, this.protobuf_payload);
            if (this.has_json_payload)
                writer.writeString(2, this.json_payload);
            if (this.has_jspb_payload)
                writer.writeString(7, this.jspb_payload);
            if (this.has_text_payload)
                writer.writeString(8, this.text_payload);
            if (this.requested_output_format != WireFormat.UNSPECIFIED)
                writer.writeEnum(3, this.requested_output_format);
            if (this.message_type.length)
                writer.writeString(4, this.message_type);
            if (this.test_category != TestCategory.UNSPECIFIED_TEST)
                writer.writeEnum(5, this.test_category);
            if (this.has_jspb_encoding_options)
                writer.writeMessage(6, this.jspb_encoding_options, () => this.jspb_encoding_options.serialize(writer));
            if (this.print_unknown_fields != false)
                writer.writeBool(9, this.print_unknown_fields);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ConformanceRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ConformanceRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.protobuf_payload = reader.readBytes();
                        break;
                    case 2:
                        message.json_payload = reader.readString();
                        break;
                    case 7:
                        message.jspb_payload = reader.readString();
                        break;
                    case 8:
                        message.text_payload = reader.readString();
                        break;
                    case 3:
                        message.requested_output_format = reader.readEnum();
                        break;
                    case 4:
                        message.message_type = reader.readString();
                        break;
                    case 5:
                        message.test_category = reader.readEnum();
                        break;
                    case 6:
                        reader.readMessage(message.jspb_encoding_options, () => message.jspb_encoding_options = JspbEncodingConfig.deserialize(reader));
                        break;
                    case 9:
                        message.print_unknown_fields = reader.readBool();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): ConformanceRequest {
            return ConformanceRequest.deserialize(bytes);
        }
    }
    export class ConformanceResponse extends pb_1.Message {
        #one_of_decls: number[][] = [[1, 6, 9, 2, 3, 4, 5, 7, 8]];
        constructor(data?: any[] | ({} & (({
            parse_error?: string;
            serialize_error?: never;
            timeout_error?: never;
            runtime_error?: never;
            protobuf_payload?: never;
            json_payload?: never;
            skipped?: never;
            jspb_payload?: never;
            text_payload?: never;
        } | {
            parse_error?: never;
            serialize_error?: string;
            timeout_error?: never;
            runtime_error?: never;
            protobuf_payload?: never;
            json_payload?: never;
            skipped?: never;
            jspb_payload?: never;
            text_payload?: never;
        } | {
            parse_error?: never;
            serialize_error?: never;
            timeout_error?: string;
            runtime_error?: never;
            protobuf_payload?: never;
            json_payload?: never;
            skipped?: never;
            jspb_payload?: never;
            text_payload?: never;
        } | {
            parse_error?: never;
            serialize_error?: never;
            timeout_error?: never;
            runtime_error?: string;
            protobuf_payload?: never;
            json_payload?: never;
            skipped?: never;
            jspb_payload?: never;
            text_payload?: never;
        } | {
            parse_error?: never;
            serialize_error?: never;
            timeout_error?: never;
            runtime_error?: never;
            protobuf_payload?: Uint8Array;
            json_payload?: never;
            skipped?: never;
            jspb_payload?: never;
            text_payload?: never;
        } | {
            parse_error?: never;
            serialize_error?: never;
            timeout_error?: never;
            runtime_error?: never;
            protobuf_payload?: never;
            json_payload?: string;
            skipped?: never;
            jspb_payload?: never;
            text_payload?: never;
        } | {
            parse_error?: never;
            serialize_error?: never;
            timeout_error?: never;
            runtime_error?: never;
            protobuf_payload?: never;
            json_payload?: never;
            skipped?: string;
            jspb_payload?: never;
            text_payload?: never;
        } | {
            parse_error?: never;
            serialize_error?: never;
            timeout_error?: never;
            runtime_error?: never;
            protobuf_payload?: never;
            json_payload?: never;
            skipped?: never;
            jspb_payload?: string;
            text_payload?: never;
        } | {
            parse_error?: never;
            serialize_error?: never;
            timeout_error?: never;
            runtime_error?: never;
            protobuf_payload?: never;
            json_payload?: never;
            skipped?: never;
            jspb_payload?: never;
            text_payload?: string;
        })))) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("parse_error" in data && data.parse_error != undefined) {
                    this.parse_error = data.parse_error;
                }
                if ("serialize_error" in data && data.serialize_error != undefined) {
                    this.serialize_error = data.serialize_error;
                }
                if ("timeout_error" in data && data.timeout_error != undefined) {
                    this.timeout_error = data.timeout_error;
                }
                if ("runtime_error" in data && data.runtime_error != undefined) {
                    this.runtime_error = data.runtime_error;
                }
                if ("protobuf_payload" in data && data.protobuf_payload != undefined) {
                    this.protobuf_payload = data.protobuf_payload;
                }
                if ("json_payload" in data && data.json_payload != undefined) {
                    this.json_payload = data.json_payload;
                }
                if ("skipped" in data && data.skipped != undefined) {
                    this.skipped = data.skipped;
                }
                if ("jspb_payload" in data && data.jspb_payload != undefined) {
                    this.jspb_payload = data.jspb_payload;
                }
                if ("text_payload" in data && data.text_payload != undefined) {
                    this.text_payload = data.text_payload;
                }
            }
        }
        get parse_error() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set parse_error(value: string) {
            pb_1.Message.setOneofField(this, 1, this.#one_of_decls[0], value);
        }
        get has_parse_error() {
            return pb_1.Message.getField(this, 1) != null;
        }
        get serialize_error() {
            return pb_1.Message.getFieldWithDefault(this, 6, "") as string;
        }
        set serialize_error(value: string) {
            pb_1.Message.setOneofField(this, 6, this.#one_of_decls[0], value);
        }
        get has_serialize_error() {
            return pb_1.Message.getField(this, 6) != null;
        }
        get timeout_error() {
            return pb_1.Message.getFieldWithDefault(this, 9, "") as string;
        }
        set timeout_error(value: string) {
            pb_1.Message.setOneofField(this, 9, this.#one_of_decls[0], value);
        }
        get has_timeout_error() {
            return pb_1.Message.getField(this, 9) != null;
        }
        get runtime_error() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set runtime_error(value: string) {
            pb_1.Message.setOneofField(this, 2, this.#one_of_decls[0], value);
        }
        get has_runtime_error() {
            return pb_1.Message.getField(this, 2) != null;
        }
        get protobuf_payload() {
            return pb_1.Message.getFieldWithDefault(this, 3, new Uint8Array(0)) as Uint8Array;
        }
        set protobuf_payload(value: Uint8Array) {
            pb_1.Message.setOneofField(this, 3, this.#one_of_decls[0], value);
        }
        get has_protobuf_payload() {
            return pb_1.Message.getField(this, 3) != null;
        }
        get json_payload() {
            return pb_1.Message.getFieldWithDefault(this, 4, "") as string;
        }
        set json_payload(value: string) {
            pb_1.Message.setOneofField(this, 4, this.#one_of_decls[0], value);
        }
        get has_json_payload() {
            return pb_1.Message.getField(this, 4) != null;
        }
        get skipped() {
            return pb_1.Message.getFieldWithDefault(this, 5, "") as string;
        }
        set skipped(value: string) {
            pb_1.Message.setOneofField(this, 5, this.#one_of_decls[0], value);
        }
        get has_skipped() {
            return pb_1.Message.getField(this, 5) != null;
        }
        get jspb_payload() {
            return pb_1.Message.getFieldWithDefault(this, 7, "") as string;
        }
        set jspb_payload(value: string) {
            pb_1.Message.setOneofField(this, 7, this.#one_of_decls[0], value);
        }
        get has_jspb_payload() {
            return pb_1.Message.getField(this, 7) != null;
        }
        get text_payload() {
            return pb_1.Message.getFieldWithDefault(this, 8, "") as string;
        }
        set text_payload(value: string) {
            pb_1.Message.setOneofField(this, 8, this.#one_of_decls[0], value);
        }
        get has_text_payload() {
            return pb_1.Message.getField(this, 8) != null;
        }
        get result() {
            const cases: {
                [index: number]: "none" | "parse_error" | "serialize_error" | "timeout_error" | "runtime_error" | "protobuf_payload" | "json_payload" | "skipped" | "jspb_payload" | "text_payload";
            } = {
                0: "none",
                1: "parse_error",
                6: "serialize_error",
                9: "timeout_error",
                2: "runtime_error",
                3: "protobuf_payload",
                4: "json_payload",
                5: "skipped",
                7: "jspb_payload",
                8: "text_payload"
            };
            return cases[pb_1.Message.computeOneofCase(this, [1, 6, 9, 2, 3, 4, 5, 7, 8])];
        }
        static fromObject(data: {
            parse_error?: string;
            serialize_error?: string;
            timeout_error?: string;
            runtime_error?: string;
            protobuf_payload?: Uint8Array;
            json_payload?: string;
            skipped?: string;
            jspb_payload?: string;
            text_payload?: string;
        }): ConformanceResponse {
            const message = new ConformanceResponse({});
            if (data.parse_error != null) {
                message.parse_error = data.parse_error;
            }
            if (data.serialize_error != null) {
                message.serialize_error = data.serialize_error;
            }
            if (data.timeout_error != null) {
                message.timeout_error = data.timeout_error;
            }
            if (data.runtime_error != null) {
                message.runtime_error = data.runtime_error;
            }
            if (data.protobuf_payload != null) {
                message.protobuf_payload = data.protobuf_payload;
            }
            if (data.json_payload != null) {
                message.json_payload = data.json_payload;
            }
            if (data.skipped != null) {
                message.skipped = data.skipped;
            }
            if (data.jspb_payload != null) {
                message.jspb_payload = data.jspb_payload;
            }
            if (data.text_payload != null) {
                message.text_payload = data.text_payload;
            }
            return message;
        }
        toObject() {
            const data: {
                parse_error?: string;
                serialize_error?: string;
                timeout_error?: string;
                runtime_error?: string;
                protobuf_payload?: Uint8Array;
                json_payload?: string;
                skipped?: string;
                jspb_payload?: string;
                text_payload?: string;
            } = {};
            if (this.parse_error != null) {
                data.parse_error = this.parse_error;
            }
            if (this.serialize_error != null) {
                data.serialize_error = this.serialize_error;
            }
            if (this.timeout_error != null) {
                data.timeout_error = this.timeout_error;
            }
            if (this.runtime_error != null) {
                data.runtime_error = this.runtime_error;
            }
            if (this.protobuf_payload != null) {
                data.protobuf_payload = this.protobuf_payload;
            }
            if (this.json_payload != null) {
                data.json_payload = this.json_payload;
            }
            if (this.skipped != null) {
                data.skipped = this.skipped;
            }
            if (this.jspb_payload != null) {
                data.jspb_payload = this.jspb_payload;
            }
            if (this.text_payload != null) {
                data.text_payload = this.text_payload;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_parse_error)
                writer.writeString(1, this.parse_error);
            if (this.has_serialize_error)
                writer.writeString(6, this.serialize_error);
            if (this.has_timeout_error)
                writer.writeString(9, this.timeout_error);
            if (this.has_runtime_error)
                writer.writeString(2, this.runtime_error);
            if (this.has_protobuf_payload)
                writer.writeBytes(3, this.protobuf_payload);
            if (this.has_json_payload)
                writer.writeString(4, this.json_payload);
            if (this.has_skipped)
                writer.writeString(5, this.skipped);
            if (this.has_jspb_payload)
                writer.writeString(7, this.jspb_payload);
            if (this.has_text_payload)
                writer.writeString(8, this.text_payload);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ConformanceResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ConformanceResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.parse_error = reader.readString();
                        break;
                    case 6:
                        message.serialize_error = reader.readString();
                        break;
                    case 9:
                        message.timeout_error = reader.readString();
                        break;
                    case 2:
                        message.runtime_error = reader.readString();
                        break;
                    case 3:
                        message.protobuf_payload = reader.readBytes();
                        break;
                    case 4:
                        message.json_payload = reader.readString();
                        break;
                    case 5:
                        message.skipped = reader.readString();
                        break;
                    case 7:
                        message.jspb_payload = reader.readString();
                        break;
                    case 8:
                        message.text_payload = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): ConformanceResponse {
            return ConformanceResponse.deserialize(bytes);
        }
    }
    export class JspbEncodingConfig extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            use_jspb_array_any_format?: boolean;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("use_jspb_array_any_format" in data && data.use_jspb_array_any_format != undefined) {
                    this.use_jspb_array_any_format = data.use_jspb_array_any_format;
                }
            }
        }
        get use_jspb_array_any_format() {
            return pb_1.Message.getFieldWithDefault(this, 1, false) as boolean;
        }
        set use_jspb_array_any_format(value: boolean) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            use_jspb_array_any_format?: boolean;
        }): JspbEncodingConfig {
            const message = new JspbEncodingConfig({});
            if (data.use_jspb_array_any_format != null) {
                message.use_jspb_array_any_format = data.use_jspb_array_any_format;
            }
            return message;
        }
        toObject() {
            const data: {
                use_jspb_array_any_format?: boolean;
            } = {};
            if (this.use_jspb_array_any_format != null) {
                data.use_jspb_array_any_format = this.use_jspb_array_any_format;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.use_jspb_array_any_format != false)
                writer.writeBool(1, this.use_jspb_array_any_format);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): JspbEncodingConfig {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new JspbEncodingConfig();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.use_jspb_array_any_format = reader.readBool();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): JspbEncodingConfig {
            return JspbEncodingConfig.deserialize(bytes);
        }
    }
}
