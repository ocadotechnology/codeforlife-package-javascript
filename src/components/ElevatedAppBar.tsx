import React from 'react';
import {
  AppBar,
  AppBarProps,
  Toolbar,
  useScrollTrigger,
  Container,
  ContainerProps
} from '@mui/material';

export interface ElevatedAppBarProps extends AppBarProps {
  containerProps: ContainerProps
}

const ElevatedAppBar: React.FC<ElevatedAppBarProps> = ({
  containerProps, children, ...otherProps
}) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(
    <AppBar {...otherProps}>
      <Container {...containerProps}>
        <Toolbar>
          {children}
        </Toolbar>
      </Container>
    </AppBar>,
    {
      elevation: trigger ? 4 : 0,
      position: trigger ? 'fixed' : 'sticky'
    }
  );
};

export default ElevatedAppBar;
