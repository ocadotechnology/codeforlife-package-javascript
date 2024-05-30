import { includesClassNames } from "../../helpers"
import Components from "./_components"

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
