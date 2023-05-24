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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrap = exports.overrideComponentsInTheme = exports.getSearchParams = exports.valueInOptions = exports.stringToProperty = exports.stringToBoolean = exports.insertDividerBetweenElements = exports.openInNewTab = void 0;
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var material_1 = require("@mui/material");
function openInNewTab(url, target) {
    if (target === void 0) { target = '_blank'; }
    window.open(url, target);
}
exports.openInNewTab = openInNewTab;
function insertDividerBetweenElements(_a) {
    var elements = _a.elements, dividerProps = _a.dividerProps;
    return elements.map(function (element, index) { return react_1.default.createElement(react_1.default.Fragment, null,
        element,
        index !== elements.length - 1
            ? react_1.default.createElement(material_1.Divider, __assign({}, dividerProps))
            : undefined); });
}
exports.insertDividerBetweenElements = insertDividerBetweenElements;
function stringToBoolean(value) {
    return value.toLowerCase() !== 'false' && value !== '0';
}
exports.stringToBoolean = stringToBoolean;
function stringToProperty(obj) {
    return function (value) { return obj[value]; };
}
exports.stringToProperty = stringToProperty;
function valueInOptions(options) {
    return function (value) { return options.includes(value); };
}
exports.valueInOptions = valueInOptions;
function getSearchParams(params) {
    var searchParams = (0, react_router_dom_1.useSearchParams)()[0];
    var entries = Object.entries(params);
    if (entries.some(function (_a) {
        var name = _a[0], isRequired = _a[1].isRequired;
        return isRequired !== false && searchParams.get(name) === null;
    })) {
        return null;
    }
    entries = entries.filter(function (_a) {
        var name = _a[0], isRequired = _a[1].isRequired;
        return isRequired !== false || searchParams.get(name) !== null;
    });
    if (entries.length === 0) {
        return null;
    }
    try {
        return Object.fromEntries(entries.map(function (_a) {
            var name = _a[0], _b = _a[1], cast = _b.cast, validate = _b.validate;
            var stringValue = searchParams.get(name);
            var value = (cast !== undefined) ? cast(stringValue) : stringValue;
            if (validate !== undefined && !validate(value)) {
                throw Error();
            }
            return [name, value];
        }));
    }
    catch (error) {
        return null;
    }
}
exports.getSearchParams = getSearchParams;
function overrideComponentsInTheme(componentOverrides, theme) {
    var _a;
    theme = theme !== null && theme !== void 0 ? theme : (0, material_1.useTheme)();
    var components = (_a = theme.components) !== null && _a !== void 0 ? _a : {};
    components = __assign(__assign({}, components), Object.fromEntries(Object.keys(componentOverrides)
        .map(function (key) {
        var _a, _b;
        var component = (_a = components[key]) !== null && _a !== void 0 ? _a : {};
        var componentOverride = (_b = componentOverrides[key]) !== null && _b !== void 0 ? _b : {};
        var componentStyleOverrides = ('styleOverrides' in component)
            ? component.styleOverrides
            : {};
        var componentOverrideStyleOverrides = ('styleOverrides' in componentOverride)
            ? componentOverride.styleOverrides
            : {};
        return [key, __assign(__assign(__assign({}, component), componentOverride), { styleOverrides: __assign(__assign(__assign({}, componentStyleOverrides), componentOverrideStyleOverrides), { root: function (_a) {
                        var ownerState = _a.ownerState;
                        return (__assign(__assign(__assign(__assign({}, (typeof componentStyleOverrides.root === 'function' &&
                            componentStyleOverrides.root({ ownerState: ownerState }))), (typeof componentStyleOverrides.root === 'object' &&
                            componentStyleOverrides.root)), (typeof componentOverrideStyleOverrides.root === 'function' &&
                            componentOverrideStyleOverrides.root({ ownerState: ownerState }))), (typeof componentOverrideStyleOverrides.root === 'object' &&
                            componentOverrideStyleOverrides.root)));
                    } }) })];
    })));
    return (0, material_1.createTheme)(theme, { components: components });
}
exports.overrideComponentsInTheme = overrideComponentsInTheme;
;
function wrap(newFn, fn) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (newFn.before !== undefined) {
            newFn.before.apply(newFn, args);
        }
        var value;
        if (fn !== undefined) {
            value = fn.apply(void 0, args);
        }
        if (newFn.after !== undefined) {
            newFn.after.apply(newFn, args);
        }
        return value;
    };
}
exports.wrap = wrap;
