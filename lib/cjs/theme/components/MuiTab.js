"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var material_1 = require("@mui/material");
var colors_1 = require("../colors");
var MuiTab = {
    styleOverrides: {
        root: (_a = {
                textTransform: 'none',
                fontSize: '16px',
                fontWeight: 600,
                minWidth: '150px',
                border: '2px solid white'
            },
            _a["&.".concat(material_1.tabClasses.selected)] = {
                color: colors_1.primary[300],
                backgroundColor: 'white',
                cursor: 'default'
            },
            _a[":not(.".concat(material_1.tabClasses.selected, ")")] = {
                color: 'white',
                ':hover': {
                    textDecoration: 'underline'
                }
            },
            _a)
    }
};
exports.default = MuiTab;
