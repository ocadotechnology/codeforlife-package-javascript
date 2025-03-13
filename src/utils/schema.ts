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
  type NumberSchema,
  string as YupString,
  number as YupNumber,
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

export function numericId(schema: NumberSchema = YupNumber()) {
  return schema.min(1)
}

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

type CharSetOptions = Partial<{
  schema: StringSchema
  spaces: boolean
  specialChars: string
}>

function charSet(
  charSet: string,
  message: string,
  options: CharSetOptions = {},
) {
  const { schema, spaces = false, specialChars } = options

  if (spaces) {
    charSet += " "
    message += ", spaces"
  }
  if (specialChars) {
    charSet += specialChars
    message += `, special characters (${specialChars})`
  }

  return limitCharSet(charSet, message, schema)
}

export function alphaString(options?: CharSetOptions) {
  return charSet(
    "a-zA-Z",
    "can only contain alpha characters (a-z, A-Z)",
    options,
  )
}

export function lowercaseAlphaString(options?: CharSetOptions) {
  return charSet(
    "a-z",
    "can only contain lowercase alpha characters (a-z)",
    options,
  )
}

export function lowercaseAlphanumericString(options?: CharSetOptions) {
  return charSet(
    "a-z0-9",
    "can only contain lowercase alphanumeric characters (a-z, 0-9)",
    options,
  )
}

export function uppercaseAlphaString(options?: CharSetOptions) {
  return charSet(
    "A-Z",
    "can only contain uppercase alpha characters (A-Z)",
    options,
  )
}

export function uppercaseAlphanumericString(options?: CharSetOptions) {
  return charSet(
    "A-Z0-9",
    "can only contain uppercase alphanumeric characters (A-Z, 0-9)",
    options,
  )
}

export function numericString(options?: CharSetOptions) {
  return charSet("0-9", "can only contain numbers (0-9)", options)
}

export function alphanumericString(options?: CharSetOptions) {
  return charSet(
    "a-zA-Z0-9",
    "can only contain alphanumeric characters (a-z, A-Z, 0-9)",
    options,
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
