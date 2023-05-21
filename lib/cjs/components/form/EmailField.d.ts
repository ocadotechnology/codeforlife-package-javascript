import React from 'react';
import { FieldValidator } from 'formik';
import { StringSchema } from 'yup';
import { TextFieldProps } from './TextField';
export declare const EmailFieldValidation: StringSchema<string | undefined, import("yup").AnyObject, undefined, "">;
export interface EmailFieldProps extends Omit<TextFieldProps<StringSchema>, ('type' | 'name' | 'validate')> {
    name?: string;
    validate?: FieldValidator | StringSchema;
}
declare const EmailField: React.FC<EmailFieldProps>;
export default EmailField;
