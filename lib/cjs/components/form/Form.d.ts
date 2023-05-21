/// <reference types="react" />
import { StackProps } from '@mui/material';
import { FormikValues, FormikConfig } from 'formik';
export interface FormProps<Values> extends FormikConfig<Values> {
    stackProps?: Omit<StackProps, 'children'>;
}
declare const Form: <Values extends FormikValues = FormikValues>({ stackProps, children, ...otherFormikProps }: FormProps<Values>) => JSX.Element;
export default Form;
