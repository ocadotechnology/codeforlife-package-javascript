import React from 'react';
import { useParams, useNavigate, generatePath } from 'react-router-dom';
import { Tabs, Tab, Typography, IconButton } from '@mui/material';
import { ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon } from '@mui/icons-material';
import { object as YupObject, string as YupString } from 'yup';
import { primary } from '../../theme/colors';
import { tryValidateSync } from '../../helpers/yup';
import Section from './Section';
var TabBar = function (_a) {
    var header = _a.header, tabs = _a.tabs, originalPath = _a.originalPath, _b = _a.value, value = _b === void 0 ? 0 : _b;
    var params = useParams();
    var navigate = useNavigate();
    var _c = React.useState(value < 0 ? 0 : value >= tabs.length ? tabs.length - 1 : value), _value = _c[0], _setValue = _c[1];
    var labels = tabs.map(function (tab) { return tab.label; });
    var children = tabs.map(function (tab) { return tab.children; });
    var paths = tabs.map(function (tab) { return tab.path; });
    React.useEffect(function () {
        _setValue(value);
    }, [value]);
    React.useEffect(function () {
        var _a;
        var tab = (_a = tryValidateSync(params, YupObject({
            tab: YupString().oneOf(paths).required()
        }))) === null || _a === void 0 ? void 0 : _a.tab;
        if (tab !== undefined) {
            _setValue(paths.indexOf(tab));
        }
    }, [params]);
    return (React.createElement(React.Fragment, null,
        React.createElement(Section, { gridProps: { bgcolor: primary[500] }, sx: { paddingY: '100px' }, className: "flex-center" },
            React.createElement(Typography, { textAlign: "center", variant: "h2", style: { color: 'white' }, mb: 0 }, header)),
        React.createElement(Section, { gridProps: { bgcolor: primary[300] }, sx: { paddingY: '6px' }, className: "flex-center" },
            React.createElement(Tabs, { value: _value, onChange: function (_, value) {
                    navigate(generatePath(originalPath, {
                        tab: paths[value]
                    }));
                }, ScrollButtonComponent: function (_a) {
                    var _b;
                    var disabled = _a.disabled, onClick = _a.onClick, direction = _a.direction;
                    return (React.createElement(React.Fragment, null, disabled === false && (
                    // @ts-expect-error button props not required
                    React.createElement(IconButton, { onClick: onClick, style: (_b = {
                                padding: 0
                            },
                            _b[direction === 'left' ? 'marginRight' : 'marginLeft'] = '15px',
                            _b.color = 'white',
                            _b) }, direction === 'left'
                        ? React.createElement(React.Fragment, null,
                            React.createElement(ChevronLeftIcon, null))
                        : React.createElement(React.Fragment, null,
                            React.createElement(ChevronRightIcon, null))))));
                } }, labels.map(function (label) { return (React.createElement(Tab, { disableRipple: true, key: label, label: label })); }))),
        children[_value]));
};
export default TabBar;
