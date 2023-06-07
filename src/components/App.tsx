import React from 'react';
import { Provider } from 'react-redux';
import {
  Action,
  AnyAction,
  Store
} from 'redux';
import {
  Theme,
  ThemeProvider,
  CssBaseline
} from '@mui/material';

export interface AppProps<
  A extends Action = AnyAction,
  S = unknown
> {
  theme: Theme;
  store: Store<S, A>;
  children: React.ReactNode;
}

const App = <
  A extends Action = AnyAction,
  S = unknown
>({
  theme,
  store,
  children
}: AppProps<A, S>): JSX.Element => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <style>{`
      body {
        margin: 0px;
        padding: 0px;
      }
    `}</style>
    <Provider store={store}>
      {children}
    </Provider>
  </ThemeProvider>
);

export default App;
