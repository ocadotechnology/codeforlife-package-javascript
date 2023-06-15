"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var colors_1 = require("../../theme/colors");
var Section_1 = __importDefault(require("./Section"));
var helpers_1 = require("../../helpers");
var TabBar = function (_a) {
    var header = _a.header, tabs = _a.tabs;
    var labels = tabs.map(function (tab) { return tab.label; });
    var children = tabs.map(function (tab) { return tab.children; });
    var params = helpers_1.SearchParams.get({
        tab: { validate: helpers_1.SearchParams.validate.inOptions(labels) }
    });
    var _b = react_1.default.useState(params === null ? 0 : labels.indexOf(params.tab)), value = _b[0], setValue = _b[1];
    return react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Section_1.default, { gridProps: { bgcolor: colors_1.primary[500] }, sx: { paddingY: '100px' }, className: 'flex-center' },
            react_1.default.createElement(material_1.Typography, { textAlign: 'center', variant: 'h2', style: { color: 'white' }, mb: 0 }, header)),
        react_1.default.createElement(Section_1.default, { gridProps: { bgcolor: colors_1.primary[300] }, sx: { paddingY: '6px' }, className: 'flex-center' },
            react_1.default.createElement(material_1.Tabs, { value: value, onChange: function (_, value) { setValue(value); } }, tabs.map(function (tab) {
                return react_1.default.createElement(material_1.Tab, { key: tab.label, label: tab.label });
            }))),
        children[value]);
};
exports.default = TabBar;