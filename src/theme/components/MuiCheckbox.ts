import { includesClassNames } from '../../helpers';
import typography from '../typography';
import Components from './_components';

const MuiCheckbox: Components['MuiCheckbox'] = {
  styleOverrides: {
    root: ({ ownerState }) => ({
      paddingLeft: 0,
      ...(includesClassNames(ownerState, ['body']) && {
        marginBottom: typography.body1?.marginBottom
      })
    })
  }
};

export default MuiCheckbox;
