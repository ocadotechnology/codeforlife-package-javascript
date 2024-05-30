import React from "react"
import { flushSync } from "react-dom"
import {
  Autocomplete,
  AutocompleteProps,
  ChipTypeMap,
  TextField,
  TextFieldProps,
  useTheme,
  InputAdornment,
} from "@mui/material"
import { ErrorOutline as ErrorOutlineIcon } from "@mui/icons-material"
import { Field, FieldProps, FieldConfig } from "formik"
import { string as YupString, ValidationError as YupValidationError } from "yup"

import { wrap } from "../../helpers"
import ClickableTooltip from "../ClickableTooltip"

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
    "renderInput" | "onChange" | "defaultValue"
  > {
  textFieldProps: Omit<
    TextFieldProps,
    "type" | "defaultValue" | "InputProps"
  > & {
    name: string
  }
  selectOnly?: boolean
}

const AutocompleteField = <
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
  ChipComponent extends React.ElementType = ChipTypeMap["defaultComponent"],
>({
  textFieldProps,
  selectOnly = false,
  options,
  ...otherAutocompleteProps
}: AutocompleteFieldProps<
  Multiple,
  DisableClearable,
  FreeSolo,
  ChipComponent
>): JSX.Element => {
  const theme = useTheme()

  const fieldConfig: FieldConfig = {
    name: textFieldProps.name,
    type: "text",
    validate: (value): string | void => {
      try {
        let validate = YupString().oneOf(options, "Not a valid option")
        if (textFieldProps.required === true) {
          validate = validate.required()
        }
        validate.validateSync(value)
      } catch (error) {
        if (error instanceof YupValidationError) {
          return error.errors[0]
        }
        throw error
      }
    },
  }

  return (
    <Field {...fieldConfig}>
      {({ form, meta }: FieldProps) => {
        const [showError, setShowError] = React.useState(false)

        let { sx, onBlur, ...otherTextFieldProps } = textFieldProps

        onBlur = wrap(
          {
            after: () => {
              setShowError(true)
            },
          },
          onBlur,
        )

        return (
          <Autocomplete
            options={options}
            defaultValue={meta.initialValue}
            renderInput={({ inputProps, InputProps, ...otherParams }) => {
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

                sx = {
                  ...sx,
                  "& .MuiOutlinedInput-root.Mui-focused > fieldset": {
                    borderColor: theme.palette.error.main,
                  },
                }
              }

              return (
                <TextField
                  {...otherParams}
                  {...otherTextFieldProps}
                  sx={sx}
                  onBlur={onBlur}
                  InputProps={{
                    endAdornment,
                    ...otherInputProps,
                  }}
                  inputProps={{
                    ...inputProps,
                    readOnly: selectOnly,
                  }}
                />
              )
            }}
            onChange={(_, value) => {
              flushSync(() => {
                form.setFieldValue(
                  textFieldProps.name,
                  value ?? undefined,
                  true,
                )
              })
            }}
            {...otherAutocompleteProps}
          />
        )
      }}
    </Field>
  )
}

export default AutocompleteField
