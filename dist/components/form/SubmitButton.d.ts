import { ButtonProps } from '@mui/material';
import { FC } from 'react';
export interface SubmitButtonProps extends Omit<ButtonProps, "type" | "onClick"> {
}
declare const SubmitButton: FC<SubmitButtonProps>;
export default SubmitButton;
