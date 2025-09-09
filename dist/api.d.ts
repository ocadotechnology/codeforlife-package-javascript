import { AnyObject } from 'yup';
import { BooleanSchema } from 'yup';
import { DateSchema } from 'yup';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { Flags } from 'yup';
import { NumberSchema } from 'yup';
import { ObjectSchema } from 'yup';
import { ReactNode } from 'react';
import { Schema } from 'yup';
import { StringSchema } from 'yup';
import { TypedUseMutationResult } from '@reduxjs/toolkit/query/react';
import { TypedUseQueryHookResult } from '@reduxjs/toolkit/query/react';
import { TypedUseQueryStateResult } from '@reduxjs/toolkit/query/react';

export declare type Arg<M extends Model<any>, RequiredFields extends keyof Omit<M, "id">, OptionalFields extends keyof Omit<M, "id" | RequiredFields> = never> = Required_2<M, RequiredFields> & Optional<M, OptionalFields>;

export declare function buildUrl(url: string, params: {
    search?: Fields;
    url?: Fields;
}): string;

export declare type BulkCreateArg<M extends Model<any>, RequiredFields extends keyof Omit<M, "id">, OptionalFields extends keyof Omit<M, "id" | RequiredFields> = never, ExtraFields extends Fields = Fields> = Array<Arg<M, RequiredFields, OptionalFields> & ExtraFields>;

export declare type BulkCreateResult<M extends Model<any>, MFields extends keyof Omit<M, "id"> = never, ExtraFields extends Fields = Fields> = Array<Result<M, MFields> & ExtraFields>;

export declare type BulkDestroyArg<M extends Model<any>> = Array<M["id"]>;

export declare type BulkDestroyResult = null;

export declare type BulkUpdateArg<M extends Model<any>, RequiredFields extends keyof Omit<M, "id">, OptionalFields extends keyof Omit<M, "id" | RequiredFields> = never, ExtraFields extends Fields = Fields> = Record<M["id"], Arg<M, RequiredFields, OptionalFields> & ExtraFields>;

export declare type BulkUpdateResult<M extends Model<any>, MFields extends keyof Omit<M, "id"> = never, ExtraFields extends Fields = Fields> = Array<Result<M, MFields> & ExtraFields>;

export declare type CreateArg<M extends Model<any>, RequiredFields extends keyof Omit<M, "id">, OptionalFields extends keyof Omit<M, "id" | RequiredFields> = never> = Arg<M, RequiredFields, OptionalFields>;

export declare type CreateResult<M extends Model<any>, MFields extends keyof Omit<M, "id"> = never> = Result<M, MFields>;

export declare type DestroyArg<M extends Model<any>> = M["id"];

export declare type DestroyResult = null;

export declare type Fields = Record<string, unknown>;

export declare type HandleQueryStateOptions = Partial<{
    loading: ReactNode;
    error: ReactNode;
}>;

export declare function handleResultState<QueryArg, ResultType>(result: TypedUseQueryHookResult<ResultType, QueryArg, any> | TypedUseQueryStateResult<ResultType, QueryArg, any> | TypedUseMutationResult<ResultType, QueryArg, any>, children: (data: NonNullable<ResultType>) => ReactNode, options?: HandleQueryStateOptions): ReactNode;

export declare function isModelId(value: unknown): boolean;

export declare function isSafeHttpMethod(method: string): boolean;

export declare type ListArg<Filters extends Fields = Fields> = {
    limit: number;
    offset: number;
} & Partial<Omit<Filters, "limit" | "offset">>;

export declare interface ListResult<M extends Model<any>, MFields extends keyof Omit<M, "id"> = never, ExtraFields extends Fields = Fields> {
    count: number;
    offset: number;
    limit: number;
    max_limit: number;
    data: Array<Result<M, MFields> & ExtraFields>;
}

export declare function listTag<Type extends string>(type: Type): Tag<Type>;

/**
 * A data model.
 *  Id: The type of Id.
 *  Data: The data fields.
 */
export declare type Model<Id extends ModelId, MFields extends Fields = Fields> = {
    id: Id;
} & Omit<MFields, "id">;

export declare type ModelId = string | number;

export declare function modelUrls(list: string, detail: string): {
    list: string;
    detail: string;
};

declare type Optional<T, K extends keyof T> = Partial<Pick<T, K>>;

declare type Required_2<T, K extends keyof T> = {
    [P in K]-?: T[P];
};

export declare type Result<M extends Model<any>, MFields extends keyof Omit<M, "id"> = never> = Pick<M, "id" | MFields>;

export declare type RetrieveArg<M extends Model<any>> = M["id"];

export declare type RetrieveResult<M extends Model<any>, MFields extends keyof Omit<M, "id"> = never> = Result<M, MFields>;

declare type SchemaMap<TType, TContext = AnyObject, TDefault = any, TFlags extends Flags = ""> = NonNullable<TType> extends string ? StringSchema<TType extends undefined ? TType | undefined : TType, TContext, TDefault, TFlags> : NonNullable<TType> extends number ? NumberSchema<TType extends undefined ? TType | undefined : TType, TContext, TDefault, TFlags> : NonNullable<TType> extends boolean ? BooleanSchema<TType extends undefined ? TType | undefined : TType, TContext, TDefault, TFlags> : NonNullable<TType> extends Date ? DateSchema<TType extends undefined ? TType | undefined : TType, TContext, TDefault, TFlags> : NonNullable<TType> extends object ? ObjectSchema<TType extends undefined ? TType | undefined : TType, TContext, TDefault, TFlags> : Schema<TType, TContext, TDefault, TFlags>;

export declare type Schemas<M extends Model<any>> = {
    [K in keyof M]-?: SchemaMap<M[K]>;
};

export declare interface Tag<Type extends string> {
    type: Type;
    id: string;
}

export declare function tagData<Type extends string, M extends Model<any>>(type: Type, options?: TagDataOptions): (result: Result<M, any> | Array<Result<M, any>> | ListResult<M, any> | null | undefined, error: FetchBaseQueryError | undefined, arg: Arg<M, any> | Array<Arg<M, any>> | Record<M["id"], Arg<M, any>> | ListArg<any> | Array<M["id"]> | string | number | undefined) => Array<Tag<Type>>;

export declare type TagDataOptions = Partial<{
    includeListTag: boolean;
    argKeysAreIds: boolean;
    id: string;
}>;

export declare type UpdateArg<M extends Model<any>, RequiredFields extends keyof Omit<M, "id"> = never, OptionalFields extends keyof Omit<M, "id" | RequiredFields> = never> = [RequiredFields] extends [never] ? [OptionalFields] extends [never] ? M["id"] : UpdateWithBody<M, RequiredFields, OptionalFields> : UpdateWithBody<M, RequiredFields, OptionalFields>;

export declare type UpdateResult<M extends Model<any>, MFields extends keyof Omit<M, "id"> = never> = Result<M, MFields>;

declare type UpdateWithBody<M extends Model<any>, RequiredFields extends keyof Omit<M, "id">, OptionalFields extends keyof Omit<M, "id" | RequiredFields>> = Pick<M, "id"> & Arg<M, RequiredFields, OptionalFields>;

export { }
