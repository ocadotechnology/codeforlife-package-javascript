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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var material_1 = require("@mui/material");
var typography_1 = require("../typography");
var MuiFormControlLabel = {
    styleOverrides: {
        root: (_a = {},
            _a[".".concat(material_1.typographyClasses.root)] = __assign(__assign({}, typography_1.form), { marginBottom: 0 }),
            _a.marginBottom = typography_1.form.marginBottom,
            _a)
    }
};
exports.default = MuiFormControlLabel;
