import { PaletteColor } from '@mui/material';
declare module '@mui/material/styles' {
    interface CustomPaletteColors {
        tertiary: PaletteColor;
        white: PaletteColor;
    }
    interface Palette extends CustomPaletteColors {
    }
    interface PaletteOptions extends CustomPaletteColors {
    }
}
declare module '@mui/material' {
    interface PropsColorOverrides {
        tertiary: true;
        white: true;
    }
    interface ButtonPropsColorOverrides extends PropsColorOverrides {
    }
}
declare const theme: import("@mui/material").Theme;
export default theme;
