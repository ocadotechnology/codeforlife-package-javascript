import { openInNewTab, wrap, path, Path } from './general';
import { getSearchParams, stringToProperty, valueInOptions, valueMatchesSchema } from './searchParams';
import { insertDividerBetweenElements, getStyleOverrides, includesClassNames } from './materialUI';
export { openInNewTab, wrap, path, type Path, insertDividerBetweenElements, getStyleOverrides, includesClassNames };
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
