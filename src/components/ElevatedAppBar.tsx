import React from 'react';
import {
  AppBar,
  AppBarProps,
  Toolbar,
  useScrollTrigger
} from '@mui/material';

export interface ElevatedAppBarProps {
  props: AppBarProps
  children: React.ReactElement
}

const ElevatedAppBar: React.FC<ElevatedAppBarProps> = ({ props, children }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(
    <AppBar {...props}>
      <Toolbar>
        {children}
      </Toolbar>
    </AppBar>,
    { elevation: trigger ? 4 : 0 }
  );
};

export default ElevatedAppBar;
