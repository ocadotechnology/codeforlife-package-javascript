import { tableCellClasses } from '@mui/material';

import { includesClassNames } from '../../helpers';
import typography from '../typography';
import Components from './_components';

const MuiTable: Components['MuiTable'] = {
  styleOverrides: {
    root: ({ ownerState }) => ({
      borderStyle: 'hidden',
      [`.${tableCellClasses.root}`]: {
        border: '2px solid white'
      },
      ...(includesClassNames(ownerState, ['text']) && {
        borderStyle: 'unset',
        [`.${tableCellClasses.root}`]: {
          border: '1px solid #DDD'
        }
      }),
      ...(includesClassNames(ownerState, ['body']) && {
        marginBottom: typography.body1?.marginBottom
      })
    })
  }
};

export default MuiTable;
