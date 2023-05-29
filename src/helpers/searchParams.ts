import { useSearchParams } from 'react-router-dom';
import { Schema } from 'yup';

type CastFunc = (value: string) => any;
type ValidateFunc = (value: any) => boolean;

export function getSearchParams<T>(
  params: Record<string, {
    cast?: CastFunc,
    validate?: ValidateFunc,
    isRequired?: boolean
  }>
): null | T {
  const searchParams = useSearchParams()[0];

  let entries = Object.entries(params);

  if (entries.some(([name, { isRequired }]) =>
    isRequired !== false && searchParams.get(name) === null
  )) { return null; }

  entries = entries.filter(([name, { isRequired }]) =>
    isRequired !== false || searchParams.get(name) !== null
  );

  if (entries.length === 0) { return null; }

  try {
    return Object.fromEntries(entries.map(([name, { cast, validate }]) => {
      const stringValue = searchParams.get(name) as string;
      const value = (cast !== undefined) ? cast(stringValue) : stringValue;
      if (validate !== undefined && !validate(value)) { throw Error(); }
      return [name, value];
    })) as T;
  } catch (error) { return null; }
}

// Cast functions
export const stringToBoolean: CastFunc = (value) => {
  return value.toLowerCase() !== 'false' && value !== '0';
};

export function stringToProperty(obj: object): CastFunc {
  return (value) => obj[value];
}

// Validate functions
export function valueInOptions(options: readonly any[]): ValidateFunc {
  return (value) => options.includes(value);
}

export function valueMatchesSchema(schema: Schema): ValidateFunc {
  return (value) => {
    schema.validateSync(value);
    return true;
  };
}
