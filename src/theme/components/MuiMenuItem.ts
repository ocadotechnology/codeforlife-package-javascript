import Components from './_components';

const MuiMenuItem: Components['MuiMenuItem'] = {
  styleOverrides: {
    root: ({ ownerState }) => ({
      ...(ownerState.className === 'header' && {
        pointerEvents: 'none',
        fontWeight: 'bold'
      })
    })
  }
};

export default MuiMenuItem;
