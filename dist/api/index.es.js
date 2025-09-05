import { b as fe, c as de, a as pe, d as U, e as re, Q as le, f as be } from "../rtk-query.modern-DGiM5X48.js";
import { formatProdErrorMessage as oe } from "@reduxjs/toolkit";
import { useStore as ye, useSelector as he, useDispatch as ge, batch as me, shallowEqual as j } from "react-redux";
import { useCallback as H, useDebugValue as J, useMemo as O, useState as ie, useEffect as A, useRef as q, useLayoutEffect as ve } from "react";
import { SERVICE_API_URL as Se } from "../settings/index.es.js";
import { b as Ee } from "../session-D312kYKk.js";
import { getCsrfCookie as X } from "../utils/auth.es.js";
import { i as Qe } from "../api-Cbyt3rw0.js";
import { s as We } from "../schemas-DlOtf2vf.js";
import { u as Ze } from "../urls-DtHr1d3H.js";
function F(t) {
  return t.replace(t[0], t[0].toUpperCase());
}
function ke(t) {
  let d = 0;
  for (const m in t)
    d++;
  return d;
}
function Pe(t) {
  return t.type === "query";
}
function Oe(t) {
  return t.type === "mutation";
}
function ue(t) {
  return t.type === "infinitequery";
}
function $(t, ...d) {
  return Object.assign(t, ...d);
}
var x = Symbol();
function ee(t, d, m, h) {
  const g = O(() => ({
    queryArgs: t,
    serialized: typeof t == "object" ? d({
      queryArgs: t,
      endpointDefinition: m,
      endpointName: h
    }) : t
  }), [t, d, m, h]), l = q(g);
  return A(() => {
    l.current.serialized !== g.serialized && (l.current = g);
  }, [g]), l.current.serialized === g.serialized ? l.current.queryArgs : t;
}
function G(t) {
  const d = q(t);
  return A(() => {
    j(d.current, t) || (d.current = t);
  }, [t]), j(d.current, t) ? d.current : t;
}
var De = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Ie = /* @__PURE__ */ De(), we = () => typeof navigator < "u" && navigator.product === "ReactNative", Le = /* @__PURE__ */ we(), Me = () => Ie || Le ? ve : A, Ue = /* @__PURE__ */ Me(), se = (t) => t.isUninitialized ? {
  ...t,
  isUninitialized: !1,
  isFetching: !0,
  isLoading: t.data === void 0,
  status: le.pending
} : t;
function te(t, ...d) {
  const m = {};
  return d.forEach((h) => {
    m[h] = t[h];
  }), m;
}
var ne = ["data", "status", "isLoading", "isSuccess", "isError", "error"];
function qe({
  api: t,
  moduleOptions: {
    batch: d,
    hooks: {
      useDispatch: m,
      useSelector: h,
      useStore: g
    },
    unstable__sideEffectsInRender: l,
    createSelector: S
  },
  serializeQueryArgs: v,
  context: E
}) {
  const V = l ? (e) => e() : A;
  return {
    buildQueryHooks: R,
    buildInfiniteQueryHooks: Y,
    buildMutationHook: Z,
    usePrefetch: W
  };
  function K(e, r, f) {
    if (r?.endpointName && e.isUninitialized) {
      const {
        endpointName: s
      } = r, c = E.endpointDefinitions[s];
      f !== U && v({
        queryArgs: r.originalArgs,
        endpointDefinition: c,
        endpointName: s
      }) === v({
        queryArgs: f,
        endpointDefinition: c,
        endpointName: s
      }) && (r = void 0);
    }
    let u = e.isSuccess ? e.data : r?.data;
    u === void 0 && (u = e.data);
    const i = u !== void 0, n = e.isLoading, o = (!r || r.isLoading || r.isUninitialized) && !i && n, a = e.isSuccess || i && (n && !r?.isError || e.isUninitialized);
    return {
      ...e,
      data: u,
      currentData: e.data,
      isFetching: n,
      isLoading: o,
      isSuccess: a
    };
  }
  function B(e, r, f) {
    if (r?.endpointName && e.isUninitialized) {
      const {
        endpointName: s
      } = r, c = E.endpointDefinitions[s];
      f !== U && v({
        queryArgs: r.originalArgs,
        endpointDefinition: c,
        endpointName: s
      }) === v({
        queryArgs: f,
        endpointDefinition: c,
        endpointName: s
      }) && (r = void 0);
    }
    let u = e.isSuccess ? e.data : r?.data;
    u === void 0 && (u = e.data);
    const i = u !== void 0, n = e.isLoading, o = (!r || r.isLoading || r.isUninitialized) && !i && n, a = e.isSuccess || n && i;
    return {
      ...e,
      data: u,
      currentData: e.data,
      isFetching: n,
      isLoading: o,
      isSuccess: a
    };
  }
  function W(e, r) {
    const f = m(), u = G(r);
    return H((i, n) => f(t.util.prefetch(e, i, {
      ...u,
      ...n
    })), [e, f, u]);
  }
  function D(e, r, {
    refetchOnReconnect: f,
    refetchOnFocus: u,
    refetchOnMountOrArgChange: i,
    skip: n = !1,
    pollingInterval: o = 0,
    skipPollingIfUnfocused: a = !1,
    ...s
  } = {}) {
    const {
      initiate: c
    } = t.endpoints[e], b = m(), I = q(void 0);
    if (!I.current) {
      const M = b(t.internalActions.internal_getRTKQSubscriptions());
      if (process.env.NODE_ENV !== "production" && (typeof M != "object" || typeof M?.type == "string"))
        throw new Error(process.env.NODE_ENV === "production" ? oe(37) : `Warning: Middleware for RTK-Query API at reducerPath "${t.reducerPath}" has not been added to the store.
    You must add the middleware for RTK-Query to function correctly!`);
      I.current = M;
    }
    const p = ee(
      n ? U : r,
      // Even if the user provided a per-endpoint `serializeQueryArgs` with
      // a consistent return value, _here_ we want to use the default behavior
      // so we can tell if _anything_ actually changed. Otherwise, we can end up
      // with a case where the query args did change but the serialization doesn't,
      // and then we never try to initiate a refetch.
      re,
      E.endpointDefinitions[e],
      e
    ), y = G({
      refetchOnReconnect: f,
      refetchOnFocus: u,
      pollingInterval: o,
      skipPollingIfUnfocused: a
    }), Q = s.initialPageParam, k = G(Q), P = q(void 0);
    let {
      queryCacheKey: L,
      requestId: z
    } = P.current || {}, C = !1;
    L && z && (C = I.current.isRequestSubscribed(L, z));
    const N = !C && P.current !== void 0;
    return V(() => {
      N && (P.current = void 0);
    }, [N]), V(() => {
      const M = P.current;
      if (typeof process < "u" && process.env.NODE_ENV === "removeMeOnCompilation" && console.log(N), p === U) {
        M?.unsubscribe(), P.current = void 0;
        return;
      }
      const ce = P.current?.subscriptionOptions;
      if (!M || M.arg !== p) {
        M?.unsubscribe();
        const ae = b(c(p, {
          subscriptionOptions: y,
          forceRefetch: i,
          ...ue(E.endpointDefinitions[e]) ? {
            initialPageParam: k
          } : {}
        }));
        P.current = ae;
      } else y !== ce && M.updateSubscriptionOptions(y);
    }, [b, c, i, p, y, N, k, e]), [P, b, c, y];
  }
  function T(e, r) {
    return (u, {
      skip: i = !1,
      selectFromResult: n
    } = {}) => {
      const {
        select: o
      } = t.endpoints[e], a = ee(i ? U : u, v, E.endpointDefinitions[e], e), s = q(void 0), c = O(() => (
        // Normally ts-ignores are bad and should be avoided, but we're
        // already casting this selector to be `Selector<any>` anyway,
        // so the inconsistencies don't matter here
        // @ts-ignore
        S([
          // @ts-ignore
          o(a),
          (Q, k) => k,
          (Q) => a
        ], r, {
          memoizeOptions: {
            resultEqualityCheck: j
          }
        })
      ), [o, a]), b = O(() => n ? S([c], n, {
        devModeChecks: {
          identityFunctionCheck: "never"
        }
      }) : c, [c, n]), I = h((Q) => b(Q, s.current), j), p = g(), y = c(p.getState(), s.current);
      return Ue(() => {
        s.current = y;
      }, [y]), I;
    };
  }
  function w(e) {
    A(() => () => {
      e.current?.unsubscribe?.(), e.current = void 0;
    }, [e]);
  }
  function _(e) {
    if (!e.current) throw new Error(process.env.NODE_ENV === "production" ? oe(38) : "Cannot refetch a query that has not been started yet.");
    return e.current.refetch();
  }
  function R(e) {
    const r = (i, n = {}) => {
      const [o] = D(e, i, n);
      return w(o), O(() => ({
        /**
         * A method to manually refetch data for the query
         */
        refetch: () => _(o)
      }), [o]);
    }, f = ({
      refetchOnReconnect: i,
      refetchOnFocus: n,
      pollingInterval: o = 0,
      skipPollingIfUnfocused: a = !1
    } = {}) => {
      const {
        initiate: s
      } = t.endpoints[e], c = m(), [b, I] = ie(x), p = q(void 0), y = G({
        refetchOnReconnect: i,
        refetchOnFocus: n,
        pollingInterval: o,
        skipPollingIfUnfocused: a
      });
      V(() => {
        const L = p.current?.subscriptionOptions;
        y !== L && p.current?.updateSubscriptionOptions(y);
      }, [y]);
      const Q = q(y);
      V(() => {
        Q.current = y;
      }, [y]);
      const k = H(function(L, z = !1) {
        let C;
        return d(() => {
          p.current?.unsubscribe(), p.current = C = c(s(L, {
            subscriptionOptions: Q.current,
            forceRefetch: !z
          })), I(L);
        }), C;
      }, [c, s]), P = H(() => {
        p.current?.queryCacheKey && c(t.internalActions.removeQueryResult({
          queryCacheKey: p.current?.queryCacheKey
        }));
      }, [c]);
      return A(() => () => {
        p?.current?.unsubscribe();
      }, []), A(() => {
        b !== x && !p.current && k(b, !0);
      }, [b, k]), O(() => [k, b, {
        reset: P
      }], [k, b, P]);
    }, u = T(e, K);
    return {
      useQueryState: u,
      useQuerySubscription: r,
      useLazyQuerySubscription: f,
      useLazyQuery(i) {
        const [n, o, {
          reset: a
        }] = f(i), s = u(o, {
          ...i,
          skip: o === x
        }), c = O(() => ({
          lastArg: o
        }), [o]);
        return O(() => [n, {
          ...s,
          reset: a
        }, c], [n, s, a, c]);
      },
      useQuery(i, n) {
        const o = r(i, n), a = u(i, {
          selectFromResult: i === U || n?.skip ? void 0 : se,
          ...n
        }), s = te(a, ...ne);
        return J(s), O(() => ({
          ...a,
          ...o
        }), [a, o]);
      }
    };
  }
  function Y(e) {
    const r = (u, i = {}) => {
      const [n, o, a, s] = D(e, u, i), c = q(s);
      V(() => {
        c.current = s;
      }, [s]);
      const b = H(function(y, Q) {
        let k;
        return d(() => {
          n.current?.unsubscribe(), n.current = k = o(a(y, {
            subscriptionOptions: c.current,
            direction: Q
          }));
        }), k;
      }, [n, o, a]);
      w(n);
      const I = ee(
        i.skip ? U : u,
        // Even if the user provided a per-endpoint `serializeQueryArgs` with
        // a consistent return value, _here_ we want to use the default behavior
        // so we can tell if _anything_ actually changed. Otherwise, we can end up
        // with a case where the query args did change but the serialization doesn't,
        // and then we never try to initiate a refetch.
        re,
        E.endpointDefinitions[e],
        e
      ), p = H(() => _(n), [n]);
      return O(() => ({
        trigger: b,
        /**
         * A method to manually refetch data for the query
         */
        refetch: p,
        fetchNextPage: () => b(I, "forward"),
        fetchPreviousPage: () => b(I, "backward")
      }), [p, b, I]);
    }, f = T(e, B);
    return {
      useInfiniteQueryState: f,
      useInfiniteQuerySubscription: r,
      useInfiniteQuery(u, i) {
        const {
          refetch: n,
          fetchNextPage: o,
          fetchPreviousPage: a
        } = r(u, i), s = f(u, {
          selectFromResult: u === U || i?.skip ? void 0 : se,
          ...i
        }), c = te(s, ...ne, "hasNextPage", "hasPreviousPage");
        return J(c), O(() => ({
          ...s,
          fetchNextPage: o,
          fetchPreviousPage: a,
          refetch: n
        }), [s, o, a, n]);
      }
    };
  }
  function Z(e) {
    return ({
      selectFromResult: r,
      fixedCacheKey: f
    } = {}) => {
      const {
        select: u,
        initiate: i
      } = t.endpoints[e], n = m(), [o, a] = ie();
      A(() => () => {
        o?.arg.fixedCacheKey || o?.reset();
      }, [o]);
      const s = H(function(L) {
        const z = n(i(L, {
          fixedCacheKey: f
        }));
        return a(z), z;
      }, [n, i, f]), {
        requestId: c
      } = o || {}, b = O(() => u({
        fixedCacheKey: f,
        requestId: o?.requestId
      }), [f, o, u]), I = O(() => r ? S([b], r) : b, [r, b]), p = h(I, j), y = f == null ? o?.arg.originalArgs : void 0, Q = H(() => {
        d(() => {
          o && a(void 0), f && n(t.internalActions.removeMutationResult({
            requestId: c,
            fixedCacheKey: f
          }));
        });
      }, [n, f, o, c]), k = te(p, ...ne, "endpointName");
      J(k);
      const P = O(() => ({
        ...p,
        originalArgs: y,
        reset: Q
      }), [p, y, Q]);
      return O(() => [s, P], [s, P]);
    };
  }
}
var Ae = /* @__PURE__ */ Symbol(), Ve = ({
  batch: t = me,
  hooks: d = {
    useDispatch: ge,
    useSelector: he,
    useStore: ye
  },
  createSelector: m = pe,
  unstable__sideEffectsInRender: h = !1,
  ...g
} = {}) => {
  if (process.env.NODE_ENV !== "production") {
    const l = ["useDispatch", "useSelector", "useStore"];
    let S = !1;
    for (const v of l)
      if (ke(g) > 0 && (g[v] && (S || (console.warn("As of RTK 2.0, the hooks now need to be specified as one object, provided under a `hooks` key:\n`reactHooksModule({ hooks: { useDispatch, useSelector, useStore } })`"), S = !0)), d[v] = g[v]), typeof d[v] != "function")
        throw new Error(process.env.NODE_ENV === "production" ? oe(36) : `When using custom hooks for context, all ${l.length} hooks need to be provided: ${l.join(", ")}.
Hook ${v} was either not provided or not a function.`);
  }
  return {
    name: Ae,
    init(l, {
      serializeQueryArgs: S
    }, v) {
      const E = l, {
        buildQueryHooks: V,
        buildInfiniteQueryHooks: K,
        buildMutationHook: B,
        usePrefetch: W
      } = qe({
        api: l,
        moduleOptions: {
          batch: t,
          hooks: d,
          unstable__sideEffectsInRender: h,
          createSelector: m
        },
        serializeQueryArgs: S,
        context: v
      });
      return $(E, {
        usePrefetch: W
      }), $(v, {
        batch: t
      }), {
        injectEndpoint(D, T) {
          if (Pe(T)) {
            const {
              useQuery: w,
              useLazyQuery: _,
              useLazyQuerySubscription: R,
              useQueryState: Y,
              useQuerySubscription: Z
            } = V(D);
            $(E.endpoints[D], {
              useQuery: w,
              useLazyQuery: _,
              useLazyQuerySubscription: R,
              useQueryState: Y,
              useQuerySubscription: Z
            }), l[`use${F(D)}Query`] = w, l[`useLazy${F(D)}Query`] = _;
          }
          if (Oe(T)) {
            const w = B(D);
            $(E.endpoints[D], {
              useMutation: w
            }), l[`use${F(D)}Mutation`] = w;
          } else if (ue(T)) {
            const {
              useInfiniteQuery: w,
              useInfiniteQuerySubscription: _,
              useInfiniteQueryState: R
            } = K(D);
            $(E.endpoints[D], {
              useInfiniteQuery: w,
              useInfiniteQuerySubscription: _,
              useInfiniteQueryState: R
            }), l[`use${F(D)}InfiniteQuery`] = w;
          }
        }
      };
    }
  };
}, _e = /* @__PURE__ */ fe(de(), Ve());
const ze = [
  // These are the tags for the common models used throughout our system.
  // https://github.com/ocadotechnology/codeforlife-package-python/tree/main/codeforlife/user/models
  // NOTE: Don't use the "Teacher" and "Student" tags. Use "User" instead.
  "User",
  "School",
  "Class",
  "AuthFactor"
];
function Ge({
  tagTypes: t = []
} = {}) {
  const d = be({
    baseUrl: `${Se}/`,
    credentials: "include",
    prepareHeaders: (h, g) => {
      const { type: l, arg: S } = g, v = typeof S == "string" ? "GET" : S.method || "GET";
      if (l === "mutation" || !Qe(v)) {
        const E = X();
        E && h.set("x-csrftoken", E);
      }
      return h;
    }
  }), m = _e({
    // https://redux-toolkit.js.org/rtk-query/usage/customizing-queries#implementing-a-custom-basequery
    baseQuery: async (h, g, l) => {
      if (g.type === "mutation" && X() === void 0) {
        const { error: S } = await d(
          { url: "/csrf/cookie/", method: "GET" },
          g,
          {}
        );
        S !== void 0 && console.error(S), X();
      }
      return await d(h, g, l);
    },
    tagTypes: [...ze, ...t],
    endpoints: () => ({})
  });
  return m.injectEndpoints({
    endpoints: (h) => ({
      logout: Ee(m, h)
    })
  });
}
export {
  Ge as createApi,
  We as schemas,
  ze as tagTypes,
  Ze as urls
};
//# sourceMappingURL=index.es.js.map
