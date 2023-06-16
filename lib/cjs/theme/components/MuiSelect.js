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
var material_1 = require("@mui/material");
var helpers_1 = require("../../helpers");
var colors_1 = require("../colors");
var typography_1 = __importDefault(require("../typography"));
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
            return (__assign({ borderRadius: '0px' }, ((0, helpers_1.includesClassNames)(ownerState, ['button']) && (_b = {
                    minWidth: '150px',
                    height: '42px'
                },
                _b[".".concat(material_1.selectClasses.outlined)] = __assign(__assign({}, typography_1.default.button), { padding: '6px 0px 6px 16px' }),
                _b[".".concat(material_1.iconButtonClasses.root)] = {
                    color: (_c = typography_1.default.body1) === null || _c === void 0 ? void 0 : _c.color,
                    position: 'absolute',
                    right: '8px'
                },
                _b[".".concat(material_1.outlinedInputClasses.notchedOutline)] = {
                    border: "2px solid ".concat(colors_1.secondary[500], " !important")
                },
                _b))));
        }
    }
};
exports.default = MuiSelect;
