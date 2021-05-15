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

export const protobufPackage = "com.coreyauger.lovebomb.user";

/** Specify the version of the Protobuf syntax */

export interface User {
  username: string;
  /** IG fields */
  biography: string;
  externalUrl: string;
  followedByCount: number;
  fbid: string;
  followCount: number;
  fullName: string;
  id: string;
  isBusinessAccount: boolean;
  isProfessionalAccount: boolean;
  isJoinedRecently: boolean;
  categoryName: string;
  profilePicUrl: string;
  profilePicUrlHd: string;
  shouldShowCategory: boolean;
  /** extended fields */
  bomberScore: number;
}

export interface GetUserRequest {
  id: string;
}

export interface GetUsersByBomberScoreRequest {
  /** TODO: paging */
  score: number;
}

export interface GetUsersByScore {
  score: string;
  skip: number;
  limit: number;
}

export interface GetUsers {
  skip: number;
  limit: number;
}

const baseUser: object = {
  username: "",
  biography: "",
  externalUrl: "",
  followedByCount: 0,
  fbid: "",
  followCount: 0,
  fullName: "",
  id: "",
  isBusinessAccount: false,
  isProfessionalAccount: false,
  isJoinedRecently: false,
  categoryName: "",
  profilePicUrl: "",
  profilePicUrlHd: "",
  shouldShowCategory: false,
  bomberScore: 0,
};

