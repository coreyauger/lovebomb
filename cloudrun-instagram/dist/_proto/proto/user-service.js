"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.com = void 0;
var pb_1 = __importStar(require("google-protobuf"));
var grpc_1 = __importStar(require("@grpc/grpc-js"));
var com;
(function (com) {
    var coreyauger;
    (function (coreyauger) {
        var lovebomb;
        (function (lovebomb) {
            var user;
            (function (user) {
                var User = /** @class */ (function (_super) {
                    __extends(User, _super);
                    function User(data) {
                        var _this = _super.call(this) || this;
                        pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], []);
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("username" in data && data.username != undefined) {
                                _this.username = data.username;
                            }
                            if ("biography" in data && data.biography != undefined) {
                                _this.biography = data.biography;
                            }
                            if ("external_url" in data && data.external_url != undefined) {
                                _this.external_url = data.external_url;
                            }
                            if ("followed_by_count" in data && data.followed_by_count != undefined) {
                                _this.followed_by_count = data.followed_by_count;
                            }
                            if ("fbid" in data && data.fbid != undefined) {
                                _this.fbid = data.fbid;
                            }
                            if ("follow_count" in data && data.follow_count != undefined) {
                                _this.follow_count = data.follow_count;
                            }
                            if ("full_name" in data && data.full_name != undefined) {
                                _this.full_name = data.full_name;
                            }
                            if ("id" in data && data.id != undefined) {
                                _this.id = data.id;
                            }
                            if ("is_business_account" in data && data.is_business_account != undefined) {
                                _this.is_business_account = data.is_business_account;
                            }
                            if ("is_professional_account" in data && data.is_professional_account != undefined) {
                                _this.is_professional_account = data.is_professional_account;
                            }
                            if ("is_joined_recently" in data && data.is_joined_recently != undefined) {
                                _this.is_joined_recently = data.is_joined_recently;
                            }
                            if ("category_name" in data && data.category_name != undefined) {
                                _this.category_name = data.category_name;
                            }
                            if ("profile_pic_url" in data && data.profile_pic_url != undefined) {
                                _this.profile_pic_url = data.profile_pic_url;
                            }
                            if ("profile_pic_url_hd" in data && data.profile_pic_url_hd != undefined) {
                                _this.profile_pic_url_hd = data.profile_pic_url_hd;
                            }
                            if ("should_show_category" in data && data.should_show_category != undefined) {
                                _this.should_show_category = data.should_show_category;
                            }
                            if ("bomber_score" in data && data.bomber_score != undefined) {
                                _this.bomber_score = data.bomber_score;
                            }
                        }
                        return _this;
                    }
                    Object.defineProperty(User.prototype, "username", {
                        get: function () {
                            return pb_1.Message.getField(this, 1);
                        },
                        set: function (value) {
                            pb_1.Message.setField(this, 1, value);
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(User.prototype, "biography", {
                        get: function () {
                            return pb_1.Message.getField(this, 11);
                        },
                        set: function (value) {
                            pb_1.Message.setField(this, 11, value);
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(User.prototype, "external_url", {
                        get: function () {
                            return pb_1.Message.getField(this, 12);
                        },
                        set: function (value) {
                            pb_1.Message.setField(this, 12, value);
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(User.prototype, "followed_by_count", {
                        get: function () {
                            return pb_1.Message.getField(this, 13);
                        },
                        set: function (value) {
                            pb_1.Message.setField(this, 13, value);
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(User.prototype, "fbid", {
                        get: function () {
                            return pb_1.Message.getField(this, 14);
                        },
                        set: function (value) {
                            pb_1.Message.setField(this, 14, value);
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(User.prototype, "follow_count", {
                        get: function () {
                            return pb_1.Message.getField(this, 15);
                        },
                        set: function (value) {
                            pb_1.Message.setField(this, 15, value);
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(User.prototype, "full_name", {
                        get: function () {
                            return pb_1.Message.getField(this, 16);
                        },
                        set: function (value) {
                            pb_1.Message.setField(this, 16, value);
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(User.prototype, "id", {
                        get: function () {
                            return pb_1.Message.getField(this, 17);
                        },
                        set: function (value) {
                            pb_1.Message.setField(this, 17, value);
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(User.prototype, "is_business_account", {
                        get: function () {
                            return pb_1.Message.getField(this, 18);
                        },
                        set: function (value) {
                            pb_1.Message.setField(this, 18, value);
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(User.prototype, "is_professional_account", {
                        get: function () {
                            return pb_1.Message.getField(this, 19);
                        },
                        set: function (value) {
                            pb_1.Message.setField(this, 19, value);
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(User.prototype, "is_joined_recently", {
                        get: function () {
                            return pb_1.Message.getField(this, 20);
                        },
                        set: function (value) {
                            pb_1.Message.setField(this, 20, value);
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(User.prototype, "category_name", {
                        get: function () {
                            return pb_1.Message.getField(this, 21);
                        },
                        set: function (value) {
                            pb_1.Message.setField(this, 21, value);
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(User.prototype, "profile_pic_url", {
                        get: function () {
                            return pb_1.Message.getField(this, 22);
                        },
                        set: function (value) {
                            pb_1.Message.setField(this, 22, value);
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(User.prototype, "profile_pic_url_hd", {
                        get: function () {
                            return pb_1.Message.getField(this, 23);
                        },
                        set: function (value) {
                            pb_1.Message.setField(this, 23, value);
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(User.prototype, "should_show_category", {
                        get: function () {
                            return pb_1.Message.getField(this, 24);
                        },
                        set: function (value) {
                            pb_1.Message.setField(this, 24, value);
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(User.prototype, "bomber_score", {
                        get: function () {
                            return pb_1.Message.getField(this, 25);
                        },
                        set: function (value) {
                            pb_1.Message.setField(this, 25, value);
                        },
                        enumerable: false,
                        configurable: true
                    });
                    User.prototype.toObject = function () {
                        var data = {};
                        if (this.username != null) {
                            data.username = this.username;
                        }
                        if (this.biography != null) {
                            data.biography = this.biography;
                        }
                        if (this.external_url != null) {
                            data.external_url = this.external_url;
                        }
                        if (this.followed_by_count != null) {
                            data.followed_by_count = this.followed_by_count;
                        }
                        if (this.fbid != null) {
                            data.fbid = this.fbid;
                        }
                        if (this.follow_count != null) {
                            data.follow_count = this.follow_count;
                        }
                        if (this.full_name != null) {
                            data.full_name = this.full_name;
                        }
                        if (this.id != null) {
                            data.id = this.id;
                        }
                        if (this.is_business_account != null) {
                            data.is_business_account = this.is_business_account;
                        }
                        if (this.is_professional_account != null) {
                            data.is_professional_account = this.is_professional_account;
                        }
                        if (this.is_joined_recently != null) {
                            data.is_joined_recently = this.is_joined_recently;
                        }
                        if (this.category_name != null) {
                            data.category_name = this.category_name;
                        }
                        if (this.profile_pic_url != null) {
                            data.profile_pic_url = this.profile_pic_url;
                        }
                        if (this.profile_pic_url_hd != null) {
                            data.profile_pic_url_hd = this.profile_pic_url_hd;
                        }
                        if (this.should_show_category != null) {
                            data.should_show_category = this.should_show_category;
                        }
                        if (this.bomber_score != null) {
                            data.bomber_score = this.bomber_score;
                        }
                        return data;
                    };
                    User.prototype.serialize = function (w) {
                        var writer = w || new pb_1.BinaryWriter();
                        if (typeof this.username === "string" && this.username.length)
                            writer.writeString(1, this.username);
                        if (typeof this.biography === "string" && this.biography.length)
                            writer.writeString(11, this.biography);
                        if (typeof this.external_url === "string" && this.external_url.length)
                            writer.writeString(12, this.external_url);
                        if (this.followed_by_count !== undefined)
                            writer.writeUint32(13, this.followed_by_count);
                        if (typeof this.fbid === "string" && this.fbid.length)
                            writer.writeString(14, this.fbid);
                        if (this.follow_count !== undefined)
                            writer.writeUint32(15, this.follow_count);
                        if (typeof this.full_name === "string" && this.full_name.length)
                            writer.writeString(16, this.full_name);
                        if (typeof this.id === "string" && this.id.length)
                            writer.writeString(17, this.id);
                        if (this.is_business_account !== undefined)
                            writer.writeBool(18, this.is_business_account);
                        if (this.is_professional_account !== undefined)
                            writer.writeBool(19, this.is_professional_account);
                        if (this.is_joined_recently !== undefined)
                            writer.writeBool(20, this.is_joined_recently);
                        if (typeof this.category_name === "string" && this.category_name.length)
                            writer.writeString(21, this.category_name);
                        if (typeof this.profile_pic_url === "string" && this.profile_pic_url.length)
                            writer.writeString(22, this.profile_pic_url);
                        if (typeof this.profile_pic_url_hd === "string" && this.profile_pic_url_hd.length)
                            writer.writeString(23, this.profile_pic_url_hd);
                        if (this.should_show_category !== undefined)
                            writer.writeBool(24, this.should_show_category);
                        if (this.bomber_score !== undefined)
                            writer.writeUint32(25, this.bomber_score);
                        if (!w)
                            return writer.getResultBuffer();
                    };
                    User.deserialize = function (bytes) {
                        var reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new User();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    message.username = reader.readString();
                                    break;
                                case 11:
                                    message.biography = reader.readString();
                                    break;
                                case 12:
                                    message.external_url = reader.readString();
                                    break;
                                case 13:
                                    message.followed_by_count = reader.readUint32();
                                    break;
                                case 14:
                                    message.fbid = reader.readString();
                                    break;
                                case 15:
                                    message.follow_count = reader.readUint32();
                                    break;
                                case 16:
                                    message.full_name = reader.readString();
                                    break;
                                case 17:
                                    message.id = reader.readString();
                                    break;
                                case 18:
                                    message.is_business_account = reader.readBool();
                                    break;
                                case 19:
                                    message.is_professional_account = reader.readBool();
                                    break;
                                case 20:
                                    message.is_joined_recently = reader.readBool();
                                    break;
                                case 21:
                                    message.category_name = reader.readString();
                                    break;
                                case 22:
                                    message.profile_pic_url = reader.readString();
                                    break;
                                case 23:
                                    message.profile_pic_url_hd = reader.readString();
                                    break;
                                case 24:
                                    message.should_show_category = reader.readBool();
                                    break;
                                case 25:
                                    message.bomber_score = reader.readUint32();
                                    break;
                                default: reader.skipField();
                            }
                        }
                        return message;
                    };
                    User.prototype.serializeBinary = function () {
                        return this.serialize();
                    };
                    User.deserializeBinary = function (bytes) {
                        return User.deserialize(bytes);
                    };
                    return User;
                }(pb_1.Message));
                user.User = User;
                var GetUserRequest = /** @class */ (function (_super) {
                    __extends(GetUserRequest, _super);
                    function GetUserRequest(data) {
                        var _this = _super.call(this) || this;
                        pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], []);
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("id" in data && data.id != undefined) {
                                _this.id = data.id;
                            }
                        }
                        return _this;
                    }
                    Object.defineProperty(GetUserRequest.prototype, "id", {
                        get: function () {
                            return pb_1.Message.getField(this, 1);
                        },
                        set: function (value) {
                            pb_1.Message.setField(this, 1, value);
                        },
                        enumerable: false,
                        configurable: true
                    });
                    GetUserRequest.prototype.toObject = function () {
                        var data = {};
                        if (this.id != null) {
                            data.id = this.id;
                        }
                        return data;
                    };
                    GetUserRequest.prototype.serialize = function (w) {
                        var writer = w || new pb_1.BinaryWriter();
                        if (typeof this.id === "string" && this.id.length)
                            writer.writeString(1, this.id);
                        if (!w)
                            return writer.getResultBuffer();
                    };
                    GetUserRequest.deserialize = function (bytes) {
                        var reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new GetUserRequest();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    message.id = reader.readString();
                                    break;
                                default: reader.skipField();
                            }
                        }
                        return message;
                    };
                    GetUserRequest.prototype.serializeBinary = function () {
                        return this.serialize();
                    };
                    GetUserRequest.deserializeBinary = function (bytes) {
                        return GetUserRequest.deserialize(bytes);
                    };
                    return GetUserRequest;
                }(pb_1.Message));
                user.GetUserRequest = GetUserRequest;
                var GetUsersByBomberScoreRequest = /** @class */ (function (_super) {
                    __extends(GetUsersByBomberScoreRequest, _super);
                    function GetUsersByBomberScoreRequest(data) {
                        var _this = _super.call(this) || this;
                        pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], []);
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("score" in data && data.score != undefined) {
                                _this.score = data.score;
                            }
                        }
                        return _this;
                    }
                    Object.defineProperty(GetUsersByBomberScoreRequest.prototype, "score", {
                        get: function () {
                            return pb_1.Message.getField(this, 1);
                        },
                        set: function (value) {
                            pb_1.Message.setField(this, 1, value);
                        },
                        enumerable: false,
                        configurable: true
                    });
                    GetUsersByBomberScoreRequest.prototype.toObject = function () {
                        var data = {};
                        if (this.score != null) {
                            data.score = this.score;
                        }
                        return data;
                    };
                    GetUsersByBomberScoreRequest.prototype.serialize = function (w) {
                        var writer = w || new pb_1.BinaryWriter();
                        if (this.score !== undefined)
                            writer.writeUint32(1, this.score);
                        if (!w)
                            return writer.getResultBuffer();
                    };
                    GetUsersByBomberScoreRequest.deserialize = function (bytes) {
                        var reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new GetUsersByBomberScoreRequest();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    message.score = reader.readUint32();
                                    break;
                                default: reader.skipField();
                            }
                        }
                        return message;
                    };
                    GetUsersByBomberScoreRequest.prototype.serializeBinary = function () {
                        return this.serialize();
                    };
                    GetUsersByBomberScoreRequest.deserializeBinary = function (bytes) {
                        return GetUsersByBomberScoreRequest.deserialize(bytes);
                    };
                    return GetUsersByBomberScoreRequest;
                }(pb_1.Message));
                user.GetUsersByBomberScoreRequest = GetUsersByBomberScoreRequest;
                var GetUsersByScore = /** @class */ (function (_super) {
                    __extends(GetUsersByScore, _super);
                    function GetUsersByScore(data) {
                        var _this = _super.call(this) || this;
                        pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], []);
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("score" in data && data.score != undefined) {
                                _this.score = data.score;
                            }
                            if ("skip" in data && data.skip != undefined) {
                                _this.skip = data.skip;
                            }
                            if ("limit" in data && data.limit != undefined) {
                                _this.limit = data.limit;
                            }
                        }
                        return _this;
                    }
                    Object.defineProperty(GetUsersByScore.prototype, "score", {
                        get: function () {
                            return pb_1.Message.getField(this, 1);
                        },
                        set: function (value) {
                            pb_1.Message.setField(this, 1, value);
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(GetUsersByScore.prototype, "skip", {
                        get: function () {
                            return pb_1.Message.getField(this, 2);
                        },
                        set: function (value) {
                            pb_1.Message.setField(this, 2, value);
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(GetUsersByScore.prototype, "limit", {
                        get: function () {
                            return pb_1.Message.getField(this, 3);
                        },
                        set: function (value) {
                            pb_1.Message.setField(this, 3, value);
                        },
                        enumerable: false,
                        configurable: true
                    });
                    GetUsersByScore.prototype.toObject = function () {
                        var data = {};
                        if (this.score != null) {
                            data.score = this.score;
                        }
                        if (this.skip != null) {
                            data.skip = this.skip;
                        }
                        if (this.limit != null) {
                            data.limit = this.limit;
                        }
                        return data;
                    };
                    GetUsersByScore.prototype.serialize = function (w) {
                        var writer = w || new pb_1.BinaryWriter();
                        if (typeof this.score === "string" && this.score.length)
                            writer.writeString(1, this.score);
                        if (this.skip !== undefined)
                            writer.writeUint32(2, this.skip);
                        if (this.limit !== undefined)
                            writer.writeUint32(3, this.limit);
                        if (!w)
                            return writer.getResultBuffer();
                    };
                    GetUsersByScore.deserialize = function (bytes) {
                        var reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new GetUsersByScore();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    message.score = reader.readString();
                                    break;
                                case 2:
                                    message.skip = reader.readUint32();
                                    break;
                                case 3:
                                    message.limit = reader.readUint32();
                                    break;
                                default: reader.skipField();
                            }
                        }
                        return message;
                    };
                    GetUsersByScore.prototype.serializeBinary = function () {
                        return this.serialize();
                    };
                    GetUsersByScore.deserializeBinary = function (bytes) {
                        return GetUsersByScore.deserialize(bytes);
                    };
                    return GetUsersByScore;
                }(pb_1.Message));
                user.GetUsersByScore = GetUsersByScore;
                var GetUsers = /** @class */ (function (_super) {
                    __extends(GetUsers, _super);
                    function GetUsers(data) {
                        var _this = _super.call(this) || this;
                        pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], []);
                        if (!Array.isArray(data) && typeof data == "object") {
                            if ("skip" in data && data.skip != undefined) {
                                _this.skip = data.skip;
                            }
                            if ("limit" in data && data.limit != undefined) {
                                _this.limit = data.limit;
                            }
                        }
                        return _this;
                    }
                    Object.defineProperty(GetUsers.prototype, "skip", {
                        get: function () {
                            return pb_1.Message.getField(this, 1);
                        },
                        set: function (value) {
                            pb_1.Message.setField(this, 1, value);
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(GetUsers.prototype, "limit", {
                        get: function () {
                            return pb_1.Message.getField(this, 2);
                        },
                        set: function (value) {
                            pb_1.Message.setField(this, 2, value);
                        },
                        enumerable: false,
                        configurable: true
                    });
                    GetUsers.prototype.toObject = function () {
                        var data = {};
                        if (this.skip != null) {
                            data.skip = this.skip;
                        }
                        if (this.limit != null) {
                            data.limit = this.limit;
                        }
                        return data;
                    };
                    GetUsers.prototype.serialize = function (w) {
                        var writer = w || new pb_1.BinaryWriter();
                        if (this.skip !== undefined)
                            writer.writeUint32(1, this.skip);
                        if (this.limit !== undefined)
                            writer.writeUint32(2, this.limit);
                        if (!w)
                            return writer.getResultBuffer();
                    };
                    GetUsers.deserialize = function (bytes) {
                        var reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new GetUsers();
                        while (reader.nextField()) {
                            if (reader.isEndGroup())
                                break;
                            switch (reader.getFieldNumber()) {
                                case 1:
                                    message.skip = reader.readUint32();
                                    break;
                                case 2:
                                    message.limit = reader.readUint32();
                                    break;
                                default: reader.skipField();
                            }
                        }
                        return message;
                    };
                    GetUsers.prototype.serializeBinary = function () {
                        return this.serialize();
                    };
                    GetUsers.deserializeBinary = function (bytes) {
                        return GetUsers.deserialize(bytes);
                    };
                    return GetUsers;
                }(pb_1.Message));
                user.GetUsers = GetUsers;
                user.UserService = {
                    SaveUser: {
                        path: "/com.coreyauger.lovebomb.user.UserService/SaveUser",
                        requestStream: false,
                        responseStream: false,
                        requestSerialize: function (message) { return Buffer.from(message.serialize()); },
                        requestDeserialize: function (bytes) { return User.deserialize(new Uint8Array(bytes)); },
                        responseSerialize: function (message) { return Buffer.from(message.serialize()); },
                        responseDeserialize: function (bytes) { return google.protobuf.Empty.deserialize(new Uint8Array(bytes)); }
                    }
                };
                var UserServiceClient = /** @class */ (function (_super) {
                    __extends(UserServiceClient, _super);
                    function UserServiceClient(address, credentials, options) {
                        return _super.call(this, address, credentials, options) || this;
                    }
                    return UserServiceClient;
                }(grpc_1.makeGenericClientConstructor(user.UserService, "UserService", {})));
                user.UserServiceClient = UserServiceClient;
                user.GetUsersService = {
                    UpdateUser: {
                        path: "/com.coreyauger.lovebomb.user.GetUsersService/UpdateUser",
                        requestStream: false,
                        responseStream: false,
                        requestSerialize: function (message) { return Buffer.from(message.serialize()); },
                        requestDeserialize: function (bytes) { return User.deserialize(new Uint8Array(bytes)); },
                        responseSerialize: function (message) { return Buffer.from(message.serialize()); },
                        responseDeserialize: function (bytes) { return User.deserialize(new Uint8Array(bytes)); }
                    },
                    GetUser: {
                        path: "/com.coreyauger.lovebomb.user.GetUsersService/GetUser",
                        requestStream: false,
                        responseStream: true,
                        requestSerialize: function (message) { return Buffer.from(message.serialize()); },
                        requestDeserialize: function (bytes) { return User.deserialize(new Uint8Array(bytes)); },
                        responseSerialize: function (message) { return Buffer.from(message.serialize()); },
                        responseDeserialize: function (bytes) { return User.deserialize(new Uint8Array(bytes)); }
                    }
                };
                var GetUsersServiceClient = /** @class */ (function (_super) {
                    __extends(GetUsersServiceClient, _super);
                    function GetUsersServiceClient(address, credentials, options) {
                        return _super.call(this, address, credentials, options) || this;
                    }
                    return GetUsersServiceClient;
                }(grpc_1.makeGenericClientConstructor(user.GetUsersService, "GetUsersService", {})));
                user.GetUsersServiceClient = GetUsersServiceClient;
                user.GetUserByScoreService = {
                    UpdateUser: {
                        path: "/com.coreyauger.lovebomb.user.GetUserByScoreService/UpdateUser",
                        requestStream: false,
                        responseStream: false,
                        requestSerialize: function (message) { return Buffer.from(message.serialize()); },
                        requestDeserialize: function (bytes) { return User.deserialize(new Uint8Array(bytes)); },
                        responseSerialize: function (message) { return Buffer.from(message.serialize()); },
                        responseDeserialize: function (bytes) { return User.deserialize(new Uint8Array(bytes)); }
                    },
                    GetUserByScore: {
                        path: "/com.coreyauger.lovebomb.user.GetUserByScoreService/GetUserByScore",
                        requestStream: false,
                        responseStream: true,
                        requestSerialize: function (message) { return Buffer.from(message.serialize()); },
                        requestDeserialize: function (bytes) { return GetUsersByScore.deserialize(new Uint8Array(bytes)); },
                        responseSerialize: function (message) { return Buffer.from(message.serialize()); },
                        responseDeserialize: function (bytes) { return User.deserialize(new Uint8Array(bytes)); }
                    }
                };
                var GetUserByScoreServiceClient = /** @class */ (function (_super) {
                    __extends(GetUserByScoreServiceClient, _super);
                    function GetUserByScoreServiceClient(address, credentials, options) {
                        return _super.call(this, address, credentials, options) || this;
                    }
                    return GetUserByScoreServiceClient;
                }(grpc_1.makeGenericClientConstructor(user.GetUserByScoreService, "GetUserByScoreService", {})));
                user.GetUserByScoreServiceClient = GetUserByScoreServiceClient;
                user.AllUsersService = {
                    UpdateUser: {
                        path: "/com.coreyauger.lovebomb.user.AllUsersService/UpdateUser",
                        requestStream: false,
                        responseStream: false,
                        requestSerialize: function (message) { return Buffer.from(message.serialize()); },
                        requestDeserialize: function (bytes) { return User.deserialize(new Uint8Array(bytes)); },
                        responseSerialize: function (message) { return Buffer.from(message.serialize()); },
                        responseDeserialize: function (bytes) { return User.deserialize(new Uint8Array(bytes)); }
                    },
                    GetAllUsers: {
                        path: "/com.coreyauger.lovebomb.user.AllUsersService/GetAllUsers",
                        requestStream: false,
                        responseStream: true,
                        requestSerialize: function (message) { return Buffer.from(message.serialize()); },
                        requestDeserialize: function (bytes) { return GetUsers.deserialize(new Uint8Array(bytes)); },
                        responseSerialize: function (message) { return Buffer.from(message.serialize()); },
                        responseDeserialize: function (bytes) { return User.deserialize(new Uint8Array(bytes)); }
                    }
                };
                var AllUsersServiceClient = /** @class */ (function (_super) {
                    __extends(AllUsersServiceClient, _super);
                    function AllUsersServiceClient(address, credentials, options) {
                        return _super.call(this, address, credentials, options) || this;
                    }
                    return AllUsersServiceClient;
                }(grpc_1.makeGenericClientConstructor(user.AllUsersService, "AllUsersService", {})));
                user.AllUsersServiceClient = AllUsersServiceClient;
            })(user = lovebomb.user || (lovebomb.user = {}));
        })(lovebomb = coreyauger.lovebomb || (coreyauger.lovebomb = {}));
    })(coreyauger = com.coreyauger || (com.coreyauger = {}));
})(com = exports.com || (exports.com = {}));
//# sourceMappingURL=user-service.js.map