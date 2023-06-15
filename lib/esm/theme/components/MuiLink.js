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
import { includesClassNames } from '../../helpers';
var MuiLink = {
    defaultProps: {
        underline: 'none',
        variant: 'body1'
    },
    styleOverrides: {
        root: function (_a) {
            var ownerState = _a.ownerState;
            return (__assign(__assign({ cursor: 'pointer' }, (ownerState.variant !== undefined &&
                ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
                    .includes(ownerState.variant)
                ? {
                    ':hover': {
                        textDecoration: 'underline'
                    }
                }
                : {
                    textDecoration: 'underline',
                    ':hover': {
                        fontWeight: 'bold'
                    }
                })), (includesClassNames(ownerState, ['back-to']) && {
                textDecoration: 'none',
                ':hover': {
                    fontWeight: 'bold',
                    textDecoration: 'underline'
                },
                ':before': {
                    content: '"< Back to "'
                }
            })));
        }
    }
};
export default MuiLink;
