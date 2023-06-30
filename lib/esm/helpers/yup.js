import { ValidationError } from 'yup';
export function tryValidateSync(value, schema, kwArgs) {
    try {
        return schema.validateSync(value, kwArgs === null || kwArgs === void 0 ? void 0 : kwArgs.options);
    }
    catch (error) {
        if (!(error instanceof ValidationError)) {
            throw error;
        }
        else if ((kwArgs === null || kwArgs === void 0 ? void 0 : kwArgs.onError) !== undefined) {
            return kwArgs.onError(error);
        }
    }
    return undefined;
}
