import { buttonClasses as g, typographyClasses as x, listItemTextClasses as v, tabClasses as m, tableCellClasses as f, inputClasses as a, formHelperTextClasses as C, formLabelClasses as k, filledInputClasses as O, svgIconClasses as $, outlinedInputClasses as M, inputBaseClasses as d } from "@mui/material";
import "./jsx-runtime-XvoU0p7t.js";
import "@mui/material/OverridableComponent";
import "react";
import "@mui/material/styles/overrides";
import "@mui/material/styles/createTypography";
import { a as S, p as b } from "./palette-C_L0akN_.js";
const B = {
  styleOverrides: {
    root: {
      borderRadius: "0px !important",
      margin: "0px !important",
      width: "100%"
    }
  }
}, z = {
  styleOverrides: {
    root: {
      width: "100%"
    }
  }
};
function at(t, o, r = "root", i = tt) {
  if (i !== void 0) {
    const s = i[o];
    if (s !== void 0 && "styleOverrides" in s && typeof s.styleOverrides == "object" && r in s.styleOverrides) {
      const l = s.styleOverrides[r];
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
function e(t, o) {
  const r = Array.isArray(t) ? t : p(t);
  return o.every((i) => r.includes(i));
}
function w(t, o) {
  return (Array.isArray(t) ? t : p(t)).map((i) => i.match(o)).filter((i) => i !== null).map((i) => i);
}
const y = {
  fontFamily: '"Inter"',
  fontSize: "14px !important",
  fontWeight: 600,
  margin: 0,
  marginBottom: "12px",
  letterSpacing: 0
}, n = {
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
}, W = {
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
      ...e(t, ["body"]) && {
        marginBottom: n.body1?.marginBottom
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
      ...e(t, ["alert"]) && {
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
  let r = `${8 * t}px`;
  return o && (r += " !important"), r;
}
const I = {
  styleOverrides: {
    root: {
      padding: c(2)
    }
  }
}, F = {
  styleOverrides: {
    root: {
      paddingLeft: "0px",
      marginLeft: "-2px"
    }
  }
};
function h(t) {
  const o = {}, r = p(t);
  return r.some((i) => i.startsWith("flex-")) && (o.display = "flex", e(r, ["flex-center"]) ? (o.justifyContent = "center", o.alignItems = "center") : e(r, ["flex-center-x"]) ? (o.justifyContent = "center", o.alignItems = "start") : e(r, ["flex-center-y"]) ? (o.justifyContent = "start", o.alignItems = "center") : e(r, ["flex-end"]) ? (o.justifyContent = "end", o.alignItems = "end") : e(r, ["flex-end-x"]) ? (o.justifyContent = "end", o.alignItems = "start") : e(r, ["flex-end-y"]) && (o.justifyContent = "start", o.alignItems = "end")), o;
}
function T(t) {
  let o = {};
  const r = p(t);
  return e(r, ["nowrap-ellipsis"]) && (o.whiteSpace = "nowrap", o.overflow = "hidden", o.textOverflow = "ellipsis"), ["h1", "h2", "h3", "h4", "h5", "h6", "body1", "body2"].filter((i) => i in n).forEach((i) => {
    const s = n[i];
    e(r, [i]) && (o = { ...o, ...s }), w(r, new RegExp(`^${i}-(\\w+)$`)).forEach(
      (l) => {
        const u = l[1];
        u in s && (o[u] = s[u]);
      }
    );
  }), o;
}
const A = {
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
}, D = {
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
}, E = {
  styleOverrides: {
    root: {
      [`.${x.root}`]: {
        ...y,
        marginBottom: 0
      },
      margin: 0
    }
  }
}, R = {
  styleOverrides: {
    root: {
      ...y
    }
  }
}, j = {
  defaultProps: {
    disableEqualOverflow: !0
    // padding: 0 // TODO: normalize padding.
  },
  styleOverrides: {
    root: ({ ownerState: t }) => ({
      ...h(t)
    })
  }
}, L = {
  styleOverrides: {
    root: {
      backgroundColor: "white",
      marginBottom: 0,
      color: n.body1?.color
    }
  }
}, P = {
  defaultProps: {
    underline: "none",
    // BUG: if not set, MUI fails to run.
    color: "inherit"
  },
  styleOverrides: {
    root: ({ ownerState: t }) => ({
      cursor: "pointer",
      ...e(t, ["no-decor"]) ? {
        ":hover": {
          textDecoration: "underline"
        }
      } : {
        textDecoration: "underline",
        ":hover": {
          fontWeight: "bold"
        }
      },
      ...e(t, ["back-to"]) && {
        textDecoration: "none",
        display: "inline-block",
        marginBottom: n.body1?.marginBottom,
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
}, G = {
  styleOverrides: {
    root: {
      paddingTop: 0,
      paddingBottom: 0
    }
  }
}, H = {
  styleOverrides: {
    root: ({ ownerState: t }) => ({
      ...e(t, ["last"]) && {
        [`.${v.primary}`]: {
          marginBottom: 0
        }
      }
    })
  }
}, N = {
  styleOverrides: {
    paper: {
      borderRadius: 0
    },
    list: {
      padding: 0
    }
  }
}, q = {
  styleOverrides: {
    root: ({ ownerState: t }) => ({
      ...e(t, ["header"]) && {
        pointerEvents: "none",
        fontWeight: "bold"
      }
    })
  }
}, X = {
  defaultProps: {
    color: "black"
  },
  styleOverrides: {
    root: {
      borderRadius: "0px"
    }
  }
}, J = {
  styleOverrides: {
    root: {
      textTransform: "none",
      fontSize: "16px",
      fontWeight: 600,
      minWidth: "150px",
      border: "2px solid white",
      [`&.${m.selected}`]: {
        color: S[300],
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
}, K = {
  styleOverrides: {
    root: ({ ownerState: t }) => ({
      borderStyle: "hidden",
      overflowX: "auto",
      [`.${f.root}`]: {
        border: "2px solid white"
      },
      ...e(t, ["text"]) && {
        borderStyle: "unset",
        display: "block",
        [`.${f.root}`]: {
          border: "1px solid #DDD"
        }
      },
      ...e(t, ["body"]) && {
        marginBottom: n.body1?.marginBottom
      }
    })
  }
}, Q = {
  styleOverrides: {
    root: ({ ownerState: t }) => ({
      backgroundColor: "#F1ECEC",
      ...e(t, ["text"]) && {
        backgroundColor: "white"
      }
    })
  }
}, U = {
  styleOverrides: {
    root: ({ ownerState: t }) => ({
      backgroundColor: "#6E7171",
      ...e(t, ["light"]) && {
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
}, V = {
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
}, Y = {
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
            color: `${n.body1.color} !important`,
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
      [`& .${M.root}.${a.focused} > fieldset`]: {
        borderColor: "black !important"
      },
      [`.${$.root}`]: {
        color: `${n.body1.color} !important`
      },
      [`.${O.root}::after`]: {
        borderColor: `${n.body1.color} !important`
      },
      [`.${k.root}`]: {
        color: `${n.body1.color} !important`
      },
      [`.${C.root}`]: {
        fontSize: "12px !important"
      },
      ...t.multiline === !0 && {
        ...(e(t, ["resize"]) || e(t, ["resize-both"])) && {
          width: "auto",
          [`.${a.inputMultiline}`]: {
            resize: "both"
          }
        },
        ...e(t, ["resize-horizontal"]) && {
          width: "auto",
          [`.${a.inputMultiline}`]: {
            resize: "horizontal"
          }
        },
        ...e(t, ["resize-vertical"]) && {
          [`.${a.inputMultiline}`]: {
            resize: "vertical"
          }
        }
      }
    })
  }
}, Z = {
  styleOverrides: {
    root: {
      padding: "15px 0px !important"
    }
  }
}, _ = {
  styleOverrides: {
    root: ({ ownerState: t }) => ({
      ...T(t)
    })
  }
}, tt = {
  MuiAccordion: B,
  MuiAutocomplete: z,
  MuiButton: W,
  MuiCardActions: I,
  MuiCheckbox: F,
  MuiContainer: A,
  MuiDialog: D,
  MuiFormControlLabel: E,
  MuiFormHelperText: R,
  MuiGrid2: j,
  MuiInputBase: L,
  MuiLink: P,
  MuiList: G,
  MuiListItemText: H,
  MuiMenu: N,
  MuiMenuItem: q,
  MuiSelect: X,
  MuiTab: J,
  MuiTable: K,
  MuiTableBody: Q,
  MuiTableHead: U,
  MuiTabs: V,
  MuiTextField: Y,
  MuiToolbar: Z,
  MuiTypography: _
};
export {
  tt as c,
  at as g,
  e as i,
  c as s,
  n as t
};
//# sourceMappingURL=index-Btgkkxac.js.map
