"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../components");
var InactiveDialog = function (_a) {
    var open = _a.open, onClose = _a.onClose;
    return (react_1.default.createElement(material_1.Dialog, { open: open, onClose: onClose },
        react_1.default.createElement(material_1.Typography, { variant: 'h5', textAlign: 'center' }, "Where did you go? \uD83D\uDC40"),
        react_1.default.createElement(material_1.Typography, { textAlign: 'center' }, "We noticed that you have been inactive for a while. Are you still there? For your online safety we will log you out in:"),
        react_1.default.createElement(components_1.Countdown, { textAlign: 'center', variant: 'h5', seconds: 60 * 2, onEnd: function () {
                onClose();
                alert('TODO: call logout endpoint');
            } }),
        react_1.default.createElement(material_1.Typography, { textAlign: 'center' }, "You may lose progress unless you continue or save."),
        react_1.default.createElement(material_1.Button, { onClick: onClose, autoFocus: true }, "Wait, I'm still here!")));
};
exports.default = InactiveDialog;
