import React from 'react';
import { flushSync } from 'react-dom';
import {
  Autocomplete,
  AutocompleteProps,
  ChipTypeMap,
  TextField,
  TextFieldProps,
  useTheme,
  InputAdornment
} from '@mui/material';
import {
  ErrorOutline as ErrorOutlineIcon
} from '@mui/icons-material';
import {
  Field,
  FieldProps,
  FieldConfig
} from 'formik';
import {
  string as YupString,
  ValidationError as YupValidationError
} from 'yup';

import { wrap } from '../../helpers';
import ClickableTooltip from '../ClickableTooltip';

export interface AutocompleteFieldProps<
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
  ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent']
> extends Omit<
  AutocompleteProps<
    string, // NOTE: force type to be string, not generic
    Multiple,
    DisableClearable,
    FreeSolo,
    ChipComponent
  >, (
    'renderInput' |
    'onChange'
  )
> {
  textFieldProps: Omit<TextFieldProps, 'type' | 'value'> & {
    name: string;
  }
}

const AutocompleteField = <
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
  ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent']
>({
  textFieldProps,
  options,
  ...otherAutocompleteProps
}: AutocompleteFieldProps<
  Multiple,
  DisableClearable,
  FreeSolo,
  ChipComponent
>): JSX.Element => {
  const theme = useTheme();

  const fieldConfig: FieldConfig = {
    name: textFieldProps.name,
    type: 'text',
    validate: (value): string | void => {
      try {
        let validate = YupString()
          .oneOf(options, 'Not a valid option');
        if (textFieldProps.required === true) {
          validate = validate.required();
        }
        validate.validateSync(value);
      } catch (error) {
        if (error instanceof YupValidationError) {
          return error.errors[0];
        }
        throw error;
      }
    }
  };

  return (
    <Field {...fieldConfig}>
      {({ form, meta }: FieldProps) => {
        const [showError, setShowError] = React.useState(false);

        let {
          sx,
          InputProps = {},
          onBlur,
          ...otherTextFieldProps
        } = textFieldProps;

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

        onBlur = wrap({
          after: () => { setShowError(true); }
        }, onBlur);

        if (meta.initialValue !== undefined && !meta.touched) {
          otherTextFieldProps['value'] = meta.initialValue;
        }

        return (
          <Autocomplete
            options={options}
            renderInput={(params) => (
              <TextField
                {...params}
                {...otherTextFieldProps}
                sx={sx}
                onBlur={onBlur}
                InputProps={{
                  endAdornment,
                  ...otherInputProps
                }}
              />
            )}
            onChange={(_, value) => {
              flushSync(() => {
                form.setFieldValue(textFieldProps.name, value, true);
              });
            }}
            {...otherAutocompleteProps}
          />
        );
      }}
    </Field>
  );
};

export default AutocompleteField;
