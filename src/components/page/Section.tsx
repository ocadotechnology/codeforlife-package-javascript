import {
  Box,
  type BoxProps,
  Container,
  type ContainerProps,
} from "@mui/material"
import type { FC } from "react"

export interface SectionProps extends ContainerProps {
  boxProps?: Omit<BoxProps, "children">
}

const Section: FC<SectionProps> = ({ boxProps, ...containerProps }) => {
  return (
    <Box {...boxProps}>
      <Container {...containerProps} />
    </Box>
  )
}

export default Section
