import type { Middleware, Reducer } from "@reduxjs/toolkit"
import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"

// The store setup is wrapped in `makeStore` to allow reuse
// when setting up tests that need the same store config
export function makeStore<R extends Reducer>({
  reducer,
  middlewares = [],
  preloadedState = {},
}: {
  reducer: R
  middlewares?: Middleware[]
  preloadedState?: Partial<ReturnType<R>>
}) {
  const store = configureStore({
    reducer,
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: getDefaultMiddleware => {
      return getDefaultMiddleware().concat(middlewares)
    },
    preloadedState,
  })

  // configure listeners using the provided defaults
  // optional, but required for `refetchOnFocus`/`refetchOnReconnect` behaviors
  setupListeners(store.dispatch)

  return store
}
