import { typographyClasses } from '@mui/material';

import { includesClassNames } from '../../helpers';
import Components from './_components';

const MuiTableHead: Components['MuiTableHead'] = {
  styleOverrides: {
    root: ({ ownerState }) => ({
      backgroundColor: '#6E7171',
      ...(includesClassNames(ownerState, ['light']) && {
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
