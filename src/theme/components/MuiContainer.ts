import spacing from '../spacing';
import Components, { getFlexStyleOverrides } from './_components';

const MuiContainer: Components['MuiContainer'] = {
  defaultProps: {
    maxWidth: 'lg'
  },
  styleOverrides: {
    root: ({ ownerState }) => ({
      ...getFlexStyleOverrides(ownerState),
      paddingLeft: spacing(2, true),
      paddingRight: spacing(2, true),
      padding: spacing(3)
    })
  }
};

export default MuiContainer;
