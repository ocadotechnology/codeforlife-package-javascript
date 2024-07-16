import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  type CheckboxProps,
  type FormControlLabelProps,
} from "@mui/material"
import { Field, type FieldConfig, type FieldProps } from "formik"
import { type FC } from "react"
import { bool as YupBool, type ValidateOptions } from "yup"

import { schemaToFieldValidator } from "../../utils/form"

export interface CheckboxFieldProps
  extends Omit<
    CheckboxProps,
    "defaultChecked" | "id" | "value" | "onChange" | "onBlur"
  > {
  name: string
  formControlLabelProps: Omit<FormControlLabelProps, "control">
  errorMessage?: string
  validateOptions?: ValidateOptions
}

const CheckboxField: FC<CheckboxFieldProps> = ({
  name,
  formControlLabelProps,
  required = false,
  errorMessage = "this is a required field",
  validateOptions,
  ...otherCheckboxProps
}) => {
  let schema = YupBool()
  if (required) schema = schema.oneOf([true], errorMessage)

  const fieldConfig: FieldConfig = {
    name,
    type: "checkbox",
    validate: schemaToFieldValidator(schema, validateOptions),
  }

  return (
    <Field {...fieldConfig}>
      {({ form, meta }: FieldProps) => {
        const error = form.touched[name] && Boolean(form.errors[name])

        // https://mui.com/material-ui/react-checkbox/#formgroup
        return (
          <FormControl error={error} required={required}>
            <FormControlLabel
              control={
                <Checkbox
                  defaultChecked={meta.initialValue}
                  id={name}
                  name={name}
                  value={form.values[name]}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  {...otherCheckboxProps}
                />
              }
              {...formControlLabelProps}
            />
            {error && (
              <FormHelperText>{form.errors[name] as string}</FormHelperText>
            )}
          </FormControl>
        )
      }}
    </Field>
  )
}

export default CheckboxField
