import React from 'react';
import { FormHelperTextProps } from '@mui/material';
export interface DateFieldProps {
    name?: string;
    required?: boolean;
    previousYears?: number;
    helperText?: string;
    formHelperTextProps?: FormHelperTextProps;
}
declare const DateField: React.FC<DateFieldProps>;
export default DateField;
