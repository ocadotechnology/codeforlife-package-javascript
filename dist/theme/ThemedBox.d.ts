import { BoxProps, ThemeOptions } from '@mui/material';
import { default as React } from 'react';
export interface ThemedBoxProps extends BoxProps {
    options?: ThemeOptions;
    withShapes?: boolean;
    userType: "teacher" | "student" | "independent";
    bgcolor?: string;
}
declare const ThemedBox: React.FC<ThemedBoxProps>;
export default ThemedBox;
