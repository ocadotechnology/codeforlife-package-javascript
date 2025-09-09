import { AnyObject, BooleanSchema, DateSchema, DefaultFromShape, Flags, InferType, MakePartial, NumberSchema, ObjectSchema, ObjectShape, Schema, StringSchema, TypeFromShape, ValidateOptions, ValidationError } from 'yup';
export type _<T> = T extends {} ? {
    [k in keyof T]: T[k];
} : T;
export type MakeKeysOptional<T> = T extends AnyObject ? _<MakePartial<T>> : T;
export type ObjectFromShape<Shape extends ObjectShape> = MakeKeysOptional<_<TypeFromShape<Shape, AnyObject>>>;
export type ObjectSchemaFromShape<Shape extends ObjectShape> = ObjectSchema<_<TypeFromShape<Shape, AnyObject>>, AnyObject, _<DefaultFromShape<Shape>>, "">;
export type SchemaMap<TType, TContext = AnyObject, TDefault = any, TFlags extends Flags = ""> = NonNullable<TType> extends string ? StringSchema<TType extends undefined ? TType | undefined : TType, TContext, TDefault, TFlags> : NonNullable<TType> extends number ? NumberSchema<TType extends undefined ? TType | undefined : TType, TContext, TDefault, TFlags> : NonNullable<TType> extends boolean ? BooleanSchema<TType extends undefined ? TType | undefined : TType, TContext, TDefault, TFlags> : NonNullable<TType> extends Date ? DateSchema<TType extends undefined ? TType | undefined : TType, TContext, TDefault, TFlags> : NonNullable<TType> extends object ? ObjectSchema<TType extends undefined ? TType | undefined : TType, TContext, TDefault, TFlags> : Schema<TType, TContext, TDefault, TFlags>;
export declare function numericId(schema?: NumberSchema): NumberSchema<number | undefined, AnyObject, undefined, "">;
export type MatchesCharSetOptions = Partial<{
    schema: StringSchema;
    flags: string;
}>;
export declare function matchesCharSet(charSet: string, message: string, options?: MatchesCharSetOptions): StringSchema<string | undefined, AnyObject, undefined, "">;
export type BuildCharSetOptions = MatchesCharSetOptions & Partial<{
    spaces: boolean;
    specialChars: string;
}>;
export declare function buildCharSet(charSet: string, description: string, options?: BuildCharSetOptions): StringSchema<string | undefined, AnyObject, undefined, "">;
export declare function buildUnicodeCharSet(charSet: string, description: string, options?: BuildCharSetOptions): StringSchema<string | undefined, AnyObject, undefined, "">;
export declare function asciiAlphaString(options?: BuildCharSetOptions): StringSchema<string | undefined, AnyObject, undefined, "">;
export declare function lowercaseAsciiAlphaString(options?: BuildCharSetOptions): StringSchema<string | undefined, AnyObject, undefined, "">;
export declare function uppercaseAsciiAlphaString(options?: BuildCharSetOptions): StringSchema<string | undefined, AnyObject, undefined, "">;
export declare function asciiNumericString(options?: BuildCharSetOptions): StringSchema<string | undefined, AnyObject, undefined, "">;
export declare function asciiAlphanumericString(options?: BuildCharSetOptions): StringSchema<string | undefined, AnyObject, undefined, "">;
export declare function lowercaseAsciiAlphanumericString(options?: BuildCharSetOptions): StringSchema<string | undefined, AnyObject, undefined, "">;
export declare function uppercaseAsciiAlphanumericString(options?: BuildCharSetOptions): StringSchema<string | undefined, AnyObject, undefined, "">;
export declare function unicodeAlphaString(options?: BuildCharSetOptions): StringSchema<string | undefined, AnyObject, undefined, "">;
export declare function lowercaseUnicodeAlphaString(options?: BuildCharSetOptions): StringSchema<string | undefined, AnyObject, undefined, "">;
export declare function uppercaseUnicodeAlphaString(options?: BuildCharSetOptions): StringSchema<string | undefined, AnyObject, undefined, "">;
export declare function unicodeNumericString(options?: BuildCharSetOptions): StringSchema<string | undefined, AnyObject, undefined, "">;
export declare function unicodeAlphanumericString(options?: BuildCharSetOptions): StringSchema<string | undefined, AnyObject, undefined, "">;
export declare function lowercaseUnicodeAlphanumericString(options?: BuildCharSetOptions): StringSchema<string | undefined, AnyObject, undefined, "">;
export declare function uppercaseUnicodeAlphanumericString(options?: BuildCharSetOptions): StringSchema<string | undefined, AnyObject, undefined, "">;
export type TryValidateSyncOnErrorRT<S extends Schema> = InferType<S> | void;
export type TryValidateSyncRT<S extends Schema, OnErrorRT extends TryValidateSyncOnErrorRT<S>> = OnErrorRT extends InferType<S> ? InferType<S> : InferType<S> | undefined;
export type TryValidateSyncOptions<S extends Schema, OnErrorRT extends TryValidateSyncOnErrorRT<S>> = ValidateOptions & {
    onError?: (error: ValidationError) => OnErrorRT;
};
export declare function tryValidateSync<S extends Schema>(value: any, schema: S, options?: ValidateOptions): InferType<S> | undefined;
export declare function tryValidateSync<S extends Schema, OnErrorRT extends TryValidateSyncOnErrorRT<S>>(value: any, schema: S, options?: ValidateOptions & {
    onError: (error: ValidationError) => OnErrorRT;
}): TryValidateSyncRT<S, OnErrorRT>;


