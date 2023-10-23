// -----------------------------------------------------------------------------
// Model Types
// -----------------------------------------------------------------------------

// The fields of a model.
export type Fields = Record<string, unknown>;

/**
 * A data model.
 *  ID: The type of ID.
 *  ReadAndWrite: The fields that can both be read from and written to.
 *  ReadOnly: The fields that can only be read from. 'id' is a mandatory
 *    read-only field.
 *  WriteOnly: The fields that can only be written to.
 */
export type Model<
  ID,
  ReadAndWrite extends Fields = Fields,
  ReadOnly extends Fields = Fields,
  WriteOnly extends Fields = Fields
> = ReadAndWrite & {
  _readOnly: ReadOnly & { id: ID; };
  _writeOnly: WriteOnly;
};

// Gets the type of a model's ID.
export type ID<M extends Model<any>> = M['_readOnly']['id'];

// Gets the types of a model's readable fields.
export type ReadFields<M extends Model<any>> =
  Omit<M, '_readOnly' | '_writeOnly'> & M['_readOnly'];

// Gets the types of a model's writeable fields.
export type WriteFields<M extends Model<any>> =
  Omit<M, '_readOnly' | '_writeOnly'> & M['_writeOnly'];

// Gets the types of a model's readable and writeable fields.
export type ReadAndWriteFields<M extends Model<any>> =
  Omit<M, '_readOnly' | '_writeOnly'> & M['_readOnly'] & M['_writeOnly'];

// An array of tags with ID's.
export type TagArray<
  Type extends string,
  M extends Model<any>,
  LookupField extends keyof ReadFields<M> = 'id'
> = Array<{
  type: Type;
  id: ReadFields<M>[LookupField];
}>;

// -----------------------------------------------------------------------------
// CRUD Types
// https://www.django-rest-framework.org/api-guide/viewsets/#viewset-actions
// -----------------------------------------------------------------------------

// Create

export type CreateResult<M extends Model<any>> = ReadFields<M>;

export type CreateArg<M extends Model<any>> = WriteFields<M>;

export type BulkCreateResult<M extends Model<any>> = Array<ReadFields<M>>;

export interface BulkCreateArg<M extends Model<any>> {
  data: Array<WriteFields<M>>;
}

// Read

export type RetrieveResult<M extends Model<any>> = ReadFields<M>;

export type RetrieveArg<
  M extends Model<any>,
  LookupField extends keyof ReadAndWriteFields<M> = 'id'
> = Pick<ReadAndWriteFields<M>, LookupField>;

export interface ListResult<M extends Model<any>> {
  count: number;
  offset: number;
  limit: number;
  maxLimit: number;
  data: Array<ReadFields<M>>;
}

export type ListArg<Filters extends Fields = Fields> =
  null | Partial<Filters>;

// Update

export type UpdateResult<M extends Model<any>> = ReadFields<M>;

export type UpdateArg<
  M extends Model<any>,
  LookupField extends keyof ReadAndWriteFields<M> = 'id'
> = Pick<ReadAndWriteFields<M>, LookupField> & Partial<WriteFields<M>>;

// Delete

export type DestroyResult = null;

export type DestroyArg<
  M extends Model<any>,
  LookupField extends keyof ReadAndWriteFields<M> = 'id'
> = Pick<ReadAndWriteFields<M>, LookupField>;

// -----------------------------------------------------------------------------
// Functions
// -----------------------------------------------------------------------------

export function searchParamsToString(arg: ListArg): string {
  if (arg !== null) {
    const searchParams = Object.entries(arg)
      .filter(([_, value]) => value !== undefined)
      .map(([key, value]) => [key, String(value)]);

    if (searchParams.length !== 0) {
      return `?${new URLSearchParams(searchParams).toString()}`;
    }
  }

  return '';
}

export function tagData<
  Type extends string,
  M extends Model<any>,
  LookupField extends keyof ReadFields<M> = 'id'
>(
  result: ListResult<M> | BulkCreateResult<M>,
  type: Type,
  lookupField: LookupField = 'id' as LookupField
): TagArray<Type, M, LookupField> {
  const data = 'data' in result ? result.data : result;

  return data.map((result) => ({
    type,
    id: result[lookupField]
  })) as TagArray<Type, M, LookupField>;
}
