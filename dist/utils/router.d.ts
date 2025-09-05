import { To, LinkProps as _LinkProps } from 'react-router-dom';
import { PageState } from '../components/page/Page';
export type LinkProps<Override extends "delta" | "to", State extends Record<string, any> = Record<string, any>> = Omit<_LinkProps, "to" | "state"> & (Override extends "delta" ? {
    to: number;
} : {
    to: To;
    state?: State & Partial<PageState>;
});
export type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
};
export type Parameters = Record<string, string>;
export interface Path {
    _: string;
    __: string | Parameters;
    [subpath: string]: string | Path | Parameters;
}
export declare function path<Subpaths extends Record<string, Path>>(_: string | Parameters, subpaths?: Subpaths): Path & Subpaths;
export declare function getParam(path: Path, key: string): string;


declare module "@mui/material/styles" {
    interface CustomPaletteColors {
        tertiary: PaletteColor;
        white: PaletteColor;
        black: PaletteColor;
        teacher: PaletteColor;
        student: PaletteColor;
        indy: PaletteColor;
    }
    interface Palette extends CustomPaletteColors {
    }
    interface PaletteOptions extends CustomPaletteColors {
    }
}


declare module "@mui/material" {
    interface FabPropsColorOverrides extends PropsColorOverrides {
    }
    interface CardPropsColorOverrides extends PropsColorOverrides {
    }
    interface ChipPropsColorOverrides extends PropsColorOverrides {
    }
    interface IconPropsColorOverrides extends PropsColorOverrides {
    }
    interface AlertPropsColorOverrides extends PropsColorOverrides {
    }
    interface BadgePropsColorOverrides extends PropsColorOverrides {
    }
    interface RadioPropsColorOverrides extends PropsColorOverrides {
    }
    interface AppBarPropsColorOverrides extends PropsColorOverrides {
    }
    interface ButtonPropsColorOverrides extends PropsColorOverrides {
    }
    interface SliderPropsColorOverrides extends PropsColorOverrides {
    }
    interface SwitchPropsColorOverrides extends PropsColorOverrides {
    }
    interface SvgIconPropsColorOverrides extends PropsColorOverrides {
    }
    interface CheckboxPropsColorOverrides extends PropsColorOverrides {
    }
    interface FormLabelPropsColorOverrides extends PropsColorOverrides {
    }
    interface InputBasePropsColorOverrides extends PropsColorOverrides {
    }
    interface TextFieldPropsColorOverrides extends PropsColorOverrides {
    }
    interface IconButtonPropsColorOverrides extends PropsColorOverrides {
    }
    interface PaginationPropsColorOverrides extends PropsColorOverrides {
    }
    interface ButtonGroupPropsColorOverrides extends PropsColorOverrides {
    }
    interface FormControlPropsColorOverrides extends PropsColorOverrides {
    }
    interface ToggleButtonPropsColorOverrides extends PropsColorOverrides {
    }
    interface LinearProgressPropsColorOverrides extends PropsColorOverrides {
    }
    interface PaginationItemPropsColorOverrides extends PropsColorOverrides {
    }
    interface CircularProgressPropsColorOverrides extends PropsColorOverrides {
    }
    interface TabsPropsIndicatorColorOverrides extends PropsColorOverrides {
    }
    interface ToggleButtonGroupPropsColorOverrides extends PropsColorOverrides {
    }
}
