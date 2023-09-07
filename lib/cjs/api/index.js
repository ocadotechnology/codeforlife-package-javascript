"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseQuery = exports.TAG_TYPES = void 0;
var react_1 = require("@reduxjs/toolkit/query/react");
var baseQuery_1 = __importDefault(require("./baseQuery"));
exports.baseQuery = baseQuery_1.default;
exports.TAG_TYPES = [
    'user',
    'school',
    'class',
    'teacher',
    'student'
];
var api = (0, react_1.createApi)({
    reducerPath: 'api',
    baseQuery: baseQuery_1.default,
    endpoints: function () { return ({}); },
    tagTypes: exports.TAG_TYPES
});
exports.default = api;
