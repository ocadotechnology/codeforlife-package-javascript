import React from 'react';
import { DividerProps, Theme, Components } from '@mui/material';
export declare function openInNewTab(url: string, target?: string): void;
export declare function insertDividerBetweenElements({ elements, dividerProps }: {
    elements: React.ReactElement[];
    dividerProps?: DividerProps;
}): React.ReactElement[];
export declare function stringToBoolean(value: string): boolean;
export declare function stringToProperty(obj: object): (value: string) => any;
export declare function valueInOptions(options: readonly any[]): (value: any) => boolean;
export declare function getSearchParams<Params extends Record<string, {
    cast?: (value: string) => any;
    validate?: (value: any) => boolean;
    isRequired?: boolean;
}>>(params: Params): null | {
    [K in keyof Params]: any;
};
export declare function overrideComponentsInTheme(componentOverrides: Components<Omit<Theme, 'components'>>, theme?: Theme): Theme;
export declare function wrap(newFn: {
    before?: (...args: any[]) => void;
    after?: (...args: any[]) => void;
}, fn?: (...args: any[]) => any): (...args: any[]) => any;
