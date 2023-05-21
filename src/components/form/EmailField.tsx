import React from 'react';
import {
  InputAdornment
} from '@mui/material';
import {
  EmailOutlined as EmailOutlinedIcon
} from '@mui/icons-material';
import { FieldValidator } from 'formik';
import { string, StringSchema } from 'yup';

import TextField, { TextFieldProps } from './TextField';

export const EmailFieldValidation = string()
  .email();

export interface EmailFieldProps extends Omit<TextFieldProps<StringSchema>, (
  'type' |
  'name' |
  'validate'
)> {
  name?: string,
  validate?: FieldValidator | StringSchema
}

const EmailField: React.FC<EmailFieldProps> = ({
  name = 'email',
  InputProps = {},
  required = false,
  validate = EmailFieldValidation,
  ...otherTextFieldProps
}) => {
  let {
    endAdornment,
    ...otherInputProps
  } = InputProps;

  endAdornment = (
    <InputAdornment position='end'>
      <EmailOutlinedIcon />
    </InputAdornment>
  );

  if (required && validate instanceof StringSchema) {
    validate = validate.required();
  }

  return (
    <TextField
      type='email'
      name={name}
      validate={validate}
      InputProps={{
        endAdornment,
        ...otherInputProps
      }}
      {...otherTextFieldProps}
    />
  );
};

export default EmailField;
