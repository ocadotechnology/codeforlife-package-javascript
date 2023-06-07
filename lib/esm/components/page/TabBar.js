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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { Tabs, Tab, Typography } from '@mui/material';
import { primary } from '../../theme/colors';
import Section from './Section';
import { SearchParams } from '../../helpers';
var TabBar = function (_a) {
    var header = _a.header, tabs = _a.tabs;
    var labels = tabs.map(function (tab) { return tab.label; });
    var sectionProps = tabs.map(function (tab) {
        var label = tab.label, sectionProps = __rest(tab, ["label"]);
        return sectionProps;
    });
    var params = SearchParams.get({
        tab: { validate: SearchParams.validate.inOptions(labels) }
    });
    var _b = React.useState(params === null ? 0 : labels.indexOf(params.tab)), value = _b[0], setValue = _b[1];
    return React.createElement(React.Fragment, null,
        React.createElement(Section, { gridProps: { bgcolor: primary[500] }, sx: { paddingY: '100px' }, className: 'flex-center' },
            React.createElement(Typography, { textAlign: 'center', variant: 'h2', style: { color: 'white' }, mb: 0 }, header)),
        React.createElement(Section, { gridProps: { bgcolor: primary[300] }, sx: { paddingY: '6px' }, className: 'flex-center' },
            React.createElement(Tabs, { value: value, onChange: function (_, value) { setValue(value); } }, tabs.map(function (tab) {
                return React.createElement(Tab, { key: tab.label, label: tab.label });
            }))),
        React.createElement(Section, __assign({}, sectionProps[value])));
};
export default TabBar;
