import { SyncProblem as SyncProblemIcon } from "@mui/icons-material"
import {
  CircularProgress,
  TablePagination as MuiTablePagination,
  type TablePaginationProps as MuiTablePaginationProps,
  Stack,
  type StackProps,
  type TablePaginationBaseProps,
  Typography,
} from "@mui/material"
import type { TypedUseLazyQuery } from "@reduxjs/toolkit/query/react"
import {
  type ElementType,
  type JSXElementConstructor,
  type ReactNode,
  useEffect,
} from "react"

import { usePagination } from "../hooks/api"
import type { ListArg, ListResult } from "../utils/api"

export type TablePaginationProps<
  QueryArg extends ListArg,
  ResultType extends ListResult<any>,
  RootComponent extends
    ElementType = JSXElementConstructor<TablePaginationBaseProps>,
  AdditionalProps = {},
> = Omit<
  MuiTablePaginationProps<RootComponent, AdditionalProps>,
  | "component"
  | "count"
  | "rowsPerPage"
  | "onRowsPerPageChange"
  | "page"
  | "onPageChange"
  | "rowsPerPageOptions"
> & {
  children: (data: ResultType["data"]) => ReactNode
  useLazyListQuery: TypedUseLazyQuery<ResultType, QueryArg, any>
  filters?: Omit<QueryArg, "limit" | "offset">
  rowsPerPageOptions?: number[]
  stackProps?: StackProps
  page?: number
  rowsPerPage?: number
}

const TablePagination = <
  QueryArg extends ListArg,
  ResultType extends ListResult<any>,
  RootComponent extends
    ElementType = JSXElementConstructor<TablePaginationBaseProps>,
  AdditionalProps = {},
>({
  children,
  useLazyListQuery,
  filters,
  page: initialPage = 0,
  rowsPerPage: initialLimit = 50,
  rowsPerPageOptions = [50, 100, 150],
  stackProps,
  ...tablePaginationProps
}: TablePaginationProps<
  QueryArg,
  ResultType,
  RootComponent,
  AdditionalProps
>): JSX.Element => {
  const [trigger, { data: result, isLoading, error }] = useLazyListQuery()
  const [{ limit, page, offset }, setPagination] = usePagination({
    page: initialPage,
    limit: initialLimit,
  })

  useEffect(() => {
    trigger({ limit, offset, ...filters } as QueryArg)
  }, [trigger, limit, offset, filters])

  useEffect(() => {
    console.error(error)
  }, [error])

  const { data, count = 0, maxLimit } = result || {}

  if (maxLimit) {
    rowsPerPageOptions = rowsPerPageOptions.filter(option => option <= maxLimit)
  }

  return (
    <Stack {...stackProps}>
      {isLoading ? (
        <CircularProgress />
      ) : error || !data ? (
        <>
          <SyncProblemIcon color="error" />
          <Typography color="error.main">Failed to load data</Typography>
        </>
      ) : (
        children(data)
      )}
      <MuiTablePagination
        component="div"
        count={count}
        rowsPerPage={limit}
        onRowsPerPageChange={event => {
          setPagination({ limit: parseInt(event.target.value), page: 0 })
        }}
        page={page}
        onPageChange={(_, page) => {
          setPagination(({ limit }) => ({ limit, page }))
        }}
        // ascending order
        rowsPerPageOptions={rowsPerPageOptions.sort((a, b) => a - b)}
        {...tablePaginationProps}
      />
    </Stack>
  )
}

export default TablePagination
