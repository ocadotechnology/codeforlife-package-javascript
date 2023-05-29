import {
  ThemeOptions,
  PaletteColor,
  createTheme
} from '@mui/material';
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

const { palette: { augmentColor } } = createTheme();

const palette: ThemeOptions['palette'] = {
  primary: {
    main: '#e0004d',
    light: '#fa1664',
    contrastText: common.white
  },
  secondary: {
    main: '#00a3e0',
    light: '#08bafc',
    contrastText: common.white
  },
  tertiary: augmentColor({
    color: {
      main: '#ffc709',
      light: '#ffd23b',
      contrastText: common.black
    }
  }),
  white: augmentColor({
    color: {
      main: common.white
    }
  }),
  black: augmentColor({
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
};

export default palette;
