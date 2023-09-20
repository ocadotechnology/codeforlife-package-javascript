"use strict";
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PORTAL_BASE_URL = exports.API_BASE_URL = exports.SERVICE_NAME = void 0;
exports.SERVICE_NAME = (_a = process.env.REACT_APP_SERVICE_NAME) !== null && _a !== void 0 ? _a : 'REPLACE_ME';
exports.API_BASE_URL = (_b = process.env.REACT_APP_API_BASE_URL) !== null && _b !== void 0 ? _b : 'http://localhost:8000/api/';
exports.PORTAL_BASE_URL = (_c = process.env.REACT_APP_PORTAL_BASE_URL) !== null && _c !== void 0 ? _c : 'http://localhost:3000';
