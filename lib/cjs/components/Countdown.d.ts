import React from 'react';
import { TypographyProps } from '@mui/material';
export interface CountdownProps extends Omit<TypographyProps, ('children')> {
    seconds: number;
    start?: boolean;
    onEnd: () => void;
}
declare const Countdown: React.FC<CountdownProps>;
export default Countdown;
