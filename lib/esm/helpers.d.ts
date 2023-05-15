import React from 'react';
import { DividerProps, Theme, Components } from '@mui/material';
export declare function openInNewTab(url: string, target?: string): void;
export declare function insertDividerBetweenElements({ elements, dividerProps }: {
    elements: React.ReactElement[];
    dividerProps?: DividerProps;
}): React.ReactElement[];
export declare function stringToBoolean(value: string): boolean;
export declare function getSearchParams(params: Record<string, {
    cast: (value: string) => any;
    isRequired?: boolean;
}>): object | null;
export declare function overrideComponentsInTheme(componentOverrides: Components<Omit<Theme, 'components'>>, theme?: Theme): Theme;
