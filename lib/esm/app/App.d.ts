import React from 'react';
import { Action, AnyAction, Store } from 'redux';
import { Theme } from '@mui/material';
export interface AppProps<A extends Action = AnyAction, S = unknown> {
    theme: Theme;
    store: Store<S, A>;
    children: React.ReactNode;
}
declare const App: <A extends Action<any> = AnyAction, S = unknown>({ theme, store, children }: AppProps<A, S>) => JSX.Element;
export default App;
