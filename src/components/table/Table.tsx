import { type FC, type ReactNode } from "react"
import {
  Table as MuiTable,
  type TableProps as MuiTableProps,
  TableBody,
  type TableBodyProps,
  TableCell,
  type TableCellProps,
  TableContainer,
  type TableContainerProps,
  TableHead,
  type TableHeadProps,
  TableRow,
  type TableRowProps,
} from "@mui/material"

export interface TableProps extends MuiTableProps {
  headers: ReactNode[]
  children: ReactNode
  containerProps?: TableContainerProps
  headProps?: TableHeadProps
  headCellProps?: TableCellProps
  headRowProps?: TableRowProps
  bodyProps?: TableBodyProps
}

const Table: FC<TableProps> = ({
  headers,
  children,
  containerProps,
  headProps,
  headCellProps,
  headRowProps,
  bodyProps,
  ...tableProps
}) => (
  <TableContainer {...containerProps}>
    <MuiTable {...tableProps}>
      <TableHead {...headProps}>
        <TableRow {...headRowProps}>
          {headers.map((header, index) => (
            <TableCell {...headCellProps} key={`table-head-cell-${index}`}>
              {header}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody {...bodyProps}>{children}</TableBody>
    </MuiTable>
  </TableContainer>
)

export default Table
