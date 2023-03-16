import React from 'react';
import { Box, BoxProps } from '@mui/material';

export interface ImageProps {
  alt: string
  src: string
  boxProps?: BoxProps
}

const Image: React.FC<ImageProps> = ({ alt, src, boxProps = {} }) => {
  const { sx, ...otherProps } = boxProps;

  return (
    <Box
      component='img'
      alt={alt}
      src={src}
      sx={{
        width: '100%',
        ...sx
      }}
      {...otherProps}
    />
  );
};

export default Image;
