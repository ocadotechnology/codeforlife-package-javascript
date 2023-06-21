"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var hooks_1 = require("../hooks");
var Countdown = function (_a) {
    var seconds = _a.seconds, _b = _a.start, start = _b === void 0 ? true : _b, onEnd = _a.onEnd, typographyProps = __rest(_a, ["seconds", "start", "onEnd"]);
    seconds = Math.floor(seconds);
    var _seconds = (0, hooks_1.useCountdown)(seconds)[0];
    var _c = react_1.default.useState(!start), end = _c[0], setEnd = _c[1];
    if (_seconds === 0 && !end) {
        setEnd(true);
        onEnd();
    }
    seconds = Math.floor(_seconds % 60);
    var minutes = Math.floor(_seconds / 60);
    return react_1.default.createElement(react_1.default.Fragment, null, _seconds > 0 &&
        react_1.default.createElement(material_1.Typography, __assign({}, typographyProps),
            minutes > 0 && ("".concat(minutes, " ").concat(minutes > 1 ? 'mins' : 'min', " ")),
            seconds > 0 && ("".concat(seconds, " ").concat(seconds > 1 ? 'secs' : 'sec'))));
};
exports.default = Countdown;
