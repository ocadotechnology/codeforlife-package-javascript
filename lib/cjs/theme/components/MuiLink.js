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
var _components_1 = require("./_components");
var helpers_1 = require("../../helpers");
var MuiLink = {
    defaultProps: {
        underline: 'hover'
    },
    styleOverrides: {
        root: function (_a) {
            var ownerState = _a.ownerState;
            return (__assign(__assign(__assign({}, (0, _components_1.getFontStyleOverrides)(ownerState)), { cursor: 'pointer' }), ((0, helpers_1.includesClassNames)(ownerState, ['back-to']) && {
                color: 'black !important',
                ':before': {
                    content: '"< Back to "'
                }
            })));
        }
    }
};
exports.default = MuiLink;
