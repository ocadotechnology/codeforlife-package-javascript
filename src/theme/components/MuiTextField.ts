import { inputClasses } from '@mui/material';

import Components from './_components';

import { includesClassNames } from '../../helpers';

const MuiTextField: Components['MuiTextField'] = {
  defaultProps: {
    size: 'small'
  },
  styleOverrides: {
    root: ({ ownerState }) => ({
      width: '100%',
      backgroundColor: 'transparent',
      '& .MuiOutlinedInput-root.Mui-focused > fieldset': {
        borderColor: 'black',
        margin: '3px'
      },
      ...(ownerState.multiline === true && {
        ...((
          includesClassNames(ownerState, ['resize']) ||
          includesClassNames(ownerState, ['resize-both'])
        ) && {
          width: 'auto',
          [`.${inputClasses.inputMultiline}`]: {
            resize: 'both'
          }
        }),
        ...(includesClassNames(ownerState, ['resize-horizontal']) && {
          width: 'auto',
          [`.${inputClasses.inputMultiline}`]: {
            resize: 'horizontal'
          }
        }),
        ...(includesClassNames(ownerState, ['resize-vertical']) && {
          [`.${inputClasses.inputMultiline}`]: {
            resize: 'vertical'
          }
        })
      })
    })
  }
};

export default MuiTextField;
