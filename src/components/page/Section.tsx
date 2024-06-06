import type React from "react"
import {
  Unstable_Grid2 as Grid,
  type Grid2Props,
  Container,
  type ContainerProps,
} from "@mui/material"

export interface SectionProps extends ContainerProps {
  children: React.ReactNode
  gridProps?: Omit<Grid2Props, "xs" | "sm" | "md" | "lg" | "xl" | "container">
}

const Section: React.FC<SectionProps> = ({
  gridProps,
  children,
  ...containerProps
}) => {
  return (
    <Grid xs={12} {...gridProps}>
      <Container {...containerProps}>{children}</Container>
    </Grid>
  )
}

export default Section
