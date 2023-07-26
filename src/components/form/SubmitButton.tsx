import React from 'react';
import {
  Button,
  ButtonProps,
  Stack,
  StackProps
} from '@mui/material';
import {
  Field,
  FieldProps,
  FormikProps
} from 'formik';

export interface SubmitButtonProps extends Omit<ButtonProps, (
  'type' |
  'disabled'
)> {
  stackProps?: Omit<StackProps, 'children'>;
  disabled?: (form: FormikProps<any>) => boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  stackProps,
  children = 'Submit',
  disabled = (form) => !(form.dirty && form.isValid),
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
            disabled={disabled(form)}
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
