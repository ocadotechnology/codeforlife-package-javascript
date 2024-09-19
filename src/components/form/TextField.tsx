import {
  TextField as MuiTextField,
  type TextFieldProps as MuiTextFieldProps,
} from "@mui/material"
import { Field, type FieldConfig, type FieldProps } from "formik"
import { type FC, useState, useEffect } from "react"
import { type StringSchema, type ValidateOptions } from "yup"

import { schemaToFieldValidator } from "../../utils/form"
import { getNestedProperty } from "../../utils/general"

export type TextFieldProps = Omit<
  MuiTextFieldProps,
  | "name"
  | "id"
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
}

// https://formik.org/docs/examples/with-material-ui
const TextField: FC<TextFieldProps> = ({
  name,
  schema,
  type = "text",
  required = false,
  dirty = false,
  validateOptions,
  ...otherTextFieldProps
}) => {
  const [initialValue, setInitialValue] = useState("")

  const dotPath = name.split(".")

  if (required) schema = schema.required()
  if (dirty) schema = schema.notOneOf([initialValue], "cannot be initial value")

  const fieldConfig: FieldConfig = {
    name,
    type,
    validate: schemaToFieldValidator(schema, validateOptions),
  }

  const _Field: FC<FieldProps> = ({ form }) => {
    const initialValue = getNestedProperty(form.initialValues, dotPath)
    const value = getNestedProperty(form.values, dotPath)
    const error = getNestedProperty(form.errors, dotPath)
    const touched = getNestedProperty(form.touched, dotPath)

    useEffect(() => {
      setInitialValue(initialValue)
    }, [initialValue])

    return (
      <MuiTextField
        id={name}
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
