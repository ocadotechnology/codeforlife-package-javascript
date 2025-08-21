import { Stack, Typography } from "@mui/material"
import { type FC } from "react"
import { SyncProblem as SyncProblemIcon } from "@mui/icons-material"

export interface SyncErrorProps {}

const SyncError: FC<SyncErrorProps> = () => (
  <Stack alignItems="center" alignContent="center">
    <SyncProblemIcon color="error" />
    <Typography color="error.main">Failed to sync data</Typography>
  </Stack>
)

export default SyncError
