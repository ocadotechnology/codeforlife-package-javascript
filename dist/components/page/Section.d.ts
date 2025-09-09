import { BoxProps, ContainerProps } from '@mui/material';
import { FC } from 'react';
export interface SectionProps extends ContainerProps {
    boxProps?: Omit<BoxProps, "children">;
}
declare const Section: FC<SectionProps>;
export default Section;
