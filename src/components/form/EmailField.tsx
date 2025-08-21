import { EmailOutlined as EmailOutlinedIcon } from "@mui/icons-material"
import type { FC } from "react"
import { InputAdornment } from "@mui/material"
import { string as YupString } from "yup"

import TextField, { type TextFieldProps } from "./TextField"

export type EmailFieldProps = Omit<TextFieldProps, "type" | "name" | "schema"> &
  Partial<Pick<TextFieldProps, "name">>

const EmailField: FC<EmailFieldProps> = ({
  name = "email",
  label = "Email address",
  placeholder = "Enter your email address",
  InputProps = {},
  ...otherTextFieldProps
}) => {
  return (
    <TextField
      type="email"
      schema={YupString().email()}
      name={name}
      label={label}
      placeholder={placeholder}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <EmailOutlinedIcon />
          </InputAdornment>
        ),
        ...InputProps,
      }}
      {...otherTextFieldProps}
    />
  )
}

export default EmailField
