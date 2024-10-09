import {
  Formik,
  Form as FormikForm,
  type FormikConfig,
  type FormikErrors,
} from "formik"
import type { TypedMutationTrigger } from "@reduxjs/toolkit/query/react"

import {
  submitForm,
  type SubmitFormOptions,
  type FormValues,
} from "../../utils/form"

export type FormProps<
  Values extends FormValues,
  QueryArg extends FormValues,
  ResultType,
> =
  | FormikConfig<Values>
  | (Omit<FormikConfig<Values>, "onSubmit"> & {
      mutationTrigger: TypedMutationTrigger<ResultType, QueryArg, any>
      submitOptions?: SubmitFormOptions<Values, QueryArg, ResultType>
    })

const Form: {
  <Values extends FormValues>(props: FormikConfig<Values>): JSX.Element
  <Values extends FormValues, QueryArg extends FormValues, ResultType>(
    props: Omit<FormikConfig<Values>, "onSubmit"> & {
      mutationTrigger: TypedMutationTrigger<ResultType, QueryArg, any>
      submitOptions?: SubmitFormOptions<Values, QueryArg, ResultType>
    },
  ): JSX.Element
} = <
  Values extends FormValues = FormValues,
  QueryArg extends FormValues = FormValues,
  ResultType = any,
>(
  props: FormProps<Values, QueryArg, ResultType>,
): JSX.Element => {
  let config: FormikConfig<Values>
  if ("onSubmit" in props) config = props
  else {
    const { mutationTrigger, submitOptions, ...formikProps } = props
    config = {
      ...formikProps,
      onSubmit: submitForm<Values, QueryArg, ResultType>(
        mutationTrigger,
        submitOptions,
      ),
    }
  }

  const { children, ...otherFormikProps } = config

  return (
    <Formik {...otherFormikProps}>
      {formik => (
        <FormikForm>
          {typeof children === "function" ? children(formik) : children}
        </FormikForm>
      )}
    </Formik>
  )
}

export default Form
export { type FormikErrors as FormErrors }
