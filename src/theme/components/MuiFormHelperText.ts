import type Components from "./_components"
import { form } from "../typography"

const MuiFormHelperText: Components["MuiFormHelperText"] = {
  styleOverrides: {
    root: {
      ...form,
    },
  },
}

export default MuiFormHelperText
