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

import { BrowserRouter, StaticRouter } from "react-router"
import { type FC, StrictMode } from "react"
import createCache, {
  type Options as CreateEmotionCacheOptions,
} from "@emotion/cache"

import DefaultRoutes, { type DefaultRoutesProps } from "./DefaultRoutes"
import { type AppProps } from "./App"
import packageJson from "../../package.json"

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
  routes: DefaultRoutesProps["children"]
  createEmotionCacheOptions?: CreateEmotionCacheOptions
}

export async function server({
  App,
  routes,
  createEmotionCacheOptions = {} as CreateEmotionCacheOptions,
  ...appProps
}: EntryKwArgs) {
  const { default: createEmotionServer } = await import(
    "@emotion/server/create-instance"
  )
  const { renderToString } = await import("react-dom/server")
  const { default: fs } = await import("node:fs/promises")

  const cflStyle = await fs.readFile(
    `./node_modules/${packageJson.name}/dist/style.css`,
    "utf-8",
  )

  function render(path: string) {
    const emotionCache = createEmotionCache(createEmotionCacheOptions)
    const emotionServer = createEmotionServer(emotionCache)

    const html = renderToString(
      <StrictMode>
        <App emotionCache={emotionCache} {...appProps}>
          <StaticRouter location={path}>
            <DefaultRoutes>{routes}</DefaultRoutes>
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

export async function client({
  App,
  routes,
  createEmotionCacheOptions = {} as CreateEmotionCacheOptions,
  ...appProps
}: EntryKwArgs) {
  const reactDomClientModule = await import("react-dom/client")

  // Check for the .default property to handle CJS/ESM interop.
  // 'hydrateRoot' will be on the module itself OR on the .default object.
  const { hydrateRoot } = reactDomClientModule.default || reactDomClientModule

  const emotionCache = createEmotionCache(createEmotionCacheOptions)

  hydrateRoot(
    document.getElementById("root") as HTMLElement,
    <StrictMode>
      <App emotionCache={emotionCache} {...appProps}>
        <BrowserRouter>
          <DefaultRoutes>{routes}</DefaultRoutes>
        </BrowserRouter>
      </App>
    </StrictMode>,
  )
}
