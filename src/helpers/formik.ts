import type {
  TypedLazyQueryTrigger,
  TypedMutationTrigger,
} from "@reduxjs/toolkit/query/react"
import type { FormikHelpers } from "formik"

export function isFormError(error: unknown): boolean {
  return (
    typeof error === "object" &&
    error !== null &&
    "status" in error &&
    error.status === 400 &&
    "data" in error &&
    typeof error.data === "object" &&
    error.data !== null
  )
}

export function setFormErrors(
  error: unknown,
  setErrors: (errors: object) => void,
): void {
  if (!isFormError(error)) {
    throw error
  }

  const data = Object.fromEntries(
    Object.entries((error as { data: object }).data).map(([field, errors]) => {
      if (Array.isArray(errors)) errors = errors.join(". ")
      return [field, errors]
    }),
  )

  setErrors(data)
}

export function submitForm<QueryArg, ResultType, FormValues extends QueryArg>(
  trigger:
    | TypedMutationTrigger<ResultType, QueryArg, any>
    | TypedLazyQueryTrigger<ResultType, QueryArg, any>,
  query: {
    then: (result: ResultType) => void
    catch?: (error: Error) => void
    finally?: () => void
  },
): (
  values: FormValues,
  helpers: FormikHelpers<FormValues>,
) => void | Promise<any> {
  return (values, helpers) => {
    trigger(values)
      .unwrap()
      .then(query.then)
      .catch(error => {
        if (query.catch !== undefined) query.catch(error)
        setFormErrors(error, helpers.setErrors)
      })
      .finally(() => {
        if (query.finally !== undefined) query.finally()
      })
  }
}
