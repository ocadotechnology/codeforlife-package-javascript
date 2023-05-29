import {
  ThemeOptions,
  createTheme,
  responsiveFontSizes
} from '@mui/material';

import palette, { PropsColorOverrides } from './palette';
import components from './components';

export {
  // Needed to modify '@mui/material' module declarations.
  type PropsColorOverrides
};

export const themeOptions: ThemeOptions = {
  palette,
  components
};

const theme = responsiveFontSizes(createTheme(themeOptions));

export default theme;
