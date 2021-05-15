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
exports.akkaserverless = void 0;
var pb_1 = __importStar(require("google-protobuf"));
var akkaserverless;
(function (akkaserverless) {
    var Eventing = /** @class */ (function (_super) {
        __extends(Eventing, _super);
        function Eventing(data) {
            var _this = _super.call(this) || this;
            pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("in" in data && data.in != undefined) {
                    _this.in = data.in;
                }
                if ("out" in data && data.out != undefined) {
                    _this.out = data.out;
                }
            }
            return _this;
        }
        Object.defineProperty(Eventing.prototype, "in", {
            get: function () {
                return pb_1.Message.getWrapperField(this, EventSource, 1);
            },
            set: function (value) {
                pb_1.Message.setWrapperField(this, 1, value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Eventing.prototype, "out", {
            get: function () {
                return pb_1.Message.getWrapperField(this, EventDestination, 2);
            },
            set: function (value) {
                pb_1.Message.setWrapperField(this, 2, value);
            },
            enumerable: false,
            configurable: true
        });
        Eventing.prototype.toObject = function () {
            var data = {};
            if (this.in != null) {
                data.in = this.in.toObject();
            }
            if (this.out != null) {
                data.out = this.out.toObject();
            }
            return data;
        };
        Eventing.prototype.serialize = function (w) {
            var _this = this;
            var writer = w || new pb_1.BinaryWriter();
            if (this.in !== undefined)
                writer.writeMessage(1, this.in, function () { return _this.in.serialize(writer); });
            if (this.out !== undefined)
                writer.writeMessage(2, this.out, function () { return _this.out.serialize(writer); });
            if (!w)
                return writer.getResultBuffer();
        };
        Eventing.deserialize = function (bytes) {
            var reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new Eventing();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.in, function () { return message.in = EventSource.deserialize(reader); });
                        break;
                    case 2:
                        reader.readMessage(message.out, function () { return message.out = EventDestination.deserialize(reader); });
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        };
        Eventing.prototype.serializeBinary = function () {
            return this.serialize();
        };
        Eventing.deserializeBinary = function (bytes) {
            return Eventing.deserialize(bytes);
        };
        return Eventing;
    }(pb_1.Message));
    akkaserverless.Eventing = Eventing;
    var EventSource = /** @class */ (function (_super) {
        __extends(EventSource, _super);
        function EventSource(data) {
            var _this = _super.call(this) || this;
            pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], [[2, 3, 4]]);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("consumer_group" in data && data.consumer_group != undefined) {
                    _this.consumer_group = data.consumer_group;
                }
                if ("topic" in data && data.topic != undefined) {
                    _this.topic = data.topic;
                }
                if ("event_sourced_entity" in data && data.event_sourced_entity != undefined) {
                    _this.event_sourced_entity = data.event_sourced_entity;
                }
                if ("value_entity" in data && data.value_entity != undefined) {
                    _this.value_entity = data.value_entity;
                }
            }
            return _this;
        }
        Object.defineProperty(EventSource.prototype, "consumer_group", {
            get: function () {
                return pb_1.Message.getField(this, 1);
            },
            set: function (value) {
                pb_1.Message.setField(this, 1, value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(EventSource.prototype, "topic", {
            get: function () {
                return pb_1.Message.getField(this, 2);
            },
            set: function (value) {
                pb_1.Message.setField(this, 2, value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(EventSource.prototype, "event_sourced_entity", {
            get: function () {
                return pb_1.Message.getField(this, 3);
            },
            set: function (value) {
                pb_1.Message.setField(this, 3, value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(EventSource.prototype, "value_entity", {
            get: function () {
                return pb_1.Message.getField(this, 4);
            },
            set: function (value) {
                pb_1.Message.setField(this, 4, value);
            },
            enumerable: false,
            configurable: true
        });
        EventSource.prototype.toObject = function () {
            var data = {};
            if (this.consumer_group != null) {
                data.consumer_group = this.consumer_group;
            }
            if (this.topic != null) {
                data.topic = this.topic;
            }
            if (this.event_sourced_entity != null) {
                data.event_sourced_entity = this.event_sourced_entity;
            }
            if (this.value_entity != null) {
                data.value_entity = this.value_entity;
            }
            return data;
        };
        EventSource.prototype.serialize = function (w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.consumer_group === "string" && this.consumer_group.length)
                writer.writeString(1, this.consumer_group);
            if (typeof this.topic === "string" && this.topic.length)
                writer.writeString(2, this.topic);
            if (typeof this.event_sourced_entity === "string" && this.event_sourced_entity.length)
                writer.writeString(3, this.event_sourced_entity);
            if (typeof this.value_entity === "string" && this.value_entity.length)
                writer.writeString(4, this.value_entity);
            if (!w)
                return writer.getResultBuffer();
        };
        EventSource.deserialize = function (bytes) {
            var reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new EventSource();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.consumer_group = reader.readString();
                        break;
                    case 2:
                        message.topic = reader.readString();
                        break;
                    case 3:
                        message.event_sourced_entity = reader.readString();
                        break;
                    case 4:
                        message.value_entity = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        };
        EventSource.prototype.serializeBinary = function () {
            return this.serialize();
        };
        EventSource.deserializeBinary = function (bytes) {
            return EventSource.deserialize(bytes);
        };
        return EventSource;
    }(pb_1.Message));
    akkaserverless.EventSource = EventSource;
    var EventDestination = /** @class */ (function (_super) {
        __extends(EventDestination, _super);
        function EventDestination(data) {
            var _this = _super.call(this) || this;
            pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], [[1]]);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("topic" in data && data.topic != undefined) {
                    _this.topic = data.topic;
                }
            }
            return _this;
        }
        Object.defineProperty(EventDestination.prototype, "topic", {
            get: function () {
                return pb_1.Message.getField(this, 1);
            },
            set: function (value) {
                pb_1.Message.setField(this, 1, value);
            },
            enumerable: false,
            configurable: true
        });
        EventDestination.prototype.toObject = function () {
            var data = {};
            if (this.topic != null) {
                data.topic = this.topic;
            }
            return data;
        };
        EventDestination.prototype.serialize = function (w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.topic === "string" && this.topic.length)
                writer.writeString(1, this.topic);
            if (!w)
                return writer.getResultBuffer();
        };
        EventDestination.deserialize = function (bytes) {
            var reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new EventDestination();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.topic = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        };
        EventDestination.prototype.serializeBinary = function () {
            return this.serialize();
        };
        EventDestination.deserializeBinary = function (bytes) {
            return EventDestination.deserialize(bytes);
        };
        return EventDestination;
    }(pb_1.Message));
    akkaserverless.EventDestination = EventDestination;
})(akkaserverless = exports.akkaserverless || (exports.akkaserverless = {}));
//# sourceMappingURL=eventing.js.map