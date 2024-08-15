import { useEffect, type ReactNode } from "react"
import {
  useLocation as _useLocation,
  useNavigate as _useNavigate,
  useParams as _useParams,
  useSearchParams as _useSearchParams,
  type Location,
  type NavigateOptions,
  type Params,
  type To,
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

export type Navigate<State extends Record<string, any> = Record<string, any>> =
  {
    (
      to: To,
      options?: Omit<NavigateOptions, "state"> & {
        state?: State & Partial<PageState>
        next?: boolean
      },
    ): void
    (delta: number): void
  }

export function useNavigate<
  State extends Record<string, any> = Record<string, any>,
>(): Navigate<State> {
  const navigate = _useNavigate()
  const searchParams = useSearchParams()

  return (
    toOrDelta,
    options: (NavigateOptions & { next?: boolean }) | undefined = undefined,
  ) => {
    if (typeof toOrDelta === "number") navigate(toOrDelta)
    else {
      const { next = true, ..._options } = options || {}

      navigate(
        next && "next" in searchParams ? searchParams.next : toOrDelta,
        _options,
      )
    }
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

export function useParamsRequired<
  OnErrorRT extends TryValidateSyncOnErrorRT<ObjectSchemaFromShape<Shape>>,
  Shape extends ObjectShape = {},
  State extends Record<string, any> = Record<string, any>,
>({
  shape,
  children,
  onValidationError,
  validateOptions,
}: {
  shape: Shape
  children: (
    data: NonNullable<
      TryValidateSyncRT<ObjectSchemaFromShape<Shape>, OnErrorRT>
    >,
  ) => ReactNode
  onValidationError: (navigate: Navigate<State>) => void
  validateOptions?: TryValidateSyncOptions<
    ObjectSchemaFromShape<Shape>,
    OnErrorRT
  >
}) {
  const params = useParams(shape, validateOptions)
  const navigate = useNavigate<State>()

  useEffect(() => {
    if (!params) onValidationError(navigate)
  }, [params, onValidationError, navigate])

  return params ? children(params) : <></>
}
