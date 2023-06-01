import { createTheme, responsiveFontSizes } from '@mui/material';
import palette from './palette';
import components from './components';
import typography from './typography';
export var themeOptions = {
    palette: palette,
    components: components,
    typography: typography
};
var theme = responsiveFontSizes(createTheme(themeOptions));
export default theme;
