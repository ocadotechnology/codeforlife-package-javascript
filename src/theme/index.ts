import {
  ThemeOptions,
  createTheme,
  responsiveFontSizes
} from '@mui/material';

import palette from './palette';
import components from './components';

export const themeOptions: ThemeOptions = {
  palette,
  components
};

const theme = responsiveFontSizes(createTheme(themeOptions));

export default theme;
