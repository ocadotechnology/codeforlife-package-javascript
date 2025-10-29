import { responsiveFontSizes as u, createTheme as y, buttonClasses as C, ThemeProvider as T, Box as S } from "@mui/material";
import { g as B, i as F, t as I, s as H, c as $ } from "../index-CDxf6gMv.js";
import { s as L, p as c, t as j, a as w } from "../palette-CYwuLBW7.js";
import { c as Q } from "../palette-CYwuLBW7.js";
import { jsx as m, jsxs as x, Fragment as z } from "react/jsx-runtime";
import { Circle as D, Hexagon as P } from "@mui/icons-material";
const E = ({
  options: r = h,
  withShapes: p = !1,
  userType: d,
  bgcolor: t,
  children: v,
  sx: M,
  ...g
}) => {
  let s, i, o;
  switch (d) {
    case "teacher":
      t = t ?? w[400], s = "tertiary", i = "secondary", o = c.primary.contrastText;
      break;
    case "student":
      t = t ?? j[500], s = "secondary", i = "primary", o = c.tertiary.contrastText;
      break;
    case "independent":
      t = t ?? L[500], s = "primary", i = "tertiary", o = c.secondary.contrastText;
      break;
  }
  const l = {
    display: { xs: "none", md: "block" },
    fontSize: "180px",
    position: "absolute"
  }, a = {
    color: o,
    textDecorationColor: o
  };
  function n(e, k, f, O = "root") {
    return {
      // Get the original styles.
      ...B(
        e,
        f,
        O,
        r.components
      ),
      // Override styles unless the class name 'no-override' is set.
      ...!F(e, ["no-override"]) && k
    };
  }
  const b = u(
    y({
      ...r,
      components: {
        ...r.components,
        MuiTypography: {
          ...r.components?.MuiTypography,
          styleOverrides: {
            ...r.components?.MuiTypography?.styleOverrides,
            root: ({ ownerState: e }) => n(
              e,
              {
                ...a
              },
              "MuiTypography"
            )
          }
        },
        MuiFormHelperText: {
          ...r.components?.MuiFormHelperText,
          styleOverrides: {
            ...r.components?.MuiFormHelperText?.styleOverrides,
            root: ({ ownerState: e }) => n(
              e,
              {
                ...a
              },
              "MuiFormHelperText"
            )
          }
        },
        MuiLink: {
          ...r.components?.MuiLink,
          styleOverrides: {
            ...r.components?.MuiLink?.styleOverrides,
            root: ({ ownerState: e }) => n(
              e,
              {
                ...a
              },
              "MuiLink"
            )
          }
        },
        MuiButton: {
          ...r.components?.MuiButton,
          styleOverrides: {
            ...r.components?.MuiButton?.styleOverrides,
            contained: ({ ownerState: e }) => n(
              e,
              {
                ...d === "independent" && {
                  backgroundColor: "white",
                  "&:hover": {
                    backgroundColor: "#f6f5f5",
                    boxShadow: [
                      "0px 6px 10px 0px rgba(0, 0, 0, 0.14)",
                      "0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
                      "0px 3px 5px 0px rgba(0, 0, 0, 0.2);"
                    ].join()
                  },
                  [`&.${C.disabled}`]: {
                    backgroundColor: "white",
                    color: o
                  }
                }
              },
              "MuiButton",
              "contained"
            ),
            outlined: ({ ownerState: e }) => n(
              e,
              {
                ...a,
                border: `2px solid ${o}`,
                "&:hover": {
                  border: `2px solid ${o}`,
                  backgroundColor: "transparent",
                  textDecoration: "underline"
                }
              },
              "MuiButton",
              "outlined"
            )
          }
        },
        MuiCheckbox: {
          ...r.components?.MuiCheckbox,
          styleOverrides: {
            ...r.components?.MuiCheckbox?.styleOverrides,
            root: ({ ownerState: e }) => n(
              e,
              {
                color: `${o} !important`
              },
              "MuiCheckbox"
            )
          }
        },
        MuiSvgIcon: {
          ...r.components?.MuiSvgIcon,
          styleOverrides: {
            ...r.components?.MuiSvgIcon?.styleOverrides,
            root: ({ ownerState: e }) => n(
              e,
              {
                "&.checkbox-error": {
                  color: `${o} !important`
                }
              },
              "MuiSvgIcon"
            )
          }
        }
      }
    })
  );
  return /* @__PURE__ */ m(T, { theme: b, children: /* @__PURE__ */ x(
    S,
    {
      sx: {
        ...M,
        ...p && {
          paddingY: { xs: 2, sm: 3, md: 5 },
          paddingX: { xs: 2, sm: 5, md: 10 },
          marginX: { md: "90px" }
        },
        bgcolor: t,
        alignItems: "center",
        position: "relative"
      },
      ...g,
      children: [
        p && /* @__PURE__ */ x(z, { children: [
          /* @__PURE__ */ m(
            D,
            {
              color: s,
              sx: {
                ...l,
                top: "5%",
                left: "0%",
                transform: "translate(-60%, 0%)"
              }
            }
          ),
          /* @__PURE__ */ m(
            P,
            {
              color: i,
              sx: {
                ...l,
                bottom: "5%",
                right: "0%",
                transform: "translate(60%, 0%) rotate(90deg)"
              }
            }
          )
        ] }),
        v
      ]
    }
  ) });
}, h = {
  palette: c,
  components: $,
  spacing: H,
  typography: I
}, G = u(y(h));
export {
  E as ThemedBox,
  Q as colors,
  G as theme,
  h as themeOptions
};
//# sourceMappingURL=index.es.js.map
