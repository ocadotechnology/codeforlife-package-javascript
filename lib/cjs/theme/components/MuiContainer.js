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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var spacing_1 = __importDefault(require("../spacing"));
var _components_1 = require("./_components");
var MuiContainer = {
    defaultProps: {
        maxWidth: 'lg'
    },
    styleOverrides: {
        root: function (_a) {
            var ownerState = _a.ownerState;
            return (__assign(__assign({}, (0, _components_1.getFlexStyleOverrides)(ownerState)), { paddingLeft: (0, spacing_1.default)(2, true), paddingRight: (0, spacing_1.default)(2, true), padding: (0, spacing_1.default)(7) }));
        }
    }
};
exports.default = MuiContainer;
