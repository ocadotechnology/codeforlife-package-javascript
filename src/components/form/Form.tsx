import React from "react"
import { Stack, type StackProps } from "@mui/material"
import {
  Formik,
  type FormikValues,
  type FormikConfig,
  Form as FormikForm,
} from "formik"

export interface FormProps<Values> extends FormikConfig<Values> {
  stackProps?: Omit<StackProps, "children">
}

const Form = <Values extends FormikValues = FormikValues>({
  stackProps,
  children,
  ...otherFormikProps
}: FormProps<Values>): JSX.Element => {
  return (
    <Formik {...otherFormikProps}>
      {formik => (
        <FormikForm>
          <Stack {...stackProps}>
            {typeof children === "function" ? children(formik) : children}
          </Stack>
        </FormikForm>
      )}
    </Formik>
  )
}

export default Form
