import { Action } from 'redux';
import { AnyObject } from 'yup';
import { Api } from '@reduxjs/toolkit/query/react';
import { AppBarProps } from '@mui/material';
import { AutocompleteProps } from '@mui/material';
import { BaseQueryApi } from '@reduxjs/toolkit/query/react';
import { BooleanSchema } from 'yup';
import { BoxProps } from '@mui/material';
import { ButtonProps } from '@mui/material';
import { CaseReducer } from '@reduxjs/toolkit';
import { CheckboxProps } from '@mui/material';
import { ChipTypeMap } from '@mui/material';
import { CommonProps } from '@mui/material/OverridableComponent';
import { Container } from 'react-dom/client';
import { ContainerProps } from '@mui/material';
import { coreModuleName } from '@reduxjs/toolkit/query/react';
import { CreateSliceOptions } from '@reduxjs/toolkit';
import { DatePickerProps } from '@mui/x-date-pickers';
import { DateSchema } from 'yup';
import { default as default_2 } from 'react';
import { DefaultFromShape } from 'yup';
import { DependencyList } from 'react';
import { DetailedHTMLProps } from 'react';
import { Dispatch } from 'react';
import { DividerProps } from '@mui/material';
import { ElementType } from 'react';
import { EndpointBuilder } from '@reduxjs/toolkit/query/react';
import { EnhancedStore } from '@reduxjs/toolkit';
import { FC } from 'react';
import { FetchArgs } from '@reduxjs/toolkit/query/react';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { FetchBaseQueryMeta } from '@reduxjs/toolkit/query/react';
import { FieldValidator } from 'formik';
import { Flags } from 'yup';
import { FormControlLabelProps } from '@mui/material';
import { FormHelperTextProps } from '@mui/material';
import { FormikConfig } from 'formik';
import { FormikErrors } from 'formik';
import { FormikHelpers } from 'formik';
import { FormikProps } from 'formik';
import { Grid2Props } from '@mui/material';
import { hydrateRoot } from 'react-dom/client';
import { IconButtonProps } from '@mui/material';
import { InferType } from 'yup';
import { InputHTMLAttributes } from 'react';
import { JSX } from 'react';
import { JSX as JSX_2 } from 'react/jsx-runtime';
import { JSXElementConstructor } from 'react';
import { LinkProps as LinkProps_3 } from 'react-router-dom';
import { LinkProps as LinkProps_4 } from '@mui/material';
import { ListItem } from '@mui/material';
import { ListItemProps } from '@mui/material';
import { ListItemText } from '@mui/material';
import { ListProps } from '@mui/material';
import { Location as Location_2 } from 'react-router-dom';
import { MakePartial } from 'yup';
import { Middleware } from '@reduxjs/toolkit';
import { MutationDefinition } from '@reduxjs/toolkit/query/react';
import { MutationDefinition as MutationDefinition_2 } from '@reduxjs/toolkit/query';
import { NavigateOptions as NavigateOptions_2 } from 'react-router-dom';
import { NumberSchema } from 'yup';
import { ObjectSchema } from 'yup';
import { ObjectShape } from 'yup';
import { Params } from 'react-router-dom';
import { PickerValidDate } from '@mui/x-date-pickers';
import { ProviderProps } from 'react-redux';
import { Queries } from '@testing-library/dom';
import { queries } from '@testing-library/dom';
import { QueryDefinition } from '@reduxjs/toolkit/query';
import { QueryReturnValue } from '@reduxjs/toolkit/query/react';
import { ReactElement } from 'react';
import { reactHooksModuleName } from '@reduxjs/toolkit/query/react';
import { ReactNode } from 'react';
import { ReactPortal } from 'react';
import { Reducer } from '@reduxjs/toolkit';
import { ReducerType } from '@reduxjs/toolkit';
import { RefObject } from 'react';
import { RenderOptions } from '@testing-library/react';
import { RenderResult } from '@testing-library/react';
import { Schema } from 'yup';
import { SetStateAction } from 'react';
import { Slice } from '@reduxjs/toolkit';
import { SliceCaseReducers } from '@reduxjs/toolkit';
import { SliceSelectors } from '@reduxjs/toolkit';
import { StackProps } from '@mui/material';
import { Store } from '@reduxjs/toolkit';
import { StoreEnhancer } from 'redux';
import { StringSchema } from 'yup';
import { TableBodyProps } from '@mui/material';
import { TableCell } from '@mui/material';
import { TableCellProps } from '@mui/material';
import { TableContainerProps } from '@mui/material';
import { TableHeadProps } from '@mui/material';
import { TablePaginationBaseProps } from '@mui/material';
import { TablePaginationProps as TablePaginationProps_2 } from '@mui/material';
import { TableProps as TableProps_2 } from '@mui/material';
import { TableRow } from '@mui/material';
import { TableRowProps } from '@mui/material';
import { TabProps } from '@mui/material';
import { TextFieldProps } from '@mui/material';
import { Theme } from '@mui/material';
import { ThemeOptions } from '@mui/material';
import { ThemeProviderProps } from '@mui/material/styles/ThemeProvider';
import { ThunkDispatch } from 'redux-thunk';
import { To } from 'react-router-dom';
import { ToolbarProps } from '@mui/material';
import { TooltipProps } from '@mui/material';
import { Tuple } from '@reduxjs/toolkit';
import { TypedMutationTrigger } from '@reduxjs/toolkit/query/react';
import { TypedUseLazyQuery } from '@reduxjs/toolkit/query/react';
import { TypedUseMutation } from '@reduxjs/toolkit/query/react';
import { TypedUseMutationResult } from '@reduxjs/toolkit/query/react';
import { TypedUseQueryHookResult } from '@reduxjs/toolkit/query/react';
import { TypedUseQueryStateResult } from '@reduxjs/toolkit/query/react';
import { TypeFromShape } from 'yup';
import { TypographyProps } from '@mui/material';
import { UnknownAction } from 'redux';
import { UserEvent } from '@testing-library/user-event';
import { ValidateOptions } from 'yup';
import { ValidationError } from 'yup';

declare type _<T> = T extends {} ? {
    [k in keyof T]: T[k];
} : T;

export declare type AdminSchoolTeacher<Fields = Teacher> = SchoolTeacher<Fields> & {
    is_admin: true;
};

declare const adminSchoolTeacher: Schemas<AdminSchoolTeacher>;

export declare type AdminSchoolTeacherUser<Fields = User> = SchoolTeacherUser<Fields> & {
    teacher: _UserTeacher<AdminSchoolTeacher>;
};

declare const adminSchoolTeacherUser: Schemas<AdminSchoolTeacherUser>;

export declare namespace api {
    export {
        buildUrl,
        isModelId,
        listTag,
        tagData,
        modelUrls,
        handleResultState,
        isSafeHttpMethod,
        Fields,
        Tag,
        ModelId,
        Model,
        Schemas,
        Result,
        Arg,
        CreateResult,
        CreateArg,
        BulkCreateResult,
        BulkCreateArg,
        RetrieveResult,
        RetrieveArg,
        ListResult,
        ListArg,
        UpdateResult,
        UpdateArg,
        BulkUpdateResult,
        BulkUpdateArg,
        DestroyResult,
        DestroyArg,
        BulkDestroyResult,
        BulkDestroyArg,
        TagDataOptions,
        HandleQueryStateOptions
    }
}

declare const ApiAutocompleteField: <SearchKey extends keyof Omit<QueryArg, "limit" | "offset">, QueryArg extends ListArg, ResultType extends ListResult<any>, Multiple extends boolean | undefined = false, DisableClearable extends boolean | undefined = false, FreeSolo extends boolean | undefined = false, ChipComponent extends ElementType = ChipTypeMap["defaultComponent"]>({ useLazyListQuery, filterOptions, getOptionLabel, getOptionKey, searchKey, ...otherAutocompleteFieldProps }: ApiAutocompleteFieldProps<SearchKey, QueryArg, ResultType, Multiple, DisableClearable, FreeSolo, ChipComponent>) => JSX.Element;

declare interface ApiAutocompleteFieldProps<SearchKey extends keyof Omit<QueryArg, "limit" | "offset">, QueryArg extends ListArg, ResultType extends ListResult<any>, Multiple extends boolean | undefined = false, DisableClearable extends boolean | undefined = false, FreeSolo extends boolean | undefined = false, ChipComponent extends ElementType = ChipTypeMap["defaultComponent"]> extends Omit<AutocompleteFieldProps<ModelId, Multiple, DisableClearable, FreeSolo, ChipComponent>, "options" | "ListboxComponent" | "filterOptions" | "getOptionLabel" | "getOptionKey" | "onInputChange"> {
    useLazyListQuery: TypedUseLazyQuery<ResultType, QueryArg, any>;
    filterOptions?: Omit<QueryArg, "limit" | "offset" | SearchKey>;
    getOptionLabel: (result: ResultType["data"][number]) => string;
    getOptionKey?: (result: ResultType["data"][number]) => ModelId;
    searchKey: SearchKey;
}

export declare const App: <A extends Action = Action, S = unknown>({ path, theme, store, maxIdleSeconds, maxTotalSeconds, ...routesProps }: AppProps<A, S>) => JSX.Element;

export declare interface AppProps<A extends Action = Action, S = unknown> {
    path?: string;
    theme: ThemeProviderProps["theme"];
    store: ProviderProps<A, S>["store"];
    routes: ReactNode;
    header?: ReactNode;
    footer?: ReactNode;
    headerExcludePaths?: string[];
    footerExcludePaths?: string[];
    maxIdleSeconds?: number;
    maxTotalSeconds?: number;
}

declare type Arg<M extends Model<any>, RequiredFields extends keyof Omit<M, "id">, OptionalFields extends keyof Omit<M, "id" | RequiredFields> = never> = Required_2<M, RequiredFields> & Optional<M, OptionalFields>;

declare function asciiAlphanumericString(options?: BuildCharSetOptions): StringSchema<string | undefined, AnyObject, undefined, "">;

