"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var typography_1 = __importDefault(require("../typography"));
var MuiInputAdornment = {
    styleOverrides: {
        root: {
            color: (_a = typography_1.default.body1) === null || _a === void 0 ? void 0 : _a.color
        }
    }
};
exports.default = MuiInputAdornment;
