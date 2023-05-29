import React from 'react';
import { DividerProps, Theme, Components } from '@mui/material';
export declare function insertDividerBetweenElements({ elements, dividerProps }: {
    elements: React.ReactElement[];
    dividerProps?: DividerProps;
}): React.ReactElement[];
export declare function overrideComponentsInTheme(componentOverrides: Components<Omit<Theme, 'components'>>, theme?: Theme): Theme;
export declare function getStyleOverrides(componentClass: any, ownerState: Record<string, unknown>): object;
