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
import { Divider } from '@mui/material';
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
export function getSearchParams(requiredParams, optionalParams) {
    if (requiredParams === void 0) { requiredParams = {}; }
    if (optionalParams === void 0) { optionalParams = {}; }
    var searchParams = useSearchParams()[0];
    if (Object
        .keys(requiredParams)
        .some(function (name) { return searchParams.get(name) === null; })) {
        return null;
    }
    var params = __assign(__assign({}, requiredParams), Object.fromEntries(Object.keys(optionalParams)
        .filter(function (name) { return searchParams.get(name) !== null; })
        .map(function (name) { return [name, optionalParams[name]]; })));
    return Object.fromEntries(Object.entries(params)
        .map(function (_a) {
        var key = _a[0], value = _a[1];
        return [key, value(searchParams.get(key))];
    }));
}
