import { FC } from 'react';
import { TextFieldProps as MuiTextFieldProps } from '@mui/material';
import { StringSchema, ValidateOptions } from 'yup';
export type TextFieldProps = Omit<MuiTextFieldProps, "name" | "value" | "onChange" | "onBlur" | "error" | "defaultValue" | "helperText"> & {
    name: string;
    schema: StringSchema;
    validateOptions?: ValidateOptions;
    dirty?: boolean;
    split?: string | RegExp;
    unique?: boolean;
    uniqueCaseInsensitive?: boolean;
};
declare const TextField: FC<TextFieldProps>;
export default TextField;
