import type Components from "./_components"
import typography from "../typography"

const MuiInputBase: Components["MuiInputBase"] = {
  styleOverrides: {
    root: {
      backgroundColor: "white",
      marginBottom: 0,
      color: typography.body1?.color,
    },
  },
}

export default MuiInputBase
