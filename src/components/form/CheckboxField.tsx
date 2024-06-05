import { Error as ErrorIcon } from "@mui/icons-material"
import {
  Checkbox,
  FormControlLabel,
  Stack,
  type CheckboxProps,
  type FormControlLabelProps,
} from "@mui/material"
import {
  Field,
  type FieldConfig,
  type FieldProps,
  type FieldValidator,
} from "formik"
import React from "react"
import { BooleanSchema, ValidationError, bool as YupBool } from "yup"

import { wrap } from "../../helpers"
import { form as formTypography } from "../../theme/typography"
import ClickableTooltip from "../ClickableTooltip"

export interface CheckboxFieldProps
  extends Omit<CheckboxProps, "defaultValue"> {
  formControlLabelProps: Omit<FormControlLabelProps, "control">
  validate?: FieldValidator | BooleanSchema
  marginBottom?: number | string
  name: string
}

const CheckboxField: React.FC<CheckboxFieldProps> = ({
  formControlLabelProps,
  validate = YupBool(),
  required = false,
  marginBottom = formTypography.marginBottom,
  name,
  onChange,
  ...otherCheckboxProps
}) => {
  if (required && validate instanceof BooleanSchema) {
    validate = validate.oneOf([true], "this is a required field")
  }

  const fieldConfig: FieldConfig = {
    name,
    type: "checkbox",
    validate: async value => {
      if (validate instanceof BooleanSchema) {
        try {
          await validate.validate(value)
        } catch (error) {
          if (error instanceof ValidationError) {
            return error.errors[0]
          }
          throw error
        }
      } else {
        return await validate(value)
      }
    },
  }

  return (
    <Field {...fieldConfig}>
      {({ form, meta }: FieldProps) => {
        // TODO: simplify this component and remove this state.
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [showError, setShowError] = React.useState(false)

        onChange = wrap(
          {
            after: (_, checked) => {
              setShowError(true)
              form.setFieldValue(name, checked, true)
            },
          },
          onChange,
        )

        return (
          <Stack
            direction="row"
            alignItems="center"
            marginLeft="-12px"
            marginBottom={marginBottom}
            gap={1}
          >
            <FormControlLabel
              control={
                <Checkbox
                  defaultChecked={meta.initialValue}
                  onChange={onChange}
                  {...otherCheckboxProps}
                />
              }
              {...formControlLabelProps}
            />
            {showError && ![undefined, ""].includes(meta.error) && (
              <ClickableTooltip title={meta.error}>
                <ErrorIcon className="checkbox-error" />
              </ClickableTooltip>
            )}
          </Stack>
        )
      }}
    </Field>
  )
}

export default CheckboxField
