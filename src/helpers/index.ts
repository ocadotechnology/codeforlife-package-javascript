import {
  openInNewTab,
  wrap,
  path,
  Path
} from './general';
import {
  getSearchParams,
  stringToBoolean,
  stringToProperty,
  valueInOptions,
  valueMatchesSchema
} from './searchParams';
import {
  insertDividerBetweenElements,
  getStyleOverrides,
  includesClassNames
} from './materialUI';

// global
export {
  openInNewTab,
  wrap,
  path, type Path,
  insertDividerBetweenElements,
  getStyleOverrides,
  includesClassNames
};

// Namespace
export const SearchParams = {
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
