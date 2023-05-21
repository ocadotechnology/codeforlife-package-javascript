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
import { InputAdornment } from '@mui/material';
import { Security as SecurityIcon } from '@mui/icons-material';
import { string, ref } from 'yup';
import TextField from './TextField';
export var NewPasswordFieldValidation = string()
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
    var endAdornment = (React.createElement(InputAdornment, { position: 'end' },
        React.createElement(SecurityIcon, null)));
    passwordFieldProps['InputProps'] = __assign({ endAdornment: endAdornment }, ('InputProps' in passwordFieldProps && passwordFieldProps.InputProps));
    repeatPasswordFieldProps['InputProps'] = __assign({ endAdornment: endAdornment }, ('InputProps' in repeatPasswordFieldProps && repeatPasswordFieldProps.InputProps));
    var _d = passwordFieldProps.validate, validate = _d === void 0 ? NewPasswordFieldValidation : _d, otherPasswordFieldProps = __rest(passwordFieldProps, ["validate"]);
    return React.createElement(React.Fragment, null,
        React.createElement(TextField, __assign({ type: 'password', name: 'password', validate: validate }, otherPasswordFieldProps)),
        React.createElement(TextField, __assign({ type: 'password', name: 'repeatPassword', validate: string()
                .oneOf([ref('password'), undefined], 'Passwords don\'t match')
                .required() }, repeatPasswordFieldProps)));
};
export default NewPasswordField;
