import type Components from "./_components"
import { getFlexStyleOverrides } from "./_components"

const MuiGrid: Components["MuiGrid"] = {
  defaultProps: {
    // padding: 0 // TODO: normalize padding.
  },
  styleOverrides: {
    root: ({ ownerState }) => ({
      ...getFlexStyleOverrides(ownerState),
    }),
  },
}

export default MuiGrid
