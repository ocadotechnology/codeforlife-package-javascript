import { Divider as C, buttonClasses as b, typographyClasses as y, listItemTextClasses as k, tabClasses as f, tableCellClasses as g, inputClasses as a, formHelperTextClasses as $, formLabelClasses as M, filledInputClasses as O, svgIconClasses as S, outlinedInputClasses as B, inputBaseClasses as d } from "@mui/material";
import { j as m } from "./jsx-runtime-C7wFtzyj.js";
import "react";
import { a as z, p as x } from "./palette-CYwuLBW7.js";
const w = {
  styleOverrides: {
    root: {
      borderRadius: "0px !important",
      margin: "0px !important",
      width: "100%"
    }
  }
}, W = {
  styleOverrides: {
    root: {
      width: "100%"
    }
  }
};
function lt({
  elements: t,
  dividerProps: o
}) {
  return t.map((e, i) => /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
    e,
    i !== t.length - 1 ? /* @__PURE__ */ m.jsx(C, { ...o }) : void 0
  ] }));
}
function at(t, o, e = "root", i = et) {
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
function F(t, o) {
  return (Array.isArray(t) ? t : p(t)).map((i) => i.match(o)).filter((i) => i !== null).map((i) => i);
}
const h = {
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
}, I = {
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
      [`&.${b.disabled}`]: {
        backgroundColor: "#ffe382",
        color: "#7A5F01"
      },
      ...r(t, ["alert"]) && {
        color: "white",
        backgroundColor: "#ff0000",
        "&:hover": {
          backgroundColor: "#df0531"
        },
        [`&.${b.disabled}`]: {
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
const T = {
  styleOverrides: {
    root: {
      padding: c(2)
    }
  }
}, j = {
  styleOverrides: {
    root: {
      paddingLeft: "0px",
      marginLeft: "-2px"
    }
  }
};
function v(t) {
  const o = {}, e = p(t);
  return e.some((i) => i.startsWith("flex-")) && (o.display = "flex", r(e, ["flex-center"]) ? (o.justifyContent = "center", o.alignItems = "center") : r(e, ["flex-center-x"]) ? (o.justifyContent = "center", o.alignItems = "start") : r(e, ["flex-center-y"]) ? (o.justifyContent = "start", o.alignItems = "center") : r(e, ["flex-end"]) ? (o.justifyContent = "end", o.alignItems = "end") : r(e, ["flex-end-x"]) ? (o.justifyContent = "end", o.alignItems = "start") : r(e, ["flex-end-y"]) && (o.justifyContent = "start", o.alignItems = "end")), o;
}
function A(t) {
  let o = {};
  const e = p(t);
  return r(e, ["nowrap-ellipsis"]) && (o.whiteSpace = "nowrap", o.overflow = "hidden", o.textOverflow = "ellipsis"), ["h1", "h2", "h3", "h4", "h5", "h6", "body1", "body2"].filter((i) => i in s).forEach((i) => {
    const n = s[i];
    r(e, [i]) && (o = { ...o, ...n }), F(e, new RegExp(`^${i}-(\\w+)$`)).forEach(
      (l) => {
        const u = l[1];
        u in n && (o[u] = n[u]);
      }
    );
  }), o;
}
const D = {
  defaultProps: {
    maxWidth: "lg"
  },
  styleOverrides: {
    root: ({ ownerState: t }) => ({
      ...v(t),
      paddingLeft: c(2, !0),
      paddingRight: c(2, !0),
      padding: c(7)
    })
  }
}, E = {
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
}, R = {
  styleOverrides: {
    root: {
      [`.${y.root}`]: {
        ...h,
        marginBottom: 0
      },
      margin: 0
    }
  }
}, L = {
  styleOverrides: {
    root: {
      ...h
    }
  }
}, P = {
  defaultProps: {
    // padding: 0 // TODO: normalize padding.
  },
  styleOverrides: {
    root: ({ ownerState: t }) => ({
      ...v(t)
    })
  }
}, G = {
  styleOverrides: {
    root: {
      backgroundColor: "white",
      marginBottom: 0,
      color: s.body1?.color
    }
  }
}, H = {
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
}, N = {
  styleOverrides: {
    root: {
      paddingTop: 0,
      paddingBottom: 0
    }
  }
}, X = {
  styleOverrides: {
    root: ({ ownerState: t }) => ({
      ...r(t, ["last"]) && {
        [`.${k.primary}`]: {
          marginBottom: 0
        }
      }
    })
  }
}, q = {
  styleOverrides: {
    paper: {
      borderRadius: 0
    },
    list: {
      padding: 0
    }
  }
}, J = {
  styleOverrides: {
    root: ({ ownerState: t }) => ({
      ...r(t, ["header"]) && {
        pointerEvents: "none",
        fontWeight: "bold"
      }
    })
  }
}, K = {
  defaultProps: {
    color: "black"
  },
  styleOverrides: {
    root: {
      borderRadius: "0px"
    }
  }
}, Q = {
  styleOverrides: {
    root: {
      textTransform: "none",
      fontSize: "16px",
      fontWeight: 600,
      minWidth: "150px",
      border: "2px solid white",
      [`&.${f.selected}`]: {
        color: z[300],
        backgroundColor: "white",
        cursor: "default"
      },
      [`:not(.${f.selected})`]: {
        color: "white",
        ":hover": {
          textDecoration: "underline"
        }
      }
    }
  }
}, U = {
  styleOverrides: {
    root: ({ ownerState: t }) => ({
      borderStyle: "hidden",
      overflowX: "auto",
      [`.${g.root}`]: {
        border: "2px solid white"
      },
      ...r(t, ["text"]) && {
        borderStyle: "unset",
        display: "block",
        [`.${g.root}`]: {
          border: "1px solid #DDD"
        }
      },
      ...r(t, ["body"]) && {
        marginBottom: s.body1?.marginBottom
      }
    })
  }
}, V = {
  styleOverrides: {
    root: ({ ownerState: t }) => ({
      backgroundColor: "#F1ECEC",
      ...r(t, ["text"]) && {
        backgroundColor: "white"
      }
    })
  }
}, Y = {
  styleOverrides: {
    root: ({ ownerState: t }) => ({
      backgroundColor: "#6E7171",
      ...r(t, ["light"]) && {
        backgroundColor: "#9A9C9E"
      },
      [`.${y.root}`]: {
        color: "white",
        fontWeight: 600,
        marginBottom: 0
      },
      [`.${g.head}`]: {
        color: "white",
        fontWeight: 600
      }
    })
  }
}, Z = {
  defaultProps: {
    variant: "scrollable",
    scrollButtons: !0,
    allowScrollButtonsMobile: !0
  },
  styleOverrides: {
    root: ({ ownerState: t }) => ({
      ...t !== void 0 && // NOTE: this is a bug with MUI
      [void 0, "horizontal"].includes(t.orientation) && {
        [`.${f.root}:not(:last-of-type)`]: {
          marginRight: "30px"
        }
      }
    }),
    indicator: {
      display: "none"
    }
  }
}, _ = {
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
          backgroundColor: `${x.info.main} !important`
        } : {
          border: "1px solid black !important",
          borderRadius: "0px !important",
          backgroundColor: "white !important"
        }
      },
      [`& > .${d.root}.${d.error}`]: {
        // @ts-expect-error value is assignable
        border: `1px solid ${x.error.main} !important`
      },
      [`& .${B.root}.${a.focused} > fieldset`]: {
        borderColor: "black !important"
      },
      [`.${S.root}`]: {
        color: `${s.body1.color} !important`
      },
      [`.${O.root}::after`]: {
        borderColor: `${s.body1.color} !important`
      },
      [`.${M.root}`]: {
        color: `${s.body1.color} !important`
      },
      [`.${$.root}`]: {
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
}, tt = {
  styleOverrides: {
    root: {
      padding: "15px 0px !important"
    }
  }
}, ot = {
  styleOverrides: {
    root: ({ ownerState: t }) => ({
      ...A(t)
    })
  }
}, et = {
  MuiAccordion: w,
  MuiAutocomplete: W,
  MuiButton: I,
  MuiCardActions: T,
  MuiCheckbox: j,
  MuiContainer: D,
  MuiDialog: E,
  MuiFormControlLabel: R,
  MuiFormHelperText: L,
  MuiGrid: P,
  MuiInputBase: G,
  MuiLink: H,
  MuiList: N,
  MuiListItemText: X,
  MuiMenu: q,
  MuiMenuItem: J,
  MuiSelect: K,
  MuiTab: Q,
  MuiTable: U,
  MuiTableBody: V,
  MuiTableHead: Y,
  MuiTabs: Z,
  MuiTextField: _,
  MuiToolbar: tt,
  MuiTypography: ot
};
export {
  lt as a,
  p as b,
  et as c,
  at as g,
  r as i,
  F as m,
  c as s,
  s as t
};
//# sourceMappingURL=index-D8Gc0IWi.js.map
