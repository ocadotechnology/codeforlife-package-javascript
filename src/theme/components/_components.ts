import {
  ThemeOptions,
  ComponentsPropsList,
  CSSInterpolation
} from '@mui/material';
import { CommonProps } from '@mui/material/OverridableComponent';

import { includesClassNames } from '../../helpers';
import typography from '../typography';

export default interface Components
  extends NonNullable<ThemeOptions['components']> { }

export type OwnerState<ComponentName extends keyof ComponentsPropsList> = (
  ComponentsPropsList[ComponentName] & Record<string, unknown>
);

export function getFlexStyleOverrides(props: CommonProps): object {
  const styleOverrides: CSSInterpolation = {};

  if (props.className?.split(' ').some(className =>
    className.startsWith('flex')
  )) {
    styleOverrides.display = 'flex';
    if (includesClassNames(props, ['flex-center'])) {
      styleOverrides.justifyContent = 'center';
      styleOverrides.alignItems = 'center';
    } else if (includesClassNames(props, ['flex-center-x'])) {
      styleOverrides.justifyContent = 'center';
      styleOverrides.alignItems = 'start';
    } else if (includesClassNames(props, ['flex-center-y'])) {
      styleOverrides.justifyContent = 'start';
      styleOverrides.alignItems = 'center';
    } else if (includesClassNames(props, ['flex-end'])) {
      styleOverrides.justifyContent = 'end';
      styleOverrides.alignItems = 'end';
    } else if (includesClassNames(props, ['flex-end-x'])) {
      styleOverrides.justifyContent = 'end';
      styleOverrides.alignItems = 'start';
    } else if (includesClassNames(props, ['flex-end-y'])) {
      styleOverrides.justifyContent = 'start';
      styleOverrides.alignItems = 'end';
    }
  }

  return styleOverrides;
}

export function getFontStyleOverrides(props: CommonProps): object {
  let styleOverrides: CSSInterpolation = {};

  if (includesClassNames(props, ['nowrap-ellipsis'])) {
    styleOverrides.whiteSpace = 'nowrap';
    styleOverrides.overflow = 'hidden';
    styleOverrides.textOverflow = 'ellipsis';
  }

  ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body1', 'body2'
  ].forEach(className => {
    if (
      className in typography &&
      includesClassNames(props, [className])
    ) {
      styleOverrides = typography[className];
    }
  });

  return styleOverrides;
}
