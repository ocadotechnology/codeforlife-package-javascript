import React from 'react';
import { TextFieldProps as MuiTextFieldProps } from '@mui/material';
import { FieldValidator } from 'formik';
import { Schema as YupSchema } from 'yup';
export type TextFieldProps<Schema extends YupSchema> = MuiTextFieldProps & {
    validate: FieldValidator | Schema;
    name: string;
};
declare const TextField: React.FC<TextFieldProps<YupSchema>>;
export default TextField;
