import React from 'react';
import { AutocompleteProps, ChipTypeMap, TextFieldProps } from '@mui/material';
export interface AutocompleteFieldProps<Multiple extends boolean | undefined = false, DisableClearable extends boolean | undefined = false, FreeSolo extends boolean | undefined = false, ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent']> extends Omit<AutocompleteProps<string, // NOTE: force type to be string, not generic
Multiple, DisableClearable, FreeSolo, ChipComponent>, ('renderInput' | 'onChange')> {
    textFieldProps: Omit<TextFieldProps, 'type'> & {
        name: string;
    };
}
declare const AutocompleteField: <Multiple extends boolean | undefined = false, DisableClearable extends boolean | undefined = false, FreeSolo extends boolean | undefined = false, ChipComponent extends React.ElementType<any> = "div">({ textFieldProps, options, ...otherAutocompleteProps }: AutocompleteFieldProps<Multiple, DisableClearable, FreeSolo, ChipComponent>) => JSX.Element;
export default AutocompleteField;
