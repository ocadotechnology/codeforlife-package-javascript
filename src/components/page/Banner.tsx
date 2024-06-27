import { Button, Stack, Typography, type ButtonProps } from "@mui/material"
import { type FC } from "react"

import { primary, secondary, tertiary } from "../../theme/colors"
import palette from "../../theme/palette"
import Image, { type ImageProps } from "../Image"
import Section from "./Section"

export interface BannerProps {
  header: string
  subheader: string
  textAlign?: "start" | "center"
  imageProps?: ImageProps
  buttonProps?: ButtonProps
  bgcolor?: "primary" | "secondary" | "tertiary"
}

const Banner: FC<BannerProps> = ({
  header,
  subheader,
  textAlign = "start",
  imageProps,
  buttonProps,
  bgcolor = "primary",
}) => {
  // @ts-expect-error guaranteed to be in palette
  const contrastText = palette[bgcolor].contrastText

  return (
    <Section
      boxProps={{
        bgcolor: {
          primary: primary[500],
          secondary: secondary[500],
          tertiary: tertiary[500],
        }[bgcolor],
      }}
      sx={{ paddingY: 0 }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent={textAlign}
        gap={2}
      >
        <Stack
          py={{
            xs: "80px",
            md: imageProps !== undefined ? 0 : "100px",
          }}
          textAlign={textAlign}
        >
          <Typography variant="h2" color={contrastText}>
            {header}
          </Typography>
          <Typography
            color={contrastText}
            variant="h4"
            mb={buttonProps !== undefined ? undefined : 0}
          >
            {subheader}
          </Typography>
          {buttonProps !== undefined && <Button {...buttonProps} />}
        </Stack>
        {imageProps !== undefined && (
          <Image
            {...imageProps}
            display={{ xs: "none", md: "block" }}
            maxWidth="320px"
            marginLeft="auto"
          />
        )}
      </Stack>
    </Section>
  )
}

export default Banner
