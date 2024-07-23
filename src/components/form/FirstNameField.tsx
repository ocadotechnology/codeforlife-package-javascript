import { PersonOutlined as PersonOutlinedIcon } from "@mui/icons-material"
import { InputAdornment } from "@mui/material"
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
  label = "First name",
  placeholder = "Enter your first name",
  InputProps = {},
  ...otherTextFieldProps
}) => {
  return (
    <TextField
      schema={YupString().max(150)}
      name={name}
      label={label}
      placeholder={placeholder}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <PersonOutlinedIcon />
          </InputAdornment>
        ),
        ...InputProps,
      }}
      {...otherTextFieldProps}
    />
  )
}

export default FirstNameField
