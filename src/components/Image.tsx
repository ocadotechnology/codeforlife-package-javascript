import { Box, type BoxProps } from "@mui/material"
import type React from "react"

import { openInNewTab } from "../utils"

export interface ImageProps extends Omit<BoxProps, "component"> {
  alt: string
  src: string
  href?: string
  hrefInNewTab?: boolean
}

const Image: React.FC<ImageProps> = ({
  href,
  hrefInNewTab = false,
  ...props
}) => {
  let { onClick, style = {}, ...otherProps } = props

  if (style.width === undefined) {
    style.width = "100%"
  }

  // Override onClick if href provided.
  if (href !== undefined) {
    style = { ...style, cursor: "pointer" }
    if (hrefInNewTab) {
      onClick = () => {
        openInNewTab(href)
      }
    } else {
      onClick = () => {
        window.location.replace(href)
      }
    }
  }

  return <Box component="img" onClick={onClick} style={style} {...otherProps} />
}

export default Image
