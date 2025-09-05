import { Action } from 'redux';
import { AppBarProps } from '@mui/material';
import { AutocompleteProps } from '@mui/material';
import { BoxProps } from '@mui/material';
import { ButtonProps } from '@mui/material';
import { CheckboxProps } from '@mui/material';
import { ChipTypeMap } from '@mui/material';
import { ContainerProps } from '@mui/material';
import { DatePickerProps } from '@mui/x-date-pickers';
import { default as default_2 } from 'react';
import { DetailedHTMLProps } from 'react';
import { ElementType } from 'react';
import { FC } from 'react';
import { FormControlLabelProps } from '@mui/material';
import { FormHelperTextProps } from '@mui/material';
import { FormikConfig } from 'formik';
import { FormikErrors } from 'formik';
import { FormikHelpers } from 'formik';
import { FormikProps } from 'formik';
import { Grid2Props } from '@mui/material';
import { IconButtonProps } from '@mui/material';
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
import { NavigateOptions as NavigateOptions_2 } from 'react-router-dom';
import { PickerValidDate } from '@mui/x-date-pickers';
import { ProviderProps } from 'react-redux';
import { ReactElement } from 'react';
import { ReactNode } from 'react';
import { RefObject } from 'react';
import { StackProps } from '@mui/material';
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
import { ThemeProviderProps } from '@mui/material/styles/ThemeProvider';
import { To } from 'react-router-dom';
import { ToolbarProps } from '@mui/material';
import { TooltipProps } from '@mui/material';
import { TypedUseLazyQuery } from '@reduxjs/toolkit/query/react';
import { TypedUseMutation } from '@reduxjs/toolkit/query/react';
import { TypographyProps } from '@mui/material';
import { ValidateOptions } from 'yup';

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

declare type AuthFactor = Model<number, {
    user: User["id"];
    type: "otp";
}>;

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

declare type BaseFormProps<Values> = Omit<FormikConfig<Values>, "children"> & {
    children: ReactNode | ((props: _FormikProps<Values>) => ReactNode);
    scrollIntoViewOptions?: ScrollIntoViewOptions;
    nonFieldErrorsProps?: Omit<NonFieldErrorsProps, "children">;
    fieldRefs?: Array<{
        name: string;
        inputRef: RefObject<HTMLInputElement | null>;
    }>;
};

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

declare type Class = Model<string, {
    name: string;
    teacher: Teacher["id"];
    school: School["id"];
    read_classmates_data: boolean;
    receive_requests_until?: Date;
}>;

export declare const ClickableTooltip: default_2.FC<ClickableTooltipProps>;

export declare interface ClickableTooltipProps extends TooltipProps {
}

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

declare const COUNTRY_ISO_CODES: readonly ["AD", "AE", "AF", "AG", "AI", "AL", "AM", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "SS", "ST", "SV", "SX", "SY", "SZ", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UM", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WS", "YE", "YT", "ZA", "ZM", "ZW"];

declare const CountryField: <Multiple extends boolean | undefined = false, DisableClearable extends boolean | undefined = false, FreeSolo extends boolean | undefined = false, ChipComponent extends ElementType = ChipTypeMap["defaultComponent"]>({ textFieldProps, ...otherAutocompleteFieldProps }: CountryFieldProps<Multiple, DisableClearable, FreeSolo, ChipComponent>) => JSX.Element;

declare interface CountryFieldProps<Multiple extends boolean | undefined = false, DisableClearable extends boolean | undefined = false, FreeSolo extends boolean | undefined = false, ChipComponent extends ElementType = ChipTypeMap["defaultComponent"]> extends Omit<AutocompleteFieldProps<string, Multiple, DisableClearable, FreeSolo, ChipComponent>, "options" | "textFieldProps" | "getOptionLabel"> {
    textFieldProps?: Omit<AutocompleteFieldProps<string, Multiple, DisableClearable, FreeSolo, ChipComponent>["textFieldProps"], "name"> & {
        name?: string;
    };
}

declare type CountryIsoCodes = (typeof COUNTRY_ISO_CODES)[number];

declare const DatePickerField: <TDate extends PickerValidDate, TEnableAccessibleFieldDOMStructure extends boolean = false>({ name, required, minDate, maxDate, validateOptions, ...otherDatePickerProps }: DatePickerFieldProps<TDate, TEnableAccessibleFieldDOMStructure>) => JSX.Element;

declare interface DatePickerFieldProps<TDate extends PickerValidDate, TEnableAccessibleFieldDOMStructure extends boolean = false> extends Omit<DatePickerProps<TDate, TEnableAccessibleFieldDOMStructure>, "name" | "value" | "onChange" | "slotProps"> {
    name: string;
    required?: boolean;
    validateOptions?: ValidateOptions;
}

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

declare type Fields = Record<string, unknown>;

declare const FirstNameField: FC<FirstNameFieldProps>;

