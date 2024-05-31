import type Components from "./_components";
import { getFontStyleOverrides } from "./_components"

const MuiTypography: Components["MuiTypography"] = {
  styleOverrides: {
    root: ({ ownerState }) => ({
      ...getFontStyleOverrides(ownerState),
    }),
  },
}

export default MuiTypography
