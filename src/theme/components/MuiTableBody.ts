import { includesClassNames } from '../../helpers';
import Components from './_components';

const MuiTableBody: Components['MuiTableBody'] = {
  styleOverrides: {
    root: ({ ownerState }) => ({
      backgroundColor: '#F2F2F2',
      ...(includesClassNames(ownerState, ['text']) && {
        backgroundColor: 'white'
      })
    })
  }
};

export default MuiTableBody;
