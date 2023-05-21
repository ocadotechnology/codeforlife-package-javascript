import React from 'react';
import { TextFieldProps as MuiTextFieldProps } from '@mui/material';
import { FieldValidator } from 'formik';
import { StringSchema } from 'yup';
export type TextFieldProps = Omit<MuiTextFieldProps, 'defaultValue'> & {
    validate?: FieldValidator | StringSchema;
    name: string;
};
declare const TextField: React.FC<TextFieldProps>;
export default TextField;
