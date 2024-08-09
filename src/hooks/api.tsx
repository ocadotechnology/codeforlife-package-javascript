import { CircularProgress } from "@mui/material"
import type { TypedUseQuery } from "@reduxjs/toolkit/query/react"
import {
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react"

import SyncError from "../components/SyncError"

export type Pagination = { page: number; limit: number; offset: number }
export type SetPagination = Dispatch<
  SetStateAction<{ page: number; limit: number }>
>
export type UsePaginationOptions = Partial<{
  page: number
  limit: number
}>

export function usePagination(
  options?: UsePaginationOptions,
): [Pagination, SetPagination] {
  const { page = 0, limit = 150 } = options || {}

  const [pagination, _setPagination] = useState<Pagination>({
    page,
    limit,
    offset: page * limit,
  })

  const setPagination: SetPagination = value => {
    _setPagination(({ page: previousPage, limit: previousLimit }) => {
      let { page, limit } =
        typeof value === "function"
          ? value({ page: previousPage, limit: previousLimit })
          : value

      if (limit !== previousLimit) page = 0

      return { page, limit, offset: page * limit }
    })
  }

  return [pagination, setPagination]
}

export type UseQueryManagerOptions = Partial<{
  loading: ReactNode
  error: ReactNode
}>

export function useQueryManager<QueryArg, ResultType>(
  useQuery: TypedUseQuery<ResultType, QueryArg, any>,
  arg: QueryArg,
  children: (data: ResultType) => ReactNode,
  options?: UseQueryManagerOptions,
): ReactNode {
  const { data, isLoading, isSuccess, error } = useQuery(arg)

  const {
    loading: loadingNode = <CircularProgress />,
    error: errorNode = <SyncError />,
  } = options || {}

  // An error occurred.
  if (error) {
    console.error(error)
    return errorNode
  }

  // Busy calling the API.
  if (isLoading) return loadingNode

  // Called the API and got data.
  if (data) return children(data)

  // Called the API and did not get data.
  if (isSuccess) throw Error("Expected to get data from API but got nothing.")

  // Have yet to call the API.
  return loadingNode
}
