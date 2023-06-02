import React from 'react';
import {
  AppBar,
  AppBarProps,
  Toolbar,
  useScrollTrigger,
  Container,
  ContainerProps
} from '@mui/material';

export interface ElevatedAppBarProps extends Omit<AppBarProps, (
  'position'
)> {
  containerProps: ContainerProps
}

const ElevatedAppBar: React.FC<ElevatedAppBarProps> = ({
  containerProps,
  elevation = 4,
  children,
  ...otherProps
}) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(
    <AppBar elevation={elevation} {...otherProps}>
      <Container {...containerProps}>
        <Toolbar>
          {children}
        </Toolbar>
      </Container>
    </AppBar>,
    {
      position: trigger ? 'fixed' : 'sticky'
    }
  );
};

export default ElevatedAppBar;
