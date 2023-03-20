import React from 'react';
import { Box, BoxProps } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { openInNewTab } from '../helpers';

export interface ImageProps {
  alt: string
  src: string
  href?: string
  hrefInNewTab?: boolean
  boxProps?: BoxProps
}

const Image: React.FC<ImageProps> = ({
  alt, src, href, hrefInNewTab = false, boxProps = {}
}) => {
  let {
    sx,
    onClick,
    style = {},
    ...otherProps
  } = boxProps;

  // Override onClick if href provided.
  if (href !== undefined) {
    style = { ...style, cursor: 'pointer' };
    if (hrefInNewTab) {
      onClick = () => { openInNewTab(href); };
    } else {
      const navigate = useNavigate();
      onClick = () => { navigate(href); };
    }
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
