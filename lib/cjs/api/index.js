"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@reduxjs/toolkit/query/react");
var baseQuery_1 = __importDefault(require("./baseQuery"));
var api = (0, react_1.createApi)({
    reducerPath: 'api',
    baseQuery: baseQuery_1.default,
    endpoints: function () { return ({}); }
});
exports.default = api;
