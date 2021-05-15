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
    var View = /** @class */ (function (_super) {
        __extends(View, _super);
        function View(data) {
            var _this = _super.call(this) || this;
            pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], [[1, 2]]);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("update" in data && data.update != undefined) {
                    _this.update = data.update;
                }
                if ("query" in data && data.query != undefined) {
                    _this.query = data.query;
                }
            }
            return _this;
        }
        Object.defineProperty(View.prototype, "update", {
            get: function () {
                return pb_1.Message.getWrapperField(this, View.Update, 1);
            },
            set: function (value) {
                pb_1.Message.setWrapperField(this, 1, value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(View.prototype, "query", {
            get: function () {
                return pb_1.Message.getWrapperField(this, View.Query, 2);
            },
            set: function (value) {
                pb_1.Message.setWrapperField(this, 2, value);
            },
            enumerable: false,
            configurable: true
        });
        View.prototype.toObject = function () {
            var data = {};
            if (this.update != null) {
                data.update = this.update.toObject();
            }
            if (this.query != null) {
                data.query = this.query.toObject();
            }
            return data;
        };
        View.prototype.serialize = function (w) {
            var _this = this;
            var writer = w || new pb_1.BinaryWriter();
            if (this.update !== undefined)
                writer.writeMessage(1, this.update, function () { return _this.update.serialize(writer); });
            if (this.query !== undefined)
                writer.writeMessage(2, this.query, function () { return _this.query.serialize(writer); });
            if (!w)
                return writer.getResultBuffer();
        };
        View.deserialize = function (bytes) {
            var reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new View();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.update, function () { return message.update = View.Update.deserialize(reader); });
                        break;
                    case 2:
                        reader.readMessage(message.query, function () { return message.query = View.Query.deserialize(reader); });
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        };
        View.prototype.serializeBinary = function () {
            return this.serialize();
        };
        View.deserializeBinary = function (bytes) {
            return View.deserialize(bytes);
        };
        return View;
    }(pb_1.Message));
    akkaserverless.View = View;
    (function (View) {
        var Update = /** @class */ (function (_super) {
            __extends(Update, _super);
            function Update(data) {
                var _this = _super.call(this) || this;
                pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], []);
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("table" in data && data.table != undefined) {
                        _this.table = data.table;
                    }
                    if ("transform_updates" in data && data.transform_updates != undefined) {
                        _this.transform_updates = data.transform_updates;
                    }
                }
                return _this;
            }
            Object.defineProperty(Update.prototype, "table", {
                get: function () {
                    return pb_1.Message.getField(this, 1);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 1, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(Update.prototype, "transform_updates", {
                get: function () {
                    return pb_1.Message.getField(this, 2);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 2, value);
                },
                enumerable: false,
                configurable: true
            });
            Update.prototype.toObject = function () {
                var data = {};
                if (this.table != null) {
                    data.table = this.table;
                }
                if (this.transform_updates != null) {
                    data.transform_updates = this.transform_updates;
                }
                return data;
            };
            Update.prototype.serialize = function (w) {
                var writer = w || new pb_1.BinaryWriter();
                if (typeof this.table === "string" && this.table.length)
                    writer.writeString(1, this.table);
                if (this.transform_updates !== undefined)
                    writer.writeBool(2, this.transform_updates);
                if (!w)
                    return writer.getResultBuffer();
            };
            Update.deserialize = function (bytes) {
                var reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new Update();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.table = reader.readString();
                            break;
                        case 2:
                            message.transform_updates = reader.readBool();
                            break;
                        default: reader.skipField();
                    }
                }
                return message;
            };
            Update.prototype.serializeBinary = function () {
                return this.serialize();
            };
            Update.deserializeBinary = function (bytes) {
                return Update.deserialize(bytes);
            };
            return Update;
        }(pb_1.Message));
        View.Update = Update;
        var Query = /** @class */ (function (_super) {
            __extends(Query, _super);
            function Query(data) {
                var _this = _super.call(this) || this;
                pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], []);
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("query" in data && data.query != undefined) {
                        _this.query = data.query;
                    }
                    if ("transform_results" in data && data.transform_results != undefined) {
                        _this.transform_results = data.transform_results;
                    }
                }
                return _this;
            }
            Object.defineProperty(Query.prototype, "query", {
                get: function () {
                    return pb_1.Message.getField(this, 3);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 3, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(Query.prototype, "transform_results", {
                get: function () {
                    return pb_1.Message.getField(this, 4);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 4, value);
                },
                enumerable: false,
                configurable: true
            });
            Query.prototype.toObject = function () {
                var data = {};
                if (this.query != null) {
                    data.query = this.query;
                }
                if (this.transform_results != null) {
                    data.transform_results = this.transform_results;
                }
                return data;
            };
            Query.prototype.serialize = function (w) {
                var writer = w || new pb_1.BinaryWriter();
                if (typeof this.query === "string" && this.query.length)
                    writer.writeString(3, this.query);
                if (this.transform_results !== undefined)
                    writer.writeBool(4, this.transform_results);
                if (!w)
                    return writer.getResultBuffer();
            };
            Query.deserialize = function (bytes) {
                var reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new Query();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 3:
                            message.query = reader.readString();
                            break;
                        case 4:
                            message.transform_results = reader.readBool();
                            break;
                        default: reader.skipField();
                    }
                }
                return message;
            };
            Query.prototype.serializeBinary = function () {
                return this.serialize();
            };
            Query.deserializeBinary = function (bytes) {
                return Query.deserialize(bytes);
            };
            return Query;
        }(pb_1.Message));
        View.Query = Query;
    })(View = akkaserverless.View || (akkaserverless.View = {}));
})(akkaserverless = exports.akkaserverless || (exports.akkaserverless = {}));
//# sourceMappingURL=views.js.map