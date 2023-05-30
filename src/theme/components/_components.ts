import {
  ThemeOptions,
  ComponentsPropsList,
  CSSInterpolation
} from '@mui/material';
import { CommonProps } from '@mui/material/OverridableComponent';

export default interface Components
  extends NonNullable<ThemeOptions['components']> { }

export type OwnerState<ComponentName extends keyof ComponentsPropsList> = (
  ComponentsPropsList[ComponentName] & Record<string, unknown>
);

export function getFlexStyleOverrides(props: CommonProps): object {
  const styleOverrides: CSSInterpolation = {};

  if (props.className?.startsWith('flex')) {
    styleOverrides.display = 'flex';
    switch (props.className) {
      case 'flex-center':
        styleOverrides.justifyContent = 'center';
        styleOverrides.alignItems = 'center';
        break;
      case 'flex-center-x':
        styleOverrides.justifyContent = 'center';
        styleOverrides.alignItems = 'start';
        break;
      case 'flex-center-y':
        styleOverrides.justifyContent = 'start';
        styleOverrides.alignItems = 'center';
        break;
      case 'flex-end':
        styleOverrides.justifyContent = 'end';
        styleOverrides.alignItems = 'end';
        break;
      case 'flex-end-x':
        styleOverrides.justifyContent = 'end';
        styleOverrides.alignItems = 'start';
        break;
      case 'flex-end-y':
        styleOverrides.justifyContent = 'start';
        styleOverrides.alignItems = 'end';
        break;
    }
  }

  return styleOverrides;
}

export function getTextStyleOverrides(props: CommonProps): object {
  const styleOverrides: CSSInterpolation = {};

  switch (props.className) {
    case 'nowrap-ellipsis':
      styleOverrides.whiteSpace = 'nowrap';
      styleOverrides.overflow = 'hidden';
      styleOverrides.textOverflow = 'ellipsis';
      break;
  }

  return styleOverrides;
}
