import React from 'react';
import { BoxProps } from '@mui/material';
export interface YouTubeVideoPlayerProps extends Omit<BoxProps, 'component'> {
    src: string;
}
declare const YouTubeVideoPlayer: React.FC<YouTubeVideoPlayerProps>;
export default YouTubeVideoPlayer;
