import {
  createTheme,
  type PaletteColor,
  type PaletteOptions,
  type PaletteColorOptions,
} from "@mui/material"

import { primary, secondary, tertiary } from "./colors"

// Extend palette to include a custom colors.
declare module "@mui/material/styles" {
  interface CustomPaletteColors {
    tertiary: PaletteColor
    white: PaletteColor
    black: PaletteColor
    teacher: PaletteColor
    student: PaletteColor
    indy: PaletteColor
  }
  interface Palette extends CustomPaletteColors {}
  interface PaletteOptions extends CustomPaletteColors {}
}

export interface PropsColorOverrides {
  tertiary: true
  white: true
  black: true
  teacher: true
  student: true
  indy: true
}

declare module "@mui/material" {
  interface FabPropsColorOverrides extends PropsColorOverrides {}
  interface CardPropsColorOverrides extends PropsColorOverrides {}
  interface ChipPropsColorOverrides extends PropsColorOverrides {}
  interface IconPropsColorOverrides extends PropsColorOverrides {}
  interface AlertPropsColorOverrides extends PropsColorOverrides {}
  interface BadgePropsColorOverrides extends PropsColorOverrides {}
  interface RadioPropsColorOverrides extends PropsColorOverrides {}
  interface AppBarPropsColorOverrides extends PropsColorOverrides {}
  interface ButtonPropsColorOverrides extends PropsColorOverrides {}
  interface SliderPropsColorOverrides extends PropsColorOverrides {}
  interface SwitchPropsColorOverrides extends PropsColorOverrides {}
  interface SvgIconPropsColorOverrides extends PropsColorOverrides {}
  interface CheckboxPropsColorOverrides extends PropsColorOverrides {}
  interface FormLabelPropsColorOverrides extends PropsColorOverrides {}
  interface InputBasePropsColorOverrides extends PropsColorOverrides {}
  interface TextFieldPropsColorOverrides extends PropsColorOverrides {}
  interface IconButtonPropsColorOverrides extends PropsColorOverrides {}
  interface PaginationPropsColorOverrides extends PropsColorOverrides {}
  interface ButtonGroupPropsColorOverrides extends PropsColorOverrides {}
  interface FormControlPropsColorOverrides extends PropsColorOverrides {}
  interface ToggleButtonPropsColorOverrides extends PropsColorOverrides {}
  interface LinearProgressPropsColorOverrides extends PropsColorOverrides {}
  interface PaginationItemPropsColorOverrides extends PropsColorOverrides {}
  interface CircularProgressPropsColorOverrides extends PropsColorOverrides {}
  interface TabsPropsIndicatorColorOverrides extends PropsColorOverrides {}
  interface ToggleButtonGroupPropsColorOverrides extends PropsColorOverrides {}
}

const {
  palette: { augmentColor },
} = createTheme()

const teacher: PaletteColorOptions = {
  main: primary[500],
  contrastText: "#fff",
}

const student: PaletteColorOptions = {
  main: tertiary[500],
  contrastText: "#fff",
}

const indy: PaletteColorOptions = {
  main: secondary[500],
  contrastText: "#000",
}

const palette: PaletteOptions = {
  // primary / teacher
  primary: teacher,
  teacher: augmentColor({ color: teacher }),
  // secondary / indy
  secondary: indy,
  indy: augmentColor({ color: indy }),
  // tertiary / student
  tertiary: augmentColor({ color: student }),
  student: augmentColor({ color: student }),
  // other
  white: augmentColor({ color: { main: "#fff" } }),
  black: augmentColor({ color: { main: "#000" } }),
  info: { main: "#f1ecec" },
  error: { main: "#d50000" },
}

export default palette
