import { DividerProps, ThemeOptions } from '@mui/material';
import { CommonProps } from '@mui/material/OverridableComponent';
import { ReactElement } from 'react';
export declare function insertDividerBetweenElements({ elements, dividerProps, }: {
    elements: ReactElement[];
    dividerProps?: DividerProps;
}): ReactElement[];
export declare function getStyleOverrides(ownerState: CommonProps, componentKey: keyof NonNullable<ThemeOptions["components"]>, muiClassName?: string, components?: ThemeOptions["components"]): object;
export declare function getClassNames(props: CommonProps): string[];
export declare function includesClassNames(propsOrClassNames: CommonProps | string[], includes: string[]): boolean;
export declare function matchClassNames(propsOrClassNames: CommonProps | string[], pattern: string | RegExp): RegExpMatchArray[];


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
