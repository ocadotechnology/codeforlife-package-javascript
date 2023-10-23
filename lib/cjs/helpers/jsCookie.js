"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSession = void 0;
var js_cookie_1 = __importDefault(require("js-cookie"));
function getSession() {
    var cookie = js_cookie_1.default.get('sessionid_httponly_false');
    if (cookie === undefined)
        return undefined;
    var session = JSON.parse(cookie);
    return {
        userId: session.user_id,
        authFactors: session.auth_factors
    };
}
exports.getSession = getSession;
