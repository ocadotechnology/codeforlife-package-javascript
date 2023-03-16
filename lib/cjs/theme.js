"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var styles_1 = require("@mui/material/styles");
var colors_1 = require("@mui/material/colors");
var palette = (0, styles_1.createTheme)().palette;
var theme = (0, styles_1.responsiveFontSizes)((0, styles_1.createTheme)({
    palette: {
        primary: {
            main: '#e0004d'
        },
        secondary: {
            main: '#00a3e0'
        },
        tertiary: palette.augmentColor({
            color: {
                main: '#ffd23b'
            }
        }),
        error: {
            main: colors_1.red.A700
        }
    },
    components: {
        MuiGrid2: {
            defaultProps: {
                disableEqualOverflow: true
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    whiteSpace: 'nowrap',
                    minWidth: 'max-content'
                }
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    width: '100%',
                    backgroundColor: 'white'
                }
            }
        },
        MuiLink: {
            defaultProps: {
                underline: 'hover'
            },
            styleOverrides: {
                root: {
                    cursor: 'pointer'
                }
            }
        }
    }
}));
exports.default = theme;
