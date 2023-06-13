import React from 'react';
import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
  InputAdornment
} from '@mui/material';
import {
  ErrorOutline as ErrorOutlineIcon
} from '@mui/icons-material';
import {
  Field,
  FieldProps,
  FieldConfig,
  FieldValidator
} from 'formik';
import {
  string as YupString,
  array as YupArray,
  Schema,
  StringSchema,
  ArraySchema,
  AnyObject,
  ValidationError
} from 'yup';

import { wrap } from '../../helpers';
import ClickableTooltip from '../ClickableTooltip';

export type TextFieldProps = Omit<MuiTextFieldProps, 'defaultValue'> & {
  validate?: FieldValidator | StringSchema;
  name: string;
};

type StringArraySchema = ArraySchema<Array<string | undefined> | undefined, AnyObject, '', ''>;

interface ITextField {
  (
    props: TextFieldProps,
    context?: any
  ): React.ReactElement<any, any> | null;
  (
    props: Omit<TextFieldProps, 'validate'> & {
      validate?: FieldValidator | StringArraySchema;
      split: string | RegExp;
    },
    context?: any
  ): React.ReactElement<any, any> | null;
}

const TextField: ITextField = ({
  validate,
  split,
  required = false,
  name,
  type = 'text',
  InputProps = {},
  onKeyUp,
  onBlur,
  ...otherTextFieldProps
}: Omit<TextFieldProps, 'validate'> & {
  validate?: FieldValidator | StringSchema | StringArraySchema;
  split?: string | RegExp
}) => {
  if (validate === undefined) {
    validate = (split === undefined)
      ? YupString()
      : YupArray().of(YupString());
  }

  if (required && validate instanceof Schema) {
    validate = validate.required();
  }

  const fieldConfig: FieldConfig = {
    name,
    type,
    validate: async (value) => {
      if (validate instanceof Schema) {
        try {
          validate.validateSync(value);
        } catch (error) {
          if (error instanceof ValidationError) {
            return error.errors[0];
          }
          throw error;
        }
      } else if (validate !== undefined) {
        return await validate(value);
      }
    }
  };

  return (
    <Field {...fieldConfig}>
      {({ meta, form }: FieldProps) => {
        const [showError, setShowError] = React.useState(false);

        let {
          endAdornment,
          ...otherInputProps
        } = InputProps;

        if (showError &&
          meta.error !== undefined &&
          meta.error !== ''
        ) {
          endAdornment = <>
            {endAdornment}
            <InputAdornment position='end'>
              <ClickableTooltip title={meta.error}>
                <ErrorOutlineIcon color='error' />
              </ClickableTooltip>
            </InputAdornment>
          </>;
        }

        onKeyUp = wrap({
          after: (event: React.KeyboardEvent<HTMLDivElement>) => {
            let value: string | string[] = (event.target as HTMLTextAreaElement).value;
            if (split !== undefined) value = value.split(split);
            form.setFieldValue(name, value, true);
          }
        }, onKeyUp);

        onBlur = wrap({
          after: () => { setShowError(true); }
        }, onBlur);

        return (
          <MuiTextField
            defaultValue={meta.initialValue}
            name={name}
            type={type}
            onKeyUp={onKeyUp}
            onBlur={onBlur}
            InputProps={{
              endAdornment,
              ...otherInputProps
            }}
            {...otherTextFieldProps}
          />
        );
      }}
    </Field>
  );
};

export default TextField;
