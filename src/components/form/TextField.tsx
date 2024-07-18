import {
  TextField as MuiTextField,
  type TextFieldProps as MuiTextFieldProps,
} from "@mui/material"
import { Field, type FieldConfig, type FieldProps } from "formik"
import type { FC } from "react"
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
}

// https://formik.org/docs/examples/with-material-ui
const TextField: FC<TextFieldProps> = ({
  name,
  schema,
  type = "text",
  required = false,
  validateOptions,
  ...otherTextFieldProps
}) => {
  const dotPath = name.split(".")

  if (required) schema = schema.required()

  const fieldConfig: FieldConfig = {
    name,
    type,
    validate: schemaToFieldValidator(schema, validateOptions),
  }

  return (
    <Field {...fieldConfig}>
      {({ form }: FieldProps) => {
        const value = getNestedProperty(form.values, dotPath)
        const error = getNestedProperty(form.errors, dotPath)
        const touched = getNestedProperty(form.touched, dotPath)

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
      }}
    </Field>
  )
}

export default TextField
