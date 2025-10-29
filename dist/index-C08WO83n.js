import { jsx as r, Fragment as d, jsxs as p } from "react/jsx-runtime";
import { Box as B, Container as L, Stack as h, Typography as x, IconButton as T, Tabs as j, Tab as I } from "@mui/material";
import { I as N } from "./Image-mkNhOo5p.js";
import { useState as S, useEffect as g, Children as k } from "react";
import { useLocation as P, useParams as Y, useNavigate as E, generatePath as R } from "react-router";
import { ErrorOutline as A, InfoOutlined as V, CloseOutlined as q, ChevronLeft as z, ChevronRight as F } from "@mui/icons-material";
import { p as _, t as M, s as W, a as v } from "./palette-CYwuLBW7.js";
import { a as D } from "./auth-B6anBtxF.js";
import { L as C } from "./LinkButton-CRDs950E.js";
import { object as G, string as H } from "yup";
import { tryValidateSync as J } from "./utils/schema.es.js";
const m = ({ boxProps: o, ...e }) => /* @__PURE__ */ r(B, { ...o, children: /* @__PURE__ */ r(L, { ...e }) }), O = ({
  open: o = !0,
  error: e = !1,
  onClose: l,
  children: t,
  bgcolor: n = "secondary"
}) => {
  const [c, s] = S(o);
  if (g(() => {
    s(o);
  }, [o]), !c) return /* @__PURE__ */ r(d, {});
  const a = _[n].contrastText;
  return /* @__PURE__ */ r(
    m,
    {
      boxProps: {
        bgcolor: {
          secondary: "#ffd23b",
          tertiary: "#08bafc"
        }[n]
      },
      sx: { paddingY: "5px" },
      children: /* @__PURE__ */ p(h, { direction: "row", alignItems: "center", gap: 2, children: [
        e ? /* @__PURE__ */ r(A, { htmlColor: a }) : /* @__PURE__ */ r(V, { htmlColor: a }),
        /* @__PURE__ */ r(x, { variant: "body2", color: a, mb: 0, children: t }),
        /* @__PURE__ */ r(
          T,
          {
            style: { marginLeft: "auto" },
            onClick: () => {
              s(!1), l !== void 0 && l();
            },
            children: /* @__PURE__ */ r(q, { htmlColor: a })
          }
        )
      ] })
    }
  );
}, K = ({
  children: o,
  session: e
}) => {
  const { state: l } = P();
  let { scroll: t, notifications: n } = l || {};
  return t = t || { x: 0, y: 0 }, n = n || [], g(() => {
    window.scroll(t.x, t.y);
  }, [t.x, t.y]), /* @__PURE__ */ r(d, { children: D((c) => {
    if (typeof o == "function" && (o = o(c)), n.length) {
      const s = k.toArray(o);
      return n.forEach((a, y) => {
        s.splice(
          a.index ?? y,
          0,
          /* @__PURE__ */ r(O, { ...a.props })
        );
      }), s;
    }
    return o;
  }, e) });
}, Q = ({
  header: o,
  subheader: e,
  textAlign: l = "start",
  imageProps: t,
  button1Props: n,
  button2Props: c,
  bgcolor: s = "primary"
}) => {
  const a = _[s].contrastText;
  return /* @__PURE__ */ r(
    m,
    {
      boxProps: {
        bgcolor: {
          primary: v[500],
          secondary: W[500],
          tertiary: M[500]
        }[s]
      },
      sx: { paddingY: 0 },
      children: /* @__PURE__ */ p(
        h,
        {
          direction: "row",
          alignItems: "center",
          justifyContent: l,
          gap: 2,
          children: [
            /* @__PURE__ */ p(
              h,
              {
                py: {
                  xs: "80px",
                  md: t !== void 0 ? 0 : "100px"
                },
                textAlign: l,
                children: [
                  /* @__PURE__ */ r(
                    x,
                    {
                      variant: "h2",
                      color: a,
                      mb: e !== void 0 ? void 0 : 0,
                      children: o
                    }
                  ),
                  e !== void 0 && /* @__PURE__ */ r(
                    x,
                    {
                      color: a,
                      variant: "h4",
                      mb: n !== void 0 ? void 0 : 0,
                      children: e
                    }
                  ),
                  /* @__PURE__ */ p(h, { direction: "row", gap: 2, children: [
                    n !== void 0 && /* @__PURE__ */ r(C, { ...n }),
                    c !== void 0 && /* @__PURE__ */ r(C, { ...c })
                  ] })
                ]
              }
            ),
            t !== void 0 && /* @__PURE__ */ r(
              N,
              {
                ...t,
                display: { xs: "none", md: "block" },
                maxWidth: "320px",
                marginLeft: "auto"
              }
            )
          ]
        }
      )
    }
  );
}, U = ({ header: o, tabs: e, originalPath: l, value: t = 0 }) => {
  const n = Y(), c = E(), [s, a] = S(
    t < 0 ? 0 : t >= e.length ? e.length - 1 : t
  ), y = e.map((i) => i.label), w = e.map((i) => i.children), f = e.map((i) => i.path);
  return g(() => {
    a(t);
  }, [t]), g(() => {
    const i = J(
      n,
      G({
        tab: H().oneOf(f).required()
      })
    )?.tab;
    i !== void 0 && a(f.indexOf(i));
  }, [n, f]), /* @__PURE__ */ p(d, { children: [
    /* @__PURE__ */ r(
      m,
      {
        boxProps: { bgcolor: v[500] },
        sx: { paddingY: "100px" },
        className: "flex-center",
        children: /* @__PURE__ */ r(
          x,
          {
            textAlign: "center",
            variant: "h2",
            style: { color: "white" },
            mb: 0,
            children: o
          }
        )
      }
    ),
    /* @__PURE__ */ r(
      m,
      {
        boxProps: { bgcolor: v[300] },
        sx: { paddingY: "6px" },
        className: "flex-center",
        children: /* @__PURE__ */ r(
          j,
          {
            value: s,
            onChange: (i, u) => {
              c(
                R(l, {
                  tab: f[u]
                })
              );
            },
            ScrollButtonComponent: ({
              disabled: i,
              onClick: u,
              direction: b
            }) => /* @__PURE__ */ r(d, { children: i === !1 && /* @__PURE__ */ r(
              T,
              {
                onClick: u,
                style: {
                  padding: 0,
                  [b === "left" ? "marginRight" : "marginLeft"]: "15px",
                  color: "white"
                },
                children: b === "left" ? /* @__PURE__ */ r(d, { children: /* @__PURE__ */ r(z, {}) }) : /* @__PURE__ */ r(d, { children: /* @__PURE__ */ r(F, {}) })
              }
            ) }),
            children: y.map((i) => /* @__PURE__ */ r(I, { disableRipple: !0, label: i }, i))
          }
        )
      }
    ),
    w[s]
  ] });
}, cr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Banner: Q,
  Notification: O,
  Page: K,
  Section: m,
  TabBar: U
}, Symbol.toStringTag, { value: "Module" }));
export {
  Q as B,
  O as N,
  K as P,
  m as S,
  U as T,
  cr as i
};
//# sourceMappingURL=index-C08WO83n.js.map