declare function asciiAlphaString(options?: BuildCharSetOptions): StringSchema<string | undefined, AnyObject, undefined, "">;

declare function asciiNumericString(options?: BuildCharSetOptions): StringSchema<string | undefined, AnyObject, undefined, "">;

export declare namespace auth {
    export {
        logout,
        getCsrfCookie,
        makeOAuth2StorageKey,
        generateOAuth2CodeChallenge,
        OAUTH2_CODE_CHALLENGE_METHODS,
        OAuth2CodeChallengeMethods,
        OAUTH2_CODE_CHALLENGE_LENGTHS,
        OAuth2CodeChallengeLengths,
        OAuth2RequestCodeUrlSearchParams,
        OAuth2ReceiveCodeUrlSearchParams,
        OAuth2CodeChallenge
    }
}

export declare const AUTH_FACTOR_TAG: TagTypes;

export declare type AuthFactor = Model<number, {
    user: User["id"];
    type: "otp";
}>;

declare const authFactor: Schemas<AuthFactor>;

declare const AutocompleteField: <Value extends string | number, Multiple extends boolean | undefined = false, DisableClearable extends boolean | undefined = false, FreeSolo extends boolean | undefined = false, ChipComponent extends ElementType = ChipTypeMap["defaultComponent"]>({ textFieldProps, options, validateOptions, ...otherAutocompleteProps }: AutocompleteFieldProps<Value, Multiple, DisableClearable, FreeSolo, ChipComponent>) => JSX.Element;

declare interface AutocompleteFieldProps<Value extends string | number, Multiple extends boolean | undefined = false, DisableClearable extends boolean | undefined = false, FreeSolo extends boolean | undefined = false, ChipComponent extends ElementType = ChipTypeMap["defaultComponent"]> extends Omit<AutocompleteProps<Value, Multiple, DisableClearable, FreeSolo, ChipComponent>, "renderInput" | "defaultValue" | "onChange" | "onBlur" | "value"> {
    textFieldProps: Omit<TextFieldProps, "name" | "value" | "onChange" | "onBlur" | "error" | "helperText" | "defaultValue" | "type"> & {
        name: string;
    };
    validateOptions?: ValidateOptions;
}

declare const Banner: <Button1State extends Record<string, any> = Record<string, any>, Button2State extends Record<string, any> = Record<string, any>>({ header, subheader, textAlign, imageProps, button1Props, button2Props, bgcolor, }: BannerProps<Button1State, Button2State>) => JSX_2.Element;

declare interface BannerProps<Button1State extends Record<string, any> = Record<string, any>, Button2State extends Record<string, any> = Record<string, any>> {
    header: string;
    subheader?: string;
    textAlign?: "start" | "center";
    imageProps?: ImageProps;
    button1Props?: LinkButtonProps<"to", Button1State>;
    button2Props?: LinkButtonProps<"to", Button2State>;
    bgcolor?: "primary" | "secondary" | "tertiary";
}

export declare const BASE_URL: string;

declare type BaseFormProps<Values> = Omit<FormikConfig<Values>, "children"> & {
    children: ReactNode | ((props: _FormikProps<Values>) => ReactNode);
    scrollIntoViewOptions?: ScrollIntoViewOptions;
    nonFieldErrorsProps?: Omit<NonFieldErrorsProps, "children">;
    fieldRefs?: Array<{
        name: string;
        inputRef: RefObject<HTMLInputElement | null>;
    }>;
};

declare interface BaseUseOAuth2KwArgs<SessionMetadata> {
    provider: string;
    authUri: string;
    clientId: string;
    redirectUri: string;
    scope: string;
    responseType?: "code";
    accessType?: "offline";
    prompt?: string;
    useLoginMutation: TypedUseMutation<SessionMetadata, ExchangeOAuth2CodeArg, any>;
    onCreateSession: (result: SessionMetadata) => void;
    onRetrieveSession: (metadata: SessionMetadata) => void;
}

declare function buildCharSet(charSet: string, description: string, options?: BuildCharSetOptions): StringSchema<string | undefined, AnyObject, undefined, "">;

declare type BuildCharSetOptions = MatchesCharSetOptions & Partial<{
    spaces: boolean;
    specialChars: string;
}>;

export declare function buildLoginEndpoint<ResultType, QueryArg>(build: EndpointBuilder<any, any, any>, url?: string): MutationDefinition_2<QueryArg, any, any, ResultType, any, any>;

export declare function buildLogoutEndpoint<ResultType, QueryArg>(api: Api<any, any, any, any, any>, build: EndpointBuilder<any, any, any>, url?: string): MutationDefinition_2<QueryArg, any, any, ResultType, any, any>;

declare function buildUnicodeCharSet(charSet: string, description: string, options?: BuildCharSetOptions): StringSchema<string | undefined, AnyObject, undefined, "">;

declare function buildUrl(url: string, params: {
    search?: Fields;
    url?: Fields;
}): string;

declare type BulkCreateArg<M extends Model<any>, RequiredFields extends keyof Omit<M, "id">, OptionalFields extends keyof Omit<M, "id" | RequiredFields> = never, ExtraFields extends Fields = Fields> = Array<Arg<M, RequiredFields, OptionalFields> & ExtraFields>;

declare type BulkCreateResult<M extends Model<any>, MFields extends keyof Omit<M, "id"> = never, ExtraFields extends Fields = Fields> = Array<Result<M, MFields> & ExtraFields>;

declare type BulkDestroyArg<M extends Model<any>> = Array<M["id"]>;

declare type BulkDestroyResult = null;

declare type BulkUpdateArg<M extends Model<any>, RequiredFields extends keyof Omit<M, "id">, OptionalFields extends keyof Omit<M, "id" | RequiredFields> = never, ExtraFields extends Fields = Fields> = Record<M["id"], Arg<M, RequiredFields, OptionalFields> & ExtraFields>;

declare type BulkUpdateResult<M extends Model<any>, MFields extends keyof Omit<M, "id"> = never, ExtraFields extends Fields = Fields> = Array<Result<M, MFields> & ExtraFields>;

declare function camelCaseToSnakeCase(obj: Record<string, any>): void;

declare const CellStack: FC<CellStackProps>;

declare interface CellStackProps extends StackProps {
    cellProps?: TableCellProps;
}

declare const CheckboxField: FC<CheckboxFieldProps>;

declare interface CheckboxFieldProps extends Omit<CheckboxProps, "defaultChecked" | "value" | "onChange" | "onBlur"> {
    name: string;
    formControlLabelProps: Omit<FormControlLabelProps, "control">;
    errorMessage?: string;
    validateOptions?: ValidateOptions;
}

export declare type Class = Model<string, {
    name: string;
    teacher: Teacher["id"];
    school: School["id"];
    read_classmates_data: boolean;
    receive_requests_until?: Date;
}>;

export declare const CLASS_TAG: TagTypes;

export declare const ClickableTooltip: default_2.FC<ClickableTooltipProps>;

export declare interface ClickableTooltipProps extends TooltipProps {
}

declare function configureFreshworksWidget(display: "open" | "hide"): void;

export declare const CopyIconButton: FC<CopyIconButtonProps>;

export declare interface CopyIconButtonProps extends Omit<IconButtonProps, "onClick"> {
    content: string;
}

export declare const Countdown: FC<CountdownProps>;

export declare interface CountdownProps extends Omit<TypographyProps, "children"> {
    seconds: number;
    start?: boolean;
    onEnd: () => void;
}

