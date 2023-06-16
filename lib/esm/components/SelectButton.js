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
import { Select, selectClasses, MenuItem, IconButton } from '@mui/material';
import { ChevronRight as ChevronRightIcon, ExpandMore as ExpandMoreIcon, ExpandLess as ExpandLessIcon } from '@mui/icons-material';
import { wrap } from '../helpers';
var SelectButton = function (_a) {
    var text = _a.text, menuItemsProps = _a.menuItemsProps, _b = _a.open, open = _b === void 0 ? false : _b, onOpen = _a.onOpen, onClose = _a.onClose, otherSelectProps = __rest(_a, ["text", "menuItemsProps", "open", "onOpen", "onClose"]);
    var _c = React.useState(open), _open = _c[0], _setOpen = _c[1];
    return (React.createElement(Select, __assign({ className: 'button', open: _open, onOpen: wrap({
            before: function () { _setOpen(true); }
        }, onOpen), onClose: wrap({
            before: function () { _setOpen(false); }
        }, onClose), IconComponent: function (_a) {
            var className = _a.className;
            return (className.includes(selectClasses.iconOpen)
                ? React.createElement(IconButton, { onClick: function () { _setOpen(false); } },
                    React.createElement(ExpandLessIcon, null))
                : React.createElement(IconButton, { onClick: function () { _setOpen(true); } },
                    React.createElement(ExpandMoreIcon, null)));
        }, displayEmpty: true, value: '' }, otherSelectProps),
        React.createElement(MenuItem, { value: '', sx: { display: 'none' } }, text),
        menuItemsProps.map(function (_a, index) {
            var children = _a.children, onClick = _a.onClick, otherMenuItemProps = __rest(_a, ["children", "onClick"]);
            return (React.createElement(MenuItem, __assign({ key: index, className: 'button', onClick: wrap({
                    before: function () { _setOpen(false); }
                }, onClick) }, otherMenuItemProps),
                children,
                React.createElement(ChevronRightIcon, { style: {
                        marginLeft: 'auto'
                    } })));
        })));
};
export default SelectButton;
