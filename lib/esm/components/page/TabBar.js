import React from 'react';
import { Tabs, Tab, Typography } from '@mui/material';
import { primary } from '../../theme/colors';
import Section from './Section';
import { SearchParams } from '../../helpers';
var TabBar = function (_a) {
    var header = _a.header, tabs = _a.tabs;
    var labels = tabs.map(function (tab) { return tab.label; });
    var children = tabs.map(function (tab) { return tab.children; });
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
        children[value]);
};
export default TabBar;
