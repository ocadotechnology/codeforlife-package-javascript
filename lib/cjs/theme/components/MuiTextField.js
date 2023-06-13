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
var helpers_1 = require("../../helpers");
var MuiTextField = {
    defaultProps: {
        size: 'small'
    },
    styleOverrides: {
        root: function (_a) {
            var _b, _c, _d, _e;
            var ownerState = _a.ownerState;
            return (__assign((_b = { width: '100%', backgroundColor: 'transparent' }, _b["& > .".concat(material_1.inputBaseClasses.root)] = {
                borderRadius: '0px !important'
            }, _b["& .".concat(material_1.outlinedInputClasses.root, ".").concat(material_1.inputClasses.focused, " > fieldset")] = {
                borderColor: 'black !important'
            }, _b), (ownerState.multiline === true && __assign(__assign(__assign({}, (((0, helpers_1.includesClassNames)(ownerState, ['resize']) ||
                (0, helpers_1.includesClassNames)(ownerState, ['resize-both'])) && (_c = {
                    width: 'auto'
                },
                _c[".".concat(material_1.inputClasses.inputMultiline)] = {
                    resize: 'both'
                },
                _c))), ((0, helpers_1.includesClassNames)(ownerState, ['resize-horizontal']) && (_d = {
                    width: 'auto'
                },
                _d[".".concat(material_1.inputClasses.inputMultiline)] = {
                    resize: 'horizontal'
                },
                _d))), ((0, helpers_1.includesClassNames)(ownerState, ['resize-vertical']) && (_e = {},
                _e[".".concat(material_1.inputClasses.inputMultiline)] = {
                    resize: 'vertical'
                },
                _e))))));
        }
    }
};
exports.default = MuiTextField;
