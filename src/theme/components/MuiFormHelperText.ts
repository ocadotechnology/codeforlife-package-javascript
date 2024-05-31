import { form } from "../typography"
import type Components from "./_components"

const MuiFormHelperText: Components["MuiFormHelperText"] = {
  styleOverrides: {
    root: {
      ...form,
    },
  },
}

export default MuiFormHelperText
