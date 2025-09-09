import { responsiveFontSizes as x, createTheme as u, buttonClasses as O, ThemeProvider as C, Box as T } from "@mui/material";
import { g as S, i as j, t as B, s as F, c as I } from "../index-CkM7p7f8.js";
import { s as H, p as m, t as $, a as L } from "../palette-CYwuLBW7.js";
import { c as G } from "../palette-CYwuLBW7.js";
import { j as s } from "../jsx-runtime-Dpn_P65e.js";
import { Circle as w, Hexagon as z } from "@mui/icons-material";
const R = ({
  options: r = y,
  withShapes: p = !1,
  userType: d,
  bgcolor: t,
  children: h,
  sx: v,
  ...M
}) => {
  let i, a, o;
  switch (d) {
    case "teacher":
      t = t ?? L[400], i = "tertiary", a = "secondary", o = m.primary.contrastText;
      break;
    case "student":
      t = t ?? $[500], i = "secondary", a = "primary", o = m.tertiary.contrastText;
      break;
    case "independent":
      t = t ?? H[500], i = "primary", a = "tertiary", o = m.secondary.contrastText;
      break;
  }
  const l = {
    display: { xs: "none", md: "block" },
    fontSize: "180px",
    position: "absolute"
  }, c = {
    color: o,
    textDecorationColor: o
  };
  function n(e, b, f, k = "root") {
    return {
      // Get the original styles.
      ...S(
        e,
        f,
        k,
        r.components
      ),
      // Override styles unless the class name 'no-override' is set.
      ...!j(e, ["no-override"]) && b
    };
  }
  const g = x(
    u({
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
                ...c
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
                ...c
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
                ...c
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
                  [`&.${O.disabled}`]: {
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
                ...c,
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
  return /* @__PURE__ */ s.jsx(C, { theme: g, children: /* @__PURE__ */ s.jsxs(
    T,
    {
      sx: {
        ...v,
        ...p && {
          paddingY: { xs: 2, sm: 3, md: 5 },
          paddingX: { xs: 2, sm: 5, md: 10 },
          marginX: { md: "90px" }
        },
        bgcolor: t,
        alignItems: "center",
        position: "relative"
      },
      ...M,
      children: [
        p && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          /* @__PURE__ */ s.jsx(
            w,
            {
              color: i,
              sx: {
                ...l,
                top: "5%",
                left: "0%",
                transform: "translate(-60%, 0%)"
              }
            }
          ),
          /* @__PURE__ */ s.jsx(
            z,
            {
              color: a,
              sx: {
                ...l,
                bottom: "5%",
                right: "0%",
                transform: "translate(60%, 0%) rotate(90deg)"
              }
            }
          )
        ] }),
        h
      ]
    }
  ) });
}, y = {
  palette: m,
  components: I,
  spacing: F,
  typography: B
}, Y = x(u(y));
export {
  R as ThemedBox,
  G as colors,
  Y as default,
  y as themeOptions
};
//# sourceMappingURL=index.es.js.map
