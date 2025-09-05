import { j as y } from "./jsx-runtime-Dpn_P65e.js";
import * as L from "yup";
import { object as J } from "yup";
import { useEffect as g, useState as K, useCallback as R } from "react";
import z from "js-cookie";
import { useNavigate as D, useLocation as G, useSearchParams as H, useParams as Q, createSearchParams as W } from "react-router-dom";
import { useSelector as X } from "react-redux";
import "@reduxjs/toolkit/query/react";
import { a as $, g as Y } from "./general-DsmN0W6Q.js";
import { s as Z } from "./urls-Bl1eUttT.js";
import { m as k, a as U } from "./auth-DpHNJqSB.js";
import { createTheme as ee } from "@mui/material";
import "@mui/icons-material";
import { t as q } from "./schemas-Dhvt1lNE.js";
const te = {
  500: "#E0004D",
  400: "#EE0857",
  300: "#FA1664"
}, oe = {
  500: "#F6BE00"
}, se = {
  500: "#00A3E0"
}, {
  palette: { augmentColor: d }
} = ee(), T = {
  main: te[500],
  contrastText: "#fff"
}, F = {
  main: se[500],
  contrastText: "#fff"
}, V = {
  main: oe[500],
  contrastText: "#000"
}, Ae = {
  // primary / teacher
  primary: T,
  teacher: d({ color: T }),
  // secondary / indy
  secondary: V,
  indy: d({ color: V }),
  // tertiary / student
  tertiary: d({ color: F }),
  student: d({ color: F }),
  // other
  white: d({ color: { main: "#fff" } }),
  black: d({ color: { main: "#000" } }),
  info: { main: "#f1ecec" },
  error: { main: "#d50000" }
};
function A() {
  const e = D(), s = B();
  return (o, t = void 0) => {
    if (typeof o == "number") e(o);
    else {
      const { next: r = !0, ...i } = t || {};
      e(
        r && "next" in s ? s.next : o,
        i
      );
    }
  };
}
function w() {
  return G();
}
function B(e, s) {
  const o = Object.fromEntries(H()[0].entries());
  return e ? q(o, J(e), s) : o;
}
function ae(e, s) {
  const o = Q();
  return e ? q(o, J(e), s) : o;
}
function xe({
  shape: e,
  children: s,
  onValidationError: o,
  onValidationSuccess: t = () => {
  },
  validateOptions: r
}) {
  const i = ae(e, r), n = A();
  return g(
    () => {
      i ? t(i) : o(n);
    },
    []
    // eslint-disable-line react-hooks/exhaustive-deps
  ), i ? s(i) : /* @__PURE__ */ y.jsx(y.Fragment, {});
}
function _(e = $) {
  return X(Z) ? JSON.parse(z.get(e)) : void 0;
}
_.predefine = (e = $) => () => _(e);
function Ee(e, s = {}) {
  const { userType: o, next: t = !0 } = s, { pathname: r } = w(), i = A(), n = _(), c = o && (!n || n.user_type !== o);
  return g(() => {
    c && i({
      pathname: "/login" + {
        teacher: "/teacher",
        student: "/student",
        indy: "/independent"
      }[o],
      search: t ? W({ next: r }).toString() : void 0
    });
  }, [i, c, o, t, r]), c ? /* @__PURE__ */ y.jsx(y.Fragment, {}) : typeof e == "function" ? e(n) : e;
}
function re(e, s = 32, o = "state") {
  const t = k(e, o), r = sessionStorage.getItem(t), [i, n] = K();
  g(() => {
    let u;
    r && r.length === s ? u = r : (u = Y(s), sessionStorage.setItem(t, u)), n(u);
  }, [t, r, s]);
  const c = R(() => {
    sessionStorage.removeItem(t), n(void 0);
  }, [t]);
  return [i, c];
}
function ne(e, s = 128, o = "codeChallenge") {
  const t = k(e, o), r = sessionStorage.getItem(t), [i, n] = K();
  g(() => {
    let u;
    if (r) {
      const a = JSON.parse(r);
      typeof a == "object" && a && "verifier" in a && typeof a.verifier == "string" && a.verifier.length === s && "challenge" in a && typeof a.challenge == "string" && "method" in a && a.method === "S256" && (u = {
        verifier: a.verifier,
        challenge: a.challenge,
        method: a.method
      });
    }
    u ? n(u) : U(s).then((a) => {
      sessionStorage.setItem(
        t,
        JSON.stringify(a)
      ), n(a);
    }).catch((a) => {
      a && console.error(a);
    });
  }, [t, r, s]);
  const c = R(() => {
    sessionStorage.removeItem(t), n(void 0);
  }, [t]);
  return [i, c];
}
function ie({
  provider: e,
  authUri: s,
  clientId: o,
  redirectUri: t,
  scope: r,
  responseType: i = "code",
  accessType: n = "offline",
  prompt: c,
  useSessionMetadata: u,
  useLoginMutation: a,
  onCreateSession: x,
  onRetrieveSession: E
}) {
  const [h, P] = re(e), [
    {
      verifier: p,
      challenge: I,
      method: O
    } = {},
    j
  ] = ne(e), [
    M,
    {
      originalArgs: f = {},
      isLoading: N,
      isError: b
    }
  ] = a(), v = u(), S = A(), m = B({ code: L.string(), state: L.string() }) || {}, l = w().state || {};
  if (g(() => {
    m.code && m.state && S(".", {
      // Removes the URL containing the search params from the history stack.
      replace: !0,
      // Ensure we don't break the auth flow by navigating to another page.
      next: !1,
      // Store the search params in the page's state instead.
      state: { code: m.code, state: m.state }
    });
  }, [m.code, m.state, S]), g(() => {
    v ? E(v) : (
      // If the state and code verifier have been generated...
      h && p && // ...and the page's state contains a code...
      l.code && // ...and the page's state contains the stored state...
      l.state === h && // ...and the login endpoint was not called with the current values or has
      // not returned an error...
      (f.code !== l.code || f.code_verifier !== p || f.redirect_uri !== t || !b) && // ...and the login endpoint is not currently being called...
      !N && M({
        code: l.code,
        code_verifier: p,
        redirect_uri: t
      }).unwrap().then(x).catch(() => {
        S(".", {
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
        P(), j();
      })
    );
  }, [
    S,
    t,
    // State
    h,
    l.state,
    P,
    // Code
    p,
    l.code,
    j,
    // Login
    M,
    N,
    b,
    f.code,
    f.code_verifier,
    f.redirect_uri,
    // Session
    v,
    x,
    E
  ]), h && I && O) {
    const C = {
      client_id: o,
      redirect_uri: t,
      scope: r,
      response_type: i,
      access_type: n,
      state: h,
      code_challenge: I,
      code_challenge_method: O
    };
    return c && (C.prompt = c), [
      s + "?" + new URLSearchParams(C).toString(),
      C
    ];
  }
  return [];
}
const Pe = (e) => ie(
  // @ts-expect-error value is assignable
  "useSessionMetadata" in e ? e : { ...e, useSessionMetadata: _ }
);
export {
  Ee as a,
  re as b,
  ne as c,
  Pe as d,
  A as e,
  w as f,
  B as g,
  ae as h,
  xe as i,
  te as j,
  Ae as p,
  oe as s,
  se as t,
  _ as u
};
//# sourceMappingURL=auth-33vbZ4Rm.js.map
