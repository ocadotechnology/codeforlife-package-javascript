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
import { typographyClasses } from '@mui/material';
var MuiTableHead = {
    styleOverrides: {
        root: function (_a) {
            var _b;
            var ownerState = _a.ownerState;
            return (__assign(__assign({ backgroundColor: '#6E7171' }, (ownerState.className === 'light' && {
                backgroundColor: '#9A9C9E'
            })), (_b = {}, _b[".".concat(typographyClasses.root)] = {
                color: 'white',
                marginBottom: 0,
                fontWeight: 600
            }, _b)));
        }
    }
};
export default MuiTableHead;
