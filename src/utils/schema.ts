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

export function matchesCharSet(
  charSet: string,
  message: string,
  schema: StringSchema = YupString(),
) {
  return schema.matches(new RegExp(`^[${charSet}]*$`), message)
}

export type BuildCharSetOptions = Partial<{
  schema: StringSchema
  spaces: boolean
  specialChars: string
}>

export function buildCharSet(
  charSet: string,
  description: string,
  options: BuildCharSetOptions = {},
) {
  const { schema, spaces = false, specialChars } = options

  let message = `can only contain: ${description}`

  if (spaces) {
    charSet += " "
    message += ", spaces"
  }
  if (specialChars) {
    charSet += specialChars
    message += `, special characters (${specialChars})`
  }

  return matchesCharSet(charSet, message, schema)
}

export function alphaString(options?: BuildCharSetOptions) {
  return buildCharSet("a-zA-Z", "alpha characters (a-z, A-Z)", options)
}

export function lowercaseAlphaString(options?: BuildCharSetOptions) {
  return buildCharSet("a-z", "lowercase alpha characters (a-z)", options)
}

export function lowercaseAlphanumericString(options?: BuildCharSetOptions) {
  return buildCharSet(
    "a-z0-9",
    "lowercase alphanumeric characters (a-z, 0-9)",
    options,
  )
}

export function uppercaseAlphaString(options?: BuildCharSetOptions) {
  return buildCharSet("A-Z", "uppercase alpha characters (A-Z)", options)
}

export function uppercaseAlphanumericString(options?: BuildCharSetOptions) {
  return buildCharSet(
    "A-Z0-9",
    "uppercase alphanumeric characters (A-Z, 0-9)",
    options,
  )
}

export function numericString(options?: BuildCharSetOptions) {
  return buildCharSet("0-9", "numbers (0-9)", options)
}

export function alphanumericString(options?: BuildCharSetOptions) {
  return buildCharSet(
    "a-zA-Z0-9",
    "alphanumeric characters (a-z, A-Z, 0-9)",
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
