import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider, CssBaseline } from '@mui/material';
var App = function (_a) {
    var theme = _a.theme, store = _a.store, children = _a.children;
    return (React.createElement(ThemeProvider, { theme: theme },
        React.createElement(CssBaseline, null),
        React.createElement(Provider, { store: store }, children)));
};
export default App;