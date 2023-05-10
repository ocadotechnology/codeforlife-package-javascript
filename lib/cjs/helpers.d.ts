import React from 'react';
import { DividerProps } from '@mui/material';
export declare function openInNewTab(url: string, target?: string): void;
export declare function insertDividerBetweenElements({ elements, dividerProps }: {
    elements: React.ReactElement[];
    dividerProps?: DividerProps;
}): React.ReactElement[];
export declare function getSearchParams(requiredParams?: Record<string, any>, optionalParams?: Record<string, any>): Record<string, any> | null;
