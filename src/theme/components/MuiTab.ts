import { tabClasses } from '@mui/material';

import Components from './_components';
import { primary } from '../colors';

const MuiTab: Components['MuiTab'] = {
  styleOverrides: {
    root: {
      textTransform: 'none',
      fontSize: '16px',
      fontWeight: 600,
      minWidth: '150px',
      border: '2px solid white',
      [`&.${tabClasses.selected}`]: {
        color: primary[300],
        backgroundColor: 'white',
        cursor: 'default'
      },
      [`:not(.${tabClasses.selected})`]: {
        color: 'white',
        ':hover': {
          textDecoration: 'underline'
        }
      }
    }
  }
};

export default MuiTab;
