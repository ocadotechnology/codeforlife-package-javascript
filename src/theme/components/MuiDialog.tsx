import Components from './_components';

const MuiDialog: Components['MuiDialog'] = {
  defaultProps: {
    maxWidth: 'sm'
  },
  styleOverrides: {
    paper: {
      borderRadius: '0px !important',
      padding: '24px',
      alignItems: 'center'
    }
  }
};

export default MuiDialog;
