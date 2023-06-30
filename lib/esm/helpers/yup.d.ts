import { Maybe, AnyObject, InferType, ValidateOptions, ValidationError, ObjectSchema } from 'yup';
export declare function tryValidateSync<T extends Maybe<AnyObject>, Schema extends ObjectSchema<T>>(value: T, schema: Schema, kwArgs?: {
    options?: ValidateOptions;
}): InferType<Schema> | undefined;
export declare function tryValidateSync<T extends Maybe<AnyObject>, Schema extends ObjectSchema<T>, OnErrorRT extends InferType<Schema> | void>(value: T, schema: Schema, kwArgs?: {
    options?: ValidateOptions;
    onError: (error: ValidationError) => OnErrorRT;
}): OnErrorRT extends InferType<Schema> ? InferType<Schema> : InferType<Schema> | undefined;
