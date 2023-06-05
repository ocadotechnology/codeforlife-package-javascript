import Components, { getFlexStyleOverrides } from './_components';

const MuiContainer: Components['MuiContainer'] = {
  styleOverrides: {
    root: ({ ownerState }) => ({
      ...getFlexStyleOverrides(ownerState),
      padding: '0px !important'
    })
  }
};

export default MuiContainer;
