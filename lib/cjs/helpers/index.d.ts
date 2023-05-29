import { openInNewTab, wrap } from './general';
import { getSearchParams, stringToProperty, valueInOptions, valueMatchesSchema } from './searchParams';
import { insertDividerBetweenElements, overrideComponentsInTheme } from './materialUI';
export { openInNewTab, wrap, insertDividerBetweenElements, overrideComponentsInTheme };
export declare const SearchParams: {
    get: typeof getSearchParams;
    cast: {
        toBoolean: (value: string) => any;
        toProperty: typeof stringToProperty;
    };
    validate: {
        inOptions: typeof valueInOptions;
        matchesSchema: typeof valueMatchesSchema;
    };
};
