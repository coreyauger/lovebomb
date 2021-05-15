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
var entity_1 = require("./entity");
var eventing_1 = require("./eventing");
var views_1 = require("./views");
var pb_1 = __importStar(require("google-protobuf"));
var akkaserverless;
(function (akkaserverless) {
    var FieldOptions = /** @class */ (function (_super) {
        __extends(FieldOptions, _super);
        function FieldOptions(data) {
            var _this = _super.call(this) || this;
            pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("entity_key" in data && data.entity_key != undefined) {
                    _this.entity_key = data.entity_key;
                }
            }
            return _this;
        }
        Object.defineProperty(FieldOptions.prototype, "entity_key", {
            get: function () {
                return pb_1.Message.getField(this, 1);
            },
            set: function (value) {
                pb_1.Message.setField(this, 1, value);
            },
            enumerable: false,
            configurable: true
        });
        FieldOptions.prototype.toObject = function () {
            var data = {};
            if (this.entity_key != null) {
                data.entity_key = this.entity_key;
            }
            return data;
        };
        FieldOptions.prototype.serialize = function (w) {
            var writer = w || new pb_1.BinaryWriter();
            if (this.entity_key !== undefined)
                writer.writeBool(1, this.entity_key);
            if (!w)
                return writer.getResultBuffer();
        };
        FieldOptions.deserialize = function (bytes) {
            var reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new FieldOptions();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.entity_key = reader.readBool();
                        break;
                    default:
                        reader.skipField();
                }
            }
            return message;
        };
        FieldOptions.prototype.serializeBinary = function () {
            return this.serialize();
        };
        FieldOptions.deserializeBinary = function (bytes) {
            return FieldOptions.deserialize(bytes);
        };
        return FieldOptions;
    }(pb_1.Message));
    akkaserverless.FieldOptions = FieldOptions;
    var FileOptions = /** @class */ (function (_super) {
        __extends(FileOptions, _super);
        function FileOptions(data) {
            var _this = _super.call(this) || this;
            pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("event_sourced_entity" in data &&
                    data.event_sourced_entity != undefined) {
                    _this.event_sourced_entity = data.event_sourced_entity;
                }
                if ("value_entity" in data && data.value_entity != undefined) {
                    _this.value_entity = data.value_entity;
                }
            }
            return _this;
        }
        Object.defineProperty(FileOptions.prototype, "event_sourced_entity", {
            get: function () {
                return pb_1.Message.getWrapperField(this, entity_1.akkaserverless.EventSourcedEntity, 1);
            },
            set: function (value) {
                pb_1.Message.setWrapperField(this, 1, value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FileOptions.prototype, "value_entity", {
            get: function () {
                return pb_1.Message.getWrapperField(this, entity_1.akkaserverless.ValueEntity, 2);
            },
            set: function (value) {
                pb_1.Message.setWrapperField(this, 2, value);
            },
            enumerable: false,
            configurable: true
        });
        FileOptions.prototype.toObject = function () {
            var data = {};
            if (this.event_sourced_entity != null) {
                data.event_sourced_entity = this.event_sourced_entity.toObject();
            }
            if (this.value_entity != null) {
                data.value_entity = this.value_entity.toObject();
            }
            return data;
        };
        FileOptions.prototype.serialize = function (w) {
            var _this = this;
            var writer = w || new pb_1.BinaryWriter();
            if (this.event_sourced_entity !== undefined)
                writer.writeMessage(1, this.event_sourced_entity, function () {
                    return _this.event_sourced_entity.serialize(writer);
                });
            if (this.value_entity !== undefined)
                writer.writeMessage(2, this.value_entity, function () {
                    return _this.value_entity.serialize(writer);
                });
            if (!w)
                return writer.getResultBuffer();
        };
        FileOptions.deserialize = function (bytes) {
            var reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new FileOptions();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.event_sourced_entity, function () {
                            return (message.event_sourced_entity =
                                entity_1.akkaserverless.EventSourcedEntity.deserialize(reader));
                        });
                        break;
                    case 2:
                        reader.readMessage(message.value_entity, function () {
                            return (message.value_entity = entity_1.akkaserverless.ValueEntity.deserialize(reader));
                        });
                        break;
                    default:
                        reader.skipField();
                }
            }
            return message;
        };
        FileOptions.prototype.serializeBinary = function () {
            return this.serialize();
        };
        FileOptions.deserializeBinary = function (bytes) {
            return FileOptions.deserialize(bytes);
        };
        return FileOptions;
    }(pb_1.Message));
    akkaserverless.FileOptions = FileOptions;
    var MethodOptions = /** @class */ (function (_super) {
        __extends(MethodOptions, _super);
        function MethodOptions(data) {
            var _this = _super.call(this) || this;
            pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("eventing" in data && data.eventing != undefined) {
                    _this.eventing = data.eventing;
                }
                if ("view" in data && data.view != undefined) {
                    _this.view = data.view;
                }
            }
            return _this;
        }
        Object.defineProperty(MethodOptions.prototype, "eventing", {
            get: function () {
                return pb_1.Message.getWrapperField(this, eventing_1.akkaserverless.Eventing, 1);
            },
            set: function (value) {
                pb_1.Message.setWrapperField(this, 1, value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MethodOptions.prototype, "view", {
            get: function () {
                return pb_1.Message.getWrapperField(this, views_1.akkaserverless.View, 2);
            },
            set: function (value) {
                pb_1.Message.setWrapperField(this, 2, value);
            },
            enumerable: false,
            configurable: true
        });
        MethodOptions.prototype.toObject = function () {
            var data = {};
            if (this.eventing != null) {
                data.eventing = this.eventing.toObject();
            }
            if (this.view != null) {
                data.view = this.view.toObject();
            }
            return data;
        };
        MethodOptions.prototype.serialize = function (w) {
            var _this = this;
            var writer = w || new pb_1.BinaryWriter();
            if (this.eventing !== undefined)
                writer.writeMessage(1, this.eventing, function () {
                    return _this.eventing.serialize(writer);
                });
            if (this.view !== undefined)
                writer.writeMessage(2, this.view, function () { return _this.view.serialize(writer); });
            if (!w)
                return writer.getResultBuffer();
        };
        MethodOptions.deserialize = function (bytes) {
            var reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new MethodOptions();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.eventing, function () { return (message.eventing = eventing_1.akkaserverless.Eventing.deserialize(reader)); });
                        break;
                    case 2:
                        reader.readMessage(message.view, function () { return (message.view = views_1.akkaserverless.View.deserialize(reader)); });
                        break;
                    default:
                        reader.skipField();
                }
            }
            return message;
        };
        MethodOptions.prototype.serializeBinary = function () {
            return this.serialize();
        };
        MethodOptions.deserializeBinary = function (bytes) {
            return MethodOptions.deserialize(bytes);
        };
        return MethodOptions;
    }(pb_1.Message));
    akkaserverless.MethodOptions = MethodOptions;
    var ServiceOptions = /** @class */ (function (_super) {
        __extends(ServiceOptions, _super);
        function ServiceOptions(data) {
            var _this = _super.call(this) || this;
            pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("entity" in data && data.entity != undefined) {
                    _this.entity = data.entity;
                }
            }
            return _this;
        }
        Object.defineProperty(ServiceOptions.prototype, "entity", {
            get: function () {
                return pb_1.Message.getWrapperField(this, entity_1.akkaserverless.EntityAssociation, 1);
            },
            set: function (value) {
                pb_1.Message.setWrapperField(this, 1, value);
            },
            enumerable: false,
            configurable: true
        });
        ServiceOptions.prototype.toObject = function () {
            var data = {};
            if (this.entity != null) {
                data.entity = this.entity.toObject();
            }
            return data;
        };
        ServiceOptions.prototype.serialize = function (w) {
            var _this = this;
            var writer = w || new pb_1.BinaryWriter();
            if (this.entity !== undefined)
                writer.writeMessage(1, this.entity, function () {
                    return _this.entity.serialize(writer);
                });
            if (!w)
                return writer.getResultBuffer();
        };
        ServiceOptions.deserialize = function (bytes) {
            var reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new ServiceOptions();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.entity, function () {
                            return (message.entity = entity_1.akkaserverless.EntityAssociation.deserialize(reader));
                        });
                        break;
                    default:
                        reader.skipField();
                }
            }
            return message;
        };
        ServiceOptions.prototype.serializeBinary = function () {
            return this.serialize();
        };
        ServiceOptions.deserializeBinary = function (bytes) {
            return ServiceOptions.deserialize(bytes);
        };
        return ServiceOptions;
    }(pb_1.Message));
    akkaserverless.ServiceOptions = ServiceOptions;
})(akkaserverless = exports.akkaserverless || (exports.akkaserverless = {}));
//# sourceMappingURL=annotations.js.map