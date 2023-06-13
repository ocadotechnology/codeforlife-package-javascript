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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { Box, ThemeProvider, buttonClasses, responsiveFontSizes, createTheme } from '@mui/material';
import { Circle as CircleIcon, Hexagon as HexagonIcon } from '@mui/icons-material';
import { themeOptions } from '.';
import palette from './palette';
import { getStyleOverrides as _getStyleOverrides } from '../helpers';
var ThemedBox = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
    var _v = _a.options, options = _v === void 0 ? themeOptions : _v, _w = _a.withIcons, withIcons = _w === void 0 ? false : _w, userType = _a.userType, children = _a.children, sx = _a.sx, otherBoxProps = __rest(_a, ["options", "withIcons", "userType", "children", "sx"]);
    var bgcolor;
    var circleColor;
    var hexagonColor;
    switch (userType) {
        case 'teacher':
            bgcolor = palette.primary;
            circleColor = 'tertiary';
            hexagonColor = 'secondary';
            break;
        case 'student':
            bgcolor = palette.tertiary;
            circleColor = 'secondary';
            hexagonColor = 'primary';
            break;
        case 'independent':
            bgcolor = palette.secondary;
            circleColor = 'primary';
            hexagonColor = 'tertiary';
            break;
    }
    var commonIconSxProps = {
        display: { xs: 'none', md: 'block' },
        fontSize: '200px',
        position: 'absolute'
    };
    var fontStyleOverrides = {
        color: bgcolor.contrastText,
        textDecorationColor: bgcolor.contrastText
    };
    function getStyleOverrides(ownerState, componentKey, muiClassName) {
        if (muiClassName === void 0) { muiClassName = 'root'; }
        return _getStyleOverrides(ownerState, componentKey, muiClassName, options.components);
    }
    var theme = responsiveFontSizes(createTheme(__assign(__assign({}, options), { components: __assign(__assign({}, options.components), { MuiTypography: __assign(__assign({}, (_b = options.components) === null || _b === void 0 ? void 0 : _b.MuiTypography), { styleOverrides: __assign(__assign({}, (_d = (_c = options.components) === null || _c === void 0 ? void 0 : _c.MuiTypography) === null || _d === void 0 ? void 0 : _d.styleOverrides), { root: function (_a) {
                        var ownerState = _a.ownerState;
                        return (__assign(__assign({}, getStyleOverrides(ownerState, 'MuiTypography')), fontStyleOverrides));
                    } }) }), MuiFormHelperText: __assign(__assign({}, (_e = options.components) === null || _e === void 0 ? void 0 : _e.MuiFormHelperText), { styleOverrides: __assign(__assign({}, (_g = (_f = options.components) === null || _f === void 0 ? void 0 : _f.MuiFormHelperText) === null || _g === void 0 ? void 0 : _g.styleOverrides), { root: function (_a) {
                        var ownerState = _a.ownerState;
                        return (__assign(__assign({}, getStyleOverrides(ownerState, 'MuiFormHelperText')), fontStyleOverrides));
                    } }) }), MuiLink: __assign(__assign({}, (_h = options.components) === null || _h === void 0 ? void 0 : _h.MuiLink), { styleOverrides: __assign(__assign({}, (_k = (_j = options.components) === null || _j === void 0 ? void 0 : _j.MuiLink) === null || _k === void 0 ? void 0 : _k.styleOverrides), { root: function (_a) {
                        var ownerState = _a.ownerState;
                        return (__assign(__assign({}, getStyleOverrides(ownerState, 'MuiLink')), fontStyleOverrides));
                    } }) }), MuiButton: __assign(__assign({}, (_l = options.components) === null || _l === void 0 ? void 0 : _l.MuiButton), { styleOverrides: __assign(__assign({}, (_o = (_m = options.components) === null || _m === void 0 ? void 0 : _m.MuiButton) === null || _o === void 0 ? void 0 : _o.styleOverrides), { contained: function (_a) {
                        var _b;
                        var ownerState = _a.ownerState;
                        return (__assign(__assign({}, getStyleOverrides(ownerState, 'MuiButton', 'contained')), (userType === 'independent' && (_b = {
                                backgroundColor: 'white',
                                '&:hover': {
                                    backgroundColor: '#f6f5f5',
                                    boxShadow: [
                                        '0px 6px 10px 0px rgba(0, 0, 0, 0.14)',
                                        '0px 1px 18px 0px rgba(0, 0, 0, 0.12)',
                                        '0px 3px 5px 0px rgba(0, 0, 0, 0.2);'
                                    ].join()
                                }
                            },
                            _b["&.".concat(buttonClasses.disabled)] = {
                                backgroundColor: 'white',
                                color: bgcolor.contrastText
                            },
                            _b))));
                    }, outlined: function (_a) {
                        var ownerState = _a.ownerState;
                        return (__assign(__assign(__assign({}, getStyleOverrides(ownerState, 'MuiButton', 'outlined')), fontStyleOverrides), { border: "2px solid ".concat(bgcolor.contrastText), '&:hover': {
                                border: "2px solid ".concat(bgcolor.contrastText),
                                backgroundColor: 'transparent',
                                textDecoration: 'underline'
                            } }));
                    } }) }), MuiCheckbox: __assign(__assign({}, (_p = options.components) === null || _p === void 0 ? void 0 : _p.MuiCheckbox), { styleOverrides: __assign(__assign({}, (_r = (_q = options.components) === null || _q === void 0 ? void 0 : _q.MuiCheckbox) === null || _r === void 0 ? void 0 : _r.styleOverrides), { root: function (_a) {
                        var ownerState = _a.ownerState;
                        return (__assign(__assign({}, getStyleOverrides(ownerState, 'MuiCheckbox')), { color: "".concat(bgcolor.contrastText, " !important") }));
                    } }) }), MuiSvgIcon: __assign(__assign({}, (_s = options.components) === null || _s === void 0 ? void 0 : _s.MuiSvgIcon), { styleOverrides: __assign(__assign({}, (_u = (_t = options.components) === null || _t === void 0 ? void 0 : _t.MuiSvgIcon) === null || _u === void 0 ? void 0 : _u.styleOverrides), { root: function (_a) {
                        var ownerState = _a.ownerState;
                        return (__assign(__assign({}, getStyleOverrides(ownerState, 'MuiSvgIcon')), { '&.checkbox-error': {
                                color: "".concat(bgcolor.contrastText, " !important")
                            } }));
                    } }) }) }) })));
    return (React.createElement(ThemeProvider, { theme: theme },
        React.createElement(Box, __assign({ sx: __assign(__assign(__assign({}, sx), (withIcons && {
                paddingY: { xs: 2, sm: 3, md: 5 },
                paddingX: { xs: 2, sm: 5, md: 10 }
            })), { bgcolor: bgcolor.main, alignItems: 'center', position: 'relative' }) }, otherBoxProps),
            withIcons && React.createElement(React.Fragment, null,
                React.createElement(CircleIcon, { color: circleColor, sx: __assign(__assign({}, commonIconSxProps), { top: '5%', left: '0%', transform: 'translate(-60%, 0%)' }) }),
                React.createElement(HexagonIcon, { color: hexagonColor, sx: __assign(__assign({}, commonIconSxProps), { bottom: '5%', right: '0%', transform: 'translate(60%, 0%) rotate(90deg)' }) })),
            children)));
};
export default ThemedBox;