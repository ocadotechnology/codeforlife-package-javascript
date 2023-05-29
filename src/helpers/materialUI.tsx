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
}