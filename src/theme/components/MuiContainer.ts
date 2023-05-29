import Components, { getFlexStyleOverrides } from './_components';

const MuiContainer: Components['MuiContainer'] = {
  styleOverrides: {
    root: ({ ownerState }) => ({
      ...getFlexStyleOverrides(ownerState)
    })
  }
};

export default MuiContainer;
