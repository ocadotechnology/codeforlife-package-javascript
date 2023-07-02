"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_redux_1 = require("react-redux");
var material_1 = require("@mui/material");
var hooks_1 = require("../hooks");
var features_1 = require("../features");
require("../scripts");
var App = function (_a) {
    var theme = _a.theme, store = _a.store, children = _a.children, _b = _a.maxIdleSeconds, maxIdleSeconds = _b === void 0 ? 60 * 60 : _b, _c = _a.maxTotalSeconds, maxTotalSeconds = _c === void 0 ? 60 * 60 : _c;
    var root = document.getElementById('root');
    // TODO: dynamically check if user is authenticated.
    var isAuthenticated = true;
    var _d = (0, hooks_1.useCountdown)(maxIdleSeconds), idleSeconds = _d[0], setIdleSeconds = _d[1];
    var _e = (0, hooks_1.useCountdown)(maxTotalSeconds), totalSeconds = _e[0], setTotalSeconds = _e[1];
    var isIdle = isAuthenticated && idleSeconds === 0;
    var tooMuchScreenTime = totalSeconds === 0;
    function resetIdleSeconds() { setIdleSeconds(maxIdleSeconds); }
    function resetTotalSeconds() { setTotalSeconds(maxTotalSeconds); }
    (0, hooks_1.useEventListener)(root, 'mousemove', resetIdleSeconds);
    (0, hooks_1.useEventListener)(root, 'keypress', resetIdleSeconds);
    react_1.default.useEffect(function () {
        if (isAuthenticated)
            resetIdleSeconds();
    }, [isAuthenticated]);
    react_1.default.useEffect(function () {
        (0, hooks_1.useFreshworksWidget)('hide');
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
    }, []);
    return (react_1.default.createElement(material_1.ThemeProvider, { theme: theme },
        react_1.default.createElement(material_1.CssBaseline, null),
        react_1.default.createElement("style", null, "\n        html, body {\n          box-sizing: border-box;\n          height: 100%;\n          padding: 0;\n          margin: 0;\n        }\n\n        #root {\n          box-sizing: border-box;\n          min-height: 100%;\n          display: flex;\n          flex-direction: column;\n        }\n\n        #header, #footer {\n          flex-grow: 0;\n          flex-shrink: 0;\n        }\n\n        #body {\n          flex-grow: 1;\n        }   \n      "),
        react_1.default.createElement(react_redux_1.Provider, { store: store },
            react_1.default.createElement(features_1.InactiveDialog, { open: isIdle, onClose: resetIdleSeconds }),
            react_1.default.createElement(features_1.ScreenTimeDialog, { open: !isIdle && tooMuchScreenTime, onClose: resetTotalSeconds }),
            children)));
};
exports.default = App;
