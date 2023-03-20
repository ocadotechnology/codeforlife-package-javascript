import React from 'react';
import { Box, BoxProps } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export interface ImageProps {
  alt: string
  src: string
  href?: string
  boxProps?: BoxProps
}

const Image: React.FC<ImageProps> = ({
  alt, src, href, boxProps = {}
}) => {
  let {
    sx,
    onClick,
    style = {},
    ...otherProps
  } = boxProps;

  // Override onClick if href provided.
  if (href !== undefined) {
    const navigate = useNavigate();
    onClick = () => { navigate(href); };
    style.cursor = 'pointer';
  }

  return (
    <Box
      component='img'
      alt={alt}
      src={src}
      onClick={onClick}
      style={style}
      sx={{
        width: '100%',
        ...sx
      }}
      {...otherProps}
    />
  );
};

export default Image;
