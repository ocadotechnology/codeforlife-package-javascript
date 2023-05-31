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
var MuiTable = {
    styleOverrides: {
        root: function (_a) {
            var _b, _c;
            var ownerState = _a.ownerState;
            return (__assign((_b = { borderStyle: 'hidden' }, _b[".".concat(material_1.tableCellClasses.root)] = {
                border: '2px solid white'
            }, _b), (ownerState.className === 'text' && (_c = {
                    borderStyle: 'unset'
                },
                _c[".".concat(material_1.tableCellClasses.root)] = {
                    border: '1px solid #DDD'
                },
                _c))));
        }
    }
};
exports.default = MuiTable;
