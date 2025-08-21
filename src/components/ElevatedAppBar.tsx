import {
  AppBar,
  type AppBarProps,
  Container,
  type ContainerProps,
  Toolbar,
  type ToolbarProps,
  useScrollTrigger,
} from "@mui/material"
import { type FC, cloneElement } from "react"

export interface ElevatedAppBarProps extends Omit<AppBarProps, "position"> {
  containerProps: ContainerProps
  toolbarProps?: ToolbarProps
}

const ElevatedAppBar: FC<ElevatedAppBarProps> = ({
  containerProps,
  toolbarProps,
  elevation = 4,
  children,
  ...otherProps
}) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  return cloneElement(
    <AppBar elevation={elevation} {...otherProps}>
      <Container {...containerProps}>
        <Toolbar {...toolbarProps}>{children}</Toolbar>
      </Container>
    </AppBar>,
    {
      position: trigger ? "fixed" : "sticky",
    },
  )
}

export default ElevatedAppBar
