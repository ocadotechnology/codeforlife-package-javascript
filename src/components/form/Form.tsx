import { Stack, type StackProps } from "@mui/material"
import {
  Formik,
  Form as FormikForm,
  type FormikConfig,
  type FormikValues,
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
