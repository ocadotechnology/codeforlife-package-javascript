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
import { includesClassNames } from '../../helpers';
import typography from '../typography';
var MuiTable = {
    styleOverrides: {
        root: function (_a) {
            var _b, _c;
            var _d;
            var ownerState = _a.ownerState;
            return (__assign(__assign((_b = { borderStyle: 'hidden', overflowX: 'auto' }, _b[".".concat(tableCellClasses.root)] = {
                border: '2px solid white'
            }, _b), (includesClassNames(ownerState, ['text']) && (_c = {
                    borderStyle: 'unset',
                    display: 'block'
                },
                _c[".".concat(tableCellClasses.root)] = {
                    border: '1px solid #DDD'
                },
                _c))), (includesClassNames(ownerState, ['body']) && {
                marginBottom: (_d = typography.body1) === null || _d === void 0 ? void 0 : _d.marginBottom
            })));
        }
    }
};
export default MuiTable;
