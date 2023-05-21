import React from 'react';
import { ButtonProps, StackProps } from '@mui/material';
export interface SubmitButtonProps extends Omit<ButtonProps, ('type' | 'disabled')> {
    stackProps?: Omit<StackProps, 'children'>;
}
declare const SubmitButton: React.FC<SubmitButtonProps>;
export default SubmitButton;
