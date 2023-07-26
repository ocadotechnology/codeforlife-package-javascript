import React from 'react';
import { ButtonProps, StackProps } from '@mui/material';
import { FormikProps } from 'formik';
export interface SubmitButtonProps extends Omit<ButtonProps, ('type' | 'disabled')> {
    stackProps?: Omit<StackProps, 'children'>;
    disabled?: (form: FormikProps<any>) => boolean;
}
declare const SubmitButton: React.FC<SubmitButtonProps>;
export default SubmitButton;
