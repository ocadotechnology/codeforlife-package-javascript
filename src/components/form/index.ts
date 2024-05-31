import { type FormikErrors } from "formik"

import AutocompleteField, { type AutocompleteFieldProps } from "./AutocompleteField"
import CheckboxField, { type CheckboxFieldProps } from "./CheckboxField"
import DateField, { type DateFieldProps } from "./DateField"
import EmailField, { type EmailFieldProps } from "./EmailField"
import Form, { type FormProps } from "./Form"
import PasswordField, { type PasswordFieldProps } from "./PasswordField"
import SubmitButton, { type SubmitButtonProps } from "./SubmitButton"
import TextField, { type TextFieldProps } from "./TextField"

export {
  type FormikErrors as FormErrors,
  AutocompleteField,
  type AutocompleteFieldProps,
  CheckboxField,
  type CheckboxFieldProps,
  DateField,
  type DateFieldProps,
  EmailField,
  type EmailFieldProps,
  Form,
  type FormProps,
  PasswordField,
  type PasswordFieldProps,
  SubmitButton,
  type SubmitButtonProps,
  TextField,
  type TextFieldProps,
}

// TODO: Replace the above with the below.
// export type {
//   FormikErrors as FormErrors,
//   AutocompleteFieldProps,
//   CheckboxFieldProps,
//   EmailFieldProps,
//   ContainerProps,
//   PasswordFieldProps,
//   SubmitButtonProps,
//   TextFieldProps
// };

// const Form = {
//   AutocompleteField,
//   CheckboxField,
//   EmailField,
//   Container,
//   PasswordField,
//   SubmitButton,
//   TextField
// };

// export default Form;
