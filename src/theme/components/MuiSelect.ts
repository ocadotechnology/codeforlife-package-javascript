import { type StyleOverridesWithRoot } from "./_components"
import type Components from "./_components"

const MuiSelect: Components["MuiSelect"] = {
  defaultProps: {
    color: "black",
  },
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  styleOverrides: {
    root: {
      borderRadius: "0px",
    },
  } as StyleOverridesWithRoot<"MuiSelect">,
}

export default MuiSelect
