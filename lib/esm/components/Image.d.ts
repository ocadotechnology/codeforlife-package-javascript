import React from 'react';
import { BoxProps } from '@mui/material';
export interface ImageProps {
    alt: string;
    src: string;
    boxProps?: BoxProps;
}
declare const Image: React.FC<ImageProps>;
export default Image;
