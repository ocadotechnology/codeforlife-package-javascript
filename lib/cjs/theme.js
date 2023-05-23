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
exports.themeOptions = void 0;
var material_1 = require("@mui/material");
var colors_1 = require("@mui/material/colors");
var palette = (0, material_1.createTheme)().palette;
function getClassStyleOverrides(className) {
    var styleOverrides = {};
    if (className === null || className === void 0 ? void 0 : className.startsWith('flex')) {
        styleOverrides['display'] = 'flex';
        switch (className) {
            case 'flex-center':
                styleOverrides['justifyContent'] = 'center';
                styleOverrides['alignItems'] = 'center';
                break;
            case 'flex-center-x':
                styleOverrides['justifyContent'] = 'center';
                styleOverrides['alignItems'] = 'start';
                break;
            case 'flex-center-y':
                styleOverrides['justifyContent'] = 'start';
                styleOverrides['alignItems'] = 'center';
                break;
            case 'flex-end':
                styleOverrides['justifyContent'] = 'end';
                styleOverrides['alignItems'] = 'end';
                break;
            case 'flex-end-x':
                styleOverrides['justifyContent'] = 'end';
                styleOverrides['alignItems'] = 'start';
                break;
            case 'flex-end-y':
                styleOverrides['justifyContent'] = 'start';
                styleOverrides['alignItems'] = 'end';
                break;
        }
    }
    return styleOverrides;
}
exports.themeOptions = {
    palette: {
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
        tertiary: palette.augmentColor({
            color: {
                main: '#ffc709',
                light: '#ffd23b',
                contrastText: colors_1.common.black
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
                disableEqualOverflow: true
                // padding: 0 // TODO: normalize padding.
            },
            styleOverrides: {
                root: function (_a) {
                    var ownerState = _a.ownerState;
                    return (__assign({}, getClassStyleOverrides(ownerState.className)));
                }
            }
        },
        MuiContainer: {
            styleOverrides: {
                root: function (_a) {
                    var ownerState = _a.ownerState;
                    return (__assign({}, getClassStyleOverrides(ownerState.className)));
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
        },
        MuiMenuItem: {
            styleOverrides: {
                root: function (_a) {
                    var ownerState = _a.ownerState;
                    return (__assign({}, (ownerState.className === 'header' && {
                        pointerEvents: 'none',
                        fontWeight: 'bold'
                    })));
                }
            }
        },
        MuiTable: {
            styleOverrides: {
                root: function (_a) {
                    var _b, _c;
                    var ownerState = _a.ownerState;
                    return (__assign((_b = {}, _b[".".concat(material_1.tableCellClasses.root)] = {
                        border: '2px solid white'
                    }, _b), (ownerState.className === 'text' && (_c = {},
                        _c[".".concat(material_1.tableCellClasses.root)] = {
                            border: '1px solid #DDD'
                        },
                        _c))));
                }
            }
        },
        MuiTableHead: {
            styleOverrides: {
                root: function (_a) {
                    var _b;
                    var ownerState = _a.ownerState;
                    return (__assign(__assign({ backgroundColor: '#6E7171' }, (ownerState.className === 'light' && {
                        backgroundColor: '#9A9C9E'
                    })), (_b = {}, _b[".".concat(material_1.typographyClasses.root)] = {
                        color: 'white',
                        marginBottom: 0,
                        fontWeight: 600
                    }, _b)));
                }
            }
        },
        MuiTableBody: {
            styleOverrides: {
                root: function (_a) {
                    var ownerState = _a.ownerState;
                    return (__assign({ backgroundColor: '#F2F2F2' }, (ownerState.className === 'text' && {
                        backgroundColor: 'white'
                    })));
                }
            }
        }
    }
};
var theme = (0, material_1.responsiveFontSizes)((0, material_1.createTheme)(exports.themeOptions));
exports.default = theme;
