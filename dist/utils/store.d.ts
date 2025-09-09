import { Middleware, Reducer, EnhancedStore, Tuple } from '@reduxjs/toolkit';
import { UnknownAction, StoreEnhancer } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
export declare function makeStore<R extends Reducer>({ reducer, middlewares, preloadedState, }: {
    reducer: R;
    middlewares?: Middleware[];
    preloadedState?: Partial<ReturnType<R>>;
}): EnhancedStore<any, UnknownAction, Tuple<[ StoreEnhancer<{
    dispatch: ThunkDispatch<any, undefined, UnknownAction>;
}>, StoreEnhancer]>>;
