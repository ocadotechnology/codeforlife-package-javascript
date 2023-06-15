import React from 'react';
import { Action, AnyAction, Store } from 'redux';
import { Theme } from '@mui/material';
import '../scripts';
export interface AppProps<A extends Action = AnyAction, S = unknown> {
    theme: Theme;
    store: Store<S, A>;
    header?: React.ReactElement;
    footer?: React.ReactElement;
    children: React.ReactNode;
}
declare const App: <A extends Action<any> = AnyAction, S = unknown>({ theme, store, header, footer, children }: AppProps<A, S>) => JSX.Element;
export default App;
