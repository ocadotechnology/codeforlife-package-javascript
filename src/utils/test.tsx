import type { Middleware, Reducer, Store } from "@reduxjs/toolkit"
import type { PropsWithChildren, ReactElement } from "react"
import { type Queries, type queries } from "@testing-library/dom"
import {
  type RenderOptions,
  type RenderResult,
  render,
} from "@testing-library/react"
import {
  type Container as RendererableContainer,
  type hydrateRoot,
} from "react-dom/client"
import userEvent, { type UserEvent } from "@testing-library/user-event"
import { Provider } from "react-redux"

import { makeStore } from "./store"

type HydrateableContainer = Parameters<typeof hydrateRoot>[0]

type RenderWithUserResult<
  Q extends Queries = typeof queries,
  Container extends RendererableContainer | HydrateableContainer = HTMLElement,
  BaseElement extends RendererableContainer | HydrateableContainer = Container,
> = RenderResult<Q, Container, BaseElement> & { user: UserEvent }

export function renderWithUser<
  Q extends Queries = typeof queries,
  Container extends RendererableContainer | HydrateableContainer = HTMLElement,
  BaseElement extends RendererableContainer | HydrateableContainer = Container,
>(
  ui: ReactElement,
  renderOptions: RenderOptions<Q, Container, BaseElement> = {},
): RenderWithUserResult<Q, Container, BaseElement> {
  return {
    user: userEvent.setup(),
    ...render(ui, renderOptions),
  }
}

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
export function renderWithStore<
  R extends Reducer,
  Q extends Queries = typeof queries,
  Container extends RendererableContainer | HydrateableContainer = HTMLElement,
  BaseElement extends RendererableContainer | HydrateableContainer = Container,
>(
  ui: ReactElement,
  reducer: R,
  extendedRenderOptions: RenderOptions<Q, Container, BaseElement> & {
    /**
     * The middlewares used to create the Redux store.
     */
    middlewares?: Middleware[]

    /**
     * Defines a specific portion or the entire initial state for the Redux store.
     * This is particularly useful for initializing the state in a
     * controlled manner during testing, allowing components to be rendered
     * with predetermined state conditions.
     */
    preloadedState?: Partial<ReturnType<R>>

    /**
     * Allows the use of a specific Redux store instance instead of a
     * default or global store. This flexibility is beneficial when
     * testing components with unique store requirements or when isolating
     * tests from a global store state. The custom store should be configured
     * to match the structure and middleware of the store used by the application.
     *
     * @default makeStore({reducer,middlewares,preloadedState})
     */
    store?: Store
  } = {},
): RenderWithUserResult<Q, Container, BaseElement> & {
  store: ReturnType<typeof makeStore<R>>
} {
  const {
    middlewares,
    preloadedState,
    // Automatically create a store instance if no store was passed in
    store = makeStore({ reducer, middlewares, preloadedState }),
    ...renderOptions
  } = extendedRenderOptions

  const Wrapper = ({ children }: PropsWithChildren) => (
    <Provider store={store}>{children}</Provider>
  )

  // Return an object with the store and all of RTL's query functions
  return {
    store,
    user: userEvent.setup(),
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
  }
}
