import type Components from "./_components"
import { includesClassNames } from "../../utils/theme"

const MuiMenuItem: Components["MuiMenuItem"] = {
  styleOverrides: {
    root: ({ ownerState }) => ({
      ...(includesClassNames(ownerState, ["header"]) && {
        pointerEvents: "none",
        fontWeight: "bold",
      }),
    }),
  },
}

export default MuiMenuItem
