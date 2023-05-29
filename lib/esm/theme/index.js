import { createTheme, responsiveFontSizes } from '@mui/material';
import palette from './palette';
import components from './components';
export var themeOptions = {
    palette: palette,
    components: components
};
var theme = responsiveFontSizes(createTheme(themeOptions));
export default theme;
