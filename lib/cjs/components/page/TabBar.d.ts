import React from 'react';
import { SectionElement } from './Section';
export interface TabBarProps {
    header: string;
    tabs: Array<{
        label: string;
        children: SectionElement | SectionElement[];
    }>;
}
declare const TabBar: React.FC<TabBarProps>;
export default TabBar;
