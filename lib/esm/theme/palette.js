import { createTheme } from '@mui/material';
import { red, common } from '@mui/material/colors';
var augmentColor = createTheme().palette.augmentColor;
var palette = {
    primary: {
        main: '#e0004d',
        light: '#fa1664',
        contrastText: common.white
    },
    secondary: {
        main: '#00a3e0',
        light: '#08bafc',
        contrastText: common.white
    },
    tertiary: augmentColor({
        color: {
            main: '#ffc709',
            light: '#ffd23b',
            contrastText: common.black
        }
    }),
    white: augmentColor({
        color: {
            main: common.white
        }
    }),
    black: augmentColor({
        color: {
            main: common.black
        }
    }),
    info: {
        main: '#f1ecec'
    },
    error: {
        main: red.A700
    }
};
export default palette;
