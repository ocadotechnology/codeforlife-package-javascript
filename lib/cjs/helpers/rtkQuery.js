"use strict";
// -----------------------------------------------------------------------------
// Model Types
// -----------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapIdsToTag = exports.searchParamsToString = void 0;
// -----------------------------------------------------------------------------
// Functions
// -----------------------------------------------------------------------------
function searchParamsToString(arg) {
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
exports.searchParamsToString = searchParamsToString;
function mapIdsToTag(result, type) {
    return result.data.map(function (_a) {
        var id = _a.id;
        return ({ type: type, id: id });
    });
}
exports.mapIdsToTag = mapIdsToTag;
