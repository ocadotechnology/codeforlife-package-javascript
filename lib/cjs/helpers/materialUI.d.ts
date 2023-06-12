import React from 'react';
import { DividerProps, ThemeOptions } from '@mui/material';
import { CommonProps } from '@mui/material/OverridableComponent';
export declare function insertDividerBetweenElements({ elements, dividerProps }: {
    elements: React.ReactElement[];
    dividerProps?: DividerProps;
}): React.ReactElement[];
export declare function getStyleOverrides(ownerState: Record<string, unknown>, componentKey: keyof NonNullable<ThemeOptions['components']>, muiClassName?: string, components?: ThemeOptions['components']): object;
export declare function includesClassNames(props: CommonProps, classNames: string[]): boolean;
