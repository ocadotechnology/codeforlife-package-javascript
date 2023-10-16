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
export function mapIdsToTag(result, type) {
    return result.data.map(function (_a) {
        var id = _a.id;
        return ({ type: type, id: id });
    });
}
