import type { TypedMutationTrigger } from "@reduxjs/toolkit/query/react"
import type { FieldValidator, FormikHelpers } from "formik"
import { ValidationError, type Schema, type ValidateOptions } from "yup"

import { excludeKeyPaths } from "./general"

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
  if (!isFormError(error)) throw error

  const data = Object.fromEntries(
    Object.entries((error as { data: object }).data).map(([field, errors]) => {
      if (Array.isArray(errors)) errors = errors.join(". ")
      return [field, errors]
    }),
  )

  setErrors(data)
}

export type SubmitFormOptions<
  QueryArg extends object,
  ResultType,
  FormValues,
> = Partial<{
  clean: (values: FormValues) => QueryArg
  exclude: string[]
  then: (
    result: ResultType,
    values: FormValues,
    helpers: FormikHelpers<FormValues>,
  ) => void
  catch: (
    error: unknown,
    values: FormValues,
    helpers: FormikHelpers<FormValues>,
  ) => void
  finally: (values: FormValues, helpers: FormikHelpers<FormValues>) => void
}>

export type SubmitFormHandler<FormValues> = (
  values: FormValues,
  helpers: FormikHelpers<FormValues>,
) => void | Promise<any>

export function submitForm<
  QueryArg extends object,
  ResultType,
  FormValues extends QueryArg,
>(
  trigger: TypedMutationTrigger<ResultType, QueryArg, any>,
  options?: Omit<SubmitFormOptions<QueryArg, ResultType, FormValues>, "clean">,
): SubmitFormHandler<FormValues>

export function submitForm<QueryArg extends object, ResultType, FormValues>(
  trigger: TypedMutationTrigger<ResultType, QueryArg, any>,
  options?: Omit<
    SubmitFormOptions<QueryArg, ResultType, FormValues>,
    "clean"
  > & {
    clean: NonNullable<
      SubmitFormOptions<QueryArg, ResultType, FormValues>["clean"]
    >
  },
): SubmitFormHandler<FormValues>

export function submitForm<QueryArg extends object, ResultType, FormValues>(
  trigger: TypedMutationTrigger<ResultType, QueryArg, any>,
  options?: SubmitFormOptions<QueryArg, ResultType, FormValues>,
): SubmitFormHandler<FormValues> {
  const {
    clean,
    exclude,
    then,
    catch: _catch,
    finally: _finally,
  } = options || {}

  return (values, helpers) => {
    let arg = clean ? clean(values) : (values as unknown as QueryArg)

    if (exclude) arg = excludeKeyPaths(arg, exclude)

    trigger(arg)
      .unwrap()
      .then(result => {
        if (then) then(result, values, helpers)
      })
      .catch(error => {
        if (_catch) _catch(error, values, helpers)
        setFormErrors(error, helpers.setErrors)
      })
      .finally(() => {
        if (_finally) _finally(values, helpers)
      })
  }
}

export function schemaToFieldValidator(
  schema: Schema,
  options?: ValidateOptions,
): FieldValidator {
  return async value => {
    try {
      await schema.validate(value, options)
    } catch (error) {
      if (error instanceof ValidationError) {
        return error.errors.join(". ")
      }

      throw error
    }
  }
}

// Checking if individual fields are dirty is not currently supported.
// https://github.com/jaredpalmer/formik/issues/1421
export function getDirty<
  Values extends Record<string, any>,
  Names extends Array<keyof Values>,
>(
  values: Values,
  initialValues: Values,
  names: Names,
): Record<Names[number], boolean> {
  return Object.fromEntries(
    names.map(name => [name, isDirty(values, initialValues, name)]),
  ) as Record<Names[number], boolean>
}

export function isDirty<
  Values extends Record<string, any>,
  Name extends keyof Values,
>(values: Values, initialValues: Values, name: Name): boolean {
  return values[name] !== initialValues[name]
}
