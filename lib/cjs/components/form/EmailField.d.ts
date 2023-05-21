import React from 'react';
import { TextFieldProps } from './TextField';
export interface EmailFieldProps extends Omit<TextFieldProps, ('type' | 'name')> {
    name?: string;
}
declare const EmailField: React.FC<EmailFieldProps>;
export default EmailField;
