import { MutationDefinition } from '@reduxjs/toolkit/dist/query';
import { MutationTrigger } from '@reduxjs/toolkit/dist/query/react/buildHooks';
import {
  FormikHelpers
} from 'formik';

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

  const data = Object.fromEntries(
    Object.entries(error.data).map(([field, errors]) => {
      if (Array.isArray(errors)) errors = errors.join('. ');
      return [field, errors];
    })
  );

  setErrors(data);
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
