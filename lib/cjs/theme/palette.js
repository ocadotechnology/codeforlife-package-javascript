"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var material_1 = require("@mui/material");
var colors_1 = require("@mui/material/colors");
var colors_2 = require("./colors");
var augmentColor = (0, material_1.createTheme)().palette.augmentColor;
var palette = {
    primary: {
        main: colors_2.primary[500],
        contrastText: colors_1.common.white
    },
    secondary: {
        main: colors_2.secondary[500],
        contrastText: colors_1.common.black
    },
    tertiary: augmentColor({
        color: {
            main: colors_2.tertiary[500],
            contrastText: colors_1.common.white
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
