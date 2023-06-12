import React from 'react';
import { FormControlLabelProps, CheckboxProps, StackProps } from '@mui/material';
import { FieldValidator } from 'formik';
import { BooleanSchema } from 'yup';
export interface CheckboxFieldProps extends Omit<CheckboxProps, 'defaultValue'> {
    formControlLabelProps: Omit<FormControlLabelProps, 'control'>;
    stackProps?: Omit<StackProps, 'direction' | 'children'>;
    validate?: FieldValidator | BooleanSchema;
    name: string;
}
declare const CheckboxField: React.FC<CheckboxFieldProps>;
export default CheckboxField;
