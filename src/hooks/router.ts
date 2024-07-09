import {
  useLocation as _useLocation,
  useNavigate as _useNavigate,
  useParams as _useParams,
  useSearchParams as _useSearchParams,
  type Location,
  type NavigateOptions,
  type To as NavigateTo,
  type Params,
} from "react-router-dom"
import { object as objectSchema, type ObjectShape } from "yup"

import { type PageState } from "../components/page"
import { type ReadOnly } from "../utils/router"
import {
  tryValidateSync,
  type ObjectSchemaFromShape,
  type TryValidateSyncOnErrorRT,
  type TryValidateSyncOptions,
  type TryValidateSyncRT,
} from "../utils/schema"

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
  const searchParams = useSearchParams()

  return (to, options) => {
    const { next = true, ..._options } = options || {}

    navigate(next && "next" in searchParams ? searchParams.next : to, _options)
  }
}

export function useLocation<State = {}>() {
  return _useLocation() as Location<null | Partial<PageState & State>>
}

// -----------------------------------------------------------------------------
// Use Search Params
// -----------------------------------------------------------------------------

export function useSearchParams(): { [k: string]: string }

export function useSearchParams<
  OnErrorRT extends TryValidateSyncOnErrorRT<ObjectSchemaFromShape<Shape>>,
  Shape extends ObjectShape = {},
>(
  shape: Shape,
  validateOptions?: TryValidateSyncOptions<
    ObjectSchemaFromShape<Shape>,
    OnErrorRT
  >,
): TryValidateSyncRT<ObjectSchemaFromShape<Shape>, OnErrorRT>

export function useSearchParams<
  OnErrorRT extends TryValidateSyncOnErrorRT<ObjectSchemaFromShape<Shape>>,
  Shape extends ObjectShape = {},
>(
  shape?: Shape,
  validateOptions?: TryValidateSyncOptions<
    ObjectSchemaFromShape<Shape>,
    OnErrorRT
  >,
) {
  const searchParams = Object.fromEntries(_useSearchParams()[0].entries())
  if (!shape) return searchParams

  return tryValidateSync(searchParams, objectSchema(shape), validateOptions)
}

// -----------------------------------------------------------------------------
// Use Params
// -----------------------------------------------------------------------------

export function useParams(): ReadOnly<Params<string>>

export function useParams<
  OnErrorRT extends TryValidateSyncOnErrorRT<ObjectSchemaFromShape<Shape>>,
  Shape extends ObjectShape = {},
>(
  shape: Shape,
  validateOptions?: TryValidateSyncOptions<
    ObjectSchemaFromShape<Shape>,
    OnErrorRT
  >,
): TryValidateSyncRT<ObjectSchemaFromShape<Shape>, OnErrorRT>

export function useParams<
  OnErrorRT extends TryValidateSyncOnErrorRT<ObjectSchemaFromShape<Shape>>,
  Shape extends ObjectShape = {},
>(
  shape?: Shape,
  validateOptions?: TryValidateSyncOptions<
    ObjectSchemaFromShape<Shape>,
    OnErrorRT
  >,
) {
  const params = _useParams()
  if (!shape) return params

  return tryValidateSync(params, objectSchema(shape), validateOptions)
}
