import React from 'react';
import { ButtonProps } from '@mui/material';
import { ImageProps } from '../Image';
export interface BannerProps {
    header: string;
    subheader: string;
    textAlign?: 'start' | 'center';
    imageProps?: ImageProps;
    buttonProps?: ButtonProps;
    bgcolor?: 'primary' | 'secondary' | 'tertiary';
}
declare const Banner: React.FC<BannerProps>;
export default Banner;
