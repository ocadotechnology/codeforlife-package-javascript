import { type FC, type ReactNode, isValidElement } from "react"
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
  headers: Array<ReactNode | TableCellProps>
  children: ReactNode
  containerProps?: TableContainerProps
  headProps?: TableHeadProps
  headRowProps?: TableRowProps
  bodyProps?: TableBodyProps
}

const Table: FC<TableProps> = ({
  headers,
  children,
  containerProps,
  headProps,
  headRowProps,
  bodyProps,
  ...tableProps
}) => (
  <TableContainer {...containerProps}>
    <MuiTable {...tableProps}>
      <TableHead {...headProps}>
        <TableRow {...headRowProps}>
          {headers.map((header, index) => {
            const key = `table-head-cell-${index}`

            return isValidElement(header) ? (
              <TableCell key={key}>{header}</TableCell>
            ) : (
              <TableCell key={key} {...(header as TableCellProps)} />
            )
          })}
        </TableRow>
      </TableHead>
      <TableBody {...bodyProps}>{children}</TableBody>
    </MuiTable>
  </TableContainer>
)

export default Table
