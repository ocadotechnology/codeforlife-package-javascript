import { responsiveFontSizes as x, createTheme as u, buttonClasses as O, ThemeProvider as C, Box as T } from "@mui/material";
import { g as S, i as j, t as B, s as F, c as I } from "../index-6NHvJgOq.js";
import { p as d, s as H, t as $, a as L } from "../palette-C_L0akN_.js";
import { j as s } from "../jsx-runtime-XvoU0p7t.js";
import { Circle as w, Hexagon as z } from "@mui/icons-material";
const R = ({
  options: r = y,
  withShapes: m = !1,
  userType: p,
  bgcolor: o,
  children: h,
  sx: v,
  ...M
}) => {
  let i, a, t;
  switch (p) {
    case "teacher":
      o = o ?? L[400], i = "tertiary", a = "secondary", t = d.primary.contrastText;
      break;
    case "student":
      o = o ?? $[500], i = "secondary", a = "primary", t = d.tertiary.contrastText;
      break;
    case "independent":
      o = o ?? H[500], i = "primary", a = "tertiary", t = d.secondary.contrastText;
      break;
  }
  const l = {
    display: { xs: "none", md: "block" },
    fontSize: "180px",
    position: "absolute"
  }, c = {
    color: t,
    textDecorationColor: t
  };
  function n(e, b, k, f = "root") {
    return {
      // Get the original styles.
      ...S(
        e,
        k,
        f,
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
                ...p === "independent" && {
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
                    color: t
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
                border: `2px solid ${t}`,
                "&:hover": {
                  border: `2px solid ${t}`,
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
                color: `${t} !important`
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
                  color: `${t} !important`
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
        ...m && {
          paddingY: { xs: 2, sm: 3, md: 5 },
          paddingX: { xs: 2, sm: 5, md: 10 },
          marginX: { md: "90px" }
        },
        bgcolor: o,
        alignItems: "center",
        position: "relative"
      },
      ...M,
      children: [
        m && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
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
  palette: d,
  components: I,
  spacing: F,
  typography: B
}, Y = x(u(y));
export {
  R as ThemedBox,
  Y as default,
  y as themeOptions
};
//# sourceMappingURL=index.es.js.map
