import { AnyObject } from 'yup';
import { DefaultFromShape } from 'yup';
import { DependencyList } from 'react';
import { Dispatch } from 'react';
import { InferType } from 'yup';
import { JSX } from 'react/jsx-runtime';
import { JSXElementConstructor } from 'react';
import { Location as Location_2 } from 'react-router-dom';
import { NavigateOptions as NavigateOptions_2 } from 'react-router-dom';
import { ObjectSchema } from 'yup';
import { ObjectShape } from 'yup';
import { Params } from 'react-router-dom';
import { ReactElement } from 'react';
import { ReactNode } from 'react';
import { ReactPortal } from 'react';
import { RefObject } from 'react';
import { Schema } from 'yup';
import { SetStateAction } from 'react';
import { To } from 'react-router-dom';
import { TypedUseMutation } from '@reduxjs/toolkit/query/react';
import { TypeFromShape } from 'yup';
import { ValidateOptions } from 'yup';
import { ValidationError } from 'yup';

declare type _<T> = T extends {} ? {
    [k in keyof T]: T[k];
} : T;

declare type AuthFactor = Model<number, {
    user: User["id"];
    type: "otp";
}>;

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

declare type Class = Model<string, {
    name: string;
    teacher: Teacher["id"];
    school: School["id"];
    read_classmates_data: boolean;
    receive_requests_until?: Date;
}>;

declare const COUNTRY_ISO_CODES: readonly ["AD", "AE", "AF", "AG", "AI", "AL", "AM", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "SS", "ST", "SV", "SX", "SY", "SZ", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UM", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WS", "YE", "YT", "ZA", "ZM", "ZW"];

declare type CountryIsoCodes = (typeof COUNTRY_ISO_CODES)[number];

declare type ExchangeOAuth2CodeArg = {
    code: string;
    code_verifier: string;
    redirect_uri: string;
};

declare type Fields = Record<string, unknown>;

/**
 * A data model.
 *  Id: The type of Id.
 *  Data: The data fields.
 */
declare type Model<Id extends ModelId, MFields extends Fields = Fields> = {
    id: Id;
} & Omit<MFields, "id">;

declare type ModelId = string | number;

export declare type Navigate = {
    <State extends Record<string, any> = Record<string, any>>(to: To, options?: NavigateOptions<State>): void;
    (delta: number): void;
};

export declare type NavigateOptions<State extends Record<string, any> = Record<string, any>> = Omit<NavigateOptions_2, "state"> & {
    state?: State & Partial<PageState>;
    next?: boolean;
};

declare interface NotificationProps {
    open?: boolean;
    error?: boolean;
    onClose?: () => void;
    children: ReactNode;
    bgcolor?: "secondary" | "tertiary";
}

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

declare type ObjectSchemaFromShape<Shape extends ObjectShape> = ObjectSchema<_<TypeFromShape<Shape, AnyObject>>, AnyObject, _<DefaultFromShape<Shape>>, "">;

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

declare type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
};

declare type School = Model<number, {
    name: string;
    country?: CountryIsoCodes;
    uk_county?: UkCounties;
}>;

export declare interface SessionMetadata {
    user_id: User["id"];
    user_type: "teacher" | "student" | "indy";
    auth_factors: Array<AuthFactor["type"]>;
    otp_bypass_token_exists: boolean;
}

export declare type SetPagination = Dispatch<SetStateAction<{
    page: number;
    limit: number;
}>>;

declare type Student = Model<number, {
    user: User["id"];
    school: School["id"];
    klass: Class["id"];
    auto_gen_password: string;
}>;

declare type Teacher = Model<number, {
    user: User["id"];
    school?: School["id"];
    is_admin: boolean;
}>;

declare type TryValidateSyncOnErrorRT<S extends Schema> = InferType<S> | void;

declare type TryValidateSyncOptions<S extends Schema, OnErrorRT extends TryValidateSyncOnErrorRT<S>> = ValidateOptions & {
    onError?: (error: ValidationError) => OnErrorRT;
};

declare type TryValidateSyncRT<S extends Schema, OnErrorRT extends TryValidateSyncOnErrorRT<S>> = OnErrorRT extends InferType<S> ? InferType<S> : InferType<S> | undefined;

declare const UK_COUNTIES: readonly ["Aberdeen City", "Aberdeenshire", "Angus", "Argyll and Bute", "Bedfordshire", "Belfast", "Belfast Greater", "Berkshire", "Blaenau Gwent", "Bridgend", "Buckinghamshire", "Caerphilly", "Cambridgeshire", "Cardiff", "Carmarthenshire", "Ceredigion", "Channel Islands", "Cheshire", "City of Edinburgh", "Clackmannanshire", "Conwy", "Cornwall", "County Antrim", "County Armagh", "County Down", "County Fermanagh", "County Londonderry", "County Tyrone", "County of Bristol", "Cumbria", "Denbighshire", "Derbyshire", "Devon", "Dorset", "Dumfries and Galloway", "Dunbartonshire", "Dundee City", "Durham", "East Ayrshire", "East Dunbartonshire", "East Lothian", "East Renfrewshire", "East Riding of Yorkshire", "East Sussex", "Essex", "Falkirk", "Fife", "Flintshire", "Glasgow City", "Gloucestershire", "Greater London", "Greater Manchester", "Guernsey Channel Islands", "Gwynedd", "Hampshire", "Hereford and Worcester", "Herefordshire", "Hertfordshire", "Highland", "Inverclyde", "Inverness", "Isle of Anglesey", "Isle of Barra", "Isle of Man", "Isle of Wight", "Jersey Channel Islands", "Kent", "Lancashire", "Leicestershire", "Lincolnshire", "Merseyside", "Merthyr Tydfil", "Midlothian", "Monmouthshire", "Moray", "Neath Port Talbot", "Newport", "Norfolk", "North Ayrshire", "North Lanarkshire", "North Yorkshire", "Northamptonshire", "Northumberland", "Nottinghamshire", "Orkney", "Orkney Islands", "Oxfordshire", "Pembrokeshire", "Perth and Kinross", "Powys", "Renfrewshire", "Rhondda Cynon Taff", "Rutland", "Scottish Borders", "Shetland Islands", "Shropshire", "Somerset", "South Ayrshire", "South Lanarkshire", "South Yorkshire", "Staffordshire", "Stirling", "Suffolk", "Surrey", "Swansea", "Torfaen", "Tyne and Wear", "Vale of Glamorgan", "Warwickshire", "West Dunbart", "West Lothian", "West Midlands", "West Sussex", "West Yorkshire", "Western Isles", "Wiltshire", "Worcestershire", "Wrexham"];

declare type UkCounties = (typeof UK_COUNTIES)[number];

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
}): string | number | bigint | boolean | JSX.Element | Iterable<ReactNode> | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined;

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

export declare function useSearchParams(): {
    [k: string]: string;
};

export declare function useSearchParams<OnErrorRT extends TryValidateSyncOnErrorRT<ObjectSchemaFromShape<Shape>>, Shape extends ObjectShape = {}>(shape: Shape, validateOptions?: TryValidateSyncOptions<ObjectSchemaFromShape<Shape>, OnErrorRT>): TryValidateSyncRT<ObjectSchemaFromShape<Shape>, OnErrorRT>;

export declare function useSession<UserType extends SessionMetadata["user_type"] | undefined = undefined>(children: UseSessionChildren<UserType>, options?: UseSessionOptions<UserType>): string | number | bigint | boolean | JSX.Element | Iterable<ReactNode> | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined;

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
