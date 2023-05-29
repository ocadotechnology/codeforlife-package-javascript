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
  overrideComponentsInTheme,
  getStyleOverrides
} from './materialUI';

// global
export {
  openInNewTab,
  wrap,
  insertDividerBetweenElements,
  overrideComponentsInTheme,
  getStyleOverrides
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
