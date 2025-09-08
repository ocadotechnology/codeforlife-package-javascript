import { b as ae, c as fe, a as de, d as U, Q as pe, e as le, f as be } from "../rtk-query.modern-CjetfYPg.js";
import { formatProdErrorMessage as oe } from "@reduxjs/toolkit";
import { useStore as ye, useSelector as he, useDispatch as ge, batch as me, shallowEqual as $ } from "react-redux";
import { useCallback as N, useDebugValue as x, useMemo as k, useState as re, useEffect as A, useRef as q, useLayoutEffect as Se } from "react";
import { SERVICE_API_URL as ve } from "../settings/index.es.js";
import { b as Ee } from "../session-D312kYKk.js";
import { getCsrfCookie as J } from "../utils/auth.es.js";
import { i as Qe } from "../api-CYqNqtN9.js";
import { s as Be } from "../schemas-CDXuSjyI.js";
import { u as Ze } from "../urls-BY-za1bX.js";
function F(e) {
  return e.replace(e[0], e[0].toUpperCase());
}
function ke(e) {
  let f = 0;
  for (const y in e)
    f++;
  return f;
}
function Pe(e) {
  return e.type === "query";
}
function Oe(e) {
  return e.type === "mutation";
}
function se(e) {
  return e.type === "infinitequery";
}
function C(e, ...f) {
  return Object.assign(e, ...f);
}
var X = Symbol();
function ee(e) {
  const f = q(e), y = k(() => le(f.current, e), [e]);
  return A(() => {
    f.current !== y && (f.current = y);
  }, [y]), y;
}
function G(e) {
  const f = q(e);
  return A(() => {
    $(f.current, e) || (f.current = e);
  }, [e]), $(f.current, e) ? f.current : e;
}
var Ie = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", De = /* @__PURE__ */ Ie(), we = () => typeof navigator < "u" && navigator.product === "ReactNative", Le = /* @__PURE__ */ we(), Me = () => De || Le ? Se : A, Ue = /* @__PURE__ */ Me(), ie = (e) => e.isUninitialized ? {
  ...e,
  isUninitialized: !1,
  isFetching: !0,
  isLoading: e.data === void 0,
  status: pe.pending
} : e;
function te(e, ...f) {
  const y = {};
  return f.forEach((m) => {
    y[m] = e[m];
  }), y;
}
var ne = ["data", "status", "isLoading", "isSuccess", "isError", "error"];
function qe({
  api: e,
  moduleOptions: {
    batch: f,
    hooks: {
      useDispatch: y,
      useSelector: m,
      useStore: I
    },
    unstable__sideEffectsInRender: h,
    createSelector: S
  },
  serializeQueryArgs: g,
  context: D
}) {
  const V = h ? (t) => t() : A;
  return {
    buildQueryHooks: R,
    buildInfiniteQueryHooks: Y,
    buildMutationHook: Z,
    usePrefetch: B
  };
  function K(t, r, d) {
    if (r?.endpointName && t.isUninitialized) {
      const {
        endpointName: s
      } = r, c = D.endpointDefinitions[s];
      d !== U && g({
        queryArgs: r.originalArgs,
        endpointDefinition: c,
        endpointName: s
      }) === g({
        queryArgs: d,
        endpointDefinition: c,
        endpointName: s
      }) && (r = void 0);
    }
    let u = t.isSuccess ? t.data : r?.data;
    u === void 0 && (u = t.data);
    const i = u !== void 0, n = t.isLoading, o = (!r || r.isLoading || r.isUninitialized) && !i && n, a = t.isSuccess || i && (n && !r?.isError || t.isUninitialized);
    return {
      ...t,
      data: u,
      currentData: t.data,
      isFetching: n,
      isLoading: o,
      isSuccess: a
    };
  }
  function W(t, r, d) {
    if (r?.endpointName && t.isUninitialized) {
      const {
        endpointName: s
      } = r, c = D.endpointDefinitions[s];
      d !== U && g({
        queryArgs: r.originalArgs,
        endpointDefinition: c,
        endpointName: s
      }) === g({
        queryArgs: d,
        endpointDefinition: c,
        endpointName: s
      }) && (r = void 0);
    }
    let u = t.isSuccess ? t.data : r?.data;
    u === void 0 && (u = t.data);
    const i = u !== void 0, n = t.isLoading, o = (!r || r.isLoading || r.isUninitialized) && !i && n, a = t.isSuccess || n && i;
    return {
      ...t,
      data: u,
      currentData: t.data,
      isFetching: n,
      isLoading: o,
      isSuccess: a
    };
  }
  function B(t, r) {
    const d = y(), u = G(r);
    return N((i, n) => d(e.util.prefetch(t, i, {
      ...u,
      ...n
    })), [t, d, u]);
  }
  function P(t, r, {
    refetchOnReconnect: d,
    refetchOnFocus: u,
    refetchOnMountOrArgChange: i,
    skip: n = !1,
    pollingInterval: o = 0,
    skipPollingIfUnfocused: a = !1,
    ...s
  } = {}) {
    const {
      initiate: c
    } = e.endpoints[t], l = y(), O = q(void 0);
    if (!O.current) {
      const M = l(e.internalActions.internal_getRTKQSubscriptions());
      if (process.env.NODE_ENV !== "production" && (typeof M != "object" || typeof M?.type == "string"))
        throw new Error(process.env.NODE_ENV === "production" ? oe(37) : `Warning: Middleware for RTK-Query API at reducerPath "${e.reducerPath}" has not been added to the store.
    You must add the middleware for RTK-Query to function correctly!`);
      O.current = M;
    }
    const p = ee(n ? U : r), b = G({
      refetchOnReconnect: d,
      refetchOnFocus: u,
      pollingInterval: o,
      skipPollingIfUnfocused: a
    }), v = s.initialPageParam, E = G(v), Q = q(void 0);
    let {
      queryCacheKey: L,
      requestId: H
    } = Q.current || {}, z = !1;
    L && H && (z = O.current.isRequestSubscribed(L, H));
    const j = !z && Q.current !== void 0;
    return V(() => {
      j && (Q.current = void 0);
    }, [j]), V(() => {
      const M = Q.current;
      if (typeof process < "u" && process.env.NODE_ENV === "removeMeOnCompilation" && console.log(j), p === U) {
        M?.unsubscribe(), Q.current = void 0;
        return;
      }
      const ue = Q.current?.subscriptionOptions;
      if (!M || M.arg !== p) {
        M?.unsubscribe();
        const ce = l(c(p, {
          subscriptionOptions: b,
          forceRefetch: i,
          ...se(D.endpointDefinitions[t]) ? {
            initialPageParam: E
          } : {}
        }));
        Q.current = ce;
      } else b !== ue && M.updateSubscriptionOptions(b);
    }, [l, c, i, p, b, j, E, t]), [Q, l, c, b];
  }
  function T(t, r) {
    return (u, {
      skip: i = !1,
      selectFromResult: n
    } = {}) => {
      const {
        select: o
      } = e.endpoints[t], a = ee(i ? U : u), s = q(void 0), c = k(() => (
        // Normally ts-ignores are bad and should be avoided, but we're
        // already casting this selector to be `Selector<any>` anyway,
        // so the inconsistencies don't matter here
        // @ts-ignore
        S([
          // @ts-ignore
          o(a),
          (v, E) => E,
          (v) => a
        ], r, {
          memoizeOptions: {
            resultEqualityCheck: $
          }
        })
      ), [o, a]), l = k(() => n ? S([c], n, {
        devModeChecks: {
          identityFunctionCheck: "never"
        }
      }) : c, [c, n]), O = m((v) => l(v, s.current), $), p = I(), b = c(p.getState(), s.current);
      return Ue(() => {
        s.current = b;
      }, [b]), O;
    };
  }
  function w(t) {
    A(() => () => {
      t.current?.unsubscribe?.(), t.current = void 0;
    }, [t]);
  }
  function _(t) {
    if (!t.current) throw new Error(process.env.NODE_ENV === "production" ? oe(38) : "Cannot refetch a query that has not been started yet.");
    return t.current.refetch();
  }
  function R(t) {
    const r = (i, n = {}) => {
      const [o] = P(t, i, n);
      return w(o), k(() => ({
        /**
         * A method to manually refetch data for the query
         */
        refetch: () => _(o)
      }), [o]);
    }, d = ({
      refetchOnReconnect: i,
      refetchOnFocus: n,
      pollingInterval: o = 0,
      skipPollingIfUnfocused: a = !1
    } = {}) => {
      const {
        initiate: s
      } = e.endpoints[t], c = y(), [l, O] = re(X), p = q(void 0), b = G({
        refetchOnReconnect: i,
        refetchOnFocus: n,
        pollingInterval: o,
        skipPollingIfUnfocused: a
      });
      V(() => {
        const L = p.current?.subscriptionOptions;
        b !== L && p.current?.updateSubscriptionOptions(b);
      }, [b]);
      const v = q(b);
      V(() => {
        v.current = b;
      }, [b]);
      const E = N(function(L, H = !1) {
        let z;
        return f(() => {
          p.current?.unsubscribe(), p.current = z = c(s(L, {
            subscriptionOptions: v.current,
            forceRefetch: !H
          })), O(L);
        }), z;
      }, [c, s]), Q = N(() => {
        p.current?.queryCacheKey && c(e.internalActions.removeQueryResult({
          queryCacheKey: p.current?.queryCacheKey
        }));
      }, [c]);
      return A(() => () => {
        p?.current?.unsubscribe();
      }, []), A(() => {
        l !== X && !p.current && E(l, !0);
      }, [l, E]), k(() => [E, l, {
        reset: Q
      }], [E, l, Q]);
    }, u = T(t, K);
    return {
      useQueryState: u,
      useQuerySubscription: r,
      useLazyQuerySubscription: d,
      useLazyQuery(i) {
        const [n, o, {
          reset: a
        }] = d(i), s = u(o, {
          ...i,
          skip: o === X
        }), c = k(() => ({
          lastArg: o
        }), [o]);
        return k(() => [n, {
          ...s,
          reset: a
        }, c], [n, s, a, c]);
      },
      useQuery(i, n) {
        const o = r(i, n), a = u(i, {
          selectFromResult: i === U || n?.skip ? void 0 : ie,
          ...n
        }), s = te(a, ...ne);
        return x(s), k(() => ({
          ...a,
          ...o
        }), [a, o]);
      }
    };
  }
  function Y(t) {
    const r = (u, i = {}) => {
      const [n, o, a, s] = P(t, u, i), c = q(s);
      V(() => {
        c.current = s;
      }, [s]);
      const l = N(function(b, v) {
        let E;
        return f(() => {
          n.current?.unsubscribe(), n.current = E = o(a(b, {
            subscriptionOptions: c.current,
            direction: v
          }));
        }), E;
      }, [n, o, a]);
      w(n);
      const O = ee(i.skip ? U : u), p = N(() => _(n), [n]);
      return k(() => ({
        trigger: l,
        /**
         * A method to manually refetch data for the query
         */
        refetch: p,
        fetchNextPage: () => l(O, "forward"),
        fetchPreviousPage: () => l(O, "backward")
      }), [p, l, O]);
    }, d = T(t, W);
    return {
      useInfiniteQueryState: d,
      useInfiniteQuerySubscription: r,
      useInfiniteQuery(u, i) {
        const {
          refetch: n,
          fetchNextPage: o,
          fetchPreviousPage: a
        } = r(u, i), s = d(u, {
          selectFromResult: u === U || i?.skip ? void 0 : ie,
          ...i
        }), c = te(s, ...ne, "hasNextPage", "hasPreviousPage");
        return x(c), k(() => ({
          ...s,
          fetchNextPage: o,
          fetchPreviousPage: a,
          refetch: n
        }), [s, o, a, n]);
      }
    };
  }
  function Z(t) {
    return ({
      selectFromResult: r,
      fixedCacheKey: d
    } = {}) => {
      const {
        select: u,
        initiate: i
      } = e.endpoints[t], n = y(), [o, a] = re();
      A(() => () => {
        o?.arg.fixedCacheKey || o?.reset();
      }, [o]);
      const s = N(function(L) {
        const H = n(i(L, {
          fixedCacheKey: d
        }));
        return a(H), H;
      }, [n, i, d]), {
        requestId: c
      } = o || {}, l = k(() => u({
        fixedCacheKey: d,
        requestId: o?.requestId
      }), [d, o, u]), O = k(() => r ? S([l], r) : l, [r, l]), p = m(O, $), b = d == null ? o?.arg.originalArgs : void 0, v = N(() => {
        f(() => {
          o && a(void 0), d && n(e.internalActions.removeMutationResult({
            requestId: c,
            fixedCacheKey: d
          }));
        });
      }, [n, d, o, c]), E = te(p, ...ne, "endpointName");
      x(E);
      const Q = k(() => ({
        ...p,
        originalArgs: b,
        reset: v
      }), [p, b, v]);
      return k(() => [s, Q], [s, Q]);
    };
  }
}
var Ae = /* @__PURE__ */ Symbol(), Ve = ({
  batch: e = me,
  hooks: f = {
    useDispatch: ge,
    useSelector: he,
    useStore: ye
  },
  createSelector: y = de,
  unstable__sideEffectsInRender: m = !1,
  ...I
} = {}) => {
  if (process.env.NODE_ENV !== "production") {
    const h = ["useDispatch", "useSelector", "useStore"];
    let S = !1;
    for (const g of h)
      if (ke(I) > 0 && (I[g] && (S || (console.warn("As of RTK 2.0, the hooks now need to be specified as one object, provided under a `hooks` key:\n`reactHooksModule({ hooks: { useDispatch, useSelector, useStore } })`"), S = !0)), f[g] = I[g]), typeof f[g] != "function")
        throw new Error(process.env.NODE_ENV === "production" ? oe(36) : `When using custom hooks for context, all ${h.length} hooks need to be provided: ${h.join(", ")}.
Hook ${g} was either not provided or not a function.`);
  }
  return {
    name: Ae,
    init(h, {
      serializeQueryArgs: S
    }, g) {
      const D = h, {
        buildQueryHooks: V,
        buildInfiniteQueryHooks: K,
        buildMutationHook: W,
        usePrefetch: B
      } = qe({
        api: h,
        moduleOptions: {
          batch: e,
          hooks: f,
          unstable__sideEffectsInRender: m,
          createSelector: y
        },
        serializeQueryArgs: S,
        context: g
      });
      return C(D, {
        usePrefetch: B
      }), C(g, {
        batch: e
      }), {
        injectEndpoint(P, T) {
          if (Pe(T)) {
            const {
              useQuery: w,
              useLazyQuery: _,
              useLazyQuerySubscription: R,
              useQueryState: Y,
              useQuerySubscription: Z
            } = V(P);
            C(D.endpoints[P], {
              useQuery: w,
              useLazyQuery: _,
              useLazyQuerySubscription: R,
              useQueryState: Y,
              useQuerySubscription: Z
            }), h[`use${F(P)}Query`] = w, h[`useLazy${F(P)}Query`] = _;
          }
          if (Oe(T)) {
            const w = W(P);
            C(D.endpoints[P], {
              useMutation: w
            }), h[`use${F(P)}Mutation`] = w;
          } else if (se(T)) {
            const {
              useInfiniteQuery: w,
              useInfiniteQuerySubscription: _,
              useInfiniteQueryState: R
            } = K(P);
            C(D.endpoints[P], {
              useInfiniteQuery: w,
              useInfiniteQuerySubscription: _,
              useInfiniteQueryState: R
            }), h[`use${F(P)}InfiniteQuery`] = w;
          }
        }
      };
    }
  };
}, _e = /* @__PURE__ */ ae(fe(), Ve());
const He = [
  // These are the tags for the common models used throughout our system.
  // https://github.com/ocadotechnology/codeforlife-package-python/tree/main/codeforlife/user/models
  // NOTE: Don't use the "Teacher" and "Student" tags. Use "User" instead.
  "User",
  "School",
  "Class",
  "AuthFactor"
];
function Ge({
  tagTypes: e = []
} = {}) {
  const f = be({
    baseUrl: `${ve}/`,
    credentials: "include",
    prepareHeaders: (m, I) => {
      const { type: h, arg: S } = I, g = typeof S == "string" ? "GET" : S.method || "GET";
      if (h === "mutation" || !Qe(g)) {
        const D = J();
        D && m.set("x-csrftoken", D);
      }
      return m;
    }
  }), y = _e({
    // https://redux-toolkit.js.org/rtk-query/usage/customizing-queries#implementing-a-custom-basequery
    baseQuery: async (m, I, h) => {
      if (I.type === "mutation" && J() === void 0) {
        const { error: S } = await f(
          { url: "/csrf/cookie/", method: "GET" },
          I,
          {}
        );
        S !== void 0 && console.error(S), J();
      }
      return await f(m, I, h);
    },
    tagTypes: [...He, ...e],
    endpoints: () => ({})
  });
  return y.injectEndpoints({
    endpoints: (m) => ({
      logout: Ee(y, m)
    })
  });
}
export {
  Ge as createApi,
  Be as schemas,
  He as tagTypes,
  Ze as urls
};
//# sourceMappingURL=index.es.js.map
