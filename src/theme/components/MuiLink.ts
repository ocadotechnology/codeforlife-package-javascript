import { includesClassNames } from '../../helpers';
import Components from './_components';

const MuiLink: Components['MuiLink'] = {
  defaultProps: {
    underline: 'none', // BUG: if not set, MUI fails to run.
    variant: 'body1'
  },
  styleOverrides: {
    root: ({ ownerState }) => ({
      cursor: 'pointer',
      ...(ownerState.variant !== undefined &&
        ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
          .includes(ownerState.variant)
        ? {
          ':hover': {
            textDecoration: 'underline'
          }
        }
        : {
          textDecoration: 'underline',
          ':hover': {
            fontWeight: 'bold'
          }
        }
      ),
      ...(includesClassNames(ownerState, ['back-to']) && {
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
