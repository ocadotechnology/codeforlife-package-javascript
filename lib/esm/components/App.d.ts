import React from 'react';
import { ProviderProps } from 'react-redux';
import { Action, AnyAction } from 'redux';
import { ThemeProviderProps } from '@mui/material/styles/ThemeProvider';
import '../scripts';
export interface AppProps<A extends Action = AnyAction, S = unknown> {
    theme: ThemeProviderProps['theme'];
    store: ProviderProps<A, S>['store'];
    header?: React.ReactElement;
    footer?: React.ReactElement;
    children: React.ReactNode;
    maxIdleSeconds?: number;
    maxTotalSeconds?: number;
}
declare const App: <A extends Action<any> = AnyAction, S = unknown>({ theme, store, header, footer, children, maxIdleSeconds, maxTotalSeconds }: AppProps<A, S>) => JSX.Element;
export default App;
