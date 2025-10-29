import { jsx as L, Fragment as V } from "react/jsx-runtime";
import * as b from "yup";
import { object as j } from "yup";
import { useEffect as d, useState as J, useCallback as K } from "react";
import k from "js-cookie";
import { useNavigate as w, useLocation as z, useSearchParams as B, useParams as G, createSearchParams as H } from "react-router";
import { useSelector as Q } from "react-redux";
import "@reduxjs/toolkit/query/react";
import { SESSION_METADATA_COOKIE_NAME as $ } from "./settings/index.es.js";
import { b as W } from "./session-oI-Ht2C8.js";
import { makeOAuth2StorageKey as R, generateOAuth2CodeChallenge as X } from "./utils/auth.es.js";
import "@mui/material";
import { generateSecureRandomString as Y } from "./utils/general.es.js";
import "@mui/icons-material";
import "./schemas-UIk-meAN.js";
import "./urls-BG788CnL.js";
import { tryValidateSync as T } from "./utils/schema.es.js";
import "./palette-CYwuLBW7.js";
function y() {
  const e = w(), s = F();
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
function q() {
  return z();
}
function F(e, s) {
  const o = Object.fromEntries(B()[0].entries());
  return e ? T(o, j(e), s) : o;
}
function Z(e, s) {
  const o = G();
  return e ? T(o, j(e), s) : o;
}
function _e({
  shape: e,
  children: s,
  onValidationError: o,
  onValidationSuccess: t = () => {
  },
  validateOptions: a
}) {
  const i = Z(e, a), n = y();
  return d(
    () => {
      i ? t(i) : o(n);
    },
    []
    // eslint-disable-line react-hooks/exhaustive-deps
  ), i ? s(i) : /* @__PURE__ */ L(V, {});
}
function S(e = $) {
  return Q(W) ? JSON.parse(k.get(e)) : void 0;
}
S.predefine = (e = $) => () => S(e);
function ye(e, s = {}) {
  const { userType: o, next: t = !0 } = s, { pathname: a } = q(), i = y(), n = S(), c = o && (!n || n.user_type !== o);
  return d(() => {
    c && i({
      pathname: "/login" + {
        teacher: "/teacher",
        student: "/student",
        indy: "/independent"
      }[o],
      search: t ? H({ next: a }).toString() : void 0
    });
  }, [i, c, o, t, a]), c ? /* @__PURE__ */ L(V, {}) : typeof e == "function" ? e(n) : e;
}
function D(e, s = 32, o = "state") {
  const t = R(e, o), a = sessionStorage.getItem(t), [i, n] = J();
  d(() => {
    let u;
    a && a.length === s ? u = a : (u = Y(s), sessionStorage.setItem(t, u)), n(u);
  }, [t, a, s]);
  const c = K(() => {
    sessionStorage.removeItem(t), n(void 0);
  }, [t]);
  return [i, c];
}
function U(e, s = 128, o = "codeChallenge") {
  const t = R(e, o), a = sessionStorage.getItem(t), [i, n] = J();
  d(() => {
    let u;
    if (a) {
      const r = JSON.parse(a);
      typeof r == "object" && r && "verifier" in r && typeof r.verifier == "string" && r.verifier.length === s && "challenge" in r && typeof r.challenge == "string" && "method" in r && r.method === "S256" && (u = {
        verifier: r.verifier,
        challenge: r.challenge,
        method: r.method
      });
    }
    u ? n(u) : X(s).then((r) => {
      sessionStorage.setItem(
        t,
        JSON.stringify(r)
      ), n(r);
    }).catch((r) => {
      r && console.error(r);
    });
  }, [t, a, s]);
  const c = K(() => {
    sessionStorage.removeItem(t), n(void 0);
  }, [t]);
  return [i, c];
}
function ee({
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
  onCreateSession: C,
  onRetrieveSession: A
}) {
  const [g, P] = D(e), [
    {
      verifier: h,
      challenge: I,
      method: O
    } = {},
    x
  ] = U(e), [
    E,
    {
      originalArgs: f = {},
      isLoading: M,
      isError: N
    }
  ] = r(), v = u(), p = y(), m = F({ code: b.string(), state: b.string() }) || {}, l = q().state || {};
  if (d(() => {
    m.code && m.state && p(".", {
      // Removes the URL containing the search params from the history stack.
      replace: !0,
      // Ensure we don't break the auth flow by navigating to another page.
      next: !1,
      // Store the search params in the page's state instead.
      state: { code: m.code, state: m.state }
    });
  }, [m.code, m.state, p]), d(() => {
    v ? A(v) : (
      // If the state and code verifier have been generated...
      g && h && // ...and the page's state contains a code...
      l.code && // ...and the page's state contains the stored state...
      l.state === g && // ...and the login endpoint was not called with the current values or has
      // not returned an error...
      (f.code !== l.code || f.code_verifier !== h || f.redirect_uri !== t || !N) && // ...and the login endpoint is not currently being called...
      !M && E({
        code: l.code,
        code_verifier: h,
        redirect_uri: t
      }).unwrap().then(C).catch(() => {
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
        P(), x();
      })
    );
  }, [
    p,
    t,
    // State
    g,
    l.state,
    P,
    // Code
    h,
    l.code,
    x,
    // Login
    E,
    M,
    N,
    f.code,
    f.code_verifier,
    f.redirect_uri,
    // Session
    v,
    C,
    A
  ]), g && I && O) {
    const _ = {
      client_id: o,
      redirect_uri: t,
      scope: a,
      response_type: i,
      access_type: n,
      state: g,
      code_challenge: I,
      code_challenge_method: O
    };
    return c && (_.prompt = c), [
      s + "?" + new URLSearchParams(_).toString(),
      _
    ];
  }
  return [];
}
const Ce = (e) => ee(
  // @ts-expect-error value is assignable
  "useSessionMetadata" in e ? e : { ...e, useSessionMetadata: S }
);
export {
  ye as a,
  D as b,
  U as c,
  Ce as d,
  y as e,
  q as f,
  F as g,
  Z as h,
  _e as i,
  S as u
};
//# sourceMappingURL=auth-B6anBtxF.js.map
