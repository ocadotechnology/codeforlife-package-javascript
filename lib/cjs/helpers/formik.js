"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setFormErrors = void 0;
function setFormErrors(error, setErrors) {
    if (typeof error !== 'object' ||
        error === null ||
        !('status' in error) ||
        typeof error.status !== 'number' ||
        error.status !== 400 ||
        !('data' in error) ||
        typeof error.data !== 'object' ||
        error.data === null) {
        throw error;
    }
    setErrors(error.data);
}
exports.setFormErrors = setFormErrors;
