import { Button, type ButtonProps } from "@mui/material"
import { type FC, useEffect } from "react"
import { Download as DownloadIcon } from "@mui/icons-material"

export type DownloadFileButtonProps = ButtonProps & {
  file:
    | Blob
    | MediaSource
    | {
        text: string
        mimeType: "plain"
        name: string
        charset?: string
        extension?: string
      }
}

const DownloadFileButton: FC<DownloadFileButtonProps> = ({
  children = "Download",
  endIcon = <DownloadIcon />,
  file,
  ...otherButtonProps
}) => {
  let url: undefined | string = undefined
  let anchorProps: undefined | { download?: string; href: string } = undefined
  if ("mimeType" in file) {
    let { text, mimeType, name, charset = "utf-8", extension } = file

    if (!extension) extension = "." + { plain: "txt" }[mimeType]

    anchorProps = {
      download: name + extension,
      href: `data:text/${mimeType};charset=${charset},${encodeURIComponent(text)}`,
    }
  } else {
    url = URL.createObjectURL(file)

    anchorProps = { href: url }
  }

  useEffect(() => {
    return () => {
      if (url) URL.revokeObjectURL(url)
    }
  }, [url])

  return (
    <Button endIcon={endIcon} {...otherButtonProps} {...anchorProps}>
      {children}
    </Button>
  )
}

export default DownloadFileButton
