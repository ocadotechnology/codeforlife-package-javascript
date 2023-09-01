import { Grid2Props } from '@mui/material';
import React from 'react';
export interface ContainerProps extends Omit<Grid2Props, ('id' | 'container')> {
    getCsrfCookie?: boolean;
}
declare const Container: React.FC<ContainerProps>;
export default Container;
