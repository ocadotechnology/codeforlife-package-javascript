import { i as Rt } from "../index-DuVBQMst.js";
import { i as kt } from "../index-DlQc68Q4.js";
import { L as Ot, a as bt, b as wt, c as Ct, N as St } from "../Navigate-DC6ag0th.js";
import { L as $t } from "../LinkButton-Do07PnhU.js";
import { i as Ut } from "../index-B3cd2A-G.js";
import { j as o } from "../jsx-runtime-XvoU0p7t.js";
import { StaticRouter as w, BrowserRouter as C, Routes as S } from "react-router";
import { ThemeProvider as E, CssBaseline as $, Tooltip as M, IconButton as U, Button as k, useScrollTrigger as F, AppBar as _, Container as A, Toolbar as D, List as N, Unstable_Grid2 as R, Link as G, Stack as V, TablePagination as Y, Box as H } from "@mui/material";
import T, { useEffect as B, cloneElement as P } from "react";
import { Provider as q } from "react-redux";
import { C as _t } from "../Countdown-ZA68a09m.js";
import { f as z } from "../auth-CvJ5Mh6y.js";
import { wrap as J } from "../utils/general.es.js";
import { ContentCopy as K, Download as Q } from "@mui/icons-material";
import { I as Dt } from "../Image-KHEjEELP.js";
import { h as W } from "../api-CYqNqtN9.js";
import { S as Gt } from "../api-CYqNqtN9.js";
import { u as X } from "../api-Cs4Y-WeI.js";
const O = ({
  path: e,
  routes: s,
  header: t = /* @__PURE__ */ o.jsx(o.Fragment, {}),
  // TODO: "header = <Header />"
  footer: i = /* @__PURE__ */ o.jsx(o.Fragment, {}),
  // TODO: "footer = <Footer />"
  headerExcludePaths: r = [],
  footerExcludePaths: n = []
}) => /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
  !r.includes(e) && t,
  /* @__PURE__ */ o.jsx(S, { children: s }),
  !n.includes(e) && i
] }), Z = (e) => {
  const { pathname: s } = z();
  return /* @__PURE__ */ o.jsx(O, { path: s, ...e });
}, lt = ({
  path: e,
  theme: s,
  store: t,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  maxIdleSeconds: i = 3600,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  maxTotalSeconds: r = 3600,
  ...n
}) => /* @__PURE__ */ o.jsxs(E, { theme: s, children: [
  /* @__PURE__ */ o.jsx($, {}),
  /* @__PURE__ */ o.jsx(q, { store: t, children: typeof window > "u" ? /* @__PURE__ */ o.jsx(w, { location: e, children: /* @__PURE__ */ o.jsx(O, { path: e, ...n }) }) : /* @__PURE__ */ o.jsx(C, { children: /* @__PURE__ */ o.jsx(Z, { ...n }) }) })
] }), ut = ({
  open: e = !1,
  onClick: s,
  ...t
}) => {
  const [i, r] = T.useState(e);
  return T.useEffect(() => {
    r(e);
  }, [e]), /* @__PURE__ */ o.jsx(
    M,
    {
      open: i,
      onMouseOver: () => {
        i || r(!0);
      },
      onMouseLeave: () => {
        r(!1);
      },
      onClick: J(
        {
          after: () => {
            r(!i);
          }
        },
        s
      ),
      ...t
    }
  );
}, mt = ({
  content: e,
  children: s = /* @__PURE__ */ o.jsx(K, {}),
  ...t
}) => /* @__PURE__ */ o.jsx(
  U,
  {
    "data-testid": "copy-icon-button",
    onClick: () => {
      navigator.clipboard.writeText(e);
    },
    ...t,
    children: s
  }
), ft = ({
  children: e = "Download",
  endIcon: s = /* @__PURE__ */ o.jsx(Q, {}),
  file: t,
  ...i
}) => {
  let r, n;
  if ("mimeType" in t) {
    const { text: c, mimeType: u, name: a, charset: m = "utf-8" } = t;
    let { extension: p } = t;
    p || (p = "." + { plain: "txt", csv: "csv" }[u]), n = {
      download: a + p,
      href: `data:text/${u};charset=${m},${encodeURIComponent(c)}`
    };
  } else
    r = URL.createObjectURL(t), n = { href: r };
  return B(() => () => {
    r && URL.revokeObjectURL(r);
  }, [r]), /* @__PURE__ */ o.jsx(k, { endIcon: s, ...i, ...n, children: e });
}, pt = ({
  containerProps: e,
  toolbarProps: s,
  elevation: t = 4,
  children: i,
  ...r
}) => {
  const n = F({
    disableHysteresis: !0,
    threshold: 0
  });
  return P(
    /* @__PURE__ */ o.jsx(_, { elevation: t, ...r, children: /* @__PURE__ */ o.jsx(A, { ...e, children: /* @__PURE__ */ o.jsx(D, { ...s, children: i }) }) }),
    {
      position: n ? "fixed" : "sticky"
    }
  );
}, dt = ({
  children: e,
  inputProps: s,
  ...t
}) => /* @__PURE__ */ o.jsxs(k, { component: "label", ...t, children: [
  e,
  /* @__PURE__ */ o.jsx("input", { type: "file", hidden: !0, ...s })
] }), xt = ({
  styleType: e,
  listProps: s = {},
  pl: t = 4,
  children: i
}) => {
  const { sx: r, ...n } = s, c = { display: "list-item" };
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
      ...n,
      children: i
    }
  );
}, jt = ({
  rows: e,
  containerProps: s = {},
  globalItemProps: t
}) => {
  const i = Number(s.columns ?? 12), r = (u) => Math.floor(i / u), n = (u, a, m) => Math.floor(a / r(m)) * e.length + u, c = (u, a) => {
    const m = e[0].length % r(a);
    return m !== 0 && u === e[0].length - 1 ? (i - m * a) / 2 : 0;
  };
  return /* @__PURE__ */ o.jsx(R, { container: !0, ...s, children: e.map(
    (u, a) => u.map(({ element: m, itemProps: p = {} }, l) => /* @__PURE__ */ o.jsx(
      R,
      {
        order: {
          xs: n(a, l, t.xs),
          sm: n(a, l, t.sm),
          md: n(a, l, t.md),
          lg: n(a, l, t.lg),
          xl: n(a, l, t.xl)
        },
        xsOffset: c(l, t.xs),
        smOffset: c(l, t.sm),
        mdOffset: c(l, t.md),
        lgOffset: c(l, t.lg),
        xlOffset: c(l, t.xl),
        ...t,
        ...p,
        children: m
      },
      `${a}-${l}`
    ))
  ) });
}, ht = ({
  elementId: e,
  options: s,
  ...t
}) => /* @__PURE__ */ o.jsx(
  G,
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
  filters: i,
  page: r = 0,
  rowsPerPage: n = 50,
  rowsPerPageOptions: c = [50, 100, 150],
  stackProps: u,
  onRowsPerPageChange: a,
  onPageChange: m,
  ...p
}) => {
  const [l, g] = s(), [{ limit: d, page: L, offset: j }, y] = X({
    page: r,
    limit: n
  });
  B(
    () => {
      l({ limit: d, offset: j, ...i }, t);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      l,
      d,
      j,
      // eslint-disable-next-line react-hooks/exhaustive-deps,@typescript-eslint/no-unsafe-assignment
      ...Object.values(i || {}),
      t
    ]
  );
  const { count: v, max_limit: h } = g.data || {};
  return h && (c = c.filter(
    (f) => f <= h
  )), /* @__PURE__ */ o.jsxs(V, { ...u, children: [
    W(
      g,
      ({ data: f }) => e(f, {
        limit: d,
        page: L,
        offset: j,
        count: v,
        maxLimit: h
      })
    ),
    /* @__PURE__ */ o.jsx(
      Y,
      {
        component: "div",
        count: v ?? 0,
        rowsPerPage: d,
        onRowsPerPageChange: (f) => {
          y({ limit: parseInt(f.target.value), page: 0 }), a && a(f);
        },
        page: L,
        onPageChange: (f, x) => {
          y(({ limit: b }) => ({ limit: b, page: x })), m && m(f, x);
        },
        rowsPerPageOptions: c.sort((f, x) => f - x),
        ...p
      }
    )
  ] });
}, Lt = ({
  src: e,
  style: s = {},
  ...t
}) => /* @__PURE__ */ o.jsx(
  H,
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
  ut as ClickableTooltip,
  mt as CopyIconButton,
  _t as Countdown,
  ft as DownloadFileButton,
  pt as ElevatedAppBar,
  Dt as Image,
  dt as InputFileButton,
  xt as ItemizedList,
  Ot as Link,
  $t as LinkButton,
  bt as LinkIconButton,
  wt as LinkListItem,
  Ct as LinkTab,
  St as Navigate,
  jt as OrderedGrid,
  ht as ScrollIntoViewLink,
  Gt as SyncError,
  gt as TablePagination,
  Lt as YouTubeVideo,
  Rt as forms,
  kt as pages,
  Ut as tables
};
//# sourceMappingURL=index.es.js.map
