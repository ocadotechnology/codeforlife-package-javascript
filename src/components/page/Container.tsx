import React from 'react';
import {
  Unstable_Grid2 as Grid,
  Grid2Props
} from '@mui/material';

export interface ContainerProps extends Omit<Grid2Props, (
  'id' |
  'container'
)> { }

const Container: React.FC<ContainerProps> = (props) => {
  return (
    <Grid
      id='body'
      container
      {...props}
    />
  );
};

export default Container;