declare module "@mui/material/styles" {
    interface CustomPaletteColors {
        tertiary: PaletteColor;
        white: PaletteColor;
        black: PaletteColor;
        teacher: PaletteColor;
        student: PaletteColor;
        indy: PaletteColor;
    }
    interface Palette extends CustomPaletteColors {
    }
    interface PaletteOptions extends CustomPaletteColors {
    }
}


declare module "@mui/material" {
    interface FabPropsColorOverrides extends PropsColorOverrides {
    }
    interface CardPropsColorOverrides extends PropsColorOverrides {
    }
    interface ChipPropsColorOverrides extends PropsColorOverrides {
    }
    interface IconPropsColorOverrides extends PropsColorOverrides {
    }
    interface AlertPropsColorOverrides extends PropsColorOverrides {
    }
    interface BadgePropsColorOverrides extends PropsColorOverrides {
    }
    interface RadioPropsColorOverrides extends PropsColorOverrides {
    }
    interface AppBarPropsColorOverrides extends PropsColorOverrides {
    }
    interface ButtonPropsColorOverrides extends PropsColorOverrides {
    }
    interface SliderPropsColorOverrides extends PropsColorOverrides {
    }
    interface SwitchPropsColorOverrides extends PropsColorOverrides {
    }
    interface SvgIconPropsColorOverrides extends PropsColorOverrides {
    }
    interface CheckboxPropsColorOverrides extends PropsColorOverrides {
    }
    interface FormLabelPropsColorOverrides extends PropsColorOverrides {
    }
    interface InputBasePropsColorOverrides extends PropsColorOverrides {
    }
    interface TextFieldPropsColorOverrides extends PropsColorOverrides {
    }
    interface IconButtonPropsColorOverrides extends PropsColorOverrides {
    }
    interface PaginationPropsColorOverrides extends PropsColorOverrides {
    }
    interface ButtonGroupPropsColorOverrides extends PropsColorOverrides {
    }
    interface FormControlPropsColorOverrides extends PropsColorOverrides {
    }
    interface ToggleButtonPropsColorOverrides extends PropsColorOverrides {
    }
    interface LinearProgressPropsColorOverrides extends PropsColorOverrides {
    }
    interface PaginationItemPropsColorOverrides extends PropsColorOverrides {
    }
    interface CircularProgressPropsColorOverrides extends PropsColorOverrides {
    }
    interface TabsPropsIndicatorColorOverrides extends PropsColorOverrides {
    }
    interface ToggleButtonGroupPropsColorOverrides extends PropsColorOverrides {
    }
}
