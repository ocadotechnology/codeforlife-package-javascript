import { ChipTypeMap } from '@mui/material';
import { ElementType, JSX } from 'react';
import { TypedUseLazyQuery } from '@reduxjs/toolkit/query/react';
import { AutocompleteFieldProps } from '../../components/form';
import { ListArg, ListResult, ModelId } from '../../utils/api';
export interface ApiAutocompleteFieldProps<SearchKey extends keyof Omit<QueryArg, "limit" | "offset">, QueryArg extends ListArg, ResultType extends ListResult<any>, Multiple extends boolean | undefined = false, DisableClearable extends boolean | undefined = false, FreeSolo extends boolean | undefined = false, ChipComponent extends ElementType = ChipTypeMap["defaultComponent"]> extends Omit<AutocompleteFieldProps<ModelId, Multiple, DisableClearable, FreeSolo, ChipComponent>, "options" | "ListboxComponent" | "filterOptions" | "getOptionLabel" | "getOptionKey" | "onInputChange"> {
    useLazyListQuery: TypedUseLazyQuery<ResultType, QueryArg, any>;
    filterOptions?: Omit<QueryArg, "limit" | "offset" | SearchKey>;
    getOptionLabel: (result: ResultType["data"][number]) => string;
    getOptionKey?: (result: ResultType["data"][number]) => ModelId;
    searchKey: SearchKey;
}
declare const ApiAutocompleteField: <SearchKey extends keyof Omit<QueryArg, "limit" | "offset">, QueryArg extends ListArg, ResultType extends ListResult<any>, Multiple extends boolean | undefined = false, DisableClearable extends boolean | undefined = false, FreeSolo extends boolean | undefined = false, ChipComponent extends ElementType = ChipTypeMap["defaultComponent"]>({ useLazyListQuery, filterOptions, getOptionLabel, getOptionKey, searchKey, ...otherAutocompleteFieldProps }: ApiAutocompleteFieldProps<SearchKey, QueryArg, ResultType, Multiple, DisableClearable, FreeSolo, ChipComponent>) => JSX.Element;
export default ApiAutocompleteField;
