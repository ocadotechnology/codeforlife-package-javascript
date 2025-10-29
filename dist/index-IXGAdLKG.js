import { jsx as e, jsxs as m } from "react/jsx-runtime";
import { isValidElement as p } from "react";
import { TableContainer as f, Table as y, TableHead as C, TableRow as r, TableCell as o, TableBody as h, Stack as j } from "@mui/material";
const u = ({
  headers: t,
  children: a,
  containerProps: i,
  headProps: c,
  headRowProps: s,
  bodyProps: b,
  ...d
}) => /* @__PURE__ */ e(f, { ...i, children: /* @__PURE__ */ m(y, { ...d, children: [
  /* @__PURE__ */ e(C, { ...c, children: /* @__PURE__ */ e(r, { ...s, children: t.map((l, T) => {
    const n = `table-head-cell-${T}`;
    return typeof l == "string" || p(l) ? /* @__PURE__ */ e(o, { children: l }, n) : /* @__PURE__ */ e(o, { ...l }, n);
  }) }) }),
  /* @__PURE__ */ e(h, { ...b, children: a })
] }) }), x = ({ cellProps: t, ...a }) => /* @__PURE__ */ e(o, { ...t, children: /* @__PURE__ */ e(j, { ...a }) }), k = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BodyRow: r,
  Cell: o,
  CellStack: x,
  Table: u
}, Symbol.toStringTag, { value: "Module" }));
export {
  x as C,
  u as T,
  k as i
};
//# sourceMappingURL=index-IXGAdLKG.js.map
