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
import { getFontStyleOverrides } from './_components';
import { includesClassNames } from '../../helpers';
var MuiLink = {
    defaultProps: {
        underline: 'hover'
    },
    styleOverrides: {
        root: function (_a) {
            var ownerState = _a.ownerState;
            return (__assign(__assign(__assign({}, getFontStyleOverrides(ownerState)), { cursor: 'pointer' }), (includesClassNames(ownerState, ['back-to']) && {
                color: 'black !important',
                ':before': {
                    content: '"< Back to "'
                }
            })));
        }
    }
};
export default MuiLink;
