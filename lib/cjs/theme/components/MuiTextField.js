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
var material_1 = require("@mui/material");
var MuiTextField = {
    styleOverrides: {
        root: function (_a) {
            var _b, _c, _d;
            var ownerState = _a.ownerState;
            return (__assign({ width: '100%', backgroundColor: 'white' }, (ownerState.multiline === true && __assign({}, (ownerState.className !== undefined && __assign(__assign(__assign({}, (['resize', 'resize-both'].includes(ownerState.className) && (_b = {
                    width: 'auto'
                },
                _b[".".concat(material_1.inputClasses.inputMultiline)] = {
                    resize: 'both'
                },
                _b))), (ownerState.className === 'resize-horizontal' && (_c = {
                    width: 'auto'
                },
                _c[".".concat(material_1.inputClasses.inputMultiline)] = {
                    resize: 'horizontal'
                },
                _c))), (ownerState.className === 'resize-vertical' && (_d = {},
                _d[".".concat(material_1.inputClasses.inputMultiline)] = {
                    resize: 'vertical'
                },
                _d))))))));
        }
    }
};
exports.default = MuiTextField;