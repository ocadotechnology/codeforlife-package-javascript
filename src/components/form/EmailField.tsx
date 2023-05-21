import React from 'react';
import {
  InputAdornment
} from '@mui/material';
import {
  EmailOutlined as EmailOutlinedIcon
} from '@mui/icons-material';
import { string as YupString } from 'yup';

import TextField, { TextFieldProps } from './TextField';

export interface EmailFieldProps extends Omit<TextFieldProps, (
  'type' |
  'name'
)> {
  name?: string
}

const EmailField: React.FC<EmailFieldProps> = ({
  name = 'email',
  InputProps = {},
  validate = YupString().email(),
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
