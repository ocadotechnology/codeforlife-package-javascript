"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var spacing_1 = __importDefault(require("../spacing"));
var MuiCardActions = {
    styleOverrides: {
        root: {
            padding: (0, spacing_1.default)(2)
        }
    }
};
exports.default = MuiCardActions;
