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
import { Divider } from '@mui/material';
export function openInNewTab(url, target) {
    if (target === void 0) { target = '_blank'; }
    window.open(url, target);
}
export function insertDividerBetweenElements(elements, dividerProps) {
    return elements.map(function (element, index) { return React.createElement(React.Fragment, null,
        element,
        index !== elements.length - 1
            ? React.createElement(Divider, __assign({}, dividerProps))
            : undefined); });
}
