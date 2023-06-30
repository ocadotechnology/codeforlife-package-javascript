import { useSearchParams } from 'react-router-dom';
export function fromSearchParams() {
    var searchParams = useSearchParams()[0].entries();
    return Object.fromEntries(searchParams);
}
