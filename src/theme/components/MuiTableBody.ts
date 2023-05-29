import Components from './_components';

const MuiTableBody: Components['MuiTableBody'] = {
  styleOverrides: {
    root: ({ ownerState }) => ({
      backgroundColor: '#F2F2F2',
      ...(ownerState.className === 'text' && {
        backgroundColor: 'white'
      })
    })
  }
};

export default MuiTableBody;
