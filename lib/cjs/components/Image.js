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
var react_router_dom_1 = require("react-router-dom");
var helpers_1 = require("../helpers");
var Image = function (_a) {
    var alt = _a.alt, src = _a.src, href = _a.href, _b = _a.hrefInNewTab, hrefInNewTab = _b === void 0 ? false : _b, _c = _a.boxProps, boxProps = _c === void 0 ? {} : _c;
    var sx = boxProps.sx, onClick = boxProps.onClick, _d = boxProps.style, style = _d === void 0 ? {} : _d, otherProps = __rest(boxProps, ["sx", "onClick", "style"]);
    // Override onClick if href provided.
    if (href !== undefined) {
        style = __assign(__assign({}, style), { cursor: 'pointer' });
        if (hrefInNewTab) {
            onClick = function () { (0, helpers_1.openInNewTab)(href); };
        }
        else {
            var navigate_1 = (0, react_router_dom_1.useNavigate)();
            onClick = function () { navigate_1(href); };
        }
    }
    return (react_1.default.createElement(material_1.Box, __assign({ component: 'img', alt: alt, src: src, onClick: onClick, style: style, sx: __assign({ width: '100%' }, sx) }, otherProps)));
};
exports.default = Image;
