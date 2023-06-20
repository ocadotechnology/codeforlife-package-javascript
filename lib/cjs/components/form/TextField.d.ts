import React from 'react';
import { TextFieldProps as MuiTextFieldProps } from '@mui/material';
import { FieldValidator } from 'formik';
import { StringSchema, ArraySchema, AnyObject } from 'yup';
type StringArraySchema = ArraySchema<Array<string | undefined> | undefined, AnyObject, '', ''>;
type Split = string | RegExp;
type BaseTextFieldProps = Omit<MuiTextFieldProps, 'defaultValue'> & {
    name: string;
};
type RepeatTextFieldProps = BaseTextFieldProps & {
    repeat?: Array<Omit<BaseTextFieldProps, ('required' | 'split' | 'type')> & {
        inheritProps?: boolean;
    }>;
};
export type TextFieldProps<SingleValue extends boolean = true> = RepeatTextFieldProps & (SingleValue extends true ? {
    validate?: FieldValidator | StringSchema;
} : {
    validate?: FieldValidator | StringArraySchema;
    split: Split;
});
interface ITextField<SingleValue extends boolean> {
    (props: TextFieldProps<SingleValue>, context?: any): React.ReactElement<any, any> | null;
}
declare const TextField: ITextField<true> & ITextField<false>;
export default TextField;
