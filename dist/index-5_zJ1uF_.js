import { j as r } from "./jsx-runtime-Dpn_P65e.js";
import { Box as _, Container as O, Stack as m, Typography as p, IconButton as b, Tabs as w, Tab as B } from "@mui/material";
import { I as L } from "./Image-CirKvmgs.js";
import { useState as v, useEffect as f, Children as F } from "react";
import { useLocation as I, useParams as N, useNavigate as k, generatePath as E } from "react-router-dom";
import { ErrorOutline as P, InfoOutlined as R, CloseOutlined as Y, ChevronLeft as A, ChevronRight as V } from "@mui/icons-material";
import { p as C, a as q, t as z, s as M, b as g } from "./auth-DuTUGD6R.js";
import { L as u } from "./LinkButton-Nqtvo8fC.js";
import { object as W, string as D } from "yup";
import { t as G } from "./schemas-shENJqrs.js";
const x = ({ boxProps: e, ...o }) => /* @__PURE__ */ r.jsx(_, { ...e, children: /* @__PURE__ */ r.jsx(O, { ...o }) }), T = ({
  open: e = !0,
  error: o = !1,
  onClose: l,
  children: t,
  bgcolor: n = "secondary"
}) => {
  const [c, a] = v(e);
  if (f(() => {
    a(e);
  }, [e]), !c) return /* @__PURE__ */ r.jsx(r.Fragment, {});
  const i = C[n].contrastText;
  return /* @__PURE__ */ r.jsx(
    x,
    {
      boxProps: {
        bgcolor: {
          secondary: "#ffd23b",
          tertiary: "#08bafc"
        }[n]
      },
      sx: { paddingY: "5px" },
      children: /* @__PURE__ */ r.jsxs(m, { direction: "row", alignItems: "center", gap: 2, children: [
        o ? /* @__PURE__ */ r.jsx(P, { htmlColor: i }) : /* @__PURE__ */ r.jsx(R, { htmlColor: i }),
        /* @__PURE__ */ r.jsx(p, { variant: "body2", color: i, mb: 0, children: t }),
        /* @__PURE__ */ r.jsx(
          b,
          {
            style: { marginLeft: "auto" },
            onClick: () => {
              a(!1), l !== void 0 && l();
            },
            children: /* @__PURE__ */ r.jsx(Y, { htmlColor: i })
          }
        )
      ] })
    }
  );
}, H = ({
  children: e,
  session: o
}) => {
  const { state: l } = I();
  let { scroll: t, notifications: n } = l || {};
  return t = t || { x: 0, y: 0 }, n = n || [], f(() => {
    window.scroll(t.x, t.y);
  }, [t.x, t.y]), /* @__PURE__ */ r.jsx(r.Fragment, { children: q((c) => {
    if (typeof e == "function" && (e = e(c)), n.length) {
      const a = F.toArray(e);
      return n.forEach((i, h) => {
        a.splice(
          i.index ?? h,
          0,
          /* @__PURE__ */ r.jsx(T, { ...i.props })
        );
      }), a;
    }
    return e;
  }, o) });
}, J = ({
  header: e,
  subheader: o,
  textAlign: l = "start",
  imageProps: t,
  button1Props: n,
  button2Props: c,
  bgcolor: a = "primary"
}) => {
  const i = C[a].contrastText;
  return /* @__PURE__ */ r.jsx(
    x,
    {
      boxProps: {
        bgcolor: {
          primary: g[500],
          secondary: M[500],
          tertiary: z[500]
        }[a]
      },
      sx: { paddingY: 0 },
      children: /* @__PURE__ */ r.jsxs(
        m,
        {
          direction: "row",
          alignItems: "center",
          justifyContent: l,
          gap: 2,
          children: [
            /* @__PURE__ */ r.jsxs(
              m,
              {
                py: {
                  xs: "80px",
                  md: t !== void 0 ? 0 : "100px"
                },
                textAlign: l,
                children: [
                  /* @__PURE__ */ r.jsx(
                    p,
                    {
                      variant: "h2",
                      color: i,
                      mb: o !== void 0 ? void 0 : 0,
                      children: e
                    }
                  ),
                  o !== void 0 && /* @__PURE__ */ r.jsx(
                    p,
                    {
                      color: i,
                      variant: "h4",
                      mb: n !== void 0 ? void 0 : 0,
                      children: o
                    }
                  ),
                  /* @__PURE__ */ r.jsxs(m, { direction: "row", gap: 2, children: [
                    n !== void 0 && /* @__PURE__ */ r.jsx(u, { ...n }),
                    c !== void 0 && /* @__PURE__ */ r.jsx(u, { ...c })
                  ] })
                ]
              }
            ),
            t !== void 0 && /* @__PURE__ */ r.jsx(
              L,
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
}, K = ({ header: e, tabs: o, originalPath: l, value: t = 0 }) => {
  const n = N(), c = k(), [a, i] = v(
    t < 0 ? 0 : t >= o.length ? o.length - 1 : t
  ), h = o.map((s) => s.label), S = o.map((s) => s.children), d = o.map((s) => s.path);
  return f(() => {
    i(t);
  }, [t]), f(() => {
    const s = G(
      n,
      W({
        tab: D().oneOf(d).required()
      })
    )?.tab;
    s !== void 0 && i(d.indexOf(s));
  }, [n, d]), /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx(
      x,
      {
        boxProps: { bgcolor: g[500] },
        sx: { paddingY: "100px" },
        className: "flex-center",
        children: /* @__PURE__ */ r.jsx(
          p,
          {
            textAlign: "center",
            variant: "h2",
            style: { color: "white" },
            mb: 0,
            children: e
          }
        )
      }
    ),
    /* @__PURE__ */ r.jsx(
      x,
      {
        boxProps: { bgcolor: g[300] },
        sx: { paddingY: "6px" },
        className: "flex-center",
        children: /* @__PURE__ */ r.jsx(
          w,
          {
            value: a,
            onChange: (s, j) => {
              c(
                E(l, {
                  tab: d[j]
                })
              );
            },
            ScrollButtonComponent: ({
              disabled: s,
              onClick: j,
              direction: y
            }) => /* @__PURE__ */ r.jsx(r.Fragment, { children: s === !1 && /* @__PURE__ */ r.jsx(
              b,
              {
                onClick: j,
                style: {
                  padding: 0,
                  [y === "left" ? "marginRight" : "marginLeft"]: "15px",
                  color: "white"
                },
                children: y === "left" ? /* @__PURE__ */ r.jsx(r.Fragment, { children: /* @__PURE__ */ r.jsx(A, {}) }) : /* @__PURE__ */ r.jsx(r.Fragment, { children: /* @__PURE__ */ r.jsx(V, {}) })
              }
            ) }),
            children: h.map((s) => /* @__PURE__ */ r.jsx(B, { disableRipple: !0, label: s }, s))
          }
        )
      }
    ),
    S[a]
  ] });
}, sr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Banner: J,
  Notification: T,
  Page: H,
  Section: x,
  TabBar: K
}, Symbol.toStringTag, { value: "Module" }));
export {
  J as B,
  T as N,
  H as P,
  x as S,
  K as T,
  sr as i
};
//# sourceMappingURL=index-5_zJ1uF_.js.map
