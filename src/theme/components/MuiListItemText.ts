import { listItemTextClasses } from "@mui/material"

import type Components from "./_components"
import { includesClassNames } from "../../utils/theme"

const MuiListItemText: Components["MuiListItemText"] = {
  styleOverrides: {
    root: ({ ownerState }) => ({
      ...(includesClassNames(ownerState, ["last"]) && {
        [`.${listItemTextClasses.primary}`]: {
          marginBottom: 0,
        },
      }),
    }),
  },
}

export default MuiListItemText
