import React from 'react';
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
