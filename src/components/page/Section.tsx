import { Container, type ContainerProps } from "@mui/material"
import type { FC } from "react"

export interface SectionProps extends ContainerProps {}

const Section: FC<SectionProps> = containerProps => {
  return <Container {...containerProps} />
}

export default Section
