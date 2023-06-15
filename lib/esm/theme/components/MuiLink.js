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
import { includesClassNames } from '../../helpers';
import typography from '../typography';
import { getFontStyleOverrides } from './_components';
var MuiLink = {
    styleOverrides: {
        root: function (_a) {
            var ownerState = _a.ownerState;
            return (__assign(__assign(__assign(__assign(__assign({}, typography.body1), { marginBottom: 0 }), getFontStyleOverrides(ownerState)), { cursor: 'pointer', textDecoration: 'underline', ':hover': {
                    fontWeight: 'bold'
                } }), (includesClassNames(ownerState, ['back-to']) && __assign(__assign({}, typography.body1), { textDecoration: 'none', ':hover': {
                    fontWeight: 'bold',
                    textDecoration: 'underline'
                }, ':before': {
                    content: '"< Back to "'
                } }))));
        }
    }
};
export default MuiLink;
