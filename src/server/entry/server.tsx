/**
 * © Ocado Group
 * Created on 20/10/2025 at 17:45:17(+01:00).
 *
 * The server entrypoint when doing server-side rendering.
 *
 * Helpful links:
 * https://mui.com/material-ui/guides/server-rendering/
 * https://github.com/remix-run/react-router/tree/main/examples/ssr
 */

import { StaticRouter } from "react-router"
import { StrictMode } from "react"
import createEmotionServer from "@emotion/server/create-instance"
import fs from "node:fs/promises"
import { renderToString } from "react-dom/server"

import {
  DEFAULT_CATCH_ALL,
  type EntryKwArgs,
  createEmotionCache,
} from "./common"
import DefaultRoutes from "../DefaultRoutes"
import packageJson from "../../../package.json"

export default async function server({
  App,
  routes,
  catchAllRoute = DEFAULT_CATCH_ALL,
  createEmotionCacheOptions,
  ...appProps
}: EntryKwArgs) {
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
            <DefaultRoutes catchAll={catchAllRoute}>{routes}</DefaultRoutes>
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
