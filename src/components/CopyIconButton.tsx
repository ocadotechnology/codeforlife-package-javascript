import { ContentCopy as ContentCopyIcon } from "@mui/icons-material"
import { IconButton, type IconButtonProps } from "@mui/material"
import type { FC } from "react"

export interface CopyIconButtonProps extends Omit<IconButtonProps, "onClick"> {
  content: string
}

const CopyIconButton: FC<CopyIconButtonProps> = ({
  content,
  children = <ContentCopyIcon />,
  ...otherIconButtonProps
}) => {
  return (
    <IconButton
      data-testid="copy-icon-button"
      onClick={() => {
        navigator.clipboard.writeText(content)
      }}
      {...otherIconButtonProps}
    >
      {children}
    </IconButton>
  )
}

export default CopyIconButton
