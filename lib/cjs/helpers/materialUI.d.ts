import React from 'react';
import { DividerProps, ThemeOptions } from '@mui/material';
import { CommonProps } from '@mui/material/OverridableComponent';
export declare function insertDividerBetweenElements({ elements, dividerProps }: {
    elements: React.ReactElement[];
    dividerProps?: DividerProps;
}): React.ReactElement[];
export declare function getStyleOverrides(ownerState: Record<string, unknown>, componentKey: keyof NonNullable<ThemeOptions['components']>, muiClassName?: string, components?: ThemeOptions['components']): object;
export declare function getClassNames(props: CommonProps): string[];
export declare function includesClassNames(propsOrClassNames: CommonProps | string[], includes: string[]): boolean;
export declare function matchClassNames(propsOrClassNames: CommonProps | string[], pattern: string | RegExp): RegExpMatchArray[];
