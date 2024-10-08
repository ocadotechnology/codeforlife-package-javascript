import { typographyClasses, tableCellClasses } from "@mui/material"

import { includesClassNames } from "../../utils/theme"
import type Components from "./_components"

const MuiTableHead: Components["MuiTableHead"] = {
  styleOverrides: {
    root: ({ ownerState }) => ({
      backgroundColor: "#6E7171",
      ...(includesClassNames(ownerState, ["light"]) && {
        backgroundColor: "#9A9C9E",
      }),
      [`.${typographyClasses.root}`]: {
        color: "white",
        fontWeight: 600,
        marginBottom: 0,
      },
      [`.${tableCellClasses.head}`]: {
        color: "white",
        fontWeight: 600,
      },
    }),
  },
}

export default MuiTableHead
