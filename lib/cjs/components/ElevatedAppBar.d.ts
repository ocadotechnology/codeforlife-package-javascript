import React from 'react';
import { AppBarProps } from '@mui/material';
export interface ElevatedAppBarProps {
    props: AppBarProps;
    children: React.ReactNode;
}
declare const ElevatedAppBar: React.FC<ElevatedAppBarProps>;
export default ElevatedAppBar;
