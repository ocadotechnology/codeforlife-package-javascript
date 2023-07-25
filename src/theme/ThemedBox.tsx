import React from 'react';
import {
  Box,
  BoxProps,
  ThemeProvider,
  SxProps,
  buttonClasses,
  PaletteColor,
  responsiveFontSizes,
  createTheme,
  ThemeOptions,
  CSSObject
} from '@mui/material';
import { CommonProps } from '@mui/material/OverridableComponent';
import {
  Circle as CircleIcon,
  Hexagon as HexagonIcon
} from '@mui/icons-material';

import { themeOptions } from '.';
import palette from './palette';
import {
  getStyleOverrides,
  includesClassNames
} from '../helpers';
import Components from './components/_components';

export interface ThemedBoxProps extends BoxProps {
  options?: ThemeOptions;
  withShapes?: boolean;
  userType: 'teacher' | 'student' | 'independent';
}

const ThemedBox: React.FC<ThemedBoxProps> = ({
  options = themeOptions,
  withShapes = false,
  userType,
  children,
  sx,
  ...otherBoxProps
}) => {
  let bgcolor: PaletteColor;
  let circleColor: 'primary' | 'secondary' | 'tertiary';
  let hexagonColor: 'primary' | 'secondary' | 'tertiary';
  switch (userType) {
    case 'teacher':
      bgcolor = palette.primary as PaletteColor;
      circleColor = 'tertiary';
      hexagonColor = 'secondary';
      break;
    case 'student':
      bgcolor = palette.tertiary;
      circleColor = 'secondary';
      hexagonColor = 'primary';
      break;
    case 'independent':
      bgcolor = palette.secondary as PaletteColor;
      circleColor = 'primary';
      hexagonColor = 'tertiary';
      break;
  }

  const commonIconSxProps: SxProps = {
    display: { xs: 'none', md: 'block' },
    fontSize: '180px',
    position: 'absolute'
  };

  const fontStyleOverrides = {
    color: bgcolor.contrastText,
    textDecorationColor: bgcolor.contrastText
  };

  function overrideStyles(
    ownerState: CommonProps,
    styleOverrides: CSSObject,
    componentKey: keyof Components,
    muiClassName: string = 'root'
  ): CSSObject {
    return {
      // Get the original styles.
      ...getStyleOverrides(
        ownerState,
        componentKey,
        muiClassName,
        options.components
      ),
      // Override styles unless the class name 'no-override' is set.
      ...(!includesClassNames(ownerState, ['no-override']) && styleOverrides)
    };
  }

  const theme = responsiveFontSizes(createTheme({
    ...options,
    components: {
      ...options.components,
      MuiTypography: {
        ...options.components?.MuiTypography,
        styleOverrides: {
          ...options.components?.MuiTypography?.styleOverrides,
          root: ({ ownerState }) => overrideStyles(ownerState, {
            ...fontStyleOverrides
          }, 'MuiTypography')
        }
      },
      MuiFormHelperText: {
        ...options.components?.MuiFormHelperText,
        styleOverrides: {
          ...options.components?.MuiFormHelperText?.styleOverrides,
          root: ({ ownerState }) => overrideStyles(ownerState, {
            ...fontStyleOverrides
          }, 'MuiFormHelperText')
        }
      },
      MuiLink: {
        ...options.components?.MuiLink,
        styleOverrides: {
          ...options.components?.MuiLink?.styleOverrides,
          root: ({ ownerState }) => overrideStyles(ownerState, {
            ...fontStyleOverrides
          }, 'MuiLink')
        }
      },
      MuiButton: {
        ...options.components?.MuiButton,
        styleOverrides: {
          ...options.components?.MuiButton?.styleOverrides,
          contained: ({ ownerState }) => overrideStyles(ownerState, {
            ...(userType === 'independent' && {
              backgroundColor: 'white',
              '&:hover': {
                backgroundColor: '#f6f5f5',
                boxShadow: [
                  '0px 6px 10px 0px rgba(0, 0, 0, 0.14)',
                  '0px 1px 18px 0px rgba(0, 0, 0, 0.12)',
                  '0px 3px 5px 0px rgba(0, 0, 0, 0.2);'
                ].join()
              },
              [`&.${buttonClasses.disabled}`]: {
                backgroundColor: 'white',
                color: bgcolor.contrastText
              }
            })
          }, 'MuiButton', 'contained'),
          outlined: ({ ownerState }) => overrideStyles(ownerState, {
            ...fontStyleOverrides,
            border: `2px solid ${bgcolor.contrastText}`,
            '&:hover': {
              border: `2px solid ${bgcolor.contrastText}`,
              backgroundColor: 'transparent',
              textDecoration: 'underline'
            }
          }, 'MuiButton', 'outlined')
        }
      },
      MuiCheckbox: {
        ...options.components?.MuiCheckbox,
        styleOverrides: {
          ...options.components?.MuiCheckbox?.styleOverrides,
          root: ({ ownerState }) => overrideStyles(ownerState, {
            color: `${bgcolor.contrastText} !important`
          }, 'MuiCheckbox')
        }
      },
      MuiSvgIcon: {
        ...options.components?.MuiSvgIcon,
        styleOverrides: {
          ...options.components?.MuiSvgIcon?.styleOverrides,
          root: ({ ownerState }) => overrideStyles(ownerState, {
            '&.checkbox-error': {
              color: `${bgcolor.contrastText} !important`
            }
          }, 'MuiSvgIcon')
        }
      }
    }
  }));

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          ...sx,
          ...(withShapes && {
            paddingY: { xs: 2, sm: 3, md: 5 },
            paddingX: { xs: 2, sm: 5, md: 10 },
            marginX: { md: '100px' }
          }),
          bgcolor: (userType === 'teacher') ? bgcolor.light : bgcolor.main,
          alignItems: 'center',
          position: 'relative'
        }}
        {...otherBoxProps}
      >
        {withShapes && <>
          <CircleIcon
            color={circleColor}
            sx={{
              ...commonIconSxProps,
              top: '5%',
              left: '0%',
              transform: 'translate(-60%, 0%)'
            }}
          />
          <HexagonIcon
            color={hexagonColor}
            sx={{
              ...commonIconSxProps,
              bottom: '5%',
              right: '0%',
              transform: 'translate(60%, 0%) rotate(90deg)'
            }}
          />
        </>}
        {children}
      </Box>
    </ThemeProvider>
  );
};

export default ThemedBox;
