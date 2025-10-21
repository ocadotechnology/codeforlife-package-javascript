import { useState as d, useEffect as i } from "react";
function f({
  props: r,
  attrs: t,
  eventTypes: o
}) {
  const [c, s] = d();
  return i(() => {
    if (document.querySelector(`script[src="${r.src}"]`))
      throw Error("already exists");
    const e = document.createElement("script");
    Object.entries(r).forEach(([n, u]) => {
      e[n] = u;
    }), t !== void 0 && Object.entries(t).forEach(([n, u]) => {
      e.setAttribute(n, u);
    });
    function a(n) {
      s(n.type);
    }
    return o?.forEach((n) => {
      e.addEventListener(n, a);
    }), document.head.appendChild(e), () => {
      o?.forEach((n) => {
        e.removeEventListener(n, a);
      }), document.head.removeChild(e);
    };
  }, [o, t, r]), c;
}
function h(r, t = 1) {
  if (r <= 0) throw Error("seconds must be > 0");
  if (t <= 0) throw Error("interval must be > 0");
  const [o, c] = d(r);
  return i(() => {
    const s = setInterval(() => {
      c((e) => (e = e - t, e < 0 ? 0 : e));
    }, t * 1e3);
    return () => {
      clearInterval(s);
    };
  }, [t]), [o, c];
}
function m(r, t, o, c = {}) {
  const { options: s, deps: e = [] } = c;
  i(
    () => (r.addEventListener(t, o, s), () => {
      r.removeEventListener(t, o, s);
    }),
    // TODO: simplify this hook.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    e
  );
}
export {
  f as a,
  m as b,
  h as u
};
//# sourceMappingURL=general-D7Hqi3gj.js.map
