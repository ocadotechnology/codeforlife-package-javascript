import type { FetchBaseQueryError } from "@reduxjs/toolkit/query/react"
import type { Optional, Required } from "./general"

// -----------------------------------------------------------------------------
// Model Types
// -----------------------------------------------------------------------------

// The fields of a model.
export type Fields = Record<string, unknown>

export type TagId = string | number

export interface Tag<Type extends string> {
  type: Type
  id: TagId
}

/**
 * A data model.
 *  Id: The type of Id.
 *  Data: The data fields.
 */
export type Model<Id extends TagId, MFields extends Fields = Fields> = {
  id: Id
} & Omit<MFields, "id">

export type Result<
  M extends Model<any>,
  MFields extends keyof Omit<M, "id"> = never,
> = Pick<M, "id" | MFields>

export type Arg<
  M extends Model<any>,
  RequiredFields extends keyof Omit<M, "id">,
  OptionalFields extends keyof Omit<M, "id" | RequiredFields> = never,
> = Required<M, RequiredFields> & Optional<M, OptionalFields>

// -----------------------------------------------------------------------------
// CRUD Types
// https://www.django-rest-framework.org/api-guide/viewsets/#viewset-actions
// -----------------------------------------------------------------------------

// Create

export type CreateResult<
  M extends Model<any>,
  MFields extends keyof Omit<M, "id"> = never,
> = Result<M, MFields>

export type CreateArg<
  M extends Model<any>,
  RequiredFields extends keyof Omit<M, "id">,
  OptionalFields extends keyof Omit<M, "id" | RequiredFields> = never,
> = Arg<M, RequiredFields, OptionalFields>

export type BulkCreateResult<
  M extends Model<any>,
  MFields extends keyof Omit<M, "id"> = never,
  ExtraFields extends Fields = Fields,
> = Array<Result<M, MFields> & ExtraFields>

export type BulkCreateArg<
  M extends Model<any>,
  RequiredFields extends keyof Omit<M, "id">,
  OptionalFields extends keyof Omit<M, "id" | RequiredFields> = never,
  ExtraFields extends Fields = Fields,
> = Array<Arg<M, RequiredFields, OptionalFields> & ExtraFields>

// Read

export type RetrieveResult<
  M extends Model<any>,
  MFields extends keyof Omit<M, "id"> = never,
> = Result<M, MFields>

export type RetrieveArg<M extends Model<any>> = M["id"]

export interface ListResult<
  M extends Model<any>,
  MFields extends keyof Omit<M, "id"> = never,
  ExtraFields extends Fields = Fields,
> {
  count: number
  offset: number
  limit: number
  maxLimit: number
  data: Array<Result<M, MFields> & ExtraFields>
}

export type ListArg<Filters extends Fields = Fields> = {
  limit: number
  offset: number
} & Partial<Omit<Filters, "limit" | "offset">>

// Update

export type UpdateResult<
  M extends Model<any>,
  MFields extends keyof Omit<M, "id"> = never,
> = Result<M, MFields>

type UpdateWithBody<
  M extends Model<any>,
  RequiredFields extends keyof Omit<M, "id">,
  OptionalFields extends keyof Omit<M, "id" | RequiredFields>,
  ExtraFields extends Fields,
> = [M["id"], Arg<M, RequiredFields, OptionalFields> & ExtraFields]

// NOTE: Sometimes update does not require a body. For example, if calling the
// "refresh" action on an invitation object updates the expiry date to be 24
// hours from now. In this case, you only need to pass the ID of the object.
export type UpdateArg<
  M extends Model<any>,
  RequiredFields extends keyof Omit<M, "id"> = never,
  OptionalFields extends keyof Omit<M, "id" | RequiredFields> = never,
  ExtraFields extends Fields = never,
> = [RequiredFields] extends [never]
  ? [OptionalFields] extends [never]
    ? [ExtraFields] extends [never]
      ? M["id"]
      : UpdateWithBody<M, RequiredFields, OptionalFields, ExtraFields>
    : UpdateWithBody<M, RequiredFields, OptionalFields, ExtraFields>
  : UpdateWithBody<M, RequiredFields, OptionalFields, ExtraFields>

export type BulkUpdateResult<
  M extends Model<any>,
  MFields extends keyof Omit<M, "id"> = never,
  ExtraFields extends Fields = Fields,
> = Array<Result<M, MFields> & ExtraFields>

export type BulkUpdateArg<
  M extends Model<any>,
  RequiredFields extends keyof Omit<M, "id">,
  OptionalFields extends keyof Omit<M, "id" | RequiredFields> = never,
  ExtraFields extends Fields = Fields,
> = Record<M["id"], Arg<M, RequiredFields, OptionalFields> & ExtraFields>

// Delete

export type DestroyResult = null

export type DestroyArg<M extends Model<any>> = M["id"]

export type BulkDestroyResult = null

export type BulkDestroyArg<M extends Model<any>> = Array<M["id"]>

// -----------------------------------------------------------------------------
// Functions
// -----------------------------------------------------------------------------

export function buildUrl(
  url: string,
  params: {
    search?: Fields
    url?: Fields
  },
): string {
  if (params.url) {
    Object.entries(params.url).forEach(([key, value]) => {
      url = url.replace(`<${key}>`, String(value))
    })
  }

  if (params.search) {
    const searchParams = Object.entries(params.search)
      .filter(([_, value]) => value !== undefined)
      .map(([key, value]) => [key, String(value)])

    if (searchParams.length !== 0) {
      url += `?${new URLSearchParams(searchParams).toString()}`
    }
  }

  return url
}

export function isTagId(value: unknown): boolean {
  return typeof value === "number" || typeof value === "string"
}

export function tagData<Type extends string, M extends Model<any>>(
  type: Type,
  id: string = "id",
): (
  result:
    | Result<M, any>
    | Array<Result<M, any>>
    | ListResult<M, any>
    | null
    | undefined,
  error: FetchBaseQueryError | undefined,
  arg:
    | Arg<M, any>
    | Array<Arg<M, any>>
    | [M["id"], Arg<M, any>]
    | Record<M["id"], Arg<M, any>>
    | ListArg<any>
    | Array<M["id"]>
    | string
    | number
    | undefined,
) => Array<Tag<Type>> {
  return (result, error, arg) => {
    if (!error) {
      if (arg) {
        if (isTagId(arg)) return [{ type, id: arg as TagId }]

        if (Array.isArray(arg) && arg.length > 0) {
          if (isTagId(arg[0])) {
            if (arg.length === 2 && !isTagId(arg[1])) {
              return [{ type, id: (arg as [M["id"], Arg<M, any>])[0] }]
            }

            return (arg as Array<M["id"]>).map(id => ({ type, id }))
          }
        }
      }

      if (result) {
        if (id in result) {
          return [{ type, id: (result as Result<M, any>)[id] as TagId }]
        }

        if (Array.isArray(result)) {
          return result.map(result => ({ type, id: result[id] as TagId }))
        }

        return (result as ListResult<M, any>).data.map(result => ({
          type,
          id: result[id] as TagId,
        }))
      }
    }

    return []
  }
}
