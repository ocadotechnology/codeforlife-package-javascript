import { DatePickerProps } from '@mui/x-date-pickers';
import { ValidateOptions } from 'yup';
import { JSX } from 'react';
export interface DatePickerFieldProps<TEnableAccessibleFieldDOMStructure extends boolean = true> extends Omit<DatePickerProps<TEnableAccessibleFieldDOMStructure>, "name" | "value" | "onChange" | "slotProps"> {
    name: string;
    required?: boolean;
    validateOptions?: ValidateOptions;
}
declare const DatePickerField: <TEnableAccessibleFieldDOMStructure extends boolean = false>({ name, required, minDate, maxDate, validateOptions, ...otherDatePickerProps }: DatePickerFieldProps<TEnableAccessibleFieldDOMStructure>) => JSX.Element;
export default DatePickerField;
