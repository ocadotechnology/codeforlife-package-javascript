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
var MuiCheckbox = {
    styleOverrides: {
        root: function (_a) {
            var _b;
            var ownerState = _a.ownerState;
            return (__assign({ paddingLeft: 0 }, (includesClassNames(ownerState, ['body']) && {
                marginBottom: (_b = typography.body1) === null || _b === void 0 ? void 0 : _b.marginBottom
            })));
        }
    }
};
export default MuiCheckbox;
