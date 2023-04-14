import React from 'react';
import { BoxProps } from '@mui/material';
export interface YouTubeVideoProps extends Omit<BoxProps, 'component'> {
    src: string;
}
declare const YouTubeVideo: React.FC<YouTubeVideoProps>;
export default YouTubeVideo;