declare const COUNTRIES: readonly ["Andorra", "United Arab Emirates (the)", "Afghanistan", "Antigua and Barbuda", "Anguilla", "Albania", "Armenia", "Angola", "Antarctica", "Argentina", "American Samoa", "Austria", "Australia", "Aruba", "Åland Islands", "Azerbaijan", "Bosnia and Herzegovina", "Barbados", "Bangladesh", "Belgium", "Burkina Faso", "Bulgaria", "Bahrain", "Burundi", "Benin", "Saint Barthélemy", "Bermuda", "Brunei Darussalam", "Bolivia (Plurinational State of)", "Bonaire, Sint Eustatius and Saba", "Brazil", "Bahamas (the)", "Bhutan", "Bouvet Island", "Botswana", "Belarus", "Belize", "Canada", "Cocos (Keeling) Islands (the)", "Congo (the Democratic Republic of the)", "Central African Republic (the)", "Congo (the)", "Switzerland", "Côte d'Ivoire", "Cook Islands (the)", "Chile", "Cameroon", "China", "Colombia", "Costa Rica", "Cuba", "Cabo Verde", "Curaçao", "Christmas Island", "Cyprus", "Czechia", "Germany", "Djibouti", "Denmark", "Dominica", "Dominican Republic (the", "Algeria", "Ecuador", "Estonia", "Egypt", "Western Sahara", "Eritrea", "Spain", "Ethiopia", "Finland", "Fiji", "Falkland Islands (the) [Malvinas]", "Micronesia (Federated States of)", "Faroe Islands (the)", "France", "Gabon", "United Kingdom of Great Britain and Northern Ireland (the)", "Grenada", "Georgia", "French Guiana", "Guernsey", "Ghana", "Gibraltar", "Greenland", "Gambia (the)", "Guinea", "Guadeloupe", "Equatorial Guinea", "Greece", "South Georgia and the South Sandwich Islands", "Guatemala", "Guam", "Guinea-Bissau", "Guyana", "Hong Kong", "Heard Island and McDonald Islands", "Honduras", "Croatia", "Haiti", "Hungary", "Indonesia", "Ireland", "Israel", "Isle of Man", "India", "British Indian Ocean Territory (the)", "Iraq", "Iran (Islamic Republic of)", "Iceland", "Italy", "Jersey", "Jamaica", "Jordan", "Japan", "Kenya", "Kyrgyzstan", "Cambodia", "Kiribati", "Comoros (the)", "Saint Kitts and Nevis", "Korea (the Democratic People's Republic of)", "Korea (the Republic of)", "Kuwait", "Cayman Islands (the)", "Kazakhstan", "Lao People's Democratic Republic (the)", "Lebanon", "Saint Lucia", "Liechtenstein", "Sri Lanka", "Liberia", "Lesotho", "Lithuania", "Luxembourg", "Latvia", "Libya", "Morocco", "Monaco", "Moldova (the Republic of)", "Montenegro", "Saint Martin (French part)", "Madagascar", "Marshall Islands (the)", "Republic of North Macedonia", "Mali", "Myanmar", "Mongolia", "Macao", "Northern Mariana Islands (the)", "Martinique", "Mauritania", "Montserrat", "Malta", "Mauritius", "Maldives", "Malawi", "Mexico", "Malaysia", "Mozambique", "Namibia", "New Caledonia", "Niger (the)", "Norfolk Island", "Nigeria", "Nicaragua", "Netherlands (the)", "Norway", "Nepal", "Nauru", "Niue", "New Zealand", "Oman", "Panama", "Peru", "French Polynesia", "Papua New Guinea", "Philippines (the)", "Pakistan", "Poland", "Saint Pierre and Miquelon", "Pitcairn", "Puerto Rico", "Palestine, State of", "Portugal", "Palau", "Paraguay", "Qatar", "Réunion", "Romania", "Serbia", "Russian Federation (the)", "Rwanda", "Saudi Arabia", "Solomon Islands", "Seychelles", "Sudan (the)", "Sweden", "Singapore", "Saint Helena, Ascension and Tristan da Cunha", "Slovenia", "Svalbard and Jan Mayen", "Slovakia", "Sierra Leone", "San Marino", "Senegal", "Somalia", "Suriname", "South Sudan", "Sao Tome and Principe", "El Salvador", "Sint Maarten (Dutch part)", "Syrian Arab Republic", "Eswatini", "Turks and Caicos Islands (the)", "Chad", "French Southern Territories (the)", "Togo", "Thailand", "Tajikistan", "Tokelau", "Timor-Leste", "Turkmenistan", "Tunisia", "Tonga", "Turkey", "Trinidad and Tobago", "Tuvalu", "Taiwan (Province of China)", "Tanzania, United Republic of", "Ukraine", "Uganda", "United States Minor Outlying Islands (the)", "United States of America (the)", "Uruguay", "Uzbekistan", "Holy See (the)", "Saint Vincent and the Grenadines", "Venezuela (Bolivarian Republic of)", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Viet Nam", "Vanuatu", "Wallis and Futuna", "Samoa", "Yemen", "Mayotte", "South Africa", "Zambia", "Zimbabwe"];

declare type Countries = (typeof COUNTRIES)[number];

declare const COUNTRY_ISO_CODE_MAPPING: Record<CountryIsoCodes, Countries>;

declare const COUNTRY_ISO_CODES: readonly ["AD", "AE", "AF", "AG", "AI", "AL", "AM", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "SS", "ST", "SV", "SX", "SY", "SZ", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UM", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WS", "YE", "YT", "ZA", "ZM", "ZW"];

declare const CountryField: <Multiple extends boolean | undefined = false, DisableClearable extends boolean | undefined = false, FreeSolo extends boolean | undefined = false, ChipComponent extends ElementType = ChipTypeMap["defaultComponent"]>({ textFieldProps, ...otherAutocompleteFieldProps }: CountryFieldProps<Multiple, DisableClearable, FreeSolo, ChipComponent>) => JSX.Element;

declare interface CountryFieldProps<Multiple extends boolean | undefined = false, DisableClearable extends boolean | undefined = false, FreeSolo extends boolean | undefined = false, ChipComponent extends ElementType = ChipTypeMap["defaultComponent"]> extends Omit<AutocompleteFieldProps<string, Multiple, DisableClearable, FreeSolo, ChipComponent>, "options" | "textFieldProps" | "getOptionLabel"> {
    textFieldProps?: Omit<AutocompleteFieldProps<string, Multiple, DisableClearable, FreeSolo, ChipComponent>["textFieldProps"], "name"> & {
        name?: string;
    };
}

declare type CountryIsoCodes = (typeof COUNTRY_ISO_CODES)[number];

export declare function createApi<TagTypes extends string = never>({ tagTypes, }?: {
    tagTypes?: readonly TagTypes[];
}): Api<(args: string | FetchArgs, api: BaseQueryApi, extraOptions: {}) => Promise<QueryReturnValue<unknown, FetchBaseQueryError, FetchBaseQueryMeta>>, {
    logout: MutationDefinition<null, any, any, null, any, any>;
}, "api", TagTypes | TagTypes, typeof coreModuleName | typeof reactHooksModuleName>;

declare type CreateArg<M extends Model<any>, RequiredFields extends keyof Omit<M, "id">, OptionalFields extends keyof Omit<M, "id" | RequiredFields> = never> = Arg<M, RequiredFields, OptionalFields>;

declare type CreateResult<M extends Model<any>, MFields extends keyof Omit<M, "id"> = never> = Result<M, MFields>;

export declare const createSlice: <State, CaseReducers extends SliceCaseReducers<State>, Name extends string, Selectors extends SliceSelectors<State>, ReducerPath extends string = Name>(options: CreateSliceOptions<State, CaseReducers, Name, ReducerPath, Selectors>) => Slice<State, CaseReducers, Name, ReducerPath, Selectors>;

export declare const CSRF_COOKIE_NAME: string;

declare const DatePickerField: <TDate extends PickerValidDate, TEnableAccessibleFieldDOMStructure extends boolean = false>({ name, required, minDate, maxDate, validateOptions, ...otherDatePickerProps }: DatePickerFieldProps<TDate, TEnableAccessibleFieldDOMStructure>) => JSX.Element;

declare interface DatePickerFieldProps<TDate extends PickerValidDate, TEnableAccessibleFieldDOMStructure extends boolean = false> extends Omit<DatePickerProps<TDate, TEnableAccessibleFieldDOMStructure>, "name" | "value" | "onChange" | "slotProps"> {
    name: string;
    required?: boolean;
    validateOptions?: ValidateOptions;
}

declare type DestroyArg<M extends Model<any>> = M["id"];

declare type DestroyResult = null;

export declare const DEV: boolean;

export declare const DownloadFileButton: FC<DownloadFileButtonProps>;

export declare type DownloadFileButtonProps = ButtonProps & {
    file: Blob | MediaSource | {
        text: string;
        mimeType: "plain" | "csv";
        name: string;
        charset?: string;
        extension?: string;
    };
};

export declare const ElevatedAppBar: FC<ElevatedAppBarProps>;

export declare interface ElevatedAppBarProps extends Omit<AppBarProps, "position"> {
    containerProps: ContainerProps;
    toolbarProps?: ToolbarProps;
}

declare const EmailField: FC<EmailFieldProps>;

declare type EmailFieldProps = Omit<TextFieldProps_2, "type" | "name" | "schema"> & Partial<Pick<TextFieldProps_2, "name">>;

export declare type ExchangeOAuth2CodeArg = {
    code: string;
    code_verifier: string;
    redirect_uri: string;
};

declare function excludeKeyPaths(obj: object, exclude: string[], delimiter?: string): any;

declare type Fields = Record<string, unknown>;

declare const FirstNameField: FC<FirstNameFieldProps>;

declare type FirstNameFieldProps = Omit<TextFieldProps_2, "type" | "name" | "schema"> & Partial<Pick<TextFieldProps_2, "name">>;

declare const Form: {
    <Values extends FormValues>(props: BaseFormProps<Values>): JSX.Element;
    <Values extends FormValues, QueryArg extends FormValues, ResultType>(props: SubmitFormProps<Values, QueryArg, ResultType>): JSX.Element;
};

export declare namespace form {
    export {
        isFormError,
        setFormErrors,
        submitForm,
        schemaToFieldValidator,
        getDirty,
        isDirty,
        getCleanNames,
        FormValues,
        SubmitFormOptions,
        SubmitFormHandler
    }
}

declare type FormErrors<Values> = FormikErrors<Omit<Values, "__all__"> & {
    __all__: string;
}>;

declare type _FormikProps<Values> = Omit<FormikProps<Values>, "errors"> & {
    errors: FormErrors<Values>;
};

declare type FormProps<Values extends FormValues, QueryArg extends FormValues, ResultType> = BaseFormProps<Values> | SubmitFormProps<Values, QueryArg, ResultType>;

export declare namespace forms {
    export {
        ApiAutocompleteField,
        ApiAutocompleteFieldProps,
        AutocompleteField,
        AutocompleteFieldProps,
        CheckboxField,
        CheckboxFieldProps,
        CountryField,
        CountryFieldProps,
        DatePickerField,
        DatePickerFieldProps,
        EmailField,
        EmailFieldProps,
        FirstNameField,
        FirstNameFieldProps,
        Form,
        FormProps,
        FormErrors,
        OtpField,
        OtpFieldProps,
        PasswordField,
        PasswordFieldProps,
        RepeatField,
        RepeatFieldProps,
        SubmitButton,
        SubmitButtonProps,
        TextField,
        TextFieldProps_2 as TextFieldProps,
        UkCountyField,
        UkCountyFieldProps
    }
}

declare type FormValues = Record<string, any>;

export declare namespace general {
    export {
        openInNewTab,
        wrap,
        snakeCaseToCamelCase,
        camelCaseToSnakeCase,
        getNestedProperty,
        withKeyPaths,
        getKeyPaths,
        excludeKeyPaths,
        generateSecureRandomString,
        Required_2 as Required,
        Optional,
        OptionalPropertyNames,
        IsOptional,
        MIN_DATE,
        COUNTRY_ISO_CODES,
        CountryIsoCodes,
        COUNTRIES,
        Countries,
        COUNTRY_ISO_CODE_MAPPING,
        UK_COUNTIES,
        UkCounties
    }
}

declare function generateOAuth2CodeChallenge(length: OAuth2CodeChallengeLengths): Promise<OAuth2CodeChallenge>;

declare function generateSecureRandomString(length: number, charSet?: string): string;

declare function getClassNames(props: CommonProps): string[];

declare function getCleanNames<Values extends FormValues>(values: Values, initialValues: Values, names?: string[]): string[];

declare function getCsrfCookie(): string | undefined;

declare function getDirty<Values extends FormValues>(values: Values, initialValues: Values, names?: string[]): Record<string, boolean>;

declare function getKeyPaths(obj: object, delimiter?: string): string[];

declare function getNestedProperty(obj: Record<string, any>, dotPath: string | string[]): any;

declare function getParam(path: Path, key: string): string;

export declare function getReadAuthFactorEndpoints<ListResult extends ListResult<AuthFactor> = ListAuthFactorsResult, ListArg extends ListArg<AuthFactor> = ListAuthFactorsArg>(build: EndpointBuilder<any, any, any>): {
    listAuthFactors: QueryDefinition<ListArg, any, any, ListResult, any, any>;
};

export declare function getReadClassEndpoints<RetrieveResult extends RetrieveResult<Class> = RetrieveClassResult, RetrieveArg extends RetrieveArg<Class> = RetrieveClassArg, ListResult extends ListResult<Class> = ListClassesResult, ListArg extends ListArg<Class> = ListClassesArg>(build: EndpointBuilder<any, any, any>): {
    retrieveClass: QueryDefinition<RetrieveArg, any, any, RetrieveResult, any, any>;
    listClasses: QueryDefinition<ListArg, any, any, ListResult, any, any>;
};

export declare function getReadSchoolEndpoints<RetrieveResult extends RetrieveResult<School> = RetrieveSchoolResult, RetrieveArg extends RetrieveArg<School> = RetrieveSchoolArg>(build: EndpointBuilder<any, any, any>): {
    retrieveSchool: QueryDefinition<RetrieveArg, any, any, RetrieveResult, any, any>;
};

export declare function getReadUserEndpoints<RetrieveResult extends RetrieveResult<User> = RetrieveUserResult, RetrieveArg extends RetrieveArg<User> = RetrieveUserArg, ListResult extends ListResult<User> = ListUsersResult, ListArg extends ListArg<User> = ListUsersArg>(build: EndpointBuilder<any, any, any>): {
    retrieveUser: QueryDefinition<RetrieveArg, any, any, RetrieveResult, any, any>;
    listUsers: QueryDefinition<ListArg, any, any, ListResult, any, any>;
};

declare function getStyleOverrides(ownerState: CommonProps, componentKey: keyof NonNullable<ThemeOptions["components"]>, muiClassName?: string, components?: ThemeOptions["components"]): object;

declare interface GlobalItemProps extends ItemProps {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
}

declare type HandleQueryStateOptions = Partial<{
    loading: ReactNode;
    error: ReactNode;
}>;

declare function handleResultState<QueryArg, ResultType>(result: TypedUseQueryHookResult<ResultType, QueryArg, any> | TypedUseQueryStateResult<ResultType, QueryArg, any> | TypedUseMutationResult<ResultType, QueryArg, any>, children: (data: NonNullable<ResultType>) => ReactNode, options?: HandleQueryStateOptions): ReactNode;

declare type HydrateableContainer = Parameters<typeof hydrateRoot>[0];

declare const Image_2: FC<ImageProps>;
export { Image_2 as Image }

export declare interface ImageProps extends Omit<BoxProps, "component"> {
    alt: string;
    src: string;
    href?: string;
    hrefInNewTab?: boolean;
}

export declare const InactiveDialog: FC<InactiveDialogProps>;

export declare interface InactiveDialogProps {
    open: boolean;
    onClose: () => void;
}

declare function includesClassNames(propsOrClassNames: CommonProps | string[], includes: string[]): boolean;

export declare type IndependentUser<Fields = User> = Fields & {
    email: string;
    last_name: string;
    teacher?: undefined;
    student?: undefined;
};

declare const indyUser: Schemas<IndependentUser>;

export declare const InputFileButton: FC<InputFileButtonProps>;

export declare interface InputFileButtonProps extends Omit<ButtonProps<"label">, "component"> {
    inputProps?: Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "type" | "hidden">;
}

declare function insertDividerBetweenElements({ elements, dividerProps, }: {
    elements: ReactElement[];
    dividerProps?: DividerProps;
}): ReactElement[];

declare function isDirty<Values extends FormValues>(values: Values, initialValues: Values, name: string): boolean;

declare function isFormError(error: unknown): boolean;

declare function isModelId(value: unknown): boolean;

declare type IsOptional<T, K extends keyof T> = K extends OptionalPropertyNames<T> ? true : false;

declare function isSafeHttpMethod(method: string): boolean;

export declare const ItemizedList: FC<ItemizedListProps>;

export declare interface ItemizedListProps {
    styleType: "unset" | "initial" | "inherit" | "upper-roman" | "upper-latin" | "upper-alpha" | "square" | "none" | "lower-roman" | "lower-latin" | "lower-greek" | "lower-alpha" | "georgian" | "disc" | "decimal-leading-zero" | "decimal" | "armenian" | "circle";
    listProps?: ListProps;
    pl?: number;
    children: ListItemElement | ListItemElement[];
}

declare interface ItemProps extends Omit<Grid2Props, "key" | "order" | "xs" | "sm" | "md" | "lg" | "xl" | "xsOffset" | "smOffset" | "mdOffset" | "lgOffset" | "xlOffset"> {
}

declare const klass: Schemas<Class>;

export declare const Link: {
    (props: LinkProps<"delta">): JSX.Element;
    <State extends Record<string, any> = Record<string, any>>(props: LinkProps<"to", State>): JSX.Element;
};

export declare const LinkButton: {
    (props: LinkButtonProps<"delta">): JSX.Element;
    <State extends Record<string, any> = Record<string, any>>(props: LinkButtonProps<"to", State>): JSX.Element;
};

export declare type LinkButtonProps<Override extends "delta" | "to", State extends Record<string, any> = Record<string, any>> = Omit<ButtonProps, "component"> & LinkProps_2<Override, State>;

export declare const LinkIconButton: {
    (props: LinkIconButtonProps<"delta">): JSX.Element;
    <State extends Record<string, any> = Record<string, any>>(props: LinkIconButtonProps<"to", State>): JSX.Element;
};

export declare type LinkIconButtonProps<Override extends "delta" | "to", State extends Record<string, any> = Record<string, any>> = Omit<IconButtonProps, "component"> & LinkProps_2<Override, State>;

export declare const LinkListItem: {
    (props: LinkListItemProps<"delta">): JSX.Element;
    <State extends Record<string, any> = Record<string, any>>(props: LinkListItemProps<"to", State>): JSX.Element;
};

export declare type LinkListItemProps<Override extends "delta" | "to", State extends Record<string, any> = Record<string, any>> = Omit<ListItemProps, "component"> & LinkProps_2<Override, State>;

export declare type LinkProps<Override extends "delta" | "to", State extends Record<string, any> = Record<string, any>> = Omit<LinkProps_4, "component"> & LinkProps_2<Override, State>;

declare type LinkProps_2<Override extends "delta" | "to", State extends Record<string, any> = Record<string, any>> = Omit<LinkProps_3, "to" | "state"> & (Override extends "delta" ? {
    to: number;
} : {
    to: To;
    state?: State & Partial<PageState>;
});

export declare const LinkTab: {
    (props: LinkTabProps<"delta">): JSX.Element;
    <State extends Record<string, any> = Record<string, any>>(props: LinkTabProps<"to", State>): JSX.Element;
};

export declare type LinkTabProps<Override extends "delta" | "to", State extends Record<string, any> = Record<string, any>> = Omit<TabProps, "component"> & LinkProps_2<Override, State>;

declare type ListArg<Filters extends Fields = Fields> = {
    limit: number;
    offset: number;
} & Partial<Omit<Filters, "limit" | "offset">>;

export declare type ListAuthFactorsArg = ListArg;

export declare type ListAuthFactorsResult = ListResult<AuthFactor, "type">;

export declare type ListClassesArg = ListArg<{
    teacher: Teacher["id"];
    _id: Class["id"] | Class["id"][];
    id_or_name: string;
}>;

export declare type ListClassesResult = ListResult<Class, "name" | "read_classmates_data" | "receive_requests_until" | "school", {
    teacher: SchoolTeacher & {
        user: Pick<SchoolTeacherUser, "id" | "first_name" | "last_name" | "email" | "is_active" | "date_joined" | "requesting_to_join_class">;
    };
}>;

declare type ListItemElement = ReactElement<typeof ListItem | typeof ListItemText> | string;

declare interface ListResult<M extends Model<any>, MFields extends keyof Omit<M, "id"> = never, ExtraFields extends Fields = Fields> {
    count: number;
    offset: number;
    limit: number;
    max_limit: number;
    data: Array<Result<M, MFields> & ExtraFields>;
}

declare function listTag<Type extends string>(type: Type): Tag<Type>;

export declare type ListUsersArg = ListArg<{
    students_in_class: Class["id"];
    _id: User["id"] | User["id"][];
    name: string;
    type: "teacher" | "student" | "independent" | "indy";
}>;

export declare type ListUsersResult = ListResult<User, "first_name" | "last_name" | "email" | "is_active" | "date_joined" | "requesting_to_join_class" | "student" | "teacher">;

declare function logout(): void;

export declare const logoutMiddleware: Middleware;

declare function lowercaseAsciiAlphanumericString(options?: BuildCharSetOptions): StringSchema<string | undefined, AnyObject, undefined, "">;

declare function lowercaseAsciiAlphaString(options?: BuildCharSetOptions): StringSchema<string | undefined, AnyObject, undefined, "">;

declare function lowercaseUnicodeAlphanumericString(options?: BuildCharSetOptions): StringSchema<string | undefined, AnyObject, undefined, "">;

declare function lowercaseUnicodeAlphaString(options?: BuildCharSetOptions): StringSchema<string | undefined, AnyObject, undefined, "">;

declare type MakeKeysOptional<T> = T extends AnyObject ? _<MakePartial<T>> : T;

declare function makeOAuth2StorageKey(provider: string, key: string): string;

declare function makeStore<R extends Reducer>({ reducer, middlewares, preloadedState, }: {
    reducer: R;
    middlewares?: Middleware[];
    preloadedState?: Partial<ReturnType<R>>;
}): EnhancedStore<any, UnknownAction, Tuple<[ StoreEnhancer<{
    dispatch: ThunkDispatch<any, undefined, UnknownAction>;
}>, StoreEnhancer]>>;

declare function matchClassNames(propsOrClassNames: CommonProps | string[], pattern: string | RegExp): RegExpMatchArray[];

declare function matchesCharSet(charSet: string, message: string, options?: MatchesCharSetOptions): StringSchema<string | undefined, AnyObject, undefined, "">;

declare type MatchesCharSetOptions = Partial<{
    schema: StringSchema;
    flags: string;
}>;

declare const MIN_DATE: Date;

/**
 * This file contains all of vite's environment variables.
 *
 * https://vite.dev/guide/env-and-mode#env-variables
 */
export declare const MODE: string;

/**
 * A data model.
 *  Id: The type of Id.
 *  Data: The data fields.
 */
declare type Model<Id extends ModelId, MFields extends Fields = Fields> = {
    id: Id;
} & Omit<MFields, "id">;

declare type ModelId = string | number;

declare function modelUrls(list: string, detail: string): {
    list: string;
    detail: string;
};

export declare type Navigate = {
    <State extends Record<string, any> = Record<string, any>>(to: To, options?: NavigateOptions<State>): void;
    (delta: number): void;
};

export declare type NavigateOptions<State extends Record<string, any> = Record<string, any>> = Omit<NavigateOptions_2, "state"> & {
    state?: State & Partial<PageState>;
    next?: boolean;
};

declare const Navigator_2: {
    (props: NavigatorProps<"delta">): JSX.Element;
    <State extends Record<string, any> = Record<string, any>>(props: NavigatorProps<"to", State>): JSX.Element;
};
export { Navigator_2 as Navigator }

export declare type NavigatorProps<Override extends "delta" | "to", State extends Record<string, any> = Record<string, any>> = Override extends "delta" ? {
    delta: number;
    to?: undefined;
} : {
    delta?: undefined;
    to: To;
} & NavigateOptions<State>;

export declare type NonAdminSchoolTeacher<Fields = Teacher> = SchoolTeacher<Fields> & {
    is_admin: false;
};

declare const nonAdminSchoolTeacher: Schemas<NonAdminSchoolTeacher>;

export declare type NonAdminSchoolTeacherUser<Fields = User> = SchoolTeacherUser<Fields> & {
    teacher: _UserTeacher<NonAdminSchoolTeacher>;
};

declare const nonAdminSchoolTeacherUser: Schemas<NonAdminSchoolTeacherUser>;

declare type NonFieldErrorsProps = Omit<FormHelperTextProps, "error" | "ref"> & {
    scrollIntoViewOptions?: ScrollIntoViewOptions;
};

export declare type NonSchoolTeacher<Fields = Teacher> = Fields & {
    school?: undefined;
    is_admin: false;
};

declare const nonSchoolTeacher: Schemas<NonSchoolTeacher>;

export declare type NonSchoolTeacherUser<Fields = User> = TeacherUser<Fields> & {
    teacher: _UserTeacher<NonSchoolTeacher>;
};

declare const nonSchoolTeacherUser: Schemas<NonSchoolTeacherUser>;

declare const Notification_2: FC<NotificationProps>;

declare interface NotificationProps {
    open?: boolean;
    error?: boolean;
    onClose?: () => void;
    children: ReactNode;
    bgcolor?: "secondary" | "tertiary";
}

declare function numericId(schema?: NumberSchema): NumberSchema<number | undefined, AnyObject, undefined, "">;

export declare type OAuth2 = [string, OAuth2RequestCodeUrlSearchParams] | [];

declare const OAUTH2_CODE_CHALLENGE_LENGTHS: readonly [43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128];

declare const OAUTH2_CODE_CHALLENGE_METHODS: readonly ["S256"];

declare type OAuth2CodeChallenge = {
    verifier: string;
    challenge: string;
    method: OAuth2CodeChallengeMethods;
};

declare type OAuth2CodeChallengeLengths = (typeof OAUTH2_CODE_CHALLENGE_LENGTHS)[number];

declare type OAuth2CodeChallengeMethods = (typeof OAUTH2_CODE_CHALLENGE_METHODS)[number];

declare type OAuth2ReceiveCodeUrlSearchParams = {
    code: string;
    state: string;
};

declare type OAuth2RequestCodeUrlSearchParams = {
    client_id: string;
    redirect_uri: string;
    scope: string;
    response_type: string;
    access_type: string;
    prompt?: string;
    state: string;
    code_challenge: string;
    code_challenge_method: string;
};

declare type ObjectFromShape<Shape extends ObjectShape> = MakeKeysOptional<_<TypeFromShape<Shape, AnyObject>>>;

declare type ObjectSchemaFromShape<Shape extends ObjectShape> = ObjectSchema<_<TypeFromShape<Shape, AnyObject>>, AnyObject, _<DefaultFromShape<Shape>>, "">;

declare function openInNewTab(url: string, target?: string): void;

declare type Optional<T, K extends keyof T> = Partial<Pick<T, K>>;

declare type OptionalPropertyNames<T> = {
    [K in keyof T]-?: {} extends {
        [P in K]: T[K];
    } ? K : never;
}[keyof T];

export declare const OrderedGrid: FC<OrderedGridProps>;

export declare interface OrderedGridProps {
    rows: Array<Array<{
        element: ReactElement;
        itemProps?: ItemProps;
    }>>;
    containerProps?: Omit<Grid2Props, "container">;
    globalItemProps: GlobalItemProps;
}

export declare type OtpBypassToken = Model<number, {
    user: User["id"];
    token: string;
}>;

declare const otpBypassToken: Schemas<OtpBypassToken>;

declare const OtpField: FC<OtpFieldProps>;

declare type OtpFieldProps = Omit<TextFieldProps_2, "name" | "schema" | "required"> & Partial<Pick<TextFieldProps_2, "name">>;

declare const Page: <SessionUserType extends SessionMetadata["user_type"] | undefined = undefined>({ children, session, }: PageProps<SessionUserType>) => JSX.Element;

declare interface PageProps<SessionUserType extends SessionMetadata["user_type"] | undefined> {
    children: UseSessionChildren<SessionUserType>;
    session?: UseSessionOptions<SessionUserType>;
}

export declare namespace pages {
    export {
        Banner,
        BannerProps,
        Notification_2 as Notification,
        NotificationProps,
        Page,
        PageProps,
        PageState,
        Section,
        SectionProps,
        TabBar,
        TabBarProps
    }
}

declare type PageState = {
    notifications: Array<{
        index?: number;
        props: NotificationProps;
    }>;
    scroll: {
        x: number;
        y: number;
    };
};

export declare type Pagination = {
    page: number;
    limit: number;
    offset: number;
};

declare type Parameters_2 = Record<string, string>;

declare const PasswordField: FC<PasswordFieldProps>;

declare type PasswordFieldProps = Omit<TextFieldProps_2, "type" | "name" | "schema" | "autoComplete"> & Partial<Pick<TextFieldProps_2, "name" | "schema">> & {
    withRepeatField?: boolean;
    repeatFieldProps?: Omit<RepeatFieldProps, "name" | "type">;
};

declare interface Path {
    _: string;
    __: string | Parameters_2;
    [subpath: string]: string | Path | Parameters_2;
}

declare function path<Subpaths extends Record<string, Path>>(_: string | Parameters_2, subpaths?: Subpaths): Path & Subpaths;

export declare const PROD: boolean;

export declare interface PropsColorOverrides {
    tertiary: true;
    white: true;
    black: true;
    teacher: true;
    student: true;
    indy: true;
}

declare type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
};

