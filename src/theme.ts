import { PaletteColor } from '@mui/material';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { red, common } from '@mui/material/colors';

// Extend palette to include a third color.
declare module '@mui/material/styles' {
  interface Palette {
    tertiary: PaletteColor;
    white: PaletteColor;
  }
  interface PaletteOptions {
    tertiary: PaletteColor;
    white: PaletteColor;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    tertiary: true;
    white: true;
  }
}

const { palette } = createTheme();

const theme = responsiveFontSizes(createTheme({
  palette: {
    primary: {
      main: '#e0004d'
    },
    secondary: {
      main: '#00a3e0'
    },
    tertiary: palette.augmentColor({
      color: {
        main: '#ffd23b'
      }
    }),
    white: palette.augmentColor({
      color: {
        main: common.white
      }
    }),
    error: {
      main: red.A700
    }
  },
  components: {
    MuiGrid2: {
      defaultProps: {
        disableEqualOverflow: true
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          whiteSpace: 'nowrap',
          minWidth: 'max-content'
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
    }
  }
}));

export default theme;
