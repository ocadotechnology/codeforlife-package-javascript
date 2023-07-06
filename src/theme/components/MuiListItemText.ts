import { listItemTextClasses } from '@mui/material';

import { includesClassNames } from '../../helpers';
import Components from './_components';

const MuiListItemText: Components['MuiListItemText'] = {
  styleOverrides: {
    root: ({ ownerState }) => ({
      ...(includesClassNames(ownerState, ['last']) && {
        [`.${listItemTextClasses.primary}`]: {
          marginBottom: 0
        }
      })
    })
  }
};

export default MuiListItemText;
