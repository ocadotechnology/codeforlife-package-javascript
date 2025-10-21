import {
  type ThemeOptions,
  createTheme,
  responsiveFontSizes,
} from "@mui/material"

import components from "./components"
import palette from "./palette"
import spacing from "./spacing"
import typography from "./typography"

export * as colors from "./colors"
export * from "./palette"
export * from "./ThemedBox"
export { default as ThemedBox } from "./ThemedBox"

export const themeOptions: ThemeOptions = {
  palette,
  components,
  spacing,
  typography,
}

export const theme = responsiveFontSizes(createTheme(themeOptions))
