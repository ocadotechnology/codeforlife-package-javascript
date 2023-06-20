import React from 'react';
import {
  InputAdornment
} from '@mui/material';
import {
  Security as SecurityIcon
} from '@mui/icons-material';
import { string as YupString } from 'yup';

import TextField, { TextFieldProps } from './TextField';

export interface PasswordFieldProps extends Omit<TextFieldProps, (
  'type' |
  'name' |
  'required'
)> {
  name?: string;
}

const PasswordField: React.FC<PasswordFieldProps> = ({
  name = 'password',
  InputProps = {},
  validate = YupString(),
  ...otherTextFieldProps
}) => {
  return (
    <TextField
      required
      type='password'
      name={name}
      validate={validate}
      InputProps={{
        ...InputProps,
        endAdornment: (
          <InputAdornment position='end'>
            <SecurityIcon />
          </InputAdornment>
        )
      }}
      {...otherTextFieldProps}
    />
  );
};

export default PasswordField;
