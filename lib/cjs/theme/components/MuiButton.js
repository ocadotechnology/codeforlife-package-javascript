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
Object.defineProperty(exports, "__esModule", { value: true });
var material_1 = require("@mui/material");
var _components_1 = require("./_components");
var helpers_1 = require("../../helpers");
var MuiButton = {
    defaultProps: {
        variant: 'contained',
        size: 'medium'
    },
    styleOverrides: {
        root: function (_a) {
            var ownerState = _a.ownerState;
            return (__assign(__assign({ color: 'black', textTransform: 'none', textAlign: 'center', borderRadius: '0px', padding: '11px 12px', height: '42px', whiteSpace: 'nowrap', width: 'fit-content', minWidth: '150px', boxShadow: 'none' }, (ownerState.size === 'small' && {
                height: '27px',
                padding: '4.5px 9px',
                letterSpacing: '0'
            })), (0, _components_1.getFontStyleOverrides)(ownerState)));
        },
        contained: function (_a) {
            var _b, _c;
            var ownerState = _a.ownerState;
            return (__assign((_b = { backgroundColor: '#ffd23b', '&:hover': {
                        backgroundColor: '#ffc709',
                        boxShadow: [
                            '0px 6px 10px 0px rgba(0, 0, 0, 0.14)',
                            '0px 1px 18px 0px rgba(0, 0, 0, 0.12)',
                            '0px 3px 5px 0px rgba(0, 0, 0, 0.2);'
                        ].join()
                    } }, _b["&.".concat(material_1.buttonClasses.disabled)] = {
                backgroundColor: '#ffe382',
                color: '#7A5F01'
            }, _b), ((0, helpers_1.includesClassNames)(ownerState, ['alert']) && (_c = {
                    color: 'white',
                    backgroundColor: '#ff0000',
                    '&:hover': {
                        backgroundColor: '#df0531'
                    }
                },
                _c["&.".concat(material_1.buttonClasses.disabled)] = {
                    backgroundColor: '#E76A6A',
                    color: 'white'
                },
                _c))));
        },
        outlined: {
            border: '2px solid #eab502',
            '&:hover': {
                border: '2px solid #eab502',
                backgroundColor: 'transparent',
                textDecoration: 'underline'
            }
        }
    }
};
exports.default = MuiButton;
