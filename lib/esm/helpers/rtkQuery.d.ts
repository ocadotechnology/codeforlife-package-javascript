import type { FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import type { Optional, Required } from './general';
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
export type Result<M extends Model<any>, MFields extends keyof Omit<M, 'id'> = never> = Pick<M, 'id' | MFields>;
export type Arg<M extends Model<any>, RequiredFields extends keyof Omit<M, 'id'>, OptionalFields extends keyof Omit<M, 'id' | RequiredFields> = never> = Required<M, RequiredFields> & Optional<M, OptionalFields>;
export type CreateResult<M extends Model<any>, MFields extends keyof Omit<M, 'id'> = never> = Result<M, MFields>;
export type CreateArg<M extends Model<any>, RequiredFields extends keyof Omit<M, 'id'>, OptionalFields extends keyof Omit<M, 'id' | RequiredFields> = never> = Arg<M, RequiredFields, OptionalFields>;
export type BulkCreateResult<M extends Model<any>, MFields extends keyof Omit<M, 'id'> = never, ExtraFields extends Fields = Fields> = Array<Result<M, MFields> & ExtraFields>;
export type BulkCreateArg<M extends Model<any>, RequiredFields extends keyof Omit<M, 'id'>, OptionalFields extends keyof Omit<M, 'id' | RequiredFields> = never, ExtraFields extends Fields = Fields> = Array<Arg<M, RequiredFields, OptionalFields> & ExtraFields>;
export type RetrieveResult<M extends Model<any>, MFields extends keyof Omit<M, 'id'> = never> = Result<M, MFields>;
export type RetrieveArg<M extends Model<any>> = M['id'];
export interface ListResult<M extends Model<any>, MFields extends keyof Omit<M, 'id'> = never, ExtraFields extends Fields = Fields> {
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
export type UpdateResult<M extends Model<any>, MFields extends keyof Omit<M, 'id'> = never> = Result<M, MFields>;
type UpdateWithBody<M extends Model<any>, RequiredFields extends keyof Omit<M, 'id'>, OptionalFields extends keyof Omit<M, 'id' | RequiredFields>, ExtraFields extends Fields> = [M['id'], Arg<M, RequiredFields, OptionalFields> & ExtraFields];
export type UpdateArg<M extends Model<any>, RequiredFields extends keyof Omit<M, 'id'> = never, OptionalFields extends keyof Omit<M, 'id' | RequiredFields> = never, ExtraFields extends Fields = never> = [RequiredFields] extends [never] ? [OptionalFields] extends [never] ? [ExtraFields] extends [never] ? M['id'] : UpdateWithBody<M, RequiredFields, OptionalFields, ExtraFields> : UpdateWithBody<M, RequiredFields, OptionalFields, ExtraFields> : UpdateWithBody<M, RequiredFields, OptionalFields, ExtraFields>;
export type BulkUpdateResult<M extends Model<any>, MFields extends keyof Omit<M, 'id'> = never, ExtraFields extends Fields = Fields> = Array<Result<M, MFields> & ExtraFields>;
export type BulkUpdateArg<M extends Model<any>, RequiredFields extends keyof Omit<M, 'id'>, OptionalFields extends keyof Omit<M, 'id' | RequiredFields> = never, ExtraFields extends Fields = Fields> = Record<M['id'], Arg<M, RequiredFields, OptionalFields> & ExtraFields>;
export type DestroyResult = null;
export type DestroyArg<M extends Model<any>> = M['id'];
export type BulkDestroyResult = null;
export type BulkDestroyArg<M extends Model<any>> = Array<M['id']>;
export declare function buildUrl(url: string, params: {
    search?: Fields;
    url?: Fields;
}): string;
export declare function isTagId(value: unknown): boolean;
export declare function tagData<Type extends string, M extends Model<any>>(type: Type, id?: string): (result: Result<M, any> | Array<Result<M, any>> | ListResult<M, any> | null | undefined, error: FetchBaseQueryError | undefined, arg: Arg<M, any> | Array<Arg<M, any>> | [M['id'], Arg<M, any>] | Record<M['id'], Arg<M, any>> | ListArg<any> | Array<M['id']> | string | number | undefined) => Array<Tag<Type>>;
export {};
