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
import React from 'react';
import { InputAdornment } from '@mui/material';
import { Security as SecurityIcon } from '@mui/icons-material';
import { string as YupString } from 'yup';
import { wrap } from '../../helpers';
import TextField from './TextField';
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
    var _d = React.useState(), password = _d[0], setPassword = _d[1];
    var endAdornment = (React.createElement(InputAdornment, { position: 'end' },
        React.createElement(SecurityIcon, null)));
    passwordFieldProps.onKeyUp = wrap({
        after: function (event) {
            setPassword(event.target.value);
        }
    }, passwordFieldProps.onKeyUp);
    passwordFieldProps['InputProps'] = __assign({ endAdornment: endAdornment }, ('InputProps' in passwordFieldProps && passwordFieldProps.InputProps));
    repeatPasswordFieldProps['InputProps'] = __assign({ endAdornment: endAdornment }, ('InputProps' in repeatPasswordFieldProps && repeatPasswordFieldProps.InputProps));
    return React.createElement(React.Fragment, null,
        React.createElement(TextField, __assign({ type: 'password', name: 'password', required: true }, passwordFieldProps)),
        React.createElement(TextField, __assign({ type: 'password', name: 'repeatPassword', required: true, validate: YupString().oneOf([password], 'Passwords don\'t match') }, repeatPasswordFieldProps)));
};
export default NewPasswordField;
