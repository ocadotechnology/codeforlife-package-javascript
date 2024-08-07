import {
  filledInputClasses,
  formHelperTextClasses,
  formLabelClasses,
  inputBaseClasses,
  inputClasses,
  outlinedInputClasses,
  svgIconClasses,
} from "@mui/material"

import { includesClassNames } from "../../utils/theme"
import palette from "../palette"
import typography from "../typography"
import type Components from "./_components"

const MuiTextField: Components["MuiTextField"] = {
  defaultProps: {
    size: "small",
    variant: "filled",
  },
  styleOverrides: {
    root: ({ ownerState }) => ({
      width: "100%",
      backgroundColor: "transparent",
      [`& > .${inputBaseClasses.root}`]: {
        border: "1px solid black !important",
        borderRadius: "0px !important",
        backgroundColor: "white !important",
      },
      [`& > .${inputBaseClasses.root}.${inputBaseClasses.error}`]: {
        // @ts-expect-error
        border: `1px solid ${palette.error!.main} !important`,
      },
      [`& .${outlinedInputClasses.root}.${inputClasses.focused} > fieldset`]: {
        borderColor: "black !important",
      },
      [`.${svgIconClasses.root}`]: {
        color: `${typography.body1?.color} !important`,
      },
      [`.${filledInputClasses.root}::after`]: {
        borderColor: `${typography.body1?.color} !important`,
      },
      [`.${formLabelClasses.root}`]: {
        color: `${typography.body1?.color} !important`,
      },
      [`.${formHelperTextClasses.root}`]: {
        fontSize: "12px !important",
      },
      ...(ownerState.multiline === true && {
        ...((includesClassNames(ownerState, ["resize"]) ||
          includesClassNames(ownerState, ["resize-both"])) && {
          width: "auto",
          [`.${inputClasses.inputMultiline}`]: {
            resize: "both",
          },
        }),
        ...(includesClassNames(ownerState, ["resize-horizontal"]) && {
          width: "auto",
          [`.${inputClasses.inputMultiline}`]: {
            resize: "horizontal",
          },
        }),
        ...(includesClassNames(ownerState, ["resize-vertical"]) && {
          [`.${inputClasses.inputMultiline}`]: {
            resize: "vertical",
          },
        }),
      }),
    }),
  },
}

export default MuiTextField
