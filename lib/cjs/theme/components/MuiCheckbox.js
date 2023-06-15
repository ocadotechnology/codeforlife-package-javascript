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
var helpers_1 = require("../../helpers");
var typography_1 = __importDefault(require("../typography"));
var MuiCheckbox = {
    styleOverrides: {
        root: function (_a) {
            var _b;
            var ownerState = _a.ownerState;
            return (__assign({ paddingLeft: 0 }, ((0, helpers_1.includesClassNames)(ownerState, ['body']) && {
                marginBottom: (_b = typography_1.default.body1) === null || _b === void 0 ? void 0 : _b.marginBottom
            })));
        }
    }
};
exports.default = MuiCheckbox;
