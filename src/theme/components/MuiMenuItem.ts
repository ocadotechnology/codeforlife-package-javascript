import { includesClassNames } from "../../helpers"
import Components from "./_components"

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
