import {
  ThemeOptions,
  tableCellClasses,
  typographyClasses,
  inputClasses,
  ComponentsPropsList
} from '@mui/material';
import { CommonProps } from '@mui/material/OverridableComponent';

export type OwnerState<ComponentName extends keyof ComponentsPropsList> = (
  ComponentsPropsList[ComponentName] & Record<string, unknown>
);

function getClassStyleOverrides(props: CommonProps): object {
  const styleOverrides = {};

  if (props.className?.startsWith('flex')) {
    styleOverrides['display'] = 'flex';
    switch (props.className) {
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
        ...getClassStyleOverrides(ownerState)
      })
    }
  },
  MuiContainer: {
    styleOverrides: {
      root: ({ ownerState }) => ({
        ...getClassStyleOverrides(ownerState)
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
      root: ({ ownerState }) => ({
        width: '100%',
        backgroundColor: 'white',
        ...(ownerState.multiline === true && {
          ...(ownerState.className !== undefined && {
            ...(['resize', 'resize-both'].includes(ownerState.className) && {
              width: 'auto',
              [`.${inputClasses.inputMultiline}`]: {
                resize: 'both'
              }
            }),
            ...(ownerState.className === 'resize-horizontal' && {
              width: 'auto',
              [`.${inputClasses.inputMultiline}`]: {
                resize: 'horizontal'
              }
            }),
            ...(ownerState.className === 'resize-vertical' && {
              [`.${inputClasses.inputMultiline}`]: {
                resize: 'vertical'
              }
            })
          })
        })
      })
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
