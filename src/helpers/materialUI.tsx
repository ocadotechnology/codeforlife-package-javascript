import React from 'react';
import {
  Divider,
  DividerProps,
  ThemeOptions
} from '@mui/material';
import { CommonProps } from '@mui/material/OverridableComponent';

import _components from '../theme/components';

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

export function getStyleOverrides(
  ownerState: Record<string, unknown>,
  componentKey: keyof NonNullable<ThemeOptions['components']>,
  muiClassName: string = 'root',
  components: ThemeOptions['components'] = _components
): object {
  if (components !== undefined) {
    const component = components[componentKey];

    if (component !== undefined &&
      'styleOverrides' in component &&
      typeof component.styleOverrides === 'object' &&
      muiClassName in component.styleOverrides
    ) {
      const muiClass = (component.styleOverrides as Record<string, any>)[muiClassName];

      switch (typeof muiClass) {
        case 'function':
          return muiClass({ ownerState });
        case 'object':
          return muiClass;
      }
    }
  }

  return {};
}

export function includesClassNames(
  props: CommonProps, classNames: string[]
): boolean {
  if (props.className === undefined) return false;
  const _classNames = props.className.split(' ');
  return classNames.every(className =>
    _classNames.includes(className)
  );
}
