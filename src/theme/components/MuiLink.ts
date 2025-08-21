import type Components from "./_components"
import { includesClassNames } from "../../utils/theme"
import typography from "../typography"

const MuiLink: Components["MuiLink"] = {
  defaultProps: {
    underline: "none", // BUG: if not set, MUI fails to run.
    color: "inherit",
  },
  styleOverrides: {
    root: ({ ownerState }) => ({
      cursor: "pointer",
      ...(includesClassNames(ownerState, ["no-decor"])
        ? {
            ":hover": {
              textDecoration: "underline",
            },
          }
        : {
            textDecoration: "underline",
            ":hover": {
              fontWeight: "bold",
            },
          }),
      ...(includesClassNames(ownerState, ["back-to"]) && {
        textDecoration: "none",
        display: "inline-block",
        marginBottom: typography.body1?.marginBottom,
        ":hover": {
          fontWeight: "bold",
          textDecoration: "underline",
        },
        ":before": {
          content: '"< Back to "',
        },
      }),
    }),
  },
}

export default MuiLink
