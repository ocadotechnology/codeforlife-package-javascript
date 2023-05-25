"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.valueInOptions = exports.stringToProperty = exports.stringToBoolean = exports.getSearchParams = void 0;
var react_router_dom_1 = require("react-router-dom");
function getSearchParams(params) {
    var searchParams = (0, react_router_dom_1.useSearchParams)()[0];
    var entries = Object.entries(params);
    if (entries.some(function (_a) {
        var name = _a[0], isRequired = _a[1].isRequired;
        return isRequired !== false && searchParams.get(name) === null;
    })) {
        return null;
    }
    entries = entries.filter(function (_a) {
        var name = _a[0], isRequired = _a[1].isRequired;
        return isRequired !== false || searchParams.get(name) !== null;
    });
    if (entries.length === 0) {
        return null;
    }
    try {
        return Object.fromEntries(entries.map(function (_a) {
            var name = _a[0], _b = _a[1], cast = _b.cast, validate = _b.validate;
            var stringValue = searchParams.get(name);
            var value = (cast !== undefined) ? cast(stringValue) : stringValue;
            if (validate !== undefined && !validate(value)) {
                throw Error();
            }
            return [name, value];
        }));
    }
    catch (error) {
        return null;
    }
}
exports.getSearchParams = getSearchParams;
// Cast functions
var stringToBoolean = function (value) {
    return value.toLowerCase() !== 'false' && value !== '0';
};
exports.stringToBoolean = stringToBoolean;
function stringToProperty(obj) {
    return function (value) { return obj[value]; };
}
exports.stringToProperty = stringToProperty;
// Validate functions
function valueInOptions(options) {
    return function (value) { return options.includes(value); };
}
exports.valueInOptions = valueInOptions;
