import { Security as SecurityIcon } from "@mui/icons-material"
import { InputAdornment } from "@mui/material"
import type { FC } from "react"

import TextField, { type TextFieldProps } from "./TextField"

export interface PasswordFieldProps
  extends Omit<TextFieldProps, "type" | "name"> {
  name?: string
}

const PasswordField: FC<PasswordFieldProps> = ({
  name = "password",
  InputProps = {},
  ...otherTextFieldProps
}) => {
  return (
    <TextField
      type="password"
      name={name}
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
