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
import { Divider } from '@mui/material';
import _components from '../theme/components';
export function insertDividerBetweenElements(_a) {
    var elements = _a.elements, dividerProps = _a.dividerProps;
    return elements.map(function (element, index) { return React.createElement(React.Fragment, null,
        element,
        index !== elements.length - 1
            ? React.createElement(Divider, __assign({}, dividerProps))
            : undefined); });
}
export function getStyleOverrides(ownerState, componentKey, muiClassName, components) {
    if (muiClassName === void 0) { muiClassName = 'root'; }
    if (components === void 0) { components = _components; }
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
export function includesClassNames(props, classNames) {
    if (props.className === undefined)
        return false;
    var _classNames = props.className.split(' ');
    return classNames.every(function (className) {
        return _classNames.includes(className);
    });
}
