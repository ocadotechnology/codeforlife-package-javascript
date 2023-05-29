import { inputClasses } from '@mui/material';

import Components from './_components';

const MuiTextField: Components['MuiTextField'] = {
  styleOverrides: {
    root: ({ ownerState }) => ({
      width: '100%',
      backgroundColor: 'white',
      ...(ownerState.multiline === true && {
        ...(ownerState.className !== undefined && {
          ...(['resize', 'resize-both'].includes(ownerState.className) && {
            width: 'auto',
            [`.${inputClasses.inputMultiline}`]: {
              resize: 'both'
            }
          }),
          ...(ownerState.className === 'resize-horizontal' && {
            width: 'auto',
            [`.${inputClasses.inputMultiline}`]: {
              resize: 'horizontal'
            }
          }),
          ...(ownerState.className === 'resize-vertical' && {
            [`.${inputClasses.inputMultiline}`]: {
              resize: 'vertical'
            }
          })
        })
      })
    })
  }
};

export default MuiTextField;
