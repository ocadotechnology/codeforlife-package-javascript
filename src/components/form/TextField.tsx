import { ErrorOutline as ErrorOutlineIcon } from "@mui/icons-material"
import {
  InputAdornment,
  TextField as MuiTextField,
  type TextFieldProps as MuiTextFieldProps,
} from "@mui/material"
import {
  Field,
  type FieldConfig,
  type FieldProps,
  type FieldValidator,
} from "formik"
import React from "react"
import {
  Schema,
  ValidationError,
  array as YupArray,
  string as YupString,
  type AnyObject,
  type ArraySchema,
  type StringSchema,
} from "yup"

import { wrap } from "../../helpers"
import ClickableTooltip from "../ClickableTooltip"

type StringArraySchema = ArraySchema<
  Array<string | undefined> | undefined,
  AnyObject,
  "",
  ""
>
type Validate = FieldValidator | StringSchema | StringArraySchema
type Split = string | RegExp

type BaseTextFieldProps = Omit<MuiTextFieldProps, "defaultValue"> & {
  name: string
}

type RepeatTextFieldProps = BaseTextFieldProps & {
  repeat?: Array<
    Omit<BaseTextFieldProps, "required" | "split" | "type"> & {
      inheritProps?: boolean
    }
  >
}

export type TextFieldProps<SingleValue extends boolean = true> =
  RepeatTextFieldProps &
    (SingleValue extends true
      ? { validate?: FieldValidator | StringSchema }
      : {
          validate?: FieldValidator | StringArraySchema
          split: Split
        })

// Internal TextField.
const _TextField: React.FC<
  BaseTextFieldProps & {
    validate: Validate
    split?: Split
  }
> = ({
  validate,
  split,
  name,
  type = "text",
  InputProps = {},
  onKeyUp,
  onBlur,
  ...otherTextFieldProps
}) => {
  const fieldConfig: FieldConfig = {
    name,
    type,
    validate: async value => {
      if (validate instanceof Schema) {
        try {
          await validate.validate(value)
        } catch (error) {
          if (error instanceof ValidationError) {
            return error.errors[0]
          }
          throw error
        }
      } else if (validate !== undefined) {
        return await validate(value)
      }
    },
  }

  return (
    <Field {...fieldConfig}>
      {({ meta, form }: FieldProps) => {
        // TODO: simplify this component and remove this state.
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [showError, setShowError] = React.useState(false)

        let { endAdornment, ...otherInputProps } = InputProps

        if (showError && meta.error !== undefined && meta.error !== "") {
          endAdornment = (
            <>
              {endAdornment}
              <InputAdornment position="end">
                <ClickableTooltip title={meta.error}>
                  <ErrorOutlineIcon color="error" />
                </ClickableTooltip>
              </InputAdornment>
            </>
          )
        }

        onKeyUp = wrap(
          {
            after: (event: React.KeyboardEvent<HTMLDivElement>) => {
              let value: string | string[] = (
                event.target as HTMLTextAreaElement
              ).value
              if (split !== undefined) value = value.split(split)
              form.setFieldValue(name, value, true)
            },
          },
          onKeyUp,
        )

        onBlur = wrap(
          {
            after: () => {
              setShowError(true)
            },
          },
          onBlur,
        )

        return (
          <MuiTextField
            defaultValue={meta.initialValue}
            name={name}
            type={type}
            onKeyUp={onKeyUp}
            onBlur={onBlur}
            InputProps={{
              endAdornment,
              ...otherInputProps,
            }}
            {...otherTextFieldProps}
          />
        )
      }}
    </Field>
  )
}

interface ITextField<SingleValue extends boolean> {
  // eslint-disable-next-line @typescript-eslint/prefer-function-type
  (
    props: TextFieldProps<SingleValue>,
    context?: any,
  ): React.ReactElement<any, any> | null
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
  validate?: Validate
  split?: Split
}) => {
  const [validateRepeat, setValidateRepeat] = React.useState(YupString())

  if (validate === undefined) {
    validate = split === undefined ? YupString() : YupArray().of(YupString())
  }

  if (required && validate instanceof Schema) {
    validate = validate.required()
  }

  if (repeat.length > 0) {
    onKeyUp = wrap(
      {
        after: (event: React.KeyboardEvent<HTMLDivElement>) => {
          setValidateRepeat(
            YupString().test(
              `matches-${name}`,
              `doesn't match ${name}`,
              repeatValue => {
                const value = (event.target as HTMLTextAreaElement).value
                return value === repeatValue
              },
            ),
          )
        },
      },
      onKeyUp,
    )
  }

  return (
    <>
      {/* TODO: simplify this component and remove this sub component. */}
      {/* eslint-disable-next-line react/jsx-pascal-case */}
      <_TextField
        validate={validate}
        split={split}
        name={name}
        onKeyUp={onKeyUp}
        {...otherTextFieldProps}
      />
      {repeat.map(({ name, inheritProps = true, ...repeatTextFieldProps }) => (
        // TODO: simplify this component and remove this sub component.
        // eslint-disable-next-line react/jsx-pascal-case
        <_TextField
          key={name}
          name={name}
          validate={validateRepeat}
          type={otherTextFieldProps.type}
          {...(inheritProps && otherTextFieldProps)}
          {...repeatTextFieldProps}
        />
      ))}
    </>
  )
}

export default TextField
