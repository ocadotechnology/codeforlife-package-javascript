import { Dispatch, SetStateAction } from 'react';
export type Pagination = {
    page: number;
    limit: number;
    offset: number;
};
export type SetPagination = Dispatch<SetStateAction<{
    page: number;
    limit: number;
}>>;
export type UsePaginationOptions = Partial<{
    page: number;
    limit: number;
}>;
export declare function usePagination(options?: UsePaginationOptions): [Pagination, SetPagination];
