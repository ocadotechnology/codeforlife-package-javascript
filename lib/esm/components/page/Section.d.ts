import React from 'react';
import { Grid2Props, ContainerProps } from '@mui/material';
export interface SectionProps extends ContainerProps {
    children: React.ReactNode;
    gridProps?: Omit<Grid2Props, ('xs' | 'sm' | 'md' | 'lg' | 'xl' | 'container')>;
}
declare const Section: React.FC<SectionProps>;
export default Section;