/**
 * Renders the given React element with Redux Provider and custom store.
 * This function is useful for testing components that are connected to the
 * Redux store.
 *
 * @param ui - The React component or element to render.
 * @param reducer - The root reducer to use for the store.
 * @param extendedRenderOptions - Optional configuration options for rendering.
 *  This includes `preloadedState` for initial Redux state and `store` for a
 *  specific Redux store instance. Any additional properties are passed to React
 *  Testing Library's render function.
 * @returns An object containing the Redux store used in the render, User event
 *  API for simulating user interactions in tests, and all of React Testing
 *  Library's query functions for testing the component.
 */
declare function renderWithStore<R extends Reducer, Q extends Queries = typeof queries, Container extends Container | HydrateableContainer = HTMLElement, BaseElement extends Container | HydrateableContainer = Container>(ui: ReactElement, reducer: R, extendedRenderOptions?: RenderOptions<Q, Container, BaseElement> & {
    /**
     * The middlewares used to create the Redux store.
     */
    middlewares?: Middleware[];
    /**
     * Defines a specific portion or the entire initial state for the Redux store.
     * This is particularly useful for initializing the state in a
     * controlled manner during testing, allowing components to be rendered
     * with predetermined state conditions.
     */
    preloadedState?: Partial<ReturnType<R>>;
    /**
     * Allows the use of a specific Redux store instance instead of a
     * default or global store. This flexibility is beneficial when
     * testing components with unique store requirements or when isolating
     * tests from a global store state. The custom store should be configured
     * to match the structure and middleware of the store used by the application.
     *
     * @default makeStore({reducer,middlewares,preloadedState})
     */
    store?: Store;
}): RenderWithUserResult<Q, Container, BaseElement> & {
    store: ReturnType<typeof makeStore<R>>;
};

