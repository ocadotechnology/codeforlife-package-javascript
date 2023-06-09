"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_redux_1 = require("react-redux");
var material_1 = require("@mui/material");
var hooks_1 = require("../hooks");
var App = function (_a) {
    var theme = _a.theme, store = _a.store, children = _a.children;
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
        // @ts-expect-error required by freshworks script.
        window.fwSettings = {
            widget_id: 77000000397
        };
        var freshworksEventType = (0, hooks_1.useExternalScript)({
            props: {
                src: 'https://euc-widget.freshworks.com/widgets/77000000397.js',
                type: 'text/javascript',
                async: true,
                defer: true
            },
            eventTypes: ['load', 'error']
        });
        if (freshworksEventType === 'load') {
            // TODO: figure out better approach.
            setTimeout(function () {
                (0, hooks_1.useFreshworksWidget)('hide');
            }, 1000);
        }
        else if (freshworksEventType === 'error') {
            alert('Freshworks failed to load!');
        }
    }
    return (react_1.default.createElement(material_1.ThemeProvider, { theme: theme },
        react_1.default.createElement(material_1.CssBaseline, null),
        react_1.default.createElement("style", null, "\n        body {\n          margin: 0px;\n          padding: 0px;\n        }\n      "),
        react_1.default.createElement(react_redux_1.Provider, { store: store }, children)));
};
exports.default = App;
