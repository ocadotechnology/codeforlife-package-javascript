"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLazyGetCsrfCookieQuery = exports.useGetCsrfCookieQuery = void 0;
var react_1 = require("@reduxjs/toolkit/query/react");
var baseQuery_1 = __importDefault(require("./baseQuery"));
var api = (0, react_1.createApi)({
    reducerPath: 'api',
    baseQuery: baseQuery_1.default,
    endpoints: function (builder) { return ({
        getCsrfCookie: builder.query({
            query: function () { return ({
                url: 'csrf/cookie/',
                method: 'GET'
            }); }
        })
        // TODO: add logout endpoint.
    }); }
});
exports.default = api;
exports.useGetCsrfCookieQuery = api.useGetCsrfCookieQuery, exports.useLazyGetCsrfCookieQuery = api.useLazyGetCsrfCookieQuery;
