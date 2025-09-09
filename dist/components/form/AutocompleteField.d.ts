import { AutocompleteProps, ChipTypeMap, TextFieldProps } from '@mui/material';
import { ElementType, JSX } from 'react';
import { ValidateOptions } from 'yup';
export interface AutocompleteFieldProps<Value extends string | number, Multiple extends boolean | undefined = false, DisableClearable extends boolean | undefined = false, FreeSolo extends boolean | undefined = false, ChipComponent extends ElementType = ChipTypeMap["defaultComponent"]> extends Omit<AutocompleteProps<Value, Multiple, DisableClearable, FreeSolo, ChipComponent>, "renderInput" | "defaultValue" | "onChange" | "onBlur" | "value"> {
    textFieldProps: Omit<TextFieldProps, "name" | "value" | "onChange" | "onBlur" | "error" | "helperText" | "defaultValue" | "type"> & {
        name: string;
    };
    validateOptions?: ValidateOptions;
}
declare const AutocompleteField: <Value extends string | number, Multiple extends boolean | undefined = false, DisableClearable extends boolean | undefined = false, FreeSolo extends boolean | undefined = false, ChipComponent extends ElementType = ChipTypeMap["defaultComponent"]>({ textFieldProps, options, validateOptions, ...otherAutocompleteProps }: AutocompleteFieldProps<Value, Multiple, DisableClearable, FreeSolo, ChipComponent>) => JSX.Element;
export default AutocompleteField;
