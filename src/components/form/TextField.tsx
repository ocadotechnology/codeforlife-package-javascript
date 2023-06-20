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

type StringArraySchema = ArraySchema<Array<string | undefined> | undefined, AnyObject, '', ''>;
type Validate = FieldValidator | StringSchema | StringArraySchema;
type Split = string | RegExp;

type BaseTextFieldProps = Omit<MuiTextFieldProps, 'defaultValue'> & {
  name: string;
};

type RepeatTextFieldProps = BaseTextFieldProps & {
  repeat?: Array<Omit<BaseTextFieldProps, (
    'required' |
    'split'
  )>>;
};

export type TextFieldProps<
  SingleValue extends boolean = true
> = RepeatTextFieldProps & (
  SingleValue extends true
  ? { validate?: FieldValidator | StringSchema; }
  : {
    validate?: FieldValidator | StringArraySchema;
    split: Split;
  }
);

interface ITextField<SingleValue extends boolean> {
  // eslint-disable-next-line @typescript-eslint/prefer-function-type
  (
    props: TextFieldProps<SingleValue>,
    context?: any
  ): React.ReactElement<any, any> | null;
}

const TextField: ITextField<true> & ITextField<false> = ({
  validate,
  split,
  required = false,
  name,
  onKeyUp,
  repeat = [],
  ...otherTextFieldProps
}: RepeatTextFieldProps & {
  validate?: Validate;
  split?: Split;
}) => {
  const [validateRepeat, setValidateRepeat] = React.useState(YupString());

  if (validate === undefined) {
    validate = (split === undefined)
      ? YupString()
      : YupArray().of(YupString());
  }

  if (required && validate instanceof Schema) {
    validate = validate.required();
  }

  // Internal TextField.
  const TextField: React.FC<BaseTextFieldProps & {
    validate: Validate;
    split?: Split;
  }> = ({
    validate,
    split,
    name,
    type = 'text',
    InputProps = {},
    onKeyUp,
    onBlur
  }) => {
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

  if (repeat.length > 0) {
    onKeyUp = wrap({
      after: (event: React.KeyboardEvent<HTMLDivElement>) => {
        setValidateRepeat(YupString().test(
          `matches-${name}`,
          `doesn't match ${name}`,
          (repeatValue) => {
            const value = (event.target as HTMLTextAreaElement).value;
            return value === repeatValue;
          }
        ));
      }
    }, onKeyUp);
  }

  return <>
    <TextField
      validate={validate}
      split={split}
      name={name}
      onKeyUp={onKeyUp}
      {...otherTextFieldProps}
    />
    {repeat.map(textFieldProps =>
      <TextField
        key={textFieldProps.name}
        validate={validateRepeat}
        {...otherTextFieldProps}
        {...textFieldProps}
      />
    )}
  </>;
};

export default TextField;
