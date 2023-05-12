import React from 'react';
import { DividerProps, Theme, ThemeOptions } from '@mui/material';
export declare function openInNewTab(url: string, target?: string): void;
export declare function insertDividerBetweenElements({ elements, dividerProps }: {
    elements: React.ReactElement[];
    dividerProps?: DividerProps;
}): React.ReactElement[];
export declare function stringToBoolean(value: string): boolean;
export declare function getSearchParams(requiredParams?: Record<string, (value: string) => any>, optionalParams?: Record<string, (value: string) => any>): Record<string, any> | null;
export declare function overrideComponentsRootStyles(keys: Array<keyof NonNullable<ThemeOptions['components']>>, rootStyleOverrides: Record<string, any>, theme?: Theme): Theme;
