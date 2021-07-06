/* eslint-disable */
import Long from "long";
import {
  makeGenericClientConstructor,
  ChannelCredentials,
  ChannelOptions,
  UntypedServiceImplementation,
  handleUnaryCall,
  Client,
  ClientUnaryCall,
  Metadata,
  CallOptions,
  handleServerStreamingCall,
  ClientReadableStream,
  ServiceError,
} from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { google } from "../google/protobuf/empty";

export const protobufPackage = "com.coreyauger.lovebomb.lovebomb";

/** Specify the version of the Protobuf syntax */

export interface Dimensions {
  width: number;
  height: number;
}

export interface Owner {
  id: string;
  username: string;
  profilePicUrl: string;
  fullName: string;
}

export interface DisplayResource {
  src: string;
  config: Dimensions | undefined;
}

export interface Lovebomb {
  id: string;
  typeName: Lovebomb_MediaType;
  dimensions: Dimensions | undefined;
  displayUrl: string;
  displayResource: DisplayResource[];
  accessibilityCaption: string;
  hasAudio: boolean;
  videoUrl: string;
  shortcode: string;
  videoDuration: number;
  title: string;
  thumbnailSrc: string;
  owner: Owner | undefined;
  videoViewCount: number;
}

export enum Lovebomb_MediaType {
  IMAGE = 0,
  VIDEO = 1,
  UNRECOGNIZED = -1,
}

export function lovebomb_MediaTypeFromJSON(object: any): Lovebomb_MediaType {
  switch (object) {
    case 0:
    case "IMAGE":
      return Lovebomb_MediaType.IMAGE;
    case 1:
    case "VIDEO":
      return Lovebomb_MediaType.VIDEO;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Lovebomb_MediaType.UNRECOGNIZED;
  }
}

export function lovebomb_MediaTypeToJSON(object: Lovebomb_MediaType): string {
  switch (object) {
    case Lovebomb_MediaType.IMAGE:
      return "IMAGE";
    case Lovebomb_MediaType.VIDEO:
      return "VIDEO";
    default:
      return "UNKNOWN";
  }
}

export interface GetLovebombRequest {
  id: string;
}

export interface GetLovebombsByUsernameRequest {
  /** TODO: paging */
  username: string;
}

export interface GetLovebombs {
  skip: number;
  limit: number;
}

const baseDimensions: object = { width: 0, height: 0 };

export const Dimensions = {
  encode(
    message: Dimensions,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.width !== 0) {
      writer.uint32(8).uint32(message.width);
    }
    if (message.height !== 0) {
      writer.uint32(16).uint32(message.height);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Dimensions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDimensions } as Dimensions;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.width = reader.uint32();
          break;
        case 2:
          message.height = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Dimensions {
    const message = { ...baseDimensions } as Dimensions;
    if (object.width !== undefined && object.width !== null) {
      message.width = Number(object.width);
    } else {
      message.width = 0;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = Number(object.height);
    } else {
      message.height = 0;
    }
    return message;
  },

  toJSON(message: Dimensions): unknown {
    const obj: any = {};
    message.width !== undefined && (obj.width = message.width);
    message.height !== undefined && (obj.height = message.height);
    return obj;
  },

  fromPartial(object: DeepPartial<Dimensions>): Dimensions {
    const message = { ...baseDimensions } as Dimensions;
    if (object.width !== undefined && object.width !== null) {
      message.width = object.width;
    } else {
      message.width = 0;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    } else {
      message.height = 0;
    }
    return message;
  },
};

const baseOwner: object = {
  id: "",
  username: "",
  profilePicUrl: "",
  fullName: "",
};

