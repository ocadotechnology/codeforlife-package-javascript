import type { FC } from "react"
import { string as YupString } from "yup"

import TextField, { type TextFieldProps } from "./TextField"

export type FirstNameFieldProps = Omit<
  TextFieldProps,
  "type" | "name" | "schema"
> &
  Partial<Pick<TextFieldProps, "name">>

const FirstNameField: FC<FirstNameFieldProps> = ({
  name = "first_name",
  placeholder = "First name",
  ...otherTextFieldProps
}) => {
  return (
    <TextField
      schema={YupString().max(150)}
      name={name}
      placeholder={placeholder}
      {...otherTextFieldProps}
    />
  )
}

export default FirstNameField
