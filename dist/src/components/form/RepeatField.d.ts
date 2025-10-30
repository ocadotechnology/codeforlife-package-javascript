import { FC } from 'react';
import { TextFieldProps } from '@mui/material';
import { ValidateOptions } from 'yup';
export type RepeatFieldProps = Omit<TextFieldProps, "name" | "value" | "onChange" | "onBlur" | "error" | "helperText" | "defaultValue" | "required"> & {
    name: string;
    validateOptions?: ValidateOptions;
};
declare const RepeatField: FC<RepeatFieldProps>;
export default RepeatField;
