import { EnhancedStore } from '@reduxjs/toolkit';
import { Middleware } from '@reduxjs/toolkit';
import { Reducer } from '@reduxjs/toolkit';
import { StoreEnhancer } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { Tuple } from '@reduxjs/toolkit';
import { UnknownAction } from 'redux';

export declare function makeStore<R extends Reducer>({ reducer, middlewares, preloadedState, }: {
    reducer: R;
    middlewares?: Middleware[];
    preloadedState?: Partial<ReturnType<R>>;
}): EnhancedStore<any, UnknownAction, Tuple<[ StoreEnhancer<{
    dispatch: ThunkDispatch<any, undefined, UnknownAction>;
}>, StoreEnhancer]>>;

export { }
