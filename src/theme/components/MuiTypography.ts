import Components from './_components';

const MuiTypography: Components['MuiTypography'] = {
  styleOverrides: {
    root: ({ ownerState }) => ({
      ...(ownerState.className === 'nowrap-ellipsis' && {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      })
    })
  }
};

export default MuiTypography;
