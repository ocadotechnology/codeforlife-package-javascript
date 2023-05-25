import React from 'react';
import { DividerProps, Theme, Components } from '@mui/material';
export declare function insertDividerBetweenElements({ elements, dividerProps }: {
    elements: React.ReactElement[];
    dividerProps?: DividerProps;
}): React.ReactElement[];
export declare function overrideComponentsInTheme(componentOverrides: Components<Omit<Theme, 'components'>>, theme?: Theme): Theme;
