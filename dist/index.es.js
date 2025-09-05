import { fetchBaseQuery as Um, createApi as Hm } from "@reduxjs/toolkit/query/react";
import { l as zm, a as Vm, S as Wm, i as Km, g as Li, t as rr, b as nr, u as or, j as Pe, C as Qm, I as Gm, c as Ym, p as Sf, d as Zt, s as Xm, e as Zm, f as Jm, h as eh, k as th, m as rh, n as nh, o as oh } from "./Countdown-CrHWwDog.js";
import { M as Q2, L as G2, N as Y2, O as X2, P as Z2, r as J2, Q as e_, D as t_, E as r_, B as n_, G as o_, F as a_, A as i_, z as s_, y as l_, v as u_, J as c_, K as d_, H as f_, x as p_, w as m_, q as h_ } from "./Countdown-CrHWwDog.js";
import { Dialog as xf, Typography as pa, Button as Of, Divider as ah, buttonClasses as es, typographyClasses as Mf, listItemTextClasses as ih, tabClasses as ts, tableCellClasses as rs, inputClasses as Ua, formHelperTextClasses as sh, formLabelClasses as lh, filledInputClasses as uh, svgIconClasses as ch, outlinedInputClasses as dh, inputBaseClasses as Ha, responsiveFontSizes as Af, createTheme as If, ThemeProvider as fh, Box as ph } from "@mui/material";
import * as ba from "react";
import kf, { useRef as mh } from "react";
import { Circle as hh, Hexagon as vh } from "@mui/icons-material";
import "formik";
import "yup";
import "@mui/x-date-pickers";
import "dayjs";
import "js-cookie";
import { generatePath as bh } from "react-router-dom";
import { Provider as yh } from "react-redux";
import "@mui/material/styles/ThemeProvider";
import { isAction as Df, createAction as pr, nanoid as Nf, formatProdErrorMessage as ni, createSelector as gh, createNextState as xs, createAsyncThunk as hl, createSlice as Gt, prepareAutoBatched as Rr, isAnyOf as ui, isFulfilled as kt, isRejectedWithValue as Os, combineReducers as Rh, isPlainObject as ns, SHOULD_AUTOBATCH as Lf, isAllOf as Fi, isRejected as Ms, isPending as Ff, isAsyncThunkAction as vl, configureStore as Eh } from "@reduxjs/toolkit";
import "@mui/material/OverridableComponent";
import "@mui/material/styles/createTypography";
import "@mui/material/styles/overrides";
import At from "react-dom";
const wh = [
  // These are the tags for the common models used throughout our system.
  // https://github.com/ocadotechnology/codeforlife-package-python/tree/main/codeforlife/user/models
  // NOTE: Don't use the "Teacher" and "Student" tags. Use "User" instead.
  "User",
  "School",
  "Class",
  "AuthFactor"
], Ch = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1 }, Ma = Ch, c2 = Ma.MODE, d2 = Ma.BASE_URL, f2 = Ma.PROD, p2 = Ma.DEV, m2 = Ma.SSR;
function h2(e, t = "session/login/") {
  return e.mutation({
    query: (r) => ({ url: t, method: "POST", body: r }),
    async onQueryStarted(r, { dispatch: n, queryFulfilled: o }) {
      try {
        await o, n(Vm());
      } catch (a) {
        console.error("Failed to call login endpoint...", a);
      }
    }
  });
}
function _h(e, t, r = "session/logout/") {
  return t.mutation({
    query: () => ({ url: r, method: "POST" }),
    async onQueryStarted(n, { dispatch: o, queryFulfilled: a }) {
      try {
        await a;
      } catch (i) {
        console.error("Failed to call logout endpoint...", i);
      } finally {
        o(zm()), o(e.util.resetApiState());
      }
    }
  });
}
function v2({
  tagTypes: e = []
} = {}) {
  const t = Um({
    baseUrl: `${Wm}/`,
    credentials: "include",
    prepareHeaders: (n, o) => {
      const { type: a, arg: i } = o, l = typeof i == "string" ? "GET" : i.method || "GET";
      if (a === "mutation" || !Km(l)) {
        const c = Li();
        c && n.set("x-csrftoken", c);
      }
      return n;
    }
  }), r = Hm({
    // https://redux-toolkit.js.org/rtk-query/usage/customizing-queries#implementing-a-custom-basequery
    baseQuery: async (n, o, a) => {
      if (o.type === "mutation" && Li() === void 0) {
        const { error: i } = await t(
          { url: "/csrf/cookie/", method: "GET" },
          o,
          {}
        );
        i !== void 0 && console.error(i), Li();
      }
      return await t(n, o, a);
    },
    tagTypes: [...wh, ...e],
    endpoints: () => ({})
  });
  return r.injectEndpoints({
    endpoints: (n) => ({
      logout: _h(r, n)
    })
  });
}
const Ph = "AuthFactor";
function b2(e) {
  return {
    listAuthFactors: e.query({
      query: (t) => ({
        url: nr(or.authFactor.list, { search: t }),
        method: "GET"
      }),
      providesTags: rr(Ph, { includeListTag: !0 })
    })
  };
}
const bl = "Class";
function y2(e) {
  return {
    retrieveClass: e.query({
      query: (t) => ({
        url: nr(or.class.detail, { url: { id: t } }),
        method: "GET"
      }),
      providesTags: rr(bl)
    }),
    listClasses: e.query({
      query: (t) => ({
        url: nr(or.class.list, { search: t }),
        method: "GET"
      }),
      providesTags: rr(bl, { includeListTag: !0 })
    })
  };
}
const qh = "School";
function g2(e) {
  return {
    retrieveSchool: e.query({
      query: (t) => ({
        url: nr(or.school.detail, { url: { id: t } }),
        method: "GET"
      }),
      providesTags: rr(qh)
    })
  };
}
const yl = "User";
function R2(e) {
  return {
    retrieveUser: e.query({
      query: (t) => ({
        url: nr(or.user.detail, { url: { id: t } }),
        method: "GET"
      }),
      providesTags: rr(yl)
    }),
    listUsers: e.query({
      query: (t) => ({
        url: nr(or.user.list, { search: t }),
        method: "GET"
      }),
      providesTags: rr(yl, { includeListTag: !0 })
    })
  };
}
function Th(e, t = {}) {
  function r(o, a, i) {
    typeof o.__ == "object" && (i = i ? { ...i, ...o.__ } : o.__);
    const l = typeof e == "string" && i ? bh(e, i) : e;
    Object.entries(o).forEach(([c, u]) => {
      if (c !== "__")
        if (u = u, typeof u == "string") {
          if (typeof l == "string" && (!a || c !== "_")) {
            let p = l + u;
            p.endsWith("/") && (p = p.slice(0, -1)), o[c] = p;
          }
        } else
          r(u, !1, i);
    });
  }
  const n = { ...t, _: typeof e == "string" ? e : "", __: e };
  return e === "" ? n._ = "/" : r(n, !0), n;
}
function Sh(e, t) {
  return e.__[t];
}
const xh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getParam: Sh,
  path: Th
}, Symbol.toStringTag, { value: "Module" }));
function E2() {
  return mh(null);
}
const w2 = ({ open: e, onClose: t }) => /* @__PURE__ */ Pe.jsxs(xf, { open: e, onClose: t, children: [
  /* @__PURE__ */ Pe.jsx(pa, { variant: "h5", textAlign: "center", children: "Where did you go? 👀" }),
  /* @__PURE__ */ Pe.jsx(pa, { textAlign: "center", children: "We noticed that you have been inactive for a while. Are you still there? For your online safety we will log you out in:" }),
  /* @__PURE__ */ Pe.jsx(
    Qm,
    {
      textAlign: "center",
      variant: "h5",
      seconds: 120,
      onEnd: () => {
        t(), alert("TODO: call logout endpoint");
      }
    }
  ),
  /* @__PURE__ */ Pe.jsx(pa, { textAlign: "center", children: "You may lose progress unless you continue or save." }),
  /* @__PURE__ */ Pe.jsx(Of, { onClick: t, autoFocus: !0, children: "Wait, I'm still here!" })
] }), Oh = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20511.91%20423.62'%3e%3cdefs%3e%3cstyle%3e.d{fill:%23f9c5db;}.e{fill:%23fff;}.f{fill:%23666;}.g{fill:%23db5d90;}.h{fill:%23afafaf;}.i{fill:%235b5a5b;}.j{opacity:.2;}%3c/style%3e%3c/defs%3e%3cg%20id='a'/%3e%3cg%20id='b'%3e%3cpath%20class='d'%20d='M442.29,190.69c-4.39-18.43-13.61-35.22-22.63-51.72-2.21-4.04-4.38-8.11-6.49-12.2-.07-.13-.15-.37-.24-.62-.09-.56-.22-1.26-.27-1.5-.35-1.67-.71-3.47-.94-5.22,.17,.84,.17-2.04,.07-3.29-.21-2.8-.49-5.71-1.13-8.45-1.27-5.43-4.12-9.99-7.23-14.49-2.25-3.27-4.6-6.48-6.59-9.92-.51-.88-.98-1.79-1.46-2.69-.01-.03-.03-.06-.04-.09-.1-.52-.3-1.36-.42-1.68,0-.08,0-.15,0-.24-.25-7.47-1.39-15.18-3.36-22.4-4.34-15.9-13.85-30.79-29.48-37.38-10.06-4.25-21.31-5.05-31.65-1.16-5.07,1.91-9.75,4.4-14.44,7.09-.67,.38-1.33,.76-2,1.14-.09-.07-.17-.13-.24-.18-.89-.7-1.77-1.4-2.66-2.09-4.9-3.81-9.64-7.47-15.34-10-12.16-5.41-25.49-7.1-38.72-7.13-6-3.36-12.68-5.63-20.27-6.29-19.81-1.71-35.07,9.1-50.05,19.98-1.84,.87-3.65,1.79-5.43,2.76-11.73-2.88-23.23-6.51-35.37-7.64-16.82-1.56-32.38,3.66-45.25,14.38-5.58,4.65-10.45,10.7-14,17.38-11.73-2.99-24.82-.3-33.89,8.54-2.85,2.78-5.27,6.15-6.98,9.75-.74,1.55-1.52,3.11-2.19,4.69-6.99,3.63-13.43,6.54-18.48,13.08-5.54,7.17-8.17,15.32-9.36,24.21-.58,4.3-.78,8.52-.87,12.85-.03,1.77-.06,3.54-.14,5.32-.05,1.17-.2,2.35-.22,3.52,0,.05,0,.07,0,.11-.02,.05-.03,.09-.05,.16-.27,.86-1.49,4.85-.87,3.73-.57,1.18-1.24,2.31-1.87,3.45-2.45,4.43-4.95,9.05-6.21,13.98-2.6,10.17-.92,20.53,1.19,30.62,1.99,9.53,5.06,19.27,9.72,28.06-.18,.57-.32,1.16-.42,1.77-2.48,14.32-4.41,28.45-1.82,42.89,2.62,14.62,11.3,25.55,22.21,35.04,2.12,1.85,4.25,3.69,6.2,5.72,.6,.63,3.12,4.22,1.03,.93,.88,1.38,1.76,2.72,2.57,4.15,3.65,6.37,7.45,12.39,12.6,17.71,5.44,5.63,12.04,12.23,19.71,14.34,1.1,.3,2.19,.49,3.27,.58,1.27,1.04,2.59,2.03,3.93,3,.49,1.1,1.04,2.17,1.63,3.23,2.77,4.92,7.75,7.89,13.06,8.76,.6,.65,1.2,1.31,1.79,1.97,3.76,4.21,7.45,8.48,11.09,12.8,1.53,1.81,3.04,3.64,4.52,5.49,.29,.36,1.27,1.64,1.56,2,.5,.66,.99,1.33,1.48,2,3.11,4.29,6.03,8.73,8.6,13.37,5.42,9.78,8.61,19.81,17.84,26.94,10.02,7.75,22.28,10.02,34.59,11.32,12.11,1.27,25.35,.72,34.91-7.83,21.04-18.81,.59-49.34-14.08-65.08-8.43-9.04-18.2-16.49-28.57-23.08,9.77-2.69,18.56-7.88,24.67-16.9,2.18-3.21,3.76-6.87,4.87-10.57,.23-.78,.41-1.57,.57-2.36,1.78-1.12,3.91-2.13,5.26-3.14,4.02-3.01,7.77-6.12,11.24-9.74,4.61-4.8,6.41-12.13,4.66-18.46,2.6-.17,5.2-.64,7.81-1.01,9.57-1.35,19.14-2.8,28.66-4.47,18.7-3.27,37.29-7.36,55.41-13.08,12.41-3.92,24.3-9.45,36.49-14.02,4.91,.32,9.79-1.21,13.52-4.49,.5-.14,.99-.29,1.49-.42,17.65-4.73,36.7,1.28,53.41-7.59,4.09-2.17,7.51-5.13,10.14-8.66,7.9-3.99,12.07-12.5,9.92-21.51Zm-161.74-110.32c.03-.22,.05-.45,.08-.71,.06,.04,.01,.32-.08,.71Zm-116.35,174.2l-.05-.28c.14,.03,.27,.05,.41,.07-.12,.07-.24,.14-.36,.21Zm217.74-50.6c0,.43,0,.86,.03,1.28-.22,0-.44,.02-.66,.03,.21-.44,.42-.87,.63-1.31ZM313.52,25.5s-.03-.02,0,0h0ZM43.06,70.85c-.27,.26-.42,.24,0,0h0Zm160.22,227.41c-.17,.09-.71,.52-1.66,1.28,.47-.68,1.21-1.3,2.08-1.89-.13,.21-.27,.41-.42,.61Z'/%3e%3cpath%20class='f'%20d='M151.43,412.81c-21.81-28.05-42.03-56.46-67.07-81.79l.29-.41c22.02,15.35,39.34,36.47,53.86,58.84,4.84,7.49,9.37,15.17,13.38,23.14l-.45,.22h0Z'/%3e%3cpath%20class='f'%20d='M137.94,258.21c17.21,15.87,21.48,40.05,4.62,57.96-8.03,8.83-18.23,15.19-28.93,20.23-1.05,.49-2.13,.96-3.3,1.43-.68,.12-1.32,.3-1.87,.36-30.97,3.76-53.28-17.65-62.97-45.27l2.16,2.23c-.95-.43-1.69-.81-2.51-1.23-14.65-7.92-28.03-20.03-34-35.9-3.7-9.79-3.97-20.93-1.03-30.81l.49,.1c-1.11,5.8-1.49,11.76-.59,17.61,3.02,21.31,20.64,37.47,39.34,46.21l.16,.07,.06,.16c2.39,6.17,5.35,12.12,9.04,17.59,3.64,5.46,8.13,10.45,13.32,14.47,10.28,7.99,24.34,11.99,36.99,9.88,14.78-6.28,30.14-15.16,38.07-29.65,5.83-11.05,4.01-24.66-2.15-35.19-2.02-3.56-4.43-6.94-7.24-9.9l.35-.36h0Z'/%3e%3cpath%20class='f'%20d='M27.46,222.17c-8.91-6.16-15.79-14.98-20.61-24.63-15.83-30.94-2.67-67.45,23.43-88.04l.37,.33c-3.06,3.58-7.03,8.52-9.64,12.33-19.27,27.09-22.14,59.5-3.07,87.55,2.88,4.34,6.14,8.46,9.86,12.09l-.33,.37h0Z'/%3e%3cpath%20class='f'%20d='M22.29,119.02c-3.79-12.15-4.93-27.75,2.01-39.02,2.02-3.31,5.16-6.1,8.75-7.72,2.72-1.24,5.28-2.55,7.75-4.04,4.52-2.89,8.94-6.32,11.66-10.9,.44-1.01,1.09-1.78,1.7-2.61,7.74-9.88,20.64-13.83,30.48-4.47l-.27,.42c-7.43-4.82-16.18-4.26-22.64,1.9-2.02,1.85-3.81,4.01-5.19,6.35-.5,1.23-1.54,2.88-2.46,4.08-2.88,3.82-6.63,6.9-10.64,9.45-5.14,3.49-11.89,4.55-15.37,10.16-6.63,10.14-6.39,24.65-5.28,36.34l-.49,.07h0Z'/%3e%3cpath%20class='f'%20d='M101.06,97.94c-16.06-4.22-25.06-17.92-19.42-34.18,3.35-9.68,8.2-19.07,14.86-26.9,7.87-9.22,18.31-16.7,30.21-19.57,7.99-1.66,16.54-.12,23.9,2.21,5.9,1.98,11.57,4.42,16.77,7.71l-.21,.45c-5.53-2.37-11.31-4.21-17.17-5.54-5.85-1.35-11.9-2.06-17.86-1.54-19.17,2.75-34.69,19.81-42.92,36.44-1.4,2.91-3.37,7.3-4.37,10.37-2.09,6.36-1.5,13.63,2.44,19.16,3.38,4.92,8.47,8.6,13.93,10.92l-.17,.47h0Z'/%3e%3cpath%20class='f'%20d='M222.86,8.58c-20.62-.37-39.77,10.41-49.37,28.44-4.75,8.27-7.95,17.74-6.82,27.2,1.23,9.55,6.94,18.16,14.57,23.91,4.25,4.33,10.56,7.19,16.69,6.2,.72-.1,2.24-.35,2.97-.45,3.74,5.24,4.49,13.15-.44,17.83-.56,.59-1.23,1.06-1.82,1.58l-.34-.37c.51-.57,1.08-1.09,1.54-1.7,3.55-4.25,2.88-10.56-.25-14.86l.33,.11c-7.4,2.48-16.1-.49-21.36-5.5-13.67-9.24-20.29-25.92-15.53-41.88,4.54-15.12,14.77-28.97,29.08-36.04,9.5-4.65,20.36-6.44,30.84-4.94l-.09,.49h0Z'/%3e%3cpath%20class='f'%20d='M208.82,29.72c3.06-6.17,8.58-11.41,15.39-13.1,2.3-.67,4.72-.73,7.11-.68l-.77,.11c16.73-7,45.75-16.61,61.69-4.02,7.33,5.02,15.97,7.39,23.17,12.95,4.68,3.47,8.18,8.46,10.46,13.78,1.22,3.08,2.03,5.92,2.74,9.13,.71,3.17,1.3,7.92,1.74,11.16,.83,5.5,1.47,11.05,2.98,16.39,.04,.11,.06,.12,.08,.18l.03,.08v.04l.12,.23c.58,1.26,.96,2.72,1.27,3.99,1.87,8.86,3.6,21.66-2.41,29.43-1.54,1.93-4.03,3.42-6.55,3.93-.42,.12-.86,.19-1.3,.35-16.56,5.08-47.28,23.42-63.2,11.85-6.73-4.79-10.14-12.9-11.28-20.77-.78-6.24-.79-12.78,2.13-18.55l2.06,2.61c-2.85,.53-5.61,.37-8.39-.26-8.19-1.76-13.79-8.51-16.56-16.05l.46-.2c.8,1.65,1.73,3.49,2.78,5.01,3.07,4.79,7.98,8.53,13.64,9.53,2.69,.52,5.51,.46,8.14-.19-1.47,2.7-1.91,5.86-2.05,8.95-.25,8.56,1.87,17.79,7.81,24.18,3.98,4.42,9.75,6.23,15.6,5.58,11.62-1.15,22.5-6.08,33.19-10.54,5.41-2.24,10.71-4.85,16.43-6.3,1.33-.34,2.51-1.12,3.38-2.19,4.89-6.41,2.84-20.94,.33-28.21-2.14-5.93-2.56-12.25-3.53-18.42-.41-3.14-.94-7.72-1.61-10.81-1.55-7.71-4.88-15.51-11.3-20.37-4.54-3.65-10.02-5.9-15.15-8.62-3.91-1.96-7.52-4.61-11.12-7.04-11.31-6.02-26.41-3-38.37-.24-5.68,1.43-11.3,3.16-16.76,5.24-2.22-.14-4.47-.2-6.64,.34-6.51,1.35-11.99,6.1-15.28,11.76l-.44-.23h0Z'/%3e%3cpath%20class='f'%20d='M311.48,27.06c7.57-7.87,18.84-16.99,30.49-16.05,19.31,2.51,43.75,14.12,48.92,34.68,2.45,10.77,3.61,23.1-1.2,33.42l.56-2.4c.1,1.11,.37,2.25,.78,3.27,.7,1.67,1.64,2.83,3.15,3.59,2.07,.77,4.18,1.3,6.27,2.21,10.93,4.24,17.68,15.08,15.89,26.8-1.25,10.43-9.13,19.74-18.77,22.96l-.21-.45c2.92-1.43,5.63-3.28,7.95-5.55,9.36-8.81,11.67-25.51,1.81-34.8-2.35-2.21-5.2-3.83-8.23-4.98-3.02-1.32-6.58-1.49-9.14-3.79-2.58-2.27-3.91-5.6-4.27-8.97-.02-.13,0-.14,.06-.25,3.97-9.4,2.6-20.19,.56-29.93-3.84-15.21-18.86-24.21-32.65-29.45-4.77-1.63-9.71-3.37-14.79-3.43-5.09,.17-9.93,2.26-14.35,4.67-4.45,2.49-8.65,5.48-12.5,8.81l-.34-.37h0Z'/%3e%3cpath%20class='f'%20d='M359.05,101.57c13.08,1.53,24.07,11.47,26.11,24.71,.67,3.96,.78,8.16,1.35,12.13,1.07,7.82,2.37,15.62,4.23,23.29,1.25,6.09,3.42,11.85,4.34,17.9,2.43,14.92-1.95,31.82-15.54,40.1-1.26,.74-2.86,1.69-4.15,2.37-11.26,5.92-28.2,16.39-39.67,21.84-3.69,1.7-7.55,3.38-11.68,3.84l-.09-.49c3.87-.87,7.44-2.86,10.92-4.83,13.81-8.27,26.97-17.62,40.96-25.61,10.81-6.29,15.41-18.47,14.87-30.57-.02-8.12-3.05-15.71-4.56-23.57-2.06-9.87-3.46-19.9-3.93-29.97,.25-15.5-8.16-26.76-23.25-30.64l.09-.49h0Z'/%3e%3cpath%20class='f'%20d='M408.01,132.23c6.68-3.19,14.64-.21,18.26,6.23,1.17,1.85,2.09,4.26,2.89,6.27,1.48,3.8,2.98,8.11,4.41,11.95,2.12,6.22,4.76,13.86,6.71,20.1,1.85,5.6,3.4,11.49,3.76,17.45,.28,4.71,.02,10.32-2.47,14.72-2.31,3.88-4.61,7.65-7.83,11.03-8.16,9.08-21.38,12.19-33.04,10.72l-.02-.5c8.38-.47,16.91-2.31,23.87-7.15,6.1-4.2,10.11-10.66,13.43-17.15,2.27-6.27,1.15-13.21-.15-19.59-2.42-9.3-6.87-23.16-9.55-32.51-1.22-3.7-2.83-10.58-4.58-14.01-2.71-5.92-9.27-8.91-15.53-7.09l-.16-.47h0Z'/%3e%3cpath%20class='f'%20d='M221.65,273.51c2.26,9.89-2.86,20.36-10.84,26.3-8.02,5.94-18.74,7.75-28.08,4.56l-.02-.5c2.02-.15,4.73-.37,6.68-.71,13.4-1.78,25.65-10.16,30.09-23.24,.76-2.09,1.38-4.26,1.67-6.45l.5,.04h0Z'/%3e%3cpath%20class='f'%20d='M200.07,300.72c3.54,4.74,5.27,12.19,.36,16.88-1.33,1.29-2.95,2.41-4.44,3.5-8.96,6.27-19.78,11.25-31.01,10.18-8.27-.2-18.35-1.37-22.86-9.37-1.38-2.44-2.16-5.13-2.46-7.88l.47-.17c2.37,6.69,7.42,11.59,14.64,12.33,3.36,.49,6.8,.35,10.25,.37,3.47,.14,6.78-.08,10.12-.96,7.46-1.85,14.5-5.27,21.05-9.25,.7-.44,1.46-.88,2.1-1.42,4.09-3.36,2.96-9.61,1.32-14l.46-.2h0Z'/%3e%3cpath%20class='f'%20d='M176.12,326.86c24.94,11.54,50.15,41.47,49.33,70.03l-.49,.09c-4.51-21.44-17.93-39.76-32.96-55.19-5.11-5.13-10.46-10.07-16.17-14.53l.3-.4h0Z'/%3e%3cpath%20class='f'%20d='M137.61,234.31c-12.87-5.26-28.97-12.85-41.88-7.04-1.34,.62-3.31,1.96-4.59,2.75-11.69,7.35-22.74,15.2-34.81,22.2l-.34-.37c5.77-5.42,11.8-10.57,18.04-15.44,4.67-3.67,9.46-7.19,14.4-10.49,1.66-1.08,3.28-2.22,5.1-3.14,3.65-1.77,7.74-2.47,11.74-2.33,12.02,.6,23.14,6.48,32.65,13.46l-.31,.4h0Z'/%3e%3cpath%20class='f'%20d='M90.49,123.12c6.33,13.05,6.79,31.3-5.1,41.5-10.92,8.88-24.57,16.5-39.18,15.65-4.18-.4-8.44-1.75-11.45-4.52l.24-.44c6.92,3.68,15.23,2.4,22.36-.05,7.28-2.54,14.04-6.47,20.3-10.98,3.08-2.25,6.3-4.46,8.52-7.63,4.53-6.27,5.59-14.37,5.32-21.95-.14-3.85-.61-7.72-1.49-11.46l.48-.13h0Z'/%3e%3cpath%20class='f'%20d='M76.79,174.22c3.7,1.29,6.73,4.02,9.14,7.02,7.21,9.2,8.66,21.88,5.65,32.96l-.13-1.32c.12,.93,.23,1.85,.32,2.79,.25,2.86,.4,5.72,.17,8.61l-.48,.15c-1.04-3.12-2.49-7.38-3.46-10.47,1.28-13.81-1.06-29.39-11.54-39.35l.31-.39h0Z'/%3e%3cpath%20class='f'%20d='M161.1,151.64c18.17-8.77,42.86,4.98,40,26.29l-.49,.11c-1.08-4.19-2.72-8.24-5.15-11.81-6.15-9.08-17.16-13.47-27.83-14.07-2.16-.15-4.34-.19-6.48-.02l-.06-.5h0Z'/%3e%3cpath%20class='f'%20d='M195.26,197.53c9.79-9.84,24.22-14.13,37.94-13.48,1.11,.1,3.32,.32,4.42,.46,7.16,1.13,14.35,2.25,21.07,5.18,1.06,.51,2.08,1.12,2.81,2.1,1.44,1.78,1.05,4.71-.91,5.97l-4.67-6.12c4.01-2.82,8.54-4.73,13.23-6.02,4.5-1.22,9.21-1.75,13.86-1.45l.08,.49c-6.59,1.14-13.01,3.31-18.85,6.56-1.93,1.09-3.84,2.29-5.53,3.67l-.52-.68c-.19,.12-.03,.28-.13,.16-.82-.7-2-.99-3.03-1.34-3.93-1.17-8-1.9-12.05-2.61-5.43-.94-10.83-1.83-16.31-1.67-10.9,.26-21.85,3.41-31.11,9.19l-.29-.41h0Z'/%3e%3cpath%20class='f'%20d='M280.33,149.53c21.07,10.79,41.84,14.23,63.49,3.14,4.86-2.38,9.69-5.07,14.86-7l.29,.41-8.8,6.36c-8.7,6.56-19.03,11.36-30.03,11.98-14.62,.82-29.2-4.98-40.14-14.52l.34-.37h0Z'/%3e%3cpath%20class='f'%20d='M181.26,213.67c9.93,6.09,14.18,19.54,8.98,30.15-2.37,5.24-6.32,9.39-10.53,13.13-.7,.55-2.55,1.99-3.24,2.52-.76,.57-2.62,1.68-3.41,2.24-8.4,4.91-18.22,8-27.95,7.45l-.08-.49c7.4-1.54,14.6-4.36,21.17-8.09,2.82-1.6,5.82-3.63,8.32-5.7,6.91-5.72,13.87-13.25,13.91-22.75,.06-6.69-3.05-13.21-7.53-18.09l.35-.36h0Z'/%3e%3cpath%20class='f'%20d='M167.22,124.02c16.67-8.3,39.6-10.49,56.5-1.46,1.18,.63,2.62,1.58,3.71,2.33,6.81,5.05,13.4,10.22,19.4,16.43l-.27,.42-9.05-5.51c-3.22-1.95-10.39-6.51-13.52-8.33-1.47-.86-3.13-1.66-4.7-2.3-13.13-5.17-27.76-4.86-41.56-2.99-3.49,.48-6.97,1.08-10.39,1.89l-.13-.48h0Z'/%3e%3cpath%20class='g'%20d='M340.25,209.52c-25.34,51.85-74.22,96.17-129.16,52.06-5.91-4.68-11.34-9.88-16.4-15.37,16.15,14.34,36.02,27.42,58.32,26.95,29.45-1,49.96-26.56,62.8-50.65,3.26-6.21,6.29-12.71,8.64-19.29,1.48-4.46,6.3-6.88,10.76-5.4,4.81,1.56,7.2,7.13,5.03,11.69h0Z'/%3e%3cpath%20class='g'%20d='M450.9,222.82c-3.86,14.01-12.5,26.41-23.37,35.88-8.87,7.57-19.71,13.2-30.75,16.3-38.57,10.56-80.42-1.74-116.27-16.32,22.35,6.65,45.15,11.56,68.41,12.15,1.99,0,6.67-.07,8.57-.09,1.81-.07,6.59-.45,8.5-.58l5.59-.75c17.07-2.47,33.77-9.13,45.66-21.69,7.23-7.71,12.77-17.29,14.99-27.65,.57-5.45,5.76-9.39,11.19-8.31,5.12,.99,8.48,5.94,7.49,11.06h0Z'/%3e%3cg%3e%3cpath%20class='e'%20d='M328.57,220.35c-.65,0-1.3-.03-1.94-.08-16.21-1.28-28.15-18.25-26.61-37.84,1.47-18.67,14.76-33.29,30.26-33.29,.65,0,1.3,.03,1.94,.08,16.21,1.28,28.15,18.25,26.61,37.84-1.47,18.67-14.76,33.29-30.26,33.29Z'/%3e%3cpath%20class='h'%20d='M330.28,147.64v3h0c.6,0,1.22,.02,1.82,.07,15.39,1.21,26.71,17.46,25.23,36.23-1.41,17.89-14.04,31.91-28.76,31.91-.61,0-1.22-.02-1.83-.07-15.39-1.21-26.71-17.46-25.23-36.23,1.41-17.89,14.04-31.91,28.76-31.91v-3m0,0c-16.21,0-30.21,15.05-31.75,34.67-1.61,20.45,10.92,38.11,27.98,39.46,.69,.05,1.38,.08,2.06,.08,16.21,0,30.21-15.05,31.75-34.67,1.61-20.45-10.92-38.11-27.98-39.46-.69-.05-1.38-.08-2.06-.08h0Z'/%3e%3c/g%3e%3cellipse%20class='i'%20cx='334.82'%20cy='199.39'%20rx='13.2'%20ry='9.39'%20transform='translate(39%20453.06)%20rotate(-71.39)'/%3e%3cg%3e%3cpath%20class='e'%20d='M446.3,231.11c-1.21,0-2.43-.1-3.63-.29-15.09-2.39-25.01-19.17-22.12-37.41,2.62-16.55,15.08-29.03,28.97-29.03,1.21,0,2.43,.1,3.63,.29,15.09,2.39,25.01,19.17,22.12,37.41-2.62,16.55-15.08,29.03-28.97,29.03Z'/%3e%3cpath%20class='h'%20d='M449.52,165.88h0c1.13,0,2.27,.09,3.39,.27,14.27,2.26,23.63,18.27,20.87,35.7-2.51,15.83-14.33,27.77-27.49,27.77-1.13,0-2.27-.09-3.39-.27-14.27-2.26-23.63-18.27-20.87-35.7,2.51-15.83,14.33-27.76,27.49-27.77m0-3c-14.48,0-27.67,12.76-30.45,30.3-3.02,19.09,7.44,36.61,23.37,39.13,1.29,.2,2.58,.3,3.86,.3,14.48,0,27.67-12.76,30.45-30.3,3.02-19.09-7.44-36.61-23.37-39.13-1.29-.2-2.58-.3-3.86-.3h0Z'/%3e%3c/g%3e%3cellipse%20class='i'%20cx='446.51'%20cy='209.6'%20rx='12.44'%20ry='8.84'%20transform='translate(78.46%20537.99)%20rotate(-66.89)'/%3e%3c/g%3e%3cg%20id='c'%3e%3cg%20class='j'%3e%3cpolygon%20class='e'%20points='329.42%20118.98%20367.62%20124.71%20301.63%20213.52%20283.04%20209.6%20267.19%20191.08%20329.42%20118.98'/%3e%3c/g%3e%3cg%20class='j'%3e%3cpolygon%20class='e'%20points='265.79%20162.67%20265.79%20110.28%20280.5%20109.04%20306.96%20113.1%20265.79%20162.67'/%3e%3c/g%3e%3cg%20class='j'%3e%3cpolygon%20class='e'%20points='469.91%20148.92%20504.3%20154.03%20444.89%20233.05%20428.16%20229.56%20413.89%20213.08%20469.91%20148.92'/%3e%3c/g%3e%3cg%3e%3cpath%20d='M510.06,159.47c-1.72-6.02-6.83-10.58-13.04-11.65l-69.11-14.88c-.07-.01-.14-.03-.21-.04-.22-.04-.87-.14-1.8-.2,.43-.03,.68-.02,.68-.02l-63.81-15.39s.09,.05,.14,.08c-.13-.02-.26-.06-.39-.08l-81.21-13.19c-.51-.08-3-.45-6.09-.21-.4-.09-.8-.14-1.22-.12-3.73,.15-92.16,3.94-158.51,31.15-1.6,.65-2.74,2.09-3.03,3.79-.17,.98-3.97,24.18,5.96,42.8,2.22,4.17,5,7.83,8.25,10.88,.7,.66,1.58,1.1,2.53,1.28,1.15,.21,2.92,.46,4.89,.46,3.22,0,6.94-.67,9.21-3.26,1.08-1.23,2.68-3.9,1.36-7.97-.85-2.63-3.66-4.03-6.29-3.18-1.97,.64-3.27,2.41-3.43,4.37-.72,.04-1.62,.02-2.51-.06-1.99-2.08-3.73-4.5-5.18-7.22-6.52-12.22-5.86-27.59-5.26-33.71,49.43-19.59,112.16-26.35,139.12-28.46-.19,.94-.32,1.95-.32,3.07v66.73c0,.12,0,.24,.01,.36,.06,.88,1.75,21.62,20.3,29.43,11.43,4.81,43.5,6.74,68.38,7.52,.28,0,.55,.01,.82,.01,11.7,0,21.98-7.74,25.19-19.07l.23-.84c3.05-11.22,3.54-40.64,3.62-51.05,1.2-3.01,3.1-4.63,5.93-6.52,7.68-5.14,18.12-2.75,22.92,5.14,.42,.69,.82,1.4,1.21,2.11v53.78c0,.1,0,.21,.01,.31,.06,.79,1.55,19.46,18.05,26.51,10.37,4.43,37.17,6.13,57.82,6.78,.25,0,.49,.01,.74,.01,10.42,0,19.58-6.98,22.43-17.2l.2-.74c3.21-11.98,3.23-47.01,3.23-49.25,.02-.85,.04-5.71-1.84-12.26Zm-140.69-12.46s0,.09,0,.13c.02,11.06-.54,41.98-3.28,52.06l-.21,.75c-2.03,7.17-8.61,12.03-16.08,11.78-33.48-1.04-57.11-3.49-64.81-6.74-12.31-5.19-14.03-19.14-14.19-20.79V117.69c0-1.77,.62-2.3,.88-2.52,1.65-1.41,5.77-1.54,8.03-1.19l81.22,13.19c3.23,.53,5.9,2.83,6.78,5.87,1.83,6.29,1.67,13.9,1.67,13.97Zm133.58,24.48c0,.06,0,.12,0,.19,.01,9.98-.49,37.88-2.93,46.98l-.18,.67c-1.8,6.47-7.66,10.83-14.26,10.63-27.7-.87-47.6-3.08-54.59-6.07-10.96-4.68-12.48-17.3-12.62-18.78v-59.99c0-1.64,.57-2.12,.81-2.33,1.44-1.23,4.99-1.36,6.97-1.06l69.08,14.87c.07,.02,.14,.03,.21,.04,2.86,.47,5.22,2.55,6.01,5.3,1.6,5.58,1.49,9.53,1.49,9.55Z'/%3e%3cpath%20d='M431.58,118.93c2.88-2.73,6.23-4.98,9.71-6.86,10.9-6.05,23.5-5.13,33.14,2.88,1.88,2.01,4.26,4.78,6,7.27,1.74,2.53,3.65,5.26,4.1,8.34,.03,.36,.57,.4,.66,.06,1.36-5.31-1.24-10.84-3.68-15.43-1-1.64-1.88-3.43-3.32-4.86-3.2-3.28-7.29-6.04-11.99-7.63-13.51-4.78-29.72,2.7-35.13,15.74l-.04,.11c-.15,.32,.31,.63,.55,.37Z'/%3e%3cpath%20d='M297.47,90.2c2.88-2.73,6.23-4.98,9.71-6.86,10.9-6.05,23.5-5.13,33.14,2.88,1.88,2.01,4.26,4.78,6,7.27,1.74,2.53,3.65,5.26,4.1,8.34,.03,.36,.57,.4,.66,.06,1.36-5.31-1.24-10.84-3.68-15.43-1-1.64-1.88-3.43-3.32-4.86-3.2-3.28-7.29-6.04-11.99-7.63-13.51-4.78-29.72,2.7-35.13,15.74l-.04,.11c-.15,.32,.31,.63,.55,.37Z'/%3e%3c/g%3e%3cpath%20class='d'%20d='M246.7,141.54s-45.89-33.79-87.25-15.71c-41.36,18.08-12.08,29.13-12.08,29.13l39-19.62,60.33,6.21Z'/%3e%3c/g%3e%3c/svg%3e", C2 = ({ open: e, onClose: t }) => /* @__PURE__ */ Pe.jsxs(xf, { open: e, onClose: t, maxWidth: "sm", children: [
  /* @__PURE__ */ Pe.jsx(Gm, { src: Oh, alt: "brain", maxWidth: 100, marginY: 3 }),
  /* @__PURE__ */ Pe.jsx(pa, { variant: "h5", textAlign: "center", children: "Time for a break?" }),
  /* @__PURE__ */ Pe.jsx(pa, { textAlign: "center", children: "You have been using the Code for Life website for a while. Remember to take regular screen breaks to recharge those brain cells!" }),
  /* @__PURE__ */ Pe.jsx(Of, { onClick: t, autoFocus: !0, children: "Continue" })
] }), _2 = (e) => (t) => (r) => {
  const n = t(r);
  return Df(r) && r.type === "session/logout" && Ym(), n;
}, Mh = {
  styleOverrides: {
    root: {
      borderRadius: "0px !important",
      margin: "0px !important",
      width: "100%"
    }
  }
}, Ah = {
  styleOverrides: {
    root: {
      width: "100%"
    }
  }
};
function Ih({
  elements: e,
  dividerProps: t
}) {
  return e.map((r, n) => /* @__PURE__ */ Pe.jsxs(Pe.Fragment, { children: [
    r,
    n !== e.length - 1 ? /* @__PURE__ */ Pe.jsx(ah, { ...t }) : void 0
  ] }));
}
function Bf(e, t, r = "root", n = Hf) {
  if (n !== void 0) {
    const o = n[t];
    if (o !== void 0 && "styleOverrides" in o && typeof o.styleOverrides == "object" && r in o.styleOverrides) {
      const a = o.styleOverrides[r];
      switch (typeof a) {
        case "function":
          return a({ ownerState: e });
        case "object":
          return a;
      }
    }
  }
  return {};
}
function Aa(e) {
  return e.className?.split(" ") ?? [];
}
function ge(e, t) {
  const r = Array.isArray(e) ? e : Aa(e);
  return t.every((n) => r.includes(n));
}
function jf(e, t) {
  return (Array.isArray(e) ? e : Aa(e)).map((n) => n.match(t)).filter((n) => n !== null).map((n) => n);
}
const kh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getClassNames: Aa,
  getStyleOverrides: Bf,
  includesClassNames: ge,
  insertDividerBetweenElements: Ih,
  matchClassNames: jf
}, Symbol.toStringTag, { value: "Module" })), $f = {
  fontFamily: '"Inter"',
  fontSize: "14px !important",
  fontWeight: 600,
  margin: 0,
  marginBottom: "12px",
  letterSpacing: 0
}, We = {
  h1: {
    color: "#383b3b",
    fontFamily: '"SpaceGrotesk"',
    fontWeight: 500,
    fontSize: "60px",
    // lineHeight: '60px',
    marginBottom: "24px",
    letterSpacing: 0
  },
  h2: {
    color: "#383b3b",
    fontFamily: '"SpaceGrotesk"',
    fontWeight: 500,
    fontSize: "55px",
    // lineHeight: '55px',
    marginBottom: "22px",
    letterSpacing: 0
  },
  h3: {
    color: "#383b3b",
    fontFamily: '"SpaceGrotesk"',
    fontWeight: 500,
    fontSize: "45px",
    // lineHeight: '47px',
    marginBottom: "20px",
    letterSpacing: 0
  },
  h4: {
    color: "#383b3b",
    fontFamily: '"SpaceGrotesk"',
    fontWeight: 500,
    fontSize: "30px",
    // lineHeight: '38px',
    marginBottom: "18px",
    letterSpacing: 0
  },
  h5: {
    color: "#383b3b",
    fontFamily: '"SpaceGrotesk"',
    fontWeight: 500,
    fontSize: "25px",
    // lineHeight: '32px',
    marginBottom: "16px",
    letterSpacing: 0
  },
  h6: {
    color: "#383b3b",
    fontFamily: '"SpaceGrotesk"',
    fontWeight: 500,
    fontSize: "21px",
    // lineHeight: '26px',
    marginBottom: "10px",
    letterSpacing: 0
  },
  body1: {
    color: "#383b3b",
    fontFamily: '"Inter"',
    fontWeight: 500,
    fontSize: "1.07rem !important",
    // lineHeight: '22px',
    marginBottom: "16px",
    letterSpacing: 0
  },
  body2: {
    color: "#383b3b",
    fontFamily: '"Inter"',
    fontWeight: 500,
    fontSize: "0.92rem !important",
    // lineHeight: '20px',
    marginBottom: "14px",
    letterSpacing: 0
  },
  button: {
    fontFamily: '"Inter"',
    fontSize: "15px",
    fontWeight: 600,
    letterSpacing: 0
  }
}, Dh = {
  defaultProps: {
    variant: "contained",
    size: "medium"
  },
  styleOverrides: {
    root: ({ ownerState: e }) => ({
      color: "black",
      textTransform: "none",
      textAlign: "center",
      borderRadius: "0px",
      padding: "11px 12px",
      height: "42px",
      whiteSpace: "nowrap",
      width: "fit-content",
      minWidth: "150px",
      boxShadow: "none",
      ...e.size === "small" && {
        height: "27px",
        padding: "4.5px 9px",
        letterSpacing: "0"
      },
      ...ge(e, ["body"]) && {
        marginBottom: We.body1?.marginBottom
      }
    }),
    contained: ({ ownerState: e }) => ({
      backgroundColor: "#ffd23b",
      "&:hover": {
        backgroundColor: "#ffc709",
        boxShadow: [
          "0px 6px 10px 0px rgba(0, 0, 0, 0.14)",
          "0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
          "0px 3px 5px 0px rgba(0, 0, 0, 0.2);"
        ].join()
      },
      [`&.${es.disabled}`]: {
        backgroundColor: "#ffe382",
        color: "#7A5F01"
      },
      ...ge(e, ["alert"]) && {
        color: "white",
        backgroundColor: "#ff0000",
        "&:hover": {
          backgroundColor: "#df0531"
        },
        [`&.${es.disabled}`]: {
          backgroundColor: "#E76A6A",
          color: "white"
        }
      }
    }),
    outlined: {
      border: "2px solid #eab502",
      "&:hover": {
        border: "2px solid #eab502",
        backgroundColor: "transparent",
        textDecoration: "underline"
      }
    }
  }
};
function ma(e, t = !1) {
  let r = `${8 * e}px`;
  return t && (r += " !important"), r;
}
const Nh = {
  styleOverrides: {
    root: {
      padding: ma(2)
    }
  }
}, Lh = {
  styleOverrides: {
    root: {
      paddingLeft: "0px",
      marginLeft: "-2px"
    }
  }
};
function Uf(e) {
  const t = {}, r = Aa(e);
  return r.some((n) => n.startsWith("flex-")) && (t.display = "flex", ge(r, ["flex-center"]) ? (t.justifyContent = "center", t.alignItems = "center") : ge(r, ["flex-center-x"]) ? (t.justifyContent = "center", t.alignItems = "start") : ge(r, ["flex-center-y"]) ? (t.justifyContent = "start", t.alignItems = "center") : ge(r, ["flex-end"]) ? (t.justifyContent = "end", t.alignItems = "end") : ge(r, ["flex-end-x"]) ? (t.justifyContent = "end", t.alignItems = "start") : ge(r, ["flex-end-y"]) && (t.justifyContent = "start", t.alignItems = "end")), t;
}
function Fh(e) {
  let t = {};
  const r = Aa(e);
  return ge(r, ["nowrap-ellipsis"]) && (t.whiteSpace = "nowrap", t.overflow = "hidden", t.textOverflow = "ellipsis"), ["h1", "h2", "h3", "h4", "h5", "h6", "body1", "body2"].filter((n) => n in We).forEach((n) => {
    const o = We[n];
    ge(r, [n]) && (t = { ...t, ...o }), jf(r, new RegExp(`^${n}-(\\w+)$`)).forEach(
      (a) => {
        const i = a[1];
        i in o && (t[i] = o[i]);
      }
    );
  }), t;
}
const Bh = {
  defaultProps: {
    maxWidth: "lg"
  },
  styleOverrides: {
    root: ({ ownerState: e }) => ({
      ...Uf(e),
      paddingLeft: ma(2, !0),
      paddingRight: ma(2, !0),
      padding: ma(7)
    })
  }
}, jh = {
  defaultProps: {
    maxWidth: "sm"
  },
  styleOverrides: {
    paper: {
      borderRadius: "0px !important",
      padding: "24px",
      alignItems: "center"
    }
  }
}, $h = {
  styleOverrides: {
    root: {
      [`.${Mf.root}`]: {
        ...$f,
        marginBottom: 0
      },
      margin: 0
    }
  }
}, Uh = {
  styleOverrides: {
    root: {
      ...$f
    }
  }
}, Hh = {
  defaultProps: {
    disableEqualOverflow: !0
    // padding: 0 // TODO: normalize padding.
  },
  styleOverrides: {
    root: ({ ownerState: e }) => ({
      ...Uf(e)
    })
  }
}, zh = {
  styleOverrides: {
    root: {
      backgroundColor: "white",
      marginBottom: 0,
      color: We.body1?.color
    }
  }
}, Vh = {
  defaultProps: {
    underline: "none",
    // BUG: if not set, MUI fails to run.
    color: "inherit"
  },
  styleOverrides: {
    root: ({ ownerState: e }) => ({
      cursor: "pointer",
      ...ge(e, ["no-decor"]) ? {
        ":hover": {
          textDecoration: "underline"
        }
      } : {
        textDecoration: "underline",
        ":hover": {
          fontWeight: "bold"
        }
      },
      ...ge(e, ["back-to"]) && {
        textDecoration: "none",
        display: "inline-block",
        marginBottom: We.body1?.marginBottom,
        ":hover": {
          fontWeight: "bold",
          textDecoration: "underline"
        },
        ":before": {
          content: '"< Back to "'
        }
      }
    })
  }
}, Wh = {
  styleOverrides: {
    root: {
      paddingTop: 0,
      paddingBottom: 0
    }
  }
}, Kh = {
  styleOverrides: {
    root: ({ ownerState: e }) => ({
      ...ge(e, ["last"]) && {
        [`.${ih.primary}`]: {
          marginBottom: 0
        }
      }
    })
  }
}, Qh = {
  styleOverrides: {
    paper: {
      borderRadius: 0
    },
    list: {
      padding: 0
    }
  }
}, Gh = {
  styleOverrides: {
    root: ({ ownerState: e }) => ({
      ...ge(e, ["header"]) && {
        pointerEvents: "none",
        fontWeight: "bold"
      }
    })
  }
}, Yh = {
  defaultProps: {
    color: "black"
  },
  styleOverrides: {
    root: {
      borderRadius: "0px"
    }
  }
}, Xh = {
  styleOverrides: {
    root: {
      textTransform: "none",
      fontSize: "16px",
      fontWeight: 600,
      minWidth: "150px",
      border: "2px solid white",
      [`&.${ts.selected}`]: {
        color: Sf[300],
        backgroundColor: "white",
        cursor: "default"
      },
      [`:not(.${ts.selected})`]: {
        color: "white",
        ":hover": {
          textDecoration: "underline"
        }
      }
    }
  }
}, Zh = {
  styleOverrides: {
    root: ({ ownerState: e }) => ({
      borderStyle: "hidden",
      overflowX: "auto",
      [`.${rs.root}`]: {
        border: "2px solid white"
      },
      ...ge(e, ["text"]) && {
        borderStyle: "unset",
        display: "block",
        [`.${rs.root}`]: {
          border: "1px solid #DDD"
        }
      },
      ...ge(e, ["body"]) && {
        marginBottom: We.body1?.marginBottom
      }
    })
  }
}, Jh = {
  styleOverrides: {
    root: ({ ownerState: e }) => ({
      backgroundColor: "#F1ECEC",
      ...ge(e, ["text"]) && {
        backgroundColor: "white"
      }
    })
  }
}, ev = {
  styleOverrides: {
    root: ({ ownerState: e }) => ({
      backgroundColor: "#6E7171",
      ...ge(e, ["light"]) && {
        backgroundColor: "#9A9C9E"
      },
      [`.${Mf.root}`]: {
        color: "white",
        fontWeight: 600,
        marginBottom: 0
      },
      [`.${rs.head}`]: {
        color: "white",
        fontWeight: 600
      }
    })
  }
}, tv = {
  defaultProps: {
    variant: "scrollable",
    scrollButtons: !0,
    allowScrollButtonsMobile: !0
  },
  styleOverrides: {
    root: ({ ownerState: e }) => ({
      ...e !== void 0 && // NOTE: this is a bug with MUI
      [void 0, "horizontal"].includes(e.orientation) && {
        [`.${ts.root}:not(:last-of-type)`]: {
          marginRight: "30px"
        }
      }
    }),
    indicator: {
      display: "none"
    }
  }
}, rv = {
  defaultProps: {
    size: "small",
    variant: "filled"
  },
  styleOverrides: {
    root: ({ ownerState: e }) => ({
      width: "100%",
      backgroundColor: "transparent",
      [`& > .${Ha.root}`]: {
        ...e.disabled ? {
          [`.${Ha.disabled}`]: {
            color: `${We.body1.color} !important`,
            "-webkit-text-fill-color": "unset"
          },
          border: "0px !important",
          borderRadius: "0px !important",
          // @ts-expect-error value is assignable
          backgroundColor: `${Zt.info.main} !important`
        } : {
          border: "1px solid black !important",
          borderRadius: "0px !important",
          backgroundColor: "white !important"
        }
      },
      [`& > .${Ha.root}.${Ha.error}`]: {
        // @ts-expect-error value is assignable
        border: `1px solid ${Zt.error.main} !important`
      },
      [`& .${dh.root}.${Ua.focused} > fieldset`]: {
        borderColor: "black !important"
      },
      [`.${ch.root}`]: {
        color: `${We.body1.color} !important`
      },
      [`.${uh.root}::after`]: {
        borderColor: `${We.body1.color} !important`
      },
      [`.${lh.root}`]: {
        color: `${We.body1.color} !important`
      },
      [`.${sh.root}`]: {
        fontSize: "12px !important"
      },
      ...e.multiline === !0 && {
        ...(ge(e, ["resize"]) || ge(e, ["resize-both"])) && {
          width: "auto",
          [`.${Ua.inputMultiline}`]: {
            resize: "both"
          }
        },
        ...ge(e, ["resize-horizontal"]) && {
          width: "auto",
          [`.${Ua.inputMultiline}`]: {
            resize: "horizontal"
          }
        },
        ...ge(e, ["resize-vertical"]) && {
          [`.${Ua.inputMultiline}`]: {
            resize: "vertical"
          }
        }
      }
    })
  }
}, nv = {
  styleOverrides: {
    root: {
      padding: "15px 0px !important"
    }
  }
}, ov = {
  styleOverrides: {
    root: ({ ownerState: e }) => ({
      ...Fh(e)
    })
  }
}, Hf = {
  MuiAccordion: Mh,
  MuiAutocomplete: Ah,
  MuiButton: Dh,
  MuiCardActions: Nh,
  MuiCheckbox: Lh,
  MuiContainer: Bh,
  MuiDialog: jh,
  MuiFormControlLabel: $h,
  MuiFormHelperText: Uh,
  MuiGrid2: Hh,
  MuiInputBase: zh,
  MuiLink: Vh,
  MuiList: Wh,
  MuiListItemText: Kh,
  MuiMenu: Qh,
  MuiMenuItem: Gh,
  MuiSelect: Yh,
  MuiTab: Xh,
  MuiTable: Zh,
  MuiTableBody: Jh,
  MuiTableHead: ev,
  MuiTabs: tv,
  MuiTextField: rv,
  MuiToolbar: nv,
  MuiTypography: ov
}, P2 = ({
  options: e = zf,
  withShapes: t = !1,
  userType: r,
  bgcolor: n,
  children: o,
  sx: a,
  ...i
}) => {
  let l, c, u;
  switch (r) {
    case "teacher":
      n = n ?? Sf[400], l = "tertiary", c = "secondary", u = Zt.primary.contrastText;
      break;
    case "student":
      n = n ?? Zm[500], l = "secondary", c = "primary", u = Zt.tertiary.contrastText;
      break;
    case "independent":
      n = n ?? Xm[500], l = "primary", c = "tertiary", u = Zt.secondary.contrastText;
      break;
  }
  const p = {
    display: { xs: "none", md: "block" },
    fontSize: "180px",
    position: "absolute"
  }, f = {
    color: u,
    textDecorationColor: u
  };
  function s(h, y, P, d = "root") {
    return {
      // Get the original styles.
      ...Bf(
        h,
        P,
        d,
        e.components
      ),
      // Override styles unless the class name 'no-override' is set.
      ...!ge(h, ["no-override"]) && y
    };
  }
  const m = Af(
    If({
      ...e,
      components: {
        ...e.components,
        MuiTypography: {
          ...e.components?.MuiTypography,
          styleOverrides: {
            ...e.components?.MuiTypography?.styleOverrides,
            root: ({ ownerState: h }) => s(
              h,
              {
                ...f
              },
              "MuiTypography"
            )
          }
        },
        MuiFormHelperText: {
          ...e.components?.MuiFormHelperText,
          styleOverrides: {
            ...e.components?.MuiFormHelperText?.styleOverrides,
            root: ({ ownerState: h }) => s(
              h,
              {
                ...f
              },
              "MuiFormHelperText"
            )
          }
        },
        MuiLink: {
          ...e.components?.MuiLink,
          styleOverrides: {
            ...e.components?.MuiLink?.styleOverrides,
            root: ({ ownerState: h }) => s(
              h,
              {
                ...f
              },
              "MuiLink"
            )
          }
        },
        MuiButton: {
          ...e.components?.MuiButton,
          styleOverrides: {
            ...e.components?.MuiButton?.styleOverrides,
            contained: ({ ownerState: h }) => s(
              h,
              {
                ...r === "independent" && {
                  backgroundColor: "white",
                  "&:hover": {
                    backgroundColor: "#f6f5f5",
                    boxShadow: [
                      "0px 6px 10px 0px rgba(0, 0, 0, 0.14)",
                      "0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
                      "0px 3px 5px 0px rgba(0, 0, 0, 0.2);"
                    ].join()
                  },
                  [`&.${es.disabled}`]: {
                    backgroundColor: "white",
                    color: u
                  }
                }
              },
              "MuiButton",
              "contained"
            ),
            outlined: ({ ownerState: h }) => s(
              h,
              {
                ...f,
                border: `2px solid ${u}`,
                "&:hover": {
                  border: `2px solid ${u}`,
                  backgroundColor: "transparent",
                  textDecoration: "underline"
                }
              },
              "MuiButton",
              "outlined"
            )
          }
        },
        MuiCheckbox: {
          ...e.components?.MuiCheckbox,
          styleOverrides: {
            ...e.components?.MuiCheckbox?.styleOverrides,
            root: ({ ownerState: h }) => s(
              h,
              {
                color: `${u} !important`
              },
              "MuiCheckbox"
            )
          }
        },
        MuiSvgIcon: {
          ...e.components?.MuiSvgIcon,
          styleOverrides: {
            ...e.components?.MuiSvgIcon?.styleOverrides,
            root: ({ ownerState: h }) => s(
              h,
              {
                "&.checkbox-error": {
                  color: `${u} !important`
                }
              },
              "MuiSvgIcon"
            )
          }
        }
      }
    })
  );
  return /* @__PURE__ */ Pe.jsx(fh, { theme: m, children: /* @__PURE__ */ Pe.jsxs(
    ph,
    {
      sx: {
        ...a,
        ...t && {
          paddingY: { xs: 2, sm: 3, md: 5 },
          paddingX: { xs: 2, sm: 5, md: 10 },
          marginX: { md: "90px" }
        },
        bgcolor: n,
        alignItems: "center",
        position: "relative"
      },
      ...i,
      children: [
        t && /* @__PURE__ */ Pe.jsxs(Pe.Fragment, { children: [
          /* @__PURE__ */ Pe.jsx(
            hh,
            {
              color: l,
              sx: {
                ...p,
                top: "5%",
                left: "0%",
                transform: "translate(-60%, 0%)"
              }
            }
          ),
          /* @__PURE__ */ Pe.jsx(
            vh,
            {
              color: c,
              sx: {
                ...p,
                bottom: "5%",
                right: "0%",
                transform: "translate(60%, 0%) rotate(90deg)"
              }
            }
          )
        ] }),
        o
      ]
    }
  ) });
}, zf = {
  palette: Zt,
  components: Hf,
  spacing: ma,
  typography: We
}, q2 = Af(If(zf));
var As = Symbol.for("immer-nothing"), ha = Symbol.for("immer-draftable"), Ie = Symbol.for("immer-state"), Vf = process.env.NODE_ENV !== "production" ? [
  // All error codes, starting by 0:
  function(e) {
    return `The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`;
  },
  function(e) {
    return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`;
  },
  "This object has been frozen and should not be mutated",
  function(e) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + e;
  },
  "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  "Immer forbids circular references",
  "The first or second argument to `produce` must be a function",
  "The third argument to `produce` must be a function or undefined",
  "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  "First argument to `finishDraft` must be a draft returned by `createDraft`",
  function(e) {
    return `'current' expects a draft, got: ${e}`;
  },
  "Object.defineProperty() cannot be used on an Immer draft",
  "Object.setPrototypeOf() cannot be used on an Immer draft",
  "Immer only supports deleting array indices",
  "Immer only supports setting array indices and the 'length' property",
  function(e) {
    return `'original' expects a draft, got: ${e}`;
  }
  // Note: if more errors are added, the errorOffset in Patches.ts should be increased
  // See Patches.ts for additional errors
] : [];
function qe(e, ...t) {
  if (process.env.NODE_ENV !== "production") {
    const r = Vf[e], n = typeof r == "function" ? r.apply(null, t) : r;
    throw new Error(`[Immer] ${n}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var Dt = Object.getPrototypeOf;
function dt(e) {
  return !!e && !!e[Ie];
}
function ft(e) {
  return e ? Wf(e) || Array.isArray(e) || !!e[ha] || !!e.constructor?.[ha] || Ia(e) || ka(e) : !1;
}
var av = Object.prototype.constructor.toString();
function Wf(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = Dt(e);
  if (t === null)
    return !0;
  const r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return r === Object ? !0 : typeof r == "function" && Function.toString.call(r) === av;
}
function iv(e) {
  return dt(e) || qe(15, e), e[Ie].base_;
}
function ya(e, t) {
  Nt(e) === 0 ? Reflect.ownKeys(e).forEach((r) => {
    t(r, e[r], e);
  }) : e.forEach((r, n) => t(n, r, e));
}
function Nt(e) {
  const t = e[Ie];
  return t ? t.type_ : Array.isArray(e) ? 1 : Ia(e) ? 2 : ka(e) ? 3 : 0;
}
function ga(e, t) {
  return Nt(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Bi(e, t) {
  return Nt(e) === 2 ? e.get(t) : e[t];
}
function Kf(e, t, r) {
  const n = Nt(e);
  n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : e[t] = r;
}
function sv(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Ia(e) {
  return e instanceof Map;
}
function ka(e) {
  return e instanceof Set;
}
function Ot(e) {
  return e.copy_ || e.base_;
}
function os(e, t) {
  if (Ia(e))
    return new Map(e);
  if (ka(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  const r = Wf(e);
  if (t === !0 || t === "class_only" && !r) {
    const n = Object.getOwnPropertyDescriptors(e);
    delete n[Ie];
    let o = Reflect.ownKeys(n);
    for (let a = 0; a < o.length; a++) {
      const i = o[a], l = n[i];
      l.writable === !1 && (l.writable = !0, l.configurable = !0), (l.get || l.set) && (n[i] = {
        configurable: !0,
        writable: !0,
        // could live with !!desc.set as well here...
        enumerable: l.enumerable,
        value: e[i]
      });
    }
    return Object.create(Dt(e), n);
  } else {
    const n = Dt(e);
    if (n !== null && r)
      return { ...e };
    const o = Object.create(n);
    return Object.assign(o, e);
  }
}
function Is(e, t = !1) {
  return _i(e) || dt(e) || !ft(e) || (Nt(e) > 1 && (e.set = e.add = e.clear = e.delete = lv), Object.freeze(e), t && Object.entries(e).forEach(([r, n]) => Is(n, !0))), e;
}
function lv() {
  qe(2);
}
function _i(e) {
  return Object.isFrozen(e);
}
var as = {};
function Lt(e) {
  const t = as[e];
  return t || qe(0, e), t;
}
function uv(e, t) {
  as[e] || (as[e] = t);
}
var Ra;
function Qf() {
  return Ra;
}
function cv(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  };
}
function gl(e, t) {
  t && (Lt("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function is(e) {
  ss(e), e.drafts_.forEach(dv), e.drafts_ = null;
}
function ss(e) {
  e === Ra && (Ra = e.parent_);
}
function Rl(e) {
  return Ra = cv(Ra, e);
}
function dv(e) {
  const t = e[Ie];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function El(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  return e !== void 0 && e !== r ? (r[Ie].modified_ && (is(t), qe(4)), ft(e) && (e = ci(t, e), t.parent_ || di(t, e)), t.patches_ && Lt("Patches").generateReplacementPatches_(
    r[Ie].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = ci(t, r, []), is(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== As ? e : void 0;
}
function ci(e, t, r) {
  if (_i(t))
    return t;
  const n = t[Ie];
  if (!n)
    return ya(
      t,
      (o, a) => wl(e, n, t, o, a, r)
    ), t;
  if (n.scope_ !== e)
    return t;
  if (!n.modified_)
    return di(e, n.base_, !0), n.base_;
  if (!n.finalized_) {
    n.finalized_ = !0, n.scope_.unfinalizedDrafts_--;
    const o = n.copy_;
    let a = o, i = !1;
    n.type_ === 3 && (a = new Set(o), o.clear(), i = !0), ya(
      a,
      (l, c) => wl(e, n, o, l, c, r, i)
    ), di(e, o, !1), r && e.patches_ && Lt("Patches").generatePatches_(
      n,
      r,
      e.patches_,
      e.inversePatches_
    );
  }
  return n.copy_;
}
function wl(e, t, r, n, o, a, i) {
  if (process.env.NODE_ENV !== "production" && o === r && qe(5), dt(o)) {
    const l = a && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !ga(t.assigned_, n) ? a.concat(n) : void 0, c = ci(e, o, l);
    if (Kf(r, n, c), dt(c))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else i && r.add(o);
  if (ft(o) && !_i(o)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    ci(e, o), (!t || !t.scope_.parent_) && typeof n != "symbol" && Object.prototype.propertyIsEnumerable.call(r, n) && di(e, o);
  }
}
function di(e, t, r = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Is(t, r);
}
function fv(e, t) {
  const r = Array.isArray(e), n = {
    type_: r ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : Qf(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: t,
    // The base state.
    base_: e,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: !1
  };
  let o = n, a = ks;
  r && (o = [n], a = Ea);
  const { revoke: i, proxy: l } = Proxy.revocable(o, a);
  return n.draft_ = l, n.revoke_ = i, l;
}
var ks = {
  get(e, t) {
    if (t === Ie)
      return e;
    const r = Ot(e);
    if (!ga(r, t))
      return pv(e, r, t);
    const n = r[t];
    return e.finalized_ || !ft(n) ? n : n === ji(e.base_, t) ? ($i(e), e.copy_[t] = us(n, e)) : n;
  },
  has(e, t) {
    return t in Ot(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(Ot(e));
  },
  set(e, t, r) {
    const n = Gf(Ot(e), t);
    if (n?.set)
      return n.set.call(e.draft_, r), !0;
    if (!e.modified_) {
      const o = ji(Ot(e), t), a = o?.[Ie];
      if (a && a.base_ === r)
        return e.copy_[t] = r, e.assigned_[t] = !1, !0;
      if (sv(r, o) && (r !== void 0 || ga(e.base_, t)))
        return !0;
      $i(e), ls(e);
    }
    return e.copy_[t] === r && // special case: handle new props with value 'undefined'
    (r !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(r) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = r, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return ji(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, $i(e), ls(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const r = Ot(e), n = Reflect.getOwnPropertyDescriptor(r, t);
    return n && {
      writable: !0,
      configurable: e.type_ !== 1 || t !== "length",
      enumerable: n.enumerable,
      value: r[t]
    };
  },
  defineProperty() {
    qe(11);
  },
  getPrototypeOf(e) {
    return Dt(e.base_);
  },
  setPrototypeOf() {
    qe(12);
  }
}, Ea = {};
ya(ks, (e, t) => {
  Ea[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
Ea.deleteProperty = function(e, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && qe(13), Ea.set.call(this, e, t, void 0);
};
Ea.set = function(e, t, r) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && qe(14), ks.set.call(this, e[0], t, r, e[0]);
};
function ji(e, t) {
  const r = e[Ie];
  return (r ? Ot(r) : e)[t];
}
function pv(e, t, r) {
  const n = Gf(t, r);
  return n ? "value" in n ? n.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    n.get?.call(e.draft_)
  ) : void 0;
}
function Gf(e, t) {
  if (!(t in e))
    return;
  let r = Dt(e);
  for (; r; ) {
    const n = Object.getOwnPropertyDescriptor(r, t);
    if (n)
      return n;
    r = Dt(r);
  }
}
function ls(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && ls(e.parent_));
}
function $i(e) {
  e.copy_ || (e.copy_ = os(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var mv = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (t, r, n) => {
      if (typeof t == "function" && typeof r != "function") {
        const a = r;
        r = t;
        const i = this;
        return function(c = a, ...u) {
          return i.produce(c, (p) => r.call(this, p, ...u));
        };
      }
      typeof r != "function" && qe(6), n !== void 0 && typeof n != "function" && qe(7);
      let o;
      if (ft(t)) {
        const a = Rl(this), i = us(t, void 0);
        let l = !0;
        try {
          o = r(i), l = !1;
        } finally {
          l ? is(a) : ss(a);
        }
        return gl(a, n), El(o, a);
      } else if (!t || typeof t != "object") {
        if (o = r(t), o === void 0 && (o = t), o === As && (o = void 0), this.autoFreeze_ && Is(o, !0), n) {
          const a = [], i = [];
          Lt("Patches").generateReplacementPatches_(t, o, a, i), n(a, i);
        }
        return o;
      } else
        qe(1, t);
    }, this.produceWithPatches = (t, r) => {
      if (typeof t == "function")
        return (i, ...l) => this.produceWithPatches(i, (c) => t(c, ...l));
      let n, o;
      return [this.produce(t, r, (i, l) => {
        n = i, o = l;
      }), n, o];
    }, typeof e?.autoFreeze == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof e?.useStrictShallowCopy == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    ft(e) || qe(8), dt(e) && (e = hv(e));
    const t = Rl(this), r = us(e, void 0);
    return r[Ie].isManual_ = !0, ss(t), r;
  }
  finishDraft(e, t) {
    const r = e && e[Ie];
    (!r || !r.isManual_) && qe(9);
    const { scope_: n } = r;
    return gl(n, t), El(void 0, n);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, t) {
    let r;
    for (r = t.length - 1; r >= 0; r--) {
      const o = t[r];
      if (o.path.length === 0 && o.op === "replace") {
        e = o.value;
        break;
      }
    }
    r > -1 && (t = t.slice(r + 1));
    const n = Lt("Patches").applyPatches_;
    return dt(e) ? n(e, t) : this.produce(
      e,
      (o) => n(o, t)
    );
  }
};
function us(e, t) {
  const r = Ia(e) ? Lt("MapSet").proxyMap_(e, t) : ka(e) ? Lt("MapSet").proxySet_(e, t) : fv(e, t);
  return (t ? t.scope_ : Qf()).drafts_.push(r), r;
}
function hv(e) {
  return dt(e) || qe(10, e), Yf(e);
}
function Yf(e) {
  if (!ft(e) || _i(e))
    return e;
  const t = e[Ie];
  let r;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, r = os(e, t.scope_.immer_.useStrictShallowCopy_);
  } else
    r = os(e, !0);
  return ya(r, (n, o) => {
    Kf(r, n, Yf(o));
  }), t && (t.finalized_ = !1), r;
}
function vv() {
  process.env.NODE_ENV !== "production" && Vf.push(
    'Sets cannot have "replace" patches.',
    function(s) {
      return "Unsupported patch operation: " + s;
    },
    function(s) {
      return "Cannot apply patch, path doesn't resolve: " + s;
    },
    "Patching reserved attributes like __proto__, prototype and constructor is not allowed"
  );
  const t = "replace", r = "add", n = "remove";
  function o(s, m, h, y) {
    switch (s.type_) {
      case 0:
      case 2:
        return i(
          s,
          m,
          h,
          y
        );
      case 1:
        return a(s, m, h, y);
      case 3:
        return l(
          s,
          m,
          h,
          y
        );
    }
  }
  function a(s, m, h, y) {
    let { base_: P, assigned_: d } = s, E = s.copy_;
    E.length < P.length && ([P, E] = [E, P], [h, y] = [y, h]);
    for (let g = 0; g < P.length; g++)
      if (d[g] && E[g] !== P[g]) {
        const R = m.concat([g]);
        h.push({
          op: t,
          path: R,
          // Need to maybe clone it, as it can in fact be the original value
          // due to the base/copy inversion at the start of this function
          value: f(E[g])
        }), y.push({
          op: t,
          path: R,
          value: f(P[g])
        });
      }
    for (let g = P.length; g < E.length; g++) {
      const R = m.concat([g]);
      h.push({
        op: r,
        path: R,
        // Need to maybe clone it, as it can in fact be the original value
        // due to the base/copy inversion at the start of this function
        value: f(E[g])
      });
    }
    for (let g = E.length - 1; P.length <= g; --g) {
      const R = m.concat([g]);
      y.push({
        op: n,
        path: R
      });
    }
  }
  function i(s, m, h, y) {
    const { base_: P, copy_: d } = s;
    ya(s.assigned_, (E, g) => {
      const R = Bi(P, E), q = Bi(d, E), v = g ? ga(P, E) ? t : r : n;
      if (R === q && v === t)
        return;
      const b = m.concat(E);
      h.push(v === n ? { op: v, path: b } : { op: v, path: b, value: q }), y.push(
        v === r ? { op: n, path: b } : v === n ? { op: r, path: b, value: f(R) } : { op: t, path: b, value: f(R) }
      );
    });
  }
  function l(s, m, h, y) {
    let { base_: P, copy_: d } = s, E = 0;
    P.forEach((g) => {
      if (!d.has(g)) {
        const R = m.concat([E]);
        h.push({
          op: n,
          path: R,
          value: g
        }), y.unshift({
          op: r,
          path: R,
          value: g
        });
      }
      E++;
    }), E = 0, d.forEach((g) => {
      if (!P.has(g)) {
        const R = m.concat([E]);
        h.push({
          op: r,
          path: R,
          value: g
        }), y.unshift({
          op: n,
          path: R,
          value: g
        });
      }
      E++;
    });
  }
  function c(s, m, h, y) {
    h.push({
      op: t,
      path: [],
      value: m === As ? void 0 : m
    }), y.push({
      op: t,
      path: [],
      value: s
    });
  }
  function u(s, m) {
    return m.forEach((h) => {
      const { path: y, op: P } = h;
      let d = s;
      for (let q = 0; q < y.length - 1; q++) {
        const v = Nt(d);
        let b = y[q];
        typeof b != "string" && typeof b != "number" && (b = "" + b), (v === 0 || v === 1) && (b === "__proto__" || b === "constructor") && qe(19), typeof d == "function" && b === "prototype" && qe(19), d = Bi(d, b), typeof d != "object" && qe(18, y.join("/"));
      }
      const E = Nt(d), g = p(h.value), R = y[y.length - 1];
      switch (P) {
        case t:
          switch (E) {
            case 2:
              return d.set(R, g);
            case 3:
              qe(16);
            default:
              return d[R] = g;
          }
        case r:
          switch (E) {
            case 1:
              return R === "-" ? d.push(g) : d.splice(R, 0, g);
            case 2:
              return d.set(R, g);
            case 3:
              return d.add(g);
            default:
              return d[R] = g;
          }
        case n:
          switch (E) {
            case 1:
              return d.splice(R, 1);
            case 2:
              return d.delete(R);
            case 3:
              return d.delete(h.value);
            default:
              return delete d[R];
          }
        default:
          qe(17, P);
      }
    }), s;
  }
  function p(s) {
    if (!ft(s))
      return s;
    if (Array.isArray(s))
      return s.map(p);
    if (Ia(s))
      return new Map(
        Array.from(s.entries()).map(([h, y]) => [h, p(y)])
      );
    if (ka(s))
      return new Set(Array.from(s).map(p));
    const m = Object.create(Dt(s));
    for (const h in s)
      m[h] = p(s[h]);
    return ga(s, ha) && (m[ha] = s[ha]), m;
  }
  function f(s) {
    return dt(s) ? p(s) : s;
  }
  uv("Patches", {
    applyPatches_: u,
    generatePatches_: o,
    generateReplacementPatches_: c
  });
}
var Fe = new mv();
Fe.produce;
var Xf = Fe.produceWithPatches.bind(
  Fe
);
Fe.setAutoFreeze.bind(Fe);
Fe.setUseStrictShallowCopy.bind(Fe);
var Cl = Fe.applyPatches.bind(Fe);
Fe.createDraft.bind(Fe);
Fe.finishDraft.bind(Fe);
var bv = class extends Error {
  /**
   * The schema issues.
   */
  issues;
  /**
   * Creates a schema error with useful information.
   *
   * @param issues The schema issues.
   */
  constructor(e) {
    super(e[0].message), this.name = "SchemaError", this.issues = e;
  }
}, yv = (e, t, r) => {
  if (t.length === 1 && t[0] === r) {
    let n = !1;
    try {
      const o = {};
      e(o) === o && (n = !0);
    } catch {
    }
    if (n) {
      let o;
      try {
        throw new Error();
      } catch (a) {
        ({ stack: o } = a);
      }
      console.warn(
        `The result function returned its own inputs without modification. e.g
\`createSelector([state => state.todos], todos => todos)\`
This could lead to inefficient memoization and unnecessary re-renders.
Ensure transformation logic is in the result function, and extraction logic is in the input selectors.`,
        { stack: o }
      );
    }
  }
}, gv = (e, t, r) => {
  const { memoize: n, memoizeOptions: o } = t, { inputSelectorResults: a, inputSelectorResultsCopy: i } = e, l = n(() => ({}), ...o);
  if (!(l.apply(null, a) === l.apply(null, i))) {
    let u;
    try {
      throw new Error();
    } catch (p) {
      ({ stack: u } = p);
    }
    console.warn(
      `An input selector returned a different result when passed same arguments.
This means your output selector will likely run more frequently than intended.
Avoid returning a new reference inside your input selector, e.g.
\`createSelector([state => state.todos.map(todo => todo.id)], todoIds => todoIds.length)\``,
      {
        arguments: r,
        firstInputs: a,
        secondInputs: i,
        stack: u
      }
    );
  }
}, Rv = {
  inputStabilityCheck: "once",
  identityFunctionCheck: "once"
};
function Ev(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function")
    throw new TypeError(t);
}
function wv(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object")
    throw new TypeError(t);
}
function Cv(e, t = "expected all items to be functions, instead received the following types: ") {
  if (!e.every((r) => typeof r == "function")) {
    const r = e.map(
      (n) => typeof n == "function" ? `function ${n.name || "unnamed"}()` : typeof n
    ).join(", ");
    throw new TypeError(`${t}[${r}]`);
  }
}
var _l = (e) => Array.isArray(e) ? e : [e];
function _v(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return Cv(
    t,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), t;
}
function Pl(e, t) {
  const r = [], { length: n } = e;
  for (let o = 0; o < n; o++)
    r.push(e[o].apply(null, t));
  return r;
}
var Pv = (e, t) => {
  const { identityFunctionCheck: r, inputStabilityCheck: n } = {
    ...Rv,
    ...t
  };
  return {
    identityFunctionCheck: {
      shouldRun: r === "always" || r === "once" && e,
      run: yv
    },
    inputStabilityCheck: {
      shouldRun: n === "always" || n === "once" && e,
      run: gv
    }
  };
}, qv = class {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value;
  }
}, Tv = typeof WeakRef < "u" ? WeakRef : qv, Sv = 0, ql = 1;
function za() {
  return {
    s: Sv,
    v: void 0,
    o: null,
    p: null
  };
}
function fi(e, t = {}) {
  let r = za();
  const { resultEqualityCheck: n } = t;
  let o, a = 0;
  function i() {
    let l = r;
    const { length: c } = arguments;
    for (let f = 0, s = c; f < s; f++) {
      const m = arguments[f];
      if (typeof m == "function" || typeof m == "object" && m !== null) {
        let h = l.o;
        h === null && (l.o = h = /* @__PURE__ */ new WeakMap());
        const y = h.get(m);
        y === void 0 ? (l = za(), h.set(m, l)) : l = y;
      } else {
        let h = l.p;
        h === null && (l.p = h = /* @__PURE__ */ new Map());
        const y = h.get(m);
        y === void 0 ? (l = za(), h.set(m, l)) : l = y;
      }
    }
    const u = l;
    let p;
    if (l.s === ql)
      p = l.v;
    else if (p = e.apply(null, arguments), a++, n) {
      const f = o?.deref?.() ?? o;
      f != null && n(f, p) && (p = f, a !== 0 && a--), o = typeof p == "object" && p !== null || typeof p == "function" ? new Tv(p) : p;
    }
    return u.s = ql, u.v = p, p;
  }
  return i.clearCache = () => {
    r = za(), i.resetResultsCount();
  }, i.resultsCount = () => a, i.resetResultsCount = () => {
    a = 0;
  }, i;
}
function xv(e, ...t) {
  const r = typeof e == "function" ? {
    memoize: e,
    memoizeOptions: t
  } : e, n = (...o) => {
    let a = 0, i = 0, l, c = {}, u = o.pop();
    typeof u == "object" && (c = u, u = o.pop()), Ev(
      u,
      `createSelector expects an output function after the inputs, but received: [${typeof u}]`
    );
    const p = {
      ...r,
      ...c
    }, {
      memoize: f,
      memoizeOptions: s = [],
      argsMemoize: m = fi,
      argsMemoizeOptions: h = [],
      devModeChecks: y = {}
    } = p, P = _l(s), d = _l(h), E = _v(o), g = f(function() {
      return a++, u.apply(
        null,
        arguments
      );
    }, ...P);
    let R = !0;
    const q = m(function() {
      i++;
      const b = Pl(
        E,
        arguments
      );
      if (l = g.apply(null, b), process.env.NODE_ENV !== "production") {
        const { identityFunctionCheck: _, inputStabilityCheck: M } = Pv(R, y);
        if (_.shouldRun && _.run(
          u,
          b,
          l
        ), M.shouldRun) {
          const O = Pl(
            E,
            arguments
          );
          M.run(
            { inputSelectorResults: b, inputSelectorResultsCopy: O },
            { memoize: f, memoizeOptions: P },
            arguments
          );
        }
        R && (R = !1);
      }
      return l;
    }, ...d);
    return Object.assign(q, {
      resultFunc: u,
      memoizedResultFunc: g,
      dependencies: E,
      dependencyRecomputations: () => i,
      resetDependencyRecomputations: () => {
        i = 0;
      },
      lastResult: () => l,
      recomputations: () => a,
      resetRecomputations: () => {
        a = 0;
      },
      memoize: f,
      argsMemoize: m
    });
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var Ov = /* @__PURE__ */ xv(fi), Mv = Object.assign(
  (e, t = Ov) => {
    wv(
      e,
      `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`
    );
    const r = Object.keys(e), n = r.map(
      (a) => e[a]
    );
    return t(
      n,
      (...a) => a.reduce((i, l, c) => (i[r[c]] = l, i), {})
    );
  },
  { withTypes: () => Mv }
);
function Tl(e) {
  return {
    status: e,
    isUninitialized: e === "uninitialized",
    isLoading: e === "pending",
    isSuccess: e === "fulfilled",
    isError: e === "rejected"
    /* rejected */
  };
}
var Sl = ns;
function Zf(e, t) {
  if (e === t || !(Sl(e) && Sl(t) || Array.isArray(e) && Array.isArray(t)))
    return t;
  const r = Object.keys(t), n = Object.keys(e);
  let o = r.length === n.length;
  const a = Array.isArray(t) ? [] : {};
  for (const i of r)
    a[i] = Zf(e[i], t[i]), o && (o = e[i] === a[i]);
  return o ? e : a;
}
function Jt(e) {
  let t = 0;
  for (const r in e)
    t++;
  return t;
}
var xl = (e) => [].concat(...e);
function Av() {
  return typeof document > "u" ? !0 : document.visibilityState !== "hidden";
}
function pi(e) {
  return e != null;
}
function Iv() {
  return typeof navigator > "u" || navigator.onLine === void 0 ? !0 : navigator.onLine;
}
function kv(e, t, r) {
  return e.has(t) ? e.get(t) : e.set(t, r).get(t);
}
var Ol = class {
  constructor(e, t = void 0) {
    this.value = e, this.meta = t;
  }
}, Pi = /* @__PURE__ */ pr("__rtkq/focused"), Ds = /* @__PURE__ */ pr("__rtkq/unfocused"), qi = /* @__PURE__ */ pr("__rtkq/online"), Ns = /* @__PURE__ */ pr("__rtkq/offline"), Ui = !1;
function Dv(e, t) {
  function r() {
    const n = () => e(Pi()), o = () => e(Ds()), a = () => e(qi()), i = () => e(Ns()), l = () => {
      window.document.visibilityState === "visible" ? n() : o();
    };
    return Ui || typeof window < "u" && window.addEventListener && (window.addEventListener("visibilitychange", l, !1), window.addEventListener("focus", n, !1), window.addEventListener("online", a, !1), window.addEventListener("offline", i, !1), Ui = !0), () => {
      window.removeEventListener("focus", n), window.removeEventListener("visibilitychange", l), window.removeEventListener("online", a), window.removeEventListener("offline", i), Ui = !1;
    };
  }
  return r();
}
function Ti(e) {
  return e.type === "query";
}
function Nv(e) {
  return e.type === "mutation";
}
function Da(e) {
  return e.type === "infinitequery";
}
function mi(e) {
  return Ti(e) || Da(e);
}
function Ls(e, t, r, n, o, a) {
  return Lv(e) ? e(t, r, n, o).filter(pi).map(cs).map(a) : Array.isArray(e) ? e.map(cs).map(a) : [];
}
function Lv(e) {
  return typeof e == "function";
}
function cs(e) {
  return typeof e == "string" ? {
    type: e
  } : e;
}
function Fv(e, t) {
  return e.catch(t);
}
var wa = Symbol("forceQueryFn"), ds = (e) => typeof e[wa] == "function";
function Bv({
  serializeQueryArgs: e,
  queryThunk: t,
  infiniteQueryThunk: r,
  mutationThunk: n,
  api: o,
  context: a
}) {
  const i = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), {
    unsubscribeQueryResult: c,
    removeMutationResult: u,
    updateSubscriptionOptions: p
  } = o.internalActions;
  return {
    buildInitiateQuery: d,
    buildInitiateInfiniteQuery: E,
    buildInitiateMutation: g,
    getRunningQueryThunk: f,
    getRunningMutationThunk: s,
    getRunningQueriesThunk: m,
    getRunningMutationsThunk: h
  };
  function f(R, q) {
    return (v) => {
      const b = a.endpointDefinitions[R], _ = e({
        queryArgs: q,
        endpointDefinition: b,
        endpointName: R
      });
      return i.get(v)?.[_];
    };
  }
  function s(R, q) {
    return (v) => l.get(v)?.[q];
  }
  function m() {
    return (R) => Object.values(i.get(R) || {}).filter(pi);
  }
  function h() {
    return (R) => Object.values(l.get(R) || {}).filter(pi);
  }
  function y(R) {
    if (process.env.NODE_ENV !== "production") {
      if (y.triggered) return;
      const q = R(o.internalActions.internal_getRTKQSubscriptions());
      if (y.triggered = !0, typeof q != "object" || typeof q?.type == "string")
        throw new Error(process.env.NODE_ENV === "production" ? ni(34) : `Warning: Middleware for RTK-Query API at reducerPath "${o.reducerPath}" has not been added to the store.
You must add the middleware for RTK-Query to function correctly!`);
    }
  }
  function P(R, q) {
    const v = (b, {
      subscribe: _ = !0,
      forceRefetch: M,
      subscriptionOptions: O,
      [wa]: x,
      ...A
    } = {}) => (T, I) => {
      const L = e({
        queryArgs: b,
        endpointDefinition: q,
        endpointName: R
      });
      let V;
      const z = {
        ...A,
        type: "query",
        subscribe: _,
        forceRefetch: M,
        subscriptionOptions: O,
        endpointName: R,
        originalArgs: b,
        queryCacheKey: L,
        [wa]: x
      };
      if (Ti(q))
        V = t(z);
      else {
        const {
          direction: pe,
          initialPageParam: ee
        } = A;
        V = r({
          ...z,
          // Supply these even if undefined. This helps with a field existence
          // check over in `buildSlice.ts`
          direction: pe,
          initialPageParam: ee
        });
      }
      const K = o.endpoints[R].select(b), W = T(V), re = K(I());
      y(T);
      const {
        requestId: le,
        abort: Re
      } = W, H = re.requestId !== le, ue = i.get(T)?.[L], Q = () => K(I()), ae = Object.assign(x ? (
        // a query has been forced (upsertQueryData)
        // -> we want to resolve it once data has been written with the data that will be written
        W.then(Q)
      ) : H && !ue ? (
        // a query has been skipped due to a condition and we do not have any currently running query
        // -> we want to resolve it immediately with the current data
        Promise.resolve(re)
      ) : (
        // query just started or one is already in flight
        // -> wait for the running query, then resolve with data from after that
        Promise.all([ue, W]).then(Q)
      ), {
        arg: b,
        requestId: le,
        subscriptionOptions: O,
        queryCacheKey: L,
        abort: Re,
        async unwrap() {
          const pe = await ae;
          if (pe.isError)
            throw pe.error;
          return pe.data;
        },
        refetch: () => T(v(b, {
          subscribe: !1,
          forceRefetch: !0
        })),
        unsubscribe() {
          _ && T(c({
            queryCacheKey: L,
            requestId: le
          }));
        },
        updateSubscriptionOptions(pe) {
          ae.subscriptionOptions = pe, T(p({
            endpointName: R,
            requestId: le,
            queryCacheKey: L,
            options: pe
          }));
        }
      });
      if (!ue && !H && !x) {
        const pe = kv(i, T, {});
        pe[L] = ae, ae.then(() => {
          delete pe[L], Jt(pe) || i.delete(T);
        });
      }
      return ae;
    };
    return v;
  }
  function d(R, q) {
    return P(R, q);
  }
  function E(R, q) {
    return P(R, q);
  }
  function g(R) {
    return (q, {
      track: v = !0,
      fixedCacheKey: b
    } = {}) => (_, M) => {
      const O = n({
        type: "mutation",
        endpointName: R,
        originalArgs: q,
        track: v,
        fixedCacheKey: b
      }), x = _(O);
      y(_);
      const {
        requestId: A,
        abort: T,
        unwrap: I
      } = x, L = Fv(x.unwrap().then((W) => ({
        data: W
      })), (W) => ({
        error: W
      })), V = () => {
        _(u({
          requestId: A,
          fixedCacheKey: b
        }));
      }, z = Object.assign(L, {
        arg: x.arg,
        requestId: A,
        abort: T,
        unwrap: I,
        reset: V
      }), K = l.get(_) || {};
      return l.set(_, K), K[A] = z, z.then(() => {
        delete K[A], Jt(K) || l.delete(_);
      }), b && (K[b] = z, z.then(() => {
        K[b] === z && (delete K[b], Jt(K) || l.delete(_));
      })), z;
    };
  }
}
var Jf = class extends bv {
  constructor(e, t, r, n) {
    super(e), this.value = t, this.schemaName = r, this._bqMeta = n;
  }
};
async function qt(e, t, r, n) {
  const o = await e["~standard"].validate(t);
  if (o.issues)
    throw new Jf(o.issues, t, r, n);
  return o.value;
}
function jv(e) {
  return e;
}
var Er = (e = {}) => ({
  ...e,
  [Lf]: !0
});
function $v({
  reducerPath: e,
  baseQuery: t,
  context: {
    endpointDefinitions: r
  },
  serializeQueryArgs: n,
  api: o,
  assertTagType: a,
  selectors: i,
  onSchemaFailure: l,
  catchSchemaFailure: c,
  skipSchemaValidation: u
}) {
  const p = (x, A, T, I) => (L, V) => {
    const z = r[x], K = n({
      queryArgs: A,
      endpointDefinition: z,
      endpointName: x
    });
    if (L(o.internalActions.queryResultPatched({
      queryCacheKey: K,
      patches: T
    })), !I)
      return;
    const W = o.endpoints[x].select(A)(
      // Work around TS 4.1 mismatch
      V()
    ), re = Ls(z.providesTags, W.data, void 0, A, {}, a);
    L(o.internalActions.updateProvidedBy([{
      queryCacheKey: K,
      providedTags: re
    }]));
  };
  function f(x, A, T = 0) {
    const I = [A, ...x];
    return T && I.length > T ? I.slice(0, -1) : I;
  }
  function s(x, A, T = 0) {
    const I = [...x, A];
    return T && I.length > T ? I.slice(1) : I;
  }
  const m = (x, A, T, I = !0) => (L, V) => {
    const K = o.endpoints[x].select(A)(
      // Work around TS 4.1 mismatch
      V()
    ), W = {
      patches: [],
      inversePatches: [],
      undo: () => L(o.util.patchQueryData(x, A, W.inversePatches, I))
    };
    if (K.status === "uninitialized")
      return W;
    let re;
    if ("data" in K)
      if (ft(K.data)) {
        const [le, Re, H] = Xf(K.data, T);
        W.patches.push(...Re), W.inversePatches.push(...H), re = le;
      } else
        re = T(K.data), W.patches.push({
          op: "replace",
          path: [],
          value: re
        }), W.inversePatches.push({
          op: "replace",
          path: [],
          value: K.data
        });
    return W.patches.length === 0 || L(o.util.patchQueryData(x, A, W.patches, I)), W;
  }, h = (x, A, T) => (I) => I(o.endpoints[x].initiate(A, {
    subscribe: !1,
    forceRefetch: !0,
    [wa]: () => ({
      data: T
    })
  })), y = (x, A) => x.query && x[A] ? x[A] : jv, P = async (x, {
    signal: A,
    abort: T,
    rejectWithValue: I,
    fulfillWithValue: L,
    dispatch: V,
    getState: z,
    extra: K
  }) => {
    const W = r[x.endpointName], {
      metaSchema: re,
      skipSchemaValidation: le = u
    } = W;
    try {
      let Re = y(W, "transformResponse");
      const H = {
        signal: A,
        abort: T,
        dispatch: V,
        getState: z,
        extra: K,
        endpoint: x.endpointName,
        type: x.type,
        forced: x.type === "query" ? d(x, z()) : void 0,
        queryCacheKey: x.type === "query" ? x.queryCacheKey : void 0
      }, ue = x.type === "query" ? x[wa] : void 0;
      let Q;
      const ae = async (ee, S, U, F) => {
        if (S == null && ee.pages.length)
          return Promise.resolve({
            data: ee
          });
        const X = {
          queryArg: x.originalArgs,
          pageParam: S
        }, Z = await pe(X), J = F ? f : s;
        return {
          data: {
            pages: J(ee.pages, Z.data, U),
            pageParams: J(ee.pageParams, S, U)
          },
          meta: Z.meta
        };
      };
      async function pe(ee) {
        let S;
        const {
          extraOptions: U,
          argSchema: F,
          rawResponseSchema: X,
          responseSchema: Z
        } = W;
        if (F && !le && (ee = await qt(
          F,
          ee,
          "argSchema",
          {}
          // we don't have a meta yet, so we can't pass it
        )), ue ? S = ue() : W.query ? S = await t(W.query(ee), H, U) : S = await W.queryFn(ee, H, U, (oe) => t(oe, H, U)), typeof process < "u" && process.env.NODE_ENV === "development") {
          const oe = W.query ? "`baseQuery`" : "`queryFn`";
          let he;
          if (!S)
            he = `${oe} did not return anything.`;
          else if (typeof S != "object")
            he = `${oe} did not return an object.`;
          else if (S.error && S.data)
            he = `${oe} returned an object containing both \`error\` and \`result\`.`;
          else if (S.error === void 0 && S.data === void 0)
            he = `${oe} returned an object containing neither a valid \`error\` and \`result\`. At least one of them should not be \`undefined\``;
          else
            for (const Te of Object.keys(S))
              if (Te !== "error" && Te !== "data" && Te !== "meta") {
                he = `The object returned by ${oe} has the unknown property ${Te}.`;
                break;
              }
          he && console.error(`Error encountered handling the endpoint ${x.endpointName}.
                  ${he}
                  It needs to return an object with either the shape \`{ data: <value> }\` or \`{ error: <value> }\` that may contain an optional \`meta\` property.
                  Object returned was:`, S);
        }
        if (S.error) throw new Ol(S.error, S.meta);
        let {
          data: J
        } = S;
        X && !le && (J = await qt(X, S.data, "rawResponseSchema", S.meta));
        let ce = await Re(J, S.meta, ee);
        return Z && !le && (ce = await qt(Z, ce, "responseSchema", S.meta)), {
          ...S,
          data: ce
        };
      }
      if (x.type === "query" && "infiniteQueryOptions" in W) {
        const {
          infiniteQueryOptions: ee
        } = W, {
          maxPages: S = 1 / 0
        } = ee;
        let U;
        const F = {
          pages: [],
          pageParams: []
        }, X = i.selectQueryEntry(z(), x.queryCacheKey)?.data, J = /* arg.forceRefetch */ d(x, z()) && !x.direction || !X ? F : X;
        if ("direction" in x && x.direction && J.pages.length) {
          const ce = x.direction === "backward", he = (ce ? ep : fs)(ee, J, x.originalArgs);
          U = await ae(J, he, S, ce);
        } else {
          const {
            initialPageParam: ce = ee.initialPageParam
          } = x, oe = X?.pageParams ?? [], he = oe[0] ?? ce, Te = oe.length;
          U = await ae(J, he, S), ue && (U = {
            data: U.data.pages[0]
          });
          for (let ze = 1; ze < Te; ze++) {
            const ht = fs(ee, U.data, x.originalArgs);
            U = await ae(U.data, ht, S);
          }
        }
        Q = U;
      } else
        Q = await pe(x.originalArgs);
      return re && !le && Q.meta && (Q.meta = await qt(re, Q.meta, "metaSchema", Q.meta)), L(Q.data, Er({
        fulfilledTimeStamp: Date.now(),
        baseQueryMeta: Q.meta
      }));
    } catch (Re) {
      let H = Re;
      if (H instanceof Ol) {
        let ue = y(W, "transformErrorResponse");
        const {
          rawErrorResponseSchema: Q,
          errorResponseSchema: ae
        } = W;
        let {
          value: pe,
          meta: ee
        } = H;
        try {
          Q && !le && (pe = await qt(Q, pe, "rawErrorResponseSchema", ee)), re && !le && (ee = await qt(re, ee, "metaSchema", ee));
          let S = await ue(pe, ee, x.originalArgs);
          return ae && !le && (S = await qt(ae, S, "errorResponseSchema", ee)), I(S, Er({
            baseQueryMeta: ee
          }));
        } catch (S) {
          H = S;
        }
      }
      try {
        if (H instanceof Jf) {
          const ue = {
            endpoint: x.endpointName,
            arg: x.originalArgs,
            type: x.type,
            queryCacheKey: x.type === "query" ? x.queryCacheKey : void 0
          };
          W.onSchemaFailure?.(H, ue), l?.(H, ue);
          const {
            catchSchemaFailure: Q = c
          } = W;
          if (Q)
            return I(Q(H, ue), Er({
              baseQueryMeta: H._bqMeta
            }));
        }
      } catch (ue) {
        H = ue;
      }
      throw typeof process < "u" && process.env.NODE_ENV !== "production" ? console.error(`An unhandled error occurred processing a request for the endpoint "${x.endpointName}".
In the case of an unhandled error, no tags will be "provided" or "invalidated".`, H) : console.error(H), H;
    }
  };
  function d(x, A) {
    const T = i.selectQueryEntry(A, x.queryCacheKey), I = i.selectConfig(A).refetchOnMountOrArgChange, L = T?.fulfilledTimeStamp, V = x.forceRefetch ?? (x.subscribe && I);
    return V ? V === !0 || (Number(/* @__PURE__ */ new Date()) - Number(L)) / 1e3 >= V : !1;
  }
  const E = () => hl(`${e}/executeQuery`, P, {
    getPendingMeta({
      arg: A
    }) {
      const T = r[A.endpointName];
      return Er({
        startedTimeStamp: Date.now(),
        ...Da(T) ? {
          direction: A.direction
        } : {}
      });
    },
    condition(A, {
      getState: T
    }) {
      const I = T(), L = i.selectQueryEntry(I, A.queryCacheKey), V = L?.fulfilledTimeStamp, z = A.originalArgs, K = L?.originalArgs, W = r[A.endpointName], re = A.direction;
      return ds(A) ? !0 : L?.status === "pending" ? !1 : d(A, I) || Ti(W) && W?.forceRefetch?.({
        currentArg: z,
        previousArg: K,
        endpointState: L,
        state: I
      }) ? !0 : !(V && !re);
    },
    dispatchConditionRejection: !0
  }), g = E(), R = E(), q = hl(`${e}/executeMutation`, P, {
    getPendingMeta() {
      return Er({
        startedTimeStamp: Date.now()
      });
    }
  }), v = (x) => "force" in x, b = (x) => "ifOlderThan" in x, _ = (x, A, T) => (I, L) => {
    const V = v(T) && T.force, z = b(T) && T.ifOlderThan, K = (re = !0) => {
      const le = {
        forceRefetch: re,
        isPrefetch: !0
      };
      return o.endpoints[x].initiate(A, le);
    }, W = o.endpoints[x].select(A)(L());
    if (V)
      I(K());
    else if (z) {
      const re = W?.fulfilledTimeStamp;
      if (!re) {
        I(K());
        return;
      }
      (Number(/* @__PURE__ */ new Date()) - Number(new Date(re))) / 1e3 >= z && I(K());
    } else
      I(K(!1));
  };
  function M(x) {
    return (A) => A?.meta?.arg?.endpointName === x;
  }
  function O(x, A) {
    return {
      matchPending: Fi(Ff(x), M(A)),
      matchFulfilled: Fi(kt(x), M(A)),
      matchRejected: Fi(Ms(x), M(A))
    };
  }
  return {
    queryThunk: g,
    mutationThunk: q,
    infiniteQueryThunk: R,
    prefetch: _,
    updateQueryData: m,
    upsertQueryData: h,
    patchQueryData: p,
    buildMatchThunkActions: O
  };
}
function fs(e, {
  pages: t,
  pageParams: r
}, n) {
  const o = t.length - 1;
  return e.getNextPageParam(t[o], t, r[o], r, n);
}
function ep(e, {
  pages: t,
  pageParams: r
}, n) {
  return e.getPreviousPageParam?.(t[0], t, r[0], r, n);
}
function tp(e, t, r, n) {
  return Ls(r[e.meta.arg.endpointName][t], kt(e) ? e.payload : void 0, Os(e) ? e.payload : void 0, e.meta.arg.originalArgs, "baseQueryMeta" in e.meta ? e.meta.baseQueryMeta : void 0, n);
}
function Va(e, t, r) {
  const n = e[t];
  n && r(n);
}
function Ca(e) {
  return ("arg" in e ? e.arg.fixedCacheKey : e.fixedCacheKey) ?? e.requestId;
}
function Ml(e, t, r) {
  const n = e[Ca(t)];
  n && r(n);
}
var Wa = {};
function Uv({
  reducerPath: e,
  queryThunk: t,
  mutationThunk: r,
  serializeQueryArgs: n,
  context: {
    endpointDefinitions: o,
    apiUid: a,
    extractRehydrationInfo: i,
    hasRehydrationInfo: l
  },
  assertTagType: c,
  config: u
}) {
  const p = pr(`${e}/resetApiState`);
  function f(M, O, x, A) {
    M[O.queryCacheKey] ??= {
      status: "uninitialized",
      endpointName: O.endpointName
    }, Va(M, O.queryCacheKey, (T) => {
      T.status = "pending", T.requestId = x && T.requestId ? (
        // for `upsertQuery` **updates**, keep the current `requestId`
        T.requestId
      ) : (
        // for normal queries or `upsertQuery` **inserts** always update the `requestId`
        A.requestId
      ), O.originalArgs !== void 0 && (T.originalArgs = O.originalArgs), T.startedTimeStamp = A.startedTimeStamp;
      const I = o[A.arg.endpointName];
      Da(I) && "direction" in O && (T.direction = O.direction);
    });
  }
  function s(M, O, x, A) {
    Va(M, O.arg.queryCacheKey, (T) => {
      if (T.requestId !== O.requestId && !A) return;
      const {
        merge: I
      } = o[O.arg.endpointName];
      if (T.status = "fulfilled", I)
        if (T.data !== void 0) {
          const {
            fulfilledTimeStamp: L,
            arg: V,
            baseQueryMeta: z,
            requestId: K
          } = O;
          let W = xs(T.data, (re) => I(re, x, {
            arg: V.originalArgs,
            baseQueryMeta: z,
            fulfilledTimeStamp: L,
            requestId: K
          }));
          T.data = W;
        } else
          T.data = x;
      else
        T.data = o[O.arg.endpointName].structuralSharing ?? !0 ? Zf(dt(T.data) ? iv(T.data) : T.data, x) : x;
      delete T.error, T.fulfilledTimeStamp = O.fulfilledTimeStamp;
    });
  }
  const m = Gt({
    name: `${e}/queries`,
    initialState: Wa,
    reducers: {
      removeQueryResult: {
        reducer(M, {
          payload: {
            queryCacheKey: O
          }
        }) {
          delete M[O];
        },
        prepare: Rr()
      },
      cacheEntriesUpserted: {
        reducer(M, O) {
          for (const x of O.payload) {
            const {
              queryDescription: A,
              value: T
            } = x;
            f(M, A, !0, {
              arg: A,
              requestId: O.meta.requestId,
              startedTimeStamp: O.meta.timestamp
            }), s(
              M,
              {
                arg: A,
                requestId: O.meta.requestId,
                fulfilledTimeStamp: O.meta.timestamp,
                baseQueryMeta: {}
              },
              T,
              // We know we're upserting here
              !0
            );
          }
        },
        prepare: (M) => ({
          payload: M.map((A) => {
            const {
              endpointName: T,
              arg: I,
              value: L
            } = A, V = o[T];
            return {
              queryDescription: {
                type: "query",
                endpointName: T,
                originalArgs: A.arg,
                queryCacheKey: n({
                  queryArgs: I,
                  endpointDefinition: V,
                  endpointName: T
                })
              },
              value: L
            };
          }),
          meta: {
            [Lf]: !0,
            requestId: Nf(),
            timestamp: Date.now()
          }
        })
      },
      queryResultPatched: {
        reducer(M, {
          payload: {
            queryCacheKey: O,
            patches: x
          }
        }) {
          Va(M, O, (A) => {
            A.data = Cl(A.data, x.concat());
          });
        },
        prepare: Rr()
      }
    },
    extraReducers(M) {
      M.addCase(t.pending, (O, {
        meta: x,
        meta: {
          arg: A
        }
      }) => {
        const T = ds(A);
        f(O, A, T, x);
      }).addCase(t.fulfilled, (O, {
        meta: x,
        payload: A
      }) => {
        const T = ds(x.arg);
        s(O, x, A, T);
      }).addCase(t.rejected, (O, {
        meta: {
          condition: x,
          arg: A,
          requestId: T
        },
        error: I,
        payload: L
      }) => {
        Va(O, A.queryCacheKey, (V) => {
          if (!x) {
            if (V.requestId !== T) return;
            V.status = "rejected", V.error = L ?? I;
          }
        });
      }).addMatcher(l, (O, x) => {
        const {
          queries: A
        } = i(x);
        for (const [T, I] of Object.entries(A))
          // do not rehydrate entries that were currently in flight.
          (I?.status === "fulfilled" || I?.status === "rejected") && (O[T] = I);
      });
    }
  }), h = Gt({
    name: `${e}/mutations`,
    initialState: Wa,
    reducers: {
      removeMutationResult: {
        reducer(M, {
          payload: O
        }) {
          const x = Ca(O);
          x in M && delete M[x];
        },
        prepare: Rr()
      }
    },
    extraReducers(M) {
      M.addCase(r.pending, (O, {
        meta: x,
        meta: {
          requestId: A,
          arg: T,
          startedTimeStamp: I
        }
      }) => {
        T.track && (O[Ca(x)] = {
          requestId: A,
          status: "pending",
          endpointName: T.endpointName,
          startedTimeStamp: I
        });
      }).addCase(r.fulfilled, (O, {
        payload: x,
        meta: A
      }) => {
        A.arg.track && Ml(O, A, (T) => {
          T.requestId === A.requestId && (T.status = "fulfilled", T.data = x, T.fulfilledTimeStamp = A.fulfilledTimeStamp);
        });
      }).addCase(r.rejected, (O, {
        payload: x,
        error: A,
        meta: T
      }) => {
        T.arg.track && Ml(O, T, (I) => {
          I.requestId === T.requestId && (I.status = "rejected", I.error = x ?? A);
        });
      }).addMatcher(l, (O, x) => {
        const {
          mutations: A
        } = i(x);
        for (const [T, I] of Object.entries(A))
          // do not rehydrate entries that were currently in flight.
          (I?.status === "fulfilled" || I?.status === "rejected") && // only rehydrate endpoints that were persisted using a `fixedCacheKey`
          T !== I?.requestId && (O[T] = I);
      });
    }
  }), y = {
    tags: {},
    keys: {}
  }, P = Gt({
    name: `${e}/invalidation`,
    initialState: y,
    reducers: {
      updateProvidedBy: {
        reducer(M, O) {
          for (const {
            queryCacheKey: x,
            providedTags: A
          } of O.payload) {
            d(M, x);
            for (const {
              type: T,
              id: I
            } of A) {
              const L = (M.tags[T] ??= {})[I || "__internal_without_id"] ??= [];
              L.includes(x) || L.push(x);
            }
            M.keys[x] = A;
          }
        },
        prepare: Rr()
      }
    },
    extraReducers(M) {
      M.addCase(m.actions.removeQueryResult, (O, {
        payload: {
          queryCacheKey: x
        }
      }) => {
        d(O, x);
      }).addMatcher(l, (O, x) => {
        const {
          provided: A
        } = i(x);
        for (const [T, I] of Object.entries(A))
          for (const [L, V] of Object.entries(I)) {
            const z = (O.tags[T] ??= {})[L || "__internal_without_id"] ??= [];
            for (const K of V)
              z.includes(K) || z.push(K);
          }
      }).addMatcher(ui(kt(t), Os(t)), (O, x) => {
        E(O, [x]);
      }).addMatcher(m.actions.cacheEntriesUpserted.match, (O, x) => {
        const A = x.payload.map(({
          queryDescription: T,
          value: I
        }) => ({
          type: "UNKNOWN",
          payload: I,
          meta: {
            requestStatus: "fulfilled",
            requestId: "UNKNOWN",
            arg: T
          }
        }));
        E(O, A);
      });
    }
  });
  function d(M, O) {
    const x = M.keys[O] ?? [];
    for (const A of x) {
      const T = A.type, I = A.id ?? "__internal_without_id", L = M.tags[T]?.[I];
      L && (M.tags[T][I] = L.filter((V) => V !== O));
    }
    delete M.keys[O];
  }
  function E(M, O) {
    const x = O.map((A) => {
      const T = tp(A, "providesTags", o, c), {
        queryCacheKey: I
      } = A.meta.arg;
      return {
        queryCacheKey: I,
        providedTags: T
      };
    });
    P.caseReducers.updateProvidedBy(M, P.actions.updateProvidedBy(x));
  }
  const g = Gt({
    name: `${e}/subscriptions`,
    initialState: Wa,
    reducers: {
      updateSubscriptionOptions(M, O) {
      },
      unsubscribeQueryResult(M, O) {
      },
      internal_getRTKQSubscriptions() {
      }
    }
  }), R = Gt({
    name: `${e}/internalSubscriptions`,
    initialState: Wa,
    reducers: {
      subscriptionsUpdated: {
        reducer(M, O) {
          return Cl(M, O.payload);
        },
        prepare: Rr()
      }
    }
  }), q = Gt({
    name: `${e}/config`,
    initialState: {
      online: Iv(),
      focused: Av(),
      middlewareRegistered: !1,
      ...u
    },
    reducers: {
      middlewareRegistered(M, {
        payload: O
      }) {
        M.middlewareRegistered = M.middlewareRegistered === "conflict" || a !== O ? "conflict" : !0;
      }
    },
    extraReducers: (M) => {
      M.addCase(qi, (O) => {
        O.online = !0;
      }).addCase(Ns, (O) => {
        O.online = !1;
      }).addCase(Pi, (O) => {
        O.focused = !0;
      }).addCase(Ds, (O) => {
        O.focused = !1;
      }).addMatcher(l, (O) => ({
        ...O
      }));
    }
  }), v = Rh({
    queries: m.reducer,
    mutations: h.reducer,
    provided: P.reducer,
    subscriptions: R.reducer,
    config: q.reducer
  }), b = (M, O) => v(p.match(O) ? void 0 : M, O), _ = {
    ...q.actions,
    ...m.actions,
    ...g.actions,
    ...R.actions,
    ...h.actions,
    ...P.actions,
    resetApiState: p
  };
  return {
    reducer: b,
    actions: _
  };
}
var Hi = /* @__PURE__ */ Symbol.for("RTKQ/skipToken"), rp = {
  status: "uninitialized"
  /* uninitialized */
}, Al = /* @__PURE__ */ xs(rp, () => {
}), Il = /* @__PURE__ */ xs(rp, () => {
});
function Hv({
  serializeQueryArgs: e,
  reducerPath: t,
  createSelector: r
}) {
  const n = (g) => Al, o = (g) => Il;
  return {
    buildQuerySelector: s,
    buildInfiniteQuerySelector: m,
    buildMutationSelector: h,
    selectInvalidatedBy: y,
    selectCachedArgsForQuery: P,
    selectApiState: i,
    selectQueries: l,
    selectMutations: u,
    selectQueryEntry: c,
    selectConfig: p
  };
  function a(g) {
    return {
      ...g,
      ...Tl(g.status)
    };
  }
  function i(g) {
    const R = g[t];
    if (process.env.NODE_ENV !== "production" && !R) {
      if (i.triggered) return R;
      i.triggered = !0, console.error(`Error: No data found at \`state.${t}\`. Did you forget to add the reducer to the store?`);
    }
    return R;
  }
  function l(g) {
    return i(g)?.queries;
  }
  function c(g, R) {
    return l(g)?.[R];
  }
  function u(g) {
    return i(g)?.mutations;
  }
  function p(g) {
    return i(g)?.config;
  }
  function f(g, R, q) {
    return (v) => {
      if (v === Hi)
        return r(n, q);
      const b = e({
        queryArgs: v,
        endpointDefinition: R,
        endpointName: g
      });
      return r((M) => c(M, b) ?? Al, q);
    };
  }
  function s(g, R) {
    return f(g, R, a);
  }
  function m(g, R) {
    const {
      infiniteQueryOptions: q
    } = R;
    function v(b) {
      const _ = {
        ...b,
        ...Tl(b.status)
      }, {
        isLoading: M,
        isError: O,
        direction: x
      } = _, A = x === "forward", T = x === "backward";
      return {
        ..._,
        hasNextPage: d(q, _.data, _.originalArgs),
        hasPreviousPage: E(q, _.data, _.originalArgs),
        isFetchingNextPage: M && A,
        isFetchingPreviousPage: M && T,
        isFetchNextPageError: O && A,
        isFetchPreviousPageError: O && T
      };
    }
    return f(g, R, v);
  }
  function h() {
    return (g) => {
      let R;
      return typeof g == "object" ? R = Ca(g) ?? Hi : R = g, r(R === Hi ? o : (b) => i(b)?.mutations?.[R] ?? Il, a);
    };
  }
  function y(g, R) {
    const q = g[t], v = /* @__PURE__ */ new Set();
    for (const b of R.filter(pi).map(cs)) {
      const _ = q.provided.tags[b.type];
      if (!_)
        continue;
      let M = (b.id !== void 0 ? (
        // id given: invalidate all queries that provide this type & id
        _[b.id]
      ) : (
        // no id: invalidate all queries that provide this type
        xl(Object.values(_))
      )) ?? [];
      for (const O of M)
        v.add(O);
    }
    return xl(Array.from(v.values()).map((b) => {
      const _ = q.queries[b];
      return _ ? [{
        queryCacheKey: b,
        endpointName: _.endpointName,
        originalArgs: _.originalArgs
      }] : [];
    }));
  }
  function P(g, R) {
    return Object.values(l(g)).filter(
      (q) => q?.endpointName === R && q.status !== "uninitialized"
      /* uninitialized */
    ).map((q) => q.originalArgs);
  }
  function d(g, R, q) {
    return R ? fs(g, R, q) != null : !1;
  }
  function E(g, R, q) {
    return !R || !g.getPreviousPageParam ? !1 : ep(g, R, q) != null;
  }
}
var kl = WeakMap ? /* @__PURE__ */ new WeakMap() : void 0, Dl = ({
  endpointName: e,
  queryArgs: t
}) => {
  let r = "";
  const n = kl?.get(t);
  if (typeof n == "string")
    r = n;
  else {
    const o = JSON.stringify(t, (a, i) => (i = typeof i == "bigint" ? {
      $bigint: i.toString()
    } : i, i = ns(i) ? Object.keys(i).sort().reduce((l, c) => (l[c] = i[c], l), {}) : i, i));
    ns(t) && kl?.set(t, o), r = o;
  }
  return `${e}(${r})`;
};
function zv(...e) {
  return function(r) {
    const n = fi((u) => r.extractRehydrationInfo?.(u, {
      reducerPath: r.reducerPath ?? "api"
    })), o = {
      reducerPath: "api",
      keepUnusedDataFor: 60,
      refetchOnMountOrArgChange: !1,
      refetchOnFocus: !1,
      refetchOnReconnect: !1,
      invalidationBehavior: "delayed",
      ...r,
      extractRehydrationInfo: n,
      serializeQueryArgs(u) {
        let p = Dl;
        if ("serializeQueryArgs" in u.endpointDefinition) {
          const f = u.endpointDefinition.serializeQueryArgs;
          p = (s) => {
            const m = f(s);
            return typeof m == "string" ? m : Dl({
              ...s,
              queryArgs: m
            });
          };
        } else r.serializeQueryArgs && (p = r.serializeQueryArgs);
        return p(u);
      },
      tagTypes: [...r.tagTypes || []]
    }, a = {
      endpointDefinitions: {},
      batch(u) {
        u();
      },
      apiUid: Nf(),
      extractRehydrationInfo: n,
      hasRehydrationInfo: fi((u) => n(u) != null)
    }, i = {
      injectEndpoints: c,
      enhanceEndpoints({
        addTagTypes: u,
        endpoints: p
      }) {
        if (u)
          for (const f of u)
            o.tagTypes.includes(f) || o.tagTypes.push(f);
        if (p)
          for (const [f, s] of Object.entries(p))
            typeof s == "function" ? s(a.endpointDefinitions[f]) : Object.assign(a.endpointDefinitions[f] || {}, s);
        return i;
      }
    }, l = e.map((u) => u.init(i, o, a));
    function c(u) {
      const p = u.endpoints({
        query: (f) => ({
          ...f,
          type: "query"
          /* query */
        }),
        mutation: (f) => ({
          ...f,
          type: "mutation"
          /* mutation */
        }),
        infiniteQuery: (f) => ({
          ...f,
          type: "infinitequery"
          /* infinitequery */
        })
      });
      for (const [f, s] of Object.entries(p)) {
        if (u.overrideExisting !== !0 && f in a.endpointDefinitions) {
          if (u.overrideExisting === "throw")
            throw new Error(process.env.NODE_ENV === "production" ? ni(39) : `called \`injectEndpoints\` to override already-existing endpointName ${f} without specifying \`overrideExisting: true\``);
          typeof process < "u" && process.env.NODE_ENV === "development" && console.error(`called \`injectEndpoints\` to override already-existing endpointName ${f} without specifying \`overrideExisting: true\``);
          continue;
        }
        if (typeof process < "u" && process.env.NODE_ENV === "development" && Da(s)) {
          const {
            infiniteQueryOptions: m
          } = s, {
            maxPages: h,
            getPreviousPageParam: y
          } = m;
          if (typeof h == "number") {
            if (h < 1)
              throw new Error(process.env.NODE_ENV === "production" ? ni(40) : `maxPages for endpoint '${f}' must be a number greater than 0`);
            if (typeof y != "function")
              throw new Error(process.env.NODE_ENV === "production" ? ni(41) : `getPreviousPageParam for endpoint '${f}' must be a function if maxPages is used`);
          }
        }
        a.endpointDefinitions[f] = s;
        for (const m of l)
          m.injectEndpoint(f, s);
      }
      return i;
    }
    return i.injectEndpoints({
      endpoints: r.endpoints
    });
  };
}
function Ze(e, ...t) {
  return Object.assign(e, ...t);
}
var Vv = ({
  api: e,
  queryThunk: t,
  internalState: r
}) => {
  const n = `${e.reducerPath}/subscriptions`;
  let o = null, a = null;
  const {
    updateSubscriptionOptions: i,
    unsubscribeQueryResult: l
  } = e.internalActions, c = (m, h) => {
    if (i.match(h)) {
      const {
        queryCacheKey: P,
        requestId: d,
        options: E
      } = h.payload;
      return m?.[P]?.[d] && (m[P][d] = E), !0;
    }
    if (l.match(h)) {
      const {
        queryCacheKey: P,
        requestId: d
      } = h.payload;
      return m[P] && delete m[P][d], !0;
    }
    if (e.internalActions.removeQueryResult.match(h))
      return delete m[h.payload.queryCacheKey], !0;
    if (t.pending.match(h)) {
      const {
        meta: {
          arg: P,
          requestId: d
        }
      } = h, E = m[P.queryCacheKey] ??= {};
      return E[`${d}_running`] = {}, P.subscribe && (E[d] = P.subscriptionOptions ?? E[d] ?? {}), !0;
    }
    let y = !1;
    if (t.fulfilled.match(h) || t.rejected.match(h)) {
      const P = m[h.meta.arg.queryCacheKey] || {}, d = `${h.meta.requestId}_running`;
      y ||= !!P[d], delete P[d];
    }
    if (t.rejected.match(h)) {
      const {
        meta: {
          condition: P,
          arg: d,
          requestId: E
        }
      } = h;
      if (P && d.subscribe) {
        const g = m[d.queryCacheKey] ??= {};
        g[E] = d.subscriptionOptions ?? g[E] ?? {}, y = !0;
      }
    }
    return y;
  }, u = () => r.currentSubscriptions, s = {
    getSubscriptions: u,
    getSubscriptionCount: (m) => {
      const y = u()[m] ?? {};
      return Jt(y);
    },
    isRequestSubscribed: (m, h) => !!u()?.[m]?.[h]
  };
  return (m, h) => {
    if (o || (o = JSON.parse(JSON.stringify(r.currentSubscriptions))), e.util.resetApiState.match(m))
      return o = r.currentSubscriptions = {}, a = null, [!0, !1];
    if (e.internalActions.internal_getRTKQSubscriptions.match(m))
      return [!1, s];
    const y = c(r.currentSubscriptions, m);
    let P = !0;
    if (y) {
      a || (a = setTimeout(() => {
        const g = JSON.parse(JSON.stringify(r.currentSubscriptions)), [, R] = Xf(o, () => g);
        h.next(e.internalActions.subscriptionsUpdated(R)), o = g, a = null;
      }, 500));
      const d = typeof m.type == "string" && !!m.type.startsWith(n), E = t.rejected.match(m) && m.meta.condition && !!m.meta.arg.subscribe;
      P = !d && !E;
    }
    return [P, !1];
  };
};
function Wv(e) {
  for (const t in e)
    return !1;
  return !0;
}
var Kv = 2147483647 / 1e3 - 1, Qv = ({
  reducerPath: e,
  api: t,
  queryThunk: r,
  context: n,
  internalState: o,
  selectors: {
    selectQueryEntry: a,
    selectConfig: i
  }
}) => {
  const {
    removeQueryResult: l,
    unsubscribeQueryResult: c,
    cacheEntriesUpserted: u
  } = t.internalActions, p = ui(c.match, r.fulfilled, r.rejected, u.match);
  function f(P) {
    const d = o.currentSubscriptions[P];
    return !!d && !Wv(d);
  }
  const s = {}, m = (P, d, E) => {
    const g = d.getState(), R = i(g);
    if (p(P)) {
      let q;
      if (u.match(P))
        q = P.payload.map((v) => v.queryDescription.queryCacheKey);
      else {
        const {
          queryCacheKey: v
        } = c.match(P) ? P.payload : P.meta.arg;
        q = [v];
      }
      h(q, d, R);
    }
    if (t.util.resetApiState.match(P))
      for (const [q, v] of Object.entries(s))
        v && clearTimeout(v), delete s[q];
    if (n.hasRehydrationInfo(P)) {
      const {
        queries: q
      } = n.extractRehydrationInfo(P);
      h(Object.keys(q), d, R);
    }
  };
  function h(P, d, E) {
    const g = d.getState();
    for (const R of P) {
      const q = a(g, R);
      y(R, q?.endpointName, d, E);
    }
  }
  function y(P, d, E, g) {
    const q = n.endpointDefinitions[d]?.keepUnusedDataFor ?? g.keepUnusedDataFor;
    if (q === 1 / 0)
      return;
    const v = Math.max(0, Math.min(q, Kv));
    if (!f(P)) {
      const b = s[P];
      b && clearTimeout(b), s[P] = setTimeout(() => {
        f(P) || E.dispatch(l({
          queryCacheKey: P
        })), delete s[P];
      }, v * 1e3);
    }
  }
  return m;
}, Nl = new Error("Promise never resolved before cacheEntryRemoved."), Gv = ({
  api: e,
  reducerPath: t,
  context: r,
  queryThunk: n,
  mutationThunk: o,
  internalState: a,
  selectors: {
    selectQueryEntry: i,
    selectApiState: l
  }
}) => {
  const c = vl(n), u = vl(o), p = kt(n, o), f = {};
  function s(d, E, g) {
    const R = f[d];
    R?.valueResolved && (R.valueResolved({
      data: E,
      meta: g
    }), delete R.valueResolved);
  }
  function m(d) {
    const E = f[d];
    E && (delete f[d], E.cacheEntryRemoved());
  }
  const h = (d, E, g) => {
    const R = y(d);
    function q(v, b, _, M) {
      const O = i(g, b), x = i(E.getState(), b);
      !O && x && P(v, M, b, E, _);
    }
    if (n.pending.match(d))
      q(d.meta.arg.endpointName, R, d.meta.requestId, d.meta.arg.originalArgs);
    else if (e.internalActions.cacheEntriesUpserted.match(d))
      for (const {
        queryDescription: v,
        value: b
      } of d.payload) {
        const {
          endpointName: _,
          originalArgs: M,
          queryCacheKey: O
        } = v;
        q(_, O, d.meta.requestId, M), s(O, b, {});
      }
    else if (o.pending.match(d))
      E.getState()[t].mutations[R] && P(d.meta.arg.endpointName, d.meta.arg.originalArgs, R, E, d.meta.requestId);
    else if (p(d))
      s(R, d.payload, d.meta.baseQueryMeta);
    else if (e.internalActions.removeQueryResult.match(d) || e.internalActions.removeMutationResult.match(d))
      m(R);
    else if (e.util.resetApiState.match(d))
      for (const v of Object.keys(f))
        m(v);
  };
  function y(d) {
    return c(d) ? d.meta.arg.queryCacheKey : u(d) ? d.meta.arg.fixedCacheKey ?? d.meta.requestId : e.internalActions.removeQueryResult.match(d) ? d.payload.queryCacheKey : e.internalActions.removeMutationResult.match(d) ? Ca(d.payload) : "";
  }
  function P(d, E, g, R, q) {
    const v = r.endpointDefinitions[d], b = v?.onCacheEntryAdded;
    if (!b) return;
    const _ = {}, M = new Promise((L) => {
      _.cacheEntryRemoved = L;
    }), O = Promise.race([new Promise((L) => {
      _.valueResolved = L;
    }), M.then(() => {
      throw Nl;
    })]);
    O.catch(() => {
    }), f[g] = _;
    const x = e.endpoints[d].select(mi(v) ? E : g), A = R.dispatch((L, V, z) => z), T = {
      ...R,
      getCacheEntry: () => x(R.getState()),
      requestId: q,
      extra: A,
      updateCachedData: mi(v) ? (L) => R.dispatch(e.util.updateQueryData(d, E, L)) : void 0,
      cacheDataLoaded: O,
      cacheEntryRemoved: M
    }, I = b(E, T);
    Promise.resolve(I).catch((L) => {
      if (L !== Nl)
        throw L;
    });
  }
  return h;
}, Yv = ({
  api: e,
  context: {
    apiUid: t
  },
  reducerPath: r
}) => (n, o) => {
  e.util.resetApiState.match(n) && o.dispatch(e.internalActions.middlewareRegistered(t)), typeof process < "u" && process.env.NODE_ENV === "development" && e.internalActions.middlewareRegistered.match(n) && n.payload === t && o.getState()[r]?.config?.middlewareRegistered === "conflict" && console.warn(`There is a mismatch between slice and middleware for the reducerPath "${r}".
You can only have one api per reducer path, this will lead to crashes in various situations!${r === "api" ? `
If you have multiple apis, you *have* to specify the reducerPath option when using createApi!` : ""}`);
}, Xv = ({
  reducerPath: e,
  context: t,
  context: {
    endpointDefinitions: r
  },
  mutationThunk: n,
  queryThunk: o,
  api: a,
  assertTagType: i,
  refetchQuery: l,
  internalState: c
}) => {
  const {
    removeQueryResult: u
  } = a.internalActions, p = ui(kt(n), Os(n)), f = ui(kt(n, o), Ms(n, o));
  let s = [];
  const m = (P, d) => {
    p(P) ? y(tp(P, "invalidatesTags", r, i), d) : f(P) ? y([], d) : a.util.invalidateTags.match(P) && y(Ls(P.payload, void 0, void 0, void 0, void 0, i), d);
  };
  function h(P) {
    const {
      queries: d,
      mutations: E
    } = P;
    for (const g of [d, E])
      for (const R in g)
        if (g[R]?.status === "pending") return !0;
    return !1;
  }
  function y(P, d) {
    const E = d.getState(), g = E[e];
    if (s.push(...P), g.config.invalidationBehavior === "delayed" && h(g))
      return;
    const R = s;
    if (s = [], R.length === 0) return;
    const q = a.util.selectInvalidatedBy(E, R);
    t.batch(() => {
      const v = Array.from(q.values());
      for (const {
        queryCacheKey: b
      } of v) {
        const _ = g.queries[b], M = c.currentSubscriptions[b] ?? {};
        _ && (Jt(M) === 0 ? d.dispatch(u({
          queryCacheKey: b
        })) : _.status !== "uninitialized" && d.dispatch(l(_)));
      }
    });
  }
  return m;
}, Zv = ({
  reducerPath: e,
  queryThunk: t,
  api: r,
  refetchQuery: n,
  internalState: o
}) => {
  const a = {}, i = (s, m) => {
    (r.internalActions.updateSubscriptionOptions.match(s) || r.internalActions.unsubscribeQueryResult.match(s)) && c(s.payload, m), (t.pending.match(s) || t.rejected.match(s) && s.meta.condition) && c(s.meta.arg, m), (t.fulfilled.match(s) || t.rejected.match(s) && !s.meta.condition) && l(s.meta.arg, m), r.util.resetApiState.match(s) && p();
  };
  function l({
    queryCacheKey: s
  }, m) {
    const h = m.getState()[e], y = h.queries[s], P = o.currentSubscriptions[s];
    if (!y || y.status === "uninitialized") return;
    const {
      lowestPollingInterval: d,
      skipPollingIfUnfocused: E
    } = f(P);
    if (!Number.isFinite(d)) return;
    const g = a[s];
    g?.timeout && (clearTimeout(g.timeout), g.timeout = void 0);
    const R = Date.now() + d;
    a[s] = {
      nextPollTimestamp: R,
      pollingInterval: d,
      timeout: setTimeout(() => {
        (h.config.focused || !E) && m.dispatch(n(y)), l({
          queryCacheKey: s
        }, m);
      }, d)
    };
  }
  function c({
    queryCacheKey: s
  }, m) {
    const y = m.getState()[e].queries[s], P = o.currentSubscriptions[s];
    if (!y || y.status === "uninitialized")
      return;
    const {
      lowestPollingInterval: d
    } = f(P);
    if (!Number.isFinite(d)) {
      u(s);
      return;
    }
    const E = a[s], g = Date.now() + d;
    (!E || g < E.nextPollTimestamp) && l({
      queryCacheKey: s
    }, m);
  }
  function u(s) {
    const m = a[s];
    m?.timeout && clearTimeout(m.timeout), delete a[s];
  }
  function p() {
    for (const s of Object.keys(a))
      u(s);
  }
  function f(s = {}) {
    let m = !1, h = Number.POSITIVE_INFINITY;
    for (let y in s)
      s[y].pollingInterval && (h = Math.min(s[y].pollingInterval, h), m = s[y].skipPollingIfUnfocused || m);
    return {
      lowestPollingInterval: h,
      skipPollingIfUnfocused: m
    };
  }
  return i;
}, Jv = ({
  api: e,
  context: t,
  queryThunk: r,
  mutationThunk: n
}) => {
  const o = Ff(r, n), a = Ms(r, n), i = kt(r, n), l = {};
  return (u, p) => {
    if (o(u)) {
      const {
        requestId: f,
        arg: {
          endpointName: s,
          originalArgs: m
        }
      } = u.meta, h = t.endpointDefinitions[s], y = h?.onQueryStarted;
      if (y) {
        const P = {}, d = new Promise((q, v) => {
          P.resolve = q, P.reject = v;
        });
        d.catch(() => {
        }), l[f] = P;
        const E = e.endpoints[s].select(mi(h) ? m : f), g = p.dispatch((q, v, b) => b), R = {
          ...p,
          getCacheEntry: () => E(p.getState()),
          requestId: f,
          extra: g,
          updateCachedData: mi(h) ? (q) => p.dispatch(e.util.updateQueryData(s, m, q)) : void 0,
          queryFulfilled: d
        };
        y(m, R);
      }
    } else if (i(u)) {
      const {
        requestId: f,
        baseQueryMeta: s
      } = u.meta;
      l[f]?.resolve({
        data: u.payload,
        meta: s
      }), delete l[f];
    } else if (a(u)) {
      const {
        requestId: f,
        rejectedWithValue: s,
        baseQueryMeta: m
      } = u.meta;
      l[f]?.reject({
        error: u.payload ?? u.error,
        isUnhandledError: !s,
        meta: m
      }), delete l[f];
    }
  };
}, eb = ({
  reducerPath: e,
  context: t,
  api: r,
  refetchQuery: n,
  internalState: o
}) => {
  const {
    removeQueryResult: a
  } = r.internalActions, i = (c, u) => {
    Pi.match(c) && l(u, "refetchOnFocus"), qi.match(c) && l(u, "refetchOnReconnect");
  };
  function l(c, u) {
    const p = c.getState()[e], f = p.queries, s = o.currentSubscriptions;
    t.batch(() => {
      for (const m of Object.keys(s)) {
        const h = f[m], y = s[m];
        if (!y || !h) continue;
        (Object.values(y).some((d) => d[u] === !0) || Object.values(y).every((d) => d[u] === void 0) && p.config[u]) && (Jt(y) === 0 ? c.dispatch(a({
          queryCacheKey: m
        })) : h.status !== "uninitialized" && c.dispatch(n(h)));
      }
    });
  }
  return i;
};
function tb(e) {
  const {
    reducerPath: t,
    queryThunk: r,
    api: n,
    context: o
  } = e, {
    apiUid: a
  } = o, i = {
    invalidateTags: pr(`${t}/invalidateTags`)
  }, l = (f) => f.type.startsWith(`${t}/`), c = [Yv, Qv, Xv, Zv, Gv, Jv];
  return {
    middleware: (f) => {
      let s = !1;
      const h = {
        ...e,
        internalState: {
          currentSubscriptions: {}
        },
        refetchQuery: p,
        isThisApiSliceAction: l
      }, y = c.map((E) => E(h)), P = Vv(h), d = eb(h);
      return (E) => (g) => {
        if (!Df(g))
          return E(g);
        s || (s = !0, f.dispatch(n.internalActions.middlewareRegistered(a)));
        const R = {
          ...f,
          next: E
        }, q = f.getState(), [v, b] = P(g, R, q);
        let _;
        if (v ? _ = E(g) : _ = b, f.getState()[t] && (d(g, R, q), l(g) || o.hasRehydrationInfo(g)))
          for (const M of y)
            M(g, R, q);
        return _;
      };
    },
    actions: i
  };
  function p(f) {
    return e.api.endpoints[f.endpointName].initiate(f.originalArgs, {
      subscribe: !1,
      forceRefetch: !0
    });
  }
}
var Ll = /* @__PURE__ */ Symbol(), rb = ({
  createSelector: e = gh
} = {}) => ({
  name: Ll,
  init(t, {
    baseQuery: r,
    tagTypes: n,
    reducerPath: o,
    serializeQueryArgs: a,
    keepUnusedDataFor: i,
    refetchOnMountOrArgChange: l,
    refetchOnFocus: c,
    refetchOnReconnect: u,
    invalidationBehavior: p,
    onSchemaFailure: f,
    catchSchemaFailure: s,
    skipSchemaValidation: m
  }, h) {
    vv();
    const y = (Q) => (typeof process < "u" && process.env.NODE_ENV === "development" && (n.includes(Q.type) || console.error(`Tag type '${Q.type}' was used, but not specified in \`tagTypes\`!`)), Q);
    Object.assign(t, {
      reducerPath: o,
      endpoints: {},
      internalActions: {
        onOnline: qi,
        onOffline: Ns,
        onFocus: Pi,
        onFocusLost: Ds
      },
      util: {}
    });
    const P = Hv({
      serializeQueryArgs: a,
      reducerPath: o,
      createSelector: e
    }), {
      selectInvalidatedBy: d,
      selectCachedArgsForQuery: E,
      buildQuerySelector: g,
      buildInfiniteQuerySelector: R,
      buildMutationSelector: q
    } = P;
    Ze(t.util, {
      selectInvalidatedBy: d,
      selectCachedArgsForQuery: E
    });
    const {
      queryThunk: v,
      infiniteQueryThunk: b,
      mutationThunk: _,
      patchQueryData: M,
      updateQueryData: O,
      upsertQueryData: x,
      prefetch: A,
      buildMatchThunkActions: T
    } = $v({
      baseQuery: r,
      reducerPath: o,
      context: h,
      api: t,
      serializeQueryArgs: a,
      assertTagType: y,
      selectors: P,
      onSchemaFailure: f,
      catchSchemaFailure: s,
      skipSchemaValidation: m
    }), {
      reducer: I,
      actions: L
    } = Uv({
      context: h,
      queryThunk: v,
      mutationThunk: _,
      serializeQueryArgs: a,
      reducerPath: o,
      assertTagType: y,
      config: {
        refetchOnFocus: c,
        refetchOnReconnect: u,
        refetchOnMountOrArgChange: l,
        keepUnusedDataFor: i,
        reducerPath: o,
        invalidationBehavior: p
      }
    });
    Ze(t.util, {
      patchQueryData: M,
      updateQueryData: O,
      upsertQueryData: x,
      prefetch: A,
      resetApiState: L.resetApiState,
      upsertQueryEntries: L.cacheEntriesUpserted
    }), Ze(t.internalActions, L);
    const {
      middleware: V,
      actions: z
    } = tb({
      reducerPath: o,
      context: h,
      queryThunk: v,
      mutationThunk: _,
      infiniteQueryThunk: b,
      api: t,
      assertTagType: y,
      selectors: P
    });
    Ze(t.util, z), Ze(t, {
      reducer: I,
      middleware: V
    });
    const {
      buildInitiateQuery: K,
      buildInitiateInfiniteQuery: W,
      buildInitiateMutation: re,
      getRunningMutationThunk: le,
      getRunningMutationsThunk: Re,
      getRunningQueriesThunk: H,
      getRunningQueryThunk: ue
    } = Bv({
      queryThunk: v,
      mutationThunk: _,
      infiniteQueryThunk: b,
      api: t,
      serializeQueryArgs: a,
      context: h
    });
    return Ze(t.util, {
      getRunningMutationThunk: le,
      getRunningMutationsThunk: Re,
      getRunningQueryThunk: ue,
      getRunningQueriesThunk: H
    }), {
      name: Ll,
      injectEndpoint(Q, ae) {
        const pe = t, ee = pe.endpoints[Q] ??= {};
        Ti(ae) && Ze(ee, {
          name: Q,
          select: g(Q, ae),
          initiate: K(Q, ae)
        }, T(v, Q)), Nv(ae) && Ze(ee, {
          name: Q,
          select: q(),
          initiate: re(Q)
        }, T(_, Q)), Da(ae) && Ze(ee, {
          name: Q,
          select: R(Q, ae),
          initiate: W(Q, ae)
        }, T(v, Q));
      }
    };
  }
});
rb();
function np({
  reducer: e,
  middlewares: t = [],
  preloadedState: r = {}
}) {
  const n = Eh({
    reducer: e,
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (o) => o().concat(t),
    preloadedState: r
  });
  return Dv(n.dispatch), n;
}
const nb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  makeStore: np
}, Symbol.toStringTag, { value: "Module" }));
var Ke = {}, oi = { exports: {} };
oi.exports;
var Fl;
function op() {
  return Fl || (Fl = 1, (function(e) {
    const r = (a = 0) => (i) => `\x1B[${38 + a};5;${i}m`, n = (a = 0) => (i, l, c) => `\x1B[${38 + a};2;${i};${l};${c}m`;
    function o() {
      const a = /* @__PURE__ */ new Map(), i = {
        modifier: {
          reset: [0, 0],
          // 21 isn't widely supported and 22 does the same thing
          bold: [1, 22],
          dim: [2, 22],
          italic: [3, 23],
          underline: [4, 24],
          overline: [53, 55],
          inverse: [7, 27],
          hidden: [8, 28],
          strikethrough: [9, 29]
        },
        color: {
          black: [30, 39],
          red: [31, 39],
          green: [32, 39],
          yellow: [33, 39],
          blue: [34, 39],
          magenta: [35, 39],
          cyan: [36, 39],
          white: [37, 39],
          // Bright color
          blackBright: [90, 39],
          redBright: [91, 39],
          greenBright: [92, 39],
          yellowBright: [93, 39],
          blueBright: [94, 39],
          magentaBright: [95, 39],
          cyanBright: [96, 39],
          whiteBright: [97, 39]
        },
        bgColor: {
          bgBlack: [40, 49],
          bgRed: [41, 49],
          bgGreen: [42, 49],
          bgYellow: [43, 49],
          bgBlue: [44, 49],
          bgMagenta: [45, 49],
          bgCyan: [46, 49],
          bgWhite: [47, 49],
          // Bright color
          bgBlackBright: [100, 49],
          bgRedBright: [101, 49],
          bgGreenBright: [102, 49],
          bgYellowBright: [103, 49],
          bgBlueBright: [104, 49],
          bgMagentaBright: [105, 49],
          bgCyanBright: [106, 49],
          bgWhiteBright: [107, 49]
        }
      };
      i.color.gray = i.color.blackBright, i.bgColor.bgGray = i.bgColor.bgBlackBright, i.color.grey = i.color.blackBright, i.bgColor.bgGrey = i.bgColor.bgBlackBright;
      for (const [l, c] of Object.entries(i)) {
        for (const [u, p] of Object.entries(c))
          i[u] = {
            open: `\x1B[${p[0]}m`,
            close: `\x1B[${p[1]}m`
          }, c[u] = i[u], a.set(p[0], p[1]);
        Object.defineProperty(i, l, {
          value: c,
          enumerable: !1
        });
      }
      return Object.defineProperty(i, "codes", {
        value: a,
        enumerable: !1
      }), i.color.close = "\x1B[39m", i.bgColor.close = "\x1B[49m", i.color.ansi256 = r(), i.color.ansi16m = n(), i.bgColor.ansi256 = r(10), i.bgColor.ansi16m = n(10), Object.defineProperties(i, {
        rgbToAnsi256: {
          value: (l, c, u) => l === c && c === u ? l < 8 ? 16 : l > 248 ? 231 : Math.round((l - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(l / 255 * 5) + 6 * Math.round(c / 255 * 5) + Math.round(u / 255 * 5),
          enumerable: !1
        },
        hexToRgb: {
          value: (l) => {
            const c = /(?<colorString>[a-f\d]{6}|[a-f\d]{3})/i.exec(l.toString(16));
            if (!c)
              return [0, 0, 0];
            let { colorString: u } = c.groups;
            u.length === 3 && (u = u.split("").map((f) => f + f).join(""));
            const p = Number.parseInt(u, 16);
            return [
              p >> 16 & 255,
              p >> 8 & 255,
              p & 255
            ];
          },
          enumerable: !1
        },
        hexToAnsi256: {
          value: (l) => i.rgbToAnsi256(...i.hexToRgb(l)),
          enumerable: !1
        }
      }), i;
    }
    Object.defineProperty(e, "exports", {
      enumerable: !0,
      get: o
    });
  })(oi)), oi.exports;
}
var Tt = {}, Bl;
function Si() {
  if (Bl) return Tt;
  Bl = 1, Object.defineProperty(Tt, "__esModule", {
    value: !0
  }), Tt.printIteratorEntries = t, Tt.printIteratorValues = r, Tt.printListItems = n, Tt.printObjectProperties = o;
  const e = (a, i) => {
    const l = Object.keys(a).sort(i);
    return Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(a).forEach((c) => {
      Object.getOwnPropertyDescriptor(a, c).enumerable && l.push(c);
    }), l;
  };
  function t(a, i, l, c, u, p, f = ": ") {
    let s = "", m = a.next();
    if (!m.done) {
      s += i.spacingOuter;
      const h = l + i.indent;
      for (; !m.done; ) {
        const y = p(
          m.value[0],
          i,
          h,
          c,
          u
        ), P = p(
          m.value[1],
          i,
          h,
          c,
          u
        );
        s += h + y + f + P, m = a.next(), m.done ? i.min || (s += ",") : s += "," + i.spacingInner;
      }
      s += i.spacingOuter + l;
    }
    return s;
  }
  function r(a, i, l, c, u, p) {
    let f = "", s = a.next();
    if (!s.done) {
      f += i.spacingOuter;
      const m = l + i.indent;
      for (; !s.done; )
        f += m + p(s.value, i, m, c, u), s = a.next(), s.done ? i.min || (f += ",") : f += "," + i.spacingInner;
      f += i.spacingOuter + l;
    }
    return f;
  }
  function n(a, i, l, c, u, p) {
    let f = "";
    if (a.length) {
      f += i.spacingOuter;
      const s = l + i.indent;
      for (let m = 0; m < a.length; m++)
        f += s, m in a && (f += p(a[m], i, s, c, u)), m < a.length - 1 ? f += "," + i.spacingInner : i.min || (f += ",");
      f += i.spacingOuter + l;
    }
    return f;
  }
  function o(a, i, l, c, u, p) {
    let f = "";
    const s = e(a, i.compareKeys);
    if (s.length) {
      f += i.spacingOuter;
      const m = l + i.indent;
      for (let h = 0; h < s.length; h++) {
        const y = s[h], P = p(y, i, m, c, u), d = p(a[y], i, m, c, u);
        f += m + P + ": " + d, h < s.length - 1 ? f += "," + i.spacingInner : i.min || (f += ",");
      }
      f += i.spacingOuter + l;
    }
    return f;
  }
  return Tt;
}
var Je = {}, jl;
function ob() {
  if (jl) return Je;
  jl = 1, Object.defineProperty(Je, "__esModule", {
    value: !0
  }), Je.test = Je.serialize = Je.default = void 0;
  var e = Si(), t = (function() {
    return typeof globalThis < "u" ? globalThis : typeof t < "u" ? t : typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")();
  })(), r = t["jest-symbol-do-not-touch"] || t.Symbol;
  const n = typeof r == "function" && r.for ? r.for("jest.asymmetricMatcher") : 1267621, o = " ", a = (u, p, f, s, m, h) => {
    const y = u.toString();
    return y === "ArrayContaining" || y === "ArrayNotContaining" ? ++s > p.maxDepth ? "[" + y + "]" : y + o + "[" + (0, e.printListItems)(
      u.sample,
      p,
      f,
      s,
      m,
      h
    ) + "]" : y === "ObjectContaining" || y === "ObjectNotContaining" ? ++s > p.maxDepth ? "[" + y + "]" : y + o + "{" + (0, e.printObjectProperties)(
      u.sample,
      p,
      f,
      s,
      m,
      h
    ) + "}" : y === "StringMatching" || y === "StringNotMatching" || y === "StringContaining" || y === "StringNotContaining" ? y + o + h(u.sample, p, f, s, m) : u.toAsymmetricMatcher();
  };
  Je.serialize = a;
  const i = (u) => u && u.$$typeof === n;
  Je.test = i;
  var c = {
    serialize: a,
    test: i
  };
  return Je.default = c, Je;
}
var et = {}, zi, $l;
function ab() {
  return $l || ($l = 1, zi = ({ onlyFirst: e = !1 } = {}) => {
    const t = [
      "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
      "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"
    ].join("|");
    return new RegExp(t, e ? void 0 : "g");
  }), zi;
}
var Ul;
function ib() {
  if (Ul) return et;
  Ul = 1, Object.defineProperty(et, "__esModule", {
    value: !0
  }), et.test = et.serialize = et.default = void 0;
  var e = r(ab()), t = r(op());
  function r(c) {
    return c && c.__esModule ? c : { default: c };
  }
  const n = (c) => c.replace((0, e.default)(), (u) => {
    switch (u) {
      case t.default.red.close:
      case t.default.green.close:
      case t.default.cyan.close:
      case t.default.gray.close:
      case t.default.white.close:
      case t.default.yellow.close:
      case t.default.bgRed.close:
      case t.default.bgGreen.close:
      case t.default.bgYellow.close:
      case t.default.inverse.close:
      case t.default.dim.close:
      case t.default.bold.close:
      case t.default.reset.open:
      case t.default.reset.close:
        return "</>";
      case t.default.red.open:
        return "<red>";
      case t.default.green.open:
        return "<green>";
      case t.default.cyan.open:
        return "<cyan>";
      case t.default.gray.open:
        return "<gray>";
      case t.default.white.open:
        return "<white>";
      case t.default.yellow.open:
        return "<yellow>";
      case t.default.bgRed.open:
        return "<bgRed>";
      case t.default.bgGreen.open:
        return "<bgGreen>";
      case t.default.bgYellow.open:
        return "<bgYellow>";
      case t.default.inverse.open:
        return "<inverse>";
      case t.default.dim.open:
        return "<dim>";
      case t.default.bold.open:
        return "<bold>";
      default:
        return "";
    }
  }), o = (c) => typeof c == "string" && !!c.match((0, e.default)());
  et.test = o;
  const a = (c, u, p, f, s, m) => m(n(c), u, p, f, s);
  et.serialize = a;
  var l = {
    serialize: a,
    test: o
  };
  return et.default = l, et;
}
var tt = {}, Hl;
function sb() {
  if (Hl) return tt;
  Hl = 1, Object.defineProperty(tt, "__esModule", {
    value: !0
  }), tt.test = tt.serialize = tt.default = void 0;
  var e = Si();
  const t = " ", r = ["DOMStringMap", "NamedNodeMap"], n = /^(HTML\w*Collection|NodeList)$/, o = (p) => r.indexOf(p) !== -1 || n.test(p), a = (p) => p && p.constructor && !!p.constructor.name && o(p.constructor.name);
  tt.test = a;
  const i = (p) => p.constructor.name === "NamedNodeMap", l = (p, f, s, m, h, y) => {
    const P = p.constructor.name;
    return ++m > f.maxDepth ? "[" + P + "]" : (f.min ? "" : P + t) + (r.indexOf(P) !== -1 ? "{" + (0, e.printObjectProperties)(
      i(p) ? Array.from(p).reduce((d, E) => (d[E.name] = E.value, d), {}) : { ...p },
      f,
      s,
      m,
      h,
      y
    ) + "}" : "[" + (0, e.printListItems)(
      Array.from(p),
      f,
      s,
      m,
      h,
      y
    ) + "]");
  };
  tt.serialize = l;
  var u = {
    serialize: l,
    test: a
  };
  return tt.default = u, tt;
}
var rt = {}, Ae = {}, Ka = {}, zl;
function lb() {
  if (zl) return Ka;
  zl = 1, Object.defineProperty(Ka, "__esModule", {
    value: !0
  }), Ka.default = e;
  function e(t) {
    return t.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  return Ka;
}
var Vl;
function Fs() {
  if (Vl) return Ae;
  Vl = 1, Object.defineProperty(Ae, "__esModule", {
    value: !0
  }), Ae.printText = Ae.printProps = Ae.printElementAsLeaf = Ae.printElement = Ae.printComment = Ae.printChildren = void 0;
  var e = t(lb());
  function t(c) {
    return c && c.__esModule ? c : { default: c };
  }
  const r = (c, u, p, f, s, m, h) => {
    const y = f + p.indent, P = p.colors;
    return c.map((d) => {
      const E = u[d];
      let g = h(E, p, y, s, m);
      return typeof E != "string" && (g.indexOf(`
`) !== -1 && (g = p.spacingOuter + y + g + p.spacingOuter + f), g = "{" + g + "}"), p.spacingInner + f + P.prop.open + d + P.prop.close + "=" + P.value.open + g + P.value.close;
    }).join("");
  };
  Ae.printProps = r;
  const n = (c, u, p, f, s, m) => c.map(
    (h) => u.spacingOuter + p + (typeof h == "string" ? o(h, u) : m(h, u, p, f, s))
  ).join("");
  Ae.printChildren = n;
  const o = (c, u) => {
    const p = u.colors.content;
    return p.open + (0, e.default)(c) + p.close;
  };
  Ae.printText = o;
  const a = (c, u) => {
    const p = u.colors.comment;
    return p.open + "<!--" + (0, e.default)(c) + "-->" + p.close;
  };
  Ae.printComment = a;
  const i = (c, u, p, f, s) => {
    const m = f.colors.tag;
    return m.open + "<" + c + (u && m.close + u + f.spacingOuter + s + m.open) + (p ? ">" + m.close + p + f.spacingOuter + s + m.open + "</" + c : (u && !f.min ? "" : " ") + "/") + ">" + m.close;
  };
  Ae.printElement = i;
  const l = (c, u) => {
    const p = u.colors.tag;
    return p.open + "<" + c + p.close + " …" + p.open + " />" + p.close;
  };
  return Ae.printElementAsLeaf = l, Ae;
}
var Wl;
function ub() {
  if (Wl) return rt;
  Wl = 1, Object.defineProperty(rt, "__esModule", {
    value: !0
  }), rt.test = rt.serialize = rt.default = void 0;
  var e = Fs();
  const t = 1, r = 3, n = 8, o = 11, a = /^((HTML|SVG)\w*)?Element$/, i = (y) => {
    try {
      return typeof y.hasAttribute == "function" && y.hasAttribute("is");
    } catch {
      return !1;
    }
  }, l = (y) => {
    const P = y.constructor.name, { nodeType: d, tagName: E } = y, g = typeof E == "string" && E.includes("-") || i(y);
    return d === t && (a.test(P) || g) || d === r && P === "Text" || d === n && P === "Comment" || d === o && P === "DocumentFragment";
  }, c = (y) => {
    var P;
    return (y == null || (P = y.constructor) === null || P === void 0 ? void 0 : P.name) && l(y);
  };
  rt.test = c;
  function u(y) {
    return y.nodeType === r;
  }
  function p(y) {
    return y.nodeType === n;
  }
  function f(y) {
    return y.nodeType === o;
  }
  const s = (y, P, d, E, g, R) => {
    if (u(y))
      return (0, e.printText)(y.data, P);
    if (p(y))
      return (0, e.printComment)(y.data, P);
    const q = f(y) ? "DocumentFragment" : y.tagName.toLowerCase();
    return ++E > P.maxDepth ? (0, e.printElementAsLeaf)(q, P) : (0, e.printElement)(
      q,
      (0, e.printProps)(
        f(y) ? [] : Array.from(y.attributes).map((v) => v.name).sort(),
        f(y) ? {} : Array.from(y.attributes).reduce((v, b) => (v[b.name] = b.value, v), {}),
        P,
        d + P.indent,
        E,
        g,
        R
      ),
      (0, e.printChildren)(
        Array.prototype.slice.call(y.childNodes || y.children),
        P,
        d + P.indent,
        E,
        g,
        R
      ),
      P,
      d
    );
  };
  rt.serialize = s;
  var h = {
    serialize: s,
    test: c
  };
  return rt.default = h, rt;
}
var nt = {}, Kl;
function cb() {
  if (Kl) return nt;
  Kl = 1, Object.defineProperty(nt, "__esModule", {
    value: !0
  }), nt.test = nt.serialize = nt.default = void 0;
  var e = Si();
  const t = "@@__IMMUTABLE_ITERABLE__@@", r = "@@__IMMUTABLE_LIST__@@", n = "@@__IMMUTABLE_KEYED__@@", o = "@@__IMMUTABLE_MAP__@@", a = "@@__IMMUTABLE_ORDERED__@@", i = "@@__IMMUTABLE_RECORD__@@", l = "@@__IMMUTABLE_SEQ__@@", c = "@@__IMMUTABLE_SET__@@", u = "@@__IMMUTABLE_STACK__@@", p = (b) => "Immutable." + b, f = (b) => "[" + b + "]", s = " ", m = "…", h = (b, _, M, O, x, A, T) => ++O > _.maxDepth ? f(p(T)) : p(T) + s + "{" + (0, e.printIteratorEntries)(
    b.entries(),
    _,
    M,
    O,
    x,
    A
  ) + "}";
  function y(b) {
    let _ = 0;
    return {
      next() {
        if (_ < b._keys.length) {
          const M = b._keys[_++];
          return {
            done: !1,
            value: [M, b.get(M)]
          };
        }
        return {
          done: !0,
          value: void 0
        };
      }
    };
  }
  const P = (b, _, M, O, x, A) => {
    const T = p(b._name || "Record");
    return ++O > _.maxDepth ? f(T) : T + s + "{" + (0, e.printIteratorEntries)(
      y(b),
      _,
      M,
      O,
      x,
      A
    ) + "}";
  }, d = (b, _, M, O, x, A) => {
    const T = p("Seq");
    return ++O > _.maxDepth ? f(T) : b[n] ? T + s + "{" + // from Immutable collection of entries or from ECMAScript object
    (b._iter || b._object ? (0, e.printIteratorEntries)(
      b.entries(),
      _,
      M,
      O,
      x,
      A
    ) : m) + "}" : T + s + "[" + (b._iter || // from Immutable collection of values
    b._array || // from ECMAScript array
    b._collection || // from ECMAScript collection in immutable v4
    b._iterable ? (0, e.printIteratorValues)(
      b.values(),
      _,
      M,
      O,
      x,
      A
    ) : m) + "]";
  }, E = (b, _, M, O, x, A, T) => ++O > _.maxDepth ? f(p(T)) : p(T) + s + "[" + (0, e.printIteratorValues)(
    b.values(),
    _,
    M,
    O,
    x,
    A
  ) + "]", g = (b, _, M, O, x, A) => b[o] ? h(
    b,
    _,
    M,
    O,
    x,
    A,
    b[a] ? "OrderedMap" : "Map"
  ) : b[r] ? E(
    b,
    _,
    M,
    O,
    x,
    A,
    "List"
  ) : b[c] ? E(
    b,
    _,
    M,
    O,
    x,
    A,
    b[a] ? "OrderedSet" : "Set"
  ) : b[u] ? E(
    b,
    _,
    M,
    O,
    x,
    A,
    "Stack"
  ) : b[l] ? d(b, _, M, O, x, A) : P(b, _, M, O, x, A);
  nt.serialize = g;
  const R = (b) => b && (b[t] === !0 || b[i] === !0);
  nt.test = R;
  var v = {
    serialize: g,
    test: R
  };
  return nt.default = v, nt;
}
var ot = {}, Qa = { exports: {} }, ve = {};
/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ql;
function db() {
  if (Ql) return ve;
  Ql = 1;
  var e = 60103, t = 60106, r = 60107, n = 60108, o = 60114, a = 60109, i = 60110, l = 60112, c = 60113, u = 60120, p = 60115, f = 60116, s = 60121, m = 60122, h = 60117, y = 60129, P = 60131;
  if (typeof Symbol == "function" && Symbol.for) {
    var d = Symbol.for;
    e = d("react.element"), t = d("react.portal"), r = d("react.fragment"), n = d("react.strict_mode"), o = d("react.profiler"), a = d("react.provider"), i = d("react.context"), l = d("react.forward_ref"), c = d("react.suspense"), u = d("react.suspense_list"), p = d("react.memo"), f = d("react.lazy"), s = d("react.block"), m = d("react.server.block"), h = d("react.fundamental"), y = d("react.debug_trace_mode"), P = d("react.legacy_hidden");
  }
  function E(T) {
    if (typeof T == "object" && T !== null) {
      var I = T.$$typeof;
      switch (I) {
        case e:
          switch (T = T.type, T) {
            case r:
            case o:
            case n:
            case c:
            case u:
              return T;
            default:
              switch (T = T && T.$$typeof, T) {
                case i:
                case l:
                case f:
                case p:
                case a:
                  return T;
                default:
                  return I;
              }
          }
        case t:
          return I;
      }
    }
  }
  var g = a, R = e, q = l, v = r, b = f, _ = p, M = t, O = o, x = n, A = c;
  return ve.ContextConsumer = i, ve.ContextProvider = g, ve.Element = R, ve.ForwardRef = q, ve.Fragment = v, ve.Lazy = b, ve.Memo = _, ve.Portal = M, ve.Profiler = O, ve.StrictMode = x, ve.Suspense = A, ve.isAsyncMode = function() {
    return !1;
  }, ve.isConcurrentMode = function() {
    return !1;
  }, ve.isContextConsumer = function(T) {
    return E(T) === i;
  }, ve.isContextProvider = function(T) {
    return E(T) === a;
  }, ve.isElement = function(T) {
    return typeof T == "object" && T !== null && T.$$typeof === e;
  }, ve.isForwardRef = function(T) {
    return E(T) === l;
  }, ve.isFragment = function(T) {
    return E(T) === r;
  }, ve.isLazy = function(T) {
    return E(T) === f;
  }, ve.isMemo = function(T) {
    return E(T) === p;
  }, ve.isPortal = function(T) {
    return E(T) === t;
  }, ve.isProfiler = function(T) {
    return E(T) === o;
  }, ve.isStrictMode = function(T) {
    return E(T) === n;
  }, ve.isSuspense = function(T) {
    return E(T) === c;
  }, ve.isValidElementType = function(T) {
    return typeof T == "string" || typeof T == "function" || T === r || T === o || T === y || T === n || T === c || T === u || T === P || typeof T == "object" && T !== null && (T.$$typeof === f || T.$$typeof === p || T.$$typeof === a || T.$$typeof === i || T.$$typeof === l || T.$$typeof === h || T.$$typeof === s || T[0] === m);
  }, ve.typeOf = E, ve;
}
var be = {};
/** @license React v17.0.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gl;
function fb() {
  return Gl || (Gl = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = 60103, t = 60106, r = 60107, n = 60108, o = 60114, a = 60109, i = 60110, l = 60112, c = 60113, u = 60120, p = 60115, f = 60116, s = 60121, m = 60122, h = 60117, y = 60129, P = 60131;
    if (typeof Symbol == "function" && Symbol.for) {
      var d = Symbol.for;
      e = d("react.element"), t = d("react.portal"), r = d("react.fragment"), n = d("react.strict_mode"), o = d("react.profiler"), a = d("react.provider"), i = d("react.context"), l = d("react.forward_ref"), c = d("react.suspense"), u = d("react.suspense_list"), p = d("react.memo"), f = d("react.lazy"), s = d("react.block"), m = d("react.server.block"), h = d("react.fundamental"), d("react.scope"), d("react.opaque.id"), y = d("react.debug_trace_mode"), d("react.offscreen"), P = d("react.legacy_hidden");
    }
    var E = !1;
    function g(F) {
      return !!(typeof F == "string" || typeof F == "function" || F === r || F === o || F === y || F === n || F === c || F === u || F === P || E || typeof F == "object" && F !== null && (F.$$typeof === f || F.$$typeof === p || F.$$typeof === a || F.$$typeof === i || F.$$typeof === l || F.$$typeof === h || F.$$typeof === s || F[0] === m));
    }
    function R(F) {
      if (typeof F == "object" && F !== null) {
        var X = F.$$typeof;
        switch (X) {
          case e:
            var Z = F.type;
            switch (Z) {
              case r:
              case o:
              case n:
              case c:
              case u:
                return Z;
              default:
                var J = Z && Z.$$typeof;
                switch (J) {
                  case i:
                  case l:
                  case f:
                  case p:
                  case a:
                    return J;
                  default:
                    return X;
                }
            }
          case t:
            return X;
        }
      }
    }
    var q = i, v = a, b = e, _ = l, M = r, O = f, x = p, A = t, T = o, I = n, L = c, V = !1, z = !1;
    function K(F) {
      return V || (V = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function W(F) {
      return z || (z = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function re(F) {
      return R(F) === i;
    }
    function le(F) {
      return R(F) === a;
    }
    function Re(F) {
      return typeof F == "object" && F !== null && F.$$typeof === e;
    }
    function H(F) {
      return R(F) === l;
    }
    function ue(F) {
      return R(F) === r;
    }
    function Q(F) {
      return R(F) === f;
    }
    function ae(F) {
      return R(F) === p;
    }
    function pe(F) {
      return R(F) === t;
    }
    function ee(F) {
      return R(F) === o;
    }
    function S(F) {
      return R(F) === n;
    }
    function U(F) {
      return R(F) === c;
    }
    be.ContextConsumer = q, be.ContextProvider = v, be.Element = b, be.ForwardRef = _, be.Fragment = M, be.Lazy = O, be.Memo = x, be.Portal = A, be.Profiler = T, be.StrictMode = I, be.Suspense = L, be.isAsyncMode = K, be.isConcurrentMode = W, be.isContextConsumer = re, be.isContextProvider = le, be.isElement = Re, be.isForwardRef = H, be.isFragment = ue, be.isLazy = Q, be.isMemo = ae, be.isPortal = pe, be.isProfiler = ee, be.isStrictMode = S, be.isSuspense = U, be.isValidElementType = g, be.typeOf = R;
  })()), be;
}
var Yl;
function pb() {
  return Yl || (Yl = 1, process.env.NODE_ENV === "production" ? Qa.exports = db() : Qa.exports = fb()), Qa.exports;
}
var Xl;
function mb() {
  if (Xl) return ot;
  Xl = 1, Object.defineProperty(ot, "__esModule", {
    value: !0
  }), ot.test = ot.serialize = ot.default = void 0;
  var e = n(pb()), t = Fs();
  function r(f) {
    if (typeof WeakMap != "function") return null;
    var s = /* @__PURE__ */ new WeakMap(), m = /* @__PURE__ */ new WeakMap();
    return (r = function(h) {
      return h ? m : s;
    })(f);
  }
  function n(f, s) {
    if (f && f.__esModule)
      return f;
    if (f === null || typeof f != "object" && typeof f != "function")
      return { default: f };
    var m = r(s);
    if (m && m.has(f))
      return m.get(f);
    var h = {}, y = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var P in f)
      if (P !== "default" && Object.prototype.hasOwnProperty.call(f, P)) {
        var d = y ? Object.getOwnPropertyDescriptor(f, P) : null;
        d && (d.get || d.set) ? Object.defineProperty(h, P, d) : h[P] = f[P];
      }
    return h.default = f, m && m.set(f, h), h;
  }
  const o = (f, s = []) => (Array.isArray(f) ? f.forEach((m) => {
    o(m, s);
  }) : f != null && f !== !1 && s.push(f), s), a = (f) => {
    const s = f.type;
    if (typeof s == "string")
      return s;
    if (typeof s == "function")
      return s.displayName || s.name || "Unknown";
    if (e.isFragment(f))
      return "React.Fragment";
    if (e.isSuspense(f))
      return "React.Suspense";
    if (typeof s == "object" && s !== null) {
      if (e.isContextProvider(f))
        return "Context.Provider";
      if (e.isContextConsumer(f))
        return "Context.Consumer";
      if (e.isForwardRef(f)) {
        if (s.displayName)
          return s.displayName;
        const m = s.render.displayName || s.render.name || "";
        return m !== "" ? "ForwardRef(" + m + ")" : "ForwardRef";
      }
      if (e.isMemo(f)) {
        const m = s.displayName || s.type.displayName || s.type.name || "";
        return m !== "" ? "Memo(" + m + ")" : "Memo";
      }
    }
    return "UNDEFINED";
  }, i = (f) => {
    const { props: s } = f;
    return Object.keys(s).filter((m) => m !== "children" && s[m] !== void 0).sort();
  }, l = (f, s, m, h, y, P) => ++h > s.maxDepth ? (0, t.printElementAsLeaf)(a(f), s) : (0, t.printElement)(
    a(f),
    (0, t.printProps)(
      i(f),
      f.props,
      s,
      m + s.indent,
      h,
      y,
      P
    ),
    (0, t.printChildren)(
      o(f.props.children),
      s,
      m + s.indent,
      h,
      y,
      P
    ),
    s,
    m
  );
  ot.serialize = l;
  const c = (f) => f != null && e.isElement(f);
  ot.test = c;
  var p = {
    serialize: l,
    test: c
  };
  return ot.default = p, ot;
}
var at = {}, Zl;
function hb() {
  if (Zl) return at;
  Zl = 1, Object.defineProperty(at, "__esModule", {
    value: !0
  }), at.test = at.serialize = at.default = void 0;
  var e = Fs(), t = (function() {
    return typeof globalThis < "u" ? globalThis : typeof t < "u" ? t : typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")();
  })(), r = t["jest-symbol-do-not-touch"] || t.Symbol;
  const n = typeof r == "function" && r.for ? r.for("react.test.json") : 245830487, o = (u) => {
    const { props: p } = u;
    return p ? Object.keys(p).filter((f) => p[f] !== void 0).sort() : [];
  }, a = (u, p, f, s, m, h) => ++s > p.maxDepth ? (0, e.printElementAsLeaf)(u.type, p) : (0, e.printElement)(
    u.type,
    u.props ? (0, e.printProps)(
      o(u),
      u.props,
      p,
      f + p.indent,
      s,
      m,
      h
    ) : "",
    u.children ? (0, e.printChildren)(
      u.children,
      p,
      f + p.indent,
      s,
      m,
      h
    ) : "",
    p,
    f
  );
  at.serialize = a;
  const i = (u) => u && u.$$typeof === n;
  at.test = i;
  var c = {
    serialize: a,
    test: i
  };
  return at.default = c, at;
}
var Jl;
function vb() {
  if (Jl) return Ke;
  Jl = 1, Object.defineProperty(Ke, "__esModule", {
    value: !0
  }), Ke.default = Ke.DEFAULT_OPTIONS = void 0, Ke.format = ae, Ke.plugins = void 0;
  var e = u(op()), t = Si(), r = u(
    ob()
  ), n = u(ib()), o = u(sb()), a = u(ub()), i = u(cb()), l = u(mb()), c = u(
    hb()
  );
  function u(S) {
    return S && S.__esModule ? S : { default: S };
  }
  const p = Object.prototype.toString, f = Date.prototype.toISOString, s = Error.prototype.toString, m = RegExp.prototype.toString, h = (S) => typeof S.constructor == "function" && S.constructor.name || "Object", y = (S) => typeof window < "u" && S === window, P = /^Symbol\((.*)\)(.*)$/, d = /\n/gi;
  class E extends Error {
    constructor(U, F) {
      super(U), this.stack = F, this.name = this.constructor.name;
    }
  }
  function g(S) {
    return S === "[object Array]" || S === "[object ArrayBuffer]" || S === "[object DataView]" || S === "[object Float32Array]" || S === "[object Float64Array]" || S === "[object Int8Array]" || S === "[object Int16Array]" || S === "[object Int32Array]" || S === "[object Uint8Array]" || S === "[object Uint8ClampedArray]" || S === "[object Uint16Array]" || S === "[object Uint32Array]";
  }
  function R(S) {
    return Object.is(S, -0) ? "-0" : String(S);
  }
  function q(S) {
    return `${S}n`;
  }
  function v(S, U) {
    return U ? "[Function " + (S.name || "anonymous") + "]" : "[Function]";
  }
  function b(S) {
    return String(S).replace(P, "Symbol($1)");
  }
  function _(S) {
    return "[" + s.call(S) + "]";
  }
  function M(S, U, F, X) {
    if (S === !0 || S === !1)
      return "" + S;
    if (S === void 0)
      return "undefined";
    if (S === null)
      return "null";
    const Z = typeof S;
    if (Z === "number")
      return R(S);
    if (Z === "bigint")
      return q(S);
    if (Z === "string")
      return X ? '"' + S.replace(/"|\\/g, "\\$&") + '"' : '"' + S + '"';
    if (Z === "function")
      return v(S, U);
    if (Z === "symbol")
      return b(S);
    const J = p.call(S);
    return J === "[object WeakMap]" ? "WeakMap {}" : J === "[object WeakSet]" ? "WeakSet {}" : J === "[object Function]" || J === "[object GeneratorFunction]" ? v(S, U) : J === "[object Symbol]" ? b(S) : J === "[object Date]" ? isNaN(+S) ? "Date { NaN }" : f.call(S) : J === "[object Error]" ? _(S) : J === "[object RegExp]" ? F ? m.call(S).replace(/[\\^$*+?.()|[\]{}]/g, "\\$&") : m.call(S) : S instanceof Error ? _(S) : null;
  }
  function O(S, U, F, X, Z, J) {
    if (Z.indexOf(S) !== -1)
      return "[Circular]";
    Z = Z.slice(), Z.push(S);
    const ce = ++X > U.maxDepth, oe = U.min;
    if (U.callToJSON && !ce && S.toJSON && typeof S.toJSON == "function" && !J)
      return I(S.toJSON(), U, F, X, Z, !0);
    const he = p.call(S);
    return he === "[object Arguments]" ? ce ? "[Arguments]" : (oe ? "" : "Arguments ") + "[" + (0, t.printListItems)(
      S,
      U,
      F,
      X,
      Z,
      I
    ) + "]" : g(he) ? ce ? "[" + S.constructor.name + "]" : (oe || !U.printBasicPrototype && S.constructor.name === "Array" ? "" : S.constructor.name + " ") + "[" + (0, t.printListItems)(
      S,
      U,
      F,
      X,
      Z,
      I
    ) + "]" : he === "[object Map]" ? ce ? "[Map]" : "Map {" + (0, t.printIteratorEntries)(
      S.entries(),
      U,
      F,
      X,
      Z,
      I,
      " => "
    ) + "}" : he === "[object Set]" ? ce ? "[Set]" : "Set {" + (0, t.printIteratorValues)(
      S.values(),
      U,
      F,
      X,
      Z,
      I
    ) + "}" : ce || y(S) ? "[" + h(S) + "]" : (oe || !U.printBasicPrototype && h(S) === "Object" ? "" : h(S) + " ") + "{" + (0, t.printObjectProperties)(
      S,
      U,
      F,
      X,
      Z,
      I
    ) + "}";
  }
  function x(S) {
    return S.serialize != null;
  }
  function A(S, U, F, X, Z, J) {
    let ce;
    try {
      ce = x(S) ? S.serialize(U, F, X, Z, J, I) : S.print(
        U,
        (oe) => I(oe, F, X, Z, J),
        (oe) => {
          const he = X + F.indent;
          return he + oe.replace(d, `
` + he);
        },
        {
          edgeSpacing: F.spacingOuter,
          min: F.min,
          spacing: F.spacingInner
        },
        F.colors
      );
    } catch (oe) {
      throw new E(oe.message, oe.stack);
    }
    if (typeof ce != "string")
      throw new Error(
        `pretty-format: Plugin must return type "string" but instead returned "${typeof ce}".`
      );
    return ce;
  }
  function T(S, U) {
    for (let F = 0; F < S.length; F++)
      try {
        if (S[F].test(U))
          return S[F];
      } catch (X) {
        throw new E(X.message, X.stack);
      }
    return null;
  }
  function I(S, U, F, X, Z, J) {
    const ce = T(U.plugins, S);
    if (ce !== null)
      return A(ce, S, U, F, X, Z);
    const oe = M(
      S,
      U.printFunctionName,
      U.escapeRegex,
      U.escapeString
    );
    return oe !== null ? oe : O(
      S,
      U,
      F,
      X,
      Z,
      J
    );
  }
  const L = {
    comment: "gray",
    content: "reset",
    prop: "yellow",
    tag: "cyan",
    value: "green"
  }, V = Object.keys(L), z = {
    callToJSON: !0,
    compareKeys: void 0,
    escapeRegex: !1,
    escapeString: !0,
    highlight: !1,
    indent: 2,
    maxDepth: 1 / 0,
    min: !1,
    plugins: [],
    printBasicPrototype: !0,
    printFunctionName: !0,
    theme: L
  };
  Ke.DEFAULT_OPTIONS = z;
  function K(S) {
    if (Object.keys(S).forEach((U) => {
      if (!z.hasOwnProperty(U))
        throw new Error(`pretty-format: Unknown option "${U}".`);
    }), S.min && S.indent !== void 0 && S.indent !== 0)
      throw new Error(
        'pretty-format: Options "min" and "indent" cannot be used together.'
      );
    if (S.theme !== void 0) {
      if (S.theme === null)
        throw new Error('pretty-format: Option "theme" must not be null.');
      if (typeof S.theme != "object")
        throw new Error(
          `pretty-format: Option "theme" must be of type "object" but instead received "${typeof S.theme}".`
        );
    }
  }
  const W = (S) => V.reduce((U, F) => {
    const X = S.theme && S.theme[F] !== void 0 ? S.theme[F] : L[F], Z = X && e.default[X];
    if (Z && typeof Z.close == "string" && typeof Z.open == "string")
      U[F] = Z;
    else
      throw new Error(
        `pretty-format: Option "theme" has a key "${F}" whose value "${X}" is undefined in ansi-styles.`
      );
    return U;
  }, /* @__PURE__ */ Object.create(null)), re = () => V.reduce((S, U) => (S[U] = {
    close: "",
    open: ""
  }, S), /* @__PURE__ */ Object.create(null)), le = (S) => S && S.printFunctionName !== void 0 ? S.printFunctionName : z.printFunctionName, Re = (S) => S && S.escapeRegex !== void 0 ? S.escapeRegex : z.escapeRegex, H = (S) => S && S.escapeString !== void 0 ? S.escapeString : z.escapeString, ue = (S) => {
    var U;
    return {
      callToJSON: S && S.callToJSON !== void 0 ? S.callToJSON : z.callToJSON,
      colors: S && S.highlight ? W(S) : re(),
      compareKeys: S && typeof S.compareKeys == "function" ? S.compareKeys : z.compareKeys,
      escapeRegex: Re(S),
      escapeString: H(S),
      indent: S && S.min ? "" : Q(
        S && S.indent !== void 0 ? S.indent : z.indent
      ),
      maxDepth: S && S.maxDepth !== void 0 ? S.maxDepth : z.maxDepth,
      min: S && S.min !== void 0 ? S.min : z.min,
      plugins: S && S.plugins !== void 0 ? S.plugins : z.plugins,
      printBasicPrototype: (U = S?.printBasicPrototype) !== null && U !== void 0 ? U : !0,
      printFunctionName: le(S),
      spacingInner: S && S.min ? " " : `
`,
      spacingOuter: S && S.min ? "" : `
`
    };
  };
  function Q(S) {
    return new Array(S + 1).join(" ");
  }
  function ae(S, U) {
    if (U && (K(U), U.plugins)) {
      const X = T(U.plugins, S);
      if (X !== null)
        return A(X, S, ue(U), "", 0, []);
    }
    const F = M(
      S,
      le(U),
      Re(U),
      H(U)
    );
    return F !== null ? F : O(S, ue(U), "", 0, []);
  }
  const pe = {
    AsymmetricMatcher: r.default,
    ConvertAnsi: n.default,
    DOMCollection: o.default,
    DOMElement: a.default,
    Immutable: i.default,
    ReactElement: l.default,
    ReactTestComponent: c.default
  };
  Ke.plugins = pe;
  var ee = ae;
  return Ke.default = ee, Ke;
}
var ap = vb(), bb = Object.prototype.toString;
function yb(e) {
  return typeof e == "function" || bb.call(e) === "[object Function]";
}
function gb(e) {
  var t = Number(e);
  return isNaN(t) ? 0 : t === 0 || !isFinite(t) ? t : (t > 0 ? 1 : -1) * Math.floor(Math.abs(t));
}
var Rb = Math.pow(2, 53) - 1;
function Eb(e) {
  var t = gb(e);
  return Math.min(Math.max(t, 0), Rb);
}
function Ve(e, t) {
  var r = Array, n = Object(e);
  if (e == null)
    throw new TypeError("Array.from requires an array-like object - not null or undefined");
  for (var o = Eb(n.length), a = yb(r) ? Object(new r(o)) : new Array(o), i = 0, l; i < o; )
    l = n[i], a[i] = l, i += 1;
  return a.length = o, a;
}
function _a(e) {
  "@babel/helpers - typeof";
  return _a = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, _a(e);
}
function wb(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Cb(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, ip(n.key), n);
  }
}
function _b(e, t, r) {
  return t && Cb(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Pb(e, t, r) {
  return t = ip(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function ip(e) {
  var t = qb(e, "string");
  return _a(t) === "symbol" ? t : String(t);
}
function qb(e, t) {
  if (_a(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (_a(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Tb = /* @__PURE__ */ (function() {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    wb(this, e), Pb(this, "items", void 0), this.items = t;
  }
  return _b(e, [{
    key: "add",
    value: function(r) {
      return this.has(r) === !1 && this.items.push(r), this;
    }
  }, {
    key: "clear",
    value: function() {
      this.items = [];
    }
  }, {
    key: "delete",
    value: function(r) {
      var n = this.items.length;
      return this.items = this.items.filter(function(o) {
        return o !== r;
      }), n !== this.items.length;
    }
  }, {
    key: "forEach",
    value: function(r) {
      var n = this;
      this.items.forEach(function(o) {
        r(o, o, n);
      });
    }
  }, {
    key: "has",
    value: function(r) {
      return this.items.indexOf(r) !== -1;
    }
  }, {
    key: "size",
    get: function() {
      return this.items.length;
    }
  }]), e;
})();
const Sb = typeof Set > "u" ? Set : Tb;
function xe(e) {
  var t;
  return (
    // eslint-disable-next-line no-restricted-properties -- actual guard for environments without localName
    (t = e.localName) !== null && t !== void 0 ? t : (
      // eslint-disable-next-line no-restricted-properties -- required for the fallback
      e.tagName.toLowerCase()
    )
  );
}
var xb = {
  article: "article",
  aside: "complementary",
  button: "button",
  datalist: "listbox",
  dd: "definition",
  details: "group",
  dialog: "dialog",
  dt: "term",
  fieldset: "group",
  figure: "figure",
  // WARNING: Only with an accessible name
  form: "form",
  footer: "contentinfo",
  h1: "heading",
  h2: "heading",
  h3: "heading",
  h4: "heading",
  h5: "heading",
  h6: "heading",
  header: "banner",
  hr: "separator",
  html: "document",
  legend: "legend",
  li: "listitem",
  math: "math",
  main: "main",
  menu: "list",
  nav: "navigation",
  ol: "list",
  optgroup: "group",
  // WARNING: Only in certain context
  option: "option",
  output: "status",
  progress: "progressbar",
  // WARNING: Only with an accessible name
  section: "region",
  summary: "button",
  table: "table",
  tbody: "rowgroup",
  textarea: "textbox",
  tfoot: "rowgroup",
  // WARNING: Only in certain context
  td: "cell",
  th: "columnheader",
  thead: "rowgroup",
  tr: "row",
  ul: "list"
}, Ob = {
  caption: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  code: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  deletion: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  emphasis: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  generic: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby", "aria-roledescription"]),
  insertion: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  paragraph: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  presentation: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  strong: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  subscript: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  superscript: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"])
};
function Mb(e, t) {
  return [
    "aria-atomic",
    "aria-busy",
    "aria-controls",
    "aria-current",
    "aria-describedby",
    "aria-details",
    // "disabled",
    "aria-dropeffect",
    // "errormessage",
    "aria-flowto",
    "aria-grabbed",
    // "haspopup",
    "aria-hidden",
    // "invalid",
    "aria-keyshortcuts",
    "aria-label",
    "aria-labelledby",
    "aria-live",
    "aria-owns",
    "aria-relevant",
    "aria-roledescription"
  ].some(function(r) {
    var n;
    return e.hasAttribute(r) && !((n = Ob[t]) !== null && n !== void 0 && n.has(r));
  });
}
function sp(e, t) {
  return Mb(e, t);
}
function Ab(e) {
  var t = kb(e);
  if (t === null || t === "presentation") {
    var r = Ib(e);
    if (t !== "presentation" || sp(e, r || ""))
      return r;
  }
  return t;
}
function Ib(e) {
  var t = xb[xe(e)];
  if (t !== void 0)
    return t;
  switch (xe(e)) {
    case "a":
    case "area":
    case "link":
      if (e.hasAttribute("href"))
        return "link";
      break;
    case "img":
      return e.getAttribute("alt") === "" && !sp(e, "img") ? "presentation" : "img";
    case "input": {
      var r = e, n = r.type;
      switch (n) {
        case "button":
        case "image":
        case "reset":
        case "submit":
          return "button";
        case "checkbox":
        case "radio":
          return n;
        case "range":
          return "slider";
        case "email":
        case "tel":
        case "text":
        case "url":
          return e.hasAttribute("list") ? "combobox" : "textbox";
        case "search":
          return e.hasAttribute("list") ? "combobox" : "searchbox";
        case "number":
          return "spinbutton";
        default:
          return null;
      }
    }
    case "select":
      return e.hasAttribute("multiple") || e.size > 1 ? "listbox" : "combobox";
  }
  return null;
}
function kb(e) {
  var t = e.getAttribute("role");
  if (t !== null) {
    var r = t.trim().split(" ")[0];
    if (r.length > 0)
      return r;
  }
  return null;
}
function ye(e) {
  return e !== null && e.nodeType === e.ELEMENT_NODE;
}
function lp(e) {
  return ye(e) && xe(e) === "caption";
}
function ai(e) {
  return ye(e) && xe(e) === "input";
}
function Db(e) {
  return ye(e) && xe(e) === "optgroup";
}
function Nb(e) {
  return ye(e) && xe(e) === "select";
}
function Lb(e) {
  return ye(e) && xe(e) === "table";
}
function Fb(e) {
  return ye(e) && xe(e) === "textarea";
}
function Bb(e) {
  var t = e.ownerDocument === null ? e : e.ownerDocument, r = t.defaultView;
  if (r === null)
    throw new TypeError("no window available");
  return r;
}
function jb(e) {
  return ye(e) && xe(e) === "fieldset";
}
function $b(e) {
  return ye(e) && xe(e) === "legend";
}
function Ub(e) {
  return ye(e) && xe(e) === "slot";
}
function Hb(e) {
  return ye(e) && e.ownerSVGElement !== void 0;
}
function zb(e) {
  return ye(e) && xe(e) === "svg";
}
function Vb(e) {
  return Hb(e) && xe(e) === "title";
}
function hi(e, t) {
  if (ye(e) && e.hasAttribute(t)) {
    var r = e.getAttribute(t).split(" "), n = e.getRootNode ? e.getRootNode() : e.ownerDocument;
    return r.map(function(o) {
      return n.getElementById(o);
    }).filter(
      function(o) {
        return o !== null;
      }
      // TODO: why does this not narrow?
    );
  }
  return [];
}
function lt(e, t) {
  return ye(e) ? t.indexOf(Ab(e)) !== -1 : !1;
}
function Wb(e) {
  return e.trim().replace(/\s\s+/g, " ");
}
function Kb(e, t) {
  if (!ye(e))
    return !1;
  if (e.hasAttribute("hidden") || e.getAttribute("aria-hidden") === "true")
    return !0;
  var r = t(e);
  return r.getPropertyValue("display") === "none" || r.getPropertyValue("visibility") === "hidden";
}
function Qb(e) {
  return lt(e, ["button", "combobox", "listbox", "textbox"]) || up(e, "range");
}
function up(e, t) {
  if (!ye(e))
    return !1;
  switch (t) {
    case "range":
      return lt(e, ["meter", "progressbar", "scrollbar", "slider", "spinbutton"]);
    default:
      throw new TypeError("No knowledge about abstract role '".concat(t, "'. This is likely a bug :("));
  }
}
function eu(e, t) {
  var r = Ve(e.querySelectorAll(t));
  return hi(e, "aria-owns").forEach(function(n) {
    r.push.apply(r, Ve(n.querySelectorAll(t)));
  }), r;
}
function Gb(e) {
  return Nb(e) ? e.selectedOptions || eu(e, "[selected]") : eu(e, '[aria-selected="true"]');
}
function Yb(e) {
  return lt(e, ["none", "presentation"]);
}
function Xb(e) {
  return lp(e);
}
function Zb(e) {
  return lt(e, ["button", "cell", "checkbox", "columnheader", "gridcell", "heading", "label", "legend", "link", "menuitem", "menuitemcheckbox", "menuitemradio", "option", "radio", "row", "rowheader", "switch", "tab", "tooltip", "treeitem"]);
}
function Jb(e) {
  return !1;
}
function ey(e) {
  return ai(e) || Fb(e) ? e.value : e.textContent || "";
}
function tu(e) {
  var t = e.getPropertyValue("content");
  return /^["'].*["']$/.test(t) ? t.slice(1, -1) : "";
}
function cp(e) {
  var t = xe(e);
  return t === "button" || t === "input" && e.getAttribute("type") !== "hidden" || t === "meter" || t === "output" || t === "progress" || t === "select" || t === "textarea";
}
function dp(e) {
  if (cp(e))
    return e;
  var t = null;
  return e.childNodes.forEach(function(r) {
    if (t === null && ye(r)) {
      var n = dp(r);
      n !== null && (t = n);
    }
  }), t;
}
function ty(e) {
  if (e.control !== void 0)
    return e.control;
  var t = e.getAttribute("for");
  return t !== null ? e.ownerDocument.getElementById(t) : dp(e);
}
function ry(e) {
  var t = e.labels;
  if (t === null)
    return t;
  if (t !== void 0)
    return Ve(t);
  if (!cp(e))
    return null;
  var r = e.ownerDocument;
  return Ve(r.querySelectorAll("label")).filter(function(n) {
    return ty(n) === e;
  });
}
function ny(e) {
  var t = e.assignedNodes();
  return t.length === 0 ? Ve(e.childNodes) : t;
}
function fp(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = new Sb(), n = Bb(e), o = t.compute, a = o === void 0 ? "name" : o, i = t.computedStyleSupportsPseudoElements, l = i === void 0 ? t.getComputedStyle !== void 0 : i, c = t.getComputedStyle, u = c === void 0 ? n.getComputedStyle.bind(n) : c, p = t.hidden, f = p === void 0 ? !1 : p;
  function s(d, E) {
    var g = "";
    if (ye(d) && l) {
      var R = u(d, "::before"), q = tu(R);
      g = "".concat(q, " ").concat(g);
    }
    var v = Ub(d) ? ny(d) : Ve(d.childNodes).concat(hi(d, "aria-owns"));
    if (v.forEach(function(M) {
      var O = P(M, {
        isEmbeddedInLabel: E.isEmbeddedInLabel,
        isReferenced: !1,
        recursion: !0
      }), x = ye(M) ? u(M).getPropertyValue("display") : "inline", A = x !== "inline" ? " " : "";
      g += "".concat(A).concat(O).concat(A);
    }), ye(d) && l) {
      var b = u(d, "::after"), _ = tu(b);
      g = "".concat(g, " ").concat(_);
    }
    return g.trim();
  }
  function m(d, E) {
    var g = d.getAttributeNode(E);
    return g !== null && !r.has(g) && g.value.trim() !== "" ? (r.add(g), g.value) : null;
  }
  function h(d) {
    return ye(d) ? m(d, "title") : null;
  }
  function y(d) {
    if (!ye(d))
      return null;
    if (jb(d)) {
      r.add(d);
      for (var E = Ve(d.childNodes), g = 0; g < E.length; g += 1) {
        var R = E[g];
        if ($b(R))
          return P(R, {
            isEmbeddedInLabel: !1,
            isReferenced: !1,
            recursion: !1
          });
      }
    } else if (Lb(d)) {
      r.add(d);
      for (var q = Ve(d.childNodes), v = 0; v < q.length; v += 1) {
        var b = q[v];
        if (lp(b))
          return P(b, {
            isEmbeddedInLabel: !1,
            isReferenced: !1,
            recursion: !1
          });
      }
    } else if (zb(d)) {
      r.add(d);
      for (var _ = Ve(d.childNodes), M = 0; M < _.length; M += 1) {
        var O = _[M];
        if (Vb(O))
          return O.textContent;
      }
      return null;
    } else if (xe(d) === "img" || xe(d) === "area") {
      var x = m(d, "alt");
      if (x !== null)
        return x;
    } else if (Db(d)) {
      var A = m(d, "label");
      if (A !== null)
        return A;
    }
    if (ai(d) && (d.type === "button" || d.type === "submit" || d.type === "reset")) {
      var T = m(d, "value");
      if (T !== null)
        return T;
      if (d.type === "submit")
        return "Submit";
      if (d.type === "reset")
        return "Reset";
    }
    var I = ry(d);
    if (I !== null && I.length !== 0)
      return r.add(d), Ve(I).map(function(K) {
        return P(K, {
          isEmbeddedInLabel: !0,
          isReferenced: !1,
          recursion: !0
        });
      }).filter(function(K) {
        return K.length > 0;
      }).join(" ");
    if (ai(d) && d.type === "image") {
      var L = m(d, "alt");
      if (L !== null)
        return L;
      var V = m(d, "title");
      return V !== null ? V : "Submit Query";
    }
    if (lt(d, ["button"])) {
      var z = s(d, {
        isEmbeddedInLabel: !1
      });
      if (z !== "")
        return z;
    }
    return null;
  }
  function P(d, E) {
    if (r.has(d))
      return "";
    if (!f && Kb(d, u) && !E.isReferenced)
      return r.add(d), "";
    var g = ye(d) ? d.getAttributeNode("aria-labelledby") : null, R = g !== null && !r.has(g) ? hi(d, "aria-labelledby") : [];
    if (a === "name" && !E.isReferenced && R.length > 0)
      return r.add(g), R.map(function(x) {
        return P(x, {
          isEmbeddedInLabel: E.isEmbeddedInLabel,
          isReferenced: !0,
          // this isn't recursion as specified, otherwise we would skip
          // `aria-label` in
          // <input id="myself" aria-label="foo" aria-labelledby="myself"
          recursion: !1
        });
      }).join(" ");
    var q = E.recursion && Qb(d) && a === "name";
    if (!q) {
      var v = (ye(d) && d.getAttribute("aria-label") || "").trim();
      if (v !== "" && a === "name")
        return r.add(d), v;
      if (!Yb(d)) {
        var b = y(d);
        if (b !== null)
          return r.add(d), b;
      }
    }
    if (lt(d, ["menu"]))
      return r.add(d), "";
    if (q || E.isEmbeddedInLabel || E.isReferenced) {
      if (lt(d, ["combobox", "listbox"])) {
        r.add(d);
        var _ = Gb(d);
        return _.length === 0 ? ai(d) ? d.value : "" : Ve(_).map(function(x) {
          return P(x, {
            isEmbeddedInLabel: E.isEmbeddedInLabel,
            isReferenced: !1,
            recursion: !0
          });
        }).join(" ");
      }
      if (up(d, "range"))
        return r.add(d), d.hasAttribute("aria-valuetext") ? d.getAttribute("aria-valuetext") : d.hasAttribute("aria-valuenow") ? d.getAttribute("aria-valuenow") : d.getAttribute("value") || "";
      if (lt(d, ["textbox"]))
        return r.add(d), ey(d);
    }
    if (Zb(d) || ye(d) && E.isReferenced || Xb(d) || Jb()) {
      var M = s(d, {
        isEmbeddedInLabel: E.isEmbeddedInLabel
      });
      if (M !== "")
        return r.add(d), M;
    }
    if (d.nodeType === d.TEXT_NODE)
      return r.add(d), d.textContent || "";
    if (E.recursion)
      return r.add(d), s(d, {
        isEmbeddedInLabel: E.isEmbeddedInLabel
      });
    var O = h(d);
    return O !== null ? (r.add(d), O) : (r.add(d), "");
  }
  return Wb(P(e, {
    isEmbeddedInLabel: !1,
    // by spec computeAccessibleDescription starts with the referenced elements as roots
    isReferenced: a === "description",
    recursion: !1
  }));
}
function Pa(e) {
  "@babel/helpers - typeof";
  return Pa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Pa(e);
}
function ru(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function nu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ru(Object(r), !0).forEach(function(n) {
      oy(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ru(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function oy(e, t, r) {
  return t = ay(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function ay(e) {
  var t = iy(e, "string");
  return Pa(t) === "symbol" ? t : String(t);
}
function iy(e, t) {
  if (Pa(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Pa(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function pp(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = hi(e, "aria-describedby").map(function(o) {
    return fp(o, nu(nu({}, t), {}, {
      compute: "description"
    }));
  }).join(" ");
  if (r === "") {
    var n = e.getAttribute("title");
    r = n === null ? "" : n;
  }
  return r;
}
function sy(e) {
  return lt(e, ["caption", "code", "deletion", "emphasis", "generic", "insertion", "paragraph", "presentation", "strong", "subscript", "superscript"]);
}
function Bs(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return sy(e) ? "" : fp(e, t);
}
var Ne = {}, wr = {}, Ga = {}, Cr = {}, ou;
function ly() {
  if (ou) return Cr;
  ou = 1, Object.defineProperty(Cr, "__esModule", {
    value: !0
  }), Cr.default = void 0;
  function e() {
    var r = this, n = 0, o = {
      "@@iterator": function() {
        return o;
      },
      next: function() {
        if (n < r.length) {
          var i = r[n];
          return n = n + 1, {
            done: !1,
            value: i
          };
        } else
          return {
            done: !0
          };
      }
    };
    return o;
  }
  var t = e;
  return Cr.default = t, Cr;
}
var au;
function Na() {
  if (au) return Ga;
  au = 1, Object.defineProperty(Ga, "__esModule", {
    value: !0
  }), Ga.default = n;
  var e = t(ly());
  function t(o) {
    return o && o.__esModule ? o : { default: o };
  }
  function r(o) {
    "@babel/helpers - typeof";
    return r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(a) {
      return typeof a;
    } : function(a) {
      return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
    }, r(o);
  }
  function n(o, a) {
    return typeof Symbol == "function" && r(Symbol.iterator) === "symbol" && Object.defineProperty(o, Symbol.iterator, {
      value: e.default.bind(a)
    }), o;
  }
  return Ga;
}
var iu;
function uy() {
  if (iu) return wr;
  iu = 1, Object.defineProperty(wr, "__esModule", {
    value: !0
  }), wr.default = void 0;
  var e = t(Na());
  function t(s) {
    return s && s.__esModule ? s : { default: s };
  }
  function r(s, m) {
    return a(s) || o(s, m) || l(s, m) || n();
  }
  function n() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function o(s, m) {
    var h = s == null ? null : typeof Symbol < "u" && s[Symbol.iterator] || s["@@iterator"];
    if (h != null) {
      var y = [], P = !0, d = !1, E, g;
      try {
        for (h = h.call(s); !(P = (E = h.next()).done) && (y.push(E.value), !(m && y.length === m)); P = !0)
          ;
      } catch (R) {
        d = !0, g = R;
      } finally {
        try {
          !P && h.return != null && h.return();
        } finally {
          if (d) throw g;
        }
      }
      return y;
    }
  }
  function a(s) {
    if (Array.isArray(s)) return s;
  }
  function i(s, m) {
    var h = typeof Symbol < "u" && s[Symbol.iterator] || s["@@iterator"];
    if (!h) {
      if (Array.isArray(s) || (h = l(s)) || m) {
        h && (s = h);
        var y = 0, P = function() {
        };
        return { s: P, n: function() {
          return y >= s.length ? { done: !0 } : { done: !1, value: s[y++] };
        }, e: function(q) {
          throw q;
        }, f: P };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var d = !0, E = !1, g;
    return { s: function() {
      h = h.call(s);
    }, n: function() {
      var q = h.next();
      return d = q.done, q;
    }, e: function(q) {
      E = !0, g = q;
    }, f: function() {
      try {
        !d && h.return != null && h.return();
      } finally {
        if (E) throw g;
      }
    } };
  }
  function l(s, m) {
    if (s) {
      if (typeof s == "string") return c(s, m);
      var h = Object.prototype.toString.call(s).slice(8, -1);
      if (h === "Object" && s.constructor && (h = s.constructor.name), h === "Map" || h === "Set") return Array.from(s);
      if (h === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(h)) return c(s, m);
    }
  }
  function c(s, m) {
    (m == null || m > s.length) && (m = s.length);
    for (var h = 0, y = new Array(m); h < m; h++)
      y[h] = s[h];
    return y;
  }
  var u = [["aria-activedescendant", {
    type: "id"
  }], ["aria-atomic", {
    type: "boolean"
  }], ["aria-autocomplete", {
    type: "token",
    values: ["inline", "list", "both", "none"]
  }], ["aria-braillelabel", {
    type: "string"
  }], ["aria-brailleroledescription", {
    type: "string"
  }], ["aria-busy", {
    type: "boolean"
  }], ["aria-checked", {
    type: "tristate"
  }], ["aria-colcount", {
    type: "integer"
  }], ["aria-colindex", {
    type: "integer"
  }], ["aria-colspan", {
    type: "integer"
  }], ["aria-controls", {
    type: "idlist"
  }], ["aria-current", {
    type: "token",
    values: ["page", "step", "location", "date", "time", !0, !1]
  }], ["aria-describedby", {
    type: "idlist"
  }], ["aria-description", {
    type: "string"
  }], ["aria-details", {
    type: "id"
  }], ["aria-disabled", {
    type: "boolean"
  }], ["aria-dropeffect", {
    type: "tokenlist",
    values: ["copy", "execute", "link", "move", "none", "popup"]
  }], ["aria-errormessage", {
    type: "id"
  }], ["aria-expanded", {
    type: "boolean",
    allowundefined: !0
  }], ["aria-flowto", {
    type: "idlist"
  }], ["aria-grabbed", {
    type: "boolean",
    allowundefined: !0
  }], ["aria-haspopup", {
    type: "token",
    values: [!1, !0, "menu", "listbox", "tree", "grid", "dialog"]
  }], ["aria-hidden", {
    type: "boolean",
    allowundefined: !0
  }], ["aria-invalid", {
    type: "token",
    values: ["grammar", !1, "spelling", !0]
  }], ["aria-keyshortcuts", {
    type: "string"
  }], ["aria-label", {
    type: "string"
  }], ["aria-labelledby", {
    type: "idlist"
  }], ["aria-level", {
    type: "integer"
  }], ["aria-live", {
    type: "token",
    values: ["assertive", "off", "polite"]
  }], ["aria-modal", {
    type: "boolean"
  }], ["aria-multiline", {
    type: "boolean"
  }], ["aria-multiselectable", {
    type: "boolean"
  }], ["aria-orientation", {
    type: "token",
    values: ["vertical", "undefined", "horizontal"]
  }], ["aria-owns", {
    type: "idlist"
  }], ["aria-placeholder", {
    type: "string"
  }], ["aria-posinset", {
    type: "integer"
  }], ["aria-pressed", {
    type: "tristate"
  }], ["aria-readonly", {
    type: "boolean"
  }], ["aria-relevant", {
    type: "tokenlist",
    values: ["additions", "all", "removals", "text"]
  }], ["aria-required", {
    type: "boolean"
  }], ["aria-roledescription", {
    type: "string"
  }], ["aria-rowcount", {
    type: "integer"
  }], ["aria-rowindex", {
    type: "integer"
  }], ["aria-rowspan", {
    type: "integer"
  }], ["aria-selected", {
    type: "boolean",
    allowundefined: !0
  }], ["aria-setsize", {
    type: "integer"
  }], ["aria-sort", {
    type: "token",
    values: ["ascending", "descending", "none", "other"]
  }], ["aria-valuemax", {
    type: "number"
  }], ["aria-valuemin", {
    type: "number"
  }], ["aria-valuenow", {
    type: "number"
  }], ["aria-valuetext", {
    type: "string"
  }]], p = {
    entries: function() {
      return u;
    },
    forEach: function(m) {
      var h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, y = i(u), P;
      try {
        for (y.s(); !(P = y.n()).done; ) {
          var d = r(P.value, 2), E = d[0], g = d[1];
          m.call(h, g, E, u);
        }
      } catch (R) {
        y.e(R);
      } finally {
        y.f();
      }
    },
    get: function(m) {
      var h = u.find(function(y) {
        return y[0] === m;
      });
      return h && h[1];
    },
    has: function(m) {
      return !!p.get(m);
    },
    keys: function() {
      return u.map(function(m) {
        var h = r(m, 1), y = h[0];
        return y;
      });
    },
    values: function() {
      return u.map(function(m) {
        var h = r(m, 2), y = h[1];
        return y;
      });
    }
  }, f = (0, e.default)(p, p.entries());
  return wr.default = f, wr;
}
var _r = {}, su;
function cy() {
  if (su) return _r;
  su = 1, Object.defineProperty(_r, "__esModule", {
    value: !0
  }), _r.default = void 0;
  var e = t(Na());
  function t(s) {
    return s && s.__esModule ? s : { default: s };
  }
  function r(s, m) {
    return a(s) || o(s, m) || l(s, m) || n();
  }
  function n() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function o(s, m) {
    var h = s == null ? null : typeof Symbol < "u" && s[Symbol.iterator] || s["@@iterator"];
    if (h != null) {
      var y = [], P = !0, d = !1, E, g;
      try {
        for (h = h.call(s); !(P = (E = h.next()).done) && (y.push(E.value), !(m && y.length === m)); P = !0)
          ;
      } catch (R) {
        d = !0, g = R;
      } finally {
        try {
          !P && h.return != null && h.return();
        } finally {
          if (d) throw g;
        }
      }
      return y;
    }
  }
  function a(s) {
    if (Array.isArray(s)) return s;
  }
  function i(s, m) {
    var h = typeof Symbol < "u" && s[Symbol.iterator] || s["@@iterator"];
    if (!h) {
      if (Array.isArray(s) || (h = l(s)) || m) {
        h && (s = h);
        var y = 0, P = function() {
        };
        return { s: P, n: function() {
          return y >= s.length ? { done: !0 } : { done: !1, value: s[y++] };
        }, e: function(q) {
          throw q;
        }, f: P };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var d = !0, E = !1, g;
    return { s: function() {
      h = h.call(s);
    }, n: function() {
      var q = h.next();
      return d = q.done, q;
    }, e: function(q) {
      E = !0, g = q;
    }, f: function() {
      try {
        !d && h.return != null && h.return();
      } finally {
        if (E) throw g;
      }
    } };
  }
  function l(s, m) {
    if (s) {
      if (typeof s == "string") return c(s, m);
      var h = Object.prototype.toString.call(s).slice(8, -1);
      if (h === "Object" && s.constructor && (h = s.constructor.name), h === "Map" || h === "Set") return Array.from(s);
      if (h === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(h)) return c(s, m);
    }
  }
  function c(s, m) {
    (m == null || m > s.length) && (m = s.length);
    for (var h = 0, y = new Array(m); h < m; h++)
      y[h] = s[h];
    return y;
  }
  var u = [["a", {
    reserved: !1
  }], ["abbr", {
    reserved: !1
  }], ["acronym", {
    reserved: !1
  }], ["address", {
    reserved: !1
  }], ["applet", {
    reserved: !1
  }], ["area", {
    reserved: !1
  }], ["article", {
    reserved: !1
  }], ["aside", {
    reserved: !1
  }], ["audio", {
    reserved: !1
  }], ["b", {
    reserved: !1
  }], ["base", {
    reserved: !0
  }], ["bdi", {
    reserved: !1
  }], ["bdo", {
    reserved: !1
  }], ["big", {
    reserved: !1
  }], ["blink", {
    reserved: !1
  }], ["blockquote", {
    reserved: !1
  }], ["body", {
    reserved: !1
  }], ["br", {
    reserved: !1
  }], ["button", {
    reserved: !1
  }], ["canvas", {
    reserved: !1
  }], ["caption", {
    reserved: !1
  }], ["center", {
    reserved: !1
  }], ["cite", {
    reserved: !1
  }], ["code", {
    reserved: !1
  }], ["col", {
    reserved: !0
  }], ["colgroup", {
    reserved: !0
  }], ["content", {
    reserved: !1
  }], ["data", {
    reserved: !1
  }], ["datalist", {
    reserved: !1
  }], ["dd", {
    reserved: !1
  }], ["del", {
    reserved: !1
  }], ["details", {
    reserved: !1
  }], ["dfn", {
    reserved: !1
  }], ["dialog", {
    reserved: !1
  }], ["dir", {
    reserved: !1
  }], ["div", {
    reserved: !1
  }], ["dl", {
    reserved: !1
  }], ["dt", {
    reserved: !1
  }], ["em", {
    reserved: !1
  }], ["embed", {
    reserved: !1
  }], ["fieldset", {
    reserved: !1
  }], ["figcaption", {
    reserved: !1
  }], ["figure", {
    reserved: !1
  }], ["font", {
    reserved: !1
  }], ["footer", {
    reserved: !1
  }], ["form", {
    reserved: !1
  }], ["frame", {
    reserved: !1
  }], ["frameset", {
    reserved: !1
  }], ["h1", {
    reserved: !1
  }], ["h2", {
    reserved: !1
  }], ["h3", {
    reserved: !1
  }], ["h4", {
    reserved: !1
  }], ["h5", {
    reserved: !1
  }], ["h6", {
    reserved: !1
  }], ["head", {
    reserved: !0
  }], ["header", {
    reserved: !1
  }], ["hgroup", {
    reserved: !1
  }], ["hr", {
    reserved: !1
  }], ["html", {
    reserved: !0
  }], ["i", {
    reserved: !1
  }], ["iframe", {
    reserved: !1
  }], ["img", {
    reserved: !1
  }], ["input", {
    reserved: !1
  }], ["ins", {
    reserved: !1
  }], ["kbd", {
    reserved: !1
  }], ["keygen", {
    reserved: !1
  }], ["label", {
    reserved: !1
  }], ["legend", {
    reserved: !1
  }], ["li", {
    reserved: !1
  }], ["link", {
    reserved: !0
  }], ["main", {
    reserved: !1
  }], ["map", {
    reserved: !1
  }], ["mark", {
    reserved: !1
  }], ["marquee", {
    reserved: !1
  }], ["menu", {
    reserved: !1
  }], ["menuitem", {
    reserved: !1
  }], ["meta", {
    reserved: !0
  }], ["meter", {
    reserved: !1
  }], ["nav", {
    reserved: !1
  }], ["noembed", {
    reserved: !0
  }], ["noscript", {
    reserved: !0
  }], ["object", {
    reserved: !1
  }], ["ol", {
    reserved: !1
  }], ["optgroup", {
    reserved: !1
  }], ["option", {
    reserved: !1
  }], ["output", {
    reserved: !1
  }], ["p", {
    reserved: !1
  }], ["param", {
    reserved: !0
  }], ["picture", {
    reserved: !0
  }], ["pre", {
    reserved: !1
  }], ["progress", {
    reserved: !1
  }], ["q", {
    reserved: !1
  }], ["rp", {
    reserved: !1
  }], ["rt", {
    reserved: !1
  }], ["rtc", {
    reserved: !1
  }], ["ruby", {
    reserved: !1
  }], ["s", {
    reserved: !1
  }], ["samp", {
    reserved: !1
  }], ["script", {
    reserved: !0
  }], ["section", {
    reserved: !1
  }], ["select", {
    reserved: !1
  }], ["small", {
    reserved: !1
  }], ["source", {
    reserved: !0
  }], ["spacer", {
    reserved: !1
  }], ["span", {
    reserved: !1
  }], ["strike", {
    reserved: !1
  }], ["strong", {
    reserved: !1
  }], ["style", {
    reserved: !0
  }], ["sub", {
    reserved: !1
  }], ["summary", {
    reserved: !1
  }], ["sup", {
    reserved: !1
  }], ["table", {
    reserved: !1
  }], ["tbody", {
    reserved: !1
  }], ["td", {
    reserved: !1
  }], ["textarea", {
    reserved: !1
  }], ["tfoot", {
    reserved: !1
  }], ["th", {
    reserved: !1
  }], ["thead", {
    reserved: !1
  }], ["time", {
    reserved: !1
  }], ["title", {
    reserved: !0
  }], ["tr", {
    reserved: !1
  }], ["track", {
    reserved: !0
  }], ["tt", {
    reserved: !1
  }], ["u", {
    reserved: !1
  }], ["ul", {
    reserved: !1
  }], ["var", {
    reserved: !1
  }], ["video", {
    reserved: !1
  }], ["wbr", {
    reserved: !1
  }], ["xmp", {
    reserved: !1
  }]], p = {
    entries: function() {
      return u;
    },
    forEach: function(m) {
      var h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, y = i(u), P;
      try {
        for (y.s(); !(P = y.n()).done; ) {
          var d = r(P.value, 2), E = d[0], g = d[1];
          m.call(h, g, E, u);
        }
      } catch (R) {
        y.e(R);
      } finally {
        y.f();
      }
    },
    get: function(m) {
      var h = u.find(function(y) {
        return y[0] === m;
      });
      return h && h[1];
    },
    has: function(m) {
      return !!p.get(m);
    },
    keys: function() {
      return u.map(function(m) {
        var h = r(m, 1), y = h[0];
        return y;
      });
    },
    values: function() {
      return u.map(function(m) {
        var h = r(m, 2), y = h[1];
        return y;
      });
    }
  }, f = (0, e.default)(p, p.entries());
  return _r.default = f, _r;
}
var Pr = {}, qr = {}, Tr = {}, lu;
function dy() {
  if (lu) return Tr;
  lu = 1, Object.defineProperty(Tr, "__esModule", {
    value: !0
  }), Tr.default = void 0;
  var e = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget"]]
  }, t = e;
  return Tr.default = t, Tr;
}
var Sr = {}, uu;
function fy() {
  if (uu) return Sr;
  uu = 1, Object.defineProperty(Sr, "__esModule", {
    value: !0
  }), Sr.default = void 0;
  var e = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-activedescendant": null,
      "aria-disabled": null
    },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget"]]
  }, t = e;
  return Sr.default = t, Sr;
}
var xr = {}, cu;
function py() {
  if (cu) return xr;
  cu = 1, Object.defineProperty(xr, "__esModule", {
    value: !0
  }), xr.default = void 0;
  var e = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null
    },
    relatedConcepts: [{
      concept: {
        name: "input"
      },
      module: "XForms"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget"]]
  }, t = e;
  return xr.default = t, xr;
}
var Or = {}, du;
function my() {
  if (du) return Or;
  du = 1, Object.defineProperty(Or, "__esModule", {
    value: !0
  }), Or.default = void 0;
  var e = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, t = e;
  return Or.default = t, Or;
}
var Mr = {}, fu;
function hy() {
  if (fu) return Mr;
  fu = 1, Object.defineProperty(Mr, "__esModule", {
    value: !0
  }), Mr.default = void 0;
  var e = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-valuemax": null,
      "aria-valuemin": null,
      "aria-valuenow": null
    },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure"]]
  }, t = e;
  return Mr.default = t, Mr;
}
var Ar = {}, pu;
function vy() {
  if (pu) return Ar;
  pu = 1, Object.defineProperty(Ar, "__esModule", {
    value: !0
  }), Ar.default = void 0;
  var e = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: [],
    prohibitedProps: [],
    props: {
      "aria-atomic": null,
      "aria-busy": null,
      "aria-controls": null,
      "aria-current": null,
      "aria-describedby": null,
      "aria-details": null,
      "aria-dropeffect": null,
      "aria-flowto": null,
      "aria-grabbed": null,
      "aria-hidden": null,
      "aria-keyshortcuts": null,
      "aria-label": null,
      "aria-labelledby": null,
      "aria-live": null,
      "aria-owns": null,
      "aria-relevant": null,
      "aria-roledescription": null
    },
    relatedConcepts: [{
      concept: {
        name: "role"
      },
      module: "XHTML"
    }, {
      concept: {
        name: "type"
      },
      module: "Dublin Core"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: []
  }, t = e;
  return Ar.default = t, Ar;
}
var Ir = {}, mu;
function by() {
  if (mu) return Ir;
  mu = 1, Object.defineProperty(Ir, "__esModule", {
    value: !0
  }), Ir.default = void 0;
  var e = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: [],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "frontmatter"
      },
      module: "DTB"
    }, {
      concept: {
        name: "level"
      },
      module: "DTB"
    }, {
      concept: {
        name: "level"
      },
      module: "SMIL"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure"]]
  }, t = e;
  return Ir.default = t, Ir;
}
var kr = {}, hu;
function yy() {
  if (hu) return kr;
  hu = 1, Object.defineProperty(kr, "__esModule", {
    value: !0
  }), kr.default = void 0;
  var e = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure"]]
  }, t = e;
  return kr.default = t, kr;
}
var Dr = {}, vu;
function gy() {
  if (vu) return Dr;
  vu = 1, Object.defineProperty(Dr, "__esModule", {
    value: !0
  }), Dr.default = void 0;
  var e = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-orientation": null
    },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget", "composite"], ["roletype", "structure", "section", "group"]]
  }, t = e;
  return Dr.default = t, Dr;
}
var Nr = {}, bu;
function Ry() {
  if (bu) return Nr;
  bu = 1, Object.defineProperty(Nr, "__esModule", {
    value: !0
  }), Nr.default = void 0;
  var e = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: [],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype"]]
  }, t = e;
  return Nr.default = t, Nr;
}
var Lr = {}, yu;
function Ey() {
  if (yu) return Lr;
  yu = 1, Object.defineProperty(Lr, "__esModule", {
    value: !0
  }), Lr.default = void 0;
  var e = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: [],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype"]]
  }, t = e;
  return Lr.default = t, Lr;
}
var Fr = {}, gu;
function wy() {
  if (gu) return Fr;
  gu = 1, Object.defineProperty(Fr, "__esModule", {
    value: !0
  }), Fr.default = void 0;
  var e = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-modal": null
    },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype"]]
  }, t = e;
  return Fr.default = t, Fr;
}
var Ru;
function Cy() {
  if (Ru) return qr;
  Ru = 1, Object.defineProperty(qr, "__esModule", {
    value: !0
  }), qr.default = void 0;
  var e = s(dy()), t = s(fy()), r = s(py()), n = s(my()), o = s(hy()), a = s(vy()), i = s(by()), l = s(yy()), c = s(gy()), u = s(Ry()), p = s(Ey()), f = s(wy());
  function s(y) {
    return y && y.__esModule ? y : { default: y };
  }
  var m = [["command", e.default], ["composite", t.default], ["input", r.default], ["landmark", n.default], ["range", o.default], ["roletype", a.default], ["section", i.default], ["sectionhead", l.default], ["select", c.default], ["structure", u.default], ["widget", p.default], ["window", f.default]], h = m;
  return qr.default = h, qr;
}
var Br = {}, jr = {}, Eu;
function _y() {
  if (Eu) return jr;
  Eu = 1, Object.defineProperty(jr, "__esModule", {
    value: !0
  }), jr.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-atomic": "true",
      "aria-live": "assertive"
    },
    relatedConcepts: [{
      concept: {
        name: "alert"
      },
      module: "XForms"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, t = e;
  return jr.default = t, jr;
}
var $r = {}, wu;
function Py() {
  if (wu) return $r;
  wu = 1, Object.defineProperty($r, "__esModule", {
    value: !0
  }), $r.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "alert"
      },
      module: "XForms"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "alert"], ["roletype", "window", "dialog"]]
  }, t = e;
  return $r.default = t, $r;
}
var Ur = {}, Cu;
function qy() {
  if (Cu) return Ur;
  Cu = 1, Object.defineProperty(Ur, "__esModule", {
    value: !0
  }), Ur.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-activedescendant": null,
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "Device Independence Delivery Unit"
      }
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure"]]
  }, t = e;
  return Ur.default = t, Ur;
}
var Hr = {}, _u;
function Ty() {
  if (_u) return Hr;
  _u = 1, Object.defineProperty(Hr, "__esModule", {
    value: !0
  }), Hr.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-posinset": null,
      "aria-setsize": null
    },
    relatedConcepts: [{
      concept: {
        name: "article"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "document"]]
  }, t = e;
  return Hr.default = t, Hr;
}
var zr = {}, Pu;
function Sy() {
  if (Pu) return zr;
  Pu = 1, Object.defineProperty(zr, "__esModule", {
    value: !0
  }), zr.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        constraints: ["scoped to the body element"],
        name: "header"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  }, t = e;
  return zr.default = t, zr;
}
var Vr = {}, qu;
function xy() {
  if (qu) return Vr;
  qu = 1, Object.defineProperty(Vr, "__esModule", {
    value: !0
  }), Vr.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "blockquote"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, t = e;
  return Vr.default = t, Vr;
}
var Wr = {}, Tu;
function Oy() {
  if (Tu) return Wr;
  Tu = 1, Object.defineProperty(Wr, "__esModule", {
    value: !0
  }), Wr.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-pressed": null
    },
    relatedConcepts: [{
      concept: {
        attributes: [{
          name: "type",
          value: "button"
        }],
        name: "input"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          name: "type",
          value: "image"
        }],
        name: "input"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          name: "type",
          value: "reset"
        }],
        name: "input"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          name: "type",
          value: "submit"
        }],
        name: "input"
      },
      module: "HTML"
    }, {
      concept: {
        name: "button"
      },
      module: "HTML"
    }, {
      concept: {
        name: "trigger"
      },
      module: "XForms"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget", "command"]]
  }, t = e;
  return Wr.default = t, Wr;
}
var Kr = {}, Su;
function My() {
  if (Su) return Kr;
  Su = 1, Object.defineProperty(Kr, "__esModule", {
    value: !0
  }), Kr.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["prohibited"],
    prohibitedProps: ["aria-label", "aria-labelledby"],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "caption"
      },
      module: "HTML"
    }],
    requireContextRole: ["figure", "grid", "table"],
    requiredContextRole: ["figure", "grid", "table"],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, t = e;
  return Kr.default = t, Kr;
}
var Qr = {}, xu;
function Ay() {
  if (xu) return Qr;
  xu = 1, Object.defineProperty(Qr, "__esModule", {
    value: !0
  }), Qr.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-colindex": null,
      "aria-colspan": null,
      "aria-rowindex": null,
      "aria-rowspan": null
    },
    relatedConcepts: [{
      concept: {
        constraints: ["ancestor table element has table role"],
        name: "td"
      },
      module: "HTML"
    }],
    requireContextRole: ["row"],
    requiredContextRole: ["row"],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, t = e;
  return Qr.default = t, Qr;
}
var Gr = {}, Ou;
function Iy() {
  if (Ou) return Gr;
  Ou = 1, Object.defineProperty(Gr, "__esModule", {
    value: !0
  }), Gr.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-checked": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-invalid": null,
      "aria-readonly": null,
      "aria-required": null
    },
    relatedConcepts: [{
      concept: {
        attributes: [{
          name: "type",
          value: "checkbox"
        }],
        name: "input"
      },
      module: "HTML"
    }, {
      concept: {
        name: "option"
      },
      module: "ARIA"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {
      "aria-checked": null
    },
    superClass: [["roletype", "widget", "input"]]
  }, t = e;
  return Gr.default = t, Gr;
}
var Yr = {}, Mu;
function ky() {
  if (Mu) return Yr;
  Mu = 1, Object.defineProperty(Yr, "__esModule", {
    value: !0
  }), Yr.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["prohibited"],
    prohibitedProps: ["aria-label", "aria-labelledby"],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "code"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, t = e;
  return Yr.default = t, Yr;
}
var Xr = {}, Au;
function Dy() {
  if (Au) return Xr;
  Au = 1, Object.defineProperty(Xr, "__esModule", {
    value: !0
  }), Xr.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-sort": null
    },
    relatedConcepts: [{
      concept: {
        name: "th"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          name: "scope",
          value: "col"
        }],
        name: "th"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          name: "scope",
          value: "colgroup"
        }],
        name: "th"
      },
      module: "HTML"
    }],
    requireContextRole: ["row"],
    requiredContextRole: ["row"],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "cell"], ["roletype", "structure", "section", "cell", "gridcell"], ["roletype", "widget", "gridcell"], ["roletype", "structure", "sectionhead"]]
  }, t = e;
  return Xr.default = t, Xr;
}
var Zr = {}, Iu;
function Ny() {
  if (Iu) return Zr;
  Iu = 1, Object.defineProperty(Zr, "__esModule", {
    value: !0
  }), Zr.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-activedescendant": null,
      "aria-autocomplete": null,
      "aria-errormessage": null,
      "aria-invalid": null,
      "aria-readonly": null,
      "aria-required": null,
      "aria-expanded": "false",
      "aria-haspopup": "listbox"
    },
    relatedConcepts: [{
      concept: {
        attributes: [{
          constraints: ["set"],
          name: "list"
        }, {
          name: "type",
          value: "email"
        }],
        name: "input"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["set"],
          name: "list"
        }, {
          name: "type",
          value: "search"
        }],
        name: "input"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["set"],
          name: "list"
        }, {
          name: "type",
          value: "tel"
        }],
        name: "input"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["set"],
          name: "list"
        }, {
          name: "type",
          value: "text"
        }],
        name: "input"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["set"],
          name: "list"
        }, {
          name: "type",
          value: "url"
        }],
        name: "input"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["set"],
          name: "list"
        }, {
          name: "type",
          value: "url"
        }],
        name: "input"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["undefined"],
          name: "multiple"
        }, {
          constraints: ["undefined"],
          name: "size"
        }],
        constraints: ["the multiple attribute is not set and the size attribute does not have a value greater than 1"],
        name: "select"
      },
      module: "HTML"
    }, {
      concept: {
        name: "select"
      },
      module: "XForms"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {
      "aria-controls": null,
      "aria-expanded": "false"
    },
    superClass: [["roletype", "widget", "input"]]
  }, t = e;
  return Zr.default = t, Zr;
}
var Jr = {}, ku;
function Ly() {
  if (ku) return Jr;
  ku = 1, Object.defineProperty(Jr, "__esModule", {
    value: !0
  }), Jr.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "aside"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["set"],
          name: "aria-label"
        }],
        constraints: ["scoped to a sectioning content element", "scoped to a sectioning root element other than body"],
        name: "aside"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["set"],
          name: "aria-labelledby"
        }],
        constraints: ["scoped to a sectioning content element", "scoped to a sectioning root element other than body"],
        name: "aside"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  }, t = e;
  return Jr.default = t, Jr;
}
var en = {}, Du;
function Fy() {
  if (Du) return en;
  Du = 1, Object.defineProperty(en, "__esModule", {
    value: !0
  }), en.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        constraints: ["scoped to the body element"],
        name: "footer"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  }, t = e;
  return en.default = t, en;
}
var tn = {}, Nu;
function By() {
  if (Nu) return tn;
  Nu = 1, Object.defineProperty(tn, "__esModule", {
    value: !0
  }), tn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "dd"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, t = e;
  return tn.default = t, tn;
}
var rn = {}, Lu;
function jy() {
  if (Lu) return rn;
  Lu = 1, Object.defineProperty(rn, "__esModule", {
    value: !0
  }), rn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["prohibited"],
    prohibitedProps: ["aria-label", "aria-labelledby"],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "del"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, t = e;
  return rn.default = t, rn;
}
var nn = {}, Fu;
function $y() {
  if (Fu) return nn;
  Fu = 1, Object.defineProperty(nn, "__esModule", {
    value: !0
  }), nn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "dialog"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "window"]]
  }, t = e;
  return nn.default = t, nn;
}
var on = {}, Bu;
function Uy() {
  if (Bu) return on;
  Bu = 1, Object.defineProperty(on, "__esModule", {
    value: !0
  }), on.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      module: "DAISY Guide"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "list"]]
  }, t = e;
  return on.default = t, on;
}
var an = {}, ju;
function Hy() {
  if (ju) return an;
  ju = 1, Object.defineProperty(an, "__esModule", {
    value: !0
  }), an.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "Device Independence Delivery Unit"
      }
    }, {
      concept: {
        name: "html"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure"]]
  }, t = e;
  return an.default = t, an;
}
var sn = {}, $u;
function zy() {
  if ($u) return sn;
  $u = 1, Object.defineProperty(sn, "__esModule", {
    value: !0
  }), sn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["prohibited"],
    prohibitedProps: ["aria-label", "aria-labelledby"],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "em"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, t = e;
  return sn.default = t, sn;
}
var ln = {}, Uu;
function Vy() {
  if (Uu) return ln;
  Uu = 1, Object.defineProperty(ln, "__esModule", {
    value: !0
  }), ln.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["article"]],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "list"]]
  }, t = e;
  return ln.default = t, ln;
}
var un = {}, Hu;
function Wy() {
  if (Hu) return un;
  Hu = 1, Object.defineProperty(un, "__esModule", {
    value: !0
  }), un.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "figure"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, t = e;
  return un.default = t, un;
}
var cn = {}, zu;
function Ky() {
  if (zu) return cn;
  zu = 1, Object.defineProperty(cn, "__esModule", {
    value: !0
  }), cn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        attributes: [{
          constraints: ["set"],
          name: "aria-label"
        }],
        name: "form"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["set"],
          name: "aria-labelledby"
        }],
        name: "form"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["set"],
          name: "name"
        }],
        name: "form"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  }, t = e;
  return cn.default = t, cn;
}
var dn = {}, Vu;
function Qy() {
  if (Vu) return dn;
  Vu = 1, Object.defineProperty(dn, "__esModule", {
    value: !0
  }), dn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["prohibited"],
    prohibitedProps: ["aria-label", "aria-labelledby"],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "a"
      },
      module: "HTML"
    }, {
      concept: {
        name: "area"
      },
      module: "HTML"
    }, {
      concept: {
        name: "aside"
      },
      module: "HTML"
    }, {
      concept: {
        name: "b"
      },
      module: "HTML"
    }, {
      concept: {
        name: "bdo"
      },
      module: "HTML"
    }, {
      concept: {
        name: "body"
      },
      module: "HTML"
    }, {
      concept: {
        name: "data"
      },
      module: "HTML"
    }, {
      concept: {
        name: "div"
      },
      module: "HTML"
    }, {
      concept: {
        constraints: ["scoped to the main element", "scoped to a sectioning content element", "scoped to a sectioning root element other than body"],
        name: "footer"
      },
      module: "HTML"
    }, {
      concept: {
        constraints: ["scoped to the main element", "scoped to a sectioning content element", "scoped to a sectioning root element other than body"],
        name: "header"
      },
      module: "HTML"
    }, {
      concept: {
        name: "hgroup"
      },
      module: "HTML"
    }, {
      concept: {
        name: "i"
      },
      module: "HTML"
    }, {
      concept: {
        name: "pre"
      },
      module: "HTML"
    }, {
      concept: {
        name: "q"
      },
      module: "HTML"
    }, {
      concept: {
        name: "samp"
      },
      module: "HTML"
    }, {
      concept: {
        name: "section"
      },
      module: "HTML"
    }, {
      concept: {
        name: "small"
      },
      module: "HTML"
    }, {
      concept: {
        name: "span"
      },
      module: "HTML"
    }, {
      concept: {
        name: "u"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure"]]
  }, t = e;
  return dn.default = t, dn;
}
var fn = {}, Wu;
function Gy() {
  if (Wu) return fn;
  Wu = 1, Object.defineProperty(fn, "__esModule", {
    value: !0
  }), fn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-multiselectable": null,
      "aria-readonly": null
    },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["row"], ["row", "rowgroup"]],
    requiredProps: {},
    superClass: [["roletype", "widget", "composite"], ["roletype", "structure", "section", "table"]]
  }, t = e;
  return fn.default = t, fn;
}
var pn = {}, Ku;
function Yy() {
  if (Ku) return pn;
  Ku = 1, Object.defineProperty(pn, "__esModule", {
    value: !0
  }), pn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null,
      "aria-readonly": null,
      "aria-required": null,
      "aria-selected": null
    },
    relatedConcepts: [{
      concept: {
        constraints: ["ancestor table element has grid role", "ancestor table element has treegrid role"],
        name: "td"
      },
      module: "HTML"
    }],
    requireContextRole: ["row"],
    requiredContextRole: ["row"],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "cell"], ["roletype", "widget"]]
  }, t = e;
  return pn.default = t, pn;
}
var mn = {}, Qu;
function Xy() {
  if (Qu) return mn;
  Qu = 1, Object.defineProperty(mn, "__esModule", {
    value: !0
  }), mn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-activedescendant": null,
      "aria-disabled": null
    },
    relatedConcepts: [{
      concept: {
        name: "details"
      },
      module: "HTML"
    }, {
      concept: {
        name: "fieldset"
      },
      module: "HTML"
    }, {
      concept: {
        name: "optgroup"
      },
      module: "HTML"
    }, {
      concept: {
        name: "address"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, t = e;
  return mn.default = t, mn;
}
var hn = {}, Gu;
function Zy() {
  if (Gu) return hn;
  Gu = 1, Object.defineProperty(hn, "__esModule", {
    value: !0
  }), hn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-level": "2"
    },
    relatedConcepts: [{
      concept: {
        name: "h1"
      },
      module: "HTML"
    }, {
      concept: {
        name: "h2"
      },
      module: "HTML"
    }, {
      concept: {
        name: "h3"
      },
      module: "HTML"
    }, {
      concept: {
        name: "h4"
      },
      module: "HTML"
    }, {
      concept: {
        name: "h5"
      },
      module: "HTML"
    }, {
      concept: {
        name: "h6"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {
      "aria-level": "2"
    },
    superClass: [["roletype", "structure", "sectionhead"]]
  }, t = e;
  return hn.default = t, hn;
}
var vn = {}, Yu;
function Jy() {
  if (Yu) return vn;
  Yu = 1, Object.defineProperty(vn, "__esModule", {
    value: !0
  }), vn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        attributes: [{
          constraints: ["set"],
          name: "alt"
        }],
        name: "img"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["undefined"],
          name: "alt"
        }],
        name: "img"
      },
      module: "HTML"
    }, {
      concept: {
        name: "imggroup"
      },
      module: "DTB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, t = e;
  return vn.default = t, vn;
}
var bn = {}, Xu;
function eg() {
  if (Xu) return bn;
  Xu = 1, Object.defineProperty(bn, "__esModule", {
    value: !0
  }), bn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["prohibited"],
    prohibitedProps: ["aria-label", "aria-labelledby"],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "ins"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, t = e;
  return bn.default = t, bn;
}
var yn = {}, Zu;
function tg() {
  if (Zu) return yn;
  Zu = 1, Object.defineProperty(yn, "__esModule", {
    value: !0
  }), yn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-expanded": null,
      "aria-haspopup": null
    },
    relatedConcepts: [{
      concept: {
        attributes: [{
          constraints: ["set"],
          name: "href"
        }],
        name: "a"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["set"],
          name: "href"
        }],
        name: "area"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget", "command"]]
  }, t = e;
  return yn.default = t, yn;
}
var gn = {}, Ju;
function rg() {
  if (Ju) return gn;
  Ju = 1, Object.defineProperty(gn, "__esModule", {
    value: !0
  }), gn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "menu"
      },
      module: "HTML"
    }, {
      concept: {
        name: "ol"
      },
      module: "HTML"
    }, {
      concept: {
        name: "ul"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["listitem"]],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, t = e;
  return gn.default = t, gn;
}
var Rn = {}, ec;
function ng() {
  if (ec) return Rn;
  ec = 1, Object.defineProperty(Rn, "__esModule", {
    value: !0
  }), Rn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-invalid": null,
      "aria-multiselectable": null,
      "aria-readonly": null,
      "aria-required": null,
      "aria-orientation": "vertical"
    },
    relatedConcepts: [{
      concept: {
        attributes: [{
          constraints: [">1"],
          name: "size"
        }],
        constraints: ["the size attribute value is greater than 1"],
        name: "select"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          name: "multiple"
        }],
        name: "select"
      },
      module: "HTML"
    }, {
      concept: {
        name: "datalist"
      },
      module: "HTML"
    }, {
      concept: {
        name: "list"
      },
      module: "ARIA"
    }, {
      concept: {
        name: "select"
      },
      module: "XForms"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["option", "group"], ["option"]],
    requiredProps: {},
    superClass: [["roletype", "widget", "composite", "select"], ["roletype", "structure", "section", "group", "select"]]
  }, t = e;
  return Rn.default = t, Rn;
}
var En = {}, tc;
function og() {
  if (tc) return En;
  tc = 1, Object.defineProperty(En, "__esModule", {
    value: !0
  }), En.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-level": null,
      "aria-posinset": null,
      "aria-setsize": null
    },
    relatedConcepts: [{
      concept: {
        constraints: ["direct descendant of ol", "direct descendant of ul", "direct descendant of menu"],
        name: "li"
      },
      module: "HTML"
    }, {
      concept: {
        name: "item"
      },
      module: "XForms"
    }],
    requireContextRole: ["directory", "list"],
    requiredContextRole: ["directory", "list"],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, t = e;
  return En.default = t, En;
}
var wn = {}, rc;
function ag() {
  if (rc) return wn;
  rc = 1, Object.defineProperty(wn, "__esModule", {
    value: !0
  }), wn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-live": "polite"
    },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, t = e;
  return wn.default = t, wn;
}
var Cn = {}, nc;
function ig() {
  if (nc) return Cn;
  nc = 1, Object.defineProperty(Cn, "__esModule", {
    value: !0
  }), Cn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "main"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  }, t = e;
  return Cn.default = t, Cn;
}
var _n = {}, oc;
function sg() {
  if (oc) return _n;
  oc = 1, Object.defineProperty(_n, "__esModule", {
    value: !0
  }), _n.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["prohibited"],
    prohibitedProps: [],
    props: {
      "aria-braillelabel": null,
      "aria-brailleroledescription": null,
      "aria-description": null
    },
    relatedConcepts: [{
      concept: {
        name: "mark"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, t = e;
  return _n.default = t, _n;
}
var Pn = {}, ac;
function lg() {
  if (ac) return Pn;
  ac = 1, Object.defineProperty(Pn, "__esModule", {
    value: !0
  }), Pn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, t = e;
  return Pn.default = t, Pn;
}
var qn = {}, ic;
function ug() {
  if (ic) return qn;
  ic = 1, Object.defineProperty(qn, "__esModule", {
    value: !0
  }), qn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "math"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, t = e;
  return qn.default = t, qn;
}
var Tn = {}, sc;
function cg() {
  if (sc) return Tn;
  sc = 1, Object.defineProperty(Tn, "__esModule", {
    value: !0
  }), Tn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-orientation": "vertical"
    },
    relatedConcepts: [{
      concept: {
        name: "MENU"
      },
      module: "JAPI"
    }, {
      concept: {
        name: "list"
      },
      module: "ARIA"
    }, {
      concept: {
        name: "select"
      },
      module: "XForms"
    }, {
      concept: {
        name: "sidebar"
      },
      module: "DTB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["menuitem", "group"], ["menuitemradio", "group"], ["menuitemcheckbox", "group"], ["menuitem"], ["menuitemcheckbox"], ["menuitemradio"]],
    requiredProps: {},
    superClass: [["roletype", "widget", "composite", "select"], ["roletype", "structure", "section", "group", "select"]]
  }, t = e;
  return Tn.default = t, Tn;
}
var Sn = {}, lc;
function dg() {
  if (lc) return Sn;
  lc = 1, Object.defineProperty(Sn, "__esModule", {
    value: !0
  }), Sn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-orientation": "horizontal"
    },
    relatedConcepts: [{
      concept: {
        name: "toolbar"
      },
      module: "ARIA"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["menuitem", "group"], ["menuitemradio", "group"], ["menuitemcheckbox", "group"], ["menuitem"], ["menuitemcheckbox"], ["menuitemradio"]],
    requiredProps: {},
    superClass: [["roletype", "widget", "composite", "select", "menu"], ["roletype", "structure", "section", "group", "select", "menu"]]
  }, t = e;
  return Sn.default = t, Sn;
}
var xn = {}, uc;
function fg() {
  if (uc) return xn;
  uc = 1, Object.defineProperty(xn, "__esModule", {
    value: !0
  }), xn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-posinset": null,
      "aria-setsize": null
    },
    relatedConcepts: [{
      concept: {
        name: "MENU_ITEM"
      },
      module: "JAPI"
    }, {
      concept: {
        name: "listitem"
      },
      module: "ARIA"
    }, {
      concept: {
        name: "option"
      },
      module: "ARIA"
    }],
    requireContextRole: ["group", "menu", "menubar"],
    requiredContextRole: ["group", "menu", "menubar"],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget", "command"]]
  }, t = e;
  return xn.default = t, xn;
}
var On = {}, cc;
function pg() {
  if (cc) return On;
  cc = 1, Object.defineProperty(On, "__esModule", {
    value: !0
  }), On.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "menuitem"
      },
      module: "ARIA"
    }],
    requireContextRole: ["group", "menu", "menubar"],
    requiredContextRole: ["group", "menu", "menubar"],
    requiredOwnedElements: [],
    requiredProps: {
      "aria-checked": null
    },
    superClass: [["roletype", "widget", "input", "checkbox"], ["roletype", "widget", "command", "menuitem"]]
  }, t = e;
  return On.default = t, On;
}
var Mn = {}, dc;
function mg() {
  if (dc) return Mn;
  dc = 1, Object.defineProperty(Mn, "__esModule", {
    value: !0
  }), Mn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "menuitem"
      },
      module: "ARIA"
    }],
    requireContextRole: ["group", "menu", "menubar"],
    requiredContextRole: ["group", "menu", "menubar"],
    requiredOwnedElements: [],
    requiredProps: {
      "aria-checked": null
    },
    superClass: [["roletype", "widget", "input", "checkbox", "menuitemcheckbox"], ["roletype", "widget", "command", "menuitem", "menuitemcheckbox"], ["roletype", "widget", "input", "radio"]]
  }, t = e;
  return Mn.default = t, Mn;
}
var An = {}, fc;
function hg() {
  if (fc) return An;
  fc = 1, Object.defineProperty(An, "__esModule", {
    value: !0
  }), An.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-valuetext": null,
      "aria-valuemax": "100",
      "aria-valuemin": "0"
    },
    relatedConcepts: [{
      concept: {
        name: "meter"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {
      "aria-valuenow": null
    },
    superClass: [["roletype", "structure", "range"]]
  }, t = e;
  return An.default = t, An;
}
var In = {}, pc;
function vg() {
  if (pc) return In;
  pc = 1, Object.defineProperty(In, "__esModule", {
    value: !0
  }), In.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "nav"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  }, t = e;
  return In.default = t, In;
}
var kn = {}, mc;
function bg() {
  if (mc) return kn;
  mc = 1, Object.defineProperty(kn, "__esModule", {
    value: !0
  }), kn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: [],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: []
  }, t = e;
  return kn.default = t, kn;
}
var Dn = {}, hc;
function yg() {
  if (hc) return Dn;
  hc = 1, Object.defineProperty(Dn, "__esModule", {
    value: !0
  }), Dn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, t = e;
  return Dn.default = t, Dn;
}
var Nn = {}, vc;
function gg() {
  if (vc) return Nn;
  vc = 1, Object.defineProperty(Nn, "__esModule", {
    value: !0
  }), Nn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-checked": null,
      "aria-posinset": null,
      "aria-setsize": null,
      "aria-selected": "false"
    },
    relatedConcepts: [{
      concept: {
        name: "item"
      },
      module: "XForms"
    }, {
      concept: {
        name: "listitem"
      },
      module: "ARIA"
    }, {
      concept: {
        name: "option"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {
      "aria-selected": "false"
    },
    superClass: [["roletype", "widget", "input"]]
  }, t = e;
  return Nn.default = t, Nn;
}
var Ln = {}, bc;
function Rg() {
  if (bc) return Ln;
  bc = 1, Object.defineProperty(Ln, "__esModule", {
    value: !0
  }), Ln.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["prohibited"],
    prohibitedProps: ["aria-label", "aria-labelledby"],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "p"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, t = e;
  return Ln.default = t, Ln;
}
var Fn = {}, yc;
function Eg() {
  if (yc) return Fn;
  yc = 1, Object.defineProperty(Fn, "__esModule", {
    value: !0
  }), Fn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["prohibited"],
    prohibitedProps: ["aria-label", "aria-labelledby"],
    props: {},
    relatedConcepts: [{
      concept: {
        attributes: [{
          name: "alt",
          value: ""
        }],
        name: "img"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure"]]
  }, t = e;
  return Fn.default = t, Fn;
}
var Bn = {}, gc;
function wg() {
  if (gc) return Bn;
  gc = 1, Object.defineProperty(Bn, "__esModule", {
    value: !0
  }), Bn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-valuetext": null
    },
    relatedConcepts: [{
      concept: {
        name: "progress"
      },
      module: "HTML"
    }, {
      concept: {
        name: "status"
      },
      module: "ARIA"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "range"], ["roletype", "widget"]]
  }, t = e;
  return Bn.default = t, Bn;
}
var jn = {}, Rc;
function Cg() {
  if (Rc) return jn;
  Rc = 1, Object.defineProperty(jn, "__esModule", {
    value: !0
  }), jn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-checked": null,
      "aria-posinset": null,
      "aria-setsize": null
    },
    relatedConcepts: [{
      concept: {
        attributes: [{
          name: "type",
          value: "radio"
        }],
        name: "input"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {
      "aria-checked": null
    },
    superClass: [["roletype", "widget", "input"]]
  }, t = e;
  return jn.default = t, jn;
}
var $n = {}, Ec;
function _g() {
  if (Ec) return $n;
  Ec = 1, Object.defineProperty($n, "__esModule", {
    value: !0
  }), $n.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-errormessage": null,
      "aria-invalid": null,
      "aria-readonly": null,
      "aria-required": null
    },
    relatedConcepts: [{
      concept: {
        name: "list"
      },
      module: "ARIA"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["radio"]],
    requiredProps: {},
    superClass: [["roletype", "widget", "composite", "select"], ["roletype", "structure", "section", "group", "select"]]
  }, t = e;
  return $n.default = t, $n;
}
var Un = {}, wc;
function Pg() {
  if (wc) return Un;
  wc = 1, Object.defineProperty(Un, "__esModule", {
    value: !0
  }), Un.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        attributes: [{
          constraints: ["set"],
          name: "aria-label"
        }],
        name: "section"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["set"],
          name: "aria-labelledby"
        }],
        name: "section"
      },
      module: "HTML"
    }, {
      concept: {
        name: "Device Independence Glossart perceivable unit"
      }
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  }, t = e;
  return Un.default = t, Un;
}
var Hn = {}, Cc;
function qg() {
  if (Cc) return Hn;
  Cc = 1, Object.defineProperty(Hn, "__esModule", {
    value: !0
  }), Hn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-colindex": null,
      "aria-expanded": null,
      "aria-level": null,
      "aria-posinset": null,
      "aria-rowindex": null,
      "aria-selected": null,
      "aria-setsize": null
    },
    relatedConcepts: [{
      concept: {
        name: "tr"
      },
      module: "HTML"
    }],
    requireContextRole: ["grid", "rowgroup", "table", "treegrid"],
    requiredContextRole: ["grid", "rowgroup", "table", "treegrid"],
    requiredOwnedElements: [["cell"], ["columnheader"], ["gridcell"], ["rowheader"]],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "group"], ["roletype", "widget"]]
  }, t = e;
  return Hn.default = t, Hn;
}
var zn = {}, _c;
function Tg() {
  if (_c) return zn;
  _c = 1, Object.defineProperty(zn, "__esModule", {
    value: !0
  }), zn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "tbody"
      },
      module: "HTML"
    }, {
      concept: {
        name: "tfoot"
      },
      module: "HTML"
    }, {
      concept: {
        name: "thead"
      },
      module: "HTML"
    }],
    requireContextRole: ["grid", "table", "treegrid"],
    requiredContextRole: ["grid", "table", "treegrid"],
    requiredOwnedElements: [["row"]],
    requiredProps: {},
    superClass: [["roletype", "structure"]]
  }, t = e;
  return zn.default = t, zn;
}
var Vn = {}, Pc;
function Sg() {
  if (Pc) return Vn;
  Pc = 1, Object.defineProperty(Vn, "__esModule", {
    value: !0
  }), Vn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-sort": null
    },
    relatedConcepts: [{
      concept: {
        attributes: [{
          name: "scope",
          value: "row"
        }],
        name: "th"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          name: "scope",
          value: "rowgroup"
        }],
        name: "th"
      },
      module: "HTML"
    }],
    requireContextRole: ["row", "rowgroup"],
    requiredContextRole: ["row", "rowgroup"],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "cell"], ["roletype", "structure", "section", "cell", "gridcell"], ["roletype", "widget", "gridcell"], ["roletype", "structure", "sectionhead"]]
  }, t = e;
  return Vn.default = t, Vn;
}
var Wn = {}, qc;
function xg() {
  if (qc) return Wn;
  qc = 1, Object.defineProperty(Wn, "__esModule", {
    value: !0
  }), Wn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-valuetext": null,
      "aria-orientation": "vertical",
      "aria-valuemax": "100",
      "aria-valuemin": "0"
    },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {
      "aria-controls": null,
      "aria-valuenow": null
    },
    superClass: [["roletype", "structure", "range"], ["roletype", "widget"]]
  }, t = e;
  return Wn.default = t, Wn;
}
var Kn = {}, Tc;
function Og() {
  if (Tc) return Kn;
  Tc = 1, Object.defineProperty(Kn, "__esModule", {
    value: !0
  }), Kn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  }, t = e;
  return Kn.default = t, Kn;
}
var Qn = {}, Sc;
function Mg() {
  if (Sc) return Qn;
  Sc = 1, Object.defineProperty(Qn, "__esModule", {
    value: !0
  }), Qn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        attributes: [{
          constraints: ["undefined"],
          name: "list"
        }, {
          name: "type",
          value: "search"
        }],
        constraints: ["the list attribute is not set"],
        name: "input"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget", "input", "textbox"]]
  }, t = e;
  return Qn.default = t, Qn;
}
var Gn = {}, xc;
function Ag() {
  if (xc) return Gn;
  xc = 1, Object.defineProperty(Gn, "__esModule", {
    value: !0
  }), Gn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-orientation": "horizontal",
      "aria-valuemax": "100",
      "aria-valuemin": "0",
      "aria-valuenow": null,
      "aria-valuetext": null
    },
    relatedConcepts: [{
      concept: {
        name: "hr"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure"]]
  }, t = e;
  return Gn.default = t, Gn;
}
var Yn = {}, Oc;
function Ig() {
  if (Oc) return Yn;
  Oc = 1, Object.defineProperty(Yn, "__esModule", {
    value: !0
  }), Yn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-errormessage": null,
      "aria-haspopup": null,
      "aria-invalid": null,
      "aria-readonly": null,
      "aria-valuetext": null,
      "aria-orientation": "horizontal",
      "aria-valuemax": "100",
      "aria-valuemin": "0"
    },
    relatedConcepts: [{
      concept: {
        attributes: [{
          name: "type",
          value: "range"
        }],
        name: "input"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {
      "aria-valuenow": null
    },
    superClass: [["roletype", "widget", "input"], ["roletype", "structure", "range"]]
  }, t = e;
  return Yn.default = t, Yn;
}
var Xn = {}, Mc;
function kg() {
  if (Mc) return Xn;
  Mc = 1, Object.defineProperty(Xn, "__esModule", {
    value: !0
  }), Xn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-errormessage": null,
      "aria-invalid": null,
      "aria-readonly": null,
      "aria-required": null,
      "aria-valuetext": null,
      "aria-valuenow": "0"
    },
    relatedConcepts: [{
      concept: {
        attributes: [{
          name: "type",
          value: "number"
        }],
        name: "input"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget", "composite"], ["roletype", "widget", "input"], ["roletype", "structure", "range"]]
  }, t = e;
  return Xn.default = t, Xn;
}
var Zn = {}, Ac;
function Dg() {
  if (Ac) return Zn;
  Ac = 1, Object.defineProperty(Zn, "__esModule", {
    value: !0
  }), Zn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-atomic": "true",
      "aria-live": "polite"
    },
    relatedConcepts: [{
      concept: {
        name: "output"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, t = e;
  return Zn.default = t, Zn;
}
var Jn = {}, Ic;
function Ng() {
  if (Ic) return Jn;
  Ic = 1, Object.defineProperty(Jn, "__esModule", {
    value: !0
  }), Jn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["prohibited"],
    prohibitedProps: ["aria-label", "aria-labelledby"],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "strong"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, t = e;
  return Jn.default = t, Jn;
}
var eo = {}, kc;
function Lg() {
  if (kc) return eo;
  kc = 1, Object.defineProperty(eo, "__esModule", {
    value: !0
  }), eo.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["prohibited"],
    prohibitedProps: ["aria-label", "aria-labelledby"],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "sub"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, t = e;
  return eo.default = t, eo;
}
var to = {}, Dc;
function Fg() {
  if (Dc) return to;
  Dc = 1, Object.defineProperty(to, "__esModule", {
    value: !0
  }), to.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["prohibited"],
    prohibitedProps: ["aria-label", "aria-labelledby"],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "sup"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, t = e;
  return to.default = t, to;
}
var ro = {}, Nc;
function Bg() {
  if (Nc) return ro;
  Nc = 1, Object.defineProperty(ro, "__esModule", {
    value: !0
  }), ro.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "button"
      },
      module: "ARIA"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {
      "aria-checked": null
    },
    superClass: [["roletype", "widget", "input", "checkbox"]]
  }, t = e;
  return ro.default = t, ro;
}
var no = {}, Lc;
function jg() {
  if (Lc) return no;
  Lc = 1, Object.defineProperty(no, "__esModule", {
    value: !0
  }), no.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-posinset": null,
      "aria-setsize": null,
      "aria-selected": "false"
    },
    relatedConcepts: [],
    requireContextRole: ["tablist"],
    requiredContextRole: ["tablist"],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "sectionhead"], ["roletype", "widget"]]
  }, t = e;
  return no.default = t, no;
}
var oo = {}, Fc;
function $g() {
  if (Fc) return oo;
  Fc = 1, Object.defineProperty(oo, "__esModule", {
    value: !0
  }), oo.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-colcount": null,
      "aria-rowcount": null
    },
    relatedConcepts: [{
      concept: {
        name: "table"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["row"], ["row", "rowgroup"]],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, t = e;
  return oo.default = t, oo;
}
var ao = {}, Bc;
function Ug() {
  if (Bc) return ao;
  Bc = 1, Object.defineProperty(ao, "__esModule", {
    value: !0
  }), ao.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-level": null,
      "aria-multiselectable": null,
      "aria-orientation": "horizontal"
    },
    relatedConcepts: [{
      module: "DAISY",
      concept: {
        name: "guide"
      }
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["tab"]],
    requiredProps: {},
    superClass: [["roletype", "widget", "composite"]]
  }, t = e;
  return ao.default = t, ao;
}
var io = {}, jc;
function Hg() {
  if (jc) return io;
  jc = 1, Object.defineProperty(io, "__esModule", {
    value: !0
  }), io.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, t = e;
  return io.default = t, io;
}
var so = {}, $c;
function zg() {
  if ($c) return so;
  $c = 1, Object.defineProperty(so, "__esModule", {
    value: !0
  }), so.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "dfn"
      },
      module: "HTML"
    }, {
      concept: {
        name: "dt"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, t = e;
  return so.default = t, so;
}
var lo = {}, Uc;
function Vg() {
  if (Uc) return lo;
  Uc = 1, Object.defineProperty(lo, "__esModule", {
    value: !0
  }), lo.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-activedescendant": null,
      "aria-autocomplete": null,
      "aria-errormessage": null,
      "aria-haspopup": null,
      "aria-invalid": null,
      "aria-multiline": null,
      "aria-placeholder": null,
      "aria-readonly": null,
      "aria-required": null
    },
    relatedConcepts: [{
      concept: {
        attributes: [{
          constraints: ["undefined"],
          name: "type"
        }, {
          constraints: ["undefined"],
          name: "list"
        }],
        constraints: ["the list attribute is not set"],
        name: "input"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["undefined"],
          name: "list"
        }, {
          name: "type",
          value: "email"
        }],
        constraints: ["the list attribute is not set"],
        name: "input"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["undefined"],
          name: "list"
        }, {
          name: "type",
          value: "tel"
        }],
        constraints: ["the list attribute is not set"],
        name: "input"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["undefined"],
          name: "list"
        }, {
          name: "type",
          value: "text"
        }],
        constraints: ["the list attribute is not set"],
        name: "input"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["undefined"],
          name: "list"
        }, {
          name: "type",
          value: "url"
        }],
        constraints: ["the list attribute is not set"],
        name: "input"
      },
      module: "HTML"
    }, {
      concept: {
        name: "input"
      },
      module: "XForms"
    }, {
      concept: {
        name: "textarea"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget", "input"]]
  }, t = e;
  return lo.default = t, lo;
}
var uo = {}, Hc;
function Wg() {
  if (Hc) return uo;
  Hc = 1, Object.defineProperty(uo, "__esModule", {
    value: !0
  }), uo.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "time"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, t = e;
  return uo.default = t, uo;
}
var co = {}, zc;
function Kg() {
  if (zc) return co;
  zc = 1, Object.defineProperty(co, "__esModule", {
    value: !0
  }), co.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "status"]]
  }, t = e;
  return co.default = t, co;
}
var fo = {}, Vc;
function Qg() {
  if (Vc) return fo;
  Vc = 1, Object.defineProperty(fo, "__esModule", {
    value: !0
  }), fo.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-orientation": "horizontal"
    },
    relatedConcepts: [{
      concept: {
        name: "menubar"
      },
      module: "ARIA"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "group"]]
  }, t = e;
  return fo.default = t, fo;
}
var po = {}, Wc;
function Gg() {
  if (Wc) return po;
  Wc = 1, Object.defineProperty(po, "__esModule", {
    value: !0
  }), po.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, t = e;
  return po.default = t, po;
}
var mo = {}, Kc;
function Yg() {
  if (Kc) return mo;
  Kc = 1, Object.defineProperty(mo, "__esModule", {
    value: !0
  }), mo.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-errormessage": null,
      "aria-invalid": null,
      "aria-multiselectable": null,
      "aria-required": null,
      "aria-orientation": "vertical"
    },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["treeitem", "group"], ["treeitem"]],
    requiredProps: {},
    superClass: [["roletype", "widget", "composite", "select"], ["roletype", "structure", "section", "group", "select"]]
  }, t = e;
  return mo.default = t, mo;
}
var ho = {}, Qc;
function Xg() {
  if (Qc) return ho;
  Qc = 1, Object.defineProperty(ho, "__esModule", {
    value: !0
  }), ho.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["row"], ["row", "rowgroup"]],
    requiredProps: {},
    superClass: [["roletype", "widget", "composite", "grid"], ["roletype", "structure", "section", "table", "grid"], ["roletype", "widget", "composite", "select", "tree"], ["roletype", "structure", "section", "group", "select", "tree"]]
  }, t = e;
  return ho.default = t, ho;
}
var vo = {}, Gc;
function Zg() {
  if (Gc) return vo;
  Gc = 1, Object.defineProperty(vo, "__esModule", {
    value: !0
  }), vo.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-expanded": null,
      "aria-haspopup": null
    },
    relatedConcepts: [],
    requireContextRole: ["group", "tree"],
    requiredContextRole: ["group", "tree"],
    requiredOwnedElements: [],
    requiredProps: {
      "aria-selected": null
    },
    superClass: [["roletype", "structure", "section", "listitem"], ["roletype", "widget", "input", "option"]]
  }, t = e;
  return vo.default = t, vo;
}
var Yc;
function Jg() {
  if (Yc) return Br;
  Yc = 1, Object.defineProperty(Br, "__esModule", {
    value: !0
  }), Br.default = void 0;
  var e = $(_y()), t = $(Py()), r = $(qy()), n = $(Ty()), o = $(Sy()), a = $(xy()), i = $(Oy()), l = $(My()), c = $(Ay()), u = $(Iy()), p = $(ky()), f = $(Dy()), s = $(Ny()), m = $(Ly()), h = $(Fy()), y = $(By()), P = $(jy()), d = $($y()), E = $(Uy()), g = $(Hy()), R = $(zy()), q = $(Vy()), v = $(Wy()), b = $(Ky()), _ = $(Qy()), M = $(Gy()), O = $(Yy()), x = $(Xy()), A = $(Zy()), T = $(Jy()), I = $(eg()), L = $(tg()), V = $(rg()), z = $(ng()), K = $(og()), W = $(ag()), re = $(ig()), le = $(sg()), Re = $(lg()), H = $(ug()), ue = $(cg()), Q = $(dg()), ae = $(fg()), pe = $(pg()), ee = $(mg()), S = $(hg()), U = $(vg()), F = $(bg()), X = $(yg()), Z = $(gg()), J = $(Rg()), ce = $(Eg()), oe = $(wg()), he = $(Cg()), Te = $(_g()), ze = $(Pg()), ht = $(qg()), Ht = $(Tg()), zt = $(Sg()), Vt = $(xg()), Wt = $(Og()), vr = $(Mg()), _t = $(Ag()), Kt = $(Ig()), Xe = $(kg()), br = $(Dg()), w = $(Ng()), B = $(Lg()), N = $(Fg()), G = $(Bg()), de = $(jg()), fe = $($g()), ne = $(Ug()), me = $(Hg()), Me = $(zg()), ke = $(Vg()), yr = $(Wg()), Mi = $(Kg()), Ai = $(Qg()), Qt = $(Gg()), Ii = $(Yg()), gr = $(Xg()), Ba = $(Zg());
  function $(Pt) {
    return Pt && Pt.__esModule ? Pt : { default: Pt };
  }
  var ja = [["alert", e.default], ["alertdialog", t.default], ["application", r.default], ["article", n.default], ["banner", o.default], ["blockquote", a.default], ["button", i.default], ["caption", l.default], ["cell", c.default], ["checkbox", u.default], ["code", p.default], ["columnheader", f.default], ["combobox", s.default], ["complementary", m.default], ["contentinfo", h.default], ["definition", y.default], ["deletion", P.default], ["dialog", d.default], ["directory", E.default], ["document", g.default], ["emphasis", R.default], ["feed", q.default], ["figure", v.default], ["form", b.default], ["generic", _.default], ["grid", M.default], ["gridcell", O.default], ["group", x.default], ["heading", A.default], ["img", T.default], ["insertion", I.default], ["link", L.default], ["list", V.default], ["listbox", z.default], ["listitem", K.default], ["log", W.default], ["main", re.default], ["mark", le.default], ["marquee", Re.default], ["math", H.default], ["menu", ue.default], ["menubar", Q.default], ["menuitem", ae.default], ["menuitemcheckbox", pe.default], ["menuitemradio", ee.default], ["meter", S.default], ["navigation", U.default], ["none", F.default], ["note", X.default], ["option", Z.default], ["paragraph", J.default], ["presentation", ce.default], ["progressbar", oe.default], ["radio", he.default], ["radiogroup", Te.default], ["region", ze.default], ["row", ht.default], ["rowgroup", Ht.default], ["rowheader", zt.default], ["scrollbar", Vt.default], ["search", Wt.default], ["searchbox", vr.default], ["separator", _t.default], ["slider", Kt.default], ["spinbutton", Xe.default], ["status", br.default], ["strong", w.default], ["subscript", B.default], ["superscript", N.default], ["switch", G.default], ["tab", de.default], ["table", fe.default], ["tablist", ne.default], ["tabpanel", me.default], ["term", Me.default], ["textbox", ke.default], ["time", yr.default], ["timer", Mi.default], ["toolbar", Ai.default], ["tooltip", Qt.default], ["tree", Ii.default], ["treegrid", gr.default], ["treeitem", Ba.default]], ki = ja;
  return Br.default = ki, Br;
}
var bo = {}, yo = {}, Xc;
function e1() {
  if (Xc) return yo;
  Xc = 1, Object.defineProperty(yo, "__esModule", {
    value: !0
  }), yo.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "abstract [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, t = e;
  return yo.default = t, yo;
}
var go = {}, Zc;
function t1() {
  if (Zc) return go;
  Zc = 1, Object.defineProperty(go, "__esModule", {
    value: !0
  }), go.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "acknowledgments [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  }, t = e;
  return go.default = t, go;
}
var Ro = {}, Jc;
function r1() {
  if (Jc) return Ro;
  Jc = 1, Object.defineProperty(Ro, "__esModule", {
    value: !0
  }), Ro.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "afterword [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  }, t = e;
  return Ro.default = t, Ro;
}
var Eo = {}, ed;
function n1() {
  if (ed) return Eo;
  ed = 1, Object.defineProperty(Eo, "__esModule", {
    value: !0
  }), Eo.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "appendix [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  }, t = e;
  return Eo.default = t, Eo;
}
var wo = {}, td;
function o1() {
  if (td) return wo;
  td = 1, Object.defineProperty(wo, "__esModule", {
    value: !0
  }), wo.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-errormessage": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "referrer [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget", "command", "link"]]
  }, t = e;
  return wo.default = t, wo;
}
var Co = {}, rd;
function a1() {
  if (rd) return Co;
  rd = 1, Object.defineProperty(Co, "__esModule", {
    value: !0
  }), Co.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "EPUB biblioentry [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: ["doc-bibliography"],
    requiredContextRole: ["doc-bibliography"],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "listitem"]]
  }, t = e;
  return Co.default = t, Co;
}
var _o = {}, nd;
function i1() {
  if (nd) return _o;
  nd = 1, Object.defineProperty(_o, "__esModule", {
    value: !0
  }), _o.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "bibliography [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["doc-biblioentry"]],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  }, t = e;
  return _o.default = t, _o;
}
var Po = {}, od;
function s1() {
  if (od) return Po;
  od = 1, Object.defineProperty(Po, "__esModule", {
    value: !0
  }), Po.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-errormessage": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "biblioref [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget", "command", "link"]]
  }, t = e;
  return Po.default = t, Po;
}
var qo = {}, ad;
function l1() {
  if (ad) return qo;
  ad = 1, Object.defineProperty(qo, "__esModule", {
    value: !0
  }), qo.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "chapter [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  }, t = e;
  return qo.default = t, qo;
}
var To = {}, id;
function u1() {
  if (id) return To;
  id = 1, Object.defineProperty(To, "__esModule", {
    value: !0
  }), To.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "colophon [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, t = e;
  return To.default = t, To;
}
var So = {}, sd;
function c1() {
  if (sd) return So;
  sd = 1, Object.defineProperty(So, "__esModule", {
    value: !0
  }), So.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "conclusion [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  }, t = e;
  return So.default = t, So;
}
var xo = {}, ld;
function d1() {
  if (ld) return xo;
  ld = 1, Object.defineProperty(xo, "__esModule", {
    value: !0
  }), xo.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "cover [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "img"]]
  }, t = e;
  return xo.default = t, xo;
}
var Oo = {}, ud;
function f1() {
  if (ud) return Oo;
  ud = 1, Object.defineProperty(Oo, "__esModule", {
    value: !0
  }), Oo.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "credit [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, t = e;
  return Oo.default = t, Oo;
}
var Mo = {}, cd;
function p1() {
  if (cd) return Mo;
  cd = 1, Object.defineProperty(Mo, "__esModule", {
    value: !0
  }), Mo.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "credits [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  }, t = e;
  return Mo.default = t, Mo;
}
var Ao = {}, dd;
function m1() {
  if (dd) return Ao;
  dd = 1, Object.defineProperty(Ao, "__esModule", {
    value: !0
  }), Ao.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "dedication [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, t = e;
  return Ao.default = t, Ao;
}
var Io = {}, fd;
function h1() {
  if (fd) return Io;
  fd = 1, Object.defineProperty(Io, "__esModule", {
    value: !0
  }), Io.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "rearnote [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: ["doc-endnotes"],
    requiredContextRole: ["doc-endnotes"],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "listitem"]]
  }, t = e;
  return Io.default = t, Io;
}
var ko = {}, pd;
function v1() {
  if (pd) return ko;
  pd = 1, Object.defineProperty(ko, "__esModule", {
    value: !0
  }), ko.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "rearnotes [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["doc-endnote"]],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  }, t = e;
  return ko.default = t, ko;
}
var Do = {}, md;
function b1() {
  if (md) return Do;
  md = 1, Object.defineProperty(Do, "__esModule", {
    value: !0
  }), Do.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "epigraph [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, t = e;
  return Do.default = t, Do;
}
var No = {}, hd;
function y1() {
  if (hd) return No;
  hd = 1, Object.defineProperty(No, "__esModule", {
    value: !0
  }), No.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "epilogue [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  }, t = e;
  return No.default = t, No;
}
var Lo = {}, vd;
function g1() {
  if (vd) return Lo;
  vd = 1, Object.defineProperty(Lo, "__esModule", {
    value: !0
  }), Lo.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "errata [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  }, t = e;
  return Lo.default = t, Lo;
}
var Fo = {}, bd;
function R1() {
  if (bd) return Fo;
  bd = 1, Object.defineProperty(Fo, "__esModule", {
    value: !0
  }), Fo.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, t = e;
  return Fo.default = t, Fo;
}
var Bo = {}, yd;
function E1() {
  if (yd) return Bo;
  yd = 1, Object.defineProperty(Bo, "__esModule", {
    value: !0
  }), Bo.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "footnote [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, t = e;
  return Bo.default = t, Bo;
}
var jo = {}, gd;
function w1() {
  if (gd) return jo;
  gd = 1, Object.defineProperty(jo, "__esModule", {
    value: !0
  }), jo.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "foreword [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  }, t = e;
  return jo.default = t, jo;
}
var $o = {}, Rd;
function C1() {
  if (Rd) return $o;
  Rd = 1, Object.defineProperty($o, "__esModule", {
    value: !0
  }), $o.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "glossary [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["definition"], ["term"]],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  }, t = e;
  return $o.default = t, $o;
}
var Uo = {}, Ed;
function _1() {
  if (Ed) return Uo;
  Ed = 1, Object.defineProperty(Uo, "__esModule", {
    value: !0
  }), Uo.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-errormessage": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "glossref [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget", "command", "link"]]
  }, t = e;
  return Uo.default = t, Uo;
}
var Ho = {}, wd;
function P1() {
  if (wd) return Ho;
  wd = 1, Object.defineProperty(Ho, "__esModule", {
    value: !0
  }), Ho.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "index [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark", "navigation"]]
  }, t = e;
  return Ho.default = t, Ho;
}
var zo = {}, Cd;
function q1() {
  if (Cd) return zo;
  Cd = 1, Object.defineProperty(zo, "__esModule", {
    value: !0
  }), zo.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "introduction [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  }, t = e;
  return zo.default = t, zo;
}
var Vo = {}, _d;
function T1() {
  if (_d) return Vo;
  _d = 1, Object.defineProperty(Vo, "__esModule", {
    value: !0
  }), Vo.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-errormessage": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "noteref [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget", "command", "link"]]
  }, t = e;
  return Vo.default = t, Vo;
}
var Wo = {}, Pd;
function S1() {
  if (Pd) return Wo;
  Pd = 1, Object.defineProperty(Wo, "__esModule", {
    value: !0
  }), Wo.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "notice [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "note"]]
  }, t = e;
  return Wo.default = t, Wo;
}
var Ko = {}, qd;
function x1() {
  if (qd) return Ko;
  qd = 1, Object.defineProperty(Ko, "__esModule", {
    value: !0
  }), Ko.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "pagebreak [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "separator"]]
  }, t = e;
  return Ko.default = t, Ko;
}
var Qo = {}, Td;
function O1() {
  if (Td) return Qo;
  Td = 1, Object.defineProperty(Qo, "__esModule", {
    value: !0
  }), Qo.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "page-list [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark", "navigation"]]
  }, t = e;
  return Qo.default = t, Qo;
}
var Go = {}, Sd;
function M1() {
  if (Sd) return Go;
  Sd = 1, Object.defineProperty(Go, "__esModule", {
    value: !0
  }), Go.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "part [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  }, t = e;
  return Go.default = t, Go;
}
var Yo = {}, xd;
function A1() {
  if (xd) return Yo;
  xd = 1, Object.defineProperty(Yo, "__esModule", {
    value: !0
  }), Yo.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "preface [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  }, t = e;
  return Yo.default = t, Yo;
}
var Xo = {}, Od;
function I1() {
  if (Od) return Xo;
  Od = 1, Object.defineProperty(Xo, "__esModule", {
    value: !0
  }), Xo.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "prologue [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  }, t = e;
  return Xo.default = t, Xo;
}
var Zo = {}, Md;
function k1() {
  if (Md) return Zo;
  Md = 1, Object.defineProperty(Zo, "__esModule", {
    value: !0
  }), Zo.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "pullquote [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["none"]]
  }, t = e;
  return Zo.default = t, Zo;
}
var Jo = {}, Ad;
function D1() {
  if (Ad) return Jo;
  Ad = 1, Object.defineProperty(Jo, "__esModule", {
    value: !0
  }), Jo.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "qna [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, t = e;
  return Jo.default = t, Jo;
}
var ea = {}, Id;
function N1() {
  if (Id) return ea;
  Id = 1, Object.defineProperty(ea, "__esModule", {
    value: !0
  }), ea.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "subtitle [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "sectionhead"]]
  }, t = e;
  return ea.default = t, ea;
}
var ta = {}, kd;
function L1() {
  if (kd) return ta;
  kd = 1, Object.defineProperty(ta, "__esModule", {
    value: !0
  }), ta.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "help [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "note"]]
  }, t = e;
  return ta.default = t, ta;
}
var ra = {}, Dd;
function F1() {
  if (Dd) return ra;
  Dd = 1, Object.defineProperty(ra, "__esModule", {
    value: !0
  }), ra.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "toc [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark", "navigation"]]
  }, t = e;
  return ra.default = t, ra;
}
var Nd;
function B1() {
  if (Nd) return bo;
  Nd = 1, Object.defineProperty(bo, "__esModule", {
    value: !0
  }), bo.default = void 0;
  var e = H(e1()), t = H(t1()), r = H(r1()), n = H(n1()), o = H(o1()), a = H(a1()), i = H(i1()), l = H(s1()), c = H(l1()), u = H(u1()), p = H(c1()), f = H(d1()), s = H(f1()), m = H(p1()), h = H(m1()), y = H(h1()), P = H(v1()), d = H(b1()), E = H(y1()), g = H(g1()), R = H(R1()), q = H(E1()), v = H(w1()), b = H(C1()), _ = H(_1()), M = H(P1()), O = H(q1()), x = H(T1()), A = H(S1()), T = H(x1()), I = H(O1()), L = H(M1()), V = H(A1()), z = H(I1()), K = H(k1()), W = H(D1()), re = H(N1()), le = H(L1()), Re = H(F1());
  function H(ae) {
    return ae && ae.__esModule ? ae : { default: ae };
  }
  var ue = [["doc-abstract", e.default], ["doc-acknowledgments", t.default], ["doc-afterword", r.default], ["doc-appendix", n.default], ["doc-backlink", o.default], ["doc-biblioentry", a.default], ["doc-bibliography", i.default], ["doc-biblioref", l.default], ["doc-chapter", c.default], ["doc-colophon", u.default], ["doc-conclusion", p.default], ["doc-cover", f.default], ["doc-credit", s.default], ["doc-credits", m.default], ["doc-dedication", h.default], ["doc-endnote", y.default], ["doc-endnotes", P.default], ["doc-epigraph", d.default], ["doc-epilogue", E.default], ["doc-errata", g.default], ["doc-example", R.default], ["doc-footnote", q.default], ["doc-foreword", v.default], ["doc-glossary", b.default], ["doc-glossref", _.default], ["doc-index", M.default], ["doc-introduction", O.default], ["doc-noteref", x.default], ["doc-notice", A.default], ["doc-pagebreak", T.default], ["doc-pagelist", I.default], ["doc-part", L.default], ["doc-preface", V.default], ["doc-prologue", z.default], ["doc-pullquote", K.default], ["doc-qna", W.default], ["doc-subtitle", re.default], ["doc-tip", le.default], ["doc-toc", Re.default]], Q = ue;
  return bo.default = Q, bo;
}
var na = {}, oa = {}, Ld;
function j1() {
  if (Ld) return oa;
  Ld = 1, Object.defineProperty(oa, "__esModule", {
    value: !0
  }), oa.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      module: "GRAPHICS",
      concept: {
        name: "graphics-object"
      }
    }, {
      module: "ARIA",
      concept: {
        name: "img"
      }
    }, {
      module: "ARIA",
      concept: {
        name: "article"
      }
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "document"]]
  }, t = e;
  return oa.default = t, oa;
}
var aa = {}, Fd;
function $1() {
  if (Fd) return aa;
  Fd = 1, Object.defineProperty(aa, "__esModule", {
    value: !0
  }), aa.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      module: "GRAPHICS",
      concept: {
        name: "graphics-document"
      }
    }, {
      module: "ARIA",
      concept: {
        name: "group"
      }
    }, {
      module: "ARIA",
      concept: {
        name: "img"
      }
    }, {
      module: "GRAPHICS",
      concept: {
        name: "graphics-symbol"
      }
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "group"]]
  }, t = e;
  return aa.default = t, aa;
}
var ia = {}, Bd;
function U1() {
  if (Bd) return ia;
  Bd = 1, Object.defineProperty(ia, "__esModule", {
    value: !0
  }), ia.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "img"]]
  }, t = e;
  return ia.default = t, ia;
}
var jd;
function H1() {
  if (jd) return na;
  jd = 1, Object.defineProperty(na, "__esModule", {
    value: !0
  }), na.default = void 0;
  var e = n(j1()), t = n($1()), r = n(U1());
  function n(i) {
    return i && i.__esModule ? i : { default: i };
  }
  var o = [["graphics-document", e.default], ["graphics-object", t.default], ["graphics-symbol", r.default]], a = o;
  return na.default = a, na;
}
var $d;
function js() {
  if ($d) return Pr;
  $d = 1, Object.defineProperty(Pr, "__esModule", {
    value: !0
  }), Pr.default = void 0;
  var e = a(Cy()), t = a(Jg()), r = a(B1()), n = a(H1()), o = a(Na());
  function a(d) {
    return d && d.__esModule ? d : { default: d };
  }
  function i(d, E, g) {
    return E in d ? Object.defineProperty(d, E, { value: g, enumerable: !0, configurable: !0, writable: !0 }) : d[E] = g, d;
  }
  function l(d, E) {
    var g = typeof Symbol < "u" && d[Symbol.iterator] || d["@@iterator"];
    if (!g) {
      if (Array.isArray(d) || (g = p(d)) || E) {
        g && (d = g);
        var R = 0, q = function() {
        };
        return { s: q, n: function() {
          return R >= d.length ? { done: !0 } : { done: !1, value: d[R++] };
        }, e: function(O) {
          throw O;
        }, f: q };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var v = !0, b = !1, _;
    return { s: function() {
      g = g.call(d);
    }, n: function() {
      var O = g.next();
      return v = O.done, O;
    }, e: function(O) {
      b = !0, _ = O;
    }, f: function() {
      try {
        !v && g.return != null && g.return();
      } finally {
        if (b) throw _;
      }
    } };
  }
  function c(d, E) {
    return m(d) || s(d, E) || p(d, E) || u();
  }
  function u() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function p(d, E) {
    if (d) {
      if (typeof d == "string") return f(d, E);
      var g = Object.prototype.toString.call(d).slice(8, -1);
      if (g === "Object" && d.constructor && (g = d.constructor.name), g === "Map" || g === "Set") return Array.from(d);
      if (g === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(g)) return f(d, E);
    }
  }
  function f(d, E) {
    (E == null || E > d.length) && (E = d.length);
    for (var g = 0, R = new Array(E); g < E; g++)
      R[g] = d[g];
    return R;
  }
  function s(d, E) {
    var g = d == null ? null : typeof Symbol < "u" && d[Symbol.iterator] || d["@@iterator"];
    if (g != null) {
      var R = [], q = !0, v = !1, b, _;
      try {
        for (g = g.call(d); !(q = (b = g.next()).done) && (R.push(b.value), !(E && R.length === E)); q = !0)
          ;
      } catch (M) {
        v = !0, _ = M;
      } finally {
        try {
          !q && g.return != null && g.return();
        } finally {
          if (v) throw _;
        }
      }
      return R;
    }
  }
  function m(d) {
    if (Array.isArray(d)) return d;
  }
  var h = [].concat(e.default, t.default, r.default, n.default);
  h.forEach(function(d) {
    var E = c(d, 2), g = E[1], R = l(g.superClass), q;
    try {
      for (R.s(); !(q = R.n()).done; ) {
        var v = q.value, b = l(v), _;
        try {
          var M = function() {
            var x = _.value, A = h.find(function(z) {
              var K = c(z, 1), W = K[0];
              return W === x;
            });
            if (A)
              for (var T = A[1], I = 0, L = Object.keys(T.props); I < L.length; I++) {
                var V = L[I];
                Object.prototype.hasOwnProperty.call(g.props, V) || Object.assign(g.props, i({}, V, T.props[V]));
              }
          };
          for (b.s(); !(_ = b.n()).done; )
            M();
        } catch (O) {
          b.e(O);
        } finally {
          b.f();
        }
      }
    } catch (O) {
      R.e(O);
    } finally {
      R.f();
    }
  });
  var y = {
    entries: function() {
      return h;
    },
    forEach: function(E) {
      var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, R = l(h), q;
      try {
        for (R.s(); !(q = R.n()).done; ) {
          var v = c(q.value, 2), b = v[0], _ = v[1];
          E.call(g, _, b, h);
        }
      } catch (M) {
        R.e(M);
      } finally {
        R.f();
      }
    },
    get: function(E) {
      var g = h.find(function(R) {
        return R[0] === E;
      });
      return g && g[1];
    },
    has: function(E) {
      return !!y.get(E);
    },
    keys: function() {
      return h.map(function(E) {
        var g = c(E, 1), R = g[0];
        return R;
      });
    },
    values: function() {
      return h.map(function(E) {
        var g = c(E, 2), R = g[1];
        return R;
      });
    }
  }, P = (0, o.default)(y, y.entries());
  return Pr.default = P, Pr;
}
var sa = {}, Vi = {}, Ud;
function z1() {
  if (Ud) return Vi;
  Ud = 1;
  var e = Object.prototype.hasOwnProperty;
  function t(r, n) {
    var o, a;
    if (r === n) return !0;
    if (r && n && (o = r.constructor) === n.constructor) {
      if (o === Date) return r.getTime() === n.getTime();
      if (o === RegExp) return r.toString() === n.toString();
      if (o === Array) {
        if ((a = r.length) === n.length)
          for (; a-- && t(r[a], n[a]); ) ;
        return a === -1;
      }
      if (!o || typeof r == "object") {
        a = 0;
        for (o in r)
          if (e.call(r, o) && ++a && !e.call(n, o) || !(o in n) || !t(r[o], n[o])) return !1;
        return Object.keys(n).length === a;
      }
    }
    return r !== r && n !== n;
  }
  return Vi.dequal = t, Vi;
}
var Hd;
function V1() {
  if (Hd) return sa;
  Hd = 1, Object.defineProperty(sa, "__esModule", {
    value: !0
  }), sa.default = void 0;
  var e = z1(), t = n(Na()), r = n(js());
  function n(q) {
    return q && q.__esModule ? q : { default: q };
  }
  function o(q, v) {
    return l(q) || i(q, v) || u(q, v) || a();
  }
  function a() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function i(q, v) {
    var b = q == null ? null : typeof Symbol < "u" && q[Symbol.iterator] || q["@@iterator"];
    if (b != null) {
      var _ = [], M = !0, O = !1, x, A;
      try {
        for (b = b.call(q); !(M = (x = b.next()).done) && (_.push(x.value), !(v && _.length === v)); M = !0)
          ;
      } catch (T) {
        O = !0, A = T;
      } finally {
        try {
          !M && b.return != null && b.return();
        } finally {
          if (O) throw A;
        }
      }
      return _;
    }
  }
  function l(q) {
    if (Array.isArray(q)) return q;
  }
  function c(q, v) {
    var b = typeof Symbol < "u" && q[Symbol.iterator] || q["@@iterator"];
    if (!b) {
      if (Array.isArray(q) || (b = u(q)) || v) {
        b && (q = b);
        var _ = 0, M = function() {
        };
        return { s: M, n: function() {
          return _ >= q.length ? { done: !0 } : { done: !1, value: q[_++] };
        }, e: function(I) {
          throw I;
        }, f: M };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var O = !0, x = !1, A;
    return { s: function() {
      b = b.call(q);
    }, n: function() {
      var I = b.next();
      return O = I.done, I;
    }, e: function(I) {
      x = !0, A = I;
    }, f: function() {
      try {
        !O && b.return != null && b.return();
      } finally {
        if (x) throw A;
      }
    } };
  }
  function u(q, v) {
    if (q) {
      if (typeof q == "string") return p(q, v);
      var b = Object.prototype.toString.call(q).slice(8, -1);
      if (b === "Object" && q.constructor && (b = q.constructor.name), b === "Map" || b === "Set") return Array.from(q);
      if (b === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b)) return p(q, v);
    }
  }
  function p(q, v) {
    (v == null || v > q.length) && (v = q.length);
    for (var b = 0, _ = new Array(v); b < v; b++)
      _[b] = q[b];
    return _;
  }
  for (var f = [], s = r.default.keys(), m = 0; m < s.length; m++) {
    var h = s[m], y = r.default.get(h);
    if (y)
      for (var P = [].concat(y.baseConcepts, y.relatedConcepts), d = 0; d < P.length; d++) {
        var E = P[d];
        E.module === "HTML" && (function() {
          var q = E.concept;
          if (q) {
            var v = f.find(function(O) {
              return (0, e.dequal)(O, q);
            }), b;
            v ? b = v[1] : b = [];
            for (var _ = !0, M = 0; M < b.length; M++)
              if (b[M] === h) {
                _ = !1;
                break;
              }
            _ && b.push(h), f.push([q, b]);
          }
        })();
      }
  }
  var g = {
    entries: function() {
      return f;
    },
    forEach: function(v) {
      var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, _ = c(f), M;
      try {
        for (_.s(); !(M = _.n()).done; ) {
          var O = o(M.value, 2), x = O[0], A = O[1];
          v.call(b, A, x, f);
        }
      } catch (T) {
        _.e(T);
      } finally {
        _.f();
      }
    },
    get: function(v) {
      var b = f.find(function(_) {
        return v.name === _[0].name && (0, e.dequal)(v.attributes, _[0].attributes);
      });
      return b && b[1];
    },
    has: function(v) {
      return !!g.get(v);
    },
    keys: function() {
      return f.map(function(v) {
        var b = o(v, 1), _ = b[0];
        return _;
      });
    },
    values: function() {
      return f.map(function(v) {
        var b = o(v, 2), _ = b[1];
        return _;
      });
    }
  }, R = (0, t.default)(g, g.entries());
  return sa.default = R, sa;
}
var la = {}, zd;
function W1() {
  if (zd) return la;
  zd = 1, Object.defineProperty(la, "__esModule", {
    value: !0
  }), la.default = void 0;
  var e = r(Na()), t = r(js());
  function r(v) {
    return v && v.__esModule ? v : { default: v };
  }
  function n(v, b) {
    return i(v) || a(v, b) || c(v, b) || o();
  }
  function o() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function a(v, b) {
    var _ = v == null ? null : typeof Symbol < "u" && v[Symbol.iterator] || v["@@iterator"];
    if (_ != null) {
      var M = [], O = !0, x = !1, A, T;
      try {
        for (_ = _.call(v); !(O = (A = _.next()).done) && (M.push(A.value), !(b && M.length === b)); O = !0)
          ;
      } catch (I) {
        x = !0, T = I;
      } finally {
        try {
          !O && _.return != null && _.return();
        } finally {
          if (x) throw T;
        }
      }
      return M;
    }
  }
  function i(v) {
    if (Array.isArray(v)) return v;
  }
  function l(v, b) {
    var _ = typeof Symbol < "u" && v[Symbol.iterator] || v["@@iterator"];
    if (!_) {
      if (Array.isArray(v) || (_ = c(v)) || b) {
        _ && (v = _);
        var M = 0, O = function() {
        };
        return { s: O, n: function() {
          return M >= v.length ? { done: !0 } : { done: !1, value: v[M++] };
        }, e: function(L) {
          throw L;
        }, f: O };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var x = !0, A = !1, T;
    return { s: function() {
      _ = _.call(v);
    }, n: function() {
      var L = _.next();
      return x = L.done, L;
    }, e: function(L) {
      A = !0, T = L;
    }, f: function() {
      try {
        !x && _.return != null && _.return();
      } finally {
        if (A) throw T;
      }
    } };
  }
  function c(v, b) {
    if (v) {
      if (typeof v == "string") return u(v, b);
      var _ = Object.prototype.toString.call(v).slice(8, -1);
      if (_ === "Object" && v.constructor && (_ = v.constructor.name), _ === "Map" || _ === "Set") return Array.from(v);
      if (_ === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_)) return u(v, b);
    }
  }
  function u(v, b) {
    (b == null || b > v.length) && (b = v.length);
    for (var _ = 0, M = new Array(b); _ < b; _++)
      M[_] = v[_];
    return M;
  }
  for (var p = [], f = t.default.keys(), s = 0; s < f.length; s++) {
    var m = f[s], h = t.default.get(m), y = [];
    if (h) {
      for (var P = [].concat(h.baseConcepts, h.relatedConcepts), d = 0; d < P.length; d++) {
        var E = P[d];
        if (E.module === "HTML") {
          var g = E.concept;
          g != null && y.push(g);
        }
      }
      y.length > 0 && p.push([m, y]);
    }
  }
  var R = {
    entries: function() {
      return p;
    },
    forEach: function(b) {
      var _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, M = l(p), O;
      try {
        for (M.s(); !(O = M.n()).done; ) {
          var x = n(O.value, 2), A = x[0], T = x[1];
          b.call(_, T, A, p);
        }
      } catch (I) {
        M.e(I);
      } finally {
        M.f();
      }
    },
    get: function(b) {
      var _ = p.find(function(M) {
        return M[0] === b;
      });
      return _ && _[1];
    },
    has: function(b) {
      return !!R.get(b);
    },
    keys: function() {
      return p.map(function(b) {
        var _ = n(b, 1), M = _[0];
        return M;
      });
    },
    values: function() {
      return p.map(function(b) {
        var _ = n(b, 2), M = _[1];
        return M;
      });
    }
  }, q = (0, e.default)(R, R.entries());
  return la.default = q, la;
}
var Vd;
function K1() {
  if (Vd) return Ne;
  Vd = 1, Object.defineProperty(Ne, "__esModule", {
    value: !0
  }), Ne.roles = Ne.roleElements = Ne.elementRoles = Ne.dom = Ne.aria = void 0;
  var e = a(uy()), t = a(cy()), r = a(js()), n = a(V1()), o = a(W1());
  function a(f) {
    return f && f.__esModule ? f : { default: f };
  }
  var i = e.default;
  Ne.aria = i;
  var l = t.default;
  Ne.dom = l;
  var c = r.default;
  Ne.roles = c;
  var u = n.default;
  Ne.elementRoles = u;
  var p = o.default;
  return Ne.roleElements = p, Ne;
}
var $e = K1(), Wi = { exports: {} }, Wd;
function Q1() {
  return Wd || (Wd = 1, (function(e) {
    var t = (function() {
      var r = String.fromCharCode, n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$", a = {};
      function i(c, u) {
        if (!a[c]) {
          a[c] = {};
          for (var p = 0; p < c.length; p++)
            a[c][c.charAt(p)] = p;
        }
        return a[c][u];
      }
      var l = {
        compressToBase64: function(c) {
          if (c == null) return "";
          var u = l._compress(c, 6, function(p) {
            return n.charAt(p);
          });
          switch (u.length % 4) {
            // To produce valid Base64
            default:
            // When could this happen ?
            case 0:
              return u;
            case 1:
              return u + "===";
            case 2:
              return u + "==";
            case 3:
              return u + "=";
          }
        },
        decompressFromBase64: function(c) {
          return c == null ? "" : c == "" ? null : l._decompress(c.length, 32, function(u) {
            return i(n, c.charAt(u));
          });
        },
        compressToUTF16: function(c) {
          return c == null ? "" : l._compress(c, 15, function(u) {
            return r(u + 32);
          }) + " ";
        },
        decompressFromUTF16: function(c) {
          return c == null ? "" : c == "" ? null : l._decompress(c.length, 16384, function(u) {
            return c.charCodeAt(u) - 32;
          });
        },
        //compress into uint8array (UCS-2 big endian format)
        compressToUint8Array: function(c) {
          for (var u = l.compress(c), p = new Uint8Array(u.length * 2), f = 0, s = u.length; f < s; f++) {
            var m = u.charCodeAt(f);
            p[f * 2] = m >>> 8, p[f * 2 + 1] = m % 256;
          }
          return p;
        },
        //decompress from uint8array (UCS-2 big endian format)
        decompressFromUint8Array: function(c) {
          if (c == null)
            return l.decompress(c);
          for (var u = new Array(c.length / 2), p = 0, f = u.length; p < f; p++)
            u[p] = c[p * 2] * 256 + c[p * 2 + 1];
          var s = [];
          return u.forEach(function(m) {
            s.push(r(m));
          }), l.decompress(s.join(""));
        },
        //compress into a string that is already URI encoded
        compressToEncodedURIComponent: function(c) {
          return c == null ? "" : l._compress(c, 6, function(u) {
            return o.charAt(u);
          });
        },
        //decompress from an output of compressToEncodedURIComponent
        decompressFromEncodedURIComponent: function(c) {
          return c == null ? "" : c == "" ? null : (c = c.replace(/ /g, "+"), l._decompress(c.length, 32, function(u) {
            return i(o, c.charAt(u));
          }));
        },
        compress: function(c) {
          return l._compress(c, 16, function(u) {
            return r(u);
          });
        },
        _compress: function(c, u, p) {
          if (c == null) return "";
          var f, s, m = {}, h = {}, y = "", P = "", d = "", E = 2, g = 3, R = 2, q = [], v = 0, b = 0, _;
          for (_ = 0; _ < c.length; _ += 1)
            if (y = c.charAt(_), Object.prototype.hasOwnProperty.call(m, y) || (m[y] = g++, h[y] = !0), P = d + y, Object.prototype.hasOwnProperty.call(m, P))
              d = P;
            else {
              if (Object.prototype.hasOwnProperty.call(h, d)) {
                if (d.charCodeAt(0) < 256) {
                  for (f = 0; f < R; f++)
                    v = v << 1, b == u - 1 ? (b = 0, q.push(p(v)), v = 0) : b++;
                  for (s = d.charCodeAt(0), f = 0; f < 8; f++)
                    v = v << 1 | s & 1, b == u - 1 ? (b = 0, q.push(p(v)), v = 0) : b++, s = s >> 1;
                } else {
                  for (s = 1, f = 0; f < R; f++)
                    v = v << 1 | s, b == u - 1 ? (b = 0, q.push(p(v)), v = 0) : b++, s = 0;
                  for (s = d.charCodeAt(0), f = 0; f < 16; f++)
                    v = v << 1 | s & 1, b == u - 1 ? (b = 0, q.push(p(v)), v = 0) : b++, s = s >> 1;
                }
                E--, E == 0 && (E = Math.pow(2, R), R++), delete h[d];
              } else
                for (s = m[d], f = 0; f < R; f++)
                  v = v << 1 | s & 1, b == u - 1 ? (b = 0, q.push(p(v)), v = 0) : b++, s = s >> 1;
              E--, E == 0 && (E = Math.pow(2, R), R++), m[P] = g++, d = String(y);
            }
          if (d !== "") {
            if (Object.prototype.hasOwnProperty.call(h, d)) {
              if (d.charCodeAt(0) < 256) {
                for (f = 0; f < R; f++)
                  v = v << 1, b == u - 1 ? (b = 0, q.push(p(v)), v = 0) : b++;
                for (s = d.charCodeAt(0), f = 0; f < 8; f++)
                  v = v << 1 | s & 1, b == u - 1 ? (b = 0, q.push(p(v)), v = 0) : b++, s = s >> 1;
              } else {
                for (s = 1, f = 0; f < R; f++)
                  v = v << 1 | s, b == u - 1 ? (b = 0, q.push(p(v)), v = 0) : b++, s = 0;
                for (s = d.charCodeAt(0), f = 0; f < 16; f++)
                  v = v << 1 | s & 1, b == u - 1 ? (b = 0, q.push(p(v)), v = 0) : b++, s = s >> 1;
              }
              E--, E == 0 && (E = Math.pow(2, R), R++), delete h[d];
            } else
              for (s = m[d], f = 0; f < R; f++)
                v = v << 1 | s & 1, b == u - 1 ? (b = 0, q.push(p(v)), v = 0) : b++, s = s >> 1;
            E--, E == 0 && (E = Math.pow(2, R), R++);
          }
          for (s = 2, f = 0; f < R; f++)
            v = v << 1 | s & 1, b == u - 1 ? (b = 0, q.push(p(v)), v = 0) : b++, s = s >> 1;
          for (; ; )
            if (v = v << 1, b == u - 1) {
              q.push(p(v));
              break;
            } else b++;
          return q.join("");
        },
        decompress: function(c) {
          return c == null ? "" : c == "" ? null : l._decompress(c.length, 32768, function(u) {
            return c.charCodeAt(u);
          });
        },
        _decompress: function(c, u, p) {
          var f = [], s = 4, m = 4, h = 3, y = "", P = [], d, E, g, R, q, v, b, _ = { val: p(0), position: u, index: 1 };
          for (d = 0; d < 3; d += 1)
            f[d] = d;
          for (g = 0, q = Math.pow(2, 2), v = 1; v != q; )
            R = _.val & _.position, _.position >>= 1, _.position == 0 && (_.position = u, _.val = p(_.index++)), g |= (R > 0 ? 1 : 0) * v, v <<= 1;
          switch (g) {
            case 0:
              for (g = 0, q = Math.pow(2, 8), v = 1; v != q; )
                R = _.val & _.position, _.position >>= 1, _.position == 0 && (_.position = u, _.val = p(_.index++)), g |= (R > 0 ? 1 : 0) * v, v <<= 1;
              b = r(g);
              break;
            case 1:
              for (g = 0, q = Math.pow(2, 16), v = 1; v != q; )
                R = _.val & _.position, _.position >>= 1, _.position == 0 && (_.position = u, _.val = p(_.index++)), g |= (R > 0 ? 1 : 0) * v, v <<= 1;
              b = r(g);
              break;
            case 2:
              return "";
          }
          for (f[3] = b, E = b, P.push(b); ; ) {
            if (_.index > c)
              return "";
            for (g = 0, q = Math.pow(2, h), v = 1; v != q; )
              R = _.val & _.position, _.position >>= 1, _.position == 0 && (_.position = u, _.val = p(_.index++)), g |= (R > 0 ? 1 : 0) * v, v <<= 1;
            switch (b = g) {
              case 0:
                for (g = 0, q = Math.pow(2, 8), v = 1; v != q; )
                  R = _.val & _.position, _.position >>= 1, _.position == 0 && (_.position = u, _.val = p(_.index++)), g |= (R > 0 ? 1 : 0) * v, v <<= 1;
                f[m++] = r(g), b = m - 1, s--;
                break;
              case 1:
                for (g = 0, q = Math.pow(2, 16), v = 1; v != q; )
                  R = _.val & _.position, _.position >>= 1, _.position == 0 && (_.position = u, _.val = p(_.index++)), g |= (R > 0 ? 1 : 0) * v, v <<= 1;
                f[m++] = r(g), b = m - 1, s--;
                break;
              case 2:
                return P.join("");
            }
            if (s == 0 && (s = Math.pow(2, h), h++), f[b])
              y = f[b];
            else if (b === m)
              y = E + E.charAt(0);
            else
              return null;
            P.push(y), f[m++] = E + y.charAt(0), s--, E = y, s == 0 && (s = Math.pow(2, h), h++);
          }
        }
      };
      return l;
    })();
    e != null ? e.exports = t : typeof angular < "u" && angular != null && angular.module("LZString", []).factory("LZString", function() {
      return t;
    });
  })(Wi)), Wi.exports;
}
var G1 = Q1();
const Y1 = /* @__PURE__ */ Jm(G1);
function mp(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
const X1 = (e, t, r, n, o, a, i) => {
  const l = n + r.indent, c = r.colors;
  return e.map((u) => {
    const p = t[u];
    let f = i(p, r, l, o, a);
    return typeof p != "string" && (f.indexOf(`
`) !== -1 && (f = r.spacingOuter + l + f + r.spacingOuter + n), f = "{" + f + "}"), r.spacingInner + n + c.prop.open + u + c.prop.close + "=" + c.value.open + f + c.value.close;
  }).join("");
}, Z1 = 3, J1 = (e, t, r, n, o, a) => e.map((i) => {
  const l = typeof i == "string" ? hp(i, t) : a(i, t, r, n, o);
  return l === "" && typeof i == "object" && i !== null && i.nodeType !== Z1 ? "" : t.spacingOuter + r + l;
}).join(""), hp = (e, t) => {
  const r = t.colors.content;
  return r.open + mp(e) + r.close;
}, eR = (e, t) => {
  const r = t.colors.comment;
  return r.open + "<!--" + mp(e) + "-->" + r.close;
}, tR = (e, t, r, n, o) => {
  const a = n.colors.tag;
  return a.open + "<" + e + (t && a.close + t + n.spacingOuter + o + a.open) + (r ? ">" + a.close + r + n.spacingOuter + o + a.open + "</" + e : (t && !n.min ? "" : " ") + "/") + ">" + a.close;
}, rR = (e, t) => {
  const r = t.colors.tag;
  return r.open + "<" + e + r.close + " …" + r.open + " />" + r.close;
}, nR = 1, vp = 3, bp = 8, yp = 11, oR = /^((HTML|SVG)\w*)?Element$/, gp = (e) => {
  const {
    tagName: t
  } = e;
  return !!(typeof t == "string" && t.includes("-") || typeof e.hasAttribute == "function" && e.hasAttribute("is"));
}, aR = (e) => {
  const t = e.constructor.name, {
    nodeType: r
  } = e;
  return r === nR && (oR.test(t) || gp(e)) || r === vp && t === "Text" || r === bp && t === "Comment" || r === yp && t === "DocumentFragment";
};
function iR(e) {
  return e.nodeType === vp;
}
function sR(e) {
  return e.nodeType === bp;
}
function Ki(e) {
  return e.nodeType === yp;
}
function lR(e) {
  return {
    test: (t) => {
      var r;
      return ((t == null || (r = t.constructor) == null ? void 0 : r.name) || gp(t)) && aR(t);
    },
    serialize: (t, r, n, o, a, i) => {
      if (iR(t))
        return hp(t.data, r);
      if (sR(t))
        return eR(t.data, r);
      const l = Ki(t) ? "DocumentFragment" : t.tagName.toLowerCase();
      return ++o > r.maxDepth ? rR(l, r) : tR(l, X1(Ki(t) ? [] : Array.from(t.attributes).map((c) => c.name).sort(), Ki(t) ? {} : Array.from(t.attributes).reduce((c, u) => (c[u.name] = u.value, c), {}), r, n + r.indent, o, a, i), J1(Array.prototype.slice.call(t.childNodes || t.children).filter(e), r, n + r.indent, o, a, i), r, n);
    }
  };
}
let Rp = null, $s = null, Us = null;
try {
  const e = module && module.require;
  $s = e.call(module, "fs").readFileSync, Us = e.call(module, "@babel/code-frame").codeFrameColumns, Rp = e.call(module, "picocolors");
} catch {
}
function uR(e) {
  const t = e.indexOf("(") + 1, r = e.indexOf(")"), n = e.slice(t, r), o = n.split(":"), [a, i, l] = [o[0], parseInt(o[1], 10), parseInt(o[2], 10)];
  let c = "";
  try {
    c = $s(a, "utf-8");
  } catch {
    return "";
  }
  const u = Us(c, {
    start: {
      line: i,
      column: l
    }
  }, {
    highlightCode: !0,
    linesBelow: 0
  });
  return Rp.dim(n) + `
` + u + `
`;
}
function cR() {
  if (!$s || !Us)
    return "";
  const t = new Error().stack.split(`
`).slice(1).find((r) => !r.includes("node_modules/"));
  return uR(t);
}
const Ep = 3;
function Qi() {
  return typeof jest < "u" && jest !== null ? (
    // legacy timers
    setTimeout._isMockFunction === !0 || // modern timers
    // eslint-disable-next-line prefer-object-has-own -- not supported by our support matrix
    Object.prototype.hasOwnProperty.call(setTimeout, "clock")
  ) : !1;
}
function Hs() {
  if (typeof window > "u")
    throw new Error("Could not find default container");
  return window.document;
}
function wp(e) {
  if (e.defaultView)
    return e.defaultView;
  if (e.ownerDocument && e.ownerDocument.defaultView)
    return e.ownerDocument.defaultView;
  if (e.window)
    return e.window;
  throw e.ownerDocument && e.ownerDocument.defaultView === null ? new Error("It looks like the window object is not available for the provided node.") : e.then instanceof Function ? new Error("It looks like you passed a Promise object instead of a DOM node. Did you do something like `fireEvent.click(screen.findBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`, or await the findBy query `fireEvent.click(await screen.findBy...`?") : Array.isArray(e) ? new Error("It looks like you passed an Array instead of a DOM node. Did you do something like `fireEvent.click(screen.getAllBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`?") : typeof e.debug == "function" && typeof e.logTestingPlaygroundURL == "function" ? new Error("It looks like you passed a `screen` object. Did you do something like `fireEvent.click(screen, ...` when you meant to use a query, e.g. `fireEvent.click(screen.getBy..., `?") : new Error("The given node is not an Element, the node type is: " + typeof e + ".");
}
function mt(e) {
  if (!e || typeof e.querySelector != "function" || typeof e.querySelectorAll != "function")
    throw new TypeError("Expected container to be an Element, a Document or a DocumentFragment but got " + t(e) + ".");
  function t(r) {
    return typeof r == "object" ? r === null ? "null" : r.constructor.name : typeof r;
  }
}
const dR = () => {
  if (typeof process > "u")
    return !1;
  let e;
  try {
    var t;
    const r = (t = process.env) == null ? void 0 : t.COLORS;
    r && (e = JSON.parse(r));
  } catch {
  }
  return typeof e == "boolean" ? e : process.versions !== void 0 && process.versions.node !== void 0;
}, {
  DOMCollection: fR
} = ap.plugins, pR = 1, mR = 8;
function hR(e) {
  return e.nodeType !== mR && (e.nodeType !== pR || !e.matches(se().defaultIgnore));
}
function ar(e, t, r) {
  if (r === void 0 && (r = {}), e || (e = Hs().body), typeof t != "number" && (t = typeof process < "u" && typeof process.env < "u" && process.env.DEBUG_PRINT_LIMIT || 7e3), t === 0)
    return "";
  e.documentElement && (e = e.documentElement);
  let n = typeof e;
  if (n === "object" ? n = e.constructor.name : e = {}, !("outerHTML" in e))
    throw new TypeError("Expected an element or document but got " + n);
  const {
    filterNode: o = hR,
    ...a
  } = r, i = ap.format(e, {
    plugins: [lR(o), fR],
    printFunctionName: !1,
    highlight: dR(),
    ...a
  });
  return t !== void 0 && e.outerHTML.length > t ? i.slice(0, t) + "..." : i;
}
const Kd = function() {
  const e = cR();
  console.log(e ? ar(...arguments) + `

` + e : ar(...arguments));
};
let It = {
  testIdAttribute: "data-testid",
  asyncUtilTimeout: 1e3,
  // asyncWrapper and advanceTimersWrapper is to support React's async `act` function.
  // forcing react-testing-library to wrap all async functions would've been
  // a total nightmare (consider wrapping every findBy* query and then also
  // updating `within` so those would be wrapped too. Total nightmare).
  // so we have this config option that's really only intended for
  // react-testing-library to use. For that reason, this feature will remain
  // undocumented.
  asyncWrapper: (e) => e(),
  unstable_advanceTimersWrapper: (e) => e(),
  eventWrapper: (e) => e(),
  // default value for the `hidden` option in `ByRole` queries
  defaultHidden: !1,
  // default value for the `ignore` option in `ByText` queries
  defaultIgnore: "script, style",
  // showOriginalStackTrace flag to show the full error stack traces for async errors
  showOriginalStackTrace: !1,
  // throw errors w/ suggestions for better queries. Opt in so off by default.
  throwSuggestions: !1,
  // called when getBy* queries fail. (message, container) => Error
  getElementError(e, t) {
    const r = ar(t), n = new Error([e, "Ignored nodes: comments, " + It.defaultIgnore + `
` + r].filter(Boolean).join(`

`));
    return n.name = "TestingLibraryElementError", n;
  },
  _disableExpensiveErrorDiagnostics: !1,
  computedStyleSupportsPseudoElements: !1
};
function vR(e) {
  try {
    return It._disableExpensiveErrorDiagnostics = !0, e();
  } finally {
    It._disableExpensiveErrorDiagnostics = !1;
  }
}
function bR(e) {
  typeof e == "function" && (e = e(It)), It = {
    ...It,
    ...e
  };
}
function se() {
  return It;
}
const yR = ["button", "meter", "output", "progress", "select", "textarea", "input"];
function Cp(e) {
  return yR.includes(e.nodeName.toLowerCase()) ? "" : e.nodeType === Ep ? e.textContent : Array.from(e.childNodes).map((t) => Cp(t)).join("");
}
function ps(e) {
  let t;
  return e.tagName.toLowerCase() === "label" ? t = Cp(e) : t = e.value || e.textContent, t;
}
function _p(e) {
  if (e.labels !== void 0) {
    var t;
    return (t = e.labels) != null ? t : [];
  }
  if (!gR(e)) return [];
  const r = e.ownerDocument.querySelectorAll("label");
  return Array.from(r).filter((n) => n.control === e);
}
function gR(e) {
  return /BUTTON|METER|OUTPUT|PROGRESS|SELECT|TEXTAREA/.test(e.tagName) || e.tagName === "INPUT" && e.getAttribute("type") !== "hidden";
}
function Pp(e, t, r) {
  let {
    selector: n = "*"
  } = r === void 0 ? {} : r;
  const o = t.getAttribute("aria-labelledby"), a = o ? o.split(" ") : [];
  return a.length ? a.map((i) => {
    const l = e.querySelector('[id="' + i + '"]');
    return l ? {
      content: ps(l),
      formControl: null
    } : {
      content: "",
      formControl: null
    };
  }) : Array.from(_p(t)).map((i) => {
    const l = ps(i), u = Array.from(i.querySelectorAll("button, input, meter, output, progress, select, textarea")).filter((p) => p.matches(n))[0];
    return {
      content: l,
      formControl: u
    };
  });
}
function qp(e) {
  if (e == null)
    throw new Error(
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions -- implicitly converting `T` to `string`
      "It looks like " + e + " was passed instead of a matcher. Did you do something like getByText(" + e + ")?"
    );
}
function mr(e, t, r, n) {
  if (typeof e != "string")
    return !1;
  qp(r);
  const o = n(e);
  return typeof r == "string" || typeof r == "number" ? o.toLowerCase().includes(r.toString().toLowerCase()) : typeof r == "function" ? r(o, t) : Sp(r, o);
}
function ct(e, t, r, n) {
  if (typeof e != "string")
    return !1;
  qp(r);
  const o = n(e);
  return r instanceof Function ? r(o, t) : r instanceof RegExp ? Sp(r, o) : o === String(r);
}
function Tp(e) {
  let {
    trim: t = !0,
    collapseWhitespace: r = !0
  } = e === void 0 ? {} : e;
  return (n) => {
    let o = n;
    return o = t ? o.trim() : o, o = r ? o.replace(/\s+/g, " ") : o, o;
  };
}
function $t(e) {
  let {
    trim: t,
    collapseWhitespace: r,
    normalizer: n
  } = e;
  if (!n)
    return Tp({
      trim: t,
      collapseWhitespace: r
    });
  if (typeof t < "u" || typeof r < "u")
    throw new Error('trim and collapseWhitespace are not supported with a normalizer. If you want to use the default trim and collapseWhitespace logic in your normalizer, use "getDefaultNormalizer({trim, collapseWhitespace})" and compose that into your normalizer');
  return n;
}
function Sp(e, t) {
  const r = e.test(t);
  return e.global && e.lastIndex !== 0 && (console.warn("To match all elements we had to reset the lastIndex of the RegExp because the global flag is enabled. We encourage to remove the global flag from the RegExp."), e.lastIndex = 0), r;
}
function xi(e) {
  return e.matches("input[type=submit], input[type=button], input[type=reset]") ? e.value : Array.from(e.childNodes).filter((t) => t.nodeType === Ep && !!t.textContent).map((t) => t.textContent).join("");
}
const RR = ER($e.elementRoles);
function xp(e) {
  return e.hidden === !0 || e.getAttribute("aria-hidden") === "true" || e.ownerDocument.defaultView.getComputedStyle(e).display === "none";
}
function zs(e, t) {
  t === void 0 && (t = {});
  const {
    isSubtreeInaccessible: r = xp
  } = t;
  if (e.ownerDocument.defaultView.getComputedStyle(e).visibility === "hidden")
    return !0;
  let o = e;
  for (; o; ) {
    if (r(o))
      return !0;
    o = o.parentElement;
  }
  return !1;
}
function Vs(e) {
  for (const {
    match: t,
    roles: r
  } of RR)
    if (t(e))
      return [...r];
  return [];
}
function ER(e) {
  function t(i) {
    let {
      name: l,
      attributes: c
    } = i;
    return "" + l + c.map((u) => {
      let {
        name: p,
        value: f,
        constraints: s = []
      } = u;
      const m = s.indexOf("undefined") !== -1, h = s.indexOf("set") !== -1;
      return typeof f < "u" ? "[" + p + '="' + f + '"]' : m ? ":not([" + p + "])" : h ? "[" + p + "]:not([" + p + '=""])' : "[" + p + "]";
    }).join("");
  }
  function r(i) {
    let {
      attributes: l = []
    } = i;
    return l.length;
  }
  function n(i, l) {
    let {
      specificity: c
    } = i, {
      specificity: u
    } = l;
    return u - c;
  }
  function o(i) {
    let {
      attributes: l = []
    } = i;
    const c = l.findIndex((p) => p.value && p.name === "type" && p.value === "text");
    c >= 0 && (l = [...l.slice(0, c), ...l.slice(c + 1)]);
    const u = t({
      ...i,
      attributes: l
    });
    return (p) => c >= 0 && p.type !== "text" ? !1 : p.matches(u);
  }
  let a = [];
  for (const [i, l] of e.entries())
    a = [...a, {
      match: o(i),
      roles: Array.from(l),
      specificity: r(i)
    }];
  return a.sort(n);
}
function wR(e, t) {
  let {
    hidden: r = !1
  } = t === void 0 ? {} : t;
  function n(o) {
    return [o, ...Array.from(o.children).reduce((a, i) => [...a, ...n(i)], [])];
  }
  return n(e).filter((o) => r === !1 ? zs(o) === !1 : !0).reduce((o, a) => {
    let i = [];
    return a.hasAttribute("role") ? i = a.getAttribute("role").split(" ").slice(0, 1) : i = Vs(a), i.reduce((l, c) => Array.isArray(l[c]) ? {
      ...l,
      [c]: [...l[c], a]
    } : {
      ...l,
      [c]: [a]
    }, o);
  }, {});
}
function CR(e, t) {
  let {
    hidden: r,
    includeDescription: n
  } = t;
  const o = wR(e, {
    hidden: r
  });
  return Object.entries(o).filter((a) => {
    let [i] = a;
    return i !== "generic";
  }).map((a) => {
    let [i, l] = a;
    const c = "-".repeat(50), u = l.map((p) => {
      const f = 'Name "' + Bs(p, {
        computedStyleSupportsPseudoElements: se().computedStyleSupportsPseudoElements
      }) + `":
`, s = ar(p.cloneNode(!1));
      if (n) {
        const m = 'Description "' + pp(p, {
          computedStyleSupportsPseudoElements: se().computedStyleSupportsPseudoElements
        }) + `":
`;
        return "" + f + m + s;
      }
      return "" + f + s;
    }).join(`

`);
    return i + `:

` + u + `

` + c;
  }).join(`
`);
}
function _R(e) {
  return e.tagName === "OPTION" ? e.selected : La(e, "aria-selected");
}
function PR(e) {
  return e.getAttribute("aria-busy") === "true";
}
function qR(e) {
  if (!("indeterminate" in e && e.indeterminate))
    return "checked" in e ? e.checked : La(e, "aria-checked");
}
function TR(e) {
  return La(e, "aria-pressed");
}
function SR(e) {
  var t, r;
  return (t = (r = La(e, "aria-current")) != null ? r : e.getAttribute("aria-current")) != null ? t : !1;
}
function xR(e) {
  return La(e, "aria-expanded");
}
function La(e, t) {
  const r = e.getAttribute(t);
  if (r === "true")
    return !0;
  if (r === "false")
    return !1;
}
function OR(e) {
  const t = {
    H1: 1,
    H2: 2,
    H3: 3,
    H4: 4,
    H5: 5,
    H6: 6
  };
  return e.getAttribute("aria-level") && Number(e.getAttribute("aria-level")) || t[e.tagName];
}
function MR(e) {
  const t = e.getAttribute("aria-valuenow");
  return t === null ? void 0 : +t;
}
function AR(e) {
  const t = e.getAttribute("aria-valuemax");
  return t === null ? void 0 : +t;
}
function IR(e) {
  const t = e.getAttribute("aria-valuemin");
  return t === null ? void 0 : +t;
}
function kR(e) {
  const t = e.getAttribute("aria-valuetext");
  return t === null ? void 0 : t;
}
const Qd = Tp();
function DR(e) {
  return e.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&");
}
function Gd(e) {
  return new RegExp(DR(e.toLowerCase()), "i");
}
function bt(e, t, r, n) {
  let {
    variant: o,
    name: a
  } = n, i = "";
  const l = {}, c = [["Role", "TestId"].includes(e) ? r : Gd(r)];
  a && (l.name = Gd(a)), e === "Role" && zs(t) && (l.hidden = !0, i = `Element is inaccessible. This means that the element and all its children are invisible to screen readers.
    If you are using the aria-hidden prop, make sure this is the right choice for your case.
    `), Object.keys(l).length > 0 && c.push(l);
  const u = o + "By" + e;
  return {
    queryName: e,
    queryMethod: u,
    queryArgs: c,
    variant: o,
    warning: i,
    toString() {
      i && console.warn(i);
      let [p, f] = c;
      return p = typeof p == "string" ? "'" + p + "'" : p, f = f ? ", { " + Object.entries(f).map((s) => {
        let [m, h] = s;
        return m + ": " + h;
      }).join(", ") + " }" : "", u + "(" + p + f + ")";
    }
  };
}
function yt(e, t, r) {
  return r && !0;
}
function ms(e, t, r) {
  var n, o;
  if (t === void 0 && (t = "get"), e.matches(se().defaultIgnore))
    return;
  const a = (n = e.getAttribute("role")) != null ? n : (o = Vs(e)) == null ? void 0 : o[0];
  if (a !== "generic" && yt("Role", r, a))
    return bt("Role", e, a, {
      variant: t,
      name: Bs(e, {
        computedStyleSupportsPseudoElements: se().computedStyleSupportsPseudoElements
      })
    });
  const i = Pp(document, e).map((s) => s.content).join(" ");
  if (yt("LabelText", r, i))
    return bt("LabelText", e, i, {
      variant: t
    });
  const l = e.getAttribute("placeholder");
  if (yt("PlaceholderText", r, l))
    return bt("PlaceholderText", e, l, {
      variant: t
    });
  const c = Qd(xi(e));
  if (yt("Text", r, c))
    return bt("Text", e, c, {
      variant: t
    });
  if (yt("DisplayValue", r, e.value))
    return bt("DisplayValue", e, Qd(e.value), {
      variant: t
    });
  const u = e.getAttribute("alt");
  if (yt("AltText", r, u))
    return bt("AltText", e, u, {
      variant: t
    });
  const p = e.getAttribute("title");
  if (yt("Title", r, p))
    return bt("Title", e, p, {
      variant: t
    });
  const f = e.getAttribute(se().testIdAttribute);
  if (yt("TestId", r, f))
    return bt("TestId", e, f, {
      variant: t
    });
}
function Ya(e, t) {
  e.stack = t.stack.replace(t.message, e.message);
}
function NR(e, t) {
  let {
    container: r = Hs(),
    timeout: n = se().asyncUtilTimeout,
    showOriginalStackTrace: o = se().showOriginalStackTrace,
    stackTraceError: a,
    interval: i = 50,
    onTimeout: l = (u) => (Object.defineProperty(u, "message", {
      value: se().getElementError(u.message, r).message
    }), u),
    mutationObserverOptions: c = {
      subtree: !0,
      childList: !0,
      attributes: !0,
      characterData: !0
    }
  } = t;
  if (typeof e != "function")
    throw new TypeError("Received `callback` arg must be a function");
  return new Promise(async (u, p) => {
    let f, s, m, h = !1, y = "idle";
    const P = setTimeout(q, n), d = Qi();
    if (d) {
      const {
        unstable_advanceTimersWrapper: v
      } = se();
      for (R(); !h; ) {
        if (!Qi()) {
          const b = new Error("Changed from using fake timers to real timers while using waitFor. This is not allowed and will result in very strange behavior. Please ensure you're awaiting all async things your test is doing before changing to real timers. For more info, please go to https://github.com/testing-library/dom-testing-library/issues/830");
          o || Ya(b, a), p(b);
          return;
        }
        if (await v(async () => {
          jest.advanceTimersByTime(i);
        }), h)
          break;
        R();
      }
    } else {
      try {
        mt(r);
      } catch (b) {
        p(b);
        return;
      }
      s = setInterval(g, i);
      const {
        MutationObserver: v
      } = wp(r);
      m = new v(g), m.observe(r, c), R();
    }
    function E(v, b) {
      h = !0, clearTimeout(P), d || (clearInterval(s), m.disconnect()), v ? p(v) : u(b);
    }
    function g() {
      if (Qi()) {
        const v = new Error("Changed from using real timers to fake timers while using waitFor. This is not allowed and will result in very strange behavior. Please ensure you're awaiting all async things your test is doing before changing to fake timers. For more info, please go to https://github.com/testing-library/dom-testing-library/issues/830");
        return o || Ya(v, a), p(v);
      } else
        return R();
    }
    function R() {
      if (y !== "pending")
        try {
          const v = vR(e);
          typeof v?.then == "function" ? (y = "pending", v.then((b) => {
            y = "resolved", E(null, b);
          }, (b) => {
            y = "rejected", f = b;
          })) : E(null, v);
        } catch (v) {
          f = v;
        }
    }
    function q() {
      let v;
      f ? (v = f, !o && v.name === "TestingLibraryElementError" && Ya(v, a)) : (v = new Error("Timed out in waitFor."), o || Ya(v, a)), E(l(v), null);
    }
  });
}
function LR(e, t) {
  const r = new Error("STACK_TRACE_MESSAGE");
  return se().asyncWrapper(() => NR(e, {
    stackTraceError: r,
    ...t
  }));
}
function Op(e, t) {
  return se().getElementError(e, t);
}
function FR(e, t) {
  return Op(e + "\n\n(If this is intentional, then use the `*AllBy*` variant of the query (like `queryAllByText`, `getAllByText`, or `findAllByText`)).", t);
}
function Oi(e, t, r, n) {
  let {
    exact: o = !0,
    collapseWhitespace: a,
    trim: i,
    normalizer: l
  } = n === void 0 ? {} : n;
  const c = o ? ct : mr, u = $t({
    collapseWhitespace: a,
    trim: i,
    normalizer: l
  });
  return Array.from(t.querySelectorAll("[" + e + "]")).filter((p) => c(p.getAttribute(e), p, r, u));
}
function vi(e, t) {
  return function(r) {
    for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
      o[a - 1] = arguments[a];
    const i = e(r, ...o);
    if (i.length > 1) {
      const l = i.map((c) => Op(null, c).message).join(`

`);
      throw FR(t(r, ...o) + `

Here are the matching elements:

` + l, r);
    }
    return i[0] || null;
  };
}
function Mp(e, t) {
  return se().getElementError(`A better query is available, try this:
` + e.toString() + `
`, t);
}
function BR(e, t) {
  return function(r) {
    for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
      o[a - 1] = arguments[a];
    const i = e(r, ...o);
    if (!i.length)
      throw se().getElementError(t(r, ...o), r);
    return i;
  };
}
function bi(e) {
  return (t, r, n, o) => LR(() => e(t, r, n), {
    container: t,
    ...o
  });
}
const er = (e, t, r) => function(n) {
  for (var o = arguments.length, a = new Array(o > 1 ? o - 1 : 0), i = 1; i < o; i++)
    a[i - 1] = arguments[i];
  const l = e(n, ...a), [{
    suggest: c = se().throwSuggestions
  } = {}] = a.slice(-1);
  if (l && c) {
    const u = ms(l, r);
    if (u && !t.endsWith(u.queryName))
      throw Mp(u.toString(), n);
  }
  return l;
}, Ue = (e, t, r) => function(n) {
  for (var o = arguments.length, a = new Array(o > 1 ? o - 1 : 0), i = 1; i < o; i++)
    a[i - 1] = arguments[i];
  const l = e(n, ...a), [{
    suggest: c = se().throwSuggestions
  } = {}] = a.slice(-1);
  if (l.length && c) {
    const u = [...new Set(l.map((p) => {
      var f;
      return (f = ms(p, r)) == null ? void 0 : f.toString();
    }))];
    if (
      // only want to suggest if all the els have the same suggestion.
      u.length === 1 && !t.endsWith(
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- TODO: Can this be null at runtime?
        ms(l[0], r).queryName
      )
    )
      throw Mp(u[0], n);
  }
  return l;
};
function Ut(e, t, r) {
  const n = er(vi(e, t), e.name, "query"), o = BR(e, r), a = vi(o, t), i = er(a, e.name, "get"), l = Ue(o, e.name.replace("query", "get"), "getAll"), c = bi(Ue(o, e.name, "findAll")), u = bi(er(a, e.name, "find"));
  return [n, l, i, c, u];
}
function jR(e) {
  return Array.from(e.querySelectorAll("label,input")).map((t) => ({
    node: t,
    textToMatch: ps(t)
  })).filter((t) => {
    let {
      textToMatch: r
    } = t;
    return r !== null;
  });
}
const $R = function(e, t, r) {
  let {
    exact: n = !0,
    trim: o,
    collapseWhitespace: a,
    normalizer: i
  } = r === void 0 ? {} : r;
  const l = n ? ct : mr, c = $t({
    collapseWhitespace: a,
    trim: o,
    normalizer: i
  });
  return jR(e).filter((p) => {
    let {
      node: f,
      textToMatch: s
    } = p;
    return l(s, f, t, c);
  }).map((p) => {
    let {
      node: f
    } = p;
    return f;
  });
}, qa = function(e, t, r) {
  let {
    selector: n = "*",
    exact: o = !0,
    collapseWhitespace: a,
    trim: i,
    normalizer: l
  } = r === void 0 ? {} : r;
  mt(e);
  const c = o ? ct : mr, u = $t({
    collapseWhitespace: a,
    trim: i,
    normalizer: l
  }), p = Array.from(e.querySelectorAll("*")).filter((f) => _p(f).length || f.hasAttribute("aria-labelledby")).reduce((f, s) => {
    const m = Pp(e, s, {
      selector: n
    });
    m.filter((y) => !!y.formControl).forEach((y) => {
      c(y.content, y.formControl, t, u) && y.formControl && f.push(y.formControl);
    });
    const h = m.filter((y) => !!y.content).map((y) => y.content);
    return c(h.join(" "), s, t, u) && f.push(s), h.length > 1 && h.forEach((y, P) => {
      c(y, s, t, u) && f.push(s);
      const d = [...h];
      d.splice(P, 1), d.length > 1 && c(d.join(" "), s, t, u) && f.push(s);
    }), f;
  }, []).concat(Oi("aria-label", e, t, {
    exact: o,
    normalizer: u
  }));
  return Array.from(new Set(p)).filter((f) => f.matches(n));
}, Ft = function(e, t) {
  for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++)
    n[o - 2] = arguments[o];
  const a = qa(e, t, ...n);
  if (!a.length) {
    const i = $R(e, t, ...n);
    if (i.length) {
      const l = i.map((c) => UR(e, c)).filter((c) => !!c);
      throw l.length ? se().getElementError(l.map((c) => "Found a label with the text of: " + t + ", however the element associated with this label (<" + c + " />) is non-labellable [https://html.spec.whatwg.org/multipage/forms.html#category-label]. If you really need to label a <" + c + " />, you can use aria-label or aria-labelledby instead.").join(`

`), e) : se().getElementError("Found a label with the text of: " + t + `, however no form control was found associated to that label. Make sure you're using the "for" attribute or "aria-labelledby" attribute correctly.`, e);
    } else
      throw se().getElementError("Unable to find a label with the text of: " + t, e);
  }
  return a;
};
function UR(e, t) {
  const r = t.getAttribute("for");
  if (!r)
    return null;
  const n = e.querySelector('[id="' + r + '"]');
  return n ? n.tagName.toLowerCase() : null;
}
const Ap = (e, t) => "Found multiple elements with the text of: " + t, HR = er(vi(qa, Ap), qa.name, "query"), Ip = vi(Ft, Ap), zR = bi(Ue(Ft, Ft.name, "findAll")), VR = bi(er(Ip, Ft.name, "find")), WR = Ue(Ft, Ft.name, "getAll"), KR = er(Ip, Ft.name, "get"), QR = Ue(qa, qa.name, "queryAll"), hs = function() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return mt(t[0]), Oi("placeholder", ...t);
}, GR = (e, t) => "Found multiple elements with the placeholder text of: " + t, YR = (e, t) => "Unable to find an element with the placeholder text of: " + t, XR = Ue(hs, hs.name, "queryAll"), [ZR, JR, e0, t0, r0] = Ut(hs, GR, YR), vs = function(e, t, r) {
  let {
    selector: n = "*",
    exact: o = !0,
    collapseWhitespace: a,
    trim: i,
    ignore: l = se().defaultIgnore,
    normalizer: c
  } = r === void 0 ? {} : r;
  mt(e);
  const u = o ? ct : mr, p = $t({
    collapseWhitespace: a,
    trim: i,
    normalizer: c
  });
  let f = [];
  return typeof e.matches == "function" && e.matches(n) && (f = [e]), [...f, ...Array.from(e.querySelectorAll(n))].filter((s) => !l || !s.matches(l)).filter((s) => u(xi(s), s, t, p));
}, n0 = (e, t) => "Found multiple elements with the text: " + t, o0 = function(e, t, r) {
  r === void 0 && (r = {});
  const {
    collapseWhitespace: n,
    trim: o,
    normalizer: a,
    selector: i
  } = r, c = $t({
    collapseWhitespace: n,
    trim: o,
    normalizer: a
  })(t.toString()), u = c !== t.toString(), p = (i ?? "*") !== "*";
  return "Unable to find an element with the text: " + (u ? c + " (normalized from '" + t + "')" : t) + (p ? ", which matches selector '" + i + "'" : "") + ". This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.";
}, a0 = Ue(vs, vs.name, "queryAll"), [i0, s0, l0, u0, c0] = Ut(vs, n0, o0), bs = function(e, t, r) {
  let {
    exact: n = !0,
    collapseWhitespace: o,
    trim: a,
    normalizer: i
  } = r === void 0 ? {} : r;
  mt(e);
  const l = n ? ct : mr, c = $t({
    collapseWhitespace: o,
    trim: a,
    normalizer: i
  });
  return Array.from(e.querySelectorAll("input,textarea,select")).filter((u) => u.tagName === "SELECT" ? Array.from(u.options).filter((f) => f.selected).some((f) => l(xi(f), f, t, c)) : l(u.value, u, t, c));
}, d0 = (e, t) => "Found multiple elements with the display value: " + t + ".", f0 = (e, t) => "Unable to find an element with the display value: " + t + ".", p0 = Ue(bs, bs.name, "queryAll"), [m0, h0, v0, b0, y0] = Ut(bs, d0, f0), g0 = /^(img|input|area|.+-.+)$/i, ys = function(e, t, r) {
  return r === void 0 && (r = {}), mt(e), Oi("alt", e, t, r).filter((n) => g0.test(n.tagName));
}, R0 = (e, t) => "Found multiple elements with the alt text: " + t, E0 = (e, t) => "Unable to find an element with the alt text: " + t, w0 = Ue(ys, ys.name, "queryAll"), [C0, _0, P0, q0, T0] = Ut(ys, R0, E0), S0 = (e) => {
  var t;
  return e.tagName.toLowerCase() === "title" && ((t = e.parentElement) == null ? void 0 : t.tagName.toLowerCase()) === "svg";
}, gs = function(e, t, r) {
  let {
    exact: n = !0,
    collapseWhitespace: o,
    trim: a,
    normalizer: i
  } = r === void 0 ? {} : r;
  mt(e);
  const l = n ? ct : mr, c = $t({
    collapseWhitespace: o,
    trim: a,
    normalizer: i
  });
  return Array.from(e.querySelectorAll("[title], svg > title")).filter((u) => l(u.getAttribute("title"), u, t, c) || S0(u) && l(xi(u), u, t, c));
}, x0 = (e, t) => "Found multiple elements with the title: " + t + ".", O0 = (e, t) => "Unable to find an element with the title: " + t + ".", M0 = Ue(gs, gs.name, "queryAll"), [A0, I0, k0, D0, N0] = Ut(gs, x0, O0), Rs = function(e, t, r) {
  let {
    hidden: n = se().defaultHidden,
    name: o,
    description: a,
    queryFallbacks: i = !1,
    selected: l,
    busy: c,
    checked: u,
    pressed: p,
    current: f,
    level: s,
    expanded: m,
    value: {
      now: h,
      min: y,
      max: P,
      text: d
    } = {}
  } = r === void 0 ? {} : r;
  if (mt(e), l !== void 0) {
    var E;
    if (((E = $e.roles.get(t)) == null ? void 0 : E.props["aria-selected"]) === void 0)
      throw new Error('"aria-selected" is not supported on role "' + t + '".');
  }
  if (c !== void 0) {
    var g;
    if (((g = $e.roles.get(t)) == null ? void 0 : g.props["aria-busy"]) === void 0)
      throw new Error('"aria-busy" is not supported on role "' + t + '".');
  }
  if (u !== void 0) {
    var R;
    if (((R = $e.roles.get(t)) == null ? void 0 : R.props["aria-checked"]) === void 0)
      throw new Error('"aria-checked" is not supported on role "' + t + '".');
  }
  if (p !== void 0) {
    var q;
    if (((q = $e.roles.get(t)) == null ? void 0 : q.props["aria-pressed"]) === void 0)
      throw new Error('"aria-pressed" is not supported on role "' + t + '".');
  }
  if (f !== void 0) {
    var v;
    if (((v = $e.roles.get(t)) == null ? void 0 : v.props["aria-current"]) === void 0)
      throw new Error('"aria-current" is not supported on role "' + t + '".');
  }
  if (s !== void 0 && t !== "heading")
    throw new Error('Role "' + t + '" cannot have "level" property.');
  if (h !== void 0) {
    var b;
    if (((b = $e.roles.get(t)) == null ? void 0 : b.props["aria-valuenow"]) === void 0)
      throw new Error('"aria-valuenow" is not supported on role "' + t + '".');
  }
  if (P !== void 0) {
    var _;
    if (((_ = $e.roles.get(t)) == null ? void 0 : _.props["aria-valuemax"]) === void 0)
      throw new Error('"aria-valuemax" is not supported on role "' + t + '".');
  }
  if (y !== void 0) {
    var M;
    if (((M = $e.roles.get(t)) == null ? void 0 : M.props["aria-valuemin"]) === void 0)
      throw new Error('"aria-valuemin" is not supported on role "' + t + '".');
  }
  if (d !== void 0) {
    var O;
    if (((O = $e.roles.get(t)) == null ? void 0 : O.props["aria-valuetext"]) === void 0)
      throw new Error('"aria-valuetext" is not supported on role "' + t + '".');
  }
  if (m !== void 0) {
    var x;
    if (((x = $e.roles.get(t)) == null ? void 0 : x.props["aria-expanded"]) === void 0)
      throw new Error('"aria-expanded" is not supported on role "' + t + '".');
  }
  const A = /* @__PURE__ */ new WeakMap();
  function T(I) {
    return A.has(I) || A.set(I, xp(I)), A.get(I);
  }
  return Array.from(e.querySelectorAll(
    // Only query elements that can be matched by the following filters
    L0(t)
  )).filter((I) => {
    if (I.hasAttribute("role")) {
      const z = I.getAttribute("role");
      if (i)
        return z.split(" ").filter(Boolean).some((W) => W === t);
      const [K] = z.split(" ");
      return K === t;
    }
    return Vs(I).some((z) => z === t);
  }).filter((I) => {
    if (l !== void 0)
      return l === _R(I);
    if (c !== void 0)
      return c === PR(I);
    if (u !== void 0)
      return u === qR(I);
    if (p !== void 0)
      return p === TR(I);
    if (f !== void 0)
      return f === SR(I);
    if (m !== void 0)
      return m === xR(I);
    if (s !== void 0)
      return s === OR(I);
    if (h !== void 0 || P !== void 0 || y !== void 0 || d !== void 0) {
      let V = !0;
      if (h !== void 0 && V && (V = h === MR(I)), P !== void 0 && V && (V = P === AR(I)), y !== void 0 && V && (V = y === IR(I)), d !== void 0) {
        var L;
        V && (V = ct((L = kR(I)) != null ? L : null, I, d, (z) => z));
      }
      return V;
    }
    return !0;
  }).filter((I) => o === void 0 ? !0 : ct(Bs(I, {
    computedStyleSupportsPseudoElements: se().computedStyleSupportsPseudoElements
  }), I, o, (L) => L)).filter((I) => a === void 0 ? !0 : ct(pp(I, {
    computedStyleSupportsPseudoElements: se().computedStyleSupportsPseudoElements
  }), I, a, (L) => L)).filter((I) => n === !1 ? zs(I, {
    isSubtreeInaccessible: T
  }) === !1 : !0);
};
function L0(e) {
  var t;
  const r = '*[role~="' + e + '"]', n = (t = $e.roleElements.get(e)) != null ? t : /* @__PURE__ */ new Set(), o = new Set(Array.from(n).map((a) => {
    let {
      name: i
    } = a;
    return i;
  }));
  return [r].concat(Array.from(o)).join(",");
}
const kp = (e) => {
  let t = "";
  return e === void 0 ? t = "" : typeof e == "string" ? t = ' and name "' + e + '"' : t = " and name `" + e + "`", t;
}, F0 = function(e, t, r) {
  let {
    name: n
  } = r === void 0 ? {} : r;
  return 'Found multiple elements with the role "' + t + '"' + kp(n);
}, B0 = function(e, t, r) {
  let {
    hidden: n = se().defaultHidden,
    name: o,
    description: a
  } = r === void 0 ? {} : r;
  if (se()._disableExpensiveErrorDiagnostics)
    return 'Unable to find role="' + t + '"' + kp(o);
  let i = "";
  Array.from(e.children).forEach((p) => {
    i += CR(p, {
      hidden: n,
      includeDescription: a !== void 0
    });
  });
  let l;
  i.length === 0 ? n === !1 ? l = "There are no accessible roles. But there might be some inaccessible roles. If you wish to access them, then set the `hidden` option to `true`. Learn more about this here: https://testing-library.com/docs/dom-testing-library/api-queries#byrole" : l = "There are no available roles." : l = (`
Here are the ` + (n === !1 ? "accessible" : "available") + ` roles:

  ` + i.replace(/\n/g, `
  `).replace(/\n\s\s\n/g, `

`) + `
`).trim();
  let c = "";
  o === void 0 ? c = "" : typeof o == "string" ? c = ' and name "' + o + '"' : c = " and name `" + o + "`";
  let u = "";
  return a === void 0 ? u = "" : typeof a == "string" ? u = ' and description "' + a + '"' : u = " and description `" + a + "`", (`
Unable to find an ` + (n === !1 ? "accessible " : "") + 'element with the role "' + t + '"' + c + u + `

` + l).trim();
}, j0 = Ue(Rs, Rs.name, "queryAll"), [$0, U0, H0, z0, V0] = Ut(Rs, F0, B0), Ws = () => se().testIdAttribute, Es = function() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return mt(t[0]), Oi(Ws(), ...t);
}, W0 = (e, t) => "Found multiple elements by: [" + Ws() + '="' + t + '"]', K0 = (e, t) => "Unable to find an element by: [" + Ws() + '="' + t + '"]', Q0 = Ue(Es, Es.name, "queryAll"), [G0, Y0, X0, Z0, J0] = Ut(Es, W0, K0);
var ws = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  queryAllByLabelText: QR,
  queryByLabelText: HR,
  getAllByLabelText: WR,
  getByLabelText: KR,
  findAllByLabelText: zR,
  findByLabelText: VR,
  queryByPlaceholderText: ZR,
  queryAllByPlaceholderText: XR,
  getByPlaceholderText: e0,
  getAllByPlaceholderText: JR,
  findAllByPlaceholderText: t0,
  findByPlaceholderText: r0,
  queryByText: i0,
  queryAllByText: a0,
  getByText: l0,
  getAllByText: s0,
  findAllByText: u0,
  findByText: c0,
  queryByDisplayValue: m0,
  queryAllByDisplayValue: p0,
  getByDisplayValue: v0,
  getAllByDisplayValue: h0,
  findAllByDisplayValue: b0,
  findByDisplayValue: y0,
  queryByAltText: C0,
  queryAllByAltText: w0,
  getByAltText: P0,
  getAllByAltText: _0,
  findAllByAltText: q0,
  findByAltText: T0,
  queryByTitle: A0,
  queryAllByTitle: M0,
  getByTitle: k0,
  getAllByTitle: I0,
  findAllByTitle: D0,
  findByTitle: N0,
  queryByRole: $0,
  queryAllByRole: j0,
  getAllByRole: U0,
  getByRole: H0,
  findAllByRole: z0,
  findByRole: V0,
  queryByTestId: G0,
  queryAllByTestId: Q0,
  getByTestId: X0,
  getAllByTestId: Y0,
  findAllByTestId: Z0,
  findByTestId: J0
});
function Dp(e, t, r) {
  return t === void 0 && (t = ws), r === void 0 && (r = {}), Object.keys(t).reduce((n, o) => {
    const a = t[o];
    return n[o] = a.bind(null, e), n;
  }, r);
}
const Yd = {
  // Clipboard Events
  copy: {
    EventType: "ClipboardEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  cut: {
    EventType: "ClipboardEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  paste: {
    EventType: "ClipboardEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  // Composition Events
  compositionEnd: {
    EventType: "CompositionEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  compositionStart: {
    EventType: "CompositionEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  compositionUpdate: {
    EventType: "CompositionEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  // Keyboard Events
  keyDown: {
    EventType: "KeyboardEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      charCode: 0,
      composed: !0
    }
  },
  keyPress: {
    EventType: "KeyboardEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      charCode: 0,
      composed: !0
    }
  },
  keyUp: {
    EventType: "KeyboardEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      charCode: 0,
      composed: !0
    }
  },
  // Focus Events
  focus: {
    EventType: "FocusEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1,
      composed: !0
    }
  },
  blur: {
    EventType: "FocusEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1,
      composed: !0
    }
  },
  focusIn: {
    EventType: "FocusEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  focusOut: {
    EventType: "FocusEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  // Form Events
  change: {
    EventType: "Event",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  input: {
    EventType: "InputEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  invalid: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !0
    }
  },
  submit: {
    EventType: "Event",
    defaultInit: {
      bubbles: !0,
      cancelable: !0
    }
  },
  reset: {
    EventType: "Event",
    defaultInit: {
      bubbles: !0,
      cancelable: !0
    }
  },
  // Mouse Events
  click: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      button: 0,
      composed: !0
    }
  },
  contextMenu: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  dblClick: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  drag: {
    EventType: "DragEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  dragEnd: {
    EventType: "DragEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  dragEnter: {
    EventType: "DragEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  dragExit: {
    EventType: "DragEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  dragLeave: {
    EventType: "DragEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  dragOver: {
    EventType: "DragEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  dragStart: {
    EventType: "DragEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  drop: {
    EventType: "DragEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  mouseDown: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  mouseEnter: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1,
      composed: !0
    }
  },
  mouseLeave: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1,
      composed: !0
    }
  },
  mouseMove: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  mouseOut: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  mouseOver: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  mouseUp: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  // Selection Events
  select: {
    EventType: "Event",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  // Touch Events
  touchCancel: {
    EventType: "TouchEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  touchEnd: {
    EventType: "TouchEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  touchMove: {
    EventType: "TouchEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  touchStart: {
    EventType: "TouchEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  // UI Events
  resize: {
    EventType: "UIEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  scroll: {
    EventType: "UIEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  // Wheel Events
  wheel: {
    EventType: "WheelEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  // Media Events
  abort: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  canPlay: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  canPlayThrough: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  durationChange: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  emptied: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  encrypted: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  ended: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  loadedData: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  loadedMetadata: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  loadStart: {
    EventType: "ProgressEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  pause: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  play: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  playing: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  progress: {
    EventType: "ProgressEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  rateChange: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  seeked: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  seeking: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  stalled: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  suspend: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  timeUpdate: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  volumeChange: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  waiting: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  // Events
  load: {
    // TODO: load events can be UIEvent or Event depending on what generated them
    // This is where this abstraction breaks down.
    // But the common targets are <img />, <script /> and window.
    // Neither of these targets receive a UIEvent
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  error: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  // Animation Events
  animationStart: {
    EventType: "AnimationEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  animationEnd: {
    EventType: "AnimationEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  animationIteration: {
    EventType: "AnimationEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  // Transition Events
  transitionCancel: {
    EventType: "TransitionEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  transitionEnd: {
    EventType: "TransitionEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0
    }
  },
  transitionRun: {
    EventType: "TransitionEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  transitionStart: {
    EventType: "TransitionEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  // pointer events
  pointerOver: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  pointerEnter: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  pointerDown: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  pointerMove: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  pointerUp: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  pointerCancel: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  pointerOut: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  pointerLeave: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  gotPointerCapture: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  lostPointerCapture: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  // history events
  popState: {
    EventType: "PopStateEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  // window events
  offline: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  online: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  pageHide: {
    EventType: "PageTransitionEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0
    }
  },
  pageShow: {
    EventType: "PageTransitionEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0
    }
  }
}, Xd = {
  doubleClick: "dblClick"
};
function Ta(e, t) {
  return se().eventWrapper(() => {
    if (!t)
      throw new Error("Unable to fire an event - please provide an event object.");
    if (!e)
      throw new Error('Unable to fire a "' + t.type + '" event - please provide a DOM element.');
    return e.dispatchEvent(t);
  });
}
function Gi(e, t, r, n) {
  let {
    EventType: o = "Event",
    defaultInit: a = {}
  } = n === void 0 ? {} : n;
  if (!t)
    throw new Error('Unable to fire a "' + e + '" event - please provide a DOM element.');
  const i = {
    ...a,
    ...r
  }, {
    target: {
      value: l,
      files: c,
      ...u
    } = {}
  } = i;
  l !== void 0 && eE(t, l), c !== void 0 && Object.defineProperty(t, "files", {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    value: c
  }), Object.assign(t, u);
  const p = wp(t), f = p[o] || p.Event;
  let s;
  if (typeof f == "function")
    s = new f(e, i);
  else {
    s = p.document.createEvent(o);
    const {
      bubbles: h,
      cancelable: y,
      detail: P,
      ...d
    } = i;
    s.initEvent(e, h, y, P), Object.keys(d).forEach((E) => {
      s[E] = d[E];
    });
  }
  return ["dataTransfer", "clipboardData"].forEach((h) => {
    const y = i[h];
    typeof y == "object" && (typeof p.DataTransfer == "function" ? Object.defineProperty(s, h, {
      value: Object.getOwnPropertyNames(y).reduce((P, d) => (Object.defineProperty(P, d, {
        value: y[d]
      }), P), new p.DataTransfer())
    }) : Object.defineProperty(s, h, {
      value: y
    }));
  }), s;
}
Object.keys(Yd).forEach((e) => {
  const {
    EventType: t,
    defaultInit: r
  } = Yd[e], n = e.toLowerCase();
  Gi[e] = (o, a) => Gi(n, o, a, {
    EventType: t,
    defaultInit: r
  }), Ta[e] = (o, a) => Ta(o, Gi[e](o, a));
});
function eE(e, t) {
  const {
    set: r
  } = Object.getOwnPropertyDescriptor(e, "value") || {}, n = Object.getPrototypeOf(e), {
    set: o
  } = Object.getOwnPropertyDescriptor(n, "value") || {};
  if (o && r !== o)
    o.call(e, t);
  else if (r)
    r.call(e, t);
  else
    throw new Error("The given element does not have a value setter");
}
Object.keys(Xd).forEach((e) => {
  const t = Xd[e];
  Ta[e] = function() {
    return Ta[t](...arguments);
  };
});
function tE(e) {
  return e.replace(/[ \t]*[\n][ \t]*/g, `
`);
}
function rE(e) {
  return Y1.compressToEncodedURIComponent(tE(e));
}
function nE(e) {
  return "https://testing-playground.com/#markup=" + rE(e);
}
const oE = (e, t, r) => Array.isArray(e) ? e.forEach((n) => Kd(n, t, r)) : Kd(e, t, r), aE = function(e) {
  if (e === void 0 && (e = Hs().body), !e || !("innerHTML" in e)) {
    console.log("The element you're providing isn't a valid DOM element.");
    return;
  }
  if (!e.innerHTML) {
    console.log("The provided element doesn't have any children.");
    return;
  }
  const t = nE(e.innerHTML);
  return console.log(`Open this URL in your browser

` + t), t;
}, Zd = {
  debug: oE,
  logTestingPlaygroundURL: aE
};
typeof document < "u" && document.body ? Dp(document.body, ws, Zd) : Object.keys(ws).reduce((e, t) => (e[t] = () => {
  throw new TypeError("For queries bound to document.body a global document has to be available... Learn more: https://testing-library.com/s/screen-global-error");
}, e), Zd);
var Xa = { exports: {} }, Ce = {};
/**
 * @license React
 * react-dom-test-utils.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jd;
function iE() {
  if (Jd) return Ce;
  Jd = 1;
  var e = kf, t = At;
  function r(w) {
    var B = w, N = w;
    if (w.alternate) for (; B.return; ) B = B.return;
    else {
      w = B;
      do
        B = w, (B.flags & 4098) !== 0 && (N = B.return), w = B.return;
      while (w);
    }
    return B.tag === 3 ? N : null;
  }
  function n(w) {
    if (r(w) !== w) throw Error("Unable to find node on an unmounted component.");
  }
  function o(w) {
    var B = w.alternate;
    if (!B) {
      if (B = r(w), B === null) throw Error("Unable to find node on an unmounted component.");
      return B !== w ? null : w;
    }
    for (var N = w, G = B; ; ) {
      var de = N.return;
      if (de === null) break;
      var fe = de.alternate;
      if (fe === null) {
        if (G = de.return, G !== null) {
          N = G;
          continue;
        }
        break;
      }
      if (de.child === fe.child) {
        for (fe = de.child; fe; ) {
          if (fe === N) return n(de), w;
          if (fe === G) return n(de), B;
          fe = fe.sibling;
        }
        throw Error("Unable to find node on an unmounted component.");
      }
      if (N.return !== G.return) N = de, G = fe;
      else {
        for (var ne = !1, me = de.child; me; ) {
          if (me === N) {
            ne = !0, N = de, G = fe;
            break;
          }
          if (me === G) {
            ne = !0, G = de, N = fe;
            break;
          }
          me = me.sibling;
        }
        if (!ne) {
          for (me = fe.child; me; ) {
            if (me === N) {
              ne = !0, N = fe, G = de;
              break;
            }
            if (me === G) {
              ne = !0, G = fe, N = de;
              break;
            }
            me = me.sibling;
          }
          if (!ne) throw Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
        }
      }
      if (N.alternate !== G) throw Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
    }
    if (N.tag !== 3) throw Error("Unable to find node on an unmounted component.");
    return N.stateNode.current === N ? w : B;
  }
  var a = Object.assign;
  function i(w) {
    var B = w.keyCode;
    return "charCode" in w ? (w = w.charCode, w === 0 && B === 13 && (w = 13)) : w = B, w === 10 && (w = 13), 32 <= w || w === 13 ? w : 0;
  }
  function l() {
    return !0;
  }
  function c() {
    return !1;
  }
  function u(w) {
    function B(N, G, de, fe, ne) {
      this._reactName = N, this._targetInst = de, this.type = G, this.nativeEvent = fe, this.target = ne, this.currentTarget = null;
      for (var me in w) w.hasOwnProperty(me) && (N = w[me], this[me] = N ? N(fe) : fe[me]);
      return this.isDefaultPrevented = (fe.defaultPrevented != null ? fe.defaultPrevented : fe.returnValue === !1) ? l : c, this.isPropagationStopped = c, this;
    }
    return a(B.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var N = this.nativeEvent;
      N && (N.preventDefault ? N.preventDefault() : typeof N.returnValue != "unknown" && (N.returnValue = !1), this.isDefaultPrevented = l);
    }, stopPropagation: function() {
      var N = this.nativeEvent;
      N && (N.stopPropagation ? N.stopPropagation() : typeof N.cancelBubble != "unknown" && (N.cancelBubble = !0), this.isPropagationStopped = l);
    }, persist: function() {
    }, isPersistent: l }), B;
  }
  var p = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(w) {
    return w.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, f = u(p), s = a({}, p, { view: 0, detail: 0 });
  u(s);
  var m, h, y, P = a({}, s, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: O, button: 0, buttons: 0, relatedTarget: function(w) {
    return w.relatedTarget === void 0 ? w.fromElement === w.srcElement ? w.toElement : w.fromElement : w.relatedTarget;
  }, movementX: function(w) {
    return "movementX" in w ? w.movementX : (w !== y && (y && w.type === "mousemove" ? (m = w.screenX - y.screenX, h = w.screenY - y.screenY) : h = m = 0, y = w), m);
  }, movementY: function(w) {
    return "movementY" in w ? w.movementY : h;
  } });
  u(P);
  var d = a({}, P, { dataTransfer: 0 });
  u(d);
  var E = a({}, s, { relatedTarget: 0 });
  u(E);
  var g = a({}, p, { animationName: 0, elapsedTime: 0, pseudoElement: 0 });
  u(g);
  var R = a({}, p, { clipboardData: function(w) {
    return "clipboardData" in w ? w.clipboardData : window.clipboardData;
  } });
  u(R);
  var q = a({}, p, { data: 0 });
  u(q);
  var v = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, b = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, _ = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function M(w) {
    var B = this.nativeEvent;
    return B.getModifierState ? B.getModifierState(w) : (w = _[w]) ? !!B[w] : !1;
  }
  function O() {
    return M;
  }
  var x = a({}, s, { key: function(w) {
    if (w.key) {
      var B = v[w.key] || w.key;
      if (B !== "Unidentified") return B;
    }
    return w.type === "keypress" ? (w = i(w), w === 13 ? "Enter" : String.fromCharCode(w)) : w.type === "keydown" || w.type === "keyup" ? b[w.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: O, charCode: function(w) {
    return w.type === "keypress" ? i(w) : 0;
  }, keyCode: function(w) {
    return w.type === "keydown" || w.type === "keyup" ? w.keyCode : 0;
  }, which: function(w) {
    return w.type === "keypress" ? i(w) : w.type === "keydown" || w.type === "keyup" ? w.keyCode : 0;
  } });
  u(x);
  var A = a({}, P, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 });
  u(A);
  var T = a({}, s, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: O });
  u(T);
  var I = a({}, p, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 });
  u(I);
  var L = a({}, P, { deltaX: function(w) {
    return "deltaX" in w ? w.deltaX : "wheelDeltaX" in w ? -w.wheelDeltaX : 0;
  }, deltaY: function(w) {
    return "deltaY" in w ? w.deltaY : "wheelDeltaY" in w ? -w.wheelDeltaY : "wheelDelta" in w ? -w.wheelDelta : 0;
  }, deltaZ: 0, deltaMode: 0 });
  u(L);
  function V(w, B, N, G, de, fe, ne, me, Me) {
    var ke = Array.prototype.slice.call(arguments, 3);
    try {
      B.apply(N, ke);
    } catch (yr) {
      this.onError(yr);
    }
  }
  var z = !1, K = null, W = !1, re = null, le = { onError: function(w) {
    z = !0, K = w;
  } };
  function Re(w, B, N, G, de, fe, ne, me, Me) {
    z = !1, K = null, V.apply(le, arguments);
  }
  function H(w, B, N, G, de, fe, ne, me, Me) {
    if (Re.apply(this, arguments), z) {
      if (z) {
        var ke = K;
        z = !1, K = null;
      } else throw Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
      W || (W = !0, re = ke);
    }
  }
  var ue = Array.isArray, Q = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events, ae = Q[0], pe = Q[1], ee = Q[2], S = Q[3], U = Q[4], F = e.unstable_act;
  function X() {
  }
  function Z(w, B) {
    if (!w) return [];
    if (w = o(w), !w) return [];
    for (var N = w, G = []; ; ) {
      if (N.tag === 5 || N.tag === 6 || N.tag === 1 || N.tag === 0) {
        var de = N.stateNode;
        B(de) && G.push(de);
      }
      if (N.child) N.child.return = N, N = N.child;
      else {
        if (N === w) return G;
        for (; !N.sibling; ) {
          if (!N.return || N.return === w) return G;
          N = N.return;
        }
        N.sibling.return = N.return, N = N.sibling;
      }
    }
  }
  function J(w, B) {
    if (w && !w._reactInternals) {
      var N = String(w);
      throw w = ue(w) ? "an array" : w && w.nodeType === 1 && w.tagName ? "a DOM node" : N === "[object Object]" ? "object with keys {" + Object.keys(w).join(", ") + "}" : N, Error(B + "(...): the first argument must be a React class instance. Instead received: " + (w + "."));
    }
  }
  function ce(w) {
    return !(!w || w.nodeType !== 1 || !w.tagName);
  }
  function oe(w) {
    return ce(w) ? !1 : w != null && typeof w.render == "function" && typeof w.setState == "function";
  }
  function he(w, B) {
    return oe(w) ? w._reactInternals.type === B : !1;
  }
  function Te(w, B) {
    return J(w, "findAllInRenderedTree"), w ? Z(w._reactInternals, B) : [];
  }
  function ze(w, B) {
    return J(w, "scryRenderedDOMComponentsWithClass"), Te(w, function(N) {
      if (ce(N)) {
        var G = N.className;
        typeof G != "string" && (G = N.getAttribute("class") || "");
        var de = G.split(/\s+/);
        if (!ue(B)) {
          if (B === void 0) throw Error("TestUtils.scryRenderedDOMComponentsWithClass expects a className as a second argument.");
          B = B.split(/\s+/);
        }
        return B.every(function(fe) {
          return de.indexOf(fe) !== -1;
        });
      }
      return !1;
    });
  }
  function ht(w, B) {
    return J(w, "scryRenderedDOMComponentsWithTag"), Te(w, function(N) {
      return ce(N) && N.tagName.toUpperCase() === B.toUpperCase();
    });
  }
  function Ht(w, B) {
    return J(w, "scryRenderedComponentsWithType"), Te(w, function(N) {
      return he(N, B);
    });
  }
  function zt(w, B, N) {
    var G = w.type || "unknown-event";
    w.currentTarget = pe(N), H(G, B, void 0, w), w.currentTarget = null;
  }
  function Vt(w, B, N) {
    for (var G = []; w; ) {
      G.push(w);
      do
        w = w.return;
      while (w && w.tag !== 5);
      w = w || null;
    }
    for (w = G.length; 0 < w--; ) B(G[w], "captured", N);
    for (w = 0; w < G.length; w++) B(G[w], "bubbled", N);
  }
  function Wt(w, B) {
    var N = w.stateNode;
    if (!N) return null;
    var G = ee(N);
    if (!G) return null;
    N = G[B];
    e: switch (B) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (G = !G.disabled) || (w = w.type, G = !(w === "button" || w === "input" || w === "select" || w === "textarea")), w = !G;
        break e;
      default:
        w = !1;
    }
    if (w) return null;
    if (N && typeof N != "function") throw Error("Expected `" + B + "` listener to be a function, instead got a value of `" + typeof N + "` type.");
    return N;
  }
  function vr(w, B, N) {
    w && N && N._reactName && (B = Wt(w, N._reactName)) && (N._dispatchListeners == null && (N._dispatchListeners = []), N._dispatchInstances == null && (N._dispatchInstances = []), N._dispatchListeners.push(B), N._dispatchInstances.push(w));
  }
  function _t(w, B, N) {
    var G = N._reactName;
    B === "captured" && (G += "Capture"), (B = Wt(w, G)) && (N._dispatchListeners == null && (N._dispatchListeners = []), N._dispatchInstances == null && (N._dispatchInstances = []), N._dispatchListeners.push(B), N._dispatchInstances.push(w));
  }
  var Kt = {}, Xe = /* @__PURE__ */ new Set(["mouseEnter", "mouseLeave", "pointerEnter", "pointerLeave"]);
  function br(w) {
    return function(B, N) {
      if (e.isValidElement(B)) throw Error("TestUtils.Simulate expected a DOM node as the first argument but received a React element. Pass the DOM node you wish to simulate the event on instead. Note that TestUtils.Simulate will not work if you are using shallow rendering.");
      if (oe(B)) throw Error("TestUtils.Simulate expected a DOM node as the first argument but received a component instance. Pass the DOM node you wish to simulate the event on instead.");
      var G = "on" + w[0].toUpperCase() + w.slice(1), de = new X();
      de.target = B, de.type = w.toLowerCase();
      var fe = ae(B), ne = new f(G, de.type, fe, de, B);
      ne.persist(), a(ne, N), Xe.has(w) ? ne && ne._reactName && vr(ne._targetInst, null, ne) : ne && ne._reactName && Vt(ne._targetInst, _t, ne), t.unstable_batchedUpdates(function() {
        if (S(B), ne) {
          var me = ne._dispatchListeners, Me = ne._dispatchInstances;
          if (ue(me)) for (var ke = 0; ke < me.length && !ne.isPropagationStopped(); ke++) zt(ne, me[ke], Me[ke]);
          else me && zt(ne, me, Me);
          ne._dispatchListeners = null, ne._dispatchInstances = null, ne.isPersistent() || ne.constructor.release(ne);
        }
        if (W) throw me = re, W = !1, re = null, me;
      }), U();
    };
  }
  return "blur cancel click close contextMenu copy cut auxClick doubleClick dragEnd dragStart drop focus input invalid keyDown keyPress keyUp mouseDown mouseUp paste pause play pointerCancel pointerDown pointerUp rateChange reset resize seeked submit touchCancel touchEnd touchStart volumeChange drag dragEnter dragExit dragLeave dragOver mouseMove mouseOut mouseOver pointerMove pointerOut pointerOver scroll toggle touchMove wheel abort animationEnd animationIteration animationStart canPlay canPlayThrough durationChange emptied encrypted ended error gotPointerCapture load loadedData loadedMetadata loadStart lostPointerCapture playing progress seeking stalled suspend timeUpdate transitionEnd waiting mouseEnter mouseLeave pointerEnter pointerLeave change select beforeInput compositionEnd compositionStart compositionUpdate".split(" ").forEach(function(w) {
    Kt[w] = br(w);
  }), Ce.Simulate = Kt, Ce.act = F, Ce.findAllInRenderedTree = Te, Ce.findRenderedComponentWithType = function(w, B) {
    if (J(w, "findRenderedComponentWithType"), w = Ht(w, B), w.length !== 1) throw Error("Did not find exactly one match (found: " + w.length + ") for componentType:" + B);
    return w[0];
  }, Ce.findRenderedDOMComponentWithClass = function(w, B) {
    if (J(w, "findRenderedDOMComponentWithClass"), w = ze(w, B), w.length !== 1) throw Error("Did not find exactly one match (found: " + w.length + ") for class:" + B);
    return w[0];
  }, Ce.findRenderedDOMComponentWithTag = function(w, B) {
    if (J(w, "findRenderedDOMComponentWithTag"), w = ht(w, B), w.length !== 1) throw Error("Did not find exactly one match (found: " + w.length + ") for tag:" + B);
    return w[0];
  }, Ce.isCompositeComponent = oe, Ce.isCompositeComponentWithType = he, Ce.isDOMComponent = ce, Ce.isDOMComponentElement = function(w) {
    return !!(w && e.isValidElement(w) && w.tagName);
  }, Ce.isElement = function(w) {
    return e.isValidElement(w);
  }, Ce.isElementOfType = function(w, B) {
    return e.isValidElement(w) && w.type === B;
  }, Ce.mockComponent = function(w, B) {
    return B = B || w.mockTagName || "div", w.prototype.render.mockImplementation(function() {
      return e.createElement(B, null, this.props.children);
    }), this;
  }, Ce.nativeTouchData = function(w, B) {
    return { touches: [{ pageX: w, pageY: B }] };
  }, Ce.renderIntoDocument = function(w) {
    var B = document.createElement("div");
    return t.render(w, B);
  }, Ce.scryRenderedComponentsWithType = Ht, Ce.scryRenderedDOMComponentsWithClass = ze, Ce.scryRenderedDOMComponentsWithTag = ht, Ce.traverseTwoPhase = Vt, Ce;
}
var _e = {};
/**
 * @license React
 * react-dom-test-utils.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ef;
function sE() {
  return ef || (ef = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = kf, t = At, r = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function n(C) {
      {
        for (var k = arguments.length, D = new Array(k > 1 ? k - 1 : 0), j = 1; j < k; j++)
          D[j - 1] = arguments[j];
        a("warn", C, D);
      }
    }
    function o(C) {
      {
        for (var k = arguments.length, D = new Array(k > 1 ? k - 1 : 0), j = 1; j < k; j++)
          D[j - 1] = arguments[j];
        a("error", C, D);
      }
    }
    function a(C, k, D) {
      {
        var j = r.ReactDebugCurrentFrame, Y = j.getStackAddendum();
        Y !== "" && (k += "%s", D = D.concat([Y]));
        var ie = D.map(function(Ee) {
          return String(Ee);
        });
        ie.unshift("Warning: " + k), Function.prototype.apply.call(console[C], console, ie);
      }
    }
    function i(C) {
      return C._reactInternals;
    }
    var l = 0, c = 1, u = 3, p = 5, f = 6, s = (
      /*                      */
      0
    ), m = (
      /*                    */
      2
    ), h = (
      /*                    */
      4096
    );
    r.ReactCurrentOwner;
    function y(C) {
      var k = C, D = C;
      if (C.alternate)
        for (; k.return; )
          k = k.return;
      else {
        var j = k;
        do
          k = j, (k.flags & (m | h)) !== s && (D = k.return), j = k.return;
        while (j);
      }
      return k.tag === u ? D : null;
    }
    function P(C) {
      if (y(C) !== C)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function d(C) {
      var k = C.alternate;
      if (!k) {
        var D = y(C);
        if (D === null)
          throw new Error("Unable to find node on an unmounted component.");
        return D !== C ? null : C;
      }
      for (var j = C, Y = k; ; ) {
        var ie = j.return;
        if (ie === null)
          break;
        var Ee = ie.alternate;
        if (Ee === null) {
          var Be = ie.return;
          if (Be !== null) {
            j = Y = Be;
            continue;
          }
          break;
        }
        if (ie.child === Ee.child) {
          for (var je = ie.child; je; ) {
            if (je === j)
              return P(ie), C;
            if (je === Y)
              return P(ie), k;
            je = je.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (j.return !== Y.return)
          j = ie, Y = Ee;
        else {
          for (var De = !1, Se = ie.child; Se; ) {
            if (Se === j) {
              De = !0, j = ie, Y = Ee;
              break;
            }
            if (Se === Y) {
              De = !0, Y = ie, j = Ee;
              break;
            }
            Se = Se.sibling;
          }
          if (!De) {
            for (Se = Ee.child; Se; ) {
              if (Se === j) {
                De = !0, j = Ee, Y = ie;
                break;
              }
              if (Se === Y) {
                De = !0, Y = Ee, j = ie;
                break;
              }
              Se = Se.sibling;
            }
            if (!De)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (j.alternate !== Y)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (j.tag !== u)
        throw new Error("Unable to find node on an unmounted component.");
      return j.stateNode.current === j ? C : k;
    }
    var E = Object.assign;
    function g(C) {
      var k, D = C.keyCode;
      return "charCode" in C ? (k = C.charCode, k === 0 && D === 13 && (k = 13)) : k = D, k === 10 && (k = 13), k >= 32 || k === 13 ? k : 0;
    }
    function R() {
      return !0;
    }
    function q() {
      return !1;
    }
    function v(C) {
      function k(D, j, Y, ie, Ee) {
        this._reactName = D, this._targetInst = Y, this.type = j, this.nativeEvent = ie, this.target = Ee, this.currentTarget = null;
        for (var Be in C)
          if (C.hasOwnProperty(Be)) {
            var je = C[Be];
            je ? this[Be] = je(ie) : this[Be] = ie[Be];
          }
        var De = ie.defaultPrevented != null ? ie.defaultPrevented : ie.returnValue === !1;
        return De ? this.isDefaultPrevented = R : this.isDefaultPrevented = q, this.isPropagationStopped = q, this;
      }
      return E(k.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var D = this.nativeEvent;
          D && (D.preventDefault ? D.preventDefault() : typeof D.returnValue != "unknown" && (D.returnValue = !1), this.isDefaultPrevented = R);
        },
        stopPropagation: function() {
          var D = this.nativeEvent;
          D && (D.stopPropagation ? D.stopPropagation() : typeof D.cancelBubble != "unknown" && (D.cancelBubble = !0), this.isPropagationStopped = R);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: R
      }), k;
    }
    var b = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(C) {
        return C.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, _ = v(b), M = E({}, b, {
      view: 0,
      detail: 0
    });
    v(M);
    var O, x, A;
    function T(C) {
      C !== A && (A && C.type === "mousemove" ? (O = C.screenX - A.screenX, x = C.screenY - A.screenY) : (O = 0, x = 0), A = C);
    }
    var I = E({}, M, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Q,
      button: 0,
      buttons: 0,
      relatedTarget: function(C) {
        return C.relatedTarget === void 0 ? C.fromElement === C.srcElement ? C.toElement : C.fromElement : C.relatedTarget;
      },
      movementX: function(C) {
        return "movementX" in C ? C.movementX : (T(C), O);
      },
      movementY: function(C) {
        return "movementY" in C ? C.movementY : x;
      }
    });
    v(I);
    var L = E({}, I, {
      dataTransfer: 0
    });
    v(L);
    var V = E({}, M, {
      relatedTarget: 0
    });
    v(V);
    var z = E({}, b, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    });
    v(z);
    var K = E({}, b, {
      clipboardData: function(C) {
        return "clipboardData" in C ? C.clipboardData : window.clipboardData;
      }
    });
    v(K);
    var W = E({}, b, {
      data: 0
    });
    v(W);
    var re = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, le = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function Re(C) {
      if (C.key) {
        var k = re[C.key] || C.key;
        if (k !== "Unidentified")
          return k;
      }
      if (C.type === "keypress") {
        var D = g(C);
        return D === 13 ? "Enter" : String.fromCharCode(D);
      }
      return C.type === "keydown" || C.type === "keyup" ? le[C.keyCode] || "Unidentified" : "";
    }
    var H = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function ue(C) {
      var k = this, D = k.nativeEvent;
      if (D.getModifierState)
        return D.getModifierState(C);
      var j = H[C];
      return j ? !!D[j] : !1;
    }
    function Q(C) {
      return ue;
    }
    var ae = E({}, M, {
      key: Re,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Q,
      // Legacy Interface
      charCode: function(C) {
        return C.type === "keypress" ? g(C) : 0;
      },
      keyCode: function(C) {
        return C.type === "keydown" || C.type === "keyup" ? C.keyCode : 0;
      },
      which: function(C) {
        return C.type === "keypress" ? g(C) : C.type === "keydown" || C.type === "keyup" ? C.keyCode : 0;
      }
    });
    v(ae);
    var pe = E({}, I, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    });
    v(pe);
    var ee = E({}, M, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Q
    });
    v(ee);
    var S = E({}, b, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    });
    v(S);
    var U = E({}, I, {
      deltaX: function(C) {
        return "deltaX" in C ? C.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in C ? -C.wheelDeltaX : 0
        );
      },
      deltaY: function(C) {
        return "deltaY" in C ? C.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in C ? -C.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in C ? -C.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    });
    v(U);
    var F = 1;
    function X(C, k, D, j, Y, ie, Ee, Be, je) {
      var De = Array.prototype.slice.call(arguments, 3);
      try {
        k.apply(D, De);
      } catch (Se) {
        this.onError(Se);
      }
    }
    var Z = X;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var J = document.createElement("react");
      Z = function(k, D, j, Y, ie, Ee, Be, je, De) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var Se = document.createEvent("Event"), Di = !1, ll = !0, jm = window.event, ul = Object.getOwnPropertyDescriptor(window, "event");
        function cl() {
          J.removeEventListener(Ni, dl, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = jm);
        }
        var $m = Array.prototype.slice.call(arguments, 3);
        function dl() {
          Di = !0, cl(), D.apply(j, $m), ll = !1;
        }
        var vt, fl = !1, pl = !1;
        function ml($a) {
          if (vt = $a.error, fl = !0, vt === null && $a.colno === 0 && $a.lineno === 0 && (pl = !0), $a.defaultPrevented && vt != null && typeof vt == "object")
            try {
              vt._suppressLogging = !0;
            } catch {
            }
        }
        var Ni = "react-" + (k || "invokeguardedcallback");
        if (window.addEventListener("error", ml), J.addEventListener(Ni, dl, !1), Se.initEvent(Ni, !1, !1), J.dispatchEvent(Se), ul && Object.defineProperty(window, "event", ul), Di && ll && (fl ? pl && (vt = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : vt = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(vt)), window.removeEventListener("error", ml), !Di)
          return cl(), X.apply(this, arguments);
      };
    }
    var ce = Z, oe = !1, he = null, Te = !1, ze = null, ht = {
      onError: function(C) {
        oe = !0, he = C;
      }
    };
    function Ht(C, k, D, j, Y, ie, Ee, Be, je) {
      oe = !1, he = null, ce.apply(ht, arguments);
    }
    function zt(C, k, D, j, Y, ie, Ee, Be, je) {
      if (Ht.apply(this, arguments), oe) {
        var De = Wt();
        Te || (Te = !0, ze = De);
      }
    }
    function Vt() {
      if (Te) {
        var C = ze;
        throw Te = !1, ze = null, C;
      }
    }
    function Wt() {
      if (oe) {
        var C = he;
        return oe = !1, he = null, C;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    var vr = Array.isArray;
    function _t(C) {
      return vr(C);
    }
    var Kt = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Xe = Kt.Events, br = Xe[0], w = Xe[1], B = Xe[2], N = Xe[3], G = Xe[4], de = e.unstable_act;
    function fe(C) {
    }
    var ne = !1;
    function me(C, k) {
      if (!C)
        return [];
      var D = d(C);
      if (!D)
        return [];
      for (var j = D, Y = []; ; ) {
        if (j.tag === p || j.tag === f || j.tag === c || j.tag === l) {
          var ie = j.stateNode;
          k(ie) && Y.push(ie);
        }
        if (j.child) {
          j.child.return = j, j = j.child;
          continue;
        }
        if (j === D)
          return Y;
        for (; !j.sibling; ) {
          if (!j.return || j.return === D)
            return Y;
          j = j.return;
        }
        j.sibling.return = j.return, j = j.sibling;
      }
    }
    function Me(C, k) {
      if (C && !i(C)) {
        var D, j = String(C);
        throw _t(C) ? D = "an array" : C && C.nodeType === F && C.tagName ? D = "a DOM node" : j === "[object Object]" ? D = "object with keys {" + Object.keys(C).join(", ") + "}" : D = j, new Error(k + "(...): the first argument must be a React class instance. " + ("Instead received: " + D + "."));
      }
    }
    var ke = !1;
    function yr(C) {
      ke || (ke = !0, o("ReactDOMTestUtils is deprecated and will be removed in a future major release, because it exposes internal implementation details that are highly likely to change between releases. Upgrade to a modern testing library, such as @testing-library/react. See https://react.dev/warnings/react-dom-test-utils for more info."));
      var k = document.createElement("div");
      return t.render(C, k);
    }
    function Mi(C) {
      return e.isValidElement(C);
    }
    function Ai(C, k) {
      return e.isValidElement(C) && C.type === k;
    }
    function Qt(C) {
      return !!(C && C.nodeType === F && C.tagName);
    }
    function Ii(C) {
      return !!(C && e.isValidElement(C) && C.tagName);
    }
    function gr(C) {
      return Qt(C) ? !1 : C != null && typeof C.render == "function" && typeof C.setState == "function";
    }
    function Ba(C, k) {
      if (!gr(C))
        return !1;
      var D = i(C), j = D.type;
      return j === k;
    }
    function $(C, k) {
      if (Me(C, "findAllInRenderedTree"), !C)
        return [];
      var D = i(C);
      return me(D, k);
    }
    function ja(C, k) {
      return Me(C, "scryRenderedDOMComponentsWithClass"), $(C, function(D) {
        if (Qt(D)) {
          var j = D.className;
          typeof j != "string" && (j = D.getAttribute("class") || "");
          var Y = j.split(/\s+/);
          if (!_t(k)) {
            if (k === void 0)
              throw new Error("TestUtils.scryRenderedDOMComponentsWithClass expects a className as a second argument.");
            k = k.split(/\s+/);
          }
          return k.every(function(ie) {
            return Y.indexOf(ie) !== -1;
          });
        }
        return !1;
      });
    }
    function ki(C, k) {
      Me(C, "findRenderedDOMComponentWithClass");
      var D = ja(C, k);
      if (D.length !== 1)
        throw new Error("Did not find exactly one match (found: " + D.length + ") for class:" + k);
      return D[0];
    }
    function Pt(C, k) {
      return Me(C, "scryRenderedDOMComponentsWithTag"), $(C, function(D) {
        return Qt(D) && D.tagName.toUpperCase() === k.toUpperCase();
      });
    }
    function Em(C, k) {
      Me(C, "findRenderedDOMComponentWithTag");
      var D = Pt(C, k);
      if (D.length !== 1)
        throw new Error("Did not find exactly one match (found: " + D.length + ") for tag:" + k);
      return D[0];
    }
    function rl(C, k) {
      return Me(C, "scryRenderedComponentsWithType"), $(C, function(D) {
        return Ba(D, k);
      });
    }
    function wm(C, k) {
      Me(C, "findRenderedComponentWithType");
      var D = rl(C, k);
      if (D.length !== 1)
        throw new Error("Did not find exactly one match (found: " + D.length + ") for componentType:" + k);
      return D[0];
    }
    function Cm(C, k) {
      return ne || (ne = !0, n(`ReactTestUtils.mockComponent() is deprecated. Use shallow rendering or jest.mock() instead.

See https://reactjs.org/link/test-utils-mock-component for more information.`)), k = k || C.mockTagName || "div", C.prototype.render.mockImplementation(function() {
        return e.createElement(k, null, this.props.children);
      }), this;
    }
    function _m(C, k) {
      return {
        touches: [{
          pageX: C,
          pageY: k
        }]
      };
    }
    function nl(C, k, D) {
      var j = C.type || "unknown-event";
      C.currentTarget = w(D), zt(j, k, void 0, C), C.currentTarget = null;
    }
    function Pm(C) {
      var k = C._dispatchListeners, D = C._dispatchInstances;
      if (_t(k))
        for (var j = 0; j < k.length && !C.isPropagationStopped(); j++)
          nl(C, k[j], D[j]);
      else k && nl(C, k, D);
      C._dispatchListeners = null, C._dispatchInstances = null;
    }
    var qm = function(C) {
      C && (Pm(C), C.isPersistent() || C.constructor.release(C));
    };
    function Tm(C) {
      return C === "button" || C === "input" || C === "select" || C === "textarea";
    }
    function Sm(C) {
      do
        C = C.return;
      while (C && C.tag !== p);
      return C || null;
    }
    function ol(C, k, D) {
      for (var j = []; C; )
        j.push(C), C = Sm(C);
      var Y;
      for (Y = j.length; Y-- > 0; )
        k(j[Y], "captured", D);
      for (Y = 0; Y < j.length; Y++)
        k(j[Y], "bubbled", D);
    }
    function xm(C, k, D) {
      switch (C) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(D.disabled && Tm(k));
        default:
          return !1;
      }
    }
    function al(C, k) {
      var D = C.stateNode;
      if (!D)
        return null;
      var j = B(D);
      if (!j)
        return null;
      var Y = j[k];
      if (xm(k, C.type, j))
        return null;
      if (Y && typeof Y != "function")
        throw new Error("Expected `" + k + "` listener to be a function, instead got a value of `" + typeof Y + "` type.");
      return Y;
    }
    function Om(C, k, D) {
      var j = k._reactName;
      return D === "captured" && (j += "Capture"), al(C, j);
    }
    function Mm(C, k, D) {
      if (C && D && D._reactName) {
        var j = D._reactName, Y = al(C, j);
        Y && (D._dispatchListeners == null && (D._dispatchListeners = []), D._dispatchInstances == null && (D._dispatchInstances = []), D._dispatchListeners.push(Y), D._dispatchInstances.push(C));
      }
    }
    function Am(C, k, D) {
      C || o("Dispatching inst must not be null");
      var j = Om(C, D, k);
      j && (D._dispatchListeners == null && (D._dispatchListeners = []), D._dispatchInstances == null && (D._dispatchInstances = []), D._dispatchListeners.push(j), D._dispatchInstances.push(C));
    }
    function Im(C) {
      C && C._reactName && Mm(C._targetInst, null, C);
    }
    function km(C) {
      C && C._reactName && ol(C._targetInst, Am, C);
    }
    var il = {}, Dm = /* @__PURE__ */ new Set(["mouseEnter", "mouseLeave", "pointerEnter", "pointerLeave"]);
    function Nm(C) {
      return function(k, D) {
        if (e.isValidElement(k))
          throw new Error("TestUtils.Simulate expected a DOM node as the first argument but received a React element. Pass the DOM node you wish to simulate the event on instead. Note that TestUtils.Simulate will not work if you are using shallow rendering.");
        if (gr(k))
          throw new Error("TestUtils.Simulate expected a DOM node as the first argument but received a component instance. Pass the DOM node you wish to simulate the event on instead.");
        var j = "on" + C[0].toUpperCase() + C.slice(1), Y = new fe();
        Y.target = k, Y.type = C.toLowerCase();
        var ie = br(k), Ee = new _(j, Y.type, ie, Y, k);
        Ee.persist(), E(Ee, D), Dm.has(C) ? Im(Ee) : km(Ee), t.unstable_batchedUpdates(function() {
          N(k), qm(Ee), Vt();
        }), G();
      };
    }
    var Lm = ["blur", "cancel", "click", "close", "contextMenu", "copy", "cut", "auxClick", "doubleClick", "dragEnd", "dragStart", "drop", "focus", "input", "invalid", "keyDown", "keyPress", "keyUp", "mouseDown", "mouseUp", "paste", "pause", "play", "pointerCancel", "pointerDown", "pointerUp", "rateChange", "reset", "resize", "seeked", "submit", "touchCancel", "touchEnd", "touchStart", "volumeChange", "drag", "dragEnter", "dragExit", "dragLeave", "dragOver", "mouseMove", "mouseOut", "mouseOver", "pointerMove", "pointerOut", "pointerOver", "scroll", "toggle", "touchMove", "wheel", "abort", "animationEnd", "animationIteration", "animationStart", "canPlay", "canPlayThrough", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "playing", "progress", "seeking", "stalled", "suspend", "timeUpdate", "transitionEnd", "waiting", "mouseEnter", "mouseLeave", "pointerEnter", "pointerLeave", "change", "select", "beforeInput", "compositionEnd", "compositionStart", "compositionUpdate"];
    function Fm() {
      Lm.forEach(function(C) {
        il[C] = Nm(C);
      });
    }
    Fm();
    var sl = !1, Bm = function(k) {
      return sl || (sl = !0, o("`ReactDOMTestUtils.act` is deprecated in favor of `React.act`. Import `act` from `react` instead of `react-dom/test-utils`. See https://react.dev/warnings/react-dom-test-utils for more info.")), de(k);
    };
    _e.Simulate = il, _e.act = Bm, _e.findAllInRenderedTree = $, _e.findRenderedComponentWithType = wm, _e.findRenderedDOMComponentWithClass = ki, _e.findRenderedDOMComponentWithTag = Em, _e.isCompositeComponent = gr, _e.isCompositeComponentWithType = Ba, _e.isDOMComponent = Qt, _e.isDOMComponentElement = Ii, _e.isElement = Mi, _e.isElementOfType = Ai, _e.mockComponent = Cm, _e.nativeTouchData = _m, _e.renderIntoDocument = yr, _e.scryRenderedComponentsWithType = rl, _e.scryRenderedDOMComponentsWithClass = ja, _e.scryRenderedDOMComponentsWithTag = Pt, _e.traverseTwoPhase = ol;
  })()), _e;
}
var tf;
function lE() {
  return tf || (tf = 1, process.env.NODE_ENV === "production" ? Xa.exports = iE() : Xa.exports = sE()), Xa.exports;
}
var uE = lE(), Yt = {}, rf;
function cE() {
  if (rf) return Yt;
  rf = 1;
  var e = At;
  if (process.env.NODE_ENV === "production")
    Yt.createRoot = e.createRoot, Yt.hydrateRoot = e.hydrateRoot;
  else {
    var t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    Yt.createRoot = function(r, n) {
      t.usingClientEntryPoint = !0;
      try {
        return e.createRoot(r, n);
      } finally {
        t.usingClientEntryPoint = !1;
      }
    }, Yt.hydrateRoot = function(r, n, o) {
      t.usingClientEntryPoint = !0;
      try {
        return e.hydrateRoot(r, n, o);
      } finally {
        t.usingClientEntryPoint = !1;
      }
    };
  }
  return Yt;
}
var nf = cE();
const dE = typeof ba.act == "function" ? ba.act : uE.act;
function Np() {
  if (typeof globalThis < "u")
    return globalThis;
  if (typeof self < "u")
    return self;
  if (typeof window < "u")
    return window;
  if (typeof global < "u")
    return global;
  throw new Error("unable to locate global object");
}
function st(e) {
  Np().IS_REACT_ACT_ENVIRONMENT = e;
}
function yi() {
  return Np().IS_REACT_ACT_ENVIRONMENT;
}
function fE(e) {
  return (t) => {
    const r = yi();
    st(!0);
    try {
      let n = !1;
      const o = e(() => {
        const a = t();
        return a !== null && typeof a == "object" && typeof a.then == "function" && (n = !0), a;
      });
      if (n) {
        const a = o;
        return {
          then: (i, l) => {
            a.then((c) => {
              st(r), i(c);
            }, (c) => {
              st(r), l(c);
            });
          }
        };
      } else
        return st(r), o;
    } catch (n) {
      throw st(r), n;
    }
  };
}
const ir = fE(dE);
Object.keys(Ta).forEach((e) => {
});
let pE = {
  reactStrictMode: !1
};
function mE() {
  return {
    ...se(),
    ...pE
  };
}
function hE() {
  return typeof jest < "u" && jest !== null ? (
    // legacy timers
    setTimeout._isMockFunction === !0 || // modern timers
    // eslint-disable-next-line prefer-object-has-own -- No Object.hasOwn in all target environments we support.
    Object.prototype.hasOwnProperty.call(setTimeout, "clock")
  ) : !1;
}
bR({
  unstable_advanceTimersWrapper: (e) => ir(e),
  // We just want to run `waitFor` without IS_REACT_ACT_ENVIRONMENT
  // But that's not necessarily how `asyncWrapper` is used since it's a public method.
  // Let's just hope nobody else is using it.
  asyncWrapper: async (e) => {
    const t = yi();
    st(!1);
    try {
      const r = await e();
      return await new Promise((n) => {
        setTimeout(() => {
          n();
        }, 0), hE() && jest.advanceTimersByTime(0);
      }), r;
    } finally {
      st(t);
    }
  },
  eventWrapper: (e) => {
    let t;
    return ir(() => {
      t = e();
    }), t;
  }
});
const Cs = /* @__PURE__ */ new Set(), gi = [];
function _s(e, t) {
  return t ?? mE().reactStrictMode ? /* @__PURE__ */ ba.createElement(ba.StrictMode, null, e) : e;
}
function Ps(e, t) {
  return t ? /* @__PURE__ */ ba.createElement(t, null, e) : e;
}
function vE(e, t) {
  let {
    hydrate: r,
    onCaughtError: n,
    onRecoverableError: o,
    ui: a,
    wrapper: i,
    reactStrictMode: l
  } = t, c;
  return r ? ir(() => {
    c = nf.hydrateRoot(e, _s(Ps(a, i), l), {
      onCaughtError: n,
      onRecoverableError: o
    });
  }) : c = nf.createRoot(e, {
    onCaughtError: n,
    onRecoverableError: o
  }), {
    hydrate() {
      if (!r)
        throw new Error("Attempted to hydrate a non-hydrateable root. This is a bug in `@testing-library/react`.");
    },
    render(u) {
      c.render(u);
    },
    unmount() {
      c.unmount();
    }
  };
}
function bE(e) {
  return {
    hydrate(t) {
      At.hydrate(t, e);
    },
    render(t) {
      At.render(t, e);
    },
    unmount() {
      At.unmountComponentAtNode(e);
    }
  };
}
function Lp(e, t) {
  let {
    baseElement: r,
    container: n,
    hydrate: o,
    queries: a,
    root: i,
    wrapper: l,
    reactStrictMode: c
  } = t;
  return ir(() => {
    o ? i.hydrate(_s(Ps(e, l), c), n) : i.render(_s(Ps(e, l), c), n);
  }), {
    container: n,
    baseElement: r,
    debug: function(u, p, f) {
      return u === void 0 && (u = r), Array.isArray(u) ? (
        // eslint-disable-next-line no-console
        u.forEach((s) => console.log(ar(s, p, f)))
      ) : (
        // eslint-disable-next-line no-console,
        console.log(ar(u, p, f))
      );
    },
    unmount: () => {
      ir(() => {
        i.unmount();
      });
    },
    rerender: (u) => {
      Lp(u, {
        container: n,
        baseElement: r,
        root: i,
        wrapper: l,
        reactStrictMode: c
      });
    },
    asFragment: () => {
      if (typeof document.createRange == "function")
        return document.createRange().createContextualFragment(n.innerHTML);
      {
        const u = document.createElement("template");
        return u.innerHTML = n.innerHTML, u.content;
      }
    },
    ...Dp(r, a)
  };
}
function Ks(e, t) {
  let {
    container: r,
    baseElement: n = r,
    legacyRoot: o = !1,
    onCaughtError: a,
    onUncaughtError: i,
    onRecoverableError: l,
    queries: c,
    hydrate: u = !1,
    wrapper: p,
    reactStrictMode: f
  } = t === void 0 ? {} : t;
  if (i !== void 0)
    throw new Error("onUncaughtError is not supported. The `render` call will already throw on uncaught errors.");
  if (o && typeof At.render != "function") {
    const m = new Error("`legacyRoot: true` is not supported in this version of React. If your app runs React 19 or later, you should remove this flag. If your app runs React 18 or earlier, visit https://react.dev/blog/2022/03/08/react-18-upgrade-guide for upgrade instructions.");
    throw Error.captureStackTrace(m, Ks), m;
  }
  n || (n = document.body), r || (r = n.appendChild(document.createElement("div")));
  let s;
  return Cs.has(r) ? gi.forEach((m) => {
    m.container === r && (s = m.root);
  }) : (s = (o ? bE : vE)(r, {
    hydrate: u,
    onCaughtError: a,
    onRecoverableError: l,
    ui: e,
    wrapper: p,
    reactStrictMode: f
  }), gi.push({
    container: r,
    root: s
  }), Cs.add(r)), Lp(e, {
    container: r,
    baseElement: n,
    queries: c,
    hydrate: u,
    wrapper: p,
    root: s,
    reactStrictMode: f
  });
}
function of() {
  gi.forEach((e) => {
    let {
      root: t,
      container: r
    } = e;
    ir(() => {
      t.unmount();
    }), r.parentNode === document.body && document.body.removeChild(r);
  }), gi.length = 0, Cs.clear();
}
if ((typeof process > "u" || !process.env?.RTL_SKIP_AUTO_CLEANUP) && (typeof afterEach == "function" ? afterEach(() => {
  of();
}) : typeof teardown == "function" && teardown(() => {
  of();
}), typeof beforeAll == "function" && typeof afterAll == "function")) {
  let e = yi();
  beforeAll(() => {
    e = yi(), st(!0);
  }), afterAll(() => {
    st(e);
  });
}
function te(e, t, r) {
  return e.namespaceURI && e.namespaceURI !== "http://www.w3.org/1999/xhtml" || (t = Array.isArray(t) ? t : [
    t
  ], !t.includes(e.tagName.toLowerCase())) ? !1 : r ? Object.entries(r).every(([n, o]) => e[n] === o) : !0;
}
function He(e) {
  var t;
  if (yE(e) && e.defaultView)
    return e.defaultView;
  if (!((t = e.ownerDocument) === null || t === void 0) && t.defaultView)
    return e.ownerDocument.defaultView;
  throw new Error(`Could not determine window of node. Node was ${gE(e)}`);
}
function yE(e) {
  return e.nodeType === 9;
}
function gE(e) {
  return typeof e == "function" ? `function ${e.name}` : e === null ? "null" : String(e);
}
function Fp(e, t) {
  return new Promise((r, n) => {
    const o = new t();
    o.onerror = n, o.onabort = n, o.onload = () => {
      r(String(o.result));
    }, o.readAsText(e);
  });
}
function Qs(e, t) {
  const r = {
    ...t,
    length: t.length,
    item: (n) => r[n],
    [Symbol.iterator]: function* () {
      for (let o = 0; o < r.length; o++)
        yield r[o];
    }
  };
  return r.constructor = e.FileList, e.FileList && Object.setPrototypeOf(r, e.FileList.prototype), Object.freeze(r), r;
}
function Rt(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
class Bp {
  getAsFile() {
    return this.file;
  }
  getAsString(t) {
    typeof this.data == "string" && t(this.data);
  }
  /* istanbul ignore next */
  webkitGetAsEntry() {
    throw new Error("not implemented");
  }
  constructor(t, r) {
    Rt(this, "kind", void 0), Rt(this, "type", void 0), Rt(this, "file", null), Rt(this, "data", void 0), typeof t == "string" ? (this.kind = "string", this.type = String(r), this.data = t) : (this.kind = "file", this.type = t.type, this.file = t);
  }
}
class RE extends Array {
  add(...t) {
    const r = new Bp(t[0], t[1]);
    return this.push(r), r;
  }
  clear() {
    this.splice(0, this.length);
  }
  remove(t) {
    this.splice(t, 1);
  }
}
function Za(e, t) {
  const [r, n] = e.split("/"), o = !n || n === "*";
  return (a) => t ? a.type === (o ? r : e) : o ? a.type.startsWith(`${r}/`) : a.type === r;
}
function EE(e) {
  return new class {
    getData(r) {
      var n;
      const o = (n = this.items.find(Za(r, !0))) !== null && n !== void 0 ? n : this.items.find(Za(r, !1));
      let a = "";
      return o?.getAsString((i) => {
        a = i;
      }), a;
    }
    setData(r, n) {
      const o = this.items.findIndex(Za(r, !0)), a = new Bp(n, r);
      o >= 0 ? this.items.splice(o, 1, a) : this.items.push(a);
    }
    clearData(r) {
      if (r) {
        const n = this.items.findIndex(Za(r, !0));
        n >= 0 && this.items.remove(n);
      } else
        this.items.clear();
    }
    get types() {
      const r = [];
      return this.files.length && r.push("Files"), this.items.forEach((n) => r.push(n.type)), Object.freeze(r), r;
    }
    /* istanbul ignore next */
    setDragImage() {
    }
    constructor() {
      Rt(this, "dropEffect", "none"), Rt(this, "effectAllowed", "uninitialized"), Rt(this, "items", new RE()), Rt(this, "files", Qs(e, []));
    }
  }();
}
function Gs(e, t = []) {
  const r = typeof e.DataTransfer > "u" ? EE(e) : (
    /* istanbul ignore next */
    new e.DataTransfer()
  );
  return Object.defineProperty(r, "files", {
    get: () => Qs(e, t)
  }), r;
}
async function wE(e, t) {
  return t.kind === "file" ? t.getAsFile() : new e.Blob([
    await new Promise((r) => t.getAsString(r))
  ], {
    type: t.type
  });
}
function jp(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function $p(e, ...t) {
  const r = Object.fromEntries(t.map((n) => [
    typeof n == "string" ? "text/plain" : n.type,
    Promise.resolve(n)
  ]));
  return typeof e.ClipboardItem < "u" ? new e.ClipboardItem(r) : new class {
    get types() {
      return Array.from(Object.keys(this.data));
    }
    async getType(o) {
      const a = await this.data[o];
      if (!a)
        throw new Error(`${o} is not one of the available MIME types on this item.`);
      return a instanceof e.Blob ? a : new e.Blob([
        a
      ], {
        type: o
      });
    }
    constructor(o) {
      jp(this, "data", void 0), this.data = o;
    }
  }(r);
}
const sr = Symbol("Manage ClipboardSub");
function af(e, t) {
  return Object.assign(new class extends e.EventTarget {
    async read() {
      return Array.from(this.items);
    }
    async readText() {
      let n = "";
      for (const o of this.items) {
        const a = o.types.includes("text/plain") ? "text/plain" : o.types.find((i) => i.startsWith("text/"));
        a && (n += await o.getType(a).then((i) => Fp(i, e.FileReader)));
      }
      return n;
    }
    async write(n) {
      this.items = n;
    }
    async writeText(n) {
      this.items = [
        $p(e, n)
      ];
    }
    constructor(...n) {
      super(...n), jp(this, "items", []);
    }
  }(), {
    [sr]: t
  });
}
function Ys(e) {
  return !!e?.[sr];
}
function CE(e) {
  if (Ys(e.navigator.clipboard))
    return e.navigator.clipboard[sr];
  const t = Object.getOwnPropertyDescriptor(e.navigator, "clipboard");
  let r;
  const n = {
    resetClipboardStub: () => {
      r = af(e, n);
    },
    detachClipboardStub: () => {
      t ? Object.defineProperty(e.navigator, "clipboard", t) : Object.defineProperty(e.navigator, "clipboard", {
        value: void 0,
        configurable: !0
      });
    }
  };
  return r = af(e, n), Object.defineProperty(e.navigator, "clipboard", {
    get: () => r,
    configurable: !0
  }), r[sr];
}
function _E(e) {
  Ys(e.navigator.clipboard) && e.navigator.clipboard[sr].resetClipboardStub();
}
function PE(e) {
  Ys(e.navigator.clipboard) && e.navigator.clipboard[sr].detachClipboardStub();
}
async function qE(e) {
  const t = e.defaultView, r = t?.navigator.clipboard, n = r && await r.read();
  if (!n)
    throw new Error("The Clipboard API is unavailable.");
  const o = Gs(t);
  for (const a of n)
    for (const i of a.types)
      o.setData(i, await a.getType(i).then((l) => Fp(l, t.FileReader)));
  return o;
}
async function Up(e, t) {
  const r = He(e), n = r.navigator.clipboard, o = [];
  for (let i = 0; i < t.items.length; i++) {
    const l = t.items[i], c = await wE(r, l);
    o.push($p(r, c));
  }
  if (!(n && await n.write(o).then(
    () => !0,
    // Can happen with other implementations that e.g. require permissions
    /* istanbul ignore next */
    () => !1
  )))
    throw new Error("The Clipboard API is unavailable.");
}
const Ri = globalThis;
typeof Ri.afterEach == "function" && Ri.afterEach(() => _E(globalThis.window));
typeof Ri.afterAll == "function" && Ri.afterAll(() => PE(globalThis.window));
const Hp = [
  "input:not([type=hidden]):not([disabled])",
  "button:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[contenteditable=""]',
  '[contenteditable="true"]',
  "a[href]",
  "[tabindex]:not([disabled])"
].join(", ");
function Xs(e) {
  return e.matches(Hp);
}
function TE(e) {
  return new e.constructor(e.type, e);
}
function pt(e) {
  for (let r = e; r; r = r.parentElement)
    if (te(r, [
      "button",
      "input",
      "select",
      "textarea",
      "optgroup",
      "option"
    ])) {
      if (r.hasAttribute("disabled"))
        return !0;
    } else if (te(r, "fieldset")) {
      var t;
      if (r.hasAttribute("disabled") && !(!((t = r.querySelector(":scope > legend")) === null || t === void 0) && t.contains(e)))
        return !0;
    } else if (r.tagName.includes("-") && r.constructor.formAssociated && r.hasAttribute("disabled"))
      return !0;
  return !1;
}
function Fa(e) {
  const t = e.activeElement;
  return t?.shadowRoot ? Fa(t.shadowRoot) : pt(t) ? e.ownerDocument ? (
    /* istanbul ignore next */
    e.ownerDocument.body
  ) : e.body : t;
}
function Yi(e) {
  var t;
  return (t = Fa(e)) !== null && t !== void 0 ? t : (
    /* istanbul ignore next */
    e.body
  );
}
function SE(e, t) {
  let r = e;
  do {
    if (t(r))
      return r;
    r = r.parentElement;
  } while (r && r !== e.ownerDocument.body);
}
function Bt(e) {
  return e.hasAttribute("contenteditable") && (e.getAttribute("contenteditable") == "true" || e.getAttribute("contenteditable") == "");
}
function Sa(e) {
  const t = xE(e);
  return t && (t.closest('[contenteditable=""]') || t.closest('[contenteditable="true"]'));
}
function xE(e) {
  return e.nodeType === 1 ? e : e.parentElement;
}
var zp = /* @__PURE__ */ (function(e) {
  return e.button = "button", e.color = "color", e.file = "file", e.image = "image", e.reset = "reset", e.submit = "submit", e.checkbox = "checkbox", e.radio = "radio", e;
})(zp || {});
function Vp(e) {
  return te(e, "button") || te(e, "input") && e.type in zp;
}
function lr(e) {
  return Kp(e) && !e.readOnly || Bt(e);
}
var Wp = /* @__PURE__ */ (function(e) {
  return e.text = "text", e.date = "date", e["datetime-local"] = "datetime-local", e.email = "email", e.month = "month", e.number = "number", e.password = "password", e.search = "search", e.tel = "tel", e.time = "time", e.url = "url", e.week = "week", e;
})(Wp || {});
function Kp(e) {
  return te(e, "textarea") || te(e, "input") && e.type in Wp;
}
function Ge(e) {
  return Qp(e) && Kp(e);
}
function OE(e) {
  return Qp(e) && Vp(e);
}
function Qp(e) {
  return e.nodeType === 1;
}
function ME(e) {
  const t = e.ownerDocument.getSelection();
  if (t?.focusNode && Ge(e)) {
    const n = Sa(t.focusNode);
    if (n) {
      if (!t.isCollapsed) {
        var r;
        const o = ((r = n.firstChild) === null || r === void 0 ? void 0 : r.nodeType) === 3 ? n.firstChild : n;
        t.setBaseAndExtent(o, 0, o, 0);
      }
    } else
      t.setBaseAndExtent(e, 0, e, 0);
  }
}
function ur(e, t) {
  return se().eventWrapper(e);
}
function Et(e) {
  const t = SE(e, Xs), r = Fa(e.ownerDocument);
  (t ?? e.ownerDocument.body) !== r && (ur(t ? () => t.focus() : () => r?.blur()), ME(t ?? e.ownerDocument.body));
}
function AE(e) {
  !Xs(e) || !(Fa(e.ownerDocument) === e) || ur(() => e.blur());
}
const wt = {};
wt.click = (e, t, r) => {
  const n = t.closest("button,input,label,select,textarea"), o = n && te(n, "label") && n.control;
  if (o && o !== t)
    return () => {
      Xs(o) && (Et(o), r.dispatchEvent(o, TE(e)));
    };
  if (te(t, "input", {
    type: "file"
  }))
    return () => {
      AE(t), t.dispatchEvent(new (He(t)).Event("fileDialog")), Et(t);
    };
};
const cr = Symbol("Displayed value in UI"), ut = Symbol("Displayed selection in UI"), Ei = Symbol("Initial value to compare on blur");
function IE(e) {
  return typeof e == "object" && cr in e;
}
function kE(e) {
  return !!e && typeof e == "object" && ut in e;
}
function DE(e, t) {
  e[Ei] === void 0 && (e[Ei] = e.value), e[cr] = t, e.value = Object.assign(new String(t), {
    [cr]: !0
  });
}
function Ye(e) {
  return e[cr] === void 0 ? e.value : String(e[cr]);
}
function Zs(e) {
  e[cr] = void 0;
}
function Gp(e) {
  e[Ei] = void 0;
}
function NE(e) {
  return e[Ei];
}
function LE(e, t) {
  e[ut] = t;
}
function hr(e, { focusOffset: t, anchorOffset: r = t }, n = "replace") {
  const o = Ye(e).length, a = (f) => Math.max(0, Math.min(o, f)), i = n === "replace" || e[ut] === void 0 ? a(r) : e[ut].anchorOffset, l = a(t), c = Math.min(i, l), u = Math.max(i, l);
  if (e[ut] = {
    anchorOffset: i,
    focusOffset: l
  }, e.selectionStart === c && e.selectionEnd === u)
    return;
  const p = Object.assign(new Number(c), {
    [ut]: !0
  });
  try {
    e.setSelectionRange(p, u);
  } catch {
  }
}
function xa(e) {
  var t, r, n;
  const o = (n = e[ut]) !== null && n !== void 0 ? n : {
    anchorOffset: (t = e.selectionStart) !== null && t !== void 0 ? t : 0,
    focusOffset: (r = e.selectionEnd) !== null && r !== void 0 ? r : 0
  };
  return {
    ...o,
    startOffset: Math.min(o.anchorOffset, o.focusOffset),
    endOffset: Math.max(o.anchorOffset, o.focusOffset)
  };
}
function FE(e) {
  return !!e[ut];
}
function ii(e) {
  e[ut] = void 0;
}
const wi = globalThis.parseInt;
function BE(e) {
  const t = e.replace(/\D/g, "");
  if (t.length < 2)
    return e;
  const r = wi(t[0], 10), n = wi(t[1], 10);
  if (r >= 3 || r === 2 && n >= 4) {
    let o;
    return r >= 3 ? o = 1 : o = 2, sf(t, o);
  }
  return e.length === 2 ? e : sf(t, 2);
}
function sf(e, t) {
  const r = e.slice(0, t), n = Math.min(wi(r, 10), 23), o = e.slice(t), a = wi(o, 10), i = Math.min(a, 59);
  return `${n.toString().padStart(2, "0")}:${i.toString().padStart(2, "0")}`;
}
function Yp(e, t) {
  const r = e.cloneNode();
  return r.value = t, r.value === t;
}
var Xp = /* @__PURE__ */ (function(e) {
  return e.email = "email", e.password = "password", e.search = "search", e.telephone = "telephone", e.text = "text", e.url = "url", e;
})(Xp || {});
function jE(e) {
  var t;
  const r = (t = e.getAttribute("maxlength")) !== null && t !== void 0 ? t : "";
  return /^\d+$/.test(r) && Number(r) >= 0 ? Number(r) : void 0;
}
function $E(e) {
  return te(e, "textarea") || te(e, "input") && e.type in Xp;
}
function Zp(e, t, r, n) {
  if (si(e) && t + r >= 0 && t + r <= e.nodeValue.length)
    return {
      node: e,
      offset: t + r
    };
  const o = lf(e, t, r);
  if (o) {
    if (si(o))
      return {
        node: o,
        offset: r > 0 ? Math.min(1, o.nodeValue.length) : Math.max(o.nodeValue.length - 1, 0)
      };
    if (te(o, "br")) {
      const a = lf(o, void 0, r);
      return a ? si(a) ? {
        node: a,
        offset: r > 0 ? 0 : a.nodeValue.length
      } : r < 0 && te(a, "br") ? {
        node: o.parentNode,
        offset: Ja(o)
      } : {
        node: a.parentNode,
        offset: Ja(a) + (r > 0 ? 0 : 1)
      } : r < 0 && n === "deleteContentBackward" ? {
        node: o.parentNode,
        offset: Ja(o)
      } : void 0;
    } else
      return {
        node: o.parentNode,
        offset: Ja(o) + (r > 0 ? 1 : 0)
      };
  }
}
function lf(e, t, r) {
  const n = Number(t) + (r < 0 ? -1 : 0);
  return t !== void 0 && Js(e) && n >= 0 && n < e.children.length && (e = e.children[n]), HE(e, r === 1 ? "next" : "previous", UE);
}
function UE(e) {
  if (si(e))
    return !0;
  if (Js(e)) {
    if (te(e, [
      "input",
      "textarea"
    ]))
      return e.type !== "hidden";
    if (te(e, "br"))
      return !0;
  }
  return !1;
}
function Ja(e) {
  let t = 0;
  for (; e.previousSibling; )
    t++, e = e.previousSibling;
  return t;
}
function Js(e) {
  return e.nodeType === 1;
}
function si(e) {
  return e.nodeType === 3;
}
function HE(e, t, r) {
  for (; ; ) {
    var n;
    const o = e[`${t}Sibling`];
    if (o) {
      if (e = zE(o, t === "next" ? "first" : "last"), r(e))
        return e;
    } else if (e.parentNode && (!Js(e.parentNode) || !Bt(e.parentNode) && e.parentNode !== ((n = e.ownerDocument) === null || n === void 0 ? void 0 : n.body)))
      e = e.parentNode;
    else
      break;
  }
}
function zE(e, t) {
  for (; e.hasChildNodes(); )
    e = e[`${t}Child`];
  return e;
}
const Oa = Symbol("Track programmatic changes for React workaround");
function VE(e) {
  return Object.getOwnPropertyNames(e).some((t) => t.startsWith("__react")) && He(e).REACT_VERSION === 17;
}
function WE(e) {
  VE(e) && (e[Oa] = {
    previousValue: String(e.value),
    tracked: []
  });
}
function KE(e, t) {
  var r, n;
  (n = e[Oa]) === null || n === void 0 || (r = n.tracked) === null || r === void 0 || r.push(t), e[Oa] || (Zs(e), hr(e, {
    focusOffset: t.length
  }));
}
function QE(e, t) {
  var r;
  const n = e[Oa];
  if (e[Oa] = void 0, !(!(n == null || (r = n.tracked) === null || r === void 0) && r.length))
    return;
  const o = n.tracked.length === 2 && n.tracked[0] === n.previousValue && n.tracked[1] === e.value;
  o || Zs(e), FE(e) && hr(e, {
    focusOffset: o ? t : e.value.length
  });
}
function Jp(e) {
  const t = GE(e);
  if (t && Ge(t))
    return {
      type: "input",
      selection: xa(t)
    };
  const r = t?.ownerDocument.getSelection();
  return {
    type: Sa(e) && r?.anchorNode && Sa(r.anchorNode) ? "contenteditable" : "default",
    selection: r
  };
}
function GE(e) {
  return e.nodeType === 1 ? e : e.parentElement;
}
function YE(e) {
  const t = Jp(e);
  if (t.type === "input")
    return t.selection;
  if (t.type === "contenteditable") {
    var r;
    return (r = t.selection) === null || r === void 0 ? void 0 : r.getRangeAt(0);
  }
}
function jt({ focusNode: e, focusOffset: t, anchorNode: r = e, anchorOffset: n = t }) {
  var o, a;
  if (Jp(e).type === "input")
    return hr(e, {
      anchorOffset: n,
      focusOffset: t
    });
  (a = r.ownerDocument) === null || a === void 0 || (o = a.getSelection()) === null || o === void 0 || o.setBaseAndExtent(r, n, e, t);
}
function em(e) {
  return te(e, "input") && [
    "date",
    "time"
  ].includes(e.type);
}
function dr(e, t, r, n = "insertText") {
  const o = YE(t);
  o && (!em(t) && !e.dispatchUIEvent(t, "beforeinput", {
    inputType: n,
    data: r
  }) || ("startContainer" in o ? XE(e, t, o, r, n) : ZE(e, t, o, r, n)));
}
function XE(e, t, r, n, o) {
  let a = !1;
  if (!r.collapsed)
    a = !0, r.deleteContents();
  else if ([
    "deleteContentBackward",
    "deleteContentForward"
  ].includes(o)) {
    const i = Zp(r.startContainer, r.startOffset, o === "deleteContentBackward" ? -1 : 1, o);
    if (i) {
      a = !0;
      const l = r.cloneRange();
      l.comparePoint(i.node, i.offset) < 0 ? l.setStart(i.node, i.offset) : l.setEnd(i.node, i.offset), l.deleteContents();
    }
  }
  if (n)
    if (r.endContainer.nodeType === 3) {
      const i = r.endOffset;
      r.endContainer.insertData(i, n), r.setStart(r.endContainer, i + n.length), r.setEnd(r.endContainer, i + n.length);
    } else {
      const i = t.ownerDocument.createTextNode(n);
      r.insertNode(i), r.setStart(i, n.length), r.setEnd(i, n.length);
    }
  (a || n) && e.dispatchUIEvent(t, "input", {
    inputType: o
  });
}
function ZE(e, t, r, n, o) {
  let a = n;
  if ($E(t)) {
    const u = jE(t);
    if (u !== void 0 && n.length > 0) {
      const p = u - t.value.length;
      if (p > 0)
        a = n.substring(0, p);
      else
        return;
    }
  }
  const { newValue: i, newOffset: l, oldValue: c } = JE(a, t, r, o);
  i === c && l === r.startOffset && l === r.endOffset || te(t, "input", {
    type: "number"
  }) && !ew(i) || (DE(t, i), jt({
    focusNode: t,
    anchorOffset: l,
    focusOffset: l
  }), em(t) ? Yp(t, i) && (uf(e, t, l, {}), e.dispatchUIEvent(t, "change"), Gp(t)) : uf(e, t, l, {
    data: n,
    inputType: o
  }));
}
function JE(e, t, { startOffset: r, endOffset: n }, o) {
  const a = Ye(t), i = Math.max(0, r === n && o === "deleteContentBackward" ? r - 1 : r), l = a.substring(0, i), c = Math.min(a.length, r === n && o === "deleteContentForward" ? r + 1 : n), u = a.substring(c, a.length);
  let p = `${l}${e}${u}`, f = i + e.length;
  if (te(t, "input", {
    type: "time"
  })) {
    const s = BE(p);
    s !== "" && Yp(t, s) && (p = s, f = s.length);
  }
  return {
    oldValue: a,
    newValue: p,
    newOffset: f
  };
}
function uf(e, t, r, n) {
  e.dispatchUIEvent(t, "input", n), QE(t, r);
}
function ew(e) {
  var t, r;
  const n = e.split("e", 2);
  return !(/[^\d.\-e]/.test(e) || Number((t = e.match(/-/g)) === null || t === void 0 ? void 0 : t.length) > 2 || Number((r = e.match(/\./g)) === null || r === void 0 ? void 0 : r.length) > 1 || n[1] && !/^-?\d*$/.test(n[1]));
}
wt.cut = (e, t, r) => () => {
  lr(t) && dr(r, t, "", "deleteByCut");
};
function tw(e) {
  return e ? Bt(e) ? e.textContent : Ye(e) : null;
}
function rw(e) {
  const t = He(e);
  for (let r = e; r?.ownerDocument; r = r.parentElement) {
    const { display: n, visibility: o } = t.getComputedStyle(r);
    if (n === "none" || o === "hidden")
      return !1;
  }
  return !0;
}
function nw(e, t) {
  const r = e.ownerDocument, n = r.querySelectorAll(Hp), o = Array.from(n).filter((c) => c === e || !(Number(c.getAttribute("tabindex")) < 0 || pt(c)));
  Number(e.getAttribute("tabindex")) >= 0 && o.sort((c, u) => {
    const p = Number(c.getAttribute("tabindex")), f = Number(u.getAttribute("tabindex"));
    return p === f ? 0 : p === 0 ? 1 : f === 0 ? -1 : p - f;
  });
  const a = {};
  let i = [
    r.body
  ];
  const l = te(e, "input", {
    type: "radio"
  }) ? e.name : void 0;
  o.forEach((c) => {
    const u = c;
    if (te(u, "input", {
      type: "radio"
    }) && u.name) {
      if (u === e) {
        i.push(u);
        return;
      } else if (u.name === l)
        return;
      if (u.checked) {
        i = i.filter((p) => !te(p, "input", {
          type: "radio",
          name: u.name
        })), i.push(u), a[u.name] = u;
        return;
      }
      if (typeof a[u.name] < "u")
        return;
    }
    i.push(u);
  });
  for (let c = i.findIndex((u) => u === e); ; )
    if (c += t ? -1 : 1, c === i.length ? c = 0 : c === -1 && (c = i.length - 1), i[c] === e || i[c] === r.body || rw(i[c]))
      return i[c];
}
function cf(e, t) {
  if (Ge(e)) {
    const r = xa(e);
    jt({
      focusNode: e,
      focusOffset: r.startOffset === r.endOffset ? r.focusOffset + t : t < 0 ? r.startOffset : r.endOffset
    });
  } else {
    const r = e.ownerDocument.getSelection();
    if (!r?.focusNode)
      return;
    if (r.isCollapsed) {
      const n = Zp(r.focusNode, r.focusOffset, t);
      n && jt({
        focusNode: n.node,
        focusOffset: n.offset
      });
    } else
      r[t < 0 ? "collapseToStart" : "collapseToEnd"]();
  }
}
function tm(e) {
  if (Ge(e))
    return jt({
      focusNode: e,
      anchorOffset: 0,
      focusOffset: Ye(e).length
    });
  var t;
  const r = (t = Sa(e)) !== null && t !== void 0 ? t : e.ownerDocument.body;
  jt({
    focusNode: r,
    anchorOffset: 0,
    focusOffset: r.childNodes.length
  });
}
function ow(e) {
  if (Ge(e))
    return xa(e).startOffset === 0 && xa(e).endOffset === Ye(e).length;
  var t;
  const r = (t = Sa(e)) !== null && t !== void 0 ? t : e.ownerDocument.body, n = e.ownerDocument.getSelection();
  return n?.anchorNode === r && n.focusNode === r && n.anchorOffset === 0 && n.focusOffset === r.childNodes.length;
}
function ca(e, t, r) {
  var n;
  if (Ge(e))
    return jt({
      focusNode: e,
      anchorOffset: t,
      focusOffset: r
    });
  if (Bt(e) && ((n = e.firstChild) === null || n === void 0 ? void 0 : n.nodeType) === 3)
    return jt({
      focusNode: e.firstChild,
      anchorOffset: t,
      focusOffset: r
    });
  throw new Error("Not implemented. The result of this interaction is unreliable.");
}
function ei(e, t, r) {
  const n = He(t), o = Array.from(t.ownerDocument.querySelectorAll(t.name ? `input[type="radio"][name="${n.CSS.escape(t.name)}"]` : 'input[type="radio"][name=""], input[type="radio"]:not([name])'));
  for (let a = o.findIndex((i) => i === t) + r; ; a += r) {
    if (o[a] || (a = r > 0 ? 0 : o.length - 1), o[a] === t)
      return;
    if (!pt(o[a])) {
      Et(o[a]), e.dispatchUIEvent(o[a], "click");
      return;
    }
  }
}
wt.keydown = (e, t, r) => {
  var n, o;
  return (o = (n = df[e.key]) === null || n === void 0 ? void 0 : n.call(df, e, t, r)) !== null && o !== void 0 ? o : aw(e, t, r);
};
const df = {
  ArrowDown: (e, t, r) => {
    if (te(t, "input", {
      type: "radio"
    }))
      return () => ei(r, t, 1);
  },
  ArrowLeft: (e, t, r) => te(t, "input", {
    type: "radio"
  }) ? () => ei(r, t, -1) : () => cf(t, -1),
  ArrowRight: (e, t, r) => te(t, "input", {
    type: "radio"
  }) ? () => ei(r, t, 1) : () => cf(t, 1),
  ArrowUp: (e, t, r) => {
    if (te(t, "input", {
      type: "radio"
    }))
      return () => ei(r, t, -1);
  },
  Backspace: (e, t, r) => {
    if (lr(t))
      return () => {
        dr(r, t, "", "deleteContentBackward");
      };
  },
  Delete: (e, t, r) => {
    if (lr(t))
      return () => {
        dr(r, t, "", "deleteContentForward");
      };
  },
  End: (e, t) => {
    if (te(t, [
      "input",
      "textarea"
    ]) || Bt(t))
      return () => {
        var r, n;
        const o = (n = (r = tw(t)) === null || r === void 0 ? void 0 : r.length) !== null && n !== void 0 ? n : (
          /* istanbul ignore next */
          0
        );
        ca(t, o, o);
      };
  },
  Home: (e, t) => {
    if (te(t, [
      "input",
      "textarea"
    ]) || Bt(t))
      return () => {
        ca(t, 0, 0);
      };
  },
  PageDown: (e, t) => {
    if (te(t, [
      "input"
    ]))
      return () => {
        const r = Ye(t).length;
        ca(t, r, r);
      };
  },
  PageUp: (e, t) => {
    if (te(t, [
      "input"
    ]))
      return () => {
        ca(t, 0, 0);
      };
  },
  Tab: (e, t, r) => () => {
    const n = nw(t, r.system.keyboard.modifiers.Shift);
    Et(n), Ge(n) && hr(n, {
      anchorOffset: 0,
      focusOffset: n.value.length
    });
  }
}, aw = (e, t, r) => {
  if (e.code === "KeyA" && r.system.keyboard.modifiers.Control)
    return () => tm(t);
};
wt.keypress = (e, t, r) => {
  if (e.key === "Enter") {
    if (te(t, "button") || te(t, "input") && iw.includes(t.type) || te(t, "a") && t.href)
      return () => {
        r.dispatchUIEvent(t, "click");
      };
    if (te(t, "input")) {
      const n = t.form, o = n?.querySelector('input[type="submit"], button:not([type]), button[type="submit"]');
      return o ? () => r.dispatchUIEvent(o, "click") : n && sw.includes(t.type) && n.querySelectorAll("input").length === 1 ? () => r.dispatchUIEvent(n, "submit") : void 0;
    }
  }
  if (lr(t)) {
    const n = e.key === "Enter" ? Bt(t) && !r.system.keyboard.modifiers.Shift ? "insertParagraph" : "insertLineBreak" : "insertText", o = e.key === "Enter" ? `
` : e.key;
    return () => dr(r, t, o, n);
  }
};
const iw = [
  "button",
  "color",
  "file",
  "image",
  "reset",
  "submit"
], sw = [
  "email",
  "month",
  "password",
  "search",
  "tel",
  "text",
  "url",
  "week"
];
wt.keyup = (e, t, r) => {
  var n;
  return (n = ff[e.key]) === null || n === void 0 ? void 0 : n.call(ff, e, t, r);
};
const ff = {
  " ": (e, t, r) => {
    if (Vp(t))
      return () => r.dispatchUIEvent(t, "click");
  }
};
wt.paste = (e, t, r) => {
  if (lr(t))
    return () => {
      var n;
      const o = (n = e.clipboardData) === null || n === void 0 ? void 0 : n.getData("text");
      o && dr(r, t, o, "insertFromPaste");
    };
};
const rm = {
  auxclick: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  beforeinput: {
    EventType: "InputEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  blur: {
    EventType: "FocusEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1,
      composed: !0
    }
  },
  click: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  contextmenu: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  copy: {
    EventType: "ClipboardEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  change: {
    EventType: "Event",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  cut: {
    EventType: "ClipboardEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  dblclick: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  focus: {
    EventType: "FocusEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1,
      composed: !0
    }
  },
  focusin: {
    EventType: "FocusEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  focusout: {
    EventType: "FocusEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  keydown: {
    EventType: "KeyboardEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  keypress: {
    EventType: "KeyboardEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  keyup: {
    EventType: "KeyboardEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  paste: {
    EventType: "ClipboardEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  input: {
    EventType: "InputEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  mousedown: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  mouseenter: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1,
      composed: !0
    }
  },
  mouseleave: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1,
      composed: !0
    }
  },
  mousemove: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  mouseout: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  mouseover: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  mouseup: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  pointerover: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  pointerenter: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  pointerdown: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  pointermove: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  pointerup: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  pointercancel: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  pointerout: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  pointerleave: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  submit: {
    EventType: "Event",
    defaultInit: {
      bubbles: !0,
      cancelable: !0
    }
  }
};
function nm(e) {
  return rm[e].EventType;
}
const lw = [
  "MouseEvent",
  "PointerEvent"
];
function uw(e) {
  return lw.includes(nm(e));
}
function cw(e) {
  return nm(e) === "KeyboardEvent";
}
const dw = {
  ClipboardEvent: [
    pw
  ],
  Event: [],
  FocusEvent: [
    ua,
    mw
  ],
  InputEvent: [
    ua,
    hw
  ],
  MouseEvent: [
    ua,
    Xi,
    pf
  ],
  PointerEvent: [
    ua,
    Xi,
    pf,
    bw
  ],
  KeyboardEvent: [
    ua,
    Xi,
    vw
  ]
};
function om(e, t, r) {
  const n = He(t), { EventType: o, defaultInit: a } = rm[e], i = new (fw(n))[o](e, a);
  return dw[o].forEach((l) => l(i, r ?? {})), i;
}
function fw(e) {
  var t;
  const r = (t = e.Event) !== null && t !== void 0 ? t : class {
  };
  var n;
  const o = (n = e.AnimationEvent) !== null && n !== void 0 ? n : class extends r {
  };
  var a;
  const i = (a = e.ClipboardEvent) !== null && a !== void 0 ? a : class extends r {
  };
  var l;
  const c = (l = e.PopStateEvent) !== null && l !== void 0 ? l : class extends r {
  };
  var u;
  const p = (u = e.ProgressEvent) !== null && u !== void 0 ? u : class extends r {
  };
  var f;
  const s = (f = e.TransitionEvent) !== null && f !== void 0 ? f : class extends r {
  };
  var m;
  const h = (m = e.UIEvent) !== null && m !== void 0 ? m : class extends r {
  };
  var y;
  const P = (y = e.CompositionEvent) !== null && y !== void 0 ? y : class extends h {
  };
  var d;
  const E = (d = e.FocusEvent) !== null && d !== void 0 ? d : class extends h {
  };
  var g;
  const R = (g = e.InputEvent) !== null && g !== void 0 ? g : class extends h {
  };
  var q;
  const v = (q = e.KeyboardEvent) !== null && q !== void 0 ? q : class extends h {
  };
  var b;
  const _ = (b = e.MouseEvent) !== null && b !== void 0 ? b : class extends h {
  };
  var M;
  const O = (M = e.DragEvent) !== null && M !== void 0 ? M : class extends _ {
  };
  var x;
  const A = (x = e.PointerEvent) !== null && x !== void 0 ? x : class extends _ {
  };
  var T;
  const I = (T = e.TouchEvent) !== null && T !== void 0 ? T : class extends h {
  };
  return {
    Event: r,
    AnimationEvent: o,
    ClipboardEvent: i,
    PopStateEvent: c,
    ProgressEvent: p,
    TransitionEvent: s,
    UIEvent: h,
    CompositionEvent: P,
    FocusEvent: E,
    InputEvent: R,
    KeyboardEvent: v,
    MouseEvent: _,
    DragEvent: O,
    PointerEvent: A,
    TouchEvent: I
  };
}
function Ct(e, t) {
  for (const [r, n] of Object.entries(t))
    Object.defineProperty(e, r, {
      get: () => n ?? null
    });
}
function we(e) {
  return Number(e ?? 0);
}
function pw(e, { clipboardData: t }) {
  Ct(e, {
    clipboardData: t
  });
}
function mw(e, { relatedTarget: t }) {
  Ct(e, {
    relatedTarget: t
  });
}
function hw(e, { data: t, inputType: r, isComposing: n }) {
  Ct(e, {
    data: t,
    isComposing: !!n,
    inputType: String(r)
  });
}
function ua(e, { view: t, detail: r }) {
  Ct(e, {
    view: t,
    detail: we(r ?? 0)
  });
}
function Xi(e, { altKey: t, ctrlKey: r, metaKey: n, shiftKey: o, modifierAltGraph: a, modifierCapsLock: i, modifierFn: l, modifierFnLock: c, modifierNumLock: u, modifierScrollLock: p, modifierSymbol: f, modifierSymbolLock: s }) {
  Ct(e, {
    altKey: !!t,
    ctrlKey: !!r,
    metaKey: !!n,
    shiftKey: !!o,
    getModifierState(m) {
      return !!{
        Alt: t,
        AltGraph: a,
        CapsLock: i,
        Control: r,
        Fn: l,
        FnLock: c,
        Meta: n,
        NumLock: u,
        ScrollLock: p,
        Shift: o,
        Symbol: f,
        SymbolLock: s
      }[m];
    }
  });
}
function vw(e, { key: t, code: r, location: n, repeat: o, isComposing: a, charCode: i }) {
  Ct(e, {
    key: String(t),
    code: String(r),
    location: we(n),
    repeat: !!o,
    isComposing: !!a,
    charCode: i
  });
}
function pf(e, { x: t, y: r, screenX: n, screenY: o, clientX: a = t, clientY: i = r, button: l, buttons: c, relatedTarget: u, offsetX: p, offsetY: f, pageX: s, pageY: m }) {
  Ct(e, {
    screenX: we(n),
    screenY: we(o),
    clientX: we(a),
    x: we(a),
    clientY: we(i),
    y: we(i),
    button: we(l),
    buttons: we(c),
    relatedTarget: u,
    offsetX: we(p),
    offsetY: we(f),
    pageX: we(s),
    pageY: we(m)
  });
}
function bw(e, { pointerId: t, width: r, height: n, pressure: o, tangentialPressure: a, tiltX: i, tiltY: l, twist: c, pointerType: u, isPrimary: p }) {
  Ct(e, {
    pointerId: we(t),
    width: we(r ?? 1),
    height: we(n ?? 1),
    pressure: we(o),
    tangentialPressure: we(a),
    tiltX: we(i),
    tiltY: we(l),
    twist: we(c),
    pointerType: String(u),
    isPrimary: !!p
  });
}
function yw(e, t, r, n = !1) {
  (uw(t) || cw(t)) && (r = {
    ...r,
    ...this.system.getUIEventModifiers()
  });
  const o = om(t, e, r);
  return am.call(this, e, o, n);
}
function am(e, t, r = !1) {
  var n;
  const o = t.type, a = r ? () => {
  } : (n = wt[o]) === null || n === void 0 ? void 0 : n.call(wt, t, e, this);
  if (a) {
    t.preventDefault();
    let i = !1;
    return Object.defineProperty(t, "defaultPrevented", {
      get: () => i
    }), Object.defineProperty(t, "preventDefault", {
      value: () => {
        i = t.cancelable;
      }
    }), ur(() => e.dispatchEvent(t)), i || a(), !i;
  }
  return ur(() => e.dispatchEvent(t));
}
function Mt(e, t, r) {
  const n = om(t, e, r);
  ur(() => e.dispatchEvent(n));
}
const mf = Symbol("patched focus/blur methods");
function im(e) {
  if (e.prototype[mf])
    return;
  const { focus: t, blur: r } = e.prototype;
  Object.defineProperties(e.prototype, {
    focus: {
      configurable: !0,
      get: () => o
    },
    blur: {
      configurable: !0,
      get: () => a
    },
    [mf]: {
      configurable: !0,
      get: () => ({
        focus: t,
        blur: r
      })
    }
  });
  let n;
  function o(i) {
    if (this.ownerDocument.visibilityState !== "hidden")
      return t.call(this, i);
    const l = hf(this.ownerDocument);
    if (l === this)
      return;
    const c = Symbol("focus call");
    n = c, l && (r.call(l), Mt(l, "blur", {
      relatedTarget: this
    }), Mt(l, "focusout", {
      relatedTarget: n === c ? this : null
    })), n === c && (t.call(this, i), Mt(this, "focus", {
      relatedTarget: l
    })), n === c && Mt(this, "focusin", {
      relatedTarget: l
    });
  }
  function a() {
    if (this.ownerDocument.visibilityState !== "hidden")
      return r.call(this);
    const i = hf(this.ownerDocument);
    if (i !== this)
      return;
    n = Symbol("blur call"), r.call(this), Mt(i, "blur", {
      relatedTarget: null
    }), Mt(i, "focusout", {
      relatedTarget: null
    });
  }
}
function hf(e) {
  const t = Fa(e);
  return t?.tagName === "BODY" ? null : t;
}
const Zi = Symbol("Interceptor for programmatical calls");
function Xt(e, t, r) {
  const n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), o = Object.getOwnPropertyDescriptor(e, t), a = n?.set ? "set" : "value";
  if (typeof n?.[a] != "function" || n[a][Zi])
    throw new Error(`Element ${e.tagName} does not implement "${String(t)}".`);
  function i(...l) {
    const { applyNative: c = !1, realArgs: u, then: p } = r.call(this, ...l), f = (!c && o || n)[a];
    a === "set" ? f.call(this, u) : f.call(this, ...u), p?.();
  }
  i[Zi] = Zi, Object.defineProperty(e, t, {
    ...o ?? n,
    [a]: i
  });
}
function gw(e) {
  Xt(e, "value", function(r) {
    const n = IE(r);
    return n && WE(this), {
      applyNative: !!n,
      realArgs: Rw(this, r),
      then: n ? void 0 : () => KE(this, String(r))
    };
  });
}
function Rw(e, t) {
  return te(e, "input", {
    type: "number"
  }) && String(t) !== "" && !Number.isNaN(Number(t)) ? String(Number(t)) : String(t);
}
function Ew(e) {
  Xt(e, "setSelectionRange", function(r, ...n) {
    const o = kE(r);
    return {
      applyNative: !!o,
      realArgs: [
        Number(r),
        ...n
      ],
      then: () => o ? void 0 : ii(e)
    };
  }), Xt(e, "selectionStart", function(r) {
    return {
      realArgs: r,
      then: () => ii(e)
    };
  }), Xt(e, "selectionEnd", function(r) {
    return {
      realArgs: r,
      then: () => ii(e)
    };
  }), Xt(e, "select", function() {
    return {
      realArgs: [],
      then: () => LE(e, {
        anchorOffset: 0,
        focusOffset: Ye(e).length
      })
    };
  });
}
function ww(e) {
  Xt(e, "setRangeText", function(...r) {
    return {
      realArgs: r,
      then: () => {
        Zs(e), ii(e);
      }
    };
  });
}
const tr = Symbol("Node prepared with document state workarounds");
function sm(e) {
  e[tr] || (e.addEventListener("focus", (t) => {
    const r = t.target;
    vf(r);
  }, {
    capture: !0,
    passive: !0
  }), e.activeElement && vf(e.activeElement), e.addEventListener("blur", (t) => {
    const r = t.target, n = NE(r);
    n !== void 0 && (r.value !== n && Mt(r, "change"), Gp(r));
  }, {
    capture: !0,
    passive: !0
  }), e[tr] = tr);
}
function vf(e) {
  e[tr] || (te(e, [
    "input",
    "textarea"
  ]) && (gw(e), Ew(e), ww(e)), e[tr] = tr);
}
function Cw(e) {
  return _w(e) ? e : e.ownerDocument;
}
function _w(e) {
  return e.nodeType === 9;
}
var Le = /* @__PURE__ */ (function(e) {
  return e[e.Trigger = 2] = "Trigger", e[e.Call = 1] = "Call", e;
})({});
function da(e, t) {
  e.levelRefs[t] = {};
}
function ti(e, t) {
  return e.levelRefs[t];
}
function fr(e) {
  const t = e.delay;
  if (typeof t == "number")
    return Promise.all([
      new Promise((r) => globalThis.setTimeout(() => r(), t)),
      e.advanceTimers(t)
    ]);
}
var li = /* @__PURE__ */ (function(e) {
  return e[e.EachTrigger = 4] = "EachTrigger", e[e.EachApiCall = 2] = "EachApiCall", e[e.EachTarget = 1] = "EachTarget", e[e.Never = 0] = "Never", e;
})({});
function St(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
var Qe = /* @__PURE__ */ (function(e) {
  return e[e.STANDARD = 0] = "STANDARD", e[e.LEFT = 1] = "LEFT", e[e.RIGHT = 2] = "RIGHT", e[e.NUMPAD = 3] = "NUMPAD", e;
})({});
const Pw = [
  "Alt",
  "AltGraph",
  "Control",
  "Fn",
  "Meta",
  "Shift",
  "Symbol"
];
function bf(e) {
  return Pw.includes(e);
}
const qw = [
  "CapsLock",
  "FnLock",
  "NumLock",
  "ScrollLock",
  "SymbolLock"
];
function yf(e) {
  return qw.includes(e);
}
class Tw {
  isKeyPressed(t) {
    return this.pressed.has(String(t.code));
  }
  getPressedKeys() {
    return this.pressed.values().map((t) => t.keyDef);
  }
  /** Press a key */
  async keydown(t, r) {
    const n = String(r.key), o = String(r.code), a = Yi(t.config.document);
    this.setKeydownTarget(a), this.pressed.add(o, r), bf(n) && (this.modifiers[n] = !0);
    const i = t.dispatchUIEvent(a, "keydown", {
      key: n,
      code: o
    });
    yf(n) && !this.modifiers[n] && (this.modifiers[n] = !0, this.modifierLockStart[n] = !0), i && this.pressed.setUnprevented(o), i && this.hasKeyPress(n) && t.dispatchUIEvent(Yi(t.config.document), "keypress", {
      key: n,
      code: o,
      charCode: r.key === "Enter" ? 13 : String(r.key).charCodeAt(0)
    });
  }
  /** Release a key */
  async keyup(t, r) {
    const n = String(r.key), o = String(r.code), a = this.pressed.isUnprevented(o);
    this.pressed.delete(o), bf(n) && !this.pressed.values().find((i) => i.keyDef.key === n) && (this.modifiers[n] = !1), t.dispatchUIEvent(Yi(t.config.document), "keyup", {
      key: n,
      code: o
    }, !a), yf(n) && this.modifiers[n] && (this.modifierLockStart[n] ? this.modifierLockStart[n] = !1 : this.modifiers[n] = !1);
  }
  setKeydownTarget(t) {
    t !== this.lastKeydownTarget && (this.carryChar = ""), this.lastKeydownTarget = t;
  }
  hasKeyPress(t) {
    return (t.length === 1 || t === "Enter") && !this.modifiers.Control && !this.modifiers.Alt;
  }
  constructor(t) {
    St(this, "system", void 0), St(this, "modifiers", {
      Alt: !1,
      AltGraph: !1,
      CapsLock: !1,
      Control: !1,
      Fn: !1,
      FnLock: !1,
      Meta: !1,
      NumLock: !1,
      ScrollLock: !1,
      Shift: !1,
      Symbol: !1,
      SymbolLock: !1
    }), St(this, "pressed", new class {
      add(r, n) {
        var o, a, i;
        (i = (o = this.registry)[a = r]) !== null && i !== void 0 || (o[a] = {
          keyDef: n,
          unpreventedDefault: !1
        });
      }
      has(r) {
        return !!this.registry[r];
      }
      setUnprevented(r) {
        const n = this.registry[r];
        n && (n.unpreventedDefault = !0);
      }
      isUnprevented(r) {
        var n;
        return !!(!((n = this.registry[r]) === null || n === void 0) && n.unpreventedDefault);
      }
      delete(r) {
        delete this.registry[r];
      }
      values() {
        return Object.values(this.registry);
      }
      constructor() {
        St(this, "registry", {});
      }
    }()), St(this, "carryChar", ""), St(this, "lastKeydownTarget", void 0), St(this, "modifierLockStart", {}), this.system = t;
  }
}
const Sw = [
  // alphanumeric block - writing system
  ..."0123456789".split("").map((e) => ({
    code: `Digit${e}`,
    key: e
  })),
  ...")!@#$%^&*(".split("").map((e, t) => ({
    code: `Digit${t}`,
    key: e,
    shiftKey: !0
  })),
  ..."abcdefghijklmnopqrstuvwxyz".split("").map((e) => ({
    code: `Key${e.toUpperCase()}`,
    key: e
  })),
  ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((e) => ({
    code: `Key${e}`,
    key: e,
    shiftKey: !0
  })),
  {
    code: "BracketLeft",
    key: "["
  },
  {
    code: "BracketLeft",
    key: "{",
    shiftKey: !0
  },
  {
    code: "BracketRight",
    key: "]"
  },
  {
    code: "BracketRight",
    key: "}",
    shiftKey: !0
  },
  // alphanumeric block - functional
  {
    code: "Space",
    key: " "
  },
  {
    code: "AltLeft",
    key: "Alt",
    location: Qe.LEFT
  },
  {
    code: "AltRight",
    key: "Alt",
    location: Qe.RIGHT
  },
  {
    code: "ShiftLeft",
    key: "Shift",
    location: Qe.LEFT
  },
  {
    code: "ShiftRight",
    key: "Shift",
    location: Qe.RIGHT
  },
  {
    code: "ControlLeft",
    key: "Control",
    location: Qe.LEFT
  },
  {
    code: "ControlRight",
    key: "Control",
    location: Qe.RIGHT
  },
  {
    code: "MetaLeft",
    key: "Meta",
    location: Qe.LEFT
  },
  {
    code: "MetaRight",
    key: "Meta",
    location: Qe.RIGHT
  },
  {
    code: "OSLeft",
    key: "OS",
    location: Qe.LEFT
  },
  {
    code: "OSRight",
    key: "OS",
    location: Qe.RIGHT
  },
  {
    code: "ContextMenu",
    key: "ContextMenu"
  },
  {
    code: "Tab",
    key: "Tab"
  },
  {
    code: "CapsLock",
    key: "CapsLock"
  },
  {
    code: "Backspace",
    key: "Backspace"
  },
  {
    code: "Enter",
    key: "Enter"
  },
  // function
  {
    code: "Escape",
    key: "Escape"
  },
  // arrows
  {
    code: "ArrowUp",
    key: "ArrowUp"
  },
  {
    code: "ArrowDown",
    key: "ArrowDown"
  },
  {
    code: "ArrowLeft",
    key: "ArrowLeft"
  },
  {
    code: "ArrowRight",
    key: "ArrowRight"
  },
  // control pad
  {
    code: "Home",
    key: "Home"
  },
  {
    code: "End",
    key: "End"
  },
  {
    code: "Delete",
    key: "Delete"
  },
  {
    code: "PageUp",
    key: "PageUp"
  },
  {
    code: "PageDown",
    key: "PageDown"
  },
  // Special keys that are not part of a default US-layout but included for specific behavior
  {
    code: "Fn",
    key: "Fn"
  },
  {
    code: "Symbol",
    key: "Symbol"
  },
  {
    code: "AltRight",
    key: "AltGraph"
  }
], xw = [
  {
    name: "MouseLeft",
    pointerType: "mouse",
    button: "primary"
  },
  {
    name: "MouseRight",
    pointerType: "mouse",
    button: "secondary"
  },
  {
    name: "MouseMiddle",
    pointerType: "mouse",
    button: "auxiliary"
  },
  {
    name: "TouchA",
    pointerType: "touch"
  },
  {
    name: "TouchB",
    pointerType: "touch"
  },
  {
    name: "TouchC",
    pointerType: "touch"
  }
];
function Ow(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
class lm {
  getButtons() {
    let t = 0;
    for (const r of Object.keys(this.pressed))
      t |= 2 ** Number(r);
    return t;
  }
  down(t) {
    const r = qs(t.button);
    if (r in this.pressed) {
      this.pressed[r].push(t);
      return;
    }
    return this.pressed[r] = [
      t
    ], r;
  }
  up(t) {
    const r = qs(t.button);
    if (r in this.pressed && (this.pressed[r] = this.pressed[r].filter((n) => n.name !== t.name), this.pressed[r].length === 0))
      return delete this.pressed[r], r;
  }
  constructor() {
    Ow(this, "pressed", {});
  }
}
const gf = {
  primary: 0,
  secondary: 1,
  auxiliary: 2,
  back: 3,
  X1: 3,
  forward: 4,
  X2: 4
};
function qs(e = 0) {
  return e in gf ? gf[e] : Number(e);
}
const Rf = {
  1: 2,
  2: 1
};
function Ts(e) {
  return e = qs(e), e in Rf ? Rf[e] : e;
}
function Mw(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
class Aw {
  get countPressed() {
    return this.pressedKeys.size;
  }
  isPressed(t) {
    return this.pressedKeys.has(t.name);
  }
  addPressed(t) {
    return this.pressedKeys.add(t.name);
  }
  removePressed(t) {
    return this.pressedKeys.delete(t.name);
  }
  constructor() {
    Mw(this, "pressedKeys", /* @__PURE__ */ new Set());
  }
}
function va(e, t) {
  const r = [];
  for (let a = e; a; a = a.parentElement)
    r.push(a);
  const n = [];
  for (let a = t; a; a = a.parentElement)
    n.push(a);
  let o = 0;
  for (; !(o >= r.length || o >= n.length || r[r.length - 1 - o] !== n[n.length - 1 - o]); o++)
    ;
  return [
    r.slice(0, r.length - o),
    n.slice(0, n.length - o),
    n.slice(n.length - o)
  ];
}
function Ss({ target: e, node: t, offset: r }) {
  return Ge(e) ? {
    node: e,
    offset: r ?? Ye(e).length
  } : t ? {
    node: t,
    offset: r ?? (t.nodeType === 3 ? t.nodeValue.length : t.childNodes.length)
  } : um(e, r);
}
function um(e, t, r = !0) {
  let n = t === void 0 ? e.childNodes.length - 1 : 0;
  const o = t === void 0 ? -1 : 1;
  for (; t === void 0 ? n >= (r ? Math.max(e.childNodes.length - 1, 0) : 0) : n <= e.childNodes.length; ) {
    if (t && n === e.childNodes.length)
      throw new Error("The given offset is out of bounds.");
    const a = e.childNodes.item(n), i = String(a.textContent);
    if (i.length)
      if (t !== void 0 && i.length < t)
        t -= i.length;
      else {
        if (a.nodeType === 1)
          return um(a, t, !1);
        if (a.nodeType === 3)
          return {
            node: a,
            offset: t ?? a.nodeValue.length
          };
      }
    n += o;
  }
  return {
    node: e,
    offset: e.childNodes.length
  };
}
function Iw({ document: e, target: t, clickCount: r, node: n, offset: o }) {
  if (OE(t))
    return;
  const a = Ge(t), i = String(a ? Ye(t) : t.textContent), [l, c] = n ? (
    // which elements might be considered in the same line of text.
    // TODO: support expanding initial range on multiple clicks if node is given
    [
      o,
      o
    ]
  ) : kw(i, o, r);
  if (a)
    return hr(t, {
      anchorOffset: l ?? i.length,
      focusOffset: c ?? i.length
    }), {
      node: t,
      start: l ?? 0,
      end: c ?? i.length
    };
  {
    const { node: u, offset: p } = Ss({
      target: t,
      node: n,
      offset: l
    }), { node: f, offset: s } = Ss({
      target: t,
      node: n,
      offset: c
    }), m = t.ownerDocument.createRange();
    try {
      m.setStart(u, p), m.setEnd(f, s);
    } catch {
      throw new Error("The given offset is out of bounds.");
    }
    const h = e.getSelection();
    return h?.removeAllRanges(), h?.addRange(m.cloneRange()), m;
  }
}
function kw(e, t, r) {
  if (r % 3 === 1 || e.length === 0)
    return [
      t,
      t
    ];
  const n = t ?? e.length;
  return r % 3 === 2 ? [
    n - e.substr(0, t).match(/(\w+|\s+|\W)?$/)[0].length,
    t === void 0 ? t : t + e.substr(t).match(/^(\w+|\s+|\W)?/)[0].length
  ] : [
    n - e.substr(0, t).match(/[^\r\n]*$/)[0].length,
    t === void 0 ? t : t + e.substr(t).match(/^[^\r\n]*/)[0].length
  ];
}
function Dw(e, { document: t, target: r, node: n, offset: o }) {
  const a = Ss({
    target: r,
    node: n,
    offset: o
  });
  if ("node" in e) {
    if (a.node === e.node) {
      const i = a.offset < e.start ? e.end : e.start, l = a.offset > e.end || a.offset < e.start ? a.offset : e.end;
      hr(e.node, {
        anchorOffset: i,
        focusOffset: l
      });
    }
  } else {
    const i = e.cloneRange(), l = i.comparePoint(a.node, a.offset);
    l < 0 ? i.setStart(a.node, a.offset) : l > 0 && i.setEnd(a.node, a.offset);
    const c = t.getSelection();
    c?.removeAllRanges(), c?.addRange(i.cloneRange());
  }
}
function cm(e, t) {
  var r, n, o, a, i, l, c, u, p, f, s, m, h, y, P, d, E, g, R, q, v, b, _, M;
  return e.target !== t.target || ((r = e.coords) === null || r === void 0 ? void 0 : r.x) !== ((n = t.coords) === null || n === void 0 ? void 0 : n.x) || ((o = e.coords) === null || o === void 0 ? void 0 : o.y) !== ((a = t.coords) === null || a === void 0 ? void 0 : a.y) || ((i = e.coords) === null || i === void 0 ? void 0 : i.clientX) !== ((l = t.coords) === null || l === void 0 ? void 0 : l.clientX) || ((c = e.coords) === null || c === void 0 ? void 0 : c.clientY) !== ((u = t.coords) === null || u === void 0 ? void 0 : u.clientY) || ((p = e.coords) === null || p === void 0 ? void 0 : p.offsetX) !== ((f = t.coords) === null || f === void 0 ? void 0 : f.offsetX) || ((s = e.coords) === null || s === void 0 ? void 0 : s.offsetY) !== ((m = t.coords) === null || m === void 0 ? void 0 : m.offsetY) || ((h = e.coords) === null || h === void 0 ? void 0 : h.pageX) !== ((y = t.coords) === null || y === void 0 ? void 0 : y.pageX) || ((P = e.coords) === null || P === void 0 ? void 0 : P.pageY) !== ((d = t.coords) === null || d === void 0 ? void 0 : d.pageY) || ((E = e.coords) === null || E === void 0 ? void 0 : E.screenX) !== ((g = t.coords) === null || g === void 0 ? void 0 : g.screenX) || ((R = e.coords) === null || R === void 0 ? void 0 : R.screenY) !== ((q = t.coords) === null || q === void 0 ? void 0 : q.screenY) || ((v = e.caret) === null || v === void 0 ? void 0 : v.node) !== ((b = t.caret) === null || b === void 0 ? void 0 : b.node) || ((_ = e.caret) === null || _ === void 0 ? void 0 : _.offset) !== ((M = t.caret) === null || M === void 0 ? void 0 : M.offset);
}
function xt(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
class Nw {
  move(t, r, n) {
    const o = this.position, a = this.getTarget(t);
    if (this.position = r, !cm(o, r))
      return;
    const i = this.getTarget(t), l = this.getEventInit("mousemove"), [c, u] = va(a, i);
    return {
      leave: () => {
        a !== i && (t.dispatchUIEvent(a, "mouseout", l), c.forEach((p) => t.dispatchUIEvent(p, "mouseleave", l)));
      },
      enter: () => {
        a !== i && (t.dispatchUIEvent(i, "mouseover", l), u.forEach((p) => t.dispatchUIEvent(p, "mouseenter", l)));
      },
      move: () => {
        n || (t.dispatchUIEvent(i, "mousemove", l), this.modifySelecting(t));
      }
    };
  }
  down(t, r, n) {
    const o = this.buttons.down(r);
    if (o === void 0)
      return;
    const a = this.getTarget(t);
    this.buttonDownTarget[o] = a;
    const i = this.getEventInit("mousedown", r.button), l = pt(a);
    !n && (l || t.dispatchUIEvent(a, "mousedown", i)) && (this.startSelecting(t, i.detail), Et(a)), !l && Ts(r.button) === 2 && t.dispatchUIEvent(a, "contextmenu", this.getEventInit("contextmenu", r.button));
  }
  up(t, r, n) {
    const o = this.buttons.up(r);
    if (o === void 0)
      return;
    const a = this.getTarget(t);
    if (!pt(a)) {
      if (!n) {
        const l = this.getEventInit("mouseup", r.button);
        t.dispatchUIEvent(a, "mouseup", l), this.endSelecting();
      }
      const i = va(this.buttonDownTarget[o], a)[2][0];
      if (i) {
        const l = this.getEventInit("click", r.button);
        l.detail && (t.dispatchUIEvent(i, l.button === 0 ? "click" : "auxclick", l), l.button === 0 && l.detail === 2 && t.dispatchUIEvent(i, "dblclick", {
          ...this.getEventInit("dblclick", r.button),
          detail: l.detail
        }));
      }
    }
  }
  resetClickCount() {
    this.clickCount.reset();
  }
  getEventInit(t, r) {
    const n = {
      ...this.position.coords
    };
    return n.button = Ts(r), n.buttons = this.buttons.getButtons(), t === "mousedown" ? n.detail = this.clickCount.getOnDown(n.button) : t === "mouseup" ? n.detail = this.clickCount.getOnUp(n.button) : (t === "click" || t === "auxclick") && (n.detail = this.clickCount.incOnClick(n.button)), n;
  }
  getTarget(t) {
    var r;
    return (r = this.position.target) !== null && r !== void 0 ? r : t.config.document.body;
  }
  startSelecting(t, r) {
    var n, o;
    this.selecting = Iw({
      document: t.config.document,
      target: this.getTarget(t),
      node: (n = this.position.caret) === null || n === void 0 ? void 0 : n.node,
      offset: (o = this.position.caret) === null || o === void 0 ? void 0 : o.offset,
      clickCount: r
    });
  }
  modifySelecting(t) {
    var r, n;
    this.selecting && Dw(this.selecting, {
      document: t.config.document,
      target: this.getTarget(t),
      node: (r = this.position.caret) === null || r === void 0 ? void 0 : r.node,
      offset: (n = this.position.caret) === null || n === void 0 ? void 0 : n.offset
    });
  }
  endSelecting() {
    this.selecting = void 0;
  }
  constructor() {
    xt(this, "position", {}), xt(this, "buttons", new lm()), xt(this, "selecting", void 0), xt(this, "buttonDownTarget", {}), xt(this, "clickCount", new class {
      incOnClick(t) {
        const r = this.down[t] === void 0 ? void 0 : Number(this.down[t]) + 1;
        return this.count = this.count[t] === void 0 ? {} : {
          [t]: Number(this.count[t]) + 1
        }, r;
      }
      getOnDown(t) {
        var r;
        this.down = {
          [t]: (r = this.count[t]) !== null && r !== void 0 ? r : 0
        };
        var n;
        return this.count = {
          [t]: (n = this.count[t]) !== null && n !== void 0 ? n : 0
        }, Number(this.count[t]) + 1;
      }
      getOnUp(t) {
        return this.down[t] === void 0 ? void 0 : Number(this.down[t]) + 1;
      }
      reset() {
        this.count = {};
      }
      constructor() {
        xt(this, "down", {}), xt(this, "count", {});
      }
    }());
  }
}
function Ci(e, t) {
  var r;
  return ((r = dm(e, t)) === null || r === void 0 ? void 0 : r.pointerEvents) !== "none";
}
function Lw(e) {
  const t = He(e);
  for (let r = e, n = []; r?.ownerDocument; r = r.parentElement) {
    n.push(r);
    const o = t.getComputedStyle(r).pointerEvents;
    if (o && ![
      "inherit",
      "unset"
    ].includes(o))
      return {
        pointerEvents: o,
        tree: n
      };
  }
}
const Ef = Symbol("Last check for pointer-events");
function dm(e, t) {
  const r = t[Ef];
  if (!(e.config.pointerEventsCheck !== li.Never && (!r || wf(e.config.pointerEventsCheck, li.EachApiCall) && r[Le.Call] !== ti(e, Le.Call) || wf(e.config.pointerEventsCheck, li.EachTrigger) && r[Le.Trigger] !== ti(e, Le.Trigger))))
    return r?.result;
  const o = Lw(t);
  return t[Ef] = {
    [Le.Call]: ti(e, Le.Call),
    [Le.Trigger]: ti(e, Le.Trigger),
    result: o
  }, o;
}
function fa(e, t) {
  const r = dm(e, t);
  if (r?.pointerEvents === "none")
    throw new Error([
      `Unable to perform pointer interaction as the element ${r.tree.length > 1 ? "inherits" : "has"} \`pointer-events: none\`:`,
      "",
      Fw(r.tree)
    ].join(`
`));
}
function Fw(e) {
  return e.reverse().map((t, r) => [
    "".padEnd(r),
    t.tagName,
    t.id && `#${t.id}`,
    t.hasAttribute("data-testid") && `(testId=${t.getAttribute("data-testid")})`,
    Bw(t),
    e.length > 1 && r === 0 && "  <-- This element declared `pointer-events: none`",
    e.length > 1 && r === e.length - 1 && "  <-- Asserted pointer events here"
  ].filter(Boolean).join("")).join(`
`);
}
function Bw(e) {
  var t;
  let r;
  if (e.hasAttribute("aria-label"))
    r = e.getAttribute("aria-label");
  else if (e.hasAttribute("aria-labelledby")) {
    var n, o;
    r = (o = e.ownerDocument.getElementById(e.getAttribute("aria-labelledby"))) === null || o === void 0 || (n = o.textContent) === null || n === void 0 ? void 0 : n.trim();
  } else if (te(e, [
    "button",
    "input",
    "meter",
    "output",
    "progress",
    "select",
    "textarea"
  ]) && (!((t = e.labels) === null || t === void 0) && t.length))
    r = Array.from(e.labels).map((i) => {
      var l;
      return (l = i.textContent) === null || l === void 0 ? void 0 : l.trim();
    }).join("|");
  else if (te(e, "button")) {
    var a;
    r = (a = e.textContent) === null || a === void 0 ? void 0 : a.trim();
  }
  return r = r?.replace(/\n/g, "  "), Number(r?.length) > 30 && (r = `${r?.substring(0, 29)}…`), r ? `(label=${r})` : "";
}
function wf(e, t) {
  return (e & t) > 0;
}
function it(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
class jw {
  init(t) {
    const r = this.getTarget(t), [, n] = va(null, r), o = this.getEventInit();
    return fa(t, r), t.dispatchUIEvent(r, "pointerover", o), n.forEach((a) => t.dispatchUIEvent(a, "pointerenter", o)), this;
  }
  move(t, r) {
    const n = this.position, o = this.getTarget(t);
    if (this.position = r, !cm(n, r))
      return;
    const a = this.getTarget(t), i = this.getEventInit(-1), [l, c] = va(o, a);
    return {
      leave: () => {
        Ci(t, o) && o !== a && (t.dispatchUIEvent(o, "pointerout", i), l.forEach((u) => t.dispatchUIEvent(u, "pointerleave", i)));
      },
      enter: () => {
        fa(t, a), o !== a && (t.dispatchUIEvent(a, "pointerover", i), c.forEach((u) => t.dispatchUIEvent(u, "pointerenter", i)));
      },
      move: () => {
        t.dispatchUIEvent(a, "pointermove", i);
      }
    };
  }
  down(t, r = 0) {
    if (this.isDown)
      return;
    const n = this.getTarget(t);
    fa(t, n), this.isDown = !0, this.isPrevented = !t.dispatchUIEvent(n, "pointerdown", this.getEventInit(r));
  }
  up(t, r = 0) {
    if (!this.isDown)
      return;
    const n = this.getTarget(t);
    fa(t, n), this.isPrevented = !1, this.isDown = !1, t.dispatchUIEvent(n, "pointerup", this.getEventInit(r));
  }
  release(t) {
    const r = this.getTarget(t), [n] = va(r, null), o = this.getEventInit();
    Ci(t, r) && (t.dispatchUIEvent(r, "pointerout", o), n.forEach((a) => t.dispatchUIEvent(a, "pointerleave", o))), this.isCancelled = !0;
  }
  getTarget(t) {
    var r;
    return (r = this.position.target) !== null && r !== void 0 ? r : t.config.document.body;
  }
  getEventInit(t) {
    return {
      ...this.position.coords,
      pointerId: this.pointerId,
      pointerType: this.pointerType,
      isPrimary: this.isPrimary,
      button: Ts(t),
      buttons: this.buttons.getButtons()
    };
  }
  constructor({ pointerId: t, pointerType: r, isPrimary: n }, o) {
    it(this, "pointerId", void 0), it(this, "pointerType", void 0), it(this, "isPrimary", void 0), it(this, "buttons", void 0), it(this, "isMultitouch", !1), it(this, "isCancelled", !1), it(this, "isDown", !1), it(this, "isPrevented", !1), it(this, "position", {}), this.pointerId = t, this.pointerType = r, this.isPrimary = n, this.isMultitouch = !n, this.buttons = o;
  }
}
function gt(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
class $w {
  isKeyPressed(t) {
    return this.devices.get(t.pointerType).isPressed(t);
  }
  async press(t, r, n) {
    this.devices.get(r.pointerType).addPressed(r), this.buttons.down(r);
    const o = this.getPointerName(r), a = r.pointerType === "touch" ? this.pointers.new(o, r.pointerType, this.buttons) : this.pointers.get(o);
    a.position = n, a.pointerType !== "touch" && (this.mouse.position = n), a.pointerType === "touch" && a.init(t), a.down(t, r.button), a.pointerType !== "touch" && this.mouse.down(t, r, a.isPrevented);
  }
  async move(t, r, n) {
    const o = this.pointers.get(r), a = o.move(t, n), i = o.pointerType === "touch" ? void 0 : this.mouse.move(t, n, o.isPrevented);
    a?.leave(), i?.leave(), a?.enter(), i?.enter(), a?.move(), i?.move();
  }
  async release(t, r, n) {
    const o = this.devices.get(r.pointerType);
    o.removePressed(r), this.buttons.up(r);
    const a = this.pointers.get(this.getPointerName(r)), i = a.isPrevented;
    if (a.position = n, a.pointerType !== "touch" && (this.mouse.position = n), o.countPressed === 0 && a.up(t, r.button), a.pointerType === "touch" && a.release(t), a.pointerType === "touch" && !a.isMultitouch) {
      const l = this.mouse.move(t, n, i);
      l?.leave(), l?.enter(), l?.move(), this.mouse.down(t, r, i);
    }
    if (!a.isMultitouch) {
      const l = this.mouse.move(t, n, i);
      l?.leave(), l?.enter(), l?.move(), this.mouse.up(t, r, i);
    }
  }
  getPointerName(t) {
    return t.pointerType === "touch" ? t.name : t.pointerType;
  }
  getPreviousPosition(t) {
    return this.pointers.has(t) ? this.pointers.get(t).position : void 0;
  }
  resetClickCount() {
    this.mouse.resetClickCount();
  }
  getMouseTarget(t) {
    var r;
    return (r = this.mouse.position.target) !== null && r !== void 0 ? r : t.config.document.body;
  }
  setMousePosition(t) {
    this.mouse.position = t, this.pointers.get("mouse").position = t;
  }
  constructor(t) {
    gt(this, "system", void 0), gt(this, "mouse", void 0), gt(this, "buttons", void 0), gt(this, "devices", new class {
      get(r) {
        var n, o, a;
        return (a = (n = this.registry)[o = r]) !== null && a !== void 0 ? a : n[o] = new Aw();
      }
      constructor() {
        gt(this, "registry", {});
      }
    }()), gt(this, "pointers", new class {
      new(r, n, o) {
        const a = n !== "touch" || !Object.values(this.registry).some((i) => i.pointerType === "touch" && !i.isCancelled);
        return a || Object.values(this.registry).forEach((i) => {
          i.pointerType === n && !i.isCancelled && (i.isMultitouch = !0);
        }), this.registry[r] = new jw({
          pointerId: this.nextId++,
          pointerType: n,
          isPrimary: a
        }, o), this.registry[r];
      }
      get(r) {
        if (!this.has(r))
          throw new Error(`Trying to access pointer "${r}" which does not exist.`);
        return this.registry[r];
      }
      has(r) {
        return r in this.registry;
      }
      constructor() {
        gt(this, "registry", {}), gt(this, "nextId", 1);
      }
    }()), this.system = t, this.buttons = new lm(), this.mouse = new Nw(), this.pointers.new("mouse", "mouse", this.buttons);
  }
}
function Cf(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
class fm {
  getUIEventModifiers() {
    return {
      altKey: this.keyboard.modifiers.Alt,
      ctrlKey: this.keyboard.modifiers.Control,
      metaKey: this.keyboard.modifiers.Meta,
      shiftKey: this.keyboard.modifiers.Shift,
      modifierAltGraph: this.keyboard.modifiers.AltGraph,
      modifierCapsLock: this.keyboard.modifiers.CapsLock,
      modifierFn: this.keyboard.modifiers.Fn,
      modifierFnLock: this.keyboard.modifiers.FnLock,
      modifierNumLock: this.keyboard.modifiers.NumLock,
      modifierScrollLock: this.keyboard.modifiers.ScrollLock,
      modifierSymbol: this.keyboard.modifiers.Symbol,
      modifierSymbolLock: this.keyboard.modifiers.SymbolLock
    };
  }
  constructor() {
    Cf(this, "keyboard", new Tw(this)), Cf(this, "pointer", new $w(this));
  }
}
async function Uw(e) {
  const t = [];
  return this.config.skipHover || t.push({
    target: e
  }), t.push({
    keys: "[MouseLeft]",
    target: e
  }), this.pointer(t);
}
async function Hw(e) {
  return this.pointer([
    {
      target: e
    },
    "[MouseLeft][MouseLeft]"
  ]);
}
async function zw(e) {
  return this.pointer([
    {
      target: e
    },
    "[MouseLeft][MouseLeft][MouseLeft]"
  ]);
}
async function Vw(e) {
  return this.pointer({
    target: e
  });
}
async function Ww(e) {
  return fa(this, this.system.pointer.getMouseTarget(this)), this.pointer({
    target: e.ownerDocument.body
  });
}
async function Kw({ shift: e } = {}) {
  return this.keyboard(e === !0 ? "{Shift>}{Tab}{/Shift}" : e === !1 ? "[/ShiftLeft][/ShiftRight]{Tab}" : "{Tab}");
}
var el = /* @__PURE__ */ (function(e) {
  return e["{"] = "}", e["["] = "]", e;
})(el || {});
function pm(e, t) {
  let r = 0;
  const n = e[r] in el ? e[r] : "";
  r += n.length;
  const a = new RegExp(`^\\${n}{2}`).test(e) ? "" : n;
  return {
    type: a,
    ...a === "" ? Qw(e, r, t) : Gw(e, r, a, t)
  };
}
function Qw(e, t, r) {
  const n = e[t];
  return mm(n, e, t, r), t += n.length, {
    consumedLength: t,
    descriptor: n,
    releasePrevious: !1,
    releaseSelf: !0,
    repeat: 1
  };
}
function Gw(e, t, r, n) {
  var o, a;
  const i = e[t] === "/" ? "/" : "";
  t += i.length;
  const l = r === "{" && e[t] === "\\";
  t += Number(l);
  const c = l ? e[t] : (o = e.slice(t).match(r === "{" ? /^\w+|^[^}>/]/ : /^\w+/)) === null || o === void 0 ? void 0 : o[0];
  mm(c, e, t, n), t += c.length;
  var u;
  const p = (u = (a = e.slice(t).match(/^>\d+/)) === null || a === void 0 ? void 0 : a[0]) !== null && u !== void 0 ? u : "";
  t += p.length;
  const f = e[t] === "/" || !p && e[t] === ">" ? e[t] : "";
  t += f.length;
  const s = el[r], m = e[t] === s ? s : "";
  if (!m)
    throw new Error(hm([
      !p && "repeat modifier",
      !f && "release modifier",
      `"${s}"`
    ].filter(Boolean).join(" or "), e[t], e, n));
  return t += m.length, {
    consumedLength: t,
    descriptor: c,
    releasePrevious: !!i,
    repeat: p ? Math.max(Number(p.substr(1)), 1) : 1,
    releaseSelf: Yw(f, p)
  };
}
function mm(e, t, r, n) {
  if (!e)
    throw new Error(hm("key descriptor", t[r], t, n));
}
function Yw(e, t) {
  if (e)
    return e === "/";
  if (t)
    return !1;
}
function hm(e, t, r, n) {
  return `Expected ${e} but found "${t ?? ""}" in "${r}"
    See ${n === "pointer" ? "https://testing-library.com/docs/user-event/pointer#pressing-a-button-or-touching-the-screen" : "https://testing-library.com/docs/user-event/keyboard"}
    for more information about how userEvent parses your input.`;
}
function Xw(e, t) {
  const r = [];
  do {
    const { type: o, descriptor: a, consumedLength: i, releasePrevious: l, releaseSelf: c = !0, repeat: u } = pm(t, "keyboard");
    var n;
    const p = (n = e.find((f) => {
      if (o === "[") {
        var s;
        return ((s = f.code) === null || s === void 0 ? void 0 : s.toLowerCase()) === a.toLowerCase();
      } else if (o === "{") {
        var m;
        return ((m = f.key) === null || m === void 0 ? void 0 : m.toLowerCase()) === a.toLowerCase();
      }
      return f.key === a;
    })) !== null && n !== void 0 ? n : {
      key: "Unknown",
      code: "Unknown",
      [o === "[" ? "code" : "key"]: a
    };
    r.push({
      keyDef: p,
      releasePrevious: l,
      releaseSelf: c,
      repeat: u
    }), t = t.slice(i);
  } while (t);
  return r;
}
async function Zw(e) {
  const t = Xw(this.config.keyboardMap, e);
  for (let r = 0; r < t.length; r++)
    await fr(this.config), await Jw(this, t[r]);
}
async function Jw(e, { keyDef: t, releasePrevious: r, releaseSelf: n, repeat: o }) {
  const { system: a } = e;
  if (a.keyboard.isKeyPressed(t) && await a.keyboard.keyup(e, t), !r) {
    for (let i = 1; i <= o; i++)
      await a.keyboard.keydown(e, t), i < o && await fr(e.config);
    n && await a.keyboard.keyup(e, t);
  }
}
async function eC(e) {
  for (const t of e.system.keyboard.getPressedKeys())
    await e.system.keyboard.keyup(e, t);
}
function vm(e) {
  const t = Ge(e) ? {
    "text/plain": tC(e)
  } : {
    "text/plain": String(e.ownerDocument.getSelection())
  }, r = Gs(He(e));
  for (const n in t)
    t[n] && r.setData(n, t[n]);
  return r;
}
function tC(e) {
  const t = xa(e);
  return Ye(e).substring(t.startOffset, t.endOffset);
}
async function rC() {
  const e = this.config.document;
  var t;
  const r = (t = e.activeElement) !== null && t !== void 0 ? t : (
    /* istanbul ignore next */
    e.body
  ), n = vm(r);
  if (n.items.length !== 0)
    return this.dispatchUIEvent(r, "copy", {
      clipboardData: n
    }) && this.config.writeToClipboard && await Up(e, n), n;
}
async function nC() {
  const e = this.config.document;
  var t;
  const r = (t = e.activeElement) !== null && t !== void 0 ? t : (
    /* istanbul ignore next */
    e.body
  ), n = vm(r);
  if (n.items.length !== 0)
    return this.dispatchUIEvent(r, "cut", {
      clipboardData: n
    }) && this.config.writeToClipboard && await Up(r.ownerDocument, n), n;
}
async function oC(e) {
  const t = this.config.document;
  var r;
  const n = (r = t.activeElement) !== null && r !== void 0 ? r : (
    /* istanbul ignore next */
    t.body
  );
  var o;
  const a = (o = typeof e == "string" ? aC(t, e) : e) !== null && o !== void 0 ? o : await qE(t).catch(() => {
    throw new Error("`userEvent.paste()` without `clipboardData` requires the `ClipboardAPI` to be available.");
  });
  this.dispatchUIEvent(n, "paste", {
    clipboardData: a
  });
}
function aC(e, t) {
  const r = Gs(He(e));
  return r.setData("text", t), r;
}
function _f(e, t) {
  const r = [];
  do {
    const { descriptor: n, consumedLength: o, releasePrevious: a, releaseSelf: i = !0 } = pm(t, "pointer"), l = e.find((c) => c.name === n);
    l && r.push({
      keyDef: l,
      releasePrevious: a,
      releaseSelf: i
    }), t = t.slice(o);
  } while (t);
  return r;
}
async function iC(e) {
  const { pointerMap: t } = this.config, r = [];
  (Array.isArray(e) ? e : [
    e
  ]).forEach((n) => {
    typeof n == "string" ? r.push(..._f(t, n)) : "keys" in n ? r.push(..._f(t, n.keys).map((o) => ({
      ...n,
      ...o
    }))) : r.push(n);
  });
  for (let n = 0; n < r.length; n++)
    await fr(this.config), await sC(this, r[n]);
  this.system.pointer.resetClickCount();
}
async function sC(e, t) {
  var r, n;
  const o = "pointerName" in t && t.pointerName ? t.pointerName : "keyDef" in t ? e.system.pointer.getPointerName(t.keyDef) : "mouse", a = e.system.pointer.getPreviousPosition(o);
  var i, l, c, u;
  const p = {
    target: (i = t.target) !== null && i !== void 0 ? i : lC(e, a),
    coords: (l = t.coords) !== null && l !== void 0 ? l : a?.coords,
    caret: {
      node: (c = t.node) !== null && c !== void 0 ? c : Pf(t) || a == null || (r = a.caret) === null || r === void 0 ? void 0 : r.node,
      offset: (u = t.offset) !== null && u !== void 0 ? u : Pf(t) || a == null || (n = a.caret) === null || n === void 0 ? void 0 : n.offset
    }
  };
  "keyDef" in t ? (e.system.pointer.isKeyPressed(t.keyDef) && (da(e, Le.Trigger), await e.system.pointer.release(e, t.keyDef, p)), t.releasePrevious || (da(e, Le.Trigger), await e.system.pointer.press(e, t.keyDef, p), t.releaseSelf && (da(e, Le.Trigger), await e.system.pointer.release(e, t.keyDef, p)))) : (da(e, Le.Trigger), await e.system.pointer.move(e, o, p));
}
function Pf(e) {
  var t, r;
  return !!((r = (t = e.target) !== null && t !== void 0 ? t : e.node) !== null && r !== void 0 ? r : e.offset !== void 0);
}
function lC(e, t) {
  if (!t)
    throw new Error("This pointer has no previous position. Provide a target property!");
  var r;
  return (r = t.target) !== null && r !== void 0 ? r : e.config.document.body;
}
async function uC(e) {
  if (!lr(e) || pt(e))
    throw new Error("clear()` is only supported on editable elements.");
  if (Et(e), e.ownerDocument.activeElement !== e)
    throw new Error("The element to be cleared could not be focused.");
  if (tm(e), !ow(e))
    throw new Error("The element content to be cleared could not be selected.");
  dr(this, e, "", "deleteContentBackward");
}
async function cC(e, t) {
  return bm.call(this, !0, e, t);
}
async function dC(e, t) {
  return bm.call(this, !1, e, t);
}
async function bm(e, t, r) {
  if (!e && !t.multiple)
    throw se().getElementError("Unable to deselect an option in a non-multiple select. Use selectOptions to change the selection instead.", t);
  const n = Array.isArray(r) ? r : [
    r
  ], o = Array.from(t.querySelectorAll('option, [role="option"]')), a = n.map((l) => {
    if (typeof l != "string" && o.includes(l))
      return l;
    {
      const c = o.find((u) => u.value === l || u.innerHTML === l);
      if (c)
        return c;
      throw se().getElementError(`Value "${String(l)}" not found in options`, t);
    }
  }).filter((l) => !pt(l));
  if (pt(t) || !a.length) return;
  const i = (l) => {
    l.selected = e, this.dispatchUIEvent(t, "input", {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }), this.dispatchUIEvent(t, "change");
  };
  if (te(t, "select"))
    if (t.multiple)
      for (const l of a) {
        const c = this.config.pointerEventsCheck === 0 ? !0 : Ci(this, l);
        c && (this.dispatchUIEvent(l, "pointerover"), this.dispatchUIEvent(t, "pointerenter"), this.dispatchUIEvent(l, "mouseover"), this.dispatchUIEvent(t, "mouseenter"), this.dispatchUIEvent(l, "pointermove"), this.dispatchUIEvent(l, "mousemove"), this.dispatchUIEvent(l, "pointerdown"), this.dispatchUIEvent(l, "mousedown")), Et(t), c && (this.dispatchUIEvent(l, "pointerup"), this.dispatchUIEvent(l, "mouseup")), i(l), c && this.dispatchUIEvent(l, "click"), await fr(this.config);
      }
    else if (a.length === 1) {
      const l = this.config.pointerEventsCheck === 0 ? !0 : Ci(this, t);
      l ? await this.click(t) : Et(t), i(a[0]), l && (this.dispatchUIEvent(t, "pointerover"), this.dispatchUIEvent(t, "pointerenter"), this.dispatchUIEvent(t, "mouseover"), this.dispatchUIEvent(t, "mouseenter"), this.dispatchUIEvent(t, "pointerup"), this.dispatchUIEvent(t, "mouseup"), this.dispatchUIEvent(t, "click")), await fr(this.config);
    } else
      throw se().getElementError("Cannot select multiple options on a non-multiple select", t);
  else if (t.getAttribute("role") === "listbox")
    for (const l of a)
      await this.click(l), await this.unhover(l);
  else
    throw se().getElementError("Cannot select options on elements that are neither select nor listbox elements", t);
}
async function fC(e, t, { skipClick: r = this.config.skipClick, skipAutoClose: n = this.config.skipAutoClose, initialSelectionStart: o, initialSelectionEnd: a } = {}) {
  e.disabled || (r || await this.click(e), o !== void 0 && ca(e, o, a ?? o), await this.keyboard(t), n || await eC(this));
}
const qf = Symbol("files and value properties are mocked");
function Ji(e, t, r) {
  r ? Object.defineProperty(e, t, r) : delete e[t];
}
function pC(e, t) {
  var r;
  (r = e[qf]) === null || r === void 0 || r.restore();
  const n = Object.getOwnPropertyDescriptor(e, "type"), o = Object.getOwnPropertyDescriptor(e, "value"), a = Object.getOwnPropertyDescriptor(e, "files");
  function i() {
    Ji(e, "type", n), Ji(e, "value", o), Ji(e, "files", a);
  }
  e[qf] = {
    restore: i
  }, Object.defineProperties(e, {
    files: {
      configurable: !0,
      get: () => t
    },
    value: {
      configurable: !0,
      get: () => t.length ? `C:\\fakepath\\${t[0].name}` : "",
      set(l) {
        if (l === "")
          i();
        else {
          var c;
          o == null || (c = o.set) === null || c === void 0 || c.call(e, l);
        }
      }
    },
    type: {
      configurable: !0,
      get: () => "file",
      set(l) {
        l !== "file" && (i(), e.type = l);
      }
    }
  });
}
async function mC(e, t) {
  const r = te(e, "label") ? e.control : e;
  if (!r || !te(r, "input", {
    type: "file"
  }))
    throw new TypeError(`The ${r === e ? "given" : "associated"} ${r?.tagName} element does not accept file uploads`);
  if (pt(e)) return;
  const n = (Array.isArray(t) ? t : [
    t
  ]).filter((a) => !this.config.applyAccept || hC(a, r.accept)).slice(0, r.multiple ? void 0 : 1), o = () => {
    var a;
    n.length === ((a = r.files) === null || a === void 0 ? void 0 : a.length) && n.every((i, l) => {
      var c;
      return i === ((c = r.files) === null || c === void 0 ? void 0 : c.item(l));
    }) || (pC(r, Qs(He(e), n)), this.dispatchUIEvent(r, "input"), this.dispatchUIEvent(r, "change"));
  };
  r.addEventListener("fileDialog", o), await this.click(e), r.removeEventListener("fileDialog", o);
}
function ri(e) {
  return e.toLowerCase().replace(/(\.|\/)jpg\b/g, "$1jpeg");
}
function hC(e, t) {
  if (!t)
    return !0;
  const r = [
    "audio/*",
    "image/*",
    "video/*"
  ];
  return ri(t).trim().split(/\s*,\s*/).some((n) => n.startsWith(".") ? ri(e.name).endsWith(n) : r.includes(n) ? ri(e.type).startsWith(n.replace("*", "")) : ri(e.type) === n);
}
const Tf = {
  click: Uw,
  dblClick: Hw,
  tripleClick: zw,
  hover: Vw,
  unhover: Ww,
  tab: Kw,
  keyboard: Zw,
  copy: rC,
  cut: nC,
  paste: oC,
  pointer: iC,
  clear: uC,
  deselectOptions: dC,
  selectOptions: cC,
  type: fC,
  upload: mC
};
function vC(e) {
  return se().asyncWrapper(e);
}
const ym = {
  applyAccept: !0,
  autoModify: !0,
  delay: 0,
  document: globalThis.document,
  keyboardMap: Sw,
  pointerMap: xw,
  pointerEventsCheck: li.EachApiCall,
  skipAutoClose: !1,
  skipClick: !1,
  skipHover: !1,
  writeToClipboard: !1,
  advanceTimers: () => Promise.resolve()
}, bC = {
  ...ym,
  writeToClipboard: !0
};
function gm(e = {}, t = bC, r) {
  const n = EC(e, r, t);
  return {
    ...t,
    ...e,
    document: n
  };
}
function yC(e = {}) {
  const t = gm(e);
  sm(t.document), im(He(t.document).HTMLElement);
  var r;
  const n = (r = t.document.defaultView) !== null && r !== void 0 ? r : (
    /* istanbul ignore next */
    globalThis.window
  );
  return CE(n), tl(t).api;
}
function Oe({ keyboardState: e, pointerState: t, ...r } = {}, n) {
  const o = gm(r, ym, n);
  sm(o.document), im(He(o.document).HTMLElement);
  var a;
  const i = (a = t ?? e) !== null && a !== void 0 ? a : new fm();
  return {
    api: tl(o, i).api,
    system: i
  };
}
function gC(e) {
  return tl({
    ...this.config,
    ...e
  }, this.system).api;
}
function RC(e, t) {
  function r(...n) {
    return da(e, Le.Call), vC(() => t.apply(e, n).then(async (o) => (await fr(e.config), o)));
  }
  return Object.defineProperty(r, "name", {
    get: () => t.name
  }), r;
}
function tl(e, t = new fm()) {
  const r = {};
  return Object.assign(r, {
    config: e,
    dispatchEvent: am.bind(r),
    dispatchUIEvent: yw.bind(r),
    system: t,
    levelRefs: {},
    ...Tf
  }), {
    instance: r,
    api: {
      ...Object.fromEntries(Object.entries(Tf).map(([n, o]) => [
        n,
        RC(r, o)
      ])),
      setup: gC.bind(r)
    }
  };
}
function EC(e, t, r) {
  var n, o;
  return (o = (n = e.document) !== null && n !== void 0 ? n : t && Cw(t)) !== null && o !== void 0 ? o : r.document;
}
function wC(e) {
  return Oe().api.clear(e);
}
function CC(e, t = {}) {
  return Oe(t, e).api.click(e);
}
function _C(e = {}) {
  return Oe(e).api.copy();
}
function PC(e = {}) {
  return Oe(e).api.cut();
}
function qC(e, t = {}) {
  return Oe(t).api.dblClick(e);
}
function TC(e, t, r = {}) {
  return Oe(r).api.deselectOptions(e, t);
}
function SC(e, t = {}) {
  return Oe(t).api.hover(e);
}
async function xC(e, t = {}) {
  const { api: r, system: n } = Oe(t);
  return r.keyboard(e).then(() => n);
}
async function OC(e, t = {}) {
  const { api: r, system: n } = Oe(t);
  return r.pointer(e).then(() => n);
}
function MC(e, t) {
  return Oe(t).api.paste(e);
}
function AC(e, t, r = {}) {
  return Oe(r).api.selectOptions(e, t);
}
function IC(e, t = {}) {
  return Oe(t).api.tripleClick(e);
}
function kC(e, t, r = {}) {
  return Oe(r, e).api.type(e, t, r);
}
function DC(e, t = {}) {
  const { api: r, system: n } = Oe(t);
  return n.pointer.setMousePosition({
    target: e
  }), r.unhover(e);
}
function NC(e, t, r = {}) {
  return Oe(r).api.upload(e, t);
}
function LC(e = {}) {
  return Oe().api.tab(e);
}
const FC = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clear: wC,
  click: CC,
  copy: _C,
  cut: PC,
  dblClick: qC,
  deselectOptions: TC,
  hover: SC,
  keyboard: xC,
  paste: MC,
  pointer: OC,
  selectOptions: AC,
  tab: LC,
  tripleClick: IC,
  type: kC,
  unhover: DC,
  upload: NC
}, Symbol.toStringTag, { value: "Module" })), Rm = {
  ...FC,
  setup: yC
};
function BC(e, t = {}) {
  return {
    user: Rm.setup(),
    ...Ks(e, t)
  };
}
function jC(e, t, r = {}) {
  const {
    middlewares: n,
    preloadedState: o,
    // Automatically create a store instance if no store was passed in
    store: a = np({ reducer: t, middlewares: n, preloadedState: o }),
    ...i
  } = r, l = ({ children: c }) => /* @__PURE__ */ Pe.jsx(yh, { store: a, children: c });
  return {
    store: a,
    user: Rm.setup(),
    ...Ks(e, { wrapper: l, ...i })
  };
}
const $C = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  renderWithStore: jC,
  renderWithUser: BC
}, Symbol.toStringTag, { value: "Module" }));
function UC(e) {
  window.FreshworksWidget(e);
}
function HC() {
  window.Optanon.ToggleInfoDisplay();
}
const zC = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  configureFreshworksWidget: UC,
  toggleOneTrustInfoDisplay: HC
}, Symbol.toStringTag, { value: "Module" })), V2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  api: eh,
  auth: th,
  form: rh,
  general: nh,
  router: xh,
  schema: oh,
  store: nb,
  test: $C,
  theme: kh,
  window: zC
}, Symbol.toStringTag, { value: "Module" }));
export {
  Ph as AUTH_FACTOR_TAG,
  d2 as BASE_URL,
  bl as CLASS_TAG,
  Q2 as CSRF_COOKIE_NAME,
  p2 as DEV,
  w2 as InactiveDialog,
  c2 as MODE,
  f2 as PROD,
  qh as SCHOOL_TAG,
  Wm as SERVICE_API_URL,
  G2 as SERVICE_NAME,
  Y2 as SESSION_COOKIE_NAME,
  X2 as SESSION_METADATA_COOKIE_NAME,
  m2 as SSR,
  C2 as ScreenTimeDialog,
  P2 as ThemedBox,
  yl as USER_TAG,
  h2 as buildLoginEndpoint,
  _h as buildLogoutEndpoint,
  v2 as createApi,
  Z2 as createSlice,
  b2 as getReadAuthFactorEndpoints,
  y2 as getReadClassEndpoints,
  g2 as getReadSchoolEndpoints,
  R2 as getReadUserEndpoints,
  _2 as logoutMiddleware,
  J2 as schemas,
  e_ as sessionSlice,
  wh as tagTypes,
  q2 as theme,
  zf as themeOptions,
  or as urls,
  t_ as useCountdown,
  r_ as useEventListener,
  n_ as useExternalScript,
  E2 as useInputRef,
  o_ as useLocation,
  a_ as useNavigate,
  i_ as useOAuth2,
  s_ as useOAuth2CodeChallenge,
  l_ as useOAuth2State,
  u_ as usePagination,
  c_ as useParams,
  d_ as useParamsRequired,
  f_ as useSearchParams,
  p_ as useSession,
  m_ as useSessionMetadata,
  V2 as utils,
  h_ as vite
};
//# sourceMappingURL=index.es.js.map
