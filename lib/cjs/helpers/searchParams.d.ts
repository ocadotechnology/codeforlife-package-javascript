import { Schema } from 'yup';
type CastFunc = (value: string) => any;
type ValidateFunc = (value: any) => boolean;
export declare function getSearchParams<T>(params: Record<string, {
    cast?: CastFunc;
    validate?: ValidateFunc;
    isRequired?: boolean;
}>): null | T;
export declare const stringToBoolean: CastFunc;
export declare function stringToProperty(obj: object): CastFunc;
export declare function valueInOptions(options: readonly any[]): ValidateFunc;
export declare function valueMatchesSchema(schema: Schema): ValidateFunc;
export {};
