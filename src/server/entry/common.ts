import createCache, {
  type Options as CreateEmotionCacheOptions,
} from "@emotion/cache"
import { type FC } from "react"

import { type AppProps } from "../App"
import { type DefaultRoutesProps } from "../DefaultRoutes"

/**
 * Creates a new Emotion cache instance.
 */
export function createEmotionCache(
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
  catchAllRoute?: DefaultRoutesProps["catchAll"]
  createEmotionCacheOptions?: CreateEmotionCacheOptions
}

export const DEFAULT_CATCH_ALL: DefaultRoutesProps["catchAll"] = true
