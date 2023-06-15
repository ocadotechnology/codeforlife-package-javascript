import { includesClassNames } from '../../helpers';
import typography from '../typography';
import Components, { getFontStyleOverrides } from './_components';

const MuiLink: Components['MuiLink'] = {
  defaultProps: {
    // BUG: if not set, MUI fails to run.
    underline: 'none'
  },
  styleOverrides: {
    root: ({ ownerState }) => ({
      ...typography.body1,
      marginBottom: 0,
      ...getFontStyleOverrides(ownerState),
      cursor: 'pointer',
      textDecoration: 'underline',
      ':hover': {
        fontWeight: 'bold'
      },
      ...(includesClassNames(ownerState, ['back-to']) && {
        ...typography.body1,
        textDecoration: 'none',
        ':hover': {
          fontWeight: 'bold',
          textDecoration: 'underline'
        },
        ':before': {
          content: '"< Back to "'
        }
      })
    })
  }
};

export default MuiLink;
