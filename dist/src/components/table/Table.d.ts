import { FC, ReactNode } from 'react';
import { TableProps as MuiTableProps, TableBodyProps, TableCellProps, TableContainerProps, TableHeadProps, TableRowProps } from '@mui/material';
export interface TableProps extends MuiTableProps {
    headers: Array<ReactNode | TableCellProps>;
    children: ReactNode;
    containerProps?: TableContainerProps;
    headProps?: TableHeadProps;
    headRowProps?: TableRowProps;
    bodyProps?: TableBodyProps;
}
declare const Table: FC<TableProps>;
export default Table;
