"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tryValidateSync = void 0;
var yup_1 = require("yup");
function tryValidateSync(value, schema, kwArgs) {
    try {
        return schema.validateSync(value, kwArgs === null || kwArgs === void 0 ? void 0 : kwArgs.options);
    }
    catch (error) {
        if (!(error instanceof yup_1.ValidationError)) {
            throw error;
        }
        else if ((kwArgs === null || kwArgs === void 0 ? void 0 : kwArgs.onError) !== undefined) {
            return kwArgs.onError(error);
        }
    }
    return undefined;
}
exports.tryValidateSync = tryValidateSync;
