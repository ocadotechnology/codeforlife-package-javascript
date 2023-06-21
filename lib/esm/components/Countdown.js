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
import { Typography } from '@mui/material';
var Countdown = function (_a) {
    var seconds = _a.seconds, _b = _a.start, start = _b === void 0 ? true : _b, onEnd = _a.onEnd, typographyProps = __rest(_a, ["seconds", "start", "onEnd"]);
    seconds = Math.floor(seconds);
    var _c = React.useState(seconds < 0 ? 0 : seconds), _seconds = _c[0], _setSeconds = _c[1];
    var _d = React.useState(!start), end = _d[0], setEnd = _d[1];
    React.useEffect(function () {
        if (!end) {
            if (_seconds > 0) {
                setTimeout(function () { _setSeconds(_seconds - 1); }, 1000);
            }
            else {
                setEnd(true);
                onEnd();
            }
        }
    }, [_seconds]);
    seconds = Math.floor(_seconds % 60);
    var minutes = Math.floor(_seconds / 60);
    return React.createElement(React.Fragment, null, _seconds > 0 &&
        React.createElement(Typography, __assign({}, typographyProps),
            minutes > 0 && ("".concat(minutes, " ").concat(minutes > 1 ? 'mins' : 'min', " ")),
            seconds > 0 && ("".concat(seconds, " ").concat(seconds > 1 ? 'secs' : 'sec'))));
};
export default Countdown;
