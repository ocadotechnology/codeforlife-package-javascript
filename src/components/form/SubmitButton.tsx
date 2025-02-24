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
              const hasErrors = Boolean(errors && Object.keys(errors).length)
              // If has errors, set isSubmitting=true so fields in the form are
              // aware that a submission was attempted. Else, set
              // isSubmitting=false as it will be set to true when calling
              // submitForm().
              form.setSubmitting(hasErrors)
              if (!hasErrors) form.submitForm()
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
