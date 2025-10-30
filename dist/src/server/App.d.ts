import { EmotionCache } from '@emotion/react';
import { JSX, ReactNode } from 'react';
import { ProviderProps as StoreProviderProps } from 'react-redux';
import { Action } from 'redux';
import { ThemeProviderProps } from '@mui/material';
export interface AppProps<A extends Action = Action, S = unknown> {
    children: ReactNode;
    emotionCache: EmotionCache;
    theme: ThemeProviderProps["theme"];
    store: StoreProviderProps<A, S>["store"];
    maxIdleSeconds?: number;
    maxTotalSeconds?: number;
}
declare const App: <A extends Action = Action, S = unknown>({ children, emotionCache, theme, store, maxIdleSeconds, maxTotalSeconds, }: AppProps<A, S>) => JSX.Element;
export default App;
