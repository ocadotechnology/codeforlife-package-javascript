import React from 'react';
import {
  useSearchParams
} from 'react-router-dom';
import {
  Divider,
  DividerProps
} from '@mui/material';

export function openInNewTab(url: string, target = '_blank'): void {
  window.open(url, target);
}

export function insertDividerBetweenElements({
  elements,
  dividerProps
}: {
  elements: React.ReactElement[],
  dividerProps?: DividerProps
}): React.ReactElement[] {
  return elements.map((element, index) => <>
    {element}
    {index !== elements.length - 1
      ? <Divider {...dividerProps} />
      : undefined
    }
  </>);
}

export function stringToBoolean(value: string): boolean {
  return value.toLowerCase() !== 'false' && value !== '0';
}

export function getSearchParams(
  requiredParams: Record<string, (value: string) => any> = {},
  optionalParams: Record<string, (value: string) => any> = {}
): Record<string, any> | null {
  const searchParams = useSearchParams()[0];

  if (Object
    .keys(requiredParams)
    .some(name => searchParams.get(name) === null)
  ) { return null; }

  const params = {
    ...requiredParams,
    ...Object.fromEntries(
      Object.keys(optionalParams)
        .filter(name => searchParams.get(name) !== null)
        .map(name => [name, optionalParams[name]])
    )
  };

  return Object.fromEntries(
    Object.entries(params)
      .map(([key, value]) => [key, value(searchParams.get(key) as string)])
  );
}