export const Owner = {
  encode(message: Owner, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.username !== "") {
      writer.uint32(18).string(message.username);
    }
    if (message.profilePicUrl !== "") {
      writer.uint32(26).string(message.profilePicUrl);
    }
    if (message.fullName !== "") {
      writer.uint32(34).string(message.fullName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Owner {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOwner } as Owner;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.username = reader.string();
          break;
        case 3:
          message.profilePicUrl = reader.string();
          break;
        case 4:
          message.fullName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Owner {
    const message = { ...baseOwner } as Owner;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.username !== undefined && object.username !== null) {
      message.username = String(object.username);
    } else {
      message.username = "";
    }
    if (object.profilePicUrl !== undefined && object.profilePicUrl !== null) {
      message.profilePicUrl = String(object.profilePicUrl);
    } else {
      message.profilePicUrl = "";
    }
    if (object.fullName !== undefined && object.fullName !== null) {
      message.fullName = String(object.fullName);
    } else {
      message.fullName = "";
    }
    return message;
  },

  toJSON(message: Owner): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.username !== undefined && (obj.username = message.username);
    message.profilePicUrl !== undefined &&
      (obj.profilePicUrl = message.profilePicUrl);
    message.fullName !== undefined && (obj.fullName = message.fullName);
    return obj;
  },

  fromPartial(object: DeepPartial<Owner>): Owner {
    const message = { ...baseOwner } as Owner;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.username !== undefined && object.username !== null) {
      message.username = object.username;
    } else {
      message.username = "";
    }
    if (object.profilePicUrl !== undefined && object.profilePicUrl !== null) {
      message.profilePicUrl = object.profilePicUrl;
    } else {
      message.profilePicUrl = "";
    }
    if (object.fullName !== undefined && object.fullName !== null) {
      message.fullName = object.fullName;
    } else {
      message.fullName = "";
    }
    return message;
  },
};

const baseDisplayResource: object = { src: "" };

