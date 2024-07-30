import { type Dispatch, type SetStateAction, useState } from "react"

export function usePagination(
  options?: Partial<{
    page: number
    limit: number
  }>,
): [
  { page: number; limit: number; offset: number },
  Dispatch<SetStateAction<{ page: number; limit: number }>>,
] {
  const { page = 0, limit = 150 } = options || {}

  const [pagination, _setPagination] = useState({
    page,
    limit,
    offset: page * limit,
  })

  function setPagination(
    value: SetStateAction<{ page: number; limit: number }>,
  ) {
    _setPagination(({ page: previousPage, limit: previousLimit }) => {
      const { page, limit } =
        typeof value === "function"
          ? value({ page: previousPage, limit: previousLimit })
          : value

      return { page, limit, offset: page * limit }
    })
  }

  return [pagination, setPagination]
}