declare function renderWithUser<Q extends Queries = typeof queries, Container extends Container | HydrateableContainer = HTMLElement, BaseElement extends Container | HydrateableContainer = Container>(ui: ReactElement, renderOptions?: RenderOptions<Q, Container, BaseElement>): RenderWithUserResult<Q, Container, BaseElement>;

declare type RenderWithUserResult<Q extends Queries = typeof queries, Container extends Container | HydrateableContainer = HTMLElement, BaseElement extends Container | HydrateableContainer = Container> = RenderResult<Q, Container, BaseElement> & {
    user: UserEvent;
};

declare const RepeatField: FC<RepeatFieldProps>;

declare type RepeatFieldProps = Omit<TextFieldProps, "name" | "value" | "onChange" | "onBlur" | "error" | "helperText" | "defaultValue" | "required"> & {
    name: string;
    validateOptions?: ValidateOptions;
};

declare type Required_2<T, K extends keyof T> = {
    [P in K]-?: T[P];
};

declare type Result<M extends Model<any>, MFields extends keyof Omit<M, "id"> = never> = Pick<M, "id" | MFields>;

declare type RetrieveArg<M extends Model<any>> = M["id"];

export declare type RetrieveClassArg = RetrieveArg<Class>;

export declare type RetrieveClassResult = RetrieveResult<Class, "name" | "read_classmates_data" | "receive_requests_until" | "school"> & {
    teacher: SchoolTeacher & {
        user: Pick<SchoolTeacherUser, "id" | "first_name" | "last_name" | "email" | "is_active" | "date_joined" | "requesting_to_join_class">;
    };
};

