import React from 'react';
import {
  Button,
  ButtonProps,
  Stack,
  StackProps
} from '@mui/material';
import {
  Field,
  FieldProps
} from 'formik';

export interface SubmitButtonProps extends Omit<ButtonProps, (
  'type' |
  'disabled'
)> {
  stackProps?: Omit<StackProps, 'children'>
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  stackProps,
  children = 'Submit',
  ...otherButtonProps
}) => {
  return (
    <Field
      name='submit'
      type='submit'
    >
      {({ form }: FieldProps) => (
        <Stack {...stackProps}>
          <Button
            type='submit'
            disabled={!(form.dirty && form.isValid)}
            {...otherButtonProps}
          >
            {children}
          </Button>
        </Stack>
      )}
    </Field>
  );
};

export default SubmitButton;
