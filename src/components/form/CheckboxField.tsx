import React from 'react';
import {
  FormControlLabel,
  FormControlLabelProps,
  Checkbox,
  CheckboxProps,
  Icon,
  IconProps,
  Stack,
  StackProps
} from '@mui/material';
import {
  Error as ErrorIcon
} from '@mui/icons-material';
import {
  Field,
  FieldProps,
  FieldConfig,
  FieldValidator
} from 'formik';
import {
  bool as YupBool,
  BooleanSchema,
  ValidationError
} from 'yup';

import { wrap } from '../../helpers';
import ClickableTooltip from '../ClickableTooltip';

export interface CheckboxFieldProps extends Omit<CheckboxProps, 'value'> {
  formControlLabelProps: Omit<FormControlLabelProps, 'control'>,
  stackProps?: Omit<StackProps, 'direction' | 'children'>,
  iconProps?: Omit<IconProps, 'children'>,
  validate?: FieldValidator | BooleanSchema,
  name: string
}

const CheckboxField: React.FC<CheckboxFieldProps> = ({
  formControlLabelProps,
  stackProps = {},
  iconProps = {},
  validate = YupBool(),
  required = false,
  name,
  onChange,
  ...otherCheckboxProps
}) => {
  if (required && validate instanceof BooleanSchema) {
    validate = validate.required();
  }

  const fieldConfig: FieldConfig = {
    name,
    type: 'checkbox',
    validate: async (value) => {
      if (validate instanceof BooleanSchema) {
        try {
          validate.validateSync(value);
        } catch (error) {
          if (error instanceof ValidationError) {
            return error.errors[0];
          }
          throw error;
        }
      } else {
        return await validate(value);
      }
    }
  };

  return (
    <Field {...fieldConfig}>
      {({ form, meta }: FieldProps) => {
        onChange = wrap({
          after: (_, checked) => {
            form.setFieldValue(name, checked, true);
          }
        }, onChange);

        if (meta.initialValue !== undefined && !meta.touched) {
          otherCheckboxProps['value'] = meta.initialValue;
        }

        return (
          <Stack
            direction='row'
            {...stackProps}
          >
            <FormControlLabel
              control={<Checkbox
                onChange={onChange}
                {...otherCheckboxProps}
              />}
              {...formControlLabelProps}
            />
            {meta.error !== undefined && meta.error !== '' &&
              <ClickableTooltip title={meta.error}>
                <Icon {...iconProps}>
                  <ErrorIcon />
                </Icon>
              </ClickableTooltip>
            }
          </Stack>
        );
      }}
    </Field>
  );
};

export default CheckboxField;
