import { Divider, type DividerProps, type ThemeOptions } from "@mui/material"
import { type CommonProps } from "@mui/material/OverridableComponent"
import { type ReactElement } from "react"

import _components from "../theme/components"

export function insertDividerBetweenElements({
  elements,
  dividerProps,
}: {
  elements: ReactElement[]
  dividerProps?: DividerProps
}): ReactElement[] {
  return elements.map((element, index) => (
    <>
      {element}
      {index !== elements.length - 1 ? (
        <Divider {...dividerProps} />
      ) : undefined}
    </>
  ))
}

export function getStyleOverrides(
  ownerState: CommonProps,
  componentKey: keyof NonNullable<ThemeOptions["components"]>,
  muiClassName: string = "root",
  components: ThemeOptions["components"] = _components,
): object {
  if (components !== undefined) {
    const component = components[componentKey]

    if (
      component !== undefined &&
      "styleOverrides" in component &&
      typeof component.styleOverrides === "object" &&
      muiClassName in component.styleOverrides
    ) {
      const muiClass = (component.styleOverrides as Record<string, any>)[
        muiClassName
      ] as object

      switch (typeof muiClass) {
        case "function":
          // eslint-disable-next-line @typescript-eslint/no-unsafe-call
          return muiClass({ ownerState }) as object
        case "object":
          return muiClass
      }
    }
  }

  return {}
}

export function getClassNames(props: CommonProps): string[] {
  return props.className?.split(" ") ?? []
}

export function includesClassNames(
  propsOrClassNames: CommonProps | string[],
  includes: string[],
): boolean {
  const classNames = Array.isArray(propsOrClassNames)
    ? propsOrClassNames
    : getClassNames(propsOrClassNames)

  return includes.every(className => classNames.includes(className))
}

export function matchClassNames(
  propsOrClassNames: CommonProps | string[],
  pattern: string | RegExp,
): RegExpMatchArray[] {
  const classNames = Array.isArray(propsOrClassNames)
    ? propsOrClassNames
    : getClassNames(propsOrClassNames)

  return classNames
    .map(className => className.match(pattern))
    .filter(match => match !== null)
    .map(match => match)
}
