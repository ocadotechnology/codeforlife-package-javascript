"use strict";
// -----------------------------------------------------------------------------
// Model Types
// -----------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
exports.tagData = exports.searchParamsToString = void 0;
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
function tagData(result, type, lookupField) {
    if (lookupField === void 0) { lookupField = 'id'; }
    var data = 'data' in result ? result.data : result;
    return data.map(function (result) { return ({
        type: type,
        id: result[lookupField]
    }); });
}
exports.tagData = tagData;
