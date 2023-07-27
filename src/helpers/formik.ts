import {
  FormikHelpers
} from 'formik';
import { MutationDefinition } from '@reduxjs/toolkit/dist/query';
import { MutationTrigger } from '@reduxjs/toolkit/dist/query/react/buildHooks';

export function setFormErrors(
  error: unknown,
  setErrors: (errors: object) => void
): void {
  if (typeof error !== 'object' ||
    error === null ||
    !('status' in error) ||
    typeof error.status !== 'number' ||
    error.status !== 400 ||
    !('data' in error) ||
    typeof error.data !== 'object' ||
    error.data === null
  ) { throw error; }

  setErrors(error.data);
}

export function submitForm<
  QueryArg,
  ResultType,
  FormValues extends QueryArg
>(
  trigger: MutationTrigger<MutationDefinition<
    QueryArg, any, any, ResultType, any
  >>,
  query: {
    then: (result: ResultType) => void;
    catch?: (error: Error) => void;
    finally?: () => void;
  }
): (
  values: FormValues,
  helpers: FormikHelpers<FormValues>
) => void | Promise<any> {
  return (values, helpers) => {
    trigger(values)
      .unwrap()
      .then(query.then)
      .catch((error) => {
        if (query.catch !== undefined) query.catch(error);
        setFormErrors(error, helpers.setErrors);
      })
      .finally(() => {
        if (query.finally !== undefined) query.finally();
      });
  };
}
