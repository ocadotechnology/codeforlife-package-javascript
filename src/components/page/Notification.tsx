import React from "react"
import { Stack, Typography, IconButton } from "@mui/material"
import {
  InfoOutlined as InfoOutlinedIcon,
  ErrorOutline as ErrorOutlineIcon,
  CloseOutlined as CloseOutlinedIcon,
} from "@mui/icons-material"

import palette from "../../theme/palette"
import Section from "./Section"

export interface NotificationProps {
  open?: boolean
  error?: boolean
  onClose?: () => void
  children: React.ReactNode
  bgcolor?: "secondary" | "tertiary"
}

const Notification: React.FC<NotificationProps> = ({
  open = true,
  error = false,
  onClose,
  children,
  bgcolor = "secondary",
}) => {
  const [_open, _setOpen] = React.useState(open)

  React.useEffect(() => {
    _setOpen(open)
  }, [open])

  if (!_open) return <></>

  // @ts-expect-error guaranteed to be in palette
  const contrastText = palette[bgcolor].contrastText

  return (
    <Section
      gridProps={{
        bgcolor: bgcolor === "secondary" ? "#ffd23b" : "#08bafc",
      }}
      sx={{ paddingY: "5px" }}
    >
      <Stack direction="row" alignItems="center" gap={2}>
        {error ? (
          <ErrorOutlineIcon htmlColor={contrastText} />
        ) : (
          <InfoOutlinedIcon htmlColor={contrastText} />
        )}
        <Typography variant="body2" color={contrastText} mb={0}>
          {children}
        </Typography>
        <IconButton
          style={{ marginLeft: "auto" }}
          onClick={() => {
            _setOpen(false)
            if (onClose !== undefined) onClose()
          }}
        >
          <CloseOutlinedIcon htmlColor={contrastText} />
        </IconButton>
      </Stack>
    </Section>
  )
}

export default Notification
