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
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { openInNewTab } from '../helpers';
var Image = function (_a) {
    var alt = _a.alt, src = _a.src, href = _a.href, _b = _a.hrefInNewTab, hrefInNewTab = _b === void 0 ? false : _b, _c = _a.boxProps, boxProps = _c === void 0 ? {} : _c;
    var sx = boxProps.sx, onClick = boxProps.onClick, _d = boxProps.style, style = _d === void 0 ? {} : _d, otherProps = __rest(boxProps, ["sx", "onClick", "style"]);
    // Override onClick if href provided.
    if (href !== undefined) {
        style.cursor = 'pointer';
        if (hrefInNewTab) {
            onClick = function () { openInNewTab(href); };
        }
        else {
            var navigate_1 = useNavigate();
            onClick = function () { navigate_1(href); };
        }
    }
    return (React.createElement(Box, __assign({ component: 'img', alt: alt, src: src, onClick: onClick, style: style, sx: __assign({ width: '100%' }, sx) }, otherProps)));
};
export default Image;
