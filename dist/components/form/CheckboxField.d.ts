import { CheckboxProps, FormControlLabelProps } from '@mui/material';
import { ValidateOptions } from 'yup';
import { FC } from 'react';
export interface CheckboxFieldProps extends Omit<CheckboxProps, "defaultChecked" | "value" | "onChange" | "onBlur"> {
    name: string;
    formControlLabelProps: Omit<FormControlLabelProps, "control">;
    errorMessage?: string;
    validateOptions?: ValidateOptions;
}
declare const CheckboxField: FC<CheckboxFieldProps>;
export default CheckboxField;
