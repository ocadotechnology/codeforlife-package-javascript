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
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { red, common } from '@mui/material/colors';
var palette = createTheme().palette;
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
var theme = responsiveFontSizes(createTheme({
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
                main: common.white
            }
        }),
        black: palette.augmentColor({
            color: {
                main: common.black
            }
        }),
        info: {
            main: '#f1ecec'
        },
        error: {
            main: red.A700
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
        }
    }
}));
export default theme;
