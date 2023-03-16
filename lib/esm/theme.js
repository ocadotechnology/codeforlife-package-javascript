import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { red } from '@mui/material/colors';
var palette = createTheme().palette;
var theme = responsiveFontSizes(createTheme({
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
