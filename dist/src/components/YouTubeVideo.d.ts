import { BoxProps } from '@mui/material';
import { FC } from 'react';
export interface YouTubeVideoProps extends Omit<BoxProps, "component"> {
    src: string;
}
declare const YouTubeVideo: FC<YouTubeVideoProps>;
export default YouTubeVideo;
