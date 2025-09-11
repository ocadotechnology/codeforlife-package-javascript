import { BrowserRouter, Routes as RouterRoutes } from "react-router"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { type FC, type JSX, type ReactNode } from "react"
import { Provider, type ProviderProps } from "react-redux"
import { type Action } from "redux"
import { StaticRouter } from "react-router"
import { type ThemeProviderProps } from "@mui/material/styles/ThemeProvider"

import "./App.css"
import { useLocation } from "../hooks"
// import { InactiveDialog, ScreenTimeDialog } from "../features"
// import { useCountdown, useEventListener } from "../hooks"
// import "../scripts"
// import {
//   configureFreshworksWidget,
//   toggleOneTrustInfoDisplay,
// } from "../utils/window"

export interface AppProps<A extends Action = Action, S = unknown> {
  path?: string
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

type BaseRoutesProps = Pick<
  AppProps,
  "routes" | "header" | "footer" | "headerExcludePaths" | "footerExcludePaths"
>

const Routes: FC<BaseRoutesProps & { path: string }> = ({
  path,
  routes,
  header = <></>, // TODO: "header = <Header />"
  footer = <></>, // TODO: "footer = <Footer />"
  headerExcludePaths = [],
  footerExcludePaths = [],
}) => (
  <>
    {!headerExcludePaths.includes(path) && header}
    <RouterRoutes>{routes}</RouterRoutes>
    {!footerExcludePaths.includes(path) && footer}
  </>
)

const BrowserRoutes: FC<BaseRoutesProps> = props => {
  const { pathname } = useLocation()

  return <Routes path={pathname} {...props} />
}

const App = <A extends Action = Action, S = unknown>({
  path,
  theme,
  store,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  maxIdleSeconds = 60 * 60,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  maxTotalSeconds = 60 * 60,
  ...routesProps
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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        {/* <InactiveDialog open={isIdle} onClose={resetIdleSeconds} />
        <ScreenTimeDialog
          open={!isIdle && tooMuchScreenTime}
          onClose={() => {
            setTotalSeconds(maxTotalSeconds)
          }}
        /> */}
        {path !== undefined ? (
          <StaticRouter location={path}>
            <Routes path={path} {...routesProps} />
          </StaticRouter>
        ) : (
          <BrowserRouter>
            <BrowserRoutes {...routesProps} />
          </BrowserRouter>
        )}
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
