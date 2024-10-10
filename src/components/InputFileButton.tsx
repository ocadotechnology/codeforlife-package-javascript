import {
  type FC,
  type DetailedHTMLProps,
  type InputHTMLAttributes,
} from "react"
import { Button, type ButtonProps } from "@mui/material"

export interface InputFileButtonProps
  extends Omit<ButtonProps<"label">, "component"> {
  inputProps?: Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    "type" | "hidden"
  >
}

const InputFileButton: FC<InputFileButtonProps> = ({
  children,
  inputProps,
  ...otherButtonProps
}) => (
  <Button component="label" {...otherButtonProps}>
    {children}
    <input type="file" hidden {...inputProps} />
  </Button>
)

export default InputFileButton
