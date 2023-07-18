import React from 'react';
import { Grid2Props } from '@mui/material';
export interface ContainerProps extends Omit<Grid2Props, ('id' | 'container')> {
}
declare const Container: React.FC<ContainerProps>;
export default Container;
