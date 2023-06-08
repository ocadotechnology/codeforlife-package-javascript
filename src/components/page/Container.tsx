import React from 'react';
import {
  Unstable_Grid2 as Grid,
  Grid2Props
} from '@mui/material';

import { SectionElement } from './Section';

export interface ContainerProps extends Omit<Grid2Props, (
  'container' |
  'children'
)> {
  children: SectionElement | SectionElement[];
}

const Container: React.FC<ContainerProps> = ({
  children,
  ...otherGridProps
}) => {
  return (
    <Grid container {...otherGridProps}>
      {children}
    </Grid>
  );
};

export default Container;
