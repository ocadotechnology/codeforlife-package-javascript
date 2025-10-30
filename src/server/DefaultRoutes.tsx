import { type FC, type ReactNode } from "react"
import { Route, Routes } from "react-router"

export interface DefaultRoutesProps {
  children: ReactNode
  catchAll: boolean
}

const DefaultRoutes: FC<DefaultRoutesProps> = ({ children, catchAll }) => (
  <Routes>
    {children}
    {catchAll && (
      <Route path="*" element={<>TODO: Replace with Not Found Error Page</>} />
    )}
  </Routes>
)

export default DefaultRoutes
