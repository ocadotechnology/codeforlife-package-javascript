import { FormikErrors } from 'formik';

import AutocompleteField, { AutocompleteFieldProps } from './AutocompleteField';
import CheckboxField, { CheckboxFieldProps } from './CheckboxField';
import DateField, { DateFieldProps } from './DateField';
import EmailField, { EmailFieldProps } from './EmailField';
import Form, { FormProps } from './Form';
import PasswordField, { PasswordFieldProps } from './PasswordField';
import SubmitButton, { SubmitButtonProps } from './SubmitButton';
import TextField, { TextFieldProps } from './TextField';

export {
  type FormikErrors as FormErrors,
  AutocompleteField, type AutocompleteFieldProps,
  CheckboxField, type CheckboxFieldProps,
  DateField, type DateFieldProps,
  EmailField, type EmailFieldProps,
  Form, type FormProps,
  PasswordField, type PasswordFieldProps,
  SubmitButton, type SubmitButtonProps,
  TextField, type TextFieldProps
};

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
