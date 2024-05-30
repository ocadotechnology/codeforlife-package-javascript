import React from "react"
import { Box, BoxProps } from "@mui/material"

export interface YouTubeVideoProps extends Omit<BoxProps, "component"> {
  src: string
}

const YouTubeVideo: React.FC<YouTubeVideoProps> = ({
  src,
  style = {},
  ...otherProps
}) => {
  return (
    <Box
      component="iframe"
      width="100%"
      src={src}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
      style={{ border: "0px", aspectRatio: "16 / 9", ...style }}
      {...otherProps}
    />
  )
}

export default YouTubeVideo
