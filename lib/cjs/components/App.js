"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_redux_1 = require("react-redux");
var material_1 = require("@mui/material");
var App = function (_a) {
    var theme = _a.theme, store = _a.store, children = _a.children;
    return (react_1.default.createElement(material_1.ThemeProvider, { theme: theme },
        react_1.default.createElement(material_1.CssBaseline, null),
        react_1.default.createElement("style", null, "\n      body {\n        margin: 0px;\n        padding: 0px;\n      }\n    "),
        react_1.default.createElement(react_redux_1.Provider, { store: store }, children)));
};
exports.default = App;
