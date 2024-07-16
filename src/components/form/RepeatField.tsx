import { TextField as MuiTextField, type TextFieldProps } from "@mui/material"
import { Field, type FieldConfig, type FieldProps } from "formik"
import {
  useEffect,
  useState,
  type Dispatch,
  type FC,
  type SetStateAction,
} from "react"
import { string as YupString, type ValidateOptions } from "yup"

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
  validateOptions?: ValidateOptions
}

const TextField: FC<
  RepeatFieldProps & {
    repeatName: string
    setValue: Dispatch<SetStateAction<string>>
    fieldProps: FieldProps
  }
> = ({
  repeatName,
  setValue,
  fieldProps,
  name,
  label,
  placeholder,
  type,
  ...otherTextFieldProps
}) => {
  const { form } = fieldProps

  useEffect(() => {
    setValue(form.values[name])
  })

  return (
    <MuiTextField
      required
      type={type}
      label={label ?? `Repeat ${name.replace("_", " ")}`}
      placeholder={placeholder ?? `Enter your ${name.replace("_", " ")} again`}
      id={repeatName}
      name={repeatName}
      value={form.values[repeatName]}
      onChange={form.handleChange}
      onBlur={form.handleBlur}
      error={form.touched[repeatName] && Boolean(form.errors[repeatName])}
      helperText={
        (form.touched[repeatName] && form.errors[repeatName]) as false | string
      }
      {...otherTextFieldProps}
    />
  )
}

// https://formik.org/docs/examples/with-material-ui
const RepeatField: FC<RepeatFieldProps> = ({
  name,
  type = "text",
  validateOptions,
  ...otherTextFieldProps
}) => {
  const [value, setValue] = useState("")

  const repeatName = `repeat_${name}`

  const fieldConfig: FieldConfig = {
    name: repeatName,
    type,
    validate: schemaToFieldValidator(
      YupString().required().equals([value], "does not match"),
      validateOptions,
    ),
  }

  return (
    <Field {...fieldConfig}>
      {(fieldProps: FieldProps) => (
        <TextField
          name={name}
          type={type}
          repeatName={repeatName}
          setValue={setValue}
          fieldProps={fieldProps}
          {...otherTextFieldProps}
        />
      )}
    </Field>
  )
}

export default RepeatField
