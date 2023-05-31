import { tableCellClasses } from '@mui/material';

import Components from './_components';

const MuiTable: Components['MuiTable'] = {
  styleOverrides: {
    root: ({ ownerState }) => ({
      borderStyle: 'hidden',
      [`.${tableCellClasses.root}`]: {
        border: '2px solid white'
      },
      ...(ownerState.className === 'text' && {
        borderStyle: 'unset',
        [`.${tableCellClasses.root}`]: {
          border: '1px solid #DDD'
        }
      })
    })
  }
};

export default MuiTable;
