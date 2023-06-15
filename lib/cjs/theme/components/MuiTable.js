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
var material_1 = require("@mui/material");
var helpers_1 = require("../../helpers");
var typography_1 = __importDefault(require("../typography"));
var MuiTable = {
    styleOverrides: {
        root: function (_a) {
            var _b, _c;
            var _d;
            var ownerState = _a.ownerState;
            return (__assign(__assign((_b = { borderStyle: 'hidden' }, _b[".".concat(material_1.tableCellClasses.root)] = {
                border: '2px solid white'
            }, _b), ((0, helpers_1.includesClassNames)(ownerState, ['text']) && (_c = {
                    borderStyle: 'unset'
                },
                _c[".".concat(material_1.tableCellClasses.root)] = {
                    border: '1px solid #DDD'
                },
                _c))), ((0, helpers_1.includesClassNames)(ownerState, ['body']) && {
                marginBottom: (_d = typography_1.default.body1) === null || _d === void 0 ? void 0 : _d.marginBottom
            })));
        }
    }
};
exports.default = MuiTable;
