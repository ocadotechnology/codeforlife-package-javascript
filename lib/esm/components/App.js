import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { useExternalScript, useFreshworksWidget, useCountdown, useEventListener } from '../hooks';
import { InactiveDialog, ScreenTimeDialog } from '../features';
import '../scripts';
import ScrollRoutes from './ScrollRoutes';
var App = function (_a) {
    var theme = _a.theme, store = _a.store, header = _a.header, footer = _a.footer, children = _a.children, _b = _a.maxIdleSeconds, maxIdleSeconds = _b === void 0 ? 60 * 60 : _b, _c = _a.maxTotalSeconds, maxTotalSeconds = _c === void 0 ? 60 * 60 : _c;
    var root = document.getElementById('root');
    // TODO: dynamically check if user is authenticated.
    var isAuthenticated = true;
    var _d = useCountdown(maxIdleSeconds), idleSeconds = _d[0], setIdleSeconds = _d[1];
    var _e = useCountdown(maxTotalSeconds), totalSeconds = _e[0], setTotalSeconds = _e[1];
    var isIdle = isAuthenticated && idleSeconds === 0;
    var tooMuchScreenTime = totalSeconds === 0;
    function resetIdleSeconds() { setIdleSeconds(maxIdleSeconds); }
    function resetTotalSeconds() { setTotalSeconds(maxTotalSeconds); }
    useEventListener(root, 'mousemove', resetIdleSeconds);
    useEventListener(root, 'keypress', resetIdleSeconds);
    React.useEffect(function () {
        if (isAuthenticated)
            resetIdleSeconds();
    }, [isAuthenticated]);
    React.useEffect(function () {
        useFreshworksWidget('hide');
        if (process.env.NODE_ENV !== 'development') {
            var oneTrustEventTypes = [
                useExternalScript({
                    props: {
                        src: 'https://cdn-ukwest.onetrust.com/consent/5da42396-cb12-4493-8d04-5179033cfbad/OtAutoBlock.js',
                        type: 'text/javascript'
                    },
                    eventTypes: ['load', 'error']
                }),
                useExternalScript({
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
    return (React.createElement(ThemeProvider, { theme: theme },
        React.createElement(CssBaseline, null),
        React.createElement("style", null, "\n        html, body {\n          box-sizing: border-box;\n          height: 100%;\n          padding: 0;\n          margin: 0;\n        }\n\n        #root {\n          box-sizing: border-box;\n          min-height: 100%;\n          display: flex;\n          flex-direction: column;\n        }\n\n        #header, #footer {\n          flex-grow: 0;\n          flex-shrink: 0;\n        }\n\n        #body {\n          flex-grow: 1;\n        }   \n      "),
        React.createElement(Provider, { store: store },
            React.createElement(InactiveDialog, { open: isIdle, onClose: resetIdleSeconds }),
            React.createElement(ScreenTimeDialog, { open: !isIdle && tooMuchScreenTime, onClose: resetTotalSeconds }),
            React.createElement(BrowserRouter, null,
                header,
                React.createElement(ScrollRoutes, null, children),
                footer))));
};
export default App;
