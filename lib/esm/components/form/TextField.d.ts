import React from 'react';
import { TextFieldProps as MuiTextFieldProps } from '@mui/material';
import { FieldValidator } from 'formik';
import { StringSchema } from 'yup';
export type TextFieldProps = MuiTextFieldProps & {
    validate?: FieldValidator | StringSchema;
    name: string;
};
declare const TextField: React.FC<TextFieldProps>;
export default TextField;
