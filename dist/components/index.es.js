import { i as vt } from "../index-C_WJy1pH.js";
import { i as Rt } from "../index-BKUTH22C.js";
import { L as Bt, a as Ot, b as bt, c as wt, N as Ct } from "../Navigator-Bnq_YsJx.js";
import { L as Et } from "../LinkButton-lINO49qr.js";
import { i as Mt } from "../index-2W--_sNE.js";
import { j as o } from "../jsx-runtime-Dpn_P65e.js";
import { BrowserRouter as b, Routes as w } from "react-router-dom";
import { ThemeProvider as C, CssBaseline as S, Tooltip as E, IconButton as $, Button as k, useScrollTrigger as M, AppBar as U, Container as _, Toolbar as F, List as A, Unstable_Grid2 as T, Link as D, Stack as N, TablePagination as G, Box as P } from "@mui/material";
import R, { useEffect as B, cloneElement as V } from "react";
import { Provider as Y } from "react-redux";
import "@mui/material/styles/ThemeProvider";
import { C as _t } from "../Countdown-EX_dijnk.js";
import { w as H, k as q } from "../urls-DGMVuEdF.js";
import { m as At } from "../urls-DGMVuEdF.js";
import { f as z } from "../auth-DaqkoXld.js";
import { ContentCopy as J, Download as K } from "@mui/icons-material";
import { I as Nt } from "../Image-BLbscaMl.js";
import { u as Q } from "../api-Cs4Y-WeI.js";
const W = ({
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
  /* @__PURE__ */ o.jsx(w, { children: s }),
  !i.includes(e) && n
] }), X = (e) => {
  const { pathname: s } = z();
  return /* @__PURE__ */ o.jsx(W, { path: s, ...e });
}, ct = ({
  path: e,
  theme: s,
  store: t,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  maxIdleSeconds: n = 3600,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  maxTotalSeconds: r = 3600,
  ...i
}) => /* @__PURE__ */ o.jsxs(C, { theme: s, children: [
  /* @__PURE__ */ o.jsx(S, {}),
  /* @__PURE__ */ o.jsx(Y, { store: t, children: /* @__PURE__ */ o.jsx(b, { children: /* @__PURE__ */ o.jsx(X, { ...i }) }) })
] }), lt = ({
  open: e = !1,
  onClick: s,
  ...t
}) => {
  const [n, r] = R.useState(e);
  return R.useEffect(() => {
    r(e);
  }, [e]), /* @__PURE__ */ o.jsx(
    E,
    {
      open: n,
      onMouseOver: () => {
        n || r(!0);
      },
      onMouseLeave: () => {
        r(!1);
      },
      onClick: H(
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
  children: s = /* @__PURE__ */ o.jsx(J, {}),
  ...t
}) => /* @__PURE__ */ o.jsx(
  $,
  {
    "data-testid": "copy-icon-button",
    onClick: () => {
      navigator.clipboard.writeText(e);
    },
    ...t,
    children: s
  }
), mt = ({
  children: e = "Download",
  endIcon: s = /* @__PURE__ */ o.jsx(K, {}),
  file: t,
  ...n
}) => {
  let r, i;
  if ("mimeType" in t) {
    const { text: c, mimeType: u, name: a, charset: m = "utf-8" } = t;
    let { extension: f } = t;
    f || (f = "." + { plain: "txt", csv: "csv" }[u]), i = {
      download: a + f,
      href: `data:text/${u};charset=${m},${encodeURIComponent(c)}`
    };
  } else
    r = URL.createObjectURL(t), i = { href: r };
  return B(() => () => {
    r && URL.revokeObjectURL(r);
  }, [r]), /* @__PURE__ */ o.jsx(k, { endIcon: s, ...n, ...i, children: e });
}, pt = ({
  containerProps: e,
  toolbarProps: s,
  elevation: t = 4,
  children: n,
  ...r
}) => {
  const i = M({
    disableHysteresis: !0,
    threshold: 0
  });
  return V(
    /* @__PURE__ */ o.jsx(U, { elevation: t, ...r, children: /* @__PURE__ */ o.jsx(_, { ...e, children: /* @__PURE__ */ o.jsx(F, { ...s, children: n }) }) }),
    {
      position: i ? "fixed" : "sticky"
    }
  );
}, ft = ({
  children: e,
  inputProps: s,
  ...t
}) => /* @__PURE__ */ o.jsxs(k, { component: "label", ...t, children: [
  e,
  /* @__PURE__ */ o.jsx("input", { type: "file", hidden: !0, ...s })
] }), dt = ({
  styleType: e,
  listProps: s = {},
  pl: t = 4,
  children: n
}) => {
  const { sx: r, ...i } = s, c = { display: "list-item" };
  return /* @__PURE__ */ o.jsx(
    A,
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
}, xt = ({
  rows: e,
  containerProps: s = {},
  globalItemProps: t
}) => {
  const n = Number(s.columns ?? 12), r = (u) => Math.floor(n / u), i = (u, a, m) => Math.floor(a / r(m)) * e.length + u, c = (u, a) => {
    const m = e[0].length % r(a);
    return m !== 0 && u === e[0].length - 1 ? (n - m * a) / 2 : 0;
  };
  return /* @__PURE__ */ o.jsx(T, { container: !0, ...s, children: e.map(
    (u, a) => u.map(({ element: m, itemProps: f = {} }, l) => /* @__PURE__ */ o.jsx(
      T,
      {
        order: {
          xs: i(a, l, t.xs),
          sm: i(a, l, t.sm),
          md: i(a, l, t.md),
          lg: i(a, l, t.lg),
          xl: i(a, l, t.xl)
        },
        xsOffset: c(l, t.xs),
        smOffset: c(l, t.sm),
        mdOffset: c(l, t.md),
        lgOffset: c(l, t.lg),
        xlOffset: c(l, t.xl),
        ...t,
        ...f,
        children: m
      },
      `${a}-${l}`
    ))
  ) });
}, jt = ({
  elementId: e,
  options: s,
  ...t
}) => /* @__PURE__ */ o.jsx(
  D,
  {
    ...t,
    onClick: () => {
      document.getElementById(e)?.scrollIntoView(s);
    }
  }
), ht = ({
  children: e,
  useLazyListQuery: s,
  preferCacheValue: t,
  filters: n,
  page: r = 0,
  rowsPerPage: i = 50,
  rowsPerPageOptions: c = [50, 100, 150],
  stackProps: u,
  onRowsPerPageChange: a,
  onPageChange: m,
  ...f
}) => {
  const [l, g] = s(), [{ limit: d, page: L, offset: j }, y] = Q({
    page: r,
    limit: i
  });
  B(
    () => {
      l({ limit: d, offset: j, ...n }, t);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      l,
      d,
      j,
      // eslint-disable-next-line react-hooks/exhaustive-deps,@typescript-eslint/no-unsafe-assignment
      ...Object.values(n || {}),
      t
    ]
  );
  const { count: v, max_limit: h } = g.data || {};
  return h && (c = c.filter(
    (p) => p <= h
  )), /* @__PURE__ */ o.jsxs(N, { ...u, children: [
    q(
      g,
      ({ data: p }) => e(p, {
        limit: d,
        page: L,
        offset: j,
        count: v,
        maxLimit: h
      })
    ),
    /* @__PURE__ */ o.jsx(
      G,
      {
        component: "div",
        count: v ?? 0,
        rowsPerPage: d,
        onRowsPerPageChange: (p) => {
          y({ limit: parseInt(p.target.value), page: 0 }), a && a(p);
        },
        page: L,
        onPageChange: (p, x) => {
          y(({ limit: O }) => ({ limit: O, page: x })), m && m(p, x);
        },
        rowsPerPageOptions: c.sort((p, x) => p - x),
        ...f
      }
    )
  ] });
}, gt = ({
  src: e,
  style: s = {},
  ...t
}) => /* @__PURE__ */ o.jsx(
  P,
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
  ct as App,
  lt as ClickableTooltip,
  ut as CopyIconButton,
  _t as Countdown,
  mt as DownloadFileButton,
  pt as ElevatedAppBar,
  Nt as Image,
  ft as InputFileButton,
  dt as ItemizedList,
  Bt as Link,
  Et as LinkButton,
  Ot as LinkIconButton,
  bt as LinkListItem,
  wt as LinkTab,
  Ct as Navigator,
  xt as OrderedGrid,
  jt as ScrollIntoViewLink,
  At as SyncError,
  ht as TablePagination,
  gt as YouTubeVideo,
  vt as forms,
  Rt as pages,
  Mt as tables
};
//# sourceMappingURL=index.es.js.map
