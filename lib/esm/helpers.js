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
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Divider, useTheme, createTheme } from '@mui/material';
export function openInNewTab(url, target) {
    if (target === void 0) { target = '_blank'; }
    window.open(url, target);
}
export function insertDividerBetweenElements(_a) {
    var elements = _a.elements, dividerProps = _a.dividerProps;
    return elements.map(function (element, index) { return React.createElement(React.Fragment, null,
        element,
        index !== elements.length - 1
            ? React.createElement(Divider, __assign({}, dividerProps))
            : undefined); });
}
export function stringToBoolean(value) {
    return value.toLowerCase() !== 'false' && value !== '0';
}
export function getSearchParams(params) {
    var searchParams = useSearchParams()[0];
    if (Object.entries(params).some(function (_a) {
        var name = _a[0], isRequired = _a[1].isRequired;
        return isRequired !== false && searchParams.get(name) === null;
    })) {
        return null;
    }
    return Object.fromEntries(Object.entries(params)
        .filter(function (_a) {
        var name = _a[0], isRequired = _a[1].isRequired;
        return isRequired !== false || searchParams.get(name) !== null;
    })
        .map(function (_a) {
        var name = _a[0], cast = _a[1].cast;
        return [name, cast(searchParams.get(name))];
    }));
}
export function overrideComponentsInTheme(componentOverrides, theme) {
    var _a;
    theme = theme !== null && theme !== void 0 ? theme : useTheme();
    var components = (_a = theme.components) !== null && _a !== void 0 ? _a : {};
    components = __assign(__assign({}, components), Object.fromEntries(Object.keys(componentOverrides)
        .map(function (key) {
        var _a, _b;
        var component = (_a = components[key]) !== null && _a !== void 0 ? _a : {};
        var componentOverride = (_b = componentOverrides[key]) !== null && _b !== void 0 ? _b : {};
        var componentStyleOverrides = ('styleOverrides' in component)
            ? component.styleOverrides
            : {};
        var componentOverrideStyleOverrides = ('styleOverrides' in componentOverride)
            ? componentOverride.styleOverrides
            : {};
        return [key, __assign(__assign(__assign({}, component), componentOverride), { styleOverrides: __assign(__assign(__assign({}, componentStyleOverrides), componentOverrideStyleOverrides), { root: function (_a) {
                        var ownerState = _a.ownerState;
                        return (__assign(__assign(__assign(__assign({}, (typeof componentStyleOverrides.root === 'function' &&
                            componentStyleOverrides.root({ ownerState: ownerState }))), (typeof componentStyleOverrides.root === 'object' &&
                            componentStyleOverrides.root)), (typeof componentOverrideStyleOverrides.root === 'function' &&
                            componentOverrideStyleOverrides.root({ ownerState: ownerState }))), (typeof componentOverrideStyleOverrides.root === 'object' &&
                            componentOverrideStyleOverrides.root)));
                    } }) })];
    })));
    return createTheme(theme, { components: components });
}
;
