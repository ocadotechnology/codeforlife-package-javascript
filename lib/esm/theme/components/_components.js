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
import { getClassNames, includesClassNames, matchClassNames } from '../../helpers';
import typography from '../typography';
export function getFlexStyleOverrides(props) {
    var styleOverrides = {};
    var classNames = getClassNames(props);
    if (classNames.some(function (className) { return className.startsWith('flex-'); })) {
        styleOverrides.display = 'flex';
        if (includesClassNames(classNames, ['flex-center'])) {
            styleOverrides.justifyContent = 'center';
            styleOverrides.alignItems = 'center';
        }
        else if (includesClassNames(classNames, ['flex-center-x'])) {
            styleOverrides.justifyContent = 'center';
            styleOverrides.alignItems = 'start';
        }
        else if (includesClassNames(classNames, ['flex-center-y'])) {
            styleOverrides.justifyContent = 'start';
            styleOverrides.alignItems = 'center';
        }
        else if (includesClassNames(classNames, ['flex-end'])) {
            styleOverrides.justifyContent = 'end';
            styleOverrides.alignItems = 'end';
        }
        else if (includesClassNames(classNames, ['flex-end-x'])) {
            styleOverrides.justifyContent = 'end';
            styleOverrides.alignItems = 'start';
        }
        else if (includesClassNames(classNames, ['flex-end-y'])) {
            styleOverrides.justifyContent = 'start';
            styleOverrides.alignItems = 'end';
        }
    }
    return styleOverrides;
}
export function getFontStyleOverrides(props) {
    var styleOverrides = {};
    var classNames = getClassNames(props);
    if (includesClassNames(classNames, ['nowrap-ellipsis'])) {
        styleOverrides.whiteSpace = 'nowrap';
        styleOverrides.overflow = 'hidden';
        styleOverrides.textOverflow = 'ellipsis';
    }
    ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body1', 'body2']
        .filter(function (className) { return className in typography; })
        .forEach(function (className) {
        var typographyClass = typography[className];
        if (includesClassNames(classNames, [className])) {
            styleOverrides = __assign(__assign({}, styleOverrides), typographyClass);
        }
        matchClassNames(classNames, new RegExp("^".concat(className, "-(\\w+)$"))).forEach(function (match) {
            var prop = match[1];
            if (prop in typographyClass) {
                styleOverrides[prop] = typographyClass[prop];
            }
        });
    });
    return styleOverrides;
}
