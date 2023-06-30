import {
  InferType,
  ValidateOptions,
  ValidationError,
  ObjectSchema
} from 'yup';

export function tryValidateSync<
  Schema extends ObjectSchema<any>
>(
  value: any,
  schema: Schema,
  kwArgs?: {
    options?: ValidateOptions
  }
): InferType<Schema> | undefined;

export function tryValidateSync<
  Schema extends ObjectSchema<any>,
  OnErrorRT extends InferType<Schema> | void
>(
  value: any,
  schema: Schema,
  kwArgs?: {
    options?: ValidateOptions,
    onError: (error: ValidationError) => OnErrorRT
  }
): OnErrorRT extends InferType<Schema>
  ? InferType<Schema>
  : InferType<Schema> | undefined;

export function tryValidateSync<
  Schema extends ObjectSchema<any>,
  OnErrorRT extends InferType<Schema> | void
>(
  value: any,
  schema: Schema,
  kwArgs?: {
    options?: ValidateOptions,
    onError?: (error: ValidationError) => OnErrorRT
  }
): InferType<Schema> | undefined {
  try {
    return schema.validateSync(value, kwArgs?.options);
  } catch (error) {
    if (!(error instanceof ValidationError)) {
      throw error;
    } else if (kwArgs?.onError !== undefined) {
      return kwArgs.onError(error) as InferType<Schema> | undefined;
    }
  }

  return undefined;
}
