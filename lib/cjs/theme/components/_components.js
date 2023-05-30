"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTextStyleOverrides = exports.getFlexStyleOverrides = void 0;
function getFlexStyleOverrides(props) {
    var _a;
    var styleOverrides = {};
    if ((_a = props.className) === null || _a === void 0 ? void 0 : _a.startsWith('flex')) {
        styleOverrides.display = 'flex';
        switch (props.className) {
            case 'flex-center':
                styleOverrides.justifyContent = 'center';
                styleOverrides.alignItems = 'center';
                break;
            case 'flex-center-x':
                styleOverrides.justifyContent = 'center';
                styleOverrides.alignItems = 'start';
                break;
            case 'flex-center-y':
                styleOverrides.justifyContent = 'start';
                styleOverrides.alignItems = 'center';
                break;
            case 'flex-end':
                styleOverrides.justifyContent = 'end';
                styleOverrides.alignItems = 'end';
                break;
            case 'flex-end-x':
                styleOverrides.justifyContent = 'end';
                styleOverrides.alignItems = 'start';
                break;
            case 'flex-end-y':
                styleOverrides.justifyContent = 'start';
                styleOverrides.alignItems = 'end';
                break;
        }
    }
    return styleOverrides;
}
exports.getFlexStyleOverrides = getFlexStyleOverrides;
function getTextStyleOverrides(props) {
    var styleOverrides = {};
    switch (props.className) {
        case 'nowrap-ellipsis':
            styleOverrides.whiteSpace = 'nowrap';
            styleOverrides.overflow = 'hidden';
            styleOverrides.textOverflow = 'ellipsis';
            break;
    }
    return styleOverrides;
}
exports.getTextStyleOverrides = getTextStyleOverrides;
