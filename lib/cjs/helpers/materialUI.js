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
exports.matchClassNames = exports.includesClassNames = exports.getClassNames = exports.getStyleOverrides = exports.insertDividerBetweenElements = void 0;
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
function getClassNames(props) {
    var _a, _b;
    return (_b = (_a = props.className) === null || _a === void 0 ? void 0 : _a.split(' ')) !== null && _b !== void 0 ? _b : [];
}
exports.getClassNames = getClassNames;
function includesClassNames(propsOrClassNames, includes) {
    var classNames = Array.isArray(propsOrClassNames)
        ? propsOrClassNames
        : getClassNames(propsOrClassNames);
    return includes.every(function (className) {
        return classNames.includes(className);
    });
}
exports.includesClassNames = includesClassNames;
function matchClassNames(propsOrClassNames, pattern) {
    var classNames = Array.isArray(propsOrClassNames)
        ? propsOrClassNames
        : getClassNames(propsOrClassNames);
    return classNames
        .map(function (className) { return className.match(pattern); })
        .filter(function (match) { return match !== null; })
        .map(function (match) { return match; });
}
exports.matchClassNames = matchClassNames;
