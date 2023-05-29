import {
  ThemeOptions,
  tableCellClasses,
  typographyClasses
} from '@mui/material';

function getClassStyleOverrides(className?: string): Record<string, string> {
  const styleOverrides = {};

  if (className?.startsWith('flex')) {
    styleOverrides['display'] = 'flex';
    switch (className) {
      case 'flex-center':
        styleOverrides['justifyContent'] = 'center';
        styleOverrides['alignItems'] = 'center';
        break;
      case 'flex-center-x':
        styleOverrides['justifyContent'] = 'center';
        styleOverrides['alignItems'] = 'start';
        break;
      case 'flex-center-y':
        styleOverrides['justifyContent'] = 'start';
        styleOverrides['alignItems'] = 'center';
        break;
      case 'flex-end':
        styleOverrides['justifyContent'] = 'end';
        styleOverrides['alignItems'] = 'end';
        break;
      case 'flex-end-x':
        styleOverrides['justifyContent'] = 'end';
        styleOverrides['alignItems'] = 'start';
        break;
      case 'flex-end-y':
        styleOverrides['justifyContent'] = 'start';
        styleOverrides['alignItems'] = 'end';
        break;
    }
  }

  return styleOverrides;
}

const components: ThemeOptions['components'] = {
  MuiGrid2: {
    defaultProps: {
      disableEqualOverflow: true
      // padding: 0 // TODO: normalize padding.
    },
    styleOverrides: {
      root: ({ ownerState }) => ({
        ...getClassStyleOverrides(ownerState.className)
      })
    }
  },
  MuiContainer: {
    styleOverrides: {
      root: ({ ownerState }) => ({
        ...getClassStyleOverrides(ownerState.className)
      })
    }
  },
  MuiButton: {
    styleOverrides: {
      root: {
        whiteSpace: 'nowrap',
        minWidth: 'max-content',
        width: 'fit-content'
      }
    }
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        width: '100%',
        backgroundColor: 'white'
      }
    }
  },
  MuiLink: {
    defaultProps: {
      underline: 'hover'
    },
    styleOverrides: {
      root: {
        cursor: 'pointer'
      }
    }
  },
  MuiMenuItem: {
    styleOverrides: {
      root: ({ ownerState }) => ({
        ...(ownerState.className === 'header' && {
          pointerEvents: 'none',
          fontWeight: 'bold'
        })
      })
    }
  },
  MuiTable: {
    styleOverrides: {
      root: ({ ownerState }) => ({
        [`.${tableCellClasses.root}`]: {
          border: '2px solid white'
        },
        ...(ownerState.className === 'text' && {
          [`.${tableCellClasses.root}`]: {
            border: '1px solid #DDD'
          }
        })
      })
    }
  },
  MuiTableHead: {
    styleOverrides: {
      root: ({ ownerState }) => ({
        backgroundColor: '#6E7171',
        ...(ownerState.className === 'light' && {
          backgroundColor: '#9A9C9E'
        }),
        [`.${typographyClasses.root}`]: {
          color: 'white',
          marginBottom: 0,
          fontWeight: 600
        }
      })
    }
  },
  MuiTableBody: {
    styleOverrides: {
      root: ({ ownerState }) => ({
        backgroundColor: '#F2F2F2',
        ...(ownerState.className === 'text' && {
          backgroundColor: 'white'
        })
      })
    }
  }
};

export default components;
