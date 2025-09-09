import { StackProps, TableCellProps } from '@mui/material';
import { FC } from 'react';
export interface CellStackProps extends StackProps {
    cellProps?: TableCellProps;
}
declare const CellStack: FC<CellStackProps>;
export default CellStack;
