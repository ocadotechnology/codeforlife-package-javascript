import { type FC, type ReactElement } from "react"
import { Grid, type GridProps } from "@mui/material"

interface ItemProps
  extends Omit<GridProps, "key" | "order" | "size" | "offset"> {}

interface GlobalItemProps extends ItemProps {
  size: {
    xs: number
    sm: number
    md: number
    lg: number
    xl: number
  }
}

export interface OrderedGridProps {
  rows: Array<
    Array<{
      element: ReactElement
      itemProps?: ItemProps
    }>
  >
  containerProps?: Omit<GridProps, "container">
  globalItemProps: GlobalItemProps
}

const OrderedGrid: FC<OrderedGridProps> = ({
  rows,
  containerProps = {},
  globalItemProps,
}) => {
  const columns = Number(containerProps.columns ?? 12)

  const getItemsPerRow = (size: number): number => Math.floor(columns / size)

  const getOrder = (
    rowIndex: number,
    itemIndex: number,
    size: number,
  ): number =>
    Math.floor(itemIndex / getItemsPerRow(size)) * rows.length + rowIndex

  const getOffset = (itemIndex: number, size: number): number => {
    const itemsOnLastRow = rows[0].length % getItemsPerRow(size)
    return itemsOnLastRow !== 0 && itemIndex === rows[0].length - 1
      ? (columns - itemsOnLastRow * size) / 2
      : 0
  }

  return (
    <Grid container {...containerProps}>
      {rows.map((row, rowIndex) =>
        row.map(({ element, itemProps = {} }, itemIndex) => (
          <Grid
            key={`${rowIndex}-${itemIndex}`}
            order={{
              xs: getOrder(rowIndex, itemIndex, globalItemProps.size.xs),
              sm: getOrder(rowIndex, itemIndex, globalItemProps.size.sm),
              md: getOrder(rowIndex, itemIndex, globalItemProps.size.md),
              lg: getOrder(rowIndex, itemIndex, globalItemProps.size.lg),
              xl: getOrder(rowIndex, itemIndex, globalItemProps.size.xl),
            }}
            offset={{
              xs: getOffset(itemIndex, globalItemProps.size.xs),
              sm: getOffset(itemIndex, globalItemProps.size.sm),
              md: getOffset(itemIndex, globalItemProps.size.md),
              lg: getOffset(itemIndex, globalItemProps.size.lg),
              xl: getOffset(itemIndex, globalItemProps.size.xl),
            }}
            {...globalItemProps}
            {...itemProps}
          >
            {element}
          </Grid>
        )),
      )}
    </Grid>
  )
}

export default OrderedGrid
