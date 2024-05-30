import React from "react"
import { IconButton, IconButtonProps } from "@mui/material"
import { ContentCopy as ContentCopyIcon } from "@mui/icons-material"

export interface CopyIconButtonProps extends Omit<IconButtonProps, "onClick"> {
  content: string
}

const CopyIconButton: React.FC<CopyIconButtonProps> = ({
  content,
  children = <ContentCopyIcon />,
  ...otherIconButtonProps
}) => {
  return (
    <IconButton
      onClick={() => {
        void navigator.clipboard.writeText(content)
      }}
      {...otherIconButtonProps}
    >
      {children}
    </IconButton>
  )
}

export default CopyIconButton
