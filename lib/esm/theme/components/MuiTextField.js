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
import { inputClasses, inputBaseClasses, outlinedInputClasses } from '@mui/material';
import { includesClassNames } from '../../helpers';
var MuiTextField = {
    defaultProps: {
        size: 'small'
    },
    styleOverrides: {
        root: function (_a) {
            var _b, _c, _d, _e;
            var ownerState = _a.ownerState;
            return (__assign((_b = { width: '100%', backgroundColor: 'transparent' }, _b["& > .".concat(inputBaseClasses.root)] = {
                borderRadius: '0px !important'
            }, _b["& .".concat(outlinedInputClasses.root, ".").concat(inputClasses.focused, " > fieldset")] = {
                borderColor: 'black !important',
                margin: '2px 1px 1px 1px'
            }, _b), (ownerState.multiline === true && __assign(__assign(__assign({}, ((includesClassNames(ownerState, ['resize']) ||
                includesClassNames(ownerState, ['resize-both'])) && (_c = {
                    width: 'auto'
                },
                _c[".".concat(inputClasses.inputMultiline)] = {
                    resize: 'both'
                },
                _c))), (includesClassNames(ownerState, ['resize-horizontal']) && (_d = {
                    width: 'auto'
                },
                _d[".".concat(inputClasses.inputMultiline)] = {
                    resize: 'horizontal'
                },
                _d))), (includesClassNames(ownerState, ['resize-vertical']) && (_e = {},
                _e[".".concat(inputClasses.inputMultiline)] = {
                    resize: 'vertical'
                },
                _e))))));
        }
    }
};
export default MuiTextField;
