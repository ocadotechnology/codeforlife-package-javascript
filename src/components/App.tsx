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
  CssBaseline,
  Box
} from '@mui/material';

import {
  useExternalScript,
  useFreshworksWidget
} from '../hooks';

import '../scripts';

export interface AppProps<
  A extends Action = AnyAction,
  S = unknown
> {
  theme: Theme;
  store: Store<S, A>;
  header?: React.ReactElement;
  footer?: React.ReactElement;
  children: React.ReactNode;
}

const App = <
  A extends Action = AnyAction,
  S = unknown
>({
  theme,
  store,
  header,
  footer,
  children
}: AppProps<A, S>): JSX.Element => {
  if (process.env.NODE_ENV !== 'development') {
    const oneTrustEventTypes = [
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
    if (oneTrustEventTypes.some(t => t === 'error')) {
      alert('OneTrust failed to load!');
    }
  }

  React.useEffect(() => {
    useFreshworksWidget('hide');
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <style>{`
        html, body {
          box-sizing: border-box;
          height: 100%;
          padding: 0;
          margin: 0;
        }

        #root {
          box-sizing: border-box;
          min-height: 100%;
          display: flex;
          flex-direction: column;
        }

        #header, #footer {
          flex-grow: 0;
          flex-shrink: 0;
        }

        #body {
          flex-grow: 1;
        }   
      `}</style>
      <Provider store={store}>
        {header !== undefined &&
          React.cloneElement(header, { id: 'header' })
        }
        <Box id='body'>{children}</Box>
        {footer !== undefined &&
          React.cloneElement(footer, { id: 'footer' })
        }
      </Provider>
    </ThemeProvider>
  );
};

export default App;
