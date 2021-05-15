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
    var protobuf;
    (function (protobuf) {
        var Any = /** @class */ (function (_super) {
            __extends(Any, _super);
            function Any(data) {
                var _this = _super.call(this) || this;
                pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], []);
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("type_url" in data && data.type_url != undefined) {
                        _this.type_url = data.type_url;
                    }
                    if ("value" in data && data.value != undefined) {
                        _this.value = data.value;
                    }
                }
                return _this;
            }
            Object.defineProperty(Any.prototype, "type_url", {
                get: function () {
                    return pb_1.Message.getField(this, 1);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 1, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(Any.prototype, "value", {
                get: function () {
                    return pb_1.Message.getField(this, 2);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 2, value);
                },
                enumerable: false,
                configurable: true
            });
            Any.prototype.toObject = function () {
                var data = {};
                if (this.type_url != null) {
                    data.type_url = this.type_url;
                }
                if (this.value != null) {
                    data.value = this.value;
                }
                return data;
            };
            Any.prototype.serialize = function (w) {
                var writer = w || new pb_1.BinaryWriter();
                if (typeof this.type_url === "string" && this.type_url.length)
                    writer.writeString(1, this.type_url);
                if (this.value !== undefined)
                    writer.writeBytes(2, this.value);
                if (!w)
                    return writer.getResultBuffer();
            };
            Any.deserialize = function (bytes) {
                var reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new Any();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.type_url = reader.readString();
                            break;
                        case 2:
                            message.value = reader.readBytes();
                            break;
                        default: reader.skipField();
                    }
                }
                return message;
            };
            Any.prototype.serializeBinary = function () {
                return this.serialize();
            };
            Any.deserializeBinary = function (bytes) {
                return Any.deserialize(bytes);
            };
            return Any;
        }(pb_1.Message));
        protobuf.Any = Any;
    })(protobuf = google.protobuf || (google.protobuf = {}));
})(google = exports.google || (exports.google = {}));
//# sourceMappingURL=any.js.map