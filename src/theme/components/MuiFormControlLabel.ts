import { typographyClasses } from "@mui/material"

import type Components from "./_components"
import { form } from "../typography"

const MuiFormControlLabel: Components["MuiFormControlLabel"] = {
  styleOverrides: {
    root: {
      [`.${typographyClasses.root}`]: {
        ...form,
        marginBottom: 0,
      },
      margin: 0,
    },
  },
}

export default MuiFormControlLabel
