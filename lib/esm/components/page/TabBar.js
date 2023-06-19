import React from 'react';
import { Tabs, Tab, Typography, IconButton } from '@mui/material';
import { ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon } from '@mui/icons-material';
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
            React.createElement(Tabs, { value: value, onChange: function (_, value) { setValue(value); }, ScrollButtonComponent: function (_a) {
                    var _b;
                    var disabled = _a.disabled, onClick = _a.onClick, direction = _a.direction;
                    return React.createElement(React.Fragment, null, disabled === false && (
                    // @ts-expect-error button props not required
                    React.createElement(IconButton, { onClick: onClick, style: (_b = {
                                padding: 0
                            },
                            _b[direction === 'left'
                                ? 'marginRight'
                                : 'marginLeft'] = '15px',
                            _b.color = 'white',
                            _b) }, direction === 'left'
                        ? React.createElement(ChevronLeftIcon, null)
                        : React.createElement(ChevronRightIcon, null))));
                } }, tabs.map(function (tab) {
                return React.createElement(Tab, { key: tab.label, label: tab.label });
            }))),
        children[value]);
};
export default TabBar;
