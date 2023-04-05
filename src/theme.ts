import { PaletteColor } from '@mui/material';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { red, common } from '@mui/material/colors';

// Extend palette to include a custom colors.
declare module '@mui/material/styles' {
  interface CustomPaletteColors {
    tertiary: PaletteColor;
    white: PaletteColor;
    black: PaletteColor;
  }
  interface Palette extends CustomPaletteColors { }
  interface PaletteOptions extends CustomPaletteColors { }
}

export interface PropsColorOverrides {
  tertiary: true;
  white: true;
  black: true;
}

declare module '@mui/material' {
  interface FabPropsColorOverrides extends PropsColorOverrides { }
  interface CardPropsColorOverrides extends PropsColorOverrides { }
  interface ChipPropsColorOverrides extends PropsColorOverrides { }
  interface IconPropsColorOverrides extends PropsColorOverrides { }
  interface AlertPropsColorOverrides extends PropsColorOverrides { }
  interface BadgePropsColorOverrides extends PropsColorOverrides { }
  interface RadioPropsColorOverrides extends PropsColorOverrides { }
  interface AppBarPropsColorOverrides extends PropsColorOverrides { }
  interface ButtonPropsColorOverrides extends PropsColorOverrides { }
  interface SliderPropsColorOverrides extends PropsColorOverrides { }
  interface SwitchPropsColorOverrides extends PropsColorOverrides { }
  interface SvgIconPropsColorOverrides extends PropsColorOverrides { }
  interface CheckboxPropsColorOverrides extends PropsColorOverrides { }
  interface FormLabelPropsColorOverrides extends PropsColorOverrides { }
  interface InputBasePropsColorOverrides extends PropsColorOverrides { }
  interface TextFieldPropsColorOverrides extends PropsColorOverrides { }
  interface IconButtonPropsColorOverrides extends PropsColorOverrides { }
  interface PaginationPropsColorOverrides extends PropsColorOverrides { }
  interface ButtonGroupPropsColorOverrides extends PropsColorOverrides { }
  interface FormControlPropsColorOverrides extends PropsColorOverrides { }
  interface ToggleButtonPropsColorOverrides extends PropsColorOverrides { }
  interface LinearProgressPropsColorOverrides extends PropsColorOverrides { }
  interface PaginationItemPropsColorOverrides extends PropsColorOverrides { }
  interface CircularProgressPropsColorOverrides extends PropsColorOverrides { }
  interface TabsPropsIndicatorColorOverrides extends PropsColorOverrides { }
  interface ToggleButtonGroupPropsColorOverrides extends PropsColorOverrides { }
}

const { palette } = createTheme();

const theme = responsiveFontSizes(createTheme({
  palette: {
    primary: {
      main: '#e0004d',
      light: '#fa1664'
    },
    secondary: {
      main: '#00a3e0'
    },
    tertiary: palette.augmentColor({
      color: {
        main: '#ffd23b'
      }
    }),
    white: palette.augmentColor({
      color: {
        main: common.white
      }
    }),
    black: palette.augmentColor({
      color: {
        main: common.black
      }
    }),
    info: {
      main: '#f1ecec'
    },
    error: {
      main: red.A700
    }
  },
  components: {
    MuiGrid2: {
      defaultProps: {
        disableEqualOverflow: true
        // padding: 0 // TODO: normalize padding.
      },
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.className === 'flex-center' && {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }),
          ...(ownerState.className === 'flex-center-x' && {
            display: 'flex',
            justifyContent: 'center'
          }),
          ...(ownerState.className === 'flex-center-y' && {
            display: 'flex',
            alignItems: 'center'
          })
        })
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          whiteSpace: 'nowrap',
          minWidth: 'max-content',
          width: 'fit-content'
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          width: '100%',
          backgroundColor: 'white'
        }
      }
    },
    MuiLink: {
      defaultProps: {
        underline: 'hover'
      },
      styleOverrides: {
        root: {
          cursor: 'pointer'
        }
      }
    }
  }
}));

export default theme;
