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
import { Tooltip } from '@mui/material';
import { wrap } from '../helpers';
var ClickableTooltip = function (_a) {
    var _b = _a.open, open = _b === void 0 ? false : _b, onClick = _a.onClick, otherTooltipProps = __rest(_a, ["open", "onClick"]);
    var _c = React.useState(open), _open = _c[0], _setOpen = _c[1];
    React.useEffect(function () { _setOpen(open); }, [open]);
    return (React.createElement(Tooltip, __assign({ open: _open, onMouseOver: function () {
            if (!_open) {
                _setOpen(true);
            }
        }, onMouseLeave: function () { _setOpen(false); }, onClick: wrap({ after: function () { _setOpen(!_open); } }, onClick) }, otherTooltipProps)));
};
export default ClickableTooltip;
