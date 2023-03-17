import { PaletteColor } from '@mui/material';
declare module '@mui/material/styles' {
    interface Palette {
        tertiary: PaletteColor;
        white: PaletteColor;
    }
    interface PaletteOptions {
        tertiary: PaletteColor;
        white: PaletteColor;
    }
}
declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        tertiary: true;
        white: true;
    }
}
declare const theme: import("@mui/material").Theme;
export default theme;
