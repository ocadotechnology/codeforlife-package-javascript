import { typographyClasses } from "@mui/material"

import { form } from "../typography"
import type Components from "./_components"

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
