import { CommonProps } from '@mui/material/OverridableComponent';
import { DividerProps } from '@mui/material';
import { ReactElement } from 'react';
import { ThemeOptions } from '@mui/material';

export declare function getClassNames(props: CommonProps): string[];

export declare function getStyleOverrides(ownerState: CommonProps, componentKey: keyof NonNullable<ThemeOptions["components"]>, muiClassName?: string, components?: ThemeOptions["components"]): object;

export declare function includesClassNames(propsOrClassNames: CommonProps | string[], includes: string[]): boolean;

export declare function insertDividerBetweenElements({ elements, dividerProps, }: {
    elements: ReactElement[];
    dividerProps?: DividerProps;
}): ReactElement[];

export declare function matchClassNames(propsOrClassNames: CommonProps | string[], pattern: string | RegExp): RegExpMatchArray[];

export { }
