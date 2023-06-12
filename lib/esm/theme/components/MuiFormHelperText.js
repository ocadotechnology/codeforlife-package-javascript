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
import { form } from '../typography';
var MuiFormHelperText = {
    styleOverrides: {
        root: __assign(__assign({}, form), { marginTop: 4, marginLeft: 4 })
    }
};
export default MuiFormHelperText;
