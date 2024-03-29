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
var helpers_1 = require("../../helpers");
var MuiTableHead = {
    styleOverrides: {
        root: function (_a) {
            var _b;
            var ownerState = _a.ownerState;
            return (__assign(__assign({ backgroundColor: '#6E7171' }, ((0, helpers_1.includesClassNames)(ownerState, ['light']) && {
                backgroundColor: '#9A9C9E'
            })), (_b = {}, _b[".".concat(material_1.typographyClasses.root)] = {
                color: 'white',
                marginBottom: 0,
                fontWeight: 600
            }, _b)));
        }
    }
};
exports.default = MuiTableHead;
