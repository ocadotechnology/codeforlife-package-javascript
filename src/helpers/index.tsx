import React from 'react';
import {
  Divider,
  DividerProps,
  useTheme,
  createTheme,
  Theme,
  Components,
  ComponentsPropsList
} from '@mui/material';

import {
  getSearchParams,
  stringToBoolean,
  stringToProperty,
  valueInOptions
} from './searchParams';

export const SearchParams = {
  get: getSearchParams,
  cast: {
    toBoolean: stringToBoolean,
    toProperty: stringToProperty
  },
  validate: {
    inOptions: valueInOptions
  }
};

export function openInNewTab(url: string, target = '_blank'): void {
  window.open(url, target);
}

export function insertDividerBetweenElements({
  elements,
  dividerProps
}: {
  elements: React.ReactElement[],
  dividerProps?: DividerProps
}): React.ReactElement[] {
  return elements.map((element, index) => <>
    {element}
    {index !== elements.length - 1
      ? <Divider {...dividerProps} />
      : undefined
    }
  </>);
}

export function overrideComponentsInTheme(
  componentOverrides: Components<Omit<Theme, 'components'>>,
  theme?: Theme
): Theme {
  theme = theme ?? useTheme<Theme>();

  let components = theme.components ?? {};
  components = {
    ...components,
    ...Object.fromEntries(Object.keys(componentOverrides)
      .map((key: keyof Components<Omit<Theme, 'components'>>) => {
        const component = components[key] ?? {};
        const componentOverride = componentOverrides[key] ?? {};

        interface RootFunctionArgs {
          ownerState: ComponentsPropsList[typeof key]
        }
        interface StyleOverrides {
          root?: object | (({ ownerState }: RootFunctionArgs) => object)
        }

        const componentStyleOverrides: StyleOverrides = ('styleOverrides' in component)
          ? component.styleOverrides as object
          : {};
        const componentOverrideStyleOverrides: StyleOverrides = ('styleOverrides' in componentOverride)
          ? componentOverride.styleOverrides as object
          : {};

        return [key, {
          ...component,
          ...componentOverride,
          styleOverrides: {
            ...componentStyleOverrides,
            ...componentOverrideStyleOverrides,
            root: ({ ownerState }: RootFunctionArgs) => ({
              ...(typeof componentStyleOverrides.root === 'function' &&
                componentStyleOverrides.root({ ownerState })
              ),
              ...(typeof componentStyleOverrides.root === 'object' &&
                componentStyleOverrides.root
              ),
              ...(typeof componentOverrideStyleOverrides.root === 'function' &&
                componentOverrideStyleOverrides.root({ ownerState })
              ),
              ...(typeof componentOverrideStyleOverrides.root === 'object' &&
                componentOverrideStyleOverrides.root
              )
            })
          }
        }];
      }))
  };

  return createTheme(theme, { components });
};

export function wrap(
  newFn: {
    before?: (...args: any[]) => void,
    after?: (...args: any[]) => void
  },
  fn?: (...args: any[]) => any
): (...args: any[]) => any {
  return (...args) => {
    if (newFn.before !== undefined) {
      newFn.before(...args);
    }
    let value;
    if (fn !== undefined) {
      value = fn(...args);
    }
    if (newFn.after !== undefined) {
      newFn.after(...args);
    }
    return value;
  };
}
