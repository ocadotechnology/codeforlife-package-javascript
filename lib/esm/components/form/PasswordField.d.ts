import React from 'react';
import { TextFieldProps } from './TextField';
export interface PasswordFieldProps extends Omit<TextFieldProps, ('type' | 'name' | 'required')> {
    name?: string;
}
declare const PasswordField: React.FC<PasswordFieldProps>;
export default PasswordField;
