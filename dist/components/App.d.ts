import { JSX, ReactNode } from 'react';
import { ProviderProps } from 'react-redux';
import { Action } from 'redux';
import { ThemeProviderProps } from '@mui/material';
export interface AppProps<A extends Action = Action, S = unknown> {
    path?: string;
    theme: ThemeProviderProps["theme"];
    store: ProviderProps<A, S>["store"];
    routes: ReactNode;
    header?: ReactNode;
    footer?: ReactNode;
    headerExcludePaths?: string[];
    footerExcludePaths?: string[];
    maxIdleSeconds?: number;
    maxTotalSeconds?: number;
}
declare const App: <A extends Action = Action, S = unknown>({ path, theme, store, maxIdleSeconds, maxTotalSeconds, ...routesProps }: AppProps<A, S>) => JSX.Element;
export default App;
