import React from "react"
import { Tooltip, type TooltipProps } from "@mui/material"

import { wrap } from "../helpers"

export interface ClickableTooltipProps extends TooltipProps {}

const ClickableTooltip: React.FC<ClickableTooltipProps> = ({
  open = false,
  onClick,
  ...otherTooltipProps
}) => {
  const [_open, _setOpen] = React.useState(open)

  React.useEffect(() => {
    _setOpen(open)
  }, [open])

  return (
    <Tooltip
      open={_open}
      onMouseOver={() => {
        if (!_open) {
          _setOpen(true)
        }
      }}
      onMouseLeave={() => {
        _setOpen(false)
      }}
      onClick={wrap(
        {
          after: () => {
            _setOpen(!_open)
          },
        },
        onClick,
      )}
      {...otherTooltipProps}
    />
  )
}

export default ClickableTooltip
