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
        var FileDescriptorSet = /** @class */ (function (_super) {
            __extends(FileDescriptorSet, _super);
            function FileDescriptorSet(data) {
                var _this = _super.call(this) || this;
                pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [1], []);
                if (!Array.isArray(data) && typeof data == "object") {
                    _this.file = data.file;
                }
                return _this;
            }
            Object.defineProperty(FileDescriptorSet.prototype, "file", {
                get: function () {
                    return pb_1.Message.getRepeatedWrapperField(this, FileDescriptorProto, 1);
                },
                set: function (value) {
                    pb_1.Message.setRepeatedWrapperField(this, 1, value);
                },
                enumerable: false,
                configurable: true
            });
            FileDescriptorSet.prototype.toObject = function () {
                var data = {
                    file: this.file.map(function (item) { return item.toObject(); })
                };
                return data;
            };
            FileDescriptorSet.prototype.serialize = function (w) {
                var writer = w || new pb_1.BinaryWriter();
                if (this.file !== undefined)
                    writer.writeRepeatedMessage(1, this.file, function (item) { return item.serialize(writer); });
                if (!w)
                    return writer.getResultBuffer();
            };
            FileDescriptorSet.deserialize = function (bytes) {
                var reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new FileDescriptorSet();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            reader.readMessage(message.file, function () { return pb_1.Message.addToRepeatedWrapperField(message, 1, FileDescriptorProto.deserialize(reader), FileDescriptorProto); });
                            break;
                        default: reader.skipField();
                    }
                }
                return message;
            };
            FileDescriptorSet.prototype.serializeBinary = function () {
                return this.serialize();
            };
            FileDescriptorSet.deserializeBinary = function (bytes) {
                return FileDescriptorSet.deserialize(bytes);
            };
            return FileDescriptorSet;
        }(pb_1.Message));
        protobuf.FileDescriptorSet = FileDescriptorSet;
        var FileDescriptorProto = /** @class */ (function (_super) {
            __extends(FileDescriptorProto, _super);
            function FileDescriptorProto(data) {
                var _this = _super.call(this) || this;
                pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [3, 10, 11, 4, 5, 6, 7], []);
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("name" in data && data.name != undefined) {
                        _this.name = data.name;
                    }
                    if ("package" in data && data.package != undefined) {
                        _this.package = data.package;
                    }
                    _this.dependency = data.dependency;
                    _this.public_dependency = data.public_dependency;
                    _this.weak_dependency = data.weak_dependency;
                    _this.message_type = data.message_type;
                    _this.enum_type = data.enum_type;
                    _this.service = data.service;
                    _this.extension = data.extension;
                    if ("options" in data && data.options != undefined) {
                        _this.options = data.options;
                    }
                    if ("source_code_info" in data && data.source_code_info != undefined) {
                        _this.source_code_info = data.source_code_info;
                    }
                    if ("syntax" in data && data.syntax != undefined) {
                        _this.syntax = data.syntax;
                    }
                }
                return _this;
            }
            Object.defineProperty(FileDescriptorProto.prototype, "name", {
                get: function () {
                    return pb_1.Message.getField(this, 1);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 1, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(FileDescriptorProto.prototype, "package", {
                get: function () {
                    return pb_1.Message.getField(this, 2);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 2, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(FileDescriptorProto.prototype, "dependency", {
                get: function () {
                    return pb_1.Message.getField(this, 3);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 3, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(FileDescriptorProto.prototype, "public_dependency", {
                get: function () {
                    return pb_1.Message.getField(this, 10);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 10, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(FileDescriptorProto.prototype, "weak_dependency", {
                get: function () {
                    return pb_1.Message.getField(this, 11);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 11, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(FileDescriptorProto.prototype, "message_type", {
                get: function () {
                    return pb_1.Message.getRepeatedWrapperField(this, DescriptorProto, 4);
                },
                set: function (value) {
                    pb_1.Message.setRepeatedWrapperField(this, 4, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(FileDescriptorProto.prototype, "enum_type", {
                get: function () {
                    return pb_1.Message.getRepeatedWrapperField(this, EnumDescriptorProto, 5);
                },
                set: function (value) {
                    pb_1.Message.setRepeatedWrapperField(this, 5, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(FileDescriptorProto.prototype, "service", {
                get: function () {
                    return pb_1.Message.getRepeatedWrapperField(this, ServiceDescriptorProto, 6);
                },
                set: function (value) {
                    pb_1.Message.setRepeatedWrapperField(this, 6, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(FileDescriptorProto.prototype, "extension", {
                get: function () {
                    return pb_1.Message.getRepeatedWrapperField(this, FieldDescriptorProto, 7);
                },
                set: function (value) {
                    pb_1.Message.setRepeatedWrapperField(this, 7, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(FileDescriptorProto.prototype, "options", {
                get: function () {
                    return pb_1.Message.getWrapperField(this, FileOptions, 8);
                },
                set: function (value) {
                    pb_1.Message.setWrapperField(this, 8, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(FileDescriptorProto.prototype, "source_code_info", {
                get: function () {
                    return pb_1.Message.getWrapperField(this, SourceCodeInfo, 9);
                },
                set: function (value) {
                    pb_1.Message.setWrapperField(this, 9, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(FileDescriptorProto.prototype, "syntax", {
                get: function () {
                    return pb_1.Message.getField(this, 12);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 12, value);
                },
                enumerable: false,
                configurable: true
            });
            FileDescriptorProto.prototype.toObject = function () {
                var data = {
                    dependency: this.dependency,
                    public_dependency: this.public_dependency,
                    weak_dependency: this.weak_dependency,
                    message_type: this.message_type.map(function (item) { return item.toObject(); }),
                    enum_type: this.enum_type.map(function (item) { return item.toObject(); }),
                    service: this.service.map(function (item) { return item.toObject(); }),
                    extension: this.extension.map(function (item) { return item.toObject(); })
                };
                if (this.name != null) {
                    data.name = this.name;
                }
                if (this.package != null) {
                    data.package = this.package;
                }
                if (this.options != null) {
                    data.options = this.options.toObject();
                }
                if (this.source_code_info != null) {
                    data.source_code_info = this.source_code_info.toObject();
                }
                if (this.syntax != null) {
                    data.syntax = this.syntax;
                }
                return data;
            };
            FileDescriptorProto.prototype.serialize = function (w) {
                var _this = this;
                var writer = w || new pb_1.BinaryWriter();
                if (typeof this.name === "string" && this.name.length)
                    writer.writeString(1, this.name);
                if (typeof this.package === "string" && this.package.length)
                    writer.writeString(2, this.package);
                if (this.dependency !== undefined)
                    writer.writeRepeatedString(3, this.dependency);
                if (this.public_dependency !== undefined)
                    writer.writePackedInt32(10, this.public_dependency);
                if (this.weak_dependency !== undefined)
                    writer.writePackedInt32(11, this.weak_dependency);
                if (this.message_type !== undefined)
                    writer.writeRepeatedMessage(4, this.message_type, function (item) { return item.serialize(writer); });
                if (this.enum_type !== undefined)
                    writer.writeRepeatedMessage(5, this.enum_type, function (item) { return item.serialize(writer); });
                if (this.service !== undefined)
                    writer.writeRepeatedMessage(6, this.service, function (item) { return item.serialize(writer); });
                if (this.extension !== undefined)
                    writer.writeRepeatedMessage(7, this.extension, function (item) { return item.serialize(writer); });
                if (this.options !== undefined)
                    writer.writeMessage(8, this.options, function () { return _this.options.serialize(writer); });
                if (this.source_code_info !== undefined)
                    writer.writeMessage(9, this.source_code_info, function () { return _this.source_code_info.serialize(writer); });
                if (typeof this.syntax === "string" && this.syntax.length)
                    writer.writeString(12, this.syntax);
                if (!w)
                    return writer.getResultBuffer();
            };
            FileDescriptorProto.deserialize = function (bytes) {
                var reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new FileDescriptorProto();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.name = reader.readString();
                            break;
                        case 2:
                            message.package = reader.readString();
                            break;
                        case 3:
                            pb_1.Message.addToRepeatedField(message, 3, reader.readString());
                            break;
                        case 10:
                            message.public_dependency = reader.readPackedInt32();
                            break;
                        case 11:
                            message.weak_dependency = reader.readPackedInt32();
                            break;
                        case 4:
                            reader.readMessage(message.message_type, function () { return pb_1.Message.addToRepeatedWrapperField(message, 4, DescriptorProto.deserialize(reader), DescriptorProto); });
                            break;
                        case 5:
                            reader.readMessage(message.enum_type, function () { return pb_1.Message.addToRepeatedWrapperField(message, 5, EnumDescriptorProto.deserialize(reader), EnumDescriptorProto); });
                            break;
                        case 6:
                            reader.readMessage(message.service, function () { return pb_1.Message.addToRepeatedWrapperField(message, 6, ServiceDescriptorProto.deserialize(reader), ServiceDescriptorProto); });
                            break;
                        case 7:
                            reader.readMessage(message.extension, function () { return pb_1.Message.addToRepeatedWrapperField(message, 7, FieldDescriptorProto.deserialize(reader), FieldDescriptorProto); });
                            break;
                        case 8:
                            reader.readMessage(message.options, function () { return message.options = FileOptions.deserialize(reader); });
                            break;
                        case 9:
                            reader.readMessage(message.source_code_info, function () { return message.source_code_info = SourceCodeInfo.deserialize(reader); });
                            break;
                        case 12:
                            message.syntax = reader.readString();
                            break;
                        default: reader.skipField();
                    }
                }
                return message;
            };
            FileDescriptorProto.prototype.serializeBinary = function () {
                return this.serialize();
            };
            FileDescriptorProto.deserializeBinary = function (bytes) {
                return FileDescriptorProto.deserialize(bytes);
            };
            return FileDescriptorProto;
        }(pb_1.Message));
        protobuf.FileDescriptorProto = FileDescriptorProto;
        var DescriptorProto = /** @class */ (function (_super) {
            __extends(DescriptorProto, _super);
            function DescriptorProto(data) {
                var _this = _super.call(this) || this;
                pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [2, 6, 3, 4, 5, 8, 9, 10], []);
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("name" in data && data.name != undefined) {
                        _this.name = data.name;
                    }
                    _this.field = data.field;
                    _this.extension = data.extension;
                    _this.nested_type = data.nested_type;
                    _this.enum_type = data.enum_type;
                    _this.extension_range = data.extension_range;
                    _this.oneof_decl = data.oneof_decl;
                    if ("options" in data && data.options != undefined) {
                        _this.options = data.options;
                    }
                    _this.reserved_range = data.reserved_range;
                    _this.reserved_name = data.reserved_name;
                }
                return _this;
            }
            Object.defineProperty(DescriptorProto.prototype, "name", {
                get: function () {
                    return pb_1.Message.getField(this, 1);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 1, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(DescriptorProto.prototype, "field", {
                get: function () {
                    return pb_1.Message.getRepeatedWrapperField(this, FieldDescriptorProto, 2);
                },
                set: function (value) {
                    pb_1.Message.setRepeatedWrapperField(this, 2, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(DescriptorProto.prototype, "extension", {
                get: function () {
                    return pb_1.Message.getRepeatedWrapperField(this, FieldDescriptorProto, 6);
                },
                set: function (value) {
                    pb_1.Message.setRepeatedWrapperField(this, 6, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(DescriptorProto.prototype, "nested_type", {
                get: function () {
                    return pb_1.Message.getRepeatedWrapperField(this, DescriptorProto, 3);
                },
                set: function (value) {
                    pb_1.Message.setRepeatedWrapperField(this, 3, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(DescriptorProto.prototype, "enum_type", {
                get: function () {
                    return pb_1.Message.getRepeatedWrapperField(this, EnumDescriptorProto, 4);
                },
                set: function (value) {
                    pb_1.Message.setRepeatedWrapperField(this, 4, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(DescriptorProto.prototype, "extension_range", {
                get: function () {
                    return pb_1.Message.getRepeatedWrapperField(this, DescriptorProto.ExtensionRange, 5);
                },
                set: function (value) {
                    pb_1.Message.setRepeatedWrapperField(this, 5, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(DescriptorProto.prototype, "oneof_decl", {
                get: function () {
                    return pb_1.Message.getRepeatedWrapperField(this, OneofDescriptorProto, 8);
                },
                set: function (value) {
                    pb_1.Message.setRepeatedWrapperField(this, 8, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(DescriptorProto.prototype, "options", {
                get: function () {
                    return pb_1.Message.getWrapperField(this, MessageOptions, 7);
                },
                set: function (value) {
                    pb_1.Message.setWrapperField(this, 7, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(DescriptorProto.prototype, "reserved_range", {
                get: function () {
                    return pb_1.Message.getRepeatedWrapperField(this, DescriptorProto.ReservedRange, 9);
                },
                set: function (value) {
                    pb_1.Message.setRepeatedWrapperField(this, 9, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(DescriptorProto.prototype, "reserved_name", {
                get: function () {
                    return pb_1.Message.getField(this, 10);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 10, value);
                },
                enumerable: false,
                configurable: true
            });
            DescriptorProto.prototype.toObject = function () {
                var data = {
                    field: this.field.map(function (item) { return item.toObject(); }),
                    extension: this.extension.map(function (item) { return item.toObject(); }),
                    nested_type: this.nested_type.map(function (item) { return item.toObject(); }),
                    enum_type: this.enum_type.map(function (item) { return item.toObject(); }),
                    extension_range: this.extension_range.map(function (item) { return item.toObject(); }),
                    oneof_decl: this.oneof_decl.map(function (item) { return item.toObject(); }),
                    reserved_range: this.reserved_range.map(function (item) { return item.toObject(); }),
                    reserved_name: this.reserved_name
                };
                if (this.name != null) {
                    data.name = this.name;
                }
                if (this.options != null) {
                    data.options = this.options.toObject();
                }
                return data;
            };
            DescriptorProto.prototype.serialize = function (w) {
                var _this = this;
                var writer = w || new pb_1.BinaryWriter();
                if (typeof this.name === "string" && this.name.length)
                    writer.writeString(1, this.name);
                if (this.field !== undefined)
                    writer.writeRepeatedMessage(2, this.field, function (item) { return item.serialize(writer); });
                if (this.extension !== undefined)
                    writer.writeRepeatedMessage(6, this.extension, function (item) { return item.serialize(writer); });
                if (this.nested_type !== undefined)
                    writer.writeRepeatedMessage(3, this.nested_type, function (item) { return item.serialize(writer); });
                if (this.enum_type !== undefined)
                    writer.writeRepeatedMessage(4, this.enum_type, function (item) { return item.serialize(writer); });
                if (this.extension_range !== undefined)
                    writer.writeRepeatedMessage(5, this.extension_range, function (item) { return item.serialize(writer); });
                if (this.oneof_decl !== undefined)
                    writer.writeRepeatedMessage(8, this.oneof_decl, function (item) { return item.serialize(writer); });
                if (this.options !== undefined)
                    writer.writeMessage(7, this.options, function () { return _this.options.serialize(writer); });
                if (this.reserved_range !== undefined)
                    writer.writeRepeatedMessage(9, this.reserved_range, function (item) { return item.serialize(writer); });
                if (this.reserved_name !== undefined)
                    writer.writeRepeatedString(10, this.reserved_name);
                if (!w)
                    return writer.getResultBuffer();
            };
            DescriptorProto.deserialize = function (bytes) {
                var reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new DescriptorProto();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.name = reader.readString();
                            break;
                        case 2:
                            reader.readMessage(message.field, function () { return pb_1.Message.addToRepeatedWrapperField(message, 2, FieldDescriptorProto.deserialize(reader), FieldDescriptorProto); });
                            break;
                        case 6:
                            reader.readMessage(message.extension, function () { return pb_1.Message.addToRepeatedWrapperField(message, 6, FieldDescriptorProto.deserialize(reader), FieldDescriptorProto); });
                            break;
                        case 3:
                            reader.readMessage(message.nested_type, function () { return pb_1.Message.addToRepeatedWrapperField(message, 3, DescriptorProto.deserialize(reader), DescriptorProto); });
                            break;
                        case 4:
                            reader.readMessage(message.enum_type, function () { return pb_1.Message.addToRepeatedWrapperField(message, 4, EnumDescriptorProto.deserialize(reader), EnumDescriptorProto); });
                            break;
                        case 5:
                            reader.readMessage(message.extension_range, function () { return pb_1.Message.addToRepeatedWrapperField(message, 5, DescriptorProto.ExtensionRange.deserialize(reader), DescriptorProto.ExtensionRange); });
                            break;
                        case 8:
                            reader.readMessage(message.oneof_decl, function () { return pb_1.Message.addToRepeatedWrapperField(message, 8, OneofDescriptorProto.deserialize(reader), OneofDescriptorProto); });
                            break;
                        case 7:
                            reader.readMessage(message.options, function () { return message.options = MessageOptions.deserialize(reader); });
                            break;
                        case 9:
                            reader.readMessage(message.reserved_range, function () { return pb_1.Message.addToRepeatedWrapperField(message, 9, DescriptorProto.ReservedRange.deserialize(reader), DescriptorProto.ReservedRange); });
                            break;
                        case 10:
                            pb_1.Message.addToRepeatedField(message, 10, reader.readString());
                            break;
                        default: reader.skipField();
                    }
                }
                return message;
            };
            DescriptorProto.prototype.serializeBinary = function () {
                return this.serialize();
            };
            DescriptorProto.deserializeBinary = function (bytes) {
                return DescriptorProto.deserialize(bytes);
            };
            return DescriptorProto;
        }(pb_1.Message));
        protobuf.DescriptorProto = DescriptorProto;
        (function (DescriptorProto) {
            var ExtensionRange = /** @class */ (function (_super) {
                __extends(ExtensionRange, _super);
                function ExtensionRange(data) {
                    var _this = _super.call(this) || this;
                    pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], []);
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("start" in data && data.start != undefined) {
                            _this.start = data.start;
                        }
                        if ("end" in data && data.end != undefined) {
                            _this.end = data.end;
                        }
                        if ("options" in data && data.options != undefined) {
                            _this.options = data.options;
                        }
                    }
                    return _this;
                }
                Object.defineProperty(ExtensionRange.prototype, "start", {
                    get: function () {
                        return pb_1.Message.getField(this, 1);
                    },
                    set: function (value) {
                        pb_1.Message.setField(this, 1, value);
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(ExtensionRange.prototype, "end", {
                    get: function () {
                        return pb_1.Message.getField(this, 2);
                    },
                    set: function (value) {
                        pb_1.Message.setField(this, 2, value);
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(ExtensionRange.prototype, "options", {
                    get: function () {
                        return pb_1.Message.getWrapperField(this, ExtensionRangeOptions, 3);
                    },
                    set: function (value) {
                        pb_1.Message.setWrapperField(this, 3, value);
                    },
                    enumerable: false,
                    configurable: true
                });
                ExtensionRange.prototype.toObject = function () {
                    var data = {};
                    if (this.start != null) {
                        data.start = this.start;
                    }
                    if (this.end != null) {
                        data.end = this.end;
                    }
                    if (this.options != null) {
                        data.options = this.options.toObject();
                    }
                    return data;
                };
                ExtensionRange.prototype.serialize = function (w) {
                    var _this = this;
                    var writer = w || new pb_1.BinaryWriter();
                    if (this.start !== undefined)
                        writer.writeInt32(1, this.start);
                    if (this.end !== undefined)
                        writer.writeInt32(2, this.end);
                    if (this.options !== undefined)
                        writer.writeMessage(3, this.options, function () { return _this.options.serialize(writer); });
                    if (!w)
                        return writer.getResultBuffer();
                };
                ExtensionRange.deserialize = function (bytes) {
                    var reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new ExtensionRange();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.start = reader.readInt32();
                                break;
                            case 2:
                                message.end = reader.readInt32();
                                break;
                            case 3:
                                reader.readMessage(message.options, function () { return message.options = ExtensionRangeOptions.deserialize(reader); });
                                break;
                            default: reader.skipField();
                        }
                    }
                    return message;
                };
                ExtensionRange.prototype.serializeBinary = function () {
                    return this.serialize();
                };
                ExtensionRange.deserializeBinary = function (bytes) {
                    return ExtensionRange.deserialize(bytes);
                };
                return ExtensionRange;
            }(pb_1.Message));
            DescriptorProto.ExtensionRange = ExtensionRange;
            var ReservedRange = /** @class */ (function (_super) {
                __extends(ReservedRange, _super);
                function ReservedRange(data) {
                    var _this = _super.call(this) || this;
                    pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], []);
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("start" in data && data.start != undefined) {
                            _this.start = data.start;
                        }
                        if ("end" in data && data.end != undefined) {
                            _this.end = data.end;
                        }
                    }
                    return _this;
                }
                Object.defineProperty(ReservedRange.prototype, "start", {
                    get: function () {
                        return pb_1.Message.getField(this, 1);
                    },
                    set: function (value) {
                        pb_1.Message.setField(this, 1, value);
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(ReservedRange.prototype, "end", {
                    get: function () {
                        return pb_1.Message.getField(this, 2);
                    },
                    set: function (value) {
                        pb_1.Message.setField(this, 2, value);
                    },
                    enumerable: false,
                    configurable: true
                });
                ReservedRange.prototype.toObject = function () {
                    var data = {};
                    if (this.start != null) {
                        data.start = this.start;
                    }
                    if (this.end != null) {
                        data.end = this.end;
                    }
                    return data;
                };
                ReservedRange.prototype.serialize = function (w) {
                    var writer = w || new pb_1.BinaryWriter();
                    if (this.start !== undefined)
                        writer.writeInt32(1, this.start);
                    if (this.end !== undefined)
                        writer.writeInt32(2, this.end);
                    if (!w)
                        return writer.getResultBuffer();
                };
                ReservedRange.deserialize = function (bytes) {
                    var reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new ReservedRange();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.start = reader.readInt32();
                                break;
                            case 2:
                                message.end = reader.readInt32();
                                break;
                            default: reader.skipField();
                        }
                    }
                    return message;
                };
                ReservedRange.prototype.serializeBinary = function () {
                    return this.serialize();
                };
                ReservedRange.deserializeBinary = function (bytes) {
                    return ReservedRange.deserialize(bytes);
                };
                return ReservedRange;
            }(pb_1.Message));
            DescriptorProto.ReservedRange = ReservedRange;
        })(DescriptorProto = protobuf.DescriptorProto || (protobuf.DescriptorProto = {}));
        var ExtensionRangeOptions = /** @class */ (function (_super) {
            __extends(ExtensionRangeOptions, _super);
            function ExtensionRangeOptions(data) {
                var _this = _super.call(this) || this;
                pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [999], []);
                if (!Array.isArray(data) && typeof data == "object") {
                    _this.uninterpreted_option = data.uninterpreted_option;
                }
                return _this;
            }
            Object.defineProperty(ExtensionRangeOptions.prototype, "uninterpreted_option", {
                get: function () {
                    return pb_1.Message.getRepeatedWrapperField(this, UninterpretedOption, 999);
                },
                set: function (value) {
                    pb_1.Message.setRepeatedWrapperField(this, 999, value);
                },
                enumerable: false,
                configurable: true
            });
            ExtensionRangeOptions.prototype.toObject = function () {
                var data = {
                    uninterpreted_option: this.uninterpreted_option.map(function (item) { return item.toObject(); })
                };
                return data;
            };
            ExtensionRangeOptions.prototype.serialize = function (w) {
                var writer = w || new pb_1.BinaryWriter();
                if (this.uninterpreted_option !== undefined)
                    writer.writeRepeatedMessage(999, this.uninterpreted_option, function (item) { return item.serialize(writer); });
                if (!w)
                    return writer.getResultBuffer();
            };
            ExtensionRangeOptions.deserialize = function (bytes) {
                var reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new ExtensionRangeOptions();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 999:
                            reader.readMessage(message.uninterpreted_option, function () { return pb_1.Message.addToRepeatedWrapperField(message, 999, UninterpretedOption.deserialize(reader), UninterpretedOption); });
                            break;
                        default: reader.skipField();
                    }
                }
                return message;
            };
            ExtensionRangeOptions.prototype.serializeBinary = function () {
                return this.serialize();
            };
            ExtensionRangeOptions.deserializeBinary = function (bytes) {
                return ExtensionRangeOptions.deserialize(bytes);
            };
            return ExtensionRangeOptions;
        }(pb_1.Message));
        protobuf.ExtensionRangeOptions = ExtensionRangeOptions;
        var FieldDescriptorProto = /** @class */ (function (_super) {
            __extends(FieldDescriptorProto, _super);
            function FieldDescriptorProto(data) {
                var _this = _super.call(this) || this;
                pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], []);
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("name" in data && data.name != undefined) {
                        _this.name = data.name;
                    }
                    if ("number" in data && data.number != undefined) {
                        _this.number = data.number;
                    }
                    if ("label" in data && data.label != undefined) {
                        _this.label = data.label;
                    }
                    if ("type" in data && data.type != undefined) {
                        _this.type = data.type;
                    }
                    if ("type_name" in data && data.type_name != undefined) {
                        _this.type_name = data.type_name;
                    }
                    if ("extendee" in data && data.extendee != undefined) {
                        _this.extendee = data.extendee;
                    }
                    if ("default_value" in data && data.default_value != undefined) {
                        _this.default_value = data.default_value;
                    }
                    if ("oneof_index" in data && data.oneof_index != undefined) {
                        _this.oneof_index = data.oneof_index;
                    }
                    if ("json_name" in data && data.json_name != undefined) {
                        _this.json_name = data.json_name;
                    }
                    if ("options" in data && data.options != undefined) {
                        _this.options = data.options;
                    }
                    if ("proto3_optional" in data && data.proto3_optional != undefined) {
                        _this.proto3_optional = data.proto3_optional;
                    }
                }
                return _this;
            }
            Object.defineProperty(FieldDescriptorProto.prototype, "name", {
                get: function () {
                    return pb_1.Message.getField(this, 1);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 1, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(FieldDescriptorProto.prototype, "number", {
                get: function () {
                    return pb_1.Message.getField(this, 3);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 3, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(FieldDescriptorProto.prototype, "label", {
                get: function () {
                    return pb_1.Message.getField(this, 4);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 4, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(FieldDescriptorProto.prototype, "type", {
                get: function () {
                    return pb_1.Message.getField(this, 5);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 5, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(FieldDescriptorProto.prototype, "type_name", {
                get: function () {
                    return pb_1.Message.getField(this, 6);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 6, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(FieldDescriptorProto.prototype, "extendee", {
                get: function () {
                    return pb_1.Message.getField(this, 2);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 2, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(FieldDescriptorProto.prototype, "default_value", {
                get: function () {
                    return pb_1.Message.getField(this, 7);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 7, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(FieldDescriptorProto.prototype, "oneof_index", {
                get: function () {
                    return pb_1.Message.getField(this, 9);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 9, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(FieldDescriptorProto.prototype, "json_name", {
                get: function () {
                    return pb_1.Message.getField(this, 10);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 10, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(FieldDescriptorProto.prototype, "options", {
                get: function () {
                    return pb_1.Message.getWrapperField(this, FieldOptions, 8);
                },
                set: function (value) {
                    pb_1.Message.setWrapperField(this, 8, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(FieldDescriptorProto.prototype, "proto3_optional", {
                get: function () {
                    return pb_1.Message.getField(this, 17);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 17, value);
                },
                enumerable: false,
                configurable: true
            });
            FieldDescriptorProto.prototype.toObject = function () {
                var data = {};
                if (this.name != null) {
                    data.name = this.name;
                }
                if (this.number != null) {
                    data.number = this.number;
                }
                if (this.label != null) {
                    data.label = this.label;
                }
                if (this.type != null) {
                    data.type = this.type;
                }
                if (this.type_name != null) {
                    data.type_name = this.type_name;
                }
                if (this.extendee != null) {
                    data.extendee = this.extendee;
                }
                if (this.default_value != null) {
                    data.default_value = this.default_value;
                }
                if (this.oneof_index != null) {
                    data.oneof_index = this.oneof_index;
                }
                if (this.json_name != null) {
                    data.json_name = this.json_name;
                }
                if (this.options != null) {
                    data.options = this.options.toObject();
                }
                if (this.proto3_optional != null) {
                    data.proto3_optional = this.proto3_optional;
                }
                return data;
            };
            FieldDescriptorProto.prototype.serialize = function (w) {
                var _this = this;
                var writer = w || new pb_1.BinaryWriter();
                if (typeof this.name === "string" && this.name.length)
                    writer.writeString(1, this.name);
                if (this.number !== undefined)
                    writer.writeInt32(3, this.number);
                if (this.label !== undefined)
                    writer.writeEnum(4, this.label);
                if (this.type !== undefined)
                    writer.writeEnum(5, this.type);
                if (typeof this.type_name === "string" && this.type_name.length)
                    writer.writeString(6, this.type_name);
                if (typeof this.extendee === "string" && this.extendee.length)
                    writer.writeString(2, this.extendee);
                if (typeof this.default_value === "string" && this.default_value.length)
                    writer.writeString(7, this.default_value);
                if (this.oneof_index !== undefined)
                    writer.writeInt32(9, this.oneof_index);
                if (typeof this.json_name === "string" && this.json_name.length)
                    writer.writeString(10, this.json_name);
                if (this.options !== undefined)
                    writer.writeMessage(8, this.options, function () { return _this.options.serialize(writer); });
                if (this.proto3_optional !== undefined)
                    writer.writeBool(17, this.proto3_optional);
                if (!w)
                    return writer.getResultBuffer();
            };
            FieldDescriptorProto.deserialize = function (bytes) {
                var reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new FieldDescriptorProto();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.name = reader.readString();
                            break;
                        case 3:
                            message.number = reader.readInt32();
                            break;
                        case 4:
                            message.label = reader.readEnum();
                            break;
                        case 5:
                            message.type = reader.readEnum();
                            break;
                        case 6:
                            message.type_name = reader.readString();
                            break;
                        case 2:
                            message.extendee = reader.readString();
                            break;
                        case 7:
                            message.default_value = reader.readString();
                            break;
                        case 9:
                            message.oneof_index = reader.readInt32();
                            break;
                        case 10:
                            message.json_name = reader.readString();
                            break;
                        case 8:
                            reader.readMessage(message.options, function () { return message.options = FieldOptions.deserialize(reader); });
                            break;
                        case 17:
                            message.proto3_optional = reader.readBool();
                            break;
                        default: reader.skipField();
                    }
                }
                return message;
            };
            FieldDescriptorProto.prototype.serializeBinary = function () {
                return this.serialize();
            };
            FieldDescriptorProto.deserializeBinary = function (bytes) {
                return FieldDescriptorProto.deserialize(bytes);
            };
            return FieldDescriptorProto;
        }(pb_1.Message));
        protobuf.FieldDescriptorProto = FieldDescriptorProto;
        (function (FieldDescriptorProto) {
            var Type;
            (function (Type) {
                Type[Type["TYPE_DOUBLE"] = 1] = "TYPE_DOUBLE";
                Type[Type["TYPE_FLOAT"] = 2] = "TYPE_FLOAT";
                Type[Type["TYPE_INT64"] = 3] = "TYPE_INT64";
                Type[Type["TYPE_UINT64"] = 4] = "TYPE_UINT64";
                Type[Type["TYPE_INT32"] = 5] = "TYPE_INT32";
                Type[Type["TYPE_FIXED64"] = 6] = "TYPE_FIXED64";
                Type[Type["TYPE_FIXED32"] = 7] = "TYPE_FIXED32";
                Type[Type["TYPE_BOOL"] = 8] = "TYPE_BOOL";
                Type[Type["TYPE_STRING"] = 9] = "TYPE_STRING";
                Type[Type["TYPE_GROUP"] = 10] = "TYPE_GROUP";
                Type[Type["TYPE_MESSAGE"] = 11] = "TYPE_MESSAGE";
                Type[Type["TYPE_BYTES"] = 12] = "TYPE_BYTES";
                Type[Type["TYPE_UINT32"] = 13] = "TYPE_UINT32";
                Type[Type["TYPE_ENUM"] = 14] = "TYPE_ENUM";
                Type[Type["TYPE_SFIXED32"] = 15] = "TYPE_SFIXED32";
                Type[Type["TYPE_SFIXED64"] = 16] = "TYPE_SFIXED64";
                Type[Type["TYPE_SINT32"] = 17] = "TYPE_SINT32";
                Type[Type["TYPE_SINT64"] = 18] = "TYPE_SINT64";
            })(Type = FieldDescriptorProto.Type || (FieldDescriptorProto.Type = {}));
            var Label;
            (function (Label) {
                Label[Label["LABEL_OPTIONAL"] = 1] = "LABEL_OPTIONAL";
                Label[Label["LABEL_REQUIRED"] = 2] = "LABEL_REQUIRED";
                Label[Label["LABEL_REPEATED"] = 3] = "LABEL_REPEATED";
            })(Label = FieldDescriptorProto.Label || (FieldDescriptorProto.Label = {}));
        })(FieldDescriptorProto = protobuf.FieldDescriptorProto || (protobuf.FieldDescriptorProto = {}));
        var OneofDescriptorProto = /** @class */ (function (_super) {
            __extends(OneofDescriptorProto, _super);
            function OneofDescriptorProto(data) {
                var _this = _super.call(this) || this;
                pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], []);
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("name" in data && data.name != undefined) {
                        _this.name = data.name;
                    }
                    if ("options" in data && data.options != undefined) {
                        _this.options = data.options;
                    }
                }
                return _this;
            }
            Object.defineProperty(OneofDescriptorProto.prototype, "name", {
                get: function () {
                    return pb_1.Message.getField(this, 1);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 1, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(OneofDescriptorProto.prototype, "options", {
                get: function () {
                    return pb_1.Message.getWrapperField(this, OneofOptions, 2);
                },
                set: function (value) {
                    pb_1.Message.setWrapperField(this, 2, value);
                },
                enumerable: false,
                configurable: true
            });
            OneofDescriptorProto.prototype.toObject = function () {
                var data = {};
                if (this.name != null) {
                    data.name = this.name;
                }
                if (this.options != null) {
                    data.options = this.options.toObject();
                }
                return data;
            };
            OneofDescriptorProto.prototype.serialize = function (w) {
                var _this = this;
                var writer = w || new pb_1.BinaryWriter();
                if (typeof this.name === "string" && this.name.length)
                    writer.writeString(1, this.name);
                if (this.options !== undefined)
                    writer.writeMessage(2, this.options, function () { return _this.options.serialize(writer); });
                if (!w)
                    return writer.getResultBuffer();
            };
            OneofDescriptorProto.deserialize = function (bytes) {
                var reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new OneofDescriptorProto();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.name = reader.readString();
                            break;
                        case 2:
                            reader.readMessage(message.options, function () { return message.options = OneofOptions.deserialize(reader); });
                            break;
                        default: reader.skipField();
                    }
                }
                return message;
            };
            OneofDescriptorProto.prototype.serializeBinary = function () {
                return this.serialize();
            };
            OneofDescriptorProto.deserializeBinary = function (bytes) {
                return OneofDescriptorProto.deserialize(bytes);
            };
            return OneofDescriptorProto;
        }(pb_1.Message));
        protobuf.OneofDescriptorProto = OneofDescriptorProto;
        var EnumDescriptorProto = /** @class */ (function (_super) {
            __extends(EnumDescriptorProto, _super);
            function EnumDescriptorProto(data) {
                var _this = _super.call(this) || this;
                pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [2, 4, 5], []);
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("name" in data && data.name != undefined) {
                        _this.name = data.name;
                    }
                    _this.value = data.value;
                    if ("options" in data && data.options != undefined) {
                        _this.options = data.options;
                    }
                    _this.reserved_range = data.reserved_range;
                    _this.reserved_name = data.reserved_name;
                }
                return _this;
            }
            Object.defineProperty(EnumDescriptorProto.prototype, "name", {
                get: function () {
                    return pb_1.Message.getField(this, 1);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 1, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(EnumDescriptorProto.prototype, "value", {
                get: function () {
                    return pb_1.Message.getRepeatedWrapperField(this, EnumValueDescriptorProto, 2);
                },
                set: function (value) {
                    pb_1.Message.setRepeatedWrapperField(this, 2, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(EnumDescriptorProto.prototype, "options", {
                get: function () {
                    return pb_1.Message.getWrapperField(this, EnumOptions, 3);
                },
                set: function (value) {
                    pb_1.Message.setWrapperField(this, 3, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(EnumDescriptorProto.prototype, "reserved_range", {
                get: function () {
                    return pb_1.Message.getRepeatedWrapperField(this, EnumDescriptorProto.EnumReservedRange, 4);
                },
                set: function (value) {
                    pb_1.Message.setRepeatedWrapperField(this, 4, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(EnumDescriptorProto.prototype, "reserved_name", {
                get: function () {
                    return pb_1.Message.getField(this, 5);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 5, value);
                },
                enumerable: false,
                configurable: true
            });
            EnumDescriptorProto.prototype.toObject = function () {
                var data = {
                    value: this.value.map(function (item) { return item.toObject(); }),
                    reserved_range: this.reserved_range.map(function (item) { return item.toObject(); }),
                    reserved_name: this.reserved_name
                };
                if (this.name != null) {
                    data.name = this.name;
                }
                if (this.options != null) {
                    data.options = this.options.toObject();
                }
                return data;
            };
            EnumDescriptorProto.prototype.serialize = function (w) {
                var _this = this;
                var writer = w || new pb_1.BinaryWriter();
                if (typeof this.name === "string" && this.name.length)
                    writer.writeString(1, this.name);
                if (this.value !== undefined)
                    writer.writeRepeatedMessage(2, this.value, function (item) { return item.serialize(writer); });
                if (this.options !== undefined)
                    writer.writeMessage(3, this.options, function () { return _this.options.serialize(writer); });
                if (this.reserved_range !== undefined)
                    writer.writeRepeatedMessage(4, this.reserved_range, function (item) { return item.serialize(writer); });
                if (this.reserved_name !== undefined)
                    writer.writeRepeatedString(5, this.reserved_name);
                if (!w)
                    return writer.getResultBuffer();
            };
            EnumDescriptorProto.deserialize = function (bytes) {
                var reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new EnumDescriptorProto();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.name = reader.readString();
                            break;
                        case 2:
                            reader.readMessage(message.value, function () { return pb_1.Message.addToRepeatedWrapperField(message, 2, EnumValueDescriptorProto.deserialize(reader), EnumValueDescriptorProto); });
                            break;
                        case 3:
                            reader.readMessage(message.options, function () { return message.options = EnumOptions.deserialize(reader); });
                            break;
                        case 4:
                            reader.readMessage(message.reserved_range, function () { return pb_1.Message.addToRepeatedWrapperField(message, 4, EnumDescriptorProto.EnumReservedRange.deserialize(reader), EnumDescriptorProto.EnumReservedRange); });
                            break;
                        case 5:
                            pb_1.Message.addToRepeatedField(message, 5, reader.readString());
                            break;
                        default: reader.skipField();
                    }
                }
                return message;
            };
            EnumDescriptorProto.prototype.serializeBinary = function () {
                return this.serialize();
            };
            EnumDescriptorProto.deserializeBinary = function (bytes) {
                return EnumDescriptorProto.deserialize(bytes);
            };
            return EnumDescriptorProto;
        }(pb_1.Message));
        protobuf.EnumDescriptorProto = EnumDescriptorProto;
        (function (EnumDescriptorProto) {
            var EnumReservedRange = /** @class */ (function (_super) {
                __extends(EnumReservedRange, _super);
                function EnumReservedRange(data) {
                    var _this = _super.call(this) || this;
                    pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], []);
                    if (!Array.isArray(data) && typeof data == "object") {
                        if ("start" in data && data.start != undefined) {
                            _this.start = data.start;
                        }
                        if ("end" in data && data.end != undefined) {
                            _this.end = data.end;
                        }
                    }
                    return _this;
                }
                Object.defineProperty(EnumReservedRange.prototype, "start", {
                    get: function () {
                        return pb_1.Message.getField(this, 1);
                    },
                    set: function (value) {
                        pb_1.Message.setField(this, 1, value);
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(EnumReservedRange.prototype, "end", {
                    get: function () {
                        return pb_1.Message.getField(this, 2);
                    },
                    set: function (value) {
                        pb_1.Message.setField(this, 2, value);
                    },
                    enumerable: false,
                    configurable: true
                });
                EnumReservedRange.prototype.toObject = function () {
                    var data = {};
                    if (this.start != null) {
                        data.start = this.start;
                    }
                    if (this.end != null) {
                        data.end = this.end;
                    }
                    return data;
                };
                EnumReservedRange.prototype.serialize = function (w) {
                    var writer = w || new pb_1.BinaryWriter();
                    if (this.start !== undefined)
                        writer.writeInt32(1, this.start);
                    if (this.end !== undefined)
                        writer.writeInt32(2, this.end);
                    if (!w)
                        return writer.getResultBuffer();
                };
                EnumReservedRange.deserialize = function (bytes) {
                    var reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new EnumReservedRange();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.start = reader.readInt32();
                                break;
                            case 2:
                                message.end = reader.readInt32();
                                break;
                            default: reader.skipField();
                        }
                    }
                    return message;
                };
                EnumReservedRange.prototype.serializeBinary = function () {
                    return this.serialize();
                };
                EnumReservedRange.deserializeBinary = function (bytes) {
                    return EnumReservedRange.deserialize(bytes);
                };
                return EnumReservedRange;
            }(pb_1.Message));
            EnumDescriptorProto.EnumReservedRange = EnumReservedRange;
        })(EnumDescriptorProto = protobuf.EnumDescriptorProto || (protobuf.EnumDescriptorProto = {}));
        var EnumValueDescriptorProto = /** @class */ (function (_super) {
            __extends(EnumValueDescriptorProto, _super);
            function EnumValueDescriptorProto(data) {
                var _this = _super.call(this) || this;
                pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], []);
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("name" in data && data.name != undefined) {
                        _this.name = data.name;
                    }
                    if ("number" in data && data.number != undefined) {
                        _this.number = data.number;
                    }
                    if ("options" in data && data.options != undefined) {
                        _this.options = data.options;
                    }
                }
                return _this;
            }
            Object.defineProperty(EnumValueDescriptorProto.prototype, "name", {
                get: function () {
                    return pb_1.Message.getField(this, 1);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 1, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(EnumValueDescriptorProto.prototype, "number", {
                get: function () {
                    return pb_1.Message.getField(this, 2);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 2, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(EnumValueDescriptorProto.prototype, "options", {
                get: function () {
                    return pb_1.Message.getWrapperField(this, EnumValueOptions, 3);
                },
                set: function (value) {
                    pb_1.Message.setWrapperField(this, 3, value);
                },
                enumerable: false,
                configurable: true
            });
            EnumValueDescriptorProto.prototype.toObject = function () {
                var data = {};
                if (this.name != null) {
                    data.name = this.name;
                }
                if (this.number != null) {
                    data.number = this.number;
                }
                if (this.options != null) {
                    data.options = this.options.toObject();
                }
                return data;
            };
            EnumValueDescriptorProto.prototype.serialize = function (w) {
                var _this = this;
                var writer = w || new pb_1.BinaryWriter();
                if (typeof this.name === "string" && this.name.length)
                    writer.writeString(1, this.name);
                if (this.number !== undefined)
                    writer.writeInt32(2, this.number);
                if (this.options !== undefined)
                    writer.writeMessage(3, this.options, function () { return _this.options.serialize(writer); });
                if (!w)
                    return writer.getResultBuffer();
            };
            EnumValueDescriptorProto.deserialize = function (bytes) {
                var reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new EnumValueDescriptorProto();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.name = reader.readString();
                            break;
                        case 2:
                            message.number = reader.readInt32();
                            break;
                        case 3:
                            reader.readMessage(message.options, function () { return message.options = EnumValueOptions.deserialize(reader); });
                            break;
                        default: reader.skipField();
                    }
                }
                return message;
            };
            EnumValueDescriptorProto.prototype.serializeBinary = function () {
                return this.serialize();
            };
            EnumValueDescriptorProto.deserializeBinary = function (bytes) {
                return EnumValueDescriptorProto.deserialize(bytes);
            };
            return EnumValueDescriptorProto;
        }(pb_1.Message));
        protobuf.EnumValueDescriptorProto = EnumValueDescriptorProto;
        var ServiceDescriptorProto = /** @class */ (function (_super) {
            __extends(ServiceDescriptorProto, _super);
            function ServiceDescriptorProto(data) {
                var _this = _super.call(this) || this;
                pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [2], []);
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("name" in data && data.name != undefined) {
                        _this.name = data.name;
                    }
                    _this.method = data.method;
                    if ("options" in data && data.options != undefined) {
                        _this.options = data.options;
                    }
                }
                return _this;
            }
            Object.defineProperty(ServiceDescriptorProto.prototype, "name", {
                get: function () {
                    return pb_1.Message.getField(this, 1);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 1, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(ServiceDescriptorProto.prototype, "method", {
                get: function () {
                    return pb_1.Message.getRepeatedWrapperField(this, MethodDescriptorProto, 2);
                },
                set: function (value) {
                    pb_1.Message.setRepeatedWrapperField(this, 2, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(ServiceDescriptorProto.prototype, "options", {
                get: function () {
                    return pb_1.Message.getWrapperField(this, ServiceOptions, 3);
                },
                set: function (value) {
                    pb_1.Message.setWrapperField(this, 3, value);
                },
                enumerable: false,
                configurable: true
            });
            ServiceDescriptorProto.prototype.toObject = function () {
                var data = {
                    method: this.method.map(function (item) { return item.toObject(); })
                };
                if (this.name != null) {
                    data.name = this.name;
                }
                if (this.options != null) {
                    data.options = this.options.toObject();
                }
                return data;
            };
            ServiceDescriptorProto.prototype.serialize = function (w) {
                var _this = this;
                var writer = w || new pb_1.BinaryWriter();
                if (typeof this.name === "string" && this.name.length)
                    writer.writeString(1, this.name);
                if (this.method !== undefined)
                    writer.writeRepeatedMessage(2, this.method, function (item) { return item.serialize(writer); });
                if (this.options !== undefined)
                    writer.writeMessage(3, this.options, function () { return _this.options.serialize(writer); });
                if (!w)
                    return writer.getResultBuffer();
            };
            ServiceDescriptorProto.deserialize = function (bytes) {
                var reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new ServiceDescriptorProto();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.name = reader.readString();
                            break;
                        case 2:
                            reader.readMessage(message.method, function () { return pb_1.Message.addToRepeatedWrapperField(message, 2, MethodDescriptorProto.deserialize(reader), MethodDescriptorProto); });
                            break;
                        case 3:
                            reader.readMessage(message.options, function () { return message.options = ServiceOptions.deserialize(reader); });
                            break;
                        default: reader.skipField();
                    }
                }
                return message;
            };
            ServiceDescriptorProto.prototype.serializeBinary = function () {
                return this.serialize();
            };
            ServiceDescriptorProto.deserializeBinary = function (bytes) {
                return ServiceDescriptorProto.deserialize(bytes);
            };
            return ServiceDescriptorProto;
        }(pb_1.Message));
        protobuf.ServiceDescriptorProto = ServiceDescriptorProto;
        var MethodDescriptorProto = /** @class */ (function (_super) {
            __extends(MethodDescriptorProto, _super);
            function MethodDescriptorProto(data) {
                var _this = _super.call(this) || this;
                pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], []);
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("name" in data && data.name != undefined) {
                        _this.name = data.name;
                    }
                    if ("input_type" in data && data.input_type != undefined) {
                        _this.input_type = data.input_type;
                    }
                    if ("output_type" in data && data.output_type != undefined) {
                        _this.output_type = data.output_type;
                    }
                    if ("options" in data && data.options != undefined) {
                        _this.options = data.options;
                    }
                    if ("client_streaming" in data && data.client_streaming != undefined) {
                        _this.client_streaming = data.client_streaming;
                    }
                    if ("server_streaming" in data && data.server_streaming != undefined) {
                        _this.server_streaming = data.server_streaming;
                    }
                }
                return _this;
            }
            Object.defineProperty(MethodDescriptorProto.prototype, "name", {
                get: function () {
                    return pb_1.Message.getField(this, 1);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 1, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(MethodDescriptorProto.prototype, "input_type", {
                get: function () {
                    return pb_1.Message.getField(this, 2);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 2, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(MethodDescriptorProto.prototype, "output_type", {
                get: function () {
                    return pb_1.Message.getField(this, 3);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 3, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(MethodDescriptorProto.prototype, "options", {
                get: function () {
                    return pb_1.Message.getWrapperField(this, MethodOptions, 4);
                },
                set: function (value) {
                    pb_1.Message.setWrapperField(this, 4, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(MethodDescriptorProto.prototype, "client_streaming", {
                get: function () {
                    return pb_1.Message.getFieldWithDefault(this, 5, false);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 5, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(MethodDescriptorProto.prototype, "server_streaming", {
                get: function () {
                    return pb_1.Message.getFieldWithDefault(this, 6, false);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 6, value);
                },
                enumerable: false,
                configurable: true
            });
            MethodDescriptorProto.prototype.toObject = function () {
                var data = {};
                if (this.name != null) {
                    data.name = this.name;
                }
                if (this.input_type != null) {
                    data.input_type = this.input_type;
                }
                if (this.output_type != null) {
                    data.output_type = this.output_type;
                }
                if (this.options != null) {
                    data.options = this.options.toObject();
                }
                if (this.client_streaming != null) {
                    data.client_streaming = this.client_streaming;
                }
                if (this.server_streaming != null) {
                    data.server_streaming = this.server_streaming;
                }
                return data;
            };
            MethodDescriptorProto.prototype.serialize = function (w) {
                var _this = this;
                var writer = w || new pb_1.BinaryWriter();
                if (typeof this.name === "string" && this.name.length)
                    writer.writeString(1, this.name);
                if (typeof this.input_type === "string" && this.input_type.length)
                    writer.writeString(2, this.input_type);
                if (typeof this.output_type === "string" && this.output_type.length)
                    writer.writeString(3, this.output_type);
                if (this.options !== undefined)
                    writer.writeMessage(4, this.options, function () { return _this.options.serialize(writer); });
                if (this.client_streaming !== undefined)
                    writer.writeBool(5, this.client_streaming);
                if (this.server_streaming !== undefined)
                    writer.writeBool(6, this.server_streaming);
                if (!w)
                    return writer.getResultBuffer();
            };
            MethodDescriptorProto.deserialize = function (bytes) {
                var reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new MethodDescriptorProto();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.name = reader.readString();
                            break;
                        case 2:
                            message.input_type = reader.readString();
                            break;
                        case 3:
                            message.output_type = reader.readString();
                            break;
                        case 4:
                            reader.readMessage(message.options, function () { return message.options = MethodOptions.deserialize(reader); });
                            break;
                        case 5:
                            message.client_streaming = reader.readBool();
                            break;
                        case 6:
                            message.server_streaming = reader.readBool();
                            break;
                        default: reader.skipField();
                    }
                }
                return message;
            };
            MethodDescriptorProto.prototype.serializeBinary = function () {
                return this.serialize();
            };
            MethodDescriptorProto.deserializeBinary = function (bytes) {
                return MethodDescriptorProto.deserialize(bytes);
            };
            return MethodDescriptorProto;
        }(pb_1.Message));
        protobuf.MethodDescriptorProto = MethodDescriptorProto;
        var FileOptions = /** @class */ (function (_super) {
            __extends(FileOptions, _super);
            function FileOptions(data) {
                var _this = _super.call(this) || this;
                pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [999], []);
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("java_package" in data && data.java_package != undefined) {
                        _this.java_package = data.java_package;
                    }
                    if ("java_outer_classname" in data && data.java_outer_classname != undefined) {
                        _this.java_outer_classname = data.java_outer_classname;
                    }
                    if ("java_multiple_files" in data && data.java_multiple_files != undefined) {
                        _this.java_multiple_files = data.java_multiple_files;
                    }
                    if ("java_generate_equals_and_hash" in data && data.java_generate_equals_and_hash != undefined) {
                        _this.java_generate_equals_and_hash = data.java_generate_equals_and_hash;
                    }
                    if ("java_string_check_utf8" in data && data.java_string_check_utf8 != undefined) {
                        _this.java_string_check_utf8 = data.java_string_check_utf8;
                    }
                    if ("optimize_for" in data && data.optimize_for != undefined) {
                        _this.optimize_for = data.optimize_for;
                    }
                    if ("go_package" in data && data.go_package != undefined) {
                        _this.go_package = data.go_package;
                    }
                    if ("cc_generic_services" in data && data.cc_generic_services != undefined) {
                        _this.cc_generic_services = data.cc_generic_services;
                    }
                    if ("java_generic_services" in data && data.java_generic_services != undefined) {
                        _this.java_generic_services = data.java_generic_services;
                    }
                    if ("py_generic_services" in data && data.py_generic_services != undefined) {
                        _this.py_generic_services = data.py_generic_services;
                    }
                    if ("php_generic_services" in data && data.php_generic_services != undefined) {
                        _this.php_generic_services = data.php_generic_services;
                    }
                    if ("deprecated" in data && data.deprecated != undefined) {
                        _this.deprecated = data.deprecated;
                    }
                    if ("cc_enable_arenas" in data && data.cc_enable_arenas != undefined) {
                        _this.cc_enable_arenas = data.cc_enable_arenas;
                    }
                    if ("objc_class_prefix" in data && data.objc_class_prefix != undefined) {
                        _this.objc_class_prefix = data.objc_class_prefix;
                    }
                    if ("csharp_namespace" in data && data.csharp_namespace != undefined) {
                        _this.csharp_namespace = data.csharp_namespace;
                    }
                    if ("swift_prefix" in data && data.swift_prefix != undefined) {
                        _this.swift_prefix = data.swift_prefix;
                    }
                    if ("php_class_prefix" in data && data.php_class_prefix != undefined) {
                        _this.php_class_prefix = data.php_class_prefix;
                    }
                    if ("php_namespace" in data && data.php_namespace != undefined) {
                        _this.php_namespace = data.php_namespace;
                    }
                    if ("php_metadata_namespace" in data && data.php_metadata_namespace != undefined) {
                        _this.php_metadata_namespace = data.php_metadata_namespace;
                    }
                    if ("ruby_package" in data && data.ruby_package != undefined) {
                        _this.ruby_package = data.ruby_package;
                    }
                    _this.uninterpreted_option = data.uninterpreted_option;
                }
                return _this;
            }
            Object.defineProperty(FileOptions.prototype, "java_package", {
                get: function () {
                    return pb_1.Message.getField(this, 1);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 1, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(FileOptions.prototype, "java_outer_classname", {
                get: function () {
                    return pb_1.Message.getField(this, 8);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 8, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(FileOptions.prototype, "java_multiple_files", {
                get: function () {
                    return pb_1.Message.getFieldWithDefault(this, 10, false);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 10, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(FileOptions.prototype, "java_generate_equals_and_hash", {
                get: function () {
                    return pb_1.Message.getField(this, 20);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 20, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(FileOptions.prototype, "java_string_check_utf8", {
                get: function () {
                    return pb_1.Message.getFieldWithDefault(this, 27, false);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 27, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(FileOptions.prototype, "optimize_for", {
                get: function () {
                    return pb_1.Message.getFieldWithDefault(this, 9, FileOptions.OptimizeMode.SPEED);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 9, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(FileOptions.prototype, "go_package", {
                get: function () {
                    return pb_1.Message.getField(this, 11);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 11, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(FileOptions.prototype, "cc_generic_services", {
                get: function () {
                    return pb_1.Message.getFieldWithDefault(this, 16, false);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 16, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(FileOptions.prototype, "java_generic_services", {
                get: function () {
                    return pb_1.Message.getFieldWithDefault(this, 17, false);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 17, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(FileOptions.prototype, "py_generic_services", {
                get: function () {
                    return pb_1.Message.getFieldWithDefault(this, 18, false);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 18, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(FileOptions.prototype, "php_generic_services", {
                get: function () {
                    return pb_1.Message.getFieldWithDefault(this, 42, false);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 42, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(FileOptions.prototype, "deprecated", {
                get: function () {
                    return pb_1.Message.getFieldWithDefault(this, 23, false);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 23, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(FileOptions.prototype, "cc_enable_arenas", {
                get: function () {
                    return pb_1.Message.getFieldWithDefault(this, 31, true);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 31, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(FileOptions.prototype, "objc_class_prefix", {
                get: function () {
                    return pb_1.Message.getField(this, 36);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 36, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(FileOptions.prototype, "csharp_namespace", {
                get: function () {
                    return pb_1.Message.getField(this, 37);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 37, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(FileOptions.prototype, "swift_prefix", {
                get: function () {
                    return pb_1.Message.getField(this, 39);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 39, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(FileOptions.prototype, "php_class_prefix", {
                get: function () {
                    return pb_1.Message.getField(this, 40);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 40, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(FileOptions.prototype, "php_namespace", {
                get: function () {
                    return pb_1.Message.getField(this, 41);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 41, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(FileOptions.prototype, "php_metadata_namespace", {
                get: function () {
                    return pb_1.Message.getField(this, 44);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 44, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(FileOptions.prototype, "ruby_package", {
                get: function () {
                    return pb_1.Message.getField(this, 45);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 45, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(FileOptions.prototype, "uninterpreted_option", {
                get: function () {
                    return pb_1.Message.getRepeatedWrapperField(this, UninterpretedOption, 999);
                },
                set: function (value) {
                    pb_1.Message.setRepeatedWrapperField(this, 999, value);
                },
                enumerable: false,
                configurable: true
            });
            FileOptions.prototype.toObject = function () {
                var data = {
                    uninterpreted_option: this.uninterpreted_option.map(function (item) { return item.toObject(); })
                };
                if (this.java_package != null) {
                    data.java_package = this.java_package;
                }
                if (this.java_outer_classname != null) {
                    data.java_outer_classname = this.java_outer_classname;
                }
                if (this.java_multiple_files != null) {
                    data.java_multiple_files = this.java_multiple_files;
                }
                if (this.java_generate_equals_and_hash != null) {
                    data.java_generate_equals_and_hash = this.java_generate_equals_and_hash;
                }
                if (this.java_string_check_utf8 != null) {
                    data.java_string_check_utf8 = this.java_string_check_utf8;
                }
                if (this.optimize_for != null) {
                    data.optimize_for = this.optimize_for;
                }
                if (this.go_package != null) {
                    data.go_package = this.go_package;
                }
                if (this.cc_generic_services != null) {
                    data.cc_generic_services = this.cc_generic_services;
                }
                if (this.java_generic_services != null) {
                    data.java_generic_services = this.java_generic_services;
                }
                if (this.py_generic_services != null) {
                    data.py_generic_services = this.py_generic_services;
                }
                if (this.php_generic_services != null) {
                    data.php_generic_services = this.php_generic_services;
                }
                if (this.deprecated != null) {
                    data.deprecated = this.deprecated;
                }
                if (this.cc_enable_arenas != null) {
                    data.cc_enable_arenas = this.cc_enable_arenas;
                }
                if (this.objc_class_prefix != null) {
                    data.objc_class_prefix = this.objc_class_prefix;
                }
                if (this.csharp_namespace != null) {
                    data.csharp_namespace = this.csharp_namespace;
                }
                if (this.swift_prefix != null) {
                    data.swift_prefix = this.swift_prefix;
                }
                if (this.php_class_prefix != null) {
                    data.php_class_prefix = this.php_class_prefix;
                }
                if (this.php_namespace != null) {
                    data.php_namespace = this.php_namespace;
                }
                if (this.php_metadata_namespace != null) {
                    data.php_metadata_namespace = this.php_metadata_namespace;
                }
                if (this.ruby_package != null) {
                    data.ruby_package = this.ruby_package;
                }
                return data;
            };
            FileOptions.prototype.serialize = function (w) {
                var writer = w || new pb_1.BinaryWriter();
                if (typeof this.java_package === "string" && this.java_package.length)
                    writer.writeString(1, this.java_package);
                if (typeof this.java_outer_classname === "string" && this.java_outer_classname.length)
                    writer.writeString(8, this.java_outer_classname);
                if (this.java_multiple_files !== undefined)
                    writer.writeBool(10, this.java_multiple_files);
                if (this.java_generate_equals_and_hash !== undefined)
                    writer.writeBool(20, this.java_generate_equals_and_hash);
                if (this.java_string_check_utf8 !== undefined)
                    writer.writeBool(27, this.java_string_check_utf8);
                if (this.optimize_for !== undefined)
                    writer.writeEnum(9, this.optimize_for);
                if (typeof this.go_package === "string" && this.go_package.length)
                    writer.writeString(11, this.go_package);
                if (this.cc_generic_services !== undefined)
                    writer.writeBool(16, this.cc_generic_services);
                if (this.java_generic_services !== undefined)
                    writer.writeBool(17, this.java_generic_services);
                if (this.py_generic_services !== undefined)
                    writer.writeBool(18, this.py_generic_services);
                if (this.php_generic_services !== undefined)
                    writer.writeBool(42, this.php_generic_services);
                if (this.deprecated !== undefined)
                    writer.writeBool(23, this.deprecated);
                if (this.cc_enable_arenas !== undefined)
                    writer.writeBool(31, this.cc_enable_arenas);
                if (typeof this.objc_class_prefix === "string" && this.objc_class_prefix.length)
                    writer.writeString(36, this.objc_class_prefix);
                if (typeof this.csharp_namespace === "string" && this.csharp_namespace.length)
                    writer.writeString(37, this.csharp_namespace);
                if (typeof this.swift_prefix === "string" && this.swift_prefix.length)
                    writer.writeString(39, this.swift_prefix);
                if (typeof this.php_class_prefix === "string" && this.php_class_prefix.length)
                    writer.writeString(40, this.php_class_prefix);
                if (typeof this.php_namespace === "string" && this.php_namespace.length)
                    writer.writeString(41, this.php_namespace);
                if (typeof this.php_metadata_namespace === "string" && this.php_metadata_namespace.length)
                    writer.writeString(44, this.php_metadata_namespace);
                if (typeof this.ruby_package === "string" && this.ruby_package.length)
                    writer.writeString(45, this.ruby_package);
                if (this.uninterpreted_option !== undefined)
                    writer.writeRepeatedMessage(999, this.uninterpreted_option, function (item) { return item.serialize(writer); });
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
                            message.java_package = reader.readString();
                            break;
                        case 8:
                            message.java_outer_classname = reader.readString();
                            break;
                        case 10:
                            message.java_multiple_files = reader.readBool();
                            break;
                        case 20:
                            message.java_generate_equals_and_hash = reader.readBool();
                            break;
                        case 27:
                            message.java_string_check_utf8 = reader.readBool();
                            break;
                        case 9:
                            message.optimize_for = reader.readEnum();
                            break;
                        case 11:
                            message.go_package = reader.readString();
                            break;
                        case 16:
                            message.cc_generic_services = reader.readBool();
                            break;
                        case 17:
                            message.java_generic_services = reader.readBool();
                            break;
                        case 18:
                            message.py_generic_services = reader.readBool();
                            break;
                        case 42:
                            message.php_generic_services = reader.readBool();
                            break;
                        case 23:
                            message.deprecated = reader.readBool();
                            break;
                        case 31:
                            message.cc_enable_arenas = reader.readBool();
                            break;
                        case 36:
                            message.objc_class_prefix = reader.readString();
                            break;
                        case 37:
                            message.csharp_namespace = reader.readString();
                            break;
                        case 39:
                            message.swift_prefix = reader.readString();
                            break;
                        case 40:
                            message.php_class_prefix = reader.readString();
                            break;
                        case 41:
                            message.php_namespace = reader.readString();
                            break;
                        case 44:
                            message.php_metadata_namespace = reader.readString();
                            break;
                        case 45:
                            message.ruby_package = reader.readString();
                            break;
                        case 999:
                            reader.readMessage(message.uninterpreted_option, function () { return pb_1.Message.addToRepeatedWrapperField(message, 999, UninterpretedOption.deserialize(reader), UninterpretedOption); });
                            break;
                        default: reader.skipField();
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
        protobuf.FileOptions = FileOptions;
        (function (FileOptions) {
            var OptimizeMode;
            (function (OptimizeMode) {
                OptimizeMode[OptimizeMode["SPEED"] = 1] = "SPEED";
                OptimizeMode[OptimizeMode["CODE_SIZE"] = 2] = "CODE_SIZE";
                OptimizeMode[OptimizeMode["LITE_RUNTIME"] = 3] = "LITE_RUNTIME";
            })(OptimizeMode = FileOptions.OptimizeMode || (FileOptions.OptimizeMode = {}));
        })(FileOptions = protobuf.FileOptions || (protobuf.FileOptions = {}));
        var MessageOptions = /** @class */ (function (_super) {
            __extends(MessageOptions, _super);
            function MessageOptions(data) {
                var _this = _super.call(this) || this;
                pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [999], []);
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("message_set_wire_format" in data && data.message_set_wire_format != undefined) {
                        _this.message_set_wire_format = data.message_set_wire_format;
                    }
                    if ("no_standard_descriptor_accessor" in data && data.no_standard_descriptor_accessor != undefined) {
                        _this.no_standard_descriptor_accessor = data.no_standard_descriptor_accessor;
                    }
                    if ("deprecated" in data && data.deprecated != undefined) {
                        _this.deprecated = data.deprecated;
                    }
                    if ("map_entry" in data && data.map_entry != undefined) {
                        _this.map_entry = data.map_entry;
                    }
                    _this.uninterpreted_option = data.uninterpreted_option;
                }
                return _this;
            }
            Object.defineProperty(MessageOptions.prototype, "message_set_wire_format", {
                get: function () {
                    return pb_1.Message.getFieldWithDefault(this, 1, false);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 1, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(MessageOptions.prototype, "no_standard_descriptor_accessor", {
                get: function () {
                    return pb_1.Message.getFieldWithDefault(this, 2, false);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 2, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(MessageOptions.prototype, "deprecated", {
                get: function () {
                    return pb_1.Message.getFieldWithDefault(this, 3, false);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 3, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(MessageOptions.prototype, "map_entry", {
                get: function () {
                    return pb_1.Message.getField(this, 7);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 7, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(MessageOptions.prototype, "uninterpreted_option", {
                get: function () {
                    return pb_1.Message.getRepeatedWrapperField(this, UninterpretedOption, 999);
                },
                set: function (value) {
                    pb_1.Message.setRepeatedWrapperField(this, 999, value);
                },
                enumerable: false,
                configurable: true
            });
            MessageOptions.prototype.toObject = function () {
                var data = {
                    uninterpreted_option: this.uninterpreted_option.map(function (item) { return item.toObject(); })
                };
                if (this.message_set_wire_format != null) {
                    data.message_set_wire_format = this.message_set_wire_format;
                }
                if (this.no_standard_descriptor_accessor != null) {
                    data.no_standard_descriptor_accessor = this.no_standard_descriptor_accessor;
                }
                if (this.deprecated != null) {
                    data.deprecated = this.deprecated;
                }
                if (this.map_entry != null) {
                    data.map_entry = this.map_entry;
                }
                return data;
            };
            MessageOptions.prototype.serialize = function (w) {
                var writer = w || new pb_1.BinaryWriter();
                if (this.message_set_wire_format !== undefined)
                    writer.writeBool(1, this.message_set_wire_format);
                if (this.no_standard_descriptor_accessor !== undefined)
                    writer.writeBool(2, this.no_standard_descriptor_accessor);
                if (this.deprecated !== undefined)
                    writer.writeBool(3, this.deprecated);
                if (this.map_entry !== undefined)
                    writer.writeBool(7, this.map_entry);
                if (this.uninterpreted_option !== undefined)
                    writer.writeRepeatedMessage(999, this.uninterpreted_option, function (item) { return item.serialize(writer); });
                if (!w)
                    return writer.getResultBuffer();
            };
            MessageOptions.deserialize = function (bytes) {
                var reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new MessageOptions();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.message_set_wire_format = reader.readBool();
                            break;
                        case 2:
                            message.no_standard_descriptor_accessor = reader.readBool();
                            break;
                        case 3:
                            message.deprecated = reader.readBool();
                            break;
                        case 7:
                            message.map_entry = reader.readBool();
                            break;
                        case 999:
                            reader.readMessage(message.uninterpreted_option, function () { return pb_1.Message.addToRepeatedWrapperField(message, 999, UninterpretedOption.deserialize(reader), UninterpretedOption); });
                            break;
                        default: reader.skipField();
                    }
                }
                return message;
            };
            MessageOptions.prototype.serializeBinary = function () {
                return this.serialize();
            };
            MessageOptions.deserializeBinary = function (bytes) {
                return MessageOptions.deserialize(bytes);
            };
            return MessageOptions;
        }(pb_1.Message));
        protobuf.MessageOptions = MessageOptions;
        var FieldOptions = /** @class */ (function (_super) {
            __extends(FieldOptions, _super);
            function FieldOptions(data) {
                var _this = _super.call(this) || this;
                pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [999], []);
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("ctype" in data && data.ctype != undefined) {
                        _this.ctype = data.ctype;
                    }
                    if ("packed" in data && data.packed != undefined) {
                        _this.packed = data.packed;
                    }
                    if ("jstype" in data && data.jstype != undefined) {
                        _this.jstype = data.jstype;
                    }
                    if ("lazy" in data && data.lazy != undefined) {
                        _this.lazy = data.lazy;
                    }
                    if ("deprecated" in data && data.deprecated != undefined) {
                        _this.deprecated = data.deprecated;
                    }
                    if ("weak" in data && data.weak != undefined) {
                        _this.weak = data.weak;
                    }
                    _this.uninterpreted_option = data.uninterpreted_option;
                }
                return _this;
            }
            Object.defineProperty(FieldOptions.prototype, "ctype", {
                get: function () {
                    return pb_1.Message.getFieldWithDefault(this, 1, FieldOptions.CType.STRING);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 1, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(FieldOptions.prototype, "packed", {
                get: function () {
                    return pb_1.Message.getField(this, 2);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 2, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(FieldOptions.prototype, "jstype", {
                get: function () {
                    return pb_1.Message.getFieldWithDefault(this, 6, FieldOptions.JSType.JS_NORMAL);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 6, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(FieldOptions.prototype, "lazy", {
                get: function () {
                    return pb_1.Message.getFieldWithDefault(this, 5, false);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 5, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(FieldOptions.prototype, "deprecated", {
                get: function () {
                    return pb_1.Message.getFieldWithDefault(this, 3, false);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 3, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(FieldOptions.prototype, "weak", {
                get: function () {
                    return pb_1.Message.getFieldWithDefault(this, 10, false);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 10, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(FieldOptions.prototype, "uninterpreted_option", {
                get: function () {
                    return pb_1.Message.getRepeatedWrapperField(this, UninterpretedOption, 999);
                },
                set: function (value) {
                    pb_1.Message.setRepeatedWrapperField(this, 999, value);
                },
                enumerable: false,
                configurable: true
            });
            FieldOptions.prototype.toObject = function () {
                var data = {
                    uninterpreted_option: this.uninterpreted_option.map(function (item) { return item.toObject(); })
                };
                if (this.ctype != null) {
                    data.ctype = this.ctype;
                }
                if (this.packed != null) {
                    data.packed = this.packed;
                }
                if (this.jstype != null) {
                    data.jstype = this.jstype;
                }
                if (this.lazy != null) {
                    data.lazy = this.lazy;
                }
                if (this.deprecated != null) {
                    data.deprecated = this.deprecated;
                }
                if (this.weak != null) {
                    data.weak = this.weak;
                }
                return data;
            };
            FieldOptions.prototype.serialize = function (w) {
                var writer = w || new pb_1.BinaryWriter();
                if (this.ctype !== undefined)
                    writer.writeEnum(1, this.ctype);
                if (this.packed !== undefined)
                    writer.writeBool(2, this.packed);
                if (this.jstype !== undefined)
                    writer.writeEnum(6, this.jstype);
                if (this.lazy !== undefined)
                    writer.writeBool(5, this.lazy);
                if (this.deprecated !== undefined)
                    writer.writeBool(3, this.deprecated);
                if (this.weak !== undefined)
                    writer.writeBool(10, this.weak);
                if (this.uninterpreted_option !== undefined)
                    writer.writeRepeatedMessage(999, this.uninterpreted_option, function (item) { return item.serialize(writer); });
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
                            message.ctype = reader.readEnum();
                            break;
                        case 2:
                            message.packed = reader.readBool();
                            break;
                        case 6:
                            message.jstype = reader.readEnum();
                            break;
                        case 5:
                            message.lazy = reader.readBool();
                            break;
                        case 3:
                            message.deprecated = reader.readBool();
                            break;
                        case 10:
                            message.weak = reader.readBool();
                            break;
                        case 999:
                            reader.readMessage(message.uninterpreted_option, function () { return pb_1.Message.addToRepeatedWrapperField(message, 999, UninterpretedOption.deserialize(reader), UninterpretedOption); });
                            break;
                        default: reader.skipField();
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
        protobuf.FieldOptions = FieldOptions;
        (function (FieldOptions) {
            var CType;
            (function (CType) {
                CType[CType["STRING"] = 0] = "STRING";
                CType[CType["CORD"] = 1] = "CORD";
                CType[CType["STRING_PIECE"] = 2] = "STRING_PIECE";
            })(CType = FieldOptions.CType || (FieldOptions.CType = {}));
            var JSType;
            (function (JSType) {
                JSType[JSType["JS_NORMAL"] = 0] = "JS_NORMAL";
                JSType[JSType["JS_STRING"] = 1] = "JS_STRING";
                JSType[JSType["JS_NUMBER"] = 2] = "JS_NUMBER";
            })(JSType = FieldOptions.JSType || (FieldOptions.JSType = {}));
        })(FieldOptions = protobuf.FieldOptions || (protobuf.FieldOptions = {}));
        var OneofOptions = /** @class */ (function (_super) {
            __extends(OneofOptions, _super);
            function OneofOptions(data) {
                var _this = _super.call(this) || this;
                pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [999], []);
                if (!Array.isArray(data) && typeof data == "object") {
                    _this.uninterpreted_option = data.uninterpreted_option;
                }
                return _this;
            }
            Object.defineProperty(OneofOptions.prototype, "uninterpreted_option", {
                get: function () {
                    return pb_1.Message.getRepeatedWrapperField(this, UninterpretedOption, 999);
                },
                set: function (value) {
                    pb_1.Message.setRepeatedWrapperField(this, 999, value);
                },
                enumerable: false,
                configurable: true
            });
            OneofOptions.prototype.toObject = function () {
                var data = {
                    uninterpreted_option: this.uninterpreted_option.map(function (item) { return item.toObject(); })
                };
                return data;
            };
            OneofOptions.prototype.serialize = function (w) {
                var writer = w || new pb_1.BinaryWriter();
                if (this.uninterpreted_option !== undefined)
                    writer.writeRepeatedMessage(999, this.uninterpreted_option, function (item) { return item.serialize(writer); });
                if (!w)
                    return writer.getResultBuffer();
            };
            OneofOptions.deserialize = function (bytes) {
                var reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new OneofOptions();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 999:
                            reader.readMessage(message.uninterpreted_option, function () { return pb_1.Message.addToRepeatedWrapperField(message, 999, UninterpretedOption.deserialize(reader), UninterpretedOption); });
                            break;
                        default: reader.skipField();
                    }
                }
                return message;
            };
            OneofOptions.prototype.serializeBinary = function () {
                return this.serialize();
            };
            OneofOptions.deserializeBinary = function (bytes) {
                return OneofOptions.deserialize(bytes);
            };
            return OneofOptions;
        }(pb_1.Message));
        protobuf.OneofOptions = OneofOptions;
        var EnumOptions = /** @class */ (function (_super) {
            __extends(EnumOptions, _super);
            function EnumOptions(data) {
                var _this = _super.call(this) || this;
                pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [999], []);
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("allow_alias" in data && data.allow_alias != undefined) {
                        _this.allow_alias = data.allow_alias;
                    }
                    if ("deprecated" in data && data.deprecated != undefined) {
                        _this.deprecated = data.deprecated;
                    }
                    _this.uninterpreted_option = data.uninterpreted_option;
                }
                return _this;
            }
            Object.defineProperty(EnumOptions.prototype, "allow_alias", {
                get: function () {
                    return pb_1.Message.getField(this, 2);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 2, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(EnumOptions.prototype, "deprecated", {
                get: function () {
                    return pb_1.Message.getFieldWithDefault(this, 3, false);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 3, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(EnumOptions.prototype, "uninterpreted_option", {
                get: function () {
                    return pb_1.Message.getRepeatedWrapperField(this, UninterpretedOption, 999);
                },
                set: function (value) {
                    pb_1.Message.setRepeatedWrapperField(this, 999, value);
                },
                enumerable: false,
                configurable: true
            });
            EnumOptions.prototype.toObject = function () {
                var data = {
                    uninterpreted_option: this.uninterpreted_option.map(function (item) { return item.toObject(); })
                };
                if (this.allow_alias != null) {
                    data.allow_alias = this.allow_alias;
                }
                if (this.deprecated != null) {
                    data.deprecated = this.deprecated;
                }
                return data;
            };
            EnumOptions.prototype.serialize = function (w) {
                var writer = w || new pb_1.BinaryWriter();
                if (this.allow_alias !== undefined)
                    writer.writeBool(2, this.allow_alias);
                if (this.deprecated !== undefined)
                    writer.writeBool(3, this.deprecated);
                if (this.uninterpreted_option !== undefined)
                    writer.writeRepeatedMessage(999, this.uninterpreted_option, function (item) { return item.serialize(writer); });
                if (!w)
                    return writer.getResultBuffer();
            };
            EnumOptions.deserialize = function (bytes) {
                var reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new EnumOptions();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 2:
                            message.allow_alias = reader.readBool();
                            break;
                        case 3:
                            message.deprecated = reader.readBool();
                            break;
                        case 999:
                            reader.readMessage(message.uninterpreted_option, function () { return pb_1.Message.addToRepeatedWrapperField(message, 999, UninterpretedOption.deserialize(reader), UninterpretedOption); });
                            break;
                        default: reader.skipField();
                    }
                }
                return message;
            };
            EnumOptions.prototype.serializeBinary = function () {
                return this.serialize();
            };
            EnumOptions.deserializeBinary = function (bytes) {
                return EnumOptions.deserialize(bytes);
            };
            return EnumOptions;
        }(pb_1.Message));
        protobuf.EnumOptions = EnumOptions;
        var EnumValueOptions = /** @class */ (function (_super) {
            __extends(EnumValueOptions, _super);
            function EnumValueOptions(data) {
                var _this = _super.call(this) || this;
                pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [999], []);
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("deprecated" in data && data.deprecated != undefined) {
                        _this.deprecated = data.deprecated;
                    }
                    _this.uninterpreted_option = data.uninterpreted_option;
                }
                return _this;
            }
            Object.defineProperty(EnumValueOptions.prototype, "deprecated", {
                get: function () {
                    return pb_1.Message.getFieldWithDefault(this, 1, false);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 1, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(EnumValueOptions.prototype, "uninterpreted_option", {
                get: function () {
                    return pb_1.Message.getRepeatedWrapperField(this, UninterpretedOption, 999);
                },
                set: function (value) {
                    pb_1.Message.setRepeatedWrapperField(this, 999, value);
                },
                enumerable: false,
                configurable: true
            });
            EnumValueOptions.prototype.toObject = function () {
                var data = {
                    uninterpreted_option: this.uninterpreted_option.map(function (item) { return item.toObject(); })
                };
                if (this.deprecated != null) {
                    data.deprecated = this.deprecated;
                }
                return data;
            };
            EnumValueOptions.prototype.serialize = function (w) {
                var writer = w || new pb_1.BinaryWriter();
                if (this.deprecated !== undefined)
                    writer.writeBool(1, this.deprecated);
                if (this.uninterpreted_option !== undefined)
                    writer.writeRepeatedMessage(999, this.uninterpreted_option, function (item) { return item.serialize(writer); });
                if (!w)
                    return writer.getResultBuffer();
            };
            EnumValueOptions.deserialize = function (bytes) {
                var reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new EnumValueOptions();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.deprecated = reader.readBool();
                            break;
                        case 999:
                            reader.readMessage(message.uninterpreted_option, function () { return pb_1.Message.addToRepeatedWrapperField(message, 999, UninterpretedOption.deserialize(reader), UninterpretedOption); });
                            break;
                        default: reader.skipField();
                    }
                }
                return message;
            };
            EnumValueOptions.prototype.serializeBinary = function () {
                return this.serialize();
            };
            EnumValueOptions.deserializeBinary = function (bytes) {
                return EnumValueOptions.deserialize(bytes);
            };
            return EnumValueOptions;
        }(pb_1.Message));
        protobuf.EnumValueOptions = EnumValueOptions;
        var ServiceOptions = /** @class */ (function (_super) {
            __extends(ServiceOptions, _super);
            function ServiceOptions(data) {
                var _this = _super.call(this) || this;
                pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [999], []);
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("deprecated" in data && data.deprecated != undefined) {
                        _this.deprecated = data.deprecated;
                    }
                    _this.uninterpreted_option = data.uninterpreted_option;
                }
                return _this;
            }
            Object.defineProperty(ServiceOptions.prototype, "deprecated", {
                get: function () {
                    return pb_1.Message.getFieldWithDefault(this, 33, false);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 33, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(ServiceOptions.prototype, "uninterpreted_option", {
                get: function () {
                    return pb_1.Message.getRepeatedWrapperField(this, UninterpretedOption, 999);
                },
                set: function (value) {
                    pb_1.Message.setRepeatedWrapperField(this, 999, value);
                },
                enumerable: false,
                configurable: true
            });
            ServiceOptions.prototype.toObject = function () {
                var data = {
                    uninterpreted_option: this.uninterpreted_option.map(function (item) { return item.toObject(); })
                };
                if (this.deprecated != null) {
                    data.deprecated = this.deprecated;
                }
                return data;
            };
            ServiceOptions.prototype.serialize = function (w) {
                var writer = w || new pb_1.BinaryWriter();
                if (this.deprecated !== undefined)
                    writer.writeBool(33, this.deprecated);
                if (this.uninterpreted_option !== undefined)
                    writer.writeRepeatedMessage(999, this.uninterpreted_option, function (item) { return item.serialize(writer); });
                if (!w)
                    return writer.getResultBuffer();
            };
            ServiceOptions.deserialize = function (bytes) {
                var reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new ServiceOptions();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 33:
                            message.deprecated = reader.readBool();
                            break;
                        case 999:
                            reader.readMessage(message.uninterpreted_option, function () { return pb_1.Message.addToRepeatedWrapperField(message, 999, UninterpretedOption.deserialize(reader), UninterpretedOption); });
                            break;
                        default: reader.skipField();
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
        protobuf.ServiceOptions = ServiceOptions;
        var MethodOptions = /** @class */ (function (_super) {
            __extends(MethodOptions, _super);
            function MethodOptions(data) {
                var _this = _super.call(this) || this;
                pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [999], []);
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("deprecated" in data && data.deprecated != undefined) {
                        _this.deprecated = data.deprecated;
                    }
                    if ("idempotency_level" in data && data.idempotency_level != undefined) {
                        _this.idempotency_level = data.idempotency_level;
                    }
                    _this.uninterpreted_option = data.uninterpreted_option;
                }
                return _this;
            }
            Object.defineProperty(MethodOptions.prototype, "deprecated", {
                get: function () {
                    return pb_1.Message.getFieldWithDefault(this, 33, false);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 33, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(MethodOptions.prototype, "idempotency_level", {
                get: function () {
                    return pb_1.Message.getFieldWithDefault(this, 34, MethodOptions.IdempotencyLevel.IDEMPOTENCY_UNKNOWN);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 34, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(MethodOptions.prototype, "uninterpreted_option", {
                get: function () {
                    return pb_1.Message.getRepeatedWrapperField(this, UninterpretedOption, 999);
                },
                set: function (value) {
                    pb_1.Message.setRepeatedWrapperField(this, 999, value);
                },
                enumerable: false,
                configurable: true
            });
            MethodOptions.prototype.toObject = function () {
                var data = {
                    uninterpreted_option: this.uninterpreted_option.map(function (item) { return item.toObject(); })
                };
                if (this.deprecated != null) {
                    data.deprecated = this.deprecated;
                }
                if (this.idempotency_level != null) {
                    data.idempotency_level = this.idempotency_level;
                }
                return data;
            };
            MethodOptions.prototype.serialize = function (w) {
                var writer = w || new pb_1.BinaryWriter();
                if (this.deprecated !== undefined)
                    writer.writeBool(33, this.deprecated);
                if (this.idempotency_level !== undefined)
                    writer.writeEnum(34, this.idempotency_level);
                if (this.uninterpreted_option !== undefined)
                    writer.writeRepeatedMessage(999, this.uninterpreted_option, function (item) { return item.serialize(writer); });
                if (!w)
                    return writer.getResultBuffer();
            };
            MethodOptions.deserialize = function (bytes) {
                var reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new MethodOptions();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 33:
                            message.deprecated = reader.readBool();
                            break;
                        case 34:
                            message.idempotency_level = reader.readEnum();
                            break;
                        case 999:
                            reader.readMessage(message.uninterpreted_option, function () { return pb_1.Message.addToRepeatedWrapperField(message, 999, UninterpretedOption.deserialize(reader), UninterpretedOption); });
                            break;
                        default: reader.skipField();
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
        protobuf.MethodOptions = MethodOptions;
        (function (MethodOptions) {
            var IdempotencyLevel;
            (function (IdempotencyLevel) {
                IdempotencyLevel[IdempotencyLevel["IDEMPOTENCY_UNKNOWN"] = 0] = "IDEMPOTENCY_UNKNOWN";
                IdempotencyLevel[IdempotencyLevel["NO_SIDE_EFFECTS"] = 1] = "NO_SIDE_EFFECTS";
                IdempotencyLevel[IdempotencyLevel["IDEMPOTENT"] = 2] = "IDEMPOTENT";
            })(IdempotencyLevel = MethodOptions.IdempotencyLevel || (MethodOptions.IdempotencyLevel = {}));
        })(MethodOptions = protobuf.MethodOptions || (protobuf.MethodOptions = {}));
        var UninterpretedOption = /** @class */ (function (_super) {
            __extends(UninterpretedOption, _super);
            function UninterpretedOption(data) {
                var _this = _super.call(this) || this;
                pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [2], []);
                if (!Array.isArray(data) && typeof data == "object") {
                    _this.name = data.name;
                    if ("identifier_value" in data && data.identifier_value != undefined) {
                        _this.identifier_value = data.identifier_value;
                    }
                    if ("positive_int_value" in data && data.positive_int_value != undefined) {
                        _this.positive_int_value = data.positive_int_value;
                    }
                    if ("negative_int_value" in data && data.negative_int_value != undefined) {
                        _this.negative_int_value = data.negative_int_value;
                    }
                    if ("double_value" in data && data.double_value != undefined) {
                        _this.double_value = data.double_value;
                    }
                    if ("string_value" in data && data.string_value != undefined) {
                        _this.string_value = data.string_value;
                    }
                    if ("aggregate_value" in data && data.aggregate_value != undefined) {
                        _this.aggregate_value = data.aggregate_value;
                    }
                }
                return _this;
            }
            Object.defineProperty(UninterpretedOption.prototype, "name", {
                get: function () {
                    return pb_1.Message.getRepeatedWrapperField(this, UninterpretedOption.NamePart, 2);
                },
                set: function (value) {
                    pb_1.Message.setRepeatedWrapperField(this, 2, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(UninterpretedOption.prototype, "identifier_value", {
                get: function () {
                    return pb_1.Message.getField(this, 3);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 3, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(UninterpretedOption.prototype, "positive_int_value", {
                get: function () {
                    return pb_1.Message.getField(this, 4);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 4, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(UninterpretedOption.prototype, "negative_int_value", {
                get: function () {
                    return pb_1.Message.getField(this, 5);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 5, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(UninterpretedOption.prototype, "double_value", {
                get: function () {
                    return pb_1.Message.getField(this, 6);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 6, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(UninterpretedOption.prototype, "string_value", {
                get: function () {
                    return pb_1.Message.getField(this, 7);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 7, value);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(UninterpretedOption.prototype, "aggregate_value", {
                get: function () {
                    return pb_1.Message.getField(this, 8);
                },
                set: function (value) {
                    pb_1.Message.setField(this, 8, value);
                },
                enumerable: false,
                configurable: true
            });
            UninterpretedOption.prototype.toObject = function () {
                var data = {
                    name: this.name.map(function (item) { return item.toObject(); })
                };
                if (this.identifier_value != null) {
                    data.identifier_value = this.identifier_value;
                }
                if (this.positive_int_value != null) {
                    data.positive_int_value = this.positive_int_value;
                }
                if (this.negative_int_value != null) {
                    data.negative_int_value = this.negative_int_value;
                }
                if (this.double_value != null) {
                    data.double_value = this.double_value;
                }
                if (this.string_value != null) {
                    data.string_value = this.string_value;
                }
                if (this.aggregate_value != null) {
                    data.aggregate_value = this.aggregate_value;
                }
                return data;
            };
            UninterpretedOption.prototype.serialize = function (w) {
                var writer = w || new pb_1.BinaryWriter();
                if (this.name !== undefined)
                    writer.writeRepeatedMessage(2, this.name, function (item) { return item.serialize(writer); });
                if (typeof this.identifier_value === "string" && this.identifier_value.length)
                    writer.writeString(3, this.identifier_value);
                if (this.positive_int_value !== undefined)
                    writer.writeUint64(4, this.positive_int_value);
                if (this.negative_int_value !== undefined)
                    writer.writeInt64(5, this.negative_int_value);
                if (this.double_value !== undefined)
                    writer.writeDouble(6, this.double_value);
                if (this.string_value !== undefined)
                    writer.writeBytes(7, this.string_value);
                if (typeof this.aggregate_value === "string" && this.aggregate_value.length)
                    writer.writeString(8, this.aggregate_value);
                if (!w)
                    return writer.getResultBuffer();
            };
            UninterpretedOption.deserialize = function (bytes) {
                var reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new UninterpretedOption();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 2:
                            reader.readMessage(message.name, function () { return pb_1.Message.addToRepeatedWrapperField(message, 2, UninterpretedOption.NamePart.deserialize(reader), UninterpretedOption.NamePart); });
                            break;
                        case 3:
                            message.identifier_value = reader.readString();
                            break;
                        case 4:
                            message.positive_int_value = reader.readUint64();
                            break;
                        case 5:
                            message.negative_int_value = reader.readInt64();
                            break;
                        case 6:
                            message.double_value = reader.readDouble();
                            break;
                        case 7:
                            message.string_value = reader.readBytes();
                            break;
                        case 8:
                            message.aggregate_value = reader.readString();
                            break;
                        default: reader.skipField();
                    }
                }
                return message;
            };
            UninterpretedOption.prototype.serializeBinary = function () {
                return this.serialize();
            };
            UninterpretedOption.deserializeBinary = function (bytes) {
                return UninterpretedOption.deserialize(bytes);
            };
            return UninterpretedOption;
        }(pb_1.Message));
        protobuf.UninterpretedOption = UninterpretedOption;
        (function (UninterpretedOption) {
            var NamePart = /** @class */ (function (_super) {
                __extends(NamePart, _super);
                function NamePart(data) {
                    var _this = _super.call(this) || this;
                    pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], []);
                    if (!Array.isArray(data) && typeof data == "object") {
                        _this.name_part = data.name_part;
                        _this.is_extension = data.is_extension;
                    }
                    return _this;
                }
                Object.defineProperty(NamePart.prototype, "name_part", {
                    get: function () {
                        return pb_1.Message.getField(this, 1);
                    },
                    set: function (value) {
                        pb_1.Message.setField(this, 1, value);
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(NamePart.prototype, "is_extension", {
                    get: function () {
                        return pb_1.Message.getField(this, 2);
                    },
                    set: function (value) {
                        pb_1.Message.setField(this, 2, value);
                    },
                    enumerable: false,
                    configurable: true
                });
                NamePart.prototype.toObject = function () {
                    var data = {
                        name_part: this.name_part,
                        is_extension: this.is_extension
                    };
                    return data;
                };
                NamePart.prototype.serialize = function (w) {
                    var writer = w || new pb_1.BinaryWriter();
                    if (typeof this.name_part === "string" && this.name_part.length)
                        writer.writeString(1, this.name_part);
                    if (this.is_extension !== undefined)
                        writer.writeBool(2, this.is_extension);
                    if (!w)
                        return writer.getResultBuffer();
                };
                NamePart.deserialize = function (bytes) {
                    var reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new NamePart();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.name_part = reader.readString();
                                break;
                            case 2:
                                message.is_extension = reader.readBool();
                                break;
                            default: reader.skipField();
                        }
                    }
                    return message;
                };
                NamePart.prototype.serializeBinary = function () {
                    return this.serialize();
                };
                NamePart.deserializeBinary = function (bytes) {
                    return NamePart.deserialize(bytes);
                };
                return NamePart;
            }(pb_1.Message));
            UninterpretedOption.NamePart = NamePart;
        })(UninterpretedOption = protobuf.UninterpretedOption || (protobuf.UninterpretedOption = {}));
        var SourceCodeInfo = /** @class */ (function (_super) {
            __extends(SourceCodeInfo, _super);
            function SourceCodeInfo(data) {
                var _this = _super.call(this) || this;
                pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [1], []);
                if (!Array.isArray(data) && typeof data == "object") {
                    _this.location = data.location;
                }
                return _this;
            }
            Object.defineProperty(SourceCodeInfo.prototype, "location", {
                get: function () {
                    return pb_1.Message.getRepeatedWrapperField(this, SourceCodeInfo.Location, 1);
                },
                set: function (value) {
                    pb_1.Message.setRepeatedWrapperField(this, 1, value);
                },
                enumerable: false,
                configurable: true
            });
            SourceCodeInfo.prototype.toObject = function () {
                var data = {
                    location: this.location.map(function (item) { return item.toObject(); })
                };
                return data;
            };
            SourceCodeInfo.prototype.serialize = function (w) {
                var writer = w || new pb_1.BinaryWriter();
                if (this.location !== undefined)
                    writer.writeRepeatedMessage(1, this.location, function (item) { return item.serialize(writer); });
                if (!w)
                    return writer.getResultBuffer();
            };
            SourceCodeInfo.deserialize = function (bytes) {
                var reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new SourceCodeInfo();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            reader.readMessage(message.location, function () { return pb_1.Message.addToRepeatedWrapperField(message, 1, SourceCodeInfo.Location.deserialize(reader), SourceCodeInfo.Location); });
                            break;
                        default: reader.skipField();
                    }
                }
                return message;
            };
            SourceCodeInfo.prototype.serializeBinary = function () {
                return this.serialize();
            };
            SourceCodeInfo.deserializeBinary = function (bytes) {
                return SourceCodeInfo.deserialize(bytes);
            };
            return SourceCodeInfo;
        }(pb_1.Message));
        protobuf.SourceCodeInfo = SourceCodeInfo;
        (function (SourceCodeInfo) {
            var Location = /** @class */ (function (_super) {
                __extends(Location, _super);
                function Location(data) {
                    var _this = _super.call(this) || this;
                    pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [1, 2, 6], []);
                    if (!Array.isArray(data) && typeof data == "object") {
                        _this.path = data.path;
                        _this.span = data.span;
                        if ("leading_comments" in data && data.leading_comments != undefined) {
                            _this.leading_comments = data.leading_comments;
                        }
                        if ("trailing_comments" in data && data.trailing_comments != undefined) {
                            _this.trailing_comments = data.trailing_comments;
                        }
                        _this.leading_detached_comments = data.leading_detached_comments;
                    }
                    return _this;
                }
                Object.defineProperty(Location.prototype, "path", {
                    get: function () {
                        return pb_1.Message.getField(this, 1);
                    },
                    set: function (value) {
                        pb_1.Message.setField(this, 1, value);
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Location.prototype, "span", {
                    get: function () {
                        return pb_1.Message.getField(this, 2);
                    },
                    set: function (value) {
                        pb_1.Message.setField(this, 2, value);
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Location.prototype, "leading_comments", {
                    get: function () {
                        return pb_1.Message.getField(this, 3);
                    },
                    set: function (value) {
                        pb_1.Message.setField(this, 3, value);
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Location.prototype, "trailing_comments", {
                    get: function () {
                        return pb_1.Message.getField(this, 4);
                    },
                    set: function (value) {
                        pb_1.Message.setField(this, 4, value);
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Location.prototype, "leading_detached_comments", {
                    get: function () {
                        return pb_1.Message.getField(this, 6);
                    },
                    set: function (value) {
                        pb_1.Message.setField(this, 6, value);
                    },
                    enumerable: false,
                    configurable: true
                });
                Location.prototype.toObject = function () {
                    var data = {
                        path: this.path,
                        span: this.span,
                        leading_detached_comments: this.leading_detached_comments
                    };
                    if (this.leading_comments != null) {
                        data.leading_comments = this.leading_comments;
                    }
                    if (this.trailing_comments != null) {
                        data.trailing_comments = this.trailing_comments;
                    }
                    return data;
                };
                Location.prototype.serialize = function (w) {
                    var writer = w || new pb_1.BinaryWriter();
                    if (this.path !== undefined)
                        writer.writePackedInt32(1, this.path);
                    if (this.span !== undefined)
                        writer.writePackedInt32(2, this.span);
                    if (typeof this.leading_comments === "string" && this.leading_comments.length)
                        writer.writeString(3, this.leading_comments);
                    if (typeof this.trailing_comments === "string" && this.trailing_comments.length)
                        writer.writeString(4, this.trailing_comments);
                    if (this.leading_detached_comments !== undefined)
                        writer.writeRepeatedString(6, this.leading_detached_comments);
                    if (!w)
                        return writer.getResultBuffer();
                };
                Location.deserialize = function (bytes) {
                    var reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new Location();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.path = reader.readPackedInt32();
                                break;
                            case 2:
                                message.span = reader.readPackedInt32();
                                break;
                            case 3:
                                message.leading_comments = reader.readString();
                                break;
                            case 4:
                                message.trailing_comments = reader.readString();
                                break;
                            case 6:
                                pb_1.Message.addToRepeatedField(message, 6, reader.readString());
                                break;
                            default: reader.skipField();
                        }
                    }
                    return message;
                };
                Location.prototype.serializeBinary = function () {
                    return this.serialize();
                };
                Location.deserializeBinary = function (bytes) {
                    return Location.deserialize(bytes);
                };
                return Location;
            }(pb_1.Message));
            SourceCodeInfo.Location = Location;
        })(SourceCodeInfo = protobuf.SourceCodeInfo || (protobuf.SourceCodeInfo = {}));
        var GeneratedCodeInfo = /** @class */ (function (_super) {
            __extends(GeneratedCodeInfo, _super);
            function GeneratedCodeInfo(data) {
                var _this = _super.call(this) || this;
                pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [1], []);
                if (!Array.isArray(data) && typeof data == "object") {
                    _this.annotation = data.annotation;
                }
                return _this;
            }
            Object.defineProperty(GeneratedCodeInfo.prototype, "annotation", {
                get: function () {
                    return pb_1.Message.getRepeatedWrapperField(this, GeneratedCodeInfo.Annotation, 1);
                },
                set: function (value) {
                    pb_1.Message.setRepeatedWrapperField(this, 1, value);
                },
                enumerable: false,
                configurable: true
            });
            GeneratedCodeInfo.prototype.toObject = function () {
                var data = {
                    annotation: this.annotation.map(function (item) { return item.toObject(); })
                };
                return data;
            };
            GeneratedCodeInfo.prototype.serialize = function (w) {
                var writer = w || new pb_1.BinaryWriter();
                if (this.annotation !== undefined)
                    writer.writeRepeatedMessage(1, this.annotation, function (item) { return item.serialize(writer); });
                if (!w)
                    return writer.getResultBuffer();
            };
            GeneratedCodeInfo.deserialize = function (bytes) {
                var reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new GeneratedCodeInfo();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            reader.readMessage(message.annotation, function () { return pb_1.Message.addToRepeatedWrapperField(message, 1, GeneratedCodeInfo.Annotation.deserialize(reader), GeneratedCodeInfo.Annotation); });
                            break;
                        default: reader.skipField();
                    }
                }
                return message;
            };
            GeneratedCodeInfo.prototype.serializeBinary = function () {
                return this.serialize();
            };
            GeneratedCodeInfo.deserializeBinary = function (bytes) {
                return GeneratedCodeInfo.deserialize(bytes);
            };
            return GeneratedCodeInfo;
        }(pb_1.Message));
        protobuf.GeneratedCodeInfo = GeneratedCodeInfo;
        (function (GeneratedCodeInfo) {
            var Annotation = /** @class */ (function (_super) {
                __extends(Annotation, _super);
                function Annotation(data) {
                    var _this = _super.call(this) || this;
                    pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [1], []);
                    if (!Array.isArray(data) && typeof data == "object") {
                        _this.path = data.path;
                        if ("source_file" in data && data.source_file != undefined) {
                            _this.source_file = data.source_file;
                        }
                        if ("begin" in data && data.begin != undefined) {
                            _this.begin = data.begin;
                        }
                        if ("end" in data && data.end != undefined) {
                            _this.end = data.end;
                        }
                    }
                    return _this;
                }
                Object.defineProperty(Annotation.prototype, "path", {
                    get: function () {
                        return pb_1.Message.getField(this, 1);
                    },
                    set: function (value) {
                        pb_1.Message.setField(this, 1, value);
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Annotation.prototype, "source_file", {
                    get: function () {
                        return pb_1.Message.getField(this, 2);
                    },
                    set: function (value) {
                        pb_1.Message.setField(this, 2, value);
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Annotation.prototype, "begin", {
                    get: function () {
                        return pb_1.Message.getField(this, 3);
                    },
                    set: function (value) {
                        pb_1.Message.setField(this, 3, value);
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Annotation.prototype, "end", {
                    get: function () {
                        return pb_1.Message.getField(this, 4);
                    },
                    set: function (value) {
                        pb_1.Message.setField(this, 4, value);
                    },
                    enumerable: false,
                    configurable: true
                });
                Annotation.prototype.toObject = function () {
                    var data = {
                        path: this.path
                    };
                    if (this.source_file != null) {
                        data.source_file = this.source_file;
                    }
                    if (this.begin != null) {
                        data.begin = this.begin;
                    }
                    if (this.end != null) {
                        data.end = this.end;
                    }
                    return data;
                };
                Annotation.prototype.serialize = function (w) {
                    var writer = w || new pb_1.BinaryWriter();
                    if (this.path !== undefined)
                        writer.writePackedInt32(1, this.path);
                    if (typeof this.source_file === "string" && this.source_file.length)
                        writer.writeString(2, this.source_file);
                    if (this.begin !== undefined)
                        writer.writeInt32(3, this.begin);
                    if (this.end !== undefined)
                        writer.writeInt32(4, this.end);
                    if (!w)
                        return writer.getResultBuffer();
                };
                Annotation.deserialize = function (bytes) {
                    var reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new Annotation();
                    while (reader.nextField()) {
                        if (reader.isEndGroup())
                            break;
                        switch (reader.getFieldNumber()) {
                            case 1:
                                message.path = reader.readPackedInt32();
                                break;
                            case 2:
                                message.source_file = reader.readString();
                                break;
                            case 3:
                                message.begin = reader.readInt32();
                                break;
                            case 4:
                                message.end = reader.readInt32();
                                break;
                            default: reader.skipField();
                        }
                    }
                    return message;
                };
                Annotation.prototype.serializeBinary = function () {
                    return this.serialize();
                };
                Annotation.deserializeBinary = function (bytes) {
                    return Annotation.deserialize(bytes);
                };
                return Annotation;
            }(pb_1.Message));
            GeneratedCodeInfo.Annotation = Annotation;
        })(GeneratedCodeInfo = protobuf.GeneratedCodeInfo || (protobuf.GeneratedCodeInfo = {}));
    })(protobuf = google.protobuf || (google.protobuf = {}));
})(google = exports.google || (exports.google = {}));
//# sourceMappingURL=descriptor.js.map