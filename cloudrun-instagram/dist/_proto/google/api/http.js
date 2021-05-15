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
exports.google = void 0;
var pb_1 = __importStar(require("google-protobuf"));
var google;
(function (google) {
    var api;
    (function (api) {
        var Http = /** @class */ (function (_super) {
            __extends(Http, _super);
            function Http(data) {
                var _this = _super.call(this) || this;
                pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [1], []);
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("rules" in data && data.rules != undefined) {
                        _this.rules = data.rules;
                    }
                    if ("fully_decode_reserved_expansion" in data && data.fully_decode_reserved_expansion != undefined) {
                        _this.fully_decode_reserved_expansion = data.fully_decode_reserved_expansion;
                    }
                }
                return _this;
            }
            Object.defineProperty(Http.prototype, "rules", {
                get: function () {
                    return pb_1.Message.getRepeatedWrapperField(this, HttpRule, 1);
                },
                set: function (value) {
                    pb_1.Message.setRepeatedWrapperField(this, 1, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(Http.prototype, "fully_decode_reserved_expansion", {
                get: function () {
                    return pb_1.Message.getField(this, 2);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 2, value);
                },
                enumerable: false,
                configurable: true
            });
            Http.prototype.toObject = function () {
                var data = {};
                if (this.rules != null) {
                    data.rules = this.rules.map(function (item) { return item.toObject(); });
                }
                if (this.fully_decode_reserved_expansion != null) {
                    data.fully_decode_reserved_expansion = this.fully_decode_reserved_expansion;
                }
                return data;
            };
            Http.prototype.serialize = function (w) {
                var writer = w || new pb_1.BinaryWriter();
                if (this.rules !== undefined)
                    writer.writeRepeatedMessage(1, this.rules, function (item) { return item.serialize(writer); });
                if (this.fully_decode_reserved_expansion !== undefined)
                    writer.writeBool(2, this.fully_decode_reserved_expansion);
                if (!w)
                    return writer.getResultBuffer();
            };
            Http.deserialize = function (bytes) {
                var reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new Http();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            reader.readMessage(message.rules, function () { return pb_1.Message.addToRepeatedWrapperField(message, 1, HttpRule.deserialize(reader), HttpRule); });
                            break;
                        case 2:
                            message.fully_decode_reserved_expansion = reader.readBool();
                            break;
                        default: reader.skipField();
                    }
                }
                return message;
            };
            Http.prototype.serializeBinary = function () {
                return this.serialize();
            };
            Http.deserializeBinary = function (bytes) {
                return Http.deserialize(bytes);
            };
            return Http;
        }(pb_1.Message));
        api.Http = Http;
        var HttpRule = /** @class */ (function (_super) {
            __extends(HttpRule, _super);
            function HttpRule(data) {
                var _this = _super.call(this) || this;
                pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [11], [[2, 3, 4, 5, 6, 8]]);
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("selector" in data && data.selector != undefined) {
                        _this.selector = data.selector;
                    }
                    if ("get" in data && data.get != undefined) {
                        _this.get = data.get;
                    }
                    if ("put" in data && data.put != undefined) {
                        _this.put = data.put;
                    }
                    if ("post" in data && data.post != undefined) {
                        _this.post = data.post;
                    }
                    if ("delete" in data && data.delete != undefined) {
                        _this.delete = data.delete;
                    }
                    if ("patch" in data && data.patch != undefined) {
                        _this.patch = data.patch;
                    }
                    if ("custom" in data && data.custom != undefined) {
                        _this.custom = data.custom;
                    }
                    if ("body" in data && data.body != undefined) {
                        _this.body = data.body;
                    }
                    if ("response_body" in data && data.response_body != undefined) {
                        _this.response_body = data.response_body;
                    }
                    if ("additional_bindings" in data && data.additional_bindings != undefined) {
                        _this.additional_bindings = data.additional_bindings;
                    }
                }
                return _this;
            }
            Object.defineProperty(HttpRule.prototype, "selector", {
                get: function () {
                    return pb_1.Message.getField(this, 1);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 1, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(HttpRule.prototype, "get", {
                get: function () {
                    return pb_1.Message.getField(this, 2);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 2, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(HttpRule.prototype, "put", {
                get: function () {
                    return pb_1.Message.getField(this, 3);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 3, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(HttpRule.prototype, "post", {
                get: function () {
                    return pb_1.Message.getField(this, 4);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 4, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(HttpRule.prototype, "delete", {
                get: function () {
                    return pb_1.Message.getField(this, 5);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 5, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(HttpRule.prototype, "patch", {
                get: function () {
                    return pb_1.Message.getField(this, 6);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 6, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(HttpRule.prototype, "custom", {
                get: function () {
                    return pb_1.Message.getWrapperField(this, CustomHttpPattern, 8);
                },
                set: function (value) {
                    pb_1.Message.setWrapperField(this, 8, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(HttpRule.prototype, "body", {
                get: function () {
                    return pb_1.Message.getField(this, 7);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 7, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(HttpRule.prototype, "response_body", {
                get: function () {
                    return pb_1.Message.getField(this, 12);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 12, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(HttpRule.prototype, "additional_bindings", {
                get: function () {
                    return pb_1.Message.getRepeatedWrapperField(this, HttpRule, 11);
                },
                set: function (value) {
                    pb_1.Message.setRepeatedWrapperField(this, 11, value);
                },
                enumerable: false,
                configurable: true
            });
            HttpRule.prototype.toObject = function () {
                var data = {};
                if (this.selector != null) {
                    data.selector = this.selector;
                }
                if (this.get != null) {
                    data.get = this.get;
                }
                if (this.put != null) {
                    data.put = this.put;
                }
                if (this.post != null) {
                    data.post = this.post;
                }
                if (this.delete != null) {
                    data.delete = this.delete;
                }
                if (this.patch != null) {
                    data.patch = this.patch;
                }
                if (this.custom != null) {
                    data.custom = this.custom.toObject();
                }
                if (this.body != null) {
                    data.body = this.body;
                }
                if (this.response_body != null) {
                    data.response_body = this.response_body;
                }
                if (this.additional_bindings != null) {
                    data.additional_bindings = this.additional_bindings.map(function (item) { return item.toObject(); });
                }
                return data;
            };
            HttpRule.prototype.serialize = function (w) {
                var _this = this;
                var writer = w || new pb_1.BinaryWriter();
                if (typeof this.selector === "string" && this.selector.length)
                    writer.writeString(1, this.selector);
                if (typeof this.get === "string" && this.get.length)
                    writer.writeString(2, this.get);
                if (typeof this.put === "string" && this.put.length)
                    writer.writeString(3, this.put);
                if (typeof this.post === "string" && this.post.length)
                    writer.writeString(4, this.post);
                if (typeof this.delete === "string" && this.delete.length)
                    writer.writeString(5, this.delete);
                if (typeof this.patch === "string" && this.patch.length)
                    writer.writeString(6, this.patch);
                if (this.custom !== undefined)
                    writer.writeMessage(8, this.custom, function () { return _this.custom.serialize(writer); });
                if (typeof this.body === "string" && this.body.length)
                    writer.writeString(7, this.body);
                if (typeof this.response_body === "string" && this.response_body.length)
                    writer.writeString(12, this.response_body);
                if (this.additional_bindings !== undefined)
                    writer.writeRepeatedMessage(11, this.additional_bindings, function (item) { return item.serialize(writer); });
                if (!w)
                    return writer.getResultBuffer();
            };
            HttpRule.deserialize = function (bytes) {
                var reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new HttpRule();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.selector = reader.readString();
                            break;
                        case 2:
                            message.get = reader.readString();
                            break;
                        case 3:
                            message.put = reader.readString();
                            break;
                        case 4:
                            message.post = reader.readString();
                            break;
                        case 5:
                            message.delete = reader.readString();
                            break;
                        case 6:
                            message.patch = reader.readString();
                            break;
                        case 8:
                            reader.readMessage(message.custom, function () { return message.custom = CustomHttpPattern.deserialize(reader); });
                            break;
                        case 7:
                            message.body = reader.readString();
                            break;
                        case 12:
                            message.response_body = reader.readString();
                            break;
                        case 11:
                            reader.readMessage(message.additional_bindings, function () { return pb_1.Message.addToRepeatedWrapperField(message, 11, HttpRule.deserialize(reader), HttpRule); });
                            break;
                        default: reader.skipField();
                    }
                }
                return message;
            };
            HttpRule.prototype.serializeBinary = function () {
                return this.serialize();
            };
            HttpRule.deserializeBinary = function (bytes) {
                return HttpRule.deserialize(bytes);
            };
            return HttpRule;
        }(pb_1.Message));
        api.HttpRule = HttpRule;
        var CustomHttpPattern = /** @class */ (function (_super) {
            __extends(CustomHttpPattern, _super);
            function CustomHttpPattern(data) {
                var _this = _super.call(this) || this;
                pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], []);
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("kind" in data && data.kind != undefined) {
                        _this.kind = data.kind;
                    }
                    if ("path" in data && data.path != undefined) {
                        _this.path = data.path;
                    }
                }
                return _this;
            }
            Object.defineProperty(CustomHttpPattern.prototype, "kind", {
                get: function () {
                    return pb_1.Message.getField(this, 1);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 1, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(CustomHttpPattern.prototype, "path", {
                get: function () {
                    return pb_1.Message.getField(this, 2);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 2, value);
                },
                enumerable: false,
                configurable: true
            });
            CustomHttpPattern.prototype.toObject = function () {
                var data = {};
                if (this.kind != null) {
                    data.kind = this.kind;
                }
                if (this.path != null) {
                    data.path = this.path;
                }
                return data;
            };
            CustomHttpPattern.prototype.serialize = function (w) {
                var writer = w || new pb_1.BinaryWriter();
                if (typeof this.kind === "string" && this.kind.length)
                    writer.writeString(1, this.kind);
                if (typeof this.path === "string" && this.path.length)
                    writer.writeString(2, this.path);
                if (!w)
                    return writer.getResultBuffer();
            };
            CustomHttpPattern.deserialize = function (bytes) {
                var reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new CustomHttpPattern();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.kind = reader.readString();
                            break;
                        case 2:
                            message.path = reader.readString();
                            break;
                        default: reader.skipField();
                    }
                }
                return message;
            };
            CustomHttpPattern.prototype.serializeBinary = function () {
                return this.serialize();
            };
            CustomHttpPattern.deserializeBinary = function (bytes) {
                return CustomHttpPattern.deserialize(bytes);
            };
            return CustomHttpPattern;
        }(pb_1.Message));
        api.CustomHttpPattern = CustomHttpPattern;
    })(api = google.api || (google.api = {}));
})(google = exports.google || (exports.google = {}));
//# sourceMappingURL=http.js.map