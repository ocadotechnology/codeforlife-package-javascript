import { PaletteColor } from '@mui/material';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { red } from '@mui/material/colors';

declare module '@mui/material/styles' {
  interface Palette {
    tertiary: PaletteColor;
  }
  interface PaletteOptions {
    tertiary: PaletteColor;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    tertiary: true;
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
    error: {
      main: red.A700
    }
  },
  components: {
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
    }
  }
}));

export default theme;
