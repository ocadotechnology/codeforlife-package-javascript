import {
  CloseOutlined as CloseOutlinedIcon,
  ErrorOutline as ErrorOutlineIcon,
  InfoOutlined as InfoOutlinedIcon,
} from "@mui/icons-material"
import { IconButton, Stack, Typography } from "@mui/material"
import { useEffect, useState, type FC, type ReactNode } from "react"

import palette from "../../theme/palette"
import Section from "./Section"

export interface NotificationProps {
  open?: boolean
  error?: boolean
  onClose?: () => void
  children: ReactNode
  bgcolor?: "secondary" | "tertiary"
}

const Notification: FC<NotificationProps> = ({
  open = true,
  error = false,
  onClose,
  children,
  bgcolor = "secondary",
}) => {
  const [_open, _setOpen] = useState(open)

  useEffect(() => {
    _setOpen(open)
  }, [open])

  if (!_open) return <></>

  // @ts-expect-error guaranteed to be in palette
  const contrastText = palette[bgcolor].contrastText

  return (
    <Section
      boxProps={{
        bgcolor: {
          secondary: "#ffd23b",
          tertiary: "#08bafc",
        }[bgcolor],
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
