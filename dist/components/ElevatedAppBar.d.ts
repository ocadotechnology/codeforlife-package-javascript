import { AppBarProps, ContainerProps, ToolbarProps } from '@mui/material';
import { FC } from 'react';
export interface ElevatedAppBarProps extends Omit<AppBarProps, "position"> {
    containerProps: ContainerProps;
    toolbarProps?: ToolbarProps;
}
declare const ElevatedAppBar: FC<ElevatedAppBarProps>;
export default ElevatedAppBar;
