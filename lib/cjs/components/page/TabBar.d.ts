import React from 'react';
export interface TabBarProps {
    header: string;
    tabs: Array<{
        label: string;
        children: React.ReactNode;
        path: string;
    }>;
    originalPath: string;
    value?: number;
}
declare const TabBar: React.FC<TabBarProps>;
export default TabBar;
