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
  ThemeOptions,
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

export function getSearchParams(
  params: Record<string, {
    cast: (value: string) => any,
    isRequired?: boolean
  }>
): object | null {
  const searchParams = useSearchParams()[0];

  if (Object.entries(params).some(([name, { isRequired }]) =>
    isRequired === true && searchParams.get(name) === null
  )) { return null; }

  return Object.fromEntries(
    Object.entries(params)
      .filter(([name, { isRequired }]) =>
        isRequired === true || searchParams.get(name) !== null
      )
      .map(([name, { cast }]) =>
        [name, cast(searchParams.get(name) as string)]
      )
  );
}

export function overrideComponentsRootStyles(
  keys: Array<keyof NonNullable<ThemeOptions['components']>>,
  rootStyleOverrides: Record<string, any>,
  theme?: Theme
): Theme {
  theme = theme ?? useTheme<Theme>();

  let components = theme.components ?? {};
  components = {
    ...components,
    ...Object.fromEntries(keys.map(key => {
      let component = components[key] ?? {};

      interface RootArgs { ownerState: ComponentsPropsList[typeof key] };

      const styleOverrides: {
        root?: object | (({ ownerState }: RootArgs) => object)
      } = ('styleOverrides' in component) ? component.styleOverrides as object : {};

      component = {
        ...component,
        styleOverrides: {
          ...styleOverrides,
          root: ({ ownerState }: RootArgs) => ({
            ...(typeof styleOverrides.root === 'function' &&
              styleOverrides.root({ ownerState })
            ),
            ...(typeof styleOverrides.root === 'object' &&
              styleOverrides.root
            ),
            ...rootStyleOverrides
          })
        }
      };

      return [key, component];
    }))
  };

  return createTheme(theme, { components });
};
