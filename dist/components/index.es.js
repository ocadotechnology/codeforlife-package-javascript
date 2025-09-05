import { i as Tt } from "../index-DnttPlLh.js";
import { i as kt } from "../index-BPDf2uGO.js";
import { L as Ot, a as bt, b as wt, c as Ct, N as St } from "../Navigator-BObqhHKF.js";
import { L as $t } from "../LinkButton-CnOIOkbC.js";
import { i as Ut } from "../index-2W--_sNE.js";
import { j as o } from "../jsx-runtime-Dpn_P65e.js";
import { BrowserRouter as b, Routes as w } from "react-router-dom";
import { ThemeProvider as C, CssBaseline as S, Tooltip as E, IconButton as $, Button as k, useScrollTrigger as M, AppBar as U, Container as _, Toolbar as F, List as A, Unstable_Grid2 as T, Link as D, Stack as N, TablePagination as G, Box as P } from "@mui/material";
import R, { useEffect as B, cloneElement as V } from "react";
import { Provider as Y } from "react-redux";
import "@mui/material/styles/ThemeProvider";
import { C as Ft } from "../Countdown-CbSedxtD.js";
import { w as H } from "../general-DsmN0W6Q.js";
import { f as q } from "../auth-33vbZ4Rm.js";
import { ContentCopy as z, Download as J } from "@mui/icons-material";
import { I as Dt } from "../Image-CIPKfytx.js";
import { h as K } from "../urls-Bl1eUttT.js";
import { S as Gt } from "../urls-Bl1eUttT.js";
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
  const { pathname: s } = q();
  return /* @__PURE__ */ o.jsx(W, { path: s, ...e });
}, lt = ({
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
] }), mt = ({
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
  children: s = /* @__PURE__ */ o.jsx(z, {}),
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
), pt = ({
  children: e = "Download",
  endIcon: s = /* @__PURE__ */ o.jsx(J, {}),
  file: t,
  ...n
}) => {
  let r, i;
  if ("mimeType" in t) {
    const { text: c, mimeType: m, name: a, charset: u = "utf-8" } = t;
    let { extension: f } = t;
    f || (f = "." + { plain: "txt", csv: "csv" }[m]), i = {
      download: a + f,
      href: `data:text/${m};charset=${u},${encodeURIComponent(c)}`
    };
  } else
    r = URL.createObjectURL(t), i = { href: r };
  return B(() => () => {
    r && URL.revokeObjectURL(r);
  }, [r]), /* @__PURE__ */ o.jsx(k, { endIcon: s, ...n, ...i, children: e });
}, ft = ({
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
}, jt = ({
  rows: e,
  containerProps: s = {},
  globalItemProps: t
}) => {
  const n = Number(s.columns ?? 12), r = (m) => Math.floor(n / m), i = (m, a, u) => Math.floor(a / r(u)) * e.length + m, c = (m, a) => {
    const u = e[0].length % r(a);
    return u !== 0 && m === e[0].length - 1 ? (n - u * a) / 2 : 0;
  };
  return /* @__PURE__ */ o.jsx(T, { container: !0, ...s, children: e.map(
    (m, a) => m.map(({ element: u, itemProps: f = {} }, l) => /* @__PURE__ */ o.jsx(
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
  D,
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
  )), /* @__PURE__ */ o.jsxs(N, { ...m, children: [
    K(
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
          y(({ limit: O }) => ({ limit: O, page: x })), u && u(p, x);
        },
        rowsPerPageOptions: c.sort((p, x) => p - x),
        ...f
      }
    )
  ] });
}, Lt = ({
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
  lt as App,
  mt as ClickableTooltip,
  ut as CopyIconButton,
  Ft as Countdown,
  pt as DownloadFileButton,
  ft as ElevatedAppBar,
  Dt as Image,
  dt as InputFileButton,
  xt as ItemizedList,
  Ot as Link,
  $t as LinkButton,
  bt as LinkIconButton,
  wt as LinkListItem,
  Ct as LinkTab,
  St as Navigator,
  jt as OrderedGrid,
  ht as ScrollIntoViewLink,
  Gt as SyncError,
  gt as TablePagination,
  Lt as YouTubeVideo,
  Tt as forms,
  kt as pages,
  Ut as tables
};
//# sourceMappingURL=index.es.js.map
