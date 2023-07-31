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
var react_router_dom_1 = require("react-router-dom");
var material_1 = require("@mui/material");
var Notification_1 = __importDefault(require("./Notification"));
var Container = function (_a) {
    var children = _a.children, otherGridProps = __rest(_a, ["children"]);
    var location = (0, react_router_dom_1.useLocation)();
    var childrenArray = react_1.default.Children.toArray(children);
    if (location.state !== null &&
        Array.isArray(location.state.notifications)) {
        location.state.notifications
            .filter(function (notification) { return 'props' in notification; })
            .forEach(function (notification, index) {
            var _a;
            childrenArray.splice((_a = notification.index) !== null && _a !== void 0 ? _a : index, 0, react_1.default.createElement(Notification_1.default, __assign({}, notification.props)));
        });
    }
    return (react_1.default.createElement(material_1.Unstable_Grid2, __assign({ id: 'body', container: true }, otherGridProps), childrenArray));
};
exports.default = Container;
