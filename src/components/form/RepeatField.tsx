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
import { getNestedProperty } from "../../utils/general"

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

  const dotPath = name.split(".")
  const value = getNestedProperty(form.values, dotPath)

  const repeatDotPath = repeatName.split(".")
  const repeatValue = getNestedProperty(form.values, repeatDotPath)
  const repeatTouched = getNestedProperty(form.touched, repeatDotPath)
  const repeatError = getNestedProperty(form.errors, repeatDotPath)

  useEffect(() => {
    setValue(value)
  }, [setValue, value])

  return (
    <MuiTextField
      required
      type={type}
      label={label ?? `Repeat ${name.replace("_", " ")}`}
      placeholder={placeholder ?? `Enter your ${name.replace("_", " ")} again`}
      id={repeatName}
      name={repeatName}
      value={repeatValue}
      onChange={form.handleChange}
      onBlur={form.handleBlur}
      error={repeatTouched && Boolean(repeatError)}
      helperText={(repeatTouched && repeatError) as false | string}
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

  const repeatName = `${name}_repeat`

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
