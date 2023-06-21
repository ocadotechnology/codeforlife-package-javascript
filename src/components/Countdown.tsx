import React from 'react';
import {
  Typography,
  TypographyProps
} from '@mui/material';

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
  const [_seconds, _setSeconds] = React.useState(
    seconds < 0 ? 0 : seconds
  );
  const [end, setEnd] = React.useState(!start);

  React.useEffect(() => {
    if (!end) {
      if (_seconds > 0) {
        setTimeout(() => { _setSeconds(_seconds - 1); }, 1000);
      } else {
        setEnd(true);
        onEnd();
      }
    }
  }, [_seconds]);

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
