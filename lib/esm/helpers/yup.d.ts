import { InferType, ValidateOptions, ValidationError, ObjectSchema } from 'yup';
export declare function tryValidateSync<Schema extends ObjectSchema<any>>(value: any, schema: Schema, kwArgs?: {
    options?: ValidateOptions;
}): InferType<Schema> | undefined;
export declare function tryValidateSync<Schema extends ObjectSchema<any>, OnErrorRT extends InferType<Schema> | void>(value: any, schema: Schema, kwArgs?: {
    options?: ValidateOptions;
    onError: (error: ValidationError) => OnErrorRT;
}): OnErrorRT extends InferType<Schema> ? InferType<Schema> : InferType<Schema> | undefined;
