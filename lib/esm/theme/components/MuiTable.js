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
import { tableCellClasses } from '@mui/material';
var MuiTable = {
    styleOverrides: {
        root: function (_a) {
            var _b, _c;
            var ownerState = _a.ownerState;
            return (__assign((_b = {}, _b[".".concat(tableCellClasses.root)] = {
                border: '2px solid white'
            }, _b), (ownerState.className === 'text' && (_c = {},
                _c[".".concat(tableCellClasses.root)] = {
                    border: '1px solid #DDD'
                },
                _c))));
        }
    }
};
export default MuiTable;
