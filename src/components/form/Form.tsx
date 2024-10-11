import {
  Formik,
  Form as FormikForm,
  type FormikConfig,
  type FormikErrors,
} from "formik"
import type { TypedUseMutation } from "@reduxjs/toolkit/query/react"

import {
  submitForm,
  type SubmitFormOptions,
  type FormValues,
} from "../../utils/form"

const _ = <Values extends FormValues>({
  children,
  ...otherFormikProps
}: FormikConfig<Values>) => (
  <Formik {...otherFormikProps}>
    {formik => (
      <FormikForm>
        {typeof children === "function" ? children(formik) : children}
      </FormikForm>
    )}
  </Formik>
)

type SubmitFormProps<
  Values extends FormValues,
  QueryArg extends FormValues,
  ResultType,
> = Omit<FormikConfig<Values>, "onSubmit"> & {
  useMutation: TypedUseMutation<ResultType, QueryArg, any>
} & (Values extends QueryArg
    ? { submitOptions?: SubmitFormOptions<Values, QueryArg, ResultType> }
    : { submitOptions: SubmitFormOptions<Values, QueryArg, ResultType> })

const SubmitForm = <
  Values extends FormValues,
  QueryArg extends FormValues,
  ResultType,
>({
  useMutation,
  submitOptions,
  ...formikProps
}: SubmitFormProps<Values, QueryArg, ResultType>): JSX.Element => {
  const [trigger] = useMutation()

  return (
    <_
      {...formikProps}
      onSubmit={submitForm<Values, QueryArg, ResultType>(
        trigger,
        submitOptions as SubmitFormOptions<Values, QueryArg, ResultType>,
      )}
    />
  )
}

export type FormProps<
  Values extends FormValues,
  QueryArg extends FormValues,
  ResultType,
> = FormikConfig<Values> | SubmitFormProps<Values, QueryArg, ResultType>

const Form: {
  <Values extends FormValues>(props: FormikConfig<Values>): JSX.Element
  <Values extends FormValues, QueryArg extends FormValues, ResultType>(
    props: SubmitFormProps<Values, QueryArg, ResultType>,
  ): JSX.Element
} = <
  Values extends FormValues = FormValues,
  QueryArg extends FormValues = FormValues,
  ResultType = any,
>(
  props: FormProps<Values, QueryArg, ResultType>,
): JSX.Element => {
  return "onSubmit" in props ? <_ {...props} /> : SubmitForm(props)
}

export default Form
export { type FormikErrors as FormErrors }
