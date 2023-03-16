import React from 'react';
import { Box, BoxProps } from '@mui/material';

export interface ImageProps {
  alt: string
  src: string
  boxProps: BoxProps
}

const Image: React.FC<ImageProps> = ({ alt, src, boxProps }) => (
  <Box
    component='img'
    alt={alt}
    src={src}
    {...boxProps}
  />
);

export default Image;
