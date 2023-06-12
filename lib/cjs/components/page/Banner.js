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
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var palette_1 = __importDefault(require("../../theme/palette"));
var colors_1 = require("../../theme/colors");
var Image_1 = __importDefault(require("../Image"));
var Section_1 = __importDefault(require("./Section"));
;
var Banner = function (_a) {
    var header = _a.header, subheader = _a.subheader, _b = _a.textAlign, textAlign = _b === void 0 ? 'start' : _b, imageProps = _a.imageProps, buttonProps = _a.buttonProps, _c = _a.bgcolor, bgcolor = _c === void 0 ? 'primary' : _c;
    // @ts-expect-error guaranteed to be in palette
    var contrastText = palette_1.default[bgcolor].contrastText;
    var _bgcolor;
    switch (bgcolor) {
        case 'primary':
            _bgcolor = colors_1.primary[500];
            break;
        case 'secondary':
            _bgcolor = colors_1.secondary[500];
            break;
        case 'tertiary':
            _bgcolor = colors_1.tertiary[500];
            break;
    }
    return react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Section_1.default, { gridProps: { bgcolor: _bgcolor }, sx: { paddingY: 0 } },
            react_1.default.createElement(material_1.Stack, { direction: 'row', alignItems: 'center', justifyContent: textAlign, gap: 2 },
                react_1.default.createElement(material_1.Stack, { py: {
                        xs: '80px',
                        md: imageProps !== undefined ? 0 : '100px'
                    }, textAlign: textAlign },
                    react_1.default.createElement(material_1.Typography, { variant: 'h2', color: contrastText }, header),
                    react_1.default.createElement(material_1.Typography, { color: contrastText, variant: 'h5', mb: buttonProps !== undefined ? undefined : 0 }, subheader),
                    buttonProps !== undefined &&
                        react_1.default.createElement(material_1.Button, __assign({}, buttonProps))),
                imageProps !== undefined &&
                    react_1.default.createElement(Image_1.default, __assign({}, imageProps, { display: { xs: 'none', md: 'block' }, maxWidth: '320px', marginLeft: 'auto' })))));
};
exports.default = Banner;
