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
var MuiLink = {
    defaultProps: {
        underline: 'none',
        color: 'inherit'
    },
    styleOverrides: {
        root: function (_a) {
            var ownerState = _a.ownerState;
            return (__assign(__assign({ cursor: 'pointer' }, ((0, helpers_1.includesClassNames)(ownerState, ['no-decor'])
                ? {
                    ':hover': {
                        textDecoration: 'underline'
                    }
                }
                : {
                    textDecoration: 'underline',
                    ':hover': {
                        fontWeight: 'bold'
                    }
                })), ((0, helpers_1.includesClassNames)(ownerState, ['back-to']) && {
                textDecoration: 'none',
                ':hover': {
                    fontWeight: 'bold',
                    textDecoration: 'underline'
                },
                ':before': {
                    content: '"< Back to "'
                }
            })));
        }
    }
};
exports.default = MuiLink;
