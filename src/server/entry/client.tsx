/**
 * © Ocado Group
 * Created on 20/10/2025 at 17:45:17(+01:00).
 *
 * The client entrypoint when doing server-side rendering.
 *
 * Helpful links:
 * https://mui.com/material-ui/guides/server-rendering/
 * https://github.com/remix-run/react-router/tree/main/examples/ssr
 */

import { BrowserRouter } from "react-router"
import { StrictMode } from "react"
import { hydrateRoot } from "react-dom/client"

import {
  DEFAULT_CATCH_ALL,
  type EntryKwArgs,
  createEmotionCache,
} from "./common"
import DefaultRoutes from "../DefaultRoutes"

export default function client({
  App,
  routes,
  catchAllRoute = DEFAULT_CATCH_ALL,
  createEmotionCacheOptions,
  ...appProps
}: EntryKwArgs) {
  const emotionCache = createEmotionCache(createEmotionCacheOptions)

  hydrateRoot(
    document.getElementById("root") as HTMLElement,
    <StrictMode>
      <App emotionCache={emotionCache} {...appProps}>
        <BrowserRouter>
          <DefaultRoutes catchAll={catchAllRoute}>{routes}</DefaultRoutes>
        </BrowserRouter>
      </App>
    </StrictMode>,
  )
}
