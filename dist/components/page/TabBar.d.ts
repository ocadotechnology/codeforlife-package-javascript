import { FC, ReactNode } from 'react';
export interface TabBarProps {
    header: string;
    tabs: Array<{
        label: string;
        children: ReactNode;
        path: string;
    }>;
    originalPath: string;
    value?: number;
}
declare const TabBar: FC<TabBarProps>;
export default TabBar;
