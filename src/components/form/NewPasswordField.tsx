import React from 'react';
import {
  InputAdornment,
  InputBaseProps
} from '@mui/material';
import {
  Security as SecurityIcon
} from '@mui/icons-material';
import {
  string as YupString
} from 'yup';

import { wrap } from '../../helpers';
import TextField, { TextFieldProps } from './TextField';

interface PasswordFieldProps extends Omit<TextFieldProps, (
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
  const [password, setPassword] = React.useState<string>();

  const endAdornment: InputBaseProps['endAdornment'] = (
    <InputAdornment position='end'>
      <SecurityIcon />
    </InputAdornment>
  );

  passwordFieldProps.onKeyUp = wrap({
    after: (event: React.KeyboardEvent<HTMLDivElement>) => {
      setPassword((event.target as HTMLTextAreaElement).value);
    }
  }, passwordFieldProps.onKeyUp);

  passwordFieldProps['InputProps'] = {
    endAdornment,
    ...('InputProps' in passwordFieldProps && passwordFieldProps.InputProps)
  };

  repeatPasswordFieldProps['InputProps'] = {
    endAdornment,
    ...('InputProps' in repeatPasswordFieldProps && repeatPasswordFieldProps.InputProps)
  };

  return <>
    <TextField
      type='password'
      name='password'
      required
      {...passwordFieldProps}
    />
    <TextField
      type='password'
      name='repeatPassword'
      required
      validate={YupString().oneOf([password], 'Passwords don\'t match')}
      {...repeatPasswordFieldProps}
    />
  </>;
};

export default NewPasswordField;
