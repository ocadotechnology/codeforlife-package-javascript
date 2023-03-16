import { PaletteColor } from '@mui/material';
declare module '@mui/material/styles' {
    interface Palette {
        tertiary: PaletteColor;
    }
    interface PaletteOptions {
        tertiary: PaletteColor;
    }
}
declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        tertiary: true;
    }
}
declare const theme: import("@mui/material").Theme;
export default theme;
