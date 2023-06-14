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
exports.getFontStyleOverrides = exports.getFlexStyleOverrides = void 0;
var helpers_1 = require("../../helpers");
var typography_1 = __importDefault(require("../typography"));
function getFlexStyleOverrides(props) {
    var styleOverrides = {};
    var classNames = (0, helpers_1.getClassNames)(props);
    if (classNames.some(function (className) { return className.startsWith('flex-'); })) {
        styleOverrides.display = 'flex';
        if ((0, helpers_1.includesClassNames)(classNames, ['flex-center'])) {
            styleOverrides.justifyContent = 'center';
            styleOverrides.alignItems = 'center';
        }
        else if ((0, helpers_1.includesClassNames)(classNames, ['flex-center-x'])) {
            styleOverrides.justifyContent = 'center';
            styleOverrides.alignItems = 'start';
        }
        else if ((0, helpers_1.includesClassNames)(classNames, ['flex-center-y'])) {
            styleOverrides.justifyContent = 'start';
            styleOverrides.alignItems = 'center';
        }
        else if ((0, helpers_1.includesClassNames)(classNames, ['flex-end'])) {
            styleOverrides.justifyContent = 'end';
            styleOverrides.alignItems = 'end';
        }
        else if ((0, helpers_1.includesClassNames)(classNames, ['flex-end-x'])) {
            styleOverrides.justifyContent = 'end';
            styleOverrides.alignItems = 'start';
        }
        else if ((0, helpers_1.includesClassNames)(classNames, ['flex-end-y'])) {
            styleOverrides.justifyContent = 'start';
            styleOverrides.alignItems = 'end';
        }
    }
    return styleOverrides;
}
exports.getFlexStyleOverrides = getFlexStyleOverrides;
function getFontStyleOverrides(props) {
    var styleOverrides = {};
    var classNames = (0, helpers_1.getClassNames)(props);
    if ((0, helpers_1.includesClassNames)(classNames, ['nowrap-ellipsis'])) {
        styleOverrides.whiteSpace = 'nowrap';
        styleOverrides.overflow = 'hidden';
        styleOverrides.textOverflow = 'ellipsis';
    }
    ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body1', 'body2']
        .filter(function (className) { return className in typography_1.default; })
        .forEach(function (className) {
        var typographyClass = typography_1.default[className];
        if ((0, helpers_1.includesClassNames)(classNames, [className])) {
            styleOverrides = __assign(__assign({}, styleOverrides), typographyClass);
        }
        (0, helpers_1.matchClassNames)(classNames, new RegExp("^".concat(className, "-(\\w+)$"))).forEach(function (match) {
            var prop = match[1];
            if (prop in typographyClass) {
                styleOverrides[prop] = typographyClass[prop];
            }
        });
    });
    return styleOverrides;
}
exports.getFontStyleOverrides = getFontStyleOverrides;
