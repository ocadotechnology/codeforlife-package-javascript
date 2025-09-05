import { j as S } from "./jsx-runtime-XvoU0p7t.js";
import * as j from "yup";
import { object as L } from "yup";
import { useEffect as g, useState as V, useCallback as J } from "react";
import q from "js-cookie";
import { useNavigate as k, useLocation as w, useSearchParams as z, useParams as B, createSearchParams as G } from "react-router-dom";
import { useSelector as H } from "react-redux";
import "@reduxjs/toolkit/query/react";
import { SESSION_METADATA_COOKIE_NAME as K } from "./settings/index.es.js";
import { b as Q } from "./session-oI-Ht2C8.js";
import { m as R, a as W } from "./auth-BkL9GD7F.js";
import "@mui/material";
import { g as X } from "./general-DO-KrNo5.js";
import "@mui/icons-material";
import { t as $ } from "./schemas-BoS4A2yH.js";
import "./urls-dtY2-PoS.js";
import "./palette-C_L0akN_.js";
function C() {
  const e = k(), o = T();
  return (s, t = void 0) => {
    if (typeof s == "number") e(s);
    else {
      const { next: r = !0, ...i } = t || {};
      e(
        r && "next" in o ? o.next : s,
        i
      );
    }
  };
}
function F() {
  return w();
}
function T(e, o) {
  const s = Object.fromEntries(z()[0].entries());
  return e ? $(s, L(e), o) : s;
}
function Y(e, o) {
  const s = B();
  return e ? $(s, L(e), o) : s;
}
function Se({
  shape: e,
  children: o,
  onValidationError: s,
  onValidationSuccess: t = () => {
  },
  validateOptions: r
}) {
  const i = Y(e, r), n = C();
  return g(
    () => {
      i ? t(i) : s(n);
    },
    []
    // eslint-disable-line react-hooks/exhaustive-deps
  ), i ? o(i) : /* @__PURE__ */ S.jsx(S.Fragment, {});
}
function _(e = K) {
  return H(Q) ? JSON.parse(q.get(e)) : void 0;
}
_.predefine = (e = K) => () => _(e);
function _e(e, o = {}) {
  const { userType: s, next: t = !0 } = o, { pathname: r } = F(), i = C(), n = _(), c = s && (!n || n.user_type !== s);
  return g(() => {
    c && i({
      pathname: "/login" + {
        teacher: "/teacher",
        student: "/student",
        indy: "/independent"
      }[s],
      search: t ? G({ next: r }).toString() : void 0
    });
  }, [i, c, s, t, r]), c ? /* @__PURE__ */ S.jsx(S.Fragment, {}) : typeof e == "function" ? e(n) : e;
}
function Z(e, o = 32, s = "state") {
  const t = R(e, s), r = sessionStorage.getItem(t), [i, n] = V();
  g(() => {
    let u;
    r && r.length === o ? u = r : (u = X(o), sessionStorage.setItem(t, u)), n(u);
  }, [t, r, o]);
  const c = J(() => {
    sessionStorage.removeItem(t), n(void 0);
  }, [t]);
  return [i, c];
}
function D(e, o = 128, s = "codeChallenge") {
  const t = R(e, s), r = sessionStorage.getItem(t), [i, n] = V();
  g(() => {
    let u;
    if (r) {
      const a = JSON.parse(r);
      typeof a == "object" && a && "verifier" in a && typeof a.verifier == "string" && a.verifier.length === o && "challenge" in a && typeof a.challenge == "string" && "method" in a && a.method === "S256" && (u = {
        verifier: a.verifier,
        challenge: a.challenge,
        method: a.method
      });
    }
    u ? n(u) : W(o).then((a) => {
      sessionStorage.setItem(
        t,
        JSON.stringify(a)
      ), n(a);
    }).catch((a) => {
      a && console.error(a);
    });
  }, [t, r, o]);
  const c = J(() => {
    sessionStorage.removeItem(t), n(void 0);
  }, [t]);
  return [i, c];
}
function U({
  provider: e,
  authUri: o,
  clientId: s,
  redirectUri: t,
  scope: r,
  responseType: i = "code",
  accessType: n = "offline",
  prompt: c,
  useSessionMetadata: u,
  useLoginMutation: a,
  onCreateSession: A,
  onRetrieveSession: P
}) {
  const [d, I] = Z(e), [
    {
      verifier: h,
      challenge: x,
      method: O
    } = {},
    E
  ] = D(e), [
    M,
    {
      originalArgs: m = {},
      isLoading: N,
      isError: b
    }
  ] = a(), v = u(), p = C(), f = T({ code: j.string(), state: j.string() }) || {}, l = F().state || {};
  if (g(() => {
    f.code && f.state && p(".", {
      // Removes the URL containing the search params from the history stack.
      replace: !0,
      // Ensure we don't break the auth flow by navigating to another page.
      next: !1,
      // Store the search params in the page's state instead.
      state: { code: f.code, state: f.state }
    });
  }, [f.code, f.state, p]), g(() => {
    v ? P(v) : (
      // If the state and code verifier have been generated...
      d && h && // ...and the page's state contains a code...
      l.code && // ...and the page's state contains the stored state...
      l.state === d && // ...and the login endpoint was not called with the current values or has
      // not returned an error...
      (m.code !== l.code || m.code_verifier !== h || m.redirect_uri !== t || !b) && // ...and the login endpoint is not currently being called...
      !N && M({
        code: l.code,
        code_verifier: h,
        redirect_uri: t
      }).unwrap().then(A).catch(() => {
        p(".", {
          replace: !0,
          state: {
            notifications: [
              {
                props: {
                  error: !0,
                  children: "Failed to login. Please try again."
                }
              }
            ]
          }
        });
      }).finally(() => {
        I(), E();
      })
    );
  }, [
    p,
    t,
    // State
    d,
    l.state,
    I,
    // Code
    h,
    l.code,
    E,
    // Login
    M,
    N,
    b,
    m.code,
    m.code_verifier,
    m.redirect_uri,
    // Session
    v,
    A,
    P
  ]), d && x && O) {
    const y = {
      client_id: s,
      redirect_uri: t,
      scope: r,
      response_type: i,
      access_type: n,
      state: d,
      code_challenge: x,
      code_challenge_method: O
    };
    return c && (y.prompt = c), [
      o + "?" + new URLSearchParams(y).toString(),
      y
    ];
  }
  return [];
}
const ve = (e) => U(
  // @ts-expect-error value is assignable
  "useSessionMetadata" in e ? e : { ...e, useSessionMetadata: _ }
);
export {
  _e as a,
  Z as b,
  D as c,
  ve as d,
  C as e,
  F as f,
  T as g,
  Y as h,
  Se as i,
  _ as u
};
//# sourceMappingURL=auth-mnGZUVoq.js.map
