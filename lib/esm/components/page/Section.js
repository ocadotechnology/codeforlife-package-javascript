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
import { Unstable_Grid2 as Grid, Container } from '@mui/material';
var Section = function (_a) {
    var gridProps = _a.gridProps, _b = _a.maxWidth, maxWidth = _b === void 0 ? 'lg' : _b, children = _a.children, otherContainerProps = __rest(_a, ["gridProps", "maxWidth", "children"]);
    return (React.createElement(Grid, __assign({ xs: 12, paddingY: '25px' }, gridProps),
        React.createElement(Container, __assign({ maxWidth: maxWidth }, otherContainerProps), children)));
};
export default Section;
