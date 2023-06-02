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
import { AppBar, Toolbar, useScrollTrigger, Container } from '@mui/material';
var ElevatedAppBar = function (_a) {
    var containerProps = _a.containerProps, _b = _a.elevation, elevation = _b === void 0 ? 4 : _b, children = _a.children, otherProps = __rest(_a, ["containerProps", "elevation", "children"]);
    var trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0
    });
    return React.cloneElement(React.createElement(AppBar, __assign({ elevation: elevation }, otherProps),
        React.createElement(Container, __assign({}, containerProps),
            React.createElement(Toolbar, null, children))), {
        position: trigger ? 'fixed' : 'sticky'
    });
};
export default ElevatedAppBar;
