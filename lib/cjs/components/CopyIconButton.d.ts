import React from 'react';
import { IconButtonProps } from '@mui/material';
export interface CopyIconButtonProps extends Omit<IconButtonProps, 'onClick'> {
    content: string;
}
declare const CopyIconButton: React.FC<CopyIconButtonProps>;
export default CopyIconButton;
