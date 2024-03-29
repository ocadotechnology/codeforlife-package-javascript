"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var _components_1 = require("./_components");
var MuiGrid2 = {
    defaultProps: {
        disableEqualOverflow: true
        // padding: 0 // TODO: normalize padding.
    },
    styleOverrides: {
        root: function (_a) {
            var ownerState = _a.ownerState;
            return (__assign({}, (0, _components_1.getFlexStyleOverrides)(ownerState)));
        }
    }
};
exports.default = MuiGrid2;
