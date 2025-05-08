import { Stack, Typography } from "@mui/material"

import { LinkButton, type LinkButtonProps } from "../router"
import { primary, secondary, tertiary } from "../../theme/colors"
import palette from "../../theme/palette"
import Image, { type ImageProps } from "../Image"
import Section from "./Section"

export interface BannerProps<
  Button1State extends Record<string, any> = Record<string, any>,
  Button2State extends Record<string, any> = Record<string, any>,
> {
  header: string
  subheader?: string
  textAlign?: "start" | "center"
  imageProps?: ImageProps
  button1Props?: LinkButtonProps<"to", Button1State>
  button2Props?: LinkButtonProps<"to", Button2State>
  bgcolor?: "primary" | "secondary" | "tertiary"
}

const Banner = <
  Button1State extends Record<string, any> = Record<string, any>,
  Button2State extends Record<string, any> = Record<string, any>,
>({
  header,
  subheader,
  textAlign = "start",
  imageProps,
  button1Props,
  button2Props,
  bgcolor = "primary",
}: BannerProps<Button1State, Button2State>) => {
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
          <Typography
            variant="h2"
            color={contrastText}
            mb={subheader !== undefined ? undefined : 0}
          >
            {header}
          </Typography>
          {subheader !== undefined && (
            <Typography
              color={contrastText}
              variant="h4"
              mb={button1Props !== undefined ? undefined : 0}
            >
              {subheader}
            </Typography>
          )}
          <Stack direction="row" gap={2}>
            {button1Props !== undefined && <LinkButton {...button1Props} />}
            {button2Props !== undefined && <LinkButton {...button2Props} />}
          </Stack>
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
