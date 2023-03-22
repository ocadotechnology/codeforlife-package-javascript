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
            },
            styleOverrides: {
                root: function (_a) {
                    var ownerState = _a.ownerState;
                    return (__assign({}, (ownerState.className === 'flex-center' && {
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    })));
                }
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
export default theme;
