import { Button, Dialog, Typography } from "@mui/material"
import { type FC } from "react"

import { Countdown } from "../components"

export interface InactiveDialogProps {
  open: boolean
  onClose: () => void
}

const InactiveDialog: FC<InactiveDialogProps> = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <Typography variant="h5" textAlign="center">
        Where did you go? 👀
      </Typography>
      <Typography textAlign="center">
        We noticed that you have been inactive for a while. Are you still there?
        For your online safety we will log you out in:
      </Typography>
      <Countdown
        textAlign="center"
        variant="h5"
        seconds={60 * 2}
        onEnd={() => {
          onClose()
          alert("TODO: call logout endpoint")
        }}
      />
      <Typography textAlign="center">
        You may lose progress unless you continue or save.
      </Typography>
      <Button onClick={onClose} autoFocus>
        Wait, I&apos;m still here!
      </Button>
    </Dialog>
  )
}

export default InactiveDialog
