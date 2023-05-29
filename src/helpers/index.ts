import {
  openInNewTab,
  wrap
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
  overrideComponentsInTheme
} from './materialUI';

// global
export {
  openInNewTab,
  wrap,
  insertDividerBetweenElements,
  overrideComponentsInTheme
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
