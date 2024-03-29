"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.themeOptions = exports.ThemedBox = void 0;
var material_1 = require("@mui/material");
var palette_1 = __importDefault(require("./palette"));
var components_1 = __importDefault(require("./components"));
var ThemedBox_1 = __importDefault(require("./ThemedBox"));
exports.ThemedBox = ThemedBox_1.default;
var spacing_1 = __importDefault(require("./spacing"));
var typography_1 = __importDefault(require("./typography"));
exports.themeOptions = {
    palette: palette_1.default,
    components: components_1.default,
    spacing: spacing_1.default,
    typography: typography_1.default
};
var theme = (0, material_1.responsiveFontSizes)((0, material_1.createTheme)(exports.themeOptions));
exports.default = theme;
