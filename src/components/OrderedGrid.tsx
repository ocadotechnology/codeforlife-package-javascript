import type React from "react"
import { Grid, type GridProps } from "@mui/material"

interface ItemProps
  extends Omit<
    GridProps,
    | "key"
    | "order"
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "xsOffset"
    | "smOffset"
    | "mdOffset"
    | "lgOffset"
    | "xlOffset"
  > {}

interface GlobalItemProps extends ItemProps {
  xs: number
  sm: number
  md: number
  lg: number
  xl: number
}

export interface OrderedGridProps {
  rows: Array<
    Array<{
      element: React.ReactElement
      itemProps?: ItemProps
    }>
  >
  containerProps?: Omit<GridProps, "container">
  globalItemProps: GlobalItemProps
}

const OrderedGrid: React.FC<OrderedGridProps> = ({
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
              xs: getOrder(rowIndex, itemIndex, globalItemProps.xs),
              sm: getOrder(rowIndex, itemIndex, globalItemProps.sm),
              md: getOrder(rowIndex, itemIndex, globalItemProps.md),
              lg: getOrder(rowIndex, itemIndex, globalItemProps.lg),
              xl: getOrder(rowIndex, itemIndex, globalItemProps.xl),
            }}
            xsOffset={getOffset(itemIndex, globalItemProps.xs)}
            smOffset={getOffset(itemIndex, globalItemProps.sm)}
            mdOffset={getOffset(itemIndex, globalItemProps.md)}
            lgOffset={getOffset(itemIndex, globalItemProps.lg)}
            xlOffset={getOffset(itemIndex, globalItemProps.xl)}
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
