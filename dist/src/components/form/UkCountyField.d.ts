import { ElementType, JSX } from 'react';
import { ChipTypeMap } from '@mui/material';
import { AutocompleteFieldProps } from './AutocompleteField';
export interface UkCountyFieldProps<Multiple extends boolean | undefined = false, DisableClearable extends boolean | undefined = false, FreeSolo extends boolean | undefined = false, ChipComponent extends ElementType = ChipTypeMap["defaultComponent"]> extends Omit<AutocompleteFieldProps<string, Multiple, DisableClearable, FreeSolo, ChipComponent>, "options" | "textFieldProps"> {
    textFieldProps?: Omit<AutocompleteFieldProps<string, Multiple, DisableClearable, FreeSolo, ChipComponent>["textFieldProps"], "name"> & {
        name?: string;
    };
}
declare const UkCountyField: <Multiple extends boolean | undefined = false, DisableClearable extends boolean | undefined = false, FreeSolo extends boolean | undefined = false, ChipComponent extends ElementType = ChipTypeMap["defaultComponent"]>({ textFieldProps, ...otherAutocompleteFieldProps }: UkCountyFieldProps<Multiple, DisableClearable, FreeSolo, ChipComponent>) => JSX.Element;
export default UkCountyField;
