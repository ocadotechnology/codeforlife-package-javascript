import { FieldValidator } from 'formik';
import { FormikHelpers } from 'formik';
import { Schema } from 'yup';
import { TypedMutationTrigger } from '@reduxjs/toolkit/query/react';
import { ValidateOptions } from 'yup';

export declare type FormValues = Record<string, any>;

export declare function getCleanNames<Values extends FormValues>(values: Values, initialValues: Values, names?: string[]): string[];

export declare function getDirty<Values extends FormValues>(values: Values, initialValues: Values, names?: string[]): Record<string, boolean>;

export declare function isDirty<Values extends FormValues>(values: Values, initialValues: Values, name: string): boolean;

export declare function isFormError(error: unknown): boolean;

export declare function schemaToFieldValidator(schema: Schema, options?: ValidateOptions): FieldValidator;

export declare function setFormErrors(error: unknown, setErrors: (errors: object) => void): void;

export declare function submitForm<Values extends QueryArg, QueryArg extends FormValues, ResultType>(trigger: TypedMutationTrigger<ResultType, QueryArg, any>, initialValues: Values, options?: SubmitFormOptions<Values, QueryArg, ResultType>): SubmitFormHandler<Values>;

export declare function submitForm<Values extends FormValues, QueryArg extends FormValues, ResultType>(trigger: TypedMutationTrigger<ResultType, QueryArg, any>, initialValues: Values, options: SubmitFormOptions<Values, QueryArg, ResultType>): SubmitFormHandler<Values>;

export declare type SubmitFormHandler<Values extends FormValues> = (values: Values, helpers: FormikHelpers<Values>) => void | Promise<any>;

export declare type SubmitFormOptions<Values extends FormValues, QueryArg extends FormValues, ResultType> = Partial<{
    exclude: string[];
    include: string[];
    onlyDirtyValues: boolean;
    then: (result: ResultType, values: Values, helpers: FormikHelpers<Values>) => void;
    catch: (error: unknown, values: Values, helpers: FormikHelpers<Values>) => void;
    finally: (values: Values, helpers: FormikHelpers<Values>) => void;
}> & (Values extends QueryArg ? {
    clean?: (values: Values) => QueryArg;
} : {
    clean: (values: Values) => QueryArg;
});

export { }
