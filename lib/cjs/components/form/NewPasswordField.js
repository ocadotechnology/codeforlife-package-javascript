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
exports.NewPasswordFieldValidation = void 0;
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var icons_material_1 = require("@mui/icons-material");
var yup_1 = require("yup");
var TextField_1 = __importDefault(require("./TextField"));
exports.NewPasswordFieldValidation = (0, yup_1.string)()
    .required();
var NewPasswordField = function (_a) {
    var 
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    _b = _a.passwordFieldProps, 
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    passwordFieldProps = _b === void 0 ? {} : _b, 
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    _c = _a.repeatPasswordFieldProps, 
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    repeatPasswordFieldProps = _c === void 0 ? {} : _c;
    var endAdornment = (react_1.default.createElement(material_1.InputAdornment, { position: 'end' },
        react_1.default.createElement(icons_material_1.Security, null)));
    passwordFieldProps['InputProps'] = __assign({ endAdornment: endAdornment }, ('InputProps' in passwordFieldProps && passwordFieldProps.InputProps));
    repeatPasswordFieldProps['InputProps'] = __assign({ endAdornment: endAdornment }, ('InputProps' in repeatPasswordFieldProps && repeatPasswordFieldProps.InputProps));
    var _d = passwordFieldProps.validate, validate = _d === void 0 ? exports.NewPasswordFieldValidation : _d, otherPasswordFieldProps = __rest(passwordFieldProps, ["validate"]);
    return react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(TextField_1.default, __assign({ type: 'password', name: 'password', validate: validate }, otherPasswordFieldProps)),
        react_1.default.createElement(TextField_1.default, __assign({ type: 'password', name: 'repeatPassword', validate: (0, yup_1.string)()
                .oneOf([(0, yup_1.ref)('password'), undefined], 'Passwords don\'t match')
                .required() }, repeatPasswordFieldProps)));
};
exports.default = NewPasswordField;
