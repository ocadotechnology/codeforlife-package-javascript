import React from 'react';
import {
  useSearchParams
} from 'react-router-dom';
import {
  Divider,
  DividerProps,
  useTheme,
  createTheme,
  Theme,
  Components,
  ComponentsPropsList
} from '@mui/material';

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

export function stringToBoolean(value: string): boolean {
  return value.toLowerCase() !== 'false' && value !== '0';
}

export function stringToProperty(obj: object): (value: string) => any {
  return (value: string): any => obj[value];
}

export function valueInOptions(options: readonly any[]): (value: any) => boolean {
  return (value: any): boolean => options.includes(value);
}

export function getSearchParams<T>(
  params: Record<string, {
    cast?: (value: string) => any,
    validate?: (value: any) => boolean,
    isRequired?: boolean
  }>
): null | T {
  const searchParams = useSearchParams()[0];

  let entries = Object.entries(params);

  if (entries.some(([name, { isRequired }]) =>
    isRequired !== false && searchParams.get(name) === null
  )) { return null; }

  entries = entries.filter(([name, { isRequired }]) =>
    isRequired !== false || searchParams.get(name) !== null
  );

  if (entries.length === 0) { return null; }

  try {
    return Object.fromEntries(entries.map(([name, { cast, validate }]) => {
      const stringValue = searchParams.get(name) as string;
      const value = (cast !== undefined) ? cast(stringValue) : stringValue;
      if (validate !== undefined && !validate(value)) { throw Error(); }
      return [name, value];
    })) as T;
  } catch (error) { return null; }
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
