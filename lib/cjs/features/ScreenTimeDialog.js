"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../components");
var brain_svg_1 = __importDefault(require("../public/images/brain.svg"));
var ScreenTimeDialog = function (_a) {
    var open = _a.open, onClose = _a.onClose;
    return (react_1.default.createElement(material_1.Dialog, { open: open, onClose: onClose, maxWidth: 'sm' },
        react_1.default.createElement(components_1.Image, { src: brain_svg_1.default, alt: 'brain', maxWidth: 100, marginY: 3 }),
        react_1.default.createElement(material_1.Typography, { variant: 'h5', textAlign: 'center' }, "Time for a break?"),
        react_1.default.createElement(material_1.Typography, { textAlign: 'center' }, "You have been using the Code for Life website for a while. Remember to take regular screen breaks to recharge those brain cells!"),
        react_1.default.createElement(material_1.Button, { onClick: onClose, autoFocus: true }, "Continue")));
};
exports.default = ScreenTimeDialog;
