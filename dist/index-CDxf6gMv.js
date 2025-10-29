import { Divider as v, buttonClasses as g, typographyClasses as x, listItemTextClasses as C, tabClasses as m, tableCellClasses as f, inputClasses as a, formHelperTextClasses as k, formLabelClasses as $, filledInputClasses as M, svgIconClasses as O, outlinedInputClasses as S, inputBaseClasses as d } from "@mui/material";
import { jsxs as B, Fragment as z, jsx as w } from "react/jsx-runtime";
import "react";
import { a as W, p as b } from "./palette-CYwuLBW7.js";
const F = {
  styleOverrides: {
    root: {
      borderRadius: "0px !important",
      margin: "0px !important",
      width: "100%"
    }
  }
}, I = {
  styleOverrides: {
    root: {
      width: "100%"
    }
  }
};
function dt({
  elements: t,
  dividerProps: o
}) {
  return t.map((e, i) => /* @__PURE__ */ B(z, { children: [
    e,
    i !== t.length - 1 ? /* @__PURE__ */ w(v, { ...o }) : void 0
  ] }));
}
function ct(t, o, e = "root", i = it) {
  if (i !== void 0) {
    const n = i[o];
    if (n !== void 0 && typeof n == "object" && "styleOverrides" in n && typeof n.styleOverrides == "object" && e in n.styleOverrides) {
      const l = n.styleOverrides[e];
      switch (typeof l) {
        case "function":
          return l({ ownerState: t });
        case "object":
          return l;
      }
    }
  }
  return {};
}
function p(t) {
  return t.className?.split(" ") ?? [];
}
function r(t, o) {
  const e = Array.isArray(t) ? t : p(t);
  return o.every((i) => e.includes(i));
}
function T(t, o) {
  return (Array.isArray(t) ? t : p(t)).map((i) => i.match(o)).filter((i) => i !== null).map((i) => i);
}
const y = {
  fontFamily: '"Inter"',
  fontSize: "14px !important",
  fontWeight: 600,
  margin: 0,
  marginBottom: "12px",
  letterSpacing: 0
}, s = {
  h1: {
    color: "#383b3b",
    fontFamily: '"SpaceGrotesk"',
    fontWeight: 500,
    fontSize: "60px",
    // lineHeight: '60px',
    marginBottom: "24px",
    letterSpacing: 0
  },
  h2: {
    color: "#383b3b",
    fontFamily: '"SpaceGrotesk"',
    fontWeight: 500,
    fontSize: "55px",
    // lineHeight: '55px',
    marginBottom: "22px",
    letterSpacing: 0
  },
  h3: {
    color: "#383b3b",
    fontFamily: '"SpaceGrotesk"',
    fontWeight: 500,
    fontSize: "45px",
    // lineHeight: '47px',
    marginBottom: "20px",
    letterSpacing: 0
  },
  h4: {
    color: "#383b3b",
    fontFamily: '"SpaceGrotesk"',
    fontWeight: 500,
    fontSize: "30px",
    // lineHeight: '38px',
    marginBottom: "18px",
    letterSpacing: 0
  },
  h5: {
    color: "#383b3b",
    fontFamily: '"SpaceGrotesk"',
    fontWeight: 500,
    fontSize: "25px",
    // lineHeight: '32px',
    marginBottom: "16px",
    letterSpacing: 0
  },
  h6: {
    color: "#383b3b",
    fontFamily: '"SpaceGrotesk"',
    fontWeight: 500,
    fontSize: "21px",
    // lineHeight: '26px',
    marginBottom: "10px",
    letterSpacing: 0
  },
  body1: {
    color: "#383b3b",
    fontFamily: '"Inter"',
    fontWeight: 500,
    fontSize: "1.07rem !important",
    // lineHeight: '22px',
    marginBottom: "16px",
    letterSpacing: 0
  },
  body2: {
    color: "#383b3b",
    fontFamily: '"Inter"',
    fontWeight: 500,
    fontSize: "0.92rem !important",
    // lineHeight: '20px',
    marginBottom: "14px",
    letterSpacing: 0
  },
  button: {
    fontFamily: '"Inter"',
    fontSize: "15px",
    fontWeight: 600,
    letterSpacing: 0
  }
}, j = {
  defaultProps: {
    variant: "contained",
    size: "medium"
  },
  styleOverrides: {
    root: ({ ownerState: t }) => ({
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
      ...t.size === "small" && {
        height: "27px",
        padding: "4.5px 9px",
        letterSpacing: "0"
      },
      ...r(t, ["body"]) && {
        marginBottom: s.body1?.marginBottom
      }
    }),
    contained: ({ ownerState: t }) => ({
      backgroundColor: "#ffd23b",
      "&:hover": {
        backgroundColor: "#ffc709",
        boxShadow: [
          "0px 6px 10px 0px rgba(0, 0, 0, 0.14)",
          "0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
          "0px 3px 5px 0px rgba(0, 0, 0, 0.2);"
        ].join()
      },
      [`&.${g.disabled}`]: {
        backgroundColor: "#ffe382",
        color: "#7A5F01"
      },
      ...r(t, ["alert"]) && {
        color: "white",
        backgroundColor: "#ff0000",
        "&:hover": {
          backgroundColor: "#df0531"
        },
        [`&.${g.disabled}`]: {
          backgroundColor: "#E76A6A",
          color: "white"
        }
      }
    }),
    outlined: {
      border: "2px solid #eab502",
      "&:hover": {
        border: "2px solid #eab502",
        backgroundColor: "transparent",
        textDecoration: "underline"
      }
    }
  }
};
function c(t, o = !1) {
  let e = `${8 * t}px`;
  return o && (e += " !important"), e;
}
const A = {
  styleOverrides: {
    root: {
      padding: c(2)
    }
  }
}, D = {
  styleOverrides: {
    root: {
      paddingLeft: "0px",
      marginLeft: "-2px"
    }
  }
};
function h(t) {
  const o = {}, e = p(t);
  return e.some((i) => i.startsWith("flex-")) && (o.display = "flex", r(e, ["flex-center"]) ? (o.justifyContent = "center", o.alignItems = "center") : r(e, ["flex-center-x"]) ? (o.justifyContent = "center", o.alignItems = "start") : r(e, ["flex-center-y"]) ? (o.justifyContent = "start", o.alignItems = "center") : r(e, ["flex-end"]) ? (o.justifyContent = "end", o.alignItems = "end") : r(e, ["flex-end-x"]) ? (o.justifyContent = "end", o.alignItems = "start") : r(e, ["flex-end-y"]) && (o.justifyContent = "start", o.alignItems = "end")), o;
}
function E(t) {
  let o = {};
  const e = p(t);
  return r(e, ["nowrap-ellipsis"]) && (o.whiteSpace = "nowrap", o.overflow = "hidden", o.textOverflow = "ellipsis"), ["h1", "h2", "h3", "h4", "h5", "h6", "body1", "body2"].filter((i) => i in s).forEach((i) => {
    const n = s[i];
    r(e, [i]) && (o = { ...o, ...n }), T(e, new RegExp(`^${i}-(\\w+)$`)).forEach(
      (l) => {
        const u = l[1];
        u in n && (o[u] = n[u]);
      }
    );
  }), o;
}
const R = {
  defaultProps: {
    maxWidth: "lg"
  },
  styleOverrides: {
    root: ({ ownerState: t }) => ({
      ...h(t),
      paddingLeft: c(2, !0),
      paddingRight: c(2, !0),
      padding: c(7)
    })
  }
}, L = {
  defaultProps: {
    maxWidth: "sm"
  },
  styleOverrides: {
    paper: {
      borderRadius: "0px !important",
      padding: "24px",
      alignItems: "center"
    }
  }
}, P = {
  styleOverrides: {
    root: {
      [`.${x.root}`]: {
        ...y,
        marginBottom: 0
      },
      margin: 0
    }
  }
}, G = {
  styleOverrides: {
    root: {
      ...y
    }
  }
}, H = {
  defaultProps: {
    // padding: 0 // TODO: normalize padding.
  },
  styleOverrides: {
    root: ({ ownerState: t }) => ({
      ...h(t)
    })
  }
}, N = {
  styleOverrides: {
    root: {
      backgroundColor: "white",
      marginBottom: 0,
      color: s.body1?.color
    }
  }
}, X = {
  defaultProps: {
    underline: "none",
    // BUG: if not set, MUI fails to run.
    color: "inherit"
  },
  styleOverrides: {
    root: ({ ownerState: t }) => ({
      cursor: "pointer",
      ...r(t, ["no-decor"]) ? {
        ":hover": {
          textDecoration: "underline"
        }
      } : {
        textDecoration: "underline",
        ":hover": {
          fontWeight: "bold"
        }
      },
      ...r(t, ["back-to"]) && {
        textDecoration: "none",
        display: "inline-block",
        marginBottom: s.body1?.marginBottom,
        ":hover": {
          fontWeight: "bold",
          textDecoration: "underline"
        },
        ":before": {
          content: '"< Back to "'
        }
      }
    })
  }
}, q = {
  styleOverrides: {
    root: {
      paddingTop: 0,
      paddingBottom: 0
    }
  }
}, J = {
  styleOverrides: {
    root: ({ ownerState: t }) => ({
      ...r(t, ["last"]) && {
        [`.${C.primary}`]: {
          marginBottom: 0
        }
      }
    })
  }
}, K = {
  styleOverrides: {
    paper: {
      borderRadius: 0
    },
    list: {
      padding: 0
    }
  }
}, Q = {
  styleOverrides: {
    root: ({ ownerState: t }) => ({
      ...r(t, ["header"]) && {
        pointerEvents: "none",
        fontWeight: "bold"
      }
    })
  }
}, U = {
  defaultProps: {
    color: "black"
  },
  styleOverrides: {
    root: {
      borderRadius: "0px"
    }
  }
}, V = {
  styleOverrides: {
    root: {
      textTransform: "none",
      fontSize: "16px",
      fontWeight: 600,
      minWidth: "150px",
      border: "2px solid white",
      [`&.${m.selected}`]: {
        color: W[300],
        backgroundColor: "white",
        cursor: "default"
      },
      [`:not(.${m.selected})`]: {
        color: "white",
        ":hover": {
          textDecoration: "underline"
        }
      }
    }
  }
}, Y = {
  styleOverrides: {
    root: ({ ownerState: t }) => ({
      borderStyle: "hidden",
      overflowX: "auto",
      [`.${f.root}`]: {
        border: "2px solid white"
      },
      ...r(t, ["text"]) && {
        borderStyle: "unset",
        display: "block",
        [`.${f.root}`]: {
          border: "1px solid #DDD"
        }
      },
      ...r(t, ["body"]) && {
        marginBottom: s.body1?.marginBottom
      }
    })
  }
}, Z = {
  styleOverrides: {
    root: ({ ownerState: t }) => ({
      backgroundColor: "#F1ECEC",
      ...r(t, ["text"]) && {
        backgroundColor: "white"
      }
    })
  }
}, _ = {
  styleOverrides: {
    root: ({ ownerState: t }) => ({
      backgroundColor: "#6E7171",
      ...r(t, ["light"]) && {
        backgroundColor: "#9A9C9E"
      },
      [`.${x.root}`]: {
        color: "white",
        fontWeight: 600,
        marginBottom: 0
      },
      [`.${f.head}`]: {
        color: "white",
        fontWeight: 600
      }
    })
  }
}, tt = {
  defaultProps: {
    variant: "scrollable",
    scrollButtons: !0,
    allowScrollButtonsMobile: !0
  },
  styleOverrides: {
    root: ({ ownerState: t }) => ({
      ...t !== void 0 && // NOTE: this is a bug with MUI
      [void 0, "horizontal"].includes(t.orientation) && {
        [`.${m.root}:not(:last-of-type)`]: {
          marginRight: "30px"
        }
      }
    }),
    indicator: {
      display: "none"
    }
  }
}, ot = {
  defaultProps: {
    size: "small",
    variant: "filled"
  },
  styleOverrides: {
    root: ({ ownerState: t }) => ({
      width: "100%",
      backgroundColor: "transparent",
      [`& > .${d.root}`]: {
        ...t.disabled ? {
          [`.${d.disabled}`]: {
            color: `${s.body1.color} !important`,
            "-webkit-text-fill-color": "unset"
          },
          border: "0px !important",
          borderRadius: "0px !important",
          // @ts-expect-error value is assignable
          backgroundColor: `${b.info.main} !important`
        } : {
          border: "1px solid black !important",
          borderRadius: "0px !important",
          backgroundColor: "white !important"
        }
      },
      [`& > .${d.root}.${d.error}`]: {
        // @ts-expect-error value is assignable
        border: `1px solid ${b.error.main} !important`
      },
      [`& .${S.root}.${a.focused} > fieldset`]: {
        borderColor: "black !important"
      },
      [`.${O.root}`]: {
        color: `${s.body1.color} !important`
      },
      [`.${M.root}::after`]: {
        borderColor: `${s.body1.color} !important`
      },
      [`.${$.root}`]: {
        color: `${s.body1.color} !important`
      },
      [`.${k.root}`]: {
        fontSize: "12px !important"
      },
      ...t.multiline === !0 && {
        ...(r(t, ["resize"]) || r(t, ["resize-both"])) && {
          width: "auto",
          [`.${a.inputMultiline}`]: {
            resize: "both"
          }
        },
        ...r(t, ["resize-horizontal"]) && {
          width: "auto",
          [`.${a.inputMultiline}`]: {
            resize: "horizontal"
          }
        },
        ...r(t, ["resize-vertical"]) && {
          [`.${a.inputMultiline}`]: {
            resize: "vertical"
          }
        }
      }
    })
  }
}, et = {
  styleOverrides: {
    root: {
      padding: "15px 0px !important"
    }
  }
}, rt = {
  styleOverrides: {
    root: ({ ownerState: t }) => ({
      ...E(t)
    })
  }
}, it = {
  MuiAccordion: F,
  MuiAutocomplete: I,
  MuiButton: j,
  MuiCardActions: A,
  MuiCheckbox: D,
  MuiContainer: R,
  MuiDialog: L,
  MuiFormControlLabel: P,
  MuiFormHelperText: G,
  MuiGrid: H,
  MuiInputBase: N,
  MuiLink: X,
  MuiList: q,
  MuiListItemText: J,
  MuiMenu: K,
  MuiMenuItem: Q,
  MuiSelect: U,
  MuiTab: V,
  MuiTable: Y,
  MuiTableBody: Z,
  MuiTableHead: _,
  MuiTabs: tt,
  MuiTextField: ot,
  MuiToolbar: et,
  MuiTypography: rt
};
export {
  dt as a,
  p as b,
  it as c,
  ct as g,
  r as i,
  T as m,
  c as s,
  s as t
};
//# sourceMappingURL=index-CDxf6gMv.js.map
