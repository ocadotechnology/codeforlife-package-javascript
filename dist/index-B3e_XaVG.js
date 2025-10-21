import { j as e } from "./jsx-runtime-lzYHhGH3.js";
import { isValidElement as d } from "react";
import { TableContainer as m, Table as T, TableHead as p, TableRow as n, TableCell as o, TableBody as f, Stack as y } from "@mui/material";
const u = ({
  headers: t,
  children: s,
  containerProps: r,
  headProps: i,
  headRowProps: c,
  bodyProps: j,
  ...x
}) => /* @__PURE__ */ e.jsx(m, { ...r, children: /* @__PURE__ */ e.jsxs(T, { ...x, children: [
  /* @__PURE__ */ e.jsx(p, { ...i, children: /* @__PURE__ */ e.jsx(n, { ...c, children: t.map((l, b) => {
    const a = `table-head-cell-${b}`;
    return typeof l == "string" || d(l) ? /* @__PURE__ */ e.jsx(o, { children: l }, a) : /* @__PURE__ */ e.jsx(o, { ...l }, a);
  }) }) }),
  /* @__PURE__ */ e.jsx(f, { ...j, children: s })
] }) }), C = ({ cellProps: t, ...s }) => /* @__PURE__ */ e.jsx(o, { ...t, children: /* @__PURE__ */ e.jsx(y, { ...s }) }), g = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BodyRow: n,
  Cell: o,
  CellStack: C,
  Table: u
}, Symbol.toStringTag, { value: "Module" }));
export {
  C,
  u as T,
  g as i
};
//# sourceMappingURL=index-B3e_XaVG.js.map
