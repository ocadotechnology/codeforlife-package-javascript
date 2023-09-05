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
var react_dom_1 = require("react-dom");
var material_1 = require("@mui/material");
var icons_material_1 = require("@mui/icons-material");
var formik_1 = require("formik");
var yup_1 = require("yup");
var helpers_1 = require("../../helpers");
var ClickableTooltip_1 = __importDefault(require("../ClickableTooltip"));
var AutocompleteField = function (_a) {
    var textFieldProps = _a.textFieldProps, _b = _a.selectOnly, selectOnly = _b === void 0 ? false : _b, options = _a.options, otherAutocompleteProps = __rest(_a, ["textFieldProps", "selectOnly", "options"]);
    var theme = (0, material_1.useTheme)();
    var fieldConfig = {
        name: textFieldProps.name,
        type: 'text',
        validate: function (value) {
            try {
                var validate = (0, yup_1.string)()
                    .oneOf(options, 'Not a valid option');
                if (textFieldProps.required === true) {
                    validate = validate.required();
                }
                validate.validateSync(value);
            }
            catch (error) {
                if (error instanceof yup_1.ValidationError) {
                    return error.errors[0];
                }
                throw error;
            }
        }
    };
    return (react_1.default.createElement(formik_1.Field, __assign({}, fieldConfig), function (_a) {
        var form = _a.form, meta = _a.meta;
        var _b = react_1.default.useState(false), showError = _b[0], setShowError = _b[1];
        var sx = textFieldProps.sx, onBlur = textFieldProps.onBlur, otherTextFieldProps = __rest(textFieldProps, ["sx", "onBlur"]);
        onBlur = (0, helpers_1.wrap)({
            after: function () { setShowError(true); }
        }, onBlur);
        return (react_1.default.createElement(material_1.Autocomplete, __assign({ options: options, defaultValue: meta.initialValue, renderInput: function (_a) {
                var inputProps = _a.inputProps, InputProps = _a.InputProps, otherParams = __rest(_a, ["inputProps", "InputProps"]);
                var endAdornment = InputProps.endAdornment, otherInputProps = __rest(InputProps, ["endAdornment"]);
                if (showError &&
                    meta.error !== undefined &&
                    meta.error !== '') {
                    endAdornment = react_1.default.createElement(react_1.default.Fragment, null,
                        endAdornment,
                        react_1.default.createElement(material_1.InputAdornment, { position: 'end' },
                            react_1.default.createElement(ClickableTooltip_1.default, { title: meta.error },
                                react_1.default.createElement(icons_material_1.ErrorOutline, { color: 'error' }))));
                    sx = __assign(__assign({}, sx), { '& .MuiOutlinedInput-root.Mui-focused > fieldset': {
                            borderColor: theme.palette.error.main
                        } });
                }
                return (react_1.default.createElement(material_1.TextField, __assign({}, otherParams, otherTextFieldProps, { sx: sx, onBlur: onBlur, InputProps: __assign({ endAdornment: endAdornment }, otherInputProps), inputProps: __assign(__assign({}, inputProps), { readOnly: selectOnly }) })));
            }, onChange: function (_, value) {
                (0, react_dom_1.flushSync)(function () {
                    form.setFieldValue(textFieldProps.name, value !== null && value !== void 0 ? value : undefined, true);
                });
            } }, otherAutocompleteProps)));
    }));
};
exports.default = AutocompleteField;