declare type FirstNameFieldProps = Omit<TextFieldProps_2, "type" | "name" | "schema"> & Partial<Pick<TextFieldProps_2, "name">>;

declare const Form: {
    <Values extends FormValues>(props: BaseFormProps<Values>): JSX.Element;
    <Values extends FormValues, QueryArg extends FormValues, ResultType>(props: SubmitFormProps<Values, QueryArg, ResultType>): JSX.Element;
};

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

declare interface GlobalItemProps extends ItemProps {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
}

declare const Image_2: FC<ImageProps>;
export { Image_2 as Image }

export declare interface ImageProps extends Omit<BoxProps, "component"> {
    alt: string;
    src: string;
    href?: string;
    hrefInNewTab?: boolean;
}

export declare const InputFileButton: FC<InputFileButtonProps>;

export declare interface InputFileButtonProps extends Omit<ButtonProps<"label">, "component"> {
    inputProps?: Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "type" | "hidden">;
}

export declare const ItemizedList: FC<ItemizedListProps>;

export declare interface ItemizedListProps {
    styleType: "unset" | "initial" | "inherit" | "upper-roman" | "upper-latin" | "upper-alpha" | "square" | "none" | "lower-roman" | "lower-latin" | "lower-greek" | "lower-alpha" | "georgian" | "disc" | "decimal-leading-zero" | "decimal" | "armenian" | "circle";
    listProps?: ListProps;
    pl?: number;
    children: ListItemElement | ListItemElement[];
}

declare interface ItemProps extends Omit<Grid2Props, "key" | "order" | "xs" | "sm" | "md" | "lg" | "xl" | "xsOffset" | "smOffset" | "mdOffset" | "lgOffset" | "xlOffset"> {
}

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

declare type ListItemElement = ReactElement<typeof ListItem | typeof ListItemText> | string;

declare interface ListResult<M extends Model<any>, MFields extends keyof Omit<M, "id"> = never, ExtraFields extends Fields = Fields> {
    count: number;
    offset: number;
    limit: number;
    max_limit: number;
    data: Array<Result<M, MFields> & ExtraFields>;
}

/**
 * A data model.
 *  Id: The type of Id.
 *  Data: The data fields.
 */
declare type Model<Id extends ModelId, MFields extends Fields = Fields> = {
    id: Id;
} & Omit<MFields, "id">;

declare type ModelId = string | number;

