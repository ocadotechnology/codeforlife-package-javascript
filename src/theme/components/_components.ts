import {
  type CSSObject,
  type ComponentsOverrides,
  type ComponentsPropsList,
  type Theme,
  type ThemeOptions,
} from "@mui/material"
import { type CommonProps } from "@mui/material/OverridableComponent"
import { type OverridesStyleRules } from "@mui/material/styles/overrides"

import {
  getClassNames,
  includesClassNames,
  matchClassNames,
} from "../../utils/theme"
import typography from "../typography"

export default interface Components
  extends NonNullable<ThemeOptions["components"]> {}

export type StyleOverridesWithRoot<
  Component extends keyof ComponentsOverrides<Theme>,
> = ComponentsOverrides<Theme>[Component] & {
  root: OverridesStyleRules<"root", Component, Theme>["root"]
}

export type OwnerState<ComponentName extends keyof ComponentsPropsList> =
  ComponentsPropsList[ComponentName] & Record<string, unknown>

export function getFlexStyleOverrides(props: CommonProps): CSSObject {
  const styleOverrides: CSSObject = {}

  const classNames = getClassNames(props)

  if (classNames.some(className => className.startsWith("flex-"))) {
    styleOverrides.display = "flex"
    if (includesClassNames(classNames, ["flex-center"])) {
      styleOverrides.justifyContent = "center"
      styleOverrides.alignItems = "center"
    } else if (includesClassNames(classNames, ["flex-center-x"])) {
      styleOverrides.justifyContent = "center"
      styleOverrides.alignItems = "start"
    } else if (includesClassNames(classNames, ["flex-center-y"])) {
      styleOverrides.justifyContent = "start"
      styleOverrides.alignItems = "center"
    } else if (includesClassNames(classNames, ["flex-end"])) {
      styleOverrides.justifyContent = "end"
      styleOverrides.alignItems = "end"
    } else if (includesClassNames(classNames, ["flex-end-x"])) {
      styleOverrides.justifyContent = "end"
      styleOverrides.alignItems = "start"
    } else if (includesClassNames(classNames, ["flex-end-y"])) {
      styleOverrides.justifyContent = "start"
      styleOverrides.alignItems = "end"
    }
  }

  return styleOverrides
}

export function getFontStyleOverrides(props: CommonProps): CSSObject {
  let styleOverrides: CSSObject = {}

  const classNames = getClassNames(props)

  if (includesClassNames(classNames, ["nowrap-ellipsis"])) {
    styleOverrides.whiteSpace = "nowrap"
    styleOverrides.overflow = "hidden"
    styleOverrides.textOverflow = "ellipsis"
  }

  ;["h1", "h2", "h3", "h4", "h5", "h6", "body1", "body2"]
    .filter(className => className in typography)
    .forEach(className => {
      const typographyClass = typography[className]

      if (includesClassNames(classNames, [className])) {
        styleOverrides = { ...styleOverrides, ...typographyClass }
      }

      matchClassNames(classNames, new RegExp(`^${className}-(\\w+)$`)).forEach(
        match => {
          const prop = match[1]
          if (prop in typographyClass) {
            styleOverrides[prop] = typographyClass[prop]
          }
        },
      )
    })

  return styleOverrides
}
