import {
  Formik,
  Form as FormikForm,
  type FormikConfig,
  type FormikErrors,
  type FormikValues,
} from "formik"

export interface FormProps<Values> extends FormikConfig<Values> {}

const Form = <Values extends FormikValues = FormikValues>({
  children,
  ...otherFormikProps
}: FormProps<Values>): JSX.Element => {
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
