import { JSX, ReactNode, RefObject } from 'react';
import { FormHelperTextProps } from '@mui/material';
import { FormikConfig, FormikErrors, FormikProps } from 'formik';
import { TypedUseMutation } from '@reduxjs/toolkit/query/react';
import { FormValues, SubmitFormOptions } from '../../utils/form';
type NonFieldErrorsProps = Omit<FormHelperTextProps, "error" | "ref"> & {
    scrollIntoViewOptions?: ScrollIntoViewOptions;
};
export type FormErrors<Values> = FormikErrors<Omit<Values, "__all__"> & {
    __all__: string;
}>;
type _FormikProps<Values> = Omit<FormikProps<Values>, "errors"> & {
    errors: FormErrors<Values>;
};
type BaseFormProps<Values> = Omit<FormikConfig<Values>, "children"> & {
    children: ReactNode | ((props: _FormikProps<Values>) => ReactNode);
    scrollIntoViewOptions?: ScrollIntoViewOptions;
    nonFieldErrorsProps?: Omit<NonFieldErrorsProps, "children">;
    fieldRefs?: Array<{
        name: string;
        inputRef: RefObject<HTMLInputElement | null>;
    }>;
};
type SubmitFormProps<Values extends FormValues, QueryArg extends FormValues, ResultType> = Omit<BaseFormProps<Values>, "onSubmit"> & {
    useMutation: TypedUseMutation<ResultType, QueryArg, any>;
} & (Values extends QueryArg ? {
    submitOptions?: SubmitFormOptions<Values, QueryArg, ResultType>;
} : {
    submitOptions: SubmitFormOptions<Values, QueryArg, ResultType>;
});
export type FormProps<Values extends FormValues, QueryArg extends FormValues, ResultType> = BaseFormProps<Values> | SubmitFormProps<Values, QueryArg, ResultType>;
declare const Form: {
    <Values extends FormValues>(props: BaseFormProps<Values>): JSX.Element;
    <Values extends FormValues, QueryArg extends FormValues, ResultType>(props: SubmitFormProps<Values, QueryArg, ResultType>): JSX.Element;
};
export default Form;
