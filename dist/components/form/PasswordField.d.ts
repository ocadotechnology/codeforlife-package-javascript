import { FC } from 'react';
import { RepeatFieldProps } from './RepeatField';
import { TextFieldProps } from './TextField';
export type PasswordFieldProps = Omit<TextFieldProps, "type" | "name" | "schema" | "autoComplete"> & Partial<Pick<TextFieldProps, "name" | "schema">> & {
    withRepeatField?: boolean;
    repeatFieldProps?: Omit<RepeatFieldProps, "name" | "type">;
};
declare const PasswordField: FC<PasswordFieldProps>;
export default PasswordField;
