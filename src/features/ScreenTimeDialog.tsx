import { Button, Dialog, Typography } from "@mui/material"
import { type FC } from "react"

import BrainImage from "../images/svg/brain.svg"
import { Image } from "../components"

export interface ScreenTimeDialogProps {
  open: boolean
  onClose: () => void
}

const ScreenTimeDialog: FC<ScreenTimeDialogProps> = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm">
      <Image src={BrainImage} alt="brain" maxWidth={100} marginY={3} />
      <Typography variant="h5" textAlign="center">
        Time for a break?
      </Typography>
      <Typography textAlign="center">
        You have been using the Code for Life website for a while. Remember to
        take regular screen breaks to recharge those brain cells!
      </Typography>
      <Button onClick={onClose} autoFocus>
        Continue
      </Button>
    </Dialog>
  )
}

export default ScreenTimeDialog
