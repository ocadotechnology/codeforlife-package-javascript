import type Components from "./_components"
import { includesClassNames } from "../../utils/theme"

const MuiTableBody: Components["MuiTableBody"] = {
  styleOverrides: {
    root: ({ ownerState }) => ({
      backgroundColor: "#F1ECEC",
      ...(includesClassNames(ownerState, ["text"]) && {
        backgroundColor: "white",
      }),
    }),
  },
}

export default MuiTableBody
