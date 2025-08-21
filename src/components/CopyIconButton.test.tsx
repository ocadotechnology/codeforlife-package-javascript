import { screen } from "@testing-library/react"

import CopyIconButton from "./CopyIconButton"
import { renderWithUser } from "../utils/test"

test("Clicking button should copy content", async () => {
  const content = "Example string to be copied."

  const { user } = renderWithUser(<CopyIconButton content={content} />)

  expect(await navigator.clipboard.readText()).toEqual("")

  await user.click(screen.getByTestId("copy-icon-button"))

  expect(await navigator.clipboard.readText()).toEqual(content)
})
