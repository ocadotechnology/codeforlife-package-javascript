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
import { EmailOutlined as EmailOutlinedIcon } from '@mui/icons-material';
import { string as YupString } from 'yup';
import TextField from './TextField';
var EmailField = function (_a) {
    var _b = _a.name, name = _b === void 0 ? 'email' : _b, _c = _a.InputProps, InputProps = _c === void 0 ? {} : _c, _d = _a.validate, validate = _d === void 0 ? YupString().email() : _d, otherTextFieldProps = __rest(_a, ["name", "InputProps", "validate"]);
    return (React.createElement(TextField, __assign({ type: 'email', name: name, validate: validate, InputProps: __assign({ endAdornment: (React.createElement(InputAdornment, { position: 'end' },
                React.createElement(EmailOutlinedIcon, null))) }, InputProps) }, otherTextFieldProps)));
};
export default EmailField;
