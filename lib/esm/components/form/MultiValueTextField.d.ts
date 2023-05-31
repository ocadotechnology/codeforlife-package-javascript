import React from 'react';
import { TextFieldProps } from './TextField';
export interface MultiValueTextFieldProps extends TextFieldProps {
    delimiter?: string;
}
declare const MultiValueTextField: React.FC<MultiValueTextFieldProps>;
export default MultiValueTextField;