declare type RetrieveResult<M extends Model<any>, MFields extends keyof Omit<M, "id"> = never> = Result<M, MFields>;

export declare type RetrieveSchoolArg = RetrieveArg<School>;

export declare type RetrieveSchoolResult = RetrieveResult<School, "name" | "country" | "uk_county">;

export declare type RetrieveUserArg = RetrieveArg<User>;

export declare type RetrieveUserResult = RetrieveResult<User, "first_name" | "last_name" | "email" | "is_active" | "date_joined" | "requesting_to_join_class" | "student" | "teacher">;

export declare namespace router {
    export {
        path,
        getParam,
        LinkProps_2 as LinkProps,
        ReadOnly,
        Parameters_2 as Parameters,
        Path
    }
}

export declare namespace schema {
    export {
        numericId,
        matchesCharSet,
        buildCharSet,
        buildUnicodeCharSet,
        asciiAlphaString,
        lowercaseAsciiAlphaString,
        uppercaseAsciiAlphaString,
        asciiNumericString,
        asciiAlphanumericString,
        lowercaseAsciiAlphanumericString,
        uppercaseAsciiAlphanumericString,
        unicodeAlphaString,
        lowercaseUnicodeAlphaString,
        uppercaseUnicodeAlphaString,
        unicodeNumericString,
        unicodeAlphanumericString,
        lowercaseUnicodeAlphanumericString,
        uppercaseUnicodeAlphanumericString,
        tryValidateSync,
        _,
        MakeKeysOptional,
        ObjectFromShape,
        ObjectSchemaFromShape,
        SchemaMap,
        MatchesCharSetOptions,
        BuildCharSetOptions,
        TryValidateSyncOnErrorRT,
        TryValidateSyncRT,
        TryValidateSyncOptions
    }
}

declare type SchemaMap<TType, TContext = AnyObject, TDefault = any, TFlags extends Flags = ""> = NonNullable<TType> extends string ? StringSchema<TType extends undefined ? TType | undefined : TType, TContext, TDefault, TFlags> : NonNullable<TType> extends number ? NumberSchema<TType extends undefined ? TType | undefined : TType, TContext, TDefault, TFlags> : NonNullable<TType> extends boolean ? BooleanSchema<TType extends undefined ? TType | undefined : TType, TContext, TDefault, TFlags> : NonNullable<TType> extends Date ? DateSchema<TType extends undefined ? TType | undefined : TType, TContext, TDefault, TFlags> : NonNullable<TType> extends object ? ObjectSchema<TType extends undefined ? TType | undefined : TType, TContext, TDefault, TFlags> : Schema<TType, TContext, TDefault, TFlags>;

declare type Schemas<M extends Model<any>> = {
    [K in keyof M]-?: SchemaMap<M[K]>;
};

export declare namespace schemas {
    export {
        user,
        teacherUser,
        schoolTeacherUser,
        adminSchoolTeacherUser,
        nonAdminSchoolTeacherUser,
        nonSchoolTeacherUser,
        studentUser,
        indyUser,
        teacher,
        schoolTeacher,
        adminSchoolTeacher,
        nonAdminSchoolTeacher,
        nonSchoolTeacher,
        student,
        school,
        klass,
        authFactor,
        otpBypassToken
    }
}

declare function schemaToFieldValidator(schema: Schema, options?: ValidateOptions): FieldValidator;

export declare type School = Model<number, {
    name: string;
    country?: CountryIsoCodes;
    uk_county?: UkCounties;
}>;

declare const school: Schemas<School>;

export declare const SCHOOL_TAG: TagTypes;

export declare type SchoolTeacher<Fields = Teacher> = Fields & {
    school: School["id"];
};

declare const schoolTeacher: Schemas<SchoolTeacher>;

export declare type SchoolTeacherUser<Fields = User> = TeacherUser<Fields> & {
    teacher: _UserTeacher<SchoolTeacher>;
};

declare const schoolTeacherUser: Schemas<SchoolTeacherUser>;

export declare const ScreenTimeDialog: FC<ScreenTimeDialogProps>;

export declare interface ScreenTimeDialogProps {
    open: boolean;
    onClose: () => void;
}

export declare const ScrollIntoViewLink: FC<ScrollIntoViewLinkProps>;

export declare interface ScrollIntoViewLinkProps extends Omit<LinkProps_4, "onClick"> {
    elementId: string;
    options?: ScrollIntoViewOptions;
}

declare const Section: FC<SectionProps>;

declare interface SectionProps extends ContainerProps {
    boxProps?: Omit<BoxProps, "children">;
}

export declare const SERVICE_API_URL: string;

/**
 * This file contains all of our custom settings we define for our own purposes.
 *
 * This file is based on:
 * https://github.com/ocadotechnology/codeforlife-package-python/blob/main/codeforlife/settings/custom.py
 */
export declare const SERVICE_NAME: string;

export declare const SESSION_COOKIE_NAME: string;

export declare const SESSION_METADATA_COOKIE_NAME: string;

export declare interface SessionMetadata {
    user_id: User["id"];
    user_type: "teacher" | "student" | "indy";
    auth_factors: Array<AuthFactor["type"]>;
    otp_bypass_token_exists: boolean;
}

export declare const sessionSlice: Slice<SessionState, {
    login: CaseReducer<SessionState, {
        payload: void;
        type: string;
    }> & {
        _reducerDefinitionType: ReducerType.reducer;
    };
    logout: CaseReducer<SessionState, {
        payload: void;
        type: string;
    }> & {
        _reducerDefinitionType: ReducerType.reducer;
    };
}, "session", "session", {
    selectIsLoggedIn: (session: SessionState) => boolean;
}>;

export declare interface SessionState {
    isLoggedIn: boolean;
}

declare function setFormErrors(error: unknown, setErrors: (errors: object) => void): void;

export declare type SetPagination = Dispatch<SetStateAction<{
    page: number;
    limit: number;
}>>;

declare function snakeCaseToCamelCase(obj: Record<string, any>): void;

export declare const SSR: boolean;

export declare namespace store {
    export {
        makeStore
    }
}

export declare type Student = Model<number, {
    user: User["id"];
    school: School["id"];
    klass: Class["id"];
    auto_gen_password: string;
}>;

declare const student: Schemas<Student>;

export declare type StudentUser<Fields = User> = Fields & {
    email?: undefined;
    last_name?: undefined;
    teacher?: undefined;
    student: _UserStudent<Student>;
};

declare const studentUser: Schemas<StudentUser>;

declare const SubmitButton: FC<SubmitButtonProps>;

declare interface SubmitButtonProps extends Omit<ButtonProps, "type" | "onClick"> {
}

declare function submitForm<Values extends QueryArg, QueryArg extends FormValues, ResultType>(trigger: TypedMutationTrigger<ResultType, QueryArg, any>, initialValues: Values, options?: SubmitFormOptions<Values, QueryArg, ResultType>): SubmitFormHandler<Values>;

declare function submitForm<Values extends FormValues, QueryArg extends FormValues, ResultType>(trigger: TypedMutationTrigger<ResultType, QueryArg, any>, initialValues: Values, options: SubmitFormOptions<Values, QueryArg, ResultType>): SubmitFormHandler<Values>;

declare type SubmitFormHandler<Values extends FormValues> = (values: Values, helpers: FormikHelpers<Values>) => void | Promise<any>;

declare type SubmitFormOptions<Values extends FormValues, QueryArg extends FormValues, ResultType> = Partial<{
    exclude: string[];
    include: string[];
    onlyDirtyValues: boolean;
    then: (result: ResultType, values: Values, helpers: FormikHelpers<Values>) => void;
    catch: (error: unknown, values: Values, helpers: FormikHelpers<Values>) => void;
    finally: (values: Values, helpers: FormikHelpers<Values>) => void;
}> & (Values extends QueryArg ? {
    clean?: (values: Values) => QueryArg;
} : {
    clean: (values: Values) => QueryArg;
});

declare type SubmitFormProps<Values extends FormValues, QueryArg extends FormValues, ResultType> = Omit<BaseFormProps<Values>, "onSubmit"> & {
    useMutation: TypedUseMutation<ResultType, QueryArg, any>;
} & (Values extends QueryArg ? {
    submitOptions?: SubmitFormOptions<Values, QueryArg, ResultType>;
} : {
    submitOptions: SubmitFormOptions<Values, QueryArg, ResultType>;
});

export declare const SyncError: FC<SyncErrorProps>;

export declare interface SyncErrorProps {
}

declare const TabBar: FC<TabBarProps>;

