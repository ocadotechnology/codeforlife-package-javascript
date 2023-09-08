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
import { tabClasses } from '@mui/material';
var MuiTabs = {
    defaultProps: {
        variant: 'scrollable',
        scrollButtons: true,
        allowScrollButtonsMobile: true
    },
    styleOverrides: {
        root: function (_a) {
            var _b;
            var ownerState = _a.ownerState;
            return (__assign({}, (ownerState !== undefined && // NOTE: this is a bug with MUI
                [undefined, 'horizontal'].includes(ownerState.orientation) && (_b = {},
                _b[".".concat(tabClasses.root, ":not(:last-of-type)")] = {
                    marginRight: '30px'
                },
                _b))));
        },
        indicator: {
            display: 'none'
        }
    }
};
export default MuiTabs;
