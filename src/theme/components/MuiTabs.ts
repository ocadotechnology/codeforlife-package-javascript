import { tabClasses } from '@mui/material';

import Components from './_components';

const MuiTabs: Components['MuiTabs'] = {
  defaultProps: {
    variant: 'scrollable',
    scrollButtons: true,
    allowScrollButtonsMobile: true
  },
  styleOverrides: {
    root: ({ ownerState }) => ({
      ...([undefined, 'horizontal'].includes(ownerState.orientation) && {
        [`.${tabClasses.root}:not(:last-of-type)`]: {
          marginRight: '30px'
        }
      })
    }),
    indicator: {
      display: 'none'
    }
  }
};

export default MuiTabs;
