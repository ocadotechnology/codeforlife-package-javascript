import {
  TextField as MuiTextField,
  type TextFieldProps as MuiTextFieldProps,
} from "@mui/material"
import { Field, type FieldConfig, type FieldProps } from "formik"
import { type FC, useState, useEffect } from "react"
import {
  type ArraySchema,
  type StringSchema,
  type ValidateOptions,
  array as YupArray,
  type Schema,
} from "yup"

import { schemaToFieldValidator } from "../../utils/form"
import { getNestedProperty } from "../../utils/general"

export type TextFieldProps = Omit<
  MuiTextFieldProps,
  | "name"
  | "value"
  | "onChange"
  | "onBlur"
  | "error"
  | "defaultValue"
  | "helperText"
> & {
  name: string
  schema: StringSchema
  validateOptions?: ValidateOptions
  dirty?: boolean
  split?: string | RegExp
  unique?: boolean
  uniqueCaseInsensitive?: boolean
}

// https://formik.org/docs/examples/with-material-ui
const TextField: FC<TextFieldProps> = ({
  id,
  name,
  schema,
  type = "text",
  required = false,
  dirty = false,
  unique = false,
  uniqueCaseInsensitive = false,
  split,
  validateOptions,
  ...otherTextFieldProps
}) => {
  const [initialValue, setInitialValue] = useState<string | string[]>("")

  const dotPath = name.split(".")

  let _schema: Schema = schema
  if (split) {
    _schema = YupArray().of(_schema)
    if (unique || uniqueCaseInsensitive) {
      _schema = _schema.test({
        message: "cannot have duplicates",
        test: values => {
          if (Array.isArray(values) && values.length >= 2) {
            return (
              new Set(
                uniqueCaseInsensitive && typeof values[0] === "string"
                  ? values.map(value => value.toLowerCase())
                  : values,
              ).size === values.length
            )
          }

          return true
        },
      })
    }
  }
  if (required) {
    _schema = _schema.required()
    if (split) _schema = (_schema as ArraySchema<string[], any>).min(1)
  }
  if (dirty)
    _schema = _schema.notOneOf([initialValue], "cannot be initial value")

  const fieldConfig: FieldConfig = {
    name,
    type,
    validate: schemaToFieldValidator(_schema, validateOptions),
  }

  const _Field: FC<FieldProps> = ({ form }) => {
    const initialValue = getNestedProperty(form.initialValues, dotPath)
    const value = getNestedProperty(form.values, dotPath)
    const error = getNestedProperty(form.errors, dotPath)
    const touched = getNestedProperty(form.touched, dotPath)

    useEffect(() => {
      setInitialValue(initialValue)
    }, [initialValue])

    useEffect(() => {
      form.setFieldValue(
        name,
        split && typeof value === "string" ? value.split(split) : value,
        true,
      )
    }, [value]) // eslint-disable-line react-hooks/exhaustive-deps

    return (
      <MuiTextField
        id={id ?? name}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
        error={touched && Boolean(error)}
        helperText={(touched && error) as false | string}
        {...otherTextFieldProps}
      />
    )
  }

  return <Field {...fieldConfig}>{_Field}</Field>
}

export default TextField
