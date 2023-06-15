import { touchRippleClasses } from '@mui/material';

import Components from './_components';

const MuiCheckbox: Components['MuiCheckbox'] = {
  styleOverrides: {
    root: {
      paddingLeft: 0,
      [`.${touchRippleClasses.root}`]: {
        left: '-12px'
      },
      [`.${touchRippleClasses.root} > *`]: {
        left: '-12px'
      }
    }
  }
};

export default MuiCheckbox;
