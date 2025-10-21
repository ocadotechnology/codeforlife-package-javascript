import { i as lt } from "../index-BRHFlEjS.js";
import { i as mt } from "../index-hdS8RgRc.js";
import { L as ft, a as dt, b as xt, c as gt, N as ht } from "../Navigate-ClPcw87e.js";
import { L as Lt } from "../LinkButton-sQ5jgHnX.js";
import { i as vt } from "../index-B3e_XaVG.js";
import { j as i } from "../jsx-runtime-lzYHhGH3.js";
import { Tooltip as C, IconButton as R, Button as b, useScrollTrigger as w, AppBar as O, Container as S, Toolbar as $, List as E, Grid as T, Link as M, Stack as U, TablePagination as D, Box as N } from "@mui/material";
import k, { useEffect as B, cloneElement as _ } from "react";
import { wrap as A } from "../utils/general.es.js";
import { ContentCopy as F, Download as G } from "@mui/icons-material";
import { C as kt } from "../Countdown-DhjAmB0u.js";
import { I as Bt } from "../Image-DTOu0h-V.js";
import { h as V } from "../api-BFYu8ZvQ.js";
import { S as Ct } from "../api-BFYu8ZvQ.js";
import { u as Y } from "../api-Cs4Y-WeI.js";
const X = ({
  open: e = !1,
  onClick: o,
  ...t
}) => {
  const [r, s] = k.useState(e);
  return k.useEffect(() => {
    s(e);
  }, [e]), /* @__PURE__ */ i.jsx(
    C,
    {
      open: r,
      onMouseOver: () => {
        r || s(!0);
      },
      onMouseLeave: () => {
        s(!1);
      },
      onClick: A(
        {
          after: () => {
            s(!r);
          }
        },
        o
      ),
      ...t
    }
  );
}, Z = ({
  content: e,
  children: o = /* @__PURE__ */ i.jsx(F, {}),
  ...t
}) => /* @__PURE__ */ i.jsx(
  R,
  {
    "data-testid": "copy-icon-button",
    onClick: () => {
      navigator.clipboard.writeText(e);
    },
    ...t,
    children: o
  }
), I = ({
  children: e = "Download",
  endIcon: o = /* @__PURE__ */ i.jsx(G, {}),
  file: t,
  ...r
}) => {
  let s, a;
  if ("mimeType" in t) {
    const { text: c, mimeType: u, name: n, charset: m = "utf-8" } = t;
    let { extension: f } = t;
    f || (f = "." + { plain: "txt", csv: "csv" }[u]), a = {
      download: n + f,
      href: `data:text/${u};charset=${m},${encodeURIComponent(c)}`
    };
  } else
    s = URL.createObjectURL(t), a = { href: s };
  return B(() => () => {
    s && URL.revokeObjectURL(s);
  }, [s]), /* @__PURE__ */ i.jsx(b, { endIcon: o, ...r, ...a, children: e });
}, tt = ({
  containerProps: e,
  toolbarProps: o,
  elevation: t = 4,
  children: r,
  ...s
}) => {
  const a = w({
    disableHysteresis: !0,
    threshold: 0
  });
  return _(
    /* @__PURE__ */ i.jsx(O, { elevation: t, ...s, children: /* @__PURE__ */ i.jsx(S, { ...e, children: /* @__PURE__ */ i.jsx($, { ...o, children: r }) }) }),
    {
      position: a ? "fixed" : "sticky"
    }
  );
}, et = ({
  children: e,
  inputProps: o,
  ...t
}) => /* @__PURE__ */ i.jsxs(b, { component: "label", ...t, children: [
  e,
  /* @__PURE__ */ i.jsx("input", { type: "file", hidden: !0, ...o })
] }), ot = ({
  styleType: e,
  listProps: o = {},
  pl: t = 4,
  children: r
}) => {
  const { sx: s, ...a } = o, c = { display: "list-item" };
  return /* @__PURE__ */ i.jsx(
    E,
    {
      sx: {
        listStyleType: e,
        pl: t,
        ".MuiListItem-root": c,
        ".MuiListItemText-root": c,
        ...s
      },
      ...a,
      children: r
    }
  );
}, st = ({
  rows: e,
  containerProps: o = {},
  globalItemProps: t
}) => {
  const r = Number(o.columns ?? 12), s = (u) => Math.floor(r / u), a = (u, n, m) => Math.floor(n / s(m)) * e.length + u, c = (u, n) => {
    const m = e[0].length % s(n);
    return m !== 0 && u === e[0].length - 1 ? (r - m * n) / 2 : 0;
  };
  return /* @__PURE__ */ i.jsx(T, { container: !0, ...o, children: e.map(
    (u, n) => u.map(({ element: m, itemProps: f = {} }, l) => /* @__PURE__ */ i.jsx(
      T,
      {
        order: {
          xs: a(n, l, t.size.xs),
          sm: a(n, l, t.size.sm),
          md: a(n, l, t.size.md),
          lg: a(n, l, t.size.lg),
          xl: a(n, l, t.size.xl)
        },
        offset: {
          xs: c(l, t.size.xs),
          sm: c(l, t.size.sm),
          md: c(l, t.size.md),
          lg: c(l, t.size.lg),
          xl: c(l, t.size.xl)
        },
        ...t,
        ...f,
        children: m
      },
      `${n}-${l}`
    ))
  ) });
}, it = ({
  elementId: e,
  options: o,
  ...t
}) => /* @__PURE__ */ i.jsx(
  M,
  {
    ...t,
    onClick: () => {
      document.getElementById(e)?.scrollIntoView(o);
    }
  }
), rt = ({
  children: e,
  useLazyListQuery: o,
  preferCacheValue: t,
  filters: r,
  page: s = 0,
  rowsPerPage: a = 50,
  rowsPerPageOptions: c = [50, 100, 150],
  stackProps: u,
  onRowsPerPageChange: n,
  onPageChange: m,
  ...f
}) => {
  const [l, j] = o(), [{ limit: d, page: L, offset: g }, y] = Y({
    page: s,
    limit: a
  });
  B(
    () => {
      l({ limit: d, offset: g, ...r }, t);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      l,
      d,
      g,
      // eslint-disable-next-line react-hooks/exhaustive-deps,@typescript-eslint/no-unsafe-assignment
      ...Object.values(r || {}),
      t
    ]
  );
  const { count: v, max_limit: h } = j.data || {};
  return h && (c = c.filter(
    (p) => p <= h
  )), /* @__PURE__ */ i.jsxs(U, { ...u, children: [
    V(
      j,
      ({ data: p }) => e(p, {
        limit: d,
        page: L,
        offset: g,
        count: v,
        maxLimit: h
      })
    ),
    /* @__PURE__ */ i.jsx(
      D,
      {
        component: "div",
        count: v ?? 0,
        rowsPerPage: d,
        onRowsPerPageChange: (p) => {
          y({ limit: parseInt(p.target.value), page: 0 }), n && n(p);
        },
        page: L,
        onPageChange: (p, x) => {
          y(({ limit: z }) => ({ limit: z, page: x })), m && m(p, x);
        },
        rowsPerPageOptions: c.sort((p, x) => p - x),
        ...f
      }
    )
  ] });
}, nt = ({
  src: e,
  style: o = {},
  ...t
}) => /* @__PURE__ */ i.jsx(
  N,
  {
    component: "iframe",
    width: "100%",
    src: e,
    title: "YouTube video player",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen",
    style: { border: "0px", aspectRatio: "16 / 9", ...o },
    ...t
  }
);
export {
  X as ClickableTooltip,
  Z as CopyIconButton,
  kt as Countdown,
  I as DownloadFileButton,
  tt as ElevatedAppBar,
  Bt as Image,
  et as InputFileButton,
  ot as ItemizedList,
  ft as Link,
  Lt as LinkButton,
  dt as LinkIconButton,
  xt as LinkListItem,
  gt as LinkTab,
  ht as Navigate,
  st as OrderedGrid,
  it as ScrollIntoViewLink,
  Ct as SyncError,
  rt as TablePagination,
  nt as YouTubeVideo,
  lt as forms,
  mt as pages,
  vt as tables
};
//# sourceMappingURL=index.es.js.map
