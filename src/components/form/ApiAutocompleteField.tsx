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
import type {
  Fields,
  ListArg,
  ListResult,
  Model,
  Result,
  TagId,
} from "../../utils/api"

export interface ApiAutocompleteFieldProps<
  // api type args
  QueryArg extends ListArg,
  ModelId extends TagId,
  M extends Model<ModelId>,
  MFields extends keyof Omit<M, "id">,
  ExtraFields extends Fields,
  ResultType extends ListResult<M, MFields, ExtraFields>,
  // autocomplete type args
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
  ChipComponent extends ElementType = ChipTypeMap["defaultComponent"],
> extends Omit<
    AutocompleteFieldProps<
      ModelId,
      Multiple,
      DisableClearable,
      FreeSolo,
      ChipComponent
    >,
    "options" | "ListboxComponent" | "filterOptions" | "getOptionLabel"
  > {
  useLazyListQuery: TypedUseLazyQuery<ResultType, QueryArg, any>
  filterOptions?: Omit<QueryArg, "limit" | "offset">
  getOptionLabel: (result: Result<M, MFields> & ExtraFields) => string
}

const ApiAutocompleteField = <
  // api type args
  QueryArg extends ListArg,
  ModelId extends TagId,
  M extends Model<ModelId>,
  MFields extends keyof Omit<M, "id">,
  ExtraFields extends Fields,
  ResultType extends ListResult<M, MFields, ExtraFields>,
  // autocomplete type args
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
  ChipComponent extends ElementType = ChipTypeMap["defaultComponent"],
>({
  useLazyListQuery,
  filterOptions,
  getOptionLabel,
  ...otherAutocompleteFieldProps
}: ApiAutocompleteFieldProps<
  // api type args
  QueryArg,
  ModelId,
  M,
  MFields,
  ExtraFields,
  ResultType,
  // autocomplete type args
  Multiple,
  DisableClearable,
  FreeSolo,
  ChipComponent
>): JSX.Element => {
  type _Result = Result<M, MFields> & ExtraFields

  const [trigger, { isLoading }] = useLazyListQuery()
  const [{ limit, offset }, setPagination] = usePagination()
  const [{ options, hasMore }, setState] = useState<{
    options: Record<string, _Result>
    hasMore: boolean
  }>({ options: {}, hasMore: true })

  // Call api
  useEffect(() => {
    trigger({ limit, offset, ...filterOptions } as QueryArg)
      .unwrap()
      .then(({ data, offset, limit, count }) => {
        setState(({ options: previousOptions }) => {
          const options = { ...previousOptions }
          data.forEach(result => {
            options[result.id] = result
          })
          return { options, hasMore: offset + limit < count }
        })
      })
      .catch(error => {
        if (error) console.error(error)
        // TODO: gracefully handle error
      })
  }, [trigger, limit, offset, filterOptions])

  // Get options keys
  let optionKeys: ModelId[] = Object.keys(options) as ModelId[]
  if (!optionKeys.length) return <></>
  if (typeof Object.values<_Result>(options)[0].id === "number") {
    optionKeys = optionKeys.map(Number) as ModelId[]
  }

  function loadNextPage() {
    setPagination(({ page, limit }) => ({ page: page + 1, limit }))
  }

  return (
    <AutocompleteField
      options={optionKeys}
      getOptionLabel={id => getOptionLabel(options[String(id)])}
      ListboxComponent={forwardRef(({ children, ...props }, ref) => {
        const childrenArray = Children.toArray(children)
        if (isLoading) childrenArray.push(<CircularProgress key="is-loading" />)
        else if (hasMore) {
          childrenArray.push(
            <Button key="load-more" onClick={loadNextPage}>
              Load more
            </Button>,
          )
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
            {childrenArray}
          </ul>
        )
      })}
      {...otherAutocompleteFieldProps}
    />
  )
}

export default ApiAutocompleteField
