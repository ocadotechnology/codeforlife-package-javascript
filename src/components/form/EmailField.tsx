import { EmailOutlined as EmailOutlinedIcon } from "@mui/icons-material"
import { InputAdornment } from "@mui/material"
import type { FC } from "react"
import { string as YupString } from "yup"

import TextField, { type TextFieldProps } from "./TextField"

export interface EmailFieldProps
  extends Omit<TextFieldProps, "type" | "name" | "schema"> {
  name?: string
}

const EmailField: FC<EmailFieldProps> = ({
  name = "email",
  InputProps = {},
  ...otherTextFieldProps
}) => {
  return (
    <TextField
      type="email"
      schema={YupString().email()}
      name={name}
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
