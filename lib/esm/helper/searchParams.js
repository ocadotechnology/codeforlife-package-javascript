import { useSearchParams } from 'react-router-dom';
export function getSearchParams(params) {
    var searchParams = useSearchParams()[0];
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
// Cast functions
export var stringToBoolean = function (value) {
    return value.toLowerCase() !== 'false' && value !== '0';
};
export function stringToProperty(obj) {
    return function (value) { return obj[value]; };
}
// Validate functions
export function valueInOptions(options) {
    return function (value) { return options.includes(value); };
}
