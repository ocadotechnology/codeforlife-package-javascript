import {
  useSearchParams
} from 'react-router-dom';

export function fromSearchParams(): object {
  const searchParams = useSearchParams()[0].entries();
  return Object.fromEntries(searchParams);
}
