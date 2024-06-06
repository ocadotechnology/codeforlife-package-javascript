import { CssBaseline, ThemeProvider } from "@mui/material"
import { type ThemeProviderProps } from "@mui/material/styles/ThemeProvider"
import React, { useCallback } from "react"
import { Provider, type ProviderProps } from "react-redux"
import { type Action } from "redux"

import { InactiveDialog, ScreenTimeDialog } from "../features"
import { useCountdown, useEventListener } from "../hooks"
import "../scripts"
import {
  // configureFreshworksWidget,
  toggleOneTrustInfoDisplay,
} from "../utils/window"

export interface AppProps<A extends Action = Action, S = unknown> {
  theme: ThemeProviderProps["theme"]
  store: ProviderProps<A, S>["store"]
  children: React.ReactNode
  maxIdleSeconds?: number
  maxTotalSeconds?: number
}

const App = <A extends Action = Action, S = unknown>({
  theme,
  store,
  children,
  maxIdleSeconds = 60 * 60,
  maxTotalSeconds = 60 * 60,
}: AppProps<A, S>): JSX.Element => {
  const root = document.getElementById("root") as HTMLElement

  // TODO: dynamically check if user is authenticated.
  const isAuthenticated = true
  const [idleSeconds, setIdleSeconds] = useCountdown(maxIdleSeconds)
  const [totalSeconds, setTotalSeconds] = useCountdown(maxTotalSeconds)
  const resetIdleSeconds = useCallback(() => {
    setIdleSeconds(maxIdleSeconds)
  }, [setIdleSeconds, maxIdleSeconds])

  const isIdle = isAuthenticated && idleSeconds === 0
  const tooMuchScreenTime = totalSeconds === 0

  useEventListener(root, "mousemove", resetIdleSeconds)
  useEventListener(root, "keypress", resetIdleSeconds)

  React.useEffect(() => {
    if (isAuthenticated) resetIdleSeconds()
  }, [isAuthenticated, resetIdleSeconds])

  // React.useEffect(() => {
  //   configureFreshworksWidget("hide")
  // }, [])

  if (import.meta.env.PROD) {
    toggleOneTrustInfoDisplay()
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <style>{`
        html, body {
          box-sizing: border-box;
          height: 100%;
          padding: 0;
          margin: 0;
        }

        #root {
          box-sizing: border-box;
          min-height: 100%;
          display: flex;
          flex-direction: column;
        }

        #header, #footer {
          flex-grow: 0;
          flex-shrink: 0;
        }

        #body {
          flex-grow: 1;
        }   
      `}</style>
      <Provider store={store}>
        <InactiveDialog open={isIdle} onClose={resetIdleSeconds} />
        <ScreenTimeDialog
          open={!isIdle && tooMuchScreenTime}
          onClose={() => {
            setTotalSeconds(maxTotalSeconds)
          }}
        />
        {children}
      </Provider>
    </ThemeProvider>
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
