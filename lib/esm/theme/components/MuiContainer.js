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
import { getFlexStyleOverrides } from './_components';
var MuiContainer = {
    defaultProps: {
        maxWidth: 'lg'
    },
    styleOverrides: {
        root: function (_a) {
            var ownerState = _a.ownerState;
            return (__assign(__assign({}, getFlexStyleOverrides(ownerState)), { paddingLeft: '15px !important', paddingRight: '15px !important', padding: '25px' }));
        }
    }
};
export default MuiContainer;
