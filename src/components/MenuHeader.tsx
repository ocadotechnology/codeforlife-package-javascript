import React from 'react';
import {
  MenuItem,
  MenuItemProps
} from '@mui/material';

export interface MenuHeaderProps extends MenuItemProps { }

const MenuHeader: React.FC<MenuHeaderProps> = ({
  value = '', style = {}, ...otherMenuItemProps
}) => {
  let {
    pointerEvents,
    fontWeight = 'bold',
    ...otherStyles
  } = style;

  pointerEvents = 'none';

  return (
    <MenuItem
      value={value}
      style={{
        pointerEvents,
        fontWeight,
        ...otherStyles
      }}
      {...otherMenuItemProps}
    />
  );
};

export default MenuHeader;
