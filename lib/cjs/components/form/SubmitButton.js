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
var formik_1 = require("formik");
var SubmitButton = function (_a) {
    var stackProps = _a.stackProps, _b = _a.children, children = _b === void 0 ? 'Submit' : _b, _c = _a.disabled, disabled = _c === void 0 ? function (form) { return !(form.dirty && form.isValid); } : _c, otherButtonProps = __rest(_a, ["stackProps", "children", "disabled"]);
    return (react_1.default.createElement(formik_1.Field, { name: 'submit', type: 'submit' }, function (_a) {
        var form = _a.form;
        return (react_1.default.createElement(material_1.Stack, __assign({}, stackProps),
            react_1.default.createElement(material_1.Button, __assign({ type: 'submit', disabled: disabled(form) }, otherButtonProps), children)));
    }));
};
exports.default = SubmitButton;
