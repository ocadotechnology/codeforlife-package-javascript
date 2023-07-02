import React from 'react';
import {
  Provider,
  ProviderProps
} from 'react-redux';
import {
  Action,
  AnyAction
} from 'redux';
import {
  ThemeProvider,
  CssBaseline
} from '@mui/material';
import {
  ThemeProviderProps
} from '@mui/material/styles/ThemeProvider';

import {
  useExternalScript,
  useFreshworksWidget,
  useCountdown,
  useEventListener
} from '../hooks';
import {
  InactiveDialog,
  ScreenTimeDialog
} from '../features';
import '../scripts';

export interface AppProps<
  A extends Action = AnyAction,
  S = unknown
> {
  theme: ThemeProviderProps['theme'];
  store: ProviderProps<A, S>['store'];
  children: React.ReactNode;
  maxIdleSeconds?: number;
  maxTotalSeconds?: number;
}

const App = <
  A extends Action = AnyAction,
  S = unknown
>({
  theme,
  store,
  children,
  maxIdleSeconds = 60 * 60,
  maxTotalSeconds = 60 * 60
}: AppProps<A, S>): JSX.Element => {
  const root = document.getElementById('root') as HTMLElement;

  // TODO: dynamically check if user is authenticated.
  const isAuthenticated = true;
  const [idleSeconds, setIdleSeconds] = useCountdown(maxIdleSeconds);
  const [totalSeconds, setTotalSeconds] = useCountdown(maxTotalSeconds);

  const isIdle = isAuthenticated && idleSeconds === 0;
  const tooMuchScreenTime = totalSeconds === 0;

  function resetIdleSeconds(): void { setIdleSeconds(maxIdleSeconds); }
  function resetTotalSeconds(): void { setTotalSeconds(maxTotalSeconds); }

  useEventListener(root, 'mousemove', resetIdleSeconds);
  useEventListener(root, 'keypress', resetIdleSeconds);

  React.useEffect(() => {
    if (isAuthenticated) resetIdleSeconds();
  }, [isAuthenticated]);

  React.useEffect(() => {
    useFreshworksWidget('hide');

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
        <InactiveDialog
          open={isIdle}
          onClose={resetIdleSeconds}
        />
        <ScreenTimeDialog
          open={!isIdle && tooMuchScreenTime}
          onClose={resetTotalSeconds}
        />
        {children}
      </Provider>
    </ThemeProvider>
  );
};

export default App;
