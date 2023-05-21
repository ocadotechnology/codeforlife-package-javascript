import React from 'react';
import { TextFieldProps } from './TextField';
interface PasswordFieldProps extends Omit<TextFieldProps, ('type' | 'name')> {
}
interface RepeatPasswordFieldProps extends Omit<PasswordFieldProps, ('validate')> {
}
export interface NewPasswordFieldProps {
    passwordFieldProps?: PasswordFieldProps;
    repeatPasswordFieldProps?: RepeatPasswordFieldProps;
}
declare const NewPasswordField: React.FC<NewPasswordFieldProps>;
export default NewPasswordField;
