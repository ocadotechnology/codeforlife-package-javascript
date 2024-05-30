import typography from "../typography"
import Components from "./_components"

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
