import { form } from '../typography';
import Components from './_components';

const MuiFormHelperText: Components['MuiFormHelperText'] = {
  styleOverrides: {
    root: {
      ...form
    }
  }
};

export default MuiFormHelperText;
