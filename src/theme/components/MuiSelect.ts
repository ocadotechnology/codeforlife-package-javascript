import Components from './_components';

const MuiSelect: Components['MuiSelect'] = {
  defaultProps: {
    sx: {
      '& > fieldset': {
        borderColor: 'black !important'
      },
      borderRadius: '0px'
    }
  }
};

export default MuiSelect;