declare type NavigateOptions<State extends Record<string, any> = Record<string, any>> = Omit<NavigateOptions_2, "state"> & {
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

declare type NonFieldErrorsProps = Omit<FormHelperTextProps, "error" | "ref"> & {
    scrollIntoViewOptions?: ScrollIntoViewOptions;
};

declare const Notification_2: FC<NotificationProps>;

declare interface NotificationProps {
    open?: boolean;
    error?: boolean;
    onClose?: () => void;
    children: ReactNode;
    bgcolor?: "secondary" | "tertiary";
}

export declare const OrderedGrid: FC<OrderedGridProps>;

export declare interface OrderedGridProps {
    rows: Array<Array<{
        element: ReactElement;
        itemProps?: ItemProps;
    }>>;
    containerProps?: Omit<Grid2Props, "container">;
    globalItemProps: GlobalItemProps;
}

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

declare type Pagination = {
    page: number;
    limit: number;
    offset: number;
};

declare const PasswordField: FC<PasswordFieldProps>;

declare type PasswordFieldProps = Omit<TextFieldProps_2, "type" | "name" | "schema" | "autoComplete"> & Partial<Pick<TextFieldProps_2, "name" | "schema">> & {
    withRepeatField?: boolean;
    repeatFieldProps?: Omit<RepeatFieldProps, "name" | "type">;
};

declare const RepeatField: FC<RepeatFieldProps>;

declare type RepeatFieldProps = Omit<TextFieldProps, "name" | "value" | "onChange" | "onBlur" | "error" | "helperText" | "defaultValue" | "required"> & {
    name: string;
    validateOptions?: ValidateOptions;
};

declare type Result<M extends Model<any>, MFields extends keyof Omit<M, "id"> = never> = Pick<M, "id" | MFields>;

declare type School = Model<number, {
    name: string;
    country?: CountryIsoCodes;
    uk_county?: UkCounties;
}>;

export declare const ScrollIntoViewLink: FC<ScrollIntoViewLinkProps>;

export declare interface ScrollIntoViewLinkProps extends Omit<LinkProps_4, "onClick"> {
    elementId: string;
    options?: ScrollIntoViewOptions;
}

declare const Section: FC<SectionProps>;

declare interface SectionProps extends ContainerProps {
    boxProps?: Omit<BoxProps, "children">;
}

declare interface SessionMetadata {
    user_id: User["id"];
    user_type: "teacher" | "student" | "indy";
    auth_factors: Array<AuthFactor["type"]>;
    otp_bypass_token_exists: boolean;
}

declare type Student = Model<number, {
    user: User["id"];
    school: School["id"];
    klass: Class["id"];
    auto_gen_password: string;
}>;

declare const SubmitButton: FC<SubmitButtonProps>;

declare interface SubmitButtonProps extends Omit<ButtonProps, "type" | "onClick"> {
}

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

declare type Teacher = Model<number, {
    user: User["id"];
    school?: School["id"];
    is_admin: boolean;
}>;

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

declare const UK_COUNTIES: readonly ["Aberdeen City", "Aberdeenshire", "Angus", "Argyll and Bute", "Bedfordshire", "Belfast", "Belfast Greater", "Berkshire", "Blaenau Gwent", "Bridgend", "Buckinghamshire", "Caerphilly", "Cambridgeshire", "Cardiff", "Carmarthenshire", "Ceredigion", "Channel Islands", "Cheshire", "City of Edinburgh", "Clackmannanshire", "Conwy", "Cornwall", "County Antrim", "County Armagh", "County Down", "County Fermanagh", "County Londonderry", "County Tyrone", "County of Bristol", "Cumbria", "Denbighshire", "Derbyshire", "Devon", "Dorset", "Dumfries and Galloway", "Dunbartonshire", "Dundee City", "Durham", "East Ayrshire", "East Dunbartonshire", "East Lothian", "East Renfrewshire", "East Riding of Yorkshire", "East Sussex", "Essex", "Falkirk", "Fife", "Flintshire", "Glasgow City", "Gloucestershire", "Greater London", "Greater Manchester", "Guernsey Channel Islands", "Gwynedd", "Hampshire", "Hereford and Worcester", "Herefordshire", "Hertfordshire", "Highland", "Inverclyde", "Inverness", "Isle of Anglesey", "Isle of Barra", "Isle of Man", "Isle of Wight", "Jersey Channel Islands", "Kent", "Lancashire", "Leicestershire", "Lincolnshire", "Merseyside", "Merthyr Tydfil", "Midlothian", "Monmouthshire", "Moray", "Neath Port Talbot", "Newport", "Norfolk", "North Ayrshire", "North Lanarkshire", "North Yorkshire", "Northamptonshire", "Northumberland", "Nottinghamshire", "Orkney", "Orkney Islands", "Oxfordshire", "Pembrokeshire", "Perth and Kinross", "Powys", "Renfrewshire", "Rhondda Cynon Taff", "Rutland", "Scottish Borders", "Shetland Islands", "Shropshire", "Somerset", "South Ayrshire", "South Lanarkshire", "South Yorkshire", "Staffordshire", "Stirling", "Suffolk", "Surrey", "Swansea", "Torfaen", "Tyne and Wear", "Vale of Glamorgan", "Warwickshire", "West Dunbart", "West Lothian", "West Midlands", "West Sussex", "West Yorkshire", "Western Isles", "Wiltshire", "Worcestershire", "Wrexham"];

declare type UkCounties = (typeof UK_COUNTIES)[number];

declare const UkCountyField: <Multiple extends boolean | undefined = false, DisableClearable extends boolean | undefined = false, FreeSolo extends boolean | undefined = false, ChipComponent extends ElementType = ChipTypeMap["defaultComponent"]>({ textFieldProps, ...otherAutocompleteFieldProps }: UkCountyFieldProps<Multiple, DisableClearable, FreeSolo, ChipComponent>) => JSX.Element;

declare interface UkCountyFieldProps<Multiple extends boolean | undefined = false, DisableClearable extends boolean | undefined = false, FreeSolo extends boolean | undefined = false, ChipComponent extends ElementType = ChipTypeMap["defaultComponent"]> extends Omit<AutocompleteFieldProps<string, Multiple, DisableClearable, FreeSolo, ChipComponent>, "options" | "textFieldProps"> {
    textFieldProps?: Omit<AutocompleteFieldProps<string, Multiple, DisableClearable, FreeSolo, ChipComponent>["textFieldProps"], "name"> & {
        name?: string;
    };
}

declare type User = Model<number, {
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

declare type _UserStudent<S extends Student> = Omit<S, "user" | "auto_gen_password">;

declare type _UserTeacher<T extends Teacher> = Omit<T, "user">;

declare type UseSessionChildren<UserType extends SessionMetadata["user_type"] | undefined> = ReactNode | (UserType extends undefined ? UseSessionChildrenFunction<false> : UseSessionChildrenFunction<true>);

declare type UseSessionChildrenFunction<Required extends boolean> = (metadata: Required extends true ? SessionMetadata : SessionMetadata | undefined) => ReactNode;

declare type UseSessionOptions<UserType extends SessionMetadata["user_type"] | undefined> = Partial<{
    userType: UserType;
    next: boolean;
}>;

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
