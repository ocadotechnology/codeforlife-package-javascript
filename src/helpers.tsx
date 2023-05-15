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

export function getSearchParams(
  params: Record<string, {
    cast: (value: string) => any,
    isRequired?: boolean
  }>
): object | null {
  const searchParams = useSearchParams()[0];

  if (Object.entries(params).some(([name, { isRequired }]) =>
    isRequired !== false && searchParams.get(name) === null
  )) { return null; }

  return Object.fromEntries(
    Object.entries(params)
      .filter(([name, { isRequired }]) =>
        isRequired !== false || searchParams.get(name) !== null
      )
      .map(([name, { cast }]) =>
        [name, cast(searchParams.get(name) as string)]
      )
  );
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
