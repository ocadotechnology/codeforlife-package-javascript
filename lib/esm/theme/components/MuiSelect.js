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
import { selectClasses, iconButtonClasses, outlinedInputClasses } from '@mui/material';
import { includesClassNames } from '../../helpers';
import { secondary } from '../colors';
import typography from '../typography';
var MuiSelect = {
    defaultProps: {
        color: 'black'
    },
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    styleOverrides: {
        root: function (_a) {
            var _b;
            var _c;
            var ownerState = _a.ownerState;
            return (__assign({ borderRadius: '0px' }, (includesClassNames(ownerState, ['button']) && (_b = {
                    minWidth: '150px',
                    height: '42px'
                },
                _b[".".concat(selectClasses.outlined)] = __assign(__assign({}, typography.button), { padding: '6px 0px 6px 16px' }),
                _b[".".concat(iconButtonClasses.root)] = {
                    color: (_c = typography.body1) === null || _c === void 0 ? void 0 : _c.color,
                    position: 'absolute',
                    right: '8px'
                },
                _b[".".concat(outlinedInputClasses.notchedOutline)] = {
                    border: "2px solid ".concat(secondary[500], " !important")
                },
                _b))));
        }
    }
};
export default MuiSelect;
