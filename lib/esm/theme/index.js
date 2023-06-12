import { createTheme, responsiveFontSizes } from '@mui/material';
import palette from './palette';
import components from './components';
import ThemedBox from './ThemedBox';
import typography from './typography';
export { ThemedBox };
export var themeOptions = {
    palette: palette,
    components: components,
    typography: typography
};
var theme = responsiveFontSizes(createTheme(themeOptions));
export default theme;
