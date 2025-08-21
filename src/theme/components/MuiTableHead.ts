import { tableCellClasses, typographyClasses } from "@mui/material"

import type Components from "./_components"
import { includesClassNames } from "../../utils/theme"

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
