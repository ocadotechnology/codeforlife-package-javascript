import { type FC } from "react"
import { string as YupString } from "yup"

import TextField, { type TextFieldProps } from "./TextField"

export type OtpFieldProps = Omit<
  TextFieldProps,
  "name" | "schema" | "required"
> &
  Partial<Pick<TextFieldProps, "name">>

const OtpField: FC<OtpFieldProps> = ({
  name = "otp",
  label = "OTP",
  placeholder = "Enter your OTP",
  ...otherTextFieldProps
}) => (
  <TextField
    name={name}
    label={label}
    schema={YupString().matches(/^[0-9]{6}$/, "Must be exactly 6 digits.")}
    placeholder={placeholder}
    required
    {...otherTextFieldProps}
  />
)

export default OtpField
