import { Button, type ButtonProps } from "@mui/material"
import { Field, type FieldProps } from "formik"
import type { FC } from "react"

export interface SubmitButtonProps
  extends Omit<ButtonProps, "type" | "onClick"> {}

const SubmitButton: FC<SubmitButtonProps> = ({
  children = "Submit",
  ...otherButtonProps
}) => {
  function getTouched(
    values: Record<string, any>,
    touched?: Record<string, any>,
  ) {
    touched = touched || {}
    for (const key in values) {
      const value = values[key]
      touched[key] =
        value instanceof Object && value.constructor === Object
          ? getTouched(value, touched)
          : true
    }

    return touched
  }

  return (
    <Field name="submit" type="submit">
      {({ form }: FieldProps) => (
        <Button
          type="button"
          onClick={() => {
            form.setTouched(getTouched(form.values), true).then(errors => {
              if (!errors || !Object.keys(errors).length) form.submitForm()
            })
          }}
          {...otherButtonProps}
        >
          {children}
        </Button>
      )}
    </Field>
  )
}

export default SubmitButton
