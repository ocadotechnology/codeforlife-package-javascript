import {
  selectClasses,
  iconButtonClasses,
  outlinedInputClasses
} from '@mui/material';

import { includesClassNames } from '../../helpers';
import { secondary } from '../colors';
import typography from '../typography';
import Components, { StyleOverridesWithRoot } from './_components';

const MuiSelect: Components['MuiSelect'] = {
  defaultProps: {
    color: 'black'
  },
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  styleOverrides: {
    root: ({ ownerState }) => ({
      borderRadius: '0px',
      ...(includesClassNames(ownerState, ['button']) && {
        minWidth: '150px',
        height: '42px',
        [`.${selectClasses.outlined}`]: {
          ...typography.button,
          padding: '6px 0px 6px 16px'
        },
        [`.${iconButtonClasses.root}`]: {
          color: typography.body1?.color,
          position: 'absolute',
          right: '8px'
        },
        [`.${outlinedInputClasses.notchedOutline}`]: {
          border: `2px solid ${secondary[500]} !important`
        }
      })
    })
  } as StyleOverridesWithRoot<'MuiSelect'>
};

export default MuiSelect;