export const User = {
  encode(message: User, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.username !== "") {
      writer.uint32(10).string(message.username);
    }
    if (message.biography !== "") {
      writer.uint32(90).string(message.biography);
    }
    if (message.externalUrl !== "") {
      writer.uint32(98).string(message.externalUrl);
    }
    if (message.followedByCount !== 0) {
      writer.uint32(104).uint32(message.followedByCount);
    }
    if (message.fbid !== "") {
      writer.uint32(114).string(message.fbid);
    }
    if (message.followCount !== 0) {
      writer.uint32(120).uint32(message.followCount);
    }
    if (message.fullName !== "") {
      writer.uint32(130).string(message.fullName);
    }
    if (message.id !== "") {
      writer.uint32(138).string(message.id);
    }
    if (message.isBusinessAccount === true) {
      writer.uint32(144).bool(message.isBusinessAccount);
    }
    if (message.isProfessionalAccount === true) {
      writer.uint32(152).bool(message.isProfessionalAccount);
    }
    if (message.isJoinedRecently === true) {
      writer.uint32(160).bool(message.isJoinedRecently);
    }
    if (message.categoryName !== "") {
      writer.uint32(170).string(message.categoryName);
    }
    if (message.profilePicUrl !== "") {
      writer.uint32(178).string(message.profilePicUrl);
    }
    if (message.profilePicUrlHd !== "") {
      writer.uint32(186).string(message.profilePicUrlHd);
    }
    if (message.shouldShowCategory === true) {
      writer.uint32(192).bool(message.shouldShowCategory);
    }
    if (message.bomberScore !== 0) {
      writer.uint32(200).uint32(message.bomberScore);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): User {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUser } as User;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.username = reader.string();
          break;
        case 11:
          message.biography = reader.string();
          break;
        case 12:
          message.externalUrl = reader.string();
          break;
        case 13:
          message.followedByCount = reader.uint32();
          break;
        case 14:
          message.fbid = reader.string();
          break;
        case 15:
          message.followCount = reader.uint32();
          break;
        case 16:
          message.fullName = reader.string();
          break;
        case 17:
          message.id = reader.string();
          break;
        case 18:
          message.isBusinessAccount = reader.bool();
          break;
        case 19:
          message.isProfessionalAccount = reader.bool();
          break;
        case 20:
          message.isJoinedRecently = reader.bool();
          break;
        case 21:
          message.categoryName = reader.string();
          break;
        case 22:
          message.profilePicUrl = reader.string();
          break;
        case 23:
          message.profilePicUrlHd = reader.string();
          break;
        case 24:
          message.shouldShowCategory = reader.bool();
          break;
        case 25:
          message.bomberScore = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): User {
    const message = { ...baseUser } as User;
    if (object.username !== undefined && object.username !== null) {
      message.username = String(object.username);
    } else {
      message.username = "";
    }
    if (object.biography !== undefined && object.biography !== null) {
      message.biography = String(object.biography);
    } else {
      message.biography = "";
    }
    if (object.externalUrl !== undefined && object.externalUrl !== null) {
      message.externalUrl = String(object.externalUrl);
    } else {
      message.externalUrl = "";
    }
    if (
      object.followedByCount !== undefined &&
      object.followedByCount !== null
    ) {
      message.followedByCount = Number(object.followedByCount);
    } else {
      message.followedByCount = 0;
    }
    if (object.fbid !== undefined && object.fbid !== null) {
      message.fbid = String(object.fbid);
    } else {
      message.fbid = "";
    }
    if (object.followCount !== undefined && object.followCount !== null) {
      message.followCount = Number(object.followCount);
    } else {
      message.followCount = 0;
    }
    if (object.fullName !== undefined && object.fullName !== null) {
      message.fullName = String(object.fullName);
    } else {
      message.fullName = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (
      object.isBusinessAccount !== undefined &&
      object.isBusinessAccount !== null
    ) {
      message.isBusinessAccount = Boolean(object.isBusinessAccount);
    } else {
      message.isBusinessAccount = false;
    }
    if (
      object.isProfessionalAccount !== undefined &&
      object.isProfessionalAccount !== null
    ) {
      message.isProfessionalAccount = Boolean(object.isProfessionalAccount);
    } else {
      message.isProfessionalAccount = false;
    }
    if (
      object.isJoinedRecently !== undefined &&
      object.isJoinedRecently !== null
    ) {
      message.isJoinedRecently = Boolean(object.isJoinedRecently);
    } else {
      message.isJoinedRecently = false;
    }
    if (object.categoryName !== undefined && object.categoryName !== null) {
      message.categoryName = String(object.categoryName);
    } else {
      message.categoryName = "";
    }
    if (object.profilePicUrl !== undefined && object.profilePicUrl !== null) {
      message.profilePicUrl = String(object.profilePicUrl);
    } else {
      message.profilePicUrl = "";
    }
    if (
      object.profilePicUrlHd !== undefined &&
      object.profilePicUrlHd !== null
    ) {
      message.profilePicUrlHd = String(object.profilePicUrlHd);
    } else {
      message.profilePicUrlHd = "";
    }
    if (
      object.shouldShowCategory !== undefined &&
      object.shouldShowCategory !== null
    ) {
      message.shouldShowCategory = Boolean(object.shouldShowCategory);
    } else {
      message.shouldShowCategory = false;
    }
    if (object.bomberScore !== undefined && object.bomberScore !== null) {
      message.bomberScore = Number(object.bomberScore);
    } else {
      message.bomberScore = 0;
    }
    return message;
  },

  toJSON(message: User): unknown {
    const obj: any = {};
    message.username !== undefined && (obj.username = message.username);
    message.biography !== undefined && (obj.biography = message.biography);
    message.externalUrl !== undefined &&
      (obj.externalUrl = message.externalUrl);
    message.followedByCount !== undefined &&
      (obj.followedByCount = message.followedByCount);
    message.fbid !== undefined && (obj.fbid = message.fbid);
    message.followCount !== undefined &&
      (obj.followCount = message.followCount);
    message.fullName !== undefined && (obj.fullName = message.fullName);
    message.id !== undefined && (obj.id = message.id);
    message.isBusinessAccount !== undefined &&
      (obj.isBusinessAccount = message.isBusinessAccount);
    message.isProfessionalAccount !== undefined &&
      (obj.isProfessionalAccount = message.isProfessionalAccount);
    message.isJoinedRecently !== undefined &&
      (obj.isJoinedRecently = message.isJoinedRecently);
    message.categoryName !== undefined &&
      (obj.categoryName = message.categoryName);
    message.profilePicUrl !== undefined &&
      (obj.profilePicUrl = message.profilePicUrl);
    message.profilePicUrlHd !== undefined &&
      (obj.profilePicUrlHd = message.profilePicUrlHd);
    message.shouldShowCategory !== undefined &&
      (obj.shouldShowCategory = message.shouldShowCategory);
    message.bomberScore !== undefined &&
      (obj.bomberScore = message.bomberScore);
    return obj;
  },

  fromPartial(object: DeepPartial<User>): User {
    const message = { ...baseUser } as User;
    if (object.username !== undefined && object.username !== null) {
      message.username = object.username;
    } else {
      message.username = "";
    }
    if (object.biography !== undefined && object.biography !== null) {
      message.biography = object.biography;
    } else {
      message.biography = "";
    }
    if (object.externalUrl !== undefined && object.externalUrl !== null) {
      message.externalUrl = object.externalUrl;
    } else {
      message.externalUrl = "";
    }
    if (
      object.followedByCount !== undefined &&
      object.followedByCount !== null
    ) {
      message.followedByCount = object.followedByCount;
    } else {
      message.followedByCount = 0;
    }
    if (object.fbid !== undefined && object.fbid !== null) {
      message.fbid = object.fbid;
    } else {
      message.fbid = "";
    }
    if (object.followCount !== undefined && object.followCount !== null) {
      message.followCount = object.followCount;
    } else {
      message.followCount = 0;
    }
    if (object.fullName !== undefined && object.fullName !== null) {
      message.fullName = object.fullName;
    } else {
      message.fullName = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (
      object.isBusinessAccount !== undefined &&
      object.isBusinessAccount !== null
    ) {
      message.isBusinessAccount = object.isBusinessAccount;
    } else {
      message.isBusinessAccount = false;
    }
    if (
      object.isProfessionalAccount !== undefined &&
      object.isProfessionalAccount !== null
    ) {
      message.isProfessionalAccount = object.isProfessionalAccount;
    } else {
      message.isProfessionalAccount = false;
    }
    if (
      object.isJoinedRecently !== undefined &&
      object.isJoinedRecently !== null
    ) {
      message.isJoinedRecently = object.isJoinedRecently;
    } else {
      message.isJoinedRecently = false;
    }
    if (object.categoryName !== undefined && object.categoryName !== null) {
      message.categoryName = object.categoryName;
    } else {
      message.categoryName = "";
    }
    if (object.profilePicUrl !== undefined && object.profilePicUrl !== null) {
      message.profilePicUrl = object.profilePicUrl;
    } else {
      message.profilePicUrl = "";
    }
    if (
      object.profilePicUrlHd !== undefined &&
      object.profilePicUrlHd !== null
    ) {
      message.profilePicUrlHd = object.profilePicUrlHd;
    } else {
      message.profilePicUrlHd = "";
    }
    if (
      object.shouldShowCategory !== undefined &&
      object.shouldShowCategory !== null
    ) {
      message.shouldShowCategory = object.shouldShowCategory;
    } else {
      message.shouldShowCategory = false;
    }
    if (object.bomberScore !== undefined && object.bomberScore !== null) {
      message.bomberScore = object.bomberScore;
    } else {
      message.bomberScore = 0;
    }
    return message;
  },
};

const baseGetUserRequest: object = { id: "" };

export const GetUserRequest = {
  encode(
    message: GetUserRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUserRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetUserRequest } as GetUserRequest;
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

  fromJSON(object: any): GetUserRequest {
    const message = { ...baseGetUserRequest } as GetUserRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    return message;
  },

  toJSON(message: GetUserRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<GetUserRequest>): GetUserRequest {
    const message = { ...baseGetUserRequest } as GetUserRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    return message;
  },
};

const baseGetUsersByBomberScoreRequest: object = { score: 0 };

export const GetUsersByBomberScoreRequest = {
  encode(
    message: GetUsersByBomberScoreRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.score !== 0) {
      writer.uint32(8).uint32(message.score);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetUsersByBomberScoreRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetUsersByBomberScoreRequest,
    } as GetUsersByBomberScoreRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.score = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetUsersByBomberScoreRequest {
    const message = {
      ...baseGetUsersByBomberScoreRequest,
    } as GetUsersByBomberScoreRequest;
    if (object.score !== undefined && object.score !== null) {
      message.score = Number(object.score);
    } else {
      message.score = 0;
    }
    return message;
  },

  toJSON(message: GetUsersByBomberScoreRequest): unknown {
    const obj: any = {};
    message.score !== undefined && (obj.score = message.score);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetUsersByBomberScoreRequest>
  ): GetUsersByBomberScoreRequest {
    const message = {
      ...baseGetUsersByBomberScoreRequest,
    } as GetUsersByBomberScoreRequest;
    if (object.score !== undefined && object.score !== null) {
      message.score = object.score;
    } else {
      message.score = 0;
    }
    return message;
  },
};

const baseGetUsersByScore: object = { score: "", skip: 0, limit: 0 };

export const GetUsersByScore = {
  encode(
    message: GetUsersByScore,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.score !== "") {
      writer.uint32(10).string(message.score);
    }
    if (message.skip !== 0) {
      writer.uint32(16).uint32(message.skip);
    }
    if (message.limit !== 0) {
      writer.uint32(24).uint32(message.limit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUsersByScore {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetUsersByScore } as GetUsersByScore;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.score = reader.string();
          break;
        case 2:
          message.skip = reader.uint32();
          break;
        case 3:
          message.limit = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetUsersByScore {
    const message = { ...baseGetUsersByScore } as GetUsersByScore;
    if (object.score !== undefined && object.score !== null) {
      message.score = String(object.score);
    } else {
      message.score = "";
    }
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

  toJSON(message: GetUsersByScore): unknown {
    const obj: any = {};
    message.score !== undefined && (obj.score = message.score);
    message.skip !== undefined && (obj.skip = message.skip);
    message.limit !== undefined && (obj.limit = message.limit);
    return obj;
  },

  fromPartial(object: DeepPartial<GetUsersByScore>): GetUsersByScore {
    const message = { ...baseGetUsersByScore } as GetUsersByScore;
    if (object.score !== undefined && object.score !== null) {
      message.score = object.score;
    } else {
      message.score = "";
    }
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

const baseGetUsers: object = { skip: 0, limit: 0 };

export const GetUsers = {
  encode(
    message: GetUsers,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUsers {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetUsers } as GetUsers;
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

  fromJSON(object: any): GetUsers {
    const message = { ...baseGetUsers } as GetUsers;
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

  toJSON(message: GetUsers): unknown {
    const obj: any = {};
    message.skip !== undefined && (obj.skip = message.skip);
    message.limit !== undefined && (obj.limit = message.limit);
    return obj;
  },

  fromPartial(object: DeepPartial<GetUsers>): GetUsers {
    const message = { ...baseGetUsers } as GetUsers;
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

export const UserServiceService = {
  saveUser: {
    path: "/com.coreyauger.lovebomb.user.UserService/SaveUser",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: User) => Buffer.from(User.encode(value).finish()),
    requestDeserialize: (value: Buffer) => User.decode(value),
    responseSerialize: (value: google.protobuf.Empty) =>
      Buffer.from(value.serializeBinary()),
    responseDeserialize: (value: Buffer) =>
      google.protobuf.Empty.deserialize(value),
  },
} as const;

export interface UserServiceServer extends UntypedServiceImplementation {
  saveUser: handleUnaryCall<User, google.protobuf.Empty>;
}

export interface UserServiceClient extends Client {
  saveUser(
    request: User,
    callback: (
      error: ServiceError | null,
      response: google.protobuf.Empty
    ) => void
  ): ClientUnaryCall;
  saveUser(
    request: User,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: google.protobuf.Empty
    ) => void
  ): ClientUnaryCall;
  saveUser(
    request: User,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: google.protobuf.Empty
    ) => void
  ): ClientUnaryCall;
}

export const UserServiceClient = makeGenericClientConstructor(
  UserServiceService,
  "com.coreyauger.lovebomb.user.UserService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): UserServiceClient;
};

export const GetUsersServiceService = {
  updateUser: {
    path: "/com.coreyauger.lovebomb.user.GetUsersService/UpdateUser",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: User) => Buffer.from(User.encode(value).finish()),
    requestDeserialize: (value: Buffer) => User.decode(value),
    responseSerialize: (value: User) =>
      Buffer.from(User.encode(value).finish()),
    responseDeserialize: (value: Buffer) => User.decode(value),
  },
  getUser: {
    path: "/com.coreyauger.lovebomb.user.GetUsersService/GetUser",
    requestStream: false,
    responseStream: true,
    requestSerialize: (value: User) => Buffer.from(User.encode(value).finish()),
    requestDeserialize: (value: Buffer) => User.decode(value),
    responseSerialize: (value: User) =>
      Buffer.from(User.encode(value).finish()),
    responseDeserialize: (value: Buffer) => User.decode(value),
  },
} as const;

export interface GetUsersServiceServer extends UntypedServiceImplementation {
  updateUser: handleUnaryCall<User, User>;
  getUser: handleServerStreamingCall<User, User>;
}

export interface GetUsersServiceClient extends Client {
  updateUser(
    request: User,
    callback: (error: ServiceError | null, response: User) => void
  ): ClientUnaryCall;
  updateUser(
    request: User,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: User) => void
  ): ClientUnaryCall;
  updateUser(
    request: User,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: User) => void
  ): ClientUnaryCall;
  getUser(
    request: User,
    options?: Partial<CallOptions>
  ): ClientReadableStream<User>;
  getUser(
    request: User,
    metadata?: Metadata,
    options?: Partial<CallOptions>
  ): ClientReadableStream<User>;
}

export const GetUsersServiceClient = makeGenericClientConstructor(
  GetUsersServiceService,
  "com.coreyauger.lovebomb.user.GetUsersService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): GetUsersServiceClient;
};

export const GetUserByScoreServiceService = {
  updateUser: {
    path: "/com.coreyauger.lovebomb.user.GetUserByScoreService/UpdateUser",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: User) => Buffer.from(User.encode(value).finish()),
    requestDeserialize: (value: Buffer) => User.decode(value),
    responseSerialize: (value: User) =>
      Buffer.from(User.encode(value).finish()),
    responseDeserialize: (value: Buffer) => User.decode(value),
  },
  getUserByScore: {
    path: "/com.coreyauger.lovebomb.user.GetUserByScoreService/GetUserByScore",
    requestStream: false,
    responseStream: true,
    requestSerialize: (value: GetUsersByScore) =>
      Buffer.from(GetUsersByScore.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetUsersByScore.decode(value),
    responseSerialize: (value: User) =>
      Buffer.from(User.encode(value).finish()),
    responseDeserialize: (value: Buffer) => User.decode(value),
  },
} as const;

export interface GetUserByScoreServiceServer
  extends UntypedServiceImplementation {
  updateUser: handleUnaryCall<User, User>;
  getUserByScore: handleServerStreamingCall<GetUsersByScore, User>;
}

export interface GetUserByScoreServiceClient extends Client {
  updateUser(
    request: User,
    callback: (error: ServiceError | null, response: User) => void
  ): ClientUnaryCall;
  updateUser(
    request: User,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: User) => void
  ): ClientUnaryCall;
  updateUser(
    request: User,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: User) => void
  ): ClientUnaryCall;
  getUserByScore(
    request: GetUsersByScore,
    options?: Partial<CallOptions>
  ): ClientReadableStream<User>;
  getUserByScore(
    request: GetUsersByScore,
    metadata?: Metadata,
    options?: Partial<CallOptions>
  ): ClientReadableStream<User>;
}

export const GetUserByScoreServiceClient = makeGenericClientConstructor(
  GetUserByScoreServiceService,
  "com.coreyauger.lovebomb.user.GetUserByScoreService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): GetUserByScoreServiceClient;
};

export const AllUsersServiceService = {
  updateUser: {
    path: "/com.coreyauger.lovebomb.user.AllUsersService/UpdateUser",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: User) => Buffer.from(User.encode(value).finish()),
    requestDeserialize: (value: Buffer) => User.decode(value),
    responseSerialize: (value: User) =>
      Buffer.from(User.encode(value).finish()),
    responseDeserialize: (value: Buffer) => User.decode(value),
  },
  getAllUsers: {
    path: "/com.coreyauger.lovebomb.user.AllUsersService/GetAllUsers",
    requestStream: false,
    responseStream: true,
    requestSerialize: (value: GetUsers) =>
      Buffer.from(GetUsers.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetUsers.decode(value),
    responseSerialize: (value: User) =>
      Buffer.from(User.encode(value).finish()),
    responseDeserialize: (value: Buffer) => User.decode(value),
  },
} as const;

export interface AllUsersServiceServer extends UntypedServiceImplementation {
  updateUser: handleUnaryCall<User, User>;
  getAllUsers: handleServerStreamingCall<GetUsers, User>;
}

export interface AllUsersServiceClient extends Client {
  updateUser(
    request: User,
    callback: (error: ServiceError | null, response: User) => void
  ): ClientUnaryCall;
  updateUser(
    request: User,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: User) => void
  ): ClientUnaryCall;
  updateUser(
    request: User,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: User) => void
  ): ClientUnaryCall;
  getAllUsers(
    request: GetUsers,
    options?: Partial<CallOptions>
  ): ClientReadableStream<User>;
  getAllUsers(
    request: GetUsers,
    metadata?: Metadata,
    options?: Partial<CallOptions>
  ): ClientReadableStream<User>;
}

export const AllUsersServiceClient = makeGenericClientConstructor(
  AllUsersServiceService,
  "com.coreyauger.lovebomb.user.AllUsersService"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): AllUsersServiceClient;
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
