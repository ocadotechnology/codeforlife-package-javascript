import {
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
} from "@mui/icons-material"
import { IconButton, InputAdornment } from "@mui/material"
import { useState, type FC } from "react"
import { string as YupString } from "yup"

import TextField, { type TextFieldProps } from "./TextField"

export type PasswordFieldProps = Omit<
  TextFieldProps,
  "type" | "name" | "schema" | "autoComplete"
> &
  Partial<Pick<TextFieldProps, "name" | "schema">>

const PasswordField: FC<PasswordFieldProps> = ({
  name = "password",
  label = "Password",
  placeholder = "Enter your password",
  schema = YupString(),
  InputProps = {},
  ...otherTextFieldProps
}) => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <TextField
      autoComplete="on"
      type={isVisible ? "text" : "password"}
      name={name}
      label={label}
      schema={schema}
      placeholder={placeholder}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              onClick={() => {
                setIsVisible(previousIsVisible => !previousIsVisible)
              }}
              edge="end"
            >
              {isVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </IconButton>
          </InputAdornment>
        ),
        ...InputProps,
      }}
      {...otherTextFieldProps}
    />
  )
}

export default PasswordField
