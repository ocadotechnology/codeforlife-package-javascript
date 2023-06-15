"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_redux_1 = require("react-redux");
var material_1 = require("@mui/material");
var hooks_1 = require("../hooks");
require("../scripts");
var App = function (_a) {
    var theme = _a.theme, store = _a.store, header = _a.header, footer = _a.footer, children = _a.children;
    if (process.env.NODE_ENV !== 'development') {
        var oneTrustEventTypes = [
            (0, hooks_1.useExternalScript)({
                props: {
                    src: 'https://cdn-ukwest.onetrust.com/consent/5da42396-cb12-4493-8d04-5179033cfbad/OtAutoBlock.js',
                    type: 'text/javascript'
                },
                eventTypes: ['load', 'error']
            }),
            (0, hooks_1.useExternalScript)({
                props: {
                    src: 'https://cdn-ukwest.onetrust.com/scripttemplates/otSDKStub.js',
                    type: 'text/javascript',
                    charset: 'UTF-8'
                },
                attrs: {
                    'data-domain-script': '5da42396-cb12-4493-8d04-5179033cfbad'
                },
                eventTypes: ['load', 'error']
            })
        ];
        if (oneTrustEventTypes.some(function (t) { return t === 'error'; })) {
            alert('OneTrust failed to load!');
        }
    }
    react_1.default.useEffect(function () {
        (0, hooks_1.useFreshworksWidget)('hide');
    }, []);
    return (react_1.default.createElement(material_1.ThemeProvider, { theme: theme },
        react_1.default.createElement(material_1.CssBaseline, null),
        react_1.default.createElement("style", null, "\n        html, body {\n          box-sizing: border-box;\n          height: 100%;\n          padding: 0;\n          margin: 0;\n        }\n\n        #root {\n          box-sizing: border-box;\n          min-height: 100%;\n          display: flex;\n          flex-direction: column;\n        }\n\n        #header, #footer {\n          flex-grow: 0;\n          flex-shrink: 0;\n        }\n\n        #body {\n          flex-grow: 1;\n        }   \n      "),
        react_1.default.createElement(react_redux_1.Provider, { store: store },
            header !== undefined &&
                react_1.default.createElement(material_1.Box, { id: 'header' }, header),
            react_1.default.createElement(material_1.Box, { id: 'body' }, children),
            footer !== undefined &&
                react_1.default.createElement(material_1.Box, { id: 'footer' }, footer))));
};
exports.default = App;
