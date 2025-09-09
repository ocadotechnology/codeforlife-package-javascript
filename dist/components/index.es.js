import { i as Me } from "../index-Dqp7dpn3.js";
import { i as Ne } from "../index-DALohJdb.js";
import { L as Ae, a as Fe, b as De, c as Ge, N as He } from "../Navigate-Baeudg5V.js";
import { L as Je } from "../LinkButton-COnDB_KU.js";
import { i as Ve } from "../index-2W--_sNE.js";
import { j as o } from "../jsx-runtime-Dpn_P65e.js";
import { parsePath as U, Router as $, createPath as k, BrowserRouter as M, Routes as _ } from "react-router-dom";
import { ThemeProvider as N, CssBaseline as Y, Tooltip as A, IconButton as F, Button as E, useScrollTrigger as D, AppBar as G, Container as H, Toolbar as z, List as J, Unstable_Grid2 as b, Link as P, Stack as V, TablePagination as q, Box as X } from "@mui/material";
import * as K from "react";
import R, { useEffect as S, cloneElement as Q } from "react";
import { Provider as W } from "react-redux";
import { C as Xe } from "../Countdown-D4s4yfhB.js";
import { f as Z } from "../auth-C9qgLRQ4.js";
import { wrap as I } from "../utils/general.es.js";
import { ContentCopy as ee, Download as te } from "@mui/icons-material";
import { I as Qe } from "../Image-D5jC9UoX.js";
import { h as re } from "../api-Cbyt3rw0.js";
import { S as Ze } from "../api-Cbyt3rw0.js";
import { u as oe } from "../api-Cs4Y-WeI.js";
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
var v;
(function(e) {
  e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
})(v || (v = {}));
var T;
(function(e) {
  e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error";
})(T || (T = {}));
const O = ["post", "put", "patch", "delete"];
new Set(O);
const se = ["get", ...O];
new Set(se);
function ne({
  basename: e,
  children: r,
  location: t = "/",
  future: a
}) {
  typeof t == "string" && (t = U(t));
  let s = v.Pop, n = {
    pathname: t.pathname || "/",
    search: t.search || "",
    hash: t.hash || "",
    state: t.state != null ? t.state : null,
    key: t.key || "default"
  }, i = ae();
  return /* @__PURE__ */ K.createElement($, {
    basename: e,
    children: r,
    location: n,
    navigationType: s,
    navigator: i,
    future: a,
    static: !0
  });
}
function ae() {
  return {
    createHref: ie,
    encodeLocation: ce,
    push(e) {
      throw new Error(`You cannot use navigator.push() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(e)})\` somewhere in your app.`);
    },
    replace(e) {
      throw new Error(`You cannot use navigator.replace() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(e)}, { replace: true })\` somewhere in your app.`);
    },
    go(e) {
      throw new Error(`You cannot use navigator.go() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${e})\` somewhere in your app.`);
    },
    back() {
      throw new Error("You cannot use navigator.back() on the server because it is a stateless environment.");
    },
    forward() {
      throw new Error("You cannot use navigator.forward() on the server because it is a stateless environment.");
    }
  };
}
function ie(e) {
  return typeof e == "string" ? e : k(e);
}
function ce(e) {
  let r = typeof e == "string" ? e : k(e);
  r = r.replace(/ $/, "%20");
  let t = ue.test(r) ? new URL(r) : new URL(r, "http://localhost");
  return {
    pathname: t.pathname,
    search: t.search,
    hash: t.hash
  };
}
const ue = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, B = ({
  path: e,
  routes: r,
  header: t = /* @__PURE__ */ o.jsx(o.Fragment, {}),
  // TODO: "header = <Header />"
  footer: a = /* @__PURE__ */ o.jsx(o.Fragment, {}),
  // TODO: "footer = <Footer />"
  headerExcludePaths: s = [],
  footerExcludePaths: n = []
}) => /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
  !s.includes(e) && t,
  /* @__PURE__ */ o.jsx(_, { children: r }),
  !n.includes(e) && a
] }), le = (e) => {
  const { pathname: r } = Z();
  return /* @__PURE__ */ o.jsx(B, { path: r, ...e });
}, ye = ({
  path: e,
  theme: r,
  store: t,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  maxIdleSeconds: a = 3600,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  maxTotalSeconds: s = 3600,
  ...n
}) => /* @__PURE__ */ o.jsxs(N, { theme: r, children: [
  /* @__PURE__ */ o.jsx(Y, {}),
  /* @__PURE__ */ o.jsx(W, { store: t, children: typeof window > "u" ? /* @__PURE__ */ o.jsx(ne, { location: e, children: /* @__PURE__ */ o.jsx(B, { path: e, ...n }) }) : /* @__PURE__ */ o.jsx(M, { children: /* @__PURE__ */ o.jsx(le, { ...n }) }) })
] }), Le = ({
  open: e = !1,
  onClick: r,
  ...t
}) => {
  const [a, s] = R.useState(e);
  return R.useEffect(() => {
    s(e);
  }, [e]), /* @__PURE__ */ o.jsx(
    A,
    {
      open: a,
      onMouseOver: () => {
        a || s(!0);
      },
      onMouseLeave: () => {
        s(!1);
      },
      onClick: I(
        {
          after: () => {
            s(!a);
          }
        },
        r
      ),
      ...t
    }
  );
}, be = ({
  content: e,
  children: r = /* @__PURE__ */ o.jsx(ee, {}),
  ...t
}) => /* @__PURE__ */ o.jsx(
  F,
  {
    "data-testid": "copy-icon-button",
    onClick: () => {
      navigator.clipboard.writeText(e);
    },
    ...t,
    children: r
  }
), Re = ({
  children: e = "Download",
  endIcon: r = /* @__PURE__ */ o.jsx(te, {}),
  file: t,
  ...a
}) => {
  let s, n;
  if ("mimeType" in t) {
    const { text: i, mimeType: l, name: c, charset: d = "utf-8" } = t;
    let { extension: f } = t;
    f || (f = "." + { plain: "txt", csv: "csv" }[l]), n = {
      download: c + f,
      href: `data:text/${l};charset=${d},${encodeURIComponent(i)}`
    };
  } else
    s = URL.createObjectURL(t), n = { href: s };
  return S(() => () => {
    s && URL.revokeObjectURL(s);
  }, [s]), /* @__PURE__ */ o.jsx(E, { endIcon: r, ...a, ...n, children: e });
}, Te = ({
  containerProps: e,
  toolbarProps: r,
  elevation: t = 4,
  children: a,
  ...s
}) => {
  const n = D({
    disableHysteresis: !0,
    threshold: 0
  });
  return Q(
    /* @__PURE__ */ o.jsx(G, { elevation: t, ...s, children: /* @__PURE__ */ o.jsx(H, { ...e, children: /* @__PURE__ */ o.jsx(z, { ...r, children: a }) }) }),
    {
      position: n ? "fixed" : "sticky"
    }
  );
}, ke = ({
  children: e,
  inputProps: r,
  ...t
}) => /* @__PURE__ */ o.jsxs(E, { component: "label", ...t, children: [
  e,
  /* @__PURE__ */ o.jsx("input", { type: "file", hidden: !0, ...r })
] }), Ee = ({
  styleType: e,
  listProps: r = {},
  pl: t = 4,
  children: a
}) => {
  const { sx: s, ...n } = r, i = { display: "list-item" };
  return /* @__PURE__ */ o.jsx(
    J,
    {
      sx: {
        listStyleType: e,
        pl: t,
        ".MuiListItem-root": i,
        ".MuiListItemText-root": i,
        ...s
      },
      ...n,
      children: a
    }
  );
}, Se = ({
  rows: e,
  containerProps: r = {},
  globalItemProps: t
}) => {
  const a = Number(r.columns ?? 12), s = (l) => Math.floor(a / l), n = (l, c, d) => Math.floor(c / s(d)) * e.length + l, i = (l, c) => {
    const d = e[0].length % s(c);
    return d !== 0 && l === e[0].length - 1 ? (a - d * c) / 2 : 0;
  };
  return /* @__PURE__ */ o.jsx(b, { container: !0, ...r, children: e.map(
    (l, c) => l.map(({ element: d, itemProps: f = {} }, u) => /* @__PURE__ */ o.jsx(
      b,
      {
        order: {
          xs: n(c, u, t.xs),
          sm: n(c, u, t.sm),
          md: n(c, u, t.md),
          lg: n(c, u, t.lg),
          xl: n(c, u, t.xl)
        },
        xsOffset: i(u, t.xs),
        smOffset: i(u, t.sm),
        mdOffset: i(u, t.md),
        lgOffset: i(u, t.lg),
        xlOffset: i(u, t.xl),
        ...t,
        ...f,
        children: d
      },
      `${c}-${u}`
    ))
  ) });
}, Oe = ({
  elementId: e,
  options: r,
  ...t
}) => /* @__PURE__ */ o.jsx(
  P,
  {
    ...t,
    onClick: () => {
      document.getElementById(e)?.scrollIntoView(r);
    }
  }
), Be = ({
  children: e,
  useLazyListQuery: r,
  preferCacheValue: t,
  filters: a,
  page: s = 0,
  rowsPerPage: n = 50,
  rowsPerPageOptions: i = [50, 100, 150],
  stackProps: l,
  onRowsPerPageChange: c,
  onPageChange: d,
  ...f
}) => {
  const [u, w] = r(), [{ limit: h, page: j, offset: g }, y] = oe({
    page: s,
    limit: n
  });
  S(
    () => {
      u({ limit: h, offset: g, ...a }, t);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      u,
      h,
      g,
      // eslint-disable-next-line react-hooks/exhaustive-deps,@typescript-eslint/no-unsafe-assignment
      ...Object.values(a || {}),
      t
    ]
  );
  const { count: L, max_limit: x } = w.data || {};
  return x && (i = i.filter(
    (m) => m <= x
  )), /* @__PURE__ */ o.jsxs(V, { ...l, children: [
    re(
      w,
      ({ data: m }) => e(m, {
        limit: h,
        page: j,
        offset: g,
        count: L,
        maxLimit: x
      })
    ),
    /* @__PURE__ */ o.jsx(
      q,
      {
        component: "div",
        count: L ?? 0,
        rowsPerPage: h,
        onRowsPerPageChange: (m) => {
          y({ limit: parseInt(m.target.value), page: 0 }), c && c(m);
        },
        page: j,
        onPageChange: (m, p) => {
          y(({ limit: C }) => ({ limit: C, page: p })), d && d(m, p);
        },
        rowsPerPageOptions: i.sort((m, p) => m - p),
        ...f
      }
    )
  ] });
}, Ce = ({
  src: e,
  style: r = {},
  ...t
}) => /* @__PURE__ */ o.jsx(
  X,
  {
    component: "iframe",
    width: "100%",
    src: e,
    title: "YouTube video player",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen",
    style: { border: "0px", aspectRatio: "16 / 9", ...r },
    ...t
  }
);
export {
  ye as App,
  Le as ClickableTooltip,
  be as CopyIconButton,
  Xe as Countdown,
  Re as DownloadFileButton,
  Te as ElevatedAppBar,
  Qe as Image,
  ke as InputFileButton,
  Ee as ItemizedList,
  Ae as Link,
  Je as LinkButton,
  Fe as LinkIconButton,
  De as LinkListItem,
  Ge as LinkTab,
  He as Navigate,
  Se as OrderedGrid,
  Oe as ScrollIntoViewLink,
  Ze as SyncError,
  Be as TablePagination,
  Ce as YouTubeVideo,
  Me as forms,
  Ne as pages,
  Ve as tables
};
//# sourceMappingURL=index.es.js.map
