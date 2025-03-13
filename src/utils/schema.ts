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
  type StringSchema,
  string as YupString,
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
// Limited Character Sets
// -----------------------------------------------------------------------------

export function limitCharSet(
  charSet: string,
  message: string,
  schema: StringSchema = YupString(),
) {
  return schema.matches(new RegExp(`^[${charSet}]*$`), message)
}

export function alphaString(schema: StringSchema = YupString()) {
  return limitCharSet(
    "a-zA-Z",
    "can only contain alpha characters (a-z, A-Z)",
    schema,
  )
}

export function lowercaseAlphaString(schema: StringSchema = YupString()) {
  return limitCharSet(
    "a-z",
    "can only contain lowercase alpha characters (a-z)",
    schema,
  )
}

export function uppercaseAlphaString(schema: StringSchema = YupString()) {
  return limitCharSet(
    "A-Z",
    "can only contain uppercase alpha characters (A-Z)",
    schema,
  )
}

export function numericString(schema: StringSchema = YupString()) {
  return limitCharSet("0-9", "can only contain numbers (0-9)", schema)
}

export function alphanumericString(schema: StringSchema = YupString()) {
  return limitCharSet(
    "a-zA-Z0-9",
    "can only contain alphanumeric characters (a-z, A-Z, 0-9)",
    schema,
  )
}

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
