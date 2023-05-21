import React from 'react';
import { FormControlLabelProps, CheckboxProps, IconProps, StackProps } from '@mui/material';
import { FieldValidator } from 'formik';
import { BooleanSchema } from 'yup';
export declare const CheckboxFieldValidation: BooleanSchema<boolean | undefined, import("yup").AnyObject, undefined, "">;
export interface CheckboxFieldProps extends CheckboxProps {
    formControlLabelProps: Omit<FormControlLabelProps, 'control'>;
    stackProps?: Omit<StackProps, 'direction' | 'children'>;
    iconProps?: Omit<IconProps, 'children'>;
    validate?: FieldValidator | BooleanSchema;
    name: string;
}
declare const CheckboxField: React.FC<CheckboxFieldProps>;
export default CheckboxField;
