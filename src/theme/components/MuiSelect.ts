import type Components from "./_components"
import { type StyleOverridesWithRoot } from "./_components"

const MuiSelect: Components["MuiSelect"] = {
  defaultProps: {
    color: "black",
  },

  styleOverrides: {
    root: {
      borderRadius: "0px",
    },
  } as StyleOverridesWithRoot<"MuiSelect">,
}

export default MuiSelect
