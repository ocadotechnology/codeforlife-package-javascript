import { type FC, type ReactNode } from "react"
import { Route, Routes } from "react-router"

import FaviconImage from "../images/favicon.ico"

export interface DefaultRoutesProps {
  children: ReactNode
  faviconPath?: string
}

const DefaultRoutes: FC<DefaultRoutesProps> = ({
  faviconPath = "/favicon.ico",
}) => (
  <Routes>
    <Route
      path={faviconPath}
      element={<img src={FaviconImage} alt="code for Life favicon" />}
    />
  </Routes>
)

export default DefaultRoutes
