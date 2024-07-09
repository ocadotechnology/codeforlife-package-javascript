import {
  ValidationError,
  type AnyObject,
  type DefaultFromShape,
  type InferType,
  type MakePartial,
  type ObjectSchema,
  type ObjectShape,
  type Schema,
  type TypeFromShape,
  type ValidateOptions,
} from "yup"

export type _<T> = T extends {}
  ? {
      [k in keyof T]: T[k]
    }
  : T

export type MakeKeysOptional<T> = T extends AnyObject ? _<MakePartial<T>> : T

export type ObjectFromShape<Shape extends ObjectShape> = MakeKeysOptional<
  _<TypeFromShape<Shape, AnyObject>>
>

export type ObjectSchemaFromShape<Shape extends ObjectShape> = ObjectSchema<
  _<TypeFromShape<Shape, AnyObject>>,
  AnyObject,
  _<DefaultFromShape<Shape>>,
  ""
>

// -----------------------------------------------------------------------------
// Try Validate Sync
// -----------------------------------------------------------------------------

export type TryValidateSyncOnErrorRT<S extends Schema> = InferType<S> | void

export type TryValidateSyncRT<
  S extends Schema,
  OnErrorRT extends TryValidateSyncOnErrorRT<S>,
> = OnErrorRT extends InferType<S> ? InferType<S> : InferType<S> | undefined

export type TryValidateSyncOptions<
  S extends Schema,
  OnErrorRT extends TryValidateSyncOnErrorRT<S>,
> = ValidateOptions & {
  onError?: (error: ValidationError) => OnErrorRT
}

export function tryValidateSync<S extends Schema>(
  value: any,
  schema: S,
  options?: ValidateOptions,
): InferType<S> | undefined

export function tryValidateSync<
  S extends Schema,
  OnErrorRT extends TryValidateSyncOnErrorRT<S>,
>(
  value: any,
  schema: S,
  options?: ValidateOptions & {
    onError: (error: ValidationError) => OnErrorRT
  },
): TryValidateSyncRT<S, OnErrorRT>

export function tryValidateSync<
  S extends Schema,
  OnErrorRT extends TryValidateSyncOnErrorRT<S>,
>(value: any, schema: S, options?: TryValidateSyncOptions<S, OnErrorRT>) {
  const { onError, ...validateOptions } = options || {}

  try {
    return schema.validateSync(value, validateOptions)
  } catch (error) {
    if (!(error instanceof ValidationError)) throw error
    else if (onError) return onError(error)
  }
}
