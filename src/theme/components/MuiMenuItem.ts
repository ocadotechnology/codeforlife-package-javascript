import { includesClassNames } from '../../helpers';
import { secondary } from '../colors';
import Components from './_components';

const MuiMenuItem: Components['MuiMenuItem'] = {
  styleOverrides: {
    root: ({ ownerState }) => ({
      ...(includesClassNames(ownerState, ['header']) && {
        pointerEvents: 'none',
        fontWeight: 'bold'
      }),
      ...(includesClassNames(ownerState, ['button']) && {
        fontSize: '14px !important',
        margin: 0,
        padding: '6px 12px 6px 16px',
        border: `2px solid ${secondary[500]}`,
        borderTop: 'none',
        ':hover': {
          textDecoration: 'underline',
          backgroundColor: 'transparent'
        }
      })
    })
  }
};

export default MuiMenuItem;
