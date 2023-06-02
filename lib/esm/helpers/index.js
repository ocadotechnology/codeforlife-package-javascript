import { openInNewTab, wrap, path } from './general';
import { getSearchParams, stringToBoolean, stringToProperty, valueInOptions, valueMatchesSchema } from './searchParams';
import { insertDividerBetweenElements, overrideComponentsInTheme, getStyleOverrides, includesClassNames } from './materialUI';
// global
export { openInNewTab, wrap, path, insertDividerBetweenElements, overrideComponentsInTheme, getStyleOverrides, includesClassNames };
// Namespace
export var SearchParams = {
    get: getSearchParams,
    cast: {
        toBoolean: stringToBoolean,
        toProperty: stringToProperty
    },
    validate: {
        inOptions: valueInOptions,
        matchesSchema: valueMatchesSchema
    }
};
