import Components, {
  getFontStyleOverrides
} from './_components';

const MuiLink: Components['MuiLink'] = {
  defaultProps: {
    underline: 'hover'
  },
  styleOverrides: {
    root: ({ ownerState }) => ({
      ...getFontStyleOverrides(ownerState),
      cursor: 'pointer'
    })
  }
};

export default MuiLink;
