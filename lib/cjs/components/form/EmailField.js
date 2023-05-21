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
exports.EmailFieldValidation = void 0;
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var icons_material_1 = require("@mui/icons-material");
var yup_1 = require("yup");
var TextField_1 = __importDefault(require("./TextField"));
exports.EmailFieldValidation = (0, yup_1.string)()
    .email();
var EmailField = function (_a) {
    var _b = _a.name, name = _b === void 0 ? 'email' : _b, _c = _a.InputProps, InputProps = _c === void 0 ? {} : _c, _d = _a.required, required = _d === void 0 ? false : _d, _e = _a.validate, validate = _e === void 0 ? exports.EmailFieldValidation : _e, otherTextFieldProps = __rest(_a, ["name", "InputProps", "required", "validate"]);
    var endAdornment = InputProps.endAdornment, otherInputProps = __rest(InputProps, ["endAdornment"]);
    endAdornment = (react_1.default.createElement(material_1.InputAdornment, { position: 'end' },
        react_1.default.createElement(icons_material_1.EmailOutlined, null)));
    if (required && validate instanceof yup_1.StringSchema) {
        validate = validate.required();
    }
    return (react_1.default.createElement(TextField_1.default, __assign({ type: 'email', name: name, validate: validate, InputProps: __assign({ endAdornment: endAdornment }, otherInputProps) }, otherTextFieldProps)));
};
exports.default = EmailField;
