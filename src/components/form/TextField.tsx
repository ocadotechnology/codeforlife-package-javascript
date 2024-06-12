import {
  TextField as MuiTextField,
  type TextFieldProps as MuiTextFieldProps,
} from "@mui/material"
import { Field, type FieldConfig, type FieldProps } from "formik"
import type { FC } from "react"
import { type StringSchema } from "yup"

import { schemaToFieldValidator } from "../../utils/form"

export type TextFieldProps = Omit<
  MuiTextFieldProps,
  | "name"
  | "id"
  | "value"
  | "onChange"
  | "onBlur"
  | "error"
  | "helperText"
  | "defaultValue"
> & {
  name: string
  schema: StringSchema
}

// https://formik.org/docs/examples/with-material-ui
const TextField: FC<TextFieldProps> = ({
  name,
  schema,
  type = "text",
  required = false,
  ...otherTextFieldProps
}) => {
  if (required) schema = schema.required()

  const fieldConfig: FieldConfig = {
    name,
    type,
    validate: schemaToFieldValidator(schema),
  }

  return (
    <Field {...fieldConfig}>
      {({ form }: FieldProps) => (
        <MuiTextField
          id={name}
          name={name}
          type={type}
          required={required}
          value={form.values[name]}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          error={form.touched[name] && Boolean(form.errors[name])}
          // @ts-expect-error
          helperText={form.touched[name] && form.errors[name]}
          {...otherTextFieldProps}
        />
      )}
    </Field>
  )
}

export default TextField
