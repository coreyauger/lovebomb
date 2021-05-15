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
var dep_1 = __importStar(require("./../protobuf/any"));
var pb_1 = __importStar(require("google-protobuf"));
var google;
(function (google) {
    var api;
    (function (api) {
        var HttpBody = /** @class */ (function (_super) {
            __extends(HttpBody, _super);
            function HttpBody(data) {
                var _this = _super.call(this) || this;
                pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [3], []);
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("content_type" in data && data.content_type != undefined) {
                        _this.content_type = data.content_type;
                    }
                    if ("data" in data && data.data != undefined) {
                        _this.data = data.data;
                    }
                    if ("extensions" in data && data.extensions != undefined) {
                        _this.extensions = data.extensions;
                    }
                }
                return _this;
            }
            Object.defineProperty(HttpBody.prototype, "content_type", {
                get: function () {
                    return pb_1.Message.getField(this, 1);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 1, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(HttpBody.prototype, "data", {
                get: function () {
                    return pb_1.Message.getField(this, 2);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 2, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(HttpBody.prototype, "extensions", {
                get: function () {
                    return pb_1.Message.getRepeatedWrapperField(this, dep_1.google.protobuf.Any, 3);
                },
                set: function (value) {
                    pb_1.Message.setRepeatedWrapperField(this, 3, value);
                },
                enumerable: false,
                configurable: true
            });
            HttpBody.prototype.toObject = function () {
                var data = {};
                if (this.content_type != null) {
                    data.content_type = this.content_type;
                }
                if (this.data != null) {
                    data.data = this.data;
                }
                if (this.extensions != null) {
                    data.extensions = this.extensions.map(function (item) { return item.toObject(); });
                }
                return data;
            };
            HttpBody.prototype.serialize = function (w) {
                var writer = w || new pb_1.BinaryWriter();
                if (typeof this.content_type === "string" && this.content_type.length)
                    writer.writeString(1, this.content_type);
                if (this.data !== undefined)
                    writer.writeBytes(2, this.data);
                if (this.extensions !== undefined)
                    writer.writeRepeatedMessage(3, this.extensions, function (item) { return item.serialize(writer); });
                if (!w)
                    return writer.getResultBuffer();
            };
            HttpBody.deserialize = function (bytes) {
                var reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new HttpBody();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.content_type = reader.readString();
                            break;
                        case 2:
                            message.data = reader.readBytes();
                            break;
                        case 3:
                            reader.readMessage(message.extensions, function () { return pb_1.Message.addToRepeatedWrapperField(message, 3, dep_1.google.protobuf.Any.deserialize(reader), dep_1.google.protobuf.Any); });
                            break;
                        default: reader.skipField();
                    }
                }
                return message;
            };
            HttpBody.prototype.serializeBinary = function () {
                return this.serialize();
            };
            HttpBody.deserializeBinary = function (bytes) {
                return HttpBody.deserialize(bytes);
            };
            return HttpBody;
        }(pb_1.Message));
        api.HttpBody = HttpBody;
    })(api = google.api || (google.api = {}));
})(google = exports.google || (exports.google = {}));
//# sourceMappingURL=httpbody.js.map