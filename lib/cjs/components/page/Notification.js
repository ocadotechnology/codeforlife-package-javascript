"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var icons_material_1 = require("@mui/icons-material");
var palette_1 = __importDefault(require("../../theme/palette"));
var Section_1 = __importDefault(require("./Section"));
var Notification = function (_a) {
    var _b = _a.open, open = _b === void 0 ? true : _b, onClose = _a.onClose, children = _a.children, _c = _a.bgcolor, bgcolor = _c === void 0 ? 'secondary' : _c;
    var _d = react_1.default.useState(open), _open = _d[0], _setOpen = _d[1];
    if (!_open)
        return react_1.default.createElement(react_1.default.Fragment, null);
    var contrastText = 
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    palette_1.default[bgcolor].contrastText;
    return (react_1.default.createElement(Section_1.default, { gridProps: {
            bgcolor: (bgcolor === 'secondary') ? '#ffd23b' : '#08bafc',
            paddingY: '5px'
        } },
        react_1.default.createElement(material_1.Stack, { direction: 'row', alignItems: 'center', gap: 2 },
            react_1.default.createElement(icons_material_1.InfoOutlined, { htmlColor: contrastText }),
            react_1.default.createElement(material_1.Typography, { variant: 'body2', color: contrastText, mb: 0 }, children),
            react_1.default.createElement(material_1.IconButton, { style: { marginLeft: 'auto' }, onClick: function () {
                    _setOpen(false);
                    if (onClose !== undefined)
                        onClose();
                } },
                react_1.default.createElement(icons_material_1.CloseOutlined, { htmlColor: contrastText })))));
};
exports.default = Notification;