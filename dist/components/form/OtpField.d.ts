import { FC } from 'react';
import { TextFieldProps } from './TextField';
export type OtpFieldProps = Omit<TextFieldProps, "name" | "schema" | "required"> & Partial<Pick<TextFieldProps, "name">>;
declare const OtpField: FC<OtpFieldProps>;
export default OtpField;
