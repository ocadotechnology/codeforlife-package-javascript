/**
 * © Ocado Group
 * Created on 20/10/2025 at 17:45:17(+01:00).
 *
 * The client and server entrypoints when doing server-side rendering.
 *
 * Helpful links:
 * https://mui.com/material-ui/guides/server-rendering/
 * https://github.com/remix-run/react-router/tree/main/examples/ssr
 */

import { BrowserRouter, Routes, StaticRouter } from "react-router"
import { type FC, type ReactNode, StrictMode } from "react"
import createCache, {
  type Options as CreateEmotionCacheOptions,
} from "@emotion/cache"
import createEmotionServer from "@emotion/server/create-instance"
import { hydrateRoot } from "react-dom/client"
import { renderToString } from "react-dom/server"

import { type AppProps } from "./App"

/**
 * Creates a new Emotion cache instance.
 */
function createEmotionCache(
  {
    key = "css", // ensures all styles are generated with this prefix
    prepend = true, // loads MUI-styles first so we can override them easily
    ...otherOptions
  } = {} as CreateEmotionCacheOptions,
) {
  return createCache({ key, prepend, ...otherOptions })
}

export type EntryAppProps = Pick<AppProps, "emotionCache" | "children">

export type EntryKwArgs = {
  App: FC<EntryAppProps>
  routes: ReactNode
  createEmotionCacheOptions?: CreateEmotionCacheOptions
}

export async function server({
  App,
  routes,
  createEmotionCacheOptions = {} as CreateEmotionCacheOptions,
  ...appProps
}: EntryKwArgs) {
  const { default: cflStyle } = await import("codeforlife/style.css?inline")

  function render(path: string) {
    const emotionCache = createEmotionCache(createEmotionCacheOptions)
    const emotionServer = createEmotionServer(emotionCache)

    const html = renderToString(
      <StrictMode>
        <App emotionCache={emotionCache} {...appProps}>
          <StaticRouter location={path}>
            <Routes>{routes}</Routes>
          </StaticRouter>
        </App>
      </StrictMode>,
    )

    const emotionChunks = emotionServer.extractCriticalToChunks(html)
    const emotionCss = emotionServer.constructStyleTagsFromChunks(emotionChunks)

    return {
      html,
      head: `${emotionCss}<style data-cfl>${cflStyle}</style>`,
    }
  }

  return { render }
}

export function client({
  App,
  routes,
  createEmotionCacheOptions = {} as CreateEmotionCacheOptions,
  ...appProps
}: EntryKwArgs) {
  const emotionCache = createEmotionCache(createEmotionCacheOptions)

  hydrateRoot(
    document.getElementById("root") as HTMLElement,
    <StrictMode>
      <App emotionCache={emotionCache} {...appProps}>
        <BrowserRouter>
          <Routes>{routes}</Routes>
        </BrowserRouter>
      </App>
    </StrictMode>,
  )
}
