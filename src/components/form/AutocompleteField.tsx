import {
  Autocomplete,
  TextField,
  type AutocompleteProps,
  type ChipTypeMap,
  type TextFieldProps,
} from "@mui/material"
import { Field, type FieldConfig, type FieldProps } from "formik"
import { string as YupString, type ValidateOptions } from "yup"

import { schemaToFieldValidator } from "../../utils/form"
import { getNestedProperty } from "../../utils/general"

export interface AutocompleteFieldProps<
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
  ChipComponent extends React.ElementType = ChipTypeMap["defaultComponent"],
> extends Omit<
    AutocompleteProps<
      string, // NOTE: force type to be string, not generic
      Multiple,
      DisableClearable,
      FreeSolo,
      ChipComponent
    >,
    "renderInput" | "defaultValue" | "onChange" | "onBlur" | "value"
  > {
  textFieldProps: Omit<
    TextFieldProps,
    | "name"
    | "id"
    | "value"
    | "onChange"
    | "onBlur"
    | "error"
    | "helperText"
    | "defaultValue"
    | "type"
  > & {
    name: string
  }
  validateOptions?: ValidateOptions
}

const AutocompleteField = <
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
  ChipComponent extends React.ElementType = ChipTypeMap["defaultComponent"],
>({
  textFieldProps,
  options,
  validateOptions,
  ...otherAutocompleteProps
}: AutocompleteFieldProps<
  Multiple,
  DisableClearable,
  FreeSolo,
  ChipComponent
>): JSX.Element => {
  const { name, required, ...otherTextFieldProps } = textFieldProps

  const dotPath = name.split(".")

  let schema = YupString().oneOf(options, "not a valid option")
  if (required) schema = schema.required()

  const fieldConfig: FieldConfig = {
    name,
    type: "text",
    validate: schemaToFieldValidator(schema, validateOptions),
  }

  return (
    <Field {...fieldConfig}>
      {({ form, meta }: FieldProps) => {
        const value = getNestedProperty(form.values, dotPath)
        const touched = getNestedProperty(form.touched, dotPath)
        const error = getNestedProperty(form.errors, dotPath)

        return (
          <Autocomplete
            options={options}
            defaultValue={
              meta.initialValue === "" ? undefined : meta.initialValue
            }
            renderInput={({ id, ...otherParams }) => (
              <TextField
                id={name}
                name={name}
                required={required}
                type="text"
                value={value}
                error={touched && Boolean(error)}
                helperText={(touched && error) as false | string}
                {...otherTextFieldProps}
                {...otherParams}
              />
            )}
            onChange={(_, value) => {
              form.setFieldValue(name, value ?? undefined, true)
            }}
            onBlur={form.handleBlur}
            {...otherAutocompleteProps}
          />
        )
      }}
    </Field>
  )
}

export default AutocompleteField
