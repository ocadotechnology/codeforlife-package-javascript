import React from 'react';
import { BoxProps } from '@mui/material';
export interface ThemedBoxProps extends BoxProps {
    withIcons?: boolean;
    userType: 'teacher' | 'student' | 'independent';
}
declare const ThemedBox: React.FC<ThemedBoxProps>;
export default ThemedBox;
