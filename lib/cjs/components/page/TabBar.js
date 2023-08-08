"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var material_1 = require("@mui/material");
var icons_material_1 = require("@mui/icons-material");
var yup_1 = require("yup");
var colors_1 = require("../../theme/colors");
var yup_2 = require("../../helpers/yup");
var Section_1 = __importDefault(require("./Section"));
var TabBar = function (_a) {
    var header = _a.header, tabs = _a.tabs, originalPath = _a.originalPath, _b = _a.value, value = _b === void 0 ? 0 : _b;
    var params = (0, react_router_dom_1.useParams)();
    var navigate = (0, react_router_dom_1.useNavigate)();
    var _c = react_1.default.useState(value < 0 ? 0 : value >= tabs.length ? tabs.length - 1 : value), _value = _c[0], _setValue = _c[1];
    var labels = tabs.map(function (tab) { return tab.label; });
    var children = tabs.map(function (tab) { return tab.children; });
    var paths = tabs.map(function (tab) { return tab.path; });
    react_1.default.useEffect(function () {
        _setValue(value);
    }, [value]);
    react_1.default.useEffect(function () {
        var _a;
        var tab = (_a = (0, yup_2.tryValidateSync)(params, (0, yup_1.object)({
            tab: (0, yup_1.string)().oneOf(paths).required()
        }))) === null || _a === void 0 ? void 0 : _a.tab;
        if (tab !== undefined) {
            _setValue(paths.indexOf(tab));
        }
    }, [params]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Section_1.default, { gridProps: { bgcolor: colors_1.primary[500] }, sx: { paddingY: '100px' }, className: "flex-center" },
            react_1.default.createElement(material_1.Typography, { textAlign: "center", variant: "h2", style: { color: 'white' }, mb: 0 }, header)),
        react_1.default.createElement(Section_1.default, { gridProps: { bgcolor: colors_1.primary[300] }, sx: { paddingY: '6px' }, className: "flex-center" },
            react_1.default.createElement(material_1.Tabs, { value: _value, onChange: function (_, value) {
                    navigate((0, react_router_dom_1.generatePath)(originalPath, {
                        tab: paths[value]
                    }));
                }, ScrollButtonComponent: function (_a) {
                    var _b;
                    var disabled = _a.disabled, onClick = _a.onClick, direction = _a.direction;
                    return (react_1.default.createElement(react_1.default.Fragment, null, disabled === false && (
                    // @ts-expect-error button props not required
                    react_1.default.createElement(material_1.IconButton, { onClick: onClick, style: (_b = {
                                padding: 0
                            },
                            _b[direction === 'left' ? 'marginRight' : 'marginLeft'] = '15px',
                            _b.color = 'white',
                            _b) }, direction === 'left'
                        ? react_1.default.createElement(react_1.default.Fragment, null,
                            react_1.default.createElement(icons_material_1.ChevronLeft, null))
                        : react_1.default.createElement(react_1.default.Fragment, null,
                            react_1.default.createElement(icons_material_1.ChevronRight, null))))));
                } }, labels.map(function (label) { return (react_1.default.createElement(material_1.Tab, { disableRipple: true, key: label, label: label })); }))),
        children[_value]));
};
exports.default = TabBar;
