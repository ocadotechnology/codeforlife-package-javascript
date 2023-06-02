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
exports.includesClassNames = exports.getStyleOverrides = exports.overrideComponentsInTheme = exports.insertDividerBetweenElements = void 0;
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var components_1 = __importDefault(require("../theme/components"));
function insertDividerBetweenElements(_a) {
    var elements = _a.elements, dividerProps = _a.dividerProps;
    return elements.map(function (element, index) { return react_1.default.createElement(react_1.default.Fragment, null,
        element,
        index !== elements.length - 1
            ? react_1.default.createElement(material_1.Divider, __assign({}, dividerProps))
            : undefined); });
}
exports.insertDividerBetweenElements = insertDividerBetweenElements;
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
function getStyleOverrides(ownerState, componentKey, muiClassName, components) {
    if (muiClassName === void 0) { muiClassName = 'root'; }
    if (components === void 0) { components = components_1.default; }
    if (components !== undefined) {
        var component = components[componentKey];
        if (component !== undefined &&
            'styleOverrides' in component &&
            typeof component.styleOverrides === 'object' &&
            muiClassName in component.styleOverrides) {
            var muiClass = component.styleOverrides[muiClassName];
            switch (typeof muiClass) {
                case 'function':
                    return muiClass({ ownerState: ownerState });
                case 'object':
                    return muiClass;
            }
        }
    }
    return {};
}
exports.getStyleOverrides = getStyleOverrides;
function includesClassNames(props, classNames) {
    if (props.className === undefined)
        return false;
    var _classNames = props.className.split(' ');
    return classNames.every(function (className) {
        return _classNames.includes(className);
    });
}
exports.includesClassNames = includesClassNames;
