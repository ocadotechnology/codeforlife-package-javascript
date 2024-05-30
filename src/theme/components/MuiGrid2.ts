import Components, { getFlexStyleOverrides } from "./_components"

const MuiGrid2: Components["MuiGrid2"] = {
  defaultProps: {
    disableEqualOverflow: true,
    // padding: 0 // TODO: normalize padding.
  },
  styleOverrides: {
    root: ({ ownerState }) => ({
      ...getFlexStyleOverrides(ownerState),
    }),
  },
}

export default MuiGrid2
