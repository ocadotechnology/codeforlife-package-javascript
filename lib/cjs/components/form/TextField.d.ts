import React from 'react';
import { TextFieldProps as MuiTextFieldProps } from '@mui/material';
import { FieldValidator } from 'formik';
import { StringSchema, ArraySchema, AnyObject } from 'yup';
export type TextFieldProps = Omit<MuiTextFieldProps, 'defaultValue'> & {
    validate?: FieldValidator | StringSchema;
    name: string;
};
type StringArraySchema = ArraySchema<Array<string | undefined> | undefined, AnyObject, '', ''>;
interface ITextField {
    (props: TextFieldProps, context?: any): React.ReactElement<any, any> | null;
    (props: Omit<TextFieldProps, 'validate'> & {
        validate?: FieldValidator | StringArraySchema;
        split: string | RegExp;
    }, context?: any): React.ReactElement<any, any> | null;
}
declare const TextField: ITextField;
export default TextField;
