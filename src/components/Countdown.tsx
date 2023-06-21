import React from 'react';
import {
  Typography,
  TypographyProps
} from '@mui/material';

import { useCountdown } from '../hooks';

export interface CountdownProps extends Omit<TypographyProps, (
  'children'
)> {
  seconds: number;
  start?: boolean;
  onEnd: () => void;
}

const Countdown: React.FC<CountdownProps> = ({
  seconds,
  start = true,
  onEnd,
  ...typographyProps
}) => {
  seconds = Math.floor(seconds);
  const _seconds = useCountdown(seconds)[0];
  const [end, setEnd] = React.useState(!start);

  if (_seconds === 0 && !end) {
    setEnd(true);
    onEnd();
  }

  seconds = Math.floor(_seconds % 60);
  const minutes = Math.floor(_seconds / 60);

  return <>{_seconds > 0 &&
    <Typography {...typographyProps}>
      {minutes > 0 && (
        `${minutes} ${minutes > 1 ? 'mins' : 'min'} `
      )}
      {seconds > 0 && (
        `${seconds} ${seconds > 1 ? 'secs' : 'sec'}`
      )}
    </Typography>
  }</>;
};

export default Countdown;
