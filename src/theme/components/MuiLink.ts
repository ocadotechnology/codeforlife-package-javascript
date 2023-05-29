import Components from './_components';

const MuiLink: Components['MuiLink'] = {
  defaultProps: {
    underline: 'hover'
  },
  styleOverrides: {
    // @ts-expect-error always use function
    root: ({ ownerState }) => ({
      cursor: 'pointer'
    })
  }
};

export default MuiLink;
