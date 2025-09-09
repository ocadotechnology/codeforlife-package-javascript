import { DatePickerProps, PickerValidDate } from '@mui/x-date-pickers';
import { ValidateOptions } from 'yup';
import { JSX } from 'react';
export interface DatePickerFieldProps<TDate extends PickerValidDate, TEnableAccessibleFieldDOMStructure extends boolean = false> extends Omit<DatePickerProps<TDate, TEnableAccessibleFieldDOMStructure>, "name" | "value" | "onChange" | "slotProps"> {
    name: string;
    required?: boolean;
    validateOptions?: ValidateOptions;
}
declare const DatePickerField: <TDate extends PickerValidDate, TEnableAccessibleFieldDOMStructure extends boolean = false>({ name, required, minDate, maxDate, validateOptions, ...otherDatePickerProps }: DatePickerFieldProps<TDate, TEnableAccessibleFieldDOMStructure>) => JSX.Element;
export default DatePickerField;