export const DisplayResource = {
  encode(
    message: DisplayResource,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.src !== "") {
      writer.uint32(10).string(message.src);
    }
    if (message.config !== undefined) {
      Dimensions.encode(message.config, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DisplayResource {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDisplayResource } as DisplayResource;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.src = reader.string();
          break;
        case 2:
          message.config = Dimensions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DisplayResource {
    const message = { ...baseDisplayResource } as DisplayResource;
    if (object.src !== undefined && object.src !== null) {
      message.src = String(object.src);
    } else {
      message.src = "";
    }
    if (object.config !== undefined && object.config !== null) {
      message.config = Dimensions.fromJSON(object.config);
    } else {
      message.config = undefined;
    }
    return message;
  },

  toJSON(message: DisplayResource): unknown {
    const obj: any = {};
    message.src !== undefined && (obj.src = message.src);
    message.config !== undefined &&
      (obj.config = message.config
        ? Dimensions.toJSON(message.config)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<DisplayResource>): DisplayResource {
    const message = { ...baseDisplayResource } as DisplayResource;
    if (object.src !== undefined && object.src !== null) {
      message.src = object.src;
    } else {
      message.src = "";
    }
    if (object.config !== undefined && object.config !== null) {
      message.config = Dimensions.fromPartial(object.config);
    } else {
      message.config = undefined;
    }
    return message;
  },
};

const baseLovebomb: object = {
  id: "",
  typeName: 0,
  displayUrl: "",
  accessibilityCaption: "",
  hasAudio: false,
  videoUrl: "",
  shortcode: "",
  videoDuration: 0,
  title: "",
  thumbnailSrc: "",
  videoViewCount: 0,
};

export const Lovebomb = {
  encode(
    message: Lovebomb,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.typeName !== 0) {
      writer.uint32(16).int32(message.typeName);
    }
    if (message.dimensions !== undefined) {
      Dimensions.encode(message.dimensions, writer.uint32(26).fork()).ldelim();
    }
    if (message.displayUrl !== "") {
      writer.uint32(34).string(message.displayUrl);
    }
    for (const v of message.displayResource) {
      DisplayResource.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.accessibilityCaption !== "") {
      writer.uint32(50).string(message.accessibilityCaption);
    }
    if (message.hasAudio === true) {
      writer.uint32(56).bool(message.hasAudio);
    }
    if (message.videoUrl !== "") {
      writer.uint32(66).string(message.videoUrl);
    }
    if (message.shortcode !== "") {
      writer.uint32(74).string(message.shortcode);
    }
    if (message.videoDuration !== 0) {
      writer.uint32(85).float(message.videoDuration);
    }
    if (message.title !== "") {
      writer.uint32(90).string(message.title);
    }
    if (message.thumbnailSrc !== "") {
      writer.uint32(98).string(message.thumbnailSrc);
    }
    if (message.owner !== undefined) {
      Owner.encode(message.owner, writer.uint32(106).fork()).ldelim();
    }
    if (message.videoViewCount !== 0) {
      writer.uint32(112).uint32(message.videoViewCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Lovebomb {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLovebomb } as Lovebomb;
    message.displayResource = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.typeName = reader.int32() as any;
          break;
        case 3:
          message.dimensions = Dimensions.decode(reader, reader.uint32());
          break;
        case 4:
          message.displayUrl = reader.string();
          break;
        case 5:
          message.displayResource.push(
            DisplayResource.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.accessibilityCaption = reader.string();
          break;
        case 7:
          message.hasAudio = reader.bool();
          break;
        case 8:
          message.videoUrl = reader.string();
          break;
        case 9:
          message.shortcode = reader.string();
          break;
        case 10:
          message.videoDuration = reader.float();
          break;
        case 11:
          message.title = reader.string();
          break;
        case 12:
          message.thumbnailSrc = reader.string();
          break;
        case 13:
          message.owner = Owner.decode(reader, reader.uint32());
          break;
        case 14:
          message.videoViewCount = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Lovebomb {
    const message = { ...baseLovebomb } as Lovebomb;
    message.displayResource = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.typeName !== undefined && object.typeName !== null) {
      message.typeName = lovebomb_MediaTypeFromJSON(object.typeName);
    } else {
      message.typeName = 0;
    }
    if (object.dimensions !== undefined && object.dimensions !== null) {
      message.dimensions = Dimensions.fromJSON(object.dimensions);
    } else {
      message.dimensions = undefined;
    }
    if (object.displayUrl !== undefined && object.displayUrl !== null) {
      message.displayUrl = String(object.displayUrl);
    } else {
      message.displayUrl = "";
    }
    if (
      object.displayResource !== undefined &&
      object.displayResource !== null
    ) {
      for (const e of object.displayResource) {
        message.displayResource.push(DisplayResource.fromJSON(e));
      }
    }
    if (
      object.accessibilityCaption !== undefined &&
      object.accessibilityCaption !== null
    ) {
      message.accessibilityCaption = String(object.accessibilityCaption);
    } else {
      message.accessibilityCaption = "";
    }
    if (object.hasAudio !== undefined && object.hasAudio !== null) {
      message.hasAudio = Boolean(object.hasAudio);
    } else {
      message.hasAudio = false;
    }
    if (object.videoUrl !== undefined && object.videoUrl !== null) {
      message.videoUrl = String(object.videoUrl);
    } else {
      message.videoUrl = "";
    }
    if (object.shortcode !== undefined && object.shortcode !== null) {
      message.shortcode = String(object.shortcode);
    } else {
      message.shortcode = "";
    }
    if (object.videoDuration !== undefined && object.videoDuration !== null) {
      message.videoDuration = Number(object.videoDuration);
    } else {
      message.videoDuration = 0;
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    if (object.thumbnailSrc !== undefined && object.thumbnailSrc !== null) {
      message.thumbnailSrc = String(object.thumbnailSrc);
    } else {
      message.thumbnailSrc = "";
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = Owner.fromJSON(object.owner);
    } else {
      message.owner = undefined;
    }
    if (object.videoViewCount !== undefined && object.videoViewCount !== null) {
      message.videoViewCount = Number(object.videoViewCount);
    } else {
      message.videoViewCount = 0;
    }
    return message;
  },

  toJSON(message: Lovebomb): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.typeName !== undefined &&
      (obj.typeName = lovebomb_MediaTypeToJSON(message.typeName));
    message.dimensions !== undefined &&
      (obj.dimensions = message.dimensions
        ? Dimensions.toJSON(message.dimensions)
        : undefined);
    message.displayUrl !== undefined && (obj.displayUrl = message.displayUrl);
    if (message.displayResource) {
      obj.displayResource = message.displayResource.map((e) =>
        e ? DisplayResource.toJSON(e) : undefined
      );
    } else {
      obj.displayResource = [];
    }
    message.accessibilityCaption !== undefined &&
      (obj.accessibilityCaption = message.accessibilityCaption);
    message.hasAudio !== undefined && (obj.hasAudio = message.hasAudio);
    message.videoUrl !== undefined && (obj.videoUrl = message.videoUrl);
    message.shortcode !== undefined && (obj.shortcode = message.shortcode);
    message.videoDuration !== undefined &&
      (obj.videoDuration = message.videoDuration);
    message.title !== undefined && (obj.title = message.title);
    message.thumbnailSrc !== undefined &&
      (obj.thumbnailSrc = message.thumbnailSrc);
    message.owner !== undefined &&
      (obj.owner = message.owner ? Owner.toJSON(message.owner) : undefined);
    message.videoViewCount !== undefined &&
      (obj.videoViewCount = message.videoViewCount);
    return obj;
  },

  fromPartial(object: DeepPartial<Lovebomb>): Lovebomb {
    const message = { ...baseLovebomb } as Lovebomb;
    message.displayResource = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.typeName !== undefined && object.typeName !== null) {
      message.typeName = object.typeName;
    } else {
      message.typeName = 0;
    }
    if (object.dimensions !== undefined && object.dimensions !== null) {
      message.dimensions = Dimensions.fromPartial(object.dimensions);
    } else {
      message.dimensions = undefined;
    }
    if (object.displayUrl !== undefined && object.displayUrl !== null) {
      message.displayUrl = object.displayUrl;
    } else {
      message.displayUrl = "";
    }
    if (
      object.displayResource !== undefined &&
      object.displayResource !== null
    ) {
      for (const e of object.displayResource) {
        message.displayResource.push(DisplayResource.fromPartial(e));
      }
    }
    if (
      object.accessibilityCaption !== undefined &&
      object.accessibilityCaption !== null
    ) {
      message.accessibilityCaption = object.accessibilityCaption;
    } else {
      message.accessibilityCaption = "";
    }
    if (object.hasAudio !== undefined && object.hasAudio !== null) {
      message.hasAudio = object.hasAudio;
    } else {
      message.hasAudio = false;
    }
    if (object.videoUrl !== undefined && object.videoUrl !== null) {
      message.videoUrl = object.videoUrl;
    } else {
      message.videoUrl = "";
    }
    if (object.shortcode !== undefined && object.shortcode !== null) {
      message.shortcode = object.shortcode;
    } else {
      message.shortcode = "";
    }
    if (object.videoDuration !== undefined && object.videoDuration !== null) {
      message.videoDuration = object.videoDuration;
    } else {
      message.videoDuration = 0;
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = "";
    }
    if (object.thumbnailSrc !== undefined && object.thumbnailSrc !== null) {
      message.thumbnailSrc = object.thumbnailSrc;
    } else {
      message.thumbnailSrc = "";
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = Owner.fromPartial(object.owner);
    } else {
      message.owner = undefined;
    }
    if (object.videoViewCount !== undefined && object.videoViewCount !== null) {
      message.videoViewCount = object.videoViewCount;
    } else {
      message.videoViewCount = 0;
    }
    return message;
  },
};

const baseGetLovebombRequest: object = { id: "" };

export const GetLovebombRequest = {
  encode(
    message: GetLovebombRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetLovebombRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetLovebombRequest } as GetLovebombRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetLovebombRequest {
    const message = { ...baseGetLovebombRequest } as GetLovebombRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    return message;
  },

  toJSON(message: GetLovebombRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<GetLovebombRequest>): GetLovebombRequest {
    const message = { ...baseGetLovebombRequest } as GetLovebombRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    return message;
  },
};

const baseGetLovebombsByUsernameRequest: object = { username: "" };

export const GetLovebombsByUsernameRequest = {
  encode(
    message: GetLovebombsByUsernameRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.username !== "") {
      writer.uint32(10).string(message.username);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetLovebombsByUsernameRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetLovebombsByUsernameRequest,
    } as GetLovebombsByUsernameRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.username = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetLovebombsByUsernameRequest {
    const message = {
      ...baseGetLovebombsByUsernameRequest,
    } as GetLovebombsByUsernameRequest;
    if (object.username !== undefined && object.username !== null) {
      message.username = String(object.username);
    } else {
      message.username = "";
    }
    return message;
  },

  toJSON(message: GetLovebombsByUsernameRequest): unknown {
    const obj: any = {};
    message.username !== undefined && (obj.username = message.username);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetLovebombsByUsernameRequest>
  ): GetLovebombsByUsernameRequest {
    const message = {
      ...baseGetLovebombsByUsernameRequest,
    } as GetLovebombsByUsernameRequest;
    if (object.username !== undefined && object.username !== null) {
      message.username = object.username;
    } else {
      message.username = "";
    }
    return message;
  },
};

const baseGetLovebombs: object = { skip: 0, limit: 0 };

export const GetLovebombs = {
  encode(
    message: GetLovebombs,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.skip !== 0) {
      writer.uint32(8).uint32(message.skip);
    }
    if (message.limit !== 0) {
      writer.uint32(16).uint32(message.limit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetLovebombs {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetLovebombs } as GetLovebombs;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.skip = reader.uint32();
          break;
        case 2:
          message.limit = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetLovebombs {
    const message = { ...baseGetLovebombs } as GetLovebombs;
    if (object.skip !== undefined && object.skip !== null) {
      message.skip = Number(object.skip);
    } else {
      message.skip = 0;
    }
    if (object.limit !== undefined && object.limit !== null) {
      message.limit = Number(object.limit);
    } else {
      message.limit = 0;
    }
    return message;
  },

  toJSON(message: GetLovebombs): unknown {
    const obj: any = {};
    message.skip !== undefined && (obj.skip = message.skip);
    message.limit !== undefined && (obj.limit = message.limit);
    return obj;
  },

  fromPartial(object: DeepPartial<GetLovebombs>): GetLovebombs {
    const message = { ...baseGetLovebombs } as GetLovebombs;
    if (object.skip !== undefined && object.skip !== null) {
      message.skip = object.skip;
    } else {
      message.skip = 0;
    }
    if (object.limit !== undefined && object.limit !== null) {
      message.limit = object.limit;
    } else {
      message.limit = 0;
    }
    return message;
  },
};

export const LovebombServiceService = {
  saveLovebomb: {
    path: "/com.coreyauger.lovebomb.lovebomb.LovebombService/SaveLovebomb",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: Lovebomb) =>
      Buffer.from(Lovebomb.encode(value).finish()),
    requestDeserialize: (value: Buffer) => Lovebomb.decode(value),
    responseSerialize: (value: google.protobuf.Empty) =>
      Buffer.from(value.serialize()),
    responseDeserialize: (value: Buffer) =>
      google.protobuf.Empty.deserialize(value),
  },
} as const;

export interface LovebombServiceServer extends UntypedServiceImplementation {
  saveLovebomb: handleUnaryCall<Lovebomb, google.protobuf.Empty>;
}

export interface LovebombServiceClient extends Client {
  saveLovebomb(
    request: Lovebomb,
    callback: (
      error: ServiceError | null,
      response: google.protobuf.Empty
    ) => void
  ): ClientUnaryCall;
  saveLovebomb(
    request: Lovebomb,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: google.protobuf.Empty
    ) => void
  ): ClientUnaryCall;
  saveLovebomb(
    request: Lovebomb,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: google.protobuf.Empty
    ) => void
  ): ClientUnaryCall;
}

export const LovebombServiceClient = makeGenericClientConstructor(
  LovebombServiceService,
  "com.coreyauger.lovebomb.lovebomb.LovebombService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): LovebombServiceClient;
};

export const GetLovebombServiceService = {
  updateLovebomb: {
    path: "/com.coreyauger.lovebomb.lovebomb.GetLovebombService/UpdateLovebomb",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: Lovebomb) =>
      Buffer.from(Lovebomb.encode(value).finish()),
    requestDeserialize: (value: Buffer) => Lovebomb.decode(value),
    responseSerialize: (value: Lovebomb) =>
      Buffer.from(Lovebomb.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Lovebomb.decode(value),
  },
  getLovebomb: {
    path: "/com.coreyauger.lovebomb.lovebomb.GetLovebombService/GetLovebomb",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetLovebombRequest) =>
      Buffer.from(GetLovebombRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetLovebombRequest.decode(value),
    responseSerialize: (value: Lovebomb) =>
      Buffer.from(Lovebomb.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Lovebomb.decode(value),
  },
} as const;

export interface GetLovebombServiceServer extends UntypedServiceImplementation {
  updateLovebomb: handleUnaryCall<Lovebomb, Lovebomb>;
  getLovebomb: handleUnaryCall<GetLovebombRequest, Lovebomb>;
}

export interface GetLovebombServiceClient extends Client {
  updateLovebomb(
    request: Lovebomb,
    callback: (error: ServiceError | null, response: Lovebomb) => void
  ): ClientUnaryCall;
  updateLovebomb(
    request: Lovebomb,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Lovebomb) => void
  ): ClientUnaryCall;
  updateLovebomb(
    request: Lovebomb,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Lovebomb) => void
  ): ClientUnaryCall;
  getLovebomb(
    request: GetLovebombRequest,
    callback: (error: ServiceError | null, response: Lovebomb) => void
  ): ClientUnaryCall;
  getLovebomb(
    request: GetLovebombRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Lovebomb) => void
  ): ClientUnaryCall;
  getLovebomb(
    request: GetLovebombRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Lovebomb) => void
  ): ClientUnaryCall;
}

