import { FC } from 'react';
import { TextFieldProps } from './TextField';
export type EmailFieldProps = Omit<TextFieldProps, "type" | "name" | "schema"> & Partial<Pick<TextFieldProps, "name">>;
declare const EmailField: FC<EmailFieldProps>;
export default EmailField;
