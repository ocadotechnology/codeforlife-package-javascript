import typography from "../typography"
import Components from "./_components"

const MuiInputAdornment: Components["MuiInputAdornment"] = {
  styleOverrides: {
    root: {
      color: typography.body1?.color,
    },
  },
}

export default MuiInputAdornment
