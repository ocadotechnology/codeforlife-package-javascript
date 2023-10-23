export type Fields = Record<string, unknown>;
/**
 * A data model.
 *  ID: The type of ID.
 *  ReadAndWrite: The fields that can both be read from and written to.
 *  ReadOnly: The fields that can only be read from. 'id' is a mandatory
 *    read-only field.
 *  WriteOnly: The fields that can only be written to.
 */
export type Model<ID, ReadAndWrite extends Fields = Fields, ReadOnly extends Fields = Fields, WriteOnly extends Fields = Fields> = ReadAndWrite & {
    _readOnly: ReadOnly & {
        id: ID;
    };
    _writeOnly: WriteOnly;
};
export type ID<M extends Model<any>> = M['_readOnly']['id'];
export type ReadFields<M extends Model<any>> = Omit<M, '_readOnly' | '_writeOnly'> & M['_readOnly'];
export type WriteFields<M extends Model<any>> = Omit<M, '_readOnly' | '_writeOnly'> & M['_writeOnly'];
export type ReadAndWriteFields<M extends Model<any>> = Omit<M, '_readOnly' | '_writeOnly'> & M['_readOnly'] & M['_writeOnly'];
export type TagArray<Type extends string, M extends Model<any>, LookupField extends keyof ReadFields<M> = 'id'> = Array<{
    type: Type;
    id: ReadFields<M>[LookupField];
}>;
export type CreateResult<M extends Model<any>> = ReadFields<M>;
export type CreateArg<M extends Model<any>> = WriteFields<M>;
export type BulkCreateResult<M extends Model<any>> = Array<CreateResult<M>>;
export interface BulkCreateArg<M extends Model<any>> {
    data: Array<CreateArg<M>>;
}
export type RetrieveResult<M extends Model<any>> = ReadFields<M>;
export type RetrieveArg<M extends Model<any>, LookupField extends keyof ReadAndWriteFields<M> = 'id'> = Pick<ReadAndWriteFields<M>, LookupField>;
export interface ListResult<M extends Model<any>> {
    count: number;
    offset: number;
    limit: number;
    maxLimit: number;
    data: Array<RetrieveResult<M>>;
}
export type ListArg<Filters extends Fields = Fields> = null | Partial<Filters>;
export type UpdateResult<M extends Model<any>> = ReadFields<M>;
export type UpdateArg<M extends Model<any>, LookupField extends keyof ReadAndWriteFields<M> = 'id'> = Pick<ReadAndWriteFields<M>, LookupField> & Partial<WriteFields<M>>;
export type BulkUpdateResult<M extends Model<any>> = Array<UpdateResult<M>>;
export interface BulkUpdateArg<M extends Model<any>, LookupField extends keyof ReadAndWriteFields<M> = 'id'> {
    data: Array<UpdateArg<M, LookupField>>;
}
export type DestroyResult = null;
export type DestroyArg<M extends Model<any>, LookupField extends keyof ReadAndWriteFields<M> = 'id'> = Pick<ReadAndWriteFields<M>, LookupField>;
export type BulkDestroyResult = null;
export interface BulkDestroyArg<M extends Model<any>, LookupField extends keyof ReadAndWriteFields<M> = 'id'> {
    LookupField: Array<DestroyArg<M, LookupField>[LookupField]>;
}
export declare function searchParamsToString(arg: ListArg): string;
export declare function tagData<Type extends string, M extends Model<any>, LookupField extends keyof ReadFields<M> = 'id'>(result: ListResult<M> | BulkCreateResult<M>, type: Type, lookupField?: LookupField): TagArray<Type, M, LookupField>;