declare interface TabBarProps {
    header: string;
    tabs: Array<{
        label: string;
        children: ReactNode;
        path: string;
    }>;
    originalPath: string;
    value?: number;
}

declare const Table: FC<TableProps>;

export declare const TablePagination: <QueryArg extends ListArg, ResultType extends ListResult<any>, RootComponent extends ElementType = JSXElementConstructor<TablePaginationBaseProps>, AdditionalProps = {}>({ children, useLazyListQuery, preferCacheValue, filters, page: initialPage, rowsPerPage: initialLimit, rowsPerPageOptions, stackProps, onRowsPerPageChange, onPageChange, ...tablePaginationProps }: TablePaginationProps<QueryArg, ResultType, RootComponent, AdditionalProps>) => JSX.Element;

export declare type TablePaginationProps<QueryArg extends ListArg, ResultType extends ListResult<any>, RootComponent extends ElementType = JSXElementConstructor<TablePaginationBaseProps>, AdditionalProps = {}> = Omit<TablePaginationProps_2<RootComponent, AdditionalProps>, "component" | "count" | "rowsPerPage" | "onRowsPerPageChange" | "rowsPerPageOptions" | "page" | "onPageChange"> & Partial<Pick<TablePaginationProps_2<RootComponent, AdditionalProps>, "onRowsPerPageChange" | "onPageChange">> & {
    children: (data: ResultType["data"], pagination: Pagination & {
        count?: number;
        maxLimit?: number;
    }) => ReactNode;
    useLazyListQuery: TypedUseLazyQuery<ResultType, QueryArg, any>;
    preferCacheValue?: boolean;
    filters?: Omit<QueryArg, "limit" | "offset">;
    rowsPerPageOptions?: number[];
    stackProps?: StackProps;
    page?: number;
    rowsPerPage?: number;
};

declare interface TableProps extends TableProps_2 {
    headers: Array<ReactNode | TableCellProps>;
    children: ReactNode;
    containerProps?: TableContainerProps;
    headProps?: TableHeadProps;
    headRowProps?: TableRowProps;
    bodyProps?: TableBodyProps;
}

export declare namespace tables {
    export {
        Table,
        TableProps,
        CellStack,
        CellStackProps,
        TableCell as Cell,
        TableCellProps as CellProps,
        TableRow as BodyRow,
        TableRowProps as BodyRowProps
    }
}

declare interface Tag<Type extends string> {
    type: Type;
    id: string;
}

declare function tagData<Type extends string, M extends Model<any>>(type: Type, options?: TagDataOptions): (result: Result<M, any> | Array<Result<M, any>> | ListResult<M, any> | null | undefined, error: FetchBaseQueryError | undefined, arg: Arg<M, any> | Array<Arg<M, any>> | Record<M["id"], Arg<M, any>> | ListArg<any> | Array<M["id"]> | string | number | undefined) => Array<Tag<Type>>;

declare type TagDataOptions = Partial<{
    includeListTag: boolean;
    argKeysAreIds: boolean;
    id: string;
}>;

declare type TagTypes = (typeof tagTypes)[number];

export declare const tagTypes: readonly ["User", "School", "Class", "AuthFactor"];

export declare type Teacher = Model<number, {
    user: User["id"];
    school?: School["id"];
    is_admin: boolean;
}>;

declare const teacher: Schemas<Teacher>;

export declare type TeacherUser<Fields = User> = Fields & {
    email: string;
    last_name: string;
    teacher: _UserTeacher<Teacher>;
    student?: undefined;
};

declare const teacherUser: Schemas<TeacherUser>;

export declare namespace test_2 {
    export {
        renderWithUser,
        renderWithStore
    }
}

declare const TextField: FC<TextFieldProps_2>;

declare type TextFieldProps_2 = Omit<TextFieldProps, "name" | "value" | "onChange" | "onBlur" | "error" | "defaultValue" | "helperText"> & {
    name: string;
    schema: StringSchema;
    validateOptions?: ValidateOptions;
    dirty?: boolean;
    split?: string | RegExp;
    unique?: boolean;
    uniqueCaseInsensitive?: boolean;
};

export declare const theme: Theme;

export declare namespace theme_2 {
    export {
        insertDividerBetweenElements,
        getStyleOverrides,
        getClassNames,
        includesClassNames,
        matchClassNames
    }
}

export declare const ThemedBox: default_2.FC<ThemedBoxProps>;

export declare interface ThemedBoxProps extends BoxProps {
    options?: ThemeOptions;
    withShapes?: boolean;
    userType: "teacher" | "student" | "independent";
    bgcolor?: string;
}

export declare const themeOptions: ThemeOptions;

declare function toggleOneTrustInfoDisplay(): void;

declare function tryValidateSync<S extends Schema>(value: any, schema: S, options?: ValidateOptions): InferType<S> | undefined;

declare function tryValidateSync<S extends Schema, OnErrorRT extends TryValidateSyncOnErrorRT<S>>(value: any, schema: S, options?: ValidateOptions & {
    onError: (error: ValidationError) => OnErrorRT;
}): TryValidateSyncRT<S, OnErrorRT>;

declare type TryValidateSyncOnErrorRT<S extends Schema> = InferType<S> | void;

declare type TryValidateSyncOptions<S extends Schema, OnErrorRT extends TryValidateSyncOnErrorRT<S>> = ValidateOptions & {
    onError?: (error: ValidationError) => OnErrorRT;
};

declare type TryValidateSyncRT<S extends Schema, OnErrorRT extends TryValidateSyncOnErrorRT<S>> = OnErrorRT extends InferType<S> ? InferType<S> : InferType<S> | undefined;

declare const UK_COUNTIES: readonly ["Aberdeen City", "Aberdeenshire", "Angus", "Argyll and Bute", "Bedfordshire", "Belfast", "Belfast Greater", "Berkshire", "Blaenau Gwent", "Bridgend", "Buckinghamshire", "Caerphilly", "Cambridgeshire", "Cardiff", "Carmarthenshire", "Ceredigion", "Channel Islands", "Cheshire", "City of Edinburgh", "Clackmannanshire", "Conwy", "Cornwall", "County Antrim", "County Armagh", "County Down", "County Fermanagh", "County Londonderry", "County Tyrone", "County of Bristol", "Cumbria", "Denbighshire", "Derbyshire", "Devon", "Dorset", "Dumfries and Galloway", "Dunbartonshire", "Dundee City", "Durham", "East Ayrshire", "East Dunbartonshire", "East Lothian", "East Renfrewshire", "East Riding of Yorkshire", "East Sussex", "Essex", "Falkirk", "Fife", "Flintshire", "Glasgow City", "Gloucestershire", "Greater London", "Greater Manchester", "Guernsey Channel Islands", "Gwynedd", "Hampshire", "Hereford and Worcester", "Herefordshire", "Hertfordshire", "Highland", "Inverclyde", "Inverness", "Isle of Anglesey", "Isle of Barra", "Isle of Man", "Isle of Wight", "Jersey Channel Islands", "Kent", "Lancashire", "Leicestershire", "Lincolnshire", "Merseyside", "Merthyr Tydfil", "Midlothian", "Monmouthshire", "Moray", "Neath Port Talbot", "Newport", "Norfolk", "North Ayrshire", "North Lanarkshire", "North Yorkshire", "Northamptonshire", "Northumberland", "Nottinghamshire", "Orkney", "Orkney Islands", "Oxfordshire", "Pembrokeshire", "Perth and Kinross", "Powys", "Renfrewshire", "Rhondda Cynon Taff", "Rutland", "Scottish Borders", "Shetland Islands", "Shropshire", "Somerset", "South Ayrshire", "South Lanarkshire", "South Yorkshire", "Staffordshire", "Stirling", "Suffolk", "Surrey", "Swansea", "Torfaen", "Tyne and Wear", "Vale of Glamorgan", "Warwickshire", "West Dunbart", "West Lothian", "West Midlands", "West Sussex", "West Yorkshire", "Western Isles", "Wiltshire", "Worcestershire", "Wrexham"];

declare type UkCounties = (typeof UK_COUNTIES)[number];

declare const UkCountyField: <Multiple extends boolean | undefined = false, DisableClearable extends boolean | undefined = false, FreeSolo extends boolean | undefined = false, ChipComponent extends ElementType = ChipTypeMap["defaultComponent"]>({ textFieldProps, ...otherAutocompleteFieldProps }: UkCountyFieldProps<Multiple, DisableClearable, FreeSolo, ChipComponent>) => JSX.Element;

declare interface UkCountyFieldProps<Multiple extends boolean | undefined = false, DisableClearable extends boolean | undefined = false, FreeSolo extends boolean | undefined = false, ChipComponent extends ElementType = ChipTypeMap["defaultComponent"]> extends Omit<AutocompleteFieldProps<string, Multiple, DisableClearable, FreeSolo, ChipComponent>, "options" | "textFieldProps"> {
    textFieldProps?: Omit<AutocompleteFieldProps<string, Multiple, DisableClearable, FreeSolo, ChipComponent>["textFieldProps"], "name"> & {
        name?: string;
    };
}

declare function unicodeAlphanumericString(options?: BuildCharSetOptions): StringSchema<string | undefined, AnyObject, undefined, "">;

declare function unicodeAlphaString(options?: BuildCharSetOptions): StringSchema<string | undefined, AnyObject, undefined, "">;

declare function unicodeNumericString(options?: BuildCharSetOptions): StringSchema<string | undefined, AnyObject, undefined, "">;

declare type UpdateArg<M extends Model<any>, RequiredFields extends keyof Omit<M, "id"> = never, OptionalFields extends keyof Omit<M, "id" | RequiredFields> = never> = [RequiredFields] extends [never] ? [OptionalFields] extends [never] ? M["id"] : UpdateWithBody<M, RequiredFields, OptionalFields> : UpdateWithBody<M, RequiredFields, OptionalFields>;

declare type UpdateResult<M extends Model<any>, MFields extends keyof Omit<M, "id"> = never> = Result<M, MFields>;

