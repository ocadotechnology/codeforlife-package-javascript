"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSearchParams = exports.stringToBoolean = exports.insertDividerBetweenElements = exports.openInNewTab = void 0;
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var material_1 = require("@mui/material");
function openInNewTab(url, target) {
    if (target === void 0) { target = '_blank'; }
    window.open(url, target);
}
exports.openInNewTab = openInNewTab;
function insertDividerBetweenElements(_a) {
    var elements = _a.elements, dividerProps = _a.dividerProps;
    return elements.map(function (element, index) { return react_1.default.createElement(react_1.default.Fragment, null,
        element,
        index !== elements.length - 1
            ? react_1.default.createElement(material_1.Divider, __assign({}, dividerProps))
            : undefined); });
}
exports.insertDividerBetweenElements = insertDividerBetweenElements;
function stringToBoolean(value) {
    return value.toLowerCase() !== 'false' && value !== '0';
}
exports.stringToBoolean = stringToBoolean;
function getSearchParams(requiredParams, optionalParams) {
    if (requiredParams === void 0) { requiredParams = {}; }
    if (optionalParams === void 0) { optionalParams = {}; }
    var searchParams = (0, react_router_dom_1.useSearchParams)()[0];
    if (Object
        .keys(requiredParams)
        .some(function (name) { return searchParams.get(name) === null; })) {
        return null;
    }
    var params = __assign(__assign({}, requiredParams), Object.fromEntries(Object.keys(optionalParams)
        .filter(function (name) { return searchParams.get(name) !== null; })
        .map(function (name) { return [name, optionalParams[name]]; })));
    return Object.fromEntries(Object.entries(params)
        .map(function (_a) {
        var key = _a[0], value = _a[1];
        return [key, value(searchParams.get(key))];
    }));
}
exports.getSearchParams = getSearchParams;
