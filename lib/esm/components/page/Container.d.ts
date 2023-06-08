import React from 'react';
import { Grid2Props } from '@mui/material';
import { SectionElement } from './Section';
export interface ContainerProps extends Omit<Grid2Props, ('container' | 'children')> {
    children: SectionElement | SectionElement[];
}
declare const Container: React.FC<ContainerProps>;
export default Container;
