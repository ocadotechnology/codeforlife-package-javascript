import { FC } from 'react';
import { TextFieldProps } from './TextField';
export type FirstNameFieldProps = Omit<TextFieldProps, "type" | "name" | "schema"> & Partial<Pick<TextFieldProps, "name">>;
declare const FirstNameField: FC<FirstNameFieldProps>;
export default FirstNameField;
