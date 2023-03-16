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
import { Box } from '@mui/material';
var Image = function (_a) {
    var alt = _a.alt, src = _a.src, boxProps = _a.boxProps;
    return (React.createElement(Box, __assign({ component: 'img', alt: alt, src: src }, boxProps)));
};
export default Image;
