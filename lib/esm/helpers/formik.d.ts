import { FormikHelpers } from 'formik';
import { MutationDefinition } from '@reduxjs/toolkit/dist/query';
import { MutationTrigger } from '@reduxjs/toolkit/dist/query/react/buildHooks';
export declare function setFormErrors(error: unknown, setErrors: (errors: object) => void): void;
export declare function submitForm<QueryArg, ResultType, FormValues extends QueryArg>(trigger: MutationTrigger<MutationDefinition<QueryArg, any, any, ResultType, any>>, query: {
    then: (result: ResultType) => void;
    catch?: (error: Error) => void;
    finally?: () => void;
}): (values: FormValues, helpers: FormikHelpers<FormValues>) => void | Promise<any>;
