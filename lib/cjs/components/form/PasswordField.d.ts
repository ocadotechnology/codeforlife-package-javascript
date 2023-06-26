import React from 'react';
import { TextFieldProps } from './TextField';
export interface PasswordFieldProps extends Omit<TextFieldProps, ('type' | 'name')> {
    name?: string;
}
declare const PasswordField: React.FC<PasswordFieldProps>;
export default PasswordField;
