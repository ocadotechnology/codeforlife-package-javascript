import React from 'react';
import { SectionProps } from './Section';
export interface TabBarProps {
    header: string;
    tabs: Array<SectionProps & {
        label: string;
    }>;
}
declare const TabBar: React.FC<TabBarProps>;
export default TabBar;
