import { Button, type ButtonProps } from "@mui/material"
import { Field, type FieldProps, type FormikProps } from "formik"
import type { FC } from "react"

export interface SubmitButtonProps
  extends Omit<ButtonProps, "type" | "disabled"> {
  disabled?: (form: FormikProps<any>) => boolean
}

const SubmitButton: FC<SubmitButtonProps> = ({
  children = "Submit",
  disabled = form => !(form.dirty && form.isValid),
  ...otherButtonProps
}) => {
  return (
    <Field name="submit" type="submit">
      {({ form }: FieldProps) => (
        <Button type="submit" disabled={disabled(form)} {...otherButtonProps}>
          {children}
        </Button>
      )}
    </Field>
  )
}

export default SubmitButton
