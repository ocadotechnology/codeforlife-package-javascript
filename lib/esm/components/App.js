import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { useExternalScript, useFreshworksWidget } from '../hooks';
import '../scripts';
var App = function (_a) {
    var theme = _a.theme, store = _a.store, header = _a.header, footer = _a.footer, children = _a.children;
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
    React.useEffect(function () {
        useFreshworksWidget('hide');
    }, []);
    return (React.createElement(ThemeProvider, { theme: theme },
        React.createElement(CssBaseline, null),
        React.createElement("style", null, "\n        html, body {\n          box-sizing: border-box;\n          height: 100%;\n          padding: 0;\n          margin: 0;\n        }\n\n        #root {\n          box-sizing: border-box;\n          min-height: 100%;\n          display: flex;\n          flex-direction: column;\n        }\n\n        #header, #footer {\n          flex-grow: 0;\n          flex-shrink: 0;\n        }\n\n        #body {\n          flex-grow: 1;\n        }   \n      "),
        React.createElement(Provider, { store: store },
            header !== undefined &&
                React.cloneElement(header, { id: 'header' }),
            React.createElement(Box, { id: 'body' }, children),
            footer !== undefined &&
                React.cloneElement(footer, { id: 'footer' }))));
};
export default App;
