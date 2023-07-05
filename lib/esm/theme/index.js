import { createTheme, responsiveFontSizes } from '@mui/material';
import palette from './palette';
import components from './components';
import ThemedBox from './ThemedBox';
import spacing from './spacing';
import typography from './typography';
export { ThemedBox };
export var themeOptions = {
    palette: palette,
    components: components,
    spacing: spacing,
    typography: typography
};
var theme = responsiveFontSizes(createTheme(themeOptions));
export default theme;
