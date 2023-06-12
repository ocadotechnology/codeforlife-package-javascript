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
import { inputClasses } from '@mui/material';
import { includesClassNames } from '../../helpers';
var MuiTextField = {
    defaultProps: {
        size: 'small'
    },
    styleOverrides: {
        root: function (_a) {
            var _b, _c, _d;
            var ownerState = _a.ownerState;
            return (__assign({ width: '100%', backgroundColor: 'transparent', '& .MuiOutlinedInput-root.Mui-focused > fieldset': {
                    borderColor: 'black',
                    margin: '3px'
                } }, (ownerState.multiline === true && __assign(__assign(__assign({}, ((includesClassNames(ownerState, ['resize']) ||
                includesClassNames(ownerState, ['resize-both'])) && (_b = {
                    width: 'auto'
                },
                _b[".".concat(inputClasses.inputMultiline)] = {
                    resize: 'both'
                },
                _b))), (includesClassNames(ownerState, ['resize-horizontal']) && (_c = {
                    width: 'auto'
                },
                _c[".".concat(inputClasses.inputMultiline)] = {
                    resize: 'horizontal'
                },
                _c))), (includesClassNames(ownerState, ['resize-vertical']) && (_d = {},
                _d[".".concat(inputClasses.inputMultiline)] = {
                    resize: 'vertical'
                },
                _d))))));
        }
    }
};
export default MuiTextField;
