import { i as Rt } from "../index-CI5O_yH6.js";
import { i as kt } from "../index-DcmDxIXA.js";
import { L as bt, a as Ct, b as St, c as wt, N as zt } from "../Navigate-SL_oMjPc.js";
import { L as Et } from "../LinkButton-Bk50AHHg.js";
import { i as Mt } from "../index-Dfo744Sb.js";
import { j as o } from "../jsx-runtime-C7wFtzyj.js";
import { StaticRouter as S, BrowserRouter as w, Routes as z } from "react-router";
import { ThemeProvider as O, CssBaseline as E, Tooltip as $, IconButton as M, Button as k, useScrollTrigger as F, AppBar as U, Container as A, Toolbar as D, List as N, Grid as R, Link as _, Stack as G, TablePagination as V, Box as Y } from "@mui/material";
import T, { useEffect as B, cloneElement as H } from "react";
import { Provider as P } from "react-redux";
import { C as Ut } from "../Countdown-BTyB1rrK.js";
import { f as q } from "../auth-CQ1InCxP.js";
import { wrap as J } from "../utils/general.es.js";
import { ContentCopy as K, Download as Q } from "@mui/icons-material";
import { I as Dt } from "../Image-C-f2ChBh.js";
import { h as W } from "../api-BvUiTeR7.js";
import { S as _t } from "../api-BvUiTeR7.js";
import { u as X } from "../api-Cs4Y-WeI.js";
const b = ({
  path: e,
  routes: s,
  header: t = /* @__PURE__ */ o.jsx(o.Fragment, {}),
  // TODO: "header = <Header />"
  footer: n = /* @__PURE__ */ o.jsx(o.Fragment, {}),
  // TODO: "footer = <Footer />"
  headerExcludePaths: r = [],
  footerExcludePaths: i = []
}) => /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
  !r.includes(e) && t,
  /* @__PURE__ */ o.jsx(z, { children: s }),
  !i.includes(e) && n
] }), Z = (e) => {
  const { pathname: s } = q();
  return /* @__PURE__ */ o.jsx(b, { path: s, ...e });
}, lt = ({
  path: e,
  theme: s,
  store: t,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  maxIdleSeconds: n = 3600,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  maxTotalSeconds: r = 3600,
  ...i
}) => /* @__PURE__ */ o.jsxs(O, { theme: s, children: [
  /* @__PURE__ */ o.jsx(E, {}),
  /* @__PURE__ */ o.jsx(P, {
    store: t,
    // https://github.com/remix-run/react-router/tree/main/examples/ssr
    children: e !== void 0 ? /* @__PURE__ */ o.jsx(S, { location: e, children: /* @__PURE__ */ o.jsx(b, { path: e, ...i }) }) : /* @__PURE__ */ o.jsx(w, { children: /* @__PURE__ */ o.jsx(Z, { ...i }) })
  })
] }), mt = ({
  open: e = !1,
  onClick: s,
  ...t
}) => {
  const [n, r] = T.useState(e);
  return T.useEffect(() => {
    r(e);
  }, [e]), /* @__PURE__ */ o.jsx(
    $,
    {
      open: n,
      onMouseOver: () => {
        n || r(!0);
      },
      onMouseLeave: () => {
        r(!1);
      },
      onClick: J(
        {
          after: () => {
            r(!n);
          }
        },
        s
      ),
      ...t
    }
  );
}, ut = ({
  content: e,
  children: s = /* @__PURE__ */ o.jsx(K, {}),
  ...t
}) => /* @__PURE__ */ o.jsx(
  M,
  {
    "data-testid": "copy-icon-button",
    onClick: () => {
      navigator.clipboard.writeText(e);
    },
    ...t,
    children: s
  }
), pt = ({
  children: e = "Download",
  endIcon: s = /* @__PURE__ */ o.jsx(Q, {}),
  file: t,
  ...n
}) => {
  let r, i;
  if ("mimeType" in t) {
    const { text: c, mimeType: m, name: a, charset: u = "utf-8" } = t;
    let { extension: d } = t;
    d || (d = "." + { plain: "txt", csv: "csv" }[m]), i = {
      download: a + d,
      href: `data:text/${m};charset=${u},${encodeURIComponent(c)}`
    };
  } else
    r = URL.createObjectURL(t), i = { href: r };
  return B(() => () => {
    r && URL.revokeObjectURL(r);
  }, [r]), /* @__PURE__ */ o.jsx(k, { endIcon: s, ...n, ...i, children: e });
}, dt = ({
  containerProps: e,
  toolbarProps: s,
  elevation: t = 4,
  children: n,
  ...r
}) => {
  const i = F({
    disableHysteresis: !0,
    threshold: 0
  });
  return H(
    /* @__PURE__ */ o.jsx(U, { elevation: t, ...r, children: /* @__PURE__ */ o.jsx(A, { ...e, children: /* @__PURE__ */ o.jsx(D, { ...s, children: n }) }) }),
    {
      position: i ? "fixed" : "sticky"
    }
  );
}, xt = ({
  children: e,
  inputProps: s,
  ...t
}) => /* @__PURE__ */ o.jsxs(k, { component: "label", ...t, children: [
  e,
  /* @__PURE__ */ o.jsx("input", { type: "file", hidden: !0, ...s })
] }), ft = ({
  styleType: e,
  listProps: s = {},
  pl: t = 4,
  children: n
}) => {
  const { sx: r, ...i } = s, c = { display: "list-item" };
  return /* @__PURE__ */ o.jsx(
    N,
    {
      sx: {
        listStyleType: e,
        pl: t,
        ".MuiListItem-root": c,
        ".MuiListItemText-root": c,
        ...r
      },
      ...i,
      children: n
    }
  );
}, jt = ({
  rows: e,
  containerProps: s = {},
  globalItemProps: t
}) => {
  const n = Number(s.columns ?? 12), r = (m) => Math.floor(n / m), i = (m, a, u) => Math.floor(a / r(u)) * e.length + m, c = (m, a) => {
    const u = e[0].length % r(a);
    return u !== 0 && m === e[0].length - 1 ? (n - u * a) / 2 : 0;
  };
  return /* @__PURE__ */ o.jsx(R, { container: !0, ...s, children: e.map(
    (m, a) => m.map(({ element: u, itemProps: d = {} }, l) => /* @__PURE__ */ o.jsx(
      R,
      {
        order: {
          xs: i(a, l, t.size.xs),
          sm: i(a, l, t.size.sm),
          md: i(a, l, t.size.md),
          lg: i(a, l, t.size.lg),
          xl: i(a, l, t.size.xl)
        },
        offset: {
          xs: c(l, t.size.xs),
          sm: c(l, t.size.sm),
          md: c(l, t.size.md),
          lg: c(l, t.size.lg),
          xl: c(l, t.size.xl)
        },
        ...t,
        ...d,
        children: u
      },
      `${a}-${l}`
    ))
  ) });
}, ht = ({
  elementId: e,
  options: s,
  ...t
}) => /* @__PURE__ */ o.jsx(
  _,
  {
    ...t,
    onClick: () => {
      document.getElementById(e)?.scrollIntoView(s);
    }
  }
), gt = ({
  children: e,
  useLazyListQuery: s,
  preferCacheValue: t,
  filters: n,
  page: r = 0,
  rowsPerPage: i = 50,
  rowsPerPageOptions: c = [50, 100, 150],
  stackProps: m,
  onRowsPerPageChange: a,
  onPageChange: u,
  ...d
}) => {
  const [l, g] = s(), [{ limit: x, page: L, offset: j }, v] = X({
    page: r,
    limit: i
  });
  B(
    () => {
      l({ limit: x, offset: j, ...n }, t);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      l,
      x,
      j,
      // eslint-disable-next-line react-hooks/exhaustive-deps,@typescript-eslint/no-unsafe-assignment
      ...Object.values(n || {}),
      t
    ]
  );
  const { count: y, max_limit: h } = g.data || {};
  return h && (c = c.filter(
    (p) => p <= h
  )), /* @__PURE__ */ o.jsxs(G, { ...m, children: [
    W(
      g,
      ({ data: p }) => e(p, {
        limit: x,
        page: L,
        offset: j,
        count: y,
        maxLimit: h
      })
    ),
    /* @__PURE__ */ o.jsx(
      V,
      {
        component: "div",
        count: y ?? 0,
        rowsPerPage: x,
        onRowsPerPageChange: (p) => {
          v({ limit: parseInt(p.target.value), page: 0 }), a && a(p);
        },
        page: L,
        onPageChange: (p, f) => {
          v(({ limit: C }) => ({ limit: C, page: f })), u && u(p, f);
        },
        rowsPerPageOptions: c.sort((p, f) => p - f),
        ...d
      }
    )
  ] });
}, Lt = ({
  src: e,
  style: s = {},
  ...t
}) => /* @__PURE__ */ o.jsx(
  Y,
  {
    component: "iframe",
    width: "100%",
    src: e,
    title: "YouTube video player",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen",
    style: { border: "0px", aspectRatio: "16 / 9", ...s },
    ...t
  }
);
export {
  lt as App,
  mt as ClickableTooltip,
  ut as CopyIconButton,
  Ut as Countdown,
  pt as DownloadFileButton,
  dt as ElevatedAppBar,
  Dt as Image,
  xt as InputFileButton,
  ft as ItemizedList,
  bt as Link,
  Et as LinkButton,
  Ct as LinkIconButton,
  St as LinkListItem,
  wt as LinkTab,
  zt as Navigate,
  jt as OrderedGrid,
  ht as ScrollIntoViewLink,
  _t as SyncError,
  gt as TablePagination,
  Lt as YouTubeVideo,
  Rt as forms,
  kt as pages,
  Mt as tables
};
//# sourceMappingURL=index.es.js.map
