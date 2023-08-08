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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
exports.parseResponseBody = exports.handleResponseError = exports.parseRequestBody = void 0;
var query_1 = require("@reduxjs/toolkit/query");
var qs_1 = __importDefault(require("qs"));
var general_1 = require("../helpers/general");
var env_1 = require("../env");
var fetch = (0, query_1.fetchBaseQuery)({
    baseUrl: env_1.API_BASE_URL,
    credentials: 'include'
});
function parseRequestBody(args) {
    // Check if the request has a body and its content type is specified.
    if (typeof args.body !== 'object' || args.body === null)
        return;
    (0, general_1.camelCaseToSnakeCase)(args.body);
    if (args.headers !== undefined && 'Content-Type' in args.headers) {
        // Stringify the request body based on its content type.
        switch (args.headers['Content-Type']) {
            case 'application/x-www-form-urlencoded':
                args.body = qs_1.default.stringify(args.body);
                break;
            case 'application/json':
                args.body = JSON.stringify(args.body);
                break;
        }
    }
}
exports.parseRequestBody = parseRequestBody;
function handleResponseError(result) {
    // Check if errors.
    if (result.error === undefined)
        return;
    if (result.error.status === 400 &&
        typeof result.error.data === 'object' &&
        result.error.data !== null) {
        // Parse the error's data from snake_case to camelCase.
        (0, general_1.snakeCaseToCamelCase)(result.error.data);
    }
    else if (result.error.status === 401) {
        // TODO: redirect to appropriate login page based on user type.
        window.location.href = "".concat(env_1.PORTAL_BASE_URL, "/login/teacher");
    }
    else {
        // Catch-all error pages by status-code.
        window.location.href = "".concat(env_1.PORTAL_BASE_URL, "/error/").concat([
            403,
            404
        ].includes(result.error.status)
            ? result.error.status
            : 500);
    }
}
exports.handleResponseError = handleResponseError;
function parseResponseBody(result) {
    // Parse the response's data from snake_case to camelCase.
    if (typeof result.data !== 'object' || result.data === null)
        return;
    (0, general_1.snakeCaseToCamelCase)(result.data);
}
exports.parseResponseBody = parseResponseBody;
var baseQuery = function (args, api, extraOptions) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                parseRequestBody(args);
                return [4 /*yield*/, fetch(args, api, extraOptions)];
            case 1:
                result = _a.sent();
                handleResponseError(result);
                parseResponseBody(result);
                return [2 /*return*/, result];
        }
    });
}); };
exports.default = baseQuery;
