import { type Dispatch, type SetStateAction, useState } from "react"

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
      const pagination =
        typeof value === "function"
          ? value({ page: previousPage, limit: previousLimit })
          : value
      let page = pagination.page
      const limit = pagination.limit

      if (limit !== previousLimit) page = 0

      return { page, limit, offset: page * limit }
    })
  }

  return [pagination, setPagination]
}
