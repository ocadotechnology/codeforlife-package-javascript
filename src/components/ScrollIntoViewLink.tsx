import { Link, type LinkProps } from "@mui/material"
import { type FC } from "react"
export interface ScrollIntoViewLinkProps extends Omit<LinkProps, "onClick"> {
  elementId: string
  options?: ScrollIntoViewOptions
}

const ScrollIntoViewLink: FC<ScrollIntoViewLinkProps> = ({
  elementId,
  options,
  ...linkProps
}) => (
  <Link
    {...linkProps}
    onClick={() => {
      const element = document.getElementById(elementId)
      element?.scrollIntoView(options)
    }}
  />
)

export default ScrollIntoViewLink
