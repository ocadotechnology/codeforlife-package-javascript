import {
  FormikHelpers
} from 'formik';
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

export function submitForm(
  trigger: MutationTrigger<any>,
  query: {
    build?: (values: Record<string, any>) => Record<string, any>;
    then: () => void;
    catch?: (error: Error) => void;
    finally?: () => void;
  }
): (
  values: Record<string, any>,
  helpers: FormikHelpers<any>
) => void {
  const {
    build = (values) => values
  } = query;

  return (values, helpers) => {
    trigger(build(values))
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
