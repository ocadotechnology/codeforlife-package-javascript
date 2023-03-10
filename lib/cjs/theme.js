"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var styles_1 = require("@mui/material/styles");
var colors_1 = require("@mui/material/colors");
var theme = (0, styles_1.responsiveFontSizes)((0, styles_1.createTheme)({
    palette: {
        primary: {
            main: colors_1.common.black
        },
        secondary: {
            main: colors_1.blue.A400
        },
        error: {
            main: colors_1.red.A400
        }
    },
    components: {
        MuiButton: {
            defaultProps: {
                disableRipple: true
            },
            styleOverrides: {
                root: {
                    fontSize: '0.8rem',
                    border: '1px solid black'
                }
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    width: '100%',
                    height: '100%'
                }
            }
        }
    }
}));
exports.default = theme;
