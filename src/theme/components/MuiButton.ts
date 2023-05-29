import Components from './_components';

const MuiButton: Components['MuiButton'] = {
  styleOverrides: {
    // @ts-expect-error always use function
    root: ({ ownerState }) => ({
      whiteSpace: 'nowrap',
      minWidth: 'max-content',
      width: 'fit-content'
    })
  }
};

export default MuiButton;
