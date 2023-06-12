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
var _a;
import { typographyClasses } from '@mui/material';
import { form } from '../typography';
var MuiFormControlLabel = {
    styleOverrides: {
        root: (_a = {},
            _a[".".concat(typographyClasses.root)] = __assign(__assign({}, form), { marginBottom: 0 }),
            _a.marginBottom = form.marginBottom,
            _a)
    }
};
export default MuiFormControlLabel;
