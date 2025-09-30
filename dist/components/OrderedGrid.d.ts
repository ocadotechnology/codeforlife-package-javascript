import { FC, ReactElement } from 'react';
import { GridProps } from '@mui/material';
interface ItemProps extends Omit<GridProps, "key" | "order" | "size" | "offset"> {
}
interface GlobalItemProps extends ItemProps {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
}
export interface OrderedGridProps {
    rows: Array<Array<{
        element: ReactElement;
        itemProps?: ItemProps;
    }>>;
    containerProps?: Omit<GridProps, "container">;
    globalItemProps: GlobalItemProps;
}
declare const OrderedGrid: FC<OrderedGridProps>;
export default OrderedGrid;
