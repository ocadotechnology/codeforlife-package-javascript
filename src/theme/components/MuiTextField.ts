import {
  formHelperTextClasses,
  inputBaseClasses,
  inputClasses,
  outlinedInputClasses,
} from "@mui/material"

import type Components from "./_components"

import { includesClassNames } from "../../utils"

const MuiTextField: Components["MuiTextField"] = {
  defaultProps: {
    size: "small",
  },
  styleOverrides: {
    root: ({ ownerState }) => ({
      width: "100%",
      backgroundColor: "transparent",
      [`& > .${inputBaseClasses.root}`]: {
        borderRadius: "0px !important",
      },
      [`& .${outlinedInputClasses.root}.${inputClasses.focused} > fieldset`]: {
        borderColor: "black !important",
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
