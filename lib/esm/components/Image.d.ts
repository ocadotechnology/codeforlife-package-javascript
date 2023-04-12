import React from 'react';
import { BoxProps } from '@mui/material';
export interface ImageProps extends BoxProps {
    alt: string;
    src: string;
    href?: string;
    hrefInNewTab?: boolean;
}
declare const Image: React.FC<ImageProps>;
export default Image;
