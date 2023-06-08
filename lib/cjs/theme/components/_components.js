"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFontStyleOverrides = exports.getFlexStyleOverrides = void 0;
var helpers_1 = require("../../helpers");
var typography_1 = __importDefault(require("../typography"));
function getFlexStyleOverrides(props) {
    var _a;
    var styleOverrides = {};
    if ((_a = props.className) === null || _a === void 0 ? void 0 : _a.split(' ').some(function (className) {
        return className.startsWith('flex');
    })) {
        styleOverrides.display = 'flex';
        if ((0, helpers_1.includesClassNames)(props, ['flex-center'])) {
            styleOverrides.justifyContent = 'center';
            styleOverrides.alignItems = 'center';
        }
        else if ((0, helpers_1.includesClassNames)(props, ['flex-center-x'])) {
            styleOverrides.justifyContent = 'center';
            styleOverrides.alignItems = 'start';
        }
        else if ((0, helpers_1.includesClassNames)(props, ['flex-center-y'])) {
            styleOverrides.justifyContent = 'start';
            styleOverrides.alignItems = 'center';
        }
        else if ((0, helpers_1.includesClassNames)(props, ['flex-end'])) {
            styleOverrides.justifyContent = 'end';
            styleOverrides.alignItems = 'end';
        }
        else if ((0, helpers_1.includesClassNames)(props, ['flex-end-x'])) {
            styleOverrides.justifyContent = 'end';
            styleOverrides.alignItems = 'start';
        }
        else if ((0, helpers_1.includesClassNames)(props, ['flex-end-y'])) {
            styleOverrides.justifyContent = 'start';
            styleOverrides.alignItems = 'end';
        }
    }
    return styleOverrides;
}
exports.getFlexStyleOverrides = getFlexStyleOverrides;
function getFontStyleOverrides(props) {
    var styleOverrides = {};
    if ((0, helpers_1.includesClassNames)(props, ['nowrap-ellipsis'])) {
        styleOverrides.whiteSpace = 'nowrap';
        styleOverrides.overflow = 'hidden';
        styleOverrides.textOverflow = 'ellipsis';
    }
    ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body1', 'body2'
    ].forEach(function (className) {
        if (className in typography_1.default &&
            (0, helpers_1.includesClassNames)(props, [className])) {
            styleOverrides = typography_1.default[className];
        }
    });
    return styleOverrides;
}
exports.getFontStyleOverrides = getFontStyleOverrides;
