"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllUsersServiceClient = exports.AllUsersServiceService = exports.GetUserByScoreServiceClient = exports.GetUserByScoreServiceService = exports.GetUsersServiceClient = exports.GetUsersServiceService = exports.UserServiceClient = exports.UserServiceService = exports.GetUsers = exports.GetUsersByScore = exports.GetUsersByBomberScoreRequest = exports.GetUserRequest = exports.User = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var grpc_js_1 = require("@grpc/grpc-js");
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var empty_1 = require("../google/protobuf/empty");
exports.protobufPackage = "com.coreyauger.lovebomb.user";
var baseUser = {
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
exports.User = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseUser);
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        var message = __assign({}, baseUser);
        if (object.username !== undefined && object.username !== null) {
            message.username = String(object.username);
        }
        else {
            message.username = "";
        }
        if (object.biography !== undefined && object.biography !== null) {
            message.biography = String(object.biography);
        }
        else {
            message.biography = "";
        }
        if (object.externalUrl !== undefined && object.externalUrl !== null) {
            message.externalUrl = String(object.externalUrl);
        }
        else {
            message.externalUrl = "";
        }
        if (object.followedByCount !== undefined &&
            object.followedByCount !== null) {
            message.followedByCount = Number(object.followedByCount);
        }
        else {
            message.followedByCount = 0;
        }
        if (object.fbid !== undefined && object.fbid !== null) {
            message.fbid = String(object.fbid);
        }
        else {
            message.fbid = "";
        }
        if (object.followCount !== undefined && object.followCount !== null) {
            message.followCount = Number(object.followCount);
        }
        else {
            message.followCount = 0;
        }
        if (object.fullName !== undefined && object.fullName !== null) {
            message.fullName = String(object.fullName);
        }
        else {
            message.fullName = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = "";
        }
        if (object.isBusinessAccount !== undefined &&
            object.isBusinessAccount !== null) {
            message.isBusinessAccount = Boolean(object.isBusinessAccount);
        }
        else {
            message.isBusinessAccount = false;
        }
        if (object.isProfessionalAccount !== undefined &&
            object.isProfessionalAccount !== null) {
            message.isProfessionalAccount = Boolean(object.isProfessionalAccount);
        }
        else {
            message.isProfessionalAccount = false;
        }
        if (object.isJoinedRecently !== undefined &&
            object.isJoinedRecently !== null) {
            message.isJoinedRecently = Boolean(object.isJoinedRecently);
        }
        else {
            message.isJoinedRecently = false;
        }
        if (object.categoryName !== undefined && object.categoryName !== null) {
            message.categoryName = String(object.categoryName);
        }
        else {
            message.categoryName = "";
        }
        if (object.profilePicUrl !== undefined && object.profilePicUrl !== null) {
            message.profilePicUrl = String(object.profilePicUrl);
        }
        else {
            message.profilePicUrl = "";
        }
        if (object.profilePicUrlHd !== undefined &&
            object.profilePicUrlHd !== null) {
            message.profilePicUrlHd = String(object.profilePicUrlHd);
        }
        else {
            message.profilePicUrlHd = "";
        }
        if (object.shouldShowCategory !== undefined &&
            object.shouldShowCategory !== null) {
            message.shouldShowCategory = Boolean(object.shouldShowCategory);
        }
        else {
            message.shouldShowCategory = false;
        }
        if (object.bomberScore !== undefined && object.bomberScore !== null) {
            message.bomberScore = Number(object.bomberScore);
        }
        else {
            message.bomberScore = 0;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
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
    fromPartial: function (object) {
        var message = __assign({}, baseUser);
        if (object.username !== undefined && object.username !== null) {
            message.username = object.username;
        }
        else {
            message.username = "";
        }
        if (object.biography !== undefined && object.biography !== null) {
            message.biography = object.biography;
        }
        else {
            message.biography = "";
        }
        if (object.externalUrl !== undefined && object.externalUrl !== null) {
            message.externalUrl = object.externalUrl;
        }
        else {
            message.externalUrl = "";
        }
        if (object.followedByCount !== undefined &&
            object.followedByCount !== null) {
            message.followedByCount = object.followedByCount;
        }
        else {
            message.followedByCount = 0;
        }
        if (object.fbid !== undefined && object.fbid !== null) {
            message.fbid = object.fbid;
        }
        else {
            message.fbid = "";
        }
        if (object.followCount !== undefined && object.followCount !== null) {
            message.followCount = object.followCount;
        }
        else {
            message.followCount = 0;
        }
        if (object.fullName !== undefined && object.fullName !== null) {
            message.fullName = object.fullName;
        }
        else {
            message.fullName = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = "";
        }
        if (object.isBusinessAccount !== undefined &&
            object.isBusinessAccount !== null) {
            message.isBusinessAccount = object.isBusinessAccount;
        }
        else {
            message.isBusinessAccount = false;
        }
        if (object.isProfessionalAccount !== undefined &&
            object.isProfessionalAccount !== null) {
            message.isProfessionalAccount = object.isProfessionalAccount;
        }
        else {
            message.isProfessionalAccount = false;
        }
        if (object.isJoinedRecently !== undefined &&
            object.isJoinedRecently !== null) {
            message.isJoinedRecently = object.isJoinedRecently;
        }
        else {
            message.isJoinedRecently = false;
        }
        if (object.categoryName !== undefined && object.categoryName !== null) {
            message.categoryName = object.categoryName;
        }
        else {
            message.categoryName = "";
        }
        if (object.profilePicUrl !== undefined && object.profilePicUrl !== null) {
            message.profilePicUrl = object.profilePicUrl;
        }
        else {
            message.profilePicUrl = "";
        }
        if (object.profilePicUrlHd !== undefined &&
            object.profilePicUrlHd !== null) {
            message.profilePicUrlHd = object.profilePicUrlHd;
        }
        else {
            message.profilePicUrlHd = "";
        }
        if (object.shouldShowCategory !== undefined &&
            object.shouldShowCategory !== null) {
            message.shouldShowCategory = object.shouldShowCategory;
        }
        else {
            message.shouldShowCategory = false;
        }
        if (object.bomberScore !== undefined && object.bomberScore !== null) {
            message.bomberScore = object.bomberScore;
        }
        else {
            message.bomberScore = 0;
        }
        return message;
    },
};
var baseGetUserRequest = { id: "" };
exports.GetUserRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseGetUserRequest);
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        var message = __assign({}, baseGetUserRequest);
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = "";
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseGetUserRequest);
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = "";
        }
        return message;
    },
};
var baseGetUsersByBomberScoreRequest = { score: 0 };
exports.GetUsersByBomberScoreRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.score !== 0) {
            writer.uint32(8).uint32(message.score);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseGetUsersByBomberScoreRequest);
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        var message = __assign({}, baseGetUsersByBomberScoreRequest);
        if (object.score !== undefined && object.score !== null) {
            message.score = Number(object.score);
        }
        else {
            message.score = 0;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.score !== undefined && (obj.score = message.score);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseGetUsersByBomberScoreRequest);
        if (object.score !== undefined && object.score !== null) {
            message.score = object.score;
        }
        else {
            message.score = 0;
        }
        return message;
    },
};
var baseGetUsersByScore = { score: "", skip: 0, limit: 0 };
exports.GetUsersByScore = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseGetUsersByScore);
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        var message = __assign({}, baseGetUsersByScore);
        if (object.score !== undefined && object.score !== null) {
            message.score = String(object.score);
        }
        else {
            message.score = "";
        }
        if (object.skip !== undefined && object.skip !== null) {
            message.skip = Number(object.skip);
        }
        else {
            message.skip = 0;
        }
        if (object.limit !== undefined && object.limit !== null) {
            message.limit = Number(object.limit);
        }
        else {
            message.limit = 0;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.score !== undefined && (obj.score = message.score);
        message.skip !== undefined && (obj.skip = message.skip);
        message.limit !== undefined && (obj.limit = message.limit);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseGetUsersByScore);
        if (object.score !== undefined && object.score !== null) {
            message.score = object.score;
        }
        else {
            message.score = "";
        }
        if (object.skip !== undefined && object.skip !== null) {
            message.skip = object.skip;
        }
        else {
            message.skip = 0;
        }
        if (object.limit !== undefined && object.limit !== null) {
            message.limit = object.limit;
        }
        else {
            message.limit = 0;
        }
        return message;
    },
};
var baseGetUsers = { skip: 0, limit: 0 };
exports.GetUsers = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.skip !== 0) {
            writer.uint32(8).uint32(message.skip);
        }
        if (message.limit !== 0) {
            writer.uint32(16).uint32(message.limit);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseGetUsers);
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        var message = __assign({}, baseGetUsers);
        if (object.skip !== undefined && object.skip !== null) {
            message.skip = Number(object.skip);
        }
        else {
            message.skip = 0;
        }
        if (object.limit !== undefined && object.limit !== null) {
            message.limit = Number(object.limit);
        }
        else {
            message.limit = 0;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.skip !== undefined && (obj.skip = message.skip);
        message.limit !== undefined && (obj.limit = message.limit);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseGetUsers);
        if (object.skip !== undefined && object.skip !== null) {
            message.skip = object.skip;
        }
        else {
            message.skip = 0;
        }
        if (object.limit !== undefined && object.limit !== null) {
            message.limit = object.limit;
        }
        else {
            message.limit = 0;
        }
        return message;
    },
};
exports.UserServiceService = {
    saveUser: {
        path: "/com.coreyauger.lovebomb.user.UserService/SaveUser",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) { return Buffer.from(exports.User.encode(value).finish()); },
        requestDeserialize: function (value) { return exports.User.decode(value); },
        responseSerialize: function (value) {
            return Buffer.from(value.serializeBinary());
        },
        responseDeserialize: function (value) {
            return empty_1.google.protobuf.Empty.deserialize(value);
        },
    },
};
exports.UserServiceClient = grpc_js_1.makeGenericClientConstructor(exports.UserServiceService, "com.coreyauger.lovebomb.user.UserService");
exports.GetUsersServiceService = {
    updateUser: {
        path: "/com.coreyauger.lovebomb.user.GetUsersService/UpdateUser",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) { return Buffer.from(exports.User.encode(value).finish()); },
        requestDeserialize: function (value) { return exports.User.decode(value); },
        responseSerialize: function (value) {
            return Buffer.from(exports.User.encode(value).finish());
        },
        responseDeserialize: function (value) { return exports.User.decode(value); },
    },
    getUser: {
        path: "/com.coreyauger.lovebomb.user.GetUsersService/GetUser",
        requestStream: false,
        responseStream: true,
        requestSerialize: function (value) { return Buffer.from(exports.User.encode(value).finish()); },
        requestDeserialize: function (value) { return exports.User.decode(value); },
        responseSerialize: function (value) {
            return Buffer.from(exports.User.encode(value).finish());
        },
        responseDeserialize: function (value) { return exports.User.decode(value); },
    },
};
exports.GetUsersServiceClient = grpc_js_1.makeGenericClientConstructor(exports.GetUsersServiceService, "com.coreyauger.lovebomb.user.GetUsersService");
exports.GetUserByScoreServiceService = {
    updateUser: {
        path: "/com.coreyauger.lovebomb.user.GetUserByScoreService/UpdateUser",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) { return Buffer.from(exports.User.encode(value).finish()); },
        requestDeserialize: function (value) { return exports.User.decode(value); },
        responseSerialize: function (value) {
            return Buffer.from(exports.User.encode(value).finish());
        },
        responseDeserialize: function (value) { return exports.User.decode(value); },
    },
    getUserByScore: {
        path: "/com.coreyauger.lovebomb.user.GetUserByScoreService/GetUserByScore",
        requestStream: false,
        responseStream: true,
        requestSerialize: function (value) {
            return Buffer.from(exports.GetUsersByScore.encode(value).finish());
        },
        requestDeserialize: function (value) { return exports.GetUsersByScore.decode(value); },
        responseSerialize: function (value) {
            return Buffer.from(exports.User.encode(value).finish());
        },
        responseDeserialize: function (value) { return exports.User.decode(value); },
    },
};
exports.GetUserByScoreServiceClient = grpc_js_1.makeGenericClientConstructor(exports.GetUserByScoreServiceService, "com.coreyauger.lovebomb.user.GetUserByScoreService");
exports.AllUsersServiceService = {
    updateUser: {
        path: "/com.coreyauger.lovebomb.user.AllUsersService/UpdateUser",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) { return Buffer.from(exports.User.encode(value).finish()); },
        requestDeserialize: function (value) { return exports.User.decode(value); },
        responseSerialize: function (value) {
            return Buffer.from(exports.User.encode(value).finish());
        },
        responseDeserialize: function (value) { return exports.User.decode(value); },
    },
    getAllUsers: {
        path: "/com.coreyauger.lovebomb.user.AllUsersService/GetAllUsers",
        requestStream: false,
        responseStream: true,
        requestSerialize: function (value) {
            return Buffer.from(exports.GetUsers.encode(value).finish());
        },
        requestDeserialize: function (value) { return exports.GetUsers.decode(value); },
        responseSerialize: function (value) {
            return Buffer.from(exports.User.encode(value).finish());
        },
        responseDeserialize: function (value) { return exports.User.decode(value); },
    },
};
exports.AllUsersServiceClient = grpc_js_1.makeGenericClientConstructor(exports.AllUsersServiceService, "com.coreyauger.lovebomb.user.AllUsersService");
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
//# sourceMappingURL=user-service.js.map