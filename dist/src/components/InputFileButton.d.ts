import { ButtonProps } from '@mui/material';
import { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react';
export interface InputFileButtonProps extends Omit<ButtonProps<"label">, "component"> {
    inputProps?: Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "type" | "hidden">;
}
declare const InputFileButton: FC<InputFileButtonProps>;
export default InputFileButton;
