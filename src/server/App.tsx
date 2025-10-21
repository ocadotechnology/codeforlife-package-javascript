import { CssBaseline, ThemeProvider } from "@mui/material"
import {
  type EmotionCache,
  CacheProvider as EmotionCacheProvider,
} from "@emotion/react"
import { type JSX, type ReactNode } from "react"
import {
  Provider as StoreProvider,
  type ProviderProps as StoreProviderProps,
} from "react-redux"
import { type Action } from "redux"
import { type ThemeProviderProps } from "@mui/material"

import "./App.css"
// import { InactiveDialog, ScreenTimeDialog } from "../features"
// import { useCountdown, useEventListener } from "../hooks"
// import "../scripts"
// import {
//   configureFreshworksWidget,
//   toggleOneTrustInfoDisplay,
// } from "../utils/window"

export interface AppProps<A extends Action = Action, S = unknown> {
  children: ReactNode
  emotionCache: EmotionCache
  theme: ThemeProviderProps["theme"]
  store: StoreProviderProps<A, S>["store"]
  maxIdleSeconds?: number
  maxTotalSeconds?: number
}

const App = <A extends Action = Action, S = unknown>({
  children,
  emotionCache,
  theme,
  store,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  maxIdleSeconds = 60 * 60,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  maxTotalSeconds = 60 * 60,
}: AppProps<A, S>): JSX.Element => {
  // TODO: cannot use document during SSR
  // const root = document.getElementById("root") as HTMLElement

  // const [idleSeconds, setIdleSeconds] = useCountdown(maxIdleSeconds)
  // const [totalSeconds, setTotalSeconds] = useCountdown(maxTotalSeconds)
  // const resetIdleSeconds = useCallback(() => {
  //   setIdleSeconds(maxIdleSeconds)
  // }, [setIdleSeconds, maxIdleSeconds])

  // const isIdle = idleSeconds === 0
  // const tooMuchScreenTime = totalSeconds === 0

  // useEventListener(root, "mousemove", resetIdleSeconds)
  // useEventListener(root, "keypress", resetIdleSeconds)

  // React.useEffect(() => {
  //   configureFreshworksWidget("hide")
  // }, [])

  // if (import.meta.env.PROD) {
  //   toggleOneTrustInfoDisplay()
  // }

  return (
    // https://mui.com/material-ui/guides/server-rendering/
    <EmotionCacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <StoreProvider store={store}>
          {/* <InactiveDialog open={isIdle} onClose={resetIdleSeconds} />
        <ScreenTimeDialog
          open={!isIdle && tooMuchScreenTime}
          onClose={() => {
            setTotalSeconds(maxTotalSeconds)
          }}
        /> */}
          {children}
        </StoreProvider>
      </ThemeProvider>
    </EmotionCacheProvider>
  )
}

export default App

// TODO: figure out what to do with this
// function useOneTrustScripts(): void {
//   const oneTrustEventTypes = [
//     useExternalScript({
//       props: {
//         src: "https://cdn-ukwest.onetrust.com/consent/5da42396-cb12-4493-8d04-5179033cfbad/OtAutoBlock.js",
//         type: "text/javascript",
//       },
//       eventTypes: ["load", "error"],
//     }),
//     useExternalScript({
//       props: {
//         src: "https://cdn-ukwest.onetrust.com/scripttemplates/otSDKStub.js",
//         type: "text/javascript",
//         charset: "UTF-8",
//       },
//       attrs: {
//         "data-domain-script": "5da42396-cb12-4493-8d04-5179033cfbad",
//       },
//       eventTypes: ["load", "error"],
//     }),
//     useExternalScript({
//       props: {
//         src: "https://cdn-ukwest.onetrust.com/scripttemplates/202302.1.0/otBannerSdk.js",
//         async: true,
//         type: "text/javascript",
//       },
//       eventTypes: ["load", "error"],
//     }),
//   ]
//   if (oneTrustEventTypes.some(t => t === "error")) {
//     alert("OneTrust failed to load!")
//   }
// }
