import { IconButtonProps } from '@mui/material';
import { FC } from 'react';
export interface CopyIconButtonProps extends Omit<IconButtonProps, "onClick"> {
    content: string;
}
declare const CopyIconButton: FC<CopyIconButtonProps>;
export default CopyIconButton;
