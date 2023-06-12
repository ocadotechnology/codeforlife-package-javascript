import { form } from '../typography';
import Components from './_components';

const MuiFormHelperText: Components['MuiFormHelperText'] = {
  styleOverrides: {
    root: {
      ...form,
      marginTop: 4,
      marginLeft: 4
    }
  }
};

export default MuiFormHelperText;
