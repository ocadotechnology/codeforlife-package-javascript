import { FetchBaseQueryError, TypedUseMutationResult, TypedUseQueryHookResult, TypedUseQueryStateResult } from '@reduxjs/toolkit/query/react';
import { ReactNode } from 'react';
import { Optional, Required } from './general';
import { SchemaMap } from './schema';
export type Fields = Record<string, unknown>;
export interface Tag<Type extends string> {
    type: Type;
    id: string;
}
export type ModelId = string | number;
/**
 * A data model.
 *  Id: The type of Id.
 *  Data: The data fields.
 */
export type Model<Id extends ModelId, MFields extends Fields = Fields> = {
    id: Id;
} & Omit<MFields, "id">;
export type Schemas<M extends Model<any>> = {
    [K in keyof M]-?: SchemaMap<M[K]>;
};
export type Result<M extends Model<any>, MFields extends keyof Omit<M, "id"> = never> = Pick<M, "id" | MFields>;
export type Arg<M extends Model<any>, RequiredFields extends keyof Omit<M, "id">, OptionalFields extends keyof Omit<M, "id" | RequiredFields> = never> = Required<M, RequiredFields> & Optional<M, OptionalFields>;
export type CreateResult<M extends Model<any>, MFields extends keyof Omit<M, "id"> = never> = Result<M, MFields>;
export type CreateArg<M extends Model<any>, RequiredFields extends keyof Omit<M, "id">, OptionalFields extends keyof Omit<M, "id" | RequiredFields> = never> = Arg<M, RequiredFields, OptionalFields>;
export type BulkCreateResult<M extends Model<any>, MFields extends keyof Omit<M, "id"> = never, ExtraFields extends Fields = Fields> = Array<Result<M, MFields> & ExtraFields>;
export type BulkCreateArg<M extends Model<any>, RequiredFields extends keyof Omit<M, "id">, OptionalFields extends keyof Omit<M, "id" | RequiredFields> = never, ExtraFields extends Fields = Fields> = Array<Arg<M, RequiredFields, OptionalFields> & ExtraFields>;
export type RetrieveResult<M extends Model<any>, MFields extends keyof Omit<M, "id"> = never> = Result<M, MFields>;
export type RetrieveArg<M extends Model<any>> = M["id"];
export interface ListResult<M extends Model<any>, MFields extends keyof Omit<M, "id"> = never, ExtraFields extends Fields = Fields> {
    count: number;
    offset: number;
    limit: number;
    max_limit: number;
    data: Array<Result<M, MFields> & ExtraFields>;
}
export type ListArg<Filters extends Fields = Fields> = {
    limit: number;
    offset: number;
} & Partial<Omit<Filters, "limit" | "offset">>;
export type UpdateResult<M extends Model<any>, MFields extends keyof Omit<M, "id"> = never> = Result<M, MFields>;
type UpdateWithBody<M extends Model<any>, RequiredFields extends keyof Omit<M, "id">, OptionalFields extends keyof Omit<M, "id" | RequiredFields>> = Pick<M, "id"> & Arg<M, RequiredFields, OptionalFields>;
export type UpdateArg<M extends Model<any>, RequiredFields extends keyof Omit<M, "id"> = never, OptionalFields extends keyof Omit<M, "id" | RequiredFields> = never> = [RequiredFields] extends [never] ? [OptionalFields] extends [never] ? M["id"] : UpdateWithBody<M, RequiredFields, OptionalFields> : UpdateWithBody<M, RequiredFields, OptionalFields>;
export type BulkUpdateResult<M extends Model<any>, MFields extends keyof Omit<M, "id"> = never, ExtraFields extends Fields = Fields> = Array<Result<M, MFields> & ExtraFields>;
export type BulkUpdateArg<M extends Model<any>, RequiredFields extends keyof Omit<M, "id">, OptionalFields extends keyof Omit<M, "id" | RequiredFields> = never, ExtraFields extends Fields = Fields> = Record<M["id"], Arg<M, RequiredFields, OptionalFields> & ExtraFields>;
export type DestroyResult = null;
export type DestroyArg<M extends Model<any>> = M["id"];
export type BulkDestroyResult = null;
export type BulkDestroyArg<M extends Model<any>> = Array<M["id"]>;
export declare function buildUrl(url: string, params: {
    search?: Fields;
    url?: Fields;
}): string;
export declare function isModelId(value: unknown): boolean;
export declare function listTag<Type extends string>(type: Type): Tag<Type>;
export type TagDataOptions = Partial<{
    includeListTag: boolean;
    argKeysAreIds: boolean;
    id: string;
}>;
export declare function tagData<Type extends string, M extends Model<any>>(type: Type, options?: TagDataOptions): (result: Result<M, any> | Array<Result<M, any>> | ListResult<M, any> | null | undefined, error: FetchBaseQueryError | undefined, arg: Arg<M, any> | Array<Arg<M, any>> | Record<M["id"], Arg<M, any>> | ListArg<any> | Array<M["id"]> | string | number | undefined) => Array<Tag<Type>>;
export declare function modelUrls(list: string, detail: string): {
    list: string;
    detail: string;
};
export type HandleQueryStateOptions = Partial<{
    loading: ReactNode;
    error: ReactNode;
}>;
export declare function handleResultState<QueryArg, ResultType>(result: TypedUseQueryHookResult<ResultType, QueryArg, any> | TypedUseQueryStateResult<ResultType, QueryArg, any> | TypedUseMutationResult<ResultType, QueryArg, any>, children: (data: NonNullable<ResultType>) => ReactNode, options?: HandleQueryStateOptions): ReactNode;
export declare function isSafeHttpMethod(method: string): boolean;
export {};
