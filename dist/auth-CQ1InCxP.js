import { j as S } from "./jsx-runtime-C7wFtzyj.js";
import * as j from "yup";
import { object as L } from "yup";
import { useEffect as g, useState as V, useCallback as J } from "react";
import q from "js-cookie";
import { useNavigate as k, useLocation as w, useSearchParams as z, useParams as B, createSearchParams as G } from "react-router";
import { useSelector as H } from "react-redux";
import { SESSION_METADATA_COOKIE_NAME as K } from "./settings/index.es.js";
import { b as Q } from "./session-oI-Ht2C8.js";
import { makeOAuth2StorageKey as R, generateOAuth2CodeChallenge as W } from "./utils/auth.es.js";
import "@mui/material";
import { generateSecureRandomString as X } from "./utils/general.es.js";
import "@mui/icons-material";
import "./schemas-D3tO0rys.js";
import "./urls-5m9PgoEX.js";
import { tryValidateSync as $ } from "./utils/schema.es.js";
import "./palette-CYwuLBW7.js";
function C() {
  const e = k(), s = T();
  return (o, t = void 0) => {
    if (typeof o == "number") e(o);
    else {
      const { next: a = !0, ...i } = t || {};
      e(
        a && "next" in s ? s.next : o,
        i
      );
    }
  };
}
function F() {
  return w();
}
function T(e, s) {
  const o = Object.fromEntries(z()[0].entries());
  return e ? $(o, L(e), s) : o;
}
function Y(e, s) {
  const o = B();
  return e ? $(o, L(e), s) : o;
}
function Se({
  shape: e,
  children: s,
  onValidationError: o,
  onValidationSuccess: t = () => {
  },
  validateOptions: a
}) {
  const i = Y(e, a), n = C();
  return g(
    () => {
      i ? t(i) : o(n);
    },
    []
    // eslint-disable-line react-hooks/exhaustive-deps
  ), i ? s(i) : /* @__PURE__ */ S.jsx(S.Fragment, {});
}
function v(e = K) {
  return H(Q) ? JSON.parse(q.get(e)) : void 0;
}
v.predefine = (e = K) => () => v(e);
function ve(e, s = {}) {
  const { userType: o, next: t = !0 } = s, { pathname: a } = F(), i = C(), n = v(), c = o && (!n || n.user_type !== o);
  return g(() => {
    c && i({
      pathname: "/login" + {
        teacher: "/teacher",
        student: "/student",
        indy: "/independent"
      }[o],
      search: t ? G({ next: a }).toString() : void 0
    });
  }, [i, c, o, t, a]), c ? /* @__PURE__ */ S.jsx(S.Fragment, {}) : typeof e == "function" ? e(n) : e;
}
function Z(e, s = 32, o = "state") {
  const t = R(e, o), a = sessionStorage.getItem(t), [i, n] = V();
  g(() => {
    let u;
    a && a.length === s ? u = a : (u = X(s), sessionStorage.setItem(t, u)), n(u);
  }, [t, a, s]);
  const c = J(() => {
    sessionStorage.removeItem(t), n(void 0);
  }, [t]);
  return [i, c];
}
function D(e, s = 128, o = "codeChallenge") {
  const t = R(e, o), a = sessionStorage.getItem(t), [i, n] = V();
  g(() => {
    let u;
    if (a) {
      const r = JSON.parse(a);
      typeof r == "object" && r && "verifier" in r && typeof r.verifier == "string" && r.verifier.length === s && "challenge" in r && typeof r.challenge == "string" && "method" in r && r.method === "S256" && (u = {
        verifier: r.verifier,
        challenge: r.challenge,
        method: r.method
      });
    }
    u ? n(u) : W(s).then((r) => {
      sessionStorage.setItem(
        t,
        JSON.stringify(r)
      ), n(r);
    }).catch((r) => {
      r && console.error(r);
    });
  }, [t, a, s]);
  const c = J(() => {
    sessionStorage.removeItem(t), n(void 0);
  }, [t]);
  return [i, c];
}
function U({
  provider: e,
  authUri: s,
  clientId: o,
  redirectUri: t,
  scope: a,
  responseType: i = "code",
  accessType: n = "offline",
  prompt: c,
  useSessionMetadata: u,
  useLoginMutation: r,
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
  ] = r(), _ = u(), p = C(), f = T({ code: j.string(), state: j.string() }) || {}, l = F().state || {};
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
    _ ? P(_) : (
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
    _,
    A,
    P
  ]), d && x && O) {
    const y = {
      client_id: o,
      redirect_uri: t,
      scope: a,
      response_type: i,
      access_type: n,
      state: d,
      code_challenge: x,
      code_challenge_method: O
    };
    return c && (y.prompt = c), [
      s + "?" + new URLSearchParams(y).toString(),
      y
    ];
  }
  return [];
}
const _e = (e) => U(
  // @ts-expect-error value is assignable
  "useSessionMetadata" in e ? e : { ...e, useSessionMetadata: v }
);
export {
  ve as a,
  Z as b,
  D as c,
  _e as d,
  C as e,
  F as f,
  T as g,
  Y as h,
  Se as i,
  v as u
};
//# sourceMappingURL=auth-CQ1InCxP.js.map
