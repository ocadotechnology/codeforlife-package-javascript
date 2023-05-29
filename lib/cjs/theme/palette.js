"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var material_1 = require("@mui/material");
var colors_1 = require("@mui/material/colors");
var augmentColor = (0, material_1.createTheme)().palette.augmentColor;
var palette = {
    primary: {
        main: '#e0004d',
        light: '#fa1664',
        contrastText: colors_1.common.white
    },
    secondary: {
        main: '#00a3e0',
        light: '#08bafc',
        contrastText: colors_1.common.white
    },
    tertiary: augmentColor({
        color: {
            main: '#ffc709',
            light: '#ffd23b',
            contrastText: colors_1.common.black
        }
    }),
    white: augmentColor({
        color: {
            main: colors_1.common.white
        }
    }),
    black: augmentColor({
        color: {
            main: colors_1.common.black
        }
    }),
    info: {
        main: '#f1ecec'
    },
    error: {
        main: colors_1.red.A700
    }
};
exports.default = palette;
