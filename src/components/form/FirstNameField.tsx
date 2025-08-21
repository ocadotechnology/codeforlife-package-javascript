import type { FC } from "react"
import { InputAdornment } from "@mui/material"
import { PersonOutlined as PersonOutlinedIcon } from "@mui/icons-material"

import TextField, { type TextFieldProps } from "./TextField"
import { schemas } from "../../api"

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
      schema={schemas.user.first_name}
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
