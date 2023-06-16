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
import { secondary } from '../colors';
var MuiMenuItem = {
    styleOverrides: {
        root: function (_a) {
            var ownerState = _a.ownerState;
            return (__assign(__assign({}, (includesClassNames(ownerState, ['header']) && {
                pointerEvents: 'none',
                fontWeight: 'bold'
            })), (includesClassNames(ownerState, ['button']) && {
                fontSize: '14px !important',
                margin: 0,
                padding: '6px 12px 6px 16px',
                border: "2px solid ".concat(secondary[500]),
                borderTop: 'none',
                ':hover': {
                    textDecoration: 'underline',
                    backgroundColor: 'transparent'
                }
            })));
        }
    }
};
export default MuiMenuItem;
