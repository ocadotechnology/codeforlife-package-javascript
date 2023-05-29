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
import { tableCellClasses, typographyClasses, inputClasses } from '@mui/material';
function getClassStyleOverrides(props) {
    var _a;
    var styleOverrides = {};
    if ((_a = props.className) === null || _a === void 0 ? void 0 : _a.startsWith('flex')) {
        styleOverrides['display'] = 'flex';
        switch (props.className) {
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
var components = {
    MuiGrid2: {
        defaultProps: {
            disableEqualOverflow: true
            // padding: 0 // TODO: normalize padding.
        },
        styleOverrides: {
            root: function (_a) {
                var ownerState = _a.ownerState;
                return (__assign({}, getClassStyleOverrides(ownerState)));
            }
        }
    },
    MuiContainer: {
        styleOverrides: {
            root: function (_a) {
                var ownerState = _a.ownerState;
                return (__assign({}, getClassStyleOverrides(ownerState)));
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
            root: function (_a) {
                var _b, _c, _d;
                var ownerState = _a.ownerState;
                return (__assign({ width: '100%', backgroundColor: 'white' }, (ownerState.multiline === true && __assign({}, (ownerState.className !== undefined && __assign(__assign(__assign({}, (['resize', 'resize-both'].includes(ownerState.className) && (_b = {
                        width: 'auto'
                    },
                    _b[".".concat(inputClasses.inputMultiline)] = {
                        resize: 'both'
                    },
                    _b))), (ownerState.className === 'resize-horizontal' && (_c = {
                        width: 'auto'
                    },
                    _c[".".concat(inputClasses.inputMultiline)] = {
                        resize: 'horizontal'
                    },
                    _c))), (ownerState.className === 'resize-vertical' && (_d = {},
                    _d[".".concat(inputClasses.inputMultiline)] = {
                        resize: 'vertical'
                    },
                    _d))))))));
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
                return (__assign((_b = {}, _b[".".concat(tableCellClasses.root)] = {
                    border: '2px solid white'
                }, _b), (ownerState.className === 'text' && (_c = {},
                    _c[".".concat(tableCellClasses.root)] = {
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
                })), (_b = {}, _b[".".concat(typographyClasses.root)] = {
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
};
export default components;