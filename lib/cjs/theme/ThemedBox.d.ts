import React from 'react';
import { BoxProps, ThemeOptions } from '@mui/material';
export interface ThemedBoxProps extends BoxProps {
    options?: ThemeOptions;
    withIcons?: boolean;
    userType: 'teacher' | 'student' | 'independent';
}
declare const ThemedBox: React.FC<ThemedBoxProps>;
export default ThemedBox;