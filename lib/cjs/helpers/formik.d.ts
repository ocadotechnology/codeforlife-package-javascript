import { FormikHelpers } from 'formik';
import { MutationTrigger } from '@reduxjs/toolkit/dist/query/react/buildHooks';
export declare function setFormErrors(error: unknown, setErrors: (errors: object) => void): void;
export declare function submitForm(trigger: MutationTrigger<any>, query: {
    build?: (values: Record<string, any>) => Record<string, any>;
    then: () => void;
    catch?: (error: Error) => void;
    finally?: () => void;
}): (values: Record<string, any>, helpers: FormikHelpers<any>) => void;
