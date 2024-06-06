import {
  type ThemeOptions,
  createTheme,
  responsiveFontSizes,
} from "@mui/material"

import palette, { type PropsColorOverrides } from "./palette"
import components from "./components"
import ThemedBox, { type ThemedBoxProps } from "./ThemedBox"
import spacing from "./spacing"
import typography from "./typography"

export {
  // Needed to modify '@mui/material' module declarations.
  type PropsColorOverrides,
  ThemedBox,
  type ThemedBoxProps,
}

export const themeOptions: ThemeOptions = {
  palette,
  components,
  spacing,
  typography,
}

const theme = responsiveFontSizes(createTheme(themeOptions))

export default theme
