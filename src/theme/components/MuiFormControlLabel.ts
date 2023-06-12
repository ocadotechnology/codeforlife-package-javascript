import { typographyClasses } from '@mui/material';

import { form } from '../typography';
import Components from './_components';

const MuiFormControlLabel: Components['MuiFormControlLabel'] = {
  styleOverrides: {
    root: {
      [`.${typographyClasses.root}`]: {
        ...form,
        marginBottom: 0
      },
      marginBottom: form.marginBottom
    }
  }
};

export default MuiFormControlLabel;
