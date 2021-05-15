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
    var EntityAssociation = /** @class */ (function (_super) {
        __extends(EntityAssociation, _super);
        function EntityAssociation(data) {
            var _this = _super.call(this) || this;
            pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("type" in data && data.type != undefined) {
                    _this.type = data.type;
                }
            }
            return _this;
        }
        Object.defineProperty(EntityAssociation.prototype, "type", {
            get: function () {
                return pb_1.Message.getField(this, 1);
            },
            set: function (value) {
                pb_1.Message.setField(this, 1, value);
            },
            enumerable: false,
            configurable: true
        });
        EntityAssociation.prototype.toObject = function () {
            var data = {};
            if (this.type != null) {
                data.type = this.type;
            }
            return data;
        };
        EntityAssociation.prototype.serialize = function (w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.type === "string" && this.type.length)
                writer.writeString(1, this.type);
            if (!w)
                return writer.getResultBuffer();
        };
        EntityAssociation.deserialize = function (bytes) {
            var reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new EntityAssociation();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.type = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        };
        EntityAssociation.prototype.serializeBinary = function () {
            return this.serialize();
        };
        EntityAssociation.deserializeBinary = function (bytes) {
            return EntityAssociation.deserialize(bytes);
        };
        return EntityAssociation;
    }(pb_1.Message));
    akkaserverless.EntityAssociation = EntityAssociation;
    var StateDescriptor = /** @class */ (function (_super) {
        __extends(StateDescriptor, _super);
        function StateDescriptor(data) {
            var _this = _super.call(this) || this;
            pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("type" in data && data.type != undefined) {
                    _this.type = data.type;
                }
            }
            return _this;
        }
        Object.defineProperty(StateDescriptor.prototype, "type", {
            get: function () {
                return pb_1.Message.getField(this, 1);
            },
            set: function (value) {
                pb_1.Message.setField(this, 1, value);
            },
            enumerable: false,
            configurable: true
        });
        StateDescriptor.prototype.toObject = function () {
            var data = {};
            if (this.type != null) {
                data.type = this.type;
            }
            return data;
        };
        StateDescriptor.prototype.serialize = function (w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.type === "string" && this.type.length)
                writer.writeString(1, this.type);
            if (!w)
                return writer.getResultBuffer();
        };
        StateDescriptor.deserialize = function (bytes) {
            var reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new StateDescriptor();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.type = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        };
        StateDescriptor.prototype.serializeBinary = function () {
            return this.serialize();
        };
        StateDescriptor.deserializeBinary = function (bytes) {
            return StateDescriptor.deserialize(bytes);
        };
        return StateDescriptor;
    }(pb_1.Message));
    akkaserverless.StateDescriptor = StateDescriptor;
    var EventDescriptor = /** @class */ (function (_super) {
        __extends(EventDescriptor, _super);
        function EventDescriptor(data) {
            var _this = _super.call(this) || this;
            pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("type" in data && data.type != undefined) {
                    _this.type = data.type;
                }
            }
            return _this;
        }
        Object.defineProperty(EventDescriptor.prototype, "type", {
            get: function () {
                return pb_1.Message.getField(this, 1);
            },
            set: function (value) {
                pb_1.Message.setField(this, 1, value);
            },
            enumerable: false,
            configurable: true
        });
        EventDescriptor.prototype.toObject = function () {
            var data = {};
            if (this.type != null) {
                data.type = this.type;
            }
            return data;
        };
        EventDescriptor.prototype.serialize = function (w) {
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.type === "string" && this.type.length)
                writer.writeString(1, this.type);
            if (!w)
                return writer.getResultBuffer();
        };
        EventDescriptor.deserialize = function (bytes) {
            var reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new EventDescriptor();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.type = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        };
        EventDescriptor.prototype.serializeBinary = function () {
            return this.serialize();
        };
        EventDescriptor.deserializeBinary = function (bytes) {
            return EventDescriptor.deserialize(bytes);
        };
        return EventDescriptor;
    }(pb_1.Message));
    akkaserverless.EventDescriptor = EventDescriptor;
    var EventSourcedEntity = /** @class */ (function (_super) {
        __extends(EventSourcedEntity, _super);
        function EventSourcedEntity(data) {
            var _this = _super.call(this) || this;
            pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [4], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("name" in data && data.name != undefined) {
                    _this.name = data.name;
                }
                if ("entity_type" in data && data.entity_type != undefined) {
                    _this.entity_type = data.entity_type;
                }
                if ("state" in data && data.state != undefined) {
                    _this.state = data.state;
                }
                if ("event" in data && data.event != undefined) {
                    _this.event = data.event;
                }
            }
            return _this;
        }
        Object.defineProperty(EventSourcedEntity.prototype, "name", {
            get: function () {
                return pb_1.Message.getField(this, 1);
            },
            set: function (value) {
                pb_1.Message.setField(this, 1, value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(EventSourcedEntity.prototype, "entity_type", {
            get: function () {
                return pb_1.Message.getField(this, 2);
            },
            set: function (value) {
                pb_1.Message.setField(this, 2, value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(EventSourcedEntity.prototype, "state", {
            get: function () {
                return pb_1.Message.getWrapperField(this, StateDescriptor, 3);
            },
            set: function (value) {
                pb_1.Message.setWrapperField(this, 3, value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(EventSourcedEntity.prototype, "event", {
            get: function () {
                return pb_1.Message.getRepeatedWrapperField(this, EventDescriptor, 4);
            },
            set: function (value) {
                pb_1.Message.setRepeatedWrapperField(this, 4, value);
            },
            enumerable: false,
            configurable: true
        });
        EventSourcedEntity.prototype.toObject = function () {
            var data = {};
            if (this.name != null) {
                data.name = this.name;
            }
            if (this.entity_type != null) {
                data.entity_type = this.entity_type;
            }
            if (this.state != null) {
                data.state = this.state.toObject();
            }
            if (this.event != null) {
                data.event = this.event.map(function (item) { return item.toObject(); });
            }
            return data;
        };
        EventSourcedEntity.prototype.serialize = function (w) {
            var _this = this;
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.name === "string" && this.name.length)
                writer.writeString(1, this.name);
            if (typeof this.entity_type === "string" && this.entity_type.length)
                writer.writeString(2, this.entity_type);
            if (this.state !== undefined)
                writer.writeMessage(3, this.state, function () { return _this.state.serialize(writer); });
            if (this.event !== undefined)
                writer.writeRepeatedMessage(4, this.event, function (item) { return item.serialize(writer); });
            if (!w)
                return writer.getResultBuffer();
        };
        EventSourcedEntity.deserialize = function (bytes) {
            var reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new EventSourcedEntity();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.name = reader.readString();
                        break;
                    case 2:
                        message.entity_type = reader.readString();
                        break;
                    case 3:
                        reader.readMessage(message.state, function () { return message.state = StateDescriptor.deserialize(reader); });
                        break;
                    case 4:
                        reader.readMessage(message.event, function () { return pb_1.Message.addToRepeatedWrapperField(message, 4, EventDescriptor.deserialize(reader), EventDescriptor); });
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        };
        EventSourcedEntity.prototype.serializeBinary = function () {
            return this.serialize();
        };
        EventSourcedEntity.deserializeBinary = function (bytes) {
            return EventSourcedEntity.deserialize(bytes);
        };
        return EventSourcedEntity;
    }(pb_1.Message));
    akkaserverless.EventSourcedEntity = EventSourcedEntity;
    var ValueEntity = /** @class */ (function (_super) {
        __extends(ValueEntity, _super);
        function ValueEntity(data) {
            var _this = _super.call(this) || this;
            pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("name" in data && data.name != undefined) {
                    _this.name = data.name;
                }
                if ("entity_type" in data && data.entity_type != undefined) {
                    _this.entity_type = data.entity_type;
                }
                if ("state" in data && data.state != undefined) {
                    _this.state = data.state;
                }
            }
            return _this;
        }
        Object.defineProperty(ValueEntity.prototype, "name", {
            get: function () {
                return pb_1.Message.getField(this, 1);
            },
            set: function (value) {
                pb_1.Message.setField(this, 1, value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ValueEntity.prototype, "entity_type", {
            get: function () {
                return pb_1.Message.getField(this, 2);
            },
            set: function (value) {
                pb_1.Message.setField(this, 2, value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ValueEntity.prototype, "state", {
            get: function () {
                return pb_1.Message.getWrapperField(this, StateDescriptor, 3);
            },
            set: function (value) {
                pb_1.Message.setWrapperField(this, 3, value);
            },
            enumerable: false,
            configurable: true
        });
        ValueEntity.prototype.toObject = function () {
            var data = {};
            if (this.name != null) {
                data.name = this.name;
            }
            if (this.entity_type != null) {
                data.entity_type = this.entity_type;
            }
            if (this.state != null) {
                data.state = this.state.toObject();
            }
            return data;
        };
        ValueEntity.prototype.serialize = function (w) {
            var _this = this;
            var writer = w || new pb_1.BinaryWriter();
            if (typeof this.name === "string" && this.name.length)
                writer.writeString(1, this.name);
            if (typeof this.entity_type === "string" && this.entity_type.length)
                writer.writeString(2, this.entity_type);
            if (this.state !== undefined)
                writer.writeMessage(3, this.state, function () { return _this.state.serialize(writer); });
            if (!w)
                return writer.getResultBuffer();
        };
        ValueEntity.deserialize = function (bytes) {
            var reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new ValueEntity();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.name = reader.readString();
                        break;
                    case 2:
                        message.entity_type = reader.readString();
                        break;
                    case 3:
                        reader.readMessage(message.state, function () { return message.state = StateDescriptor.deserialize(reader); });
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        };
        ValueEntity.prototype.serializeBinary = function () {
            return this.serialize();
        };
        ValueEntity.deserializeBinary = function (bytes) {
            return ValueEntity.deserialize(bytes);
        };
        return ValueEntity;
    }(pb_1.Message));
    akkaserverless.ValueEntity = ValueEntity;
})(akkaserverless = exports.akkaserverless || (exports.akkaserverless = {}));
//# sourceMappingURL=entity.js.map