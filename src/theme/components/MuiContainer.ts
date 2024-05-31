import spacing from "../spacing"
import type Components from "./_components";
import { getFlexStyleOverrides } from "./_components"

const MuiContainer: Components["MuiContainer"] = {
  defaultProps: {
    maxWidth: "lg",
  },
  styleOverrides: {
    root: ({ ownerState }) => ({
      ...getFlexStyleOverrides(ownerState),
      paddingLeft: spacing(2, true),
      paddingRight: spacing(2, true),
      padding: spacing(7),
    }),
  },
}

export default MuiContainer
