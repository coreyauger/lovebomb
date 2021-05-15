"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var instagram_web_api_1 = __importDefault(require("instagram-web-api"));
var dotenv_1 = __importDefault(require("dotenv"));
var user_service_1 = require("./proto/user-service");
var grpc_js_1 = require("@grpc/grpc-js");
dotenv_1.default.config();
var _a = process.env, username = _a.username, password = _a.password;
console.log("username", username);
var toLoveBombUser = function (x) {
    return ({
        username: x.username,
        /** IG fields */
        biography: x.biography,
        externalUrl: x.external_url || "",
        followedByCount: x.edge_followed_by.count,
        fbid: x.fbid,
        followCount: x.edge_follow.count,
        fullName: x.full_name,
        id: x.id,
        isBusinessAccount: x.is_business_account,
        isProfessionalAccount: x.is_professional_account,
        isJoinedRecently: x.is_joined_recently,
        categoryName: x.category_name || "",
        profilePicUrl: x.profile_pic_url || "",
        profilePicUrlHd: x.profile_pic_url_hd || "",
        shouldShowCategory: x.should_show_category,
        /** extended fields */
        bomberScore: 0,
    });
};
var client = new instagram_web_api_1.default({ username: username, password: password });
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var userClient, profile, lovebombs;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                userClient = new user_service_1.UserServiceClient("plain-feather-8545.us-east1.apps.akkaserverless.dev:443", grpc_js_1.credentials.createSsl());
                userClient.saveUser({
                    username: "testing-123",
                    /** IG fields */
                    biography: "biography",
                    externalUrl: "externalUrl",
                    followedByCount: 10,
                    fbid: "1234",
                    followCount: 1,
                    fullName: "Mr Test",
                    id: "id",
                    isBusinessAccount: false,
                    isProfessionalAccount: false,
                    isJoinedRecently: true,
                    categoryName: "categoryName",
                    profilePicUrl: "",
                    profilePicUrlHd: "",
                    shouldShowCategory: true,
                    /** extended fields */
                    bomberScore: 0,
                }, function (err, respons) {
                    console.log("ERROR?", err);
                });
                return [4 /*yield*/, client.login()];
            case 1:
                _a.sent();
                return [4 /*yield*/, client.getProfile()];
            case 2:
                profile = _a.sent();
                console.log(profile);
                return [4 /*yield*/, client.getPhotosByHashtag({ hashtag: "lovebomb" })];
            case 3:
                lovebombs = _a.sent();
                lovebombs.hashtag.edge_hashtag_to_media.edges.map(function (post) { return __awaiter(void 0, void 0, void 0, function () {
                    var media, owner;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                console.log(post);
                                console.log(post.node.owner);
                                return [4 /*yield*/, client.getMediaByShortcode({
                                        shortcode: post.node.shortcode,
                                    })];
                            case 1:
                                media = _a.sent();
                                console.log("**", media);
                                return [4 /*yield*/, client.getUserByUsername({
                                        username: media.owner.username,
                                    })];
                            case 2:
                                owner = _a.sent();
                                console.log("~~", owner);
                                userClient.saveUser(toLoveBombUser(owner), function (err, respons) {
                                    console.log("ERROR?", err);
                                });
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
        }
    });
}); })();
//# sourceMappingURL=index.js.map