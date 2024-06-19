import { buttonClasses } from "@mui/material"

import { includesClassNames } from "../../utils/theme"
import typography from "../typography"
import type Components from "./_components"

const MuiButton: Components["MuiButton"] = {
  defaultProps: {
    variant: "contained",
    size: "medium",
  },
  styleOverrides: {
    root: ({ ownerState }) => ({
      color: "black",
      textTransform: "none",
      textAlign: "center",
      borderRadius: "0px",
      padding: "11px 12px",
      height: "42px",
      whiteSpace: "nowrap",
      width: "fit-content",
      minWidth: "150px",
      boxShadow: "none",
      ...(ownerState.size === "small" && {
        height: "27px",
        padding: "4.5px 9px",
        letterSpacing: "0",
      }),
      ...(includesClassNames(ownerState, ["body"]) && {
        marginBottom: typography.body1?.marginBottom,
      }),
    }),
    contained: ({ ownerState }) => ({
      backgroundColor: "#ffd23b",
      "&:hover": {
        backgroundColor: "#ffc709",
        boxShadow: [
          "0px 6px 10px 0px rgba(0, 0, 0, 0.14)",
          "0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
          "0px 3px 5px 0px rgba(0, 0, 0, 0.2);",
        ].join(),
      },
      [`&.${buttonClasses.disabled}`]: {
        backgroundColor: "#ffe382",
        color: "#7A5F01",
      },
      ...(includesClassNames(ownerState, ["alert"]) && {
        color: "white",
        backgroundColor: "#ff0000",
        "&:hover": {
          backgroundColor: "#df0531",
        },
        [`&.${buttonClasses.disabled}`]: {
          backgroundColor: "#E76A6A",
          color: "white",
        },
      }),
    }),
    outlined: {
      border: "2px solid #eab502",
      "&:hover": {
        border: "2px solid #eab502",
        backgroundColor: "transparent",
        textDecoration: "underline",
      },
    },
  },
}

export default MuiButton
