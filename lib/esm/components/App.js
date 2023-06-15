import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { useExternalScript, useFreshworksWidget } from '../hooks';
import '../scripts';
var App = function (_a) {
    var theme = _a.theme, store = _a.store, children = _a.children;
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
        React.createElement("style", null, "\n        body {\n          margin: 0px;\n          padding: 0px;\n        }\n      "),
        React.createElement(Provider, { store: store }, children)));
};
export default App;