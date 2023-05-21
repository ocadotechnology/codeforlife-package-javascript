import React from 'react';
import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
  InputAdornment,
  useTheme
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
  StringSchema,
  ValidationError
} from 'yup';

import { wrap } from '../../helpers';
import ClickableTooltip from '../ClickableTooltip';

export type TextFieldProps = Omit<MuiTextFieldProps, 'defaultValue'> & {
  validate?: FieldValidator | StringSchema;
  name: string;
};

const TextField: React.FC<TextFieldProps> = ({
  validate = YupString(),
  required = false,
  name,
  type = 'text',
  InputProps = {},
  onKeyUp,
  onBlur,
  sx,
  ...otherTextFieldProps
}) => {
  const theme = useTheme();

  if (required && validate instanceof StringSchema) {
    validate = validate.required();
  }

  const fieldConfig: FieldConfig = {
    name,
    type,
    validate: async (value) => {
      if (validate instanceof StringSchema) {
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

          sx = {
            ...sx,
            '& .MuiOutlinedInput-root.Mui-focused > fieldset': {
              borderColor: theme.palette.error.main
            }
          };
        }

        onKeyUp = wrap({
          after: (event: React.KeyboardEvent<HTMLDivElement>) => {
            const value = (event.target as HTMLTextAreaElement).value;
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
            sx={sx}
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
