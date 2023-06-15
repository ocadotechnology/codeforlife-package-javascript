"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var material_1 = require("@mui/material");
var MuiCheckbox = {
    styleOverrides: {
        root: (_a = {
                paddingLeft: 0
            },
            _a[".".concat(material_1.touchRippleClasses.root)] = {
                left: '-12px'
            },
            _a[".".concat(material_1.touchRippleClasses.root, " > *")] = {
                left: '-12px'
            },
            _a)
    }
};
exports.default = MuiCheckbox;
