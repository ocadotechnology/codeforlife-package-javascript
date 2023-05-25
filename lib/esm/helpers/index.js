import { openInNewTab, wrap } from './general';
import { getSearchParams, stringToBoolean, stringToProperty, valueInOptions } from './searchParams';
import { insertDividerBetweenElements, overrideComponentsInTheme } from './materialUI';
// global
export { openInNewTab, wrap, insertDividerBetweenElements, overrideComponentsInTheme };
// Namespace
export var SearchParams = {
    get: getSearchParams,
    cast: {
        toBoolean: stringToBoolean,
        toProperty: stringToProperty
    },
    validate: {
        inOptions: valueInOptions
    }
};
