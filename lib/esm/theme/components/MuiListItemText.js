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
import { listItemTextClasses } from '@mui/material';
import { includesClassNames } from '../../helpers';
var MuiListItemText = {
    styleOverrides: {
        root: function (_a) {
            var _b;
            var ownerState = _a.ownerState;
            return (__assign({}, (includesClassNames(ownerState, ['last']) && (_b = {},
                _b[".".concat(listItemTextClasses.primary)] = {
                    marginBottom: 0
                },
                _b))));
        }
    }
};
export default MuiListItemText;
