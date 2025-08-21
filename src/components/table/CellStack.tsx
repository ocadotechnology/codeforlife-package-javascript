import {
  Stack,
  type StackProps,
  TableCell,
  type TableCellProps,
} from "@mui/material"
import { type FC } from "react"

export interface CellStackProps extends StackProps {
  cellProps?: TableCellProps
}

const CellStack: FC<CellStackProps> = ({ cellProps, ...stackProps }) => (
  <TableCell {...cellProps}>
    <Stack {...stackProps} />
  </TableCell>
)

export default CellStack
