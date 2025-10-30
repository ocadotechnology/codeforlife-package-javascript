import { ElementType, JSX, JSXElementConstructor, ReactNode } from 'react';
import { TablePaginationProps as MuiTablePaginationProps, StackProps, TablePaginationBaseProps } from '@mui/material';
import { TypedUseLazyQuery } from '@reduxjs/toolkit/query/react';
import { ListArg, ListResult } from '../utils/api';
import { Pagination } from '../hooks/api';
export type TablePaginationProps<QueryArg extends ListArg, ResultType extends ListResult<any>, RootComponent extends ElementType = JSXElementConstructor<TablePaginationBaseProps>, AdditionalProps = {}> = Omit<MuiTablePaginationProps<RootComponent, AdditionalProps>, "component" | "count" | "rowsPerPage" | "onRowsPerPageChange" | "rowsPerPageOptions" | "page" | "onPageChange"> & Partial<Pick<MuiTablePaginationProps<RootComponent, AdditionalProps>, "onRowsPerPageChange" | "onPageChange">> & {
    children: (data: ResultType["data"], pagination: Pagination & {
        count?: number;
        maxLimit?: number;
    }) => ReactNode;
    useLazyListQuery: TypedUseLazyQuery<ResultType, QueryArg, any>;
    preferCacheValue?: boolean;
    filters?: Omit<QueryArg, "limit" | "offset">;
    rowsPerPageOptions?: number[];
    stackProps?: StackProps;
    page?: number;
    rowsPerPage?: number;
};
declare const TablePagination: <QueryArg extends ListArg, ResultType extends ListResult<any>, RootComponent extends ElementType = JSXElementConstructor<TablePaginationBaseProps>, AdditionalProps = {}>({ children, useLazyListQuery, preferCacheValue, filters, page: initialPage, rowsPerPage: initialLimit, rowsPerPageOptions, stackProps, onRowsPerPageChange, onPageChange, ...tablePaginationProps }: TablePaginationProps<QueryArg, ResultType, RootComponent, AdditionalProps>) => JSX.Element;
export default TablePagination;
