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
var styles_1 = require("@mui/material/styles");
var colors_1 = require("@mui/material/colors");
var palette = (0, styles_1.createTheme)().palette;
var theme = (0, styles_1.responsiveFontSizes)((0, styles_1.createTheme)({
    palette: {
        primary: {
            main: '#e0004d',
            light: '#fa1664'
        },
        secondary: {
            main: '#00a3e0'
        },
        tertiary: palette.augmentColor({
            color: {
                main: '#ffd23b'
            }
        }),
        white: palette.augmentColor({
            color: {
                main: colors_1.common.white
            }
        }),
        black: palette.augmentColor({
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
    },
    components: {
        MuiGrid2: {
            defaultProps: {
                disableEqualOverflow: true,
                padding: 0
            },
            styleOverrides: {
                root: function (_a) {
                    var ownerState = _a.ownerState;
                    return (__assign(__assign(__assign({}, (ownerState.className === 'flex-center' && {
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    })), (ownerState.className === 'flex-center-x' && {
                        display: 'flex',
                        justifyContent: 'center'
                    })), (ownerState.className === 'flex-center-y' && {
                        display: 'flex',
                        alignItems: 'center'
                    })));
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    whiteSpace: 'nowrap',
                    minWidth: 'max-content',
                    width: 'fit-content'
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
