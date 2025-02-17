import { FormHelperText, type FormHelperTextProps } from "@mui/material"
import {
  Formik,
  Form as FormikForm,
  type FormikConfig,
  type FormikErrors,
  type FormikProps,
} from "formik"
import { type ReactNode, type FC, useRef, useEffect } from "react"
import type { TypedUseMutation } from "@reduxjs/toolkit/query/react"

import {
  submitForm,
  type SubmitFormOptions,
  type FormValues,
} from "../../utils/form"

type NonFieldErrorsProps = Omit<FormHelperTextProps, "error" | "ref">

const NonFieldErrors: FC<NonFieldErrorsProps> = props => {
  const pRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (pRef.current) {
      pRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }, [])

  return <FormHelperText ref={pRef} error {...props} />
}

export type FormErrors<Values> = FormikErrors<
  Omit<Values, "non_field_errors"> & { non_field_errors: string }
>

type _FormikProps<Values> = Omit<FormikProps<Values>, "errors"> & {
  errors: FormErrors<Values>
}

type _FormikConfig<Values> = Omit<FormikConfig<Values>, "children"> & {
  children: ReactNode | ((props: _FormikProps<Values>) => ReactNode)
  nonFieldErrorsProps?: Omit<NonFieldErrorsProps, "children">
}

const _ = <Values extends FormValues>({
  children,
  nonFieldErrorsProps,
  ...otherFormikProps
}: _FormikConfig<Values>) => (
  <Formik {...otherFormikProps}>
    {/* @ts-expect-error */}
    {(formik: _FormikProps<Values>) => (
      <>
        {typeof formik.errors.non_field_errors === "string" && (
          <NonFieldErrors {...nonFieldErrorsProps}>
            {formik.errors.non_field_errors}
          </NonFieldErrors>
        )}
        <FormikForm>
          {typeof children === "function" ? children(formik) : children}
        </FormikForm>
      </>
    )}
  </Formik>
)

type SubmitFormProps<
  Values extends FormValues,
  QueryArg extends FormValues,
  ResultType,
> = Omit<_FormikConfig<Values>, "onSubmit"> & {
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
        formikProps.initialValues,
        submitOptions as SubmitFormOptions<Values, QueryArg, ResultType>,
      )}
    />
  )
}

export type FormProps<
  Values extends FormValues,
  QueryArg extends FormValues,
  ResultType,
> = _FormikConfig<Values> | SubmitFormProps<Values, QueryArg, ResultType>

const Form: {
  <Values extends FormValues>(props: _FormikConfig<Values>): JSX.Element
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
