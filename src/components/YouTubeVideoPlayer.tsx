import React from 'react';
import {
  Box,
  BoxProps
} from '@mui/material';

export interface YouTubeVideoPlayerProps extends Omit<BoxProps, 'component'> {
  src: string
}

const YouTubeVideoPlayer: React.FC<YouTubeVideoPlayerProps> = ({
  src, style = {}, ...otherProps
}) => {
  return (
    <Box
      component='iframe'
      width='100%'
      src={src}
      title='YouTube video player'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen'
      style={{ border: '0px', aspectRatio: '1 / 0.5625', ...style }}
      {...otherProps}
    />
  );
};

export default YouTubeVideoPlayer;
