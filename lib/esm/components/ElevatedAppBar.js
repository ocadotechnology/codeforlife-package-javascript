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
import { AppBar, Toolbar, useScrollTrigger } from '@mui/material';
var ElevatedAppBar = function (_a) {
    var props = _a.props, children = _a.children;
    var trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0
    });
    return React.cloneElement(React.createElement(AppBar, __assign({}, props),
        React.createElement(Toolbar, null, children)), {
        elevation: trigger ? 4 : 0,
        position: trigger ? 'fixed' : 'sticky'
    });
};
export default ElevatedAppBar;
