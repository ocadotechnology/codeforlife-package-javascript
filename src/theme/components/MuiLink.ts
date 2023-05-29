import Components from './_components';

const MuiLink: Components['MuiLink'] = {
  defaultProps: {
    underline: 'hover'
  },
  styleOverrides: {
    root: ({ ownerState }) => ({
      cursor: 'pointer'
    })
  }
};

export default MuiLink;
