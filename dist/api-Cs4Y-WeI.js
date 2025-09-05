import { useState as m } from "react";
function u(s) {
  const { page: a = 0, limit: o = 150 } = s || {}, [p, f] = m({
    page: a,
    limit: o,
    offset: a * o
  });
  return [p, (t) => {
    f(({ page: c, limit: e }) => {
      const g = typeof t == "function" ? t({ page: c, limit: e }) : t;
      let i = g.page;
      const n = g.limit;
      return n !== e && (i = 0), { page: i, limit: n, offset: i * n };
    });
  }];
}
export {
  u
};
//# sourceMappingURL=api-Cs4Y-WeI.js.map
