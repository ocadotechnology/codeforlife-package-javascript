import { type FC } from "react"
import {
  Stack,
  TableCell,
  type TableCellProps,
  type StackProps,
} from "@mui/material"

export interface CellStackProps extends StackProps {
  cellProps?: TableCellProps
}

const CellStack: FC<CellStackProps> = ({ cellProps, ...stackProps }) => (
  <TableCell {...cellProps}>
    <Stack {...stackProps} />
  </TableCell>
)

export default CellStack
