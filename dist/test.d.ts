import { Container } from 'react-dom/client';
import { EnhancedStore } from '@reduxjs/toolkit';
import { hydrateRoot } from 'react-dom/client';
import { Middleware } from '@reduxjs/toolkit';
import { Queries } from '@testing-library/dom';
import { queries } from '@testing-library/dom';
import { ReactElement } from 'react';
import { Reducer } from '@reduxjs/toolkit';
import { RenderOptions } from '@testing-library/react';
import { RenderResult } from '@testing-library/react';
import { Store } from '@reduxjs/toolkit';
import { StoreEnhancer } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { Tuple } from '@reduxjs/toolkit';
import { UnknownAction } from 'redux';
import { UserEvent } from '@testing-library/user-event';

declare type HydrateableContainer = Parameters<typeof hydrateRoot>[0];

declare function makeStore<R extends Reducer>({ reducer, middlewares, preloadedState, }: {
    reducer: R;
    middlewares?: Middleware[];
    preloadedState?: Partial<ReturnType<R>>;
}): EnhancedStore<any, UnknownAction, Tuple<[ StoreEnhancer<{
    dispatch: ThunkDispatch<any, undefined, UnknownAction>;
}>, StoreEnhancer]>>;

/**
 * Renders the given React element with Redux Provider and custom store.
 * This function is useful for testing components that are connected to the
 * Redux store.
 *
 * @param ui - The React component or element to render.
 * @param reducer - The root reducer to use for the store.
 * @param extendedRenderOptions - Optional configuration options for rendering.
 *  This includes `preloadedState` for initial Redux state and `store` for a
 *  specific Redux store instance. Any additional properties are passed to React
 *  Testing Library's render function.
 * @returns An object containing the Redux store used in the render, User event
 *  API for simulating user interactions in tests, and all of React Testing
 *  Library's query functions for testing the component.
 */
export declare function renderWithStore<R extends Reducer, Q extends Queries = typeof queries, Container extends Container | HydrateableContainer = HTMLElement, BaseElement extends Container | HydrateableContainer = Container>(ui: ReactElement, reducer: R, extendedRenderOptions?: RenderOptions<Q, Container, BaseElement> & {
    /**
     * The middlewares used to create the Redux store.
     */
    middlewares?: Middleware[];
    /**
     * Defines a specific portion or the entire initial state for the Redux store.
     * This is particularly useful for initializing the state in a
     * controlled manner during testing, allowing components to be rendered
     * with predetermined state conditions.
     */
    preloadedState?: Partial<ReturnType<R>>;
    /**
     * Allows the use of a specific Redux store instance instead of a
     * default or global store. This flexibility is beneficial when
     * testing components with unique store requirements or when isolating
     * tests from a global store state. The custom store should be configured
     * to match the structure and middleware of the store used by the application.
     *
     * @default makeStore({reducer,middlewares,preloadedState})
     */
    store?: Store;
}): RenderWithUserResult<Q, Container, BaseElement> & {
    store: ReturnType<typeof makeStore<R>>;
};

export declare function renderWithUser<Q extends Queries = typeof queries, Container extends Container | HydrateableContainer = HTMLElement, BaseElement extends Container | HydrateableContainer = Container>(ui: ReactElement, renderOptions?: RenderOptions<Q, Container, BaseElement>): RenderWithUserResult<Q, Container, BaseElement>;

declare type RenderWithUserResult<Q extends Queries = typeof queries, Container extends Container | HydrateableContainer = HTMLElement, BaseElement extends Container | HydrateableContainer = Container> = RenderResult<Q, Container, BaseElement> & {
    user: UserEvent;
};

export { }
