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
var helpers_1 = require("../../helpers");
var colors_1 = require("../colors");
var MuiMenuItem = {
    styleOverrides: {
        root: function (_a) {
            var ownerState = _a.ownerState;
            return (__assign(__assign({}, ((0, helpers_1.includesClassNames)(ownerState, ['header']) && {
                pointerEvents: 'none',
                fontWeight: 'bold'
            })), ((0, helpers_1.includesClassNames)(ownerState, ['button']) && {
                fontSize: '14px !important',
                margin: 0,
                padding: '6px 12px 6px 16px',
                border: "2px solid ".concat(colors_1.secondary[500]),
                borderTop: 'none',
                ':hover': {
                    textDecoration: 'underline',
                    backgroundColor: 'transparent'
                }
            })));
        }
    }
};
exports.default = MuiMenuItem;
