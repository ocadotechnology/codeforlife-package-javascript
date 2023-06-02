import React from 'react';
import { AppBarProps, ContainerProps } from '@mui/material';
export interface ElevatedAppBarProps extends Omit<AppBarProps, ('position')> {
    containerProps: ContainerProps;
}
declare const ElevatedAppBar: React.FC<ElevatedAppBarProps>;
export default ElevatedAppBar;
