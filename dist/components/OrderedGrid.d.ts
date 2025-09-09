import { FC, ReactElement } from 'react';
import { Grid2Props } from '@mui/material';
interface ItemProps extends Omit<Grid2Props, "key" | "order" | "xs" | "sm" | "md" | "lg" | "xl" | "xsOffset" | "smOffset" | "mdOffset" | "lgOffset" | "xlOffset"> {
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
    containerProps?: Omit<Grid2Props, "container">;
    globalItemProps: GlobalItemProps;
}
declare const OrderedGrid: FC<OrderedGridProps>;
export default OrderedGrid;
