import { CssBaseline, ThemeProvider } from "@mui/material"
import { type ThemeProviderProps } from "@mui/material/styles/ThemeProvider"
import { useCallback, type FC, type ReactNode } from "react"
import { Provider, type ProviderProps } from "react-redux"
import { BrowserRouter, Routes as RouterRoutes } from "react-router-dom"
import { type Action } from "redux"

import "./App.css"
import { InactiveDialog, ScreenTimeDialog } from "../features"
import { useCountdown, useEventListener, useLocation } from "../hooks"
// import "../scripts"
// import {
//   configureFreshworksWidget,
//   toggleOneTrustInfoDisplay,
// } from "../utils/window"

export interface AppProps<A extends Action = Action, S = unknown> {
  theme: ThemeProviderProps["theme"]
  store: ProviderProps<A, S>["store"]
  routes: ReactNode
  header?: ReactNode
  footer?: ReactNode
  headerExcludePaths?: string[]
  footerExcludePaths?: string[]
  maxIdleSeconds?: number
  maxTotalSeconds?: number
}

const Routes: FC<
  Pick<
    AppProps,
    "routes" | "header" | "footer" | "headerExcludePaths" | "footerExcludePaths"
  >
> = ({
  routes,
  header = <></>, // TODO: "header = <Header />"
  footer = <></>, // TODO: "footer = <Footer />"
  headerExcludePaths = [],
  footerExcludePaths = [],
}) => {
  const { pathname } = useLocation()

  return (
    <>
      {!headerExcludePaths.includes(pathname) && header}
      <RouterRoutes>{routes}</RouterRoutes>
      {!footerExcludePaths.includes(pathname) && footer}
    </>
  )
}

const App = <A extends Action = Action, S = unknown>({
  theme,
  store,
  routes,
  header,
  footer,
  headerExcludePaths = [],
  footerExcludePaths = [],
  maxIdleSeconds = 60 * 60,
  maxTotalSeconds = 60 * 60,
}: AppProps<A, S>): JSX.Element => {
  const root = document.getElementById("root") as HTMLElement

  const [idleSeconds, setIdleSeconds] = useCountdown(maxIdleSeconds)
  const [totalSeconds, setTotalSeconds] = useCountdown(maxTotalSeconds)
  const resetIdleSeconds = useCallback(() => {
    setIdleSeconds(maxIdleSeconds)
  }, [setIdleSeconds, maxIdleSeconds])

  const isIdle = idleSeconds === 0
  const tooMuchScreenTime = totalSeconds === 0

  useEventListener(root, "mousemove", resetIdleSeconds)
  useEventListener(root, "keypress", resetIdleSeconds)

  // React.useEffect(() => {
  //   configureFreshworksWidget("hide")
  // }, [])

  // if (import.meta.env.PROD) {
  //   toggleOneTrustInfoDisplay()
  // }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <InactiveDialog open={isIdle} onClose={resetIdleSeconds} />
        <ScreenTimeDialog
          open={!isIdle && tooMuchScreenTime}
          onClose={() => {
            setTotalSeconds(maxTotalSeconds)
          }}
        />
        <BrowserRouter>
          <Routes
            routes={routes}
            header={header}
            footer={footer}
            headerExcludePaths={headerExcludePaths}
            footerExcludePaths={footerExcludePaths}
          />
        </BrowserRouter>
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
