import { TextField, type TextFieldProps } from "@mui/material"
import { Field, type FieldConfig, type FieldProps } from "formik"
import { useState, type FC } from "react"
import * as yup from "yup"

import { schemaToFieldValidator } from "../../utils/form"

export type RepeatFieldProps = Omit<
  TextFieldProps,
  | "name"
  | "id"
  | "value"
  | "onChange"
  | "onBlur"
  | "error"
  | "helperText"
  | "defaultValue"
  | "required"
> & {
  name: string
}

// https://formik.org/docs/examples/with-material-ui
const RepeatField: FC<RepeatFieldProps> = ({
  name,
  label,
  placeholder,
  type = "text",
  ...otherTextFieldProps
}) => {
  const [value, setValue] = useState("")

  const repeatName = `repeat_${name}`

  const fieldConfig: FieldConfig = {
    name: repeatName,
    type,
    validate: schemaToFieldValidator(
      yup
        .string()
        .required()
        .test(
          `matches-${name}`,
          `does not match`,
          repeatValue => value === repeatValue,
        ),
    ),
  }

  return (
    <Field {...fieldConfig}>
      {({ form }: FieldProps) => {
        setValue(form.values[name])

        return (
          <TextField
            required
            type={type}
            label={label ?? `Repeat ${name.replace("_", " ")}`}
            placeholder={
              placeholder ?? `Enter your ${name.replace("_", " ")} again`
            }
            id={repeatName}
            name={repeatName}
            value={form.values[repeatName]}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            error={form.touched[repeatName] && Boolean(form.errors[repeatName])}
            helperText={
              (form.touched[repeatName] && form.errors[repeatName]) as
                | false
                | string
            }
            {...otherTextFieldProps}
          />
        )
      }}
    </Field>
  )
}

export default RepeatField
