import React from 'react';
import { SectionElement } from './Section';
export interface TabBarProps {
    header: string;
    tabs: Array<{
        label: string;
        children: SectionElement | SectionElement[];
        path: string;
    }>;
    originalPath: string;
    initialValue?: number;
}
declare const TabBar: React.FC<TabBarProps>;
export default TabBar;
