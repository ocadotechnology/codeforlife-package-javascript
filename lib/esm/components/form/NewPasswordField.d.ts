import React from 'react';
import { StringSchema } from 'yup';
import { TextFieldProps } from './TextField';
export declare const NewPasswordFieldValidation: StringSchema<string, import("yup").AnyObject, undefined, "">;
interface PasswordFieldProps extends Omit<TextFieldProps<StringSchema>, ('type' | 'name')> {
}
interface RepeatPasswordFieldProps extends Omit<PasswordFieldProps, ('validate')> {
}
export interface NewPasswordFieldProps {
    passwordFieldProps?: PasswordFieldProps;
    repeatPasswordFieldProps?: RepeatPasswordFieldProps;
}
declare const NewPasswordField: React.FC<NewPasswordFieldProps>;
export default NewPasswordField;
