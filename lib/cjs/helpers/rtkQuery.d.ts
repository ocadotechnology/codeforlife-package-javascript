import type { FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
export type Fields = Record<string, unknown>;
export type TagId = string | number;
export interface Tag<Type extends string> {
    type: Type;
    id: TagId;
}
/**
 * A data model.
 *  Id: The type of Id.
 *  Data: The data fields.
 */
export type Model<Id extends TagId, MFields extends Fields = Fields> = {
    id: Id;
} & Omit<MFields, 'id'>;
export type Result<M extends Model<any>, MFields extends keyof M = 'id'> = Pick<M, 'id' | MFields>;
export type Arg<M extends Model<any>, MFields extends keyof M> = Pick<M, MFields>;
export type CreateResult<M extends Model<any>, MFields extends keyof M = 'id'> = Result<M, MFields>;
export type CreateArg<M extends Model<any>, MFields extends keyof Omit<M, 'id'>> = Arg<M, MFields>;
export type BulkCreateResult<M extends Model<any>, MFields extends keyof M = 'id', ExtraFields extends Fields = Fields> = Array<Result<M, MFields> & ExtraFields>;
export type BulkCreateArg<M extends Model<any>, MFields extends keyof Omit<M, 'id'>, ExtraFields extends Fields = Fields> = Array<Arg<M, MFields> & ExtraFields>;
export type RetrieveResult<M extends Model<any>, MFields extends keyof M = 'id'> = Result<M, MFields>;
export type RetrieveArg<M extends Model<any>> = M['id'];
export interface ListResult<M extends Model<any>, MFields extends keyof M = 'id', ExtraFields extends Fields = Fields> {
    count: number;
    offset: number;
    limit: number;
    maxLimit: number;
    data: Array<Result<M, MFields> & ExtraFields>;
}
export type ListArg<Filters extends Fields = Fields> = {
    limit: number;
    offset: number;
} & Partial<Omit<Filters, 'limit' | 'offset'>>;
export type UpdateResult<M extends Model<any>, MFields extends keyof M = 'id'> = Result<M, MFields>;
export type UpdateArg<M extends Model<any>, MFields extends keyof Omit<M, 'id'>, ExtraFields extends Fields = Fields> = [M['id'], Arg<M, MFields> & ExtraFields];
export type BulkUpdateResult<M extends Model<any>, MFields extends keyof M = 'id', ExtraFields extends Fields = Fields> = Array<Result<M, MFields> & ExtraFields>;
export type BulkUpdateArg<M extends Model<any>, MFields extends keyof Omit<M, 'id'>, ExtraFields extends Fields = Fields> = Record<M['id'], Arg<M, MFields> & ExtraFields>;
export type PartialUpdateResult<M extends Model<any>, MFields extends keyof M = 'id'> = Result<M, MFields>;
export type PartialUpdateArg<M extends Model<any>, MFields extends keyof Omit<M, 'id'>, ExtraFields extends Fields = Fields> = [M['id'], Partial<Arg<M, MFields> & ExtraFields>];
export type BulkPartialUpdateResult<M extends Model<any>, MFields extends keyof M = 'id', ExtraFields extends Fields = Fields> = Array<Result<M, MFields> & ExtraFields>;
export type BulkPartialUpdateArg<M extends Model<any>, MFields extends keyof Omit<M, 'id'>, ExtraFields extends Fields = Fields> = Record<M['id'], Partial<Arg<M, MFields> & ExtraFields>>;
export type DestroyResult = null;
export type DestroyArg<M extends Model<any>> = M['id'];
export type BulkDestroyResult = null;
export type BulkDestroyArg<M extends Model<any>> = Array<M['id']>;
export declare function buildUrl(url: string, params: {
    search?: Fields;
    url?: Fields;
}): string;
export declare function isTagId(value: unknown): boolean;
export declare function tagData<Type extends string, M extends Model<any>>(type: Type): (result: Result<M, any> | Array<Result<M, any>> | ListResult<M, any> | null | undefined, error: FetchBaseQueryError | undefined, arg: Arg<M, any> | Array<Arg<M, any>> | [M['id'], Arg<M, any>] | Record<M['id'], Arg<M, any>> | ListArg<any> | Array<M['id']> | string | number | undefined) => Array<Tag<Type>>;