export const GetLovebombServiceClient = makeGenericClientConstructor(
  GetLovebombServiceService,
  "com.coreyauger.lovebomb.lovebomb.GetLovebombService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): GetLovebombServiceClient;
};

export const GetLovebombByUsernameServiceService = {
  updateLovebomb: {
    path: "/com.coreyauger.lovebomb.lovebomb.GetLovebombByUsernameService/UpdateLovebomb",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: Lovebomb) =>
      Buffer.from(Lovebomb.encode(value).finish()),
    requestDeserialize: (value: Buffer) => Lovebomb.decode(value),
    responseSerialize: (value: Lovebomb) =>
      Buffer.from(Lovebomb.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Lovebomb.decode(value),
  },
  getLovebombsByUsername: {
    path: "/com.coreyauger.lovebomb.lovebomb.GetLovebombByUsernameService/GetLovebombsByUsername",
    requestStream: false,
    responseStream: true,
    requestSerialize: (value: GetLovebombsByUsernameRequest) =>
      Buffer.from(GetLovebombsByUsernameRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      GetLovebombsByUsernameRequest.decode(value),
    responseSerialize: (value: Lovebomb) =>
      Buffer.from(Lovebomb.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Lovebomb.decode(value),
  },
} as const;

export interface GetLovebombByUsernameServiceServer
  extends UntypedServiceImplementation {
  updateLovebomb: handleUnaryCall<Lovebomb, Lovebomb>;
  getLovebombsByUsername: handleServerStreamingCall<
    GetLovebombsByUsernameRequest,
    Lovebomb
  >;
}

export interface GetLovebombByUsernameServiceClient extends Client {
  updateLovebomb(
    request: Lovebomb,
    callback: (error: ServiceError | null, response: Lovebomb) => void
  ): ClientUnaryCall;
  updateLovebomb(
    request: Lovebomb,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Lovebomb) => void
  ): ClientUnaryCall;
  updateLovebomb(
    request: Lovebomb,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Lovebomb) => void
  ): ClientUnaryCall;
  getLovebombsByUsername(
    request: GetLovebombsByUsernameRequest,
    options?: Partial<CallOptions>
  ): ClientReadableStream<Lovebomb>;
  getLovebombsByUsername(
    request: GetLovebombsByUsernameRequest,
    metadata?: Metadata,
    options?: Partial<CallOptions>
  ): ClientReadableStream<Lovebomb>;
}

