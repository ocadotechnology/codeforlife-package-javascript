import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  Unstable_Grid2 as Grid,
  Grid2Props
} from '@mui/material';

import Notification, { NotificationProps } from './Notification';

export interface ContainerProps extends Omit<Grid2Props, (
  'id' |
  'container'
)> { }

const Container: React.FC<ContainerProps> = ({
  children,
  ...otherGridProps
}) => {
  const location = useLocation();
  const childrenArray = React.Children.toArray(children);

  if (location.state !== null &&
    Array.isArray(location.state.notifications)
  ) {
    (location.state.notifications as Array<{
      props: NotificationProps;
      index?: number;
    }>)
      .filter((notification) => 'props' in notification)
      .forEach((notification, index) => {
        childrenArray.splice(
          notification.index ?? index,
          0,
          <Notification {...notification.props} />
        );
      });
  }

  return (
    <Grid
      id='body'
      container
      {...otherGridProps}
    >
      {childrenArray}
    </Grid>
  );
};

export default Container;
