import { type FC } from "react"
import { string as YupString } from "yup"

import TextField, { type TextFieldProps } from "./TextField"

export interface OtpFieldProps
  extends Omit<TextFieldProps, "name" | "schema" | "required"> {}

const OtpField: FC<OtpFieldProps> = props => (
  <TextField
    name="otp"
    schema={YupString().matches(/^[0-9]{6}$/, "Must be exactly 6 digits.")}
    required
    {...props}
  />
)

export default OtpField
