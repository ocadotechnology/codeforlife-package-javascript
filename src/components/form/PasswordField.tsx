import {
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
} from "@mui/icons-material"
import { IconButton, InputAdornment } from "@mui/material"
import { useState, type FC } from "react"
import { string as YupString } from "yup"

import RepeatField, { type RepeatFieldProps } from "./RepeatField"
import TextField, { type TextFieldProps } from "./TextField"

export type PasswordFieldProps = Omit<
  TextFieldProps,
  "type" | "name" | "schema" | "autoComplete"
> &
  Partial<Pick<TextFieldProps, "name" | "schema">> & {
    withRepeatField?: boolean
    repeatFieldProps?: Omit<RepeatFieldProps, "name" | "type">
  }

const PasswordField: FC<PasswordFieldProps> = ({
  name = "password",
  label = "Password",
  placeholder = "Enter your password",
  schema = YupString(),
  InputProps = {},
  withRepeatField = false,
  repeatFieldProps = {},
  ...otherTextFieldProps
}) => {
  const [isVisible, setIsVisible] = useState(false)

  const type = isVisible ? "text" : "password"
  const endAdornment = (
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
  )

  return (
    <>
      <TextField
        autoComplete="off"
        type={type}
        name={name}
        label={label}
        schema={schema}
        placeholder={placeholder}
        InputProps={{ endAdornment, ...InputProps }}
        {...otherTextFieldProps}
      />
      {withRepeatField && (
        <RepeatField
          name={name}
          type={type}
          {...repeatFieldProps}
          InputProps={{ endAdornment, ...repeatFieldProps.InputProps }}
        />
      )}
    </>
  )
}

export default PasswordField
