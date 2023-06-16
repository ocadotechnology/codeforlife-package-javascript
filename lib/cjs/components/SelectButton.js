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
var icons_material_1 = require("@mui/icons-material");
var helpers_1 = require("../helpers");
var SelectButton = function (_a) {
    var text = _a.text, menuItemsProps = _a.menuItemsProps, _b = _a.open, open = _b === void 0 ? false : _b, onOpen = _a.onOpen, onClose = _a.onClose, otherSelectProps = __rest(_a, ["text", "menuItemsProps", "open", "onOpen", "onClose"]);
    var _c = react_1.default.useState(open), _open = _c[0], _setOpen = _c[1];
    return (react_1.default.createElement(material_1.Select, __assign({ className: 'button', open: _open, onOpen: (0, helpers_1.wrap)({
            before: function () { _setOpen(true); }
        }, onOpen), onClose: (0, helpers_1.wrap)({
            before: function () { _setOpen(false); }
        }, onClose), IconComponent: function (_a) {
            var className = _a.className;
            return (className.includes(material_1.selectClasses.iconOpen)
                ? react_1.default.createElement(material_1.IconButton, { onClick: function () { _setOpen(false); } },
                    react_1.default.createElement(icons_material_1.ExpandLess, null))
                : react_1.default.createElement(material_1.IconButton, { onClick: function () { _setOpen(true); } },
                    react_1.default.createElement(icons_material_1.ExpandMore, null)));
        }, displayEmpty: true, value: '' }, otherSelectProps),
        react_1.default.createElement(material_1.MenuItem, { value: '', sx: { display: 'none' } }, text),
        menuItemsProps.map(function (_a, index) {
            var children = _a.children, onClick = _a.onClick, otherMenuItemProps = __rest(_a, ["children", "onClick"]);
            return (react_1.default.createElement(material_1.MenuItem, __assign({ key: index, className: 'button', onClick: (0, helpers_1.wrap)({
                    before: function () { _setOpen(false); }
                }, onClick) }, otherMenuItemProps),
                children,
                react_1.default.createElement(icons_material_1.ChevronRight, { style: {
                        marginLeft: 'auto'
                    } })));
        })));
};
exports.default = SelectButton;
