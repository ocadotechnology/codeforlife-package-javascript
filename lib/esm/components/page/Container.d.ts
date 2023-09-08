import { Grid2Props } from '@mui/material';
import React from 'react';
import { NotificationProps } from './Notification';
export interface ContainerState {
    notifications?: Array<{
        index?: number;
        props: NotificationProps;
    }>;
}
export interface ContainerProps extends Omit<Grid2Props, ('id' | 'container')> {
}
declare const Container: React.FC<ContainerProps>;
export default Container;
