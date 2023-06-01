import {
  ThemeOptions,
  createTheme,
  responsiveFontSizes
} from '@mui/material';

import palette, { PropsColorOverrides } from './palette';
import components from './components';
import typography from './typography';

export {
  // Needed to modify '@mui/material' module declarations.
  type PropsColorOverrides
};

export const themeOptions: ThemeOptions = {
  palette,
  components,
  typography
};

const theme = responsiveFontSizes(createTheme(themeOptions));

export default theme;
