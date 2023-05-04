import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";

export interface UserEntry {

    data?: UserEntry_Data;

    authResult?: UserEntry_AuthResult;

    resultStat?: UserEntry_ResultStat;
}

export interface UserEntry_Data {

    name: string;

    lastName: string;

    isFemale: boolean;

    address: string;

    email: string;

    password: string;
}

export interface UserEntry_AuthResult {

    accessToken: string;

    expiresIn: number;
}

export interface UserEntry_ResultStat {

    ok: boolean;
}

export interface UserDeleteEntry {
}

export interface UserLoginEntry {

    email: string;

    password: string;
}

export interface ResultStat {

    ok: boolean;
}

class UserEntry$Type extends MessageType<UserEntry> {
    constructor() {
        super("UserEntry", [
            { no: 1, name: "data", kind: "message", T: () => UserEntry_Data },
            { no: 2, name: "authResult", kind: "message", T: () => UserEntry_AuthResult },
            { no: 3, name: "resultStat", kind: "message", T: () => UserEntry_ResultStat }
        ]);
    }
    create(value?: PartialMessage<UserEntry>): UserEntry {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<UserEntry>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UserEntry): UserEntry {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    message.data = UserEntry_Data.internalBinaryRead(reader, reader.uint32(), options, message.data);
                    break;
                case 2:
                    message.authResult = UserEntry_AuthResult.internalBinaryRead(reader, reader.uint32(), options, message.authResult);
                    break;
                case  3:
                    message.resultStat = UserEntry_ResultStat.internalBinaryRead(reader, reader.uint32(), options, message.resultStat);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: UserEntry, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {

        if (message.data)
            UserEntry_Data.internalBinaryWrite(message.data, writer.tag(1, WireType.LengthDelimited).fork(), options).join();

        if (message.authResult)
            UserEntry_AuthResult.internalBinaryWrite(message.authResult, writer.tag(2, WireType.LengthDelimited).fork(), options).join();

        if (message.resultStat)
            UserEntry_ResultStat.internalBinaryWrite(message.resultStat, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}

export const UserEntry = new UserEntry$Type();

class UserEntry_Data$Type extends MessageType<UserEntry_Data> {
    constructor() {
        super("UserEntry.Data", [
            { no: 1, name: "Name", kind: "scalar", jsonName: "Name", T: 9 },
            { no: 2, name: "LastName", kind: "scalar", jsonName: "LastName", T: 9  },
            { no: 3, name: "IsFemale", kind: "scalar", jsonName: "IsFemale", T: 8 },
            { no: 4, name: "Address", kind: "scalar", jsonName: "Address", T: 9  },
            { no: 5, name: "Email", kind: "scalar", jsonName: "Email", T: 9  },
            { no: 6, name: "Password", kind: "scalar", jsonName: "Password", T: 9 }
        ]);
    }
    create(value?: PartialMessage<UserEntry_Data>): UserEntry_Data {
        const message = { name: "", lastName: "", isFemale: false, address: "", email: "", password: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<UserEntry_Data>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UserEntry_Data): UserEntry_Data {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.lastName = reader.string();
                    break;
                case 3:
                    message.isFemale = reader.bool();
                    break;
                case 4:
                    message.address = reader.string();
                    break;
                case 5:
                    message.email = reader.string();
                    break;
                case 6:
                    message.password = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: UserEntry_Data, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {

        if (message.name !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.name);

        if (message.lastName !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.lastName);

        if (message.isFemale !== false)
            writer.tag(3, WireType.Varint).bool(message.isFemale);

        if (message.address !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.address);

        if (message.email !== "")
            writer.tag(5, WireType.LengthDelimited).string(message.email);

        if (message.password !== "")
            writer.tag(6, WireType.LengthDelimited).string(message.password);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}

export const UserEntry_Data = new UserEntry_Data$Type();

class UserEntry_AuthResult$Type extends MessageType<UserEntry_AuthResult> {
    constructor() {
        super("UserEntry.AuthResult", [
            { no: 1, name: "AccessToken", kind: "scalar", jsonName: "AccessToken", T: 9 },
            { no: 2, name: "ExpiresIn", kind: "scalar", jsonName: "ExpiresIn", T: 5 }
        ]);
    }
    create(value?: PartialMessage<UserEntry_AuthResult>): UserEntry_AuthResult {
        const message = { accessToken: "", expiresIn: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<UserEntry_AuthResult>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UserEntry_AuthResult): UserEntry_AuthResult {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    message.accessToken = reader.string();
                    break;
                case 2:
                    message.expiresIn = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: UserEntry_AuthResult, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
       
        if (message.accessToken !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.accessToken);

        if (message.expiresIn !== 0)
            writer.tag(2, WireType.Varint).int32(message.expiresIn);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}

export const UserEntry_AuthResult = new UserEntry_AuthResult$Type();

class UserEntry_ResultStat$Type extends MessageType<UserEntry_ResultStat> {
    constructor() {
        super("UserEntry.ResultStat", [
            { no: 1, name: "Ok", kind: "scalar", jsonName: "Ok", T: 8 }
        ]);
    }
    create(value?: PartialMessage<UserEntry_ResultStat>): UserEntry_ResultStat {
        const message = { ok: false };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<UserEntry_ResultStat>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UserEntry_ResultStat): UserEntry_ResultStat {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    message.ok = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: UserEntry_ResultStat, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {

        if (message.ok !== false)
            writer.tag(1, WireType.Varint).bool(message.ok);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}

export const UserEntry_ResultStat = new UserEntry_ResultStat$Type();

class UserDeleteEntry$Type extends MessageType<UserDeleteEntry> {
    constructor() {
        super("UserDeleteEntry", []);
    }
    create(value?: PartialMessage<UserDeleteEntry>): UserDeleteEntry {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<UserDeleteEntry>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UserDeleteEntry): UserDeleteEntry {
        return target ?? this.create();
    }
    internalBinaryWrite(message: UserDeleteEntry, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}

export const UserDeleteEntry = new UserDeleteEntry$Type();

class UserLoginEntry$Type extends MessageType<UserLoginEntry> {
    constructor() {
        super("UserLoginEntry", [
            { no: 1, name: "Email", kind: "scalar", jsonName: "Email", T: 9 },
            { no: 2, name: "Password", kind: "scalar", jsonName: "Password", T: 9 }
        ]);
    }
    create(value?: PartialMessage<UserLoginEntry>): UserLoginEntry {
        const message = { email: "", password: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<UserLoginEntry>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UserLoginEntry): UserLoginEntry {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    message.email = reader.string();
                    break;
                case 2:
                    message.password = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: UserLoginEntry, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {

        if (message.email !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.email);

        if (message.password !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.password);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}

export const UserLoginEntry = new UserLoginEntry$Type();

class ResultStat$Type extends MessageType<ResultStat> {
    constructor() {
        super("ResultStat", [
            { no: 1, name: "Ok", kind: "scalar", jsonName: "Ok", T: 8 }
        ]);
    }
    create(value?: PartialMessage<ResultStat>): ResultStat {
        const message = { ok: false };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ResultStat>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ResultStat): ResultStat {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    message.ok = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: ResultStat, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {

        if (message.ok !== false)
            writer.tag(1, WireType.Varint).bool(message.ok);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}

export const ResultStat = new ResultStat$Type();

export const UserOp = new ServiceType("UserOp", [
    { name: "Login", options: {}, I: UserLoginEntry, O: UserEntry },
    { name: "UserAdd", options: {}, I: UserEntry_Data, O: UserEntry },
    { name: "UserUpdate", options: {}, I: UserEntry_Data, O: ResultStat },
    { name: "UserDelete", options: {}, I: UserDeleteEntry, O: ResultStat }
]);
