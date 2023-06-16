import Components, { StyleOverridesWithRoot } from './_components';

const MuiSelect: Components['MuiSelect'] = {
  defaultProps: {
    sx: {
      '& > fieldset': {
        borderColor: 'black !important'
      },
      borderRadius: '0px'
    }
  },
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  styleOverrides: {
  } as StyleOverridesWithRoot<'MuiSelect'>
};

export default MuiSelect;
