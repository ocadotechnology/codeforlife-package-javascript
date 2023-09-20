"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.submitForm = exports.setFormErrors = void 0;
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
    var data = Object.fromEntries(Object.entries(error.data).map(function (_a) {
        var field = _a[0], errors = _a[1];
        if (Array.isArray(errors))
            errors = errors.join('. ');
        return [field, errors];
    }));
    setErrors(data);
}
exports.setFormErrors = setFormErrors;
function submitForm(trigger, query) {
    return function (values, helpers) {
        trigger(values)
            .unwrap()
            .then(query.then)
            .catch(function (error) {
            if (query.catch !== undefined)
                query.catch(error);
            setFormErrors(error, helpers.setErrors);
        })
            .finally(function () {
            if (query.finally !== undefined)
                query.finally();
        });
    };
}
exports.submitForm = submitForm;
