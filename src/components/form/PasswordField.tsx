import { Security as SecurityIcon } from "@mui/icons-material"
import { InputAdornment } from "@mui/material"
import type { FC } from "react"
import { string as YupString } from "yup"

import TextField, { type TextFieldProps } from "./TextField"

export type PasswordFieldProps = Omit<
  TextFieldProps,
  "type" | "name" | "schema"
> &
  Partial<Pick<TextFieldProps, "name" | "schema">>

const PasswordField: FC<PasswordFieldProps> = ({
  name = "password",
  schema = YupString(),
  InputProps = {},
  ...otherTextFieldProps
}) => {
  return (
    <TextField
      type="password"
      name={name}
      schema={schema}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SecurityIcon />
          </InputAdornment>
        ),
        ...InputProps,
      }}
      {...otherTextFieldProps}
    />
  )
}

export default PasswordField
