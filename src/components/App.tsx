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

import { useExternalScript } from '../hooks';

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
}: AppProps<A, S>): JSX.Element => {
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

  // @ts-expect-error required by freshworks script.
  window.fwSettings = {
    widget_id: 77000000397
  };
  const freshworksEventType = useExternalScript({
    props: {
      src: 'https://euc-widget.freshworks.com/widgets/77000000397.js',
      type: 'text/javascript',
      async: true,
      defer: true
    },
    eventTypes: ['load', 'error']
  });
  if (freshworksEventType === 'error') {
    alert('Freshworks failed to load!');
  }

  return (
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
};

export default App;
