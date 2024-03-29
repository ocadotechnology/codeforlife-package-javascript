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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
var formik_1 = require("formik");
var yup_1 = require("yup");
var helpers_1 = require("../../helpers");
var ClickableTooltip_1 = __importDefault(require("../ClickableTooltip"));
// Internal TextField.
var _TextField = function (_a) {
    var validate = _a.validate, split = _a.split, name = _a.name, _b = _a.type, type = _b === void 0 ? 'text' : _b, _c = _a.InputProps, InputProps = _c === void 0 ? {} : _c, onKeyUp = _a.onKeyUp, onBlur = _a.onBlur, otherTextFieldProps = __rest(_a, ["validate", "split", "name", "type", "InputProps", "onKeyUp", "onBlur"]);
    var fieldConfig = {
        name: name,
        type: type,
        validate: function (value) { return __awaiter(void 0, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(validate instanceof yup_1.Schema)) return [3 /*break*/, 5];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, validate.validate(value)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        if (error_1 instanceof yup_1.ValidationError) {
                            return [2 /*return*/, error_1.errors[0]];
                        }
                        throw error_1;
                    case 4: return [3 /*break*/, 7];
                    case 5:
                        if (!(validate !== undefined)) return [3 /*break*/, 7];
                        return [4 /*yield*/, validate(value)];
                    case 6: return [2 /*return*/, _a.sent()];
                    case 7: return [2 /*return*/];
                }
            });
        }); }
    };
    return (react_1.default.createElement(formik_1.Field, __assign({}, fieldConfig), function (_a) {
        var meta = _a.meta, form = _a.form;
        var _b = react_1.default.useState(false), showError = _b[0], setShowError = _b[1];
        var endAdornment = InputProps.endAdornment, otherInputProps = __rest(InputProps, ["endAdornment"]);
        if (showError &&
            meta.error !== undefined &&
            meta.error !== '') {
            endAdornment = react_1.default.createElement(react_1.default.Fragment, null,
                endAdornment,
                react_1.default.createElement(material_1.InputAdornment, { position: 'end' },
                    react_1.default.createElement(ClickableTooltip_1.default, { title: meta.error },
                        react_1.default.createElement(icons_material_1.ErrorOutline, { color: 'error' }))));
        }
        onKeyUp = (0, helpers_1.wrap)({
            after: function (event) {
                var value = event.target.value;
                if (split !== undefined)
                    value = value.split(split);
                form.setFieldValue(name, value, true);
            }
        }, onKeyUp);
        onBlur = (0, helpers_1.wrap)({
            after: function () { setShowError(true); }
        }, onBlur);
        return (react_1.default.createElement(material_1.TextField, __assign({ defaultValue: meta.initialValue, name: name, type: type, onKeyUp: onKeyUp, onBlur: onBlur, InputProps: __assign({ endAdornment: endAdornment }, otherInputProps) }, otherTextFieldProps)));
    }));
};
var TextField = function (_a) {
    var validate = _a.validate, split = _a.split, _b = _a.required, required = _b === void 0 ? false : _b, name = _a.name, onKeyUp = _a.onKeyUp, _c = _a.repeat, repeat = _c === void 0 ? [] : _c, otherTextFieldProps = __rest(_a, ["validate", "split", "required", "name", "onKeyUp", "repeat"]);
    var _d = react_1.default.useState((0, yup_1.string)()), validateRepeat = _d[0], setValidateRepeat = _d[1];
    if (validate === undefined) {
        validate = (split === undefined)
            ? (0, yup_1.string)()
            : (0, yup_1.array)().of((0, yup_1.string)());
    }
    if (required && validate instanceof yup_1.Schema) {
        validate = validate.required();
    }
    if (repeat.length > 0) {
        onKeyUp = (0, helpers_1.wrap)({
            after: function (event) {
                setValidateRepeat((0, yup_1.string)().test("matches-".concat(name), "doesn't match ".concat(name), function (repeatValue) {
                    var value = event.target.value;
                    return value === repeatValue;
                }));
            }
        }, onKeyUp);
    }
    return react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(_TextField, __assign({ validate: validate, split: split, name: name, onKeyUp: onKeyUp }, otherTextFieldProps)),
        repeat.map(function (_a) {
            var name = _a.name, _b = _a.inheritProps, inheritProps = _b === void 0 ? true : _b, repeatTextFieldProps = __rest(_a, ["name", "inheritProps"]);
            return react_1.default.createElement(_TextField, __assign({ key: name, name: name, validate: validateRepeat, type: otherTextFieldProps.type }, (inheritProps && otherTextFieldProps), repeatTextFieldProps));
        }));
};
exports.default = TextField;
