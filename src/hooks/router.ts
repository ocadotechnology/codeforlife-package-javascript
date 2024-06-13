import {
  useNavigate as _useNavigate,
  useSearchParams,
  type NavigateOptions,
  type To as NavigateTo,
} from "react-router-dom"

import { type PageState } from "../components/page"

export function useNavigate(): <
  State extends Record<string, any> = Record<string, any>,
>(
  to: NavigateTo,
  options?: Omit<NavigateOptions, "state"> & {
    state?: State & Partial<PageState>
    next?: boolean
  },
) => void {
  const navigate = _useNavigate()
  const searchParams = useSearchParamEntries()

  return (to, options) => {
    const { next = true, ..._options } = options || {}

    navigate(next && "next" in searchParams ? searchParams.next : to, _options)
  }
}

export function useSearchParamEntries() {
  return Object.fromEntries(useSearchParams()[0].entries())
}
