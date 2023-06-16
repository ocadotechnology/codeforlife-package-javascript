import React from 'react';
import {
  Select,
  SelectProps,
  selectClasses,
  MenuItem,
  MenuItemProps,
  IconButton
} from '@mui/material';
import {
  ChevronRight as ChevronRightIcon,
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon
} from '@mui/icons-material';

import { wrap } from '../helpers';

export interface SelectButtonProps extends Omit<SelectProps, (
  'className' |
  'IconComponent' |
  'displayEmpty' |
  'value'
)> {
  // Required by typescript.
  open?: SelectProps['open'];
  onOpen?: SelectProps['onOpen'];
  onClose?: SelectProps['onClose'];

  text: string;
  menuItemsProps: Array<Omit<MenuItemProps, 'className'>>;
}

const SelectButton: React.FC<SelectButtonProps> = ({
  text,
  menuItemsProps,
  open = false,
  onOpen,
  onClose,
  ...otherSelectProps
}) => {
  const [_open, _setOpen] = React.useState(open);

  return (
    <Select
      className='button'
      open={_open}
      onOpen={wrap({
        before: () => { _setOpen(true); }
      }, onOpen)}
      onClose={wrap({
        before: () => { _setOpen(false); }
      }, onClose)}
      IconComponent={({ className }: { className: string }) => (
        className.includes(selectClasses.iconOpen)
          ? <IconButton onClick={() => { _setOpen(false); }}>
            <ExpandLessIcon />
          </IconButton>
          : <IconButton onClick={() => { _setOpen(true); }}>
            <ExpandMoreIcon />
          </IconButton>
      )}
      displayEmpty
      value=''
      {...otherSelectProps}
    >
      <MenuItem value='' sx={{ display: 'none' }}>
        {text}
      </MenuItem>
      {menuItemsProps.map(({
        children,
        onClick,
        ...otherMenuItemProps
      }, index) => (
        <MenuItem
          key={index}
          className='button'
          onClick={wrap({
            before: () => { _setOpen(false); }
          }, onClick)}
          {...otherMenuItemProps}
        >
          {children}
          <ChevronRightIcon style={{
            marginLeft: 'auto'
          }} />
        </MenuItem>
      ))}
    </Select>
  );
};

export default SelectButton;
