import {
  TablePagination as MuiTablePagination,
  type TablePaginationProps as MuiTablePaginationProps,
  Stack,
  type StackProps,
  type TablePaginationBaseProps,
} from "@mui/material"
import type { TypedUseLazyQuery } from "@reduxjs/toolkit/query/react"
import {
  type ElementType,
  type JSXElementConstructor,
  type ReactNode,
  useEffect,
} from "react"

import { type Pagination, usePagination } from "../hooks/api"
import { type ListArg, type ListResult, handleResultState } from "../utils/api"

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
  | "rowsPerPageOptions"
  | "page"
  | "onPageChange"
> &
  Partial<
    Pick<
      MuiTablePaginationProps<RootComponent, AdditionalProps>,
      "onRowsPerPageChange" | "onPageChange"
    >
  > & {
    children: (
      data: ResultType["data"],
      pagination: Pagination & { count?: number; maxLimit?: number },
    ) => ReactNode
    useLazyListQuery: TypedUseLazyQuery<ResultType, QueryArg, any>
    preferCacheValue?: boolean
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
  preferCacheValue,
  filters,
  page: initialPage = 0,
  rowsPerPage: initialLimit = 50,
  rowsPerPageOptions = [50, 100, 150],
  stackProps,
  onRowsPerPageChange,
  onPageChange,
  ...tablePaginationProps
}: TablePaginationProps<
  QueryArg,
  ResultType,
  RootComponent,
  AdditionalProps
>): JSX.Element => {
  const [trigger, result] = useLazyListQuery()
  const [{ limit, page, offset }, setPagination] = usePagination({
    page: initialPage,
    limit: initialLimit,
  })

  useEffect(
    () => {
      trigger({ limit, offset, ...filters } as QueryArg, preferCacheValue)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [trigger, limit, offset, ...Object.values(filters || {}), preferCacheValue],
  )

  const { count, max_limit } = result.data || {}

  if (max_limit) {
    rowsPerPageOptions = rowsPerPageOptions.filter(
      option => option <= max_limit,
    )
  }

  return (
    <Stack {...stackProps}>
      {handleResultState(result, ({ data }) =>
        children(data, {
          limit,
          page,
          offset,
          count,
          maxLimit: max_limit,
        }),
      )}
      <MuiTablePagination
        component="div"
        count={count ?? 0}
        rowsPerPage={limit}
        onRowsPerPageChange={event => {
          setPagination({ limit: parseInt(event.target.value), page: 0 })
          if (onRowsPerPageChange) onRowsPerPageChange(event)
        }}
        page={page}
        onPageChange={(event, page) => {
          setPagination(({ limit }) => ({ limit, page }))
          if (onPageChange) onPageChange(event, page)
        }}
        // ascending order
        rowsPerPageOptions={rowsPerPageOptions.sort((a, b) => a - b)}
        {...tablePaginationProps}
      />
    </Stack>
  )
}

export default TablePagination
