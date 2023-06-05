import React from 'react';
import { AppBarProps, ToolbarProps, ContainerProps } from '@mui/material';
export interface ElevatedAppBarProps extends Omit<AppBarProps, ('position')> {
    containerProps: ContainerProps;
    toolbarProps?: ToolbarProps;
}
declare const ElevatedAppBar: React.FC<ElevatedAppBarProps>;
export default ElevatedAppBar;
