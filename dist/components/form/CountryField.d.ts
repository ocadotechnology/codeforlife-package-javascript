import { ElementType, JSX } from 'react';
import { ChipTypeMap } from '@mui/material';
import { AutocompleteFieldProps } from './AutocompleteField';
export interface CountryFieldProps<Multiple extends boolean | undefined = false, DisableClearable extends boolean | undefined = false, FreeSolo extends boolean | undefined = false, ChipComponent extends ElementType = ChipTypeMap["defaultComponent"]> extends Omit<AutocompleteFieldProps<string, Multiple, DisableClearable, FreeSolo, ChipComponent>, "options" | "textFieldProps" | "getOptionLabel"> {
    textFieldProps?: Omit<AutocompleteFieldProps<string, Multiple, DisableClearable, FreeSolo, ChipComponent>["textFieldProps"], "name"> & {
        name?: string;
    };
}
declare const CountryField: <Multiple extends boolean | undefined = false, DisableClearable extends boolean | undefined = false, FreeSolo extends boolean | undefined = false, ChipComponent extends ElementType = ChipTypeMap["defaultComponent"]>({ textFieldProps, ...otherAutocompleteFieldProps }: CountryFieldProps<Multiple, DisableClearable, FreeSolo, ChipComponent>) => JSX.Element;
export default CountryField;
