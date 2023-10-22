// -----------------------------------------------------------------------------
// Model Types
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// Functions
// -----------------------------------------------------------------------------
export function searchParamsToString(arg) {
    if (arg !== null) {
        var searchParams = Object.entries(arg)
            .filter(function (_a) {
            var _ = _a[0], value = _a[1];
            return value !== undefined;
        })
            .map(function (_a) {
            var key = _a[0], value = _a[1];
            return [key, String(value)];
        });
        if (searchParams.length !== 0) {
            return "?".concat(new URLSearchParams(searchParams).toString());
        }
    }
    return '';
}
export function tagModels(result, type, lookupField) {
    if (lookupField === void 0) { lookupField = 'id'; }
    var data = 'data' in result ? result.data : result;
    return data.map(function (result) { return ({
        type: type,
        id: result[lookupField]
    }); });
}
