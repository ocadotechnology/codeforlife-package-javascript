import { includesClassNames } from '../../helpers';
import typography from '../typography';
export function getFlexStyleOverrides(props) {
    var _a;
    var styleOverrides = {};
    if ((_a = props.className) === null || _a === void 0 ? void 0 : _a.split(' ').some(function (className) {
        return className.startsWith('flex');
    })) {
        styleOverrides.display = 'flex';
        if (includesClassNames(props, ['flex-center'])) {
            styleOverrides.justifyContent = 'center';
            styleOverrides.alignItems = 'center';
        }
        else if (includesClassNames(props, ['flex-center-x'])) {
            styleOverrides.justifyContent = 'center';
            styleOverrides.alignItems = 'start';
        }
        else if (includesClassNames(props, ['flex-center-y'])) {
            styleOverrides.justifyContent = 'start';
            styleOverrides.alignItems = 'center';
        }
        else if (includesClassNames(props, ['flex-end'])) {
            styleOverrides.justifyContent = 'end';
            styleOverrides.alignItems = 'end';
        }
        else if (includesClassNames(props, ['flex-end-x'])) {
            styleOverrides.justifyContent = 'end';
            styleOverrides.alignItems = 'start';
        }
        else if (includesClassNames(props, ['flex-end-y'])) {
            styleOverrides.justifyContent = 'start';
            styleOverrides.alignItems = 'end';
        }
    }
    return styleOverrides;
}
export function getFontStyleOverrides(props) {
    var styleOverrides = {};
    if (includesClassNames(props, ['nowrap-ellipsis'])) {
        styleOverrides.whiteSpace = 'nowrap';
        styleOverrides.overflow = 'hidden';
        styleOverrides.textOverflow = 'ellipsis';
    }
    ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body1', 'body2'
    ].forEach(function (className) {
        if (className in typography &&
            includesClassNames(props, [className])) {
            styleOverrides = typography[className];
        }
    });
    return styleOverrides;
}
