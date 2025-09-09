import { BoxProps } from '@mui/material';
import { FC } from 'react';
export interface ImageProps extends Omit<BoxProps, "component"> {
    alt: string;
    src: string;
    href?: string;
    hrefInNewTab?: boolean;
}
declare const Image: FC<ImageProps>;
export default Image;