export const GetLovebombByUsernameServiceClient = makeGenericClientConstructor(
  GetLovebombByUsernameServiceService,
  "com.coreyauger.lovebomb.lovebomb.GetLovebombByUsernameService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): GetLovebombByUsernameServiceClient;
};

export const AllLovebombServiceService = {
  updateLovebomb: {
    path: "/com.coreyauger.lovebomb.lovebomb.AllLovebombService/UpdateLovebomb",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: Lovebomb) =>
      Buffer.from(Lovebomb.encode(value).finish()),
    requestDeserialize: (value: Buffer) => Lovebomb.decode(value),
    responseSerialize: (value: Lovebomb) =>
      Buffer.from(Lovebomb.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Lovebomb.decode(value),
  },
  getAllLovebombs: {
    path: "/com.coreyauger.lovebomb.lovebomb.AllLovebombService/GetAllLovebombs",
    requestStream: false,
    responseStream: true,
    requestSerialize: (value: GetLovebombs) =>
      Buffer.from(GetLovebombs.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetLovebombs.decode(value),
    responseSerialize: (value: Lovebomb) =>
      Buffer.from(Lovebomb.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Lovebomb.decode(value),
  },
} as const;

export interface AllLovebombServiceServer extends UntypedServiceImplementation {
  updateLovebomb: handleUnaryCall<Lovebomb, Lovebomb>;
  getAllLovebombs: handleServerStreamingCall<GetLovebombs, Lovebomb>;
}

export interface AllLovebombServiceClient extends Client {
  updateLovebomb(
    request: Lovebomb,
    callback: (error: ServiceError | null, response: Lovebomb) => void
  ): ClientUnaryCall;
  updateLovebomb(
    request: Lovebomb,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Lovebomb) => void
  ): ClientUnaryCall;
  updateLovebomb(
    request: Lovebomb,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Lovebomb) => void
  ): ClientUnaryCall;
  getAllLovebombs(
    request: GetLovebombs,
    options?: Partial<CallOptions>
  ): ClientReadableStream<Lovebomb>;
  getAllLovebombs(
    request: GetLovebombs,
    metadata?: Metadata,
    options?: Partial<CallOptions>
  ): ClientReadableStream<Lovebomb>;
}

export const AllLovebombServiceClient = makeGenericClientConstructor(
  AllLovebombServiceService,
  "com.coreyauger.lovebomb.lovebomb.AllLovebombService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): AllLovebombServiceClient;
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