declare type UpdateWithBody<M extends Model<any>, RequiredFields extends keyof Omit<M, "id">, OptionalFields extends keyof Omit<M, "id" | RequiredFields>> = Pick<M, "id"> & Arg<M, RequiredFields, OptionalFields>;

declare function uppercaseAsciiAlphanumericString(options?: BuildCharSetOptions): StringSchema<string | undefined, AnyObject, undefined, "">;

declare function uppercaseAsciiAlphaString(options?: BuildCharSetOptions): StringSchema<string | undefined, AnyObject, undefined, "">;

declare function uppercaseUnicodeAlphanumericString(options?: BuildCharSetOptions): StringSchema<string | undefined, AnyObject, undefined, "">;

declare function uppercaseUnicodeAlphaString(options?: BuildCharSetOptions): StringSchema<string | undefined, AnyObject, undefined, "">;

export declare const urls: {
    user: {
        list: string;
        detail: string;
    };
    teacher: {
        list: string;
        detail: string;
    };
    student: {
        list: string;
        detail: string;
    };
    school: {
        list: string;
        detail: string;
    };
    class: {
        list: string;
        detail: string;
    };
    otpBypassToken: {
        list: string;
        detail: string;
    };
    authFactor: {
        list: string;
        detail: string;
    };
};

export declare function useCountdown(seconds: number, interval?: number): [number, Dispatch<SetStateAction<number>>];

export declare function useEventListener<EventType extends keyof HTMLElementEventMap>(element: HTMLElement, type: EventType, listener: (this: HTMLElement, ev: HTMLElementEventMap[EventType]) => any, kwArgs?: {
    options?: boolean | AddEventListenerOptions;
    deps?: DependencyList;
}): void;

export declare function useExternalScript<EventType extends keyof HTMLElementEventMap>({ props, attrs, eventTypes, }: {
    props: Partial<HTMLScriptElement> & {
        src: string;
    };
    attrs?: Record<string, string>;
    eventTypes?: EventType[];
}): EventType | undefined;

/**
 * Shorthand for a reference to a HTML input element since this is so common for
 * forms.
 *
 * @returns Ref object to a HTML input element.
 */
export declare function useInputRef(): RefObject<HTMLInputElement | null>;

export declare function useLocation<State = {}>(): Location_2<null | Partial<PageState & State>>;

export declare function useNavigate(): Navigate;

export declare const useOAuth2: {
    <SessionMetadata>(kwargs: UseOAuth2KwArgs<SessionMetadata>): OAuth2;
    (kwargs: BaseUseOAuth2KwArgs<SessionMetadata>): OAuth2;
};

export declare function useOAuth2CodeChallenge(provider: string, length?: OAuth2CodeChallengeLengths, storageKey?: string): [OAuth2CodeChallenge | undefined, () => void];

declare interface UseOAuth2KwArgs<SessionMetadata> extends BaseUseOAuth2KwArgs<SessionMetadata> {
    useSessionMetadata: () => SessionMetadata | undefined;
}

export declare function useOAuth2State(provider: string, length?: number, storageKey?: string): [string | undefined, () => void];

export declare function usePagination(options?: UsePaginationOptions): [Pagination, SetPagination];

export declare type UsePaginationOptions = Partial<{
    page: number;
    limit: number;
}>;

export declare function useParams(): ReadOnly<Params<string>>;

export declare function useParams<OnErrorRT extends TryValidateSyncOnErrorRT<ObjectSchemaFromShape<Shape>>, Shape extends ObjectShape = {}>(shape: Shape, validateOptions?: TryValidateSyncOptions<ObjectSchemaFromShape<Shape>, OnErrorRT>): TryValidateSyncRT<ObjectSchemaFromShape<Shape>, OnErrorRT>;

export declare function useParamsRequired<OnErrorRT extends TryValidateSyncOnErrorRT<ObjectSchemaFromShape<Shape>>, Shape extends ObjectShape = {}>({ shape, children, onValidationError, onValidationSuccess, validateOptions, }: {
    shape: Shape;
    children: (data: NonNullable<TryValidateSyncRT<ObjectSchemaFromShape<Shape>, OnErrorRT>>) => ReactNode;
    onValidationError: (navigate: Navigate) => void;
    onValidationSuccess?: (params: NonNullable<TryValidateSyncRT<ObjectSchemaFromShape<Shape>, OnErrorRT>>) => void;
    validateOptions?: TryValidateSyncOptions<ObjectSchemaFromShape<Shape>, OnErrorRT>;
}): string | number | bigint | boolean | JSX_2.Element | Iterable<ReactNode> | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined;

export declare type User = Model<number, {
    password: string;
    last_login?: Date;
    first_name: string;
    last_name?: string;
    email?: string;
    is_staff: boolean;
    is_active: boolean;
    date_joined: Date;
    requesting_to_join_class?: Class["id"] | null;
    teacher?: _UserTeacher<Teacher>;
    student?: _UserStudent<Student>;
}>;

declare const user: Schemas<User>;

export declare const USER_TAG: TagTypes;

declare type _UserStudent<S extends Student> = Omit<S, "user" | "auto_gen_password">;

declare type _UserTeacher<T extends Teacher> = Omit<T, "user">;

export declare function useSearchParams(): {
    [k: string]: string;
};

export declare function useSearchParams<OnErrorRT extends TryValidateSyncOnErrorRT<ObjectSchemaFromShape<Shape>>, Shape extends ObjectShape = {}>(shape: Shape, validateOptions?: TryValidateSyncOptions<ObjectSchemaFromShape<Shape>, OnErrorRT>): TryValidateSyncRT<ObjectSchemaFromShape<Shape>, OnErrorRT>;

export declare function useSession<UserType extends SessionMetadata["user_type"] | undefined = undefined>(children: UseSessionChildren<UserType>, options?: UseSessionOptions<UserType>): string | number | bigint | boolean | JSX_2.Element | Iterable<ReactNode> | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined;

export declare type UseSessionChildren<UserType extends SessionMetadata["user_type"] | undefined> = ReactNode | (UserType extends undefined ? UseSessionChildrenFunction<false> : UseSessionChildrenFunction<true>);

export declare type UseSessionChildrenFunction<Required extends boolean> = (metadata: Required extends true ? SessionMetadata : SessionMetadata | undefined) => ReactNode;

export declare function useSessionMetadata<T = SessionMetadata>(cookieName?: string): T | undefined;

export declare namespace useSessionMetadata {
    var predefine: <SessionMetadata>(cookieName?: string) => () => SessionMetadata | undefined;
}

export declare type UseSessionOptions<UserType extends SessionMetadata["user_type"] | undefined> = Partial<{
    userType: UserType;
    next: boolean;
}>;

export declare namespace utils {
    export {
        api,
        auth,
        form,
        general,
        router,
        schema,
        store,
        test_2 as test,
        theme_2 as theme,
        window_2 as window
    }
}

export declare const vite: Record<string, string>;

export declare namespace window_2 {
    export {
        configureFreshworksWidget,
        toggleOneTrustInfoDisplay
    }
}

declare function withKeyPaths(obj: object, delimiter?: string): object;

declare function wrap(newFn: {
    before?: (...args: any[]) => void;
    after?: (...args: any[]) => void;
}, fn?: (...args: any[]) => any): (...args: any[]) => any;

export declare const YouTubeVideo: FC<YouTubeVideoProps>;

export declare interface YouTubeVideoProps extends Omit<BoxProps, "component"> {
    src: string;
}

export { }


declare module "@mui/material/styles" {
    interface CustomPaletteColors {
        tertiary: PaletteColor;
        white: PaletteColor;
        black: PaletteColor;
        teacher: PaletteColor;
        student: PaletteColor;
        indy: PaletteColor;
    }
    interface Palette extends CustomPaletteColors {
    }
    interface PaletteOptions extends CustomPaletteColors {
    }
}


declare module "@mui/material" {
    interface FabPropsColorOverrides extends PropsColorOverrides {
    }
    interface CardPropsColorOverrides extends PropsColorOverrides {
    }
    interface ChipPropsColorOverrides extends PropsColorOverrides {
    }
    interface IconPropsColorOverrides extends PropsColorOverrides {
    }
    interface AlertPropsColorOverrides extends PropsColorOverrides {
    }
    interface BadgePropsColorOverrides extends PropsColorOverrides {
    }
    interface RadioPropsColorOverrides extends PropsColorOverrides {
    }
    interface AppBarPropsColorOverrides extends PropsColorOverrides {
    }
    interface ButtonPropsColorOverrides extends PropsColorOverrides {
    }
    interface SliderPropsColorOverrides extends PropsColorOverrides {
    }
    interface SwitchPropsColorOverrides extends PropsColorOverrides {
    }
    interface SvgIconPropsColorOverrides extends PropsColorOverrides {
    }
    interface CheckboxPropsColorOverrides extends PropsColorOverrides {
    }
    interface FormLabelPropsColorOverrides extends PropsColorOverrides {
    }
    interface InputBasePropsColorOverrides extends PropsColorOverrides {
    }
    interface TextFieldPropsColorOverrides extends PropsColorOverrides {
    }
    interface IconButtonPropsColorOverrides extends PropsColorOverrides {
    }
    interface PaginationPropsColorOverrides extends PropsColorOverrides {
    }
    interface ButtonGroupPropsColorOverrides extends PropsColorOverrides {
    }
    interface FormControlPropsColorOverrides extends PropsColorOverrides {
    }
    interface ToggleButtonPropsColorOverrides extends PropsColorOverrides {
    }
    interface LinearProgressPropsColorOverrides extends PropsColorOverrides {
    }
    interface PaginationItemPropsColorOverrides extends PropsColorOverrides {
    }
    interface CircularProgressPropsColorOverrides extends PropsColorOverrides {
    }
    interface TabsPropsIndicatorColorOverrides extends PropsColorOverrides {
    }
    interface ToggleButtonGroupPropsColorOverrides extends PropsColorOverrides {
    }
}
