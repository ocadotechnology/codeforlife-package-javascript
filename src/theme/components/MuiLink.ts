import Components, {
  getFontStyleOverrides
} from './_components';

import { includesClassNames } from '../../helpers';

const MuiLink: Components['MuiLink'] = {
  defaultProps: {
    underline: 'hover'
  },
  styleOverrides: {
    root: ({ ownerState }) => ({
      ...getFontStyleOverrides(ownerState),
      cursor: 'pointer',
      ...(includesClassNames(ownerState, ['back-to']) && {
        color: 'black !important',
        ':before': {
          content: '"< Back to "'
        }
      })
    })
  }
};

export default MuiLink;
