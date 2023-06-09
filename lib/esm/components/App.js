import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { useExternalScript, useFreshworksWidget } from '../hooks';
var App = function (_a) {
    var theme = _a.theme, store = _a.store, children = _a.children;
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
    // @ts-expect-error required by freshworks script.
    window.fwSettings = {
        widget_id: 77000000397
    };
    var freshworksEventType = useExternalScript({
        props: {
            src: 'https://euc-widget.freshworks.com/widgets/77000000397.js',
            type: 'text/javascript',
            async: true,
            defer: true
        },
        eventTypes: ['load', 'error']
    });
    if (freshworksEventType === 'load') {
        useFreshworksWidget('hide');
    }
    else if (freshworksEventType === 'error') {
        alert('Freshworks failed to load!');
    }
    return (React.createElement(ThemeProvider, { theme: theme },
        React.createElement(CssBaseline, null),
        React.createElement("style", null, "\n        body {\n          margin: 0px;\n          padding: 0px;\n        }\n      "),
        React.createElement(Provider, { store: store }, children)));
};
export default App;
