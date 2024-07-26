import type { TypedUseLazyQuery } from "@reduxjs/toolkit/query/react"
import { useEffect, useState } from "react"

import type { Fields, ListArg, ListResult, Model } from "../utils/api"

export function useFullList<
  QueryArg extends ListArg,
  M extends Model<any>,
  MFields extends keyof Omit<M, "id">,
  ExtraFields extends Fields,
  ResultType extends ListResult<M, MFields, ExtraFields>,
>(
  useLazyListQuery: TypedUseLazyQuery<ResultType, QueryArg, any>,
  arg: Partial<QueryArg> = {},
) {
  const { limit = 150, offset = 0, ...filters } = arg

  const [trigger] = useLazyListQuery()
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [error, setError] = useState<unknown>()
  const [data, setData] = useState<ResultType["data"]>()

  function getPage(limit: number, offset: number, _data: ResultType["data"]) {
    trigger({ ...filters, limit, offset } as QueryArg)
      .unwrap()
      .then(({ data, offset, limit, count }) => {
        _data.push(...data)

        offset += limit
        if (offset < count) getPage(limit, offset, _data)
        else {
          setData(_data)
          setIsLoading(false)
        }
      })
      .catch(error => {
        setError(error)
        setIsError(true)
      })
  }

  useEffect(() => {
    getPage(limit, offset, [])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [limit, offset])

  return { data, isLoading, isError, error }
}
