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
  type Flags,
  type BooleanSchema,
  type DateSchema,
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

export type SchemaMap<
  TType,
  TContext = AnyObject,
  TDefault = any,
  TFlags extends Flags = "",
> =
  NonNullable<TType> extends string
    ? StringSchema<
        // @ts-expect-error type is fine
        TType extends undefined ? TType | undefined : TType,
        TContext,
        TDefault,
        TFlags
      >
    : NonNullable<TType> extends number
      ? NumberSchema<
          // @ts-expect-error type is fine
          TType extends undefined ? TType | undefined : TType,
          TContext,
          TDefault,
          TFlags
        >
      : NonNullable<TType> extends boolean
        ? BooleanSchema<
            // @ts-expect-error type is fine
            TType extends undefined ? TType | undefined : TType,
            TContext,
            TDefault,
            TFlags
          >
        : NonNullable<TType> extends Date
          ? DateSchema<
              // @ts-expect-error type is fine
              TType extends undefined ? TType | undefined : TType,
              TContext,
              TDefault,
              TFlags
            >
          : NonNullable<TType> extends object
            ? ObjectSchema<
                // @ts-expect-error type is fine
                TType extends undefined ? TType | undefined : TType,
                TContext,
                TDefault,
                TFlags
              >
            : Schema<TType, TContext, TDefault, TFlags>

export function numericId(schema: NumberSchema = YupNumber()) {
  return schema.min(1)
}

// -----------------------------------------------------------------------------
// Limited Character Sets
// -----------------------------------------------------------------------------

export type MatchesCharSetOptions = Partial<{
  schema: StringSchema
  flags: string
}>

export function matchesCharSet(
  charSet: string,
  message: string,
  options: MatchesCharSetOptions = {},
) {
  const { schema = YupString(), flags } = options

  return schema.matches(new RegExp(`^[${charSet}]*$`, flags), message)
}

export type BuildCharSetOptions = MatchesCharSetOptions &
  Partial<{ spaces: boolean; specialChars: string }>

export function buildCharSet(
  charSet: string,
  description: string,
  options: BuildCharSetOptions = {},
) {
  const { spaces = false, specialChars, ...matchesCharSetOptions } = options

  let message = `can only contain: ${description}`

  if (spaces) {
    charSet += " "
    message += ", spaces"
  }
  if (specialChars) {
    charSet += specialChars
    message += `, special characters (${specialChars})`
  }

  return matchesCharSet(charSet, message, matchesCharSetOptions)
}

export function buildUnicodeCharSet(
  charSet: string,
  description: string,
  options: BuildCharSetOptions = {},
) {
  let { flags = "u", ...otherOptions } = options

  if (!flags.includes("u")) flags += "u"

  return buildCharSet(charSet, description, { flags, ...otherOptions })
}

export function asciiAlphaString(options?: BuildCharSetOptions) {
  return buildCharSet("a-zA-Z", "ASCII alpha characters (a-z, A-Z)", options)
}

export function lowercaseAsciiAlphaString(options?: BuildCharSetOptions) {
  return buildCharSet("a-z", "lowercase ASCII alpha characters (a-z)", options)
}

export function uppercaseAsciiAlphaString(options?: BuildCharSetOptions) {
  return buildCharSet("A-Z", "uppercase ASCII alpha characters (A-Z)", options)
}

export function asciiNumericString(options?: BuildCharSetOptions) {
  return buildCharSet("0-9", "ASCII numbers (0-9)", options)
}

export function asciiAlphanumericString(options?: BuildCharSetOptions) {
  return buildCharSet(
    "a-zA-Z0-9",
    "ASCII alphanumeric characters (a-z, A-Z, 0-9)",
    options,
  )
}

export function lowercaseAsciiAlphanumericString(
  options?: BuildCharSetOptions,
) {
  return buildCharSet(
    "a-z0-9",
    "lowercase ASCII alphanumeric characters (a-z, 0-9)",
    options,
  )
}

export function uppercaseAsciiAlphanumericString(
  options?: BuildCharSetOptions,
) {
  return buildCharSet(
    "A-Z0-9",
    "uppercase ASCII alphanumeric characters (A-Z, 0-9)",
    options,
  )
}

export function unicodeAlphaString(options?: BuildCharSetOptions) {
  return buildUnicodeCharSet("\\p{L}", "unicode alpha characters", options)
}

export function lowercaseUnicodeAlphaString(options?: BuildCharSetOptions) {
  return buildUnicodeCharSet(
    "\\p{Ll}",
    "lowercase unicode alpha characters",
    options,
  )
}

export function uppercaseUnicodeAlphaString(options?: BuildCharSetOptions) {
  return buildUnicodeCharSet(
    "\\p{Lu}",
    "uppercase unicode alpha characters",
    options,
  )
}

export function unicodeNumericString(options?: BuildCharSetOptions) {
  return buildUnicodeCharSet("\\p{N}", "unicode numbers", options)
}

export function unicodeAlphanumericString(options?: BuildCharSetOptions) {
  return buildUnicodeCharSet(
    "\\p{L}\\p{N}",
    "unicode alphanumeric characters",
    options,
  )
}

export function lowercaseUnicodeAlphanumericString(
  options?: BuildCharSetOptions,
) {
  return buildUnicodeCharSet(
    "\\p{Ll}\\p{N}",
    "lowercase unicode alphanumeric characters",
    options,
  )
}

export function uppercaseUnicodeAlphanumericString(
  options?: BuildCharSetOptions,
) {
  return buildUnicodeCharSet(
    "\\p{Lu}\\p{N}",
    "uppercase unicode alphanumeric characters",
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
