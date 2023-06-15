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
var MuiTableBody = {
    styleOverrides: {
        root: function (_a) {
            var ownerState = _a.ownerState;
            return (__assign({ backgroundColor: '#F2F2F2' }, (includesClassNames(ownerState, ['text']) && {
                backgroundColor: 'white'
            })));
        }
    }
};
export default MuiTableBody;
