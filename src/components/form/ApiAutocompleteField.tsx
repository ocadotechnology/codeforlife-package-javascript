import { Button, CircularProgress, type ChipTypeMap } from "@mui/material"
import type { TypedUseLazyQuery } from "@reduxjs/toolkit/query/react"
import {
  Children,
  forwardRef,
  useEffect,
  useState,
  type ElementType,
} from "react"

import {
  AutocompleteField,
  type AutocompleteFieldProps,
} from "../../components/form"
import { usePagination } from "../../hooks/api"
import type { ListArg, ListResult, TagId } from "../../utils/api"
import SyncError from "../SyncError"

export interface ApiAutocompleteFieldProps<
  SearchKey extends keyof Omit<QueryArg, "limit" | "offset">,
  // api type args
  QueryArg extends ListArg,
  ResultType extends ListResult<any>,
  // autocomplete type args
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
  ChipComponent extends ElementType = ChipTypeMap["defaultComponent"],
> extends Omit<
    AutocompleteFieldProps<
      TagId,
      Multiple,
      DisableClearable,
      FreeSolo,
      ChipComponent
    >,
    | "options"
    | "ListboxComponent"
    | "filterOptions"
    | "getOptionLabel"
    | "getOptionKey"
    | "onInputChange"
  > {
  useLazyListQuery: TypedUseLazyQuery<ResultType, QueryArg, any>
  filterOptions?: Omit<QueryArg, "limit" | "offset" | SearchKey>
  getOptionLabel: (result: ResultType["data"][number]) => string
  getOptionKey?: (result: ResultType["data"][number]) => TagId
  searchKey: SearchKey
}

const ApiAutocompleteField = <
  SearchKey extends keyof Omit<QueryArg, "limit" | "offset">,
  // api type args
  QueryArg extends ListArg,
  ResultType extends ListResult<any>,
  // autocomplete type args
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
  ChipComponent extends ElementType = ChipTypeMap["defaultComponent"],
>({
  useLazyListQuery,
  filterOptions,
  getOptionLabel,
  getOptionKey = result => result.id,
  searchKey,
  ...otherAutocompleteFieldProps
}: ApiAutocompleteFieldProps<
  SearchKey,
  // api type args
  QueryArg,
  ResultType,
  // autocomplete type args
  Multiple,
  DisableClearable,
  FreeSolo,
  ChipComponent
>): JSX.Element => {
  const [search, setSearch] = useState("")
  const [trigger, { isLoading, isError }] = useLazyListQuery()
  const [{ limit, offset }, setPagination] = usePagination()
  const [{ options, hasMore }, setState] = useState<{
    options: Record<TagId, ResultType["data"][number]>
    hasMore: boolean
  }>({ options: {}, hasMore: true })

  // Call api
  useEffect(() => {
    const arg = { limit, offset, ...filterOptions } as QueryArg
    // @ts-expect-error
    if (search) arg[searchKey] = search

    trigger(arg)
      .unwrap()
      .then(({ data, offset, limit, count }) => {
        setState(({ options: previousOptions }) => {
          const options = { ...previousOptions }
          data.forEach(result => {
            options[getOptionKey(result)] = result
          })
          return { options, hasMore: offset + limit < count }
        })
      })
      .catch(error => {
        if (error) console.error(error)
        // TODO: gracefully handle error
      })
  }, [trigger, limit, offset, filterOptions, getOptionKey, searchKey, search])

  // Get options keys
  let optionKeys: TagId[] = Object.keys(options)
  if (!optionKeys.length) return <></>
  if (typeof getOptionKey(Object.values(options)[0]) === "number") {
    optionKeys = optionKeys.map(Number)
  }

  function loadNextPage() {
    setPagination(({ page, limit }) => ({ page: page + 1, limit }))
  }

  return (
    <AutocompleteField
      options={optionKeys}
      getOptionLabel={id => getOptionLabel(options[id])}
      onInputChange={(_, value, reason) => {
        setSearch(reason === "input" ? value : "")
      }}
      ListboxComponent={forwardRef(({ children, ...props }, ref) => {
        const listItems = Children.toArray(children)
        if (isLoading) listItems.push(<CircularProgress key="is-loading" />)
        else {
          if (isError) listItems.push(<SyncError key="is-error" />)
          if (hasMore) {
            listItems.push(
              <Button key="load-more" onClick={loadNextPage}>
                Load more
              </Button>,
            )
          }
        }

        return (
          <ul
            {...props}
            // @ts-expect-error
            ref={ref}
            onScroll={event => {
              // If not already loading and scrolled to bottom
              if (
                !isLoading &&
                event.currentTarget.clientHeight +
                  event.currentTarget.scrollTop >=
                  event.currentTarget.scrollHeight
              ) {
                loadNextPage()
              }
            }}
          >
            {listItems}
          </ul>
        )
      })}
      {...otherAutocompleteFieldProps}
    />
  )
}

export default ApiAutocompleteField
