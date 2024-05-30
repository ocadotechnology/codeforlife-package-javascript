import { ThemeOptions, createTheme, responsiveFontSizes } from "@mui/material"

import palette, { PropsColorOverrides } from "./palette"
import components from "./components"
import ThemedBox, { ThemedBoxProps } from "./ThemedBox"
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
