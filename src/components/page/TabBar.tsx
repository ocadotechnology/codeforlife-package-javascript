import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from "@mui/icons-material"
import {
  IconButton,
  Tab,
  type TabScrollButtonProps,
  Tabs,
  Typography,
} from "@mui/material"
import React from "react"
import { generatePath, useNavigate, useParams } from "react-router-dom"
import { object as YupObject, string as YupString } from "yup"

import { tryValidateSync } from "../../helpers/yup"
import { primary } from "../../theme/colors"
import Section from "./Section"

export interface TabBarProps {
  header: string
  tabs: Array<{
    label: string
    children: React.ReactNode
    path: string
  }>
  originalPath: string
  value?: number
}

const TabBar: React.FC<TabBarProps> = ({
  header,
  tabs,
  originalPath,
  value = 0,
}) => {
  const params = useParams()
  const navigate = useNavigate()
  const [_value, _setValue] = React.useState(
    value < 0 ? 0 : value >= tabs.length ? tabs.length - 1 : value,
  )

  const labels = tabs.map(tab => tab.label)
  const children = tabs.map(tab => tab.children)
  const paths = tabs.map(tab => tab.path)

  React.useEffect(() => {
    _setValue(value)
  }, [value])

  React.useEffect(() => {
    const tab = tryValidateSync(
      params,
      YupObject({
        tab: YupString().oneOf(paths).required(),
      }),
    )?.tab

    if (tab !== undefined) {
      _setValue(paths.indexOf(tab))
    }
  }, [params])

  return (
    <>
      <Section
        gridProps={{ bgcolor: primary[500] }}
        sx={{ paddingY: "100px" }}
        className="flex-center"
      >
        <Typography
          textAlign="center"
          variant="h2"
          style={{ color: "white" }}
          mb={0}
        >
          {header}
        </Typography>
      </Section>
      <Section
        gridProps={{ bgcolor: primary[300] }}
        sx={{ paddingY: "6px" }}
        className="flex-center"
      >
        <Tabs
          value={_value}
          onChange={(_, value) => {
            navigate(
              generatePath(originalPath, {
                tab: paths[value],
              }),
            )
          }}
          ScrollButtonComponent={({
            disabled,
            onClick,
            direction,
          }: TabScrollButtonProps) => {
            return (
              <>
                {disabled === false && (
                  <IconButton
                    onClick={onClick}
                    style={{
                      padding: 0,
                      [direction === "left" ? "marginRight" : "marginLeft"]:
                        "15px",
                      color: "white",
                    }}
                  >
                    {direction === "left" ? (
                      <>
                        <ChevronLeftIcon />
                      </>
                    ) : (
                      <>
                        <ChevronRightIcon />
                      </>
                    )}
                  </IconButton>
                )}
              </>
            )
          }}
        >
          {labels.map(label => (
            <Tab disableRipple key={label} label={label} />
          ))}
        </Tabs>
      </Section>
      {children[_value]}
    </>
  )
}

export default TabBar
