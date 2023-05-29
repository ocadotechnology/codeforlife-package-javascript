import { typographyClasses } from '@mui/material';

import Components from './_components';

const MuiTableHead: Components['MuiTableHead'] = {
  styleOverrides: {
    root: ({ ownerState }) => ({
      backgroundColor: '#6E7171',
      ...(ownerState.className === 'light' && {
        backgroundColor: '#9A9C9E'
      }),
      [`.${typographyClasses.root}`]: {
        color: 'white',
        marginBottom: 0,
        fontWeight: 600
      }
    })
  }
};

export default MuiTableHead;
