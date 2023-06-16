import React from 'react';
import { SelectProps, MenuItemProps } from '@mui/material';
export interface SelectButtonProps extends Omit<SelectProps, ('className' | 'IconComponent' | 'displayEmpty' | 'value')> {
    open?: SelectProps['open'];
    onOpen?: SelectProps['onOpen'];
    onClose?: SelectProps['onClose'];
    text: string;
    menuItemsProps: Array<Omit<MenuItemProps, 'className'>>;
}
declare const SelectButton: React.FC<SelectButtonProps>;
export default SelectButton;
