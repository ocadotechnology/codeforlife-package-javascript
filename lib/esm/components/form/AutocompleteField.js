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
import { flushSync } from 'react-dom';
import { Autocomplete, TextField, useTheme, InputAdornment } from '@mui/material';
import { ErrorOutline as ErrorOutlineIcon } from '@mui/icons-material';
import { Field } from 'formik';
import { string as YupString, ValidationError as YupValidationError } from 'yup';
import { wrap } from '../../helpers';
import ClickableTooltip from '../ClickableTooltip';
var AutocompleteField = function (_a) {
    var textFieldProps = _a.textFieldProps, options = _a.options, otherAutocompleteProps = __rest(_a, ["textFieldProps", "options"]);
    var theme = useTheme();
    var fieldConfig = {
        name: textFieldProps.name,
        type: 'text',
        validate: function (value) {
            try {
                var validate = YupString()
                    .oneOf(options, 'Not a valid option');
                if (textFieldProps.required === true) {
                    validate = validate.required();
                }
                validate.validateSync(value);
            }
            catch (error) {
                if (error instanceof YupValidationError) {
                    return error.errors[0];
                }
                throw error;
            }
        }
    };
    return (React.createElement(Field, __assign({}, fieldConfig), function (_a) {
        var form = _a.form, meta = _a.meta;
        var _b = React.useState(false), showError = _b[0], setShowError = _b[1];
        var sx = textFieldProps.sx, _c = textFieldProps.InputProps, InputProps = _c === void 0 ? {} : _c, _d = textFieldProps.value, value = _d === void 0 ? '' : _d, onBlur = textFieldProps.onBlur, otherTextFieldProps = __rest(textFieldProps, ["sx", "InputProps", "value", "onBlur"]);
        var endAdornment = InputProps.endAdornment, otherInputProps = __rest(InputProps, ["endAdornment"]);
        if (showError &&
            meta.error !== undefined &&
            meta.error !== '') {
            endAdornment = React.createElement(React.Fragment, null,
                endAdornment,
                React.createElement(InputAdornment, { position: 'end' },
                    React.createElement(ClickableTooltip, { title: meta.error },
                        React.createElement(ErrorOutlineIcon, { color: 'error' }))));
            sx = __assign(__assign({}, sx), { '& .MuiOutlinedInput-root.Mui-focused > fieldset': {
                    borderColor: theme.palette.error.main
                } });
        }
        onBlur = wrap({
            after: function () { setShowError(true); }
        }, onBlur);
        return (React.createElement(Autocomplete, __assign({ options: options, renderInput: function (params) { return (React.createElement(TextField, __assign({}, params, otherTextFieldProps, { value: value, sx: sx, onBlur: onBlur, InputProps: __assign({ endAdornment: endAdornment }, otherInputProps) }))); }, onChange: function (_, value) {
                flushSync(function () {
                    form.setFieldValue(textFieldProps.name, value, true);
                });
            } }, otherAutocompleteProps)));
    }));
};
export default AutocompleteField;
