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
export type TagArray<Type extends string, M extends Model<any>> = Array<{
    type: Type;
    id: ID<M>;
}>;
export type CreateResult<M extends Model<any>> = ReadFields<M>;
export type CreateArg<M extends Model<any>> = WriteFields<M>;
export type ReadResult<M extends Model<any>> = ReadFields<M>;
export interface ReadArg<M extends Model<any>> {
    id: ID<M>;
}
export interface ReadManyResult<M extends Model<any>> {
    count: number;
    offset: number;
    limit: number;
    maxLimit: number;
    data: Array<ReadFields<M>>;
}
export type ReadManyArg<SearchParams extends Fields = Fields> = null | Partial<SearchParams>;
export type UpdateResult<M extends Model<any>> = ReadFields<M>;
export interface UpdateArg<M extends Model<any>, Required extends Fields = Fields> {
    id: ID<M>;
    body: Partial<WriteFields<M>> & Required;
}
export type DeleteResult = null;
export interface DeleteArg<M extends Model<any>> {
    id: ID<M>;
}
export declare function searchParamsToString(arg: ReadManyArg): string;
export declare function mapIdsToTag<Type extends string, M extends Model<any>>(result: ReadManyResult<M>, type: Type): TagArray<Type, M>;
