import Components, { getFlexStyleOverrides } from './_components';

const MuiContainer: Components['MuiContainer'] = {
  defaultProps: {
    maxWidth: 'lg'
  },
  styleOverrides: {
    root: ({ ownerState }) => ({
      ...getFlexStyleOverrides(ownerState),
      paddingLeft: '15px !important',
      paddingRight: '15px !important',
      padding: '25px'
    })
  }
};

export default MuiContainer;
