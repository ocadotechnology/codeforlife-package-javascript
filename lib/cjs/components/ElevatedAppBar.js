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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var ElevatedAppBar = function (_a) {
    var props = _a.props, children = _a.children;
    var trigger = (0, material_1.useScrollTrigger)({
        disableHysteresis: true,
        threshold: 0
    });
    return react_1.default.cloneElement(react_1.default.createElement(material_1.AppBar, __assign({}, props),
        react_1.default.createElement(material_1.Toolbar, null, children)), { elevation: trigger ? 4 : 0 });
};
exports.default = ElevatedAppBar;
