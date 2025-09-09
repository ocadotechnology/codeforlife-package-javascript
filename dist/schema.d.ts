import { AnyObject } from 'yup';
import { BooleanSchema } from 'yup';
import { DateSchema } from 'yup';
import { DefaultFromShape } from 'yup';
import { Flags } from 'yup';
import { InferType } from 'yup';
import { MakePartial } from 'yup';
import { NumberSchema } from 'yup';
import { ObjectSchema } from 'yup';
import { ObjectShape } from 'yup';
import { Schema } from 'yup';
import { StringSchema } from 'yup';
import { TypeFromShape } from 'yup';
import { ValidateOptions } from 'yup';
import { ValidationError } from 'yup';

export declare type _<T> = T extends {} ? {
    [k in keyof T]: T[k];
} : T;

export declare function asciiAlphanumericString(options?: BuildCharSetOptions): StringSchema<string | undefined, AnyObject, undefined, "">;

export declare function asciiAlphaString(options?: BuildCharSetOptions): StringSchema<string | undefined, AnyObject, undefined, "">;

export declare function asciiNumericString(options?: BuildCharSetOptions): StringSchema<string | undefined, AnyObject, undefined, "">;

export declare function buildCharSet(charSet: string, description: string, options?: BuildCharSetOptions): StringSchema<string | undefined, AnyObject, undefined, "">;

export declare type BuildCharSetOptions = MatchesCharSetOptions & Partial<{
    spaces: boolean;
    specialChars: string;
}>;

export declare function buildUnicodeCharSet(charSet: string, description: string, options?: BuildCharSetOptions): StringSchema<string | undefined, AnyObject, undefined, "">;

export declare function lowercaseAsciiAlphanumericString(options?: BuildCharSetOptions): StringSchema<string | undefined, AnyObject, undefined, "">;

export declare function lowercaseAsciiAlphaString(options?: BuildCharSetOptions): StringSchema<string | undefined, AnyObject, undefined, "">;

export declare function lowercaseUnicodeAlphanumericString(options?: BuildCharSetOptions): StringSchema<string | undefined, AnyObject, undefined, "">;

export declare function lowercaseUnicodeAlphaString(options?: BuildCharSetOptions): StringSchema<string | undefined, AnyObject, undefined, "">;

export declare type MakeKeysOptional<T> = T extends AnyObject ? _<MakePartial<T>> : T;

export declare function matchesCharSet(charSet: string, message: string, options?: MatchesCharSetOptions): StringSchema<string | undefined, AnyObject, undefined, "">;

export declare type MatchesCharSetOptions = Partial<{
    schema: StringSchema;
    flags: string;
}>;

export declare function numericId(schema?: NumberSchema): NumberSchema<number | undefined, AnyObject, undefined, "">;

export declare type ObjectFromShape<Shape extends ObjectShape> = MakeKeysOptional<_<TypeFromShape<Shape, AnyObject>>>;

export declare type ObjectSchemaFromShape<Shape extends ObjectShape> = ObjectSchema<_<TypeFromShape<Shape, AnyObject>>, AnyObject, _<DefaultFromShape<Shape>>, "">;

export declare type SchemaMap<TType, TContext = AnyObject, TDefault = any, TFlags extends Flags = ""> = NonNullable<TType> extends string ? StringSchema<TType extends undefined ? TType | undefined : TType, TContext, TDefault, TFlags> : NonNullable<TType> extends number ? NumberSchema<TType extends undefined ? TType | undefined : TType, TContext, TDefault, TFlags> : NonNullable<TType> extends boolean ? BooleanSchema<TType extends undefined ? TType | undefined : TType, TContext, TDefault, TFlags> : NonNullable<TType> extends Date ? DateSchema<TType extends undefined ? TType | undefined : TType, TContext, TDefault, TFlags> : NonNullable<TType> extends object ? ObjectSchema<TType extends undefined ? TType | undefined : TType, TContext, TDefault, TFlags> : Schema<TType, TContext, TDefault, TFlags>;

export declare function tryValidateSync<S extends Schema>(value: any, schema: S, options?: ValidateOptions): InferType<S> | undefined;

export declare function tryValidateSync<S extends Schema, OnErrorRT extends TryValidateSyncOnErrorRT<S>>(value: any, schema: S, options?: ValidateOptions & {
    onError: (error: ValidationError) => OnErrorRT;
}): TryValidateSyncRT<S, OnErrorRT>;

export declare type TryValidateSyncOnErrorRT<S extends Schema> = InferType<S> | void;

export declare type TryValidateSyncOptions<S extends Schema, OnErrorRT extends TryValidateSyncOnErrorRT<S>> = ValidateOptions & {
    onError?: (error: ValidationError) => OnErrorRT;
};

export declare type TryValidateSyncRT<S extends Schema, OnErrorRT extends TryValidateSyncOnErrorRT<S>> = OnErrorRT extends InferType<S> ? InferType<S> : InferType<S> | undefined;

export declare function unicodeAlphanumericString(options?: BuildCharSetOptions): StringSchema<string | undefined, AnyObject, undefined, "">;

export declare function unicodeAlphaString(options?: BuildCharSetOptions): StringSchema<string | undefined, AnyObject, undefined, "">;

export declare function unicodeNumericString(options?: BuildCharSetOptions): StringSchema<string | undefined, AnyObject, undefined, "">;

export declare function uppercaseAsciiAlphanumericString(options?: BuildCharSetOptions): StringSchema<string | undefined, AnyObject, undefined, "">;

export declare function uppercaseAsciiAlphaString(options?: BuildCharSetOptions): StringSchema<string | undefined, AnyObject, undefined, "">;

export declare function uppercaseUnicodeAlphanumericString(options?: BuildCharSetOptions): StringSchema<string | undefined, AnyObject, undefined, "">;

export declare function uppercaseUnicodeAlphaString(options?: BuildCharSetOptions): StringSchema<string | undefined, AnyObject, undefined, "">;

export { }
