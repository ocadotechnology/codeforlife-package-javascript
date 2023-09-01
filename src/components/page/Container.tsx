import {
  Unstable_Grid2 as Grid,
  Grid2Props
} from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router-dom';

import { useLazyGetCsrfCookieQuery } from '../../api';
import Notification, { NotificationProps } from './Notification';

export interface ContainerProps extends Omit<Grid2Props, (
  'id' |
  'container'
)> {
  getCsrfCookie?: boolean;
}

const Container: React.FC<ContainerProps> = ({
  getCsrfCookie = true,
  children,
  ...otherGridProps
}) => {
  const [_getCsrfCookie] = useLazyGetCsrfCookieQuery();
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

  React.useEffect(() => {
    if (getCsrfCookie) void _getCsrfCookie(null);
  }, [getCsrfCookie]);

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
