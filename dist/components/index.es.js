import { i as Rt } from "../index-CI5O_yH6.js";
import { i as kt } from "../index-DcmDxIXA.js";
import { L as bt, a as Ct, b as St, c as wt, N as Ot } from "../Navigate-SL_oMjPc.js";
import { L as $t } from "../LinkButton-Bk50AHHg.js";
import { i as Ft } from "../index-Dfo744Sb.js";
import { j as o } from "../jsx-runtime-C7wFtzyj.js";
import { StaticRouter as S, BrowserRouter as w, Routes as O } from "react-router";
import { ThemeProvider as E, CssBaseline as $, Tooltip as M, IconButton as F, Button as k, useScrollTrigger as U, AppBar as A, Container as D, Toolbar as N, List as _, Grid as R, Link as G, Stack as V, TablePagination as Y, Box as z } from "@mui/material";
import T, { useEffect as B, cloneElement as H } from "react";
import { Provider as P } from "react-redux";
import { C as At } from "../Countdown-BTyB1rrK.js";
import { f as q } from "../auth-CQ1InCxP.js";
import { wrap as J } from "../utils/general.es.js";
import { ContentCopy as K, Download as Q } from "@mui/icons-material";
import { I as Nt } from "../Image-C-f2ChBh.js";
import { h as W } from "../api-BvUiTeR7.js";
import { S as Gt } from "../api-BvUiTeR7.js";
import { u as X } from "../api-Cs4Y-WeI.js";
const b = ({
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
  /* @__PURE__ */ o.jsx(O, { children: s }),
  !n.includes(e) && i
] }), Z = (e) => {
  const { pathname: s } = q();
  return /* @__PURE__ */ o.jsx(b, { path: s, ...e });
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
  /* @__PURE__ */ o.jsx(P, {
    store: t,
    // https://github.com/remix-run/react-router/tree/main/examples/ssr
    children: e !== void 0 ? /* @__PURE__ */ o.jsx(S, { location: e, children: /* @__PURE__ */ o.jsx(b, { path: e, ...n }) }) : /* @__PURE__ */ o.jsx(w, { children: /* @__PURE__ */ o.jsx(Z, { ...n }) })
  })
] }), mt = ({
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
}, ut = ({
  content: e,
  children: s = /* @__PURE__ */ o.jsx(K, {}),
  ...t
}) => /* @__PURE__ */ o.jsx(
  F,
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
  ...i
}) => {
  let r, n;
  if ("mimeType" in t) {
    const { text: c, mimeType: m, name: a, charset: u = "utf-8" } = t;
    let { extension: d } = t;
    d || (d = "." + { plain: "txt", csv: "csv" }[m]), n = {
      download: a + d,
      href: `data:text/${m};charset=${u},${encodeURIComponent(c)}`
    };
  } else
    r = URL.createObjectURL(t), n = { href: r };
  return B(() => () => {
    r && URL.revokeObjectURL(r);
  }, [r]), /* @__PURE__ */ o.jsx(k, { endIcon: s, ...i, ...n, children: e });
}, dt = ({
  containerProps: e,
  toolbarProps: s,
  elevation: t = 4,
  children: i,
  ...r
}) => {
  const n = U({
    disableHysteresis: !0,
    threshold: 0
  });
  return H(
    /* @__PURE__ */ o.jsx(A, { elevation: t, ...r, children: /* @__PURE__ */ o.jsx(D, { ...e, children: /* @__PURE__ */ o.jsx(N, { ...s, children: i }) }) }),
    {
      position: n ? "fixed" : "sticky"
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
  children: i
}) => {
  const { sx: r, ...n } = s, c = { display: "list-item" };
  return /* @__PURE__ */ o.jsx(
    _,
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
  const i = Number(s.columns ?? 12), r = (m) => Math.floor(i / m), n = (m, a, u) => Math.floor(a / r(u)) * e.length + m, c = (m, a) => {
    const u = e[0].length % r(a);
    return u !== 0 && m === e[0].length - 1 ? (i - u * a) / 2 : 0;
  };
  return /* @__PURE__ */ o.jsx(R, { container: !0, ...s, children: e.map(
    (m, a) => m.map(({ element: u, itemProps: d = {} }, l) => /* @__PURE__ */ o.jsx(
      R,
      {
        size: {
          xs: n(a, l, t.xs),
          sm: n(a, l, t.sm),
          md: n(a, l, t.md),
          lg: n(a, l, t.lg),
          xl: n(a, l, t.xl)
        },
        offset: {
          xs: c(l, t.xs),
          sm: c(l, t.sm),
          md: c(l, t.md),
          lg: c(l, t.lg),
          xl: c(l, t.xl)
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
  stackProps: m,
  onRowsPerPageChange: a,
  onPageChange: u,
  ...d
}) => {
  const [l, g] = s(), [{ limit: x, page: L, offset: j }, v] = X({
    page: r,
    limit: n
  });
  B(
    () => {
      l({ limit: x, offset: j, ...i }, t);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      l,
      x,
      j,
      // eslint-disable-next-line react-hooks/exhaustive-deps,@typescript-eslint/no-unsafe-assignment
      ...Object.values(i || {}),
      t
    ]
  );
  const { count: y, max_limit: h } = g.data || {};
  return h && (c = c.filter(
    (p) => p <= h
  )), /* @__PURE__ */ o.jsxs(V, { ...m, children: [
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
      Y,
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
  z,
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
  At as Countdown,
  pt as DownloadFileButton,
  dt as ElevatedAppBar,
  Nt as Image,
  xt as InputFileButton,
  ft as ItemizedList,
  bt as Link,
  $t as LinkButton,
  Ct as LinkIconButton,
  St as LinkListItem,
  wt as LinkTab,
  Ot as Navigate,
  jt as OrderedGrid,
  ht as ScrollIntoViewLink,
  Gt as SyncError,
  gt as TablePagination,
  Lt as YouTubeVideo,
  Rt as forms,
  kt as pages,
  Ft as tables
};
//# sourceMappingURL=index.es.js.map
