import { createTheme } from '@mui/material';
import { red, common } from '@mui/material/colors';
import { primary, secondary, tertiary } from './colors';
var augmentColor = createTheme().palette.augmentColor;
var palette = {
    primary: {
        main: primary[500],
        contrastText: common.white
    },
    secondary: {
        main: secondary[500],
        contrastText: common.black
    },
    tertiary: augmentColor({
        color: {
            main: tertiary[500],
            contrastText: common.white
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
