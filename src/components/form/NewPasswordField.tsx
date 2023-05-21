import React from 'react';
import {
  InputAdornment,
  InputBaseProps
} from '@mui/material';
import {
  Security as SecurityIcon
} from '@mui/icons-material';
import {
  StringSchema,
  string,
  ref
} from 'yup';

import TextField, { TextFieldProps } from './TextField';

export const NewPasswordFieldValidation = string()
  .required();

interface PasswordFieldProps extends Omit<TextFieldProps<StringSchema>, (
  'type' |
  'name'
)> { }

interface RepeatPasswordFieldProps extends Omit<PasswordFieldProps, (
  'validate'
)> { }

export interface NewPasswordFieldProps {
  passwordFieldProps?: PasswordFieldProps,
  repeatPasswordFieldProps?: RepeatPasswordFieldProps
}

const NewPasswordField: React.FC<NewPasswordFieldProps> = ({
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  passwordFieldProps = {} as PasswordFieldProps,
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  repeatPasswordFieldProps = {} as RepeatPasswordFieldProps
}) => {
  const endAdornment: InputBaseProps['endAdornment'] = (
    <InputAdornment position='end'>
      <SecurityIcon />
    </InputAdornment>
  );

  passwordFieldProps['InputProps'] = {
    endAdornment,
    ...('InputProps' in passwordFieldProps && passwordFieldProps.InputProps)
  };

  repeatPasswordFieldProps['InputProps'] = {
    endAdornment,
    ...('InputProps' in repeatPasswordFieldProps && repeatPasswordFieldProps.InputProps)
  };

  const {
    validate = NewPasswordFieldValidation,
    ...otherPasswordFieldProps
  } = passwordFieldProps;

  return <>
    <TextField
      type='password'
      name='password'
      validate={validate}
      {...otherPasswordFieldProps}
    />
    <TextField
      type='password'
      name='repeatPassword'
      validate={string()
        .oneOf([ref('password'), undefined], 'Passwords don\'t match')
        .required()
      }
      {...repeatPasswordFieldProps}
    />
  </>;
};

export default NewPasswordField;
