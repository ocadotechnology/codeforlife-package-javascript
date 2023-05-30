import Components, { getTextStyleOverrides } from './_components';

const MuiTypography: Components['MuiTypography'] = {
  styleOverrides: {
    root: ({ ownerState }) => ({
      ...getTextStyleOverrides(ownerState)
    })
  }
};

export default MuiTypography;
